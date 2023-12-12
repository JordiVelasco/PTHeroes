import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private hero: any[] = [];

  constructor() { }

  getAllHeroes(): any[] {
    return this.hero;
  }

  getHeroId(id: number): any {
    return id;
  }

  addHero(hero: any): void {
    hero.id = this.getNextId();
    this.hero.push(hero);
  }

  updateHero(hero: any): void {
    const index = this.hero.findIndex(h => h.id === hero.id);
    if (index !== -1) {
      this.hero[index] = hero;
    }
  }

  private getNextId(): number {
    const maxId = Math.max(...this.hero.map(h => h.id), 0);
    return maxId + 1;
  }

  deleteHero(hero: any): void {
    const index: number = this.hero.findIndex(h => h.id === hero.id);
    if (index !== -1) {
      this.hero.splice(index, 1);
    }
  }
  
}
