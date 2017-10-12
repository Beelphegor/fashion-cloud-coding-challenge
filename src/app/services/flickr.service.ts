import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class FlickrService {
    apiKey: string = '1de9ed637b6bd8dcb2380a9757ef1ad8'; //dbcd352edbed051d938c8e4572d81c2a';
    constructor(private http: Http) {}
    //https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1de9ed637b6bd8dcb2380a9757ef1ad8&user_id=&tags=casa&sort=interestingness-desc&extras=date_upload%2Cdate_taken%2Cowner_name%2Cviews%2Curl_q&per_page=1&format=json&nojsoncallback=1&api_sig=6a9976f9d904e1fc2b98d0369423e856

    searchByTag(payload: {tag: string, userId: string}) {
        return this.http.get(
`https://api.flickr.com/services/rest/?method=flickr.photos.search
&api_key=${this.apiKey}
&user_id=${payload.userId}
&tags=${payload.tag}
&sort=interestingness-desc
&extras=date_upload%2Cdate_taken%2Cowner_name%2Cviews%2Curl_q
&per_page=1
&format=json
&nojsoncallback=1`);
    }
}