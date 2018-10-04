import { Component } from '@angular/core';

@Component({
  selector: 'app-move-left',
  templateUrl: './move-left.component.html',
  styleUrls: ['./move-left.component.scss']
})
export class MoveLeftComponent {
  left: number = 0;

  onMove(): void {
    this.left += 20;
  }
}
