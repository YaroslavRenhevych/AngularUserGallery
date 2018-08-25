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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_property_list_property_list_property_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/property/list-property/list-property.component */ "./src/app/components/property/list-property/list-property.component.ts");
/* harmony import */ var _components_property_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/property/create-property/create-property.component */ "./src/app/components/property/create-property/create-property.component.ts");
/* harmony import */ var _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/apartment/list-apartment/list-apartment.component */ "./src/app/components/apartment/list-apartment/list-apartment.component.ts");
/* harmony import */ var _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/apartment/create-apartment/create-apartment.component */ "./src/app/components/apartment/create-apartment/create-apartment.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_property_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/property/edit-property/edit-property.component */ "./src/app/components/property/edit-property/edit-property.component.ts");
/* harmony import */ var _components_property_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/property/property.component */ "./src/app/components/property/property.component.ts");
/* harmony import */ var _components_booking_list_booking_list_booking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/booking/list-booking/list-booking.component */ "./src/app/components/booking/list-booking/list-booking.component.ts");
/* harmony import */ var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/booking/booking.component */ "./src/app/components/booking/booking.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'bookings', component: _components_booking_list_booking_list_booking_component__WEBPACK_IMPORTED_MODULE_11__["ListBookingComponent"] },
    { path: 'booking/:id', component: _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_12__["BookingComponent"] },
    { path: 'create-property', component: _components_property_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_5__["CreatePropertyComponent"] },
    { path: 'property-list', component: _components_property_list_property_list_property_component__WEBPACK_IMPORTED_MODULE_4__["ListPropertyComponent"] },
    { path: 'property-list/apartment-list', component: _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_6__["ListApartmentComponent"] },
    { path: 'create-apartment', component: _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_7__["CreateApartmentComponent"] },
    { path: 'apartment-list', component: _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_6__["ListApartmentComponent"] },
    { path: 'create-apartment', component: _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_7__["CreateApartmentComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"] },
    { path: 'edit-property/:id', component: _components_property_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_9__["EditPropertyComponent"] },
    { path: 'property-detailes/:id', component: _components_property_property_component__WEBPACK_IMPORTED_MODULE_10__["PropertyComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header></app-header>\r\n  <nav>\r\n    <ul>\r\n      <li><a routerLink=\"/login\">Login</a></li>\r\n      <li><a routerLink=\"/booking\">Booking</a></li>\r\n      <li><a routerLink=\"/property-list\">PropertyList</a></li>\r\n      <li><a routerLink=\"/create-apartment\">Create Apartment</a></li>\r\n      <li><a routerLink=\"/edit-property/1\">Edit Property1</a></li>\r\n      <li><a routerLink=\"/property-detailes/1\">Property1 Details</a></li>\r\n    </ul>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
        this.title = 'bookingliteClient';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_property_property_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/property/property.component */ "./src/app/components/property/property.component.ts");
/* harmony import */ var _components_property_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/property/create-property/create-property.component */ "./src/app/components/property/create-property/create-property.component.ts");
/* harmony import */ var _components_property_list_property_list_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/property/list-property/list-property.component */ "./src/app/components/property/list-property/list-property.component.ts");
/* harmony import */ var _components_apartment_apartment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/apartment/apartment.component */ "./src/app/components/apartment/apartment.component.ts");
/* harmony import */ var _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/apartment/create-apartment/create-apartment.component */ "./src/app/components/apartment/create-apartment/create-apartment.component.ts");
/* harmony import */ var _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/apartment/list-apartment/list-apartment.component */ "./src/app/components/apartment/list-apartment/list-apartment.component.ts");
/* harmony import */ var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/booking/booking.component */ "./src/app/components/booking/booking.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_booking_list_booking_list_booking_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/booking/list-booking/list-booking.component */ "./src/app/components/booking/list-booking/list-booking.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_property_photo_photo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/property/photo/photo.component */ "./src/app/components/property/photo/photo.component.ts");
/* harmony import */ var _components_property_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/property/photo-list/photo-list.component */ "./src/app/components/property/photo-list/photo-list.component.ts");
/* harmony import */ var _components_property_create_property_upload_photo_list_upload_photo_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/property/create-property/upload-photo-list/upload-photo-list.component */ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.ts");
/* harmony import */ var _components_property_list_property_property_item_property_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/property/list-property/property-item/property-item.component */ "./src/app/components/property/list-property/property-item/property-item.component.ts");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/propertyTypy/property-type.service */ "./src/app/services/propertyTypy/property-type.service.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/country/coutry.service */ "./src/app/services/country/coutry.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/city/city.service */ "./src/app/services/city/city.service.ts");
/* harmony import */ var _components_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/search/search-form/search-form.component */ "./src/app/components/search/search-form/search-form.component.ts");
/* harmony import */ var _components_property_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/property/edit-property/edit-property.component */ "./src/app/components/property/edit-property/edit-property.component.ts");
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
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _components_property_property_component__WEBPACK_IMPORTED_MODULE_8__["PropertyComponent"],
                _components_property_create_property_create_property_component__WEBPACK_IMPORTED_MODULE_9__["CreatePropertyComponent"],
                _components_property_list_property_list_property_component__WEBPACK_IMPORTED_MODULE_10__["ListPropertyComponent"],
                _components_apartment_apartment_component__WEBPACK_IMPORTED_MODULE_11__["ApartmentComponent"],
                _components_apartment_create_apartment_create_apartment_component__WEBPACK_IMPORTED_MODULE_12__["CreateApartmentComponent"],
                _components_apartment_list_apartment_list_apartment_component__WEBPACK_IMPORTED_MODULE_13__["ListApartmentComponent"],
                _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_14__["BookingComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _components_booking_list_booking_list_booking_component__WEBPACK_IMPORTED_MODULE_16__["ListBookingComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _components_property_photo_photo_component__WEBPACK_IMPORTED_MODULE_20__["PhotoComponent"],
                _components_property_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_21__["PhotoListComponent"],
                _components_property_create_property_upload_photo_list_upload_photo_list_component__WEBPACK_IMPORTED_MODULE_22__["UploadPhotoListComponent"],
                _components_property_list_property_property_item_property_item_component__WEBPACK_IMPORTED_MODULE_23__["PropertyItemComponent"],
                _components_review_review_component__WEBPACK_IMPORTED_MODULE_26__["ReviewComponent"],
                _components_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_30__["SearchFormComponent"],
                _components_property_edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_31__["EditPropertyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"], multi: true },
                _services_property_property_service__WEBPACK_IMPORTED_MODULE_24__["PropertyService"], _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_28__["CoutryService"], _services_city_city_service__WEBPACK_IMPORTED_MODULE_29__["CityService"], _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_27__["ApartmentService"], _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_25__["PropertyTypeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/apartment/apartment.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/apartment/apartment.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/apartment/apartment.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/apartment/apartment.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  apartment works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/apartment/apartment.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/apartment/apartment.component.ts ***!
  \*************************************************************/
/*! exports provided: ApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentComponent", function() { return ApartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApartmentComponent = /** @class */ (function () {
    function ApartmentComponent() {
    }
    ApartmentComponent.prototype.ngOnInit = function () {
    };
    ApartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apartment',
            template: __webpack_require__(/*! ./apartment.component.html */ "./src/app/components/apartment/apartment.component.html"),
            styles: [__webpack_require__(/*! ./apartment.component.css */ "./src/app/components/apartment/apartment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApartmentComponent);
    return ApartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/apartment/create-apartment/create-apartment.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/apartment/create-apartment/create-apartment.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n  width: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/apartment/create-apartment/create-apartment.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/apartment/create-apartment/create-apartment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <fieldset>\r\n    <h4>Create Apartment</h4>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"quantity\" id=\"inputDefault\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <h5>Apartment Type</h5>\r\n      <div class=\"custom-control custom-radio\" *ngFor=\"let type of apartmentTypes\">\r\n        <input type=\"radio\" id=\"customRadio{{type.id}}\"\r\n               name=\"customRadio\" class=\"custom-control-input\" (click)=\"createdApartment.typeId = type.id\">\r\n        <label class=\"custom-control-label\" for=\"customRadio{{type.id}}\">{{type.name}}</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <h5>Amenities</h5>\r\n      <div class=\"custom-control custom-checkbox\" *ngFor=\"let am of amenities\">\r\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck{{am.id}}\"\r\n          (change)=\"workWithCheckboxes(am.id)\">\r\n        <label class=\"custom-control-label\" for=\"customCheck{{am.id}}\">{{am.name}}</label>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"createApartments()\">save</button>\r\n  </fieldset>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/apartment/create-apartment/create-apartment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/apartment/create-apartment/create-apartment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApartmentComponent", function() { return CreateApartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _models_create_apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/create-apartment */ "./src/app/models/create-apartment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateApartmentComponent = /** @class */ (function () {
    function CreateApartmentComponent(auth, apartmentService) {
        this.auth = auth;
        this.apartmentService = apartmentService;
    }
    CreateApartmentComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        this.getApartmentType();
        this.getAmenities();
        this.createdApartment = new _models_create_apartment__WEBPACK_IMPORTED_MODULE_3__["CreateApartment"]();
        this.createdApartment.amenitiesId = [];
    };
    CreateApartmentComponent.prototype.getApartmentType = function () {
        var _this = this;
        this.apartmentService.getApartmentType().subscribe(function (type) {
            _this.apartmentTypes = type;
            console.log('Apartment Tepes: ', type);
        });
    };
    CreateApartmentComponent.prototype.getAmenities = function () {
        var _this = this;
        this.apartmentService.getAmenities().subscribe(function (amenity) {
            _this.amenities = amenity;
            console.log('Amenities: ', amenity);
        });
    };
    CreateApartmentComponent.prototype.createApartments = function () {
        console.log(this.createdApartment.amenitiesId);
        //this.apartmentService.createApartment(this.createdApartment);
    };
    CreateApartmentComponent.prototype.workWithCheckboxes = function (id) {
        var index = this.createdApartment.amenitiesId.indexOf(id);
        if (index !== -1) {
            this.createdApartment.amenitiesId.splice(index, 1);
            return;
        }
        this.createdApartment.amenitiesId.push(id);
    };
    CreateApartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-apartment',
            template: __webpack_require__(/*! ./create-apartment.component.html */ "./src/app/components/apartment/create-apartment/create-apartment.component.html"),
            styles: [__webpack_require__(/*! ./create-apartment.component.css */ "./src/app/components/apartment/create-apartment/create-apartment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_1__["ApartmentService"]])
    ], CreateApartmentComponent);
    return CreateApartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/apartment/list-apartment/list-apartment.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/apartment/list-apartment/list-apartment.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  border: 1px solid #dddddd;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\nth {\r\n  background-color: #fffe82;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/apartment/list-apartment/list-apartment.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/apartment/list-apartment/list-apartment.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Apartments List</h1>\r\n\r\n  <table>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Amenities</th>\r\n      <th>Price</th>\r\n      <th>Reserve</th>\r\n    </tr>\r\n    <tr *ngFor=\"let apartment of aprtmentsList\">\r\n      <td>{{apartment.name}}</td>\r\n      <td><p *ngFor=\"let am of apartment.amenities\">{{am.name}}</p></td>\r\n      <td>{{apartment.price}}</td>\r\n      <td><a href=\"#\" class=\"btn btn-primary\">select</a></td> <!--booking-->\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/apartment/list-apartment/list-apartment.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/apartment/list-apartment/list-apartment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListApartmentComponent", function() { return ListApartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListApartmentComponent = /** @class */ (function () {
    function ListApartmentComponent(apartmentService, auth) {
        this.apartmentService = apartmentService;
        this.auth = auth;
    }
    ListApartmentComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        this.getApartments();
    };
    ListApartmentComponent.prototype.getApartments = function () {
        var _this = this;
        this.apartmentService.getAllApartments().subscribe(function (apartment) {
            _this.aprtmentsList = apartment;
        });
    };
    ListApartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-apartment',
            template: __webpack_require__(/*! ./list-apartment.component.html */ "./src/app/components/apartment/list-apartment/list-apartment.component.html"),
            styles: [__webpack_require__(/*! ./list-apartment.component.css */ "./src/app/components/apartment/list-apartment/list-apartment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
            _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ListApartmentComponent);
    return ListApartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/booking/booking.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/booking/booking.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n  width: 220px;\r\n  height: 220px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/booking/booking.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/booking/booking.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Booking</h1>\r\n\r\n<ul *ngIf=\"booking\" style=\"list-style: none\">\r\n    <div class=\"container\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <!-- <div class=\"col-md-3\">\r\n                  <img src={{property.photos[0]}}>\r\n                </div> -->\r\n                <div class=\"col-md-6  card-body\">\r\n                  <div class=\"list-title\">\r\n                    <ul class=\"list-inline list-unstyled\">\r\n                      <li class=\"list-inline-item\">\r\n                          <a routerLink=\"/booking/{{booking.bookingId}}\">\r\n                            <h4>Booking # {{booking.bookingId}}</h4>     \r\n                          </a>\r\n                      </li>\r\n                      <li class=\"list-inline-item text-warning\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\r\n                        class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i></li>\r\n                      <li class=\"list-inline-item text-success\"><i class=\"fa fa-thumbs-up\"></i></li>\r\n                      <!-- <ul>\r\n                        <li><p *ngFor=\"let facility of property.facilities\">{{facility.name}}</p></li>\r\n                      </ul> -->\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"list-location\">\r\n                      <h4>Price: {{booking.totalPrice}} USD</h4>   \r\n                      <h4>Status: {{booking.bookingStatus.name}}</h4>    \r\n                  </div>\r\n                  <div class=\"list-descrip\">        \r\n                    <small>Dates: {{booking.checkIn | date:'dd-MM-yyyy' }} - {{booking.checkOut | date:'dd-MM-yyyy' }}</small>          \r\n                    <br>\r\n                    <small>Number of guests: {{booking.apartmentDto.numberOfGuests}}</small>                    \r\n                    <br><br>\r\n                    <h5>Apartment:</h5>\r\n                    <small>Actual Price: {{booking.apartmentDto.price}} USD</small>                      \r\n                    <br>\r\n                    <small>Amenties: \r\n                      <small *ngFor= \"let am of booking.apartmentDto.amenities\">{{am.name}}; </small>\r\n                    </small>                      \r\n                    <br>\r\n                    <small>Number of guests: {{booking.apartmentDto.numberOfGuests}}</small>                      \r\n                    <br><br>\r\n                    <h5>Hotel:</h5>\r\n                    <small>Rating: </small>                      \r\n                    <br>\r\n                    <small>Address: </small>                      \r\n                    <br>\r\n                    <small>Phone number: </small>                      \r\n                    <br>\r\n                    <small>Email: </small>                      \r\n                    <br>\r\n                    <div *ngIf= \"booking?.reviewDto\">\r\n                      <br>\r\n                      <h5>Your review:</h5>\r\n                      <small>Rating: {{booking.reviewDto.rating}}</small>\r\n                      <br>\r\n                      <small>Message: {{booking.reviewDto.message}}</small>\r\n                      <br>\r\n                     </div>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-md-3 border-left card-body\">\r\n                    <ul class=\"list-unstyled\">\r\n                      <li><h4>Status: {{booking.bookingStatus.name}}</h4></li>                    \r\n                      <li><h3>Price: {{booking.totalPrice}} </h3></li>\r\n                       <li class=\"text-secondary\">\r\n                        <small> Reviews</small>\r\n                        <small>{property.review}</small>-->\r\n                      <!-- </li> --> \r\n                    <!-- </ul> -->\r\n                    <!-- <button type=\"button\" routerLink=\"\" class=\"btn btn-outline-primary\">Available apartment</button> -->\r\n                  <!-- </div> --> \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</ul>\r\n\r\n<!-- <ul>\r\n  <li *ngIf=\"booking\">\r\n   <h4>Booking # {{booking.bookingId}}</h4>\r\n   <h6>bookingStatus- {{booking.bookingStatus.name}} </h6>\r\n   <h6>apartmentType - {{booking.apartmentDto.apartmentType.name}} </h6>\r\n   <h6>Name apartmentDto - {{booking.apartmentDto.name}} </h6>\r\n   <h6>checkIn - {{booking.checkIn | date }} </h6>\r\n   <h6>checkOut- {{booking.checkOut | date }} </h6>\r\n</ul> -->\r\n\r\n<div class=\"col-md-3 border-left card-body\">\r\n  <div class=\"row mb-3\">\r\n    <button (click)=\"backToBookings()\">Back to bookings</button>\r\n    <br>\r\n     <!-- <div *ngIf=\"booking\"> -->\r\n        <div *ngIf=\"isCheckBookingDate(booking?.checkIn, booking?.checkOut) && \r\n              !isCanceled(booking?.bookingStatus?.name)\"> <!--safe operator, or above comment-->\r\n            <button (click)=\"cancelBooking()\">Cancel Booking</button>\r\n         </div>\r\n      <!-- </div> -->\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div *ngIf=\"booking && !isCheckBookingDate(booking?.checkIn, booking?.checkOut) && \r\n           !isCanceled(booking?.bookingStatus?.name) && !booking?.reviewDto?.id\">\r\n <textarea rows= \"5\" cols= \"120\" placeholder= \"Enter your review here\"></textarea>   <!-- move to css -->       \r\n<!-- </div> --> \r\n"

/***/ }),

/***/ "./src/app/components/booking/booking.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/booking/booking.component.ts ***!
  \*********************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/booking */ "./src/app/models/booking.ts");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/booking/booking.service */ "./src/app/services/booking/booking.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { DateFormatPipe } from '../../helpers/DateFormatPipe'
var BookingComponent = /** @class */ (function () {
    function BookingComponent(route, bookingService, router
    //private dateFormatPipe: DateFormatPipe
    ) {
        this.route = route;
        this.bookingService = bookingService;
        this.router = router;
        this.bookingsUrl = '/bookings';
    }
    // constructor(private bookingService: BookingService,
    //             private auth: AuthService ) { }
    BookingComponent.prototype.ngOnInit = function () {
        this.getBooking();
    };
    BookingComponent.prototype.getBooking = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.bookingService.getBooking(id)
            .subscribe(function (booking) { return _this.booking = booking; });
    };
    BookingComponent.prototype.cancelBooking = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.bookingService.cancelBookings(id)
            .subscribe(function (res) {
            console.log('cancellllll done');
            _this.backToBookings();
        });
    };
    BookingComponent.prototype.isCheckBookingDate = function (checkIn, checkOut) {
        //console.log('111111111111111111111', this.bookingService.isCheckBookingDate(checkIn, checkOut));
        return this.bookingService.isCheckBookingDate(checkIn, checkOut);
    };
    BookingComponent.prototype.isCanceled = function (bookingStatus) {
        return this.bookingService.isCanceled(bookingStatus);
    };
    BookingComponent.prototype.isReview = function (idReview) {
        console.log('Hello in isReview');
        if (!idReview) {
            console.log('in isReview true');
            return true;
        }
        else {
            console.log('in isReview true');
            return false;
        }
    };
    BookingComponent.prototype.backToBookings = function () {
        this.router.navigate([this.bookingsUrl]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_booking__WEBPACK_IMPORTED_MODULE_1__["Booking"])
    ], BookingComponent.prototype, "booking", void 0);
    BookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/components/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/components/booking/booking.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            //private dateFormatPipe: DateFormatPipe
        ])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/components/booking/list-booking/list-booking.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/booking/list-booking/list-booking.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/booking/list-booking/list-booking.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/booking/list-booking/list-booking.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Bookings</h1>\r\n\r\n<ul style=\"list-style: none\">\r\n  <li *ngFor=\"let booking of bookings\">\r\n      <div *ngIf=\" isCheckBookingDate(booking.checkIn, booking.checkOut)\">\r\n    <div class=\"container\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                  <!-- <img src={{property.photos[0]}}> -->\r\n                </div>\r\n                <div class=\"col-md-6  card-body\">\r\n                  <div class=\"list-title\">\r\n                    <ul class=\"list-inline list-unstyled\">\r\n                      <li class=\"list-inline-item\">\r\n                          <a routerLink=\"/booking/{{booking.bookingId}}\">\r\n                            <h4>Booking # {{booking.bookingId}}</h4>     \r\n                          </a>\r\n                      </li>\r\n                      <li class=\"list-inline-item text-warning\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\r\n                        class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i></li>\r\n                      <li class=\"list-inline-item text-success\"><i class=\"fa fa-thumbs-up\"></i></li>\r\n                      <!-- <ul>\r\n                        <li><p *ngFor=\"let facility of property.facilities\">{{facility.name}}</p></li>\r\n                      </ul> -->\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"list-location\">\r\n                      <small>Dates: {{booking.checkIn | date:'dd-MM-yyyy' }} - {{booking.checkOut | date:'dd-MM-yyyy' }}\r\n                        </small>\r\n                  </div>\r\n                  <div class=\"list-descrip\">                    \r\n                    <small>Number of guests: {{booking.apartmentDto.numberOfGuests}}\r\n                    </small>\r\n                    <br>\r\n                    <small>Apartment type: {{booking.apartmentDto.apartmentType.name}}\r\n                    </small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 border-left card-body\">\r\n                    <ul class=\"list-unstyled\">\r\n                      <li><h4>Status: </h4>\r\n                      <h4 *ngIf=\"isCanceled(booking.bookingStatus.name)\" style=\"color:red\">{{booking.bookingStatus.name}}</h4>\r\n                      <h4 *ngIf=\"!isCanceled(booking.bookingStatus.name)\"style=\"color:green\">{{booking.bookingStatus.name}}</h4>\r\n                      </li>                    \r\n                      <li><h3>Price: {{booking.totalPrice}}* </h3></li>\r\n                      <small> *number of days: {{calculateNumberOfDates(booking.checkIn , booking.checkOut )}}</small>\r\n                      <!-- <li class=\"text-secondary\">\r\n                        <small> Reviews</small>\r\n                        <small>{property.review}</small>-->\r\n                      <!-- </li> --> \r\n                    </ul>\r\n                    <!-- <button type=\"button\" routerLink=\"\" class=\"btn btn-outline-primary\">Available apartment</button> -->\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </li>\r\n</ul>\r\n\r\n<ul style=\"list-style: none\">\r\n<div class=\"container\">\r\n<br><hr><br>\r\n</div>\r\n</ul>\r\n\r\n<ul style=\"list-style: none\">\r\n  <li *ngFor=\"let booking of bookings\">\r\n      <div *ngIf=\"!isCheckBookingDate(booking.checkIn, booking.checkOut)\">\r\n    <div class=\"container\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                  <!-- <img src={{property.photos[0]}}> -->\r\n                </div>\r\n                <div class=\"col-md-6  card-body\">\r\n                  <div class=\"list-title\">\r\n                    <ul class=\"list-inline list-unstyled\">\r\n                      <li class=\"list-inline-item\">\r\n                          <a routerLink=\"/booking/{{booking.bookingId}}\">\r\n                            <h4>Booking # {{booking.bookingId}}</h4>     \r\n                          </a>\r\n                      </li>\r\n                      <li class=\"list-inline-item text-warning\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\r\n                        class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i></li>\r\n                      <li class=\"list-inline-item text-success\"><i class=\"fa fa-thumbs-up\"></i></li>\r\n                      <!-- <ul>\r\n                        <li><p *ngFor=\"let facility of property.facilities\">{{facility.name}}</p></li>\r\n                      </ul> -->\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"list-location\">\r\n                    <small>Dates: {{booking.checkIn | date:'dd-MM-yyyy' }} - {{booking.checkOut | date:'dd-MM-yyyy' }}\r\n                      </small>\r\n                </div>\r\n                <div class=\"list-descrip\">                    \r\n                  <small>Number of guests: {{booking.apartmentDto.numberOfGuests}}\r\n                  </small>\r\n                  <br>\r\n                  <small>Apartment type: {{booking.apartmentDto.apartmentType.name}}\r\n                  </small>\r\n                </div>\r\n                </div>\r\n                 <div class=\"col-md-3 border-left card-body\">\r\n                    <ul class=\"list-unstyled\">\r\n                      <li><h4>Status: {{booking.bookingStatus.name}}</h4></li>                    \r\n                      <li><h3>Price: {{booking.totalPrice}} </h3></li>\r\n                      <!-- <li class=\"text-secondary\">\r\n                        <small> Reviews</small>\r\n                        <small>{property.review}</small>-->\r\n                      <!-- </li> --> \r\n                    </ul>\r\n                    <div>\r\n                      <button type=\"button\" routerLink=\"\" class=\"btn btn-outline-primary\">Review</button>\r\n                    </div>\r\n                    </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </li>\r\n</ul>\r\n\r\n<!-- <ng-container *ngFor=\"let booking of bookings\" >\r\n  <div *ngIf=\" isCheckBookingDate(booking.checkIn, booking.checkOut)\">\r\n    <a routerLink=\"/booking/{{booking.bookingId}}\">\r\n      <h4>Booking # {{booking.bookingId}}</h4>     \r\n    </a>\r\n    <h6>{{booking.checkIn | date:'dd-MM-yyyy' }} - {{booking.checkOut | date:'dd-MM-yyyy' }}</h6>\r\n    <h6>Booking status- {{booking.bookingStatus.name}}</h6>\r\n  </div>\r\n</ng-container>\r\n<br><hr><br>\r\n\r\n<ng-container *ngFor=\"let booking of bookings\" >\r\n    <div *ngIf=\"!isCheckBookingDate(booking.checkIn, booking.checkOut)\">\r\n        <a routerLink=\"/booking/{{booking.bookingId}}\">\r\n           <h4>Booking # {{booking.bookingId}}</h4>     \r\n        </a>\r\n        <h6>{{booking.checkIn | date:'dd-MM-yyyy' }} - {{booking.checkOut | date:'dd-MM-yyyy' }}</h6>\r\n        <h6>Booking status- {{booking.bookingStatus.name}}</h6>\r\n    </div>\r\n</ng-container> -->"

/***/ }),

/***/ "./src/app/components/booking/list-booking/list-booking.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/booking/list-booking/list-booking.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBookingComponent", function() { return ListBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/booking/booking.service */ "./src/app/services/booking/booking.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListBookingComponent = /** @class */ (function () {
    function ListBookingComponent(bookingService, auth) {
        this.bookingService = bookingService;
        this.auth = auth;
    }
    ListBookingComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        this.getBookings();
        this.today = new Date();
    };
    ListBookingComponent.prototype.getBookings = function () {
        var _this = this;
        this.bookingService.getBookings().subscribe(function (bookings) {
            _this.bookings = bookings,
                console.log('bbbb', bookings);
        });
    };
    ListBookingComponent.prototype.isCanceled = function (bookingStatus) {
        return this.bookingService.isCanceled(bookingStatus);
    };
    ListBookingComponent.prototype.isCheckBookingDate = function (checkIn, checkOut) {
        return this.bookingService.isCheckBookingDate(checkIn, checkOut);
    };
    ListBookingComponent.prototype.calculateNumberOfDates = function (checkIn, checkOut) {
        console.log('calculateNumberOfDates component');
        return this.bookingService.calculateNumberOfDates(checkIn, checkOut);
    };
    ListBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-booking',
            template: __webpack_require__(/*! ./list-booking.component.html */ "./src/app/components/booking/list-booking/list-booking.component.html"),
            styles: [__webpack_require__(/*! ./list-booking.component.css */ "./src/app/components/booking/list-booking/list-booking.component.css")]
        }),
        __metadata("design:paramtypes", [_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"],
            _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ListBookingComponent);
    return ListBookingComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hed-buts{\r\n  color: #3d5c5c;\r\n}\r\n.hed-buts:hover{\r\n  color: #1f2e2e;\r\n}\r\n.ion-md-body{\r\n  font-size: 24px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" routerLink=\"search\">Bookinglite</a>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" *ngIf=\"this.auth.isAuthenticated\">\r\n          <a class=\"nav-link\" routerLink=\"#\">My bookings</a>\r\n        </li>\r\n      </ul>\r\n      <ng-container *ngIf=\"this.auth.isAuthenticated; else loginbot\">\r\n        <a class=\"nav-link\" routerLink=\"#\"><i class=\"icon ion-md-body hed-buts\"></i></a>\r\n        <a class=\"nav-link\" routerLink=\"#\"><span class=\"hed-buts\">My profile</span></a>\r\n        <a class=\"nav-link\" routerLink=\"login\"><span class=\"hed-buts\">Log out</span></a>\r\n      </ng-container>\r\n      <ng-template #loginbot>\r\n        <a class=\"nav-link\" routerLink=\"login\"><span class=\"hed-buts\">Log in</span></a>\r\n      </ng-template>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/property/create-property/create-property.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/property/create-property/create-property.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 300px;\r\n  height: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/property/create-property/create-property.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/property/create-property/create-property.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-form-label\">Property Name</label>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Property Name\" >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-form-label\">Descpription</label>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Descpription\" >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-form-label\">Phone number</label>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Phone number\" >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-form-label\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-form-label\">Descpription</label>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Descpription\" >\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-form-label\">Country</label>\r\n    <select class=\"custom-select\">\r\n      <option *ngFor=\"let country of countries\" (change)=\"getCities(country.id)\">{{country.name}}</option>\r\n\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-form-label\">City</label>\r\n    <select class=\"custom-select\">\r\n      <option *ngFor=\"let city of cities\" (click)=\"selectedCityId = city.id\">{{city.name}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-form-label\">Property Type</label>\r\n    <select class=\"custom-select\">\r\n      <option *ngFor=\"let propertyType of propertyTypes\" (click)=\"selectedPropertyTypeId = propertyType.id\">{{propertyType.name}}</option>\r\n    </select>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/property/create-property/create-property.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/property/create-property/create-property.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreatePropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePropertyComponent", function() { return CreatePropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/country/coutry.service */ "./src/app/services/country/coutry.service.ts");
/* harmony import */ var _services_city_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/city/city.service */ "./src/app/services/city/city.service.ts");
/* harmony import */ var _models_property_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/property-create */ "./src/app/models/property-create.ts");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/propertyTypy/property-type.service */ "./src/app/services/propertyTypy/property-type.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreatePropertyComponent = /** @class */ (function () {
    function CreatePropertyComponent(auth, countryService, cityService, propertyService, propertyTypeService) {
        this.auth = auth;
        this.countryService = countryService;
        this.cityService = cityService;
        this.propertyService = propertyService;
        this.propertyTypeService = propertyTypeService;
    }
    CreatePropertyComponent.prototype.ngOnInit = function () {
        this.authenticated = this.auth.isAuthenticated;
        this.propertyCreate = new _models_property_create__WEBPACK_IMPORTED_MODULE_3__["PropertyCreate"]();
        this.getCountries();
        this.getPropertyTypes();
    };
    CreatePropertyComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountry().subscribe(function (res) {
            _this.countries = res;
            alert("pk");
        });
    };
    CreatePropertyComponent.prototype.getCities = function (countryId) {
        var _this = this;
        this.cityService.getCity(countryId).subscribe(function (res) {
            _this.cities = res;
        });
    };
    CreatePropertyComponent.prototype.getPropertyTypes = function () {
        var _this = this;
        this.propertyTypeService.getAllPropertyTypes().subscribe(function (res) {
            _this.propertyTypes = res;
        });
    };
    CreatePropertyComponent.prototype.createProperty = function () {
        this.propertyService.createProperty(this.propertyCreate).subscribe(function (res) {
            alert("Property created");
        });
    };
    CreatePropertyComponent.prototype.getId = function () {
        alert(this.selectedPropertyTypeId);
    };
    CreatePropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-property',
            template: __webpack_require__(/*! ./create-property.component.html */ "./src/app/components/property/create-property/create-property.component.html"),
            styles: [__webpack_require__(/*! ./create-property.component.css */ "./src/app/components/property/create-property/create-property.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_country_coutry_service__WEBPACK_IMPORTED_MODULE_1__["CoutryService"], _services_city_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"],
            _services_property_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"], _services_propertyTypy_property_type_service__WEBPACK_IMPORTED_MODULE_5__["PropertyTypeService"]])
    ], CreatePropertyComponent);
    return CreatePropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-md-close{\r\n  padding-top: 5%;\r\n}\r\n.ion-md-close:hover{\r\n  opacity: 0.5;\r\n}\r\n.btn{\r\n  margin: 20px;\r\n}\r\n.exist-photo{\r\n  max-height: 100px;\r\n  margin: 10px;\r\n  border:3px solid #b3cccc!important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-start\">\r\n    <div class=\"col-3\" *ngFor=\"let photo of existPhotos\">\r\n      <input type=\"checkbox\" (change)=\"markPhoto(photo)\">\r\n      <img class=\"exist-photo\" [src]=\"photo.url\">\r\n    </div>\r\n  </div>\r\n  <button *ngIf=\"existPhotos.length > 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"deletePhotos()\">Delete</button>\r\n</div>\r\n<div class=\"container\" *ngIf=\"property\">\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label for=\"File0\">{{messageList[0]}}</label>\r\n        <input type=\"file\" class=\"form-control-file\" id=\"File0\" #input0 (change)=\"addPhoto($event, 0)\">\r\n      </div>\r\n      <i class=\"icon ion-md-close\" (click)=\"clearInput(0)\"></i>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label for=\"File1\">{{messageList[1]}}</label>\r\n        <input type=\"file\" class=\"form-control-file\" id=\"File1\" #input1 (change)=\"addPhoto($event, 1)\">\r\n      </div>\r\n      <i class=\"icon ion-md-close\" (click)=\"clearInput(1)\"></i>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label for=\"File2\">{{messageList[2]}}</label>\r\n        <input type=\"file\" class=\"form-control-file\" id=\"File2\" #input2 (change)=\"addPhoto($event, 2)\">\r\n      </div>\r\n      <i class=\"icon ion-md-close\" (click)=\"clearInput(2)\"></i>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploadPhotos()\">Upload</button>\r\n      <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"clearAllInputs()\">add more</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UploadPhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPhotoListComponent", function() { return UploadPhotoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadPhotoListComponent = /** @class */ (function () {
    function UploadPhotoListComponent(http, propertyService, route) {
        this.http = http;
        this.propertyService = propertyService;
        this.route = route;
        this.existPhotos = [];
        this.files = [];
        this.messageList = ['add photo', 'add photo', 'add photo'];
        this.inputs = [];
    }
    UploadPhotoListComponent.prototype.ngOnInit = function () {
        this.initExistPhotos();
    };
    UploadPhotoListComponent.prototype.initExistPhotos = function () {
        var _this = this;
        this.propertyId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.propertyService.getPropertyById(this.propertyId).subscribe(function (pr) {
            _this.property = pr;
            _this.existPhotos = [];
            for (var _i = 0, _a = _this.property.photos; _i < _a.length; _i++) {
                var photo = _a[_i];
                _this.existPhotos.push({ url: photo.url, isMark: false });
            }
        });
    };
    UploadPhotoListComponent.prototype.addPhoto = function (event, photoNumber) {
        this.messageList[photoNumber] = event.target.files[0].name;
        this.files[photoNumber] = event.target.files[0];
    };
    UploadPhotoListComponent.prototype.uploadPhotos = function () {
        var _this = this;
        var _loop_1 = function (i) {
            if (this_1.files[i] && this_1.messageList[i] !== 'success') {
                var uploadData = new FormData();
                uploadData.append('file', this_1.files[i]);
                this_1.http.post('/api/property/' + this_1.propertyId + '/photo', uploadData)
                    .subscribe(function (data) {
                    _this.messageList[i] = 'success';
                    setTimeout(function () { _this.initExistPhotos(); }, 1500);
                }, function (err) {
                    _this.messageList[i] = err.error.message;
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.files.length; i++) {
            _loop_1(i);
        }
    };
    UploadPhotoListComponent.prototype.clearInput = function (inputNumber) {
        if (this.inputs.length < 3) {
            this.inputs.push(this.input0);
            this.inputs.push(this.input1);
            this.inputs.push(this.input2);
        }
        this.inputs[inputNumber].nativeElement.value = '';
        this.files[inputNumber] = null;
        this.messageList[inputNumber] = 'add photo';
    };
    UploadPhotoListComponent.prototype.clearAllInputs = function () {
        for (var i = 0; i < this.inputs.length; i++) {
            this.clearInput(i);
        }
    };
    UploadPhotoListComponent.prototype.markPhoto = function (photo) {
        photo.isMark = !photo.isMark;
    };
    UploadPhotoListComponent.prototype.deletePhotos = function () {
        var _this = this;
        for (var _i = 0, _a = this.existPhotos; _i < _a.length; _i++) {
            var photo = _a[_i];
            if (photo.isMark) {
                this.http.delete('api/photo/' + photo.url.substring(photo.url.lastIndexOf('/'), photo.url.lastIndexOf('.'))).subscribe(function (ans) {
                    _this.initExistPhotos();
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input0'),
        __metadata("design:type", Object)
    ], UploadPhotoListComponent.prototype, "input0", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input1'),
        __metadata("design:type", Object)
    ], UploadPhotoListComponent.prototype, "input1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input2'),
        __metadata("design:type", Object)
    ], UploadPhotoListComponent.prototype, "input2", void 0);
    UploadPhotoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-photo-list',
            template: __webpack_require__(/*! ./upload-photo-list.component.html */ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.html"),
            styles: [__webpack_require__(/*! ./upload-photo-list.component.css */ "./src/app/components/property/create-property/upload-photo-list/upload-photo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UploadPhotoListComponent);
    return UploadPhotoListComponent;
}());



/***/ }),

/***/ "./src/app/components/property/edit-property/edit-property.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/property/edit-property/edit-property.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property/edit-property/edit-property.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/property/edit-property/edit-property.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edit-property works!\r\n</p>\r\n<app-upload-photo-list></app-upload-photo-list>\r\n"

/***/ }),

/***/ "./src/app/components/property/edit-property/edit-property.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/property/edit-property/edit-property.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyComponent", function() { return EditPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditPropertyComponent = /** @class */ (function () {
    function EditPropertyComponent(route) {
        this.route = route;
    }
    EditPropertyComponent.prototype.ngOnInit = function () { };
    EditPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-property',
            template: __webpack_require__(/*! ./edit-property.component.html */ "./src/app/components/property/edit-property/edit-property.component.html"),
            styles: [__webpack_require__(/*! ./edit-property.component.css */ "./src/app/components/property/edit-property/edit-property.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditPropertyComponent);
    return EditPropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/property/list-property/list-property.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/property/list-property/list-property.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  box-sizing: border-box;\r\n}\r\n\r\n  /*.container {*/\r\n\r\n  /*position: fixed;*/\r\n\r\n  /*}*/\r\n\r\n  .img-responsive {\r\n  width: 210px;\r\n  height: 180px;\r\n  position: relative ;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/property/list-property/list-property.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/property/list-property/list-property.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul style=\"list-style: none\">\r\n  <li *ngFor=\"let property of propertyList\">\r\n    <div class=\"container\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                  <img class=\"img-responsive\" alt=\"No Photo\" src={{property.photos[0].url}}>\r\n                </div>\r\n                <div class=\"col-md-6  card-body\">\r\n                  <div class=\"list-title\">\r\n                    <ul class=\"list-inline list-unstyled\">\r\n                      <li class=\"list-inline-item\"><h4>{{property.name}}</h4></li>\r\n                      <li class=\"list-inline-item text-warning\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\r\n                        class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half\"></i></li>\r\n                      <li class=\"list-inline-item text-success\"><i class=\"fa fa-thumbs-up\"></i></li>\r\n                      <ul>\r\n                        <li><p *ngFor=\"let facility of property.facilities\">{{facility.name}}</p></li>\r\n                      </ul>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"list-location\">\r\n                    <small>{{property.description}}</small>\r\n                  </div>\r\n                  <div class=\"list-descrip\">\r\n                    <small>{{property.contactEmail}}\r\n                    </small>\r\n                    <small>{{property.phoneNumber}}\r\n                    </small>\r\n                    <br>\r\n                    <small>{{property.propertyType.name}}\r\n                    </small>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3 border-left card-body\">\r\n                  <ul class=\"list-unstyled\">\r\n                    <li><h3>Rating {{property.rating}}</h3></li>\r\n                    <li class=\"text-secondary\">\r\n                      <small>{{property.id}} Reviews</small>\r\n                      <!--<small>{property.review}</small>-->\r\n                    </li>\r\n                  </ul>\r\n                  <button type=\"button\" routerLink=\"apartment-list\"\r\n                          class=\"btn btn-outline-primary\"\r\n                          (click)=\"setPropertyIdInApartmentService(property.id)\">Select apartment</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/property/list-property/list-property.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/property/list-property/list-property.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPropertyComponent", function() { return ListPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/review/review.service */ "./src/app/services/review/review.service.ts");
/* harmony import */ var _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/apartment/apartment.service */ "./src/app/services/apartment/apartment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPropertyComponent = /** @class */ (function () {
    function ListPropertyComponent(propertyService, reviewService, apartmentService, auth) {
        this.propertyService = propertyService;
        this.reviewService = reviewService;
        this.apartmentService = apartmentService;
        this.auth = auth;
    }
    ListPropertyComponent.prototype.ngOnInit = function () {
        this.authentication = this.auth.isAuthenticated;
        this.getProperties();
    };
    ListPropertyComponent.prototype.getProperties = function () {
        var _this = this;
        this.propertyService.getProperties().subscribe(function (properties) {
            _this.propertyList = properties;
        });
    };
    ListPropertyComponent.prototype.getReviewCount = function (id) {
        return this.reviewService.getReviewCountByPropertyId(id).subscribe(function (reviewCount) {
            return reviewCount;
        });
    };
    ListPropertyComponent.prototype.setPropertyIdInApartmentService = function (propertyId) {
        this.apartmentService.setPropertyId(propertyId);
    };
    ListPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-property',
            template: __webpack_require__(/*! ./list-property.component.html */ "./src/app/components/property/list-property/list-property.component.html"),
            styles: [__webpack_require__(/*! ./list-property.component.css */ "./src/app/components/property/list-property/list-property.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"],
            _services_review_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"],
            _services_apartment_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
            _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ListPropertyComponent);
    return ListPropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/property/list-property/property-item/property-item.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/property/list-property/property-item/property-item.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property/list-property/property-item/property-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/property/list-property/property-item/property-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property/list-property/property-item/property-item.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/property/list-property/property-item/property-item.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PropertyItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyItemComponent", function() { return PropertyItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyItemComponent = /** @class */ (function () {
    function PropertyItemComponent(propertyService) {
        this.propertyService = propertyService;
    }
    PropertyItemComponent.prototype.ngOnInit = function () {
    };
    PropertyItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-item',
            template: __webpack_require__(/*! ./property-item.component.html */ "./src/app/components/property/list-property/property-item/property-item.component.html"),
            styles: [__webpack_require__(/*! ./property-item.component.css */ "./src/app/components/property/list-property/property-item/property-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_property_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]])
    ], PropertyItemComponent);
    return PropertyItemComponent;
}());



/***/ }),

/***/ "./src/app/components/property/photo-list/photo-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/property/photo-list/photo-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blocker{\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: 0;\r\n  background: rgba(0,0,0,0.5);\r\n}\r\n#zoom-img{\r\n  position: fixed;\r\n  z-index: 99;\r\n  opacity: 1;\r\n  cursor: zoom-out;\r\n  max-height: 70%;\r\n  border:5px solid #fff!important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/property/photo-list/photo-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/property/photo-list/photo-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-start\">\r\n    <div class=\"col-3\" *ngFor=\"let photo of photos\" (click)=\"openPhoto(photo.url)\">\r\n      <app-photo [photoUrl]='photo.url'></app-photo>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-container *ngIf=\"opened\">\r\n  <div id=\"blocker\" (click)=\"closePhoto()\"><img id=\"zoom-img\" [src]=\"openedPhotoUrl\" (click)=\"closePhoto()\">\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/property/photo-list/photo-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/property/photo-list/photo-list.component.ts ***!
  \************************************************************************/
/*! exports provided: PhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function() { return PhotoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/property/property.service */ "./src/app/services/property/property.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(route, propertyService) {
        this.route = route;
        this.propertyService = propertyService;
        this.openedPhotoUrl = '';
        this.opened = false;
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.propertyId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.propertyService.getPropertyById(this.propertyId)
            .subscribe(function (property) { return _this.photos = property.photos; });
    };
    PhotoListComponent.prototype.openPhoto = function (url) {
        this.openedPhotoUrl = url;
        this.opened = true;
    };
    PhotoListComponent.prototype.closePhoto = function () {
        this.opened = false;
    };
    PhotoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-list',
            template: __webpack_require__(/*! ./photo-list.component.html */ "./src/app/components/property/photo-list/photo-list.component.html"),
            styles: [__webpack_require__(/*! ./photo-list.component.css */ "./src/app/components/property/photo-list/photo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_property_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]])
    ], PhotoListComponent);
    return PhotoListComponent;
}());



/***/ }),

/***/ "./src/app/components/property/photo/photo.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/property/photo/photo.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo{\r\n  border:1px solid #ccc!important;\r\n  padding:8px !important;\r\n  max-width: 230px;\r\n  height: 160px;\r\n  margin: 6px;\r\n  cursor: zoom-in;\r\n  transition: opacity .4s;\r\n}\r\n.photo:hover {\r\n  opacity: .8;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/property/photo/photo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/property/photo/photo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"photoUrl\" class=\"photo\" >\r\n"

/***/ }),

/***/ "./src/app/components/property/photo/photo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/property/photo/photo.component.ts ***!
  \**************************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoComponent = /** @class */ (function () {
    function PhotoComponent() {
    }
    PhotoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PhotoComponent.prototype, "photoUrl", void 0);
    PhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/components/property/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./photo.component.css */ "./src/app/components/property/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/property/property.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/property/property.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property/property.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/property/property.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Property Details</h1>\r\n<app-photo-list></app-photo-list>\r\n"

/***/ }),

/***/ "./src/app/components/property/property.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/property/property.component.ts ***!
  \***********************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertyComponent = /** @class */ (function () {
    function PropertyComponent() {
    }
    PropertyComponent.prototype.ngOnInit = function () {
    };
    PropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.component.html */ "./src/app/components/property/property.component.html"),
            styles: [__webpack_require__(/*! ./property.component.css */ "./src/app/components/property/property.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "./src/app/components/review/review.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/review/review.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/review/review.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/review/review.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  review works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/review/review.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/review/review.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Review} from '../../models/review';
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/components/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/components/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search-form/search-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/search/search-form/search-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n  margin: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/search/search-form/search-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/search/search-form/search-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Where are you go?</h1>\r\n  <form class=\"form-inline\">\r\n    <label class=\"my-1 mr-2\" for=\"country\">Country</label>\r\n    <select class=\"custom-select my-1 mr-sm-2\" id=\"country\">\r\n      <option value=\"0\">Ukraine</option>\r\n      <option value=\"1\">USA</option>\r\n      <option value=\"2\">Great Britan</option>\r\n      <option value=\"3\">Germany</option>\r\n    </select>\r\n    <label class=\"my-1 mr-2\" for=\"city\">City</label>\r\n    <select class=\"custom-select my-1 mr-sm-2\" id=\"city\">\r\n      <option value=\"0\">Choose...</option>\r\n      <option value=\"1\">One</option>\r\n      <option value=\"2\">Two</option>\r\n      <option value=\"3\">Three</option>\r\n    </select>\r\n    <label for=\"personCount\" class=\"my-1 mr-2\">How much persons?</label>\r\n    <input type=\"number\" min=\"1\" max=\"20\" class=\"form-control\" id=\"personCount\">\r\n  </form>\r\n  <label for=\"checkin\" class=\"col-sm-2 col-form-label\">Check in</label>\r\n  <input class=\"form-control\" type=\"date\" id=\"checkin\">\r\n  <label for=\"checkout\" class=\"col-sm-2 col-form-label\">Check out</label>\r\n  <input class=\"form-control\" type=\"date\" id=\"checkout\">\r\n  <button type=\"button\" class=\"btn btn-primary\">Search</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/search/search-form/search-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/search/search-form/search-form.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/components/search/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/components/search/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-form></app-search-form>\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#menucard {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menucard\">\r\n    <div>\r\n        <h1 class=\"display-4\" style=\"text-align: center\">BookingLite</h1>\r\n    <div class=\"card\" style=\"width:400px\">\r\n        <article class=\"card-body\">\r\n            <h4 class=\"card-title mb-4 mt-1\">Sign in</h4>\r\n            <form #loginForm=ngForm (ngSubmit)=\"signIn(loginForm)\">\r\n                <div class=\"form-group\">\r\n                    <label>Your email</label>\r\n                    <input id=\"email\" required [(ngModel)]=\"loginDto.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n                </div> \r\n                <div class=\"form-group\">\r\n                    <label>Your password</label>\r\n                    <input id=\"password\" required [(ngModel)]=\"loginDto.password\"  name=\"password\" class=\"form-control\" placeholder=\"******\" type=\"password\" >\r\n                </div> \r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\r\n                </div> \r\n                <a href=\"/register\">Don’t have account? Sign Up!</a>\r\n            </form>\r\n        </article>\r\n    </div> \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication/auth.service */ "./src/app/services/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginDto = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.signOut();
    };
    LoginComponent.prototype.signIn = function (form) {
        var _this = this;
        this.auth.signIn(this.loginDto)
            .subscribe(function (res) {
            console.log('Hello token');
            console.log(res);
            _this.auth.saveToken(res);
            _this.auth.isAuthenticated = true;
            _this.router.navigate(['/search']);
        });
    };
    LoginComponent.prototype.getToken = function () {
        console.log('in getToken component');
        console.log('in getToken component111', this.auth.getToken());
    };
    LoginComponent.prototype.signOut = function () {
        this.auth.signOut();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"menucard\">\r\n    <div>\r\n        <h1 class=\"display-4\" style=\"text-align: center\">StudCloud</h1>\r\n        <div class=\"card\" style=\"width:400px\">\r\n            <article class=\"card-body\">\r\n                <h4 class=\"card-title mb-4 mt-1\">Sign Up</h4>\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label>Your Name</label>\r\n                        <input id=\"name\" name=\"\" class=\"form-control\" placeholder=\"Name\" type=\"text\">\r\n                    </div> \r\n                    <div class=\"form-group\">\r\n                        <label>Your email</label>\r\n                        <input id=\"email\" class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n                    </div> \r\n                    <div class=\"form-group\">\r\n                        <label>Your password</label>\r\n                        <input id=\"password\" class=\"form-control\" placeholder=\"******\" type=\"password\">\r\n                    </div> \r\n                    <div class=\"form-group\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-block\"> Sign Up  </button>\r\n                    </div> \r\n                </form>\r\n            </article>\r\n        </div> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
        this.ingoreRoutes = ['/api/login', '/api/register'];
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        if (!(this.ingoreRoutes.includes(request.url))) {
            // add authorization header with jwt token if available
            var token = localStorage.getItem('token');
            console.log('Used token', token);
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/models/booking.ts":
/*!***********************************!*\
  !*** ./src/app/models/booking.ts ***!
  \***********************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
var Booking = /** @class */ (function () {
    function Booking() {
    }
    return Booking;
}());



/***/ }),

/***/ "./src/app/models/create-apartment.ts":
/*!********************************************!*\
  !*** ./src/app/models/create-apartment.ts ***!
  \********************************************/
/*! exports provided: CreateApartment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApartment", function() { return CreateApartment; });
var CreateApartment = /** @class */ (function () {
    function CreateApartment() {
    }
    return CreateApartment;
}());



/***/ }),

/***/ "./src/app/models/property-create.ts":
/*!*******************************************!*\
  !*** ./src/app/models/property-create.ts ***!
  \*******************************************/
/*! exports provided: PropertyCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCreate", function() { return PropertyCreate; });
var PropertyCreate = /** @class */ (function () {
    function PropertyCreate() {
    }
    return PropertyCreate;
}());



/***/ }),

/***/ "./src/app/services/apartment/apartment.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/apartment/apartment.service.ts ***!
  \*********************************************************/
/*! exports provided: ApartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentService", function() { return ApartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApartmentService = /** @class */ (function () {
    function ApartmentService(http) {
        this.http = http;
        this.apartmentUrl = '/api/property/';
        this.typeUrl = '/api/create-apartment/apartment-type';
        this.amenityUrl = '/api/create-apartment/amenities';
    }
    ApartmentService.prototype.setPropertyId = function (propertyId) {
        this.propId = propertyId;
    };
    ApartmentService.prototype.getAllApartments = function () {
        return this.http.get(this.apartmentUrl + "/" + this.propId + "/apartment");
    };
    ApartmentService.prototype.getApartmentType = function () {
        return this.http.get(this.typeUrl);
    };
    ApartmentService.prototype.getAmenities = function () {
        return this.http.get(this.amenityUrl);
    };
    ApartmentService.prototype.createApartment = function (createApartment) {
        return this.http.post(this.apartmentUrl, createApartment, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return console.log('created apartments'); }));
    };
    ApartmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApartmentService);
    return ApartmentService;
}());



/***/ }),

/***/ "./src/app/services/authentication/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/authentication/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authenticated = false;
    }
    AuthService.prototype.signIn = function (model) {
        console.log('In auth service');
        console.log('json', JSON.stringify({ email: model.email, password: model.password }));
        return this.http.post('/api/login', JSON.stringify({ email: model.email, password: model.password }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
        });
    };
    AuthService.prototype.saveToken = function (token) {
        console.log('save token', token);
        localStorage.setItem('token', token);
    };
    AuthService.prototype.getToken = function () {
        console.log('in get token');
        return localStorage.getItem('token');
    };
    AuthService.prototype.signOut = function () {
        localStorage.clear();
        return this.authenticated = false;
    };
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return localStorage.getItem('token') != null;
        },
        set: function (val) {
            this.authenticated = val;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/booking/booking.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/booking/booking.service.ts ***!
  \*****************************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
        this.bookingUrl = 'api/bookings';
        this.bookingUrl2 = 'api/booking';
    }
    BookingService.prototype.getBookings = function () {
        return this.http.get(this.bookingUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return console.log('catch bookings'); }));
    };
    BookingService.prototype.getBooking = function (id) {
        var url = this.bookingUrl2 + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return console.log('catch ONE booking'); }));
    };
    BookingService.prototype.cancelBookings = function (id) {
        var url = this.bookingUrl2 + "/" + id;
        return this.http.put(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return console.log('cancel booking'); }));
    };
    BookingService.prototype.isCanceled = function (bookingStatus) {
        var canceledStatus = 'Canceled';
        if (bookingStatus == canceledStatus) {
            //console.log('iscancel booking TRUE');  
            return true;
        }
        else {
            //console.log('iscancel booking FALSE');  
            return false;
        }
    };
    BookingService.prototype.calculateNumberOfDates = function (checkIn, checkOut) {
        var dateChackIn = new Date(checkIn);
        var dateChackOut = new Date(checkOut);
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round((dateChackOut.getTime() - dateChackIn.getTime()) / (oneDay));
    };
    BookingService.prototype.isCheckBookingDate = function (checkIn, checkOut) {
        var dateChackIn = new Date(checkIn);
        var dateChackOut = new Date(checkOut);
        this.nowDate = new Date();
        //console.log('date', d);
        //console.log('this.today', this.nowDate);
        //console.log('date1', checkIn);
        //console.log('date2', checkOut);
        if (dateChackIn > this.nowDate || dateChackOut > this.nowDate) {
            //console.log('isCheckBookingDate', true);
            return true;
        }
        else {
            //console.log('isCheckBookingDate', false);
            return false;
        }
    };
    BookingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/services/city/city.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/city/city.service.ts ***!
  \***********************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getCity = function (countryId) {
        return this.http.get("api/country/" + countryId + "/cities");
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/services/country/coutry.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/country/coutry.service.ts ***!
  \****************************************************/
/*! exports provided: CoutryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoutryService", function() { return CoutryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoutryService = /** @class */ (function () {
    function CoutryService(http) {
        this.http = http;
    }
    CoutryService.prototype.getCountry = function () {
        return this.http.get("api/countries");
    };
    CoutryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CoutryService);
    return CoutryService;
}());



/***/ }),

/***/ "./src/app/services/property/property.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/property/property.service.ts ***!
  \*******************************************************/
/*! exports provided: PropertyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyService", function() { return PropertyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
    }
    PropertyService.prototype.createProperty = function (model) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("localhost:8080/api/property", model, httpOptions);
    };
    PropertyService.prototype.getProperties = function () {
        return this.http.get('api/property');
    };
    PropertyService.prototype.getPropertyById = function (id) {
        return this.http.get('api/property/' + id);
    };
    PropertyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PropertyService);
    return PropertyService;
}());



/***/ }),

/***/ "./src/app/services/propertyTypy/property-type.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/propertyTypy/property-type.service.ts ***!
  \****************************************************************/
/*! exports provided: PropertyTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTypeService", function() { return PropertyTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyTypeService = /** @class */ (function () {
    function PropertyTypeService(http) {
        this.http = http;
    }
    PropertyTypeService.prototype.getAllPropertyTypes = function () {
        return this.http.get("api/propertytype");
    };
    PropertyTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PropertyTypeService);
    return PropertyTypeService;
}());



/***/ }),

/***/ "./src/app/services/review/review.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/review/review.service.ts ***!
  \***************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewService = /** @class */ (function () {
    function ReviewService(http) {
        this.http = http;
    }
    ReviewService.prototype.getReviewCountByPropertyId = function (id) {
        return this.http.get("api/property/${id}/reviews/count");
    };
    ReviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReviewService);
    return ReviewService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\myjava\bookingliteClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map