import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const pickGuard: CanActivateFn = (route, state) => {
  const number = +route.params['number'];
  console.log('number', number);
  console.log('state', state);
  console.log('route', route);
  if (number <= 6 && number >= 1 && number === number && number % 1 === 0) {
    return true;
  } else if (number === 0) {
    return inject(Router).parseUrl('/');
  } else {
    return inject(Router).parseUrl(`/wrong${state.url}`);
  }
};
