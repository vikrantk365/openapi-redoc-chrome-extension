import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private documentFetchService: DocumentService) {
    console.log("App component constructor invoked")
  }

  async ngOnInit() {
    console.log("Init called", window["Redoc"], document.getElementById('container'), ">>")
    //   window["Redoc"].init('https://raw.githubusercontent.com/ConnectedHomes/bg-core-meters/epic/feature/1233_generate_openapi3_docs/docs/meters.openapi3.yaml?token=AEy5bAaeOBVcxUjpf718s_5FwuA2j7GFks5cmPwvwA%3D%3D', {
    //     nativeScrollbars: true,
    //     scrollYOffset: 100
    // }, document.getElementById('container'))
  }
  title = 'chrome-redoc';
}
