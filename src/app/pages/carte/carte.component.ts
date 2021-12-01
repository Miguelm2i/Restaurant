import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/Plat';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  plats : Plat[];

  constructor(private service : PlatService) { }

  ngOnInit(): void {
    this.service.getAllPlats().subscribe(data => {
      this.plats = data;
      console.log(this.plats);
    })
  }

  deletePlat = (id : number) => {
    console.log(id);
    this.service.deletePlat(id).subscribe();
    this.ngOnInit();
  }

}
