import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Apartman, BuildingModel, Equipment, Room} from '../../model/building.model';

@Component({
  selector: 'app-apartman-detail-facts',
  templateUrl: './apartman-detail-facts.component.html',
  styleUrls: ['./apartman-detail-facts.component.scss']
})

export class ApartmanDetailFactsComponent {
  @Input() room: Room[];
  @Input() apartment: Apartman;
  @Input() activeBuilding: BuildingModel;
  @Input() equipment: Equipment[];
}
