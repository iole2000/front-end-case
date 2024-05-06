import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, RouterStateSnapshot, Routes } from '@angular/router';
import { AuthService } from './auth.service';





export const authGuard: CanActivateFn = () => {
  return inject(AuthService).isAuthenticated();
};

 export const authGuardChild: CanActivateChildFn = () => {
  return inject(AuthService).isRoleAdmin();
  
};