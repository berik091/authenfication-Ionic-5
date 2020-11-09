import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  showLoader: boolean;
  p_bar_value: number;
  public html: SafeHtml;
  public text: string = '<a href="/home">NT Gift</a>';

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.html = sanitizer.bypassSecurityTrustHtml(
      '<a href="/home">NT Gift</a>'
    );
  }

  ngOnInit() {
    let mask = document.querySelector(".mask");
    window.addEventListener("DOMContentLoaded", () => {
      mask.classList.add("hide");
      setTimeout(() => {
        mask.remove();
      }, 5000);
    });
  }
  login() {
    this.router.navigate(["/home/feed"]);
  }
}
