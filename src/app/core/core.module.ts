import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireBundleModule } from './modules/angular-fire-bundle/angular-fire-bundle.module';
import { CheckoutService } from './services/checkout.service';
import { ShopService } from './services/shop.service';

@NgModule({
  imports: [CommonModule, AngularFireBundleModule],
  providers: [CheckoutService, ShopService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
