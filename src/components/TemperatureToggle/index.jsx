import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";

const useStyles = makeStyles(styles);

const TemperatureToggle = ({ units, onToggleUnits }) => {
  const classes = useStyles();

  const handleChange = useCallback(
    (event) => {
      onToggleUnits(event.target.value);
    },
    [onToggleUnits]
  );

  return (
    <div>
      <RadioGroup
        className={classes.root}
        name="units"
        value={units}
        onChange={handleChange}
      >
        <FormControlLabel value="celsius" control={<Radio />} label="Celsius" />
        <FormControlLabel
          value="fahrenheit"
          control={<Radio />}
          label="Fahrenheit"
        />
      </RadioGroup>
    </div>
  );
};

TemperatureToggle.propTypes = {
  units: PropTypes.string,
  onToggleUnits: PropTypes.func,
};

export default TemperatureToggle;
