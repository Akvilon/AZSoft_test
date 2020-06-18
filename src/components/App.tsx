import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './App.styles';
import { Form } from './Form';
import { CacheTable } from './CacheTable';


const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.App}>
      <div className={classes.AppForm}>
        <Form />
      </div>
      <div className={classes.AppTable}>
        <CacheTable />
      </div>
    </div>
  );
}

export { App }
