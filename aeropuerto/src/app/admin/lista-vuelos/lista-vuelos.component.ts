import { Component, OnInit } from '@angular/core';
import { VueloModel } from 'src/app/models/vuelo.model';
import { VueloService } from '../../services/vuelo.service';

@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.css']
})
export class ListaVuelosComponent implements OnInit {

  vuelos: VueloModel[] = [];

  constructor(private vueloService: VueloService) {}

  ngOnInit(): void {
    // obtiene las listas de los vuelos
    this.vueloService.obtenerVuelos().subscribe(data => {
      this.vuelos = data;
    });
  }

  eliminar(id: number) {
    if (confirm('¿Seguro que deseas eliminar este vuelo?')) {
      this.vueloService.eliminarVuelo(id);
    }
  }
}
