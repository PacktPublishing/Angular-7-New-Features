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

module.exports = "button {margin:2px;}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <hr />\n  <nav>\n    <button (click)=\"toggleForm('templateDriven')\">Template Driven</button>\n    <button (click)=\"toggleForm('reactive')\">Reactive</button>\n    <button (click)=\"toggleForm('employees')\">Employees</button>\n  </nav>\n\n  <template-driven *ngIf=\"showTemplateDriven\"></template-driven>\n  <reactive-form *ngIf=\"showReactive\"></reactive-form>\n  <employees-list *ngIf=\"showEmployees\"></employees-list>\n</div>"

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
        this.title = 'Angular 6 Forms';
        this.form = 'employees';
    }
    Object.defineProperty(AppComponent.prototype, "showTemplateDriven", {
        get: function () {
            return this.form === 'templateDriven';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "showReactive", {
        get: function () {
            return this.form === 'reactive';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "showEmployees", {
        get: function () {
            return this.form === 'employees';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.toggleForm = function (type) {
        this.form = type;
    };
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngForms_ngForms_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngForms/ngForms.module */ "./src/app/ngForms/ngForms.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees.service */ "./src/app/employees.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngForms_ngForms_module__WEBPACK_IMPORTED_MODULE_4__["NgFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [_employees_service__WEBPACK_IMPORTED_MODULE_6__["EmployeesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees.service.ts":
/*!**************************************!*\
  !*** ./src/app/employees.service.ts ***!
  \**************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
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

var EmployeesService = /** @class */ (function () {
    function EmployeesService() {
        this.employeesData = [{
                "id": "817-52-0050",
                "first_name": "Ginelle",
                "last_name": "Nesby",
                "email": "gnesby0@hexun.com",
                "gender": "Female",
                "salary": "$107378.00",
                "position": "Associate Professor"
            }, {
                "id": "680-83-6134",
                "first_name": "Eadmund",
                "last_name": "Murrey",
                "email": "emurrey1@theguardian.com",
                "gender": "Male",
                "salary": "$118194.72",
                "position": "Junior Executive"
            }, {
                "id": "464-84-9940",
                "first_name": "Tedmund",
                "last_name": "Owenson",
                "email": "towenson2@auda.org.au",
                "gender": "Male",
                "salary": "$86520.66",
                "position": "GIS Technical Architect"
            }, {
                "id": "189-81-0010",
                "first_name": "Missie",
                "last_name": "Thatcham",
                "email": "mthatcham3@chronoengine.com",
                "gender": "Female",
                "salary": "$108568.72",
                "position": "Project Manager"
            }, {
                "id": "154-14-6426",
                "first_name": "Ruggiero",
                "last_name": "Tchir",
                "email": "rtchir4@walmart.com",
                "gender": "Male",
                "salary": "$84110.58",
                "position": "Desktop Support Technician"
            }, {
                "id": "669-71-1663",
                "first_name": "Maison",
                "last_name": "Scamerdine",
                "email": "mscamerdine5@whitehouse.gov",
                "gender": "Male",
                "salary": "$105305.35",
                "position": "Occupational Therapist"
            }, {
                "id": "594-62-9323",
                "first_name": "Ransell",
                "last_name": "Messum",
                "email": "rmessum6@ehow.com",
                "gender": "Male",
                "salary": "$131677.71",
                "position": "Operator"
            }, {
                "id": "139-94-5669",
                "first_name": "Toiboid",
                "last_name": "Queyos",
                "email": "tqueyos7@live.com",
                "gender": "Male",
                "salary": "$102310.64",
                "position": "Tax Accountant"
            }, {
                "id": "820-63-0741",
                "first_name": "Boy",
                "last_name": "Loudon",
                "email": "bloudon8@about.com",
                "gender": "Male",
                "salary": "$99391.75",
                "position": "Payment Adjustment Coordinator"
            }, {
                "id": "731-19-8299",
                "first_name": "Nomi",
                "last_name": "Lindop",
                "email": "nlindop9@discovery.com",
                "gender": "Female",
                "salary": "$81148.44",
                "position": "Registered Nurse"
            }];
    }
    EmployeesService.prototype.getEmployeesData = function () {
        return this.employeesData;
    };
    EmployeesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\n<div class=\"container\">\n<table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Position</th>\n      <th scope=\"col\">Gender</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Salary</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let employee of employees\">\n      <th scope=\"row\">{{employee.id}}</th>\n      <td>{{employee.first_name}}</td>\n      <td>{{employee.last_name}}</td>\n      <td>{{employee.position}}</td>\n      <td>{{employee.gender}}</td>\n      <td>{{employee.email}}</td>\n      <td>{{employee.salary}}</td>\n    </tr>\n    </tbody>\n    </table>\n\n  </div>"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employees.service */ "./src/app/employees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(empService) {
        this.empService = empService;
        this.title = "Employees";
        this.employees = [];
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.employees = this.empService.getEmployeesData();
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employees-list',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.module.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.module.ts ***!
  \***********************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees/employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"]],
            exports: [_employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"]]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/ngForms/ngForms.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ngForms/ngForms.module.ts ***!
  \*******************************************/
/*! exports provided: NgFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormsModule", function() { return NgFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _templateDriven_templateDriven_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templateDriven/templateDriven.module */ "./src/app/templateDriven/templateDriven.module.ts");
/* harmony import */ var _reactive_reactive_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactive/reactive.module */ "./src/app/reactive/reactive.module.ts");
/* harmony import */ var _employees_employees_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employees/employees.module */ "./src/app/employees/employees.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgFormsModule = /** @class */ (function () {
    function NgFormsModule() {
    }
    NgFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_templateDriven_templateDriven_module__WEBPACK_IMPORTED_MODULE_1__["TemplateDrivenModule"], _reactive_reactive_module__WEBPACK_IMPORTED_MODULE_2__["ReactiveModule"], _employees_employees_module__WEBPACK_IMPORTED_MODULE_3__["EmployeesModule"]],
            exports: [_templateDriven_templateDriven_module__WEBPACK_IMPORTED_MODULE_1__["TemplateDrivenModule"], _reactive_reactive_module__WEBPACK_IMPORTED_MODULE_2__["ReactiveModule"], _employees_employees_module__WEBPACK_IMPORTED_MODULE_3__["EmployeesModule"]]
        })
    ], NgFormsModule);
    return NgFormsModule;
}());



/***/ }),

/***/ "./src/app/reactive/reactive.component.css":
/*!*************************************************!*\
  !*** ./src/app/reactive/reactive.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {width:350px; text-align: left;}\r\nbutton {margin:2px;}"

/***/ }),

/***/ "./src/app/reactive/reactive.component.html":
/*!**************************************************!*\
  !*** ./src/app/reactive/reactive.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Reactive Form</h3>\r\n\r\n<div class=\"container\">\r\n    <form [formGroup]=\"reactiveForm\" (ngSubmit)=\"submit()\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n        <button class=\"btn btn-danger\" on-click=\"reset()\">Reset</button>\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/reactive/reactive.component.ts":
/*!************************************************!*\
  !*** ./src/app/reactive/reactive.component.ts ***!
  \************************************************/
/*! exports provided: ReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveComponent", function() { return ReactiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReactiveComponent = /** @class */ (function () {
    function ReactiveComponent() {
        this.user = {
            username: "ChristianHur",
            password: "password123",
            email: "chur@mycompany.com"
        };
        this.usernameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.reactiveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: this.usernameControl,
            password: this.passwordControl,
            email: this.emailControl
        });
    }
    ReactiveComponent.prototype.submit = function () {
        console.log(this.reactiveForm.value);
    };
    ReactiveComponent.prototype.reset = function () {
        this.reactiveForm.get("username").setValue("ChristianHur");
        this.reactiveForm.get("password").setValue("password123");
        this.reactiveForm.get("email").setValue("chur@mycompany.com");
    };
    ReactiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reactive-form',
            template: __webpack_require__(/*! ./reactive.component.html */ "./src/app/reactive/reactive.component.html"),
            styles: [__webpack_require__(/*! ./reactive.component.css */ "./src/app/reactive/reactive.component.css")]
        })
    ], ReactiveComponent);
    return ReactiveComponent;
}());



/***/ }),

/***/ "./src/app/reactive/reactive.module.ts":
/*!*********************************************!*\
  !*** ./src/app/reactive/reactive.module.ts ***!
  \*********************************************/
/*! exports provided: ReactiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveModule", function() { return ReactiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reactive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactive.component */ "./src/app/reactive/reactive.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReactiveModule = /** @class */ (function () {
    function ReactiveModule() {
    }
    ReactiveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
            declarations: [_reactive_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponent"]],
            exports: [_reactive_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponent"]],
        })
    ], ReactiveModule);
    return ReactiveModule;
}());



/***/ }),

/***/ "./src/app/templateDriven/templateDriven.component.css":
/*!*************************************************************!*\
  !*** ./src/app/templateDriven/templateDriven.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {width:350px; text-align: left;}\r\nbutton {margin:2px;}"

/***/ }),

/***/ "./src/app/templateDriven/templateDriven.component.html":
/*!**************************************************************!*\
  !*** ./src/app/templateDriven/templateDriven.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Template-Driven Form</h3>\r\n\r\n<div class=\"container\">\r\n  <form name=\"templateDrivenForm\" #form=\"ngForm\" (ngSubmit)=\"submit(form.value)\">\r\n     \r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"user.username\" required>\r\n    </div>\r\n     \r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" autocomplete=\"true\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\r\n    </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" required>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>  \r\n    <button type=\"button\" class=\"btn btn-danger\" on-click=\"reset(form.value)\">Reset</button>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/templateDriven/templateDriven.component.ts":
/*!************************************************************!*\
  !*** ./src/app/templateDriven/templateDriven.component.ts ***!
  \************************************************************/
/*! exports provided: TemplateDrivenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDrivenComponent", function() { return TemplateDrivenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemplateDrivenComponent = /** @class */ (function () {
    function TemplateDrivenComponent() {
        this.user = { username: "ChristianHur",
            password: "password123",
            email: "chur@mycompany.com" };
    }
    TemplateDrivenComponent.prototype.submit = function (value) {
        console.log(value);
    };
    TemplateDrivenComponent.prototype.reset = function (value) {
        this.user.username = "ChristianHur";
        this.user.password = "password123";
        this.user.email = "chur@mycompany.com";
        console.log(value);
    };
    TemplateDrivenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'template-driven',
            template: __webpack_require__(/*! ./templateDriven.component.html */ "./src/app/templateDriven/templateDriven.component.html"),
            styles: [__webpack_require__(/*! ./templateDriven.component.css */ "./src/app/templateDriven/templateDriven.component.css")]
        })
    ], TemplateDrivenComponent);
    return TemplateDrivenComponent;
}());



/***/ }),

/***/ "./src/app/templateDriven/templateDriven.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/templateDriven/templateDriven.module.ts ***!
  \*********************************************************/
/*! exports provided: TemplateDrivenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDrivenModule", function() { return TemplateDrivenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _templateDriven_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templateDriven.component */ "./src/app/templateDriven/templateDriven.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TemplateDrivenModule = /** @class */ (function () {
    function TemplateDrivenModule() {
    }
    TemplateDrivenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
            declarations: [_templateDriven_component__WEBPACK_IMPORTED_MODULE_2__["TemplateDrivenComponent"]],
            exports: [_templateDriven_component__WEBPACK_IMPORTED_MODULE_2__["TemplateDrivenComponent"]],
        })
    ], TemplateDrivenModule);
    return TemplateDrivenModule;
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

module.exports = __webpack_require__(/*! C:\Users\chris\Angular_6\my-app-v6-copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map