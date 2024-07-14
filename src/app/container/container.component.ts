import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ContainerService } from './container.service';
import { BehaviorSubject } from 'rxjs';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterViewInit {

  currentElementRef: ElementRef;
  
  //CONSTRUCTOR TO INJECT SERVICES
  constructor(public containerService: ContainerService){}
  ngAfterViewInit(): void {
    this.setCurrentSection();
  }

  ngOnInit(){
   
  }

  

  setCurrentSection(){
    this.containerService.updateRefOfStage.subscribe((data) => {
      console.log('current page data : ', data);
      if(data == 'welcome'){
        const element = document.getElementById('appWelcomePage');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if(data == 'about'){
        const element = document.getElementById('appAboutPage');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if(data == 'skills'){
        const element = document.getElementById('appSkillsPage');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if(data == 'projects'){
        const element = document.getElementById('projectsPage');
        if(element){
          element.scrollIntoView({behavior:'smooth', block:'start'})
        }
      } else if(data == 'contactInfo') {
        const element = document.getElementById('contactInfoPage');
        if(element){
          element.scrollIntoView({ behavior:'smooth', block:'start'})
        }
      }

    })
  }

}
