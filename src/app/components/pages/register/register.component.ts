import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faUser=faUser;
  faLock=faLock;
  faEnvelopeSquare=faEnvelopeSquare;
  faMobile=faMobile;
  

  formdata={
    "fname":'',
    "lname":'',
    'email':'',
    'mobile':'',
    // 'department':'',
    'password':'',
    // 'confirmpassword':'',
    // 'address':''
    'photo':''
  }
  constructor(private _router:Router, private _toast:ToastrService) { }

  ngOnInit(): void {
  }

  submit(data:NgForm){
    console.log(data)
    console.log(data.control.value.fname)
    localStorage.setItem("newUser", JSON.stringify(this.formdata))

    this._router.navigate(["/login"])
    this._toast.info("Successfully Registered","Thanks",{timeOut:5000})


}
}
