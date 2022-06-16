"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_pages_studio_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bottom-container[data-v-33a93b5b] {\n    display: flex;\n    align-items: center;\n}\n.pencilIcon[data-v-33a93b5b] {\n    text-align: end;\n}\n.right-text[data-v-33a93b5b] {\n    color: #757575;\n    font-size: 17px;\n}\n.left-text[data-v-33a93b5b] {\n    background-color: #ECEDF6;\n    border-radius: 4px;\n}\n.mdi-pencil-outline[data-v-33a93b5b] {\n    cursor: pointer;\n}\n.mdi-pencil-outline[data-v-33a93b5b] {\n    cursor: pointer;\n}\n.top-text[data-v-33a93b5b] {\n    display: flex;\n    margin-top: 38px;\n    margin-left: 37px;\n    align-items: center;\n}\n.treeviewCard[data-v-33a93b5b] {\n    margin-left: 37px;\n    margin-right: 37px;\n    margin-bottom: 37px;\n    text-align: center;\n    width: 100%;\n    height: 500px;\n    border: 1px solid #D5D5D5;\n    overflow: auto;\n}\n.export-btn[data-v-33a93b5b] {\n    background-color: #2F3160;\n    color: #fff;\n    width: 118px;\n}\n.latestVersionBadge[data-v-33a93b5b]{\n    font-size:17px;\n    padding-top: 8px;\n    margin-right: 3px;\n    font-weight: 700;\n}\n.versionText[data-v-33a93b5b]{\n    font-size: 15px;\n}\n.latesDesc[data-v-33a93b5b]{\n    color: rgb(97, 97, 97);\n}\n.export-btn-container[data-v-33a93b5b]{\n    margin-top: 24px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/application/exportApp.vue"],"names":[],"mappings":";AAoKA;IACI,aAAa;IACb,mBAAmB;AACvB;AAEA;IACI,eAAe;AACnB;AAEA;IACI,cAAc;IACd,eAAe;AACnB;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;AAEA;IACI,eAAe;AACnB;AAEA;IACI,eAAe;AACnB;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;AACvB;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,cAAc;AAClB;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;AAChB;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AAEpB;AACA;IACI,eAAe;AACnB;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB","sourcesContent":["<template>\n    <div>\n        <div>\n            <div>\n                <div>\n                    <div class=\"top-text\">\n                        <i class=\"mdi mdi-minus-box mdi-24px me-2 mb-1 ms-0\"></i>\n                        <h5 id=\"selectedModuleNumb\">{{ checkedModules.length }}</h5>\n                        <h6 class=\"ms-2 me-2\" style=\"color: #616161\">of</h6>\n                        <h5 class=\"me-2\">{{ modules.length}}</h5>\n                        <h6 style=\"color: #616161\">modules selected</h6>\n                    </div>\n                    <div style=\"display:flex\">\n                        <div class=\"treeviewCard\">\n                            <tree :nodes=\"treeViewNodes\" :config=\"config\">\n                                <template #after-input=\"{node}\" style='display: flex; align-items: flex-end; '>\n                                    <div v-if=\"node.version != undefined\" style=\"display: flex;width: 100%;\">\n                                        <div class=\"col-12 pencilIcon\">\n                                            <h6 class=\"align-version tree-text ps-3 versionText\"> <span v-if=\"node.version=='System latest'\" class=\"versionBadge latestVersionBadge\">*</span>{{node.version+'   version'}}<i\n                                                    class=\"mdi mdi-pencil-outline ms-1\" @click=\"versionDialog(node)\"></i></h6>\n                                        </div>\n                                    </div>\n                                </template>\n                            </tree>\n\n                          \n\n                        </div>\n\n                    </div>\n\n                    <div style='display:flex; margin-left: 32px;'><h6 style=\"margin-right: 3px;\n                    font-weight: 700;\">* :</h6> <h6 class='latesDesc'>The last major version registered in the system. In case there is no version, the last version registered in the system</h6></div>\n                    <div class=\"row export-btn-container\">\n                        <div class=\"col-12 position-relative\">\n                            <div class=\"position-absolute end-0 me-5 bottom-container\">\n                                <h5 id=\"selectedModel\" class=\"left-text ps-3 pe-3 pb-2 pt-2 mt-1\">\n                                    {{ checkedItems.length }}\n                                    <span class=\"right-text\">Item\n                                        selected</span>\n                                </h5>\n                                <button type=\"button\" class=\"btn-lg export-btn p-1 ms-4 mb-1\" @click=\"create()\" >EXPORT</button>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n</template>\n\n<script setup lang=\"ts\" >\nimport tree from 'vue3-treeview'\nimport \"vue3-treeview/dist/style.css\";\nimport Vue, { computed, defineAsyncComponent, onMounted, ref } from 'vue'\nimport { IExportViewItem, IItemType, IExportItem } from '../../../../domain/model/models';\nimport { IDialog } from \"../../../../domain/presentation/IDialog\";\nimport { stringify } from 'querystring';\nimport { ViewModelManager } from '../../../../application/viewModel/viewModelManager';\nimport { container } from '../../../../domain/core/diContainer';\nimport { IUseCaseExecutor } from '../../../../domain/useCase/IUseCaseExecutor';\nimport { IListModelVersions } from '../../../../domain/useCase/IListModelVersions';\nimport { ICreateExportJob } from '../../../../domain/useCase/ICreateExportJob';\nimport { IRouter } from '../../../../domain/presentation/IRouter';\nimport { IViewModel } from \"../../../../domain/viewModel/IViewModel\";\nimport { ExportType } from '@stechquick/algae/lib/qCloudTemp/exporter';\ninterface IData {\n    selectionData: Array<IExportViewItem>,\n    exportType: ExportType\n\n}\n\n\n\ninterface ITreeViewNode {\n    text: string,\n    name: string,\n    children?: Array<string>\n    state: { checked: boolean },\n    id: string;\n    version?: string;\n    versions?: Array<string>;\n    type: IItemType;\n    isSelected:boolean;\n    path: string,\n    orig: ()=>IExportViewItem;\n}\ntype ITreeViewData = Record<string, ITreeViewNode>;\nconst props = defineProps<IData>();\nconst items = ref(props.selectionData as unknown as Array<IExportViewItem>);\nconst dialog = container.resolve<IDialog>(IDialog);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst treeViewNodes = ref<ITreeViewData>({});\nconst router = container.resolve<IRouter>(IRouter);\nconst selectedTypeName = ref(props.exportType as unknown as ExportType);\nconst viewModel = container.resolve<IViewModel>(IViewModel);\n\n\n\nfunction iterateItemsAndFindChildren(items: Array<IExportViewItem>, path: string) {\n    items.forEach((item,index) => {\n        const curNode: ITreeViewNode = treeViewNodes.value[item.id] = {\n            text: item.name,\n            name: item.name,\n            state: { checked: true },\n            id: item.id,\n            version: (item.type != \"folder\" && item.type != \"module\") ? \"System latest\" : undefined,\n            type: item.type,\n            isSelected: true,\n            path,\n            orig : ()=>item\n        };\n        if (!item.children) { return; }\n\n        curNode.children = item.children.map(child => child.id);\n        iterateItemsAndFindChildren(item.children, path + \"/\" + item.name);\n    });\n}\niterateItemsAndFindChildren(items.value, \"\");\n\nconst roots = items.value.map(item => item.id);\nconst modules = computed(() => items.value.map(item => item.type == \"module\"));\nconst checkedItems = computed(() => Object.keys(treeViewNodes.value).map(key => treeViewNodes.value[key]).filter(item => item.type != \"module\" && item.type != \"folder\").filter(item => item.state.checked));\nconst checkedModules = computed(() => Object.keys(treeViewNodes.value).map(key => treeViewNodes.value[key]).filter(item => item.type == \"module\").filter(item => item.state.checked));\n\nconst config = ref({\n    roots,\n    checkboxes: true,\n    dragAndDrop: true,\n    editable: true,\n    checkMode: 0\n});\n\n// const checkedKeys = Object.keys(treeViewNodes.value).filter(key => treeViewNodes.value[key].state.checked);\n\n\nfunction versionDialog(clickedNode:ITreeViewNode) {\n             dialog.showDialog(defineAsyncComponent(() => import(\"./modelVersionDialog.vue\")), { closable: true, title: 'Change Version', width: '900px', height: 'auto', overflow: 'auto' }, {clickedNode});        \n}\n\nfunction create() {\n    executor.execute(async () => {\n        const items =checkedItems.value\n        await executor.executeUseCase<ICreateExportJob>(ICreateExportJob, {\n            app: { ID: viewModel.studio.appId, name: viewModel.studio.appName },\n            exportType: selectedTypeName.value,\n            selectionData: checkedItems.value.map(item => {return {id:item.id, name:item.name, path:item.path, type:item.type, ver:item.version }}) as any\n\n        });\n    }, { loading: true });\n}\n\n\n\n\n\n</script>\n\n<style scoped>\n\n.bottom-container {\n    display: flex;\n    align-items: center;\n}\n\n.pencilIcon {\n    text-align: end;\n}\n\n.right-text {\n    color: #757575;\n    font-size: 17px;\n}\n\n.left-text {\n    background-color: #ECEDF6;\n    border-radius: 4px;\n}\n\n.mdi-pencil-outline {\n    cursor: pointer;\n}\n\n.mdi-pencil-outline {\n    cursor: pointer;\n}\n\n.top-text {\n    display: flex;\n    margin-top: 38px;\n    margin-left: 37px;\n    align-items: center;\n}\n\n.treeviewCard {\n    margin-left: 37px;\n    margin-right: 37px;\n    margin-bottom: 37px;\n    text-align: center;\n    width: 100%;\n    height: 500px;\n    border: 1px solid #D5D5D5;\n    overflow: auto;\n}\n\n.export-btn {\n    background-color: #2F3160;\n    color: #fff;\n    width: 118px;\n}\n\n.latestVersionBadge{\n    font-size:17px;\n    padding-top: 8px;\n    margin-right: 3px;\n    font-weight: 700;\n\n}\n.versionText{\n    font-size: 15px;\n}\n\n.latesDesc{\n    color: rgb(97, 97, 97);\n}\n.export-btn-container{\n    margin-top: 24px;\n}\n\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nbutton[data-v-6c32e973] {\n  margin-left: 5px;\n}\nheader[data-v-6c32e973] {\n  height: 20px;\n  background: #3c3c3c;\n  color: gray;\n  display: flex;\n}\nbody[data-v-6c32e973]{\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #ECEFF1 !important;\n}\n.top-menu[data-v-6c32e973] {\n    height: 72px;\n    width: 100%;\n    border-bottom: 1px solid #D5D5D5;\n    background-color: #fff;\n}\n.corner-container[data-v-6c32e973] {\n       margin-top: 6px;\n       margin-left: 6px;\n}\n.logo-container[data-v-6c32e973] {\n    display: flex;\n    width: fit-content;\n    padding-right: 14px;\n    cursor: pointer;\n}\n.logo-container[data-v-6c32e973]:hover{\n   background-color: #2F3160;\n    border-radius: 5px;\n}\n.vl[data-v-6c32e973] {\n  border-left: 2px solid #DEE1E2;\n  height: 59px;\n  margin-top: 6px;\n}\n.menu[data-v-6c32e973] {\n    background-color: #2F3160 !important;\n    width: 223px !important;\n}\n.menu-item[data-v-6c32e973] {\n    color: #fff !important;\n    font-weight: 600 !important;\n    margin-bottom: 4px;\n    font-size: 12px;\n}\n.menu-item[data-v-6c32e973]:hover {\n    background-color: #4F537B !important;\n}\n.chevron-down[data-v-6c32e973] {\n    color: #A1A1A1;\n    margin-top: 5px;\n    cursor: pointer;\n}\n.title-container[data-v-6c32e973] {\n    display: flex;\n    align-content: center;\n}\n.title[data-v-6c32e973] {\n    margin-left: 10px;\n    color: #212121;\n    font-weight: 700;\n    font-size: 18px;\n}\n.title-logo[data-v-6c32e973] {\n    border-radius: 50%;\n    border: 2px solid #ECEFF1;\n}\n.tabs[data-v-6c32e973] {\n    display: flex;\n    margin-left: 18px;\n    margin-top: -19px;\n}\n.middle-container[data-v-6c32e973] {\n    margin-top: 14px;\n}\n.tab-item[data-v-6c32e973] {\n    margin-right: 12px;\n    cursor: pointer;\n}\n.tab-texts[data-v-6c32e973] {\n    display: flex;\n    font-size: 14px;\n}\n.tab-settings[data-v-6c32e973] {\n    font-size: 14px;\n    border-bottom: 2px solid #212121;\n}\n.close-icon[data-v-6c32e973] {\n    margin-left: 10px;\n}\nspan[data-v-6c32e973] {\n    padding-bottom: 5px;\n}\n.icons[data-v-6c32e973] {\n    margin-right: 3px;\n}\n.end-container[data-v-6c32e973] {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    margin: 9px;\n}\n.user[data-v-6c32e973] {\n    font-size: 40px;\n    color: red;\n}\n.end-icons[data-v-6c32e973] {\n    margin-right: 8px;\n}\n.play[data-v-6c32e973] {\n    color: #fff;\n}\n.play-button[data-v-6c32e973] {\n    background-color: #1B998B !important;\n    border: 1px solid #1B998B !important;\n}\n.vertical-dots[data-v-6c32e973] {\n    color:#616161;\n    margin:0 10px 0 12px;\n    cursor: pointer;\n}\n.export-button[data-v-6c32e973], .deploy-button[data-v-6c32e973] {\n    background-color: #fff;\n    border: 1px solid #000;\n}\n.menu-export[data-v-6c32e973] {\n    width: 280px;\n    height: 250px;\n    border: 1px solid #000 !important;\n    padding: 2px !important;\n    margin-top: 3px !important;\n}\n.export-menu-items[data-v-6c32e973] {\n    margin: 10px 13px 10px 0;\n    padding-bottom: 1px !important;\n}\n.export-menu-items[data-v-6c32e973]:hover{\n    display: block;\n}\n.export-menu-icon[data-v-6c32e973] {\n    color: #757575;\n    margin-top: 4px;\n    margin-right: 5px;\n}\n.export-menu-text[data-v-6c32e973] {\n    color: #212121;\n    font-size: 14px;\n    font-weight: 700;\n}\n.export-menu-description[data-v-6c32e973] {\n    font-size: 13px;\n}\n.export-text[data-v-6c32e973], .deploy-text[data-v-6c32e973] {\n    font-weight: 600;\n    margin-left: 3px;\n}\n.view-jobs[data-v-6c32e973] {\n    display: flex;\n    justify-content: center;\n    font-size: 16px;\n    color: #14ADFC;\n    font-weight: 700;\n}\n.vertical-nav-studio[data-v-6c32e973] {\n    height: 100vh;\n    width: 56px;\n    background-color: #fff;\n    border: 1px solid #D5D5D5;\n}\n.menu-icon[data-v-6c32e973], .bottom-two[data-v-6c32e973] {\n    margin-top: 4px;\n    color: #2F3160;\n    cursor: pointer;\n    padding-left:5px;\n    padding-right: 5px;\n}\n.explorer-text[data-v-6c32e973] {\n    margin-top: 62px;\n    transform: rotate(270deg);\n    text-orientation: mixed;\n    color: #2F3160;\n    font-size: 20px;\n    font-weight: 600;\n}\n.menu-icon-container[data-v-6c32e973] {\n    display: flex;\n    justify-content: center;\n}\n.bottom-icons[data-v-6c32e973] {\n    display: flex;\n    justify-content: center;\n    font-size: 30px;\n}\n.arrow-left[data-v-6c32e973] {\n    margin-top: 4px;\n    color: #6F749F;\n}\n.bottom-two[data-v-6c32e973]:hover {\n    background-color: #D0D1E9;\n    border-radius: 4px;\n}\n.vertical-nav-expanded[data-v-6c32e973] {\n    height: 100%;\n    width: 335px;\n    background-color: #fff;\n    border: 1px solid #D5D5D5;\n}\n.expanded-menu-container[data-v-6c32e973] {\n    margin: 8px;\n}\n.explorer-text-expanded[data-v-6c32e973] {\n    color: #2F3160;\n    font-size: 18px;\n    font-weight: 650;\n    margin-top: 3px;\n}\n.explorer-container[data-v-6c32e973] {\n    display: flex;\n}\n.chevron-left[data-v-6c32e973] {\n    margin-left: 210px;\n    font-size: 30px;\n    cursor: pointer;\n    margin-top: -10px;\n}\ninput[type=\"search\"][data-v-6c32e973] {\n    border: 1px solid #BCBCBC;\n    border-radius: 2px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    width: 100%;\n    font-size: 18px;\n    padding-left: 33px;\n    margin-right: 25px;\n}\ninput[type=\"search\"][data-v-6c32e973]::placeholder {\n    color: #909090;\n    font-size: 14px;\n}\n.search-icon[data-v-6c32e973] {\n    position: absolute;\n    margin-left: 8px;\n    font-size: 23px;\n    color: #909090;\n}\n.chips-container[data-v-6c32e973] {\n    display: flex;\n    margin-top: 12px;\n    margin-left: 8px;\n    margin-bottom: 20px;\n}\n.chip[data-v-6c32e973] {\n    border-radius: 16px;\n    border: none;\n    margin-right: 3px;\n    color: #fff;\n    padding: 1px 12px 1px 12px;\n    font-size: 13px;\n    font-weight: 500;\n}\n.chip1[data-v-6c32e973] {\n    background-color: #449DD1;\n}\n.chip2[data-v-6c32e973] {\n    background-color:  #E9724C;\n}\n.chip3[data-v-6c32e973] {\n    background-color: #007C77;\n}\n.chip-icons[data-v-6c32e973] {\n    color: #fff;\n    margin-right: 2px;\n}\n.up-icon[data-v-6c32e973] {\n    display: flex;\n    margin-top: -19px;\n    color:  #757575;\n    font-size: 18px;\n}\n.down-icon[data-v-6c32e973] {\n    color:  #757575;\n    font-size: 18px;\n}\n.up-down-icons[data-v-6c32e973] {\n    margin-left: 10px;\n}\nul[data-v-6c32e973], #myUL[data-v-6c32e973] {\n    list-style-type: none;\n}\n#myUL[data-v-6c32e973] {\n  margin: 0;\n  padding: 0;\n}\n.caret[data-v-6c32e973] {\n  cursor: pointer;\n  user-select: none;\n}\n.caret[data-v-6c32e973]::before {\n  display: inline-block;\n  margin-right: 2px;\n}\n.caret-down[data-v-6c32e973]::before {\n  transform: rotate(90deg);\n}\n.nested[data-v-6c32e973] {\n  display: none;\n  margin-left: -23px;\n  margin-bottom: 5px;\n}\n.active[data-v-6c32e973] {\n  display: block;\n  margin-top: 5px;\n}\n.menu-right-icon[data-v-6c32e973] {\n    color: #BCBCBC;\n}\n.inside-folder[data-v-6c32e973] {\n    margin-left: 4px;\n    margin-top: 5px;\n}\n.tree-db-icon[data-v-6c32e973] {\n    color: #E9724C;\n}\n.tree-page-icon[data-v-6c32e973] {\n    color: #449DD1;\n}\n.tree-process-icon[data-v-6c32e973] {\n    color: #007C77;\n}\n.tree-icons[data-v-6c32e973] {\n    margin-right: 4px;\n}\n.tree-items[data-v-6c32e973] {\n    margin-bottom: 5px;\n    color: #757575;\n}\n.tree-text[data-v-6c32e973] {\n    color: #212121;\n}\n.tree-dot[data-v-6c32e973] {\n    padding-left: 130px;\n}\n.plus-1[data-v-6c32e973] {\n    margin-left: 151px;\n}\n.plus-2[data-v-6c32e973] {\n    margin-left: 161px;\n}\n.plus-3[data-v-6c32e973] {\n    margin-left: 145px;\n}\n.vertical-bottom-container[data-v-6c32e973] {\n    width: inherit;\n    margin-bottom: 5px;\n}\n.vertical-bottom-text[data-v-6c32e973] {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-content: center;\n    background-color: #D0D1E9;\n    margin-bottom: 10px;\n}\n.new-module-text[data-v-6c32e973] {\n    padding: 4px 0 4px 0;\n    margin: 0;\n    color: #151233;\n    font-weight: 700;\n}\n.icons-end[data-v-6c32e973] {\n    font-size: 28px;\n}\n.end-arrow[data-v-6c32e973] {\n    margin-right: 206px;\n    margin-left: 10px;\n}\n.head-card[data-v-6c32e973] {\n    width: 1200px;\n    height: 120px;\n    margin: 60px 0 18px 0;\n}\n.head-body[data-v-6c32e973] {\n    margin-top: 15px;\n}\n.settings-logo[data-v-6c32e973] {\n    margin-top: -4px;\n    margin-left: 18px;\n}\n.bottom-card[data-v-6c32e973] {\n    width: 1200px;\n    height: 560px;\n}\n.left-section[data-v-6c32e973] {\n    background-color: #EEEEEE;\n}\n.left-items[data-v-6c32e973] {\n    margin: 15px 0 15px 0;\n    font-size: 20px;\n    color: #757575 !important;\n    font-weight: 600 !important;\n}\n.last-item[data-v-6c32e973] {\n    margin-bottom: 86px;\n}\n.left-items[data-v-6c32e973]:hover {\n    background-color: #fff !important;\n    border-left: 3px solid #151233;\n    color: #151233 !important;\n}\n.remove-gutterx[data-v-6c32e973] {\n    --bs-gutter-x: 0 !important;\n}\n.card-tabs[data-v-6c32e973] {\n    display: flex;\n}\n.card-tab-items[data-v-6c32e973] {\n    margin-right: 32px;\n}\n.switch[data-v-6c32e973] {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 24px;\n}\n.switch input[data-v-6c32e973] { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[data-v-6c32e973] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.slider[data-v-6c32e973]:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\ninput:checked + .slider[data-v-6c32e973] {\n  background-color: #2F3160;\n}\ninput:focus + .slider[data-v-6c32e973] {\n  box-shadow: 0 0 1px #2F3160;\n}\ninput:checked + .slider[data-v-6c32e973]:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.slider.round[data-v-6c32e973] {\n  border-radius: 34px;\n}\n.slider.round[data-v-6c32e973]:before {\n  border-radius: 50%;\n}\n.switch-container[data-v-6c32e973] {\n    display: flex;\n}\n.switch-text1[data-v-6c32e973] {\n    margin-right: 198px;\n}\n.switch-text2[data-v-6c32e973] {\n  margin-right: 105px;\n}\n.form-check-input[data-v-6c32e973]:checked {\n    background-color: #2F3160 !important;\n    border-color: #2F3160 !important;\n}\n.form-check-input[type=checkbox][data-v-6c32e973] {\n    border-radius: 0 !important;\n}\n.radio-container[data-v-6c32e973] {\n    display: flex;\n}\n.save-btn[data-v-6c32e973] {\n    background-color: #2F3160;\n    color: #fff;\n    width: 97px;\n}\n.save-btn-container[data-v-6c32e973] {\n    margin-top: 78px !important;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/studio/header.vue"],"names":[],"mappings":";AAwLA;EACE,gBAAgB;AAClB;AAIA;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,aAAa;AACf;AAMA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,oCAAoC;AACxC;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,sBAAsB;AAC1B;AAEA;OACO,eAAe;OACf,gBAAgB;AAEvB;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AAEnB;AACA;GACG,yBAAyB;IACxB,kBAAkB;AACtB;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,eAAe;AAEjB;AACA;IACI,oCAAoC;IACpC,uBAAuB;AAC3B;AAEA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;AACnB;AAEA;IACI,oCAAoC;AACxC;AAEA;IACI,cAAc;IACd,eAAe;IACf,eAAe;AACnB;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;AACrB;AAEA;IACI,gBAAgB;AACpB;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;AAEA;IACI,aAAa;IACb,eAAe;AACnB;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;AAEA;IACI,iBAAiB;AACrB;AAEA;IACI,mBAAmB;AACvB;AAEA;IACI,iBAAiB;AACrB;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;AACf;AAEA;IACI,eAAe;IACf,UAAU;AACd;AAEA;IACI,iBAAiB;AACrB;AAEA;IACI,WAAW;AACf;AAEA;IACI,oCAAoC;IACpC,oCAAoC;AACxC;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,eAAe;AACnB;AAEA;IACI,sBAAsB;IACtB,sBAAsB;AAC1B;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC,uBAAuB;IACvB,0BAA0B;AAC9B;AAEA;IACI,wBAAwB;IACxB,8BAA8B;AAClC;AAEA;IACI,cAAc;AAClB;AAEA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;AAEA;IACI,eAAe;AACnB;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,cAAc;IACd,gBAAgB;AACpB;AAEA;IACI,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,yBAAyB;AAC7B;AAEA;IACI,eAAe;IACf,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;AAEA;IACI,eAAe;IACf,cAAc;AAClB;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,yBAAyB;AAC7B;AAEA;IACI,WAAW;AACf;AAEA;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,eAAe;AACnB;AAEA;IACI,aAAa;AACjB;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;AAEA;IACI,cAAc;IACd,eAAe;AACnB;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,cAAc;AAClB;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;AACpB;AAEA;IACI,yBAAyB;AAC7B;AAEA;IACI,0BAA0B;AAC9B;AAEA;IACI,yBAAyB;AAC7B;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,eAAe;AACnB;AAEA;IACI,eAAe;IACf,eAAe;AACnB;AAEA;IACI,iBAAiB;AACrB;AAEA;IACI,qBAAqB;AACzB;AAEA;EACE,SAAS;EACT,UAAU;AACZ;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;AAEA;EACE,wBAAwB;AAC1B;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;AAEA;EACE,cAAc;EACd,eAAe;AACjB;AAEA;IACI,cAAc;AAClB;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;AAEA;IACI,cAAc;AAClB;AAEA;IACI,cAAc;AAClB;AAEA;IACI,cAAc;AAClB;AAEA;IACI,iBAAiB;AACrB;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;AAEA;IACI,cAAc;AAClB;AAEA;IACI,mBAAmB;AACvB;AAEA;IACI,kBAAkB;AACtB;AAEA;IACI,kBAAkB;AACtB;AAEA;IACI,kBAAkB;AACtB;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;AACvB;AAEA;IACI,oBAAoB;IACpB,SAAS;IACT,cAAc;IACd,gBAAgB;AACpB;AAEA;IACI,eAAe;AACnB;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;AAEA;IACI,aAAa;IACb,aAAa;IACb,qBAAqB;AACzB;AAEA;IACI,gBAAgB;AACpB;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AAEA;IACI,aAAa;IACb,aAAa;AACjB;AAEA;IACI,yBAAyB;AAC7B;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,yBAAyB;IACzB,2BAA2B;AAC/B;AAEA;IACI,mBAAmB;AACvB;AAEA;IACI,iCAAiC;IACjC,8BAA8B;IAC9B,yBAAyB;AAC7B;AAEA;IACI,2BAA2B;AAC/B;AAEA;IACI,aAAa;AACjB;AAEA;IACI,kBAAkB;AACtB;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;AAChB;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,eAAe;AACjB;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,2BAA2B;AAC7B;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,kBAAkB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,mBAAmB;AACvB;AACA;EACE,mBAAmB;AACrB;AAEA;IACI,oCAAoC;IACpC,gCAAgC;AACpC;AAEA;IACI,2BAA2B;AAC/B;AAEA;IACI,aAAa;AACjB;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,WAAW;AACf;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["<script setup lang=\"ts\">\nimport { computed } from '@vue/reactivity';\nimport { defineAsyncComponent } from 'vue';\nimport { container } from '../../../../domain/core/diContainer';\nimport { IHeaderButton } from '../../../../domain/model/ui/IHeaderButton';\nimport { IDialog } from '../../../../domain/presentation/IDialog';\nimport { INotification } from '../../../../domain/presentation/INotification';\nimport { IStudio } from '../../../../domain/useCase/IStudio';\nimport { IUseCaseExecutor } from '../../../../domain/useCase/IUseCaseExecutor';\nimport { IViewModel } from '../../../../domain/viewModel/IViewModel';\nimport 'bootstrap/js/dist/dropdown'\nimport { IApplication, IExportViewItem } from '../../../../domain/model/models';\nimport Tabs from \"../../../vue3/components/ui/tabs.vue\";\nimport { ITab, ITabs } from '../../../vue3/components/ui/ITabs'\nimport { ref } from 'vue';\nimport { IGetExportSelectionData } from '../../../../domain/useCase/IGetExportSelectionData';\nimport { IRouter } from '../../../../domain/presentation/IRouter';\nimport ExportApp from \"../../components/application/exportApp.vue\";\nimport { ILocalization } from '../../../../domain/infrastructure/ILocalization';\nimport { ExportType } from '@stechquick/algae/lib/qCloudTemp/exporter';\n\n\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst studio = container.resolve<IStudio>(IStudio);\nconst notification = container.resolve<INotification>(INotification);\nconst dialog = container.resolve<IDialog>(IDialog);\nconst selectionData = ref([] as unknown as Array<IExportViewItem>);\nconst router = container.resolve<IRouter>(IRouter);\nconst localization = container.resolve<ILocalization>(ILocalization);\nconst routerParams = router.getRouteParams<{ appID: string }>();\nconst checkedOut = computed(() => viewModel.studio.currentItem?.checkedOut);\nconst props = defineProps<{ app: IApplication }>();\nconst deployTip = ref(\"\");\n\nconst tablist = computed(() => {\n  return viewModel.studio?.openItems?.map(item => {\n    const retVal: ITab = {\n      name: item.name,\n      type:item.modelType,\n      id: item.ID,\n      selected: viewModel.studio.currentItem?.ID == item.ID,\n      modified: item.modified?.model,\n      synced: item.synced,\n      cb: {\n        close: executor.wrap(async () => studio.closeItem(item), { loading: false }),\n        select: executor.wrap(async () => studio.openItem(item), { loading: true }),\n      }\n    };\n    return ref(retVal).value;\n  }) || [];\n});\n\nfunction onCheckout() {\n  const currentItem = viewModel.studio.currentItem;\n  if (!currentItem) { return; }\n\n  executor.execute(async () => studio.checkout(currentItem), { loading: true });\n}\nfunction onSave() {\n  const currentItem = viewModel.studio.currentItem;\n  if (!currentItem) { return; }\n\n  executor.execute(async () => studio.save(currentItem), { loading: true });\n}\nfunction onSavePlus() {\n  dialog.showDialog(defineAsyncComponent(() => import(\"../dialogs/studio/savePlus.vue\")), { closable: true });\n}\nfunction onItemSelect(selectedItem: IHeaderButton) {\n  selectedItem.onSelect();\n}\n\nasync function release() {\n  executor.execute(async () => studio.release(viewModel.studio.currentItem!), { loading: false });\n}\nfunction listExportjobs() { \n    // router.push(\"/main/exportJobList\");\n    dialog.showDialog(defineAsyncComponent(() => import(`../../../vue3/pages/main/exportJob.vue`)), { closable: true, title: \"Export Job List\" ,width:'990px',height:'500px', overflow: 'auto'});\n}\nasync function openExportDialog(exportType:ExportType){\n  executor.execute(async () => {\n    const applicationID = routerParams.appID;\n    selectionData.value =await executor.executeUseCase<IGetExportSelectionData>(IGetExportSelectionData, { applicationID, exportType });\n    // dialog.showDialog(defineAsyncComponent(() => import(`../../components/application/exportApp.vue`)), { closable: true, title: viewModel.studio.appName, width:'auto',height:'auto',overflow:'auto' }, {data:selectionData} );\n    dialog.showDialog(ExportApp, { closable: true, title: viewModel.studio.appName, image:{src: props.app?.logo || '../../../../images/is-bankasi-logo.jpg',width:'50px',height:'50px'}, width:'1000px',height:'750px',overflow:'unset' }, {selectionData: selectionData.value, exportType} );\n      \n  }, { loading: true });\n\n}\nfunction goMainPage(){\n    router.push(\"/main/applicationList\");\n}\n\nfunction checkDeployConditions() {\n    return !viewModel.apps.find((app) => app.ID === viewModel.studio.appId)?.deployParameters?.gitProductRepoId;\n}\n\nfunction showDeployTip() {\n    if (checkDeployConditions()) {\n        deployTip.value = localization.get(\"deployTip\");\n    } else {\n        deployTip.value = \"\"\n    }\n}\n\nfunction openDeployScreen() {\n    dialog.showDialog(defineAsyncComponent(() => import(`../dialogs/deploy/deployScreen.vue`)), { closable: true, title: \"Deploy\", width: \"800px\" })\n}\n</script>\n<template>\n  <div  class=\"top-menu\">\n    <div class=\"row\">\n      <div class=\"col-1\" style='display: flex;'>\n        <div class=\"corner-container\">\n          <div class=\"logo-container\" @click=\"goMainPage\">\n            <img src=\"../../../../images/ide5-logo.PNG\" alt=\"ide5-logo\" width=\"60\" height=\"60\">\n          </div>\n        </div>\n            <div class=\"vl ms-3\"></div>\n      </div>\n\n      <div class=\"col-8\">\n        <div class=\"middle-container\">\n          <div class=\"title-container\">\n            <img src=\"../../../../images/is-bankasi-logo.jpg\" alt=\"is-bankasi-logo\" width=\"24\" height=\"24\"\n              class=\"title-logo\">\n            <p class=\"title\">{{ viewModel.studio.appName }}</p>\n          </div>\n          <div class=\"tabs\">\n            <Tabs :tabs=\"tablist\" height=\"30px\" ref=\"tabComp\"></Tabs>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-3\">\n        <div class=\"end-container position-absolute top-0 end-0\">\n          <button type=\"button\" class=\"btn-sm end-icons export-button\" id=\"dropdownMenuButton1\"\n            data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"mdi mdi-export-variant export\"></i><span\n              class=\"export-text\">Export</span></button>\n          <ul  class=\"dropdown-menu menu-export\" aria-labelledby=\"dropdownMenuButton1\">\n                        <li><a class=\"dropdown-item export-menu-items\" href=\"#\" @click=\"openExportDialog('qui')\"><span class=\"export-menu-text\">Create QUI\n                  Package</span><i\n                  class=\"mdi mdi-chevron-right mdi-24px position-absolute top-1 end-0 export-menu-icon\"></i> <br> <span\n                  class=\"export-menu-description\">Açıklama...</span></a></li>\n            <li ><a class=\"dropdown-item export-menu-items\" href=\"#\" @click=\"openExportDialog('sdk')\"><span class=\"export-menu-text\">Web SDK Package</span><i\n                  class=\"mdi mdi-chevron-right mdi-24px position-absolute top-1 end-0 export-menu-icon\"></i> <br> <span\n                  class=\"export-menu-description\">Açıklama...</span></a></li>\n            <li><a class=\"dropdown-item export-menu-items\" href=\"#\" @click=\"openExportDialog('model')\"><span class=\"export-menu-text\">Export QJson\n                  Models</span><i\n                  class=\"mdi mdi-chevron-right mdi-24px position-absolute top-1 end-0 export-menu-icon\"></i> <br> <span\n                  class=\"export-menu-description\">Açıklama...</span></a></li>\n            <li><a class=\"dropdown-item export-menu-items\" href=\"#\" @click=\"listExportjobs()\"><span class=\"view-jobs\">View Export Jobs</span></a>\n            </li>\n          </ul>\n          <button type=\"button\" class=\"btn-sm end-icons deploy-button\" :disabled=\"checkDeployConditions()\" @pointerenter=\"showDeployTip\" :title=\"deployTip\" @click=\"openDeployScreen\"><i\n              class=\"mdi mdi-rocket-launch-outline deploy\"></i><span class=\"deploy-text\">Deploy</span></button>\n          <!-- <button type=\"button\" class=\"btn-sm btn-light end-icons play-button\"><i\n              class=\"mdi mdi-play play\"></i></button> -->\n          <i class=\"mdi mdi-dots-vertical mdi-24px vertical-dots\" id=\"dropdownMenuButton2\" data-bs-toggle=\"dropdown\"\n            aria-expanded=\"false\"></i>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n            <li><a class=\"dropdown-item\" href=\"#\">Documentation</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Lorem Ipsum</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\">Dolor Sit Amet</a></li>\n          </ul>\n          <i class=\"mdi mdi-alpha-a-circle-outline user\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <header>\n    <span>studio header</span>\n    <template v-if=\"viewModel.studio.currentItem\">\n      <button :disabled=\"checkedOut\" @click=\"onCheckout()\">CheckOut</button>\n      <button :disabled=\"!checkedOut\" @click=\"onSave()\">Save</button>\n      <button :disabled=\"!checkedOut\" @click=\"onSavePlus()\">Save...</button>\n      <button :disabled=\"!checkedOut\" @click=\"release()\">Release</button>\n    </template>\n    <template v-for=\"item in viewModel.studio.header?.dynamicButtons\">\n      <button v-if=\"item.invisible\" :disabled=\"item.disabled\" @click=\"onItemSelect(item)\">{{ item.name }}</button>\n    </template>\n  </header> -->\n</template>\n<style scoped>\n\nbutton {\n  margin-left: 5px;\n}\n\n\n\nheader {\n  height: 20px;\n  background: #3c3c3c;\n  color: gray;\n  display: flex;\n}\n\n\n\n\n\nbody{\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #ECEFF1 !important;\n}\n\n.top-menu {\n    height: 72px;\n    width: 100%;\n    border-bottom: 1px solid #D5D5D5;\n    background-color: #fff;\n}\n\n.corner-container {\n       margin-top: 6px;\n       margin-left: 6px;\n      \n}\n\n.logo-container {\n    display: flex;\n    width: fit-content;\n    padding-right: 14px;\n    cursor: pointer;\n \n}\n.logo-container:hover{\n   background-color: #2F3160;\n    border-radius: 5px;\n}\n\n.vl {\n  border-left: 2px solid #DEE1E2;\n  height: 59px;\n  margin-top: 6px;\n \n}\n.menu {\n    background-color: #2F3160 !important;\n    width: 223px !important;\n}\n\n.menu-item {\n    color: #fff !important;\n    font-weight: 600 !important;\n    margin-bottom: 4px;\n    font-size: 12px;\n}\n\n.menu-item:hover {\n    background-color: #4F537B !important;\n}\n\n.chevron-down {\n    color: #A1A1A1;\n    margin-top: 5px;\n    cursor: pointer;\n}\n\n.title-container {\n    display: flex;\n    align-content: center;\n}\n\n.title {\n    margin-left: 10px;\n    color: #212121;\n    font-weight: 700;\n    font-size: 18px;\n}\n\n.title-logo {\n    border-radius: 50%;\n    border: 2px solid #ECEFF1;\n}\n.tabs {\n    display: flex;\n    margin-left: 18px;\n    margin-top: -19px;\n}\n\n.middle-container {\n    margin-top: 14px;\n}\n\n.tab-item {\n    margin-right: 12px;\n    cursor: pointer;\n}\n\n.tab-texts {\n    display: flex;\n    font-size: 14px;\n}\n\n.tab-settings {\n    font-size: 14px;\n    border-bottom: 2px solid #212121;\n}\n\n.close-icon {\n    margin-left: 10px;\n}\n\nspan {\n    padding-bottom: 5px;\n}\n\n.icons {\n    margin-right: 3px;\n}\n\n.end-container {\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    margin: 9px;\n}\n\n.user {\n    font-size: 40px;\n    color: red;\n}\n\n.end-icons {\n    margin-right: 8px;\n}\n\n.play {\n    color: #fff;\n}\n\n.play-button {\n    background-color: #1B998B !important;\n    border: 1px solid #1B998B !important;\n}\n\n.vertical-dots {\n    color:#616161;\n    margin:0 10px 0 12px;\n    cursor: pointer;\n}\n\n.export-button, .deploy-button {\n    background-color: #fff;\n    border: 1px solid #000;\n}\n\n.menu-export {\n    width: 280px;\n    height: 250px;\n    border: 1px solid #000 !important;\n    padding: 2px !important;\n    margin-top: 3px !important;\n}\n\n.export-menu-items {\n    margin: 10px 13px 10px 0;\n    padding-bottom: 1px !important;\n}\n\n.export-menu-items:hover{\n    display: block;\n}\n\n.export-menu-icon {\n    color: #757575;\n    margin-top: 4px;\n    margin-right: 5px;\n}\n\n.export-menu-text {\n    color: #212121;\n    font-size: 14px;\n    font-weight: 700;\n}\n\n.export-menu-description {\n    font-size: 13px;\n}\n\n.export-text, .deploy-text {\n    font-weight: 600;\n    margin-left: 3px;\n}\n\n.view-jobs {\n    display: flex;\n    justify-content: center;\n    font-size: 16px;\n    color: #14ADFC;\n    font-weight: 700;\n}\n\n.vertical-nav-studio {\n    height: 100vh;\n    width: 56px;\n    background-color: #fff;\n    border: 1px solid #D5D5D5;\n}\n\n.menu-icon, .bottom-two {\n    margin-top: 4px;\n    color: #2F3160;\n    cursor: pointer;\n    padding-left:5px;\n    padding-right: 5px;\n}\n\n.explorer-text {\n    margin-top: 62px;\n    transform: rotate(270deg);\n    text-orientation: mixed;\n    color: #2F3160;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.menu-icon-container {\n    display: flex;\n    justify-content: center;\n}\n\n.bottom-icons {\n    display: flex;\n    justify-content: center;\n    font-size: 30px;\n}\n\n.arrow-left {\n    margin-top: 4px;\n    color: #6F749F;\n}\n\n.bottom-two:hover {\n    background-color: #D0D1E9;\n    border-radius: 4px;\n}\n\n.vertical-nav-expanded {\n    height: 100%;\n    width: 335px;\n    background-color: #fff;\n    border: 1px solid #D5D5D5;\n}\n\n.expanded-menu-container {\n    margin: 8px;\n}\n\n.explorer-text-expanded {\n    color: #2F3160;\n    font-size: 18px;\n    font-weight: 650;\n    margin-top: 3px;\n}\n\n.explorer-container {\n    display: flex;\n}\n\n.chevron-left {\n    margin-left: 210px;\n    font-size: 30px;\n    cursor: pointer;\n    margin-top: -10px;\n}\n\ninput[type=\"search\"] {\n    border: 1px solid #BCBCBC;\n    border-radius: 2px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    width: 100%;\n    font-size: 18px;\n    padding-left: 33px;\n    margin-right: 25px;\n}\n\ninput[type=\"search\"]::placeholder {\n    color: #909090;\n    font-size: 14px;\n}\n\n.search-icon {\n    position: absolute;\n    margin-left: 8px;\n    font-size: 23px;\n    color: #909090;\n}\n\n.chips-container {\n    display: flex;\n    margin-top: 12px;\n    margin-left: 8px;\n    margin-bottom: 20px;\n}\n\n.chip {\n    border-radius: 16px;\n    border: none;\n    margin-right: 3px;\n    color: #fff;\n    padding: 1px 12px 1px 12px;\n    font-size: 13px;\n    font-weight: 500;\n}\n\n.chip1 {\n    background-color: #449DD1;\n}\n\n.chip2 {\n    background-color:  #E9724C;\n}\n\n.chip3 {\n    background-color: #007C77;\n}\n\n.chip-icons {\n    color: #fff;\n    margin-right: 2px;\n}\n\n.up-icon {\n    display: flex;\n    margin-top: -19px;\n    color:  #757575;\n    font-size: 18px;\n}\n\n.down-icon {\n    color:  #757575;\n    font-size: 18px;\n}\n\n.up-down-icons {\n    margin-left: 10px;\n}\n\nul, #myUL {\n    list-style-type: none;\n}\n  \n#myUL {\n  margin: 0;\n  padding: 0;\n}\n\n.caret {\n  cursor: pointer;\n  user-select: none; \n}\n\n.caret::before {\n  display: inline-block;\n  margin-right: 2px;\n}\n\n.caret-down::before {\n  transform: rotate(90deg);\n}\n\n.nested {\n  display: none;\n  margin-left: -23px;\n  margin-bottom: 5px;\n}\n\n.active {\n  display: block;\n  margin-top: 5px;\n}\n\n.menu-right-icon {\n    color: #BCBCBC;\n}\n\n.inside-folder {\n    margin-left: 4px;\n    margin-top: 5px;\n}\n\n.tree-db-icon {\n    color: #E9724C;\n}\n\n.tree-page-icon {\n    color: #449DD1;\n}\n\n.tree-process-icon {\n    color: #007C77;\n}\n\n.tree-icons {\n    margin-right: 4px;\n}\n\n.tree-items {\n    margin-bottom: 5px;\n    color: #757575;\n}\n\n.tree-text {\n    color: #212121;\n}\n\n.tree-dot {\n    padding-left: 130px;\n}\n\n.plus-1 {\n    margin-left: 151px;\n}\n\n.plus-2 {\n    margin-left: 161px;\n}\n\n.plus-3 {\n    margin-left: 145px;\n}\n\n.vertical-bottom-container {\n    width: inherit;\n    margin-bottom: 5px;\n}\n.vertical-bottom-text {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-content: center;\n    background-color: #D0D1E9;\n    margin-bottom: 10px;\n}\n\n.new-module-text {\n    padding: 4px 0 4px 0;\n    margin: 0;\n    color: #151233;\n    font-weight: 700;\n}\n\n.icons-end {\n    font-size: 28px;\n}\n\n.end-arrow {\n    margin-right: 206px;\n    margin-left: 10px;\n}\n\n.head-card {\n    width: 1200px;\n    height: 120px;\n    margin: 60px 0 18px 0;\n}\n\n.head-body {\n    margin-top: 15px;\n}\n\n.settings-logo {\n    margin-top: -4px;\n    margin-left: 18px;\n}\n\n.bottom-card {\n    width: 1200px;\n    height: 560px;\n}\n\n.left-section {\n    background-color: #EEEEEE;\n}\n\n.left-items {\n    margin: 15px 0 15px 0;\n    font-size: 20px;\n    color: #757575 !important;\n    font-weight: 600 !important;\n}\n\n.last-item {\n    margin-bottom: 86px;\n}\n\n.left-items:hover {\n    background-color: #fff !important;\n    border-left: 3px solid #151233;\n    color: #151233 !important;\n}\n\n.remove-gutterx {\n    --bs-gutter-x: 0 !important;\n}\n\n.card-tabs {\n    display: flex;\n}\n\n.card-tab-items {\n    margin-right: 32px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 24px;\n}\n  \n.switch input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2F3160;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2F3160;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n.switch-container {\n    display: flex;\n}\n.switch-text1 {\n    margin-right: 198px;\n}\n.switch-text2 {\n  margin-right: 105px;\n}\n\n.form-check-input:checked {\n    background-color: #2F3160 !important;\n    border-color: #2F3160 !important;\n}\n\n.form-check-input[type=checkbox] {\n    border-radius: 0 !important;\n}\n\n.radio-container {\n    display: flex;\n}\n\n.save-btn {\n    background-color: #2F3160;\n    color: #fff;\n    width: 97px;\n}\n\n.save-btn-container {\n    margin-top: 78px !important;\n}\n\n\n\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.inherit-height[data-v-2c9aad14] {\n  height: 100%;\n}\nbody[data-v-2c9aad14] {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #ECEFF1 !important;\n}\n.sidebarSection[data-v-2c9aad14]{\n  height: calc(100% - 46px - 33px - 67px - 84px);\n}\n.top-menu[data-v-2c9aad14] {\n  height: 87px;\n  width: 100%;\n  border-bottom: 1px solid #D5D5D5;\n  background-color: #fff;\n}\n.corner-container[data-v-2c9aad14] {\n  margin: 20px;\n}\n.logo-container[data-v-2c9aad14] {\n  display: flex;\n  width: fit-content;\n  padding-right: 14px;\n}\n.vl[data-v-2c9aad14] {\n  width: 1px;\n  height: 53px;\n  border: 1px solid #DEE1E2;\n}\n.menu[data-v-2c9aad14] {\n  background-color: #2F3160 !important;\n  width: 223px !important;\n}\n.menu-item[data-v-2c9aad14] {\n  color: #fff !important;\n  font-weight: 600 !important;\n  margin-bottom: 4px;\n  font-size: 12px;\n}\n.menu-item[data-v-2c9aad14]:hover {\n  background-color: #4F537B !important;\n}\n.chevron-down[data-v-2c9aad14] {\n  color: #A1A1A1;\n  margin-top: 5px;\n  cursor: pointer;\n}\n.title-container[data-v-2c9aad14] {\n  display: flex;\n  align-content: center;\n}\n.title[data-v-2c9aad14] {\n  margin-left: 10px;\n  color: #212121;\n  font-weight: 700;\n  font-size: 18px;\n}\n.title-logo[data-v-2c9aad14] {\n  border-radius: 50%;\n  border: 2px solid #ECEFF1;\n}\n.tabs[data-v-2c9aad14] {\n  display: flex;\n  margin-left: 18px;\n}\n.treeview-collapse-icon[data-v-2c9aad14] {\n  display: flex;\n}\n.collapse-icon[data-v-2c9aad14] {\n  color: black;\n}\n.middle-container[data-v-2c9aad14] {\n  margin-left: -25px;\n  margin-top: 14px;\n}\n.tab-item[data-v-2c9aad14] {\n  margin-right: 12px;\n  cursor: pointer;\n}\n.tab-texts[data-v-2c9aad14] {\n  display: flex;\n  font-size: 14px;\n}\n.tab-settings[data-v-2c9aad14] {\n  font-size: 14px;\n  border-bottom: 2px solid #212121;\n}\n.close-icon[data-v-2c9aad14] {\n  margin-left: 10px;\n}\nspan[data-v-2c9aad14] {\n  padding-bottom: 5px;\n}\n.icons[data-v-2c9aad14] {\n  margin-right: 3px;\n}\n.end-container[data-v-2c9aad14] {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  margin: 9px;\n}\n.user[data-v-2c9aad14] {\n  font-size: 40px;\n  color: red;\n}\n.end-icons[data-v-2c9aad14] {\n  margin-right: 8px;\n}\n.play[data-v-2c9aad14] {\n  color: #fff;\n}\n.play-button[data-v-2c9aad14] {\n  background-color: #1B998B !important;\n  border: 1px solid #1B998B !important;\n}\n.vertical-dots[data-v-2c9aad14] {\n  color: #616161;\n  margin: 0 10px 0 12px;\n  cursor: pointer;\n}\n.export-button[data-v-2c9aad14],\n.deploy-button[data-v-2c9aad14] {\n  background-color: #fff;\n  border: 1px solid #000;\n}\n.menu-export[data-v-2c9aad14] {\n  width: 280px;\n  height: 250px;\n  border: 1px solid #000 !important;\n  padding: 2px !important;\n  margin-top: 3px !important;\n}\n.export-menu-items[data-v-2c9aad14] {\n  margin: 10px 13px 10px 0;\n  padding-bottom: 1px !important;\n}\n.export-menu-items[data-v-2c9aad14]:hover {\n  display: block;\n}\n.export-menu-icon[data-v-2c9aad14] {\n  color: #757575;\n  margin-top: 4px;\n  margin-right: 5px;\n}\n.export-menu-text[data-v-2c9aad14] {\n  color: #212121;\n  font-size: 14px;\n  font-weight: 700;\n}\n.export-menu-description[data-v-2c9aad14] {\n  font-size: 13px;\n}\n.export-text[data-v-2c9aad14],\n.deploy-text[data-v-2c9aad14] {\n  font-weight: 600;\n  margin-left: 3px;\n}\n.view-jobs[data-v-2c9aad14] {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  color: #14ADFC;\n  font-weight: 700;\n}\n.vertical-nav-studio[data-v-2c9aad14] {\n  height: 100%;\n  width: 56px;\n  position: relative !important;\n  background-color: #fff;\n  border: 1px solid #D5D5D5;\n}\n.menu-icon[data-v-2c9aad14],\n.bottom-two[data-v-2c9aad14] {\n  margin-top: 4px;\n  color: #2F3160;\n  cursor: pointer;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.explorer-text[data-v-2c9aad14] {\n  margin-top: 62px;\n  transform: rotate(270deg);\n  text-orientation: mixed;\n  color: #2F3160;\n  font-size: 20px;\n  font-weight: 600;\n}\n.menu-icon-container[data-v-2c9aad14] {\n  display: flex;\n  justify-content: center;\n}\n.bottom-icons[data-v-2c9aad14] {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n}\n.arrow-left[data-v-2c9aad14] {\n  margin-top: 4px;\n  color: #6F749F;\n}\n.bottom-two[data-v-2c9aad14]:hover {\n  background-color: #D0D1E9;\n  border-radius: 4px;\n}\n.vertical-nav-expanded[data-v-2c9aad14] {\n  height: 100%;\n  width: 335px;\n  background-color: #fff;\n  border: 1px solid #D5D5D5;\n}\n.expanded-menu-container[data-v-2c9aad14] {\n  margin: 8px;\n  height: 100%;\n}\n.explorer-text-expanded[data-v-2c9aad14] {\n  color: #2F3160;\n  font-size: 18px;\n  font-weight: 650;\n  margin-top: 3px;\n}\n.explorer-container[data-v-2c9aad14] {\n  display: flex;\n}\n.chevron-left[data-v-2c9aad14] {\n  margin-left: 190px;\n  font-size: 30px;\n  cursor: pointer;\n  margin-top: -10px;\n}\ninput[type=\"search\"][data-v-2c9aad14] {\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  width: 100%;\n  font-size: 18px;\n  padding-left: 33px;\n  margin-right: 25px;\n}\ninput[type=\"search\"][data-v-2c9aad14]::placeholder {\n  color: #909090;\n  font-size: 14px;\n}\n.search-icon[data-v-2c9aad14] {\n  position: absolute;\n  margin-left: 8px;\n  font-size: 23px;\n  color: #909090;\n  margin-top: 0px;\n}\n.chips-container[data-v-2c9aad14] {\n  display: flex;\n  margin-top: 12px;\n  margin-left: 8px;\n  margin-bottom: 20px;\n}\n.chip[data-v-2c9aad14] {\n  display: flex;\n  border-radius: 16px;\n  border: none;\n  margin-right: 3px;\n  color: #fff;\n  padding: 1px 12px 1px 12px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chip1[data-v-2c9aad14] {\n  background-color: #449DD1;\n  padding-top: 3px;\n}\n.chip2[data-v-2c9aad14] {\n  background-color: #E9724C;\n  padding-top: 3px;\n}\n.chip3[data-v-2c9aad14] {\n  background-color: #007C77;\n  padding-top: 3px;\n}\n.chip-icons[data-v-2c9aad14] {\n  color: #fff;\n  margin-right: 2px;\n}\n.up-icon[data-v-2c9aad14] {\n  display: flex;\n  margin-top: -19px;\n  color: #757575;\n  font-size: 18px;\n}\n.down-icon[data-v-2c9aad14] {\n  color: #757575;\n  font-size: 18px;\n}\n.up-down-icons[data-v-2c9aad14] {\n  margin-left: 10px;\n}\nul[data-v-2c9aad14],\n#myUL[data-v-2c9aad14] {\n  list-style-type: none;\n}\n#myUL[data-v-2c9aad14] {\n  margin: 0;\n  padding: 0;\n}\n.caret[data-v-2c9aad14] {\n  cursor: pointer;\n  user-select: none;\n}\n.caret[data-v-2c9aad14]::before {\n  display: inline-block;\n  margin-right: 2px;\n}\n.caret-down[data-v-2c9aad14]::before {\n  transform: rotate(90deg);\n}\n.nested[data-v-2c9aad14] {\n  display: none;\n  margin-left: -23px;\n  margin-bottom: 5px;\n}\n.active[data-v-2c9aad14] {\n  display: block;\n  margin-top: 5px;\n}\n.menu-right-icon[data-v-2c9aad14] {\n  color: #BCBCBC;\n}\n.inside-folder[data-v-2c9aad14] {\n  margin-left: 4px;\n  margin-top: 5px;\n}\n.tree-db-icon[data-v-2c9aad14] {\n  color: #E9724C;\n}\n.tree-page-icon[data-v-2c9aad14] {\n  color: #449DD1;\n}\n.tree-process-icon[data-v-2c9aad14] {\n  color: #007C77;\n}\n.tree-icons[data-v-2c9aad14] {\n  margin-right: 4px;\n}\n.tree-items[data-v-2c9aad14] {\n  margin-bottom: 5px;\n  color: #757575;\n}\n.tree-text[data-v-2c9aad14] {\n  color: #212121;\n}\n.tree-dot[data-v-2c9aad14] {\n  padding-left: 130px;\n}\n.plus-1[data-v-2c9aad14] {\n  margin-left: 151px;\n}\n.plus-2[data-v-2c9aad14] {\n  margin-left: 161px;\n}\n.plus-3[data-v-2c9aad14] {\n  margin-left: 145px;\n}\n.vertical-bottom-container[data-v-2c9aad14] {\n  width: 322px;\n  margin-bottom: 5px;\n  margin-left: -8px;\n}\n.vertical-bottom-text[data-v-2c9aad14] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-content: center;\n  background-color: #D0D1E9;\n  margin-bottom: 10px;\n}\n.new-module-text[data-v-2c9aad14] {\n  padding: 4px 0 4px 0;\n  margin: 0;\n  color: #151233;\n  font-weight: 700;\n}\n.icons-end[data-v-2c9aad14] {\n  font-size: 28px;\n}\n.bottom-row[data-v-2c9aad14] {\n\n  text-align: end;\n}\n.head-card[data-v-2c9aad14] {\n  width: 1200px;\n  height: 120px;\n  margin: 60px 0 18px 0;\n}\n.head-body[data-v-2c9aad14] {\n  margin-top: 15px;\n}\n.settings-logo[data-v-2c9aad14] {\n  margin-top: -4px;\n  margin-left: 18px;\n}\n.bottom-card[data-v-2c9aad14] {\n  width: 1200px;\n  height: 560px;\n}\n.left-section[data-v-2c9aad14] {\n  background-color: #EEEEEE;\n}\n.left-items[data-v-2c9aad14] {\n  margin: 15px 0 15px 0;\n  font-size: 20px;\n  color: #757575 !important;\n  font-weight: 600 !important;\n}\n.last-item[data-v-2c9aad14] {\n  margin-bottom: 86px;\n}\n.left-items[data-v-2c9aad14]:hover {\n  background-color: #fff !important;\n  border-left: 3px solid #151233;\n  color: #151233 !important;\n}\n.remove-gutterx[data-v-2c9aad14] {\n  --bs-gutter-x: 0 !important;\n}\n.card-tabs[data-v-2c9aad14] {\n  display: flex;\n}\n.card-tab-items[data-v-2c9aad14] {\n  margin-right: 32px;\n}\n.switch[data-v-2c9aad14] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n.switch input[data-v-2c9aad14] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider[data-v-2c9aad14] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.slider[data-v-2c9aad14]:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\ninput:checked+.slider[data-v-2c9aad14] {\n  background-color: #2F3160;\n}\ninput:focus+.slider[data-v-2c9aad14] {\n  box-shadow: 0 0 1px #2F3160;\n}\ninput:checked+.slider[data-v-2c9aad14]:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.slider.round[data-v-2c9aad14] {\n  border-radius: 34px;\n}\n.slider.round[data-v-2c9aad14]:before {\n  border-radius: 50%;\n}\n.switch-container[data-v-2c9aad14] {\n  display: flex;\n}\n.switch-text1[data-v-2c9aad14] {\n  margin-right: 198px;\n}\n.switch-text2[data-v-2c9aad14] {\n  margin-right: 105px;\n}\n.form-check-input[data-v-2c9aad14]:checked {\n  background-color: #2F3160 !important;\n  border-color: #2F3160 !important;\n}\n.form-check-input[type=checkbox][data-v-2c9aad14] {\n  border-radius: 0 !important;\n}\n.radio-container[data-v-2c9aad14] {\n  display: flex;\n}\n.save-btn[data-v-2c9aad14] {\n  background-color: #2F3160;\n  color: #fff;\n  width: 97px;\n}\n.save-btn-container[data-v-2c9aad14] {\n  margin-top: 78px !important;\n}\nnav[data-v-2c9aad14] {\n  width: 40px;\n  background: #333333;\n  color: white;\n  text-align: center;\n}\n.logo[data-v-2c9aad14] {\n  width: 30px;\n}\n.navItem[data-v-2c9aad14] {\n  border: 1px solid gray;\n}\n.navSelected[data-v-2c9aad14] {\n  border-color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/studio/navbar.vue"],"names":[],"mappings":";AA4MA;EACE,YAAY;AACd;AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,oCAAoC;AACtC;AACA;EACE,8CAA8C;AAChD;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gCAAgC;EAChC,sBAAsB;AACxB;AAEA;EACE,YAAY;AACd;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;AAEA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;AAEA;EACE,oCAAoC;EACpC,uBAAuB;AACzB;AAEA;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,eAAe;AACjB;AAEA;EACE,oCAAoC;AACtC;AAEA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;AAEA;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;AAEA;EACE,aAAa;AACf;AAEA;EACE,YAAY;AACd;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;AAEA;EACE,aAAa;EACb,eAAe;AACjB;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;AAEA;EACE,iBAAiB;AACnB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,iBAAiB;AACnB;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;AACb;AAEA;EACE,eAAe;EACf,UAAU;AACZ;AAEA;EACE,iBAAiB;AACnB;AAEA;EACE,WAAW;AACb;AAEA;EACE,oCAAoC;EACpC,oCAAoC;AACtC;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,eAAe;AACjB;AAEA;;EAEE,sBAAsB;EACtB,sBAAsB;AACxB;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,uBAAuB;EACvB,0BAA0B;AAC5B;AAEA;EACE,wBAAwB;EACxB,8BAA8B;AAChC;AAEA;EACE,cAAc;AAChB;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;AAEA;EACE,eAAe;AACjB;AAEA;;EAEE,gBAAgB;EAChB,gBAAgB;AAClB;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;AAEA;EACE,YAAY;EACZ,WAAW;EACX,6BAA6B;EAC7B,sBAAsB;EACtB,yBAAyB;AAC3B;AAEA;;EAEE,eAAe;EACf,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,uBAAuB;EACvB,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;AAEA;EACE,eAAe;EACf,cAAc;AAChB;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,yBAAyB;AAC3B;AAEA;EACE,WAAW;EACX,YAAY;AACd;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;AAEA;EACE,aAAa;AACf;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,kBAAkB;AACpB;AAEA;EACE,cAAc;EACd,eAAe;AACjB;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;AACjB;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;AAClB;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;AAEA;EACE,cAAc;EACd,eAAe;AACjB;AAEA;EACE,iBAAiB;AACnB;AAEA;;EAEE,qBAAqB;AACvB;AAEA;EACE,SAAS;EACT,UAAU;AACZ;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;AAEA;EACE,qBAAqB;EACrB,iBAAiB;AACnB;AAEA;EACE,wBAAwB;AAC1B;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;AAEA;EACE,cAAc;EACd,eAAe;AACjB;AAEA;EACE,cAAc;AAChB;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;AAEA;EACE,cAAc;AAChB;AAEA;EACE,cAAc;AAChB;AAEA;EACE,cAAc;AAChB;AAEA;EACE,iBAAiB;AACnB;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;AAEA;EACE,cAAc;AAChB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;AAEA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;AACrB;AAEA;EACE,oBAAoB;EACpB,SAAS;EACT,cAAc;EACd,gBAAgB;AAClB;AAEA;EACE,eAAe;AACjB;AAEA;;EAEE,eAAe;AACjB;AAEA;EACE,aAAa;EACb,aAAa;EACb,qBAAqB;AACvB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AAEA;EACE,aAAa;EACb,aAAa;AACf;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,yBAAyB;EACzB,2BAA2B;AAC7B;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,iCAAiC;EACjC,8BAA8B;EAC9B,yBAAyB;AAC3B;AAEA;EACE,2BAA2B;AAC7B;AAEA;EACE,aAAa;AACf;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,uBAAuB;EACvB,eAAe;AACjB;AAEA;EACE,yBAAyB;AAC3B;AAEA;EACE,2BAA2B;AAC7B;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,kBAAkB;AACpB;AAEA;EACE,aAAa;AACf;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;AAEA;EACE,2BAA2B;AAC7B;AAEA;EACE,aAAa;AACf;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,WAAW;AACb;AAEA;EACE,2BAA2B;AAC7B;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;AAEA;EACE,WAAW;AACb;AAEA;EACE,sBAAsB;AACxB;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["<script setup lang=\"ts\">\nimport { defineAsyncComponent, onMounted } from \"vue\";\nimport { container } from \"../../../../domain/core/diContainer\";\nimport { INavItem } from \"../../../../domain/model/ui/INavItem\";\nimport { ISidebarManager } from \"../../../../domain/objects/ISidebarManager\";\nimport { IStudio } from \"../../../../domain/useCase/IStudio\";\nimport { IViewModel } from \"../../../../domain/viewModel/IViewModel\";\nimport { IViewModelManager } from \"../../../../domain/viewModel/IViewModelManager\";\nimport { computed, ref } from 'vue';\nimport { ITreeView, ITreeViewInstances } from '../../../../domain/presentation/ITreeView';\nimport { IUseCaseExecutor } from \"../../../../domain/useCase/IUseCaseExecutor\";\nimport { IFileExplorer } from \"../../../../domain/useCase/IFileExplorer\";\nimport { IDialog } from \"../../../../domain/presentation/IDialog\";\n\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst sidebarSectionElement = ref<HTMLSelectElement>();\nconst ui = viewModel.studio.ui!;\nconst studio = container.resolve<IStudio>(IStudio);\nconst sidebarManager = container.resolve<ISidebarManager>(ISidebarManager);\nconst item = { \"name\": \"files\", \"sidebarComponent\": \"explorer.vue\", \"selected\": true }\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst dialog = container.resolve<IDialog>(IDialog);\nconst navigationItems =viewModel!.studio!.ui!.navItems\n\nnavigationItems?.forEach(item=>{\n  onNavItemSelect(item)\n})\n\n\nlet initialMenu = document.getElementsByClassName(\"vertical-nav-studio\")[0];\nlet expandedMenu = document.getElementsByClassName(\"vertical-nav-expanded\")[0];\nlet closeMenuIcon = document.getElementsByClassName(\"chevron-left\")[0];\nlet expandMenuIcon = document.getElementsByClassName(\"menu-icon\")[0];\nfunction onNavItemSelect(item: INavItem) {\n  if (item.selected && item.sidebarComponent) {\n    studio.nav_unselect();\n    sidebarManager.hide();\n    return;\n  }\n  if (item.sidebarComponent) {\n    sidebarManager.show(item.sidebarComponent);\n  } else {\n    sidebarManager.hide();\n  }\n  studio.nav_selectItem(item);\n}\nfunction openMenu() {\n  (<any>document.getElementsByClassName(\"vertical-nav-studio\")[0]).style = \"display: none\";\n  (<any>document.getElementsByClassName(\"vertical-nav-expanded\")[0]).style = \"display: block\";\n}\nfunction closeMenu() {\n  (<any>document.getElementsByClassName(\"vertical-nav-expanded\")[0]).style = \"display: none\";\n  (<any>document.getElementsByClassName(\"vertical-nav-studio\")[0]).style = \"display: block\";\n}\nonMounted(() => {\n  (<any>document.getElementsByClassName(\"vertical-nav-expanded\")[0]).style = \"display: none\";\n  document.getElementsByClassName(\"menu-icon\")[0].addEventListener('click', openMenu)\n  document.getElementsByClassName(\"chevron-left\")[0].addEventListener('click', closeMenu)\n  openMenu()\n\n});\nfunction moveHandler(event: MouseEvent) {\n  ui.sidebar.left = (event.x - sidebarSectionElement.value!.offsetLeft - 2);\n}\nfunction mousedown(event: MouseEvent) {\n  window.addEventListener(\"mousemove\", moveHandler);\n  event.preventDefault();\n}\nfunction mouseup() {\n  window.removeEventListener(\"mousemove\", moveHandler);\n}\nasync function collapse() {\n  const treeview = await executor.resolveUseCase<ITreeView>(ITreeViewInstances.FileExplorer);\n  treeview.collapseAll()\n\n}\nasync function addModule() {\n  const fileExplorer = await executor.resolveUseCase<IFileExplorer>(IFileExplorer);\n  fileExplorer.onNewItemSelect(viewModel.studio.appId,viewModel.studio.appName,  'application', 'Module')\n}\nasync function addScreen() {\n  const fileExplorer = await executor.resolveUseCase<IFileExplorer>(IFileExplorer);\n  fileExplorer.onNewItemSelect(viewModel.studio.appId,viewModel.studio.appName,  'application', 'Screen')\n}\n\nasync function attachModuleToApp() {\n  dialog.showDialog(defineAsyncComponent(() => import(`../dialogs/attachModuleToApp.vue`)), {\n    closable: true,\n    title: \"Add Existing Module\",\n    width: \"800px\",\n    closeOnOutClick: true,\n  });\n}\n\nconst leftpx = computed(() => ui.sidebar.left + \"px\")\n\nfunction openSettings() {\n    dialog.showDialog(defineAsyncComponent(() => import(`../dialogs/deploySettings.vue`)), { closable: true, title: \"Settings\", width: \"800px\" })\n}\n\n</script>\n<template>\n  <!-- <div>\n      <img class=\"logo\" src=\"https://www.onplateau.com/img/logo.svg\" />\n    </div> -->\n  <div class=\"contaier \">\n    <div class=\"row \" style=\"height:100%\">\n      <div  class=\"col-3 \">\n        <div class=\"vertical-nav-studio\" v-for=\"item in  viewModel!.studio!.ui!.navItems\" :key=\"item.name\">\n          <div @click=\"onNavItemSelect(item)\">\n            <i class=\"mdi mdi-menu mdi-24px menu-icon menu-icon-container\"></i>\n          </div>\n          <div>\n            <p class=\"explorer-text\">EXPLORER</p>\n          </div>\n          <div class=\"bottom-icons-container position-absolute bottom-0 p-1\">\n            <div>\n              <i class=\"mdi mdi-account-lock bottom-two bottom-icons\"></i>\n            </div>\n            <div>\n              <i class=\"mdi mdi-cog bottom-two bottom-icons\" @click=\"openSettings\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"vertical-nav-expanded\">\n        <div class=\"expanded-menu-container\">\n          <div class=\"explorer-container\">\n            <p class=\"explorer-text-expanded\">EXPLORER</p>\n            <i class=\"mdi mdi-chevron-left chevron-left\" @click=\"onNavItemSelect(item)\"></i>\n          </div>\n          <div class=\"search-bar-container\">\n            <i class=\"mdi mdi-magnify search-icon\"></i>\n            <input type=\"search\" autocomplete=\"off\" placeholder=\"Search\">\n          </div>\n\n          <div class=\"chips-container\">\n            <button type=\"button\" class=\"chip chip1\"><i\n                class=\"mdi mdi-code-not-equal-variant chip-icons\"></i>Pages</button>\n            <button type=\"button\" class=\"chip chip2\"><i class=\"mdi mdi-database chip-icons\"></i>Domains</button>\n            <button type=\"button\" class=\"chip chip3\"><i class=\"mdi mdi-file-tree chip-icons\"></i>Processes</button>\n            <!-- <div class=\"up-down-icons\">\n              <i class=\"mdi mdi-chevron-down down-icon\"></i>\n              <i class=\"mdi mdi-chevron-up up-icon\"></i>\n            </div> -->\n          </div>\n\n          <!-- //app name and collapse button\n          <div class=\"treeview-header-container treeview-collapse-icon\">\n            <div class=\"col-11\">\n              <span style='padding-left: 27px;'>{{ viewModel.studio.appName }}</span>\n            </div>\n            <div class=\"col-1\">\n              <i class=\"mdi mdi-folder-multiple-outline collapse-icon\" style='cursor: pointer;  '\n                @click=\"collapse()\"></i>\n            </div>\n          </div> -->\n          <section v-show=\"ui.sidebar.component\" class=\"sidebarSection\" ref=\"sidebarSectionElement\"\n            :style=\"{ width: leftpx }\">\n            <div class=\"splitter\" :style=\"{ left: leftpx }\" @mousedown=\"mousedown($event)\" @mouseup=\"mouseup\"></div>\n            <keep-alive>\n              <component :is=\"ui.sidebar.component\"></component>\n            </keep-alive>\n          </section>\n\n          <div class=\"vertical-bottom-container position-absolute bottom-0\">\n            <div class=\"vertical-bottom-text\" style='cursor: pointer;' @click=\"addModule()\">\n              <p class=\"new-module-text\"><i class=\"mdi mdi-plus\"></i> Create New Module</p>\n            </div>\n                        <div class=\"vertical-bottom-text\" style='cursor: pointer;' @click=\"addScreen()\">\n              <p class=\"new-module-text\"><i class=\"mdi mdi-plus\"></i> Create New UI Screen</p>\n            </div>\n            <div class=\"vertical-bottom-text\" style='cursor: pointer;' @click=\"attachModuleToApp()\">\n              <p class=\"new-module-text\"><i class=\"mdi mdi-plus\"></i> Add Existing Module </p>\n            </div>\n\n            <div class=\"row bottom-row\">\n              <div class=\"col-12\">\n                <i class=\"mdi mdi-account-lock bottom-two icons-end\"></i>\n                <i class=\"mdi mdi-cog bottom-two icons-end\" @click=\"openSettings\"></i>\n              </div>\n            </div>\n            <!-- <div class=\"vertical-bottom-icons\">\n              <i class=\"mdi mdi-arrow-left-bottom arrow-left icons-end end-arrow\"></i>\n              <i class=\"mdi mdi-account-lock bottom-two icons-end\"></i>\n              <i class=\"mdi mdi-cog bottom-two icons-end\"></i>\n            </div> -->\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!-- <template v-for=\"item in viewModel.studio.ui.navItems\" :key=\"item.name\">\n      <div :class=\"['navItem', item.selected ? 'navSelected':'']\" @click=\"onNavItemSelect(item)\">\n        {{item.name}}\n      </div>\n    </template> -->\n\n</template>\n<style scoped>\n\n\n.inherit-height {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #ECEFF1 !important;\n}\n.sidebarSection{\n  height: calc(100% - 46px - 33px - 67px - 84px);\n}\n\n.top-menu {\n  height: 87px;\n  width: 100%;\n  border-bottom: 1px solid #D5D5D5;\n  background-color: #fff;\n}\n\n.corner-container {\n  margin: 20px;\n}\n\n.logo-container {\n  display: flex;\n  width: fit-content;\n  padding-right: 14px;\n}\n\n.vl {\n  width: 1px;\n  height: 53px;\n  border: 1px solid #DEE1E2;\n}\n\n.menu {\n  background-color: #2F3160 !important;\n  width: 223px !important;\n}\n\n.menu-item {\n  color: #fff !important;\n  font-weight: 600 !important;\n  margin-bottom: 4px;\n  font-size: 12px;\n}\n\n.menu-item:hover {\n  background-color: #4F537B !important;\n}\n\n.chevron-down {\n  color: #A1A1A1;\n  margin-top: 5px;\n  cursor: pointer;\n}\n\n.title-container {\n  display: flex;\n  align-content: center;\n}\n\n.title {\n  margin-left: 10px;\n  color: #212121;\n  font-weight: 700;\n  font-size: 18px;\n}\n\n.title-logo {\n  border-radius: 50%;\n  border: 2px solid #ECEFF1;\n}\n\n.tabs {\n  display: flex;\n  margin-left: 18px;\n}\n\n.treeview-collapse-icon {\n  display: flex;\n}\n\n.collapse-icon {\n  color: black;\n}\n\n.middle-container {\n  margin-left: -25px;\n  margin-top: 14px;\n}\n\n.tab-item {\n  margin-right: 12px;\n  cursor: pointer;\n}\n\n.tab-texts {\n  display: flex;\n  font-size: 14px;\n}\n\n.tab-settings {\n  font-size: 14px;\n  border-bottom: 2px solid #212121;\n}\n\n.close-icon {\n  margin-left: 10px;\n}\n\nspan {\n  padding-bottom: 5px;\n}\n\n.icons {\n  margin-right: 3px;\n}\n\n.end-container {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  margin: 9px;\n}\n\n.user {\n  font-size: 40px;\n  color: red;\n}\n\n.end-icons {\n  margin-right: 8px;\n}\n\n.play {\n  color: #fff;\n}\n\n.play-button {\n  background-color: #1B998B !important;\n  border: 1px solid #1B998B !important;\n}\n\n.vertical-dots {\n  color: #616161;\n  margin: 0 10px 0 12px;\n  cursor: pointer;\n}\n\n.export-button,\n.deploy-button {\n  background-color: #fff;\n  border: 1px solid #000;\n}\n\n.menu-export {\n  width: 280px;\n  height: 250px;\n  border: 1px solid #000 !important;\n  padding: 2px !important;\n  margin-top: 3px !important;\n}\n\n.export-menu-items {\n  margin: 10px 13px 10px 0;\n  padding-bottom: 1px !important;\n}\n\n.export-menu-items:hover {\n  display: block;\n}\n\n.export-menu-icon {\n  color: #757575;\n  margin-top: 4px;\n  margin-right: 5px;\n}\n\n.export-menu-text {\n  color: #212121;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.export-menu-description {\n  font-size: 13px;\n}\n\n.export-text,\n.deploy-text {\n  font-weight: 600;\n  margin-left: 3px;\n}\n\n.view-jobs {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  color: #14ADFC;\n  font-weight: 700;\n}\n\n.vertical-nav-studio {\n  height: 100%;\n  width: 56px;\n  position: relative !important;\n  background-color: #fff;\n  border: 1px solid #D5D5D5;\n}\n\n.menu-icon,\n.bottom-two {\n  margin-top: 4px;\n  color: #2F3160;\n  cursor: pointer;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.explorer-text {\n  margin-top: 62px;\n  transform: rotate(270deg);\n  text-orientation: mixed;\n  color: #2F3160;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.menu-icon-container {\n  display: flex;\n  justify-content: center;\n}\n\n.bottom-icons {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n}\n\n.arrow-left {\n  margin-top: 4px;\n  color: #6F749F;\n}\n\n.bottom-two:hover {\n  background-color: #D0D1E9;\n  border-radius: 4px;\n}\n\n.vertical-nav-expanded {\n  height: 100%;\n  width: 335px;\n  background-color: #fff;\n  border: 1px solid #D5D5D5;\n}\n\n.expanded-menu-container {\n  margin: 8px;\n  height: 100%;\n}\n\n.explorer-text-expanded {\n  color: #2F3160;\n  font-size: 18px;\n  font-weight: 650;\n  margin-top: 3px;\n}\n\n.explorer-container {\n  display: flex;\n}\n\n.chevron-left {\n  margin-left: 190px;\n  font-size: 30px;\n  cursor: pointer;\n  margin-top: -10px;\n}\n\ninput[type=\"search\"] {\n  border: 1px solid #BCBCBC;\n  border-radius: 2px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  width: 100%;\n  font-size: 18px;\n  padding-left: 33px;\n  margin-right: 25px;\n}\n\ninput[type=\"search\"]::placeholder {\n  color: #909090;\n  font-size: 14px;\n}\n\n.search-icon {\n  position: absolute;\n  margin-left: 8px;\n  font-size: 23px;\n  color: #909090;\n  margin-top: 0px;\n}\n\n.chips-container {\n  display: flex;\n  margin-top: 12px;\n  margin-left: 8px;\n  margin-bottom: 20px;\n}\n\n.chip {\n  display: flex;\n  border-radius: 16px;\n  border: none;\n  margin-right: 3px;\n  color: #fff;\n  padding: 1px 12px 1px 12px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chip1 {\n  background-color: #449DD1;\n  padding-top: 3px;\n}\n\n.chip2 {\n  background-color: #E9724C;\n  padding-top: 3px;\n}\n\n.chip3 {\n  background-color: #007C77;\n  padding-top: 3px;\n}\n\n.chip-icons {\n  color: #fff;\n  margin-right: 2px;\n}\n\n.up-icon {\n  display: flex;\n  margin-top: -19px;\n  color: #757575;\n  font-size: 18px;\n}\n\n.down-icon {\n  color: #757575;\n  font-size: 18px;\n}\n\n.up-down-icons {\n  margin-left: 10px;\n}\n\nul,\n#myUL {\n  list-style-type: none;\n}\n\n#myUL {\n  margin: 0;\n  padding: 0;\n}\n\n.caret {\n  cursor: pointer;\n  user-select: none;\n}\n\n.caret::before {\n  display: inline-block;\n  margin-right: 2px;\n}\n\n.caret-down::before {\n  transform: rotate(90deg);\n}\n\n.nested {\n  display: none;\n  margin-left: -23px;\n  margin-bottom: 5px;\n}\n\n.active {\n  display: block;\n  margin-top: 5px;\n}\n\n.menu-right-icon {\n  color: #BCBCBC;\n}\n\n.inside-folder {\n  margin-left: 4px;\n  margin-top: 5px;\n}\n\n.tree-db-icon {\n  color: #E9724C;\n}\n\n.tree-page-icon {\n  color: #449DD1;\n}\n\n.tree-process-icon {\n  color: #007C77;\n}\n\n.tree-icons {\n  margin-right: 4px;\n}\n\n.tree-items {\n  margin-bottom: 5px;\n  color: #757575;\n}\n\n.tree-text {\n  color: #212121;\n}\n\n.tree-dot {\n  padding-left: 130px;\n}\n\n.plus-1 {\n  margin-left: 151px;\n}\n\n.plus-2 {\n  margin-left: 161px;\n}\n\n.plus-3 {\n  margin-left: 145px;\n}\n\n.vertical-bottom-container {\n  width: 322px;\n  margin-bottom: 5px;\n  margin-left: -8px;\n}\n\n.vertical-bottom-text {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-content: center;\n  background-color: #D0D1E9;\n  margin-bottom: 10px;\n}\n\n.new-module-text {\n  padding: 4px 0 4px 0;\n  margin: 0;\n  color: #151233;\n  font-weight: 700;\n}\n\n.icons-end {\n  font-size: 28px;\n}\n\n.bottom-row {\n\n  text-align: end;\n}\n\n.head-card {\n  width: 1200px;\n  height: 120px;\n  margin: 60px 0 18px 0;\n}\n\n.head-body {\n  margin-top: 15px;\n}\n\n.settings-logo {\n  margin-top: -4px;\n  margin-left: 18px;\n}\n\n.bottom-card {\n  width: 1200px;\n  height: 560px;\n}\n\n.left-section {\n  background-color: #EEEEEE;\n}\n\n.left-items {\n  margin: 15px 0 15px 0;\n  font-size: 20px;\n  color: #757575 !important;\n  font-weight: 600 !important;\n}\n\n.last-item {\n  margin-bottom: 86px;\n}\n\n.left-items:hover {\n  background-color: #fff !important;\n  border-left: 3px solid #151233;\n  color: #151233 !important;\n}\n\n.remove-gutterx {\n  --bs-gutter-x: 0 !important;\n}\n\n.card-tabs {\n  display: flex;\n}\n\n.card-tab-items {\n  margin-right: 32px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  background-color: #2F3160;\n}\n\ninput:focus+.slider {\n  box-shadow: 0 0 1px #2F3160;\n}\n\ninput:checked+.slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.switch-container {\n  display: flex;\n}\n\n.switch-text1 {\n  margin-right: 198px;\n}\n\n.switch-text2 {\n  margin-right: 105px;\n}\n\n.form-check-input:checked {\n  background-color: #2F3160 !important;\n  border-color: #2F3160 !important;\n}\n\n.form-check-input[type=checkbox] {\n  border-radius: 0 !important;\n}\n\n.radio-container {\n  display: flex;\n}\n\n.save-btn {\n  background-color: #2F3160;\n  color: #fff;\n  width: 97px;\n}\n\n.save-btn-container {\n  margin-top: 78px !important;\n}\n\nnav {\n  width: 40px;\n  background: #333333;\n  color: white;\n  text-align: center;\n}\n\n.logo {\n  width: 30px;\n}\n\n.navItem {\n  border: 1px solid gray;\n}\n\n.navSelected {\n  border-color: white;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.disabled-item.disabled[data-v-11061044]{\n    cursor: initial;\n    color: lightgrey;\n}\n.topMenuDiv[data-v-11061044] {\n    display: flex;\n    background-color: #F5F5F5;\n    height: 40px;\n    padding-top: 5px;\n}\n.topMenuIcons[data-v-11061044] {\n    color: #4F537B;\n    font-size: 21px;\n    cursor: pointer;\n    padding: 6px;\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/studio/topMenu.vue"],"names":[],"mappings":";AAsFA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;AACpB;AAEA;IACI,cAAc;IACd,eAAe;IACf,eAAe;IACf,YAAY;AAChB","sourcesContent":["<script setup lang=\"ts\">\nimport { IViewModel } from '../../../../domain/viewModel/IViewModel';\nimport { IStudio } from \"../../../../domain/useCase/IStudio\";\nimport { container } from 'tsyringe';\nimport { ITimedOut } from '../../../../domain/useCase/ITimedOut';\nimport { IUseCaseExecutor } from '../../../../domain/useCase/IUseCaseExecutor';\nimport { IDialog } from \"../../../../domain/presentation/IDialog\";\nimport { IAsyncComponentCreator } from '../../../../domain/presentation/IAsyncComponentCreator';\nimport { IObjectUseCase } from '../../../../domain/useCase/IObjectUseCase';\nimport { defineAsyncComponent, ref } from 'vue';\nimport { computed } from '@vue/reactivity';\nconst studio = container.resolve<IStudio>(IStudio);\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst dialog = container.resolve<IDialog>(IDialog);\nconst compCreator = container.resolve<IAsyncComponentCreator>(IAsyncComponentCreator);\nconst modelID = viewModel.studio.currentItem?.ID\nconst objectUseCase = container.resolve<IObjectUseCase>(IObjectUseCase);\n\nconst saveDisabled = computed(() => !viewModel.studio.currentItem?.modified.model || !viewModel.studio.currentItem.checkedOut);\n\nfunction Save() {\n    if (saveDisabled.value) { return; }\n\n    executor.execute(async () => {\n        await studio.save(viewModel.studio.currentItem!)\n    }, { loading: true });\n\n}\n//History Paylooad boş gidiyor\nfunction History() {\n\n    executor.execute(async () => {\n        await dialog.showDialog(compCreator.createModelHistoriesComponent(), { closable: true, title: viewModel.studio.currentItem?.name, closeOnOutClick: true }, { modelID });\n    }, { loading: true });\n\n}\n\nasync function Delete() {\n    await objectUseCase.deleteObject(viewModel.studio.currentItem?.ID!);\n}\n\nfunction Checkin() {\n    executor.execute(async () => {\n        dialog.showDialog(defineAsyncComponent(() => import(\"../../../vue3/components/dialogs/studio/savePlus.vue\")), { closable: true }, {});\n    }, { loading: true });\n\n}\nfunction Checkout(){\n      executor.execute(async () => {\n        await studio.checkout(viewModel.studio.currentItem!)\n    }, { loading: true });\n}\nfunction UndoCheckout(){\n      executor.execute(async () => {\n        await studio.release(viewModel.studio.currentItem!)\n    }, { loading: true });\n}\n\n</script>\n<template>\n    <div class='topMenuDiv'>\n        <div @click=\"Save()\">\n            <i class='mdi mdi-content-save-outline topMenuIcons' :class=\"{'disabled-item':saveDisabled, disabled: saveDisabled}\"></i>\n        </div>\n        <div @click=\"History()\">\n            <i class='mdi mdi-history topMenuIcons'></i>\n        </div>\n        <div v-if=\"viewModel.studio.currentItem?.checkedOut === true\" @click=\"Checkin()\">\n            <i class='mdi mdi-arrow-top-left-bold-outline topMenuIcons'></i>\n        </div>\n        <div v-if=\"viewModel.studio.currentItem?.checkedOut === false\" @click=\"Checkout()\">\n            <i class='mdi mdi-arrow-bottom-right-bold-outline topMenuIcons'></i>\n        </div>\n        <div v-if=\"viewModel.studio.currentItem?.checkedOut === true\" @click=\"UndoCheckout()\">\n            <i class='mdi mdi-arrow-bottom-left topMenuIcons'></i>\n        </div>\n        <div @click=\"Delete()\">\n            <i style='color: red;' class='mdi mdi-delete-outline topMenuIcons'></i>\n        </div>\n        <div v-if=\"viewModel.studio.currentItem?.checkedOut === false\">\n            <i class='mdi mdi-alert topMenuIcons'>Read-Only</i>\n        </div>\n    </div>\n</template>\n<style scoped>\n.disabled-item.disabled{\n    cursor: initial;\n    color: lightgrey;\n}\n.topMenuDiv {\n    display: flex;\n    background-color: #F5F5F5;\n    height: 40px;\n    padding-top: 5px;\n}\n\n.topMenuIcons {\n    color: #4F537B;\n    font-size: 21px;\n    cursor: pointer;\n    padding: 6px;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.hayal[data-v-601528e6] {\n    opacity: 0.3;\n}\n.tab-container[data-v-601528e6] {\n    display: flex;\n    color: rgb(163, 163, 163);\n    overflow-y: hidden;\n    overflow-x: auto;\n    user-select: none;\n}\n.tab-column[data-v-601528e6] {\n    cursor: pointer;\n    padding: 0px 4px;\n    display: flex;\n}\n.tab-selected[data-v-601528e6] {\n    border-bottom: 2px solid black;\n    color: white;\n}\n.tab-content[data-v-601528e6] {\n    display: flex;\n    /* flex:1 1 0%; */\n}\n.tab-icon[data-v-601528e6] {\n    min-width: 10px;\n    color: rgb(68, 157, 209)\n}\n.tab-actions[data-v-601528e6] {\n    min-width: 26px;\n    padding: 0px 7px;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n.tab-modified[data-v-601528e6] {\n    font-size: 6px;\n    padding-left: 2px;\n}\n.tab-close[data-v-601528e6] {\n    font-size: 14px;\n    padding-left: 2px;\n    line-height: 18px;\n    color: #50505a;\n}\n\n/* .tab-close:hover {\n    background-color: #50505a;\n} */\n.tab-text[data-v-601528e6] {\n    color: black\n}\n.qjsonType[data-v-601528e6] {\n    color: rgb(68, 157, 209);\n}\n.processType[data-v-601528e6] {\n    color: #007C77;\n}\n.bpmnType[data-v-601528e6]{\n    color:#007C77\n}\n.entityType[data-v-601528e6]{\n    color: #E9724C\n}\n.tab-container[data-v-601528e6]::-webkit-scrollbar {\n    height: 3px;\n    /* width of the entire scrollbar */\n}\n.tab-container[data-v-601528e6]::-webkit-scrollbar-track {\n    background: transparent;\n    /* color of the tracking area */\n}\n.tab-container[data-v-601528e6]::-webkit-scrollbar-thumb {\n    background-color: blue;\n    /* color of the scroll thumb */\n    border-radius: 20px;\n    /* roundness of the scroll thumb */\n    border: 2px solid orange;\n    /* creates padding around scroll thumb */\n}\n.tab-container[data-v-601528e6]::-webkit-scrollbar-thumb:active {\n    background-color: green;\n    /* color of the scroll thumb */\n    border-radius: 20px;\n    /* roundness of the scroll thumb */\n    border: 2px solid green;\n    /* creates padding around scroll thumb */\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/ui/tabs.vue"],"names":[],"mappings":";AA8FA;IACI,YAAY;AAChB;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;AAEA;IACI,eAAe;IACf;AACJ;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;AACvB;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;;GAEG;AAEH;IACI;AACJ;AAEA;IACI,wBAAwB;AAC5B;AAEA;IACI,cAAc;AAClB;AACA;IACI;AACJ;AACA;IACI;AACJ;AACA;IACI,WAAW;IACX,kCAAkC;AACtC;AAEA;IACI,uBAAuB;IACvB,+BAA+B;AACnC;AAEA;IACI,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,kCAAkC;IAClC,wBAAwB;IACxB,wCAAwC;AAC5C;AAEA;IACI,uBAAuB;IACvB,8BAA8B;IAC9B,mBAAmB;IACnB,kCAAkC;IAClC,uBAAuB;IACvB,wCAAwC;AAC5C","sourcesContent":["<script setup lang=\"ts\">\nimport { onBeforeUnmount, onMounted, ref } from \"vue\";\nimport { ITab, ITabs } from \"./ITabs\";\n\ninterface ITabInternal extends ITab {\n    mouseOver?: boolean;\n    mouseOverActions?: boolean;\n    closeVisible?: boolean;\n}\ninterface ITabsPropsInternal extends ITabsProps {\n    tabs: Array<ITabInternal>;\n}\ninterface ITabsProps {\n    tabs: Array<ITab>;\n    height?: string;\n}\n\nconst props: Readonly<ITabsPropsInternal> = defineProps<ITabsProps>();\nconst tabContainer = ref<HTMLDivElement>(null as any);\nconst wheelHandler = (event: WheelEvent) => {\n    event.preventDefault();\n    tabContainer.value.scrollLeft += event.deltaY / 2;\n};\nonMounted(() => {\n    tabContainer.value.addEventListener(\"wheel\", wheelHandler);\n});\nonBeforeUnmount(() => {\n    tabContainer.value.removeEventListener(\"wheel\", wheelHandler);\n});\n\nfunction mouseOver(tab: ITabInternal, over: boolean) {\n    tab.mouseOver = over;\n    tab.closeVisible = showClose(tab);\n}\nfunction mouseOverActions(tab: ITabInternal, over: boolean) {\n    tab.mouseOverActions = over;\n    tab.closeVisible = showClose(tab);\n}\n\nfunction showClose(tab: ITabInternal) {\n    if (tab.mouseOverActions) { return true; }\n    if (tab.modified) { return false; }\n    if (tab.mouseOver) { return true; }\n    return false;\n}\nfunction closeTab(tab: ITabInternal, index: number) {\n    if (!tab.synced) { return; }\n    tab.cb?.close?.();\n}\nfunction selectTab(tab: ITabInternal) {\n    if (!tab.synced) { return; }\n    if (tab.selected) { return; }\n    tab.cb?.select?.();\n    props.tabs.forEach(eachTab => eachTab.selected = false);\n    tab.selected = true;\n}\n\nfunction getTabIcon(tabType: string) {\n    if (tabType == 'qjson') {\n        return 'mdi mdi mdi-palette qjsonType'\n    }\n    if (tabType == 'process') {\n        return 'mdi mdi mdi-auto-fix processType'\n    }\n    if (tabType == 'entityDesigner') {\n        return 'mdi mdi-database entityType'\n    }\n        if (tabType == 'bpmn') {\n        return 'mdi mdi-vector-polyline bpmnType'\n    }\n}\ndefineExpose({ selectTab } as ITabs);\n\n</script>\n<template>\n    <div class=\"tab-container\" ref=\"tabContainer\">\n        <div v-for=\"(tab, index) in props.tabs\" :class=\"{ hayal: !tab.synced }\" @mouseover=\"mouseOver(tab, true)\"\n            @mouseleave=\"mouseOver(tab, false)\">\n            <div class=\"tab-column\" :style=\"{ lineHeight: props.height }\" :class=\"{ 'tab-selected': tab.selected }\"\n                @click=\"selectTab(tab)\">\n                <div class=\"tab-content\">\n                    <div style='padding-right: 5px;' :class=\"getTabIcon(tab.type)\"></div>\n                    <div class=\"tab-text\">{{ tab.name }}</div>\n                </div>\n                <div class=\"tab-actions\" @mouseover=\"mouseOverActions(tab, true)\"\n                    @mouseleave=\"mouseOverActions(tab, false)\">\n                    <div class=\"tab-modified\" v-show=\"!tab.mouseOverActions && tab.modified\">⚫</div>\n                    <div class=\"tab-close\" v-show=\"tab.closeVisible\" @click.stop=\"closeTab(tab, index)\">X</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n<style scoped>\n.hayal {\n    opacity: 0.3;\n}\n\n.tab-container {\n    display: flex;\n    color: rgb(163, 163, 163);\n    overflow-y: hidden;\n    overflow-x: auto;\n    user-select: none;\n}\n\n.tab-column {\n    cursor: pointer;\n    padding: 0px 4px;\n    display: flex;\n}\n\n.tab-selected {\n    border-bottom: 2px solid black;\n    color: white;\n}\n\n.tab-content {\n    display: flex;\n    /* flex:1 1 0%; */\n}\n\n.tab-icon {\n    min-width: 10px;\n    color: rgb(68, 157, 209)\n}\n\n.tab-actions {\n    min-width: 26px;\n    padding: 0px 7px;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.tab-modified {\n    font-size: 6px;\n    padding-left: 2px;\n}\n\n.tab-close {\n    font-size: 14px;\n    padding-left: 2px;\n    line-height: 18px;\n    color: #50505a;\n}\n\n/* .tab-close:hover {\n    background-color: #50505a;\n} */\n\n.tab-text {\n    color: black\n}\n\n.qjsonType {\n    color: rgb(68, 157, 209);\n}\n\n.processType {\n    color: #007C77;\n}\n.bpmnType{\n    color:#007C77\n}\n.entityType{\n    color: #E9724C\n}\n.tab-container::-webkit-scrollbar {\n    height: 3px;\n    /* width of the entire scrollbar */\n}\n\n.tab-container::-webkit-scrollbar-track {\n    background: transparent;\n    /* color of the tracking area */\n}\n\n.tab-container::-webkit-scrollbar-thumb {\n    background-color: blue;\n    /* color of the scroll thumb */\n    border-radius: 20px;\n    /* roundness of the scroll thumb */\n    border: 2px solid orange;\n    /* creates padding around scroll thumb */\n}\n\n.tab-container::-webkit-scrollbar-thumb:active {\n    background-color: green;\n    /* color of the scroll thumb */\n    border-radius: 20px;\n    /* roundness of the scroll thumb */\n    border: 2px solid green;\n    /* creates padding around scroll thumb */\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.rootSection[data-v-f2efb572] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.columnsSection[data-v-f2efb572] {\n  height: calc(100% - 87px);\n  display: flex;\n}\n.contentSection[data-v-f2efb572] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1;\n}\narticle[data-v-f2efb572] {\n    height: 100%;\n    overflow: auto;\n}\n.frameContainer[data-v-f2efb572] {\n    width: 100%;\n    height: 100%;\n}\niframe[data-v-f2efb572] {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    border: 0px;\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/pages/studio.vue"],"names":[],"mappings":";AAuEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,OAAO;AACT;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;AAEA;IACI,WAAW;IACX,YAAY;AAChB;AAEA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,WAAW;AACf","sourcesContent":["<script setup lang=\"ts\">\nimport { computed, defineAsyncComponent, onMounted, onUnmounted, Ref, ref, watch } from 'vue';\nimport { container } from '../../../domain/core/diContainer';\nimport { IRouter } from '../../../domain/presentation/IRouter';\nimport { IViewModelManager } from '../../../domain/viewModel/IViewModelManager';\nimport { INavItem } from '../../../domain/model/ui/INavItem';\nimport Tabs from \"../components/ui/tabs.vue\";\nimport { ITab, ITabs } from '../components/ui/ITabs';\nimport { IViewModel } from '../../../domain/viewModel/IViewModel';\nimport { ILogger } from '../../../domain/infrastructure/ILogger';\nimport { IStudio } from \"../../../domain/useCase/IStudio\";\nimport { IUseCaseExecutor } from '../../../domain/useCase/IUseCaseExecutor';\n\nimport Navbar from \"../components/studio/navbar.vue\";\nimport TopMenu from \"../components/studio/topMenu.vue\";\nimport Header from \"../components/studio/header.vue\";\nimport SideBar from \"../components/studio/sidebar.vue\";\nimport Footer from \"../components/studio/footer.vue\";\nimport { IApplication } from '../../../domain/model/models';\n\nconst router = container.resolve<IRouter>(IRouter);\nconst studio = container.resolve<IStudio>(IStudio);\nconst viewModel = container.resolve<IViewModel>(IViewModel);\n\nconst viewModelManager = container.resolve<IViewModelManager>(IViewModelManager);\nconst routerParams = router.getRouteParams<{ appID: string }>();\nconst logger = container.resolve<ILogger>(ILogger);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\n\nconst frameContainerDiv = ref<HTMLDivElement>(null as any);\nconst navItems: Array<INavItem> = [{ name: \"files\", sidebarComponent: \"explorer.vue\" }];\n\nconst selectedApp = viewModelManager.findObject(routerParams.appID) as IApplication;\nconst prom = executor.execute(async () => {\n    studio.nav_addNavItems(navItems);\n    await studio.openApp(routerParams.appID);\n}, { loading: true })\n\nonMounted(() => {\n    executor.execute(async () => {\n        await prom;\n        studio.attach(frameContainerDiv.value);\n    }, { loading: false });\n});\nonUnmounted(() => {\n    executor.execute(async () => {\n        studio.nav_removeNavItems(navItems);\n        studio.detach();\n    }, { loading: false });\n});\n\n\nconst contentWidth = computed(() => `calc(100% - ${viewModel.studio.ui!.sidebar.left + 40}px)`);\n</script>\n\n<template>\n    <section class=\"rootSection\">\n        <Header :app=\"selectedApp\" />\n        <section class=\"columnsSection\">\n            <Navbar />\n            <section class=\"contentSection\" :style=\"{ width: contentWidth }\">\n                <article>\n                     <TopMenu  v-if=\"viewModel.studio.openItems?.length || 0\" />\n                    <div class=\"frameContainer\" ref=\"frameContainerDiv\"></div>\n                </article>\n            </section>\n        </section>\n\n    </section>\n</template>\n<style scoped>\n.rootSection {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.columnsSection {\n  height: calc(100% - 87px);\n  display: flex;\n}\n.contentSection {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1;\n}\n\narticle {\n    height: 100%;\n    overflow: auto;\n}\n\n.frameContainer {\n    width: 100%;\n    height: 100%;\n}\n\niframe {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    border: 0px;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/images/ide5-logo.PNG":
/*!**********************************!*\
  !*** ./src/images/ide5-logo.PNG ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0ec3ec59940c20f35b4a93a45b68b29d.PNG");

/***/ }),

/***/ "./src/images/is-bankasi-logo.jpg":
/*!****************************************!*\
  !*** ./src/images/is-bankasi-logo.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ba9dafacc5c3455703c53a8a9cfb0a0e.jpg");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_style_index_0_id_33a93b5b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_style_index_0_id_33a93b5b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_style_index_0_id_33a93b5b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_style_index_0_id_33a93b5b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_style_index_0_id_33a93b5b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_style_index_0_id_6c32e973_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_style_index_0_id_6c32e973_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_style_index_0_id_6c32e973_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_style_index_0_id_6c32e973_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_style_index_0_id_6c32e973_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_style_index_0_id_2c9aad14_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_style_index_0_id_2c9aad14_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_style_index_0_id_2c9aad14_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_style_index_0_id_2c9aad14_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_style_index_0_id_2c9aad14_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_style_index_0_id_11061044_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_style_index_0_id_11061044_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_style_index_0_id_11061044_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_style_index_0_id_11061044_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_style_index_0_id_11061044_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_style_index_0_id_601528e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_style_index_0_id_601528e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_style_index_0_id_601528e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_style_index_0_id_601528e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_style_index_0_id_601528e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_style_index_0_id_f2efb572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_style_index_0_id_f2efb572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_style_index_0_id_f2efb572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_style_index_0_id_f2efb572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_style_index_0_id_f2efb572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vue3_treeview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-treeview */ "./node_modules/vue3-treeview/dist/vue3-treeview.es.js");
/* harmony import */ var vue3_treeview_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-treeview/dist/style.css */ "./node_modules/vue3-treeview/dist/style.css");
/* harmony import */ var _domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../domain/presentation/IDialog */ "./src/domain/presentation/IDialog.ts");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_useCase_ICreateExportJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../domain/useCase/ICreateExportJob */ "./src/domain/useCase/ICreateExportJob.ts");
/* harmony import */ var _domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../domain/presentation/IRouter */ "./src/domain/presentation/IRouter.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'exportApp',
    props: {
        selectionData: { type: Array, required: true },
        exportType: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const items = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.selectionData);
        const dialog = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_4__.container.resolve(_domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_3__.IDialog);
        const executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_4__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__.IUseCaseExecutor);
        const treeViewNodes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        const router = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_4__.container.resolve(_domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_7__.IRouter);
        const selectedTypeName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.exportType);
        const viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_4__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_8__.IViewModel);
        function iterateItemsAndFindChildren(items, path) {
            items.forEach((item, index) => {
                const curNode = treeViewNodes.value[item.id] = {
                    text: item.name,
                    name: item.name,
                    state: { checked: true },
                    id: item.id,
                    version: (item.type != "folder" && item.type != "module") ? "System latest" : undefined,
                    type: item.type,
                    isSelected: true,
                    path,
                    orig: () => item
                };
                if (!item.children) {
                    return;
                }
                curNode.children = item.children.map(child => child.id);
                iterateItemsAndFindChildren(item.children, path + "/" + item.name);
            });
        }
        iterateItemsAndFindChildren(items.value, "");
        const roots = items.value.map(item => item.id);
        const modules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => items.value.map(item => item.type == "module"));
        const checkedItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Object.keys(treeViewNodes.value).map(key => treeViewNodes.value[key]).filter(item => item.type != "module" && item.type != "folder").filter(item => item.state.checked));
        const checkedModules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Object.keys(treeViewNodes.value).map(key => treeViewNodes.value[key]).filter(item => item.type == "module").filter(item => item.state.checked));
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            roots,
            checkboxes: true,
            dragAndDrop: true,
            editable: true,
            checkMode: 0
        });
        // const checkedKeys = Object.keys(treeViewNodes.value).filter(key => treeViewNodes.value[key].state.checked);
        function versionDialog(clickedNode) {
            dialog.showDialog((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_presentation_vue3_components_application_modelVersionDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./modelVersionDialog.vue */ "./src/presentation/vue3/components/application/modelVersionDialog.vue"))), { closable: true, title: 'Change Version', width: '900px', height: 'auto', overflow: 'auto' }, { clickedNode });
        }
        function create() {
            executor.execute(async () => {
                const items = checkedItems.value;
                await executor.executeUseCase(_domain_useCase_ICreateExportJob__WEBPACK_IMPORTED_MODULE_6__.ICreateExportJob, {
                    app: { ID: viewModel.studio.appId, name: viewModel.studio.appName },
                    exportType: selectedTypeName.value,
                    selectionData: checkedItems.value.map(item => { return { id: item.id, name: item.name, path: item.path, type: item.type, ver: item.version }; })
                });
            }, { loading: true });
        }
        const __returned__ = { props, items, dialog, executor, treeViewNodes, router, selectedTypeName, viewModel, iterateItemsAndFindChildren, roots, modules, checkedItems, checkedModules, config, versionDialog, create, tree: vue3_treeview__WEBPACK_IMPORTED_MODULE_1__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../domain/presentation/IDialog */ "./src/domain/presentation/IDialog.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/js/dist/dropdown */ "./node_modules/bootstrap/js/dist/dropdown.js");
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vue3_components_ui_tabs_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../vue3/components/ui/tabs.vue */ "./src/presentation/vue3/components/ui/tabs.vue");
/* harmony import */ var _domain_useCase_IGetExportSelectionData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../domain/useCase/IGetExportSelectionData */ "./src/domain/useCase/IGetExportSelectionData.ts");
/* harmony import */ var _domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../domain/presentation/IRouter */ "./src/domain/presentation/IRouter.ts");
/* harmony import */ var _components_application_exportApp_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/application/exportApp.vue */ "./src/presentation/vue3/components/application/exportApp.vue");
/* harmony import */ var _domain_infrastructure_ILocalization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../domain/infrastructure/ILocalization */ "./src/domain/infrastructure/ILocalization.ts");
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'header',
    props: {
        app: { type: null, required: true }
    },
    setup(__props, { expose }) {
        expose();
        const props = __props;
        const viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_6__.IViewModel);
        const executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__.IUseCaseExecutor);
        const studio = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_4__.IStudio);
        const notification = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__.INotification);
        const dialog = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_2__.IDialog);
        const selectionData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const router = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_10__.IRouter);
        const localization = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_infrastructure_ILocalization__WEBPACK_IMPORTED_MODULE_12__.ILocalization);
        const routerParams = router.getRouteParams();
        const checkedOut = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_13__.computed)(() => { var _a; return (_a = viewModel.studio.currentItem) === null || _a === void 0 ? void 0 : _a.checkedOut; });
        const deployTip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const tablist = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_13__.computed)(() => {
            var _a, _b;
            return ((_b = (_a = viewModel.studio) === null || _a === void 0 ? void 0 : _a.openItems) === null || _b === void 0 ? void 0 : _b.map(item => {
                var _a, _b;
                const retVal = {
                    name: item.name,
                    type: item.modelType,
                    id: item.ID,
                    selected: ((_a = viewModel.studio.currentItem) === null || _a === void 0 ? void 0 : _a.ID) == item.ID,
                    modified: (_b = item.modified) === null || _b === void 0 ? void 0 : _b.model,
                    synced: item.synced,
                    cb: {
                        close: executor.wrap(async () => studio.closeItem(item), { loading: false }),
                        select: executor.wrap(async () => studio.openItem(item), { loading: true }),
                    }
                };
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(retVal).value;
            })) || [];
        });
        function onCheckout() {
            const currentItem = viewModel.studio.currentItem;
            if (!currentItem) {
                return;
            }
            executor.execute(async () => studio.checkout(currentItem), { loading: true });
        }
        function onSave() {
            const currentItem = viewModel.studio.currentItem;
            if (!currentItem) {
                return;
            }
            executor.execute(async () => studio.save(currentItem), { loading: true });
        }
        function onSavePlus() {
            dialog.showDialog((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_presentation_vue3_components_dialogs_studio_savePlus_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/studio/savePlus.vue */ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue"))), { closable: true });
        }
        function onItemSelect(selectedItem) {
            selectedItem.onSelect();
        }
        async function release() {
            executor.execute(async () => studio.release(viewModel.studio.currentItem), { loading: false });
        }
        function listExportjobs() {
            // router.push("/main/exportJobList");
            dialog.showDialog((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_presentation_vue3_pages_main_exportJob_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../vue3/pages/main/exportJob.vue */ "./src/presentation/vue3/pages/main/exportJob.vue"))), { closable: true, title: "Export Job List", width: '990px', height: '500px', overflow: 'auto' });
        }
        async function openExportDialog(exportType) {
            executor.execute(async () => {
                var _a;
                const applicationID = routerParams.appID;
                selectionData.value = await executor.executeUseCase(_domain_useCase_IGetExportSelectionData__WEBPACK_IMPORTED_MODULE_9__.IGetExportSelectionData, { applicationID, exportType });
                // dialog.showDialog(defineAsyncComponent(() => import(`../../components/application/exportApp.vue`)), { closable: true, title: viewModel.studio.appName, width:'auto',height:'auto',overflow:'auto' }, {data:selectionData} );
                dialog.showDialog(_components_application_exportApp_vue__WEBPACK_IMPORTED_MODULE_11__["default"], { closable: true, title: viewModel.studio.appName, image: { src: ((_a = props.app) === null || _a === void 0 ? void 0 : _a.logo) || '../../../../images/is-bankasi-logo.jpg', width: '50px', height: '50px' }, width: '1000px', height: '750px', overflow: 'unset' }, { selectionData: selectionData.value, exportType });
            }, { loading: true });
        }
        function goMainPage() {
            router.push("/main/applicationList");
        }
        function checkDeployConditions() {
            var _a, _b;
            return !((_b = (_a = viewModel.apps.find((app) => app.ID === viewModel.studio.appId)) === null || _a === void 0 ? void 0 : _a.deployParameters) === null || _b === void 0 ? void 0 : _b.gitProductRepoId);
        }
        function showDeployTip() {
            if (checkDeployConditions()) {
                deployTip.value = localization.get("deployTip");
            }
            else {
                deployTip.value = "";
            }
        }
        function openDeployScreen() {
            dialog.showDialog((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_presentation_vue3_components_dialogs_deploy_deployScreen_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/deploy/deployScreen.vue */ "./src/presentation/vue3/components/dialogs/deploy/deployScreen.vue"))), { closable: true, title: "Deploy", width: "800px" });
        }
        const __returned__ = { viewModel, executor, studio, notification, dialog, selectionData, router, localization, routerParams, checkedOut, props, deployTip, tablist, onCheckout, onSave, onSavePlus, onItemSelect, release, listExportjobs, openExportDialog, goMainPage, checkDeployConditions, showDeployTip, openDeployScreen, Tabs: _vue3_components_ui_tabs_vue__WEBPACK_IMPORTED_MODULE_8__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_objects_ISidebarManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../domain/objects/ISidebarManager */ "./src/domain/objects/ISidebarManager.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain/presentation/ITreeView */ "./src/domain/presentation/ITreeView.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../domain/useCase/IFileExplorer */ "./src/domain/useCase/IFileExplorer.ts");
/* harmony import */ var _domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../domain/presentation/IDialog */ "./src/domain/presentation/IDialog.ts");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'navbar',
    setup(__props, { expose }) {
        expose();
        const viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_4__.IViewModel);
        const sidebarSectionElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        const ui = viewModel.studio.ui;
        const studio = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_3__.IStudio);
        const sidebarManager = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_objects_ISidebarManager__WEBPACK_IMPORTED_MODULE_2__.ISidebarManager);
        const item = { "name": "files", "sidebarComponent": "explorer.vue", "selected": true };
        const executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_6__.IUseCaseExecutor);
        const dialog = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_8__.IDialog);
        const navigationItems = viewModel.studio.ui.navItems;
        navigationItems === null || navigationItems === void 0 ? void 0 : navigationItems.forEach(item => {
            onNavItemSelect(item);
        });
        let initialMenu = document.getElementsByClassName("vertical-nav-studio")[0];
        let expandedMenu = document.getElementsByClassName("vertical-nav-expanded")[0];
        let closeMenuIcon = document.getElementsByClassName("chevron-left")[0];
        let expandMenuIcon = document.getElementsByClassName("menu-icon")[0];
        function onNavItemSelect(item) {
            if (item.selected && item.sidebarComponent) {
                studio.nav_unselect();
                sidebarManager.hide();
                return;
            }
            if (item.sidebarComponent) {
                sidebarManager.show(item.sidebarComponent);
            }
            else {
                sidebarManager.hide();
            }
            studio.nav_selectItem(item);
        }
        function openMenu() {
            document.getElementsByClassName("vertical-nav-studio")[0].style = "display: none";
            document.getElementsByClassName("vertical-nav-expanded")[0].style = "display: block";
        }
        function closeMenu() {
            document.getElementsByClassName("vertical-nav-expanded")[0].style = "display: none";
            document.getElementsByClassName("vertical-nav-studio")[0].style = "display: block";
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            document.getElementsByClassName("vertical-nav-expanded")[0].style = "display: none";
            document.getElementsByClassName("menu-icon")[0].addEventListener('click', openMenu);
            document.getElementsByClassName("chevron-left")[0].addEventListener('click', closeMenu);
            openMenu();
        });
        function moveHandler(event) {
            ui.sidebar.left = (event.x - sidebarSectionElement.value.offsetLeft - 2);
        }
        function mousedown(event) {
            window.addEventListener("mousemove", moveHandler);
            event.preventDefault();
        }
        function mouseup() {
            window.removeEventListener("mousemove", moveHandler);
        }
        async function collapse() {
            const treeview = await executor.resolveUseCase(_domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_5__.ITreeViewInstances.FileExplorer);
            treeview.collapseAll();
        }
        async function addModule() {
            const fileExplorer = await executor.resolveUseCase(_domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_7__.IFileExplorer);
            fileExplorer.onNewItemSelect(viewModel.studio.appId, viewModel.studio.appName, 'application', 'Module');
        }
        async function addScreen() {
            const fileExplorer = await executor.resolveUseCase(_domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_7__.IFileExplorer);
            fileExplorer.onNewItemSelect(viewModel.studio.appId, viewModel.studio.appName, 'application', 'Screen');
        }
        async function attachModuleToApp() {
            dialog.showDialog((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_presentation_vue3_components_dialogs_attachModuleToApp_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/attachModuleToApp.vue */ "./src/presentation/vue3/components/dialogs/attachModuleToApp.vue"))), {
                closable: true,
                title: "Add Existing Module",
                width: "800px",
                closeOnOutClick: true,
            });
        }
        const leftpx = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ui.sidebar.left + "px");
        function openSettings() {
            dialog.showDialog((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_presentation_vue3_components_dialogs_deploySettings_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/deploySettings.vue */ "./src/presentation/vue3/components/dialogs/deploySettings.vue"))), { closable: true, title: "Settings", width: "800px" });
        }
        const __returned__ = { viewModel, sidebarSectionElement, ui, studio, sidebarManager, item, executor, dialog, navigationItems, initialMenu, expandedMenu, closeMenuIcon, expandMenuIcon, onNavItemSelect, openMenu, closeMenu, moveHandler, mousedown, mouseup, collapse, addModule, addScreen, attachModuleToApp, leftpx, openSettings };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsyringe */ "./node_modules/tsyringe/dist/esm5/index.js");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain/presentation/IDialog */ "./src/domain/presentation/IDialog.ts");
/* harmony import */ var _domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../domain/presentation/IAsyncComponentCreator */ "./src/domain/presentation/IAsyncComponentCreator.ts");
/* harmony import */ var _domain_useCase_IObjectUseCase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../domain/useCase/IObjectUseCase */ "./src/domain/useCase/IObjectUseCase.ts");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'topMenu',
    setup(__props, { expose }) {
        var _a;
        expose();
        const studio = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_2__.IStudio);
        const viewModel = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_1__.IViewModel);
        const executor = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_4__.IUseCaseExecutor);
        const dialog = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_5__.IDialog);
        const compCreator = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_6__.IAsyncComponentCreator);
        const modelID = (_a = viewModel.studio.currentItem) === null || _a === void 0 ? void 0 : _a.ID;
        const objectUseCase = tsyringe__WEBPACK_IMPORTED_MODULE_3__.container.resolve(_domain_useCase_IObjectUseCase__WEBPACK_IMPORTED_MODULE_7__.IObjectUseCase);
        const saveDisabled = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_8__.computed)(() => { var _a; return !((_a = viewModel.studio.currentItem) === null || _a === void 0 ? void 0 : _a.modified.model) || !viewModel.studio.currentItem.checkedOut; });
        function Save() {
            if (saveDisabled.value) {
                return;
            }
            executor.execute(async () => {
                await studio.save(viewModel.studio.currentItem);
            }, { loading: true });
        }
        //History Paylooad boş gidiyor
        function History() {
            executor.execute(async () => {
                var _a;
                await dialog.showDialog(compCreator.createModelHistoriesComponent(), { closable: true, title: (_a = viewModel.studio.currentItem) === null || _a === void 0 ? void 0 : _a.name, closeOnOutClick: true }, { modelID });
            }, { loading: true });
        }
        async function Delete() {
            var _a;
            await objectUseCase.deleteObject((_a = viewModel.studio.currentItem) === null || _a === void 0 ? void 0 : _a.ID);
        }
        function Checkin() {
            executor.execute(async () => {
                dialog.showDialog((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_presentation_vue3_components_dialogs_studio_savePlus_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../vue3/components/dialogs/studio/savePlus.vue */ "./src/presentation/vue3/components/dialogs/studio/savePlus.vue"))), { closable: true }, {});
            }, { loading: true });
        }
        function Checkout() {
            executor.execute(async () => {
                await studio.checkout(viewModel.studio.currentItem);
            }, { loading: true });
        }
        function UndoCheckout() {
            executor.execute(async () => {
                await studio.release(viewModel.studio.currentItem);
            }, { loading: true });
        }
        const __returned__ = { studio, viewModel, executor, dialog, compCreator, modelID, objectUseCase, saveDisabled, Save, History, Delete, Checkin, Checkout, UndoCheckout };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'tabs',
    props: {
        tabs: { type: Array, required: true },
        height: { type: String, required: false }
    },
    setup(__props, { expose }) {
        const props = __props;
        const tabContainer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const wheelHandler = (event) => {
            event.preventDefault();
            tabContainer.value.scrollLeft += event.deltaY / 2;
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            tabContainer.value.addEventListener("wheel", wheelHandler);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
            tabContainer.value.removeEventListener("wheel", wheelHandler);
        });
        function mouseOver(tab, over) {
            tab.mouseOver = over;
            tab.closeVisible = showClose(tab);
        }
        function mouseOverActions(tab, over) {
            tab.mouseOverActions = over;
            tab.closeVisible = showClose(tab);
        }
        function showClose(tab) {
            if (tab.mouseOverActions) {
                return true;
            }
            if (tab.modified) {
                return false;
            }
            if (tab.mouseOver) {
                return true;
            }
            return false;
        }
        function closeTab(tab, index) {
            var _a, _b;
            if (!tab.synced) {
                return;
            }
            (_b = (_a = tab.cb) === null || _a === void 0 ? void 0 : _a.close) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        function selectTab(tab) {
            var _a, _b;
            if (!tab.synced) {
                return;
            }
            if (tab.selected) {
                return;
            }
            (_b = (_a = tab.cb) === null || _a === void 0 ? void 0 : _a.select) === null || _b === void 0 ? void 0 : _b.call(_a);
            props.tabs.forEach(eachTab => eachTab.selected = false);
            tab.selected = true;
        }
        function getTabIcon(tabType) {
            if (tabType == 'qjson') {
                return 'mdi mdi mdi-palette qjsonType';
            }
            if (tabType == 'process') {
                return 'mdi mdi mdi-auto-fix processType';
            }
            if (tabType == 'entityDesigner') {
                return 'mdi mdi-database entityType';
            }
            if (tabType == 'bpmn') {
                return 'mdi mdi-vector-polyline bpmnType';
            }
        }
        expose({ selectTab });
        const __returned__ = { props, tabContainer, wheelHandler, mouseOver, mouseOverActions, showClose, closeTab, selectTab, getTabIcon };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/presentation/IRouter */ "./src/domain/presentation/IRouter.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _components_studio_navbar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/studio/navbar.vue */ "./src/presentation/vue3/components/studio/navbar.vue");
/* harmony import */ var _components_studio_topMenu_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/studio/topMenu.vue */ "./src/presentation/vue3/components/studio/topMenu.vue");
/* harmony import */ var _components_studio_header_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/studio/header.vue */ "./src/presentation/vue3/components/studio/header.vue");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'studio',
    setup(__props, { expose }) {
        expose();
        const router = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_2__.IRouter);
        const studio = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_6__.IStudio);
        const viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_4__.IViewModel);
        const viewModelManager = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__.IViewModelManager);
        const routerParams = router.getRouteParams();
        const logger = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_5__.ILogger);
        const executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_7__.IUseCaseExecutor);
        const frameContainerDiv = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const navItems = [{ name: "files", sidebarComponent: "explorer.vue" }];
        const selectedApp = viewModelManager.findObject(routerParams.appID);
        const prom = executor.execute(async () => {
            studio.nav_addNavItems(navItems);
            await studio.openApp(routerParams.appID);
        }, { loading: true });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            executor.execute(async () => {
                await prom;
                studio.attach(frameContainerDiv.value);
            }, { loading: false });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
            executor.execute(async () => {
                studio.nav_removeNavItems(navItems);
                studio.detach();
            }, { loading: false });
        });
        const contentWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => `calc(100% - ${viewModel.studio.ui.sidebar.left + 40}px)`);
        const __returned__ = { router, studio, viewModel, viewModelManager, routerParams, logger, executor, frameContainerDiv, navItems, selectedApp, prom, contentWidth, Navbar: _components_studio_navbar_vue__WEBPACK_IMPORTED_MODULE_8__["default"], TopMenu: _components_studio_topMenu_vue__WEBPACK_IMPORTED_MODULE_9__["default"], Header: _components_studio_header_vue__WEBPACK_IMPORTED_MODULE_10__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=template&id=33a93b5b&scoped=true&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=template&id=33a93b5b&scoped=true&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-33a93b5b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "top-text" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-minus-box mdi-24px me-2 mb-1 ms-0" }, null, -1 /* HOISTED */));
const _hoisted_3 = { id: "selectedModuleNumb" };
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
    class: "ms-2 me-2",
    style: { "color": "#616161" }
}, "of", -1 /* HOISTED */));
const _hoisted_5 = { class: "me-2" };
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", { style: { "color": "#616161" } }, "modules selected", -1 /* HOISTED */));
const _hoisted_7 = { style: { "display": "flex" } };
const _hoisted_8 = { class: "treeviewCard" };
const _hoisted_9 = {
    key: 0,
    style: { "display": "flex", "width": "100%" }
};
const _hoisted_10 = { class: "col-12 pencilIcon" };
const _hoisted_11 = { class: "align-version tree-text ps-3 versionText" };
const _hoisted_12 = {
    key: 0,
    class: "versionBadge latestVersionBadge"
};
const _hoisted_13 = ["onClick"];
const _hoisted_14 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { style: { "display": "flex", "margin-left": "32px" } }, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", { style: { "margin-right": "3px", "font-weight": "700" } }, "* :"),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", { class: "latesDesc" }, "The last major version registered in the system. In case there is no version, the last version registered in the system")
], -1 /* HOISTED */));
const _hoisted_15 = { class: "row export-btn-container" };
const _hoisted_16 = { class: "col-12 position-relative" };
const _hoisted_17 = { class: "position-absolute end-0 me-5 bottom-container" };
const _hoisted_18 = {
    id: "selectedModel",
    class: "left-text ps-3 pe-3 pb-2 pt-2 mt-1"
};
const _hoisted_19 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "right-text" }, "Item selected", -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
                        _hoisted_2,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.checkedModules.length), 1 /* TEXT */),
                        _hoisted_4,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.modules.length), 1 /* TEXT */),
                        _hoisted_6
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["tree"], {
                                nodes: $setup.treeViewNodes,
                                config: $setup.config
                            }, {
                                "after-input": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ node }) => [
                                    (node.version != undefined)
                                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [
                                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
                                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_11, [
                                                    (node.version == 'System latest')
                                                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, "*"))
                                                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(node.version + '   version'), 1 /* TEXT */),
                                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                                                        class: "mdi mdi-pencil-outline ms-1",
                                                        onClick: ($event) => ($setup.versionDialog(node))
                                                    }, null, 8 /* PROPS */, _hoisted_13)
                                                ])
                                            ])
                                        ]))
                                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                                ]),
                                _: 1 /* STABLE */
                            }, 8 /* PROPS */, ["nodes", "config"])
                        ])
                    ]),
                    _hoisted_14,
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_18, [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.checkedItems.length) + " ", 1 /* TEXT */),
                                    _hoisted_19
                                ]),
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                                    type: "button",
                                    class: "btn-lg export-btn p-1 ms-4 mb-1",
                                    onClick: _cache[0] || (_cache[0] = ($event) => ($setup.create()))
                                }, "EXPORT")
                            ])
                        ])
                    ])
                ])
            ])
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=template&id=6c32e973&scoped=true&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=template&id=6c32e973&scoped=true&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _images_ide5_logo_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../images/ide5-logo.PNG */ "./src/images/ide5-logo.PNG");
/* harmony import */ var _images_is_bankasi_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../images/is-bankasi-logo.jpg */ "./src/images/is-bankasi-logo.jpg");



const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6c32e973"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "top-menu" };
const _hoisted_2 = { class: "row" };
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _images_ide5_logo_PNG__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "ide5-logo",
    width: "60",
    height: "60"
}, null, -1 /* HOISTED */));
const _hoisted_4 = [
    _hoisted_3
];
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vl ms-3" }, null, -1 /* HOISTED */));
const _hoisted_6 = { class: "col-8" };
const _hoisted_7 = { class: "middle-container" };
const _hoisted_8 = { class: "title-container" };
const _hoisted_9 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _images_is_bankasi_logo_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "is-bankasi-logo",
    width: "24",
    height: "24",
    class: "title-logo"
}, null, -1 /* HOISTED */));
const _hoisted_10 = { class: "title" };
const _hoisted_11 = { class: "tabs" };
const _hoisted_12 = { class: "col-3" };
const _hoisted_13 = { class: "end-container position-absolute top-0 end-0" };
const _hoisted_14 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    class: "btn-sm end-icons export-button",
    id: "dropdownMenuButton1",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
}, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-export-variant export" }),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "export-text" }, "Export")
], -1 /* HOISTED */));
const _hoisted_15 = {
    class: "dropdown-menu menu-export",
    "aria-labelledby": "dropdownMenuButton1"
};
const _hoisted_16 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "export-menu-text" }, "Create QUI Package", -1 /* HOISTED */));
const _hoisted_17 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-chevron-right mdi-24px position-absolute top-1 end-0 export-menu-icon" }, null, -1 /* HOISTED */));
const _hoisted_18 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
const _hoisted_19 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */));
const _hoisted_20 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
const _hoisted_21 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "export-menu-description" }, "Açıklama...", -1 /* HOISTED */));
const _hoisted_22 = [
    _hoisted_16,
    _hoisted_17,
    _hoisted_18,
    _hoisted_19,
    _hoisted_20,
    _hoisted_21
];
const _hoisted_23 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "export-menu-text" }, "Web SDK Package", -1 /* HOISTED */));
const _hoisted_24 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-chevron-right mdi-24px position-absolute top-1 end-0 export-menu-icon" }, null, -1 /* HOISTED */));
const _hoisted_25 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
const _hoisted_26 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */));
const _hoisted_27 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
const _hoisted_28 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "export-menu-description" }, "Açıklama...", -1 /* HOISTED */));
const _hoisted_29 = [
    _hoisted_23,
    _hoisted_24,
    _hoisted_25,
    _hoisted_26,
    _hoisted_27,
    _hoisted_28
];
const _hoisted_30 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "export-menu-text" }, "Export QJson Models", -1 /* HOISTED */));
const _hoisted_31 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-chevron-right mdi-24px position-absolute top-1 end-0 export-menu-icon" }, null, -1 /* HOISTED */));
const _hoisted_32 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
const _hoisted_33 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */));
const _hoisted_34 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
const _hoisted_35 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "export-menu-description" }, "Açıklama...", -1 /* HOISTED */));
const _hoisted_36 = [
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    _hoisted_33,
    _hoisted_34,
    _hoisted_35
];
const _hoisted_37 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "view-jobs" }, "View Export Jobs", -1 /* HOISTED */));
const _hoisted_38 = [
    _hoisted_37
];
const _hoisted_39 = ["disabled", "title"];
const _hoisted_40 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-rocket-launch-outline deploy" }, null, -1 /* HOISTED */));
const _hoisted_41 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "deploy-text" }, "Deploy", -1 /* HOISTED */));
const _hoisted_42 = [
    _hoisted_40,
    _hoisted_41
];
const _hoisted_43 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<i class=\"mdi mdi-dots-vertical mdi-24px vertical-dots\" id=\"dropdownMenuButton2\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" data-v-6c32e973></i><ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\" data-v-6c32e973><li data-v-6c32e973><a class=\"dropdown-item\" href=\"#\" data-v-6c32e973>Documentation</a></li><li data-v-6c32e973><a class=\"dropdown-item\" href=\"#\" data-v-6c32e973>Lorem Ipsum</a></li><li data-v-6c32e973><a class=\"dropdown-item\" href=\"#\" data-v-6c32e973>Dolor Sit Amet</a></li></ul><i class=\"mdi mdi-alpha-a-circle-outline user\" data-v-6c32e973></i>", 3);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                    class: "col-1",
                    style: { "display": "flex" }
                }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "corner-container" }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                            class: "logo-container",
                            onClick: $setup.goMainPage
                        }, _hoisted_4)
                    ]),
                    _hoisted_5
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                            _hoisted_9,
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.viewModel.studio.appName), 1 /* TEXT */)
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Tabs"], {
                                tabs: $setup.tablist,
                                height: "30px",
                                ref: "tabComp"
                            }, null, 8 /* PROPS */, ["tabs"])
                        ])
                    ])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
                        _hoisted_14,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_15, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                                    class: "dropdown-item export-menu-items",
                                    href: "#",
                                    onClick: _cache[0] || (_cache[0] = ($event) => ($setup.openExportDialog('qui')))
                                }, _hoisted_22)
                            ]),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                                    class: "dropdown-item export-menu-items",
                                    href: "#",
                                    onClick: _cache[1] || (_cache[1] = ($event) => ($setup.openExportDialog('sdk')))
                                }, _hoisted_29)
                            ]),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                                    class: "dropdown-item export-menu-items",
                                    href: "#",
                                    onClick: _cache[2] || (_cache[2] = ($event) => ($setup.openExportDialog('model')))
                                }, _hoisted_36)
                            ]),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                                    class: "dropdown-item export-menu-items",
                                    href: "#",
                                    onClick: _cache[3] || (_cache[3] = ($event) => ($setup.listExportjobs()))
                                }, _hoisted_38)
                            ])
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                            type: "button",
                            class: "btn-sm end-icons deploy-button",
                            disabled: $setup.checkDeployConditions(),
                            onPointerenter: $setup.showDeployTip,
                            title: $setup.deployTip,
                            onClick: $setup.openDeployScreen
                        }, _hoisted_42, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_39),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button type=\"button\" class=\"btn-sm btn-light end-icons play-button\"><i\n              class=\"mdi mdi-play play\"></i></button> "),
                        _hoisted_43
                    ])
                ])
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <header>\n    <span>studio header</span>\n    <template v-if=\"viewModel.studio.currentItem\">\n      <button :disabled=\"checkedOut\" @click=\"onCheckout()\">CheckOut</button>\n      <button :disabled=\"!checkedOut\" @click=\"onSave()\">Save</button>\n      <button :disabled=\"!checkedOut\" @click=\"onSavePlus()\">Save...</button>\n      <button :disabled=\"!checkedOut\" @click=\"release()\">Release</button>\n    </template>\n    <template v-for=\"item in viewModel.studio.header?.dynamicButtons\">\n      <button v-if=\"item.invisible\" :disabled=\"item.disabled\" @click=\"onItemSelect(item)\">{{ item.name }}</button>\n    </template>\n  </header> ")
    ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=template&id=2c9aad14&scoped=true&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=template&id=2c9aad14&scoped=true&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2c9aad14"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "contaier" };
const _hoisted_2 = {
    class: "row",
    style: { "height": "100%" }
};
const _hoisted_3 = { class: "col-3" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-menu mdi-24px menu-icon menu-icon-container" }, null, -1 /* HOISTED */));
const _hoisted_6 = [
    _hoisted_5
];
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", { class: "explorer-text" }, "EXPLORER")
], -1 /* HOISTED */));
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-account-lock bottom-two bottom-icons" })
], -1 /* HOISTED */));
const _hoisted_9 = { class: "vertical-nav-expanded" };
const _hoisted_10 = { class: "expanded-menu-container" };
const _hoisted_11 = { class: "explorer-container" };
const _hoisted_12 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", { class: "explorer-text-expanded" }, "EXPLORER", -1 /* HOISTED */));
const _hoisted_13 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"search-bar-container\" data-v-2c9aad14><i class=\"mdi mdi-magnify search-icon\" data-v-2c9aad14></i><input type=\"search\" autocomplete=\"off\" placeholder=\"Search\" data-v-2c9aad14></div><div class=\"chips-container\" data-v-2c9aad14><button type=\"button\" class=\"chip chip1\" data-v-2c9aad14><i class=\"mdi mdi-code-not-equal-variant chip-icons\" data-v-2c9aad14></i>Pages</button><button type=\"button\" class=\"chip chip2\" data-v-2c9aad14><i class=\"mdi mdi-database chip-icons\" data-v-2c9aad14></i>Domains</button><button type=\"button\" class=\"chip chip3\" data-v-2c9aad14><i class=\"mdi mdi-file-tree chip-icons\" data-v-2c9aad14></i>Processes</button><!-- &lt;div class=&quot;up-down-icons&quot;&gt;\n              &lt;i class=&quot;mdi mdi-chevron-down down-icon&quot;&gt;&lt;/i&gt;\n              &lt;i class=&quot;mdi mdi-chevron-up up-icon&quot;&gt;&lt;/i&gt;\n            &lt;/div&gt; --></div>", 2);
const _hoisted_15 = { class: "vertical-bottom-container position-absolute bottom-0" };
const _hoisted_16 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", { class: "new-module-text" }, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-plus" }),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create New Module")
], -1 /* HOISTED */));
const _hoisted_17 = [
    _hoisted_16
];
const _hoisted_18 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", { class: "new-module-text" }, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-plus" }),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create New UI Screen")
], -1 /* HOISTED */));
const _hoisted_19 = [
    _hoisted_18
];
const _hoisted_20 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", { class: "new-module-text" }, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-plus" }),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Existing Module ")
], -1 /* HOISTED */));
const _hoisted_21 = [
    _hoisted_20
];
const _hoisted_22 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-account-lock bottom-two icons-end" }, null, -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>\n      <img class=\"logo\" src=\"https://www.onplateau.com/img/logo.svg\" />\n    </div> "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.viewModel.studio.ui.navItems, (item) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                            class: "vertical-nav-studio",
                            key: item.name
                        }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                                onClick: ($event) => ($setup.onNavItemSelect(item))
                            }, _hoisted_6, 8 /* PROPS */, _hoisted_4),
                            _hoisted_7,
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "bottom-icons-container position-absolute bottom-0 p-1" }, [
                                _hoisted_8,
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                                        class: "mdi mdi-cog bottom-two bottom-icons",
                                        onClick: $setup.openSettings
                                    })
                                ])
                            ])
                        ]));
                    }), 128 /* KEYED_FRAGMENT */))
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
                            _hoisted_12,
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                                class: "mdi mdi-chevron-left chevron-left",
                                onClick: _cache[0] || (_cache[0] = ($event) => ($setup.onNavItemSelect($setup.item)))
                            })
                        ]),
                        _hoisted_13,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" //app name and collapse button\n          <div class=\"treeview-header-container treeview-collapse-icon\">\n            <div class=\"col-11\">\n              <span style='padding-left: 27px;'>{{ viewModel.studio.appName }}</span>\n            </div>\n            <div class=\"col-1\">\n              <i class=\"mdi mdi-folder-multiple-outline collapse-icon\" style='cursor: pointer;  '\n                @click=\"collapse()\"></i>\n            </div>\n          </div> "),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
                            class: "sidebarSection",
                            ref: "sidebarSectionElement",
                            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ width: $setup.leftpx })
                        }, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                                class: "splitter",
                                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ left: $setup.leftpx }),
                                onMousedown: _cache[1] || (_cache[1] = ($event) => ($setup.mousedown($event))),
                                onMouseup: $setup.mouseup
                            }, null, 36 /* STYLE, HYDRATE_EVENTS */),
                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.KeepAlive, null, [
                                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($setup.ui.sidebar.component)))
                            ], 1024 /* DYNAMIC_SLOTS */))
                        ], 4 /* STYLE */), [
                            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.ui.sidebar.component]
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                                class: "vertical-bottom-text",
                                style: { "cursor": "pointer" },
                                onClick: _cache[2] || (_cache[2] = ($event) => ($setup.addModule()))
                            }, _hoisted_17),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                                class: "vertical-bottom-text",
                                style: { "cursor": "pointer" },
                                onClick: _cache[3] || (_cache[3] = ($event) => ($setup.addScreen()))
                            }, _hoisted_19),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                                class: "vertical-bottom-text",
                                style: { "cursor": "pointer" },
                                onClick: _cache[4] || (_cache[4] = ($event) => ($setup.attachModuleToApp()))
                            }, _hoisted_21),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "row bottom-row" }, [
                                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "col-12" }, [
                                    _hoisted_22,
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                                        class: "mdi mdi-cog bottom-two icons-end",
                                        onClick: $setup.openSettings
                                    })
                                ])
                            ]),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"vertical-bottom-icons\">\n              <i class=\"mdi mdi-arrow-left-bottom arrow-left icons-end end-arrow\"></i>\n              <i class=\"mdi mdi-account-lock bottom-two icons-end\"></i>\n              <i class=\"mdi mdi-cog bottom-two icons-end\"></i>\n            </div> ")
                        ])
                    ])
                ])
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <template v-for=\"item in viewModel.studio.ui.navItems\" :key=\"item.name\">\n      <div :class=\"['navItem', item.selected ? 'navSelected':'']\" @click=\"onNavItemSelect(item)\">\n        {{item.name}}\n      </div>\n    </template> ")
    ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=template&id=11061044&scoped=true&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=template&id=11061044&scoped=true&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-11061044"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "topMenuDiv" };
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-history topMenuIcons" }, null, -1 /* HOISTED */));
const _hoisted_3 = [
    _hoisted_2
];
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-arrow-top-left-bold-outline topMenuIcons" }, null, -1 /* HOISTED */));
const _hoisted_5 = [
    _hoisted_4
];
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-arrow-bottom-right-bold-outline topMenuIcons" }, null, -1 /* HOISTED */));
const _hoisted_7 = [
    _hoisted_6
];
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-arrow-bottom-left topMenuIcons" }, null, -1 /* HOISTED */));
const _hoisted_9 = [
    _hoisted_8
];
const _hoisted_10 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    style: { "color": "red" },
    class: "mdi mdi-delete-outline topMenuIcons"
}, null, -1 /* HOISTED */));
const _hoisted_11 = [
    _hoisted_10
];
const _hoisted_12 = { key: 3 };
const _hoisted_13 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", { class: "mdi mdi-alert topMenuIcons" }, "Read-Only", -1 /* HOISTED */));
const _hoisted_14 = [
    _hoisted_13
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a, _b, _c, _d;
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            onClick: _cache[0] || (_cache[0] = ($event) => ($setup.Save()))
        }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mdi mdi-content-save-outline topMenuIcons", { 'disabled-item': $setup.saveDisabled, disabled: $setup.saveDisabled }])
            }, null, 2 /* CLASS */)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            onClick: _cache[1] || (_cache[1] = ($event) => ($setup.History()))
        }, _hoisted_3),
        (((_a = $setup.viewModel.studio.currentItem) === null || _a === void 0 ? void 0 : _a.checkedOut) === true)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 0,
                onClick: _cache[2] || (_cache[2] = ($event) => ($setup.Checkin()))
            }, _hoisted_5))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_b = $setup.viewModel.studio.currentItem) === null || _b === void 0 ? void 0 : _b.checkedOut) === false)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 1,
                onClick: _cache[3] || (_cache[3] = ($event) => ($setup.Checkout()))
            }, _hoisted_7))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (((_c = $setup.viewModel.studio.currentItem) === null || _c === void 0 ? void 0 : _c.checkedOut) === true)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 2,
                onClick: _cache[4] || (_cache[4] = ($event) => ($setup.UndoCheckout()))
            }, _hoisted_9))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            onClick: _cache[5] || (_cache[5] = ($event) => ($setup.Delete()))
        }, _hoisted_11),
        (((_d = $setup.viewModel.studio.currentItem) === null || _d === void 0 ? void 0 : _d.checkedOut) === false)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, _hoisted_14))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=template&id=601528e6&scoped=true&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=template&id=601528e6&scoped=true&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-601528e6"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = {
    class: "tab-container",
    ref: "tabContainer"
};
const _hoisted_2 = ["onMouseover", "onMouseleave"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "tab-content" };
const _hoisted_5 = { class: "tab-text" };
const _hoisted_6 = ["onMouseover", "onMouseleave"];
const _hoisted_7 = { class: "tab-modified" };
const _hoisted_8 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.tabs, (tab, index) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ hayal: !tab.synced }),
                onMouseover: ($event) => ($setup.mouseOver(tab, true)),
                onMouseleave: ($event) => ($setup.mouseOver(tab, false))
            }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["tab-column", { 'tab-selected': tab.selected }]),
                    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ lineHeight: $setup.props.height }),
                    onClick: ($event) => ($setup.selectTab(tab))
                }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                            style: { "padding-right": "5px" },
                            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.getTabIcon(tab.type))
                        }, null, 2 /* CLASS */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tab.name), 1 /* TEXT */)
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                        class: "tab-actions",
                        onMouseover: ($event) => ($setup.mouseOverActions(tab, true)),
                        onMouseleave: ($event) => ($setup.mouseOverActions(tab, false))
                    }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, "⚫", 512 /* NEED_PATCH */), [
                            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !tab.mouseOverActions && tab.modified]
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                            class: "tab-close",
                            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(($event) => ($setup.closeTab(tab, index)), ["stop"])
                        }, "X", 8 /* PROPS */, _hoisted_8), [
                            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, tab.closeVisible]
                        ])
                    ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6)
                ], 14 /* CLASS, STYLE, PROPS */, _hoisted_3)
            ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_2));
        }), 256 /* UNKEYED_FRAGMENT */))
    ], 512 /* NEED_PATCH */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=template&id=f2efb572&scoped=true&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=template&id=f2efb572&scoped=true&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f2efb572"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "rootSection" };
const _hoisted_2 = { class: "columnsSection" };
const _hoisted_3 = {
    class: "frameContainer",
    ref: "frameContainerDiv"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _a;
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Header"], { app: $setup.selectedApp }, null, 8 /* PROPS */, ["app"]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Navbar"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
                class: "contentSection",
                style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ width: $setup.contentWidth })
            }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("article", null, [
                    (((_a = $setup.viewModel.studio.openItems) === null || _a === void 0 ? void 0 : _a.length) || 0)
                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["TopMenu"], { key: 0 }))
                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, null, 512 /* NEED_PATCH */)
                ])
            ], 4 /* STYLE */)
        ])
    ]));
}


/***/ }),

/***/ "./src/presentation/vue3/components/application/exportApp.vue":
/*!********************************************************************!*\
  !*** ./src/presentation/vue3/components/application/exportApp.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exportApp_vue_vue_type_template_id_33a93b5b_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exportApp.vue?vue&type=template&id=33a93b5b&scoped=true&ts=true */ "./src/presentation/vue3/components/application/exportApp.vue?vue&type=template&id=33a93b5b&scoped=true&ts=true");
/* harmony import */ var _exportApp_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exportApp.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/application/exportApp.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _exportApp_vue_vue_type_style_index_0_id_33a93b5b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css */ "./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_exportApp_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_exportApp_vue_vue_type_template_id_33a93b5b_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-33a93b5b"],['__file',"src/presentation/vue3/components/application/exportApp.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/studio/header.vue":
/*!************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/header.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_6c32e973_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=6c32e973&scoped=true&ts=true */ "./src/presentation/vue3/components/studio/header.vue?vue&type=template&id=6c32e973&scoped=true&ts=true");
/* harmony import */ var _header_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/studio/header.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _header_vue_vue_type_style_index_0_id_6c32e973_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css */ "./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_header_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_header_vue_vue_type_template_id_6c32e973_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6c32e973"],['__file',"src/presentation/vue3/components/studio/header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/studio/navbar.vue":
/*!************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/navbar.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbar_vue_vue_type_template_id_2c9aad14_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=2c9aad14&scoped=true&ts=true */ "./src/presentation/vue3/components/studio/navbar.vue?vue&type=template&id=2c9aad14&scoped=true&ts=true");
/* harmony import */ var _navbar_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/studio/navbar.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _navbar_vue_vue_type_style_index_0_id_2c9aad14_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css */ "./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_navbar_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_navbar_vue_vue_type_template_id_2c9aad14_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2c9aad14"],['__file',"src/presentation/vue3/components/studio/navbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/studio/topMenu.vue":
/*!*************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/topMenu.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _topMenu_vue_vue_type_template_id_11061044_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topMenu.vue?vue&type=template&id=11061044&scoped=true&ts=true */ "./src/presentation/vue3/components/studio/topMenu.vue?vue&type=template&id=11061044&scoped=true&ts=true");
/* harmony import */ var _topMenu_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topMenu.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/studio/topMenu.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _topMenu_vue_vue_type_style_index_0_id_11061044_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css */ "./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_topMenu_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_topMenu_vue_vue_type_template_id_11061044_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-11061044"],['__file',"src/presentation/vue3/components/studio/topMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/ui/tabs.vue":
/*!******************************************************!*\
  !*** ./src/presentation/vue3/components/ui/tabs.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabs_vue_vue_type_template_id_601528e6_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.vue?vue&type=template&id=601528e6&scoped=true&ts=true */ "./src/presentation/vue3/components/ui/tabs.vue?vue&type=template&id=601528e6&scoped=true&ts=true");
/* harmony import */ var _tabs_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/ui/tabs.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _tabs_vue_vue_type_style_index_0_id_601528e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css */ "./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_tabs_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_tabs_vue_vue_type_template_id_601528e6_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-601528e6"],['__file',"src/presentation/vue3/components/ui/tabs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/pages/studio.vue":
/*!************************************************!*\
  !*** ./src/presentation/vue3/pages/studio.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studio_vue_vue_type_template_id_f2efb572_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studio.vue?vue&type=template&id=f2efb572&scoped=true&ts=true */ "./src/presentation/vue3/pages/studio.vue?vue&type=template&id=f2efb572&scoped=true&ts=true");
/* harmony import */ var _studio_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studio.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/pages/studio.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _studio_vue_vue_type_style_index_0_id_f2efb572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css */ "./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_studio_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_studio_vue_vue_type_template_id_f2efb572_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f2efb572"],['__file',"src/presentation/vue3/pages/studio.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_style_index_0_id_33a93b5b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=style&index=0&id=33a93b5b&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_style_index_0_id_6c32e973_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=style&index=0&id=6c32e973&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_style_index_0_id_2c9aad14_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=style&index=0&id=2c9aad14&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_style_index_0_id_11061044_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=style&index=0&id=11061044&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_style_index_0_id_601528e6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=style&index=0&id=601528e6&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_style_index_0_id_f2efb572_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=style&index=0&id=f2efb572&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/application/exportApp.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/application/exportApp.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./exportApp.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/studio/header.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/header.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./header.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/studio/navbar.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/navbar.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./navbar.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/studio/topMenu.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/topMenu.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./topMenu.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/ui/tabs.vue?vue&type=script&setup=true&lang=ts":
/*!*****************************************************************************************!*\
  !*** ./src/presentation/vue3/components/ui/tabs.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./tabs.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/pages/studio.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************!*\
  !*** ./src/presentation/vue3/pages/studio.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./studio.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/application/exportApp.vue?vue&type=template&id=33a93b5b&scoped=true&ts=true":
/*!**********************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/application/exportApp.vue?vue&type=template&id=33a93b5b&scoped=true&ts=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_template_id_33a93b5b_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_exportApp_vue_vue_type_template_id_33a93b5b_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./exportApp.vue?vue&type=template&id=33a93b5b&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/application/exportApp.vue?vue&type=template&id=33a93b5b&scoped=true&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/components/studio/header.vue?vue&type=template&id=6c32e973&scoped=true&ts=true":
/*!**************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/header.vue?vue&type=template&id=6c32e973&scoped=true&ts=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_template_id_6c32e973_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_header_vue_vue_type_template_id_6c32e973_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./header.vue?vue&type=template&id=6c32e973&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/header.vue?vue&type=template&id=6c32e973&scoped=true&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/components/studio/navbar.vue?vue&type=template&id=2c9aad14&scoped=true&ts=true":
/*!**************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/navbar.vue?vue&type=template&id=2c9aad14&scoped=true&ts=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_template_id_2c9aad14_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_navbar_vue_vue_type_template_id_2c9aad14_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./navbar.vue?vue&type=template&id=2c9aad14&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/navbar.vue?vue&type=template&id=2c9aad14&scoped=true&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/components/studio/topMenu.vue?vue&type=template&id=11061044&scoped=true&ts=true":
/*!***************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/studio/topMenu.vue?vue&type=template&id=11061044&scoped=true&ts=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_template_id_11061044_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_topMenu_vue_vue_type_template_id_11061044_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./topMenu.vue?vue&type=template&id=11061044&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/studio/topMenu.vue?vue&type=template&id=11061044&scoped=true&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/components/ui/tabs.vue?vue&type=template&id=601528e6&scoped=true&ts=true":
/*!********************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/ui/tabs.vue?vue&type=template&id=601528e6&scoped=true&ts=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_template_id_601528e6_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_tabs_vue_vue_type_template_id_601528e6_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./tabs.vue?vue&type=template&id=601528e6&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/ui/tabs.vue?vue&type=template&id=601528e6&scoped=true&ts=true");


/***/ }),

/***/ "./src/presentation/vue3/pages/studio.vue?vue&type=template&id=f2efb572&scoped=true&ts=true":
/*!**************************************************************************************************!*\
  !*** ./src/presentation/vue3/pages/studio.vue?vue&type=template&id=f2efb572&scoped=true&ts=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_template_id_f2efb572_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_studio_vue_vue_type_template_id_f2efb572_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./studio.vue?vue&type=template&id=f2efb572&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/pages/studio.vue?vue&type=template&id=f2efb572&scoped=true&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_pages_studio_vue.js.map