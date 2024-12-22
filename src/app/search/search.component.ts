import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor,NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  cities: string[] = ['Київ', 'Львів', 'Одеса'];

  apartments = [
    {
      id: 1,
      name: '2-кімнатна квартира',
      price: 10000,
      imageUrl: 'https://iili.io/2NniVRe.md.jpg',
      city: 'Київ',
      rooms: 2,
    },
    {
      id: 2,
      name: '3-кімнатна квартира',
      price: 15000,
      imageUrl: 'https://iili.io/2NniWOu.md.jpg',
      city: 'Львів',
      rooms: 3,
    },
    {
      id: 3,
      name: '1-кімнатна квартира',
      price: 8000,
      imageUrl: 'https://iili.io/2NXTKua.md.jpg',
      city: 'Одеса',
      rooms: 1,
    },
    {
      id: 4,
      name: '4-кімнатна квартира',
      price: 20000,
      imageUrl: 'https://iili.io/2NXTfwJ.md.jpg',
      city: 'Київ',
      rooms: 4,
    },
  ];

  filteredApartments = this.apartments;

  selectedCity: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  rooms: number | null = null;

  applyFilters(): void {
    console.log('Selected city:', this.selectedCity);
    console.log('Min price:', this.minPrice);
    console.log('Max price:', this.maxPrice);
    console.log('Rooms:', this.rooms);
    console.log('Original Apartments:', this.apartments);

    this.filteredApartments = this.apartments.filter((apartment) => {
      const matchesCity =
        !this.selectedCity || apartment.city.toLowerCase() === this.selectedCity.toLowerCase();
      //console.log('City Match:', matchesCity, apartment);
  
      const matchesMinPrice =
        this.minPrice === null || apartment.price >= this.minPrice;
      //console.log('Min Price Match:', matchesMinPrice, apartment);
  
      const matchesMaxPrice =
        this.maxPrice === null || apartment.price <= this.maxPrice;
      //console.log('Max Price Match:', matchesMaxPrice, apartment);
      //console.log('Max Price Filter:', maxPrice, typeof maxPrice);
      const matchesRooms =
        this.rooms === null || apartment.rooms === this.rooms;
      //console.log('Rooms Match:', matchesRooms, apartment);
      
      if(matchesCity && matchesRooms && matchesMaxPrice)
      {
          console.log(apartment)
      }

      console.log('Apartment:', apartment.name);
      console.log('City Match:', matchesCity);
      console.log('Min Price Match:', matchesMinPrice);
      console.log('Max Price Match:', matchesMaxPrice);
      console.log('Rooms Match:', matchesRooms);

      return matchesCity && matchesMinPrice && matchesMaxPrice && matchesRooms;
    });

    console.log('Filtered apartments:', this.filteredApartments);
  }
}
