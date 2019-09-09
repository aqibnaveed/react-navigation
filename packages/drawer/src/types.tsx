import { NavigationAction } from 'react-navigation';

export type Route = {
  key: string;
  routeName: string;
};

export type Scene = {
  route: Route;
  index: number;
  focused: boolean;
  tintColor?: string;
};

export type Navigation = {
  state: {
    key: string;
    index: number;
    routes: Route[];
    isDrawerOpen: boolean;
  };
  openDrawer: () => void;
  closeDrawer: () => void;
  dispatch: (action: NavigationAction) => boolean;
};
