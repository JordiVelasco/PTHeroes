import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Agrega esta importación
import { HeroService } from "../hero.service";

@Component({
  standalone: true,
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  imports: [CommonModule, FormsModule] // Asegúrate de tener FormsModule aquí
})
export class HeroListComponent implements OnInit {

  heroes: any[] = [];
  selectedHero: any = {};

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getAllHeroes();
  }

  editHero(): void{}
  saveHero(): void{}
  cancel(): void{}

}
