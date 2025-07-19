import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer-component',
  imports: [],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  quantity!:number;
 
  @Input()
  max!:number;

  @Output()
  quantityChange:  EventEmitter<number> = new EventEmitter<number>();

  upQuantity():void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
  downQuantity():void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  updateQuantity(event: Event): void {
    const input =event.target  as HTMLInputElement;
    const value = Math.max(0, Math.min(parseInt(input.value, 10) || 0, this.max));
    this.quantity = value;
    input.value=this.quantity.toString();
    this.quantityChange.emit(this.quantity);
  }
  constructor (){};
}
