import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../model/building.model';
import {API_BASE} from '../../api.config';

@Injectable()

export class RoomService {
	constructor(private http:HttpClient){}

	 getRoomsByApartmentId(apartmentId:number):Observable<Room[]>{
		return this.http.get(`${API_BASE}/floors/apartments/${apartmentId}/rooms`);
	 }
}
