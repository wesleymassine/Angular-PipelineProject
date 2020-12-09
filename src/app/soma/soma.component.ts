import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SomaService } from './somaService';

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

    public somar() {
        this.resultado = SomaService.somar(this.numero1, this.numero2);
    }

    public logout(): void {
        console.log('logout');
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
