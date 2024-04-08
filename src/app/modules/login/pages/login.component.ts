import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {Observable} from 'rxjs';

@Component({
	moduleId:module.id,
	selector:'app-login',
	templateUrl:'./login.component.html',
	styleUrls:['login.component.scss'],
	providers:[AuthService]
})
export  class LoginComponent implements OnInit
{
	@ViewChild('f') signupForm: NgForm;

	constructor(private authService: AuthService) {}

	error: boolean;
	dirty = false;

	ngOnInit() {}

	onSubmit()
	{
		this.authService
			.authenticate(this.signupForm.value.name, this.signupForm.value.password)
			.subscribe(data => {
				this.dirty = true;
				this.error = !data;
			});
		setTimeout(() => {
			this.signupForm.resetForm();
		}, 1000);
	}
}
