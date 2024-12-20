import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Зазначаємо, що компонент standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    NavigationComponent,
    RouterModule,
    HeroComponent,
    RecomendationsComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'EasyRent';
}
