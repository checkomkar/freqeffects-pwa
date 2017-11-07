import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	items: any = [];



	constructor() { }

	ngOnInit() {
		this.items = [
			{
				'title': 'Product', 
				'desc': 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', 
				'imgSrc': 'http://materializecss.com/images/sample-1.jpg', 
				'link': '/product-details/1'
			},
			{
				'title': 'Product', 
				'desc': 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', 
				'imgSrc': 'http://materializecss.com/images/sample-1.jpg', 
				'link': '/product-details/2'
			},
			{
				'title': 'Product', 
				'desc': 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', 
				'imgSrc': 'http://materializecss.com/images/sample-1.jpg', 
				'link': '/product-details/3'
			},
			{
				'title': 'Product', 
				'desc': 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', 
				'imgSrc': 'http://materializecss.com/images/sample-1.jpg', 
				'link': '/product-details/4'
			},
			{
				'title': 'Product', 
				'desc': 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', 
				'imgSrc': 'http://materializecss.com/images/sample-1.jpg', 
				'link': '/product-details/5'
			},

		]
	}

}
