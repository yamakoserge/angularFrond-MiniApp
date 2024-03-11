import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.scss'
})
export class SearchByNameComponent {

result:any=[];
name:any="";
  snackBar: any;

constructor
( private PostService:PostService,
  private MatSnackBar:MatSnackBar){}

  searchByName(){
    this.PostService.searchByName(this.name).subscribe(res=>{
      this.result = res;
      console.log(this.result)
    },error=>{
      this.snackBar.open("Something went Wrong!!!","Ok")
    })
  }
}
