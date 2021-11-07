import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public x = 51;
  public mywidth = 200;
  public mycolor = 'red'
  public myclass = 'red';
  public user = {
    name:'john'
  }
  changeColor(color: string) {
    this.mycolor = color;
  }

  


  ngOnInit(): void {
  }

}
