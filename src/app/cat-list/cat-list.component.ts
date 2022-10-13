import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs';


@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit{

  @Input() badCats: string[] = []
  @Input() goodCats: string[] = []
  @Input() cats:string[] = []

  hide = false;



  constructor(private http:HttpClient) {
  }

  getCat(n:number) {
    for (let i = 0;i<n;++i) {
      this.http.get(environment.catApiBaseUrl).subscribe(response => {
        let url = JSON.parse(JSON.stringify(response))[0]['url']
        if (this.badCats.indexOf(url) == -1 && this.cats.indexOf(url) == -1  && this.goodCats.indexOf(url) == -1) {
          this.cats.push(url)
        }
        else {
          --i
        }
      })
    }
  }

  ngOnInit() {
    if (localStorage.getItem('badCats')) {
      // @ts-ignore
      this.badCats = JSON.parse(localStorage.getItem('badCats'));
    }
    else {
      localStorage.setItem('badCats','[]')
    }
    if (localStorage.getItem('goodCats')) {
      // @ts-ignore
      this.goodCats = JSON.parse(localStorage.getItem('goodCats'));
    }
    else {
      localStorage.setItem('goodCats','[]')
    }
    this.getCat(16)
  }
  addNewGoodCat(value:string) {
    this.cats.splice(this.cats.indexOf(value),1)
    this.getCat(1)
    this.goodCats.push(value)
    localStorage.setItem('goodCats',JSON.stringify(this.goodCats))
  }
  addNewBadCat(value:string) {
    this.cats.splice(this.cats.indexOf(value),1)
    this.getCat(1)
    this.badCats.push(value)
    localStorage.setItem('badCats',JSON.stringify(this.badCats))
  }
}
