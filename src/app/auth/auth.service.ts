import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

export class AuthService {
    isLoggedIn = false;

    // Url padrão para direcionamento após o login
    redirectUrl: string;

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        );
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
