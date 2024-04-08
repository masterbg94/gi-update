
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BuildingModel, Location} from '../../shared/model/building.model';

// TODO: Change this with real API host and endpoints
const API_URL = 'http://localhost:8888/gold-invest-api/public';
const API_URLS = {

	GET: '/',
	location: {
		GET: '/'
	}
};

@Injectable()
export class ObjectService {

	constructor(private http: HttpClient) {}

	getObjectsReal(): Observable<BuildingModel[]> {

		return this.http.get(API_URL + API_URLS.GET).pipe(
			map((objects: BuildingModel[]) => {

				objects.forEach((object: BuildingModel) => {

					this.http.get(API_URL + API_URLS.location.GET + object.id)
						.subscribe((location: Location) => {
							object.location = location;
						})
				});

				return objects;
			}));
	}

	getObjectLocations(objectId: number): Observable<Location> {

		return this.http.get(API_URL + API_URLS.location.GET + objectId);
	}
}
