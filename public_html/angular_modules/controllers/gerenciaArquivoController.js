/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("tcc-frontend.controllers.GerenciaArquivoController", []).controller("GerenciaArquivoController",function(GerenciaArquivoService, $scope){
    $scope.arquivo = {
        nomeDoArquivo : 'testando',
        extensao : 'CSV3',
        caractereDeTabulacao : ',',
        pathArquivo : '/arquivos/ubs3.csv',
        colunaDeBusca : 'nome3_ubs',
        latitude : 'lat3_ubs',
        longitude : 'lon3_ubs',
        referenciaDeLugar : 'cid3_ubs'
    };
    
    $scope.buscarArquivos = function(){
        GerenciaArquivoService.buscarArquivos()
            .success(function(response){
                console.log(response);
            }).error(function(response){
                console.log(response);
            });
    };
    
    $scope.salvarArquivo = function(){
        GerenciaArquivoService.salvarArquivo($scope.arquivo)
            .success(function(response){
                console.log(response);
            }).error(function(response){
                console.log(response);
            });
    };
});
