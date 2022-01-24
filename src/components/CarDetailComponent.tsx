import { Box, Grid, Typography, createStyles } from '@material-ui/core';
import { siteTheme } from "../utils/siteTheme";
import { TangoButton, ThemeCard } from "../utils/styledComponents";
import { ICarDetail } from '../types/components';
import { SyntheticEvent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    carDetailHero: {
      background: siteTheme.color.gray93,
      height:"30vh"
    }, 
    carDetailWrapper: {
      width: "70%",
      margin: `${siteTheme.margin.large} auto`,
      height: 'calc(70vh - 236px)',
      paddingTop: siteTheme.padding.large
    },
    carDetailBox: {
      paddingRight: siteTheme.padding.large,
      marginRight: siteTheme.margin.large
    },
    carName: {
      font: siteTheme.typography.extraLarge,
      marginBottom: siteTheme.margin.large,
    },
    carDetails: {
      font: siteTheme.typography.largeNormal,
      marginBottom: siteTheme.margin.large,
    },
    paragraph:{
      font: siteTheme.typography.medium
    },
    favoriteBox:{
      padding: siteTheme.padding.large
    },
    favoriteButton: {
      marginTop: siteTheme.margin.medium, 
      float: "right"
    }
  }));

const CarDetailComponent = ({ modelName, manufacturerName, stockNumber, mileage, fuelType, color }: ICarDetail): JSX.Element => {
  
  const [buttonValue, setButtonValue] = useState("Save");

  const { favoriteButton, carDetailHero, carDetailWrapper, carDetailBox, carName, carDetails, paragraph, favoriteBox} = useStyles();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved') || '{}');
    if (stockNumber in saved) { 
      setButtonValue("Remove")
     }  
  }, [stockNumber])

  const handleSaveRemove = (e: SyntheticEvent, stockNumber: number) => {
    const saved = JSON.parse(localStorage.getItem('saved') || '{}');
    if(buttonValue === "Save"){
      saved[stockNumber] = stockNumber
      localStorage.setItem('saved', JSON.stringify(saved))
      setButtonValue("Remove");
    }
    if(buttonValue === "Remove"){
      const remove = stockNumber.toString();
      if (saved[remove]) {  //check if key exists
        delete saved[remove];  //remove the key from object
      }
      localStorage.setItem("saved", JSON.stringify(saved));
      setButtonValue("Save");
    }
  }
  return (
    <>
      <Box className={carDetailHero}></Box>
      <Box className={carDetailWrapper}>
        <Grid container>
          <Grid item md={6}>
            <Box className={carDetailBox}>
              <Box>
                <Typography className={carName}>
                  {manufacturerName} {modelName}
                </Typography>
                <Typography className={carDetails}>
                  Stock # {stockNumber} - {mileage?.number} {mileage?.unit} - {fuelType} - {color}
                </Typography>
                <Typography className={paragraph}>
                  This car is currently available and can be delivered as soon as
                  tomorrow morning. Please be aware that delivery times shown in
                  this page are not definitive and may change due to bad weather
                  conditions.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            <ThemeCard className={favoriteBox}>
              <Typography className={paragraph}>
                If you like this car, click the button and save it in your
                collection of favourite items.
              </Typography>
              <TangoButton  className={favoriteButton} onClick={(e: SyntheticEvent) => handleSaveRemove(e, stockNumber)}>
                {buttonValue}
              </TangoButton>
            </ThemeCard>
          </Grid>
        </Grid>
      </Box>
    </>
    
  );
}

export default CarDetailComponent;