import { Component } from '@angular/core';

import { customersData } from '../../data/customers';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customerSearch.component.html',
  styleUrls: ['./customerSearch.component.css']
})
export class CustomerSearchComponent {
  title = 'app';

  private customerArr = customersData;
}
