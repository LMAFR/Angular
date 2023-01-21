import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/shared/email.service';

@Component({
  selector: 'app-contact-eng',
  templateUrl: './contact-eng.component.html',
  styleUrls: ['./contact-eng.component.css']
})
export class ContactEngComponent implements OnInit{

  constructor(private builder:FormBuilder, private emailService:EmailService){}

  FormData = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Body: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    // this.FormData = this.builder.group({
    //   Name: new FormControl('', [Validators.required]),
    //   Email: new FormControl('', [Validators.required, Validators.email]),
    //   Body: new FormControl('', [Validators.required])
    // });
  }

  onSubmit(FormData:any){
    console.log(FormData);
    this.emailService.SendEmail(FormData).subscribe(
      response => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      error => {
        console.warn(error.responseText);
        console.log({error});
      }
    )
  }
  
}
