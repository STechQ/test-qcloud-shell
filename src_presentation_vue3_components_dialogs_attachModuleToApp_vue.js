"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_components_dialogs_attachModuleToApp_vue"],{

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_ILocalization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../domain/infrastructure/ILocalization */ "./src/domain/infrastructure/ILocalization.ts");
/* harmony import */ var _domain_useCase_IObjectUseCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../domain/useCase/IObjectUseCase */ "./src/domain/useCase/IObjectUseCase.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'attachModuleToApp',
    emits: ["close"],
    setup(__props, { expose, emit }) {
        expose();
        const viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_6__.IViewModel);
        const executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__.IUseCaseExecutor);
        const localization = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_infrastructure_ILocalization__WEBPACK_IMPORTED_MODULE_2__.ILocalization);
        const objectUseCase = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IObjectUseCase__WEBPACK_IMPORTED_MODULE_3__.IObjectUseCase);
        const studio = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_4__.IStudio);
        const tableData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const tableColumns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["name", "description", "relatedAppNames", "createDate", "createdBy", "actions"]);
        const tableOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            filterable: true,
            perPage: 5,
            perPageValues: [],
            headings: {
                name: localization.get("moduleName"),
                description: localization.get("description"),
                relatedAppNames: localization.get("relatedApplications"),
                createDate: localization.get("createDate"),
                createdBy: localization.get("createdBy"),
                actions: "",
            },
            sortIcon: {
                base: 'mdi',
                is: 'mdi mdi-unfold-less-horizontal',
                up: 'mdi mdi-arrow-up',
                down: 'mdi mdi-arrow-down'
            },
            texts: {
                count: "",
            },
        });
        const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        executor.execute(async () => {
            const modules = await objectUseCase.listModules();
            const appsDict = {};
            viewModel.apps.forEach(app => appsDict[app.ID] = app.name);
            modules.forEach(module => {
                const appNamesArr = module.relatedApplications.map(i => appsDict[i.applicationID]);
                module.relatedAppNames = appNamesArr.join(", ");
            });
            tableData.value = modules;
        }, { loading: true });
        function add(module) {
            executor.execute(async () => {
                const applicationID = viewModel.studio.appId;
                await studio.attachModuletoApplication(module, applicationID);
                const curModule = tableData.value.find(i => i.ID == module.ID);
                curModule.relatedApplications.push({ applicationID });
            }, { loading: true });
        }
        function remove(module) {
            executor.execute(async () => {
                const applicationID = viewModel.studio.appId;
                await studio.detachModuleFromApplication(module, applicationID);
                const curModule = tableData.value.find(i => i.ID == module.ID);
                curModule.relatedApplications = curModule.relatedApplications.filter(i => i.applicationID != applicationID);
            }, { loading: true });
        }
        function isAddedtoCurrentApp(module) {
            var _a;
            const appID = viewModel.studio.appId;
            const isAdded = (_a = module.relatedApplications) === null || _a === void 0 ? void 0 : _a.some(i => i.applicationID == appID);
            return !!isAdded;
        }
        const __returned__ = { viewModel, executor, localization, objectUseCase, studio, emit, tableData, tableColumns, tableOptions, dateOptions, add, remove, isAddedtoCurrentApp };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=template&id=060dd9be&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=template&id=060dd9be&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_v_client_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-client-table");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_client_table, {
            ref: "table",
            data: $setup.tableData,
            columns: $setup.tableColumns,
            options: $setup.tableOptions
        }, {
            createDate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((props) => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Intl.DateTimeFormat("tr-TR", $setup.dateOptions).format(new Date(props.row.createDate))), 1 /* TEXT */)
            ]),
            actions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((props) => [
                ($setup.isAddedtoCurrentApp(props.row))
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                        key: 0,
                        onClick: ($event) => ($setup.remove(props.row))
                    }, "Remove", 8 /* PROPS */, _hoisted_1))
                    : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                        key: 1,
                        onClick: ($event) => ($setup.add(props.row))
                    }, "Add", 8 /* PROPS */, _hoisted_2))
            ]),
            _: 1 /* STABLE */
        }, 8 /* PROPS */, ["data", "columns", "options"])
    ]));
}


/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/attachModuleToApp.vue":
/*!************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/attachModuleToApp.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _attachModuleToApp_vue_vue_type_template_id_060dd9be_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachModuleToApp.vue?vue&type=template&id=060dd9be&ts=true */ "./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=template&id=060dd9be&ts=true");
/* harmony import */ var _attachModuleToApp_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attachModuleToApp.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_attachModuleToApp_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_attachModuleToApp_vue_vue_type_template_id_060dd9be_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/components/dialogs/attachModuleToApp.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_attachModuleToApp_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_attachModuleToApp_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./attachModuleToApp.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=template&id=060dd9be&ts=true":
/*!**************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=template&id=060dd9be&ts=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_attachModuleToApp_vue_vue_type_template_id_060dd9be_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_attachModuleToApp_vue_vue_type_template_id_060dd9be_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./attachModuleToApp.vue?vue&type=template&id=060dd9be&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/attachModuleToApp.vue?vue&type=template&id=060dd9be&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_components_dialogs_attachModuleToApp_vue.js.map