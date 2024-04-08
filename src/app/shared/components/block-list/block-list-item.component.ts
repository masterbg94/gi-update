import {Component, Input, OnInit} from '@angular/core';
import {BuildingService} from '../../services/building.service';
import {BuildingModel, Image} from '../../model/building.model';
import {ImageService} from '../../services/image.service';

@Component({

    selector: 'app-block-list-item',
    templateUrl: './block-list-item.component.html',
    styleUrls: ['./block-list-item.component.scss'],
	providers: [
		BuildingService,
		ImageService
	]
})
export class BlockListItemComponent implements OnInit
{
	orderList;
	buildings: BuildingModel[]=[];
	building: BuildingModel;

	@Input('title') title: string;

    constructor(
    	private buildingService: BuildingService,
		private imageService: ImageService
	) {}

	ngOnInit() {

		this.buildingService.getAllBuildings()
			.subscribe((buildings: BuildingModel[]) => {

				// Get building
        // Filter zato sto ide prikaz samo prodatih objekata
				this.buildings = buildings.filter(x => x.sold);

				this.buildings.forEach((building: BuildingModel) => {
					this.imageService
						.getImagesForBuilding(building.id)
						.subscribe((images: Image[]) => building.images = images);
				});
			});

	}
}
