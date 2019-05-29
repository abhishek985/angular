import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadetComponent } from './cadet/cadet.component';
import { HeaderComponent } from './header/header.component';
//for material componenet animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//for mat toolbar(header)
import {MatToolbarModule} from '@angular/material/toolbar';
//for mat expansion panel(note input)
import {MatExpansionModule} from '@angular/material/expansion';
//for mat form field(form inputs)
import {MatFormFieldModule} from '@angular/material/form-field';
//for mat input
import {MatInputModule} from '@angular/material/input';
//for mat button
import {MatButtonModule} from '@angular/material/button';
//for ng models
import {FormsModule} from '@angular/forms';
// for mat cards
import {MatCardModule} from '@angular/material/card';

import {HttpClientModule} from '@angular/common/http';
//for NoteService for Note CRUD Codes
import {NoteService} from './NotesService'


@NgModule({
  declarations: [
    AppComponent,
    CadetComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
