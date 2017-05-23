(function() {
  'use strict';

  angular.module('Data')
    .service('DataService', DataService)
    .constant('REST_END_POINT', 'https://localhost:8080/counter-project/');

  DataService.$inject = ['$http','REST_END_POINT']

  function DataService($http,REST_END_POINT) {
    var service = this;

    //  service.getShifts = function () {
    //         return $http.get('data/shifts.json')
    //                     .then(function (result) {
    //                       // console.log(result.data);
    //                         return result.data;     
    //   });
    // };

    service.getShifts = function(lineId, reportDate) {
      //console.log('lineId: '+lineId);
      // console.log('reportDate: '+reportDate);
      return $http.get(REST_END_POINT+'/reports/by' + lineId + '/' + reportDate)
        .then(function(result) {
          return result.data;
        });
    };

    // service.getShiftData = function (line,date,shift) {
    //         //console.log('http://localhost:8080/CounterProject/report/'+line+'/'+date+'/'+shift);
    //         return $http.get('http://localhost:8080/CounterProject/report/'+line+'/'+date+'/'+shift)
    //                     .then(function (result) {
    //                         return result.data;     
    //   });
    // };


    service.getCountryById = function(countryId) {
      //console.log('getCountryById');
      return $http.get(REST_END_POINT+'/countries/' + countryId)
        .then(function(result) {
          //console.log(result.data);
          return result.data;
        });
    };

    service.saveCountry = function(country) {
            console.log('getCountryById');

      console.log(REST_END_POINT);
      return $http.post(REST_END_POINT+'/countries/', country)
        .then(function(result) {
          // console.log(result.data);
          return result.data;
        });
    };

    service.deleteCountry = function(countryId) {
      return $http.delete(REST_END_POINT+'/countries/' + countryId)
        .then(function(result) {
          return result.data;
        });
    };

    service.getCountries = function() {
      return $http.get(REST_END_POINT+'/countries/'
          // ,{ headers: {'Authorization': 'Basic dXNlcjE6dXNlcjFQYXNz'} }
        )
        .then(function(result) {
          // console.log(result.data);
          return result.data;
        });
    };

    //   service.getDeleteCountryById = function (country_id) {
    //         return $http.delete('http://localhost:8088/countries'+country_id )
    //                     .then(function (result) {
    //                       // console.log(result.data);
    //                         return result.data;     
    //   });
    // };


    service.getFactoryById = function(factoryId) {
      //console.log('getFactoryById');
      return $http.get(REST_END_POINT+'/factories/' + factoryId)
        .then(function(result) {
          return result.data;
        });
    };


    service.getFactoriesByCountry = function(countryId) {
      // console.log('getFactoriesByCountryId: '+country_id);
      return $http.get(REST_END_POINT+'/factories/by' + countryId)
        .then(function(result) {
          return result.data;
        });
    };

    service.saveFactory = function(factory) {
      //console.log('insertCountry');
      return $http.post(REST_END_POINT+'/factories/', factory)
        .then(function(result) {
          return result.data;
        });
    };

    service.deleteFactory = function(factoryId) {
      //console.log('insertCountry');
      return $http.delete(REST_END_POINT+'/factories/' + factoryId)
        .then(function(result) {
          //console.log(result.data);
          return result.data;
        });
    };

    service.getLineById = function(lineId) {
      //console.log('getLineById: '+lineId);
      return $http.get(REST_END_POINT+'/lines/' + lineId)
        .then(function(result) {
          return result.data;
        });
    };

    service.getLinesByFactory = function(factoryId) {
      //console.log('getLinesByFactory: '+factoryId);
      return $http.get(REST_END_POINT+'/lines/by' + factoryId)
        .then(function(result) {
          return result.data;
        });
    };

    service.saveLine = function(line) {
      //console.log('insertCountry');
      return $http.post(REST_END_POINT+'/lines/', line)
        .then(function(result) {
          // console.log(result.data);
          return result.data;
        });
    };

    service.deleteLine = function(lineId) {
      //console.log('insertCountry');
      return $http.delete(REST_END_POINT+'/lines/' + lineId)
        .then(function(result) {
          //console.log(result.data);
          return result.data;
        });
    };

    service.getProductGroup = function(id) {
      //console.log('getReportGroup: '+id);
      return $http.get(REST_END_POINT+'/products/' + id)
        .then(function(result) {
          return result.data;
        });
    };

    service.getReportData = function(lineId, reportDate, shift) {
      console.log('getReportGroup: ' + lineId + reportDate + shift);
      return $http.get(REST_END_POINT+'/reports/by' + lineId + '/' + reportDate + '/' + shift)
        .then(function(result) {
          return result.data;
        });
    };

    service.saveReport = function(report) {
      return $http.post(REST_END_POINT+'/reports/', report)
        .then(function(result) {
          return result.data;
        });
    };

    service.deleteReport = function(reportId) {
      return $http.delete(REST_END_POINT+'/reports/' + reportId)
        .then(function(result) {
          return result.data;
        });
    };

    service.getConsumprionByReportId = function(report_id) {
      //console.log('getConsumprionByReportId: '+report_id);
      return $http.get(REST_END_POINT+'/consumption/by' + report_id)
        .then(function(result) {
          return result.data;
        });
    };

    service.deleteCons = function(consId) {
      return $http.delete(REST_END_POINT+'/consumption/' + consId)
        .then(function(result) {
          return result.data;
        });
    };

    service.saveCons = function(cons) {
      return $http.post(REST_END_POINT+'/consumption/', cons)
        .then(function(result) {
          return result.data;
        });
    };

    service.getMaterialDataById = function(materialId) {
      console.log('getMaterialDataById: ' + materialId);
      return $http.get(REST_END_POINT+'/material/' + materialId)
        .then(function(result) {
          return result.data;
        });
    };

  };

})();