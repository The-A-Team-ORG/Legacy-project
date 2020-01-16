import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = 'Morgan Freeman'
  email = 'contact@example.com';
  phone = 5570089;
  constructor() { }

  ngOnInit() {
  }

}
