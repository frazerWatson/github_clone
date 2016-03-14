'use strict';

describe('GitUserSearchCtrl', function(){
  var scope, ctrl, $httpBackend, $controller;
  var fakeuser = [{login: 'a1',
    id: '25',
    avatar_url: 'http://test'},
    {login: 'a2',
      id: '26',
      avatar_url: 'this is a magic line of words.'}]

      beforeEach(module('gitcloneApp'));

      describe('returns a specific user', function(){
        beforeEach(inject(function(_$httpBackend_, _$controller_, $rootScope) {
          $httpBackend = _$httpBackend_;
          $controller = _$controller_;
          scope = $rootScope.$new();
          ctrl = $controller('GitUserSearchCtrl', {$scope:scope});
        }));

        it('should return a specific user', function(){
          scope.username = 'a2'
          $httpBackend.expectGET('https://api.github.com/users'+'/'+scope.username).respond(fakeuser[1]);
          scope.getInfo();
          $httpBackend.flush();
          expect(scope.users).toEqual([fakeuser[1]]);
          expect(scope.users[0].login).toEqual('a2');
        });

        it('should not return a user when it does not exist', function(){
          scope.username = 'usernotinthefakeuserobject'
          $httpBackend.expectGET('https://api.github.com/users'+'/'+scope.username).respond(404, '');
          scope.getInfo();
          $httpBackend.flush();
          expect(scope.userNotFound).toEqual(true);
        });
      });
});


