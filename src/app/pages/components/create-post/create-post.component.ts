import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { PostService } from '../../../service/post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  postForm!: FormGroup;
  services:string[] =[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackbar:MatSnackBar,
              private postService: PostService,) {}

  ngOnInit(){
    this.postForm = this.fb.group({
      name:[null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img:[null, Validators.required],
      postedBy:[null, Validators.required]
    })
  }

  add(event:any){
    const value = (event.value || '').trim();
    if (value){
      this.services.push(value);
    }
    event.chipInput!.clear();
  }
  remove(tag:any){
    const index = this.services.indexOf(tag);
    if (index>0){
      this.services.splice(index,1);
    }
  }

  createPost(){
    const data = this.postForm.value;
    data.services = this.services;

    this.postService.createNewPost(data).subscribe(res=>{
      this.snackbar.open("Users Created Successfully !!!", 'Ok');
      this.router.navigateByUrl("/");
    },error=>{
      this.snackbar.open("Something went wrong !!!", "Ok");
    })
  }
}
