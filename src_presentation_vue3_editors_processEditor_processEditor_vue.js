"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_editors_processEditor_processEditor_vue"],{

/***/ "./node_modules/@stechquick/algae/lib/helpers/cryptoHelper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@stechquick/algae/lib/helpers/cryptoHelper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoHelper = void 0;
var CryptoHelper = /** @class */ (function () {
    function CryptoHelper() {
    }
    /**
     *
     * @param base number layout (number of distinct digits) (10'luk sayı düzeni, 16'lık sayı düzeni)
     * @param length length of word. Max value: 16
     */
    CryptoHelper.GetRandomWord = function (base, length) {
        return Math.random().toString(base).substring(2, length + 2);
    };
    /**
     * Ex: be945482-jf10-40d1-a50d-rzxa2c41fdcu
     */
    CryptoHelper.CreateGuid = function () {
        var _this = this;
        return [8, 4, 4, 4, 6].map(function (length) { return _this.GetRandomWord(36, length); }).join("-") + ((++CryptoHelper.guidCounter) % 2150000000).toString(36);
    };
    CryptoHelper.guidCounter = 0;
    return CryptoHelper;
}());
exports.CryptoHelper = CryptoHelper;


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/processMakerDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue");
/* harmony import */ var _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/approveDefinitionFirstTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue");
/* harmony import */ var _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/runAfterProcessDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue");
/* harmony import */ var _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/runAfterChangeAdvisedDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue");
/* harmony import */ var _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/approveTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'doubleApprovalWizard',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            stepper.value.totalStep = 5;
        });
        const __returned__ = { props, stepper, ProcessMakerDefinitionTab: _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__["default"], ApproveDefinitionFirstTab: _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__["default"], RunAfterProcessDefinitionTab: _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_3__["default"], RunAfterChangeAdvisedDefinitionTab: _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_4__["default"], ApproveTab: _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_5__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/processMakerDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue");
/* harmony import */ var _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/approveDefinitionFirstTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue");
/* harmony import */ var _tabs_approveDefinitionSecondTab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/approveDefinitionSecondTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue");
/* harmony import */ var _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/runAfterProcessDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue");
/* harmony import */ var _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/approveTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue");
/* harmony import */ var _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/runAfterChangeAdvisedDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'quadrupleApprovalWizard',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            stepper.value.totalStep = 6;
        });
        const __returned__ = { props, stepper, ProcessMakerDefinitionTab: _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__["default"], ApproveDefinitionFirstTab: _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__["default"], ApproveDefinitionSecondTab: _tabs_approveDefinitionSecondTab_vue__WEBPACK_IMPORTED_MODULE_3__["default"], RunAfterProcessDefinitionTab: _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_4__["default"], ApproveTab: _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_5__["default"], RunAfterChangeAdvisedDefinitionTab: _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_6__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/processMakerDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue");
/* harmony import */ var _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/approveDefinitionFirstTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue");
/* harmony import */ var _tabs_approveDefinitionSecondTab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/approveDefinitionSecondTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue");
/* harmony import */ var _tabs_approveDefinitionThirdTab_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/approveDefinitionThirdTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue");
/* harmony import */ var _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/runAfterProcessDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue");
/* harmony import */ var _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/approveTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue");
/* harmony import */ var _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/runAfterChangeAdvisedDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'quintupleApprovalWizard',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            stepper.value.totalStep = 7;
        });
        const __returned__ = { props, stepper, ProcessMakerDefinitionTab: _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__["default"], ApproveDefinitionFirstTab: _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__["default"], ApproveDefinitionSecondTab: _tabs_approveDefinitionSecondTab_vue__WEBPACK_IMPORTED_MODULE_3__["default"], ApproveDefinitionThirdTab: _tabs_approveDefinitionThirdTab_vue__WEBPACK_IMPORTED_MODULE_4__["default"], RunAfterProcessDefinitionTab: _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_5__["default"], ApproveTab: _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_6__["default"], RunAfterChangeAdvisedDefinitionTab: _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_7__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/processMakerDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue");
/* harmony import */ var _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/approveDefinitionFirstTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue");
/* harmony import */ var _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/runAfterProcessDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue");
/* harmony import */ var _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/runAfterChangeAdvisedDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue");
/* harmony import */ var _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/approveTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'singleApprovalWizard',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            stepper.value.totalStep = 5;
        });
        const __returned__ = { props, stepper, ProcessMakerDefinitionTab: _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__["default"], ApproveDefinitionFirstTab: _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__["default"], RunAfterProcessDefinitionTab: _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_3__["default"], RunAfterChangeAdvisedDefinitionTab: _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_4__["default"], ApproveTab: _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_5__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'approveDefinitionFirstTab',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        secondApproveEnabled: { type: Boolean, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        var _a, _b;
        expose();
        const props = __props;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            checkTabValidation();
        });
        const processCheckerDefinition = props.model.processCheckerDefinition;
        const firstApproverScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_a = props.modelsOfModule.screens.find((screen) => screen.ID == props.model.processCheckerDefinition.firstApproverScreenID)) === null || _a === void 0 ? void 0 : _a.name) || "");
        const secondApproverScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_b = props.modelsOfModule.screens.find((screen) => screen.ID == props.model.processCheckerDefinition.secondApproverScreenID)) === null || _b === void 0 ? void 0 : _b.name) || "");
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        const validation = {
            isFirstApproverScreenValid: false,
            isSecondApproverScreenValid: false,
        };
        function handleFirstApproverScreen($event) {
            let selectedScreen = $event.target[$event.target.selectedIndex];
            props.modified({ model: true });
            console.log("firstworked");
            processCheckerDefinition.firstApproverScreenID = selectedScreen.id;
            validation.isFirstApproverScreenValid = !!firstApproverScreen.value.length;
            setTabValidation();
        }
        function handleSecondApproverScreen($event) {
            let selectedScreen = $event.target[$event.target.selectedIndex];
            props.modified({ model: true });
            console.log("secondworked");
            processCheckerDefinition.secondApproverScreenID = selectedScreen.id;
            validation.isSecondApproverScreenValid = !!secondApproverScreen.value.length;
            setTabValidation();
        }
        function checkTabValidation() {
            validation.isFirstApproverScreenValid = !!firstApproverScreen.value.length;
            if (props.secondApproveEnabled) {
                validation.isSecondApproverScreenValid = !!secondApproverScreen.value.length;
            }
            setTabValidation();
        }
        function setTabValidation() {
            stepper.value.isTabValid = validation.isFirstApproverScreenValid;
            if (props.secondApproveEnabled) {
                stepper.value.isTabValid = stepper.value.isTabValid && validation.isSecondApproverScreenValid;
            }
        }
        const __returned__ = { props, processCheckerDefinition, firstApproverScreen, secondApproverScreen, stepper, validation, handleFirstApproverScreen, handleSecondApproverScreen, checkTabValidation, setTabValidation };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'approveDefinitionSecondTab',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        fourthApproveEnabled: { type: Boolean, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        var _a, _b;
        expose();
        const props = __props;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            checkTabValidation();
        });
        const processCheckerDefinition = props.model.processCheckerDefinition;
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        const thirdApproverScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_a = props.modelsOfModule.screens.find((screen) => screen.ID == props.model.processCheckerDefinition.thirdApproverScreenID)) === null || _a === void 0 ? void 0 : _a.name) || "");
        const fourthApproverScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_b = props.modelsOfModule.screens.find((screen) => screen.ID == props.model.processCheckerDefinition.fourthApproverScreenID)) === null || _b === void 0 ? void 0 : _b.name) || "");
        const validation = {
            isThirdApproverScreenValid: false,
            isFourthApproverScreenValid: false,
        };
        function handleThirdApproverScreen($event) {
            let selectedScreen = $event.target[$event.target.selectedIndex];
            props.modified({ model: true });
            console.log("thirdworked");
            processCheckerDefinition.thirdApproverScreenID = selectedScreen.id;
            validation.isThirdApproverScreenValid = !!thirdApproverScreen.value.length;
            setTabValidation();
        }
        function handleFourthApproverScreen($event) {
            let selectedScreen = $event.target[$event.target.selectedIndex];
            props.modified({ model: true });
            console.log("thirdworked");
            processCheckerDefinition.fourthApproverScreenID = selectedScreen.id;
            validation.isFourthApproverScreenValid = !!fourthApproverScreen.value.length;
            setTabValidation();
        }
        function checkTabValidation() {
            validation.isThirdApproverScreenValid = !!thirdApproverScreen.value.length;
            if (props.fourthApproveEnabled) {
                validation.isFourthApproverScreenValid = !!fourthApproverScreen.value.length;
            }
            setTabValidation();
        }
        function setTabValidation() {
            stepper.value.isTabValid = validation.isThirdApproverScreenValid;
            if (props.fourthApproveEnabled) {
                stepper.value.isTabValid = stepper.value.isTabValid && validation.isFourthApproverScreenValid;
            }
        }
        const __returned__ = { props, processCheckerDefinition, stepper, thirdApproverScreen, fourthApproverScreen, validation, handleThirdApproverScreen, handleFourthApproverScreen, checkTabValidation, setTabValidation };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'approveDefinitionThirdTab',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        var _a;
        expose();
        const props = __props;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            checkTabValidation();
        });
        const processCheckerDefinition = props.model.processCheckerDefinition;
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        const fifthApproverScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_a = props.modelsOfModule.screens.find((screen) => screen.ID == props.model.processCheckerDefinition.fifthApproverScreenID)) === null || _a === void 0 ? void 0 : _a.name) || "");
        const validation = {
            isFifthApproverScreenValid: false,
        };
        function handleFifthApproverScreen($event) {
            let selectedScreen = $event.target[$event.target.selectedIndex];
            props.modified({ model: true });
            console.log("fifthworked");
            processCheckerDefinition.fifthApproverScreenID = selectedScreen.id;
            validation.isFifthApproverScreenValid = !!fifthApproverScreen.value.length;
            setTabValidation();
        }
        function checkTabValidation() {
            validation.isFifthApproverScreenValid = !!fifthApproverScreen.value.length;
            setTabValidation();
        }
        function setTabValidation() {
            stepper.value.isTabValid = validation.isFifthApproverScreenValid;
        }
        const __returned__ = { props, processCheckerDefinition, stepper, fifthApproverScreen, validation, handleFifthApproverScreen, checkTabValidation, setTabValidation };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=script&setup=true&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=script&setup=true&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../domain/useCase/IProcessEditorUtil */ "./src/domain/useCase/IProcessEditorUtil.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'approveTab',
    props: {
        model: { type: null, required: true },
        state: { type: null, required: true },
        modelsOfModule: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const util = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_2__.IProcessEditorUtil);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            props.state.stepper.isApproveTab = true;
            util.generateProcessConfigFile(props.model, props.modelsOfModule);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
            props.state.stepper.isApproveTab = false;
        });
        const __returned__ = { util, props };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../domain/useCase/IProcessEditorUtil */ "./src/domain/useCase/IProcessEditorUtil.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'editProcessVariablesTab',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const util = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_2__.IProcessEditorUtil);
        const variableValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.model.selectedExistingBpmnFile.variables);
        const variableTypes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["STRING", "BOOLEAN", "SCREEN", "NUMBER", "HTTP METHOD"]);
        const newVariableName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const isAddButtonDisable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const restMethods = ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "CONNECT", "OPTIONS", "TRACE"];
        function handleVariableTypeChange(variable) {
            variable.value = "";
            props.modified({ model: true });
        }
        function handleScreen($event, variable) {
            const selectedScreen = $event.target[$event.target.selectedIndex];
            variable.id = selectedScreen.id;
            props.modified({ model: true });
        }
        function handleDelete(key) {
            variableValues.value = variableValues.value.filter((variable) => !(variable.key === key));
            handleNewVariableName();
        }
        function handleNewVariableName() {
            isAddButtonDisable.value = variableValues.value.some((value) => value.key === newVariableName.value);
        }
        function addNewVariable() {
            const newVariable = {
                key: newVariableName.value,
                type: "STRING",
                value: "",
                isDeletable: true,
            };
            variableValues.value.push(newVariable);
            newVariableName.value = "";
            props.modified({ model: true });
        }
        const __returned__ = { util, props, variableValues, variableTypes, newVariableName, isAddButtonDisable, restMethods, handleVariableTypeChange, handleScreen, handleDelete, handleNewVariableName, addNewVariable };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=script&setup=true&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=script&setup=true&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _validation_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validation/validation */ "./src/presentation/vue3/editors/processEditor/validation/validation.ts");
/* harmony import */ var _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../domain/objects/editors/processEditor/constants/processTemplates */ "./src/domain/objects/editors/processEditor/constants/processTemplates.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'processDefinitionTab',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true },
        enableFinishButton: { type: Function, required: true },
        isNextActive: { type: Boolean, required: true }
    },
    setup(__props, { expose }) {
        var _a;
        expose();
        const props = __props;
        const bpmnVariableCache = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.existingBpmnVariableCache);
        const createNewBpmnFile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.model.createNewBpmnFile);
        const processFileNameValidationLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const processType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.model.processType);
        const selectedExistingBpmn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_a = props.modelsOfModule.bpmns.find((bpmnFile) => bpmnFile.ID === props.model.selectedExistingBpmnFile.ID)) === null || _a === void 0 ? void 0 : _a.name);
        const processFileName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.creatingProcessFileName || selectedExistingBpmn.value || "");
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            checkTabValidation();
        });
        const validation = {
            isProcessFileNameValid: false,
            isProcessTypeValid: false,
            isExistingBpmnSelected: false,
        };
        function handleCreateNewBpmnFile() {
            props.model.createNewBpmnFile = createNewBpmnFile.value;
            props.modified({ model: true });
            setTabValidation();
        }
        function handleSelectedExistingBpmnFile($event) {
            var _a;
            let selectedBpmn = $event.target[$event.target.selectedIndex];
            bpmnVariableCache.value[props.model.selectedExistingBpmnFile.ID] = props.model.selectedExistingBpmnFile.variables;
            props.model.selectedExistingBpmnFile.ID = selectedBpmn.id;
            props.model.selectedExistingBpmnFile.variables = [];
            validation.isExistingBpmnSelected = !!((_a = selectedExistingBpmn.value) === null || _a === void 0 ? void 0 : _a.length);
            props.modified({ model: true });
            setTabValidation();
        }
        function handleProcessFileName() {
            checkProcessFileNameValidation();
            props.state.creatingProcessFileName = processFileName.value;
            validation.isProcessFileNameValid = !processFileNameValidationLabel.value.length;
            if (validation.isProcessFileNameValid) {
                props.enableFinishButton();
            }
            props.modified({ model: true });
            setTabValidation();
        }
        function checkProcessFileNameValidation() {
            processFileNameValidationLabel.value = (0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.checkInputStartsWithLetter)(processFileName.value);
            if (!processFileNameValidationLabel.value.length) {
                processFileNameValidationLabel.value = (0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.checkInputLength)(processFileName.value, 3);
            }
            if (!processFileNameValidationLabel.value.length &&
                props.modelsOfModule.bpmns.find((bpmn) => bpmn.name.replace(".bpmn", "") === processFileName.value)) {
                processFileNameValidationLabel.value = "This bpmn file name already in use.";
            }
        }
        function handleProcessType() {
            props.model.processType = processType.value;
            props.enableFinishButton();
            props.modified({ model: true });
            checkTabValidation();
        }
        function checkTabValidation() {
            var _a;
            checkProcessFileNameValidation();
            validation.isProcessFileNameValid = !processFileNameValidationLabel.value.length;
            validation.isProcessTypeValid = !!processType.value.length;
            validation.isExistingBpmnSelected = !!((_a = selectedExistingBpmn.value) === null || _a === void 0 ? void 0 : _a.length);
            setTabValidation();
        }
        function setTabValidation() {
            props.state.stepper.isTabValid =
                (createNewBpmnFile.value && validation.isProcessFileNameValid && validation.isProcessTypeValid) ||
                    (!createNewBpmnFile.value && validation.isExistingBpmnSelected);
        }
        const __returned__ = { props, bpmnVariableCache, createNewBpmnFile, processFileNameValidationLabel, processType, selectedExistingBpmn, processFileName, validation, handleCreateNewBpmnFile, handleSelectedExistingBpmnFile, handleProcessFileName, checkProcessFileNameValidation, handleProcessType, checkTabValidation, setTabValidation, processTypes: _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_2__.processTypes };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'processMakerDefinitionTab',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        var _a;
        expose();
        const props = __props;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            checkTabValidation();
        });
        const processMakerDefinition = props.model.processMakerDefinition;
        const stepper = props.state.stepper;
        const makerScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_a = props.modelsOfModule.screens.find((screen) => screen.ID == props.model.processMakerDefinition.makerScreenID)) === null || _a === void 0 ? void 0 : _a.name) || "");
        const useHierarchicalProcess = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(processMakerDefinition.useHierarchicalProcess);
        const instUnitHierarchy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(processMakerDefinition.instUnitHierarchy);
        const ignoreLevelForDiffInstUnit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(processMakerDefinition.ignoreLevelForDiffInstUnit);
        const validation = {
            isMakerScreenValid: false,
        };
        function handleMakerScreen($event) {
            let selectedScreen = $event.target[$event.target.selectedIndex];
            processMakerDefinition.makerScreenID = selectedScreen.id;
            validation.isMakerScreenValid = !!makerScreen.value.length;
            props.modified({ model: true });
            setTabValidation();
        }
        function handleHierarchy() {
            processMakerDefinition.useHierarchicalProcess = useHierarchicalProcess.value;
            if (!processMakerDefinition.useHierarchicalProcess) {
                instUnitHierarchy.value = "SAME";
                handleInstUnitHierarchy();
                ignoreLevelForDiffInstUnit.value = false;
                handleIgnoreLevelForDiffInstUnit();
            }
            props.modified({ model: true });
        }
        function handleInstUnitHierarchy() {
            processMakerDefinition.instUnitHierarchy = instUnitHierarchy.value;
            props.modified({ model: true });
        }
        function handleIgnoreLevelForDiffInstUnit() {
            processMakerDefinition.ignoreLevelForDiffInstUnit = ignoreLevelForDiffInstUnit.value;
            props.modified({ model: true });
        }
        function checkTabValidation() {
            validation.isMakerScreenValid = !!makerScreen.value.length;
            setTabValidation();
        }
        function setTabValidation() {
            stepper.isTabValid = validation.isMakerScreenValid;
        }
        const __returned__ = { props, processMakerDefinition, stepper, makerScreen, useHierarchicalProcess, instUnitHierarchy, ignoreLevelForDiffInstUnit, validation, handleMakerScreen, handleHierarchy, handleInstUnitHierarchy, handleIgnoreLevelForDiffInstUnit, checkTabValidation, setTabValidation };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=script&setup=true&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=script&setup=true&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _validation_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validation/validation */ "./src/presentation/vue3/editors/processEditor/validation/validation.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'runAfterChangeAdvisedDefinitionTab',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        var _a;
        expose();
        const props = __props;
        const restMethods = ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "CONNECT", "OPTIONS", "TRACE"];
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            checkTabValidation();
        });
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        const fieldsUpdated = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            runAfterChangeAdvisedApi: false,
        });
        const runAfterChangeAdvisedDefinition = props.model.runAfterChangeAdvisedDefinition;
        const reviewScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_a = props.modelsOfModule.screens.find((screen) => screen.ID == props.model.reviewScreenID)) === null || _a === void 0 ? void 0 : _a.name) || "");
        const isRunAfterChangeAdvisedEnable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterChangeAdvisedDefinition.isRunAfterChangeAdvisedEnable);
        const runAfterChangeAdvisedApi = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterChangeAdvisedDefinition.runAfterChangeAdvisedApi);
        const runAfterChangeAdvisedApiValidationLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const runAfterChangeAdvisedMethod = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterChangeAdvisedDefinition.runAfterChangeAdvisedMethod);
        const validation = {
            isReviewScreenValid: false,
            isRunAfterChangedAdvisedApiValid: false,
        };
        function handleReviewScreen($event) {
            let selectedScreen = $event.target[$event.target.selectedIndex];
            props.modified({ model: true });
            props.model.reviewScreenID = selectedScreen.id;
            validation.isReviewScreenValid = !!reviewScreen.value.length;
            setTabValidation();
        }
        function handleRunAfterChangeAdvised() {
            runAfterChangeAdvisedDefinition.isRunAfterChangeAdvisedEnable = isRunAfterChangeAdvisedEnable.value;
            props.modified({ model: true });
            setTabValidation();
        }
        function handleRunAfterChangeAdvisedApi() {
            if (!fieldsUpdated.value.runAfterChangeAdvisedApi) {
                fieldsUpdated.value.runAfterChangeAdvisedApi = true;
            }
            runAfterChangeAdvisedApiValidationLabel.value = (0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.checkURLPattern)(runAfterChangeAdvisedApi.value);
            runAfterChangeAdvisedDefinition.runAfterChangeAdvisedApi = runAfterChangeAdvisedApi.value;
            props.modified({ model: true });
            checkRunAfterChangeAdvisedApiValidation();
            setTabValidation();
        }
        function handleRunAfterChangeAdvisedMethod() {
            runAfterChangeAdvisedDefinition.runAfterChangeAdvisedMethod = runAfterChangeAdvisedMethod.value;
            props.modified({ model: true });
        }
        function checkReviewScreenValidation() {
            validation.isReviewScreenValid = !!reviewScreen.value.length;
        }
        function checkRunAfterChangeAdvisedApiValidation() {
            validation.isRunAfterChangedAdvisedApiValid = !runAfterChangeAdvisedApiValidationLabel.value;
        }
        function checkTabValidation() {
            checkReviewScreenValidation();
            checkRunAfterChangeAdvisedApiValidation();
            setTabValidation();
        }
        function setTabValidation() {
            stepper.value.isTabValid = validation.isReviewScreenValid && validation.isRunAfterChangedAdvisedApiValid;
        }
        const __returned__ = { restMethods, props, stepper, fieldsUpdated, runAfterChangeAdvisedDefinition, reviewScreen, isRunAfterChangeAdvisedEnable, runAfterChangeAdvisedApi, runAfterChangeAdvisedApiValidationLabel, runAfterChangeAdvisedMethod, validation, handleReviewScreen, handleRunAfterChangeAdvised, handleRunAfterChangeAdvisedApi, handleRunAfterChangeAdvisedMethod, checkReviewScreenValidation, checkRunAfterChangeAdvisedApiValidation, checkTabValidation, setTabValidation };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _validation_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validation/validation */ "./src/presentation/vue3/editors/processEditor/validation/validation.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'runAfterProcessDefinitionTab',
    props: {
        model: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const restMethods = ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "CONNECT", "OPTIONS", "TRACE"];
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            checkTabValidation();
        });
        const runAfterApprovalDefinition = props.model.runAfterApprovalDefinition;
        const runAfterRejectedDefinition = props.model.runAfterRejectedDefinition;
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        const fieldsUpdated = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            runAfterApprovalApi: false,
            runAfterRejectedApi: false,
        });
        const isRunAfterApprovalEnable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterApprovalDefinition.isRunAfterApprovalEnable);
        const runAfterApprovalApi = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterApprovalDefinition.runAfterApprovalApi);
        const runAfterApprovalApiValidationLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const runAfterApprovalMethod = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterApprovalDefinition.runAfterApprovalMethod);
        const isRunAfterRejectedEnable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterRejectedDefinition.isRunAfterRejectedEnable);
        const runAfterRejectedApi = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterRejectedDefinition.runAfterRejectedApi);
        const runAfterRejectedApiValidationLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const runAfterRejectedMethod = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(runAfterRejectedDefinition.runAfterRejectedMethod);
        const validation = {
            isRunAfterApprovalApiValid: false,
            isRunAfterRejectedApiValid: false,
        };
        function handleRunAfterApproval() {
            runAfterApprovalDefinition.isRunAfterApprovalEnable = isRunAfterApprovalEnable.value;
            props.modified({ model: true });
        }
        function handleRunAfterApprovalApi() {
            if (!fieldsUpdated.value.runAfterApprovalApi) {
                fieldsUpdated.value.runAfterApprovalApi = true;
            }
            runAfterApprovalApiValidationLabel.value = (0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.checkURLPattern)(runAfterApprovalApi.value);
            runAfterApprovalDefinition.runAfterApprovalApi = runAfterApprovalApi.value;
            props.modified({ model: true });
            checkRunAfterApprovalApiValidation();
        }
        function handleRunAfterApprovalMethod() {
            runAfterApprovalDefinition.runAfterApprovalMethod = runAfterApprovalMethod.value;
            props.modified({ model: true });
        }
        function handleRunAfterRejected() {
            runAfterRejectedDefinition.isRunAfterRejectedEnable = isRunAfterRejectedEnable.value;
            props.modified({ model: true });
        }
        function handleRunAfterRejectedApi() {
            if (!fieldsUpdated.value.runAfterRejectedApi) {
                fieldsUpdated.value.runAfterRejectedApi = true;
            }
            runAfterRejectedApiValidationLabel.value = (0,_validation_validation__WEBPACK_IMPORTED_MODULE_1__.checkURLPattern)(runAfterRejectedApi.value);
            runAfterRejectedDefinition.runAfterRejectedApi = runAfterRejectedApi.value;
            props.modified({ model: true });
            checkRunAfterRejectedApiValidation();
        }
        function handleRunAfterRejectedMethod() {
            runAfterRejectedDefinition.runAfterRejectedMethod = runAfterRejectedMethod.value;
            props.modified({ model: true });
        }
        function checkRunAfterApprovalApiValidation() {
            validation.isRunAfterApprovalApiValid = !runAfterApprovalApiValidationLabel.value;
            setTabValidation();
        }
        function checkRunAfterRejectedApiValidation() {
            validation.isRunAfterRejectedApiValid = !runAfterRejectedApiValidationLabel.value;
            setTabValidation();
        }
        function checkTabValidation() {
            checkRunAfterApprovalApiValidation();
            checkRunAfterRejectedApiValidation();
        }
        function setTabValidation() {
            stepper.value.isTabValid = validation.isRunAfterApprovalApiValid && validation.isRunAfterRejectedApiValid;
        }
        const __returned__ = { restMethods, props, runAfterApprovalDefinition, runAfterRejectedDefinition, stepper, fieldsUpdated, isRunAfterApprovalEnable, runAfterApprovalApi, runAfterApprovalApiValidationLabel, runAfterApprovalMethod, isRunAfterRejectedEnable, runAfterRejectedApi, runAfterRejectedApiValidationLabel, runAfterRejectedMethod, validation, handleRunAfterApproval, handleRunAfterApprovalApi, handleRunAfterApprovalMethod, handleRunAfterRejected, handleRunAfterRejectedApi, handleRunAfterRejectedMethod, checkRunAfterApprovalApiValidation, checkRunAfterRejectedApiValidation, checkTabValidation, setTabValidation };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/processMakerDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue");
/* harmony import */ var _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/approveDefinitionFirstTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue");
/* harmony import */ var _tabs_approveDefinitionSecondTab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/approveDefinitionSecondTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue");
/* harmony import */ var _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/runAfterProcessDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue");
/* harmony import */ var _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/runAfterChangeAdvisedDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue");
/* harmony import */ var _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/approveTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'tripleApprovalWizard',
    props: {
        model: { type: null, required: true },
        modelsOfModule: { type: null, required: true },
        state: { type: null, required: true },
        modified: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const stepper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.state.stepper);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            stepper.value.totalStep = 6;
        });
        const __returned__ = { props, stepper, ProcessMakerDefinitionTab: _tabs_processMakerDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_1__["default"], ApproveDefinitionFirstTab: _tabs_approveDefinitionFirstTab_vue__WEBPACK_IMPORTED_MODULE_2__["default"], ApproveDefinitionSecondTab: _tabs_approveDefinitionSecondTab_vue__WEBPACK_IMPORTED_MODULE_3__["default"], RunAfterProcessDefinitionTab: _tabs_runAfterProcessDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_4__["default"], RunAfterChangeAdvisedDefinitionTab: _tabs_runAfterChangeAdvisedDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_5__["default"], ApproveTab: _tabs_approveTab_vue__WEBPACK_IMPORTED_MODULE_6__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../domain/objects/editors/processEditor/constants/processTemplates */ "./src/domain/objects/editors/processEditor/constants/processTemplates.ts");
/* harmony import */ var _approvalWizards_tabs_processDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approvalWizards/tabs/processDefinitionTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue");
/* harmony import */ var _approvalWizards_tabs_editProcessVariablesTab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approvalWizards/tabs/editProcessVariablesTab.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue");
/* harmony import */ var _approvalWizards_singleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approvalWizards/singleApprovalWizard.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue");
/* harmony import */ var _approvalWizards_doubleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approvalWizards/doubleApprovalWizard.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue");
/* harmony import */ var _approvalWizards_tripleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approvalWizards/tripleApprovalWizard.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue");
/* harmony import */ var _approvalWizards_quadrupleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./approvalWizards/quadrupleApprovalWizard.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue");
/* harmony import */ var _approvalWizards_quintupleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./approvalWizards/quintupleApprovalWizard.vue */ "./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_useCase_ICreateModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../domain/useCase/ICreateModel */ "./src/domain/useCase/ICreateModel.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _stechquick_algae_lib_helpers_cryptoHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @stechquick/algae/lib/helpers/cryptoHelper */ "./node_modules/@stechquick/algae/lib/helpers/cryptoHelper.js");
/* harmony import */ var _domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../domain/useCase/IProcessEditorUtil */ "./src/domain/useCase/IProcessEditorUtil.ts");
/* harmony import */ var _stechquick_plateau_process_designer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @stechquick/plateau-process-designer */ "./node_modules/@stechquick/plateau-process-designer/dist/PlateauBpmnModeler.js");
/* harmony import */ var _stechquick_plateau_process_designer__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_stechquick_plateau_process_designer__WEBPACK_IMPORTED_MODULE_15__);

















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'processEditor',
    props: {
        functions: { type: null, required: true },
        callbacks: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_9__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_10__.IUseCaseExecutor);
        const studio = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_9__.container.resolve(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_12__.IStudio);
        const processEditorUtil = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_9__.container.resolve(_domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_14__.IProcessEditorUtil);
        const processDefinitionTabKey = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const disableFinishButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isNextActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
        const processModel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(processEditorUtil.getEmptyProcessWizardModel("_"));
        const processEditorState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(processEditorUtil.getEmptyProcessEditorState());
        const currentModule = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const modelsOfModule = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            screens: [],
            bpmns: [],
        });
        props.functions.getModel = async () => {
            return { model: processModel.value, state: processEditorState.value };
        };
        props.functions.setModel = async (model, module, state) => {
            currentModule.value = module;
            modelsOfModule.value = processEditorUtil.getModelsOfModule(module);
            processDefinitionTabKey.value = _stechquick_algae_lib_helpers_cryptoHelper__WEBPACK_IMPORTED_MODULE_13__.CryptoHelper.CreateGuid();
            processModel.value = model;
            processEditorState.value = state;
        };
        async function handleNext() {
            const stepper = processEditorState.value.stepper;
            const selectedExistingBpmnFile = processModel.value.selectedExistingBpmnFile;
            if (stepper.isTabValid) {
                if (!processModel.value.createNewBpmnFile) {
                    isNextActive.value = false;
                    const existingBpmnVariableCache = processEditorState.value.existingBpmnVariableCache;
                    const bpmnVariableFromCache = existingBpmnVariableCache[processModel.value.selectedExistingBpmnFile.ID];
                    if (bpmnVariableFromCache) {
                        processModel.value.selectedExistingBpmnFile.variables = bpmnVariableFromCache;
                    }
                    const bpmnModel = await props.callbacks.getBpmnModel(selectedExistingBpmnFile.ID);
                    const extractedProcessVariables = await (0,_stechquick_plateau_process_designer__WEBPACK_IMPORTED_MODULE_15__.extractProcessVariables)(bpmnModel);
                    const editableVariables = processEditorUtil
                        .extractEditableProcessVariables(extractedProcessVariables, [
                        "initiator",
                        "formJson",
                        "userId",
                        "tenantId",
                        "isChange",
                        "refreshAfterSendToApproval",
                    ])
                        .concat(_domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_1__.extraProcessConfigVariables);
                    editableVariables.forEach((editableVariable) => {
                        if (!processModel.value.selectedExistingBpmnFile.variables.some((variable) => variable.key === editableVariable.source)) {
                            processModel.value.selectedExistingBpmnFile.variables.push({
                                key: editableVariable.source,
                                type: "STRING",
                                value: processEditorUtil.handleProcessVariables(processModel.value, editableVariable.source, modelsOfModule.value, "process_name"),
                                isDeletable: false,
                            });
                        }
                    });
                    processModel.value.selectedExistingBpmnFile.variables = processModel.value.selectedExistingBpmnFile.variables.filter((variable) => editableVariables.some((editableVariable) => editableVariable.source == variable.key));
                    isNextActive.value = true;
                }
                stepper.currentStep++;
                stepper.isTabValid = false;
                props.callbacks.modified({ state: true });
            }
        }
        function handleBack() {
            processEditorState.value.stepper.currentStep--;
            processEditorState.value.stepper.isTabValid = false;
            props.callbacks.modified({ state: true });
        }
        function handleFinish() {
            const bpmnFile = processEditorUtil.generateBpmnFile(processModel.value, processEditorState.value.creatingProcessFileName);
            executor.execute(async () => {
                const createdItem = await executor.executeUseCase(_domain_useCase_ICreateModel__WEBPACK_IMPORTED_MODULE_11__.ICreateModel, {
                    name: processEditorState.value.creatingProcessFileName,
                    parentObjectId: currentModule.value.ID,
                    modelType: "bpmn",
                    modelBody: [{ key: "bpmn", model: bpmnFile }],
                    modelAdditionals: {},
                });
                processModel.value.createNewBpmnFile = false;
                processModel.value.selectedExistingBpmnFile.ID = createdItem.ID;
                modelsOfModule.value.bpmns.push(createdItem);
                processEditorState.value.stepper.currentStep = 0;
                disableFinishButton.value = true;
                studio.openItem(createdItem, { fromHistory: false, noFocus: true });
            }, { loading: true });
            props.callbacks.modified({ state: true });
        }
        const __returned__ = { executor, studio, processEditorUtil, props, processDefinitionTabKey, disableFinishButton, isNextActive, processModel, processEditorState, currentModule, modelsOfModule, handleNext, handleBack, handleFinish, SINGLE_APPROVAL: _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_1__.SINGLE_APPROVAL, DOUBLE_APPROVAL: _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_1__.DOUBLE_APPROVAL, TRIPLE_APPROVAL: _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_1__.TRIPLE_APPROVAL, QUADRUPLE_APPROVAL: _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_1__.QUADRUPLE_APPROVAL, QUINTUPLE_APPROVAL: _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_1__.QUINTUPLE_APPROVAL, ProcessDefinitionTab: _approvalWizards_tabs_processDefinitionTab_vue__WEBPACK_IMPORTED_MODULE_2__["default"], EditProcessVariablesTab: _approvalWizards_tabs_editProcessVariablesTab_vue__WEBPACK_IMPORTED_MODULE_3__["default"], SingleApprovalWizard: _approvalWizards_singleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_4__["default"], DoubleApprovalWizard: _approvalWizards_doubleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_5__["default"], TripleApprovalWizard: _approvalWizards_tripleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_6__["default"], QuadrupleApprovalWizard: _approvalWizards_quadrupleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_7__["default"], QuintupleApprovalWizard: _approvalWizards_quintupleApprovalWizard_vue__WEBPACK_IMPORTED_MODULE_8__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=template&id=3d4abeaa&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=template&id=3d4abeaa&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Double Approval Process Wizard", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Step " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_a = $setup.stepper) === null || _a === void 0 ? void 0 : _a.currentStep) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_b = $setup.stepper) === null || _b === void 0 ? void 0 : _b.totalStep), 1 /* TEXT */),
        (((_c = $setup.stepper) === null || _c === void 0 ? void 0 : _c.currentStep) === 1)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProcessMakerDefinitionTab"], {
                key: 0,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_d = $setup.stepper) === null || _d === void 0 ? void 0 : _d.currentStep) === 2)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionFirstTab"], {
                key: 1,
                model: $setup.props.model,
                state: $setup.props.state,
                "models-of-module": $setup.props.modelsOfModule,
                "second-approve-enabled": true,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "state", "models-of-module", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_e = $setup.stepper) === null || _e === void 0 ? void 0 : _e.currentStep) === 3)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterProcessDefinitionTab"], {
                key: 2,
                model: $setup.props.model,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_f = $setup.stepper) === null || _f === void 0 ? void 0 : _f.currentStep) === 4)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterChangeAdvisedDefinitionTab"], {
                key: 3,
                model: $setup.props.model,
                state: $setup.props.state,
                "models-of-module": $setup.props.modelsOfModule,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "state", "models-of-module", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_g = $setup.stepper) === null || _g === void 0 ? void 0 : _g.currentStep) === 5)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveTab"], {
                key: 4,
                model: $setup.props.model,
                state: $setup.props.state,
                "models-of-module": $setup.props.modelsOfModule
            }, null, 8 /* PROPS */, ["model", "state", "models-of-module"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=template&id=7d069d11&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=template&id=7d069d11&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Quadruple Approval Process Wizard", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Step " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_a = $setup.stepper) === null || _a === void 0 ? void 0 : _a.currentStep) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_b = $setup.stepper) === null || _b === void 0 ? void 0 : _b.totalStep), 1 /* TEXT */),
        (((_c = $setup.stepper) === null || _c === void 0 ? void 0 : _c.currentStep) === 1)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProcessMakerDefinitionTab"], {
                key: 0,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_d = $setup.stepper) === null || _d === void 0 ? void 0 : _d.currentStep) === 2)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionFirstTab"], {
                key: 1,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified,
                "second-approve-enabled": true
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_e = $setup.stepper) === null || _e === void 0 ? void 0 : _e.currentStep) === 3)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionSecondTab"], {
                key: 2,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified,
                "fourth-approve-enabled": true
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_f = $setup.stepper) === null || _f === void 0 ? void 0 : _f.currentStep) === 4)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterProcessDefinitionTab"], {
                key: 3,
                model: $setup.props.model,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_g = $setup.stepper) === null || _g === void 0 ? void 0 : _g.currentStep) === 5)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterChangeAdvisedDefinitionTab"], {
                key: 4,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_h = $setup.stepper) === null || _h === void 0 ? void 0 : _h.currentStep) === 6)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveTab"], {
                key: 5,
                model: $setup.props.model,
                state: $setup.props.state,
                "models-of-module": $setup.props.modelsOfModule
            }, null, 8 /* PROPS */, ["model", "state", "models-of-module"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=template&id=0afbcc51&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=template&id=0afbcc51&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Quintuple Approval Process Wizard", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Step " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_a = $setup.stepper) === null || _a === void 0 ? void 0 : _a.currentStep) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_b = $setup.stepper) === null || _b === void 0 ? void 0 : _b.totalStep), 1 /* TEXT */),
        (((_c = $setup.stepper) === null || _c === void 0 ? void 0 : _c.currentStep) === 1)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProcessMakerDefinitionTab"], {
                key: 0,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_d = $setup.stepper) === null || _d === void 0 ? void 0 : _d.currentStep) === 2)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionFirstTab"], {
                key: 1,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                "second-approve-enabled": true,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_e = $setup.stepper) === null || _e === void 0 ? void 0 : _e.currentStep) === 3)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionSecondTab"], {
                key: 2,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                "fourth-approve-enabled": true,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_f = $setup.stepper) === null || _f === void 0 ? void 0 : _f.currentStep) === 4)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionThirdTab"], {
                key: 3,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_g = $setup.stepper) === null || _g === void 0 ? void 0 : _g.currentStep) === 5)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterProcessDefinitionTab"], {
                key: 4,
                model: $setup.props.model,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_h = $setup.stepper) === null || _h === void 0 ? void 0 : _h.currentStep) === 6)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterChangeAdvisedDefinitionTab"], {
                key: 5,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_j = $setup.stepper) === null || _j === void 0 ? void 0 : _j.currentStep) === 7)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveTab"], {
                key: 6,
                model: $setup.props.model,
                state: $setup.props.state,
                "models-of-module": $setup.props.modelsOfModule
            }, null, 8 /* PROPS */, ["model", "state", "models-of-module"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=template&id=799d1962&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=template&id=799d1962&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Single Approval Process Wizard", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Step " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_a = $setup.stepper) === null || _a === void 0 ? void 0 : _a.currentStep) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_b = $setup.stepper) === null || _b === void 0 ? void 0 : _b.totalStep), 1 /* TEXT */),
        (((_c = $setup.stepper) === null || _c === void 0 ? void 0 : _c.currentStep) === 1)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProcessMakerDefinitionTab"], {
                key: 0,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_d = $setup.stepper) === null || _d === void 0 ? void 0 : _d.currentStep) === 2)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionFirstTab"], {
                key: 1,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                "second-approve-enabled": false,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_e = $setup.stepper) === null || _e === void 0 ? void 0 : _e.currentStep) === 3)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterProcessDefinitionTab"], {
                key: 2,
                model: $setup.props.model,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_f = $setup.stepper) === null || _f === void 0 ? void 0 : _f.currentStep) === 4)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterChangeAdvisedDefinitionTab"], {
                key: 3,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_g = $setup.stepper) === null || _g === void 0 ? void 0 : _g.currentStep) === 5)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveTab"], {
                key: 4,
                model: $setup.props.model,
                state: $setup.props.state,
                "models-of-module": $setup.props.modelsOfModule
            }, null, 8 /* PROPS */, ["model", "state", "models-of-module"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=template&id=0684fd80&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=template&id=0684fd80&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "first-approver-screen" }, "Select First Approver Screen*", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select First Approver Screen", -1 /* HOISTED */);
const _hoisted_4 = ["id"];
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_6 = { key: 0 };
const _hoisted_7 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "second-approver-screen" }, "Select Second Approver Screen*", -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Second Approver Screen", -1 /* HOISTED */);
const _hoisted_10 = ["id"];
const _hoisted_11 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            name: "first-approver-screen",
            id: "first-approver-screen",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.firstApproverScreen) = $event)),
            onChange: $setup.handleFirstApproverScreen
        }, [
            _hoisted_3,
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.screens, (screen) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                    id: screen.ID
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(screen.name), 9 /* TEXT, PROPS */, _hoisted_4));
            }), 256 /* UNKEYED_FRAGMENT */))
        ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.firstApproverScreen]
        ]),
        _hoisted_5,
        ($setup.props.secondApproveEnabled)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [
                _hoisted_7,
                _hoisted_8,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                    name: "second-approver-screen",
                    id: "second-approver-screen",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.secondApproverScreen) = $event)),
                    onChange: $setup.handleSecondApproverScreen
                }, [
                    _hoisted_9,
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.screens, (screen) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                            id: screen.ID
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(screen.name), 9 /* TEXT, PROPS */, _hoisted_10));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.secondApproverScreen]
                ]),
                _hoisted_11
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=template&id=d984c354&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=template&id=d984c354&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "third-approver-screen" }, "Select Third Approver Screen*", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Third Approver Screen", -1 /* HOISTED */);
const _hoisted_4 = ["id"];
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_6 = { key: 0 };
const _hoisted_7 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "fourth-approver-screen" }, "Select Fourth Approver Screen*", -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Fourth Approver Screen", -1 /* HOISTED */);
const _hoisted_10 = ["id"];
const _hoisted_11 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            name: "third-approver-screen",
            id: "third-approver-screen",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.thirdApproverScreen) = $event)),
            onChange: $setup.handleThirdApproverScreen
        }, [
            _hoisted_3,
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.screens, (screen) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                    id: screen.ID
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(screen.name), 9 /* TEXT, PROPS */, _hoisted_4));
            }), 256 /* UNKEYED_FRAGMENT */))
        ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.thirdApproverScreen]
        ]),
        _hoisted_5,
        ($setup.props.fourthApproveEnabled)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [
                _hoisted_7,
                _hoisted_8,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                    name: "fourth-approver-screen",
                    id: "fourth-approver-screen",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.fourthApproverScreen) = $event)),
                    onChange: $setup.handleFourthApproverScreen
                }, [
                    _hoisted_9,
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.screens, (screen) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                            id: screen.ID
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(screen.name), 9 /* TEXT, PROPS */, _hoisted_10));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.fourthApproverScreen]
                ]),
                _hoisted_11
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=template&id=346b1ee9&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=template&id=346b1ee9&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "fifth-approver-screen" }, "Select Fifth Approver Screen*", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Fifth Approver Screen", -1 /* HOISTED */);
const _hoisted_4 = ["id"];
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            name: "fifth-approver-screen",
            id: "fifth-approver-screen",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.fifthApproverScreen) = $event)),
            onChange: $setup.handleFifthApproverScreen
        }, [
            _hoisted_3,
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.screens, (screen) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                    id: screen.ID
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(screen.name), 9 /* TEXT, PROPS */, _hoisted_4));
            }), 256 /* UNKEYED_FRAGMENT */))
        ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.fifthApproverScreen]
        ]),
        _hoisted_5
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=template&id=4e729bfd&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=template&id=4e729bfd&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" When you click finish button, ");
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" will be created. ");
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Do you want to continue?", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [
            _hoisted_1,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.state.creatingProcessFileName) + ".bpmn", 1 /* TEXT */),
            _hoisted_2
        ]),
        _hoisted_3
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=template&id=1f82d01e&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=template&id=1f82d01e&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Edit Process Variables", -1 /* HOISTED */);
const _hoisted_2 = ["for"];
const _hoisted_3 = ["onUpdate:modelValue", "onChange"];
const _hoisted_4 = ["selected"];
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_6 = ["type", "id", "name", "onUpdate:modelValue"];
const _hoisted_7 = ["onUpdate:modelValue"];
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", { selected: "" }, "false", -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, "true", -1 /* HOISTED */);
const _hoisted_10 = [
    _hoisted_8,
    _hoisted_9
];
const _hoisted_11 = ["onUpdate:modelValue", "onChange"];
const _hoisted_12 = ["id"];
const _hoisted_13 = ["onUpdate:modelValue"];
const _hoisted_14 = ["onClick"];
const _hoisted_15 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);
const _hoisted_16 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.variableValues, (variable) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
                    for: variable.key
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(variable.key), 9 /* TEXT, PROPS */, _hoisted_2),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                    "onUpdate:modelValue": ($event) => ((variable.type) = $event),
                    onChange: ($event) => ($setup.handleVariableTypeChange(variable))
                }, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.variableTypes, (variableType) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                            selected: variable.type === variableType
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(variableType), 9 /* TEXT, PROPS */, _hoisted_4));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, variable.type]
                ]),
                _hoisted_5,
                (variable.type === 'STRING' || variable.type === 'NUMBER')
                    ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                        key: 0,
                        type: variable.type === 'STRING' ? 'text' : 'number',
                        id: variable.key,
                        name: variable.key,
                        "onUpdate:modelValue": ($event) => ((variable.value) = $event),
                        onInput: _cache[0] || (_cache[0] = ($event) => ($setup.props.modified({ model: true })))
                    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6)), [
                        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, variable.value]
                    ])
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (variable.type === 'BOOLEAN')
                    ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
                        key: 1,
                        "onUpdate:modelValue": ($event) => ((variable.value) = $event),
                        onChange: _cache[1] || (_cache[1] = ($event) => ($setup.props.modified({ model: true })))
                    }, _hoisted_10, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_7)), [
                        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, variable.value]
                    ])
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (variable.type === 'SCREEN')
                    ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
                        key: 2,
                        "onUpdate:modelValue": ($event) => ((variable.value) = $event),
                        onChange: ($event) => ($setup.handleScreen($event, variable))
                    }, [
                        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.screens, (screen) => {
                            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                                id: screen.ID
                            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(screen.name), 9 /* TEXT, PROPS */, _hoisted_12));
                        }), 256 /* UNKEYED_FRAGMENT */))
                    ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_11)), [
                        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, variable.value]
                    ])
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (variable.type === 'HTTP METHOD')
                    ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
                        key: 3,
                        "onUpdate:modelValue": ($event) => ((variable.value) = $event),
                        onChange: _cache[2] || (_cache[2] = ($event) => ($setup.props.modified({ model: true })))
                    }, [
                        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.restMethods, (restMethod) => {
                            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(restMethod), 1 /* TEXT */);
                        }), 64 /* STABLE_FRAGMENT */))
                    ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_13)), [
                        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, variable.value]
                    ])
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (variable.isDeletable)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                        key: 4,
                        onClick: ($event) => ($setup.handleDelete(variable.key))
                    }, "Delete", 8 /* PROPS */, _hoisted_14))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]));
        }), 256 /* UNKEYED_FRAGMENT */)),
        _hoisted_15,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (($setup.newVariableName) = $event)),
            onInput: $setup.handleNewVariableName
        }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.newVariableName]
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: $setup.addNewVariable,
            disabled: $setup.isAddButtonDisable
        }, "Add New Variable", 8 /* PROPS */, _hoisted_16),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: _cache[4] || (_cache[4] = ($event) => ($setup.util.generateProcessConfigFile($setup.props.model, $setup.props.modelsOfModule)))
        }, "ProcessConfigPrint")
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=template&id=65221448&ts=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=template&id=65221448&ts=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "use-existing-bpmn" }, " Create new BPMN file. ", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_3 = { key: 0 };
const _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_5 = ["disabled"];
const _hoisted_6 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Existing Bpmn", -1 /* HOISTED */);
const _hoisted_7 = ["selected", "id"];
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_9 = { key: 1 };
const _hoisted_10 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "process-file-name" }, "Process File Name ", -1 /* HOISTED */);
const _hoisted_12 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_13 = ["disabled"];
const _hoisted_14 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".bpmn ");
const _hoisted_15 = { key: 0 };
const _hoisted_16 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_17 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "processType" }, "Select Process Type", -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_19 = ["disabled"];
const _hoisted_20 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Process Type", -1 /* HOISTED */);
const _hoisted_21 = ["value"];
const _hoisted_22 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_23 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "checkbox",
            id: "use-existing-bpmn",
            name: "use-existing-bpmn",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.createNewBpmnFile) = $event)),
            onChange: $setup.handleCreateNewBpmnFile
        }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.createNewBpmnFile]
        ]),
        _hoisted_1,
        _hoisted_2,
        (!$setup.createNewBpmnFile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
                _hoisted_4,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                    name: "existing-bpmns",
                    id: "existing-bpmns",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.selectedExistingBpmn) = $event)),
                    onChange: $setup.handleSelectedExistingBpmnFile,
                    disabled: !$props.isNextActive
                }, [
                    _hoisted_6,
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.bpmns, (bpmn) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                            selected: bpmn.ID === $setup.props.model.selectedExistingBpmnFile.ID,
                            id: bpmn.ID
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(bpmn.name), 9 /* TEXT, PROPS */, _hoisted_7));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedExistingBpmn]
                ]),
                _hoisted_8
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.createNewBpmnFile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [
                _hoisted_10,
                _hoisted_11,
                _hoisted_12,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    type: "text",
                    id: "process-file-name",
                    name: "process-file-name",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (($setup.processFileName) = $event)),
                    onInput: $setup.handleProcessFileName,
                    disabled: !$setup.createNewBpmnFile
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_13), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.processFileName]
                ]),
                _hoisted_14,
                ($setup.processFileNameValidationLabel && $setup.createNewBpmnFile)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.processFileNameValidationLabel), 1 /* TEXT */))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                _hoisted_16,
                _hoisted_17,
                _hoisted_18,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                    name: "processType",
                    id: "processType",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (($setup.processType) = $event)),
                    onChange: $setup.handleProcessType,
                    disabled: !$setup.createNewBpmnFile
                }, [
                    _hoisted_20,
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.processTypes, (processType) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                            value: processType.value
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(processType.name), 9 /* TEXT, PROPS */, _hoisted_21));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_19), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.processType]
                ]),
                _hoisted_22
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        _hoisted_23
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=template&id=8600d370&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=template&id=8600d370&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "send-to-approve-screen" }, "Select Send to Approve Screen*", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Send to Approve Screen", -1 /* HOISTED */);
const _hoisted_4 = ["id"];
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "hierarchical-process" }, "Hierarchical Process", -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Who can Approve/Reject the Process?", -1 /* HOISTED */);
const _hoisted_9 = ["disabled"];
const _hoisted_10 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "inst-unit-hiearachy-same" }, "Only One Upper Role (SAME)", -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_12 = ["disabled"];
const _hoisted_13 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "inst-unit-hiearachy-parent" }, "All Upper Roles (PARENT) ", -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "ignore-level-for-fiff-inst-unit" }, "Ignore Level for Different Institution Unit", -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_17 = ["disabled"];
const _hoisted_18 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            name: "send-to-approve-screen",
            id: "send-to-approve-screen",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.makerScreen) = $event)),
            onChange: $setup.handleMakerScreen,
            required: ""
        }, [
            _hoisted_3,
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.screens, (screen) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                    id: screen.ID
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(screen.name), 9 /* TEXT, PROPS */, _hoisted_4));
            }), 256 /* UNKEYED_FRAGMENT */))
        ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.makerScreen]
        ]),
        _hoisted_5,
        _hoisted_6,
        _hoisted_7,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "checkbox",
            id: "hierarchical-process",
            name: "hierarchical-process",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.useHierarchicalProcess) = $event)),
            onChange: $setup.handleHierarchy
        }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.useHierarchicalProcess]
        ]),
        _hoisted_8,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "radio",
            id: "inst-unit-hiearachy-same",
            name: "who-can-reject-approve-the-process",
            value: "SAME",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (($setup.instUnitHierarchy) = $event)),
            disabled: !$setup.useHierarchicalProcess,
            onChange: $setup.handleInstUnitHierarchy
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_9), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.instUnitHierarchy]
        ]),
        _hoisted_10,
        _hoisted_11,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "radio",
            id: "inst-unit-hiearachy-parent",
            name: "who-can-reject-approve-the-process",
            value: "PARENT",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (($setup.instUnitHierarchy) = $event)),
            disabled: !$setup.useHierarchicalProcess,
            onChange: $setup.handleInstUnitHierarchy
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_12), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.instUnitHierarchy]
        ]),
        _hoisted_13,
        _hoisted_14,
        _hoisted_15,
        _hoisted_16,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "checkbox",
            id: "ignore-level-for-fiff-inst-unit",
            name: "ignore-level-for-fiff-inst-unit",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (($setup.ignoreLevelForDiffInstUnit) = $event)),
            disabled: !$setup.useHierarchicalProcess,
            onChange: $setup.handleIgnoreLevelForDiffInstUnit
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_17), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.ignoreLevelForDiffInstUnit]
        ]),
        _hoisted_18
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=template&id=42ef135c&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=template&id=42ef135c&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-change-advised" }, " Select Review Screen (If you do not want to use, you may choose process maker screen) ", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Review Screen", -1 /* HOISTED */);
const _hoisted_4 = ["id"];
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-change-advised" }, " Do you want to make service call after change advised? ", -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-change-advised-api" }, " runAfterChangeAdvisedApi (Service path to call after change advised) ", -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_12 = ["disabled"];
const _hoisted_13 = { key: 0 };
const _hoisted_14 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-approval-method" }, " runAfterApprovalMethod (Request method GET, POST, PUT, etc.) ", -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_17 = ["disabled"];
const _hoisted_18 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            name: "review-screen",
            id: "review-screen",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.reviewScreen) = $event)),
            onChange: $setup.handleReviewScreen
        }, [
            _hoisted_3,
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.modelsOfModule.screens, (screen) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                    id: screen.ID
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(screen.name), 9 /* TEXT, PROPS */, _hoisted_4));
            }), 256 /* UNKEYED_FRAGMENT */))
        ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.reviewScreen]
        ]),
        _hoisted_5,
        _hoisted_6,
        _hoisted_7,
        _hoisted_8,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "checkbox",
            id: "run-after-change-advised",
            name: "hierarchical-process",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.isRunAfterChangeAdvisedEnable) = $event)),
            onChange: $setup.handleRunAfterChangeAdvised
        }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.isRunAfterChangeAdvisedEnable]
        ]),
        _hoisted_9,
        _hoisted_10,
        _hoisted_11,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            id: "run-after-change-advised-api",
            name: "run-after-change-advised-api",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (($setup.runAfterChangeAdvisedApi) = $event)),
            disabled: !$setup.isRunAfterChangeAdvisedEnable,
            onInput: $setup.handleRunAfterChangeAdvisedApi
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_12), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.runAfterChangeAdvisedApi]
        ]),
        ($setup.fieldsUpdated.runAfterChangeAdvisedApi && $setup.runAfterChangeAdvisedApiValidationLabel)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.runAfterChangeAdvisedApiValidationLabel), 1 /* TEXT */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        _hoisted_14,
        _hoisted_15,
        _hoisted_16,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            name: "run-after-change-advised-method",
            id: "run-after-change-advised-method",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (($setup.runAfterChangeAdvisedMethod) = $event)),
            disabled: !$setup.isRunAfterChangeAdvisedEnable,
            onChange: $setup.handleRunAfterChangeAdvisedMethod
        }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.restMethods, (restMethod) => {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(restMethod), 1 /* TEXT */);
            }), 64 /* STABLE_FRAGMENT */))
        ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_17), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.runAfterChangeAdvisedMethod]
        ]),
        _hoisted_18
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=template&id=2e982279&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=template&id=2e982279&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-approval" }, " Do you want to make service call after all approvals done? ", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-approval-api" }, " runAfterApprovalApi (Service path to call after all approvals done) ", -1 /* HOISTED */);
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { key: 0 };
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-approval-method" }, " runAfterApprovalMethod (Request method GET, POST, PUT, etc.) ", -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_11 = ["disabled"];
const _hoisted_12 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-rejected" }, " Do you want to make service call after process rejected? ", -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-rejected-api" }, " runAfterRejectedApi (Service path to call after process rejected) ", -1 /* HOISTED */);
const _hoisted_17 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_18 = ["disabled"];
const _hoisted_19 = { key: 1 };
const _hoisted_20 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_21 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "run-after-rejected-method" }, " runAfterRejectedMethod (Request method GET, POST, PUT, etc.) ", -1 /* HOISTED */);
const _hoisted_22 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_23 = ["disabled"];
const _hoisted_24 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "checkbox",
            id: "run-after-approval",
            name: "hierarchical-process",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.isRunAfterApprovalEnable) = $event)),
            onChange: $setup.handleRunAfterApproval
        }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.isRunAfterApprovalEnable]
        ]),
        _hoisted_3,
        _hoisted_4,
        _hoisted_5,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            id: "run-after-approval-api",
            name: "run-after-approval-api",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.runAfterApprovalApi) = $event)),
            disabled: !$setup.isRunAfterApprovalEnable,
            onInput: $setup.handleRunAfterApprovalApi
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.runAfterApprovalApi]
        ]),
        ($setup.fieldsUpdated.runAfterApprovalApi && $setup.runAfterApprovalApiValidationLabel)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.runAfterApprovalApiValidationLabel), 1 /* TEXT */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        _hoisted_8,
        _hoisted_9,
        _hoisted_10,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            name: "run-after-approval-method",
            id: "run-after-approval-method",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (($setup.runAfterApprovalMethod) = $event)),
            disabled: !$setup.isRunAfterApprovalEnable,
            onChange: $setup.handleRunAfterApprovalMethod
        }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.restMethods, (restMethod) => {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(restMethod), 1 /* TEXT */);
            }), 64 /* STABLE_FRAGMENT */))
        ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_11), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.runAfterApprovalMethod]
        ]),
        _hoisted_12,
        _hoisted_13,
        _hoisted_14,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "checkbox",
            id: "run-after-rejected",
            name: "hierarchical-process",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (($setup.isRunAfterRejectedEnable) = $event)),
            onChange: $setup.handleRunAfterRejected
        }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.isRunAfterRejectedEnable]
        ]),
        _hoisted_15,
        _hoisted_16,
        _hoisted_17,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            id: "run-after-rejected-api",
            name: "run-after-rejected-api",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (($setup.runAfterRejectedApi) = $event)),
            disabled: !$setup.isRunAfterRejectedEnable,
            onInput: $setup.handleRunAfterRejectedApi
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_18), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.runAfterRejectedApi]
        ]),
        ($setup.fieldsUpdated.runAfterRejectedApi && $setup.runAfterRejectedApiValidationLabel)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.runAfterRejectedApiValidationLabel), 1 /* TEXT */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        _hoisted_20,
        _hoisted_21,
        _hoisted_22,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            name: "run-after-rejected-method",
            id: "run-after-rejected-method",
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => (($setup.runAfterRejectedMethod) = $event)),
            disabled: !$setup.isRunAfterRejectedEnable,
            onChange: $setup.handleRunAfterRejectedMethod
        }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.restMethods, (restMethod) => {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(restMethod), 1 /* TEXT */);
            }), 64 /* STABLE_FRAGMENT */))
        ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_23), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.runAfterRejectedMethod]
        ]),
        _hoisted_24
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=template&id=3bbdf010&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=template&id=3bbdf010&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Triple Approval Process Wizard", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Step " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_a = $setup.stepper) === null || _a === void 0 ? void 0 : _a.currentStep) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_b = $setup.stepper) === null || _b === void 0 ? void 0 : _b.totalStep), 1 /* TEXT */),
        (((_c = $setup.stepper) === null || _c === void 0 ? void 0 : _c.currentStep) === 1)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProcessMakerDefinitionTab"], {
                key: 0,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_d = $setup.stepper) === null || _d === void 0 ? void 0 : _d.currentStep) === 2)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionFirstTab"], {
                key: 1,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                "second-approve-enabled": true,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_e = $setup.stepper) === null || _e === void 0 ? void 0 : _e.currentStep) === 3)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveDefinitionSecondTab"], {
                key: 2,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                "fourth-approve-enabled": false,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_f = $setup.stepper) === null || _f === void 0 ? void 0 : _f.currentStep) === 4)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterProcessDefinitionTab"], {
                key: 3,
                model: $setup.props.model,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_g = $setup.stepper) === null || _g === void 0 ? void 0 : _g.currentStep) === 5)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RunAfterChangeAdvisedDefinitionTab"], {
                key: 4,
                model: $setup.props.model,
                "models-of-module": $setup.props.modelsOfModule,
                state: $setup.props.state,
                modified: $setup.props.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_h = $setup.stepper) === null || _h === void 0 ? void 0 : _h.currentStep) === 6)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ApproveTab"], {
                key: 5,
                model: $setup.props.model,
                state: $setup.props.state,
                "models-of-module": $setup.props.modelsOfModule
            }, null, 8 /* PROPS */, ["model", "state", "models-of-module"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=template&id=f11e7e2c&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=template&id=f11e7e2c&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["disabled"];
const _hoisted_2 = ["disabled"];
const _hoisted_3 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
        ($setup.processEditorState.stepper.currentStep === 0)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ProcessDefinitionTab"], {
                model: $setup.processModel,
                "models-of-module": $setup.modelsOfModule,
                state: $setup.processEditorState,
                modified: $setup.props.callbacks.modified,
                "enable-finish-button": () => ($setup.disableFinishButton = false),
                "is-next-active": $setup.isNextActive,
                key: $setup.processDefinitionTabKey
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified", "enable-finish-button", "is-next-active"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (!$setup.processModel.createNewBpmnFile && $setup.processEditorState.stepper.currentStep === 1)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["EditProcessVariablesTab"], {
                key: 1,
                model: $setup.processModel,
                "models-of-module": $setup.modelsOfModule,
                state: $setup.processEditorState,
                modified: $setup.props.callbacks.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.processModel.processType === $setup.SINGLE_APPROVAL.value && $setup.processEditorState.stepper.currentStep !== 0 && $setup.processModel.createNewBpmnFile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["SingleApprovalWizard"], {
                key: 2,
                model: $setup.processModel,
                "models-of-module": $setup.modelsOfModule,
                state: $setup.processEditorState,
                modified: $setup.props.callbacks.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.processModel.processType === $setup.DOUBLE_APPROVAL.value && $setup.processEditorState.stepper.currentStep !== 0 && $setup.processModel.createNewBpmnFile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["DoubleApprovalWizard"], {
                key: 3,
                model: $setup.processModel,
                "models-of-module": $setup.modelsOfModule,
                state: $setup.processEditorState,
                modified: $setup.props.callbacks.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.processModel.processType === $setup.TRIPLE_APPROVAL.value && $setup.processEditorState.stepper.currentStep !== 0 && $setup.processModel.createNewBpmnFile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["TripleApprovalWizard"], {
                key: 4,
                model: $setup.processModel,
                "models-of-module": $setup.modelsOfModule,
                state: $setup.processEditorState,
                modified: $setup.props.callbacks.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.processModel.processType === $setup.QUADRUPLE_APPROVAL.value &&
            $setup.processEditorState.stepper.currentStep !== 0 &&
            $setup.processModel.createNewBpmnFile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["QuadrupleApprovalWizard"], {
                key: 5,
                model: $setup.processModel,
                "models-of-module": $setup.modelsOfModule,
                state: $setup.processEditorState,
                modified: $setup.props.callbacks.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.processModel.processType === $setup.QUINTUPLE_APPROVAL.value &&
            $setup.processEditorState.stepper.currentStep !== 0 &&
            $setup.processModel.createNewBpmnFile)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["QuintupleApprovalWizard"], {
                key: 6,
                model: $setup.processModel,
                "models-of-module": $setup.modelsOfModule,
                state: $setup.processEditorState,
                modified: $setup.props.callbacks.modified
            }, null, 8 /* PROPS */, ["model", "models-of-module", "state", "modified"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                style: { "margin-bottom": "5%" },
                disabled: !$setup.processEditorState.stepper.currentStep,
                onClick: $setup.handleBack
            }, "Back", 8 /* PROPS */, _hoisted_1),
            (!$setup.processEditorState.stepper.isApproveTab && !(!$setup.processModel.createNewBpmnFile && $setup.processEditorState.stepper.currentStep === 1))
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                    key: 0,
                    onClick: $setup.handleNext,
                    disabled: !$setup.processEditorState.stepper.isTabValid || !$setup.isNextActive
                }, " Next ", 8 /* PROPS */, _hoisted_2))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            ($setup.processEditorState.stepper.isApproveTab)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                    key: 1,
                    onClick: $setup.handleFinish,
                    disabled: $setup.disableFinishButton
                }, "Finish", 8 /* PROPS */, _hoisted_3))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ])
    ]));
}


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/validation/validation.ts":
/*!******************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/validation/validation.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkInputLength": () => (/* binding */ checkInputLength),
/* harmony export */   "checkInputStartsWithLetter": () => (/* binding */ checkInputStartsWithLetter),
/* harmony export */   "checkURLPattern": () => (/* binding */ checkURLPattern)
/* harmony export */ });
function checkInputLength(input, length) {
    return input.length < length ? `Input length must be bigger than ${length}.` : "";
}
function checkInputStartsWithLetter(input) {
    return /^[a-zA-Z][a-zA-Z0-9_]*$/.test(input)
        ? ""
        : "Input must start with letter and following characters must be letter, number or _";
}
function checkURLPattern(url) {
    return /(^X$)|(^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256})/.test(url)
        ? ""
        : "URL must be valid and start with https:// ";
}


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue":
/*!**********************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _doubleApprovalWizard_vue_vue_type_template_id_3d4abeaa_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doubleApprovalWizard.vue?vue&type=template&id=3d4abeaa&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=template&id=3d4abeaa&ts=true");
/* harmony import */ var _doubleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doubleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_doubleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_doubleApprovalWizard_vue_vue_type_template_id_3d4abeaa_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue":
/*!*************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quadrupleApprovalWizard_vue_vue_type_template_id_7d069d11_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quadrupleApprovalWizard.vue?vue&type=template&id=7d069d11&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=template&id=7d069d11&ts=true");
/* harmony import */ var _quadrupleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quadrupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_quadrupleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_quadrupleApprovalWizard_vue_vue_type_template_id_7d069d11_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue":
/*!*************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quintupleApprovalWizard_vue_vue_type_template_id_0afbcc51_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quintupleApprovalWizard.vue?vue&type=template&id=0afbcc51&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=template&id=0afbcc51&ts=true");
/* harmony import */ var _quintupleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quintupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_quintupleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_quintupleApprovalWizard_vue_vue_type_template_id_0afbcc51_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue":
/*!**********************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _singleApprovalWizard_vue_vue_type_template_id_799d1962_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleApprovalWizard.vue?vue&type=template&id=799d1962&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=template&id=799d1962&ts=true");
/* harmony import */ var _singleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_singleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_singleApprovalWizard_vue_vue_type_template_id_799d1962_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _approveDefinitionFirstTab_vue_vue_type_template_id_0684fd80_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approveDefinitionFirstTab.vue?vue&type=template&id=0684fd80&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=template&id=0684fd80&ts=true");
/* harmony import */ var _approveDefinitionFirstTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approveDefinitionFirstTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_approveDefinitionFirstTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_approveDefinitionFirstTab_vue_vue_type_template_id_0684fd80_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue":
/*!*********************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _approveDefinitionSecondTab_vue_vue_type_template_id_d984c354_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approveDefinitionSecondTab.vue?vue&type=template&id=d984c354&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=template&id=d984c354&ts=true");
/* harmony import */ var _approveDefinitionSecondTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approveDefinitionSecondTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_approveDefinitionSecondTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_approveDefinitionSecondTab_vue_vue_type_template_id_d984c354_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _approveDefinitionThirdTab_vue_vue_type_template_id_346b1ee9_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approveDefinitionThirdTab.vue?vue&type=template&id=346b1ee9&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=template&id=346b1ee9&ts=true");
/* harmony import */ var _approveDefinitionThirdTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approveDefinitionThirdTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_approveDefinitionThirdTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_approveDefinitionThirdTab_vue_vue_type_template_id_346b1ee9_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue":
/*!*****************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _approveTab_vue_vue_type_template_id_4e729bfd_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approveTab.vue?vue&type=template&id=4e729bfd&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=template&id=4e729bfd&ts=true");
/* harmony import */ var _approveTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approveTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_approveTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_approveTab_vue_vue_type_template_id_4e729bfd_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue":
/*!******************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editProcessVariablesTab_vue_vue_type_template_id_1f82d01e_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editProcessVariablesTab.vue?vue&type=template&id=1f82d01e&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=template&id=1f82d01e&ts=true");
/* harmony import */ var _editProcessVariablesTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editProcessVariablesTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_editProcessVariablesTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_editProcessVariablesTab_vue_vue_type_template_id_1f82d01e_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue":
/*!***************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _processDefinitionTab_vue_vue_type_template_id_65221448_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processDefinitionTab.vue?vue&type=template&id=65221448&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=template&id=65221448&ts=true");
/* harmony import */ var _processDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processDefinitionTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_processDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_processDefinitionTab_vue_vue_type_template_id_65221448_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _processMakerDefinitionTab_vue_vue_type_template_id_8600d370_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processMakerDefinitionTab.vue?vue&type=template&id=8600d370&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=template&id=8600d370&ts=true");
/* harmony import */ var _processMakerDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processMakerDefinitionTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_processMakerDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_processMakerDefinitionTab_vue_vue_type_template_id_8600d370_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue":
/*!*****************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _runAfterChangeAdvisedDefinitionTab_vue_vue_type_template_id_42ef135c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runAfterChangeAdvisedDefinitionTab.vue?vue&type=template&id=42ef135c&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=template&id=42ef135c&ts=true");
/* harmony import */ var _runAfterChangeAdvisedDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runAfterChangeAdvisedDefinitionTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_runAfterChangeAdvisedDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_runAfterChangeAdvisedDefinitionTab_vue_vue_type_template_id_42ef135c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue":
/*!***********************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _runAfterProcessDefinitionTab_vue_vue_type_template_id_2e982279_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runAfterProcessDefinitionTab.vue?vue&type=template&id=2e982279&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=template&id=2e982279&ts=true");
/* harmony import */ var _runAfterProcessDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runAfterProcessDefinitionTab.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_runAfterProcessDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_runAfterProcessDefinitionTab_vue_vue_type_template_id_2e982279_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue":
/*!**********************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tripleApprovalWizard_vue_vue_type_template_id_3bbdf010_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tripleApprovalWizard.vue?vue&type=template&id=3bbdf010&ts=true */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=template&id=3bbdf010&ts=true");
/* harmony import */ var _tripleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tripleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_tripleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_tripleApprovalWizard_vue_vue_type_template_id_3bbdf010_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/processEditor.vue":
/*!***********************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/processEditor.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _processEditor_vue_vue_type_template_id_f11e7e2c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processEditor.vue?vue&type=template&id=f11e7e2c&ts=true */ "./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=template&id=f11e7e2c&ts=true");
/* harmony import */ var _processEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processEditor.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_processEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_processEditor_vue_vue_type_template_id_f11e7e2c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processEditor/processEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_doubleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_doubleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./doubleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_quadrupleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_quadrupleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./quadrupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_quintupleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_quintupleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./quintupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_singleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_singleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./singleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionFirstTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionFirstTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./approveDefinitionFirstTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionSecondTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionSecondTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./approveDefinitionSecondTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionThirdTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionThirdTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./approveDefinitionThirdTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./approveTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=script&setup=true&lang=ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_editProcessVariablesTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_editProcessVariablesTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./editProcessVariablesTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=script&setup=true&lang=ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=script&setup=true&lang=ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./processDefinitionTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processMakerDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processMakerDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./processMakerDefinitionTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_runAfterChangeAdvisedDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_runAfterChangeAdvisedDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./runAfterChangeAdvisedDefinitionTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_runAfterProcessDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_runAfterProcessDefinitionTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./runAfterProcessDefinitionTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tripleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tripleApprovalWizard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./tripleApprovalWizard.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./processEditor.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=template&id=3d4abeaa&ts=true":
/*!************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=template&id=3d4abeaa&ts=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_doubleApprovalWizard_vue_vue_type_template_id_3d4abeaa_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_doubleApprovalWizard_vue_vue_type_template_id_3d4abeaa_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./doubleApprovalWizard.vue?vue&type=template&id=3d4abeaa&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/doubleApprovalWizard.vue?vue&type=template&id=3d4abeaa&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=template&id=7d069d11&ts=true":
/*!***************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=template&id=7d069d11&ts=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_quadrupleApprovalWizard_vue_vue_type_template_id_7d069d11_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_quadrupleApprovalWizard_vue_vue_type_template_id_7d069d11_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./quadrupleApprovalWizard.vue?vue&type=template&id=7d069d11&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quadrupleApprovalWizard.vue?vue&type=template&id=7d069d11&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=template&id=0afbcc51&ts=true":
/*!***************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=template&id=0afbcc51&ts=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_quintupleApprovalWizard_vue_vue_type_template_id_0afbcc51_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_quintupleApprovalWizard_vue_vue_type_template_id_0afbcc51_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./quintupleApprovalWizard.vue?vue&type=template&id=0afbcc51&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/quintupleApprovalWizard.vue?vue&type=template&id=0afbcc51&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=template&id=799d1962&ts=true":
/*!************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=template&id=799d1962&ts=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_singleApprovalWizard_vue_vue_type_template_id_799d1962_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_singleApprovalWizard_vue_vue_type_template_id_799d1962_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./singleApprovalWizard.vue?vue&type=template&id=799d1962&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/singleApprovalWizard.vue?vue&type=template&id=799d1962&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=template&id=0684fd80&ts=true":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=template&id=0684fd80&ts=true ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionFirstTab_vue_vue_type_template_id_0684fd80_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionFirstTab_vue_vue_type_template_id_0684fd80_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./approveDefinitionFirstTab.vue?vue&type=template&id=0684fd80&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionFirstTab.vue?vue&type=template&id=0684fd80&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=template&id=d984c354&ts=true":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=template&id=d984c354&ts=true ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionSecondTab_vue_vue_type_template_id_d984c354_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionSecondTab_vue_vue_type_template_id_d984c354_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./approveDefinitionSecondTab.vue?vue&type=template&id=d984c354&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionSecondTab.vue?vue&type=template&id=d984c354&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=template&id=346b1ee9&ts=true":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=template&id=346b1ee9&ts=true ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionThirdTab_vue_vue_type_template_id_346b1ee9_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveDefinitionThirdTab_vue_vue_type_template_id_346b1ee9_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./approveDefinitionThirdTab.vue?vue&type=template&id=346b1ee9&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveDefinitionThirdTab.vue?vue&type=template&id=346b1ee9&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=template&id=4e729bfd&ts=true":
/*!*******************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=template&id=4e729bfd&ts=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveTab_vue_vue_type_template_id_4e729bfd_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_approveTab_vue_vue_type_template_id_4e729bfd_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./approveTab.vue?vue&type=template&id=4e729bfd&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/approveTab.vue?vue&type=template&id=4e729bfd&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=template&id=1f82d01e&ts=true":
/*!********************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=template&id=1f82d01e&ts=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_editProcessVariablesTab_vue_vue_type_template_id_1f82d01e_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_editProcessVariablesTab_vue_vue_type_template_id_1f82d01e_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./editProcessVariablesTab.vue?vue&type=template&id=1f82d01e&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/editProcessVariablesTab.vue?vue&type=template&id=1f82d01e&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=template&id=65221448&ts=true":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=template&id=65221448&ts=true ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processDefinitionTab_vue_vue_type_template_id_65221448_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processDefinitionTab_vue_vue_type_template_id_65221448_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./processDefinitionTab.vue?vue&type=template&id=65221448&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processDefinitionTab.vue?vue&type=template&id=65221448&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=template&id=8600d370&ts=true":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=template&id=8600d370&ts=true ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processMakerDefinitionTab_vue_vue_type_template_id_8600d370_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processMakerDefinitionTab_vue_vue_type_template_id_8600d370_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./processMakerDefinitionTab.vue?vue&type=template&id=8600d370&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/processMakerDefinitionTab.vue?vue&type=template&id=8600d370&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=template&id=42ef135c&ts=true":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=template&id=42ef135c&ts=true ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_runAfterChangeAdvisedDefinitionTab_vue_vue_type_template_id_42ef135c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_runAfterChangeAdvisedDefinitionTab_vue_vue_type_template_id_42ef135c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./runAfterChangeAdvisedDefinitionTab.vue?vue&type=template&id=42ef135c&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterChangeAdvisedDefinitionTab.vue?vue&type=template&id=42ef135c&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=template&id=2e982279&ts=true":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=template&id=2e982279&ts=true ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_runAfterProcessDefinitionTab_vue_vue_type_template_id_2e982279_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_runAfterProcessDefinitionTab_vue_vue_type_template_id_2e982279_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./runAfterProcessDefinitionTab.vue?vue&type=template&id=2e982279&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tabs/runAfterProcessDefinitionTab.vue?vue&type=template&id=2e982279&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=template&id=3bbdf010&ts=true":
/*!************************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=template&id=3bbdf010&ts=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tripleApprovalWizard_vue_vue_type_template_id_3bbdf010_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tripleApprovalWizard_vue_vue_type_template_id_3bbdf010_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./tripleApprovalWizard.vue?vue&type=template&id=3bbdf010&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/approvalWizards/tripleApprovalWizard.vue?vue&type=template&id=3bbdf010&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=template&id=f11e7e2c&ts=true":
/*!*************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=template&id=f11e7e2c&ts=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processEditor_vue_vue_type_template_id_f11e7e2c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processEditor_vue_vue_type_template_id_f11e7e2c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./processEditor.vue?vue&type=template&id=f11e7e2c&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processEditor/processEditor.vue?vue&type=template&id=f11e7e2c&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_editors_processEditor_processEditor_vue.js.map