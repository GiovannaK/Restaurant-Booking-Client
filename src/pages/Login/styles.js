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
    [lightTheme.breakpoints.down('md')]: {
      marginTop: lightTheme.spacing(1),
    },
    [lightTheme.breakpoints.down('sm')]: {
      marginTop: '25%',
    },
    [lightTheme.breakpoints.down('xs')]: {
      marginTop: '25%',
    },
  },
  button: {
    marginTop: lightTheme.spacing(1),
    marginBottom: lightTheme.spacing(2),
    width: '100%',
  },
}));

export default useStyles;
