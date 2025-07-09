import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export default function Checkbox({ label, ...props }: Props) {
  return (
    <label>
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
}
