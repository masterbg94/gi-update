import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {BuildingService} from '../../../shared/services/building.service';
import {ApartmentService} from '../../../shared/services/apartment.service';
import {Apartman, BuildingModel, Equipment, Floor, Room} from '../../../shared/model/building.model';
import {RoomService} from '../../../shared/services/room.service';
import {EquipmentService} from '../../../shared/services/equipment.service';
import {FloorService} from '../../../shared/services/floor.service';

@Component({
	templateUrl: './apartman-detail.component.html',
	styleUrls:   ['./apartman-detail.component.scss'],
	providers:[
		BuildingService,
		ApartmentService,
		RoomService,
		EquipmentService,
		FloorService
	]
})
export class ApartmanDetailComponent implements OnInit
{
	img = '../../../../assets/img/leonardo5.png';
	map = false;
	buildingRouteId: number;
	apartment: Apartman;
	room:Room[];
	equipment:Equipment[];
	available:number;
	reserved:number;
	a:number;
	activeFloor:Floor;
	buildings:BuildingModel[];
	activeBuilding: BuildingModel;

	constructor(private route: ActivatedRoute,
				private buildingService:BuildingService,
				private apartmentService:ApartmentService,
				private roomService:RoomService,
				private equipmentService:EquipmentService,
				private floorService:FloorService,
				private changeDetection:ChangeDetectorRef)
	{
	}

	ngOnInit()
	{
		this.buildingService
			.getAllBuildings()
			.subscribe((buildings:BuildingModel[])=>{
				this.buildings = buildings;
			});

		this.route.params.subscribe(r => {
			this.buildingRouteId = r['id'];
			this.getApartmentId(r['aid']);
		});
	}

	getBuilding(buildingId:number):void {
		this.buildingService
			.getBuildingById(buildingId)
			.subscribe(building=>{
					this.activeBuilding = building;
				this.getRoomsByApartmentId(this.apartment.id);
				this.avaiableAptartman(this.activeBuilding);
				this.getBuildingFloors();
				this.getEquipmentByBuildingId(this.activeBuilding.id);
			});
	}

	getApartmentId(buildingId:number):void {
		this.apartmentService
			.getApartmentId(buildingId)
			.subscribe((apartment:Apartman)=>{
				this.apartment = apartment;
				this.getBuilding(this.buildingRouteId);
			});
	}

	getRoomsByApartmentId(apartmentId:number){
		this.roomService
			.getRoomsByApartmentId(apartmentId)
			.subscribe((rooms:Room[])=>{
				this.room = rooms;

			});
	}

	getEquipmentByBuildingId(buildingId:number){
		this.equipmentService.
		getEquipmentByBuildingId(this.activeBuilding.id)
			.subscribe((equipment:Equipment[])=>{
				this.equipment = equipment;
			});
	}

	private avaiableAptartman(building: BuildingModel): any
	{
		this.available = 0;
		this.reserved = 0;


		this.apartmentService
			.getAvailableApartmentsByBuilding(building.id)
			.subscribe((apartments: Apartman[]) => {
				building.apartment = apartments;

				if(apartments)
				{

					this.available = apartments.filter((a: Apartman) => a.status == 'Slobodno').length - 12;
					this.reserved  = apartments.filter((a: Apartman) => a.status == 'Rezervisano').length;
				}
				return this.a = this.available + this.reserved;
			});

	}
	private getBuildingFloors(): void
	{
		this.floorService
			.getBuildingFloors(this.activeBuilding.id)
			.subscribe((floors: Floor[]) => {
				this.activeBuilding.floors = floors;
				this.activeBuilding.floors.forEach((floor: Floor) => {
					this.getFloorApartments(floor);
				});
			});
	}

	private getFloorApartments(floor: Floor): void
	{
		this.apartmentService
			.getApartmentsForFloor(floor.id)
			.subscribe((apartments: Apartman[]) => {
				floor.apartment = apartments;
			});
	}

	_changeDetection(){
		this.changeDetection.detectChanges();
	}

}
