import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-doc1',
  templateUrl: './doc1.component.html',
  styleUrls: ['./doc1.component.css']
})
export class Doc1Component implements OnInit {
  constructor(private documentService: DocumentService) { }

  async ngOnInit() {
    console.log("Init called Doc1", window["Redoc"], document.getElementById('container'), ">>")
    const doc = this.documentService.getDocument()
    window["Redoc"].init(
      doc, {
      nativeScrollbars: true,
      scrollYOffset: 50
    }, document.getElementById('container'))

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  }

}
