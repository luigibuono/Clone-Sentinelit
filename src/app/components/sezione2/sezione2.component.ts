import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-sezione2',
  templateUrl: './sezione2.component.html',
  styleUrls: ['./sezione2.component.css']
})
export class Sezione2Component {
  @ViewChild('cardContainer') cardContainer!: ElementRef; // Riferimento al container delle card

  card = new Card();


  scrollCards(direction: 'left' | 'right'): void {
    const container = this.cardContainer.nativeElement;
    const scrollStep = 300; // Regola la quantità di scorrimento

    if (direction === 'left') {
      container.scrollLeft -= scrollStep; // Scorri a sinistra
    } else {
      container.scrollLeft += scrollStep; // Scorri a destra
    }
  }

  offsetX: number = 0;
  offsetY: number = 0;
  lastX: number = 0;
  lastY: number = 0;
  isDragging: boolean = false;
  initialX: number = 0;
  initialY: number = 0;

  startDrag(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.isDragging = true;
    if (event instanceof MouseEvent) {
      this.initialX = event.clientX - this.offsetX;
      this.initialY = event.clientY - this.offsetY;
    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0];
      this.initialX = touch.clientX - this.offsetX;
      this.initialY = touch.clientY - this.offsetY;
    }
  }

  endDrag(): void {
    this.isDragging = false;
  }

  onDrag(event: MouseEvent | TouchEvent): void {
    if (!this.isDragging) return;
    let newX: number = 0;

    if (event instanceof MouseEvent) {
      newX = event.clientX - this.initialX;
    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0];
      newX = touch.clientX - this.initialX;
    }

    const deltaX = newX - this.lastX;

    // Scorrimento solo verso destra o sinistra
    if (deltaX > 0) {
      // Scorrimento verso destra
      this.offsetX += Math.abs(deltaX);
    } else {
      // Scorrimento verso sinistra
      this.offsetX -= Math.abs(deltaX);
    }

    // Aggiorna la posizione precedente
    this.lastX = newX;
  }



}
