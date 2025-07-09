import { ComponentPropsWithoutRef, forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  hasError?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default Input;
