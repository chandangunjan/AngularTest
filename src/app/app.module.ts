import { AuthorsComponent } from './authors/authors.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { AlertComponent } from './warning-alert/warning-alert.component';
import { SuccessComponent } from './warning-success/warning-success.componrnt';
import { FormsModule } from '@angular/forms';
import { TwowayBindingComponent } from './TwowayBinding/TwowayBinding.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AlertComponent,
    SuccessComponent,
    AuthorsComponent,
    TwowayBindingComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
