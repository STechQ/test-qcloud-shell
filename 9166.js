"use strict";(this.webpackChunkqcloud_shell=this.webpackChunkqcloud_shell||[]).push([[9166],{59738:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(34663),a=t.n(i),l=t(7638),o=t.n(l),s=t(79240),r=o()(a());r.i(s.Z),r.push([e.id,"\n*[data-v-9e8d8110] { \n    font-family: 'Roboto';\n}\n.container[data-v-9e8d8110] {\n    padding: 20px;\n}\n.selectedItems[data-v-9e8d8110] {\n    margin-top: 10px;\n    max-height: 230px;\n    overflow: auto;\n}\n.importBtn[data-v-9e8d8110] {\n    border-radius: 4px;\n    border: none;\n    color: white;\n    width: 97px;\n    height: 40px;\n    font-style: normal;\n    font-size: 16px;\n    font-weight: 500;\n    letter-spacing: 0px;\n}\n.importBtnDiv[data-v-9e8d8110] {\n    text-align: end;\n    margin-top: 30px;\n}\n.removeIcon[data-v-9e8d8110] {\n    cursor: pointer;\n    padding-right: 10px;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 0px;\n}\n.removeIconReposition[data-v-9e8d8110] {\n    cursor: pointer;\n    padding-right: 10px;\n    font-style: normal;\n    font-size: 18px;\n    margin-left: 23px;\n}\n.loading[data-v-9e8d8110] {\n    cursor: pointer;\n    color: #212121;\n    padding-right: 10px;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 0px;\n}\n[data-v-9e8d8110]::-webkit-file-upload-button {\n    background: #2f3160;\n    color: white;\n    border-radius: 4px;\n    width: 120px;\n    height: 48px;\n}\n.fileUploadDiv[data-v-9e8d8110] {\n    cursor: pointer;\n}\n.filesValue[data-v-9e8d8110] {\n    margin-top: 10px;\n    background-color: #f5f5f5;\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    font-size: 16px;\n    letter-spacing: 0px;\n    width: 100%;\n    text-align: start;\n    padding: 4px;\n}\n.uploadFilesText[data-v-9e8d8110] {\n    color: #616161;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 0px;\n    margin-top: 10px;\n}\n.fileTypeQjson[data-v-9e8d8110] {\n    font-size: 18px;\n    padding-left: 5px;\n}\n.fileTypeImage[data-v-9e8d8110] {\n    font-size: 18px;\n    padding-left: 5px;\n}\n.fileTypeEntity[data-v-9e8d8110] {\n    font-size: 18px;\n    padding-left: 5px;\n}\n.fileTypeBpmn[data-v-9e8d8110] {\n    font-size: 18px;\n    padding-left: 5px;\n}\n.fileTypeProcess[data-v-9e8d8110] {\n    font-size: 18px;\n    padding-left: 5px;\n}\n.unacceptableFileType[data-v-9e8d8110] {\n    color: red;\n    font-size: 18px;\n    padding-left: 5px;\n}\n.uploadArea[data-v-9e8d8110] {\n    text-align: center;\n    padding-top: 25px;\n    border: 1px dashed #a1a1a1;\n    height: 100px;\n}\n.cancelBtn[data-v-9e8d8110] {\n    background: none;\n    border: none;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: 0px;\n    margin-left: 50px;\n    margin-right: 10px;\n    color: #757575;\n    letter-spacing: 0.02px;\n}\n.loader[data-v-9e8d8110] {\n    border: 3px solid #f3f3f3;\n    border-radius: 70%;\n    border-top: 3px solid #3498db;\n    width: 12px;\n    height: 12px;\n    -webkit-animation: spin-9e8d8110 1s linear infinite;\n    animation: spin-9e8d8110 1s linear infinite;\n}\n.ml-6[data-v-9e8d8110] {\n    margin-left: 6px;\n}\n\n/* Safari */\n@-webkit-keyframes spin-9e8d8110 {\n0% {\n        -webkit-transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n}\n}\n@keyframes spin-9e8d8110 {\n0% {\n        transform: rotate(0deg);\n}\n100% {\n        transform: rotate(360deg);\n}\n}\n","",{version:3,sources:["webpack://./src/presentation/vue3/components/dialogs/importModelDialog.vue"],names:[],mappings:";AA+fA;IACI,qBAAqB;AACzB;AAEA;IACI,aAAa;AACjB;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;AAEA;IACI,eAAe;IACf,gBAAgB;AAEpB;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;AAEA;IACI,eAAe;AACnB;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,YAAY;AAChB;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,gBAAgB;AACpB;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,UAAU;IACV,eAAe;IACf,iBAAiB;AACrB;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,0BAA0B;IAC1B,aAAa;AACjB;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,sBAAsB;AAC1B;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,mDAA0C;IAC1C,2CAAkC;AACtC;AAEA;IACI,gBAAgB;AACpB;;AAEA,WAAW;AACX;AACI;QACI,+BAA+B;AACnC;AAEA;QACI,iCAAiC;AACrC;AACJ;AAEA;AACI;QACI,uBAAuB;AAC3B;AAEA;QACI,yBAAyB;AAC7B;AACJ",sourcesContent:['<script setup lang="ts">\nimport { IUseCaseExecutor } from "../../../../domain/useCase/IUseCaseExecutor";\nimport { container } from "../../../../domain/core/diContainer";\nimport { ICreateModel, ICreateModelParam } from "../../../../domain/useCase/ICreateModel";\nimport { IApplication, IModel, IModule } from "../../../../domain/model/models";\nimport { ref } from "@vue/runtime-dom";\nimport { computed } from "@vue/reactivity";\nimport { TooltipImpl } from "../../impls/tooltipImpl";\nimport { IFormValidator, IFormValidatorOptions, IFormValidatorResponseItem } from "../../../../domain/infrastructure/IFormValidator";\nimport { IViewModel } from "../../../../domain/viewModel/IViewModel";\nimport { IQuickEditor } from "../../../../domain/objects/editors/IQuickEditor";\nimport { BinaryHelper } from "@stechquick/algae/lib/helpers/binaryHelper";\nimport { ILogger } from "../../../../domain/infrastructure/ILogger";\nimport { INewItemPropsInline } from "../IComponentProps";\nimport { IViewModelManager } from "../../../../domain/viewModel/IViewModelManager";\n\nconst executor = container.resolve<IUseCaseExecutor>(IUseCaseExecutor);\nconst tooltip = container.resolve<TooltipImpl>(TooltipImpl);\nconst formValidator = container.resolve<IFormValidator>(IFormValidator);\nconst viewModel = container.resolve<IViewModel>(IViewModel);\nconst viewModelManager = container.resolve<IViewModelManager>(IViewModelManager);\nconst logger = container.resolve<ILogger>(ILogger);\nconst nameValidations: IFormValidatorOptions = { minAndMaxLength: { min: 2, max: 60 }, nonSpaceCharacter: true, customRegex:{ regex: /^([a-zA-Z0-9-_.]+)$/, message: "Available characters: A-Z, a-z, 1-9, \'-\', \'_\' and \'.\'"} };\n\nconst applications = ref(viewModel.user!.selectedOrganization!.applications);\n\ninterface IImportFile {\n    name: string;\n    content: string;\n    isDuplicate: boolean;\n    isAcceptable: boolean;\n    nameValidationExceptions: Array<IFormValidatorResponseItem>;\n    type: "entity" | "qjson" | "process" | "bpmn" | "flow" | "png" | "jpg" | "jpeg" | "svg" | "gif" | "json" | "woff" | "woff2" | "ttf" | "otf" | "css";\n}\n\n\n\nconst param = defineProps<{ param: INewItemPropsInline }>();\nconst props = param.param;\n\nconst fileItems = ref<Array<IImportFile>>([]);\nconst owner_temp = viewModelManager.findObject(props.ownerId);\nif (owner_temp?.objectType != "application" && owner_temp?.objectType != "module") { throw new Error("unexpected owner type"); }\nconst owner = owner_temp;\n\nconst loadingIcon = ref(false);\nconst emit = defineEmits(["close"]);\nconst entityNumber = ref(0);\nlet acceptableFileTypes: Array<IImportFile["type"]> =\n    owner.objectType == "application" || props.path != "/"\n        ? ["qjson" ]\n        : owner.objectType == "module"\n        ? Object.entries(applications.value)\n              .filter((application) => application[1])\n              .map((application) => (application[0] == "quick" ? "qjson" : (application[0] as IImportFile["type"])))\n        : [];\nacceptableFileTypes = acceptableFileTypes.concat(["gif", "png", "jpeg", "jpg", "svg", "json", "woff", "woff2", "ttf", "otf"])\n\nconst binaryFileTypes: Array<string> = ["gif", "png", "jpeg", "jpg", "svg"]; // dictionary yap.\n\nif(viewModel.user!.selectedOrganization!.features?.multipleCss) {\n    acceptableFileTypes = acceptableFileTypes.concat(["css"]);\n}\n\nconst hasEntity = ref(owner.objectType == "application" ? false : owner.children.some((i) => i.objectType == "model" && i.modelType == "entityDesigner") == true);\n\nfunction checkDuplicate(name: string, path: string, type: IImportFile["type"]) {\n    let extensionType = (type == "json") ? "lottie" : type;\n\n    const purify = (str:string) => str.includes(\'.\') ? str.split(".").slice(0, -1).join(".") : str;\n    const isDuplicate = (items: Array<IModel | IModule>) => items.filter((e): e is IModel => e.objectType == \'model\')\n        .some((i) => i.path == path && i.name == purify(name) && i.modelType == extensionType);\n\n    return isDuplicate(owner.objectType == \'module\' ? owner.children : viewModel.studio.items);\n}\n\nfunction getInputAccept() {\n    let fileTypes = acceptableFileTypes;\n    if (owner.objectType == "application"){\n        fileTypes = fileTypes.filter(fileType => (applications as any)[fileType] != true);\n    }\n    const types = acceptableFileTypes.map(fileType => `.${fileType}`).join(", ");\n    logger.log({ level: "debug", message: "accept types: " + types });\n    return types;\n}\n\nfunction checkExtension(file: string) {\n    const extension = file.substring(file.lastIndexOf(".") + 1, file.length);\n    return extension as IImportFile["type"];\n}\n\nasync function selectedFiles() {\n    var item = document.getElementById("fileInput") as HTMLInputElement | null;\n    for (var i = 0; i < item?.files?.length!; i++) {\n        const file = item?.files?.item(i);\n        const extensionOfFile = checkExtension(file!.name);\n        // const fileNameWithoutExtension = file!.name.substring(0, file!.name.lastIndexOf("."));\n        \n        // const isExist = fileItems.value.some((i) => i.name == file?.name) || fileItems.value.some((i) => i.name.substring(0, file!.name.lastIndexOf(".")) == fileNameWithoutExtension) ;\n        const isExist = fileItems.value.some((i) => i.name == file?.name);\n       \n        if (isExist) { continue; }\n        \n            // const isDuplicate = checkDuplicate(file!.name, props.path, extensionOfFile) || checkDuplicate(fileNameWithoutExtension, props.path, extensionOfFile);\n            const isDuplicate = checkDuplicate(file!.name, props.path, extensionOfFile);\n\n            // const nameValidationExceptions: Array<IFormValidatorResponseItem> = formValidator\n            //     .validate(fileNameWithoutExtension, nameValidations)\n            //     .filter((item) => !item.isValid);\n            const nameValidationExceptions: Array<IFormValidatorResponseItem> = formValidator\n                .validate(file!.name.split(".")[0], nameValidations)\n                .filter((item) => !item.isValid);\n            const isAcceptable = acceptableFileTypes.includes(extensionOfFile);\n\n        const isBinaryFile = BinaryHelper.checkBinaryFile(extensionOfFile);\n\n        if(isBinaryFile){\n            const binaryFileContent = await getBinaryFileContent(file!);\n            fileItems.value.push({\n                name: file!.name,\n                content: binaryFileContent,\n                nameValidationExceptions,\n                isDuplicate,\n                isAcceptable,\n                type: extensionOfFile,\n            });\n        }\n        else{\n            const text = await file!.text();\n            fileItems.value.push({\n                name: file!.name,\n                content: text,\n                nameValidationExceptions,\n                isDuplicate,\n                isAcceptable,\n                type: extensionOfFile,\n            });\n        }\n\n            if (extensionOfFile == "entity") {\n                entityNumber.value = entityNumber.value + 1;\n            }\n        }\n    tooltip.startTooltip();\n}\n\nasync function getBinaryFileContent(file: File): Promise<string> {\n    const fileReader = new FileReader();\n\n    return new Promise((resolve, reject) => {\n        fileReader.onload = () => {\n            resolve(fileReader.result as string);\n        };\n        fileReader.readAsDataURL(file);\n    });\n}\n\nasync function importSelectedModels() {\n    emit("close");\n    if (isButtonDisabled.value) return;\n    loadingIcon.value = true;\n    \n    let images: { path: string; name: string; }[] = [];\n    fileItems.value.forEach(async (item) => {\n        if (item.isDuplicate || !item.isAcceptable || item.nameValidationExceptions.length != 0) {\n            return;\n        }\n        const createObject: ICreateModelParam = {\n            name: item.name.split(".").slice(0, -1).join("."),\n            ownerId: owner.ID,\n            modelBody: [{ key: item.type, model: item!.content }],\n            modelType: "qjson",\n            modelAdditionals: { qjsonType: "qjson" },\n            path: props.path,\n        };\n\n        switch (item.type) {\n            case "qjson":\n                createObject.modelType = "qjson";\n                createObject.modelAdditionals = { qjsonType: "qjson" };\n                break;\n            case "entity":\n                if (isEntityRuleBlock(item)) {\n                    return;\n                }\n                createObject.modelType = "entityDesigner";\n                createObject.modelAdditionals = {};\n                break;\n            case "bpmn":\n                createObject.modelType = "bpmn";\n                createObject.modelAdditionals = { isAutoGenerated: false, isModifiedByUser: true };\n                break;\n\n            case "process":\n                createObject.modelType = "process";\n                createObject.modelAdditionals = {};\n                break;\n            case "png":\n                createObject.name += ".png"\n                createObject.modelType = "png";\n                createObject.modelAdditionals = {};\n                break;\n            case "jpg":\n                createObject.name += ".jpg" \n                createObject.modelType = "jpg";\n                createObject.modelAdditionals = {};\n                break;\n            case "jpeg":\n                createObject.name += ".jpeg"\n                createObject.modelType = "jpeg";\n                createObject.modelAdditionals = {};\n                break;\n            case "svg":\n                createObject.name += ".svg"\n                createObject.modelType = "svg";\n                createObject.modelAdditionals = {};\n                break;\n            case "gif":\n                createObject.name += ".gif"\n                createObject.modelType = "gif";\n                createObject.modelAdditionals = {};\n                break;\n            case "json":\n                createObject.modelType = "lottie";\n                createObject.extension = "json";\n                break;\n            case "css":\n                createObject.name += ".css"\n                createObject.modelType = "css";\n                createObject.key = "style";\n                createObject.modelAdditionals = {};\n                break;\n            case "woff":\n                createObject.name += ".woff";\n                createObject.modelType = "woff";\n                createObject.modelAdditionals = {};\n                break;\n            case "woff2":\n                createObject.name += ".woff2";\n                createObject.modelType = "woff2";\n                createObject.modelAdditionals = {};\n                break;\n            case "ttf":\n                createObject.name += ".ttf";\n                createObject.modelType = "ttf";\n                createObject.modelAdditionals = {};\n                break;\n            case "otf":\n                createObject.name += ".otf";\n                createObject.modelType = "otf";\n                createObject.modelAdditionals = {};\n                break;\n        }\n\n        try {\n            let model = await executor.executeUseCase<ICreateModel>(ICreateModel, createObject);\n            images.push({path: formatPath(model.ID), name: model.name});\n\n            if(model?.modelType === "css" && item!.content) {\n                const targetEditor = container.resolve<IQuickEditor>(IQuickEditor);\n                targetEditor.replaceStyle!("addStyle", model.ID, item!.content);\n            }\n        }\n        catch{\n            console.log("error")\n        }\n    \n        loadingIcon.value = false;\n    });\n       \n\n      \n}\nfunction formatPath(id:string){\n    return `<<img:${id}>>`;\n}\nfunction computedIcon(fileType: string, isAcceptable?: boolean) {\n    switch (fileType) {\n        case "qjson":\n            if (!isAcceptable)\n            return `mdi mdi-palette fileTypeQjson`;\n        case "entity":\n            if (!isAcceptable)\n            return `mdi mdi-database fileTypeEntity`;\n        case "bpmn":\n            if (!isAcceptable)\n            return `mdi mdi-vector-polyline fileTypeBpmn`;\n        case "process":\n            if (!isAcceptable)\n            return `mdi mdi-auto-fix fileTypeProcess`;\n        case "png":\n        case "jpg":\n        case "jpeg":\n        case "svg":\n        case "gif":\n        case "json":\n            if (!isAcceptable)                       \n            return `mdi mdi-image-outline fileTypeImage`;\n        case "woff":\n        case "woff2":\n        case "ttf":\n        case "otf":\n            if (!isAcceptable)                       \n            return `mdi mdi-format-font fileTypeImage`;\n        case "css":\n            return "mdi mdi-music-accidental-sharp ml-6";\n        // case "woff":\n        //     return "mdi mdi-format-font fileTypeImage";\n        default:\n    }\n}\nfunction computeIconColor(fileType: string) {\n    let color = "#212121"\n    switch (fileType) {\n        case "qjson":\n            color = "#449dd1"\n            return color;\n        case "entity":\n                color = "rgb(233, 114, 76)"\n            return  color;\n        case "bpmn":\n                color = "rgb(0, 124, 119)"\n            return  color;\n        case "process":\n                color = "rgb(0, 124, 119)"\n            return  color;\n        case "png":\n        case "jpg":\n        case "jpeg":\n        case "svg":\n        case "gif":\n        case "json":\n        case "css":\n            return  color;\n        default:\n    }\n\n}\nfunction removeItem(file: IImportFile, selectedFiles: Array<any>) {\n    if (file.type == "entity") {\n        entityNumber.value = entityNumber.value - 1;\n    }\n    const index = selectedFiles.indexOf(file);\n    selectedFiles.splice(index, 1);\n    tooltip.startTooltip();\n}\n\nfunction isEntityRuleBlock(item: IImportFile) {\n    if (item.type != "entity") {\n        return false;\n    }\n\n    const isEntityRuleBlock = hasEntity.value || entityNumber.value > 1;\n    return isEntityRuleBlock;\n}\n\nfunction anyNotDuplicateItem() {\n    const retVal = fileItems.value.some((i) => i.type != "entity" && !i.isDuplicate && i.isAcceptable);\n    return retVal;\n}\n\nfunction anyAcceptableItem() {\n    const retVal = fileItems.value.some((i) => i.isAcceptable && i.nameValidationExceptions.length == 0);\n    return retVal;\n}\n\nconst isButtonDisabled = computed(() => {\n    if (fileItems.value.length == 0) {\n        return true;\n    }\n\n    if (!anyAcceptableItem()) {\n        return true;\n    }\n\n    if (loadingIcon.value) {\n        return true;\n    }\n\n    if (fileItems.value.length > entityNumber.value && anyNotDuplicateItem()) {\n        return false;\n    }\n\n    if (fileItems.value.some((i) => i.type != "entity")) {\n        return true;\n    }\n\n    const isEntityRuleBlock = entityNumber.value > 1 || (hasEntity.value && entityNumber.value > 0);\n    return isEntityRuleBlock;\n});\n<\/script>\n\n<template>\n    <div class="container">\n        <div class="fileInputDiv">\n            <div class="fileUploadDiv col-12" onclick="document.getElementById(\'fileInput\').click()">\n                <div class="col-12 uploadArea" style="display: flex; padding-left: 150px; padding-top: 35px">\n                    <div\n                        class="mdi mdi-cloud-upload-outline"\n                        style="text-align: center; font-size: 25px; color: #a1a1a1; padding-right: 10px; margin-top: -7px"\n                    ></div>\n                    <span style="font-weight: bold">Click</span><span style="padding-left: 10px">here to upload your files.</span>\n                </div>\n            </div>\n            <input\n                style="display: none"\n                type="file"\n                id="fileInput"\n                multiple\n                @change="selectedFiles()"\n                :accept="getInputAccept()"\n            />\n        </div>\n        <div class="uploadFilesText">\n                    Selected Files <span> ({{ fileItems.length }})</span>\n                </div>\n        <div id="selectedFiles" class="selectedItems">\n            <div v-if="fileItems.length > 0">\n\n                <div v-for="fileValues in fileItems" :key="fileValues.name">\n                    <div\n                        v-if="\n                            !fileValues.isDuplicate &&\n                            !isEntityRuleBlock(fileValues) &&\n                            fileValues.isAcceptable &&\n                            fileValues.nameValidationExceptions.length == 0\n                        "\n                        class="filesValue"\n                        style="color: #000000"\n                    >\n                        <div><i :class="computedIcon(fileValues.type)" :style="{color: computeIconColor(fileValues.type)}"></i></div>\n                        <div class="col-10" style="margin-left: 10px; text-overflow: ellipsis; overflow: hidden">\n                            {{ fileValues.type == "qjson" ? fileValues.name.split(".").slice(0, -1).join(".") : fileValues.name }}\n                        </div>\n\n                        <div class="col-1" style="text-align: end; padding-left: 30px">\n                            <i\n                                v-if="fileValues && !loadingIcon"\n                                class="mdi mdi-close removeIcon color: #212121 "\n                                :style="computedIcon(fileValues.type) ? \'\' : \'margin-left: 23px;\'"\n                                @click="removeItem(fileValues, fileItems)"\n                            ></i>\n\n                            <div v-if="loadingIcon" style="padding-top: 7px" class="loader"></div>\n                        </div>\n                    </div>\n\n                    <div\n                        v-if="\n                            fileValues.isDuplicate ||\n                            isEntityRuleBlock(fileValues) ||\n                            !fileValues.isAcceptable ||\n                            fileValues.nameValidationExceptions.length != 0\n                        "\n                        class="filesValue"\n                        style="color: red ; border: 1px solid red"\n                    >\n                        <div><i :class="computedIcon(fileValues.type, (fileValues.isDuplicate || isEntityRuleBlock(fileValues) || !fileValues.isAcceptable ||fileValues.nameValidationExceptions.length != 0))"></i></div>\n                        <div\n                            class="col-10"\n                            data-toggle="tooltip"\n                            :title="\n                                isEntityRuleBlock(fileValues)\n                                    ? \'Only one entity file is allowed\'\n                                    : !fileValues.isAcceptable\n                                    ? `File type is not supported.`\n                                    : fileValues.nameValidationExceptions.length != 0  \n                                    ? fileValues.nameValidationExceptions.at(0)?.message \n                                    : \'This file is already imported\'\n                            "\n                            placement="bottom"\n                            style="margin-left: 10px; text-overflow: ellipsis; overflow: hidden"\n                        >\n                            {{ fileValues.type == "qjson" ? fileValues.name.split(".").slice(0, -1).join(".") : fileValues.name }}\n                        </div>\n\n                        <div class="col-1" style="text-align: end; padding-left: 30px">\n                            <i\n                                v-if="fileValues && !loadingIcon"\n                                :class="\'mdi mdi-close removeIcon\' + (computedIcon(fileValues.type) ? \'\' : \' removeIconReposition\')"\n                                @click="removeItem(fileValues, fileItems)"\n                            ></i>\n\n                            <div\n                                v-if="!fileValues.isDuplicate && !isEntityRuleBlock(fileValues) && loadingIcon"\n                                style="padding-top: 7px"\n                                class="loader"\n                            ></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="importBtnDiv">\n            <button class="cancelBtn" @click="emit(\'close\')">Cancel</button>\n            <button\n                class="importBtn"\n                :disabled="isButtonDisabled"\n                :style="{ backgroundColor: isButtonDisabled ? \'#37373733\' : \'#151233\' }"\n                @click="importSelectedModels()"\n            >\n                UPLOAD\n            </button>\n        </div>\n    </div>\n\n</template>\n\n<style scoped>\n@import url("../../../../styles/IDE3.css");\n\n* { \n    font-family: \'Roboto\';\n}\n\n.container {\n    padding: 20px;\n}\n\n.selectedItems {\n    margin-top: 10px;\n    max-height: 230px;\n    overflow: auto;\n}\n\n.importBtn {\n    border-radius: 4px;\n    border: none;\n    color: white;\n    width: 97px;\n    height: 40px;\n    font-style: normal;\n    font-size: 16px;\n    font-weight: 500;\n    letter-spacing: 0px;\n}\n\n.importBtnDiv {\n    text-align: end;\n    margin-top: 30px;\n    \n}\n\n.removeIcon {\n    cursor: pointer;\n    padding-right: 10px;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 0px;\n}\n\n.removeIconReposition {\n    cursor: pointer;\n    padding-right: 10px;\n    font-style: normal;\n    font-size: 18px;\n    margin-left: 23px;\n}\n\n.loading {\n    cursor: pointer;\n    color: #212121;\n    padding-right: 10px;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 0px;\n}\n\n::-webkit-file-upload-button {\n    background: #2f3160;\n    color: white;\n    border-radius: 4px;\n    width: 120px;\n    height: 48px;\n}\n\n.fileUploadDiv {\n    cursor: pointer;\n}\n\n.filesValue {\n    margin-top: 10px;\n    background-color: #f5f5f5;\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    font-size: 16px;\n    letter-spacing: 0px;\n    width: 100%;\n    text-align: start;\n    padding: 4px;\n}\n\n.uploadFilesText {\n    color: #616161;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 0px;\n    margin-top: 10px;\n}\n\n.fileTypeQjson {\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n.fileTypeImage {\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n.fileTypeEntity {\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n.fileTypeBpmn {\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n.fileTypeProcess {\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n.unacceptableFileType {\n    color: red;\n    font-size: 18px;\n    padding-left: 5px;\n}\n\n.uploadArea {\n    text-align: center;\n    padding-top: 25px;\n    border: 1px dashed #a1a1a1;\n    height: 100px;\n}\n\n.cancelBtn {\n    background: none;\n    border: none;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: 0px;\n    margin-left: 50px;\n    margin-right: 10px;\n    color: #757575;\n    letter-spacing: 0.02px;\n}\n\n.loader {\n    border: 3px solid #f3f3f3;\n    border-radius: 70%;\n    border-top: 3px solid #3498db;\n    width: 12px;\n    height: 12px;\n    -webkit-animation: spin 1s linear infinite;\n    animation: spin 1s linear infinite;\n}\n\n.ml-6 {\n    margin-left: 6px;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}\n</style>\n'],sourceRoot:""}]);const c=r},51289:(e,n)=>{n.I=void 0;var t=function(){function e(){}return e.checkBinaryFile=function(e){return{entity:!1,qjson:!1,process:!1,bpmn:!1,flow:!1,gif:!0,png:!0,jpeg:!0,jpg:!0,svg:!0,woff:!0,woff2:!0,ttf:!0,otf:!0}[e]},e.getBase64FileContent=function(e){var n=e.indexOf(",");return e.substring(n+1)},e.getBinResource=function(e){return Buffer.from(e,"base64")},e}();n.I=t},99166:(e,n,t)=>{t.r(n),t.d(n,{default:()=>X});var i=t(71093),a=t(66190),l=t(73843),o=t(83487),s=t(5627),r=t(69292),c=t(88279),p=t(38695),d=t(88613),m=t(4150),f=t(51289),A=t(54565),u=t(54848);const g={class:"container"},y={class:"fileInputDiv"},I=(e=>((0,i.dD)("data-v-9e8d8110"),e=e(),(0,i.Cn)(),e))((()=>(0,i._)("div",{class:"fileUploadDiv col-12",onclick:"document.getElementById('fileInput').click()"},[(0,i._)("div",{class:"col-12 uploadArea",style:{display:"flex","padding-left":"150px","padding-top":"35px"}},[(0,i._)("div",{class:"mdi mdi-cloud-upload-outline",style:{"text-align":"center","font-size":"25px",color:"#a1a1a1","padding-right":"10px","margin-top":"-7px"}}),(0,i._)("span",{style:{"font-weight":"bold"}},"Click"),(0,i._)("span",{style:{"padding-left":"10px"}},"here to upload your files.")])],-1))),v=["accept"],b={class:"uploadFilesText"},x={id:"selectedFiles",class:"selectedItems"},B={key:0},C={key:0,class:"filesValue",style:{color:"#000000"}},h={class:"col-10",style:{"margin-left":"10px","text-overflow":"ellipsis",overflow:"hidden"}},j={class:"col-1",style:{"text-align":"end","padding-left":"30px"}},k=["onClick"],w={key:1,style:{"padding-top":"7px"},class:"loader"},T={key:1,class:"filesValue",style:{color:"red",border:"1px solid red"}},E=["title"],V={class:"col-1",style:{"text-align":"end","padding-left":"30px"}},O=["onClick"],D={key:1,style:{"padding-top":"7px"},class:"loader"},F={class:"importBtnDiv"},z=["disabled"],q=(0,i.aZ)({__name:"importModelDialog",props:{param:null},emits:["close"],setup(e,{emit:n}){var t;const q=e,M=s.nC.resolve(o.y),_=s.nC.resolve(c.O),R=s.nC.resolve(p.T),U=s.nC.resolve(d.J),S=s.nC.resolve(u.B),Y=s.nC.resolve(A.X),Z={minAndMaxLength:{min:2,max:60},nonSpaceCharacter:!0,customRegex:{regex:/^([a-zA-Z0-9-_.]+)$/,message:"Available characters: A-Z, a-z, 1-9, '-', '_' and '.'"}},P=(0,l.iH)(U.user.selectedOrganization.applications),N=q.param,Q=(0,l.iH)([]),W=S.findObject(N.ownerId);if("application"!=(null==W?void 0:W.objectType)&&"module"!=(null==W?void 0:W.objectType))throw new Error("unexpected owner type");const L=W,H=(0,l.iH)(!1),$=(0,l.iH)(0);let X="application"==L.objectType||"/"!=N.path?["qjson"]:"module"==L.objectType?Object.entries(P.value).filter((e=>e[1])).map((e=>"quick"==e[0]?"qjson":e[0])):[];X=X.concat(["gif","png","jpeg","jpg","svg","json","woff","woff2","ttf","otf"]),(null===(t=U.user.selectedOrganization.features)||void 0===t?void 0:t.multipleCss)&&(X=X.concat(["css"]));const J=(0,l.iH)("application"!=L.objectType&&1==L.children.some((e=>"model"==e.objectType&&"entityDesigner"==e.modelType)));function G(e,n,t){let i="json"==t?"lottie":t;return("module"==L.objectType?L.children:U.studio.items).filter((e=>"model"==e.objectType)).some((t=>{return t.path==n&&t.name==((a=e).includes(".")?a.split(".").slice(0,-1).join("."):a)&&t.modelType==i;var a}))}function K(){let e=X;"application"==L.objectType&&(e=e.filter((e=>1!=P[e])));const n=X.map((e=>`.${e}`)).join(", ");return Y.log({level:"debug",message:"accept types: "+n}),n}function ee(e){return e.substring(e.lastIndexOf(".")+1,e.length)}async function ne(e){const n=new FileReader;return new Promise(((t,i)=>{n.onload=()=>{t(n.result)},n.readAsDataURL(e)}))}function te(e,n){switch(e){case"qjson":if(!n)return"mdi mdi-palette fileTypeQjson";case"entity":if(!n)return"mdi mdi-database fileTypeEntity";case"bpmn":if(!n)return"mdi mdi-vector-polyline fileTypeBpmn";case"process":if(!n)return"mdi mdi-auto-fix fileTypeProcess";case"png":case"jpg":case"jpeg":case"svg":case"gif":case"json":if(!n)return"mdi mdi-image-outline fileTypeImage";case"woff":case"woff2":case"ttf":case"otf":if(!n)return"mdi mdi-format-font fileTypeImage";case"css":return"mdi mdi-music-accidental-sharp ml-6"}}function ie(e){let n="#212121";switch(e){case"qjson":return n="#449dd1",n;case"entity":return n="rgb(233, 114, 76)",n;case"bpmn":case"process":return n="rgb(0, 124, 119)",n;case"png":case"jpg":case"jpeg":case"svg":case"gif":case"json":case"css":return n}}function ae(e,n){"entity"==e.type&&($.value=$.value-1);const t=n.indexOf(e);n.splice(t,1),_.startTooltip()}function le(e){return"entity"==e.type&&(J.value||$.value>1)}const oe=(0,l.Fl)((()=>0==Q.value.length||(!Q.value.some((e=>e.isAcceptable&&0==e.nameValidationExceptions.length))||(!!H.value||!(Q.value.length>$.value&&Q.value.some((e=>"entity"!=e.type&&!e.isDuplicate&&e.isAcceptable)))&&(!!Q.value.some((e=>"entity"!=e.type))||($.value>1||J.value&&$.value>0))))));return(e,t)=>((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",y,[I,(0,i._)("input",{style:{display:"none"},type:"file",id:"fileInput",multiple:"",onChange:t[0]||(t[0]=e=>async function(){for(var e,n,t=document.getElementById("fileInput"),i=0;i<(null===(e=null==t?void 0:t.files)||void 0===e?void 0:e.length);i++){const e=null===(n=null==t?void 0:t.files)||void 0===n?void 0:n.item(i),a=ee(e.name),l=Q.value.some((n=>n.name==(null==e?void 0:e.name)));if(l)continue;const o=G(e.name,N.path,a),s=R.validate(e.name.split(".")[0],Z).filter((e=>!e.isValid)),r=X.includes(a);if(f.I.checkBinaryFile(a)){const n=await ne(e);Q.value.push({name:e.name,content:n,nameValidationExceptions:s,isDuplicate:o,isAcceptable:r,type:a})}else{const n=await e.text();Q.value.push({name:e.name,content:n,nameValidationExceptions:s,isDuplicate:o,isAcceptable:r,type:a})}"entity"==a&&($.value=$.value+1)}_.startTooltip()}()),accept:K()},null,40,v)]),(0,i._)("div",b,[(0,i.Uk)(" Selected Files "),(0,i._)("span",null," ("+(0,a.toDisplayString)((0,l.SU)(Q).length)+")",1)]),(0,i._)("div",x,[(0,l.SU)(Q).length>0?((0,i.wg)(),(0,i.iD)("div",B,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(Q),(e=>{var n;return(0,i.wg)(),(0,i.iD)("div",{key:e.name},[e.isDuplicate||le(e)||!e.isAcceptable||0!=e.nameValidationExceptions.length?(0,i.kq)("v-if",!0):((0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",null,[(0,i._)("i",{class:(0,a.normalizeClass)(te(e.type)),style:(0,a.normalizeStyle)({color:ie(e.type)})},null,6)]),(0,i._)("div",h,(0,a.toDisplayString)("qjson"==e.type?e.name.split(".").slice(0,-1).join("."):e.name),1),(0,i._)("div",j,[e&&!(0,l.SU)(H)?((0,i.wg)(),(0,i.iD)("i",{key:0,class:"mdi mdi-close removeIcon color: #212121",style:(0,a.normalizeStyle)(te(e.type)?"":"margin-left: 23px;"),onClick:n=>ae(e,(0,l.SU)(Q))},null,12,k)):(0,i.kq)("v-if",!0),(0,l.SU)(H)?((0,i.wg)(),(0,i.iD)("div",w)):(0,i.kq)("v-if",!0)])])),e.isDuplicate||le(e)||!e.isAcceptable||0!=e.nameValidationExceptions.length?((0,i.wg)(),(0,i.iD)("div",T,[(0,i._)("div",null,[(0,i._)("i",{class:(0,a.normalizeClass)(te(e.type,e.isDuplicate||le(e)||!e.isAcceptable||0!=e.nameValidationExceptions.length))},null,2)]),(0,i._)("div",{class:"col-10","data-toggle":"tooltip",title:le(e)?"Only one entity file is allowed":e.isAcceptable?0!=e.nameValidationExceptions.length?null===(n=e.nameValidationExceptions.at(0))||void 0===n?void 0:n.message:"This file is already imported":"File type is not supported.",placement:"bottom",style:{"margin-left":"10px","text-overflow":"ellipsis",overflow:"hidden"}},(0,a.toDisplayString)("qjson"==e.type?e.name.split(".").slice(0,-1).join("."):e.name),9,E),(0,i._)("div",V,[e&&!(0,l.SU)(H)?((0,i.wg)(),(0,i.iD)("i",{key:0,class:(0,a.normalizeClass)("mdi mdi-close removeIcon"+(te(e.type)?"":" removeIconReposition")),onClick:n=>ae(e,(0,l.SU)(Q))},null,10,O)):(0,i.kq)("v-if",!0),e.isDuplicate||le(e)||!(0,l.SU)(H)?(0,i.kq)("v-if",!0):((0,i.wg)(),(0,i.iD)("div",D))])])):(0,i.kq)("v-if",!0)])})),128))])):(0,i.kq)("v-if",!0)]),(0,i._)("div",F,[(0,i._)("button",{class:"cancelBtn",onClick:t[1]||(t[1]=e=>n("close"))},"Cancel"),(0,i._)("button",{class:"importBtn",disabled:(0,l.SU)(oe),style:(0,a.normalizeStyle)({backgroundColor:(0,l.SU)(oe)?"#37373733":"#151233"}),onClick:t[2]||(t[2]=e=>async function(){if(n("close"),oe.value)return;H.value=!0;let e=[];Q.value.forEach((async n=>{if(n.isDuplicate||!n.isAcceptable||0!=n.nameValidationExceptions.length)return;const t={name:n.name.split(".").slice(0,-1).join("."),ownerId:L.ID,modelBody:[{key:n.type,model:n.content}],modelType:"qjson",modelAdditionals:{qjsonType:"qjson"},path:N.path};switch(n.type){case"qjson":t.modelType="qjson",t.modelAdditionals={qjsonType:"qjson"};break;case"entity":if(le(n))return;t.modelType="entityDesigner",t.modelAdditionals={};break;case"bpmn":t.modelType="bpmn",t.modelAdditionals={isAutoGenerated:!1,isModifiedByUser:!0};break;case"process":t.modelType="process",t.modelAdditionals={};break;case"png":t.name+=".png",t.modelType="png",t.modelAdditionals={};break;case"jpg":t.name+=".jpg",t.modelType="jpg",t.modelAdditionals={};break;case"jpeg":t.name+=".jpeg",t.modelType="jpeg",t.modelAdditionals={};break;case"svg":t.name+=".svg",t.modelType="svg",t.modelAdditionals={};break;case"gif":t.name+=".gif",t.modelType="gif",t.modelAdditionals={};break;case"json":t.modelType="lottie",t.extension="json";break;case"css":t.name+=".css",t.modelType="css",t.key="style",t.modelAdditionals={};break;case"woff":t.name+=".woff",t.modelType="woff",t.modelAdditionals={};break;case"woff2":t.name+=".woff2",t.modelType="woff2",t.modelAdditionals={};break;case"ttf":t.name+=".ttf",t.modelType="ttf",t.modelAdditionals={};break;case"otf":t.name+=".otf",t.modelType="otf",t.modelAdditionals={}}try{let a=await M.executeUseCase(r.E,t);e.push({path:(i=a.ID,`<<img:${i}>>`),name:a.name}),"css"===(null==a?void 0:a.modelType)&&n.content&&s.nC.resolve(m.U).replaceStyle("addStyle",a.ID,n.content)}catch{console.log("error")}var i;H.value=!1}))}())}," UPLOAD ",12,z)])]))}});var M=t(17450),_=t.n(M),R=t(29530),U=t.n(R),S=t(16199),Y=t.n(S),Z=t(40458),P=t.n(Z),N=t(62916),Q=t.n(N),W=t(92165),L=t.n(W),H=t(59738),$={};$.styleTagTransform=L(),$.setAttributes=P(),$.insert=Y().bind(null,"head"),$.domAPI=U(),$.insertStyleElement=Q(),_()(H.Z,$),H.Z&&H.Z.locals&&H.Z.locals;const X=(0,t(32525).Z)(q,[["__scopeId","data-v-9e8d8110"]])}}]);
//# sourceMappingURL=9166.js.map?ver=0.0.298_1707821040076