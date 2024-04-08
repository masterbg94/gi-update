import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_BASE} from '../../api.config';

@Injectable()

export class LocationService {
	constructor(private http:HttpClient){}

	getLocationByBuildingId(buildingId:any): Observable<any> {
	return	this.http.get(`${API_BASE}/buildings/${buildingId}/location`);
	}
}
