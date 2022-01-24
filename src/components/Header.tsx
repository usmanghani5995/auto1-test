import { Box, createStyles, makeStyles } from "@material-ui/core";
import { siteTheme } from "../utils/siteTheme";
import { HeaderMenuButton } from "../utils/styledComponents";

const useStyles = makeStyles(() =>
  createStyles({
    logo: {
      maxHeight: "30px",
    },
    logoWrapper: {
      paddingLeft:"24px"
    },
    header: {
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      height:"80px",
      borderBottom: siteTheme.border.gray93Border,
    },
    headerManu: {
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      paddingRight:"12px",
    }
  })
);

const Header = (): JSX.Element => {
  const { logo, header, headerManu, logoWrapper} = useStyles();
  return (
    <Box className={header}>
      <Box className={logoWrapper}>
        <img
          src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png"
          alt="Auto-1"
          className={logo}
        />
      </Box>
      <Box className={headerManu}>
        <HeaderMenuButton>Purchase</HeaderMenuButton>
        <HeaderMenuButton>My Orders</HeaderMenuButton>
        <HeaderMenuButton>Sell</HeaderMenuButton>
      </Box>
    </Box>
  );
}

export default Header;