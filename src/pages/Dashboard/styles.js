/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
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
