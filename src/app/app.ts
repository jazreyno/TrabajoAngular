import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutes } from './app.routes';
import { GameList } from './game-list/game-list';
import { GameAbout } from "./game-about/game-about";
import { GameTrolley } from "./game-trolley/game-trolley";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbModule,
    AppRoutes,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'GameStore';
  isCollapsed: boolean = false;
}
