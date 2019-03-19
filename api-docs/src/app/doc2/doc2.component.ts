import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc2',
  templateUrl: './doc2.component.html',
  styleUrls: ['./doc2.component.css']
})
export class Doc2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Init called Doc2", window["Redoc"], document.getElementById('container'), ">>")
      window["Redoc"].init('https://raw.githubusercontent.com/ConnectedHomes/bg-core-meters/epic/feature/1233_generate_openapi3_docs/docs/meters.openapi3.yaml?token=AEy5bAaeOBVcxUjpf718s_5FwuA2j7GFks5cmPwvwA%3D%3D', {
        nativeScrollbars: true,
        scrollYOffset: 50
    }, document.getElementById('container'))
  }

}
