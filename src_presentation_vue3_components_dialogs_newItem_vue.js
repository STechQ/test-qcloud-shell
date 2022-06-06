"use strict";
(self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || []).push([["src_presentation_vue3_components_dialogs_newItem_vue"],{

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
        parentType: { type: String, required: true }
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
        const isEntity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isProcess = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isEmptyPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isQuickComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isQuickTemplate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isImportFromFile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isGenerateFromEntity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const createButtonVisibility = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const processNameErrorLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
        let entities = ['entity1', 'entity2'];
        let generateScreenTypes = ['List', 'Create'];
        let selectedEntity = '';
        let selectedGenerateScreenType = '';
        if (props.parentType === "module") {
            onTypeSelect('model');
        }
        function create() {
            executor.execute(async () => {
                if (isModule.value) {
                    await executor.executeUseCase(_domain_useCase_ICreateModule__WEBPACK_IMPORTED_MODULE_4__.ICreateModule, {
                        name: name.value,
                        ownerProjects: [props.parentId],
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
                            name: name.value + ".process",
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
        const __returned__ = { props, viewModel, executor, dialog, studio, processEditorUtil, emit, isModule, isFolder, isModel, name, isEntity, isScreen, isProcess, isEmptyPage, isQuickComponent, isQuickTemplate, isImportFromFile, isGenerateFromEntity, createButtonVisibility, processNameErrorLabel, entities, generateScreenTypes, selectedEntity, selectedGenerateScreenType, create, setAllSubRadiosFalse, onTypeSelect, upload, handleProcessName };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { key: 0 };
const _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Module ");
const _hoisted_3 = { key: 1 };
const _hoisted_4 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Entity ");
const _hoisted_5 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Screen ");
const _hoisted_6 = { key: 2 };
const _hoisted_7 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Process ");
const _hoisted_8 = { key: 0 };
const _hoisted_9 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create New Module ");
const _hoisted_10 = { key: 1 };
const _hoisted_11 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".dm ");
const _hoisted_12 = { key: 2 };
const _hoisted_13 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".process ");
const _hoisted_14 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { key: 3 };
const _hoisted_17 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Empty Page ");
const _hoisted_18 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Quick Component ");
const _hoisted_19 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Quick Template ");
const _hoisted_20 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Import From File ");
const _hoisted_21 = { key: 0 };
const _hoisted_22 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".qjson ");
const _hoisted_23 = { key: 1 };
const _hoisted_24 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".qjson ");
const _hoisted_25 = { key: 4 };
const _hoisted_26 = { key: 5 };
const _hoisted_27 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Selections "),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
            ($setup.props.parentType === 'application')
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_1, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                        type: "radio",
                        name: "radio",
                        value: "module",
                        onChange: _cache[0] || (_cache[0] = ($event) => ($setup.onTypeSelect('module')))
                    }, null, 32 /* HYDRATE_EVENTS */),
                    _hoisted_2
                ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            ($setup.props.parentType === 'module')
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_3, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                        type: "radio",
                        name: "radio",
                        value: "entity",
                        onChange: _cache[1] || (_cache[1] = ($event) => ($setup.onTypeSelect('entity')))
                    }, null, 32 /* HYDRATE_EVENTS */),
                    _hoisted_4
                ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    type: "radio",
                    name: "radio",
                    value: "screen",
                    onChange: _cache[2] || (_cache[2] = ($event) => ($setup.onTypeSelect('screen')))
                }, null, 32 /* HYDRATE_EVENTS */),
                _hoisted_5
            ]),
            ($setup.props.parentType === 'module')
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_6, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                        type: "radio",
                        name: "radio",
                        value: "process",
                        onChange: _cache[3] || (_cache[3] = ($event) => ($setup.onTypeSelect('process')))
                    }, null, 32 /* HYDRATE_EVENTS */),
                    _hoisted_7
                ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" New Module "),
        ($setup.isModule)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [
                _hoisted_9,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (($setup.name) = $event)),
                    placeholder: "Name"
                }, null, 512 /* NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                ])
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" New Model "),
        ($setup.isEntity)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => (($setup.name) = $event)),
                    placeholder: "Entity Name"
                }, null, 512 /* NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                ]),
                _hoisted_11
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" New Process "),
        ($setup.isProcess)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => (($setup.name) = $event)),
                    placeholder: "Process Name",
                    onInput: $setup.handleProcessName
                }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                ]),
                _hoisted_13,
                _hoisted_14,
                (!!$setup.processNameErrorLabel.length)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.processNameErrorLabel), 1 /* TEXT */))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.isScreen)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            type: "radio",
                            name: "radio",
                            value: "emptyPage",
                            onChange: _cache[7] || (_cache[7] = ($event) => ($setup.onTypeSelect('emptyPage')))
                        }, null, 32 /* HYDRATE_EVENTS */),
                        _hoisted_17
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            type: "radio",
                            name: "radio",
                            value: "quickComponent",
                            onChange: _cache[8] || (_cache[8] = ($event) => ($setup.onTypeSelect('quickComponent')))
                        }, null, 32 /* HYDRATE_EVENTS */),
                        _hoisted_18
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            type: "radio",
                            name: "radio",
                            value: "quickTemplate",
                            onChange: _cache[9] || (_cache[9] = ($event) => ($setup.onTypeSelect('quickTemplate')))
                        }, null, 32 /* HYDRATE_EVENTS */),
                        _hoisted_19
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            type: "radio",
                            name: "radio",
                            value: "importFromFile",
                            onChange: _cache[10] || (_cache[10] = ($event) => ($setup.onTypeSelect('importFromFile')))
                        }, null, 32 /* HYDRATE_EVENTS */),
                        _hoisted_20
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n                <label> \n                    <input type=\"radio\" name=\"radio\" value=\"generateFromEntity\" @change=\"onTypeSelect('generateFromEntity')\" /> \n                    Generate From Entity \n                </label> \n                ")
                ]),
                ($setup.isEmptyPage || $setup.isQuickComponent || $setup.isQuickTemplate)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => (($setup.name) = $event)),
                            placeholder: "Screen Name"
                        }, null, 512 /* NEED_PATCH */), [
                            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                        ]),
                        _hoisted_22
                    ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                ($setup.isImportFromFile)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => (($setup.name) = $event)),
                            placeholder: "Screen Name"
                        }, null, 512 /* NEED_PATCH */), [
                            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]
                        ]),
                        _hoisted_24,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                                type: "file",
                                onChange: _cache[13] || (_cache[13] = ($event) => ($setup.upload($event))),
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
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($setup.createButtonVisibility)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    onClick: _cache[14] || (_cache[14] = ($event) => ($setup.create())),
                    disabled: $setup.isProcess ? !!$setup.processNameErrorLabel.length || !$setup.name.length : false
                }, "Create", 8 /* PROPS */, _hoisted_27)
            ]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
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
/* harmony import */ var _newItem_vue_vue_type_template_id_d76da488_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItem.vue?vue&type=template&id=d76da488&ts=true */ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&ts=true");
/* harmony import */ var _newItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newItem.vue?vue&type=script&setup=true&lang=ts */ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_runner_work_QCloud_Shell_QCloud_Shell_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_newItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_newItem_vue_vue_type_template_id_d76da488_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/presentation/vue3/components/dialogs/newItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&ts=true":
/*!****************************************************************************************************!*\
  !*** ./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&ts=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_template_id_d76da488_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_2_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_newItem_vue_vue_type_template_id_d76da488_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-2!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./newItem.vue?vue&type=template&id=d76da488&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-2!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/presentation/vue3/components/dialogs/newItem.vue?vue&type=template&id=d76da488&ts=true");


/***/ })

}]);
//# sourceMappingURL=src_presentation_vue3_components_dialogs_newItem_vue.js.map