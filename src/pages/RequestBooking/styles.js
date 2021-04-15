/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  box: {
    marginTop: lightTheme.spacing(5),
  },
  typography: {
    textTransform: 'uppercase',
    color: lightTheme.palette.primary.dark,
  },
  inputLabel: {
    color: lightTheme.palette.primary.dark,
  },
}));

export default useStyles;
