import React, { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

type ElementCardProps = {
  title: string;
  subTitle?: string;
  children?: ReactNode;
  avatar?: ReactNode;
  actions?: ReactNode;
};

const ElementCard = (props: ElementCardProps) => {
  const { title, subTitle, avatar, children, actions } = props;

  return (
    <Card sx={{ m: 2 }}>
      <CardHeader avatar={avatar} title={title} subheader={subTitle} />
      <CardContent>{children}</CardContent>
      <CardActions disableSpacing>{actions}</CardActions>
    </Card>
  );
};

export default ElementCard;
