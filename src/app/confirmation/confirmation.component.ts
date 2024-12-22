import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
      console.log("Component initialised")
      setTimeout(()=> {
        this.router.navigate(['/'])
      },5000);
  }

}
