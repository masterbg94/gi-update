import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipment} from '../model/building.model';
import {API_BASE} from '../../api.config';

@Injectable()

export class EquipmentService{

	constructor(private http:HttpClient){}

	getEquipmentByBuildingId(buildingId:number): Observable<Equipment[]> {
		return this.http.get<Equipment[]>(`${API_BASE}/buildings/${buildingId}/equipment`)
	}
}
