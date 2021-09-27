import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/shared/services/order.service';
@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.css']
})
export class OrderMenuComponent implements OnInit {

  orders:any;
  constructor(private _orderService:OrderService,
    private _toast:ToastrService
    ) { }

  ngOnInit(): void {
    this.LoadOrder()
  }

  LoadOrder(){
    this._orderService.GetAllOrders().subscribe(r=>{
      //console.log(r)
      this.orders=r;
    })
  }

  RemoveOrder(id:number){
    this._orderService.DeleteOrder(id).subscribe((result:any)=>{
      this.LoadOrder()
      this._toast.info("Order removed successfully. ","Message")
    })
  }
}
