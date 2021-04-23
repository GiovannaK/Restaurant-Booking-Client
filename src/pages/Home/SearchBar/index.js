/* eslint-disable no-unused-vars */
import { Grid, InputBase } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';

export const SearchBar = ({ getQuery }) => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const onChange = (q) => {
    setSearchText(q);
    getQuery(q);
  };

  return (
    <Grid container justify="center">
      <Grid align="center" item xs={12} sm={12} md={12} lg={6} xl={6}>
        <InputBase
          placeholder="Pesquise por cidade ou nome do restaurante..."
          className={classes.input}
          variant="outlined"
          autoFocus
          value={searchText}
          onChange={(e) => onChange(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};
