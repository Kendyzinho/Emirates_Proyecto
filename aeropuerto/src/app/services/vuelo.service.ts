import { Injectable } from '@angular/core';
import { VueloModel } from '../models/vuelo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  // Lista en memoria
  private vuelos: VueloModel[] = [
    { id: 1, origen: 'SCL', destino: 'LIM', fecha: '2025-01-20', capacidad: 180, tarifa: 250 },
    { id: 2, origen: 'SCL', destino: 'MIA', fecha: '2025-01-25', capacidad: 200, tarifa: 600 }
  ];

  // Observable para que admin y cliente reciban actualizaciones
  private vuelosSubject = new BehaviorSubject<VueloModel[]>(this.vuelos);
  vuelos$ = this.vuelosSubject.asObservable();

  constructor() { }

  obtenerVuelos() {
    return this.vuelos$;
  }

  agregarVuelo(vuelo: VueloModel) {
    vuelo.id = Date.now();
    this.vuelos.push(vuelo);
    this.vuelosSubject.next(this.vuelos);
  }

  actualizarVuelo(vuelo: VueloModel) {
    const index = this.vuelos.findIndex(v => v.id === vuelo.id);
    if (index !== -1) {
      this.vuelos[index] = vuelo;
      this.vuelosSubject.next(this.vuelos);
    }
  }

  eliminarVuelo(id: number) {
    this.vuelos = this.vuelos.filter(v => v.id !== id);
    this.vuelosSubject.next(this.vuelos);
  }
}
