import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

	static getUserLanguage(): string {

		return localStorage.getItem('language') || 'sr-RS';
	}

	static setUserLanguage(language: string): void {

		localStorage.setItem('language', language);
	}
}
