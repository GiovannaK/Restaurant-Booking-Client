/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  box: {
    marginTop: lightTheme.spacing(5),
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
    width: '100%',
    marginTop: lightTheme.spacing(12),
  },
}));

export default useStyles;
