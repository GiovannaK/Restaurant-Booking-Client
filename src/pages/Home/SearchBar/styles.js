/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((lightTheme) => ({
  input: {
    position: 'relative',
    width: '100%',
    color: lightTheme.palette.primary.dark,
    border: '2px solid',
    borderColor: lightTheme.palette.primary.main,
    padding: '0.5rem',
    borderRadius: '5px',
  },
}));

export default useStyles;
