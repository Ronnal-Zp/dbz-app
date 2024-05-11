import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShowComponent } from "./components/show/show.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShowComponent,
    ListComponent
  ],
  exports: [
    ShowComponent,
    ListComponent
  ]
})
export class HeroeModule { }
