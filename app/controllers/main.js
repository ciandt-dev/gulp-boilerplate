/* 
 * The MIT License
 *
 * Copyright 2015 Gulp Bilerplate CI&T.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';

cgb.controller('ApiCtrl', function ($scope) {

  $scope.init = function (path) {

    $.ajax({
      headers: {
        'Accept': 'application/vnd.github.html'
      },
      url: "https://api.github.com/repos/ciandt-dev/gulp-boilerplate/" + path,
      success: function (data) {
        $scope.$apply(function () {
          $scope.content = data;
        });
      }
    });
  };
});

cgb.controller('HeaderCtrl', function ($scope) {

  angular.element(window).bind("scroll", function () {
    if (this.pageYOffset >= 100) {
      $('.header').addClass('on-scroll');
    }
    else {
      $('.header').removeClass('on-scroll');
    }
  });
});

cgb.controller('AsideCtrl', function ($scope) {

  angular.element('.menu').bind("click", function () {
    var t = $('.sidebar');
    if (t.hasClass('showing')) {
      t.removeClass('showing');
    }
    else {
      t.addClass('showing');
    }
  });

  angular.element('.sidebar a').bind("click", function () {

    $('.sidebar').removeClass('showing');

    if ($(this).hasClass('to-home')) {
      $('html,body').animate({
        scrollTop: 0
      }, 'slow');
    }
    else {
      $('html,body').animate({
        scrollTop: ($('.page-header').outerHeight() - 70)
      }, 'slow');
    }
  });
});