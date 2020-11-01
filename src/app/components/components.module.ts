import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides/slides.component";
import { StartComponent } from "./start/start.component";
import { LogoComponent } from "./logo/logo.component";
import { SocialEntryComponent } from "./social-entry/social-entry.component";

@NgModule({
  declarations: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    SocialEntryComponent,
  ],
  exports: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    SocialEntryComponent,
  ],
  imports: [CommonModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
