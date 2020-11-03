import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    // redirectTo: 'products',
    component: HomeComponent,
    // component: ,
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',

    // component: ,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
