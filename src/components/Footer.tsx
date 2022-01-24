import { Box, createStyles, makeStyles } from "@material-ui/core";
import { siteTheme } from "../utils/siteTheme";

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80px",
      borderTop: siteTheme.border.gray93Border ,
      marginTop: siteTheme.margin.large ,
    },
  })
);

const Footer = (): JSX.Element => {
  const {footer} = useStyles();
  return (
    <Box className={footer}>
      © AUTO1 Group 2022
    </Box>
  );
}

export default Footer;