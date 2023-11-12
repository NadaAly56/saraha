import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlSegment } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')) {
   return inject(Router).navigate(['notallowed'])
  }
  return true;
};
