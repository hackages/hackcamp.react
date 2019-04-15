import {CLOSE_NAV, OPEN_NAV} from '../constants/actions';

export const openNav = () => ({
  type: OPEN_NAV
});

export const closeNav = () => ({
  type: CLOSE_NAV
});
