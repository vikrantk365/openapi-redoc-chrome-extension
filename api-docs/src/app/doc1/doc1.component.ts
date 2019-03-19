import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc1',
  templateUrl: './doc1.component.html',
  styleUrls: ['./doc1.component.css']
})
export class Doc1Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log("Init called Doc1", window["Redoc"], document.getElementById('container'), ">>")
      window["Redoc"].init('https://raw.githubusercontent.com/ConnectedHomes/bg-core-meters/epic/feature/1233_generate_openapi3_docs/docs/meters.openapi3.yaml?token=AEy5bAaeOBVcxUjpf718s_5FwuA2j7GFks5cmPwvwA%3D%3D', {
        nativeScrollbars: true,
        scrollYOffset: 50
    }, document.getElementById('container'))
  }

}
