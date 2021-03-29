/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((lightTheme) => ({
  gridContainer: {
    marginTop: lightTheme.spacing(2),
  },
  inputLabel: {
    color: lightTheme.palette.primary.dark,
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  typography: {
    marginTop: '25%',
    color: lightTheme.palette.primary.dark,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
}));

export default useStyles;
