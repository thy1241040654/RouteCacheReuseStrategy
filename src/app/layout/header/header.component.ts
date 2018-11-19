import { Component, OnInit } from '@angular/core';
import { TabNavService } from '../../service/tabNav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tabNavService: TabNavService
  ) { }

  private tabNavs = this.tabNavService.tabNavs;

  title = 'header';

  private closeTab = function (path) {
    this.tabNavService.removeTabNav(path);
  };

  ngOnInit() {
  }
}
