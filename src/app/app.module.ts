import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, configRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AllserviceService } from './allservice.service';

@NgModule({
  declarations: [
    AppComponent,
    configRoutes
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AllserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
