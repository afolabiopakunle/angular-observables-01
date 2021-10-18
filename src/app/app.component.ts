import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
 
 ngOnInit() {
   let custom = new Observable(observer => {
     let count = 0;
     setInterval(() => {
       observer.next(count++);
        // count++
     }, 1000)
   });
   custom.subscribe(data => {
     console.log(data)
   })
 }
}
