import { Component } from '@angular/core';
import { ContainerService } from '../container.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen: boolean;
  sectionName: string = "Home"
  constructor(public containerService:ContainerService){}

  //ENABLE HOME PAGE LAYOUT
  openHome(){
    this.containerService.updateRefOfStage.next('welcome');
    this.containerService.currentPage = 0;
    this.sectionName = "Home"
    this.toggleMobileMenu()
  }

  //OPEN ABOUT PAGE
  openAbout(){
    this.containerService.updateRefOfStage.next('about');
    this.containerService.currentPage = 1;
    this.sectionName = "About"
    this.toggleMobileMenu()
  }

  openSkills(){
    this.containerService.currentPage = 2;
    this.containerService.updateRefOfStage.next('skills');
    this.sectionName = "Skills"
    this.toggleMobileMenu()
  }

  openProjects(){
    this.containerService.currentPage = 3;
    this.containerService.updateRefOfStage.next('projects');
    this.sectionName = "Projects"
    this.toggleMobileMenu()

  }

  openContactInfo(){
    this.containerService.currentPage = 4;
    this.containerService.updateRefOfStage.next('contactInfo')
    this.sectionName = "Contact"
    this.toggleMobileMenu()
  }

  toggleMobileMenu(){
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }
}
