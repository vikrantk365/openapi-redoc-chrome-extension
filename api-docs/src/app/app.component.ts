import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log("Init called", window["Redoc"], document.getElementById('container'), ">>")
    //   window["Redoc"].init('https://raw.githubusercontent.com/ConnectedHomes/bg-core-meters/epic/feature/1233_generate_openapi3_docs/docs/meters.openapi3.yaml?token=AEy5bAaeOBVcxUjpf718s_5FwuA2j7GFks5cmPwvwA%3D%3D', {
    //     nativeScrollbars: true,
    //     scrollYOffset: 100
    // }, document.getElementById('container'))
  }
  title = 'chrome-redoc';
  navLinks = [
    {
      "path": "/one",
      "label": "One",
      "isActive": true
    },
    {
      "path": "/two",
      "label": "Two"
    }
  ]
}
