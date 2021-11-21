import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ingredients-edit',
  templateUrl: './ingredients-edit.component.html',
  styleUrls: ['./ingredients-edit.component.css']
})
export class IngredientsEditComponent implements OnInit {
// @Input() recipieIngredients;
@Input() display;
@Input() id;
@Output() cancelEventEmitter = new EventEmitter<boolean>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  cancelEvent(value: boolean) {
    this.cancelEventEmitter.emit(value);
    console.log("Display in ingredients-edit = ", this.display);
  }
  addIngredient(ingredientName, ingredientUnits, ingredientAmount){
    console.log("addIngredient");
    
    this.dataService.addIngredient(this.id,
      {
        name: ingredientName.value,
        units: ingredientUnits.value,
        amount: ingredientAmount.value
      })
      ingredientName.value = "";
      ingredientAmount.value = "";
      ingredientUnits.value = "-1";
  }
  
}
