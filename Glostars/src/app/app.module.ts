import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarbeforeloginComponent } from './index/navbarbeforelogin/navbarbeforelogin.component';
import { IndexComponent } from './index/index.component';
import { LoginbarComponent } from './index/loginbar/loginbar.component';
import { SignupComponent } from './index/signup/signup.component';
import { ReadingcontentComponent } from './index/readingcontent/readingcontent.component';
import { FootersectionComponent } from './index/footersection/footersection.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarbeforeloginComponent,
    IndexComponent,
    LoginbarComponent,
    SignupComponent,
    ReadingcontentComponent,
    FootersectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
