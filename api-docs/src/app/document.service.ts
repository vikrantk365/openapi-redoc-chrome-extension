import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { safeLoad as yaml2json } from 'js-yaml'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private _url = "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml"
  private _document: Object

  constructor(private http: HttpClient) {
    console.log("Init Document fetch service")
  }

  async getDocument() {
    if (this._document == null) {
      this._document = yaml2json(await this.fetchDocument())
    }
    return this._document
  }

  async fetchDocument(): Promise<Object> {
    console.log("Fetching data from server")
    return this.http.get(this._url, {
      responseType: 'text' as 'json'
    }).toPromise()
  }
}
