;(function () {
  
  'use strict';
  
  angular.module('pdb.links', [])
	.directive('pdbLinks', [function(){
    
		return{
			restrict: 'EAC',
			scope: {
				pdbId : '@'
			},
			link: function (scope, element, attrs) {
				
				//if tooltip element do not exist append new
    			var toolTipEle = document.querySelector('.pcl-pdblinks-wrapper');
    			if(toolTipEle == null){
    			  angular.element(document.querySelector('body')).append('<div class="pcl-pdblinks-wrapper"></div>')
    			  toolTipEle = document.querySelector('.pcl-pdblinks-wrapper');
    			}
    			
    			var ngTooltipEle = angular.element(toolTipEle);
    			
    			//Popup template
    			var popupTemplate = '<img onclick="angular.element(this).parent().css(\'display\',\'none\');" class="pcl-pdblinks-cross-icon-abs" src="//www.ebi.ac.uk/pdbe/pdb-component-library/images/cross.png">'+
    			    '<a class="pcl-pdblinks-logo-text-a" style="margin-top:5px" target="_blank" href="http://www.ebi.ac.uk/pdbe/entry/pdb/'+scope.pdbId+'">'+
    			      '<img class="pcl-pdblinks-logo-img" src="//www.ebi.ac.uk/pdbe/pdb-component-library/images/PDBe-logo.png">&nbsp;&nbsp;PDBe'+
    			    '</a><br>'+
    			    '<a class="pcl-pdblinks-logo-text-a" target="_blank" href="http://pdbj.org/mine/summary/'+scope.pdbId+'">'+
    			      '<img class="pcl-pdblinks-logo-img" src="//www.ebi.ac.uk/pdbe/pdb-component-library/images/PDBj-logo.png">&nbsp;&nbsp;PDBj'+
    			    '</a><br>'+
    			    '<a class="pcl-pdblinks-logo-text-a" target="_blank" href="http://www.rcsb.org/pdb/explore.do?structureId='+scope.pdbId+'">'+
    			      '<img style="height:32px;vertical-align:middle;" src="//www.ebi.ac.uk/pdbe/pdb-component-library/images/RCSB-PDB-logo.png">&nbsp;&nbsp;RCSB'+
    			    '</a>';
    			
    	var clickingCallback = function(e) {
					
					ngTooltipEle.html(popupTemplate);
					
					var x = e.pageX;
      		var y = e.pageY;
      				
      		ngTooltipEle.css('display', 'block');
					ngTooltipEle.css('top', y + 5 +'px');
					ngTooltipEle.css('left', x +'px');
							
				};
				element.bind('click', clickingCallback);		
				
			}
		}
	
	}])
	  
}());