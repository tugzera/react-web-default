import React from "react";
import { Redirect, Route as RouteWrapper } from "react-router-dom";
// import { store } from '../store';

export default function Route({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  //store.getState().auth;
  const { isSigned } = true;

  if (!isSigned && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isSigned && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return <RouteWrapper {...rest} component={Component} />;
}
