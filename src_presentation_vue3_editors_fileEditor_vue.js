"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_editors_fileEditor_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntextarea[data-v-9303ca50]{\n    resize: both;\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/editors/fileEditor.vue"],"names":[],"mappings":";AAgEA;IACI,YAAY;AAChB","sourcesContent":["<script setup lang=\"ts\">\nimport { text } from 'stream/consumers';\nimport { onBeforeUnmount, onMounted, onUnmounted, Ref, ref } from 'vue';\nimport { IFileEditorProps } from '../../../application/objects/editors/fileEditorImpl';\n\ninterface IProps {\n    functions: IFileEditorProps[\"functions\"];\n    callbacks: IFileEditorProps[\"callbacks\"];\n}\nconst props = defineProps<IProps>();\nconst textarea = ref<HTMLTextAreaElement>() as Ref<HTMLTextAreaElement>;\n\nprops.functions.getModel = async () => {\n    const scrollTop = textarea.value.scrollTop;\n    const selectionStart = textarea.value.selectionStart;\n    const selectionEnd = textarea.value.selectionEnd;\n    const width = textarea.value.style.width;\n    const height = textarea.value.style.height;\n\n    return { model: textarea.value.value, state: { scrollTop, selectionStart, selectionEnd, width, height, checkout: !textarea.value.disabled } };\n};\nprops.functions.setModel = async (model, state) => {\n    //model\n    textarea.value.value = model;\n\n    //state\n    textarea.value.focus();\n    textarea.value.style.width = state.width || \"98%\";\n    textarea.value.style.height = state.height || \"90%\";\n    textarea.value.scrollTop = state.scrollTop;\n    textarea.value.selectionStart = state.selectionStart;\n    textarea.value.selectionEnd = state.selectionEnd;\n    textarea.value.disabled = textarea.value.readOnly = !state.checkout || false\n    textarea.value.style.resize = \"none\"\n}\nconst modified: Record<string, EventListenerOrEventListenerObject> = {\n    select: () => { console.log(\"select\"); props.callbacks.modified({ state: true }) },\n    scroll: () => { console.log(\"scroll\"); props.callbacks.modified({ state: true }) },\n    change: () => { console.log(\"change\"); props.callbacks.modified({ model: true }) },\n    keydown: (e: Event) => {\n        const event = e as KeyboardEvent;\n        const code = event.code.toLowerCase();\n        if (event.shiftKey || event.ctrlKey || code.startsWith(\"arrow\")){return;}\n        console.log(\"keydown\"); props.callbacks.modified({ model: true });\n    },\n    resize: () => { console.log(\"resize\"); props.callbacks.modified({ state: true }) },\n};\n\nconst watchTextArea = (attach: boolean) => {\n    const target = attach ? textarea.value.addEventListener : textarea.value.removeEventListener;\n    Object.keys(modified).forEach(key => target.call(textarea.value, key, modified[key]));\n}\n\nonMounted(() => {\n    watchTextArea(true);\n});\nonBeforeUnmount(() => {\n    watchTextArea(false);\n});\n</script>\n<template>\n<textarea ref=\"textarea\"></textarea>\n</template>\n<style scoped>\ntextarea{\n    resize: both;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_style_index_0_id_9303ca50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_style_index_0_id_9303ca50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_style_index_0_id_9303ca50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_style_index_0_id_9303ca50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_style_index_0_id_9303ca50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'fileEditor',
    props: {
        functions: { type: null, required: true },
        callbacks: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        props.functions.getModel = async () => {
            const scrollTop = textarea.value.scrollTop;
            const selectionStart = textarea.value.selectionStart;
            const selectionEnd = textarea.value.selectionEnd;
            const width = textarea.value.style.width;
            const height = textarea.value.style.height;
            return { model: textarea.value.value, state: { scrollTop, selectionStart, selectionEnd, width, height, checkout: !textarea.value.disabled } };
        };
        props.functions.setModel = async (model, state) => {
            //model
            textarea.value.value = model;
            //state
            textarea.value.focus();
            textarea.value.style.width = state.width || "98%";
            textarea.value.style.height = state.height || "90%";
            textarea.value.scrollTop = state.scrollTop;
            textarea.value.selectionStart = state.selectionStart;
            textarea.value.selectionEnd = state.selectionEnd;
            textarea.value.disabled = textarea.value.readOnly = !state.checkout || false;
            textarea.value.style.resize = "none";
        };
        const modified = {
            select: () => { console.log("select"); props.callbacks.modified({ state: true }); },
            scroll: () => { console.log("scroll"); props.callbacks.modified({ state: true }); },
            change: () => { console.log("change"); props.callbacks.modified({ model: true }); },
            keydown: (e) => {
                const event = e;
                const code = event.code.toLowerCase();
                if (event.shiftKey || event.ctrlKey || code.startsWith("arrow")) {
                    return;
                }
                console.log("keydown");
                props.callbacks.modified({ model: true });
            },
            resize: () => { console.log("resize"); props.callbacks.modified({ state: true }); },
        };
        const watchTextArea = (attach) => {
            const target = attach ? textarea.value.addEventListener : textarea.value.removeEventListener;
            Object.keys(modified).forEach(key => target.call(textarea.value, key, modified[key]));
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            watchTextArea(true);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
            watchTextArea(false);
        });
        const __returned__ = { props, textarea, modified, watchTextArea };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=template&id=9303ca50&scoped=true&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=template&id=9303ca50&scoped=true&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9303ca50"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { ref: "textarea" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", _hoisted_1, null, 512 /* NEED_PATCH */));
}


/***/ }),

/***/ "./src/presentation/vue3/editors/fileEditor.vue":
/*!******************************************************!*\
  !*** ./src/presentation/vue3/editors/fileEditor.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fileEditor_vue_vue_type_template_id_9303ca50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileEditor.vue?vue&type=template&id=9303ca50&scoped=true&ts=true */ "./src/presentation/vue3/editors/fileEditor.vue?vue&type=template&id=9303ca50&scoped=true&ts=true");
/* harmony import */ var _fileEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileEditor.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/editors/fileEditor.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _fileEditor_vue_vue_type_style_index_0_id_9303ca50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css */ "./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_fileEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_fileEditor_vue_vue_type_template_id_9303ca50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9303ca50"],['__file',"src/presentation/vue3/editors/fileEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_style_index_0_id_9303ca50_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=style&index=0&id=9303ca50&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/editors/fileEditor.vue?vue&type=script&setup=true&lang=ts":
/*!*****************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/fileEditor.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./fileEditor.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/editors/fileEditor.vue?vue&type=template&id=9303ca50&scoped=true&ts=true":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/vue3/editors/fileEditor.vue?vue&type=template&id=9303ca50&scoped=true&ts=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_template_id_9303ca50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_fileEditor_vue_vue_type_template_id_9303ca50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./fileEditor.vue?vue&type=template&id=9303ca50&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/editors/fileEditor.vue?vue&type=template&id=9303ca50&scoped=true&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_editors_fileEditor_vue.js.map