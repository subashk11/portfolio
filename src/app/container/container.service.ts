import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  showHeader: boolean = false;
  currentPage: number = 0;
  constructor() { }
}
