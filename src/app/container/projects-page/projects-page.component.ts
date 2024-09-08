
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent{
  showProjDetails: boolean = false;

  title: string; 
  description : string ;
  link:string;

  workflow: string[];


  projectDetails : any = {
    "ams": {
      "title":"Absence management system",
      "description":"The Substitute Teacher Management System provides a platform where substitute teachers can register, showcasing their qualifications and the subjects they are certified or qualified to teach. The system automates the process of managing teacher absences by creating job requests for substitutes whenever a teacher marks themselves absent. The system also enables substitutes to pick available job assignments that match their qualifications and availability, ensuring smooth and uninterrupted progress of the course.",
      "workflow": [
        "Teacher Marks Absence: A teacher logs into the platform, selects the subject/class, and enters the date of absence.",
        "Job Creation: The system creates a job request for a substitute based on the absent teacher’s subject and class.",
        "Substitute Selection: Substitutes can view open jobs, and if they are available for the given time and have the required qualifications, they can apply for the job.",
        "Assignment and Notification: The system assigns the substitute, and both the substitute and teacher are notified. The substitute is now responsible for covering the absent teacher’s classes."
      ]
    },
    "ems" : {
      "title":"Employee management system",
      "description": "The HR Management and Payroll Automation System is a comprehensive software solution designed to ease the work of HR departments by automating critical employee management tasks. It simplifies managing employee data, tracking leaves, and processing salary credits, while also facilitating performance reviews for salary hikes based on managerial feedback. The system provides a user-friendly platform that empowers HR personnel to maintain records with ease, automating repetitive tasks while offering the flexibility to manually add new employees when needed.",
      "workflow": [
        "Employee Onboarding: HR adds new employees to the system, entering all relevant details, such as job title, department, and salary.",
        "Leave Management: Employees request leaves through the platform, which automatically updates their leave balance and sends a notification to HR for approval.",
        "Salary Processing: At the end of each month, the system calculates salaries based on employee attendance and approved leaves. It automates the crediting process and generates salary slips.",
        "Performance Reviews: Managers periodically enter performance reviews, which are stored in the system and later used to determine salary hikes. HR can review and finalize the adjustments."
      ],
      "link":"https://github.com/subashk11/employee-management-system"
    },
    "weatherApp" : {
      "title":"Weather App",
      "description": "The Weather Forecast Application is a simple, user-friendly app designed to provide real-time weather information for any city. The app allows users to search for specific cities and get detailed weather data, including temperature, humidity, wind speed, and more. Built using Angular for responsive functionality and TailwindCSS for a sleek, minimalist UI, the app offers an intuitive experience for users to access weather updates efficiently.",
      "workflow": [
        "City Search: Users can enter the name of a city in the search bar, and the app uses the OpenWeatherMap API to fetch the current weather details for that location.",
        "Real-time Weather Data Display: The app displays the current weather, including temperature, weather description, humidity, and wind speed, all in a visually appealing format.",
        "Weather Forecast: Users can also view a 5-day weather forecast showing daily temperature changes and weather predictions.",
      ],
      "link":"https://subashk11.github.io/breeze-watch/"
    },
    "findajob" : {
      "title":"Find a job",
      "description": "The Find a Job project is designed using a microservices architecture, where different services handle distinct functionalities related to job management. This approach enables modular development, scalability, and independent deployment of services. The system leverages Spring Boot for building microservices, Eureka for service discovery, and MongoDB for data storage.",
      "workflow": [
        "Each microservice registers itself with the Eureka server upon startup.",
        "Services can query Eureka to discover the locations of other services dynamically, facilitating communication between microservices.",
        "Each microservice interacts with its respective MongoDB database to perform CRUD operations.",
        "The microservices use REST APIs to expose their functionalities and interact with other microservices and external clients."
      ],
      "link" : "https://github.com/subashk11/find-a-job-jobms"
    },
  }

  toggleDetails(){
    this.showProjDetails = !this.showProjDetails
  }

  showProject(e: any, projectName: string){
    this.title = this.projectDetails[projectName].title
    this.description = this.projectDetails[projectName].description
    this.workflow = this.projectDetails[projectName].workflow
    this.link = this.projectDetails[projectName]?.link
    console.log(" link : ", this.link)
    this.toggleDetails();
  }
}
