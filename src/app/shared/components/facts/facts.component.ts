import {Component, OnInit} from '@angular/core';
import {Statistics, StatisticService} from '../../services/statistic.service';

@Component({

	selector: 'app-facts',
	templateUrl: './facts.component.html',
	styleUrls: ['./facts.component.scss'],
	providers: [
		StatisticService
	]
})
export class FactsComponent implements OnInit {
	public facts = [
		{
			current: 0,
			number: 1,
			description: 'numberOfObjectInConstruction',
			big: false
		},
		{
			current: 0,
			number: 5,
			description: 'numberOfFinishedObjects',
			big: true
		},
		{
			current: 0,
			number: 26,
			description: 'numberOfAvailableApartments',
			big: true
		},
		{
			current: 0,
			number: 76,
			description: 'numberOfSoldApartments',
			big: false
		}
	];

	timer: any;

	constructor(private service: StatisticService) {}

	ngOnInit() {

		this.service
			.getStatistics()
			.subscribe((stat: Statistics) => {
				this.facts[0].number = stat.buildingsFinished;
				this.facts[1].number = stat.buildingsInProgress;
        this.facts[2].number = stat.apartmentAvailable;
				this.facts[3].number = stat.apartmentSold;

				this.startTimer();
			});
	}

	startTimer(): void {

		const max = Math.max.apply(Math, this.facts.map((o) => o.number));

		this.timer = setInterval(() => {

			this.facts.forEach((fact) => {

				if(fact.current < fact.number) {
					fact.current++;
				}

				if(fact.current === max) {

					this.stopTimer();
				}
			})
		}, 50);
	}

	stopTimer(): void
	{

		clearInterval(this.timer);
	}

	reset(): void {

		// TODO: Reset data and start timer from beginning
	}
}
