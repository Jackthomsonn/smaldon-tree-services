import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
  constructor(private router: Router) { }

  public goToProject(title, bio, teamMembers, imageUrl, imageUrl2) {
    this.router.navigate([ 'project' ], {
      state: {
        data: {
          title,
          bio,
          teamMembers,
          imageUrl,
          imageUrl2
        }
      }
    });
  }
}
