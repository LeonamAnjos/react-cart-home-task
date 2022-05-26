import React, { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

type ShellProps = {
  toolbarContent: ReactNode;
  children: ReactNode;
};

const Shell = (props: ShellProps) => {
  const { toolbarContent, children } = props;

  return (
    <>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>{toolbarContent}</Toolbar>
      </AppBar>

      <Container>{children}</Container>
    </>
  );
};

export default Shell;
