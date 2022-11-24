import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // click event use @HostListener:--
  @HostListener('click') myclick() {
    alert('Hello clicked');
  }

  // scroll event use @HostListener jquery:-- 
  @HostListener('window:scroll', ['$event']) myScroll() {
    console.log('scrolling is here!!!!!!');
  }

  ngOnInit(): void {

    // use normal scroll event use jquery:-- 
    let data = 0;
    $(window).scroll(() => {
      data++;
      console.log(`${data} is an local!`);
    });

  }

  isStatusOnline: boolean = true;
  isStatusOffline: boolean = false;

  products: any[] = [
    { name: 'Laptop' },
    { name: 'TV' },
    { name: 'Mobile' },
    { name: 'Washing Machine' },
    { name: 'Sound Box' },
    { name: 'Air Phone' },

  ]

}
