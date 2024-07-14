import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = './assets/files/Resume.pdf'; 
    link.download = 'resume.pdf'; 
    link.click();
  }
}
