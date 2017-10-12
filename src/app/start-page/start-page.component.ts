import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataTableResource } from 'angular-4-data-table';
import { FlickrService } from 'app/services/flickr.service';
import { FlickerPhoto } from 'app/models/flickerPhoto.model';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {

  errorOcurred: boolean = false;
  responseIsEmpty: boolean = false;
  photos: FlickerPhoto[] = [];
  itemResource = new DataTableResource(this.photos);
  itemCount = 0;
  items = [];

  constructor(private flickrService: FlickrService) {
  }

  onSubmit(f: NgForm) {
    this.errorOcurred = false;
    this.responseIsEmpty = false;
    this.flickrService.searchByTag(f.value).subscribe(
      (flickrResponse) => {
        const response = flickrResponse.json();
        if (response.photos.total === "0") {
          this.responseIsEmpty = true;
        } else {
          this.photos.push(Object.assign({}, response.photos.photo[0], { tag: f.value.tag }));
          this.itemResource = new DataTableResource(this.photos);
          this.reloadItems({ limit: 10, offset: 0 });
          this.itemResource.count().then(count => this.itemCount = count);
          f.reset();
        }
      },
      (error) => {
        this.errorOcurred = true;
      }
    );
  }

  onCancel(f: NgForm) {
    f.reset();
    this.errorOcurred = false;
    this.responseIsEmpty = false;
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

}
