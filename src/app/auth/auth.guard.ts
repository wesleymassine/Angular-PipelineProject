import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    ActivatedRouteSnapshot, CanActivate
    , CanActivateChild, CanLoad
    , Route, Router, RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('login');
        const url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        console.log('login');

        if (this.authService.isLoggedIn) {
            return true;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }

}
