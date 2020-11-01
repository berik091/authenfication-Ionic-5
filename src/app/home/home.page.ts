import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  public date: string;
  public time: string;

  constructor() {
    this.time = new Date().toLocaleTimeString().slice(0, -3);
    this.date = new Date().toLocaleDateString();
  }
}
