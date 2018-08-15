import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChartsComponent } from './charts/charts.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
