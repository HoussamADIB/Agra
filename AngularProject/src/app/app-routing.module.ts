import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientHomeComponent } from './client/pages/clienthome/clienthome.component';
import { LoginComponent } from './login/login.component';
import { ClientAuthGuard } from './client/clientauth.guard';
import { LogoutComponent } from './shared/logout/logout.component';
import { ClientProductComponent } from './client/pages/clientproduct/clientproduct.component';
import { ClientCategoryComponent } from './client/pages/clientcategory/clientcategory.component';
import { AdminHomeComponent } from './admin/pages/adminhome/adminhome.component';
<<<<<<< HEAD
import { ClientcartComponent } from './client/pages/clientcart/clientcart.component';
=======
import { AdminAuthGuard } from './admin/adminauth.guard';
import { AdminProductComponent } from './admin/pages/adminproduct/adminproduct.component';
>>>>>>> origin/master

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path : "login", component : LoginComponent},
  {path : "logout", component : LogoutComponent},
  {path : "client", component : ClientHomeComponent,                  canActivate : [ClientAuthGuard]},
  {path : "client/product/:id", component : ClientProductComponent,   canActivate : [ClientAuthGuard]},
  {path : "client/category/:id", component : ClientCategoryComponent, canActivate : [ClientAuthGuard]},
<<<<<<< HEAD
  {path : "client/cart",component : ClientcartComponent,              canActivate : [ClientAuthGuard]},
  {path : "admin", component : AdminHomeComponent},
=======
  {path : "admin", component : AdminHomeComponent, canActivate : [AdminAuthGuard]},
  {path : "admin/product", component : AdminProductComponent, canActivate : [AdminAuthGuard]}
>>>>>>> origin/master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : []
})

export class AppRoutingModule { }
