import { ComponentPropsWithoutRef } from "react";

const Card = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} />;
};

Card.Body = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} />;
};

Card.Header = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} />;
};

export default Card;
