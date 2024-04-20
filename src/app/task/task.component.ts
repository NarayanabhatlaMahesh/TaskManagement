import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  
  constructor(public http : HttpClient){}

  getData()
  {
    this.http.get('localhost:8080/getTasks').subscribe((data:any)=>{
      console.log(data);
    });
  }



}
