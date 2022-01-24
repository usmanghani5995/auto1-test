import { createStyles, makeStyles, Typography } from "@material-ui/core";
import { Heading } from "../utils/styledComponents";
import { siteTheme } from '../utils/siteTheme';
import { ICarList } from '../types/components';
import { lazy } from "react";

const CarCard = lazy(() => import("./CarCard"));


const useStyles = makeStyles(() =>
  createStyles({
    pageInfo:{
      font: siteTheme.typography.largeNormal,
      marginBottom: siteTheme.margin.medium,
      marginTop: siteTheme.margin.medium,
    }
  }));

const CarList = ({loading, carsData}: ICarList): JSX.Element => {
  const {pageInfo} = useStyles();
  return (
    <>
      <Heading>Available cars</Heading>
      <Typography className={pageInfo}>
        {loading
          ? "loading..."
          : `Showing ${carsData?.cars?.length} of ${carsData?.totalCarsCount} results`}
      </Typography>
      {
        carsData?.cars?.map((car) => {
          return (
            <CarCard
              key={car?.stockNumber}
              isLoading={loading}
              stockNumber={car?.stockNumber}
              manufacturerName={car?.manufacturerName}
              modelName={car?.modelName}
              mileage={car?.mileage}
              fuelType={car?.fuelType}
              color={car?.color}
              pictureUrl={car?.pictureUrl}
            />
          );
        })
      }
    </>

  );
}

export default CarList;