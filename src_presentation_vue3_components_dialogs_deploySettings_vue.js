"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_components_dialogs_deploySettings_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#product-input[data-v-07ef36d1] {\n    width: 50%;\n}\n#button-container[data-v-07ef36d1] {\n    text-align: end;\n    vertical-align: bottom;\n}\n#previous-button[data-v-07ef36d1] {\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium)\n        var(--unnamed-font-size-20) / var(--unnamed-line-spacing-26)\n        var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    font: normal normal medium 20px/26px Roboto;\n    letter-spacing: 0px;\n    color: #2f3160;\n    opacity: 1;\n    font-weight: bold;\n}\n.default-button[data-v-07ef36d1] {\n    background: #2f3160 0% 0% no-repeat padding-box;\n    border-radius: 4px;\n    opacity: 1;\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium)\n        var(--unnamed-font-size-20) / var(--unnamed-line-spacing-26)\n        var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    color: var(--white);\n    font: normal normal medium 20px/26px Roboto;\n    letter-spacing: 0px;\n    color: #ffffff;\n    opacity: 1;\n    margin-left: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/dialogs/deploySettings.vue"],"names":[],"mappings":";AAsYA;IACI,UAAU;AACd;AACA;IACI,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI;;yCAEqC;IACrC,kDAAkD;IAClD,2CAA2C;IAC3C,mBAAmB;IACnB,cAAc;IACd,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,+CAA+C;IAC/C,kBAAkB;IAClB,UAAU;IACV;;yCAEqC;IACrC,kDAAkD;IAClD,mBAAmB;IACnB,2CAA2C;IAC3C,mBAAmB;IACnB,cAAc;IACd,UAAU;IACV,iBAAiB;AACrB","sourcesContent":["<script setup lang=\"ts\">\nimport { onBeforeMount, ref } from \"vue\";\nimport { container } from \"tsyringe\";\nimport { IViewModel } from \"../../../../domain/viewModel/IViewModel\";\nimport {\n    IModule,\n    IModuleSettingsItem,\n    IApplicationSettingsItem,\n} from \"../../../../domain/model/models\";\nimport { ILocalization } from \"../../../../domain/infrastructure/ILocalization\";\nimport { IGitProject } from \"../../../../domain/infrastructure/IProviderApi\";\nimport { IUseCaseExecutor } from \"../../../../domain/useCase/IUseCaseExecutor\";\nimport { IDebounce } from \"../../../../domain/infrastructure/IDebounce\";\nimport { IApplicationSettings } from \"../../../../domain/useCase/IApplicationSettings\";\nimport { INotification } from \"../../../../domain/presentation/INotification\";\n\nonBeforeMount(() => {\n    fillDatatableRow();\n    getGitGroupsFromProvider();\n    getProductsFromProvider();\n});\n\ninterface IProduct {\n    products: Array<IGitProject>;\n    loaded: boolean;\n}\n\ninterface IGroup {\n    value: IGitProject;\n    microservicesCache: Array<IGitProject>;\n    requestedBefore: boolean;\n}\n\ninterface IGitGroup {\n    groups: Array<IGroup>;\n    loaded: boolean;\n}\n\ninterface IDataTableRow {\n    moduleID: IModule[\"ID\"];\n    moduleName: IModule[\"name\"];\n    gitGroupName: string;\n    gitGroupID: number;\n    microservices: Array<IGitProject>;\n    microservicesDisable: boolean;\n    microserviceName: string;\n    microserviceID: number;\n}\n\nconst emit = defineEmits([\"close\"]);\n\nconst localization = container.resolve<ILocalization>(ILocalization);\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst notification = container.resolve<INotification>(INotification);\nconst appSettingsUseCase = container.resolve<IApplicationSettings>(IApplicationSettings);\nconst debouncer = container.resolve<IDebounce>(IDebounce);\n\nconst gitProducts = ref({ products: [], loaded: false } as IProduct);\nconst gitGroups = ref({ groups: [], loaded: false } as IGitGroup);\nconst currentApp = ref(viewModel.apps.find((app) => app.ID == viewModel.studio.appId));\nconst selectedProduct = ref({ ID: 0, name: \"\" });\nconst dataTableRows = ref(Array<IDataTableRow>());\n\nconst appDatatableColumns = ref([\"moduleName\", \"gitGroup\", \"microservice\"]);\nconst optionsDataTable = ref({\n    filterable: false,\n    perPage: 5,\n    perPageValues: [],\n    headings: {\n        name: localization.get(\"moduleName\"),\n        gitGroup: localization.get(\"gitGroup\"),\n        microservice: localization.get(\"microservice\"),\n    },\n    sortable: [],\n    texts: {\n        count: \"\",\n    },\n});\n\nfunction fillDatatableRow() {\n    dataTableRows.value = viewModel.studio.items\n        .filter((item) => item.objectType === \"module\")\n        .map<IDataTableRow>((item) => {\n            const module: IDataTableRow = {\n                moduleID: item.ID,\n                moduleName: item.name,\n                gitGroupName: \"\",\n                gitGroupID: (item as IModule).deployParameters?.gitGroupId || 0,\n                microservices: [],\n                microservicesDisable: true,\n                microserviceName: \"\",\n                microserviceID: (item as IModule).deployParameters?.gitServiceRepoId || 0,\n            };\n            return module;\n        });\n}\n\nfunction getProductsFromProvider() {\n    appSettingsUseCase\n        .getProjectsOfProduct()\n        .then((data) => {\n            gitProducts.value.products = data;\n            gitProducts.value.loaded = true;\n            setSelectedProduct();\n        })\n        .catch(() => {\n            notification.showNotification({ text: \"Error while fetching products\", type: \"error\" });\n        });\n}\n\nfunction setSelectedProduct() {\n    if (currentApp.value) {\n        if (currentApp.value.deployParameters) {\n            const currentProduct = gitProducts.value.products.find(\n                (product) => currentApp.value!.deployParameters!.gitProductRepoId == product.id\n            );\n            if (currentProduct) {\n                selectedProduct.value = {\n                    name: currentProduct.name,\n                    ID: currentProduct.id,\n                };\n            }\n        }\n    }\n}\n\nasync function getGitGroupsFromProvider() {\n    appSettingsUseCase\n        .getGroupNamesWithId()\n        .then((data) => {\n            data.forEach((fetchedGroup) =>\n                gitGroups.value.groups.push({\n                    value: fetchedGroup,\n                    microservicesCache: [],\n                    requestedBefore: false,\n                })\n            );\n            gitGroups.value.loaded = true;\n            setSelectedGitGroups();\n        })\n        .catch(() =>\n            notification.showNotification({\n                text: \"Error while fetching git groups\",\n                type: \"error\",\n            })\n        );\n}\n\nasync function setSelectedGitGroups() {\n    dataTableRows.value.forEach((row) => {\n        if (row.gitGroupID !== 0) {\n            const group = gitGroups.value.groups.find((group) => group.value.id == row.gitGroupID);\n            if (group) {\n                row.gitGroupName = group.value.name;\n            } else {\n                row.gitGroupID = 0;\n            }\n        }\n    });\n    setSelectedMicroservices();\n}\n\nasync function setSelectedMicroservices() {\n    const groupIdList: Array<number> = dataTableRows.value\n        .map((row) => row.gitGroupID)\n        .filter((id, index, self) => id !== 0 && self.indexOf(id) === index);\n\n    groupIdList.forEach((id) => {\n        appSettingsUseCase\n            .getProjectsByGroupId(id)\n            .then((data) => {\n                const group = gitGroups.value.groups.find((group) => group.value.id == id);\n                if (group) {\n                    group.microservicesCache = data;\n                    group.requestedBefore = true;\n                    dataTableRows.value.forEach((row) => {\n                        if (row.gitGroupID === id) {\n                            row.microservices = data;\n                            if (row.microserviceID !== 0) {\n                                const microservice = data.find(\n                                    (service) => service.id == row.microserviceID\n                                );\n                                if (microservice) {\n                                    row.microserviceName = microservice.name;\n                                    row.microservicesDisable = false;\n                                } else {\n                                    row.microserviceID = 0;\n                                    row.microservicesDisable = true;\n                                }\n                            }\n                        }\n                    });\n                }\n            })\n            .catch(() =>\n                notification.showNotification({\n                    text: \"Error while fetching projects\",\n                    type: \"error\",\n                })\n            );\n    });\n}\n\nfunction handleProductSelect() {\n    const product = gitProducts.value.products.find(\n        (product) => product.name === selectedProduct.value.name\n    );\n    if (product) {\n        selectedProduct.value.ID = product.id;\n    } else {\n        selectedProduct.value.name = \"\";\n        selectedProduct.value.ID = 0;\n    }\n}\n\nasync function handleGitGroupInput(selectedRow: IDataTableRow) {\n    debouncer.resetTimer();\n    const selectedGitGroup = gitGroups.value.groups.find(\n        (gitGroup) => gitGroup.value.name === selectedRow.gitGroupName\n    );\n    const currentRow = dataTableRows.value.find((row) => row.moduleID == selectedRow.moduleID)!;\n    currentRow.microservicesDisable = true;\n    currentRow.microservices = [];\n    currentRow.microserviceName = \"\";\n    currentRow.microserviceID = 0;\n\n    if (selectedGitGroup) {\n        currentRow.gitGroupID = selectedGitGroup.value.id;\n        currentRow.gitGroupName = selectedGitGroup.value.name;\n\n        if (!selectedGitGroup.requestedBefore) {\n            debouncer.debounce(getMicroservicesByGroupID, 500, selectedGitGroup, currentRow);\n        } else {\n            currentRow.microservices = selectedGitGroup.microservicesCache;\n            currentRow.microservicesDisable = !currentRow.microservices.length;\n        }\n    } else {\n        currentRow.gitGroupName = selectedRow.gitGroupName;\n        currentRow.gitGroupID = 0;\n    }\n}\n\nasync function getMicroservicesByGroupID(selectedGitGroup: IGroup, currentRow: IDataTableRow) {\n    currentRow.microservices = await appSettingsUseCase.getProjectsByGroupId(\n        selectedGitGroup.value.id\n    );\n    selectedGitGroup.microservicesCache = currentRow.microservices;\n    selectedGitGroup.requestedBefore = true;\n    currentRow.microservicesDisable = !currentRow.microservices.length;\n}\n\nasync function handleGitGroupChange(selectedRow: IDataTableRow) {\n    const selectedGitGroup = gitGroups.value.groups.find(\n        (gitGroup) => gitGroup.value.name === selectedRow.gitGroupName\n    );\n    const currentRow = dataTableRows.value.find((row) => row.moduleID == selectedRow.moduleID)!;\n    currentRow.gitGroupID = selectedGitGroup?.value?.id || 0;\n    currentRow.gitGroupName = selectedGitGroup?.value?.name || \"\";\n    if (!currentRow.gitGroupID) {\n        currentRow.microservices = [];\n        currentRow.microservicesDisable = true;\n        currentRow.microserviceName = \"\";\n        currentRow.microserviceID = 0;\n    }\n}\n\nfunction handleMicroServiceChange(selectedRow: IDataTableRow) {\n    const selectedMicroservice = selectedRow.microservices.find(\n        (microservice) => microservice.name === selectedRow.microserviceName\n    );\n    const currentRow = dataTableRows.value.find((row) => row.moduleID == selectedRow.moduleID)!;\n    currentRow.microserviceName = selectedMicroservice?.name || \"\";\n    currentRow.microserviceID = selectedMicroservice?.id || 0;\n}\n\nasync function onSave() {\n    if (currentApp.value) {\n        let settings = {};\n        const modulesSettings: Array<IModuleSettingsItem> = dataTableRows.value\n            .filter(\n                (row) =>\n                    row.microserviceID !=\n                    (viewModel.studio.items.find((item) => item.ID == row.moduleID) as IModule)\n                        .deployParameters?.gitServiceRepoId\n            )\n            .map((row) => ({\n                moduleID: row.moduleID,\n                deployParameters: {\n                    gitGroupId: row.gitGroupID,\n                    gitServiceRepoId: row.microserviceID,\n                },\n            }));\n\n        const applicationSettings: IApplicationSettingsItem = {\n            applicationID: currentApp.value!.ID,\n            deployParameters: {\n                gitProductRepoId: selectedProduct.value.ID,\n            },\n        };\n\n        settings = { modulesSettings };\n\n        if (currentApp.value.deployParameters?.gitProductRepoId != selectedProduct.value.ID) {\n            settings = { ...settings, applicationSettings };\n        }\n\n        await executor.execute(\n            async () => {\n                await appSettingsUseCase.update(settings);\n            },\n            { loading: true }\n        );\n        emit('close');\n    }\n}\n</script>\n\n<template>\n    <h1>Deploy Settings</h1>\n    <label for=\"product-input\">Select Product</label>\n    <input\n        class=\"form-control\"\n        list=\"products\"\n        id=\"product-input\"\n        placeholder=\"Select Product\"\n        v-model=\"selectedProduct.name\"\n        @change=\"handleProductSelect\"\n        :disabled=\"!gitProducts.loaded\"\n    />\n    <datalist id=\"products\">\n        <option value=\"\" disabled selected>Select Product for Application</option>\n        <option v-for=\"product in gitProducts.products\">\n            {{ product.name }}\n        </option>\n    </datalist>\n    <br />\n    <br />\n    <v-client-table\n        ref=\"table\"\n        :data=\"dataTableRows\"\n        :columns=\"appDatatableColumns\"\n        :options=\"optionsDataTable\"\n    >\n        <template #moduleName=\"props\">\n            <span>{{ props.row.moduleName }}</span>\n        </template>\n        <template #gitGroup=\"props\">\n            <input\n                class=\"form-control\"\n                list=\"git-groups\"\n                id=\"git-group-input\"\n                placeholder=\"Select Git Group\"\n                v-model=\"props.row.gitGroupName\"\n                @input=\"handleGitGroupInput(props.row)\"\n                @change=\"handleGitGroupChange(props.row)\"\n                :disabled=\"!gitGroups.loaded\"\n            />\n            <datalist id=\"git-groups\">\n                <option v-for=\"gitGroup in gitGroups.groups\" :value=\"gitGroup.value.name\"></option>\n            </datalist>\n        </template>\n        <template #microservice=\"props\">\n            <input\n                class=\"form-control\"\n                :list=\"props.row.moduleID\"\n                id=\"microservice-input\"\n                placeholder=\"Select Microservice\"\n                v-model=\"props.row.microserviceName\"\n                @change=\"handleMicroServiceChange(props.row)\"\n                :disabled=\"props.row.microservicesDisable\"\n            />\n            <datalist :id=\"props.row.moduleID\">\n                <option\n                    v-for=\"microservice in props.row.microservices\"\n                    :value=\"microservice.name\"\n                ></option>\n            </datalist>\n        </template>\n    </v-client-table>\n    <hr />\n    <div id=\"button-container\">\n        <span type=\"button\" id=\"previous-button\" data-v-33a93b5b=\"\" @click=\"() => emit('close')\">\n            {{ localization.get(\"cancel\") }}\n        </span>\n        <button class=\"default-button\" @click=\"onSave\">{{ localization.get(\"save\") }}</button>\n    </div>\n</template>\n\n<style scoped>\n#product-input {\n    width: 50%;\n}\n#button-container {\n    text-align: end;\n    vertical-align: bottom;\n}\n#previous-button {\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium)\n        var(--unnamed-font-size-20) / var(--unnamed-line-spacing-26)\n        var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    font: normal normal medium 20px/26px Roboto;\n    letter-spacing: 0px;\n    color: #2f3160;\n    opacity: 1;\n    font-weight: bold;\n}\n.default-button {\n    background: #2f3160 0% 0% no-repeat padding-box;\n    border-radius: 4px;\n    opacity: 1;\n    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium)\n        var(--unnamed-font-size-20) / var(--unnamed-line-spacing-26)\n        var(--unnamed-font-family-roboto);\n    letter-spacing: var(--unnamed-character-spacing-0);\n    color: var(--white);\n    font: normal normal medium 20px/26px Roboto;\n    letter-spacing: 0px;\n    color: #ffffff;\n    opacity: 1;\n    margin-left: 10px;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_style_index_0_id_07ef36d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_style_index_0_id_07ef36d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_style_index_0_id_07ef36d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_style_index_0_id_07ef36d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_style_index_0_id_07ef36d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsyringe */ "./node_modules/tsyringe/dist/esm5/index.js");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_infrastructure_ILocalization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../domain/infrastructure/ILocalization */ "./src/domain/infrastructure/ILocalization.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_infrastructure_IDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain/infrastructure/IDebounce */ "./src/domain/infrastructure/IDebounce.ts");
/* harmony import */ var _domain_useCase_IApplicationSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../domain/useCase/IApplicationSettings */ "./src/domain/useCase/IApplicationSettings.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'deploySettings',
    emits: ["close"],
    setup(__props, { expose, emit }) {
        expose();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
            fillDatatableRow();
            getGitGroupsFromProvider();
            getProductsFromProvider();
        });
        const localization = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_infrastructure_ILocalization__WEBPACK_IMPORTED_MODULE_3__.ILocalization);
        const viewModel = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__.IViewModel);
        const executor = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_4__.IUseCaseExecutor);
        const notification = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_7__.INotification);
        const appSettingsUseCase = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IApplicationSettings__WEBPACK_IMPORTED_MODULE_6__.IApplicationSettings);
        const debouncer = tsyringe__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_infrastructure_IDebounce__WEBPACK_IMPORTED_MODULE_5__.IDebounce);
        const gitProducts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ products: [], loaded: false });
        const gitGroups = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ groups: [], loaded: false });
        const currentApp = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(viewModel.apps.find((app) => app.ID == viewModel.studio.appId));
        const selectedProduct = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({ ID: 0, name: "" });
        const dataTableRows = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(Array());
        const appDatatableColumns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["moduleName", "gitGroup", "microservice"]);
        const optionsDataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            filterable: false,
            perPage: 5,
            perPageValues: [],
            headings: {
                name: localization.get("moduleName"),
                gitGroup: localization.get("gitGroup"),
                microservice: localization.get("microservice"),
            },
            sortable: [],
            texts: {
                count: "",
            },
        });
        function fillDatatableRow() {
            dataTableRows.value = viewModel.studio.items
                .filter((item) => item.objectType === "module")
                .map((item) => {
                var _a, _b;
                const module = {
                    moduleID: item.ID,
                    moduleName: item.name,
                    gitGroupName: "",
                    gitGroupID: ((_a = item.deployParameters) === null || _a === void 0 ? void 0 : _a.gitGroupId) || 0,
                    microservices: [],
                    microservicesDisable: true,
                    microserviceName: "",
                    microserviceID: ((_b = item.deployParameters) === null || _b === void 0 ? void 0 : _b.gitServiceRepoId) || 0,
                };
                return module;
            });
        }
        function getProductsFromProvider() {
            appSettingsUseCase
                .getProjectsOfProduct()
                .then((data) => {
                gitProducts.value.products = data;
                gitProducts.value.loaded = true;
                setSelectedProduct();
            })
                .catch(() => {
                notification.showNotification({ text: "Error while fetching products", type: "error" });
            });
        }
        function setSelectedProduct() {
            if (currentApp.value) {
                if (currentApp.value.deployParameters) {
                    const currentProduct = gitProducts.value.products.find((product) => currentApp.value.deployParameters.gitProductRepoId == product.id);
                    if (currentProduct) {
                        selectedProduct.value = {
                            name: currentProduct.name,
                            ID: currentProduct.id,
                        };
                    }
                }
            }
        }
        async function getGitGroupsFromProvider() {
            appSettingsUseCase
                .getGroupNamesWithId()
                .then((data) => {
                data.forEach((fetchedGroup) => gitGroups.value.groups.push({
                    value: fetchedGroup,
                    microservicesCache: [],
                    requestedBefore: false,
                }));
                gitGroups.value.loaded = true;
                setSelectedGitGroups();
            })
                .catch(() => notification.showNotification({
                text: "Error while fetching git groups",
                type: "error",
            }));
        }
        async function setSelectedGitGroups() {
            dataTableRows.value.forEach((row) => {
                if (row.gitGroupID !== 0) {
                    const group = gitGroups.value.groups.find((group) => group.value.id == row.gitGroupID);
                    if (group) {
                        row.gitGroupName = group.value.name;
                    }
                    else {
                        row.gitGroupID = 0;
                    }
                }
            });
            setSelectedMicroservices();
        }
        async function setSelectedMicroservices() {
            const groupIdList = dataTableRows.value
                .map((row) => row.gitGroupID)
                .filter((id, index, self) => id !== 0 && self.indexOf(id) === index);
            groupIdList.forEach((id) => {
                appSettingsUseCase
                    .getProjectsByGroupId(id)
                    .then((data) => {
                    const group = gitGroups.value.groups.find((group) => group.value.id == id);
                    if (group) {
                        group.microservicesCache = data;
                        group.requestedBefore = true;
                        dataTableRows.value.forEach((row) => {
                            if (row.gitGroupID === id) {
                                row.microservices = data;
                                if (row.microserviceID !== 0) {
                                    const microservice = data.find((service) => service.id == row.microserviceID);
                                    if (microservice) {
                                        row.microserviceName = microservice.name;
                                        row.microservicesDisable = false;
                                    }
                                    else {
                                        row.microserviceID = 0;
                                        row.microservicesDisable = true;
                                    }
                                }
                            }
                        });
                    }
                })
                    .catch(() => notification.showNotification({
                    text: "Error while fetching projects",
                    type: "error",
                }));
            });
        }
        function handleProductSelect() {
            const product = gitProducts.value.products.find((product) => product.name === selectedProduct.value.name);
            if (product) {
                selectedProduct.value.ID = product.id;
            }
            else {
                selectedProduct.value.name = "";
                selectedProduct.value.ID = 0;
            }
        }
        async function handleGitGroupInput(selectedRow) {
            debouncer.resetTimer();
            const selectedGitGroup = gitGroups.value.groups.find((gitGroup) => gitGroup.value.name === selectedRow.gitGroupName);
            const currentRow = dataTableRows.value.find((row) => row.moduleID == selectedRow.moduleID);
            currentRow.microservicesDisable = true;
            currentRow.microservices = [];
            currentRow.microserviceName = "";
            currentRow.microserviceID = 0;
            if (selectedGitGroup) {
                currentRow.gitGroupID = selectedGitGroup.value.id;
                currentRow.gitGroupName = selectedGitGroup.value.name;
                if (!selectedGitGroup.requestedBefore) {
                    debouncer.debounce(getMicroservicesByGroupID, 500, selectedGitGroup, currentRow);
                }
                else {
                    currentRow.microservices = selectedGitGroup.microservicesCache;
                    currentRow.microservicesDisable = !currentRow.microservices.length;
                }
            }
            else {
                currentRow.gitGroupName = selectedRow.gitGroupName;
                currentRow.gitGroupID = 0;
            }
        }
        async function getMicroservicesByGroupID(selectedGitGroup, currentRow) {
            currentRow.microservices = await appSettingsUseCase.getProjectsByGroupId(selectedGitGroup.value.id);
            selectedGitGroup.microservicesCache = currentRow.microservices;
            selectedGitGroup.requestedBefore = true;
            currentRow.microservicesDisable = !currentRow.microservices.length;
        }
        async function handleGitGroupChange(selectedRow) {
            var _a, _b;
            const selectedGitGroup = gitGroups.value.groups.find((gitGroup) => gitGroup.value.name === selectedRow.gitGroupName);
            const currentRow = dataTableRows.value.find((row) => row.moduleID == selectedRow.moduleID);
            currentRow.gitGroupID = ((_a = selectedGitGroup === null || selectedGitGroup === void 0 ? void 0 : selectedGitGroup.value) === null || _a === void 0 ? void 0 : _a.id) || 0;
            currentRow.gitGroupName = ((_b = selectedGitGroup === null || selectedGitGroup === void 0 ? void 0 : selectedGitGroup.value) === null || _b === void 0 ? void 0 : _b.name) || "";
            if (!currentRow.gitGroupID) {
                currentRow.microservices = [];
                currentRow.microservicesDisable = true;
                currentRow.microserviceName = "";
                currentRow.microserviceID = 0;
            }
        }
        function handleMicroServiceChange(selectedRow) {
            const selectedMicroservice = selectedRow.microservices.find((microservice) => microservice.name === selectedRow.microserviceName);
            const currentRow = dataTableRows.value.find((row) => row.moduleID == selectedRow.moduleID);
            currentRow.microserviceName = (selectedMicroservice === null || selectedMicroservice === void 0 ? void 0 : selectedMicroservice.name) || "";
            currentRow.microserviceID = (selectedMicroservice === null || selectedMicroservice === void 0 ? void 0 : selectedMicroservice.id) || 0;
        }
        async function onSave() {
            var _a;
            if (currentApp.value) {
                let settings = {};
                const modulesSettings = dataTableRows.value
                    .filter((row) => {
                    var _a;
                    return row.microserviceID !=
                        ((_a = viewModel.studio.items.find((item) => item.ID == row.moduleID)
                            .deployParameters) === null || _a === void 0 ? void 0 : _a.gitServiceRepoId);
                })
                    .map((row) => ({
                    moduleID: row.moduleID,
                    deployParameters: {
                        gitGroupId: row.gitGroupID,
                        gitServiceRepoId: row.microserviceID,
                    },
                }));
                const applicationSettings = {
                    applicationID: currentApp.value.ID,
                    deployParameters: {
                        gitProductRepoId: selectedProduct.value.ID,
                    },
                };
                settings = { modulesSettings };
                if (((_a = currentApp.value.deployParameters) === null || _a === void 0 ? void 0 : _a.gitProductRepoId) != selectedProduct.value.ID) {
                    settings = { ...settings, applicationSettings };
                }
                await executor.execute(async () => {
                    await appSettingsUseCase.update(settings);
                }, { loading: true });
                emit('close');
            }
        }
        const __returned__ = { emit, localization, viewModel, executor, notification, appSettingsUseCase, debouncer, gitProducts, gitGroups, currentApp, selectedProduct, dataTableRows, appDatatableColumns, optionsDataTable, fillDatatableRow, getProductsFromProvider, setSelectedProduct, getGitGroupsFromProvider, setSelectedGitGroups, setSelectedMicroservices, handleProductSelect, handleGitGroupInput, getMicroservicesByGroupID, handleGitGroupChange, handleMicroServiceChange, onSave };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=template&id=07ef36d1&scoped=true&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=template&id=07ef36d1&scoped=true&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-07ef36d1"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Deploy Settings", -1 /* HOISTED */));
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", { for: "product-input" }, "Select Product", -1 /* HOISTED */));
const _hoisted_3 = ["disabled"];
const _hoisted_4 = { id: "products" };
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: "",
    selected: ""
}, "Select Product for Application", -1 /* HOISTED */));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */));
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */));
const _hoisted_8 = ["onUpdate:modelValue", "onInput", "onChange", "disabled"];
const _hoisted_9 = { id: "git-groups" };
const _hoisted_10 = ["value"];
const _hoisted_11 = ["list", "onUpdate:modelValue", "onChange", "disabled"];
const _hoisted_12 = ["id"];
const _hoisted_13 = ["value"];
const _hoisted_14 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */));
const _hoisted_15 = { id: "button-container" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_v_client_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-client-table");
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            class: "form-control",
            list: "products",
            id: "product-input",
            placeholder: "Select Product",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.selectedProduct.name) = $event)),
            onChange: $setup.handleProductSelect,
            disabled: !$setup.gitProducts.loaded
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.selectedProduct.name]
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("datalist", _hoisted_4, [
            _hoisted_5,
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.gitProducts.products, (product) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name), 1 /* TEXT */));
            }), 256 /* UNKEYED_FRAGMENT */))
        ]),
        _hoisted_6,
        _hoisted_7,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_client_table, {
            ref: "table",
            data: $setup.dataTableRows,
            columns: $setup.appDatatableColumns,
            options: $setup.optionsDataTable
        }, {
            moduleName: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((props) => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(props.row.moduleName), 1 /* TEXT */)
            ]),
            gitGroup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((props) => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    class: "form-control",
                    list: "git-groups",
                    id: "git-group-input",
                    placeholder: "Select Git Group",
                    "onUpdate:modelValue": ($event) => ((props.row.gitGroupName) = $event),
                    onInput: ($event) => ($setup.handleGitGroupInput(props.row)),
                    onChange: ($event) => ($setup.handleGitGroupChange(props.row)),
                    disabled: !$setup.gitGroups.loaded
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_8), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, props.row.gitGroupName]
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("datalist", _hoisted_9, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.gitGroups.groups, (gitGroup) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                            value: gitGroup.value.name
                        }, null, 8 /* PROPS */, _hoisted_10));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ])
            ]),
            microservice: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((props) => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    class: "form-control",
                    list: props.row.moduleID,
                    id: "microservice-input",
                    placeholder: "Select Microservice",
                    "onUpdate:modelValue": ($event) => ((props.row.microserviceName) = $event),
                    onChange: ($event) => ($setup.handleMicroServiceChange(props.row)),
                    disabled: props.row.microservicesDisable
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_11), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, props.row.microserviceName]
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("datalist", {
                    id: props.row.moduleID
                }, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(props.row.microservices, (microservice) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                            value: microservice.name
                        }, null, 8 /* PROPS */, _hoisted_13));
                    }), 256 /* UNKEYED_FRAGMENT */))
                ], 8 /* PROPS */, _hoisted_12)
            ]),
            _: 1 /* STABLE */
        }, 8 /* PROPS */, ["data", "columns", "options"]),
        _hoisted_14,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                type: "button",
                id: "previous-button",
                "data-v-33a93b5b": "",
                onClick: _cache[1] || (_cache[1] = () => $setup.emit('close'))
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.localization.get("cancel")), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                class: "default-button",
                onClick: $setup.onSave
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.localization.get("save")), 1 /* TEXT */)
        ])
    ], 64 /* STABLE_FRAGMENT */));
}


/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/deploySettings.vue":
/*!*********************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/deploySettings.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deploySettings_vue_vue_type_template_id_07ef36d1_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deploySettings.vue?vue&type=template&id=07ef36d1&scoped=true&ts=true */ "./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=template&id=07ef36d1&scoped=true&ts=true");
/* harmony import */ var _deploySettings_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deploySettings.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _deploySettings_vue_vue_type_style_index_0_id_07ef36d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css */ "./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_deploySettings_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_deploySettings_vue_vue_type_template_id_07ef36d1_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-07ef36d1"],['__file',"src/presentation/vue3/components/dialogs/deploySettings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_style_index_0_id_07ef36d1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=style&index=0&id=07ef36d1&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./deploySettings.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=template&id=07ef36d1&scoped=true&ts=true":
/*!***********************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=template&id=07ef36d1&scoped=true&ts=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_template_id_07ef36d1_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_deploySettings_vue_vue_type_template_id_07ef36d1_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./deploySettings.vue?vue&type=template&id=07ef36d1&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/deploySettings.vue?vue&type=template&id=07ef36d1&scoped=true&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_components_dialogs_deploySettings_vue.js.map