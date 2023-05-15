import { DishType } from "./enums";
import { inputStyle } from "./styles";
import { Input } from "./types";

export const API_URL =
  "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

const dishTypeOptions = [
  { value: "", label: "Select a type..." },
  { value: DishType.Pizza, label: "Pizza" },
  { value: DishType.Soup, label: "Soup" },
  { value: DishType.Sandwich, label: "Sandwich" },
];

export const getFields = (selectedType: string, spiciness: string) => {
  const commonFields: Partial<Input>[] = [
    {
      index: 0,
      name: "name",
      label: "Dish name:",
      className: inputStyle,
      component: "input",
      type: "text",
      placeholder: "Enter dish name",
    },
    {
      index: 1,
      name: "preparation_time",
      label: "Preparation time:",
      className: inputStyle,
      component: "input",
      type: "time",
      step: "1",
    },
    {
      index: 2,
      name: "type",
      label: "Dish type:",
      className: inputStyle,
      component: "select",
      options: dishTypeOptions,
    },
  ];

  switch (selectedType) {
    case "pizza":
      return [
        ...commonFields,
        {
          index: 3,
          name: "no_of_slices",
          label: "Number of slices:",
          className: inputStyle,
          component: "input",
          type: "number",
          min: "0",
          placeholder: "Enter the number of slices",
        },
        {
          index: 4,
          name: "diameter",
          label: "Diameter:",
          className: inputStyle,
          component: "input",
          type: "number",
          min: "0",
          step: "0.01",
          placeholder: "Enter the diameter",
        },
      ];
    case "soup":
      return [
        ...commonFields,
        {
          index: 5,
          name: "spiciness_scale",
          label: "Spiciness scale:",
          className: `${inputStyle} accent-gray-800`,
          component: "input",
          type: "range",
          min: "1",
          max: "10",
          defaultValue: spiciness,
          value: spiciness,
        },
      ];
    case "sandwich":
      return [
        ...commonFields,
        {
          index: 6,
          name: "slices_of_bread",
          label: "Number of slices:",
          className: inputStyle,
          component: "input",
          type: "number",
          min: "0",
          placeholder: "Enter the number of slices",
        },
      ];
    default:
      return commonFields;
  }
};

export const formatErrorMessage = (errorMessage: string) => {
  const formattedMessage =
    errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);

  return formattedMessage.endsWith(".")
    ? formattedMessage
    : formattedMessage + ".";
};
