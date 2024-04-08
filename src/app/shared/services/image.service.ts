import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_BASE} from '../../api.config';
import {Image} from '../model/building.model';

@Injectable()

export class ImageService {

	constructor(private http: HttpClient){}

	getBuildingImages(): Observable<any>{
		return this.http.get( `${API_BASE}/buildings/images`);
	}

	getImagesForBuilding(buildingId: number): Observable<any>{
		return this.http.get<Image[]>(`${API_BASE}/buildings/${buildingId}/image`);
	}
}
