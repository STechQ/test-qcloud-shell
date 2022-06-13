"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_editors_processDesignEditor_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=script&setup=true&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=script&setup=true&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _stechquick_plateau_process_designer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stechquick/plateau-process-designer */ "./node_modules/@stechquick/plateau-process-designer/dist/PlateauBpmnModeler.js");
/* harmony import */ var _stechquick_plateau_process_designer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stechquick_plateau_process_designer__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'processDesignEditor',
    props: {
        functions: { type: null, required: true },
        callbacks: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        let bpmnModeler;
        props.functions.getModel = async () => {
            let xml = await bpmnModeler.getDiagramXML();
            return { model: { bpmn: xml }, state: "stateValue" };
        };
        props.functions.setModel = async (model, state) => {
            console.log("incomming model", model);
            // model.bpmn.then((xml: string) => bpmnModeler.importDiagramXML(xml));
            bpmnModeler.importDiagramXML(model.bpmn);
            // setInterval(() => {if (bpmnModeler.isModified()) props.callbacks.modified({state: false, model: true})}, 5000);
            bpmnModeler.on('commandStack.changed', () => { props.callbacks.modified({ state: false, model: true }); });
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            bpmnModeler = new (_stechquick_plateau_process_designer__WEBPACK_IMPORTED_MODULE_1___default())({ lang: 'tr', container: "#processEditorCanvas" });
        });
        const __returned__ = { props, bpmnModeler };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=template&id=3c4bfcca&ts=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=template&id=3c4bfcca&ts=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
    rel: "stylesheet",
    href: "../vendor/bpmn-js/assets/diagram-js.css"
}, null, -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
    rel: "stylesheet",
    href: "../vendor/bpmn-js/assets/bpmn-font/css/bpmn-embedded.css"
}, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
    rel: "stylesheet",
    href: "../vendor/bpmn-js-properties-panel/assets/bpmn-js-properties-panel.css"
}, null, -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<link rel=\"stylesheet\" href=\"../vendor/bpmn-js-token-simulation/assets/css/bpmn-js-token-simulation.css\"><link rel=\"stylesheet\" href=\"https://unpkg.com/@bpmn-io/form-js@0.5.1/dist/assets/form-js.css\"><div class=\"content with-diagram\"><div class=\"canvas\" style=\"width:100%;height:500px;\" id=\"processEditorCanvas\"></div><div style=\"border:1px solid #aaa;height:500px;overflow-x:hidden;overflow-y:auto;\" class=\"properties-panel-parent\" id=\"js-properties-panel\"></div></div>", 3);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        _hoisted_3,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  link rel=\"stylesheet\" href=\"../vendor/bpmn-js-token-simulation/assets/css/normalize.css\" / "),
        _hoisted_4
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./src/presentation/vue3/editors/processDesignEditor.vue":
/*!***************************************************************!*\
  !*** ./src/presentation/vue3/editors/processDesignEditor.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _processDesignEditor_vue_vue_type_template_id_3c4bfcca_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processDesignEditor.vue?vue&type=template&id=3c4bfcca&ts=true */ "./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=template&id=3c4bfcca&ts=true");
/* harmony import */ var _processDesignEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processDesignEditor.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_processDesignEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_processDesignEditor_vue_vue_type_template_id_3c4bfcca_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/editors/processDesignEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=script&setup=true&lang=ts":
/*!**************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=script&setup=true&lang=ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processDesignEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processDesignEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./processDesignEditor.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=template&id=3c4bfcca&ts=true":
/*!*****************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=template&id=3c4bfcca&ts=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processDesignEditor_vue_vue_type_template_id_3c4bfcca_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_processDesignEditor_vue_vue_type_template_id_3c4bfcca_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./processDesignEditor.vue?vue&type=template&id=3c4bfcca&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/processDesignEditor.vue?vue&type=template&id=3c4bfcca&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_editors_processDesignEditor_vue.js.map