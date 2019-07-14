import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private allService:AllserviceService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['vicky', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required]]
    });
  }


  onSubmit(data) {
    console.log(data.value);
    this.allService.submitData(data.value)
    .subscribe((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }
}
