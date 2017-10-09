import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponentsModule } from '@app/shared/shop';
import { ShopViewComponent } from './shop-view.component';
import { ShopViewRouter } from './shop-view.router';

@NgModule({
  imports: [CommonModule, ShopComponentsModule, ShopViewRouter],
  declarations: [ShopViewComponent]
})
export class ShopViewModule {}
