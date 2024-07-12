import { Component } from '@angular/core';
import { ContainerService } from './container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  //CONSTRUCTOR TO INJECT SERVICES
  constructor(public containerService: ContainerService){}

}
