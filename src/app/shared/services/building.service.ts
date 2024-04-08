import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BuildingModel} from '../model/building.model';
import {HttpClient} from '@angular/common/http';
import {API_BASE} from '../../api.config';

@Injectable()
export class BuildingService{

	constructor(private http: HttpClient) {}

	getAllBuildings(): Observable<any>{
		return this.http.get( `${API_BASE}/buildings`);
	}

	getBuildingById(buildingId:number): Observable<any>{
		return this.http.get( `${API_BASE}/buildings/${buildingId}`);
	}
}
