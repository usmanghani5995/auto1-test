import { Button, Paper, styled, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { siteTheme } from "./siteTheme";

export const HeaderMenuButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  font: siteTheme.typography.medium,
  padding: siteTheme.padding.medium,
  "&:hover": {
    backgroundColor: "white",
  },
});

export const Heading = styled(Typography)({
  font: siteTheme.typography.largeBold,
});

export const TangoButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  font: siteTheme.typography.medium,
  padding: siteTheme.padding.medium,
  color: siteTheme.color.gray93,
  width: siteTheme.width.buttonWidth,
  height: siteTheme.hegith.buttonHeight,
  backgroundColor: siteTheme.color.tango,
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: siteTheme.color.ochre,
  },
});

export const ThemeCard = styled(Paper)({
  padding: siteTheme.padding.medium,
  boxShadow: "none",
  borderRadius: "0px",
  border: siteTheme.border.gray93Border,
  overflow: "hidden",
});

export const ThemeLink = styled(Link)({
  textDecoration: "none",
  color: siteTheme.color.tango,
  "&:hover": {
    textDecoration: "underline",
    color: siteTheme.color.ochre,
  },
});