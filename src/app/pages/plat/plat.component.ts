import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plat } from 'src/app/models/Plat';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  plat : Plat;
  constructor(private service : PlatService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(url => {
      let id : number = Number(url.get("id"));
      this.service.getPlatById(id).subscribe(data => {
        this.plat = data;
      })
    })

  }

}
