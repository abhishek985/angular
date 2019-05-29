import { Component, OnInit } from '@angular/core';
import { NoteService } from './NotesService';
import { Note } from './Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  note : Note = new Note();
  notes : Array<Note> = [];

  takeNote(){
    console.log(this.note);
    this.notes.push(this.note);
    console.log(this.notes);

    this.noteService.addNote(this.note).subscribe((data)=>{
      console.log(data);
    },
    error=>{
      console.log(error);
    }
    )

    this.note =new Note();
  }

 // constructor(private httpClient : HttpClient){
   constructor(private noteService : NoteService){
    console.log('Component Constructed');
  }

  ngOnInit(){
    console.log('Component Initialized');
    
    this.noteService.getNotes().subscribe((data)=>{
      console.log(data);
      this.notes=data;
    },
    error=>{
      console.log(error);
    })
  }

}
