import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
testi:any[] = [
{name: 'BUILD RELATIONSHIPS'},
{name : 'CONSTANTLY EVOLVE'},
{name : 'MAKE CONNECTION'}
]
isScrolled = false;
showCont1:boolean = true;
isActive:number = 0;

constructor() { }

ngOnInit(): void {
  this.Random(); // Chiamata per avviare l'intervallo
}

Random() {
  setInterval(() => {
    this.isActive = (this.isActive + 1) % this.testi.length;
     //callback , imposta isActive +1 per andare avanti e da il modulo diviso la lunghezza per tornare a 0
  }, 2000);
}

close(){
this.showCont1 = false;
}

@HostListener('window:scroll')
scrollEvent() {
  this.isScrolled = window.scrollY >= 1;
}

}

