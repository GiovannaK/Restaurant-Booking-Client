/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  box: {
    marginTop: lightTheme.spacing(5),
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: lightTheme.spacing(4),
  },
  contact: {
    color: lightTheme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  button: {
    marginTop: lightTheme.spacing(3),
    width: '100%',
  },
  titleTypography: {
    color: lightTheme.palette.primary.dark,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  icon: {
    maxWidth: '23px',
  },

}));

export default useStyles;
