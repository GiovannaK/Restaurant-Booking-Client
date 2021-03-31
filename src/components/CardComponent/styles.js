/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  root: {
    maxWidth: 345,
    transition: '.5s',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 140,
  },
  typography: {
    color: lightTheme.palette.primary.dark,
  },
  icon: {
    maxWidth: '23px',
  },
}));

export default useStyles;
