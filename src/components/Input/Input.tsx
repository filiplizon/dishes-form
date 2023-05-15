import { formatErrorMessage } from "@/utils/helpers";
import { errorStyle, inputWrapperStyle, labelStyle } from "@/utils/styles";
import { Input } from "@/utils/types";
import { Field } from "react-final-form";

const InputField = ({
  index,
  selectedElement,
  errors,
  ...inputProps
}: Input) => {
  const { label, value, name, options } = inputProps;
  const errorMessages = errors[name] || [];
  const hasError = errorMessages.length > 0;

  const wrapperStyle = `${inputWrapperStyle} ${
    index === selectedElement ? "border-gray-800" : "border-gray"
  } ${hasError ? "border-red-500 mb-0" : ""}`;

  return (
    <>
      <div className={wrapperStyle}>
        <label className={labelStyle} htmlFor={name}>
          {inputProps.type === "range" ? `${label} ${value}` : label}
        </label>
        <Field className={inputProps.className} {...inputProps}>
          {options?.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Field>
      </div>
      {errorMessages.map((errorMessage, index) => (
        <p key={index} className={errorStyle}>
          {formatErrorMessage(errorMessage)}
        </p>
      ))}
    </>
  );
};

export default InputField;
