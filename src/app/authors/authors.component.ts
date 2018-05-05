import { Component} from '@angular/core';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  /*template:`
  <input type="text" [(ngModal)] = "AuthorName" />
  <label value="{AuthorName}" />
  `*/
})
export class AuthorsComponent {
//AuthorsComponent implements OnInit { constructor() { } ngOnInit() {  }
//title="List OF Authors";
AuthorName : String = "Default Author : Chandan";
//Authors=["Salman Rushdie","Kashinath Singh","Premchand","Kalidas"];

}
