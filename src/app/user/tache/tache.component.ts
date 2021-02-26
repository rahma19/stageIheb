import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message, MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css'],
  providers: [MessageService]
})
export class TacheComponent implements OnInit {
user:any;
email:any;
nbr=0;
clonedProducts: { [s: string]: any; } = {};

constructor(private messageService:MessageService,private db:AngularFirestore,private dataService:DataService,private dbb:AngularFireDatabase) { }

  ngOnInit(): void {
    this.user=this.dataService.y;
    console.log(this.user);
    this.nbr=this.user.progression;
    console.log(this.nbr);
  }

  onRowEditInit(product: any) {
    this.clonedProducts[product.$key] = {...product};
    console.log(product);
 }
 
 onRowEditSave(product: any) {
   console.log(product.nom);
   let obj={
     progression:product.progression,
   }
   this.dbb.list('/users').update(product.$key,obj);
   this.messageService.add({severity:'success', summary: ' Message', detail:'progression ajouté'}); 

 }
 
 onRowEditCancel(product: any, index: number) {
 }

}
