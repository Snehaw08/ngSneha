import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-one',
  template: `
    <div id="index-banner" class="parallax-container">
      <div class="carousel carousel-slider">
        <a class="carousel-item" href="#one!"
          ><br /><br /><img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&w=1000&q=80"
        /></a>
        <a class="carousel-item" href="#two!"
          ><br /><br /><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5jh-HJWBgDf3cLakgv2Mg2gVANNncRNreIQ&usqp=CAU"
        /></a>
        <a class="carousel-item" href="#three!"
          ><br /><br /><img src="https://wallpapercave.com/wp/GtTeAuc.jpg"
        /></a>
        <a class="carousel-item" href="#four!"
          ><br /><br /><img src="https://wallpapercave.com/wp/wc1757363.jpg"
        /></a>
         <div class="carousel-caption">
        <div class="section no-pad-bot">
          <div class="container">
            <br /><br />
            <h1 class="header center teal-text text-lighten-2">
              VEHICLE GALLERY
            </h1>
            <div class="row center">
              <h5 class="header col s12 light">
                A modern all vehicles based on Unique Design and Features
              </h5>
            </div>
            <div class="row center">
              <a
                href="#"
                id="download-button"
                class="btn-large waves-effect waves-light teal lighten-1"
                >Get Started</a
              >
            </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  `,
  styles: [
    `
      .carousel {
        height: 600px;
      }
      carousel .carousel-item img {
        width: 100%;
        margin-left: -70%;
      }
      h1 {
        position: relative;
      }
      .row .col.s12 {
        position: relative;
      }
    `,
  ],
})
export class BannerOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
