/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { CircularProgress, Grid } from '@material-ui/core';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/authContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated, loading } = useContext(AuthContext);

  /* if (loading) {
    <>
      <Grid container alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
        <CircularProgress />
      </Grid>
    </>;
  } */
  console.log(loading);
  return (
    <Route
      {...rest}
      render={(props) => (
        authenticated ? (
          <Component {...props} />
        ) : (
          loading ? <CircularProgress />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      )}
    />
  );
};
