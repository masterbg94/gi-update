import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ObjektiComponent} from './pages/objekti.component';



const routes: Routes = [
	{
		path: '',
		component: ObjektiComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ObjektiRoutingModule {}
