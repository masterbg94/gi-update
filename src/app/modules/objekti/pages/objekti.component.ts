import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {GarageModel} from '../../../shared/model/garage.model';
import {GarageService} from '../../../shared/services/garage.service';

import {Apartman} from '../../../shared/model/building.model';
import {BuildingService} from '../../../shared/services/building.service';
import {BuildingModel, Equipment, Floor} from '../../../shared/model/building.model';
import {FloorService} from '../../../shared/services/floor.service';
import {ApartmentService} from '../../../shared/services/apartment.service';
import {forEach} from '@angular/router/src/utils/collection';
import {EquipmentService} from '../../../shared/services/equipment.service';

@Component({

  templateUrl: './objekti.component.html',
  styleUrls: ['./objekti.component.scss'],
  providers: [
    BuildingService,
    FloorService,
    ApartmentService,
    EquipmentService,
    GarageService
  ]
})
export class ObjektiComponent implements OnInit, OnDestroy {
  availableApartments: number;
  building: BuildingModel;
  floors: Floor;
  isGarage: boolean;
  buildingId: number;
  garages: any[];
  active: Floor;
  buildings: BuildingModel[];
  activeBuilding: BuildingModel;
  buildingIsReady = false;
  floorApartment: Apartman[];
  equipment = [];
  subscription: Subscription;
  text: string;
  address: string;
  city: string;
  available: number;
  reserved: number;
  a: number;


  constructor(private route: ActivatedRoute,
              private buildingService: BuildingService,
              private floorService: FloorService,
              private apartmentService: ApartmentService,
              private equipmentService: EquipmentService,
              private garageService: GarageService,
              private changeDetetcion: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.buildingService
      .getAllBuildings()
      .subscribe(buildings => this.buildings = buildings);

    this.route.params.subscribe(params => {
      this.getBuilding(params['id']);
      this.buildingId = params['id'];
      this.availableApartments = 0;
    });

  }

  private getBuilding(buildingId: number): void {
    this.buildingService
      .getBuildingById(buildingId)
      .subscribe(building => {
        this.activeBuilding = building;
        this.getBuildingFloors();
        this.avaiableAptartman(this.activeBuilding);
        this.getBuildingEquipment(this.activeBuilding.id);
        this.subscription = this.garageService.getAllGaragesByBuildingId(this.buildingId).subscribe(
          garages => this.garages = garages;
      )
        ;
      });
    this._changeDetetcion();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getBuildingFloors(): void {
    this.floorService
      .getBuildingFloors(this.buildingId)
      .subscribe((floors: Floor[]) => {
        this.activeBuilding.floors = floors;
        this.active = floors[0];
        floors.forEach((floor: Floor) => {
          this.floors = floor;
        });
        this._changeDetetcion();
        this.activeBuilding.floors.forEach((floor: Floor) => {
          this.getFloorApartments(floor);
        });
      });
  }

  private getFloorApartments(floor: Floor): void {
    this.apartmentService
      .getApartmentsForFloor(floor.id)
      .subscribe((apartments: Apartman[]) => {
        floor.apartment = apartments;

        this.buildingIsReady = true;
      });
  }


  private avaiableAptartman(building: BuildingModel): any {
    this.available = 0;
    this.reserved = 0;


    this.apartmentService
      .getAvailableApartmentsByBuilding(this.buildingId)
      .subscribe((apartments: Apartman[]) => {
        this.building = building;
        building.apartment = apartments;
        if (apartments) {

          this.available = apartments.filter((a: Apartman) => a.status == 'Slobodno').length;
        }
        return this.a = this.available;
      });

  }

  getBuildingEquipment(buildingId: number) {
    this.equipmentService
      .getEquipmentByBuildingId(this.buildingId)
      .subscribe((equipment: Equipment[]) => {
        this.equipment = equipment;
      });
  }

  _changeDetetcion() {
    this.changeDetetcion.markForCheck();
  }


}
