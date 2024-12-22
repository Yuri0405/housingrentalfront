import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit {
      apartmentId: string | null = null;

      constructor(private route: ActivatedRoute,
        private router: Router
      ) {}

      ngOnInit(): void {
        console.log("Component booking initialised")
          this.apartmentId = this.route.snapshot.paramMap.get('id');
      }

      onSubmit(): void {
        // Тут можна реалізувати логіку відправки даних на сервер
        console.log('Booking submitted');

        // Перенаправлення на сторінку підтвердження
        this.router.navigate(['/confirmation']);
      }
}
