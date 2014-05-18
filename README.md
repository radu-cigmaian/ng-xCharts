Angular xCharts directive
==========

ng-xCharts is a directive that allows you to add xCharts to your angular app

Instructions:
--------------------------
1. Install ng-xCharts using bower

2. Add xCharts style

  `<link rel="stylesheet" href="bower_components/ng-xCharts/xcharts.min.css"/>`

3. Add xCharts.js and ng-xCharts.js
  
  `<script type="text/javascript" src="bower_components/ng-xCharts/xcharts.min.js"></script>`
  `<script type="text/javascript" src="bower_components/ng-xCharts/ng-xCharts.js"></script>`

4. Add ng-xCharts module to your angular app

5. Add data, type and opts that should be available in controller scope
  
  `<xchart id='myChart' style="height: 300px;" data="data" type="type" opts="opts"></xchart>`

Note: more documentation about the data format can be found at: http://tenxer.github.io/xcharts/
