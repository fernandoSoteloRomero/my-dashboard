import { Component } from '@angular/core';
import { HeavyLoadersComponent } from '@shared/heavy-loaders/heavy-loaders.component';
import { HeavyLoadersFastComponent } from "../../../shared/heavy-loaders/heavy-loaders-fast.component";

@Component({
  standalone: true,
  imports: [HeavyLoadersComponent, HeavyLoadersFastComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {
  
}
