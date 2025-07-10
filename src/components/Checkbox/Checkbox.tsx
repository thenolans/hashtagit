import { Icon } from "@thenolans/nolan-ui";
import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export default function Checkbox({ label, ...props }: Props) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div
        className={classNames(
          "w-4 h-4 rounded border-2 flex items-center justify-center shrink-0",
          props.checked
            ? "border-primary-700 hover:border-primary-400 hover:text-primary-400 text-primary-700"
            : "border-gray-200 hover:border-gray-400"
        )}
      >
        {props.checked && <Icon size={16} strokeWidth={4} icon="Check" />}
      </div>
      <div className="overflow-hidden text-ellipsis text-gray-600 text-sm">
        {label}
      </div>
      <input className="hidden" type="checkbox" {...props} />
    </label>
  );
}
