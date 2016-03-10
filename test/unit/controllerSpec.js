'use strict';
describe('GitClone controllers', function() {
  describe('GitUserCtrl', function(){
    var scope, ctrl;

    beforeEach(module('gitcloneApp'));

    describe('GitUserCtrl', function(){
      var $httpBackend, xyzGitHubData = function() {
        return 
        [{login: 'a1',
        id: '25',
        avatar_url: 'http://test'},

        {login: 'a1',
        id: '25',
        avatar_url: 'this is a magic line of words.'}]
        
      };

      beforeEach(inject(function(_$httpBackend_, $controller, $rootScope){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('https://api.github.com/users').respond(xyzGitHubData());
        
        scope = $rootScope.$new();
        ctrl = $controller('GitUserCtrl', {$scope:scope});
      }));
        it('should return list of "users"', function() {
          $httpBackend.flush();
          expect(scope.users.length).toBe(2);
console.log(users);
      });
        it('should fetch fake user details', function() {
          expect(scope.users).toBeUndefined();
          console.log(users);


        expect(scope.users).toEqual(xyzGitHubData());
      });
    });
 
    
  });
});


















