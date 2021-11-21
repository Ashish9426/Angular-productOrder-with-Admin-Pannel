import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { AuthoService } from 'src/app/authentication/autho.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser=faUser;
  faUnlock=faUnlock;

  formdata:FormGroup;
  errormessage='';
  data:any
  constructor(private _router:Router, private _authoService:AuthoService, 
    private _toast:ToastrService) {
    this.formdata=new FormGroup({
      "userid":new FormControl('', Validators.required),
      'password':new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
   
  }

  submit(){
    // console.log(this.formdata)
    // console.log(this.formdata.value)
    let history:any;
    history = localStorage.getItem("newUser")
    // console.log(history)

    let data = JSON.parse(history)
    // console.log(data)
    // console.log(JSON.parse("history"))

    let id=data.email;
    let pass = data.password;
    // console.log(id)
    // console.log(pass)

    let user=this.formdata.value;
    // if(user.userid=="test@gmai.com" && user.password=="12345")
    if(user.userid==id && user.password==pass)

    {
     this._authoService.Authentication();
      this._router?.navigate(["/dashboard"])
      localStorage.setItem("newUser", JSON.stringify(this.formdata))
      this._toast.success("Successfully Signin","Thanks",{timeOut:5000})
    }

    else{
      this.errormessage="Invalid login id or password !"
      this._toast.warning("Failed to SignIn","warning",{timeOut:5000})
    }
  }
}
