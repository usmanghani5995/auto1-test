import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import { siteTheme } from "../utils/siteTheme";
import { ThemeLink } from "../utils/styledComponents";

const useStyles = makeStyles(() =>
  createStyles({
    notFoundWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
    },
    contentCenter: {
      textAlign: "center"
    },
    image: {
      maxHeight: "30px", 
      marginBottom: siteTheme.margin.medium
    },
    error404: {
      font: siteTheme.typography.extraLarge,
      marginBottom: siteTheme.margin.medium,
    },
    message404: {
      font: siteTheme.typography.largeNormal,
      marginBottom: siteTheme.margin.medium,
    },
    paragraph: {
      font: siteTheme.typography.largeNormal 
    }
  }));

const NotFoundComponent = (): JSX.Element => {
  const { notFoundWrapper, contentCenter, image, error404, message404, paragraph} = useStyles();
  return (
    <Box className={notFoundWrapper}>
      <Box className={contentCenter}>
        <img
          src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png"
          alt="Auto-1"
          className={image}
        />
        <Typography className={error404}>
          404 - Not Found
        </Typography>
        <Typography className={message404}>
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Typography className={paragraph}>
          You can always go back to the <ThemeLink to="/">homepage</ThemeLink>.
        </Typography>
      </Box>
    </Box>
  );
}

export default NotFoundComponent;