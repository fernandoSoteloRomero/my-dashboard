import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  template: ` <h1>Hola mundo</h1> `,
})
export class HeavyLoadersComponent {

  constructor() {
    const start = Date.now();

    while(Date.now() - start < 3000){
      
    }
  }


}
