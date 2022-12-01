import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapServices} from "../services/face-snap.services";

@Component({
  selector: 'app-face-snap-lis',
  templateUrl: './face-snap-lis.component.html',
  styleUrls: ['./face-snap-lis.component.scss']
})
export class FaceSnapLisComponent implements OnInit {
  faceSnaps !: FaceSnap[];

  constructor(private faceSnapServices: FaceSnapServices) {
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapServices.getAllFaceSnap();
  }

}
