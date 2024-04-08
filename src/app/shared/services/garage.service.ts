import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API_BASE} from '../../api.config';


@Injectable()
export class GarageService {
  public isGarage: boolean = false;
  constructor(private http: HttpClient) {}

  getAllGaragesByBuildingId(id: number) {
    return this.http.get(`${API_BASE}/buildings/${id}/garages`);
  }
  public hasGarage(): boolean {
    return this.isGarage;
  }

  public updateGarage(garageId: number, status: string): Observable<any>{

    let formData: FormData = new FormData();

    formData.append('status', status);

    return this.http.post(`${API_BASE}/updateGarage/${garageId}`,formData);
  }
}
