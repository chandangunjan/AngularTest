import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: "courses",
    //templateUrl: 'app/courses/courses.component.html',
    //template: '<h2>{{"Title:" + title}}<h2>'
    //template: '<h2>{{getTitle()}}</h2>'
    template:`
    <h2>{{title}}</h2>
    <ul>
   <li *ngFor="let course of courses">       {{course}}   </li>
    </ul>
    <input type="text" [(ngModel)]="AuthorName">
    <h3>{{AuthorName}}</h3>
    `,
    styles:[
           `
           h2{background-color:orange},
           `
    ]
    })

export class CourseComponent
{ 
    AuthorName: String = "Default Author";
    title="List Of Authors";
/*getTitle(){
    return this.title;
}*/
courses=["Shakespeare","Premchand","Kalidas","Kashinath"]

}  

