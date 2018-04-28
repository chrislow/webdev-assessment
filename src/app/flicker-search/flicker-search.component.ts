import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';
import { Query } from '../models/query';
import { Image } from '../models/image';
import { Tag } from '../models/tag';

@Component({
  selector: 'flicker-search',
  templateUrl: './flicker-search.component.html',
  styleUrls: ['./flicker-search.component.css']
})
export class FlickerSearchComponent implements OnInit {

  public photos: Image[];
  public filterIsOpen: boolean;
  private query: Query;

  constructor(private flickrSrvc: FlickrService) {
    this.filterIsOpen = false;
    this.query = new Query();
    this.query.$imageTags = [
      Tag.Coaching,
      Tag.Consulting,
      Tag.Technologie
    ];
  }

  ngOnInit() {
    this.search();
  }

  switchFilter() {
    this.filterIsOpen = !this.filterIsOpen;
  }

  search() {
    this.flickrSrvc.searchImages(this.query).subscribe(
      (data) => {
        this.photos = [];
        if (data.hasOwnProperty('photos')) {
          data['photos'].photo.forEach(photo => {
            let img = new Image();
            img.$farm = photo.farm;
            img.$server = photo.server;
            img.$id = photo.id;
            img.$secret = photo.secret;
            this.photos.push(img);
          });
        }
      },
      (err) => console.log(err)
    );

    this.filterIsOpen = false;
  }
}
