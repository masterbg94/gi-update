import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnamaComponent} from './pages/onama.component';


const routes: Routes = [
	{
		path: '',
		component: OnamaComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OnamaRoutingModule {}
