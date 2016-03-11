'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  beforeEach(function(){
    browser.get('/');
  });

  it('should have a list of 30 users', function(){
    var list = element.all(by.css('.defaultlist li'));
    expect(list.count()).toBe(30);
  });

  it('should give us a list of 30 avatars', function(){
  	var list = element.all(by.css('.defaultlist li img'));
  	expect(list.count()).toBe(30)
  });

  it('should give us a users followers', function(){
    var list = element.all(by.css('.followers p'));
    var search = element(by.model('username'))
    search.sendKeys('reissjohnson')
    element(by.css('#search')).click();
    expect(element(by.cssContainingText('.followers p', '3'))).toBe(true)
  });

  it('should let you search for a username', function(){
    var user = 'reissjohnson'
    var list = element.all(by.css('.users li'));
    var search = element(by.model('username'))
    search.sendKeys('reissjohnson')
    element(by.css('#search')).click();
    expect(list.count()).toBe(1);
  });

});


