import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  constructor(private activatedRoute : ActivatedRoute)
  {
     this.userId = this.activatedRoute.snapshot.paramMap.get('id') ?? ""
     this.userId = this.activatedRoute.snapshot.params['id'];
  }

  userId !: string;

 

  

}
