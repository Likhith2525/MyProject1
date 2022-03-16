import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetailsService } from '../productdetails.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-kidsdetails',
  templateUrl: './kidsdetails.component.html',
  styleUrls: ['./kidsdetails.component.css']
})
export class KidsdetailsComponent implements OnInit {

  proddetails:any;
  status:boolean=true;
   
  constructor(private ar:ActivatedRoute,private pdObj:ProductdetailsService,private userService:UserService) { }

  ngOnInit(){

    let id=this.ar.snapshot.params.id;
    this.pdObj.getKidsDataById(id).subscribe(
        data=>{
          this.proddetails=data;
        },
        err=>{
          console.log("Error in getting data is",err)
        }
    )

    
  }
  change(){
    this.status=!this.status;
  }

  
  //product selected by user
  onProductSelect(productObject){

    //console.log(productObject)
    let username=localStorage.getItem("username")

    let newUserProductObj={username,productObject}

    console.log(newUserProductObj)

   this.userService.sendProductToUserCart(newUserProductObj).subscribe(
     res=>{
       alert(res['message'])
       this.userService.updateDataObservable(res.latestCartObj)
     },
     err=>{
       console.log("err in posting product to cart ",err)
       alert("Something wrong in adding product to cart...")
     }
   )

  }

}
