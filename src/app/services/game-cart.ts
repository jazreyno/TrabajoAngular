import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Game } from '../game-list/game';


@Injectable({
  providedIn: 'root'
})
export class GameCart {
  
  private _stockUpdate: Subject<{id : number, stock: number}> = new Subject();
  public stockUpdate$: Observable<{id : number, stock: number}> = this._stockUpdate.asObservable();

  private _cartList: Game [] = [];
  private _cartListSubject: BehaviorSubject<Game[]> = new BehaviorSubject(this._cartList);
  public cartItems$: Observable<Game[]> = this._cartListSubject.asObservable();



  constructor() { }

  addToCart(game: Game){
    let item: Game | undefined = this._cartList.find((g1) => g1.id === game.id);
    if(!item){
      let Gamecopy: Game = {...game};
      this._cartList.push(Gamecopy);
    }
    else{
      item.quantity += game.quantity;
    }
    this._updateStock(game.id, game.stock - game.quantity);
    this._cartListSubject.next(this._cartList);
  }

  removeFromCart(game: Game) {
    let index:number = this._cartList.findIndex((g1) => g1.id === game.id);
    if(index !== -1){
      let item = this._cartList[index];
      this._updateStock(item.id, game.stock);
      this._cartList.splice(index, 1);
      this._cartListSubject.next(this._cartList);
    }
  }

  private _updateStock(id: number, stock: number){
    this._stockUpdate.next({id, stock});
  }

  private _getCartItems(): Game[] {
    return this._cartList;
  }

  private _getCartItemById (title: string): Game | undefined {
    return this._cartList.find(g => g.title === title );
  }
}
