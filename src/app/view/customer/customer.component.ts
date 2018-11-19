import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TabNavService } from '../../service/tabNav.service';

import { customersData } from '../../data/customers';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private tabNavService: TabNavService
  ) { }

  title = 'app';
  private customerArr = customersData;

  private customer;

  ngOnInit() {
    const id = this.route.snapshot.params['id'].toString();
    this.customerArr.forEach(customer => {
      if (customer.id === id) {
        this.customer = customer;
      }
    });

    this.tabNavService.setTabNav('customer/' + id, '客户-' + this.customer.name);
  }
}
