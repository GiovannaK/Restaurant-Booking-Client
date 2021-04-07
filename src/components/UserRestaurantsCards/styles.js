/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  root: {
    transition: '.5s',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 200,
  },
}));

export default useStyles;
