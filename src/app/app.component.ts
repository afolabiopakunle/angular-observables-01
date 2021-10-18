import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
 
  mySubscription: Subscription;
  
  ngOnInit() {
  this.mySubscription =  interval(1000).subscribe(count => {
      console.log(count)
      if(count === 10) {
        this.mySubscription.unsubscribe
      }
    })
  }
}
