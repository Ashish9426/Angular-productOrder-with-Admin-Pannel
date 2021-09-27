import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { faGrin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // @Input() childPost:any
  src1="https://www.chetu.com/img/chetu-logo-white.png";
  faSignOutAlt=faSignOutAlt
  faGrin = faGrin
  data:any
  pp:any
  nn:any
  src = "pp"
  constructor(private _router:Router, private _toast:ToastrService) { 
    let record:any
    let data:any
    record = localStorage.getItem("newUser")
    console.log(record)
    console.log(typeof(record))
    data = JSON.parse(record)
    let f=data.fname;
    let l=data.lname;
    let p=data.photo;
    this.nn = f
    this.pp = p
    console.log(f)
    console.log(l)
    console.log(p)
  

  }

  ngOnInit(): void {
    

    }


  logout(){
    this._router.navigate(["/login"])
    this._toast.success("Successfully Logout","Thanks",{timeOut:5000})
    
    }

}
