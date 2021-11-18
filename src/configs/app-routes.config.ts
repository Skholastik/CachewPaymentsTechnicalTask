import { RouteProps } from 'react-router';

import { RoutesEnum } from '../enums/routes.enum';

export type RouteItem = {
  page: string;
  routeProps: RouteProps;
};

export const AuthRoutes = [
  { routeProps: { path: RoutesEnum.Main }, page: 'Dashboard' },
] as RouteItem[];

export const UnAuthRoutes = [
  { routeProps: { path: RoutesEnum.Login }, page: 'Login' },
] as RouteItem[];

export const AuthRouteProps = AuthRoutes.map(
  (item) => item.routeProps.path,
) as string[];
export const UnAuthRouteProps = UnAuthRoutes.map(
  (item) => item.routeProps.path,
) as string[];
