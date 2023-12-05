import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from "../hero.service";

@Component({
  standalone: true,
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class HeroListComponent implements OnInit {

  heroes: any = {};

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getAllHeroes();
  }
  
  editHero(hero: any): void{this.heroes = { ...hero };}

  saveHero(): void {
    if (this.heroes && this.heroes.id) {
      this.heroService.updateHero(this.heroes);
    } else {
      this.heroService.addHero(this.heroes);
    }
      this.heroes = {};
      this.heroes = this.heroService.getAllHeroes();
  }

  cancel(): void{this.heroes = {};}

}
