import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
display;
recipie;
recipies;
id;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.recipies = this.dataService.recipies;
    this.recipie = this.recipies[this.id];

    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.recipie = this.recipies[this.id];
    })
  }

}
