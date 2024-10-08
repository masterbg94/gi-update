import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BuildingService} from '../../services/building.service';
import {BuildingModel, Image as Imidz} from '../../model/building.model';
import {ImageService} from '../../services/image.service';
import {ModalGalleryConfig, ModalGalleryRef, ModalGalleryService, Image} from "@ks89/angular-modal-gallery";
import {Subscription, take} from "rxjs";

@Component({

  selector: 'app-block-list-item',
  templateUrl: './block-list-item.component.html',
  styleUrls: ['./block-list-item.component.scss'],
  providers: [
    BuildingService,
    ImageService
  ]
})
export class BlockListItemComponent implements OnInit, OnDestroy {
  orderList;
  buildings: BuildingModel[] = [];
  building: BuildingModel;

  @Input('title') title: string;
  images: Image[] = [
    new Image(0, {
      img: 'https://placehold.co/600x400',
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: 'https://placehold.co/600x450',
      extUrl: 'http://www.google.com'
    }),
    new Image(2, {
      img: 'https://placehold.co/600x500',
      extUrl: 'http://www.google.com'
    })];
  subscriptions: Subscription[] = [];

  constructor(
    private buildingService: BuildingService,
    private imageService: ImageService,
    public modalGalleryService: ModalGalleryService
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.buildingService.getAllBuildings()
        .pipe(take(1))
        .subscribe((buildings: BuildingModel[]) => {

          // Get building
          // Filter zato sto ide prikaz samo prodatih objekata
          this.buildings = buildings.filter(x => x.sold);

          this.buildings.forEach((building: BuildingModel) => {
            this.imageService
              .getImagesForBuilding(building.id)
              .subscribe((images: Imidz[]) => {
                building.images = images
              });
          });
        })
    )
  }

  mapImagesForKS89(building: BuildingModel) {
    this.images = [];
    for (let image of building.images) {
      this.images.push(new Image(image.id, {img: image.name}))
    }
  }

  mapImagesForGallery(building: any) {
    this.images = [];
    building.images.forEach((image, index) => {
      this.images.push(new Image(index, {img: 'assets/img/' + image.name}));
    });
  }


  openModal(id: number, imageIndex: number, building: any): void {
    this.mapImagesForGallery(building);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex]
    } as ModalGalleryConfig) as ModalGalleryRef;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
