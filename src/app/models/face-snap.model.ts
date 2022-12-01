export class FaceSnap {
  id !: number;
  title !: string;
  description !: string;
  creatDate !: Date;
  snaps !: number;
  photo !: string;
  localisation ?: string;


  constructor(title: string, description: string, creatDate: Date, snaps: number, photo: string) {
    this.title = title;
    this.description = description;
    this.creatDate = creatDate;
    this.snaps = snaps;
    this.photo = photo;
  }

}
