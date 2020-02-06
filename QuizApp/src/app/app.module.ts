import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultComponent } from './result/result.component'
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    WelcomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
