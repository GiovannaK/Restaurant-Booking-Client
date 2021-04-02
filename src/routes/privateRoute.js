/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { CircularProgress, Grid } from '@material-ui/core';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { AuthContext } from '../context/AuthContext/authContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => (
        authenticated ? (
          <Component {...props} />
        ) : (
          loading ? <Loading />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      )}
    />
  );
};
