

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'sortPipe'
})

export class ArraySortPipe implements PipeTransform {
	transform(array: Array<any>): Array<string> {
		array.sort((a: any, b: any) => {
			if (a.orderList < b.orderList) {
				return -1;
			} else if (a.orderList > b.orderList) {
				return 1;
			} else {
				return 0;
			}
		});
		return array;
	}
}
