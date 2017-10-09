import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { AppComponent } from './app.component';
import { AppRouter } from '@app/app.router';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRouter, CoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
