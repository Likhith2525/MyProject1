import { Component } from '@angular/core';
import { UserService } from './user.service';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'MyProject1';
  count;
  userObj;
  products=[];

  constructor(public us:UserService){

  }

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
             this.count=prodObj.products.length;
           }
        })
      }
    )

    this.us.dataObservable.subscribe(
      res=>{

       
        if(res["message"]==="Cart-empty"){
          alert("User cart is empty")
        }
        else{
          
            this.products=res["products"]
          
        }
      },
      err=>{
        console.log("err in reading cart",err)
        alert("Something went wrong in fetching cart items..")
      }
    )


}




  userLogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
  }

  
}
