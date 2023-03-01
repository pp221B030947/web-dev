import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { categories } from '../categories';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories = [...categories];
  
}

