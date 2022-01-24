import { createStyles, makeStyles } from "@material-ui/core";
import { TangoButton, ThemeCard } from "../utils/styledComponents";
import { siteTheme } from "../utils/siteTheme";
import { sortByOptions } from "../mocks/filterSettingData";
import { IFilterSetting } from '../types/components';
import { lazy } from "react";

const SelectOptions = lazy(() => import("./SelectOptions"));

const useStyles = makeStyles(() =>
  createStyles({
    filterButton: {
      marginTop: siteTheme.margin.medium,
      float: "right"
    },
  })
);

const FilterSetting = ({
  colors,
  manufacturers,
  handleFilter,
  color,
  handleColorChange,
  manufacturer,
  handleManufacturerChange,
  sortBy,
  handleSortByChange,
  sort,
}: IFilterSetting): JSX.Element => {
  const {filterButton} = useStyles();

  return (
    <ThemeCard>
      <SelectOptions
        label="Color"
        placeholder="All car colors"
        currentValue={color}
        options={colors}
        handleChange={handleColorChange}
      ></SelectOptions>
      <SelectOptions
        label="Manufacturer"
        placeholder="All manufacturers"
        currentValue={manufacturer}
        options={manufacturers}
        handleChange={handleManufacturerChange}
      ></SelectOptions>
      <SelectOptions
        label="Sort by"
        placeholder="None"
        currentValue={sortBy}
        options={sortByOptions}
        handleChange={handleSortByChange}
      ></SelectOptions>
      <TangoButton
        className={filterButton}
        onClick={() =>
          handleFilter({
            params: { color: color, manufacturer: manufacturer, sort: sort, page: 1 },
          })
        }>
        Filter
      </TangoButton>
    </ThemeCard>
  );
};

export default FilterSetting;