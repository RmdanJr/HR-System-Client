import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AuthComponent, SignupComponent, LoginComponent],
  imports: [RouterModule],
})
export class AuthModule {}
