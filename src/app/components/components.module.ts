import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { StartComponent } from "./start/start.component";
import { LogoComponent } from "./logo/logo.component";
import { SocialComponent } from "./social/social.component";

@NgModule({
  declarations: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    SocialComponent,
  ],
  exports: [SlidesComponent, StartComponent, LogoComponent, SocialComponent],
  imports: [CommonModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
