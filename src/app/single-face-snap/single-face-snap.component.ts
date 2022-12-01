import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapServices} from "../services/face-snap.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap !: FaceSnap;
  clickLike !: string;

  constructor(private faceSnapServices : FaceSnapServices, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const facSnapId = +this.route.snapshot.params['id']
    this.clickLike = "like";
    this.faceSnap = this.faceSnapServices.getFaceSnapById(facSnapId)
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
}
