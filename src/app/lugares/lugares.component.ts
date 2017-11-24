import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  data: any = [];
  url = 'http://muvdivive.com/api/app/viewsets/instalaciones/';

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    return this.http.get(this.url).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
