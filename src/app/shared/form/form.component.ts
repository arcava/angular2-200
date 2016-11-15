import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {

  private isUpdateMode: boolean = false;

  @Input() model;
  @Output('cancel') cancel$;
  @Output('submit') submit$;


  constructor() {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
    this.model = {address:{}};
  }

  ngOnInit() {
  }

  ngOnChanges(record) {
    if(record.model && record.model.currentValue) {
      this.model = record.model.currentValue;
      this.isUpdateMode = !!this.model;
    }
  }

  cancel() {
    this.cancel$.emit();
  }

  submit(person) {
    this.submit$.emit(this.model);
  }

}
