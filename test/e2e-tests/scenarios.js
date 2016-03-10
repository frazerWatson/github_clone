'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

	beforeEach(function(){
		browser.get('/');
	});

	it('should have a list of 30 users', function(){
		var list = element.all(by.css('.users list'));
		expect(list.count()).toBe(30);
	});
});
