import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.css'],
  imports: [NgFor,RouterModule],
  standalone:true
})
export class RecomendationsComponent {
  apartments = [
    { id:"2335421b-6eb1-41fc-8a2a-adbf2199dfc5", name: '2-кімнатна квартира', price: 10000, image: 'https://iili.io/2NniXDb.md.jpg' },
    { id:"12c7d0ce-be3c-4e94-adbc-c6a40183cadc", name: '3-кімнатна квартира', price: 15000, image: 'https://iili.io/2NniWOu.md.jpg' },
    { id:"2bf7ab04-b659-4e1c-9473-ae8102df2bfa", name: '1-кімнатна квартира', price: 8000, image: 'https://iili.io/2NniVRe.md.jpg' }
  ];
}
