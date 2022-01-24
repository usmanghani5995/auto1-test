import { Box, Grid, makeStyles, Typography, createStyles } from "@material-ui/core";
import { siteTheme } from "../utils/siteTheme";
import { Heading, ThemeCard, ThemeLink } from "../utils/styledComponents";
import { ICarCard } from '../types/components';

const useStyles = makeStyles(() =>
  createStyles({
    themeCard: {
      marginBottom: siteTheme.margin.medium
    },
    imageBox: {
      height: "100px",
      width: "100px",
      backgroundColor: siteTheme.color.gray93,
      color: siteTheme.color.gray93,
      textAlign: "center",
    },
    carInfoBox: {
      marginLeft: siteTheme.margin.large
    },
    text: {
      marginBottom: siteTheme.margin.medium
    },
    textLoading: {
      marginBottom: siteTheme.margin.medium,
      backgroundColor: siteTheme.color.gray93,
      color: siteTheme.color.gray93,
    },
    themeLinkLoading: {
      backgroundColor: siteTheme.color.gray93,
      color: siteTheme.color.gray93,
    },
    image: {
      display: "block", 
      margin: "0 auto",
      height:"100px",
      width:"100px"
    }
  })
);

const CarCard = ({
  stockNumber,
  manufacturerName,
  modelName,
  isLoading,
  mileage,
  fuelType,
  color,
  pictureUrl,
}:ICarCard): JSX.Element => {
  const {themeCard, imageBox, carInfoBox, textLoading, text, themeLinkLoading, image}  = useStyles();
  return (
    <ThemeCard className={themeCard}>
      {isLoading ? (
        <Grid container spacing={10}>
          <Grid item md={1}>
            <Box className={imageBox}></Box>
          </Grid>
          <Grid item md={9} className={carInfoBox}>
            <Heading className={textLoading}>
              loading...
            </Heading>
            <Typography className={textLoading}>
              loading...
            </Typography>
            <ThemeLink to={``} className={themeLinkLoading}>
              loading...
            </ThemeLink>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={10} data-testid="car-info">
          <Grid item md={1}>
            <img className={image} src={pictureUrl} alt="car" />
          </Grid>
          <Grid item md={9} className={carInfoBox}>
              <Heading className={text}>
                {manufacturerName} {modelName}
            </Heading>
              <Typography className={text}>
              Stock # {stockNumber} - {mileage.number} {mileage.unit} -{" "}
              {fuelType} - {color}
            </Typography>
            <ThemeLink to={`/${stockNumber}`}>View details</ThemeLink>
          </Grid>
        </Grid>
      )}
    </ThemeCard>
  );
};

export default CarCard;