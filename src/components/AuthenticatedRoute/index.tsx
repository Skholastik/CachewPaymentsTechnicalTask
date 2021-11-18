import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuthContext } from '../../context/auth.context';
import { RoutePath } from '../../enums/route-path.enum';

export const AuthenticatedRoute: FC<RouteProps> = (props: RouteProps) => {
  const { isUserAuthorized } = useAuthContext();

  if (!isUserAuthorized()) return <Redirect to={RoutePath.Login} />;

  return <Route {...props} />;
};
