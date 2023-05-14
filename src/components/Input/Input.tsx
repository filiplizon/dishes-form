import { inputWrapperStyle, labelStyle } from "@/utils/styles";
import { Input } from "@/utils/types";
import { Field } from "react-final-form";

const Input = ({
  index,
  selectedElement,
  label,
  name,
  className,
  component,
  type,
  validate,
  min,
  max,
  placeholder,
  onFocus,
  onBlur,
  onMouseUp,
  defaultValue,
  value,
  options,
  step,
}: Input) => {
  return (
    <div
      className={`${inputWrapperStyle} ${
        index === selectedElement ? "border-gray-800" : "border-gray"
      }`}
    >
      <label className={labelStyle} htmlFor={name}>
        {type === "range" ? `${label} ${value}` : label}
      </label>
      <Field
        className={className}
        name={name}
        component={component}
        type={type}
        validate={validate}
        min={min}
        max={max}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseUp={onMouseUp}
        onTouchEnd={onMouseUp}
        step={step}
      >
        {options?.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default Input;
