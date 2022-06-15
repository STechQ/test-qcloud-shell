"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_components_dialogs_newItem_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.createButtonDiv[data-v-d76da488] {\n    text-align: end;\n    padding-top: 21px;\n    height: 53px;\n    border-top: 1px solid #A1A1A1;\n    margin-top: 25px;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n}\n.createButton[data-v-d76da488] {\n    background-color: #4F537B;\n    color: white;\n    border-radius: 4px;\n}\n.nameInput[data-v-d76da488] {\n    width: 100%;\n    border: 1px solid #A1A1A1;\n    border-radius: 3px;\n}\n.nameInputDiv[data-v-d76da488] {\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/presentation/vue3/components/dialogs/newItem.vue"],"names":[],"mappings":";AAmTA;IACI,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,6BAA6B;IAC7B,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AAEtB;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,kBAAkB;AACtB;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB","sourcesContent":["<script setup lang=\"ts\">\nimport { defineAsyncComponent, onMounted, ref } from 'vue'\nimport { container } from '../../../../domain/core/diContainer';\nimport { INewItemProps } from '../../../../domain/presentation/dialogs/INewItemProps';\nimport { IDialog } from '../../../../domain/presentation/IDialog';\nimport { ICreateModel, ICreateModelParam } from '../../../../domain/useCase/ICreateModel';\nimport { ICreateModule } from '../../../../domain/useCase/ICreateModule';\nimport { IUseCaseExecutor } from '../../../../domain/useCase/IUseCaseExecutor';\nimport { IViewModel } from '../../../../domain/viewModel/IViewModel';\n// import FileUpload from \"../FileUpload\";\n// import UploadFile from \"../UploadFile.vue\"\nimport { checkInputStartsWithLetter, checkInputLength } from '../../editors/processEditor/validation/validation';\nimport { IStudio } from '../../../../domain/useCase/IStudio';\nimport { IModelBodyObject } from '../../../../domain/model/models';\nimport { IProcessEditorUtil } from '../../../../domain/useCase/IProcessEditorUtil';\nimport { createError } from '../../../../domain/model/shellError';\n\ninterface INewItemPropsInline extends INewItemProps {\n    parentId: string;\n    parentName: string;\n    parentType: \"folder\" | \"module\" | \"application\";\n    createType: string\n}\n\nconst props = defineProps<INewItemPropsInline>();\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst dialog = container.resolve<IDialog>(IDialog);\nconst studio = container.resolve<IStudio>(IStudio);\nconst processEditorUtil = container.resolve<IProcessEditorUtil>(IProcessEditorUtil);\nconst emit = defineEmits([\"close\"]);\n\n\nconst isModule = ref(false);\nconst isFolder = ref(false);\nconst isModel = ref(false);\nconst name = ref(\"\");\nconst description = ref(\"\");\n\nconst isEntity = ref(false);\nconst isScreen = ref(false);\nconst isProcess = ref(false);\nconst isEmptyPage = ref(false);\nconst isQuickComponent = ref(false);\nconst isQuickTemplate = ref(false);\nconst isImportFromFile = ref(false);\nconst isGenerateFromEntity = ref(false);\n\nconst createButtonVisibility = ref(true);\n\nconst processNameErrorLabel = ref(\"\");\n\nlet entities = ['entity1', 'entity2'];\nlet generateScreenTypes = ['List', 'Create'];\nlet selectedEntity = '';\nlet selectedGenerateScreenType = '';\n\nif (props.parentType === \"module\") {\n    onTypeSelect('model');\n}\nonMounted(() => {\n    debugger\n    switch (props.createType) {\n        case \"Screen\": isModule.value = false; isEmptyPage.value = true; isModel.value = true; isScreen.value = true; isEntity.value = isProcess.value = false; createButtonVisibility.value = true; isQuickComponent.value = isQuickTemplate.value = isImportFromFile.value = isGenerateFromEntity.value = false; break;\n\n        case \"Entity\": isEntity.value = true; isScreen.value = isProcess.value = false; createButtonVisibility.value = true; break;\n        case \"Process Diagram\": isProcess.value = true; isEntity.value = isScreen.value = false; createButtonVisibility.value = true; break;\n        case \"Module\": isModule.value = true; isFolder.value = isModel.value = false; setAllSubRadiosFalse(); createButtonVisibility.value = true; break;\n    }\n\n})\n\n\nfunction create() {\n    debugger\n    executor.execute(\n        async () => {\n            if (isModule.value) {\n                await executor.executeUseCase<ICreateModule>(ICreateModule, {\n                    name: name.value,\n                    applicationID: props.parentId,\n                    description: description.value\n                });\n                emit(\"close\");\n            } else if (isFolder.value) {\n                return;\n            } else if (isModel.value) {\n                let modelBody: Array<IModelBodyObject>;\n                let createObject: ICreateModelParam;\n                if (isEntity.value) {\n                    modelBody = [{ key: \"entityDesigner\", model: \"\" }];\n                    createObject = {\n                        name: name.value,\n                        parentObjectId: props.parentId,\n                        modelBody,\n                        modelType: \"entityDesigner\",\n                        modelAdditionals: {},\n                    }\n                } else if (isEmptyPage.value) {\n                    modelBody = [{ key: \"qjson\", model: \"\" }];\n                    createObject = {\n                        name: name.value,\n                        parentObjectId: props.parentId,\n                        modelBody,\n                        modelType: \"qjson\",\n                        modelAdditionals: { qjsonType: \"qjson\" },\n                    }\n                } else if (isQuickComponent.value) {\n                    modelBody = [{ key: \"qjson\", model: \"\" }];\n                    createObject = {\n                        name: name.value,\n                        parentObjectId: props.parentId,\n                        modelBody,\n                        modelType: \"qjson\",\n                        modelAdditionals: { qjsonType: \"quickComponent\" },\n                    };\n                } else if (isQuickTemplate.value) {\n                    modelBody = [{ key: \"qjson\", model: \"\" }];\n                    createObject = {\n                        name: name.value,\n                        parentObjectId: props.parentId,\n                        modelBody,\n                        modelType: \"qjson\",\n                        modelAdditionals: { qjsonType: \"template\" },\n                    };\n                } else if (isImportFromFile.value) {\n                    console.log(\"isImportFromFile\");\n                    return;\n                } else if (isGenerateFromEntity.value) {\n                    console.log(\"isGenerateFromEntity\");\n                    return;\n                } else if (isProcess.value) {\n                    const model = processEditorUtil.getEmptyProcessWizardModel(props.parentName);\n                    model.processDefinition.processName = name.value;\n                    model.processDefinition.processFileName = name.value;\n                    createObject = {\n                        name: name.value,\n                        parentObjectId: props.parentId,\n                        modelType: \"process\",\n                        modelBody: [{ key: \"process\", model }],\n                        modelAdditionals: {},\n                    };\n                } else { throw createError({ message: \"unexpected case\", type: \"technical\" }); }\n\n                const createdModel = await executor.executeUseCase<ICreateModel>(ICreateModel, createObject);\n                studio.openItem(createdModel);\n                emit(\"close\");\n            }\n        },\n        { loading: true }\n    );\n}\n\n// not: listHistories dialog componentı olacak. \n// örnek modelİd = vgvrxgap-ahvp-igjc-h2ft-w33p9q41 asd.qjson\n\n// parentObjectId = objectId\n// this.executor.executeUseCase<ICreateModel>(ICreateModel, { name: \"model1\", parentObjectId: createdParentObjectId!, modelType: \"qjson\", modelAdditionals: { qjsonType: \"qjson\" } });\n\nfunction setAllSubRadiosFalse() {\n    isEntity.value = isScreen.value = false;\n    isEmptyPage.value = isQuickComponent.value = isQuickTemplate.value = isImportFromFile.value = isGenerateFromEntity.value = createButtonVisibility.value = false;\n}\n\nfunction onTypeSelect(type: \"module\" | \"folder\" | \"model\" | \"entity\" | \"screen\" | \"process\" | \"emptyPage\" | \"quickComponent\" | \"quickTemplate\" | \"importFromFile\" | \"generateFromEntity\") {\n    switch (type) {\n        case \"module\": isModule.value = true; isFolder.value = isModel.value = false; setAllSubRadiosFalse(); createButtonVisibility.value = true; break;\n        case \"folder\": isFolder.value = true; isModule.value = isModel.value = false; setAllSubRadiosFalse(); break;\n        case \"model\": isModel.value = true; isModule.value = isFolder.value = false; setAllSubRadiosFalse(); break;\n        case \"entity\": isEntity.value = true; isScreen.value = isProcess.value = false; createButtonVisibility.value = true; break;\n        case \"screen\": isModule.value = false; isModel.value = true; isScreen.value = true; isEntity.value = isProcess.value = false; createButtonVisibility.value = false; break;\n        case \"process\": isProcess.value = true; isEntity.value = isScreen.value = false; createButtonVisibility.value = true; break; // openProcessWizard(); emit(\"close\"); break;\n        case \"emptyPage\": isEmptyPage.value = true; isQuickComponent.value = isQuickTemplate.value = isImportFromFile.value = isGenerateFromEntity.value = false; createButtonVisibility.value = true; break;\n        case \"quickComponent\": isQuickComponent.value = true; isEmptyPage.value = isQuickTemplate.value = isImportFromFile.value = isGenerateFromEntity.value = false; createButtonVisibility.value = true; break;\n        case \"quickTemplate\": isQuickTemplate.value = true; isEmptyPage.value = isQuickComponent.value = isImportFromFile.value = isGenerateFromEntity.value = false; createButtonVisibility.value = true; break;\n        case \"importFromFile\": isImportFromFile.value = true; isEmptyPage.value = isQuickComponent.value = isQuickTemplate.value = isGenerateFromEntity.value = false; createButtonVisibility.value = true; break;\n        case \"generateFromEntity\": isGenerateFromEntity.value = true; isEmptyPage.value = isQuickComponent.value = isQuickTemplate.value = isImportFromFile.value = false; createButtonVisibility.value = true; break;\n    }\n}\n\nfunction upload(event: Event) {\n    // file = event.target.files[0];\n    // let formData = new FormData();\n    // formData.append('file', file);\n}\n\nfunction handleProcessName() {\n    processNameErrorLabel.value = checkInputLength(name.value, 3);\n    if (processNameErrorLabel.value == \"\") {\n        processNameErrorLabel.value = checkInputStartsWithLetter(name.value);\n    }\n}\n\n</script> \n \n<template>\n    <div>\n        <!-- Selections -->\n        <div>\n            <!-- <label v-if=\"props.parentType === 'application'\" > \n                <input type=\"radio\" name=\"radio\" value=\"module\" @change=\"onTypeSelect('module')\" /> \n                Module \n            </label>  -->\n\n            <!-- <label v-if=\"props.parentType === 'module'\"> \n                <input type=\"radio\" name=\"radio\" value=\"entity\" @change=\"onTypeSelect('entity')\" /> \n                Entity \n            </label>  -->\n\n            <!-- <label> \n                <input type=\"radio\" name=\"radio\" value=\"screen\" @change=\"onTypeSelect('screen')\" /> \n                Screen \n            </label> -->\n            <!-- \n            <label v-if=\"props.parentType === 'module'\"> \n                <input type=\"radio\" name=\"radio\" value=\"process\" @change=\"onTypeSelect('process')\" /> \n                Process \n            </label>  -->\n        </div>\n\n        <!-- New Module -->\n\n        <div class='nameInputDiv' v-if=\"isModule\">\n            <h6>Name</h6>\n            <input class='nameInput' v-model=\"name\" placeholder=\"Name\" />\n            <input style='margin-top: 10px;' class='nameInput' v-model=\"description\" placeholder=\"Description\" />\n        </div>\n\n        <!-- New Model -->\n\n        <div class='nameInputDiv' v-if=\"isEntity\">\n            <h6>Name</h6>\n            <input class='nameInput' v-model=\"name\" placeholder=\"Entity Name\" />\n        </div>\n\n        <!-- New Process -->\n        <div class='nameInputDiv' v-if=\"isProcess\">\n            <h6>Name</h6>\n            <input class='nameInput' v-model=\"name\" placeholder=\"Process Name\" @input=\"handleProcessName\" /> <br />\n            <label v-if=\"!!processNameErrorLabel.length\"> {{ processNameErrorLabel }} </label>\n        </div>\n\n        <div v-if=\"isScreen\">\n            <!-- <div>\n                <label>\n                    <input type=\"radio\" name=\"radio\" value=\"emptyPage\" @change=\"onTypeSelect('emptyPage')\" />\n                    Empty Page\n                </label>\n                <label>\n                    <input type=\"radio\" name=\"radio\" value=\"quickComponent\" @change=\"onTypeSelect('quickComponent')\" />\n                    Quick Component\n                </label>\n                <label>\n                    <input type=\"radio\" name=\"radio\" value=\"quickTemplate\" @change=\"onTypeSelect('quickTemplate')\" />\n                    Quick Template\n                </label>\n                <label>\n                    <input type=\"radio\" name=\"radio\" value=\"importFromFile\" @change=\"onTypeSelect('importFromFile')\" />\n                    Import From File\n                </label>\n                \n                <label> \n                    <input type=\"radio\" name=\"radio\" value=\"generateFromEntity\" @change=\"onTypeSelect('generateFromEntity')\" /> \n                    Generate From Entity \n                </label> \n               \n            </div> -->\n\n            <div class='nameInputDiv' v-if=\"isEmptyPage || isQuickComponent || isQuickTemplate\">\n                <h6>Name</h6>\n                <input class='nameInput' v-model=\"name\" placeholder=\"Screen Name\" />\n            </div>\n            <div class='nameInputDiv' v-if=\"isImportFromFile\">\n                <h6>Name</h6>\n                <input class='nameInput' v-model=\"name\" placeholder=\"Screen Name\" />\n                <div>\n                    <input type=\"file\" @change=\"upload($event)\" accept=\".qjson\">\n                </div>\n            </div>\n            <!--  isGenerateFromEntity \n            <div v-if=\"isGenerateFromEntity\"> \n                <input v-model=\"name\" placeholder=\"Screen Name\" />.qjson\n                <select v-model=\"selectedEntity\">\n                    <option v-for=\"entity in entities\" :value=\"entity\">\n                        {{entity}}\n                    </option>\n                </select>\n                <select v-model=\"selectedGenerateScreenType\">\n                    <option v-for=\"generateScreenType in generateScreenTypes\" :value=\"generateScreenType\">\n                        {{generateScreenType}}\n                    </option>\n                </select>\n            </div> \n            -->\n        </div>\n\n        <!-- New Folder -->\n        <div v-if=\"isFolder\"></div>\n\n        <div class='createButtonDiv'>\n            <button class='createButton' @click=\"create()\"\n                :disabled=\"isProcess ? !!processNameErrorLabel.length || !name.length : false\">Create</button>\n        </div>\n    </div>\n</template> \n\n<style scoped>\n.createButtonDiv {\n    text-align: end;\n    padding-top: 21px;\n    height: 53px;\n    border-top: 1px solid #A1A1A1;\n    margin-top: 25px;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n}\n\n.createButton {\n    background-color: #4F537B;\n    color: white;\n    border-radius: 4px;\n\n}\n\n.nameInput {\n    width: 100%;\n    border: 1px solid #A1A1A1;\n    border-radius: 3px;\n}\n\n.nameInputDiv {\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_style_index_0_id_d76da488_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_style_index_0_id_d76da488_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_style_index_0_id_d76da488_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_style_index_0_id_d76da488_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_style_index_0_id_d76da488_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../domain/presentation/IDialog */ "./src/domain/presentation/IDialog.ts");
/* harmony import */ var _domain_useCase_ICreateModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../domain/useCase/ICreateModel */ "./src/domain/useCase/ICreateModel.ts");
/* harmony import */ var _domain_useCase_ICreateModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../domain/useCase/ICreateModule */ "./src/domain/useCase/ICreateModule.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _editors_processEditor_validation_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../editors/processEditor/validation/validation */ "./src/presentation/vue3/editors/processEditor/validation/validation.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../domain/useCase/IProcessEditorUtil */ "./src/domain/useCase/IProcessEditorUtil.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../domain/model/shellError */ "./src/domain/model/shellError.ts");








// import FileUpload from "../FileUpload";
// import UploadFile from "../UploadFile.vue"




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'newItem',
    props: {
        parentId: { type: String, required: true },
        parentName: { type: String, required: true },
        parentType: { type: String, required: true },
        createType: { type: String, required: true }
    },
    emits: ["close"],
    setup(__props, { expose, emit }) {
        expose();
        const props = __props;
        const viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_6__.IViewModel);
        const executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__.IUseCaseExecutor);
        const dialog = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_2__.IDialog);
        const studio = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_8__.IStudio);
        const processEditorUtil = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_9__.IProcessEditorUtil);
        const isModule = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isFolder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isModel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const description = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        const isEntity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isProcess = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isEmptyPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isQuickComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isQuickTemplate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isImportFromFile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isGenerateFromEntity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const createButtonVisibility = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
        const processNameErrorLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        let entities = ['entity1', 'entity2'];
        let generateScreenTypes = ['List', 'Create'];
        let selectedEntity = '';
        let selectedGenerateScreenType = '';
        if (props.parentType === "module") {
            onTypeSelect('model');
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            debugger;
            switch (props.createType) {
                case "Screen":
                    isModule.value = false;
                    isEmptyPage.value = true;
                    isModel.value = true;
                    isScreen.value = true;
                    isEntity.value = isProcess.value = false;
                    createButtonVisibility.value = true;
                    isQuickComponent.value = isQuickTemplate.value = isImportFromFile.value = isGenerateFromEntity.value = false;
                    break;
                case "Entity":
                    isEntity.value = true;
                    isScreen.value = isProcess.value = false;
                    createButtonVisibility.value = true;
                    break;
                case "Process Diagram":
                    isProcess.value = true;
                    isEntity.value = isScreen.value = false;
                    createButtonVisibility.value = true;
                    break;
                case "Module":
                    isModule.value = true;
                    isFolder.value = isModel.value = false;
                    setAllSubRadiosFalse();
                    createButtonVisibility.value = true;
                    break;
            }
        });
        function create() {
            debugger;
            executor.execute(async () => {
                if (isModule.value) {
                    await executor.executeUseCase(_domain_useCase_ICreateModule__WEBPACK_IMPORTED_MODULE_4__.ICreateModule, {
                        name: name.value,
                        applicationID: props.parentId,
                        description: description.value
                    });
                    emit("close");
                }
                else if (isFolder.value) {
                    return;
                }
                else if (isModel.value) {
                    let modelBody;
                    let createObject;
                    if (isEntity.value) {
                        modelBody = [{ key: "entityDesigner", model: "" }];
                        createObject = {
                            name: name.value,
                            parentObjectId: props.parentId,
                            modelBody,
                            modelType: "entityDesigner",
                            modelAdditionals: {},
                        };
                    }
                    else if (isEmptyPage.value) {
                        modelBody = [{ key: "qjson", model: "" }];
                        createObject = {
                            name: name.value,
                            parentObjectId: props.parentId,
                            modelBody,
                            modelType: "qjson",
                            modelAdditionals: { qjsonType: "qjson" },
                        };
                    }
                    else if (isQuickComponent.value) {
                        modelBody = [{ key: "qjson", model: "" }];
                        createObject = {
                            name: name.value,
                            parentObjectId: props.parentId,
                            modelBody,
                            modelType: "qjson",
                            modelAdditionals: { qjsonType: "quickComponent" },
                        };
                    }
                    else if (isQuickTemplate.value) {
                        modelBody = [{ key: "qjson", model: "" }];
                        createObject = {
                            name: name.value,
                            parentObjectId: props.parentId,
                            modelBody,
                            modelType: "qjson",
                            modelAdditionals: { qjsonType: "template" },
                        };
                    }
                    else if (isImportFromFile.value) {
                        console.log("isImportFromFile");
                        return;
                    }
                    else if (isGenerateFromEntity.value) {
                        console.log("isGenerateFromEntity");
                        return;
                    }
                    else if (isProcess.value) {
                        const model = processEditorUtil.getEmptyProcessWizardModel(props.parentName);
                        model.processDefinition.processName = name.value;
                        model.processDefinition.processFileName = name.value;
                        createObject = {
                            name: name.value,
                            parentObjectId: props.parentId,
                            modelType: "process",
                            modelBody: [{ key: "process", model }],
                            modelAdditionals: {},
                        };
                    }
                    else {
                        throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_10__.createError)({ message: "unexpected case", type: "technical" });
                    }
                    const createdModel = await executor.executeUseCase(_domain_useCase_ICreateModel__WEBPACK_IMPORTED_MODULE_3__.ICreateModel, createObject);
                    studio.openItem(createdModel);
                    emit("close");
                }
            }, { loading: true });
        }
        // not: listHistories dialog componentı olacak. 
        // örnek modelİd = vgvrxgap-ahvp-igjc-h2ft-w33p9q41 asd.qjson
        // parentObjectId = objectId
        // this.executor.executeUseCase<ICreateModel>(ICreateModel, { name: "model1", parentObjectId: createdParentObjectId!, modelType: "qjson", modelAdditionals: { qjsonType: "qjson" } });
        function setAllSubRadiosFalse() {
            isEntity.value = isScreen.value = false;
            isEmptyPage.value = isQuickComponent.value = isQuickTemplate.value = isImportFromFile.value = isGenerateFromEntity.value = createButtonVisibility.value = false;
        }
        function onTypeSelect(type) {
            switch (type) {
                case "module":
                    isModule.value = true;
                    isFolder.value = isModel.value = false;
                    setAllSubRadiosFalse();
                    createButtonVisibility.value = true;
                    break;
                case "folder":
                    isFolder.value = true;
                    isModule.value = isModel.value = false;
                    setAllSubRadiosFalse();
                    break;
                case "model":
                    isModel.value = true;
                    isModule.value = isFolder.value = false;
                    setAllSubRadiosFalse();
                    break;
                case "entity":
                    isEntity.value = true;
                    isScreen.value = isProcess.value = false;
                    createButtonVisibility.value = true;
                    break;
                case "screen":
                    isModule.value = false;
                    isModel.value = true;
                    isScreen.value = true;
                    isEntity.value = isProcess.value = false;
                    createButtonVisibility.value = false;
                    break;
                case "process":
                    isProcess.value = true;
                    isEntity.value = isScreen.value = false;
                    createButtonVisibility.value = true;
                    break; // openProcessWizard(); emit("close"); break;
                case "emptyPage":
                    isEmptyPage.value = true;
                    isQuickComponent.value = isQuickTemplate.value = isImportFromFile.value = isGenerateFromEntity.value = false;
                    createButtonVisibility.value = true;
                    break;
                case "quickComponent":
                    isQuickComponent.value = true;
                    isEmptyPage.value = isQuickTemplate.value = isImportFromFile.value = isGenerateFromEntity.value = false;
                    createButtonVisibility.value = true;
                    break;
                case "quickTemplate":
                    isQuickTemplate.value = true;
                    isEmptyPage.value = isQuickComponent.value = isImportFromFile.value = isGenerateFromEntity.value = false;
                    createButtonVisibility.value = true;
                    break;
                case "importFromFile":
                    isImportFromFile.value = true;
                    isEmptyPage.value = isQuickComponent.value = isQuickTemplate.value = isGenerateFromEntity.value = false;
                    createButtonVisibility.value = true;
                    break;
                case "generateFromEntity":
                    isGenerateFromEntity.value = true;
                    isEmptyPage.value = isQuickComponent.value = isQuickTemplate.value = isImportFromFile.value = false;
                    createButtonVisibility.value = true;
                    break;
            }
        }
        function upload(event) {
            // file = event.target.files[0];
            // let formData = new FormData();
            // formData.append('file', file);
        }
        function handleProcessName() {
            processNameErrorLabel.value = (0,_editors_processEditor_validation_validation__WEBPACK_IMPORTED_MODULE_7__.checkInputLength)(name.value, 3);
            if (processNameErrorLabel.value == "") {
                processNameErrorLabel.value = (0,_editors_processEditor_validation_validation__WEBPACK_IMPORTED_MODULE_7__.checkInputStartsWithLetter)(name.value);
            }
        }
        const __returned__ = { props, viewModel, executor, dialog, studio, processEditorUtil, emit, isModule, isFolder, isModel, name, description, isEntity, isScreen, isProcess, isEmptyPage, isQuickComponent, isQuickTemplate, isImportFromFile, isGenerateFromEntity, createButtonVisibility, processNameErrorLabel, entities, generateScreenTypes, selectedEntity, selectedGenerateScreenType, create, setAllSubRadiosFalse, onTypeSelect, upload, handleProcessName };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&scoped=true&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&scoped=true&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-d76da488"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label v-if=\"props.parentType === 'application'\" > \n                <input type=\"radio\" name=\"radio\" value=\"module\" @change=\"onTypeSelect('module')\" /> \n                Module \n            </label>  "),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label v-if=\"props.parentType === 'module'\"> \n                <input type=\"radio\" name=\"radio\" value=\"entity\" @change=\"onTypeSelect('entity')\" /> \n                Entity \n            </label>  "),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label> \n                <input type=\"radio\" name=\"radio\" value=\"screen\" @change=\"onTypeSelect('screen')\" /> \n                Screen \n            </label> "),
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \n            <label v-if=\"props.parentType === 'module'\"> \n                <input type=\"radio\" name=\"radio\" value=\"process\" @change=\"onTypeSelect('process')\" /> \n                Process \n            </label>  ")
], -1 /* HOISTED */));
const _hoisted_2 = {
    key: 0,
    class: "nameInputDiv"
};
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Name", -1 /* HOISTED */));
const _hoisted_4 = {
    key: 1,
    class: "nameInputDiv"
};
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Name", -1 /* HOISTED */));
const _hoisted_6 = {
    key: 2,
    class: "nameInputDiv"
};
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Name", -1 /* HOISTED */));
const _hoisted_8 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();
const _hoisted_9 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */));
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 3 };
const _hoisted_12 = {
    key: 0,
    class: "nameInputDiv"
};
const _hoisted_13 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Name", -1 /* HOISTED */));
const _hoisted_14 = {
    key: 1,
    class: "nameInputDiv"
};
const _hoisted_15 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Name", -1 /* HOISTED */));
const _hoisted_16 = { key: 4 };
const _hoisted_17 = { class: "createButtonDiv" };
const _hoisted_18 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Selections "),
        _hoisted_1,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" New Module "),
        ($setup.isModule)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
                _hoisted_3,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    class: "nameInput",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (($setup.name) = $event)),
                    placeholder: "Name"
                }, null, 512 /* NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    style: { "margin-top": "10px" },
                    class: "nameInput",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => (($setup.description) = $event)),
                    placeholder: "Description"
                }, null, 512 /* NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.description]
                ])
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" New Model "),
        ($setup.isEntity)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [
                _hoisted_5,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    class: "nameInput",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => (($setup.name) = $event)),
                    placeholder: "Entity Name"
                }, null, 512 /* NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                ])
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" New Process "),
        ($setup.isProcess)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [
                _hoisted_7,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    class: "nameInput",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => (($setup.name) = $event)),
                    placeholder: "Process Name",
                    onInput: $setup.handleProcessName
                }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                ]),
                _hoisted_8,
                _hoisted_9,
                (!!$setup.processNameErrorLabel.length)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.processNameErrorLabel), 1 /* TEXT */))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.isScreen)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>\n                <label>\n                    <input type=\"radio\" name=\"radio\" value=\"emptyPage\" @change=\"onTypeSelect('emptyPage')\" />\n                    Empty Page\n                </label>\n                <label>\n                    <input type=\"radio\" name=\"radio\" value=\"quickComponent\" @change=\"onTypeSelect('quickComponent')\" />\n                    Quick Component\n                </label>\n                <label>\n                    <input type=\"radio\" name=\"radio\" value=\"quickTemplate\" @change=\"onTypeSelect('quickTemplate')\" />\n                    Quick Template\n                </label>\n                <label>\n                    <input type=\"radio\" name=\"radio\" value=\"importFromFile\" @change=\"onTypeSelect('importFromFile')\" />\n                    Import From File\n                </label>\n                \n                <label> \n                    <input type=\"radio\" name=\"radio\" value=\"generateFromEntity\" @change=\"onTypeSelect('generateFromEntity')\" /> \n                    Generate From Entity \n                </label> \n               \n            </div> "),
                ($setup.isEmptyPage || $setup.isQuickComponent || $setup.isQuickTemplate)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [
                        _hoisted_13,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            class: "nameInput",
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (($setup.name) = $event)),
                            placeholder: "Screen Name"
                        }, null, 512 /* NEED_PATCH */), [
                            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                        ])
                    ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                ($setup.isImportFromFile)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [
                        _hoisted_15,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            class: "nameInput",
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => (($setup.name) = $event)),
                            placeholder: "Screen Name"
                        }, null, 512 /* NEED_PATCH */), [
                            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                type: "file",
                                onChange: _cache[6] || (_cache[6] = ($event) => ($setup.upload($event))),
                                accept: ".qjson"
                            }, null, 32 /* HYDRATE_EVENTS */)
                        ])
                    ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  isGenerateFromEntity \n            <div v-if=\"isGenerateFromEntity\"> \n                <input v-model=\"name\" placeholder=\"Screen Name\" />.qjson\n                <select v-model=\"selectedEntity\">\n                    <option v-for=\"entity in entities\" :value=\"entity\">\n                        {{entity}}\n                    </option>\n                </select>\n                <select v-model=\"selectedGenerateScreenType\">\n                    <option v-for=\"generateScreenType in generateScreenTypes\" :value=\"generateScreenType\">\n                        {{generateScreenType}}\n                    </option>\n                </select>\n            </div> \n            ")
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" New Folder "),
        ($setup.isFolder)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                class: "createButton",
                onClick: _cache[7] || (_cache[7] = ($event) => ($setup.create())),
                disabled: $setup.isProcess ? !!$setup.processNameErrorLabel.length || !$setup.name.length : false
            }, "Create", 8 /* PROPS */, _hoisted_18)
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

/***/ "./src/presentation/vue3/components/dialogs/newItem.vue":
/*!**************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/newItem.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newItem_vue_vue_type_template_id_d76da488_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItem.vue?vue&type=template&id=d76da488&scoped=true&ts=true */ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&scoped=true&ts=true");
/* harmony import */ var _newItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newItem.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _newItem_vue_vue_type_style_index_0_id_d76da488_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css */ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_newItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_newItem_vue_vue_type_template_id_d76da488_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-d76da488"],['__file',"src/presentation/vue3/components/dialogs/newItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_style_index_0_id_d76da488_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=style&index=0&id=d76da488&scoped=true&lang=css");


/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=script&setup=true&lang=ts":
/*!*************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=script&setup=true&lang=ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./newItem.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&scoped=true&ts=true":
/*!****************************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&scoped=true&ts=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_template_id_d76da488_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_template_id_d76da488_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./newItem.vue?vue&type=template&id=d76da488&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&scoped=true&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_components_dialogs_newItem_vue.js.map