import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isValid: boolean = false;
  selectData: string = '';
  addData: any;

  constructor() { }

  ngOnInit(): void {
  }


  onSelectData(data: string) {
    this.selectData = data;
    this.isValid = true;
  }

  arr: any[] = [];

  onAddData() {

    if (this.selectData) {
      this.addData = this.selectData;

      this.arr.push({
        name: this.addData
      });
    }
    else {
      return
    }
  }

  allData: any[] = [
    {
      name: 'Bird',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem nisi libero quae dicta! Lorem ipsum dolor sit amet.',
      btnData: 'Select this Product',
      routerLin: 'bird',
      imgIn: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
      name: 'Laptop',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem nisi libero quae dicta! Lorem ipsum dolor sit amet.',
      btnData: 'Select this Product',
      routerLin: 'laptop',
      imgIn: 'https://detikapp.com/wp-content/uploads/2022/01/Review-10-Rekomendasi-Merk-Laptop-Terbaik-Harganya-Terbaru-2022.jpg'
    },
    {
      name: 'Mobile',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem nisi libero quae dicta! Lorem ipsum dolor sit amet.',
      btnData: 'Select this Product',
      routerLin: 'mobile',
      imgIn: 'https://www.tecno-mobile.in/storage/images/20220908/a809a228c03832225f2a048f3d4307b5.jpg'
    },
    {
      name: 'Washing Machine',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem nisi libero quae dicta! Lorem ipsum dolor sit amet.',
      btnData: 'Select this Product',
      routerLin: 'washing-machine',
      imgIn: 'https://www.lg.com/uk/images/microsite/washing-machine-buying-guide/LG-Washing-Machine-Buying-Guide-02-M.jpg'
    },
  ];

}
