import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {GarageModel} from '../../model/garage.model';
import {GarageService} from '../../services/garage.service';

import {Apartman, BuildingModel, Equipment, Floor} from '../../model/building.model';
import {NavigationEnd, Router} from '@angular/router';

@Component({

  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
  providers: [
    GarageService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Injectable()
export class BuildingComponent implements OnInit {
  @Input() public garages: GarageModel[] = [];
  @Input() public isGarage: boolean;
  public objectRoute: any;
  @Input() buildingId: any;
  @Input() activeFloor: Floor;
  @Input() apartment: Apartman;
  @Input() floors: Floor;
  @Input() floorApartment: Apartman[];
  @Input() activeBuilding: BuildingModel;
  @Input() equipment: Equipment[];
  @Output() floorName: EventEmitter<Floor> = new EventEmitter();
  separatedGarage1 = null;
  separatedGarage2 = null;
  activeGarageNumber: number = null;

  constructor(
    private detector: ChangeDetectorRef,
    private router: Router,
    public garageService: GarageService,
  ) {
    this.router.events.subscribe(re => {
      if (re instanceof NavigationEnd) {
        if (re.url == "/objekat/9") {
          this.garageService.isGarage = false;
          this.setActive(this.activeFloor);
        }
      }
    });
  }

  ngOnInit() {
    this.floorName.emit(this.activeFloor);
    this.setActive(this.activeFloor);
    if (this.garages && this.garages[0]?.garageNumber) {
      this.separatedGarage1 = this.garages.filter(x => x.garageNumber == 1);
      this.separatedGarage2 = this.garages.filter(x => x.garageNumber == 2);
    }
  }

  public getGarages(activeGarageNumber?: number) {
    this.garageService.isGarage = true;
    this.activeGarageNumber = activeGarageNumber;
    if (activeGarageNumber && activeGarageNumber == 1) {
      this.garages = this.separatedGarage1;
    }
    if (activeGarageNumber && activeGarageNumber == 2) {
      this.garages = this.separatedGarage2;
    }
  }

  navigate(apt) {
    return this.router.navigate(['/objekat/' + this.activeBuilding.id + '/apartman/' + apt])
  }

  setActive(floor: Floor) {
    this.activeFloor = floor;
    this.garageService.isGarage = false;
    localStorage.setItem('activeFloorId', floor.name);

  }

  getAvailableApartments(floor: Floor): any {
    let available = 0;
    let reserved = 0;

    if (floor.apartment) {
      available = floor
        .apartment
        .filter((apt: Apartman) => apt.status === 'Slobodno').length;

      reserved = floor
        .apartment
        .filter((apt: Apartman) => apt.status === 'Rezervisano').length;
    }

    if (available < 1 && available < reserved) {
      return reserved;
    } else {
      return available;
    }

  }

  public getAvailableGarage(building: BuildingModel, garageNumber?: number) {
    let available = 0;
    let reserved = 0;

    if (garageNumber) {
      if (garageNumber == 1) {
        available = this.separatedGarage1?.filter((garage: GarageModel) => garage.status === 'Slobodno').length;

        reserved = this.separatedGarage1?.filter((garage: GarageModel) => garage.status === 'Rezervisano').length;

        if (available < 1 && available < reserved) {
          return reserved;
        } else {
          return available;
        }
      }
      if (garageNumber == 2) {
        available = this.separatedGarage2?.filter((garage: GarageModel) => garage.status === 'Slobodno').length;

        reserved = this.separatedGarage2?.filter((garage: GarageModel) => garage.status === 'Rezervisano').length;

        if (available < 1 && available < reserved) {
          return reserved;
        } else {
          return available;
        }
      }
    } else if (this.garages) {
      available = this.garages?.filter((garage: GarageModel) => garage.status === 'Slobodno').length;

      reserved = this.garages?.filter((garage: GarageModel) => garage.status === 'Rezervisano').length;

      if (available < 1 && available < reserved) {
        return reserved;
      } else {
        return available;
      }
    }


  }

  public getAvailableGarageClass(building: BuildingModel): string {
    let available = 0;

    if (this.garages) {
      available =
        this.garages
          .filter((garage: GarageModel) => garage.status === 'Slobodno').length;
    }

    if (available) {
      return 'available'
    }

    if (!available) {
      return 'sold';
    }
  }

  getAvailableAptClass(floor: Floor): string {
    let available = 0;
    let reserved = 0;

    if (floor.apartment) {
      available = floor
        .apartment
        .filter((apt: Apartman) => apt.status === 'Slobodno').length;

      reserved = floor
        .apartment
        .filter((apt: Apartman) => apt.status === 'Rezervisano').length;

    }

    if (available && !reserved) {
      return 'available'
    }

    if (available > reserved) {
      return 'available';
    }


    if (available < 1 && reserved > 0) {
      return 'reserved';
    }

    if (available == 1) {
      return 'available'
    }

    if (!available) {
      return 'sold';
    }
  }

  _detectChanges(): void {
    this.detector.detectChanges()
  }
}
