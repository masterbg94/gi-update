import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApartmanDetailComponent} from './pages/apartman-detail.component';


const routes: Routes = [
	{
		path: '',
		component: ApartmanDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ApartmanDetailRoutingModule {}
