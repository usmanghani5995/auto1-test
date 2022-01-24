import { Box, CircularProgress, createStyles } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(()=>
  createStyles({
    spinnerWrapper: {
      margin: "70px 0",
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  }));

const Loading = (): JSX.Element => {
  const { spinnerWrapper} = useStyles();

  return (
    <Box className={spinnerWrapper}>
      <CircularProgress color="primary" size={40} />
    </Box>
  );
};

export default Loading;
