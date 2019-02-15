// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
// Components
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/:hash', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
    ]
  }, {
    path: 'auth', component: AuthLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/:hash', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
    ]
  }, {
    path: '', component: DefaultLayoutComponent,
    children: [
      { path: 'home', component: AboutComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/:hash', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
    ]
  },
  { path: '**', redirectTo: '/notfound' }
  // { path: '', component: AboutComponent },
  // { path: 'cats', component: CatsComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent },
  // { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  // { path: 'notfound', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
