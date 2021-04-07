/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  box: {
    marginTop: lightTheme.spacing(5),
  },
  typography: {
    color: lightTheme.palette.primary.dark,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  fab: {
    position: 'fixed',
    bottom: lightTheme.spacing(2),
    right: lightTheme.spacing(2),
  },
  tooltip: {
    fontSize: '1.1rem',
  },
}));

export default useStyles;
