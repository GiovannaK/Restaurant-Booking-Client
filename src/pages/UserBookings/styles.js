/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  box: {
    marginTop: lightTheme.spacing(5),
  },
  typography: {
    marginTop: lightTheme.spacing(2),
    marginBottom: lightTheme.spacing(2),
    color: lightTheme.palette.primary.dark,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  typographyTitle: {
    marginTop: lightTheme.spacing(2),
    marginBottom: lightTheme.spacing(2),
    color: lightTheme.palette.primary.main,
    textTransform: 'uppercase',
  },
}));

export default useStyles;
