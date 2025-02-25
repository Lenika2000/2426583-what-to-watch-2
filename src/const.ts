export const enum AppRoute {
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/review',
  Player = '/player',
  NotFound = '/notfound',
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const enum Tab {
  details = 'Details',
  overview = 'Overview',
  reviews = 'Reviews'
}

export const GENRE_FOR_ALL_FILMS = 'All films';

export const enum APIRoute {
  Films = '/films',
  Login = '/login',
  Comments = '/comments'
}

export enum ReduxStateStatus {
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
  Idle = 'idle'
}

export const USER_KEY_NAME = 'what-to-watch-user';
