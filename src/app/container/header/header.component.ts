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
    this.containerService.currentPage = 0;
  }

  //OPEN ABOUT PAGE
  openAbout(){
    this.containerService.currentPage = 1;
  }
}
