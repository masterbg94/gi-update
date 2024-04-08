import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmailService} from '../../services/email.service';

@Component({

	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss'],
	providers:[
		EmailService
	]
})

export class ContactFormComponent implements OnInit
{
	@ViewChild('f') signupForm: NgForm;
					submitted = false;
						name:    '';
						email:   '';
						subject: '';
						bodyMessage: '';

	constructor(private service:EmailService) {}

	ngOnInit() {}

	onSubmit() {

		this.service.sendMail(this.signupForm.value.name,this.signupForm.value.email,this.signupForm.value.subject,this.signupForm.value.bodyMessage)
			.subscribe(()=>{

			});
		this.submitted = true;
		setTimeout(() => {
			this.signupForm.resetForm();
		}, 2000);
	}
}

