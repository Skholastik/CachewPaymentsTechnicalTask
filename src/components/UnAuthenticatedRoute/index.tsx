import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuthContext } from '../../context/auth.context';
import { RoutePath } from '../../enums/route-path.enum';

export const UnAuthenticatedRoute: FC<RouteProps> = (props: RouteProps) => {
  const { isUserAuthorized } = useAuthContext();

  if (isUserAuthorized()) return <Redirect to={RoutePath.Dashboard} />;

  return <Route {...props} />;
};
