import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BuildingModel, Location} from '../../model/building.model';

import {BuildingService} from '../../services/building.service';
import {LocationService} from '../../services/location.service';


@Component({
  selector: 'app-google-map',
  styleUrls: ['./google-map.component.scss'],
  templateUrl: './google-map.component.html',
  providers: [
    BuildingService,
    LocationService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GoogleMapComponent implements OnInit {
  // initial center position for the map
  @Input() activeBuilding: BuildingModel;
  @Input() location: Location;
  @Input() buildingId: any;
  @Input() isContact: boolean;
  lat: number;
  lng: number;
  @Input() text: string = "";
  @Input() address: string = "";
  @Input() city: string = "";
  zoom = 15;

  // zoom = 12;
  center = {lat: 44.78527202477181, lng: 20.546562303967626};

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    center: this.center
  };
  options2: google.maps.MapOptions = {
    center: this.center,
    zoom: 4
  };

  constructor(private locationService: LocationService,
              private detector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getBuildingLocation();
  }

  private getBuildingLocation(): void {
    this.locationService
      .getLocationByBuildingId(this.buildingId)
      .subscribe((location: any) => {
        this.location = location;
        const lat = location[0].lat;
        const lng = location[0].lng;

        if (typeof lat === 'string') {
          this.lat = parseFloat(lat);
        }
        if (typeof lng === 'string') {
          this.lng = parseFloat(lng);
        }
        this.text = this.activeBuilding.name;
        this.address = this.activeBuilding.adr;
        this.city = 'Zlatibor';

        // detect Location Change
        // this.detectChanges();
        this.detector.detectChanges();
        console.log('this.location', this.location);
      });
    if (this.isContact) {
      this.lat = 43.72572172255676;
      this.lng = 19.696842416067323;
      this.text = "Gold Invest Gradnja";
      this.address = "Kraljev Trg bb";
      this.city = "Zlatibor";
      return;
    }
  }

  private detectChanges(): void {
    this.detector.markForCheck();
  }
}

// just an interface for type safety.
interface Marker {
  lat: any;
  lng: any;
  label?: string;
}
