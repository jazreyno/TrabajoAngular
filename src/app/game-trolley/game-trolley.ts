import { Component, OnInit } from '@angular/core';
import {GameCart } from '../services/game-cart';
import { Game } from '../game-list/game';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-game-trolley',
  standalone: true,
  imports: [


  ],
  templateUrl: './game-trolley.html',
  styleUrl: './game-trolley.scss',
  animations: [
  
  trigger('cartState', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden',
        padding: '0px',
        margin: '0px',
        border: 'none'
      })),
      state('expanded', style({
        height: '*',
        opacity: 1,
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ],
})
export class GameTrolley implements OnInit {

  GameList: Game[] = [];
  isCartcollapsed : boolean =false;

  constructor(private  cartService: GameCart) { 
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => this.GameList = items);
  }

  removeFromCart(game: Game): void {
    this.cartService.removeFromCart(game);
  }

  toggleCart() {
  this.isCartcollapsed = !this.isCartcollapsed;
}

   cartAnimationState() {
    return this.isCartcollapsed ? 'collapsed' : 'expanded';
  }
}
