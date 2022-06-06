"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_html_index_ts"],{

/***/ "./src/presentation/html/index.ts":
/*!****************************************!*\
  !*** ./src/presentation/html/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlPresentation": () => (/* binding */ HtmlPresentation)
/* harmony export */ });
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_useCase_ICreateModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/useCase/ICreateModule */ "./src/domain/useCase/ICreateModule.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_useCase_ICreateModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/useCase/ICreateModel */ "./src/domain/useCase/ICreateModel.ts");
/* harmony import */ var _domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/presentation/IViewModelProxifier */ "./src/domain/presentation/IViewModelProxifier.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






let HtmlProxifier = class HtmlProxifier {
    markRaw(obj) {
        return obj;
    }
    isProxified() { return true; }
    proxify(obj) { return obj; }
};
HtmlProxifier = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.injectable)()
], HtmlProxifier);
_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.register(_domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_5__.IViewModelProxifier, HtmlProxifier);
let HtmlPresentation = class HtmlPresentation {
    constructor(viewModel, executor) {
        this.viewModel = viewModel;
        this.executor = executor;
    }
    start() {
        const btnDiv = document.createElement("div");
        ;
        const btnModule = document.createElement("button");
        let createdParentObjectId;
        btnModule.innerText = "create module";
        btnModule.onclick = () => {
            this.executor.execute(async () => {
                const module = { name: "alper3" };
                const createdModule = await this.executor.executeUseCase(_domain_useCase_ICreateModule__WEBPACK_IMPORTED_MODULE_2__.ICreateModule, module);
                createdParentObjectId = createdModule.ID;
            }, { loading: true });
        };
        btnDiv.appendChild(btnModule);
        const btnModel = document.createElement("button");
        btnModel.innerText = "create model";
        btnModel.onclick = () => {
            this.executor.executeUseCase(_domain_useCase_ICreateModel__WEBPACK_IMPORTED_MODULE_4__.ICreateModel, { name: "model1", parentObjectId: createdParentObjectId, modelType: "qjson", modelAdditionals: { qjsonType: "qjson" } });
        };
        btnDiv.appendChild(btnModel);
        document.body.appendChild(btnDiv);
    }
};
HtmlPresentation = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.inject)(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_0__.IViewModel)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.inject)(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_3__.IUseCaseExecutor))
], HtmlPresentation);



/***/ })

}]);
//# sourceMappingURL=src_presentation_html_index_ts.js.map