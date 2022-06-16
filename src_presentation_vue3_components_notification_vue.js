"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_components_notification_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.blockShadow[data-v-0b183e6e] {\nbackground-color: black; top:0px; left:0px; position: fixed; height: 100%; width: 100%;\nopacity: 0.8;\nz-index: 10;\n}\n.center[data-v-0b183e6e] {\n  text-align: center;\n}\nh1[data-v-0b183e6e] {\n  margin: 0px;\n}\n.action[data-v-0b183e6e]:hover {\n  border-color: black;\n}\n.action[data-v-0b183e6e]:active {\n  background-color: white;\n}\n.multi[data-v-0b183e6e]{\n  margin: 3px 5px 0px 5px;\n}\n.action[data-v-0b183e6e] {\n  height: 21px;\n  padding: 0px 6px;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  border: thin solid currentColor;\n  background-color: transparent;\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/notification.vue"],"names":[],"mappings":";AA8FA;AACA,uBAAuB,EAAE,OAAO,EAAE,QAAQ,EAAE,eAAe,EAAE,YAAY,EAAE,WAAW;AACtF,YAAY;AACZ,WAAW;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,+BAA+B;EAC/B,6BAA6B;AAC/B","sourcesContent":["<script setup lang=\"ts\">\nimport { ref } from \"vue\";\nimport \"vue-toastification/dist/index.css\";\nimport { container } from \"../../../domain/core/diContainer\";\nimport { INotificationInteractor, INotificationOptions } from \"../../../domain/model/INotificationOptions\";\nimport { INotification } from \"../../../domain/presentation/INotification\";\n\nexport interface INot {\n  options: INotificationOptions\n}\nconst emit = defineEmits([\"close-toast\"]);\nconst props = defineProps<INot>();\nlet showDetail = ref(false);\n\nif (props.options?.copy){\n  const options = props.options;\n  options.interactors = options.interactors || [];\n  options.interactors.unshift({customClose: true, text: \"copy\",onInteract:() => {\n      const copyText = (options.title ? options.title + \"\\n\" : \"\") + options.text;\n      navigator.clipboard.writeText(copyText);\n      container.resolve<INotification>(INotification).showNotification({text: \"copied\", type: \"success\", copy: false});\n    }});\n}\nprops.options.interactors?.filter(interactor => interactor.optionsPleaseSelect).forEach(interactor => {\n  interactor.options = interactor.options || [];\n  if (interactor.options.find(option => option.selected)) { return; }\n\n  interactor.options.unshift({id: \"pleaseSelect\",text:\"pleaseSelect\"})\n});\nconst requireds = {\n  interactors: props.options.interactors?.filter(interactor => interactor.required).length || 0,\n  interracted: 0,\n};\nconst showBlockShadow = ref(requireds.interactors > 0);\n\nfunction decideClose(interactor: INotificationInteractor) {\n  if (!interactor.required){return;}\n  if (requireds.interactors > ++requireds.interracted){return;}\n\n  showBlockShadow.value = false;\n  emit(\"close-toast\");\n}\nfunction selected(interactor: INotificationInteractor, event: Event){\n  clickedOption(interactor, (event.target as HTMLSelectElement).selectedIndex, event);\n}\nfunction clickedOption(interactor: INotificationInteractor, index: number, event: Event){\n  const selectedOption = interactor.options![index];\n  const close = () => decideClose(interactor);\n  if (!interactor.customClose){\n    close();\n  }else{\n    event.stopPropagation();\n  }\n  interactor.onInteract({ selectedOption: {text:selectedOption.text,id: selectedOption.id,index}, close });\n}\nfunction clicked(interactor: INotificationInteractor, event: MouseEvent) {\n  const close = () => decideClose(interactor);\n  if (!interactor.customClose){\n    close();\n  }else{\n    event.stopPropagation();\n  }\n  interactor.onInteract({ close });\n}\n</script>\n<template>\n  <div class=\"container\">\n    <template v-if=\"showBlockShadow\">\n      <teleport to=\"body\">\n        <div class=\"blockShadow\"></div>\n      </teleport>\n    </template>\n    <h1 v-if=\"options.title\">{{ options.title }}</h1>\n    <span>{{ options.text }}</span>\n    <template v-for=\"(interactor, index) in options.interactors\" :key=\"index\">\n      <template v-if=\"interactor.options\">\n        <div class=\"center\">\n          <select v-if=\"interactor.optionsType == 'combo'\" @click.stop=\"\" @change=\"selected(interactor, $event)\">\n            <option v-for=\"option in interactor.options\" :selected=\"option.selected\" :key=\"option.id\">{{option.text}}</option>\n          </select>\n          <template v-else>\n              <button class=\"action multi\" v-for=\"(option, index) in interactor.options\" :key=\"option.id\" @click=\"clickedOption(interactor, index, $event)\">{{option.text}}</button>\n          </template>\n        </div>\n      </template>\n      <button class=\"action\" v-else @click=\"clicked(interactor, $event)\">{{interactor.text}}</button>\n    </template>\n    <div v-if=\"options.detail\">\n      <button class=\"action\" @click.stop=\"showDetail = !showDetail\">details</button>\n      <div v-if=\"showDetail\">{{options.detail}}</div>\n    </div>\n  </div>\n</template>\n<style scoped>\n.blockShadow {\nbackground-color: black; top:0px; left:0px; position: fixed; height: 100%; width: 100%;\nopacity: 0.8;\nz-index: 10;\n}\n.center {\n  text-align: center;\n}\nh1 {\n  margin: 0px;\n}\n.action:hover {\n  border-color: black;\n}\n.action:active {\n  background-color: white;\n}\n.multi{\n  margin: 3px 5px 0px 5px;\n}\n.action {\n  height: 21px;\n  padding: 0px 6px;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  border: thin solid currentColor;\n  background-color: transparent;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_style_index_0_id_0b183e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_style_index_0_id_0b183e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_style_index_0_id_0b183e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_style_index_0_id_0b183e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_style_index_0_id_0b183e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vue_toastification_dist_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastification/dist/index.css */ "./node_modules/vue-toastification/dist/index.css");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'notification',
    props: {
        options: { type: null, required: true }
    },
    emits: ["close-toast"],
    setup(__props, { expose, emit }) {
        var _a, _b, _c;
        expose();
        const props = __props;
        let showDetail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        if ((_a = props.options) === null || _a === void 0 ? void 0 : _a.copy) {
            const options = props.options;
            options.interactors = options.interactors || [];
            options.interactors.unshift({ customClose: true, text: "copy", onInteract: () => {
                    const copyText = (options.title ? options.title + "\n" : "") + options.text;
                    navigator.clipboard.writeText(copyText);
                    _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_2__.container.resolve(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__.INotification).showNotification({ text: "copied", type: "success", copy: false });
                } });
        }
        (_b = props.options.interactors) === null || _b === void 0 ? void 0 : _b.filter(interactor => interactor.optionsPleaseSelect).forEach(interactor => {
            interactor.options = interactor.options || [];
            if (interactor.options.find(option => option.selected)) {
                return;
            }
            interactor.options.unshift({ id: "pleaseSelect", text: "pleaseSelect" });
        });
        const requireds = {
            interactors: ((_c = props.options.interactors) === null || _c === void 0 ? void 0 : _c.filter(interactor => interactor.required).length) || 0,
            interracted: 0,
        };
        const showBlockShadow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(requireds.interactors > 0);
        function decideClose(interactor) {
            if (!interactor.required) {
                return;
            }
            if (requireds.interactors > ++requireds.interracted) {
                return;
            }
            showBlockShadow.value = false;
            emit("close-toast");
        }
        function selected(interactor, event) {
            clickedOption(interactor, event.target.selectedIndex, event);
        }
        function clickedOption(interactor, index, event) {
            const selectedOption = interactor.options[index];
            const close = () => decideClose(interactor);
            if (!interactor.customClose) {
                close();
            }
            else {
                event.stopPropagation();
            }
            interactor.onInteract({ selectedOption: { text: selectedOption.text, id: selectedOption.id, index }, close });
        }
        function clicked(interactor, event) {
            const close = () => decideClose(interactor);
            if (!interactor.customClose) {
                close();
            }
            else {
                event.stopPropagation();
            }
            interactor.onInteract({ close });
        }
        const __returned__ = { emit, props, showDetail, requireds, showBlockShadow, decideClose, selected, clickedOption, clicked };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=template&id=0b183e6e&scoped=true&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=template&id=0b183e6e&scoped=true&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0b183e6e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "blockShadow" }, null, -1 /* HOISTED */));
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
    key: 0,
    class: "center"
};
const _hoisted_5 = ["onChange"];
const _hoisted_6 = ["selected"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { key: 2 };
const _hoisted_10 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        ($setup.showBlockShadow)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
                key: 0,
                to: "body"
            }, [
                _hoisted_2
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($props.options.title)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.options.title), 1 /* TEXT */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.options.text), 1 /* TEXT */),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options.interactors, (interactor, index) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: index }, [
                (interactor.options)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [
                        (interactor.optionsType == 'combo')
                            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
                                key: 0,
                                onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => { }, ["stop"])),
                                onChange: ($event) => ($setup.selected(interactor, $event))
                            }, [
                                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(interactor.options, (option) => {
                                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                                        selected: option.selected,
                                        key: option.id
                                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.text), 9 /* TEXT, PROPS */, _hoisted_6));
                                }), 128 /* KEYED_FRAGMENT */))
                            ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5))
                            : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(interactor.options, (option, index) => {
                                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                                    class: "action multi",
                                    key: option.id,
                                    onClick: ($event) => ($setup.clickedOption(interactor, index, $event))
                                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.text), 9 /* TEXT, PROPS */, _hoisted_7));
                            }), 128 /* KEYED_FRAGMENT */))
                    ]))
                    : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                        key: 1,
                        class: "action",
                        onClick: ($event) => ($setup.clicked(interactor, $event))
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(interactor.text), 9 /* TEXT, PROPS */, _hoisted_8))
            ], 64 /* STABLE_FRAGMENT */));
        }), 128 /* KEYED_FRAGMENT */)),
        ($props.options.detail)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    class: "action",
                    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(($event) => ($setup.showDetail = !$setup.showDetail), ["stop"]))
                }, "details"),
                ($setup.showDetail)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.options.detail), 1 /* TEXT */))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]));
}


/***/ }),

/***/ "./src/presentation/vue3/components/notification.vue":
/*!***********************************************************!*\
  !*** ./src/presentation/vue3/components/notification.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notification_vue_vue_type_template_id_0b183e6e_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.vue?vue&type=template&id=0b183e6e&scoped=true&ts=true */ "./src/presentation/vue3/components/notification.vue?vue&type=template&id=0b183e6e&scoped=true&ts=true");
/* harmony import */ var _notification_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/notification.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _notification_vue_vue_type_style_index_0_id_0b183e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css */ "./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_notification_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_notification_vue_vue_type_template_id_0b183e6e_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0b183e6e"],['__file',"src/presentation/vue3/components/notification.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_style_index_0_id_0b183e6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=style&index=0&id=0b183e6e&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/notification.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************!*\
  !*** ./src/presentation/vue3/components/notification.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./notification.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/notification.vue?vue&type=template&id=0b183e6e&scoped=true&ts=true":
/*!*************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/notification.vue?vue&type=template&id=0b183e6e&scoped=true&ts=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_template_id_0b183e6e_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_notification_vue_vue_type_template_id_0b183e6e_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./notification.vue?vue&type=template&id=0b183e6e&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/notification.vue?vue&type=template&id=0b183e6e&scoped=true&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_components_notification_vue.js.map