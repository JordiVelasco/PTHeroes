import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from "../hero.service";
import { flatMap } from 'rxjs';

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
  filterValue = '';
  showForm = false;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getAllHeroes();
  }

  editHero(hero: any): void {
    this.selectedHero = { ...hero };
    this.showForm = true;
  }

  searchHero(): void {
    this.heroes = this.heroService.searchService(this.filterValue);
  }

  addHero(): void {
    this.showForm = true;
    this.selectedHero = {};
  }

  saveHero(): void {
    if (this.selectedHero && this.selectedHero.id) {
      this.heroService.updateHero(this.selectedHero);
    } else {
      this.heroService.addHero(this.selectedHero);
    }
    this.selectedHero = {};
    this.heroes = this.heroService.getAllHeroes();
    this.showForm = false;
  }

  deleteHero(hero: any): void {
    const confirmDelete = window.confirm(`¿Estás seguro que deseas borrar a ${hero.name}?`);
    if (confirmDelete) {
      this.heroService.deleteService(hero);
      this.heroes = this.heroService.getAllHeroes();
    }
  }

  cancel(): void { 
    this.selectedHero = {}; 
    this.showForm = false;
  }
}
