'use strict';

window.app = window.app || {};

app.Search = class {

  static get MIN_CHARACTERS() {
    return 3;
  }

  static get NUMBER_RESULTS_LIMIT() {
    return 30;
  }
 
  constructor(){
    $(document).ready(() =>{
    	this.page = $("#page");

    	this.page.click(this.clickHandler);
    });
  }

  static setVisiblePage(){
  	// if(window){

  	// }
  }

  clickHandler(event){
  	if (event.metaKey || event.ctrlKey){
  		return;
  	}


  	let element = event.target;
  	while(element !== this){
  		if (element.tagName === 'INPUT'){
  			event.preventDefault();
  			app.Search.setVisiblePage();
  			return;
  		}

  		element = element.parentNode;
  	}
  }

  displaySearchResults(){

  }
 }

 app.search = new app.Search();
