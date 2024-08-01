import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  conctactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.conctactForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(10)]],
    })
  }


  enviar(event: Event){
    event.preventDefault();
    console.log('Enviado');
    console.log(this.conctactForm.value);
  }

  ngOnInit(): void{

  }

  hasErrors(field: string, typeError: string){
    return this.conctactForm.get(field)?.hasError(typeError) && this.conctactForm.get(field)?.touched;
  }

}
