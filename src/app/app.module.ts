import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderlistComponent } from './header/headerlist/headerlist.component';
import { HeroComponent } from './header/hero/hero.component';
import { PersonalinfoComponent } from './header/personalinfo/personalinfo.component';
import { AboutComponent } from './about_me/about/about.component';
import { About_detailComponent } from './about_me/about_detail/about_detail.component';
import { BasicInformationComponent } from './about_me/basicInformation/basicInformation.component';
import { SkillsComponent } from './profession/skills/skills.component';
import { ProfessionalComponent } from './profession/professional/professional.component';
import { PortfolioComponent } from './potofolioPage/portfolio/portfolio.component';
import { ImageslistComponent } from './potofolioPage/imageslist/imageslist.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [					
    AppComponent,
    HeaderlistComponent,
    HeroComponent,
    PersonalinfoComponent,
      AboutComponent,
      About_detailComponent,
      BasicInformationComponent,
      SkillsComponent,
      ProfessionalComponent,
      PortfolioComponent,
      ImageslistComponent,
WorkexperienceComponent,
      EducationComponent,
      ReferenceComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
