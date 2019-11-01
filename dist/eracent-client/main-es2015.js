(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/main/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/main/home/home.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{ show: showFilter }\" class=\"sidebar left show\">\r\n    <div class=\"example-container\">\r\n        <h2>Filter Data</h2>\r\n        <div class=\"filter-list\">\r\n            <div class=\"filter-list--item\" *ngFor=\"let item of filterList; let i = index\">\r\n                <mat-checkbox>Filter {{i + 1}}</mat-checkbox>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <button mat-icon-button class=\"filterbutton\" (click)=\"showFilter = !showFilter\">\r\n        <i class=\"material-icons\">\r\n            filter_list\r\n        </i>\r\n    </button>\r\n</div>\r\n\r\n<mat-card>\r\n    <div class=\"coco-bpm-graph\" id=\"graph\" style=\"height: calc(100vh - 96px);\"></div>\r\n</mat-card>\r\n\r\n<div class=\"clickShield\" *ngIf=\"showSide\" (click)=\"showSide = false\"></div>\r\n<div [ngClass]=\"{ show: showSide }\" class=\"sidebar show\">\r\n    <div class=\"example-container\">\r\n\r\n        <div *ngIf=\"selectedNode\">\r\n            <mat-list>\r\n                <mat-list-item>Application name: {{selectedNode.SourceId + ',' + (selectedNode.SourceImageName || '?')}}</mat-list-item>\r\n                <mat-divider></mat-divider>\r\n                <mat-list-item>Publisher: {{selectedNode.SourceMfgName}}</mat-list-item>\r\n                <mat-divider></mat-divider>\r\n                <mat-list-item>Server name: {{selectedNode.SourceHostname}}</mat-list-item>\r\n                <mat-divider></mat-divider>\r\n                <mat-list-item>Connected:</mat-list-item>\r\n                <mat-list-item *ngFor=\"let item of connected[selectedNode.SourceId + ',' + (selectedNode.SourceImageName || '?')]\">{{item}}</mat-list-item>\r\n            </mat-list>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/main/main.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/main/main.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>ADE</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n<div class=\"footer\">\r\n    © Copyright  \r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        redirectTo: 'main/home',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/layout/main/main.component.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/layout/main/home/home.component.ts");





const routes = [
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: 'home',
                component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            }
        ]
    }
];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LayoutRoutingModule);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/layout/main/main.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/layout/main/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









//material modules 










let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _main_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            // material
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"]
        ],
        providers: [_shared_services_main_service__WEBPACK_IMPORTED_MODULE_15__["MainService"]]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/main/home/home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layout/main/home/home.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clickShield {\n  position: fixed;\n  background: #0000003d;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1;\n}\n\n.sidebar {\n  position: absolute;\n  width: 100%;\n  max-width: 400px;\n  background-color: white;\n  -webkit-transform: translate(calc(100% + 10px), 0);\n          transform: translate(calc(100% + 10px), 0);\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  height: 100%;\n  right: 0;\n  top: 0;\n  padding: 15px;\n  z-index: 1;\n  box-shadow: rgba(0, 0, 0, 0.1) -8px 0px 5px -4px;\n}\n\n.sidebar.left {\n  -webkit-transform: translate(calc(-100% - 10px), 0);\n          transform: translate(calc(-100% - 10px), 0);\n  right: unset;\n  left: 0;\n  max-width: 250px;\n  box-shadow: rgba(0, 0, 0, 0.1) 8px 0px 5px -4px;\n}\n\n.sidebar.show {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  z-index: 111;\n}\n\n.filterbutton {\n  position: absolute;\n  right: -63px;\n  top: 73px;\n  background: white;\n  box-shadow: 0 0 7px -3px #0000008c;\n}\n\n.filter-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.filter-list--item {\n  width: 50%;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW4vaG9tZS9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcZXJhc2VudC1jbGllbnQvc3JjXFxhcHBcXGxheW91dFxcbWFpblxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQ0NKOztBRENJO0VBQ0ksbURBQUE7VUFBQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtBQ0NSOztBREVJO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFlBQUE7QUNBUjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FDREo7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQUo7O0FEQ0k7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja1NoaWVsZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygxMDAlICsgMTBweCksIDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIC04cHggMHB4IDVweCAtNHB4O1xyXG5cclxuICAgICYubGVmdCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygtMTAwJSAtIDEwcHgpLCAwKTtcclxuICAgICAgICByaWdodDogdW5zZXQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSA4cHggMHB4IDVweCAtNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuc2hvdyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgei1pbmRleDogMTExO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVyYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNjNweDtcclxuICAgIHRvcDogNzNweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAtM3B4ICMwMDAwMDA4YztcclxufVxyXG4uZmlsdGVyLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgJi0taXRlbXtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn0iLCIuY2xpY2tTaGllbGQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAzZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwMCUgKyAxMHB4KSwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAtOHB4IDBweCA1cHggLTRweDtcbn1cbi5zaWRlYmFyLmxlZnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC0xMDAlIC0gMTBweCksIDApO1xuICByaWdodDogdW5zZXQ7XG4gIGxlZnQ6IDA7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSA4cHggMHB4IDVweCAtNHB4O1xufVxuLnNpZGViYXIuc2hvdyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB6LWluZGV4OiAxMTE7XG59XG5cbi5maWx0ZXJidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNjNweDtcbiAgdG9wOiA3M3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDdweCAtM3B4ICMwMDAwMDA4Yztcbn1cblxuLmZpbHRlci1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZpbHRlci1saXN0LS1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/main/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/main/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/main.service */ "./src/app/shared/services/main.service.ts");



let HomeComponent = class HomeComponent {
    constructor(mainServices) {
        this.mainServices = mainServices;
        this.filterList = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        this.connected = {};
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.mainServices.getDataSample().subscribe(data => {
            console.log(data);
            this.data = data;
            this.init();
            this.drow();
        });
    }
    drow() {
        let self = this;
        let data = {
            nodes: this.data,
            links: []
        };
        this.data.forEach(el => {
            var sKey = el.SourceId + "," + (el.SourceImageName || "?"), tKey = el.TargetId + "," + (el.TargetImageName || "?");
            data.links.push({ "source": sKey, "target": tKey, "value": 1 });
            if (!this.connected[sKey]) {
                this.connected[sKey] = [];
            }
            ;
            this.connected[sKey].push(tKey);
        });
        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (d) {
            return d.SourceId + "," + (d.SourceImageName || "?");
        }).distance(100).strength(1))
            .force("charge", d3.forceManyBody())
            .force('collide', d3.forceCollide(function (d) { return 30; }))
            .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2));
        var link = this.conteiner.append("g")
            .attr("class", "links")
            .selectAll("polyline")
            .data(data.links)
            .enter().append("polyline");
        var node = this.conteiner.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(data.nodes)
            .enter().append("g");
        let g = node.append("g");
        g.append("svg:circle")
            .attr("class", "nodes")
            .attr("r", "5px")
            .attr("fill", "#3cd57c")
            .on("mouseover", nodeOver)
            .on("mouseout", nodeOut)
            .on("click", nodeClick);
        function nodeOut() {
            d3.selectAll("circle").style("opacity", 1).style("stroke", "#b6fdba").style("stroke-width", 2 + "px");
            d3.selectAll("polyline").style("opacity", 1).style("stroke-width", 2 + "px");
            d3.selectAll("text").style("opacity", 1).style("fill", "black");
        }
        function nodeOver(d, i, e) {
            highlightNeighbors(d, i);
        }
        function highlightNeighbors(d, i) {
            var nodeNeighbors = findNeighbors(d, i);
            d3.selectAll("circle").each(function (p) {
                var isNeighbor = nodeNeighbors.nodes.indexOf(p);
                d3.select(this)
                    .style("opacity", isNeighbor > -1 ? 1 : .25)
                    .style("stroke", isNeighbor > -1 ? "yellow" : "#b6fdba");
            });
            d3.selectAll("polyline")
                .style("stroke-width", function (d) {
                return nodeNeighbors.links.indexOf(d) > -1 ? 3 : 2;
            })
                .style("opacity", function (d) {
                return nodeNeighbors.links.indexOf(d) > -1 ? 1 : .25;
            });
            d3.selectAll("text")
                .style("opacity", function (d) {
                return nodeNeighbors.nodes.indexOf(d) > -1 ? 1 : 0;
            })
                .style("fill", function (n) {
                return n === d ? "blue" : "black";
            });
        }
        function findNeighbors(d, i) {
            let neighborArray = [d];
            var linkArray = [];
            data.links.forEach((p) => {
                if (p.source === d || p.target === d) {
                    neighborArray.indexOf(p.source) == -1 ? neighborArray.push(p.source) : null;
                    neighborArray.indexOf(p.target) == -1 ? neighborArray.push(p.target) : null;
                    linkArray.push(p);
                }
            });
            return {
                nodes: neighborArray,
                links: linkArray
            };
        }
        function nodeClick(d, i, e) {
            self.selectedNode = d;
            self.showSide = true;
        }
        node.append("text")
            .text(function (d) {
            return d.SourceId + "," + (d.SourceImageName || "?");
        })
            .attr('x', 6)
            .attr('y', 3);
        node.append("title")
            .text(function (d) { return d.SourceId + "," + (d.SourceImageName || "?"); });
        simulation
            .nodes(data.nodes)
            .on("tick", ticked);
        simulation.force("link")
            .links(data.links);
        function ticked() {
            link.attr("points", function (d) {
                return (d.source.x +
                    "," +
                    d.source.y +
                    " " +
                    (d.source.x + d.target.x) / 2 +
                    "," +
                    (d.source.y + d.target.y) / 2 +
                    " " +
                    d.target.x +
                    "," +
                    d.target.y);
            }).attr("stroke-opacity", 0.4)
                .attr("stroke-width", 1.5)
                .attr("stroke", "#ec9696")
                .style("fill", "none")
                .attr("marker-mid", "url(#triangle)");
            node
                .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        }
    }
    init() {
        this.zoom = d3
            .zoom()
            .scaleExtent([0.1, 2])
            .on("zoom", () => {
            this.zoomTrans = d3.event.transform;
            const currentTransform = d3.event.transform;
            if (!currentTransform.x) {
                currentTransform.x = 0;
                currentTransform.y = 0;
            }
            this.conteiner.attr("transform", currentTransform);
            this.slider.property("value", currentTransform.k);
            this.rangeWidth();
        });
        this.vis = d3.select("#graph").append("svg");
        var w = "100%", h = "100%";
        this.vis
            .attr("width", w)
            .attr("height", h);
        this.vis.call(this.zoom).on("dblclick.zoom", null);
        this.conteiner = this.vis.append("g").attr("id", "wrap");
        let g = d3
            .select("#graph")
            .append("div")
            .datum({})
            .attr("class", "coco-bpm-d3-zoom-wrap");
        let icon = g
            .append("svg")
            .attr("width", "14")
            .attr("height", "14")
            .attr("viewBox", "0 0 14 14")
            .append("g")
            .attr("fill", "#2196F3")
            .attr("fill-rule", "nonzero");
        icon
            .append("path")
            .attr("d", "M12.316 9.677a5.677 5.677 0 0 0 0-8.019 5.676 5.676 0 0 0-8.019 0 5.56 5.56 0 0 0-.853 6.843s.094.158-.033.284L.518 11.678c-.575.576-.712 1.381-.202 1.892l.088.088c.51.51 1.316.373 1.892-.202l2.886-2.887c.133-.133.29-.04.29-.04a5.56 5.56 0 0 0 6.844-.852zM5.344 8.63a4.194 4.194 0 0 1 0-5.925 4.194 4.194 0 0 1 5.925 0 4.194 4.194 0 0 1 0 5.925 4.195 4.195 0 0 1-5.925 0z");
        icon
            .append("path")
            .attr("d", "M5.706 5.331a.584.584 0 0 1-.539-.813A3.688 3.688 0 0 1 9.996 2.56a.585.585 0 0 1-.457 1.078 2.516 2.516 0 0 0-3.294 1.336.585.585 0 0 1-.54.357z");
        let slider = g
            .append("div")
            .datum({})
            .attr("class", "coco-bpm-slider-wrap");
        this.slider = slider
            .append("input")
            .datum({})
            .attr("type", "range")
            .attr("class", "coco-bpm-slider")
            .attr("id", "range")
            .attr("value", 1)
            .attr("min", 0.1)
            .attr("max", 2)
            .attr("step", 0.01)
            .on("input", () => {
            this.zoom.scaleTo(this.vis, d3.select("#range").property("value"));
            this.rangeWidth();
        });
        slider.append("div")
            .datum({})
            .attr("class", "coco-bpm-line-range")
            .attr("id", "lineZoomRange");
        this.marker = this.conteiner
            .append("svg:defs")
            .append("svg:marker")
            .attr("id", "triangle")
            .attr("refX", 3)
            .attr("refY", 3)
            .attr("markerWidth", 30)
            .attr("markerHeight", 30)
            .attr("orient", "auto");
        this.marker
            .append("path")
            .attr("class", "path")
            .attr("d", "M 0 0 6 3 0 6 3 3")
            .style("fill", "#999");
    }
    rangeWidth(flag) {
        if (flag) {
            setTimeout(() => {
                document.getElementById("lineZoomRange").style.width = 50 + "%";
            }, 500);
        }
        else {
            let input = document.getElementById("range");
            let width;
            width = (input["value"] / 2) * 100;
            document.getElementById("lineZoomRange").style.width = width + "%";
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/main/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/layout/main/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/main/main.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/main/main.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW4vQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXGVyYXNlbnQtY2xpZW50L3NyY1xcYXBwXFxsYXlvdXRcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/layout/main/main.component.scss")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/shared/services/main.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/main.service.ts ***!
  \*************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MainService = class MainService {
    constructor(http) {
        this.http = http;
    }
    getDataSample() {
        return this.http.get('assets/examples/DataSample1.json');
    }
};
MainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainService);



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
const environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\erasent-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map