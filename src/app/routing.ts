import { LoginComponent } from './login/login.component';
import { AuthGuard } from './autho/auth.guard';
import { SingupComponent } from './singup/singup.component';
import { ResultComponent } from './result/result.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';

import { Routes } from "@angular/router"


export const appRoutes : Routes=[
  {path:'register',component:RegisterComponent},
  {path:'quiz',component:QuizComponent},
  {path:'result',component:ResultComponent,canActivate:[AuthGuard]},
  {path:"singup",component:SingupComponent},
  {path:"login",component:LoginComponent},
{path:'',redirectTo:'/register',pathMatch:'full'}




];
