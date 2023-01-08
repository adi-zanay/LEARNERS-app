/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Page1 } from '../pgdetail';

@Injectable({
  providedIn: 'root'
})
export class Pg2serviceService {

  private cap: Page1[]=[
    {
      pid: 'p1',
      btitle: 'Angular for Enterprise-Ready Web Applications',
      bimgUrl: 'https://m.media-amazon.com/images/I/51h8Jm3njqL.jpg',
      bauthor: 'Doguhan Uluca',
      bpublisher: 'Packt Publishing',
      bdescri: 'You will then learn how to design and develop line-of-business apps using router-first architecture with observable data anchors, demonstrated through oft-used recipes like master/detail views, and data tables with pagination and forms. Next, you’ll discover robust authentication and authorization design demonstrated via integration with Firebase, API documentation using Swagger, and API implementation using the MEAN stack.',
      bprice: '661.99',
      buylink: 'https://www.amazon.in/Angular-Enterprise-Ready-Web-Applications-production-grade-ebook/dp/B07SSFDSZ7/ref=sr_1_4?crid=8MSEYGJCMIK8&keywords=books+angular+with+capacitor&qid=1668270018&sprefix=books+angular+with+capacitor%2Caps%2C256&sr=8-4#detailBullets_feature_div'
    }
  ];
  constructor() { }
  getAllPage()
  {
    return[...this.cap];
  }
  getPage(pgid: string)
  {
    return{...this.cap.find(pge => pge.pid === pgid)};
  }
}
