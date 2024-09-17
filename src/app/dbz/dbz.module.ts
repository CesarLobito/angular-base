import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { addcharactercomponent } from './components/addCharacter/add-character.component';




@NgModule({

  declarations: [
    MainPageComponent,
    ListComponent,
    addcharactercomponent,
  ],
  exports:[
    MainPageComponent,


  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
