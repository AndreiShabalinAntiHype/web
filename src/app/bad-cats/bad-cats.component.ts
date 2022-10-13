import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bad-cats',
  templateUrl: './bad-cats.component.html',
  styleUrls: ['./bad-cats.component.scss']
})
export class BadCatsComponent implements OnInit {

  badCats = []

  constructor() { }

  delete_bad(url:string) {
    // @ts-ignore
    this.badCats.splice(this.badCats.indexOf(url),1)
    localStorage.setItem('badCats',JSON.stringify(this.badCats))
  }


  ngOnInit(): void {
    // @ts-ignore
    this.badCats = JSON.parse(localStorage.getItem('badCats'))
  }

}
