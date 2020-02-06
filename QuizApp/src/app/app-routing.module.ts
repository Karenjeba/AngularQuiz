import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [{path:'',component :LoginComponent},
{path:'login',component :LoginComponent},
{path:'welcome/:userName',component:WelcomeComponent,canActivate:[RouteGuardService]},
{path:'quiz/:qname',component :QuizComponent,canActivate:[RouteGuardService]},
{path:'logout',component :LogoutComponent,canActivate:[RouteGuardService]},
{path:'results',component :ResultComponent,canActivate:[RouteGuardService]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
