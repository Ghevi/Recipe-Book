import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    // DropdownDirective, Components must be only declared once in the app
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule, // We import this to get the 4 commented components above
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
