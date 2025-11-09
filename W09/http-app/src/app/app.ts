import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub = null;

  constructor(private http: HttpClient, private postsService: PostsService ) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }


  onCreatePost(postData: Post) {
    console.log(postData);
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      console.log(error);
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }
}

