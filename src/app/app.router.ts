import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './feature/shop-view/shop-view.module#ShopViewModule'
  }
];

export const AppRouter = RouterModule.forRoot(routes);
