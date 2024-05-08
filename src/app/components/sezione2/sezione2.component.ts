import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-sezione2',
  templateUrl: './sezione2.component.html',
  styleUrls: ['./sezione2.component.css']
})
export class Sezione2Component {
  @ViewChild('cardContainer') cardContainer!: ElementRef; // Riferimento al container delle card
  @ViewChild('parent') slider!: ElementRef<HTMLElement>; // Definiamo il tipo di ElementRef come HTMLElement

  card = new Card();
  mouseDown = false;
  startX!: number;
  scrollLeft!: number ;
  isCardClicked = false;

  scrollStep: number = 500; // Regola la quantità di scorrimento

scrollCards(direction: 'left' | 'right'): void {
  const container = this.cardContainer.nativeElement;
  if (direction === 'left') {
    container.scrollLeft -= this.scrollStep; // Scorri a sinistra
    this.isCardClicked = false;
  } else {
    container.scrollLeft += this.scrollStep; // Scorri a destra
    this.isCardClicked = false;
  }
}




  startDragging(e: MouseEvent, flag: boolean, slider: HTMLElement): void { // Specifichiamo il tipo di 'slider' come HTMLElement
    console.log(e);
    this.mouseDown = true;
    this.startX = e.pageX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;
    this.isCardClicked = true;
  }

  stopDragging(e: MouseEvent, flag: boolean): void {
    this.mouseDown = false;

  }

  moveEvent(e: MouseEvent, slider: HTMLElement): void { // Specificiamo il tipo di 'slider' come HTMLElement
    e.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - this.startX;
    slider.scrollLeft = this.scrollLeft - scroll;
  }


}
