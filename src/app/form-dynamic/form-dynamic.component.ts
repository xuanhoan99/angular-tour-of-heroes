import { Component } from '@angular/core';
import { QuestionBase } from '../question-base';
import { Observable } from 'rxjs';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.css']
})
export class FormDynamicComponent {
  
  questions$: Observable<QuestionBase<any>[]>;
  constructor(
    service: QuestionService,
    ) {
    this.questions$ = service.getQuestions();
}
}
