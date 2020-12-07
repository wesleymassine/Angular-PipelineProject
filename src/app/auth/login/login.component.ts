import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    // Model
    public login: LoginModel;

    constructor(public authService: AuthService, private router: Router) {
        this.login = new LoginModel();
    }

    public Logar() {
        if (this.authService.login(this.login.usuario, this.login.senha)) {
            this.router.navigate([this.authService.redirectUrl]);
        }
    }
}
