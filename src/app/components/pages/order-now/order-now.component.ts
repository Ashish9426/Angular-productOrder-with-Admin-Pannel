import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { OrderService } from 'src/app/shared/services/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent implements OnInit {
  orderdata:FormGroup
  constructor(private _orderService:OrderService,
    private _toast:ToastrService,
    private _router:Router
    ) {
    this.orderdata=new FormGroup({
      "item":new FormControl(''),
      "customer":new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  submit(){
  
    let order= {...this.orderdata.value};
    order["time"]=new Date()
    this._orderService.CreateOrder(order).subscribe((result:any)=>{
    this._toast.success("Order successfully placed.","Thanks",{timeOut:5000})
    // setTimeout(() => {
    //   this._router.navigate(["/order-menu"])
    // }, 6000);
      this.orderdata.reset()
    })
  }
}
