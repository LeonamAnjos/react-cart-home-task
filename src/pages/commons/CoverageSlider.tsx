import React from "react";
import Slider from "@mui/material/Slider";

const stepSlider = 10;

export type CoverageSliderProps = {
  initialCoverage?: number | undefined;
  minCoverage: number;
  maxCoverage: number;
  onCoverageChange?: (coverage: number) => void | undefined;
};

const CoverageSlider = ({
  initialCoverage,
  minCoverage,
  maxCoverage,
  onCoverageChange,
}: CoverageSliderProps) => {
  const [coverage, setCoverage] = React.useState<number>(
    initialCoverage ?? maxCoverage
  );

  const handleChange = (_: Event, newValue: number | number[]): void => {
    if (typeof newValue === "number") {
      setCoverage(newValue);
      onCoverageChange && onCoverageChange(newValue);
    }
  };

  return (
    <Slider
      value={coverage}
      min={minCoverage}
      max={maxCoverage}
      step={stepSlider}
      valueLabelDisplay="auto"
      onChange={handleChange}
      data-testid="coverage-slider"
    />
  );
};

export default CoverageSlider;
