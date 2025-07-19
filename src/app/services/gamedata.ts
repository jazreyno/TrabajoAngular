import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game } from '../game-list/game';

const URL = 'https://686ebc1191e85fac429ed342.mockapi.io/games-info';

@Injectable({
  providedIn: 'root'
})
export class Gamedata {
  constructor(private http: HttpClient){}

  public getallGames(): Observable<Game[]> {
    return this.http.get<Game[]>(URL).pipe(tap((games: Game[]) =>
      games.forEach(game => {
        game.quantity = 0;
        game.stockinicial = game.stock;
      })
    ));
  }


}
