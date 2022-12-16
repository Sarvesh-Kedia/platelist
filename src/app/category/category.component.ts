import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {

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


  name = '';

  itemList: any[] = [];

  newItemForm = this.formBuilder.group({
    item: '',
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {

  }


  onSubmit(): void {

    this.itemList.unshift(this.newItemForm.value.item);

    this.newItemForm.reset();

  }



  ngOnInit() {

    const id = this.route.snapshot.params['id'];

    let category = this.categories.filter(function(item) { return item.id === id; })[0];


    this.name = category.name;
    this.itemList = category.items;

    console.log(category)

  
  }



}
