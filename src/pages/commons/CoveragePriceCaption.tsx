import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import LocaleContext from "../../context/LocaleContext";
import Caption from "../../components/Caption";

type CoveragePriceCaptionProps = {
  coverage: number;
  price: number;
};

const CoveragePriceCaption = ({
  coverage,
  price,
}: CoveragePriceCaptionProps) => {
  const { currencyFormat } = useContext(LocaleContext);

  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <Caption>{`Coverage: ${currencyFormat(coverage)}`}</Caption>
      </Grid>
      <Grid item md={6}>
        <Caption>{`Price: ${currencyFormat(price)}`}</Caption>
      </Grid>
    </Grid>
  );
};

export default CoveragePriceCaption;
