import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from 'src/app/models/Plat';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {

  plat : Plat;
  platForm : FormGroup;
  id : number;
  constructor(private fb : FormBuilder, private service : PlatService, private router : Router, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(url => {
      this.id = Number(url.get("id"));
      this.service.getPlatById(this.id).subscribe(plat => {
        this.plat = plat;
        this.editData();
      })
    })
  }


  editPlat = () => {
    console.log(this.platForm.value);
    if(
      this.platForm.value.nom != null &&
      this.platForm.value.description != null &&
      this.platForm.value.prix != null
    ) {
      this.service.updatePlat(this.id, this.platForm.value).subscribe(plat => {
        this.router.navigateByUrl("carte");
        
      })
    }
  }

  editData = () => {
    this.platForm = this.fb.group({
      id: this.plat.id,
      nom: this.plat.nom,
      description: this.plat.description,
      prix: this.plat.prix,
      image: this.plat.image
    })
  }
}
