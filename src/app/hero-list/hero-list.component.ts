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

  heroes: any[] = [];
  selectedHero: any = {};

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getAllHeroes();
  }
  
  editHero(hero: any): void{
    this.selectedHero = { ...hero };
  }

  saveHero(): void {
    if (this.selectedHero && this.selectedHero.id) {
      this.heroService.updateHero(this.selectedHero);
    } else {
      this.heroService.addHero(this.selectedHero);
    }
      this.selectedHero = {};
      this.heroes = this.heroService.getAllHeroes();
  }

  cancel(): void{this.selectedHero = {};}

}
