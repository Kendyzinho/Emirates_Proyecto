import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';
import { PromocionesComponent } from './promociones/promociones.component';

const routes: Routes = [
  {path: '',component: LayoutComponent,
    children: [
      { path: 'dashboard', component: AdminPanelComponent },
      { path: 'vuelos', component: ListaVuelosComponent },
      { path: 'promociones', component: PromocionesComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
