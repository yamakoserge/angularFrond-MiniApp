import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {

  userId = this.activatedRoute.snapshot.params['id']
  postData:any;
  comments:any;

  commentForm!: FormGroup;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder,
    private commentService: CommentService,
    ){}

    ngOnInit(){
      console.log(this.userId);
      this.getUserId();

      this.commentForm = this.fb.group({
        postedBy:[null, Validators.required],
        content:[null, Validators.required]
      })
    }

    publishComment(){
      const postedBy = this.commentForm.get('postedBy')?.value;
      const content = this.commentForm.get('content')?.value;

      this.commentService.createComment(this.userId, postedBy, content).subscribe(res=>{
      this.getCommentsByPost();
      }, error=>{
        this.matSnackBar.open("Something Went Wrong!!!", "Ok")
      })

    }
    getCommentsByPost(){
      this.commentService.getAllCommentsByPost(this.userId).subscribe(res=>{
        this.comments=res;
      },error=>{
        this.matSnackBar.open("Something went Wrong", "Ok")
      })
    }
    getUserId(){
      this.postService.getUserById(this.userId).subscribe(res=>{
        this.postData = res;
        console.log(res);
        this.getCommentsByPost()
      }, error=>{
        this.matSnackBar.open("Something Wen Wrong !!!", "ok");
      })
    }
    likeUser(){
      this.postService.likeUser(this.userId).subscribe((Response) =>{
        this.matSnackBar.open("User Liked Successfully", "Ok");
        this.getUserId();
      },(error)=>{
        this.matSnackBar.open("Something Went Wrong!!!", "Ok")
      })
    }
}
