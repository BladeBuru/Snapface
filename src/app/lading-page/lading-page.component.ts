import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lading-page',
  templateUrl: './lading-page.component.html',
  styleUrls: ['./lading-page.component.scss']
})
export class LadingPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onContinue(){

  this.router.navigateByUrl('facesnaps');
  }
}
