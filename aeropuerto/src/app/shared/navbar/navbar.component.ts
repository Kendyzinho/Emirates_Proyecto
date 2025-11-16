import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role: string = '';
  logged: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.logged = localStorage.getItem('logged') === 'true';
    this.role = localStorage.getItem('role') || '';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
