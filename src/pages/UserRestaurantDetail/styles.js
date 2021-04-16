/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  box: {
    marginTop: lightTheme.spacing(2),
  },
  media: {
    height: 400,
  },
  typography: {
    color: lightTheme.palette.primary.dark,
    textTransform: 'uppercase',
  },
  inputLabel: {
    color: lightTheme.palette.primary.dark,
  },
  card: {
    minHeight: '55vh',
  },
  checkbox: {
    color: lightTheme.palette.primary.dark,
  },
  button: {
    marginTop: lightTheme.spacing(10),
    width: '100%',
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
