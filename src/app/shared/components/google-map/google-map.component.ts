import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {BuildingModel, Location} from '../../model/building.model';

import {BuildingService} from '../../services/building.service';
import {LocationService} from '../../services/location.service';
import {MapInfoWindow, MapMarker} from "@angular/google-maps";

@Component({
  selector: 'app-google-map',
  styleUrls: ['./google-map.component.scss'],
  templateUrl: './google-map.component.html',
  providers: [
    BuildingService,
    LocationService
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class GoogleMapComponent implements OnInit {
  // initial center position for the map
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @Input() text: string = "";
  @Input() address: string = "";
  @Input() city: string = "";
  @Input() activeBuilding: BuildingModel;
  @Input() location: Location;
  @Input() buildingId: any;
  @Input() isContact: boolean = false;
  lat: number;
  lng: number;
  zoom = 15;
  // center = {lat: 42.27917530724483, lng: 18.83734795968046};
  center:{lat:number,lng:number};
  options: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    center: null
  };

  constructor(
    private locationService: LocationService,
    private detector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.getBuildingLocation();
  }

  private getBuildingLocation(): void {
    // TODO : First test is @isContact value
    if (this.isContact) {
      this.lat = 43.72572172255676;
      this.lng = 19.696842416067323;
      this.text = "Gold Invest Gradnja";
      this.address = "Kraljev Trg bb";
      this.city = "Zlatibor";
      this.center = {lat: this.lat, lng: this.lng};
      this.options.center = this.center;
      return;
    } else {
      // TODO : First test is @isContact value
      this.locationService.getLocationByBuildingId(this.buildingId).subscribe((location: any) => {
        this.location = location;
        this.center = {lat: Number(location[0]?.lat), lng: Number(location[0]?.lng)}
        this.options.center = this.center;
        this.text = this.activeBuilding.name;
        this.address = this.activeBuilding.adr;
        this.city = 'Zlatibor';
      });
    }
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
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
