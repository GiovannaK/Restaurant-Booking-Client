import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((lightTheme) => ({
  modalCard: {
    marginTop: lightTheme.spacing(5),
    width: 600,
    height: 400,
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
