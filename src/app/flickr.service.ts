import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Query } from '../app/models/query';
import { Tag } from './models/tag';

@Injectable()
export class FlickrService {

  constructor(private http: HttpClient) { }

  public searchImages(query?: Query) {
    if (!query) query = new Query();
    // overwrite custom params with default ones
    query.$endpoint = environment.api_endpoint;
    query.$method = "flickr.photos.search";
    query.$api_key = environment.api_key;

    // set to json if no format is given
    if (!query.$format) query.$format = "json";
    if (!query.$per_page) query.$per_page = 20;
    if (!query.$page) query.$page = 1;
    if (!query.$noJsonCallback) query.$noJsonCallback = true;

    return this.http.get(query.toUrl());
  }

}
