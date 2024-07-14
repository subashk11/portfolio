import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  showHeader: boolean = false;
  currentPage: number = 0;

  updateRefOfStage:BehaviorSubject<String> = new BehaviorSubject<String>('welcome');
  
  constructor() { }
}
