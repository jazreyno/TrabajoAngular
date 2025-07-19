import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Game } from './game';
import { OnInit } from '@angular/core';
import { InputIntegerComponent } from '../input-integer.component/input-integer.component';
import { Gamedata } from '../services/gamedata';
import { GameCart } from '../services/game-cart';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    RouterModule,
    CurrencyPipe,
    InputIntegerComponent,
  ],
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss'
})

export class GameList implements OnInit {
  games: Game[] = [];

  constructor(
    private gameDataService: Gamedata,
    private cartservice: GameCart
  ) { }

  ngOnInit(): void {
    this.gameDataService.getallGames().subscribe(Gamedata => this.games = Gamedata);

    this.cartservice.stockUpdate$.subscribe(update  => {
      let game = this.games.find( g => g.id === update.id);
      if (game) {
        game.stock = update.stock
      }
  });
};

  addToCart(game: Game): void {
    this.cartservice.addToCart(game);
  }
}
