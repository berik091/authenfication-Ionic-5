import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-create",
  templateUrl: "./create.page.html",
})
export class CreatePage implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  addUser(name, email) {
    console.log(name, email);
  }

  ngOnInit() {}
}
