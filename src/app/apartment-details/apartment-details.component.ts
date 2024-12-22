import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-apartment-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './apartment-details.component.html',
  styleUrl: './apartment-details.component.css'
})
export class ApartmentDetailsComponent implements OnInit {

  apartmentId: string | null = null;

  constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.apartmentId = this.route.snapshot.paramMap.get('id');

      console.log("Apartment ID: ", this.apartmentId);
  }
}
