import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {

  userId = this.activedRoute.snapshot.params['id']
  postData:any;
 // postService: any;

  constructor(
    private postService: PostService,
    private activedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    ){}

    ngOnInit(){
      console.log(this.userId);
    }

    getUserId(){
      this.postService.getUserById(this.userId).subscribe(res=>{
        this.postData = res;
        console.log(res);
      }, error=>{
        this.matSnackBar.open("Something Wen Wrong !!!", "ok");
      })
    }
}
