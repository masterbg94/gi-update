
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './pages/admin.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {AdminGuard} from '../../shared/guards/admin.guard';

@NgModule({
	imports:[
		CommonModule,
		AdminRoutingModule,
		CollapseModule.forRoot()
	],
	declarations:[
		AdminComponent
	],
	providers: [
		AdminGuard
	]
})

export  class AdminModule{}
