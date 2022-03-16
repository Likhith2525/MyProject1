import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  men=[];
  searchTerm:string;
  constructor(private router:Router,private dsObj:DataService) { }

  ngOnInit() {
    this.dsObj.getMenData().subscribe(
      data=>{
        this.men=data;

      },
      err=>{
        console.log("ERROR is",err);
      }
    )

  }

  onClick(id){
    this.router.navigateByUrl('men/'+id)
  }

}
