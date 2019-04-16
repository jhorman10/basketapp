import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-admin-create-csp-step3',
  templateUrl: './admin-create-csp-step3.page.html',
  styleUrls: ['./admin-create-csp-step3.page.scss'],
})
export class AdminCreateCSPStep3Page implements OnInit {

  frmAddTeam: FormGroup;
  equipos: [];


  constructor() {
    this.frmAddTeam = new FormGroup({
      'equipos': new FormArray([
        new FormControl('Gladiadores', Validators.required)
      ])
    });
   }

   addTeam() {
     (<FormArray>this.frmAddTeam.controls['equipos']).push(
       new FormControl('', Validators.required)
     );
   }

  ngOnInit() {
  }

}
