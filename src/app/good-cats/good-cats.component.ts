import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-cats',
  templateUrl: './good-cats.component.html',
  styleUrls: ['./good-cats.component.scss']
})
export class GoodCatsComponent implements OnInit {

  goodCats = []

  constructor() { }

  delete_good(url : string) {
    // @ts-ignore
    this.goodCats.splice(this.goodCats.indexOf(url),1)
    localStorage.setItem('goodCats',JSON.stringify(this.goodCats))
  }

  ngOnInit(): void {
    // @ts-ignore
    this.goodCats = JSON.parse(localStorage.getItem('goodCats'))
  }

}
