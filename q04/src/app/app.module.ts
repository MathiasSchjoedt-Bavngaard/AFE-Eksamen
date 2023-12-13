import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [AppComponent, TemplateDrivenComponent, ReactiveComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
