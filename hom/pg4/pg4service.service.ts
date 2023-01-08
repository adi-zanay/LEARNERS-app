/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Page1 } from '../pgdetail';
@Injectable({
  providedIn: 'root'
})
export class Pg4serviceService {

  private ang: Page1[]=[
    {
      pid: 'p1',
      btitle: 'ng-book',
      bimgUrl: 'https://m.media-amazon.com/images/P/1985170280.01._SCLZZZZZZZ_SX500_.jpg',
      bauthor: 'Felipe Coury',
      bpublisher: 'Createspace Independent Publishing Platform ',
      bdescri: 'How to write your first Angular application , Building component-based applications , Writing and validating forms , Using Observables and RxJS , How to call APIs with Angular , How to write custom services , Building multi-page apps with Angular router , How to upgrade your legacy Angularjs app , Testing Components , How to use Redux for data architecture',
      bprice: '5138.00',
      buylink: 'https://www.amazon.in/Ng-Book-Complete-Angular-Nathan-Murray/dp/1985170280/ref=sr_1_3?crid=1WC094U46WL4W&keywords=angular+books&qid=1668271380&qu=eyJxc2MiOiI0LjAzIiwicXNhIjoiMy4yNSIsInFzcCI6IjEuODQifQ%3D%3D&sprefix=angular+books%2Caps%2C428&sr=8-3&asin=1985170280&revisionId=&format=4&depth=1'
    },
    {
      pid: 'p2',
      btitle: 'Journey to Angular Development Paperback',
      bimgUrl: 'https://m.media-amazon.com/images/I/41Jis0VFpSL._SX404_BO1,204,203,200_.jpg',
      bauthor: 'Sukesh Marla',
      bpublisher: 'BPB Publications',
      bdescri: 'This book is an exciting journey where novice developers learn everything they need to do before they start working on the Angular framework and develop dynamic web applications. The book begins with building a strong foundation on the concepts of web application development and numerous developer-friendly terminologies that you would often come across while learning Angular. ',
      bprice: '1024.00',
      buylink: 'https://www.amazon.in/Journey-Angular-Development-Sukesh-Marla/dp/9391030149/ref=sr_1_4?crid=1WC094U46WL4W&keywords=angular+books&qid=1668271380&qu=eyJxc2MiOiI0LjAzIiwicXNhIjoiMy4yNSIsInFzcCI6IjEuODQifQ%3D%3D&sprefix=angular+books%2Caps%2C428&sr=8-4'
    },
    {
      pid: 'p3',
      btitle: 'Learn Angular in 24 Hours',
      bimgUrl: 'https://m.media-amazon.com/images/I/51TFBMhkjML._SX348_BO1,204,203,200_.jpg',
      bauthor: 'Lakshmi Kamala Thota',
      bpublisher: 'White Falcon Publishing',
      bdescri: 'The core idea behind this book is to make sure everyone with or without basic knowledge on Angular should understand and expertise web application development using Angular. After going through all chapters in this book, one can quickly and confidently create a live web application using Angular in just a few hours. Simple language is used in this book to make sure everyone who reads this book can understand every concept without any complexity.',
      bprice: '350.00',
      buylink: 'https://www.amazon.in/Learn-Angular-Hours-Lakshmi-Kamala/dp/9389932076/ref=sr_1_6?crid=1WC094U46WL4W&keywords=angular+books&qid=1668271380&qu=eyJxc2MiOiI0LjAzIiwicXNhIjoiMy4yNSIsInFzcCI6IjEuODQifQ%3D%3D&sprefix=angular+books%2Caps%2C428&sr=8-6'
    },
  ];
  constructor() { }
  getAllPage()
  {
    return[...this.ang];
  }
  getPage(pgid: string)
  {
    return{...this.ang.find(pge => pge.pid === pgid)};
  }
}
