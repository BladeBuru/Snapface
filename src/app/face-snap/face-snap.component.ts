import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapServices} from "../services/face-snap.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input()faceSnap !: FaceSnap;
  clickLike !: string;

  constructor(private faceSnapServices : FaceSnapServices, private router : Router ) { }

  ngOnInit(): void {

    this.clickLike = "like";
     }

  onClixkLike(){
    if(this.clickLike == "like"){
      this.faceSnapServices.snapFaceSnapId(this.faceSnap.id,'snap');
      this.clickLike = "Unlike"
    }else{
      this.faceSnapServices.snapFaceSnapId(this.faceSnap.id,'unsnap');
      this.clickLike = "like"
    }


  }

  OnFaceSnap(){
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);

  }

}
