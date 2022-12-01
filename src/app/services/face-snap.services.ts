import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({providedIn: 'root'})

export class FaceSnapServices {


  faceSnaps: FaceSnap [] = [
    {
      id: 0,
      title: "Safari",
      description: "Il y  a une giraphe et un soleil bien rouge",
      creatDate: new Date(),
      snaps: 100,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhuglt-LCZ7QBVyI0fwCpHX5OeaLzXiYhsTe1aEX_&s",
      localisation: "France"
    }, {
      id: 1,
      title: "Test",
      description: "Un gros texte qui est tout petit",
      creatDate: new Date(),
      snaps: 346,
      photo: "data:image/png;base64,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",
      localisation: "Test"
    }, {
      id: 2,
      title: "Tom holland",
      description: "Il y  a une giraphe et un soleil",
      creatDate: new Date(),
      snaps: 18,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhuglt-LCZ7QBVyI0fwCpHX5OeaLzXiYhsTe1aEX_&s"
    }
  ];


  getAllFaceSnap(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else
      return faceSnap;
  }

  snapFaceSnapId(id: number, snapType: 'snap'| 'unsnap'): void {

    const faceSnap = this.getFaceSnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }
}
