/* global document:false */
/* global $:false */
(function () {
  'use strict';

  angular
    .module('resume')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController ($scope, $state, $log, $rootScope, $location, $anchorScroll) {
      $(document).ready(function() {
          prepareLayers();
        $('.phone-me,.twit-me,.email-me,.link-me,.skype-me').popup({position : 'bottom left'});
        //$('.ui.sidebar').sidebar('attach events', '.toc.item');
      });
    
 
    
    function prepareLayers(){
      $anchorScroll($(".home"));
      $('#education-lg').css('top',getBottom($('#profile-lg')));
      $('#profile-lg').visibility({
          once: false,
          onBottomVisible: function(){
            $(".gravatar-small").transition('fly left');
            newLayerVisible('#profile-lg','#experience-lg','#education-lg',function(){
              newLayerVisible('#education-lg','#attitudes-lg','#experience-lg',function(){
                newLayerVisible('#experience-lg','#footer-lg','#attitudes-lg',function(){
                      $('#footer-lg').css('top',getTop($('#attitudes-lg'))-30);
                      $('.item').removeClass('active');
                      $('.attitudes_item').addClass('active');
                });
              });
            });
          },
          onTopVisibleReverse: function(){
            $('.item').removeClass('active');
            $('.home_item').addClass('active');
            console.log('top visible here');
          },
          onBottomVisibleReverse: function() {
            console.log('or bottom visible reverse here');
            $('#profile-lg').css({'position':'relative','top':'100vh'});
            $('#education-lg').css('top',getBottom($('#profile-lg')));
            $('.item').removeClass('active');
            $('.profile_item').addClass('active');
            $('.gravatar-small').transition('fly left');
          }
      });
    }
    
    
    function newLayerVisible(layer1, layer2, layer3, nextLayerFunction){
      $(layer1).css({'position':'fixed','top':'-14px'});
      $(layer2).css('top',getBottom($(layer3)));
      $('.item').removeClass('active');
      $('.'+layer1.substr(1,layer1.length-4)+'_item').addClass('active');
      $(layer3).visibility({
          once: false,
          onBottomVisible: nextLayerFunction,
          onBottomVisibleReverse: function() {
            $(layer3).css({'position':'relative','top':getTop($(layer1))});
            $(layer2).css('top',getBottom($(layer3)));
            $('.item').removeClass('active');
            $('.'+layer3.substr(1,layer3.length-4)+'_item').addClass('active');
          }
      });
    }
    
    function getBottom($el){
      return $el.offset().top + $el.outerHeight(true);
    }
    
    function getTop($el){
      return $el.offset().top;
    }
    
  }
})();
