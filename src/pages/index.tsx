import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import { AuthenticatedRoute } from '../components/AuthenticatedRoute';
import { Layout } from '../components/Layout';
import { Loading } from '../components/Loading';
import { UnAuthenticatedRoute } from '../components/UnAuthenticatedRoute';
import {
  AuthRouteProps,
  AuthRoutes,
  UnAuthRouteProps,
  UnAuthRoutes,
} from '../configs/app-routes.config';
import { RoutePath } from '../enums/route-path.enum';

const getPageComponent = (page: string) => {
  return loadable(() => import(`./${page}/`), {
    fallback: <Loading />,
  });
};

export const Routes: FC = () => (
  <Switch>
    <AuthenticatedRoute exact path={AuthRouteProps}>
      <Layout>
        <Switch>
          {AuthRoutes.map((route) => (
            <Route
              key={route.page}
              component={getPageComponent(route.page)}
              {...route.routeProps}
            />
          ))}
        </Switch>
      </Layout>
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
    <Redirect path="*" exact to={RoutePath.Main} />
  </Switch>
);
