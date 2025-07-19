import { Component } from '@angular/core';
import { GameList } from "../game-list/game-list";
import { GameTrolley } from "../game-trolley/game-trolley";


@Component({
  selector: 'app-game-home',
  imports: [
    GameList, 
    GameTrolley],
  templateUrl: './game-home.html',
  styleUrl: './game-home.scss'
})
export class GameHome {

}
