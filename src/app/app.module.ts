import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './departments/departments.module';
import { TeamsModule } from './teams/teams.module';
import { EmployeesModule } from './employees/employees.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthHttpHeadersInterceptor } from './auth/auth-headers.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    AuthModule,
    DepartmentsModule,
    TeamsModule,
    EmployeesModule,
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpHeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
