import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SomaComponent } from './soma/soma.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent }
    , { path: 'Soma', component: SomaComponent, canLoad: [AuthGuard]}
    // , { path: '', redirectTo: '' }
    // , { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

