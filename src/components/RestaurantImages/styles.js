import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  typography: {
    color: lightTheme.palette.primary.dark,
    textTransform: 'uppercase',
  },
  card: {
    border: 'dashed',
    borderColor: lightTheme.palette.primary.dark,
    width: '100%',
  },
  media: {
    height: 100,
  },

  zoom: {
    transition: 'all 0.5s ease-in',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  icon: {
    cursor: 'pointer',
  },
}));

export default useStyles;
