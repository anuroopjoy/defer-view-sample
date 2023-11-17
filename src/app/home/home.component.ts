import { Component } from '@angular/core';
import { AdditionalInfoComponent } from '../additional-info/additional-info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [AdditionalInfoComponent],
})
export class HomeComponent {
  title = 'lazy-load-app';
  showInfo = false;

  showAdditionalInfo() {
    this.showInfo = true;
    setTimeout(() => {
      this.showInfo = false;
      console.log('reset happened');
    }, 3000);
  }
}
