import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatePostComponent} from "./pages/create-post/create-post.component";
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';

const routes: Routes = [
  {path:'create-post',component: CreatePostComponent},
  {path:'view-all',component: ViewAllComponent},
  {path:'search-By-Name', component: SearchByNameComponent},
  {path:'view-user/:id',component: ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
