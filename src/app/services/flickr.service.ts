import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class FlickrService {
    apiKey: string = '1de9ed637b6bd8dcb2380a9757ef1ad8'; //dbcd352edbed051d938c8e4572d81c2a';
    constructor(private http: Http) {}    

    searchByTag(tag: string, userId: string, perPage: number, page: number = 1) {
        return this.http.get(
`https://api.flickr.com/services/rest/?method=flickr.photos.search
&api_key=${this.apiKey}
&user_id=${userId}
&tags=${tag}
&sort=interestingness-desc
&extras=date_upload%2Cdate_taken%2Cowner_name%2Cviews%2Curl_q
&per_page=${perPage}
&page=${page}
&format=json
&nojsoncallback=1`);
    }
}