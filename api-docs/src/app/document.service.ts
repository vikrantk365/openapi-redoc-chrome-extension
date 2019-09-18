import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { safeLoad as yaml2json } from 'js-yaml'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private _specDetails: Object
  private _document : Object

  constructor(private http: HttpClient) {
    console.log("Init Document fetch service")
  }

  async getDocument() : Promise<Object> {
    if (this._specDetails == null) {
      this._specDetails = await this.getSpecDetails()
      console.log("specDetails => ", this._specDetails)
      this._document = yaml2json(this._specDetails['yaml'])
      console.log("document", JSON.stringify(this._document))
    }
    return this._document
  }

  getSpecDetails() : Promise<Object>{
    let key = "specDetails"
    let chrome = window['chrome']
    return new Promise(function (resolve, reject) {
      chrome.storage.local.get(key, function (items) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          reject(chrome.runtime.lastError.message);
        } else {
          resolve(items[key]);
        }
      })
    })
  }
}
