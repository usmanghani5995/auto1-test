import { ChangeEvent, SyntheticEvent } from "react";

export interface ICarCard {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  isLoading?: boolean;
  mileage: {
    number: number;
    unit: string;
  };
  fuelType: string;
  color: string;
  pictureUrl: string;
};

export interface ICarDetail {
  stockNumber: number;
    manufacturerName: string,
      modelName: string,
        mileage: {
  number: number,
    unit: string,
    },
fuelType: string,
  color: string,

};

export interface ICarList {
  loading: boolean, 
  carsData: ICarsDetail 
}

export interface IChangeEvent {
  name?: string | undefined;
  value: unknown;
}

export interface IFilterSetting {
  colors: Array<string>;
  manufacturers: Array<string>;
  handleFilter: (data: IHandleFilter ) => void;
  color: string;
  handleColorChange: (event: ChangeEvent<IChangeEvent>) => void;
  manufacturer: string
  handleManufacturerChange: (event: ChangeEvent<IChangeEvent>) => void;
  sortBy: string;
  handleSortByChange: (event: ChangeEvent<IChangeEvent>) => void;
  sort: string;
}

export interface IHandleFilter {
  params: { color: string; manufacturer: string; sort: string; page: number };
}

export interface ISelectOptions {
  currentValue: string; 
  handleChange: (event: ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => void; 
  options: Array<string>;
  label: string;
  placeholder: string;
}

export interface ICarsDetail {
  cars: Array<ICarCard>,
  totalPageCount: number,
  totalCarsCount: number,
}