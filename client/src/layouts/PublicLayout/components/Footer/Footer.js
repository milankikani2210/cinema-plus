import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Cinema Plus. 2023
      </Typography>
      <Typography variant="caption">
        Crafted with love |{' '}
        <Link
          href="https://hi-in.facebook.com/milan.kikani.35"
          target="_blank"
          rel="noopener">
          Milan Kikani
        </Link>
      </Typography>
    </div>
  );
}
