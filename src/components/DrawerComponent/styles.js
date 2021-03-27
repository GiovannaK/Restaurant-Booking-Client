/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  list: {
    width: 250,
  },
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 260,
    background: lightTheme.palette.secondary.opacity,
  },
  listItemText: {
    textAlign: 'center',
    color: lightTheme.palette.primary.dark,
  },
}));

export default useStyles;
