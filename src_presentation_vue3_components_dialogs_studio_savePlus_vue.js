"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_components_dialogs_studio_savePlus_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.margin[data-v-6f76e239] {\n    margin-left: 30px;\n}\n.select[data-v-6f76e239]:invalid{\n        color: gray;\n}\n.option[data-v-6f76e239]{\n        color: black;\n}\n.checkinInputs[data-v-6f76e239] {\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n}\n.checkinTextarea[data-v-6f76e239] {\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    height: 120px;\n    resize: none;\n}\n.checkinBtnText[data-v-6f76e239] {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: 'Roboto';\n    letter-spacing: 0.02px;\n    opacity: 1;\n}\n.checkinBtn[data-v-6f76e239] {\n    background-color: #4F537B;\n    width: 104px;\n    height: 32px;\n    color: white;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 22px;\n}\n.buttonGroupDiv[data-v-6f76e239] {\n    display: flex;\n    margin-left: 34px;\n    margin-right: 32px;\n    margin-top: 32px;\n    margin-bottom: 14px;\n    height: 59px;\n    border-top: 1px solid #37373733;\n}\n.dialogContentDivs[data-v-6f76e239] {\n    display: grid;\n    margin-left: 34px;\n    margin-right: 32px;\n    margin-top: 22px;\n}\n.checkinLabels[data-v-6f76e239] {\n    font-style: normal;\n    color: #151233;\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: 0;\n    opacity: 1;\n    font-family: 'Roboto';\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/dialogs/studio/savePlus.vue"],"names":[],"mappings":";AA8EA;IACI,iBAAiB;AACrB;AACI;QACI,WAAW;AACf;AACA;QACI,YAAY;AAChB;AACJ;IACI,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,+CAA+C;AACnD;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,+CAA+C;IAC/C,aAAa;IACb,YAAY;AAChB;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,sBAAsB;IACtB,UAAU;AACd;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,gBAAgB;AAEpB;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,+BAA+B;AACnC;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,UAAU;IACV,qBAAqB;AACzB","sourcesContent":["<script setup lang=\"ts\">\nimport { computed } from '@vue/reactivity';\nimport { ref } from 'vue';\nimport { container } from '../../../../../domain/core/diContainer';\nimport { IConfig } from '../../../../../domain/infrastructure/IConfig';\nimport { IModel } from '../../../../../domain/model/models';\nimport { IStudio } from '../../../../../domain/useCase/IStudio';\nimport { IUseCaseExecutor } from '../../../../../domain/useCase/IUseCaseExecutor';\nimport { IViewModel } from '../../../../../domain/viewModel/IViewModel';\n\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst studio = container.resolve<IStudio>(IStudio);\nconst config = container.resolve<IConfig>(IConfig);\n\n\n\nconst currentItem = viewModel.studio.currentItem!;\n\n\n\nconst checkin = ref(true);\nconst buttonName = computed(() => checkin.value ? \"CHECK IN\" : \"SAVE\");\nconst version = ref<\"major\"| \"minor\" | \"\">(\"\");\nconst comment = ref({ short: \"\", long: undefined, hasLong: false });\nconst emit = defineEmits([\"close\"]);\n\nconst commentMaxLength = config.getValue(\"studio\").commentMaxLength;\n\n\nfunction save() {\n    executor.execute(async () => {\n        debugger\n        if (checkin.value) {\n            await studio.checkin(currentItem, { shortComment: comment.value.short, version: version.value, longComment: comment.value.long });\n        } else {\n            await studio.save(currentItem);\n        }\n        emit(\"close\");\n    }, { loading: true });\n}\n\n</script>\n<template>\n    <div>\n\n        <template v-if=\"checkin\">\n            <div class=\"dialogContentDivs\">\n                <span class='checkinLabels'>Summary</span>\n                <input class='checkinInputs' type=\"text\" :maxlength=\"commentMaxLength\"\n                    placeholder='Summarise your new version' v-model=\"comment.short\">\n            </div>\n\n            <div class=\"dialogContentDivs\">\n                <span class='checkinLabels'>Description (Optional)</span>\n                <textarea class='checkinTextarea' id=\"w3review\" name=\"w3review\" rows=\"4\" cols=\"50\"\n                    placeholder='Describe your new version' v-model=\"comment.long\"></textarea>\n            </div>\n\n            <div class=\"dialogContentDivs\">\n                <span class='checkinLabels'>Version</span>\n                <select required class='checkinInputs' name=\"versions\" id=\"versiontype\" v-model=\"version\">\n                    <option value=\"\" disabled hidden>Select Version</option>\n                    <option  value=\"minor\">Minor</option>\n                    <option   value=\"major\">Major</option>\n                </select>\n            </div>\n\n        </template>\n        <div class='buttonGroupDiv'>\n            <div class=\"col-12\" style=\"text-align: end;\">\n                <button class='checkinBtn' @click=\"save()\"><span class='checkinBtnText'>{{ buttonName }}</span></button>\n            </div>\n\n        </div>\n    </div>\n</template>\n<style scoped>\n.margin {\n    margin-left: 30px;\n}\n    .select:invalid{\n        color: gray;\n    }\n    .option{\n        color: black;\n    }\n.checkinInputs {\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n}\n\n.checkinTextarea {\n    border: 1px solid #A1A1A1;\n    border-radius: 4px;\n    opacity: 1;\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    height: 120px;\n    resize: none;\n}\n\n.checkinBtnText {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    font-family: 'Roboto';\n    letter-spacing: 0.02px;\n    opacity: 1;\n}\n\n.checkinBtn {\n    background-color: #4F537B;\n    width: 104px;\n    height: 32px;\n    color: white;\n    border-radius: 4px;\n    opacity: 1;\n    margin-top: 22px;\n\n}\n\n.buttonGroupDiv {\n    display: flex;\n    margin-left: 34px;\n    margin-right: 32px;\n    margin-top: 32px;\n    margin-bottom: 14px;\n    height: 59px;\n    border-top: 1px solid #37373733;\n}\n\n.dialogContentDivs {\n    display: grid;\n    margin-left: 34px;\n    margin-right: 32px;\n    margin-top: 22px;\n}\n\n.checkinLabels {\n    font-style: normal;\n    color: #151233;\n    font-weight: 500;\n    font-size: 14px;\n    letter-spacing: 0;\n    opacity: 1;\n    font-family: 'Roboto';\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_style_index_0_id_6f76e239_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_style_index_0_id_6f76e239_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_style_index_0_id_6f76e239_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_style_index_0_id_6f76e239_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_style_index_0_id_6f76e239_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../domain/infrastructure/IConfig */ "./src/domain/infrastructure/IConfig.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'savePlus',
    emits: ["close"],
    setup(__props, { expose, emit }) {
        expose();
        const viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_5__.IViewModel);
        const executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_4__.IUseCaseExecutor);
        const studio = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_3__.IStudio);
        const config = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_2__.IConfig);
        const currentItem = viewModel.studio.currentItem;
        const checkin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
        const buttonName = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_6__.computed)(() => checkin.value ? "CHECK IN" : "SAVE");
        const version = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const comment = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ short: "", long: undefined, hasLong: false });
        const commentMaxLength = config.getValue("studio").commentMaxLength;
        function save() {
            executor.execute(async () => {
                debugger;
                if (checkin.value) {
                    await studio.checkin(currentItem, { shortComment: comment.value.short, version: version.value, longComment: comment.value.long });
                }
                else {
                    await studio.save(currentItem);
                }
                emit("close");
            }, { loading: true });
        }
        const __returned__ = { viewModel, executor, studio, config, currentItem, checkin, buttonName, version, comment, emit, commentMaxLength, save };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=template&id=6f76e239&scoped=true&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=template&id=6f76e239&scoped=true&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6f76e239"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "dialogContentDivs" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "checkinLabels" }, "Summary", -1 /* HOISTED */));
const _hoisted_3 = ["maxlength"];
const _hoisted_4 = { class: "dialogContentDivs" };
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "checkinLabels" }, "Description (Optional)", -1 /* HOISTED */));
const _hoisted_6 = { class: "dialogContentDivs" };
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "checkinLabels" }, "Version", -1 /* HOISTED */));
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    hidden: ""
}, "Select Version", -1 /* HOISTED */));
const _hoisted_9 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", { value: "minor" }, "Minor", -1 /* HOISTED */));
const _hoisted_10 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", { value: "major" }, "Major", -1 /* HOISTED */));
const _hoisted_11 = [
    _hoisted_8,
    _hoisted_9,
    _hoisted_10
];
const _hoisted_12 = { class: "buttonGroupDiv" };
const _hoisted_13 = {
    class: "col-12",
    style: { "text-align": "end" }
};
const _hoisted_14 = { class: "checkinBtnText" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
        ($setup.checkin)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
                    _hoisted_2,
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                        class: "checkinInputs",
                        type: "text",
                        maxlength: $setup.commentMaxLength,
                        placeholder: "Summarise your new version",
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.comment.short) = $event))
                    }, null, 8 /* PROPS */, _hoisted_3), [
                        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.comment.short]
                    ])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                    _hoisted_5,
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
                        class: "checkinTextarea",
                        id: "w3review",
                        name: "w3review",
                        rows: "4",
                        cols: "50",
                        placeholder: "Describe your new version",
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.comment.long) = $event))
                    }, null, 512 /* NEED_PATCH */), [
                        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.comment.long]
                    ])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                    _hoisted_7,
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
                        required: "",
                        class: "checkinInputs",
                        name: "versions",
                        id: "versiontype",
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (($setup.version) = $event))
                    }, _hoisted_11, 512 /* NEED_PATCH */), [
                        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.version]
                    ])
                ])
            ], 64 /* STABLE_FRAGMENT */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    class: "checkinBtn",
                    onClick: _cache[3] || (_cache[3] = ($event) => ($setup.save()))
                }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.buttonName), 1 /* TEXT */)
                ])
            ])
        ])
    ]));
}


/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue":
/*!**********************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/studio/savePlus.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _savePlus_vue_vue_type_template_id_6f76e239_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savePlus.vue?vue&type=template&id=6f76e239&scoped=true&ts=true */ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=template&id=6f76e239&scoped=true&ts=true");
/* harmony import */ var _savePlus_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savePlus.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _savePlus_vue_vue_type_style_index_0_id_6f76e239_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css */ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_savePlus_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_savePlus_vue_vue_type_template_id_6f76e239_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6f76e239"],['__file',"src/presentation/vue3/components/dialogs/studio/savePlus.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css":
/*!******************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_style_index_0_id_6f76e239_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=style&index=0&id=6f76e239&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./savePlus.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=template&id=6f76e239&scoped=true&ts=true":
/*!************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=template&id=6f76e239&scoped=true&ts=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_template_id_6f76e239_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_savePlus_vue_vue_type_template_id_6f76e239_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./savePlus.vue?vue&type=template&id=6f76e239&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/studio/savePlus.vue?vue&type=template&id=6f76e239&scoped=true&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_components_dialogs_studio_savePlus_vue.js.map