import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private hero: any[] = [];

  constructor() { }

  getAllHeroes(): any[]{
    return this.hero;
  }

  getHeroId(id: number): any {
    return id;
  }

  /*getHeroesByName(name: String): any[]{
    return name;
  }

  modifyHero(hero: string): void{

  }

  delHero(hero: string): void{

  } */ 

}
