import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes existentes
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cliente/cart/cart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Guards
import { AuthGuard } from './core/auth.guard';
import { RoleGuard } from './core/role.guard';

const routes: Routes = [

  // Página inicial -> login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },

  // solo admin
  //{ path: 'admin', component: DashboardComponent, canActivate: [RoleGuard] },

  //Ventana de gestion de admin(Denis)
  {path: 'admin', canActivate:[RoleGuard],loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
 


  // cualquier ruta desconocida -> login
  { path: '**', redirectTo: '/login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
