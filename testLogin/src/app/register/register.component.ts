import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nopic='https://firebasestorage.googleapis.com/v0/b/pro-crud.appspot.com/o/avtar%2Fna.png?alt=media&token=24b784c9-bf82-4baf-814f-30927051ce47';
  constructor(private auth: AngularFireAuth, private route:Router, private afs: AngularFirestore) { }

  ngOnInit(): void {
  }
  login(f){
    console.log(f.password);
    console.log(f.username);
   
    this.auth.createUserWithEmailAndPassword(f.username,f.password)
    .then((userdata)=> {
      if(this.afs.doc(`users/${userdata.user.uid}`)){
        this.afs.doc(`users/${userdata.user.uid}`).set({'fname':f.fname,'lname': f.lname,'email': f.username,'age': userdata.user.uid,'pic':this.nopic });
        alert('User update Sucessfully!');}
        this.route.navigate(['home'])})

    .catch((data)=>{console.log(data);alert(data.message)});

  }
  
  back(){
    this.route.navigate(['']);
  }

 
  submit(f){
   // console.log(f.value);
  }
  login2(f){
    console.log(f.password);
  }
}
