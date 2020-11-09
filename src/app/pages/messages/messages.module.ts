import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MessagesPageRoutingModule } from "./messages-routing.module";

import { MessagesPage } from "./messages.page";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MessagesPage],
})
export class MessagesPageModule {}
