import { Component, OnInit } from '@angular/core';
import { NavigationLinks, UserLinks } from '../../shared/constant-link';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = NavigationLinks;
  userLink = UserLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
