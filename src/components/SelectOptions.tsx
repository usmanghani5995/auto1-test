import { Box, createStyles, makeStyles, MenuItem, Select, Typography } from "@material-ui/core";
import { siteTheme } from "../utils/siteTheme";
import { ISelectOptions } from '../types/components';

const useStyles = makeStyles(() =>
  createStyles({
    selectLabel: {
      font: siteTheme.typography.small 
    },
    list: {
      padding: "0px",
      "& .MuiButtonBase-root": {
        border: siteTheme.border.gray93Border,
      },
      "& .MuiButtonBase-root:hover": {
        backgroundColor: "#EA7F28",
        color: "white",
      },
      "& .MuiButtonBase-root:focus": {
        backgroundColor: "white",
        color: "black",
      },
    },
    icon: {
      fill: "rgb(215 215 215)",
      height: "30px",
      width: "34px",
    },
    paper: {
      borderRadius: "0px",
      boxShadow: "none",
    },
    root: {
      borderRadius: "0px",
      paddingLeft: "16px",
      marginTop: "12px",
    },
    select: {
      "&:before": {
        border: siteTheme.border.gray93Border,
        paddingTop: "16px",
      },
      "&:after": {
        borderBottom: siteTheme.border.gray93Border,
      },
      "&:not(.Mui-disabled):hover::before": {
        borderBottom: siteTheme.border.gray93Border,
      },
    },
  })
);

const SelectOptions = ({ currentValue, handleChange, options, label, placeholder }:ISelectOptions) => {
  const { select, paper, list, icon, root, selectLabel} = useStyles();
  return (
    <Box mb="12px">
      <Typography className={selectLabel}>{label}</Typography>
      <Select
        fullWidth
        value={currentValue}
        onChange={(event) => handleChange(event)}
        displayEmpty
        className={select}
        MenuProps={{
          classes: {
            paper: paper,
            list: list,
          },
        }}
        inputProps={{
          classes: {
            icon: icon,
            root: root,
          },
        }}
      >
        <MenuItem key="uniqueFrist" value="">{placeholder}</MenuItem>
        {options?.map((option: string) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};


export default SelectOptions;