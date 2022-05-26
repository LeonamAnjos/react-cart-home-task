import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

type ElementButtonProps = ButtonProps;

const ElementButton = (props: ElementButtonProps) => {
  return <Button {...props} />;
};

export default ElementButton;
