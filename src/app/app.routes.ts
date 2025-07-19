import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameAbout } from './game-about/game-about';
import { GameHome } from './game-home/game-home';

export const routes: Routes = [

    {path :'home', component:GameHome },
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'about', component:GameAbout } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutes { }
