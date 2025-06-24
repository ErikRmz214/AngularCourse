import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
})

export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  //metodo para obtener valores del heroe
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  capitalizedName = computed(() => {
    this.name().toUpperCase
  })

  //metodo para cambiar el heroe
  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  //metodo para reiniciar el heroe
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  //boton para cambiar la edad del heroe
  changeAge() {
    this.age.set(60);
  }

}
