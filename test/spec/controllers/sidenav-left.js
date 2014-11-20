'use strict';

describe('Controller: SidenavLeftCtrl', function () {

  // load the controller's module
  beforeEach(module('giftmemxApp'));

  var SidenavLeftCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidenavLeftCtrl = $controller('SidenavLeftCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
