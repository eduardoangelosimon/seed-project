import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { MessagesComponent } from './messages/messages.component';
import { FormularioComponent } from './zformcomponente/formulario.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { EmpregadoComponent } from './empregado/empregado.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { myrouting } from './app.routing';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { LogoutComponent } from './auth/logout.component';
import { HeaderComponent } from './header.component';
import { FormularioDrivenAtivComponent } from './formDriven/formularioDrivenAtiv.component';

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        MessageListComponent,
        MessageInputComponent,
        FormularioComponent,
        EmpregadoComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        FormularioDrivenAtivComponent,

    ],
    imports: [BrowserModule, FormsModule, myrouting],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}