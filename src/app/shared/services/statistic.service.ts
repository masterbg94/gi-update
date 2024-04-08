import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {API_BASE} from '../../api.config';

@Injectable()
export class StatisticService
{
	constructor(private http: HttpClient) {}

	getStatistics(): Observable<Statistics>
	{
		return this.http.get<Statistics>(`${API_BASE}/statistics`);
	}
}

export class Statistics
{
	buildingsInProgress: number;
	buildingsFinished: number;
	apartmentAvailable: number;
	apartmentSold: number;
}
