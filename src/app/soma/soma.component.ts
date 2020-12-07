import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-soma',
    templateUrl: './soma.component.html',
    styleUrls: ['./soma.component.css']
})
export class SomaComponent {

    public numero1: number;
    public numero2: number;
    public resultado: number;

    constructor(private authService: AuthService, private router: Router) {
    }

    public somar(numero1: number, numero2: number) {
        this.resultado = <number>numero1 + <number>numero2;
    }

    public logout(): void {
        console.log('logout');
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
