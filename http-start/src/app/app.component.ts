import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://ng-http-requests-163b0-default-rtdb.firebaseio.com/posts.json', postData).subscribe(
      (responseData) => {
        console.log(postData);
      }
    );
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPosts() {
    this.http.get('https://ng-http-requests-163b0-default-rtdb.firebaseio.com/posts.json').subscribe(
      (posts)=>{
        console.log(posts);
      }
    );
  }
}
