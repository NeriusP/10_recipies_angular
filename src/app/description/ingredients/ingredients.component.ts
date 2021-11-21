import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  recipieIngredients;
  recipies;
  id;
  @Input() display = false;

  constructor(private dataService: DataService, private route: ActivatedRoute,) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.recipies = this.dataService.recipies;
    this.recipieIngredients = this.recipies[this.id].ingredients;

    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.recipieIngredients = this.recipies[this.id].ingredients;
    })
  }

  displayEdit(value: boolean){
    this.display = value;
    console.log("ingredients displayEdit =", this.display);
    
  }

}
