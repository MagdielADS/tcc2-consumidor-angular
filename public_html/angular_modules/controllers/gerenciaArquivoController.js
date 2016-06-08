/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("tcc-frontend.controllers.GerenciaArquivoController", []).controller("GerenciaArquivoController",function(GerenciaArquivoService, $scope){
    $scope.arquivo = {};
    
    $scope.buscarArquivos = function(){
        GerenciaArquivoService.buscarArquivos()
            .success(function(response){
                console.log(response);
            }).error(function(response){
                console.log(response);
            });
    }
    
    $scope.salvarArquivo = function(){
        GerenciaArquivoService.salvarArquivo($scope.arquivo)
            .success(function(response){
                console.log(response);
            }).error(function(response){
                console.log(response);
            });
    }
    
    $scope.buscarColunasArquivo = function(){
        $scope.arquivo.pathArquivo = 'C:10Users10Magdiel10Desktop10Magdiel10tcc10ubs-menor.csv';
        $scope.arquivo.caractereTabulacao = ',';
        GerenciaArquivoService.buscarColunasArquivo($scope.arquivo.pathArquivo, $scope.arquivo.caractereTabulacao)
                .success(function(response){
                    console.log("Colunas ", response);
                }).error(function(response){
                   console.log("ERRO ", response); 
                });
    } 
});
