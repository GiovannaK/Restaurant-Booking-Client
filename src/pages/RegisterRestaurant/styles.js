/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  box: {
    marginTop: lightTheme.spacing(3),
  },
  typography: {
    color: lightTheme.palette.primary.dark,
    textTransform: 'uppercase',
  },
  inputLabel: {
    color: lightTheme.palette.primary.dark,
  },
  card: {
    border: 'dashed',
    borderColor: lightTheme.palette.primary.dark,
  },
  checkbox: {
    color: lightTheme.palette.primary.dark,
  },
  button: {
    width: '100%',
    marginTop: lightTheme.spacing(5),
  },
}));

export default useStyles;
