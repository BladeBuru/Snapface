import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapLisComponent} from "./face-snap-lis/face-snap-lis.component";
import {LadingPageComponent} from "./lading-page/lading-page.component";
import {SingleFaceSnapComponent} from "./single-face-snap/single-face-snap.component";

const routes : Routes = [
  { path : 'facesnaps', component : FaceSnapLisComponent},
  {path : '', component : LadingPageComponent},
  {path : 'facesnap/:id', component : SingleFaceSnapComponent}

];
@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export  class AppRoutingModule{


}
