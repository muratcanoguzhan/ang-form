import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ParentFormComponent } from './parent-form/parent-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ParentFormComponent,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
