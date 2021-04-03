/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  gridContainer: {
    marginTop: lightTheme.spacing(2),
  },

  typography: {
    marginTop: lightTheme.spacing(2),
    marginBottom: lightTheme.spacing(2),
    color: lightTheme.palette.primary.dark,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  inputLabel: {
    color: lightTheme.palette.primary.dark,
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: lightTheme.spacing(2),
  },
}));

export default useStyles;
