/* global document:false */
/* global $:false */
(function () {
  'use strict';

  angular
    .module('resume')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController ($scope, $state, $log, $rootScope, $location, $anchorScroll, $timeout) {
    
    $scope.goto = function(link) {
      $(window).scrollTop(0);
      switch (link){
        case 'home':{          
          $('.computer section.segment').css({top:'1000vh',position:'relative'});
          $('#profile-lg').css({'position':'relative','top':'100vh'});
          $timeout(function() {
               $('#education-lg').css('top',getBottom($('#profile-lg')));
              $('.item').removeClass('active');
              $('.home_item').addClass('active');
           },100);
          
          break;
        }
        case 'profile':{
          $('.computer section.segment').css({top:'1000vh',position:'relative'});
          $('#profile-lg').css({'position':'relative','top':'100vh'});
          $timeout(function() {
             $('html, body').animate({
                  scrollTop: getTop($('#profile-lg'))+20
              }, 500);
            $('#education-lg').css('top',getBottom($('#profile-lg')));
           },100);
          break;
        }
        case 'education':{
          $('.computer section.segment').css({top:'1000vh',position:'relative'});
          $('#profile-lg').css({'position':'relative','top':'100vh'});
          $timeout(function() {
            $('#education-lg').css({'position':'relative','top':getBottom($('#profile-lg'))});
             $('html, body').animate({
                  scrollTop: getBottom($('#profile-lg'))+20
              }, 1000);
            $('#experience-lg').css('top',getBottom($('#education-lg')));
           },100);
          break;
        }
        case 'experience':{
          $('.computer section.segment').css({top:'1000vh',position:'relative'});
          $('#profile-lg').css({'position':'relative','top':'100vh'});
          
          $timeout(function() {
            $('#education-lg').css({'position':'relative','top':getBottom($('#profile-lg'))});
            $('#experience-lg').css({'position':'relative','top':getBottom($('#education-lg'))});
             $('html, body').animate({
                  scrollTop: getTop($('#education-lg'))+20
              }, 1300);
            $('#attitudes-lg').css('top',getBottom($('#experience-lg')));
           },100);
          break;
        }
        case 'attitudes':{
          $('.computer section.segment').css({top:'1000vh',position:'relative'});
          $('#profile-lg').css({'position':'relative','top':'100vh'});
          
          $timeout(function() {
            $('#education-lg').css({'position':'relative','top':getBottom($('#profile-lg'))});
            $('#experience-lg').css({'position':'relative','top':getBottom($('#education-lg'))});
            $('#attitudes-lg').css('top',getBottom($('#experience-lg')));
             $('html, body').animate({
                  scrollTop: getTop($('#experience-lg'))
              }, 1700);
            
           },100);
          break;
        }
        default:{
          break;
        }
      }
      
      $anchorScroll();
    };
    
    function resetLayer(layer, prev_layer){
      $(layer).css({'top':getBottom($(prev_layer)),position:'relative'});
    }
   
         
    function getBottom($el){
      console.log($el);
      return $el.offset().top + $el.outerHeight(true);
    }
    
    function getTop($el){
      return $el.offset().top;
    }
    
    
    
  }
})();