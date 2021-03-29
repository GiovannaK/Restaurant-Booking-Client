import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  typography: {
    marginTop: '10%',
    color: lightTheme.palette.primary.dark,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  box: {
    marginTop: lightTheme.spacing(8),
  },
}));

export default useStyles;
