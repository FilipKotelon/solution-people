import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
    if(this.contactForm.valid){
      console.clear();
      console.log('Here\'s what you entered into the form:');
      console.table({
        'Name': this.contactForm.get('name')?.value,
        'Email': this.contactForm.get('email')?.value,
        'Message': this.contactForm.get('message')?.value
      });
      console.log('And yes, I printed this information using console.table to pretend to be cool. I mean, it\'s kinda cool.');

      this.contactForm.reset();
    }
  }
}
