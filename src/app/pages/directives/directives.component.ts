import {
  Component,
} from '@angular/core';

import { IExampleObject } from './../../interfaces/example-object';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  examplesList: IExampleObject[] = [
    {
      component: null,
      description: 'Simple text highlight via directive'
    },
    {
      component: null,
      description: 'Simple text highlight via directive. Highlight on hover. Using `Renderer`'
    },
    {
      component: null,
      description: 'Simple text highlight via directive. Highlight on hover. Using `Binding`'
    },
    {
      component: null,
      description: 'Simple text highlight via directive. Highlight on hover. Using `Binding`. Color properties passed via attributes'
    },
    {
      component: null,
      description: 'Simple structural directive example.'
    }
  ];

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  isOnlyOdd: boolean = false;

  toggleExample(element: HTMLElement, index: number): void {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      this.examplesList[index].isActive = true;
    } else {
      element.style.display = 'none';
      this.examplesList[index].isActive = false;
    }
  }
}
