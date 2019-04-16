import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-users',
  templateUrl: './admin-create-users.page.html',
  styleUrls: ['./admin-create-users.page.scss'],
})
export class AdminCreateUsersPage implements OnInit {

  frmAddPlayer: FormGroup;
  jugadores: [];


  constructor() {
    this.frmAddPlayer = new FormGroup({
      'jugadores': new FormArray([
        new FormControl('Pepito Perez', Validators.required)
      ])
    });
   }

   addPlayer() {
     (<FormArray>this.frmAddPlayer.controls['jugadores']).push(
       new FormControl('', Validators.required)
     );
   }

  ngOnInit() {
  }

}
