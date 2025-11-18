import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true
})

// OOOOOOOOOOK
// boton search no funciona, solo imprime los datos en consola, ver más adelante con funcion de reserva

// hay q distinguir los tipos de pasajeros, si son adultos (+12) o niños (2<x<12) o bbebes (<2)

// si el tipo de vieja es ida y vuelta, se debe elegir fecha de retorno. esta esta bloqueada si es solo ida,
// pero si el tipo es multiviaje, se deben ir reiterando los campos, si tiene sentido?? Mirar el sitio web oficial de 
// Emirates para claridad

// quiza deberia estar el logo de emirates en el header?

// la interfaz del panel cliente se siente muy vacia, pienso añadir info de la empresa, o quiza destinos populares???
// de cualquier modo creo q la interfaz para la reserva deberia ser más grande

// el panel ni siquiera cubre toda la pantalla, hay que hacer un contenedor mayor para centralizar 

// el input de fechas estan muy abajo, descentralidos por el label que tienen arriba, quiza quitarlos o moverlos


export class DashboardComponent {

  public title: String = "Emirates"
  public tripType = "roundtrip";
  public cabinClass = "economy";
  public passengers = 1;

  public passengerOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  public origin: String = "Origen";
  public destination: String = "Destino";
  public departureDate: String = "Fecha de salida";
  public returnDate: String = "Fecha de regreso";

  public originDropdown = false;
  public destinationDropdown = false;

  public filteredOrigins: { city: string, country: string, airport: string, code: string } [] = [];
  public filteredDestinations: { city: string, country: string, airport: string, code: string } [] = [];

  airports = [
  {
    city: "New Delhi",
    country: "India",
    airport: "Indira Gandhi International Airport",
    code: "DEL"
  },
  {
    city: "Ahmedabad",
    country: "India",
    airport: "Sardar Vallabhbhai Patel International Airport",
    code: "AMD"
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    airport: "Dubai International Airport",
    code: "DXB"
  }];

  public onTripTypeChange() {
    if (this.tripType === "oneway") {
      this.returnDate = "";
    }
  }

  public filterAirports(type: 'origin' | 'destination'): void {
    const query = (type === 'origin' ? this.origin : this.destination).toLowerCase();

    const results = this.airports.filter(a =>
      a.city.toLowerCase().includes(query) ||
      a.country.toLowerCase().includes(query) ||
      a.airport.toLowerCase().includes(query) ||
      a.code.toLowerCase().includes(query)
    );

    if (type === 'origin') {
      this.filteredOrigins = results;
      this.originDropdown = query.length > 0;
    } else {
      this.filteredDestinations = results;
      this.destinationDropdown = query.length > 0;
    }
  }

  public selectAirport(type: 'origin' | 'destination', airport: any) {
    const text = `${airport.city} (${airport.code})`;

    if (type === 'origin') {
      this.origin = text;
      this.originDropdown = false;
    } else {
      this.destination = text;
      this.destinationDropdown = false;
    }
  }

  public showDropdown(type: String): void {
    if (type == 'origin') this.originDropdown = true
    else this.destinationDropdown = true
  }

  public search() {
    console.log({
      tripType: this.tripType,
      cabinClass: this.cabinClass,
      passengers: this.passengers,
      origin: this.origin,
      destination: this.destination,
      departure: this.departureDate,
      return: this.returnDate
    });
  }

}
