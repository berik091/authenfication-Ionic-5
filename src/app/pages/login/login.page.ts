import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public html: SafeHtml;

  public text: string = '<a href="/home">NT Gift</a>';

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.html = sanitizer.bypassSecurityTrustHtml(
      '<a href="/home">NT Gift</a>'
    );
  }

  ngOnInit() {}
  login() {
    this.router.navigate(["/home/feed"]);
  }
}
