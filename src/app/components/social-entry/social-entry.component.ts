import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-social-entry",
  templateUrl: "./social-entry.component.html",
  styleUrls: ["./social-entry.component.scss"],
})
export class SocialEntryComponent {
  constructor() {}

  loginGoogle() {
    alert("Google login!");
  }
}
