import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((lightTheme) => ({
  inputLabel: {
    color: lightTheme.palette.primary.dark,
  },
  typography: {
    marginTop: '10%',
    color: lightTheme.palette.primary.dark,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  box: {
    marginTop: lightTheme.spacing(8),
  },
}));

export default useStyles;
