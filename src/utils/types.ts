export type Values = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
};

export type Input = {
  index: number;
  selectedElement: number | null;
  label: string;
  name: string;
  className: string;
  component: any;
  type?: string;
  validate: (value: any) => any;
  min?: string;
  max?: string;
  placeholder?: string;
  onFocus: () => void;
  onBlur: () => void;
  onMouseUp?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  value?: string;
  options?: Array<{ value: string; label: string }>;
  step?: string;
};
