import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    ListaVuelosComponent,
    PromocionesComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
