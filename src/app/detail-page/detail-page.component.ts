import { Component, OnInit } from '@angular/core';
import { FlickrService } from 'app/services/flickr.service';
import { Params, ActivatedRoute } from '@angular/router';

import { Image } from "angular-modal-gallery";
import { FlickerPhoto } from 'app/models/flickerPhoto.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  tag: string;
  userId: string;
  pageNumber: number = 1;
  pageSize: number = 15;
  pages: number[] = [];
  imagesArray: Image[] = [];

  constructor(private flickrService: FlickrService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.tag = params['tag'];
    });
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.userId = params['userId'];
    });
    this.getPictures();
  }

  getPictures() {
    this.flickrService.searchByTag(this.tag, this.userId, this.pageSize, this.pageNumber).subscribe(
      (flickrResponse) => {
        var mappedImages: Image[] = [];
        this.pages = Array(Math.ceil(flickrResponse.json().photos.total / this.pageSize)).fill(0).map((x, i) => i+1);
        flickrResponse.json().photos.photo.map((p: FlickerPhoto) => {
          mappedImages.push(new Image(p.url_q, p.url_q, p.title, null));
        });
        this.imagesArray = mappedImages;
        console.log(this.imagesArray);
      },
      (error) => {
        console.log(error);
      });
  }

  onPreviousPage() {
    this.pageNumber = this.pageNumber - 1;
    this.getPictures();
  }

  onPageNumber(page) {
    this.pageNumber = page;
    this.getPictures();
  }

  onNextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.getPictures();
  }


}
