/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  box: {
    marginTop: lightTheme.spacing(5),
  },
  divider: {
    marginBottom: lightTheme.spacing(2),
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonAccept: {
    color: 'green',
  },
  buttonReject: {
    color: 'red',
  },
}));

export default useStyles;
