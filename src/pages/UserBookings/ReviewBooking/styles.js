/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core';

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
  inputLabel: {
    color: lightTheme.palette.primary.dark,
  },
  typography: {
    color: lightTheme.palette.primary.dark,
    textTransform: 'uppercase',
  },
}));

export default useStyles;
