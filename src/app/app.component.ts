import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opus';
  CoachOwlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 5,
      },
      400: {
        items: 5,
      },
      740: {
        items: 5,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };
  ngOnInit(): void {
    console.log(this.promotedPlayer)
  }

  promotedPlayer = [
    {
      id: '1',
      src: '../assets/drone.png',
      alt: 'Football',
      button_text: 'LET\'S GO',
      title: 'Football',
    },
    {
      id: '2',
      src: '../assets/drone.png',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '3',
      src: '../assets/drone.png',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '4',
      src: '../assets/drone.png ',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '5',
      src: '../assets/drone.png ',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '6',
      src: '../assets/drone.png ',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '7',
      src: '../assets/drone.png',
      alt: 'Football',
      button_text: 'LET\'S GO',
      title: 'Football',
    },
    {
      id: '8',
      src: '../assets/drone.png',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '9',
      src: '../assets/drone.png',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '10',
      src: '../assets/drone.png ',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '11',
      src: '../assets/drone.png ',
      alt: 'Football',
      title: 'Football',
    },
    {
      id: '12',
      src: '../assets/drone.png ',
      alt: 'Football',
      title: 'Football',
    },
  ];
}
