import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainareaComponent } from './mainarea/mainarea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //need to improt here from forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
