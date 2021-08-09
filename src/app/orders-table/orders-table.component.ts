import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  })
  
export class OrdersTableComponent {

dataSource = ELEMENT_DATA;
columnsToDisplay = ['N° Order', 'Payment way', 'Reservation date', 'Payment delay', 'Montant total', 'Addrees delivery', 'Staus Delivery', 'Status Order'];
expandedElement!: PeriodicElement | null;

}

export interface PeriodicElement {
numOrder: number;
paymentWay: string;
reservationDate: string;
paymentDelay: number;
MontatnTotal: number;
addressDelivery: string;
statusDelivery: string;
statusOrder: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{
  numOrder: 16654,
  paymentWay: "Dhahabia",
  reservationDate: "2021-03-04",
  paymentDelay: 5,
  MontatnTotal: 1200,
  addressDelivery: "algeria/eloued/echatt",
  statusDelivery: "waiting",
  statusOrder: "reserved",
},
{
  numOrder: 16654,
  paymentWay: "Dhahabia",
  reservationDate: "2021-03-04",
  paymentDelay: 5,
  MontatnTotal: 1200,
  addressDelivery: "algeria/eloued/echatt",
  statusDelivery: "waiting",
  statusOrder: "reserved",
}, {
  numOrder: 16654,
  paymentWay: "Dhahabia",
  reservationDate: "2021-03-04",
  paymentDelay: 5,
  MontatnTotal: 1200,
  addressDelivery: "algeria/eloued/echatt",
  statusDelivery: "waiting",
  statusOrder: "reserved",
}, {
  numOrder: 16654,
  paymentWay: "Dhahabia",
  reservationDate: "2021-03-04",
  paymentDelay: 5,
  MontatnTotal: 1200,
  addressDelivery: "algeria/eloued/echatt",
  statusDelivery: "waiting",
  statusOrder: "reserved",
}, {
  numOrder: 16654,
  paymentWay: "Dhahabia",
  reservationDate: "2021-03-04",
  paymentDelay: 5,
  MontatnTotal: 1200,
  addressDelivery: "algeria/eloued/echatt",
  statusDelivery: "waiting",
  statusOrder: "reserved",
}, {
  numOrder: 16654,
  paymentWay: "Dhahabia",
  reservationDate: "2021-03-04",
  paymentDelay: 5,
  MontatnTotal: 1200,
  addressDelivery: "algeria/eloued/echatt",
  statusDelivery: "waiting",
  statusOrder: "reserved",
},
]
