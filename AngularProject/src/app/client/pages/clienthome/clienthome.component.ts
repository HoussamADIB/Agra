import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare function jsInit(): any;

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.css'],
})

export class ClientHomeComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    jsInit();           // Loading the template's js files
  }

}
