import { PostService } from './../../service/post.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {

  allUsers:any;

  constructor(private postService: PostService,
    private snackBar: MatSnackBar){}


    ngOnInit(){
      this.getAllUsers();
    }
    getAllUsers(){
      this.postService.getAllUser().subscribe(res=>{
        console.log(res);
        this.allUsers = res;
      }, error=>{
        this.snackBar.open("Something Went Wrong", "Ok")
      })
    }

}
