import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-base';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<string>('localhost:12345')
      .subscribe(x => {});
  }
}
