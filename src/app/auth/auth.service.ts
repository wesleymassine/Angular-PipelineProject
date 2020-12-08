import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

export class AuthService {
    isLoggedIn = false;

    // Url padrão para direcionamento após o login
    redirectUrl = '';

    login(usuario: string, senha: string): boolean {
        if (usuario === NaN && senha === 'impacta') {
            this.isLoggedIn = true;
            return true;
        }

        return false;
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
