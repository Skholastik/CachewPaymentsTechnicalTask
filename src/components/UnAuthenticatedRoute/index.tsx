import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { StatusCodes } from 'http-status-codes';

import { RoutesEnum } from '../../enums/routes.enum';

const errorCode = null;

export const UnAuthenticatedRoute: FC<RouteProps> = (props: RouteProps) => {
  if (errorCode !== StatusCodes.UNAUTHORIZED)
    return <Redirect to={RoutesEnum.Dashboard} />;

  return <Route {...props} />;
};
