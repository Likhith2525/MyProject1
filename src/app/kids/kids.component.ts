import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  men=[];
  searchTerm:string;

  constructor(private router:Router,private dsObj:DataService) { }

  ngOnInit() {
    this.dsObj.getKidsData().subscribe(
      data=>{
        this.men=data;

      },
      err=>{
        console.log("ERROR is",err);
      }
    )

  }

  onClick(id){
    this.router.navigateByUrl('kids/'+id)
  }


}
