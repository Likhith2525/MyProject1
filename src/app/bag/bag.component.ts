import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  userCartObj;
  products=[];
  userObj;
  count;
  sum;
  total;
  cfee=100;
  dis=250;

  constructor(private us:UserService) { }
  ngOnInit(): void {
    //get user data from local storage
     this.userObj= JSON.parse(localStorage.getItem("userObj"))
     //get userCartObj from API
     this.us.getProductsFromUserCart(this.userObj.username).subscribe(
       res=>{
         if(res.message==='Cart-empty'){
           this.us.updateDataObservable(0)
         }
         else{
           this.us.updateDataObservable(res.message)
         }
         this.us.dataObservable.subscribe(prodObj=>{
            if(prodObj==0){
               this.count=0;
            }
            else{
              this.sum=0;
              this.products=prodObj.products;
              for(let prod of this.products){
                this.sum=this.sum+(+prod.price);
                console.log(prod.price);
              }
              this.total=this.sum+this.cfee-this.dis;
              this.count=prodObj.products.length;
              
            }
         })
       }
     )
     //get user data from local storage
     this.userObj= JSON.parse(localStorage.getItem("userObj"))
    let username=localStorage.getItem("username")
    this.us.getProductsFromUserCart(username).subscribe(
      res=>{
        if(res["message"]==='Cart-empty'){
          alert("User cart is empty")
        }
        else{
          this.userCartObj=res["message"]    
          
        }
      },
      err=>{
        console.log("err in reading cart",err)
        alert("Something went wrong in fetching cart items..")
      }
    )
    }

  

}
