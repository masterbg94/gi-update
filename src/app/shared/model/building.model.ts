import { GarageModel } from '../model/garage.model';

export interface BuildingModel {
	id: number;
	name: string;
	sold?:boolean;
	soldOut?:string;
	block?:boolean;
	rNumber?:string;
	description?:string;
	location?: Location;
	images?: Image[];
	mainImage?:string;
	city?:string;
	contract?:string;
	finished?:number;
	Equipment?:Equipment[];
	pdfCatalogUrl?:string;
	pdfCatalogImage?:string;
	floors?:Floor[];
	apartment?:Apartman[];
	gallery:number;
	orderList?:number;
	adr?:string;
	garages?: GarageModel[];
}

export interface Image {
	id?: number;
	name?: string;
	building?: number;
}
export interface Equipment {
	list?:any;
}

export interface Location {
	locations?:string;
	adress?: string;
	parcela?: string;
	lat?: number;
	lng?: number;
}
export interface Floor {
	id: number;
	name: string;
	apartment: Apartman[];
}

export interface Apartman {
	id:number;
	area:number;
	side:string;
	rooms:number;
	status: ApartmanStatus;
	imgHailight?:string;
	name: string;
	imgBase?:string;
	imgModel?:string;
	room?: Room[];
	building?:number;
	apartmentNumber?:number;
}

export interface Room {
	id?: number;
	name:string;
	type?: RoomType;
	area:number;
	floor?:string;
	roomNumber?:number;
}

export type RoomType = 'Room' | 'Stairs' | 'Kitchen' | 'Bath' | 'LockerRoom' | 'Terrace' | 'Hall';

export type ApartmanStatus = 'Prodato' | 'Slobodno' | 'Rezervisano';
