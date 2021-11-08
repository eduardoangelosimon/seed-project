import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from './auth/auth.routers';
import { MessagesComponent } from "./messages/message.component";


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/mensagens', pathMatch: 'full'},
    {path: 'mensagens', component: MessagesComponent},
    {path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);