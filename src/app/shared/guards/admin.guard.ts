import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate
{
	constructor(private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean
	{
		const isUserLogedIn = localStorage.getItem('auth');

		if(isUserLogedIn)
		{
			return true;
		}

		this.router.navigate(['/login']);

		return false;
	}
}
