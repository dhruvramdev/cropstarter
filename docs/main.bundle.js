webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__market_market_component__ = __webpack_require__("../../../../../src/app/market/market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__farm_farm_component__ = __webpack_require__("../../../../../src/app/farm/farm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_farms_service__ = __webpack_require__("../../../../../src/app/services/farms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__types_types_component__ = __webpack_require__("../../../../../src/app/types/types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shop_shop_component__ = __webpack_require__("../../../../../src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__item_item_component__ = __webpack_require__("../../../../../src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shops_service__ = __webpack_require__("../../../../../src/app/services/shops.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__buy_buy_component__ = __webpack_require__("../../../../../src/app/buy/buy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'types', component: __WEBPACK_IMPORTED_MODULE_12__types_types_component__["a" /* TypesComponent */] },
    { path: 'market', component: __WEBPACK_IMPORTED_MODULE_9__market_market_component__["a" /* MarketComponent */] },
    { path: 'farms/:id/buy', component: __WEBPACK_IMPORTED_MODULE_17__buy_buy_component__["a" /* BuyComponent */] },
    { path: 'farms/:id', component: __WEBPACK_IMPORTED_MODULE_10__farm_farm_component__["a" /* FarmComponent */] },
    { path: 'shop/:id', component: __WEBPACK_IMPORTED_MODULE_14__item_item_component__["a" /* ItemComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_13__shop_shop_component__["a" /* ShopComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__market_market_component__["a" /* MarketComponent */],
            __WEBPACK_IMPORTED_MODULE_10__farm_farm_component__["a" /* FarmComponent */],
            __WEBPACK_IMPORTED_MODULE_12__types_types_component__["a" /* TypesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shop_shop_component__["a" /* ShopComponent */],
            __WEBPACK_IMPORTED_MODULE_14__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_17__buy_buy_component__["a" /* BuyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_farms_service__["a" /* FarmsService */],
            __WEBPACK_IMPORTED_MODULE_15__services_shops_service__["a" /* ShopsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/buy/buy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buy/buy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pages\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n\n      <div class=\"content-frame padding-sm center\">\n        <h4 class=\"text-color-2 margin-t\">Investing in</h4>\n        <h2 class=\"text-color-4 margin-tb-sm\">{{user.name}}'s Farm</h2>\n        <hr>\n        <h3 class=\"text-color-2 margin-tb\">Choose amount to pledge</h3>\n        <div class=\"amountDiv center\">\n          <span class=\"text-color-2 text-light text-md\">₹</span><span id=\"i-amount\">5000</span>\n        </div>\n        <br>\n        <form class=\"form-signin form-style\" role=\"form\" action=\"/farms/145/invest\" method=\"post\">\n          <div class=\"form-group\">\n            <input type=\"range\" class=\"input-1 margin-tb-sm center\" value=\"5000\" min=\"5000\" max=\"50000\" step=\"5000\" id=\"i-slider\" name=\"amount\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0;\"><div class=\"rangeslider rangeslider--horizontal\" id=\"js-rangeslider-0\"><div class=\"rangeslider__fill\" style=\"width: 20px;\"></div><div class=\"rangeslider__handle\" style=\"left: 0px;\"></div></div>\n          </div>\n          <table class=\"invoice\">\n            <tbody><tr>\n              <td><h4 class=\"text-color-2 center\">Payment Breakdown</h4></td>\n            </tr>\n            <tr>\n              <td>\n                <table class=\"invoice-items\" cellpadding=\"0\" cellspacing=\"0\">\n                  <tbody><tr>\n                    <td>Actual Amount Invested <br class=\"mobile-on\">to the Farm</td>\n                    <td class=\"alignright\">₹ <span id=\"amt-actual\">4750</span></td>\n                  </tr>\n                  <tr>\n                    <td>Insurance Fee <span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"This helps us with the platform's operation costs\"></span></td>\n                    <td class=\"alignright\">₹ <span id=\"amt-fee\">250</span></td>\n                  </tr>\n                  <tr class=\"total\">\n                    <td class=\"alignright\" width=\"80%\">Total</td>\n                    <td class=\"alignright\">₹ <span id=\"amt-total\">5000</span></td>\n                  </tr>\n                  </tbody></table>\n              </td>\n            </tr>\n            </tbody></table>\n          <br><br>\n          <button class=\"btn btn-lg btn-1 btn-block text-spacing ts\" type=\"submit\">COMMIT</button><br>\n          <p class=\"text-color-2 lh-xs\">By pledging, you certify that you are of Indian legal age (18 years old and above) and agree to ourterms &amp; conditions.</p>\n        </form>\n      </div>\n      <div class=\"content-frame-footer\">\n        <p><strong><a href=\"/farms/{{user.farm_id}}\" class=\"text-color-4\">Back</a></strong>\n        </p></div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/buy/buy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_farms_service__ = __webpack_require__("../../../../../src/app/services/farms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyComponent = (function () {
    function BuyComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    BuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            console.log(_this.id);
            _this.user = _this.service.getfarm(_this.id).subscribe(function (data) {
                // console.log(data);
                _this.user = data;
            });
        });
    };
    return BuyComponent;
}());
BuyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-buy',
        template: __webpack_require__("../../../../../src/app/buy/buy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/buy/buy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_farms_service__["a" /* FarmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_farms_service__["a" /* FarmsService */]) === "function" && _b || Object])
], BuyComponent);

var _a, _b;
//# sourceMappingURL=buy.component.js.map

/***/ }),

/***/ "../../../../../src/app/farm/farm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/farm/farm.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<br>-->\r\n<!--<br>-->\r\n<!--<br>-->\r\n<!--<br>-->\r\n<!--<br>-->\r\n<!--<br>-->\r\n<!--<br>-->\r\n<!--<br>-->\r\n<!--{{ user | json }}-->\r\n\r\n<div class=\"modal fade\" id=\"risk\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span>\r\n        </button>\r\n        <h3 class=\"modal-title text-color-4 center\">Risk-acceptance Agreement</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-1\">\r\n          </div>\r\n          <div class=\"col-md-10 text-color-2\">\r\n            <br>\r\n            <p>It is a fact that there are risks involved in farming. This is where the core business of CropStarter comes\r\n              in, providing structures that reduces risks and increases profitability.</p>\r\n            <br>\r\n            <p>By clicking agree, I hereby acknowledge and accept that I might incur losses due to the following\r\n              risks:</p>\r\n            <ol>\r\n              <li>Non-repayment or Payment Default</li>\r\n            </ol>\r\n            <br>\r\n            <p>CropStarter plays a part in reducing the risks in farming, to protect you as our investors and the farmers.\r\n              Learn more about how we manage risks <a href=\"https://www.CropStarter.com/learn/risk-management-structure\"\r\n                                                      target=\"_blank\">here</a>.</p>\r\n            <br>\r\n            <div class=\"modal-footer\">\r\n              <button class=\"btn btn-2\" data-dismiss=\"modal\">Cancel</button>\r\n              <a href=\"https://www.CropStarter.com/farms/178/invest\">\r\n                <button class=\"btn btn-1\">AGREE</button>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container pages-md\"></div>\r\n<br>\r\n<div class=\"container marketing\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 mcard\">\r\n      <div class=\"top-cat center\">\r\n        <p><span class=\"glyphicon glyphicon-grain\" aria-hidden=\"true\"></span> {{user.crop}}\r\n\r\n        </p></div>\r\n      <div class=\"thumbnail-frame\">\r\n        <a href=\"https://www.CropStarter.com/farms/178\"><img class=\"full-image\"\r\n                                                          src=\"assets/images/farmers/8e066d4f-9bf0-494f-8962-ae2a0da658fb-47602771_s.jpg\"\r\n                                                          alt=\"{{user.name}}&#39;s Farm\"></a>\r\n        <a href=\"https://www.CropStarter.com/farms/178\"><h3 class=\"text-color-4\">{{user.name}}'s Farm\r\n\r\n        </h3></a>\r\n        <div class=\"text-center\">\r\n          <p class=\"t-location text-sm text-color-2\">{{user.area}}, {{user.state}}</p>\r\n        </div>\r\n\r\n        <div class=\"highlight-line-green\">\r\n\r\n          <div class=\"row center high-row\">\r\n            <div class=\"col-md-12 col-xs-12\">\r\n              <p class=\"raised-text\">₹ {{user.pledged}} RAISED <span class=\"progress-text\">({{user.pledged / user.requirement * 100 | number }}%)<span></span></span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n\r\n\r\n        <br>\r\n        <div *ngIf=\"user.pledged != user.requirement\">\r\n          <p class=\"center text-md text-color-4 text-left\">₹ 5,000 <span class=\"text-color-2\">from</span> 1 <span\r\n            class=\"text-color-2\">pledges</span> <span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\"\r\n                                                      data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n                                                      data-original-title=\"Pledges are commitments from users with interest in investing.\"></span>\r\n          </p>\r\n          <a class=\"btn btn-2\" href=\"#\" role=\"button\">PLEDGE - 5 DAYS LEFT</a>\r\n\r\n        </div>\r\n        <div *ngIf=\"user.pledged == user.requirement\">\r\n          <p class=\"center text-md text-color-2 text-left\"><span class=\"text-color-4\">Hooray!</span> We made it!</p>\r\n\r\n          <p>\r\n            <a class=\"btn btn-2\" role=\"button\" disabled=\"\">THIS FARM IS FULLY FUNDED</a>\r\n          </p>\r\n        </div>\r\n\r\n        <br>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 mcard\">\r\n\r\n      <div class=\"thumbnail-frame mcontent\">\r\n        <div class=\"row\" *ngIf=\"user.pledged != user.requirement\">\r\n          <div class=\"col-md-12 incontent center\">\r\n            <img class=\"icon margin-t-lg\" src=\"assets/images/support.png\" height=\"60px\">\r\n            <h3 class=\"text-color-4\">Support {{user.name}}'s Farm</h3>\r\n            <p><a class=\"btn btn-2 text-spacing btn-lg\" id=\"risk-link\" role=\"button\" routerLink=\"/farms/{{user.farm_id}}/buy\">MAKE A PLEDGE</a></p>\r\n            <br>\r\n            <div class=\"footer-social-icons\">\r\n              <div class=\"text-strikethru\">\r\n                <div class=\"line\"></div>\r\n                <div class=\"text\">Together, we can make this happen. <br>Help us spread the word by sharing!<br\r\n                  class=\"mobile-off\"> #PossibleTogether\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"user.pledged == user.requirement\">\r\n          <div class=\"col-md-12 incontent center\">\r\n            <img class=\"icon margin-t-lg\" src=\"assets/images/insurance/rewards.png\" height=\"80px\">\r\n            <h3 class=\"text-color-4\">Way to go! We have fully-funded this farm!</h3>\r\n            <p class=\"text-color-2\">Sending our warm appreciation to our pioneer investors who made this happen!</p>\r\n            <br>\r\n            <p><a class=\"btn btn-2 text-spacing btn-lg btn-wrap\" href=\"https://www.CropStarter.com/farms/browse\"\r\n                  role=\"button\">SUPPORT FARMS TODAY →</a></p>\r\n            <br>\r\n            <div class=\"footer-social-icons\">\r\n              <div class=\"text-strikethru\">\r\n                <div class=\"line\"></div>\r\n                <div class=\"text\">Share the good news!</div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <br>\r\n      </div>\r\n\r\n      <div>\r\n        <!-- Nav tabs -->\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n          <li role=\"presentation\" class=\"active\"><a href=\"https://www.CropStarter.com/farms/178#details\"\r\n                                                    aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Details</a></li>\r\n          <li role=\"presentation\"><a href=\"https://www.CropStarter.com/farms/178#updates\" aria-controls=\"updates\"\r\n                                     role=\"tab\" data-toggle=\"tab\">Farm Status</a></li>\r\n          <li role=\"presentation\"><a href=\"https://www.CropStarter.com/farms/178#harvest\" aria-controls=\"harvest\"\r\n                                     role=\"tab\" data-toggle=\"tab\">Harvest</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"thumbnail-frame mcontent\">\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content\">\r\n          <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"details\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 incontent\">\r\n\r\n\r\n                <p class=\"text-md text-color-4 text-left\"><span class=\"text-color-2\"><span class=\"text-color-4\">Fixed Returns</span>: You will get a <span\r\n                  class=\"text-color-4\">{{user.returns}}%</span> return on investment in 4-6 months </span></p>\r\n\r\n                <!--<h1 class=\"r-bg pull-right\"><span class=\"glyphicon glyphicon-usd\" aria-hidden=\"true\"></span></h1>-->\r\n                <p class=\"text-md text-color-4 text-left\">₹ {{user.requirement}} <span class=\"text-color-2\">goal</span>\r\n                </p>\r\n                <p class=\"text-md text-color-4 text-left\">₹ {{user.pledged}} <span class=\"text-color-2\">from</span><br\r\n                  class=\"mobile-on\"> {{user.investors}} <span class=\"text-color-2\">investors</span></p>\r\n\r\n                <hr>\r\n                <!--<p class=\"text-color-2\"><span class=\"glyphicon glyphicon-unchecked\" aria-hidden=\"true\"></span> Area: 1-->\r\n                  <!--hectares -&#45;&#45; <span class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\"></span> Harvest: 180 days-->\r\n                <!--</p>-->\r\n                <!--<p class=\"text-sm farm-description text-color-2\">Mang Crisaldo is a 47-year-old farmer. He has 5-->\r\n                  <!--children. Among his children, he has 2 who are working and helping with the family income. He owns 1-->\r\n                  <!--Ha of Palay field. </p>-->\r\n                <!--<br>-->\r\n\r\n                <!--<hr>-->\r\n                <!--<p class=\"text-color-2 text-color-2\"><span class=\"glyphicon glyphicon-map-marker\"-->\r\n                                                           <!--aria-hidden=\"true\"></span> Sta. Maria, Laguna, Philippines-->\r\n                <!--</p>-->\r\n                <!--<p class=\"text-sm farm-description text-color-2\">Santa María, at 126 km2 is the 3rd largest town in-->\r\n                  <!--Laguna in terms of land area, after San Pablo City and Calambâ City, followed by Lumbán. It is-->\r\n                  <!--surrounded by the towns of Tanay (Rizal) on the north-west; Pililla (Rizal) on the west; Mabitac on-->\r\n                  <!--the south-west, Famy on the southeast (both in Laguna); and Real (Quezon) on the north-east. It is the-->\r\n                  <!--northernmost town in Laguna. Sta. Maria is the rice capital of Laguna, where it has around 1,000-->\r\n                  <!--hectares of irrigated riceland in the area. Aside from palay, there are many citrus plants in the area-->\r\n                  <!--such as dalandan, pomelo and calamansi.</p>-->\r\n\r\n                <!--<hr>-->\r\n                <!--<p class=\"text-color-2 text-color-2\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Notes to Investor-->\r\n                <!--</p>-->\r\n                <!--<p class=\"text-sm farm-description text-color-2\">As loan, farmer is mandated to repay the loan with-->\r\n                  <!--fixed interest charges. In case of extreme conditions and losses, it is anticipated that farmers will-->\r\n                  <!--not be able to repay the loan immediately, and might extend the holding/repayment period for the-->\r\n                  <!--farmer as a consideration for the unfortunate event. <br><br> Insurance is also optional for the-->\r\n                  <!--farmer.</p>-->\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"updates\">\r\n\r\n            <p class=\"text-md text-color-2 center padding-td\">No farm updates yet.</p>\r\n\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"harvest\">\r\n            <p class=\"text-md text-color-2 center padding-td\">No harvest details yet.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <br>\r\n      </div>\r\n\r\n      <div class=\"thumbnail-frame mcontent\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 incontent center\">\r\n            <h3 class=\"text-color-4\">Management of Farmers: Improve Productivity and Income</h3>\r\n            <div class=\"row\">\r\n              <p class=\"text-color-2\"><strong>With your support to this farmer,</strong> they will be provided with\r\n                these resources to <br class=\"mobile-off\">improve their productivity and thus increase the profit of the\r\n                farm.</p>\r\n              <div class=\"col-md-3\">\r\n                <img class=\"icon margin-t-lg\" src=\"assets/images/insurance/farm-funding.png\" height=\"50px\">\r\n                <br><br>\r\n                <p class=\"text-color-2\">Capital</p>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <img class=\"icon margin-t-lg\" src=\"assets/images/insurance/farm-market.png\" height=\"50px\">\r\n                <br><br>\r\n                <p class=\"text-color-2\">Assured Buyer of Crops</p>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <img class=\"icon margin-t-lg\" src=\"assets/images/insurance/farm-tech.png\" height=\"50px\">\r\n                <br><br>\r\n                <p class=\"text-color-2\">Latest Technologies incorporated in the farm plan</p>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <img class=\"icon margin-t-lg\" src=\"assets/images/insurance/farm-insurance.png\" height=\"50px\">\r\n                <br><br>\r\n                <p class=\"text-color-2\">Crop Insurance</p>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n\r\n            <h4 class=\"text-color-4\">Have any questions or need assistance?</h4>\r\n            <p class=\"padding\">We're here to help! By visiting our <a href=\"https://www.CropStarter.com/help\">Help\r\n              Center</a>, you can find the answers to most common questions quickly.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/farm/farm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_farms_service__ = __webpack_require__("../../../../../src/app/services/farms.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FarmComponent = (function () {
    function FarmComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    FarmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            console.log(_this.id);
            _this.user = _this.service.getfarm(_this.id).subscribe(function (data) {
                // console.log(data);
                _this.user = data;
            });
        });
    };
    return FarmComponent;
}());
FarmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-farm',
        template: __webpack_require__("../../../../../src/app/farm/farm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/farm/farm.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_farms_service__["a" /* FarmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_farms_service__["a" /* FarmsService */]) === "function" && _b || Object])
], FarmComponent);

var _a, _b;
//# sourceMappingURL=farm.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <br>\n    <br>\n    <div class=\"row\">\n      <div class=\" col-md-6 col-xs-12\">\n        <a href=\"https://www.CropStarter.com/\"><img class=\"footer-logo\" src=\"assets/images/v3.png\"></a>\n        <br>\n        <p class=\"text-color-3 footer-text\">Investing or Lending through CropStarter involves risk of principal loss. Cropstarter does not guarantee repayment or return on investment.</p>\n        <br>\n        <p class=\"text-xs lh-sm\">By using this site, you agree to the <a href=\"https://www.CropStarter.com/about/terms\"><span class=\"text-color-lg margin-sm\">Terms &amp; Conditions</span>.</a><br>© 2017 Crop Starter. All Rights Reserved.</p>\n        <br>\n      </div>\n\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron parallax-window\" data-parallax=\"scroll\" data-image-src=\"assets/images/bg-field.jpg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\" col-md-9\">\n        <h1>In CropStarter, doing good comes with great rewards.</h1>\n        <p>Grow your money by helping our farmers. Your decision to join our <br class=\"mobile-off\"/>community brings\n          our smallholder farmers a step closer to the hope of<br class=\"mobile-off\"/> a better life.</p>\n      </div>\n    </div>\n    <div class=\"row center\">\n      <img class=\"icon margin-t-xl\" src=\"assets/images/down.png\" height=\"50px\">\n    </div>\n  </div>\n</div>\n\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row \">\n      <div class=\"text-center\">\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-10\">\n          <h2 class=\"text-color-2\">We are the first and the only crowdfunding platform enabling you to help finance our\n            farmers</h2>\n          <div class=\"col-md-1\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"text-center\">\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-10\">\n          <h2 class=\"text-color-4\">What's In It For You</h2>\n          <br>\n          <div class=\"row center\">\n            <div class=\"col-md-4\">\n              <img class=\"icon\" src=\"assets/images/connect.png\" height=\"100px\">\n              <h3 class=\"text-color-5\">Connect with our Farmers</h3>\n              <p class=\"text-color-2 text-md padding-rl\">We provide you an opportunity to directly impact the lives of\n                our farmers</p>\n            </div>\n            <div class=\"col-md-4\">\n              <img class=\"icon\" src=\"assets/images/rewards.png\" height=\"100px\">\n              <h3 class=\"text-color-5\">Grow your money</h3>\n              <p class=\"text-color-2 text-md padding-rl\">We provide you with an alternative medium for investment and\n                additional source of income for living</p>\n            </div>\n            <div class=\"col-md-4\">\n              <img class=\"icon\" src=\"assets/images/plant.png\" height=\"100px\">\n              <h3 class=\"text-color-5\">Social Impact Invesment</h3>\n              <p class=\"text-color-2 text-md padding-rl\">We are a social impact investment wherein you help our farmers\n                but at the same time earn for your future</p>\n            </div>\n          </div>\n          <br>\n          <div class=\"col-md-1\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"jumbotron mobile-padding-lr\" id=\"start\">\n  <div class=\"container\">\n    <div class=\"row center\">\n      <h2 class=\"text-color-4\">You can be a Pioneer of Hope for the farmers.</h2>\n      <p class=\"text-color-2 margin-tb-lg\">Harness the power of many and together, we can help empower our farmers.</p>\n\n      <p><a class=\"btn btn-2 text-spacing btn-lg\" href=\"user/register.html\" role=\"button\">GET STARTED TODAY</a></p>\n\n    </div>\n  </div>\n</div>\n\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row footer-links\">\n      <div class=\" col-md-3 col-sm-3 col-xs-12\">\n        <strong><p class=\"text-color-3 margin-sm\">About Us</p></strong>\n        <a href=\"about/CropStarter.html\"><p class=\"text-color-3 margin-sm\">What is CropStarter</p></a>\n        <a href=\"about/team.html\"><p class=\"text-color-3 margin-sm\">Who We Are</p></a>\n        <a href=\"http://blog.CropStarter.com/\"><p class=\"text-color-3 margin-sm\">Blog</p></a>\n        <br class=\"mobile-on\">\n      </div>\n      <div class=\" col-md-3 col-sm-3 col-xs-12\">\n        <strong><p class=\"text-color-3 margin-sm\">Learn</p></strong>\n        <a href=\"learn/how-it-works.html\"><p class=\"text-color-3 margin-sm\">How It Works</p></a>\n        <a href=\"learn/risk-management-structure.html\"><p class=\"text-color-3 margin-sm\">How We Manage Risks</p></a>\n        <a href=\"help.html\"><p class=\"text-color-3 margin-sm\">FAQs</p></a>\n        <br class=\"mobile-on\">\n      </div>\n      <div class=\" col-md-3 col-sm-3 col-xs-12\">\n        <strong><p class=\"text-color-3 margin-sm\">Get Involved</p></strong>\n        <a href=\"contribute.html\"><p class=\"text-color-3 margin-sm\">How You Can Contribute</p></a>\n        <a href=\"partners.html\"><p class=\"text-color-3 margin-sm\">Partner Pages</p></a>\n        <br class=\"mobile-on\">\n      </div>\n      <div class=\" col-md-3 col-sm-3 col-xs-12\">\n        <strong><p class=\"text-color-3 margin-sm\">Help</p></strong>\n        <a href=\"help.html\"><p class=\"text-color-3 margin-sm\">Help Center</p></a>\n        <a href=\"contact.html\"><p class=\"text-color-3 margin-sm\">Contact Us</p></a>\n        <p class=\"text-color-3 margin-sm text-xs\">Need help? Email us at <a href=\"mailto:support@CropStarter.com\"\n                                                                            class=\"text-color-3\">support@CropStarter.com</a>\n        </p>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\" col-md-6 col-xs-12\">\n        <a href=\"index.html\"><img class=\"footer-logo\" src=\"assets/images/v3.png\"></a>\n        <br>\n        <p class=\"text-color-3 footer-text\">Investing or Lending through CropStarter involves risk of principal loss.\n          CropStarter does not guarantee repayment or return on investment.</p>\n        <br>\n        <p class=\"text-xs lh-sm\">By using this site, you agree to the <a href=\"about/terms.html\"><span\n          class=\"text-color-lg margin-sm\">Terms &amp; Conditions</span>.</a><br>&copy; 2017 CropStarter Enterprises\n          Corporation. All Rights Reserved.</p>\n        <br>\n      </div>\n      <div class=\" col-md-6 col-xs-12 mobile-pull-right\">\n        <p class=\"text-color-3 footer-text margin-b-xs\">Connect with Us!</p>\n        <a href=\"https://fb.com/CropStarter\">\n          <img class=\"icon\" src=\"assets/images/social-media/fb-wh.png\" height=\"25px\"></a>\n        <a class=\"footer-icons\" href=\"https://instagram.com/CropStarter\">\n          <img class=\"icon\" src=\"assets/images/social-media/ig-wh.png\" height=\"25px\"></a>\n        <a class=\"footer-icons\" href=\"https://www.linkedin.com/company/CropStarter\">\n          <img class=\"icon\" src=\"assets/images/social-media/li-wh.png\" height=\"25px\"></a>\n        <br><br>\n        <div class=\"fb-like\" data-href=\"https://www.facebook.com/CropStarter\" data-layout=\"standard\" data-action=\"like\"\n             data-show-faces=\"true\" data-share=\"true\" data-colorscheme=\"dark\" data-width=\"200px\"></div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<div id=\"message\" class=\"hide\">\n  <div id=\"inner-message\" class=\"alert alert-warning\">\n    <button type=\"button\" id=\"#beta-close\" class=\"close text-color-3\" aria-label=\"Close\" target=\"inner-message\"><span\n      aria-hidden=\"true\">&times;</span></button>\n    <p class=\"center lh-xs mobile-text-sm text-md\">CropStarter is still on its beta phase and we'd love to hear your <a\n      href=\"contact.html\"><strong>feedback</strong></a>. Help us improve your CropStarter experience!</p>\n  </div>\n</div>\n\n<a href=\"#\" id=\"back-to-top\" title=\"Back to top\"></a>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n<!--{{ item | json }}-->\n\n<div class=\"container pages-md\"></div>\n<br>\n<div class=\"container marketing\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 mcard\">\n      <div class=\"top-cat center\">\n        <p><span class=\"glyphicon glyphicon-grain\" aria-hidden=\"true\"></span> {{item.crop}}\n\n        </p></div>\n      <div class=\"thumbnail-frame\">\n        <a href=\"#\"><img class=\"full-image\"\n                         src=\"assets/images/farmers/8e066d4f-9bf0-494f-8962-ae2a0da658fb-47602771_s.jpg\"\n                         alt=\"{{item.name}}&#39;s Farm\"></a>\n        <a href=\"#\"><h3 class=\"text-color-4\">{{item.name}}\n        </h3></a>\n\n\n        <div class=\"highlight-line-green\">\n\n          <div class=\"row center high-row\">\n            <div class=\"col-md-12 col-xs-12\">\n              <p class=\"raised-text\">₹ {{item.price}} per Quintal <br> <span class=\"progress-text\">( {{item.quantity}} Quintals )<span></span></span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <br>\n\n      </div>\n    </div>\n\n    <div class=\"col-lg-8 mcard\">\n\n      <div class=\"thumbnail-frame mcontent\">\n\n\n        <div class=\"row\">\n          <div class=\"col-md-12 incontent center\">\n            <img class=\"icon margin-t-lg\" src=\"assets/images/dp-3.png\" height=\"80px\">\n            <h3 class=\"text-color-4\">Purchase this Crop Now!</h3>\n            <p class=\"text-color-2\">Sending our warm appreciation to our pioneer buyers who made this happen!</p>\n            <br>\n            <p><a class=\"btn btn-2 text-spacing btn-lg btn-wrap\" href=\"https://www.CropStarter.com/market\"\n                  role=\"button\">Purchase →</a></p>\n            <br>\n          </div>\n        </div>\n      </div>\n\n\n\n\n\n\n\n\n      </div>\n\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shops_service__ = __webpack_require__("../../../../../src/app/services/shops.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = (function () {
    function ItemComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            console.log(_this.id);
            _this.service.getitem(_this.id).subscribe(function (data) {
                console.log(data);
                _this.item = data;
            });
        });
        ;
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shops_service__["a" /* ShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shops_service__["a" /* ShopsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ItemComponent);

var _a, _b;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pages\">\n  <div class=\"col-md-3\">\n\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"content-frame\">\n      <h2 class=\"text-color-4\">Welcome back!</h2>\n\n      <form class=\"form-signin form-style\" #f=\"ngForm\" (ngSubmit)=\"submit(f.value)\">\n        <div class=\"alert alert-error\" *ngIf=\"errmsg\">\n          {{errmsg}}\n        </div>\n        <div class=\"form-group float-label-control\">\n\n          <input ngModel type=\"email\" class=\"form-control empty\" placeholder=\"Email Address\" name=\"email\">\n          <label for=\"\">Email Address</label>\n        </div>\n        <div class=\"form-group float-label-control\">\n\n          <input ngModel type=\"password\" class=\"form-control empty\" placeholder=\"Password\" name=\"password\">\n          <label for=\"\">Password</label>\n        </div>\n        <button class=\"btn btn-lg btn-1 btn-block\" type=\"submit\">Log me in!</button>\n        <br>\n      </form>\n    </div>\n    <div class=\"content-frame-footer\">\n      <p>New to CropStarter? <strong><a href=\"https://www.CropStarter.com/user/register\"\n                                     class=\"text-color-4\">Register</a></strong>\n      </p>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n\n  </div>\n</div>\n\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (data) {
        console.log(data);
        if (data.email == '' || data.password == '') {
            this.errmsg = "UserName or Password Incorret";
        }
        else {
            this.router.navigate(['/types']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/market/market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market/market.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container pages-md center\">\n  <h2 class=\"text-color-4\">Browsing Farms</h2>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form class=\"form-inline\" role=\"form\" action=\"#\" method=\"get\">\n        <div class=\"col-xs-12 padding-l\">\n          <input type=\"hidden\" class=\"form-control input-2\" value=\"short\" name=\"type\">\n          <div class=\"mobile-off\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-2\" placeholder=\"Search for description, location, crops\" name=\"keyword\">\n              <button type=\"submit\" class=\"btn btn-1\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"cbox\">\n                    <input type=\"checkbox\" id=\"show-previous\" class=\"input-cb\" name=\"show_previous\"> <span>Show previous farms <span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Farms that have been fully-funded and finished the harvest cycle\"></span></span>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\" style=\"margin-top: 15px;\">\n                    <select id=\"browse-returns\" name=\"returns\" class=\"form-control\" style=\"border-color: #036564;\">\n                      <option value=\"\">Choose from type of returns</option>\n                      <option value=\"profit-share\">Profit-sharing</option>\n                      <option value=\"fixed-rate\">Fixed Returns</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div id=\"browse-note\" class=\"browse-note text-light hide\">\n                  <em><p class=\"text-color-2 note\">Now click <i class=\"fa fa-search\" aria-hidden=\"true\"></i> to proceed with search.</p></em>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mobile-on\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-2\" placeholder=\"Search for description, location, crops\" name=\"keyword_m\">\n              <div class=\"form-group\" style=\"margin-top: 15px;\">\n                <select name=\"returns_m\" class=\"form-control input-2\">\n                  <option value=\"\">Choose from type of returns</option>\n                  <option value=\"profit-share\">Profit-sharing</option>\n                  <option value=\"fixed-rate\">Fixed Returns</option>\n                </select>\n              </div>\n              <div class=\"cbox\">\n                <input type=\"checkbox\" id=\"show-previous\" class=\"input-cb\" name=\"show_previous\"> <span>Show previous farms <span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Farms that have been fully-funded and finished the harvest cycle\"></span></span>\n              </div>\n              <br>\n              <button type=\"submit\" class=\"btn btn-1\">SEARCH</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"container marketing\">\n  <div class=\"row\">\n\n    <div class=\"col-lg-4\" *ngFor=\"let farm of farms\">\n      <div class=\"top-cat center\">\n        <p><span class=\"glyphicon glyphicon-grain\" aria-hidden=\"true\"></span> {{farm.crop}}</p>\n      </div>\n      <div class=\"thumbnail-frame\">\n        <a routerLink=\"/farms/{{farm.farm_id}}\"><img class=\"full-image\" src=\"assets/images/farmers/8e066d4f-9bf0-494f-8962-ae2a0da658fb-47602771_s.jpg\" alt=\"Mang Crisaldo&#39;s Farm\"></a>\n        <a routerLink=\"/farms/{{farm.farm_id}}\"><h3 class=\"text-color-4\">{{farm.name}}'s Farm\n\n        </h3></a>\n        <div class=\"text-center\">\n          <p class=\"t-location text-sm text-color-2\">{{farm.area}}, {{farm.state}}</p>\n        </div>\n\n        <div class=\"highlight-line-green\">\n\n          <div class=\"row center high-row\">\n            <div class=\"col-md-12 col-xs-12\">\n              <p class=\"raised-text\">₹ {{farm.pledged}} RAISED <span class=\"progress-text\">({{farm.pledged / farm.requirement * 100 | number }}%)<span></span></span></p>\n            </div>\n          </div>\n        </div>\n        <br>\n\n        <div *ngIf=\"farm.pledged == farm.requirement\">\n          <p class=\"center text-md text-color-2 text-left\"><span class=\"text-color-4\">Hooray!</span> We made it!</p>\n          <br>\n          <p><a class=\"btn btn-2\" routerLink=\"/farms/{{farm.farm_id}}\" role=\"button\">THIS FARM IS FULLY FUNDED</a></p>\n          <br>\n\n        </div>\n        <div *ngIf=\"farm.pledged != farm.requirement\">\n          <p class=\"center text-md text-color-4 text-left\">₹ {{farm.pledged}} <span class=\"text-color-2\">from</span> {{farm.investors}} <span class=\"text-color-2\">pledges</span> <span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Pledges are commitments from users with interest in investing.\"></span></p>\n\n          <br>\n          <p><a class=\"btn btn-2\" routerLink=\"/farms/{{farm.farm_id}}\" role=\"button\">PLEDGE - 5 DAYS LEFT</a></p>\n          <br>\n\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/market/market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_farms_service__ = __webpack_require__("../../../../../src/app/services/farms.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarketComponent = (function () {
    function MarketComponent(service) {
        this.service = service;
    }
    MarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getall().subscribe(function (data) {
            console.log(data);
            _this.farms = data;
        });
    };
    return MarketComponent;
}());
MarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-market',
        template: __webpack_require__("../../../../../src/app/market/market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market/market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_farms_service__["a" /* FarmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_farms_service__["a" /* FarmsService */]) === "function" && _a || Object])
], MarketComponent);

var _a;
//# sourceMappingURL=market.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav id=\"header\" class=\"navbar navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button id=\"navbar-toggle\" type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand text-color-3\" href=\"index.html\"><img class=\"logo\" src=\"assets/images/v3.png\"></a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\n      <div class=\"navbar-right\">\n\n        <a routerLink=\"/login\"><button class=\"btn btn-3\" id=\"login-btn\">Log In</button></a>\n\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.cond = false;
        console.log(this.router.url);
        if (this.router.url !== '') {
            this.cond = true;
        }
        console.log(this.cond);
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // console.log(this.router.url);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/farms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FarmsService = (function () {
    function FarmsService(http) {
        this.http = http;
        this.url = 'http://cropstarter.herokuapp.com/';
    }
    FarmsService.prototype.getall = function () {
        return this.http.get(this.url + 'getfarmlist').map(function (data) {
            return data.json();
        });
    };
    FarmsService.prototype.getfarm = function (id) {
        console.log(this.url + 'farm/' + id);
        return this.http.get(this.url + 'farm/' + id).map(function (res) {
            console.log(res.json());
            return res.json();
        });
        // return {
        //   name : "Nikhil Pandey",
        //   crop : "Maize" ,
        //   area : "Udaipur" ,
        //   state : "Rajasthan" ,
        //   pledged : 15000 ,
        //   requirement : 20000,
        //   investors : 2,
        //   returns : 4
        // };
    };
    return FarmsService;
}());
FarmsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FarmsService);

var _a;
//# sourceMappingURL=farms.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shops.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShopsService = (function () {
    function ShopsService(http) {
        this.http = http;
        this.url = 'http://cropstarter.herokuapp.com/farm/69';
    }
    ShopsService.prototype.getall = function () {
        return this.http.get(this.url + 'getitemlist').map(function (data) {
            return data.json();
        });
    };
    ShopsService.prototype.getitem = function (id) {
        console.log(this.url + 'item/' + id);
        return this.http.get(this.url + 'item/' + id).map(function (res) {
            console.log(res.json());
            return res.json();
        });
        // return {
        //   name : "Nikhil Pandey",
        //   crop : "Maize" ,
        //   area : "Udaipur" ,
        //   state : "Rajasthan" ,
        //   pledged : 15000 ,
        //   requirement : 20000,
        //   investors : 2,
        //   returns : 4
        // };
    };
    return ShopsService;
}());
ShopsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ShopsService);

var _a;
//# sourceMappingURL=shops.service.js.map

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container pages-md center\">\n  <h2 class=\"text-color-4\">Browsing Items</h2>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form class=\"form-inline\" role=\"form\" action=\"https://www.CropStarter.com/farms/browse\" method=\"get\">\n        <div class=\"col-xs-12 padding-l\">\n          <input type=\"hidden\" class=\"form-control input-2\" value=\"short\" name=\"type\">\n          <div class=\"mobile-off\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-2\" placeholder=\"Search for description, location, crops\" name=\"keyword\">\n              <button type=\"submit\" class=\"btn btn-1\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"cbox\">\n                    <input type=\"checkbox\" id=\"show-previous\" class=\"input-cb\" name=\"show_previous\"> <span>Show previous farms <span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Farms that have been fully-funded and finished the harvest cycle\"></span></span>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\" style=\"margin-top: 15px;\">\n                    <select id=\"browse-returns\" name=\"returns\" class=\"form-control\" style=\"border-color: #036564;\">\n                      <option value=\"\">Choose from type of returns</option>\n                      <option value=\"profit-share\">Profit-sharing</option>\n                      <option value=\"fixed-rate\">Fixed Returns</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div id=\"browse-note\" class=\"browse-note text-light hide\">\n                  <em><p class=\"text-color-2 note\">Now click <i class=\"fa fa-search\" aria-hidden=\"true\"></i> to proceed with search.</p></em>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mobile-on\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-2\" placeholder=\"Search for description, location, crops\" name=\"keyword_m\">\n              <div class=\"form-group\" style=\"margin-top: 15px;\">\n                <select name=\"returns_m\" class=\"form-control input-2\">\n                  <option value=\"\">Choose from type of returns</option>\n                  <option value=\"profit-share\">Profit-sharing</option>\n                  <option value=\"fixed-rate\">Fixed Returns</option>\n                </select>\n              </div>\n              <div class=\"cbox\">\n                <input type=\"checkbox\" id=\"show-previous\" class=\"input-cb\" name=\"show_previous\"> <span>Show previous farms <span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Farms that have been fully-funded and finished the harvest cycle\"></span></span>\n              </div>\n              <br>\n              <button type=\"submit\" class=\"btn btn-1\">SEARCH</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"container marketing\">\n  <div class=\"row\">\n\n    <div class=\"col-lg-4\" *ngFor=\"let item of items\">\n      <div class=\"top-cat center\">\n        <p><span class=\"glyphicon glyphicon-grain\" aria-hidden=\"true\"></span> {{item.crop}}</p>\n      </div>\n      <div class=\"thumbnail-frame\">\n        <a routerLink=\"/shop/{{item.item_id}}\"><img class=\"full-image\" src=\"assets/images/farmers/8e066d4f-9bf0-494f-8962-ae2a0da658fb-47602771_s.jpg\" alt=\"Mang Crisaldo&#39;s Farm\"></a>\n        <a routerLink=\"/shop/{{item.item_id}}\"><h3 class=\"text-color-4\">{{item.name}}\n\n        </h3></a>\n\n\n        <div class=\"highlight-line-green\">\n          <div class=\"row center high-row\">\n            <div class=\"col-md-12 col-xs-12\">\n              <p class=\"raised-text\">₹ {{item.price}} per Quintal <span class=\"progress-text\">( {{item.quantity}} Quintals )</span></p>\n            </div>\n          </div>\n        </div>\n        <br>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shops_service__ = __webpack_require__("../../../../../src/app/services/shops.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopComponent = (function () {
    function ShopComponent(service) {
        this.service = service;
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getall().subscribe(function (data) {
            console.log(data);
            _this.items = data;
        });
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shop',
        template: __webpack_require__("../../../../../src/app/shop/shop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shop/shop.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shops_service__["a" /* ShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shops_service__["a" /* ShopsService */]) === "function" && _a || Object])
], ShopComponent);

var _a;
//# sourceMappingURL=shop.component.js.map

/***/ }),

/***/ "../../../../../src/app/types/types.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/types/types.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"row no-m\">\r\n    <div class=\"col-md-6 center trm text-spacing\" id=\"short-trm\">\r\n      <div class=\"shadow\">\r\n        <h2>Invest</h2>\r\n        <p>Invest in farms that will be ready for harvest in 3-18 months.</p>\r\n        <a class=\"btn btn-2 text-spacing btn-wrap\" type=\"button\" routerLink=\"/market\">BROWSE FARMS</a>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 center trm text-spacing\" id=\"long-trm\">\r\n      <div class=\"shadow\">\r\n        <h2>Buy</h2>\r\n        <p>Buy Commodities Directly Procured from Farms.</p>\r\n        <a class=\"btn btn-2 text-spacing btn-wrap\" type=\"button\" routerLink=\"/shop\">SHOP PRODUCE</a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/types/types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypesComponent = (function () {
    function TypesComponent() {
    }
    TypesComponent.prototype.ngOnInit = function () {
    };
    return TypesComponent;
}());
TypesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-types',
        template: __webpack_require__("../../../../../src/app/types/types.component.html"),
        styles: [__webpack_require__("../../../../../src/app/types/types.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TypesComponent);

//# sourceMappingURL=types.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map