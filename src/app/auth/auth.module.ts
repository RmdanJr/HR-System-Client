import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [RouterModule, FormsModule, AuthRoutingModule],
})
export class AuthModule {}
