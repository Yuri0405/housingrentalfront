import { Routes } from '@angular/router';
import { RecomendationsComponent } from './recomendations/recomendations.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
  { path: '', component: RecomendationsComponent }, // Головна сторінка
  { path: 'profile', component: ProfileComponent }, // Профіль
  { path: 'login', component: LoginComponent }, // Авторизація
  { path: 'search', component: SearchComponent }, // Пошук
  { path: 'apartment/:id', component: ApartmentDetailsComponent },
  { path: 'booking/:id', component: BookingFormComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];
