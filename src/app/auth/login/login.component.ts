import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  email?:any="";
  nom?:any="";
  password?:any="";
  id:any;
  user:any;
  users:AngularFireList<any>;
  allUsers:any[]=[];

  constructor(private messageService:MessageService,private db:AngularFirestore,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  Submit(form) {
    
  if(form.value.email!="" && form.value.password!="")
     {this.dataService.getCurentUser(form.value.email,form.value.password);
     if(this.dataService.y==undefined)
     {     
       this.messageService.add({severity:'error', summary: 'Error', detail: 'Error'});
    }}
  else
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Error'});

  }

}
