import {Component, Input, OnInit} from '@angular/core';
import {BuildingService} from '../../services/building.service';
import {BuildingModel, Image as Imidz} from '../../model/building.model';
import {ImageService} from '../../services/image.service';
import {ModalGalleryConfig, ModalGalleryRef, ModalGalleryService, Image} from "@ks89/angular-modal-gallery";

@Component({

  selector: 'app-block-list-item',
  templateUrl: './block-list-item.component.html',
  styleUrls: ['./block-list-item.component.scss'],
  providers: [
    BuildingService,
    ImageService
  ]
})
export class BlockListItemComponent implements OnInit {
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

  constructor(
    private buildingService: BuildingService,
    private imageService: ImageService,
    public modalGalleryService: ModalGalleryService
  ) {
  }

  ngOnInit() {
    this.buildingService.getAllBuildings().subscribe((buildings: BuildingModel[]) => {

        // Get building
        // Filter zato sto ide prikaz samo prodatih objekata
        this.buildings = buildings.filter(x => x.sold);

        this.buildings.forEach((building: BuildingModel) => {
          this.imageService
            .getImagesForBuilding(building.id)
            .subscribe((images: Imidz[]) => building.images = images);
          console.log('images', building)
        });
      });
  }



  openModal(id: number, imageIndex: number): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[imageIndex]
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
}
