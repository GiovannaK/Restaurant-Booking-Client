import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((lightTheme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: lightTheme.palette.secondary.opacity,
  },
  menuButton: {
    marginRight: lightTheme.spacing(1),
  },
  button: {
    color: lightTheme.palette.primary.dark,
    marginLeft: lightTheme.spacing(5),
  },
  icon: {
    color: lightTheme.palette.primary.main,
  },
  menu: {
    marginRight: lightTheme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    letterSpacing: 2,
    background: 'linear-gradient(90deg, rgba(255,165,4,1) 0%, rgba(255,121,0,1) 40%, rgba(255,255,255,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  notificationIcon: {
    color: lightTheme.palette.primary.dark,
  },
}));

export default useStyles;
