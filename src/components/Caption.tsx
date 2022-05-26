import React from "react";
import Typography, { TypographyTypeMap } from "@mui/material/Typography";

type CaptionProps = Omit<TypographyTypeMap["props"], "noWrap" | "component">;

const Caption = (props: CaptionProps) => {
  return (
    <Typography
      {...props}
      noWrap
      component="div"
      sx={{ ...props.sx, display: { xs: "none", sm: "block" } }}
    />
  );
};

export default Caption;
