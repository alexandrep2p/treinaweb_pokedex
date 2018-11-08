(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pokeball-back {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: -50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    z-index: -100;\r\n    width: 100%;\r\n    opacity: 0.5;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"pokeball-back\" src=\"http://hanashiro.github.io/pokedex/images/pokeball.svg\">\n\n<app-lists></app-lists>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pokedex';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_lists_lists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/lists/lists.component */ "./src/app/views/lists/lists.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_lists_lists_component__WEBPACK_IMPORTED_MODULE_5__["ListsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/pokeapi.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokeapi.service.ts ***!
  \*********************************************/
/*! exports provided: PokeapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeapiService", function() { return PokeapiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PokeapiService = /** @class */ (function () {
    //injeção de dependencia do htttpcliente
    function PokeapiService(http) {
        this.http = http;
        //url do serviço que vou consumir os dados
        this.url = '//dev.treinaweb.com.br/pokeapi/';
        //lista dos pokemons para o list.components.ts
        this.pokeList = [];
    }
    //requisição da lista
    PokeapiService.prototype.listAll = function () {
        var _this = this;
        this.http.get(this.url + "/pokedex/1")
            .subscribe(function (response) {
            console.log(response);
            response.pokemon.forEach(function (pokemon) {
                //numero dos pokemons
                pokemon.number = _this.getNunmberFromUrl(pokemon.resource_uri);
            });
            //ordenar pokemons
            _this.pokeList = _this.sortPokemon(response.pokemon)
                .filter(function (pokemon) { return pokemon.number < 1000; });
        });
    };
    //pegar só o numero do pokemon da URL através de expressão regular
    PokeapiService.prototype.getNunmberFromUrl = function (url) {
        return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
    };
    //ordenar pokemons por numero
    PokeapiService.prototype.sortPokemon = function (pokemonList) {
        return pokemonList.sort(function (a, b) {
            return (a.number > b.number ? 1 : -1);
        });
    };
    PokeapiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PokeapiService);
    return PokeapiService;
}());



/***/ }),

/***/ "./src/app/views/lists/lists.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/lists/lists.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#poke-filter {\r\nposition: fixed;\r\ntop: 0;\r\nleft: 0;\r\nz-index: 5;\r\npadding: 10px;\r\nborder: 0;\r\nborder-bottom-left-radius: 20px;\r\nborder-bottom-right-radius: 20px;\r\nbackground-color: #666;\r\ncolor: #fff; }\r\n  \r\n#poke-filter:focus{\r\noutline: none;\r\n}\r\n  \r\n.selected-pkm{\r\nposition: fixed;\r\ntop: 35px;\r\nleft: 0;\r\n}\r\n  \r\n.poke-list {\r\nfloat: right;\r\nmargin-top: 50px;\r\nwidth: 70%;\r\ntext-transform: capitalize;\r\nopacity: 0.95; \r\n}\r\n  \r\n.poke-list-item {\r\n        display: flex;\r\n        align-items: center;\r\n        position: relative;\r\n        padding: 10px;\r\n        border: 1px solid black;\r\n        border-top-left-radius: 20px;\r\n        border-bottom-left-radius: 20px;\r\n        cursor: pointer;\r\n        list-style: none;\r\n        background-color: #333;\r\n        color: white; }\r\n  \r\n.poke-list-item:hover {\r\n        background-color: #555; }\r\n  \r\n.poke-list-item img{\r\n        margin-right: 10px;\r\n        vertical-align: middle;\r\n      }"

/***/ }),

/***/ "./src/app/views/lists/lists.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/lists/lists.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Two way data binding pra fazer a filtragem-->\n<input [(ngModel)]=\"nameFilter\" type=\"text\" id=\"poke-filter\" placeholder=\"Procurar\" maxlength=\"20\">\n\n<img [src]=\"pkmSprite\" class=\"selected-pkm\" *ngIf=\"selectedPkm !== null\">\n<!--Property binding usando colchetes pra pegar o pokemon da variavel e mostrar-->\n\n\n<ul class=\"poke-list\">\n  <!--event binding usando mouseenter pra alterar a função selectPokemon-->\n  <li class=\"poke-list-item\" *ngFor=\"let pokemon of pokemonList\" (mouseenter) = \"selectPokemon(pokemon)\" >\n    <img src=\"//serebii.net/pokedex-xy/icon/{{ pokemon.number | number:'3.0-0' }}.png\">\n    <span>{{ pokemon.number | number:'3.0-0' }} : {{ pokemon.name }}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/views/lists/lists.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/lists/lists.component.ts ***!
  \************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pokeapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pokeapi.service */ "./src/app/services/pokeapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsComponent = /** @class */ (function () {
    //injetar o serviço de API da lista de pokemon
    function ListsComponent(pokeapi) {
        this.pokeapi = pokeapi;
        //---
        //usando two way data binding pra filtrar os pokemons
        this.nameFilter = '';
        //---
        //pega o pokemon selecionado pelo event binding e joga na variavel
        this.selectedPkm = null;
    }
    ListsComponent.prototype.selectPokemon = function (pkm) {
        console.log(pkm);
        this.selectedPkm = pkm;
    };
    Object.defineProperty(ListsComponent.prototype, "pokemonList", {
        //---
        //get pra retornar a lista dos pokemons, se não tiver nada no search lista todos,
        //se tiver alguma coisa correspondente a algum nome só aparece ele
        //obs. o toLowerCase ignora letra maiuscula e minuscula na procura, funciona tudo
        get: function () {
            var _this = this;
            return this.pokeapi.pokeList.filter(function (pokemon) {
                return pokemon.name.toLowerCase().indexOf(_this.nameFilter.toLowerCase()) !== -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListsComponent.prototype, "pkmSprite", {
        //---
        //retorna a URL da imagem selecionada no event binding para o property binding
        get: function () {
            //formata o numero para o site pegar a imagem certa - 3 numeros no máximo, começando com 0
            var number = ('000' + this.selectedPkm.number).slice(-3);
            return "//serebii.net/sunmoon/pokemon/" + number + ".png";
        },
        enumerable: true,
        configurable: true
    });
    //---
    //Função que sempre inicia quando o componente abre
    //chama a listAllt da API
    ListsComponent.prototype.ngOnInit = function () {
        this.pokeapi.listAll();
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/views/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.css */ "./src/app/views/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pokeapi_service__WEBPACK_IMPORTED_MODULE_1__["PokeapiService"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alexa\Desktop\treinaweb\angular\pokedex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map