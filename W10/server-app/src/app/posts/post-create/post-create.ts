import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrl: './post-create.css',
})
export class PostCreate {
  enteredTitle = "";
  enteredContent = "";

  constructor(public postsService: PostService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
