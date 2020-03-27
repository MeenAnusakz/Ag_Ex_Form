import { Component, OnInit ,Output , EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {

  //** สำหรับเก็บค่าฟอร์ม */
  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.FormData();
  }

  @Output('onSendData') onSendData = new EventEmitter();

  //** สร้างฟอร์ม */
  private FormData() {
    this.form = this.builder.group({

      sex: [null,Validators.required],
      name: [null,Validators.required],
      lastname: [null,Validators.required],
      phone: [null,Validators.required],

    })
  }

  onSubmit() {
    
    if(this.form.invalid) return;
    this.onSendData.emit(this.form.value);

  }

  ngOnInit() {
  }
}
