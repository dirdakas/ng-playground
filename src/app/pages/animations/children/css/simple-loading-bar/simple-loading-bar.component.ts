import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-loading-bar',
  templateUrl: './simple-loading-bar.component.html',
  styleUrls: ['./simple-loading-bar.component.scss']
})
export class SimpleLoadingBarComponent {
  isLoadingBarActive: boolean;

  loadingBarClicked(): void {
    this.isLoadingBarActive = true;

    setTimeout(() => {
      this.isLoadingBarActive = false;
    }, 3000);
  }
}
