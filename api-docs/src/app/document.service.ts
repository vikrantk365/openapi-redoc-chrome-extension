import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { load as yaml2json } from 'js-yaml'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private _url = "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml"
  private _document: Object

  constructor(private http: HttpClient) {
    console.log("Init Document fetch service")
  }

  getDocument() {
    if (this._document == null) {
      this.fetchDocumentFromLocalStorage()
      setTimeout(function () {
        console.log("waited for 3 sec")
      }, 3000)
    }
    return this._document
  }

  fetchDocumentFromLocalStorage() {
    window["chrome"]["storage"]["local"].get(['specDetails'], function (result) {
      console.log('SpecDetails =====>', result.specDetails);
      console.log(result.specDetails.yaml)
      this._document = yaml2json(result.specDetails.yaml)
    });
  }


  async fetchDocument(): Promise<Object> {
    console.log("Fetching data from server")
    return this.http.get(this._url, {
      responseType: 'text' as 'json'
    }).toPromise()
  }
}
