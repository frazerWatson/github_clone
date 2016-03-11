'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  beforeEach(function(){
    browser.get('/');
  });

  it('should have a list of 30 users', function(){
    var list = element.all(by.css('.users li'));
    expect(list.count()).toBe(30);
  });

  it('should let you search for a username', function(){
    var user = 'reissjohnson'
    var list = element.all(by.css('.users li'));
    var search = element(by.model('username'))
    search.sendKeys('reissjohnson')
    search.click();
    expect(list.count()).toBe(1);
  });
});
