import { Component } from '@angular/core';
import { ContainerService } from '../container.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  //CONSTRUCTOR TO INJECT SERVICES TO COMPONENT
  constructor(
    private containerService: ContainerService
  ){}
  renderHeader(event: Event){
    event.preventDefault();
    event.stopPropagation();

    //SCROLL TO ABOUT PAGE.
    this.containerService.currentPage = 1;
    this.containerService.updateRefOfStage.next('about');
  }
}
