import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import { AuthenticatedRoute } from '../components/AuthenticatedRoute';
import Index from '../components/Loading';
import { UnAuthenticatedRoute } from '../components/UnAuthenticatedRoute';
import {
  AuthRouteProps,
  AuthRoutes,
  UnAuthRouteProps,
  UnAuthRoutes,
} from '../configs/app-routes.config';
import { RoutesEnum } from '../enums/routes.enum';

const getPageComponent = (page: string) => {
  return loadable(() => import(`./${page}/`), {
    fallback: <Index />,
  });
};

export const Routes: FC = () => (
  <Switch>
    <AuthenticatedRoute exact path={AuthRouteProps}>
      <Switch>
        {AuthRoutes.map((route) => (
          <Route
            key={route.page}
            component={getPageComponent(route.page)}
            {...route.routeProps}
          />
        ))}
      </Switch>
    </AuthenticatedRoute>
    <UnAuthenticatedRoute path={UnAuthRouteProps}>
      <Switch>
        {UnAuthRoutes.map((route) => (
          <Route
            key={route.page}
            component={getPageComponent(route.page)}
            {...route.routeProps}
          />
        ))}
      </Switch>
    </UnAuthenticatedRoute>
    <Redirect path="*" exact to={RoutesEnum.Main} />
  </Switch>
);
