import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apartman} from '../model/building.model';
import {API_BASE} from '../../api.config';

@Injectable()
export class ApartmentService
{
	constructor(private http: HttpClient) {}

	getApartmentsForFloor(floorId:any): Observable<Apartman[]>
	{
		return this.http.get<Apartman[]>(`${API_BASE}/floors/${floorId}/apartments`);
	}

	getAvailableApartmentsByBuilding(buildingId: any): Observable<Apartman[]>{
		return this.http.get<Apartman[]>(`${API_BASE}/buildings/${buildingId}/apartments`);
	}

	getApartmentId(apartmentId:any):Observable<Apartman>{
		return this.http.get(`${API_BASE}/floors/apartments/${apartmentId}`);
	}

	updateApartment(apartmentId: any, status: string): Observable<any>{

		let formData: FormData = new FormData();

		formData.append('status', status);

		return this.http.post(`${API_BASE}/update/${apartmentId}`,formData);
	}
}
