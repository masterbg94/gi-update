
import {Component, OnInit} from '@angular/core';
import { GarageModel } from '../../../shared/model/garage.model';
import { GarageService } from '../../../shared/services/garage.service';
import {BuildingService} from '../../../shared/services/building.service';
import {ApartmentService} from '../../../shared/services/apartment.service';
import {Apartman} from '../../../shared/model/building.model';

@Component({
	moduleId:module.id,
	selector:'app-admin',
	templateUrl:'./admin.component.html',
	styleUrls:['./admin.component.scss'],
	providers:[
		BuildingService,
		ApartmentService,
    GarageService,
	]
})

export class AdminComponent implements OnInit{
	toogle = false;

	showMessage: boolean;
	message = '';
	messageClass = '';

  toogleGarage = false;
  toogleGarage2 = false;

  apartmentsLeonardo5=[];

	apartmentsLeonardo6=[];
  apartmentsLeonardo7=[];
  apartmentsLeonardo8=[];

	garageLeonardo6 = [];
	garageLeonardo7 = [];
	garageLeonardo8 = [];

	visibleRowLeft = -1;

	visibleRowRight = -1;

	allert: any;

	constructor(private buildingService:BuildingService,
				private garageService: GarageService,
				private apartmentService:ApartmentService){}

	ngOnInit()
	{
		this.getData();
	}

	getData()
	{
		this.getAvaiableApartmentsbyVila7(12);
		this.getAvaiableApartmentsbyVila8(13);
		this.getGarages();
	}

  getGarages() {
    if (this.toogleGarage||this.toogleGarage2) {
      this.getGarageVila7();
      this.getGarageVila8();
    }
  }

  toogledGarage1() {
    this.toogleGarage2 = false;
    this.toogleGarage = !this.toogleGarage;
    this.getGarages();
  }

  toogledGarage2() {
    this.toogleGarage = false;
    this.toogleGarage2 = !this.toogleGarage2;
    this.getGarages();
  }

	toogled1(){
		this.toogle = !this.toogle;
	}

	toggleCollapseLeft(index:number):void {
		if(index != this.visibleRowLeft){
			this.visibleRowLeft = index;
		}else  {
			this.visibleRowLeft = -1;
		}
	}

	isCollapsed: boolean;

	toggleCollapseRight(index: number): void
	{
		if(index != this.visibleRowRight)
		{
			this.visibleRowRight = index;
		}
		else
		{
			this.visibleRowRight = -1;
		}
	}

  getGarageVila6(): void {
    this.garageService.getAllGaragesByBuildingId(11)
      .subscribe((garages: GarageModel[]) => {
        this.garageLeonardo6 = garages;
      });
  }

  getGarageVila7(): void {
    this.garageService.getAllGaragesByBuildingId(12)
      .subscribe((garages: GarageModel[]) => {
        this.garageLeonardo7 = garages;
      });
  }

  getGarageVila8(): void {
    this.garageService.getAllGaragesByBuildingId(13)
      .subscribe((garages: GarageModel[]) => {
        this.garageLeonardo8 = garages;
      });
  }

	getAvaiableApartmentsbyVila7(buildingId:number):void{
		this.apartmentService
			.getAvailableApartmentsByBuilding(12)
			.subscribe((apartments:Apartman[])=>{
				this.apartmentsLeonardo7 = apartments;
			});
	}

	getAvaiableApartmentsbyVila6(buildingId:number):void{
		this.apartmentService
			.getAvailableApartmentsByBuilding(11)
			.subscribe((apartments:Apartman[])=>{
				this.apartmentsLeonardo6 = apartments;
			});
	}

  getAvaiableApartmentsbyVila8(buildingId:number):void{
    this.apartmentService
      .getAvailableApartmentsByBuilding(13)
      .subscribe((apartments:Apartman[])=>{
        this.apartmentsLeonardo8 = apartments;
      });
  }

	updateApartmentStatus(apartmentId: number, status: string, index: number):void {
		this.apartmentService
			.updateApartment(apartmentId, status)
			.subscribe(b =>
			{
				if(b)
				{
					this.getData();
					this.showMessage  = true;
					this.message      = `Uspesno ste promenili status Apartmana ${index + 1} na status ${status}`;
					this.messageClass = 'alert alert-success';
				}
				else
				{
					// Handle update error
					this.showMessage  = true;
					this.message      = 'Greska prilikom cuvanja';
					this.messageClass = 'alert alert-danger';
				}

				setTimeout(() => {
					this.message     = '';
					this.showMessage = false;
				}, 5000);
			});
	}

  updateGarageStatus(garageId: number, status: string, index: number): void {
    this.garageService
      .updateGarage(garageId, status)
      .subscribe(g => {
        if (g) {
          this.getGarages();
          this.showMessage  = true;
          this.message      = `Uspesno ste promenili status Garaže na status ${status}`;
          this.messageClass = 'alert alert-success';
        } else {
          // Handle update error
          this.showMessage  = true;
          this.message      = 'Greska prilikom cuvanja';
          this.messageClass = 'alert-danger';
        }

        setTimeout(() => {
          this.message     = '';
          this.showMessage = false;
        }, 5000);
      });
  }
}
