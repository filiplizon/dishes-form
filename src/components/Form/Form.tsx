import React, { useCallback, useState } from "react";
import { Form, FormRenderProps } from "react-final-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { formStyle } from "@/utils/styles";
import { getFields } from "@/utils/helpers";
import { Values } from "@/utils/types";

const DishForm = () => {
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [spiciness, setSpiciness] = useState<string>("0");

  const handleFocusChange = useCallback((index: number | null) => {
    setSelectedElement(index);
  }, []);

  const handleSpicinessChange = useCallback(
    ({ target: { type, value } }: React.ChangeEvent<HTMLInputElement>) => {
      type === "range" && setSpiciness(value);
    },
    []
  );

  const onSubmit = async (values: Values, form: any) => {
    const response = await fetch(
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    form.restart();
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, values }: FormRenderProps<Values>) => (
        <form className={formStyle} onSubmit={handleSubmit}>
          {getFields(values.type, spiciness).map(field => (
            <Input
              key={field.name}
              index={field.index}
              selectedElement={selectedElement}
              label={field.label}
              name={field.name}
              className={field.className}
              component={field.component}
              type={field.type}
              validate={field.validate}
              options={field.options}
              step={field.step}
              onFocus={() => handleFocusChange(field.index)}
              onBlur={() => handleFocusChange(null)}
              placeholder={field.placeholder}
              min={field.min}
              max={field.max}
              defaultValue={field.defaultValue}
              value={field.value}
              onMouseUp={handleSpicinessChange}
            />
          ))}
          <Button />
        </form>
      )}
    </Form>
  );
};

export default DishForm;
