import {Component,Injectable, Input, Output, EventEmitter} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-cat-child',
  templateUrl:'./cat.component.html',
  styleUrls: ['./cat.component.scss']
})

export class CatComponent {

  constructor(private http : HttpClient, private router: Router) {}

  @Input() url : string = "";
  @Output() keek = new EventEmitter<string>;

}
