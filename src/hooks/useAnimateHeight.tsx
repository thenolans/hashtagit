import { useState } from "react";
import { useId } from "react-id-generator";

export default function useAnimateHeight(defaultIsExpanded?: boolean) {
  const [height, setHeight] = useState<"auto" | 0>(
    defaultIsExpanded ? "auto" : 0
  );
  const [containerId] = useId();
  const isExpanded = height === "auto";
  const toggleHeight = () => setHeight(isExpanded ? 0 : "auto");

  const triggerProps = {
    "aria-controls": containerId,
    "aria-expanded": isExpanded,
    onClick: toggleHeight,
  };

  const containerProps = {
    id: containerId,
    duration: 500,
    height,
  };

  return { triggerProps, containerProps, isExpanded };
}
