import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

import HashtagitLogo from "../../assets/logo512.png";

export default function Logo({ className }: ComponentPropsWithoutRef<"img">) {
  return (
    <img
      className={classNames(className, "w-16")}
      src={HashtagitLogo}
      alt="Hashtagit"
    />
  );
}
