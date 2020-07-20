import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/login/login.component';
import { RegisteryComponent } from './core/registery/registery.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InserUpdateTruyenComponent } from './modules/inser-update-truyen/inser-update-truyen.component';
import { InsertUpdateChaperComponent } from './modules/insert-update-chaper/insert-update-chaper.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisteryComponent,
    DashboardComponent,
    InserUpdateTruyenComponent,
    InsertUpdateChaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
