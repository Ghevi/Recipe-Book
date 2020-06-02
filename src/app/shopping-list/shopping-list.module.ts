import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    // CommonModule, // imported with the shared module
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent }
    ]),
    SharedModule
  ]
})
export class ShoppingListModule {

}
