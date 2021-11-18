import { RouteProps } from 'react-router';

import { RoutePath } from '../enums/route-path.enum';

export type RouteItem = {
  page: string;
  routeProps: RouteProps;
};

export const AuthRoutes = [
  { routeProps: { path: RoutePath.Main }, page: 'Dashboard' },
] as RouteItem[];

export const UnAuthRoutes = [
  { routeProps: { path: RoutePath.Login }, page: 'Login' },
] as RouteItem[];

export const AuthRouteProps = AuthRoutes.map(
  (item) => item.routeProps.path,
) as string[];
export const UnAuthRouteProps = UnAuthRoutes.map(
  (item) => item.routeProps.path,
) as string[];
