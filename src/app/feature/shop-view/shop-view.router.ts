import { Routes, RouterModule } from '@angular/router';
import { ShopViewComponent } from './shop-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShopViewComponent
  }
];

export const ShopViewRouter = RouterModule.forChild(routes);
