
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {API_BASE} from '../../api.config';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService
{
	constructor(private http: HttpClient, private router:Router) {}

	authenticate(username: string, password: string): Observable<any>
	{
		let formData: FormData = new FormData();

		formData.append('username', username);
		formData.append('password', password);

		return this.http.post(`${API_BASE}/auth`, formData).pipe(
			map((res: any) =>
			{
				if(res.status == 201)
				{
					const auth = {
						username: username,
						token: res.token,
						authHeader: 'Bearer ' + res.token
					};

					localStorage.setItem('auth', JSON.stringify(auth));

					this.router.navigate(['/admin']);

					return true;
				}

				return false;
			}));
	}
}
