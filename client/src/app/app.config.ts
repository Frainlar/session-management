import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtModule, JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';

import { JwtInterceptor } from './interceptors/jwt.interceptor';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export function jwtOptionsFactory(tokenService: TokenService) {
  return {
    tokenGetter: () => tokenService.getToken(),
    allowedDomains: ['localhost:3000'], // Replace with your API domain
    disallowedRoutes: ['http://localhost:3000/auth/login'],
  };
}

import { TokenService } from './services/token.service';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [TokenService],
      },
    }),
  ],
  providers: [
    TokenService,
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
