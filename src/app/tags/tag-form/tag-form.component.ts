import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StashService } from '../../core/stash.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {
  name: string;

  loading: Boolean = true;

  constructor(private route: ActivatedRoute, private stashService: StashService, private router: Router) {}

  ngOnInit() {
    this.getTag();
  }

  getTag() {
    const id = parseInt(this.route.snapshot.params['id'], 10);
    if (!!id === false) {
      console.log('new tag');
      this.loading = false;
      return;
    }

    // TODO: Fetch tag for editing
  }

  onSubmit() {
    const id = this.route.snapshot.params['id'];

    if (!!id) {
      // TODO: Edit the tag
    } else {
      this.stashService.tagCreate({
        name: this.name
      }).subscribe(result => {
        this.router.navigate(['/tags', result.data.tagCreate.tag.id]);
      });
    }
  }

}
