import { Component } from '@angular/core';
import { ContainerService } from '../container.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public containerService:ContainerService){}

  //ENABLE HOME PAGE LAYOUT
  openHome(){
    this.containerService.updateRefOfStage.next('welcome');
    this.containerService.currentPage = 0;
  }

  //OPEN ABOUT PAGE
  openAbout(){
    this.containerService.updateRefOfStage.next('about');
    this.containerService.currentPage = 1;
  }

  openSkills(){
    this.containerService.currentPage = 2;
    this.containerService.updateRefOfStage.next('skills');
  }

  openProjects(){
    this.containerService.currentPage = 3;
    this.containerService.updateRefOfStage.next('projects');
  }

  openContactInfo(){
    this.containerService.currentPage = 4;
    this.containerService.updateRefOfStage.next('contactInfo')
  }
}
