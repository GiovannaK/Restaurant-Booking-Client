import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((lightTheme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: lightTheme.spacing(3),
  },
  button: {
    background: lightTheme.palette.primary.dark,
    minWidth: '10rem',
    marginLeft: lightTheme.spacing(3),
  },
  icon: {
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
}));

export default useStyles;
