import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
  public title: string;
  public bio: string;
  public teamMembers: string[];
  public imageUrl: string;
  public imageUrl2: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (history.state.data) {
      const { title, bio, teamMembers, imageUrl, imageUrl2 }: any = history.state.data;
      localStorage.setItem('title', title);
      localStorage.setItem('bio', bio);
      localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
      localStorage.setItem('imageUrl', imageUrl);
      localStorage.setItem('imageUrl2', imageUrl2);

      this.title = title;
      this.bio = bio;
      this.teamMembers = teamMembers;
      this.imageUrl = imageUrl;
      this.imageUrl2 = imageUrl2;
    } else {
      this.title = localStorage.getItem('title');
      this.bio = localStorage.getItem('bio');
      this.teamMembers = JSON.parse(localStorage.getItem('teamMembers'));
      this.imageUrl = localStorage.getItem('imageUrl');
      this.imageUrl2 = localStorage.getItem('imageUrl2');
    }
  }
}
