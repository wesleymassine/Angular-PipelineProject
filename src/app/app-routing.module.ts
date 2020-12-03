import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './pages/not-found.component';
import { SomaComponent } from './soma/soma.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent }
    , { path: 'Soma', component: SomaComponent, canActivate: [AuthGuard] }
    , { path: '', redirectTo: '/Soma', pathMatch: 'full' }
    , { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
    , providers: [
        AuthService
    ]
})
export class AppRoutingModule { }

