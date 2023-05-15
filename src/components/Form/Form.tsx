import React, { useCallback, useEffect, useState } from "react";
import { Form, FormRenderProps } from "react-final-form";
import Button from "../Button/Button";
import { formStyle } from "@/utils/styles";
import { getFields, API_URL } from "@/utils/helpers";
import { Values } from "@/utils/types";
import InputField from "../Input/Input";
import Title from "../Title/Title";
import { FormApi } from "final-form";

const DishForm = () => {
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [spiciness, setSpiciness] = useState<string>("1");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleFocusChange = useCallback((index: number | null) => {
    setSelectedElement(index);
  }, []);

  const handleSpicinessChange = useCallback(
    ({ target: { type, value } }: React.ChangeEvent<HTMLInputElement>) => {
      type === "range" && setSpiciness(value);
    },
    []
  );

  const onSubmit = async (values: Values, form: FormApi<Values>) => {
    if (values.type !== "soup") {
      delete values.spiciness_scale;
    }
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      alert(`Response from server: ${JSON.stringify(data, null, 2)}`);
      form.restart();
      setErrors({});
      setSpiciness("1");
    } else {
      setErrors(data);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, values }: FormRenderProps<Values>) => (
        <form className={formStyle} onSubmit={handleSubmit}>
          <Title />
          {getFields(values.type, spiciness).map(field => (
            <InputField
              key={field.name}
              index={field.index}
              selectedElement={selectedElement}
              label={field.label}
              name={field.name || ""}
              className={field.className}
              component={field.component}
              type={field.type}
              options={field.options}
              step={field.step}
              onFocus={() => handleFocusChange(field.index ?? null)}
              onBlur={() => handleFocusChange(null)}
              placeholder={field.placeholder}
              min={field.min}
              max={field.max}
              defaultValue={field.defaultValue}
              value={field.value}
              onMouseUp={handleSpicinessChange}
              onTouchEnd={handleSpicinessChange}
              errors={errors}
            />
          ))}
          <Button />
        </form>
      )}
    </Form>
  );
};

export default DishForm;
