import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Floor} from '../model/building.model';
import {API_BASE} from '../../api.config';

@Injectable()
export class FloorService {

	constructor(private http: HttpClient) {}

	getBuildingFloors(buildingId: number): Observable<Floor[]>
	{
		return this.http.get<Floor[]>(`${API_BASE}/buildings/${buildingId}/floors`);
	}
}
