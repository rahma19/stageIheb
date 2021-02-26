import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message, MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css'],
  providers: [MessageService]

})
export class ListeTachesComponent implements OnInit {
  data:any[];
  clonedProducts: { [s: string]: any; } = {};
  users:AngularFireList<any>;
  allUsers:any[]=[];

  constructor(private messageService:MessageService,private db:AngularFirestore,private dataService:DataService,private dbb:AngularFireDatabase) { }
 
  ngOnInit() {
    var x= this.dataService.getUser();
    x.snapshotChanges().subscribe(item=>{
    item.forEach(element=>{
    var y=element.payload.toJSON();
    y['$key']=element.key
    if(y['nom']!="admin")
      this.allUsers.push(y);
   });
  });
  }

  onRowEditInit(product: any) {
   this.clonedProducts[product.id] = {...product};
   console.log(product);
}

onRowEditSave(product: any) {
  console.log(product.nom);
  let obj={
     deadline:product.deadline,
     tache:product.tache,
     detail:product.detail
   }
   this.dbb.list('/users').update(product.$key,obj);
   this.messageService.add({severity:'success', summary: ' Message', detail:'tache ajouté'}); 
}

onRowEditCancel(product: any, index: number) {
    this.allUsers[index] = this.clonedProducts[product.id];
    this.messageService.add({severity:'info', summary: ' Message', detail:'Annulé'}); 
}

onRowDrop(product:any){
  let obj={
    deadline:"",
    tache:"",
    detail:"",
    progression:0
  }
  this.dbb.list('/users').update(product.$key,obj);
  this.messageService.add({severity:'success', summary: ' Message', detail:'Vous avez supprimé cette tache'}); 
  
}
}
