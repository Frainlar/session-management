import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const expectedRoles = route.data.expectedRoles;
    const expectedRoles = '';
    const token = this.tokenService.getToken();

    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const userRoles = decodedToken.roles || [];

      const hasRole = expectedRoles.some((role: string) => userRoles.includes(role));

      if (hasRole) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
