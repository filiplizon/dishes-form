import { inputStyle } from "./styles";

const required = (value: string | undefined): string | undefined =>
  value ? undefined : "This field is required";

export const getFields = (selectedType: string, spiciness: string) => {
  const commonFields = [
    {
      index: 0,
      name: "name",
      label: "Dish name:",
      className: inputStyle,
      component: "input",
      type: "text",
      validate: required,
      placeholder: "Enter dish name",
      step: undefined,
    },
    {
      index: 1,
      name: "preparation_time",
      label: "Preparation time:",
      className: inputStyle,
      component: "input",
      type: "text",
      validate: required,
      placeholder: "Enter preparation time (HH:MM:SS)",
    },
    {
      index: 2,
      name: "type",
      label: "Dish type:",
      className: inputStyle,
      component: "select",
      validate: required,
      value: undefined,
      options: [
        { value: "", label: "Select a type..." },
        { value: "pizza", label: "Pizza" },
        { value: "soup", label: "Soup" },
        { value: "sandwich", label: "Sandwich" },
      ],
      min: undefined,
      max: undefined,
      defaultValue: undefined,
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
          validate: required,
          min: "0",
          placeholder: "Enter the number of slices",
          options: undefined,
          defaultValue: undefined,
        },
        {
          index: 4,
          name: "diameter",
          label: "Diameter:",
          className: inputStyle,
          component: "input",
          type: "number",
          validate: required,
          min: "0",
          step: "0.01",
          max: undefined,
          placeholder: "Enter the diameter",
          value: undefined,
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
          validate: required,
          min: "0",
          max: "10",
          defaultValue: spiciness,
          value: spiciness,
          placeholder: undefined,
          options: undefined,
          step: undefined,
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
          validate: required,
          min: "0",
          max: undefined,
          placeholder: "Enter the number of slices",
          value: undefined,
          options: undefined,
          defaultValue: undefined,
          step: undefined,
        },
      ];
    default:
      return commonFields;
  }
};
