import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { ProfileModule } from './profile/profile.module';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoansComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ProfileModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
