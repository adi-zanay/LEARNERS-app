/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Page1 } from '../pgdetail';

@Injectable({
  providedIn: 'root'
})
export class Pg1serviceService {

  private rec: Page1[]=[
    {
      pid: 'p1',
      btitle: 'The Road To React',
      bimgUrl: 'https://m.media-amazon.com/images/I/51EaMBdNuAL._AC_UY327_FMwebp_QL65_.jpg',
      bauthor: 'Robin Wieruch',
      bpublisher: 'Zaccheus Entertainment',
      bdescri: 'The road to learn react teaches you the fundamentals of react. The book comes with additional referenced reading material and exercises with each Chapter after reading the book, you will be able to build your own applications in react. It explains General concepts, patterns and best practices in a real world react application. You will learn to build your own react application. It covers real world features like pagination, client-side caching and interactions like searching and sorting.',
      bprice: '3519.90',
      buylink: 'https://www.amazon.in/Road-Learn-React-Pragmatic-React-Js/dp/172004399X/ref=sr_1_3?hvadid=72499343631706&hvbmt=be&hvdev=c&hvqmt=e&keywords=react+books&qid=1668254988&qu=eyJxc2MiOiI0LjI3IiwicXNhIjoiMy4xMCIsInFzcCI6IjEuNTkifQ%3D%3D&sr=8-3'
    },
    {
      pid: 'p2',
      btitle: 'Advanced Web Development With React',
      bimgUrl: 'https://m.media-amazon.com/images/I/41TOCMdOVxL._SX331_BO1,204,203,200_.jpg',
      bauthor: 'Mehul Mohan',
      bpublisher: 'BPB Publications',
      bdescri: 'The book starts by introducing the reader to React, what it is and why you need a library like React to work with medium to large scale applications. We then move on to implementing simple client-side programs with React, uncovering modern React practices like React hooks and diving deep into various kinds of hooks. We then move to implement React on server using Server-Side Rendering to bring benefits of the SEO world to dynamic rendering nature of front-end libraries. For this, we use Next.js, a very popular implementation of Server-Side Rendering which comes with tons of good practices already baked in. ',
      bprice: '441.00',
      buylink: 'https://www.amazon.in/Advanced-Development-React-Mehul-Mohan/dp/9389423597/ref=sr_1_2_sspa?hvadid=72499343631706&hvbmt=be&hvdev=c&hvqmt=e&keywords=react+books&qid=1668254988&qu=eyJxc2MiOiI0LjI3IiwicXNhIjoiMy4xMCIsInFzcCI6IjEuNTkifQ%3D%3D&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
      pid: 'p3',
      btitle: 'React and React Native',
      bimgUrl: 'https://m.media-amazon.com/images/I/51noIwSubgL._SX404_BO1,204,203,200_.jpg',
      bauthor: 'Adam Boduch',
      bpublisher: 'Packt Publishing Limited',
      bdescri: 'React and React Native, Facebooks innovative User Interface libraries, are designed to help you build robust cross-platform web and mobile applications. This updated third edition is improved and updated to cover the latest version of React. The book particularly focuses on the latest developments in the React ecosystem, code splitting using lazy components and Suspense, user interface framework components using Material-UI, and Apollo.',
      bprice: '4030.00',
      buylink: 'https://www.amazon.in/React-Native-complete-hands-development/dp/1839211148/ref=sr_1_11_sspa?hvadid=72499343631706&hvbmt=be&hvdev=c&hvqmt=e&keywords=react+books&qid=1668254988&qu=eyJxc2MiOiI0LjI3IiwicXNhIjoiMy4xMCIsInFzcCI6IjEuNTkifQ%3D%3D&sr=8-11-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1'
    },
  ];
  constructor() { }
  getAllPage()
  {
    return[...this.rec];
  }
  getPage(pgid: string)
  {
    return{...this.rec.find(pge => pge.pid === pgid)};
  }
}
