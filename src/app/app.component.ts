import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isRectangleClicked: boolean;
  isCircle: boolean;

  isLoadingBarActive: boolean;

  loadingBarClicked() {
    this.isLoadingBarActive = true;

    setTimeout(() => {
      this.isLoadingBarActive = false;
    }, 3000);
  }
}
