import { Component } from '@angular/core';

const sidebarNavs = [
    { path: '/home', title: '首页',  icon: '', class: '' },
    { path: '/customersearch', title: '客户查询',  icon: '', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  title = 'sidebar';

  private SidebarNavs = sidebarNavs;
}
