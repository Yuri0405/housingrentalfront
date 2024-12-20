import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit {
      apartmentId: number | null = null;

      constructor(private route: ActivatedRoute) {}

      ngOnInit(): void {
          this.apartmentId = Number(this.route.snapshot.paramMap.get('id'))
      }
}
