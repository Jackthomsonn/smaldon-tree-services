import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { QuoteComponent } from './quote/quote.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [ {
  path: '',
  redirectTo: '/home'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'services',
  component: ServicesComponent
}, {
  path: 'project',
  component: ProjectComponent,
  data: {
    title: undefined,
    bio: undefined,
    teamMembers: undefined,
    imageUrl: undefined,
    imageUrl2: undefined,
  }
}, {
  path: 'quote',
  component: QuoteComponent
} ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
