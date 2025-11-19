import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VueloModel } from 'src/app/models/vuelo.model';
import { VueloService } from 'src/app/services/vuelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  desplegarSidebar = true; 
  totalVuelos = 0;
  private subs = new Subscription();

  constructor(
    private vueloSvc: VueloService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.vueloSvc.obtenerVuelos().subscribe(vs => {
        this.totalVuelos = vs.length;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  toggleSidebar() {
    this.desplegarSidebar = !this.desplegarSidebar;
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

}
