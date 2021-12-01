import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plat } from 'src/app/models/Plat';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-ajouter-plat',
  templateUrl: './ajouter-plat.component.html',
  styleUrls: ['./ajouter-plat.component.css']
})
export class AjouterPlatComponent implements OnInit {

  plats : Plat[];
  id : number;
  platForm : FormGroup;

  constructor(private fb : FormBuilder, private service : PlatService, private router : Router) {
    this.platForm = this.fb.group({
      id : this.id,
      nom: '',
      description: '',
      prix: 0,
      image: 'default.jpg'
    })
   }

  ngOnInit(): void {

    this.service.getAllPlats().subscribe(data => {
      this.plats = data;
      this.id = this.plats.length + 1;
    })
  }

  ajouterPlat = () => {
    if(
      this.platForm.value.nom != null &&
      this.platForm.value.description != null &&
      this.platForm.value.prix != null
    ) {
      this.service.createPlat(this.platForm.value).subscribe(plat => {
        this.router.navigateByUrl("carte");
        
      })
    }
  }
}
