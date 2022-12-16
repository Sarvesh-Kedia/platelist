import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories = [
    {
        "id": "23",
        "name": "Sick Days",
        "items": ["khichdi", "upma"]
    },
    {
        "id": "43",
        "name": "Munchies",
        "items": ["burger", "fries", "noodles"]
    },
    {
        "id": "11",
        "name": "Dont Feel Like Cooking",
        "items": ["Shwarma", "Pasta"]
    },
    {
        "id": "45",
        "name": "Stress Eating",
        "items": ["fries", "cheese+balls"]
    }

  ]

  constructor(private route: ActivatedRoute) {

  }



  
  

}
