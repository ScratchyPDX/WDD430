import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private firebaseUtl = 'https://ng-complete-guide-scratchypdx-default-rtdb.firebaseio.com/';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http.post<Post>(this.firebaseUtl + 'posts.json', postData, {observe: 'response'}).subscribe(response => {
      console.log(response);
    }, error => {
      this.error.next(error.message);
    });
  }

  fetchPosts() {
    // let searchParams = new HttpParams();
    // searchParams = searchParams.append('print', 'pretty');
    return this.http.get<{ [key: string]: Post }>(this.firebaseUtl + 'posts.json', {
      headers: new HttpHeaders({'Custom-Header': 'Hello'}),
      // params: searchParams
    }).pipe(map((responseData) => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    }),
    catchError(errorRes => {
      this.error.next(errorRes.message);
      throw errorRes;
    }));
  }

  deletePosts() {
    return this.http.delete(this.firebaseUtl + 'posts.json', {
      observe: 'events'
    }).pipe(
      tap(event => {
        console.log(event);
        if(event.type === HttpEventType.Sent) {
          //...
        }
        if(event.type === HttpEventType.Response) {
          console.log(event.body);
        }
    }));
  }

}
