import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

recipies;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.recipies = this.dataService.recipies;
  }

}
