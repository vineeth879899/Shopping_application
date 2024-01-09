import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-accordion',
  templateUrl: './my-accordion.component.html',
  styleUrls: ['./my-accordion.component.css']
})
export class MyAccordionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


   data = [
    {
      title: 'Grandparent 1',
      text: 'Grandparent 1 description.',
      children: [
        {
          title: 'Parent 1',
        },
        {
          title: 'Parent 1',
          children: [
            {
              title: 'First Child',
              text: 'I am the first child',
            },
            {
              title: 'Second Child',
              text: 'I am the first child',
            }
          ]}
      ]},
      {
      title: 'Grandparent 2',
      text: 'Grandparent 2 description.',
      children: [
        {
          title: 'Parent 3',
          children: [
            {
              title: 'First Child',
              text: 'I am the first child',
            },
            {
              title: 'Second Child',
              text: 'I am the first child',
            }
          ]}
      ]}
  ];

}
