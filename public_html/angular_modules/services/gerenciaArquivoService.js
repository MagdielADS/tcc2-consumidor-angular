/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("tcc-frontend.services.GerenciaArquivoService", []).service("GerenciaArquivoService",function($http){
    
    var service = {
        buscarArquivos : function(){
            return $http.get("http://localhost:8080/tcc-services/rest/georef/arquivos",{});
        },
        salvarArquivo : function(arquivo){
            return $http.post("http://localhost:8080/tcc-services/rest/georef/salvararquivo",arquivo);
        },
        buscarColunasArquivo : function(caminho, caractere){
            var obj = {};
            obj.params = {
                caminho:caminho, 
                caractere: caractere
            };
            return $http.get("http://localhost:8080/tcc-services/rest/georef/colunas",obj);
        }
    };
    return service;
});
