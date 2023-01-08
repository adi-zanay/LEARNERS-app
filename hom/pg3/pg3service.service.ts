/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Page1 } from '../pgdetail';
@Injectable({
  providedIn: 'root'
})
export class Pg3serviceService {

  private ion: Page1[]=[
    {
      pid: 'p1',
      btitle: 'Learning Ionic - Second Edition',
      bimgUrl: 'https://m.media-amazon.com/images/I/41-v+YuCg0L.jpg',
      bauthor: 'Arvind Ravulavaru',
      bpublisher: 'Packt Publishing',
      bdescri: 'This book explains how to build Mobile Hybrid applications with ease using Ionic. Be it simple apps that integrate with REST APIS or complex apps that involves native features, Ionic provides a simple API to work with them With a basic knowledge of web development and TypeScript, and a decent knowledge of Angular, one can easily convert a million- dollar idea into an app with a few lines of code. In this book we will explore how you can do this.',
      bprice: '2957.00',
      buylink: 'https://www.amazon.in/Learning-Ionic-Second-Hybrid-Angular-ebook/dp/B01BGV25GS/ref=sr_1_6?crid=3SPU5NSBSGLC9&keywords=angular+with+ionic+books&qid=1668270717&sprefix=angular+with+ionic+books%2Caps%2C255&sr=8-6'
    },
    {
      pid: 'p2',
      btitle: 'Learn Ionic 2',
      bimgUrl: 'https://m.media-amazon.com/images/I/31B57bInICL._SX348_BO1,204,203,200_.jpg',
      bauthor: 'Joyce Justin',
      bpublisher: 'Apress',
      bdescri: 'Learn lonic 2 explains various techniques to quickly integrate third-party back end systems. You will benefit from practical examples of implementing authentication and authorization, connecting to social media, integrating with payment gateway, and analytics integration. This book presents solutions to the challenges faced during the development process of these tasks.',
      bprice: '2477.00',
      buylink: 'https://www.amazon.in/Learn-Ionic-Develop-Multi-platform-Mobile/dp/148422616X/ref=sr_1_7?crid=3SPU5NSBSGLC9&keywords=angular+with+ionic+books&qid=1668270717&sprefix=angular+with+ionic+books%2Caps%2C255&sr=8-7'
    }
  ];
  constructor() { }
  getAllPage()
  {
    return[...this.ion];
  }
  getPage(pgid: string)
  {
    return{...this.ion.find(pge => pge.pid === pgid)};
  }
}
