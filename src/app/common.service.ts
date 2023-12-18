import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  users= signal<any>([]);
  constructor() { }
}
