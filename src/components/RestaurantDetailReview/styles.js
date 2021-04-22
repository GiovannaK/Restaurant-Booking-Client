import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  titleTypography: {
    color: lightTheme.palette.primary.dark,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  reviewTypography: {
    fontWeight: 'bold',
    marginBottom: lightTheme.spacing(1),
  },
  divider: {
    marginBottom: lightTheme.spacing(1),
  },
}));

export default useStyles;
