import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureSelect = 'recipe';

  onNavigate(seleckted: string) {
        this.featureSelect = seleckted;
  }
}
