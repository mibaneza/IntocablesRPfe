function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!***************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav-bar-fe></nav-bar-fe>\n<header-fe></header-fe>\n<router-outlet></router-outlet>\n\n<footer-fe ></footer-fe>\n\n<nav class=\"col fixed-bottom  justify-content-center align-items-center p-0 m-0   d-lg-none d-md-none\">\n    <ul class=\" container  d-flex justify-content-around my-1 p-0\">\n        <li class=\"nav-item \">\n            <a   href=\"https://shop.intocablesrp.com/\"><mat-icon> local_grocery_store</mat-icon> <br>\n                <span class=\"py-0 fixed-span\">Tienda</span>\n            </a>\n        </li>\n        <li class=\"nav-item \">\n            <a [routerLink]=\"['/forums']\" > <mat-icon class=\"\">home</mat-icon> <br>\n                <span class=\"py-0 fixed-span\">Inicio</span>\n            </a>\n        </li>\n        <li class=\"nav-item \">\n            <a href=\"https://discord.gg/intocablesrp\" > <mat-icon class=\"\">games</mat-icon> <br>\n                <span class=\"py-0 fixed-span\">Discord</span>\n            </a>\n        </li>\n        \n\n    </ul>\n</nav>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/component/error/error.component.html":
  /*!*********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/component/error/error.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-4 mb-0 py-5 px-0\">\n<div class=\"my-5\">\n<span>Oops!</span><br>\n<span>404 Not Found</span><br>\n<span class=\"span-error\">Lo sentimos, se ha producido un error, no se ha encontrado la página solicitada.</span>\n</div>\n<div class=\"center-button\">\n    <button [routerLink]=\"['/forums']\" class=\"center-button p-2\"><mat-icon>home</mat-icon>Regresar</button>\n</div>\n</div>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/article-fe/article-fe.component.html":
  /*!***************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/article-fe/article-fe.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentEstructArticleFeArticleFeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav-foro mt-0 mx-0 pt-0 px-0\">\n    <div class=\"container mt-0  pt-0 px-0\">\n        <ul class=\" row align-items-center  my-0\">\n       <!--     <li class=\"mx-4 py-3 none-activo-nav-router\"><a href=\"\"><strong>Recientes </strong></a></li>-->\n            <li class=\"mx-4 py-3 activo-nav-router \"><a href=\"\"><strong>Categorias </strong></a></li>\n        </ul>\n    </div>\n\n</nav>\n<div class=\"container mt-4 mb-0 pb-5 px-0\">\n\n    <div class=\"b-radio blanco  article my-3\" *ngFor=\"let article of articles\">\n        <div class=\"row align-items-center py-2  \">\n\n            <a [routerLink]=\"[article.urlTitle]\" class=\"tarjeta col-md-8 col-lg-6 col-12  px-0 mx-0\">\n                <div class=\"row align-items-center  mx-0  \">\n                    <div class=\"border-radius padding-{{article.styleLogo}} border-background ml-4 \">\n                        <strong >{{article.logo}}</strong>\n                    </div>\n                    <div class=\"ml-0 ml-md-3 ml-lg-3 col-8 col-sm-9 col-md-9 col-lg-9\">\n                        <h2 class=\"mt-0 mb-0 py-0\"><strong>{{article.title}}</strong></h2>\n                        <span class=\"mt-1 mb-0 font-color-bot\">{{article.subtitle}}</span>\n                    </div>\n                    \n                </div>\n            </a>\n\n            <div class=\"col-md-4 col-lg-4  d-none d-md-none d-lg-block px-0 mx-0\">\n              \n                <div class=\"row align-items-center mx-0 px-0  br-1 \">\n                    <img alt=\"perfil\" class=\"image-perfil ml-3\" style=\"  width:35px; height:35px;\"\n                        src={{article.urlUserAvatar}}>\n\n                    <div class=\"ml-3 \">\n                        <h3 class=\"mt-0 mb-0 py-0\"><strong>{{article.titlePost}}</strong></h3>\n                        <span class=\"mt-1 mb-0 font-color-bot\" style=\"font-size: 0.75em;\">{{article.datetime}} por <strong\n                                style=\"font-size: 1.2em;\" class=\"color-{{article.rol}}\">{{article.nickname}}</strong></span>\n                    </div>\n                    <div class=\"py-4 br-1-c\">l</div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 col-lg-2 d-none d-md-block  mx-0 br-1\">\n                <div class=\" ml-0 row align-items-center mr-0 \">\n\n                    <mat-icon class=\"mx-2\"> forum</mat-icon>\n                    <div>{{article.cuantityPost}} Posts</div>\n                    <div class=\"py-4 br-1-c\">l</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--\n    <div class=\"b-radio blanco  article my-3 \">\n        <div class=\"row align-items-center py-2 \">\n            <div class=\"br-1 row align-items-center col-6  mx-0 \">\n                <div class=\"border-radius padding-inf border-background ml-3\">\n                    <strong> INF</strong>\n                </div>\n                <div class=\"ml-3\">\n                    <h2 class=\"mt-0 mb-0 py-0\"><strong>Información</strong></h2>\n                    <span class=\"mt-1 mb-0 font-color-bot\"> Reglas Generales, Policiales, medico</span>\n                </div>\n                <div class=\"py-4 br-1-c\">l</div>\n            </div>\n\n            <div class=\"row align-items-center mx-0 px-0 col-4 br-1\">\n                <img alt=\"perfil\" class=\"image-perfil ml-3\" style=\"  width:35px; height:35px;\"\n                    src=\"https://cdn.discordapp.com/avatars/466723213724876801/a_bd1a7a650de3af1ff2ff54cdf2426f80.gif\">\n\n                <div class=\"ml-3 \">\n                    <h3 class=\"mt-0 mb-0 py-0\"><strong>Reglamento General</strong></h3>\n                    <span class=\"mt-1 mb-0 font-color-bot\" style=\"font-size: 0.75em;\">13/12/2020 por <strong\n                            style=\"font-size: 1.2em;\" class=\"color-admin\">! Lil Peluchin</strong></span>\n                </div>\n                <div class=\"py-4 br-1-c\">l</div>\n            </div>\n            <div class=\"col-2 ml-0 row align-items-center mr-0 \">\n\n                <mat-icon class=\"mx-2\"> forum</mat-icon>\n                <div>3 Posts</div>\n                <div class=\"py-4 br-1-c\">l</div>\n            </div>\n        </div>\n    </div>\n\n\n-->\n\n\n\n\n\n\n    \n\n\n\n<!--\n\n    \n    <div class=\"b-radio blanco  article my-3\">\n        <div class=\"row align-items-center py-2  \">\n            <div class=\"br-1 row align-items-center col-6  mx-0 \">\n                <div class=\"border-radius border-background ml-3 padding-bug\">\n                    <strong>BUG</strong>\n                </div>\n                <div class=\"ml-3\">\n                    <h2 class=\"mt-0 mb-0 py-0\"><strong>Bugging Report</strong></h2>\n                    <span class=\"mt-1 mb-0 font-color-bot\">bugs</span>\n                </div>\n                <div class=\"py-4 br-1-c\">l</div>\n            </div>\n\n            <div class=\"row align-items-center mx-0 px-0 col-4 br-1\">\n                <img alt=\"perfil\" class=\"image-perfil ml-3\" style=\"  width:35px; height:35px;\"\n                    src=\"https://cdn.discordapp.com/avatars/486290136267489300/ab1e6fdf6f6299f470a6c607019386aa.png\">\n\n                <div class=\"ml-3 \">\n                    <h3 class=\"mt-0 mb-0 py-0\"><strong>Reglamento tallarin de docs</strong></h3>\n                    <span class=\"mt-1 mb-0 font-color-bot\" style=\"font-size: 0.75em;\">17/12/2020 por <strong\n                            style=\"font-size: 1.2em;\" class=\"color-user\">TorttugaCrush</strong></span>\n                </div>\n                <div class=\"py-4 br-1-c\">l</div>\n            </div>\n            <div class=\"col-2 ml-0 row align-items-center mr-0 \">\n\n                <mat-icon class=\"mx-2\"> forum</mat-icon>\n                <div>1 Posts</div>\n                <div class=\"py-4 br-1-c\">l</div>\n            </div>\n        </div>\n    </div>\n\n    -->\n\n</div>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/footer-fe/footer-fe.component.html":
  /*!*************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/footer-fe/footer-fe.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentEstructFooterFeFooterFeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"py-4 mt-5 px-0 mx-0\">\n    <div class=\"container mb-5 mb-sm-5 mb-md-3 mb-lg-2\">\n        <div class=\"pb-1\">\n            <h3>Into Community</h3>\n        </div>\n        <div class=\"pb-3 footer-text\" >\n            © 2020 Full Stack Developer By <strong style=\"color:rgb(202, 202, 202)\">Marcos Ibañez</strong> and <strong\n                style=\"color:rgb(202, 202, 202)\">Into Community</strong>\n        </div>\n\n    </div>\n</footer>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/header-fe/header-fe.component.html":
  /*!*************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/header-fe/header-fe.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentEstructHeaderFeHeaderFeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"py-4 mb-1\">\n  <div class=\"container text-center\">\n    <h3 class=\"my-1 py-1\">EL ORIGINAL</h3>\n    <h1 class=\"my-0 h1\">INTOCABLES</h1>\n    <h2 class=\"my-1 py-0 color-azul\">ROLPLAY</h2>\n\n  </div>\n</header>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.html":
  /*!***************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentEstructNavBarFeNavBarFeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\" mt-0 mx-0 pt-0 px-0\">\n  <div class=\"container mt-0  pt-0 px-0\">\n    <ul class=\" row align-items-center py-2  my-0 pl-2\">\n      <li class=\"px-0 mx-2 pr-sm-1 col-6  col-sm-4 col-md-4 col-lg-3 \"><a [routerLink]=\"['/forums']\" style=\"font-size:1.2em;\"><strong\n            class=\"color-azul\">INTOCABLES RP</strong></a></li>\n\n      <li class=\"px-0 mx-2 mx-sm-3 col-sm-1 col-md-1 col-lg-1  d-none d-md-block\"><a\n          href=\"https://shop.intocablesrp.com/\">\n          <div class=\"row align-items-center \"><strong>Tienda </strong>\n            <mat-icon> local_grocery_store</mat-icon>\n          </div>\n        </a></li>\n\n      <li class=\"px-0 px-3 mx-sm-1 col-sm-2 col-md-2 col-lg-1 d-none d-md-block\"><a\n          href=\"https://discord.gg/intocablesrp\">\n          <div class=\"row align-items-center \"><strong>Discord </strong><img class=\"ml-1\" height=\"25\"\n              src=\"https://firebasestorage.googleapis.com/v0/b/marcos-ibanez.appspot.com/o/svg%2Fdiscordc.svg?alt=media&token=8a1f7e84-6307-4730-b755-d74a405eae58\">\n          </div>\n        </a></li>\n\n      <li class=\"px-0 mx-0 mx-sm-1 col-2 col-sm-4 col-md-1 col-lg-5 \"></li>\n      \n      <li class=\"px-0 mx-0 mx-sm-1 col-3 col-sm-3 col-md-2 col-lg-1 pr-2 d-none d-md-block\"><a\n          [routerLink]=\"['/forums']\" class=\"li-a \">\n          <div class=\"row align-items-center justify-content-end mr-0 mr-md-3\">\n            <mat-icon>home</mat-icon><strong>Inicio</strong>\n          </div>\n        </a></li>\n\n\n\n    </ul>\n  </div>\n\n</nav>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/component/foro-container/foro-container.component.html":
  /*!***************************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/component/foro-container/foro-container.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentForoContainerForoContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav-foro mt-0 mx-0 pt-0 px-0\"*ngIf=\"existForun\">\n    <div class=\"container mt-0  pt-0 px-0 my-3\">\n        <ul class=\"  row align-items-center  my-0\">\n            <li class=\" \"><a [routerLink]=\"['/forums']\">Foros</a></li>\n            <mat-icon class=\"mx-1 mt-1\">keyboard_arrow_right</mat-icon>\n            <li class=\" \"><a [routerLink]=\"['/forums/informacion']\">{{post}}</a></li>\n            <mat-icon class=\"mx-1 mt-1\">keyboard_arrow_right</mat-icon>\n            <li class=\" \">{{forum.titlePost}}</li>\n        </ul>\n    </div>\n</nav>\n\n<div class=\"container my-4 \"*ngIf=\"existForun\">\n\n\n    <div class=\"row m-0 p-0 p\">\n        <div class=\" col-12 col-sm-12 col-md-9 col-lg-9 mb-3 px-0 mx-0\">\n            <div class=\"background-color-container mb-1 pt-3 pl-3\">\n                <a [routerLink]=\"['/forums/informacion']\" class=\"etiqueta p-1\">INFORMACION</a><br>\n                <span class=\"h2-title mt-2\">{{forum.titlePost}}</span><br>\n                <span class=\"h7\"><mat-icon class=\"icon-h7 px-0 mx-0\"> local_offer</mat-icon> hace un mes por {{forum.nickname}} - 0 comentarios </span>\n            </div>\n           <div class=\"background-color-container px-2 px-md-2 px-lg-3 mx-0\">\n            <div class=\" py-2 paramDiv\" [innerHtml]=\"editorData | safeHtml\"></div>\n\n           <!-- <ckeditor (change)=\"onChange($event)\" [data]=\"editorData\"></ckeditor>-->\n        </div>\n        </div>\n\n        <div class=\"col-12 col-sm-12 col-md-3 col-lg-3 \">\n            <div style=\"font-size: 0.78em;\" class=\"border-bot pb-1\">INICIADO POR</div>\n            <img alt=\"perfil\" class=\"image-perfil mt-4 mb-2 \" style=\"  width:85px; height:85px;\"\n            src={{forum.urlUserAvatar}}>\n            <div class=\"text-center\">\n            <div style=\"font-size: 1.3em;\"class=\"my-1 color-{{forum.rol}}\">{{forum.nickname}}</div>\n            <div style=\"font-size: 0.67em;\">En Intocables desde {{forum.datetime}}</div>\n\n                <div class=\"row pt-3 mx-0 px-0 col-12 \">\n                    <div style=\"font-size: 0.67em;\"class=\"col row px-0 d-flex justify-content-center\">\t<mat-icon style=\"font-size: 1.1em; margin-top: 1%;\" >storage</mat-icon> <div> {{forum.temas}} temas</div></div>\n                    <div style=\"font-size: 0.67em;\"class=\"col row px-0 d-flex justify-content-center\">\t<mat-icon style=\"font-size: 1.1em; margin-top: 2%;\" >chat_bubble</mat-icon> <div>0 comentarios</div></div>\n                </div>\n       \n           \n\n        </div>\n        </div>\n    </div>\n</div>\n<app-error *ngIf=\"!existForun\"></app-error>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./src/app/component/foro/foro.component.html":
  /*!*******************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/component/foro/foro.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentForoForoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav-foro mt-0 mx-0 pt-0 px-0\"*ngIf=\"existForun\">\n    <div class=\"container mt-0  pt-0 px-0 my-3\">\n        <ul class=\"  row align-items-center  my-0\">\n            <li class=\" \"><a [routerLink]=\"['/forums']\" >Foros</a></li>\n             <mat-icon class=\"mx-1 mt-1\">keyboard_arrow_right</mat-icon>\n            <li class=\" \">{{forum.title}}</li>\n        </ul>\n    </div>\n</nav>\n\n\n<div class=\"container mt-4 mb-0 pb-5 px-0\"*ngIf=\"existForun\">\n\n    <div class=\" blanco  article  border-bot\" >\n        <div class=\"row align-items-center py-4 \">\n\n            <div class=\"col-md-12 col-lg-12 col-12  px-0 mx-0\">\n                <div class=\"row align-items-center  mx-0  \">\n                    <div class=\"border-radius padding-{{forum.styleLogo}} border-background ml-4 \">\n                        <strong >{{forum.logo}}</strong>\n                    </div>\n                    <div class=\"ml-3 col-8 col-sm-9 col-md-9 col-lg-9\">\n                        <h2 class=\"mt-0 mb-0 py-0\"><strong>{{forum.title}}</strong></h2>\n                        <span class=\"mt-1 mb-0 font-color-bot\">{{forum.subtitle}}</span>\n                    </div>\n                    \n                </div>\n            </div>\n\n        </div>\n    </div>\n    <div class=\" blanco  article border-bot\" *ngFor=\"let info of forum.autorInfo\">\n        <div class=\"row align-items-center py-2  \">\n\n            <a [routerLink]=\"[info.urlTitle]\" class=\"tarjeta col-md-8 col-lg-8   pl-3 pr-0 mx-0\">\n              \n                <div class=\"row align-items-center mx-0 px-0   \">\n                    <img alt=\"perfil\" class=\"image-perfil ml-3\" style=\"  width:45px; height:45px;\"\n                        src={{info.urlUserAvatar}}>\n\n                    <div class=\"ml-3 \">\n                        <h3 class=\"mt-0 mb-0 py-0\"><strong>{{info.titlePost}}</strong></h3>\n                        <span class=\"mt-1 mb-0 font-color-bot\" style=\"font-size: 0.75em;\">{{info.datetime}} por <strong\n                                style=\"font-size: 1.2em;\" class=\"color-{{info.rol}}\">{{info.nickname}}</strong></span>\n                    </div>\n                    <div class=\"py-4 br-1-c\">l</div>\n                </div>\n            </a>\n\n            <div class=\"col-md-12  col-lg-2 \">\n                <div class=\" ml-0 row align-items-center mr-0 center-button \">\n                    <button class=\"button disabled row align-items-center p-2 pr-3\"*ngIf=\"!info.bolComents\"  ><mat-icon class=\"mx-2\">chat_bubble</mat-icon> Comentar</button>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-error *ngIf=\"!existForun\"></app-error>";
    /***/
  },

  /***/
  "../node_modules/tslib/tslib.es6.js":
  /*!******************************************!*\
    !*** ../node_modules/tslib/tslib.es6.js ***!
    \******************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_estruct_article_fe_article_fe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/estruct/article-fe/article-fe.component */
    "./src/app/component/estruct/article-fe/article-fe.component.ts");
    /* harmony import */


    var _component_foro_container_foro_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/foro-container/foro-container.component */
    "./src/app/component/foro-container/foro-container.component.ts");
    /* harmony import */


    var _component_foro_foro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/foro/foro.component */
    "./src/app/component/foro/foro.component.ts");

    var routes = [{
      path: 'forums',
      component: _component_estruct_article_fe_article_fe_component__WEBPACK_IMPORTED_MODULE_3__["ArticleFeComponent"]
    }, {
      path: '',
      redirectTo: 'forums',
      pathMatch: 'full'
    }, {
      path: 'forums/:blog',
      component: _component_foro_foro_component__WEBPACK_IMPORTED_MODULE_5__["ForoComponent"]
    }, {
      path: 'forums/:blog/:container',
      component: _component_foro_container_foro_container_component__WEBPACK_IMPORTED_MODULE_4__["ForoContainerComponent"]
    }, {
      path: 'forums/:blog/:container/**',
      redirectTo: 'forums',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'forums',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        enableTracing: false,
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tarjeta {\n  display: block;\n  color: white;\n  text-decoration: none;\n}\n\n.fixed-bottom {\n  position: fixed;\n  bottom: 0;\n  border-top: 1px solid #2b2b2b;\n  background-color: black;\n}\n\n.fixed-span {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvRkUvbmV3cHJveWVjdC9pbnRvU3RhdGljL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyamV0YXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLmZpeGVkLWJvdHRvbXtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBib3R0b206MDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDQzLCA0MywgNDMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmZpeGVkLXNwYW57XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cbiIsIi50YXJqZXRhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMmIyYjJiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmZpeGVkLXNwYW4ge1xuICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'IntocablesRP';
      }

      _createClass(AppComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "../node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "../node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "../node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pipe/safe-html.pipe */
    "./src/app/pipe/safe-html.pipe.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _component_estruct_nav_bar_fe_nav_bar_fe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./component/estruct/nav-bar-fe/nav-bar-fe.component */
    "./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.ts");
    /* harmony import */


    var _component_estruct_header_fe_header_fe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component/estruct/header-fe/header-fe.component */
    "./src/app/component/estruct/header-fe/header-fe.component.ts");
    /* harmony import */


    var _component_estruct_article_fe_article_fe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./component/estruct/article-fe/article-fe.component */
    "./src/app/component/estruct/article-fe/article-fe.component.ts");
    /* harmony import */


    var _component_estruct_footer_fe_footer_fe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./component/estruct/footer-fe/footer-fe.component */
    "./src/app/component/estruct/footer-fe/footer-fe.component.ts");
    /* harmony import */


    var _component_foro_foro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./component/foro/foro.component */
    "./src/app/component/foro/foro.component.ts");
    /* harmony import */


    var _component_foro_container_foro_container_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./component/foro-container/foro-container.component */
    "./src/app/component/foro-container/foro-container.component.ts");
    /* harmony import */


    var _component_error_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./component/error/error.component */
    "./src/app/component/error/error.component.ts"); //matrial
    //componentes


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _component_estruct_nav_bar_fe_nav_bar_fe_component__WEBPACK_IMPORTED_MODULE_13__["NavBarFeComponent"], _component_estruct_header_fe_header_fe_component__WEBPACK_IMPORTED_MODULE_14__["HeaderFeComponent"], _component_estruct_article_fe_article_fe_component__WEBPACK_IMPORTED_MODULE_15__["ArticleFeComponent"], _component_estruct_footer_fe_footer_fe_component__WEBPACK_IMPORTED_MODULE_16__["FooterFeComponent"], _component_foro_foro_component__WEBPACK_IMPORTED_MODULE_17__["ForoComponent"], _component_foro_container_foro_container_component__WEBPACK_IMPORTED_MODULE_18__["ForoContainerComponent"], _component_error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"], _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], //materail
      _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/component/error/error.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/component/error/error.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentErrorErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div div {\n  font-size: 2em;\n  text-align: center;\n}\n\ndiv div span {\n  font-size: 1.5em;\n}\n\n.span-error {\n  font-size: 0.8em !important;\n}\n\nbutton {\n  color: #303030;\n  border-radius: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvRkUvbmV3cHJveWVjdC9pbnRvU3RhdGljL3NyYy9hcHAvY29tcG9uZW50L2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNHLGdCQUFBO0FDRUg7O0FEQUE7RUFDSSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgZGl2IHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5kaXYgZGl2IHNwYW57XG4gICBmb250LXNpemU6IDEuNWVtO1xufVxuLnNwYW4tZXJyb3J7XG4gICAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xufVxuYnV0dG9ue1xuICAgIGNvbG9yOiAjMzAzMDMwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbn0iLCJkaXYgZGl2IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2IGRpdiBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnNwYW4tZXJyb3Ige1xuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/component/error/error.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/error/error.component.ts ***!
    \****************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/component/error/error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.scss */
      "./src/app/component/error/error.component.scss"))["default"]]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/component/estruct/article-fe/article-fe.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/component/estruct/article-fe/article-fe.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentEstructArticleFeArticleFeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image-perfil {\n  border-radius: 20px !important;\n}\n\n.font-color-bot {\n  color: #b3b3b3;\n}\n\n.border-background {\n  border: 5px solid #303030;\n}\n\n.border-radius {\n  border-radius: 40px !important;\n}\n\n.padding-inf {\n  padding: 0.9em 0.78em;\n}\n\n.padding-not {\n  padding: 0.9em 0.6em;\n}\n\n.padding-bug {\n  padding: 0.9em 0.5em;\n}\n\n.article {\n  box-shadow: 2px 2px 2px 1px rgba(17, 17, 17, 0.247);\n  background-color: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvRkUvbmV3cHJveWVjdC9pbnRvU3RhdGljL3NyYy9hcHAvY29tcG9uZW50L2VzdHJ1Y3QvYXJ0aWNsZS1mZS9hcnRpY2xlLWZlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvZXN0cnVjdC9hcnRpY2xlLWZlL2FydGljbGUtZmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUVJLDhCQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0FDSUo7O0FERkE7RUFDSSxtREFBQTtFQUNBLHlCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZXN0cnVjdC9hcnRpY2xlLWZlL2FydGljbGUtZmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtcGVyZmlse1xuICAgIGJvcmRlci1yYWRpdXM6MjBweCAhaW1wb3J0YW50O1xuICAgIFxuICB9XG4uZm9udC1jb2xvci1ib3R7XG4gICAgY29sb3I6ICNiM2IzYjM7XG59IFxuLmJvcmRlci1iYWNrZ3JvdW5ke1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICAjMzAzMDMwO1xufSBcbi5ib3JkZXItcmFkaXVze1xuICAgXG4gICAgYm9yZGVyLXJhZGl1czo0MHB4ICAgIWltcG9ydGFudDtcblxuICB9XG4ucGFkZGluZy1pbmZ7XG4gICAgcGFkZGluZzogMC45ZW0gMC43OGVtO1xufVxuLnBhZGRpbmctbm90e1xuICAgIHBhZGRpbmc6IDAuOWVtIDAuNmVtO1xufVxuLnBhZGRpbmctYnVne1xuICAgIHBhZGRpbmc6IDAuOWVtIDAuNWVtO1xufVxuLmFydGljbGV7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMTcsIDE3LCAxNywgMC4yNDcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG59XG4iLCIuaW1hZ2UtcGVyZmlsIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1jb2xvci1ib3Qge1xuICBjb2xvcjogI2IzYjNiMztcbn1cblxuLmJvcmRlci1iYWNrZ3JvdW5kIHtcbiAgYm9yZGVyOiA1cHggc29saWQgIzMwMzAzMDtcbn1cblxuLmJvcmRlci1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nLWluZiB7XG4gIHBhZGRpbmc6IDAuOWVtIDAuNzhlbTtcbn1cblxuLnBhZGRpbmctbm90IHtcbiAgcGFkZGluZzogMC45ZW0gMC42ZW07XG59XG5cbi5wYWRkaW5nLWJ1ZyB7XG4gIHBhZGRpbmc6IDAuOWVtIDAuNWVtO1xufVxuXG4uYXJ0aWNsZSB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDE3LCAxNywgMTcsIDAuMjQ3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/estruct/article-fe/article-fe.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/component/estruct/article-fe/article-fe.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ArticleFeComponent */

  /***/
  function srcAppComponentEstructArticleFeArticleFeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleFeComponent", function () {
      return ArticleFeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var ArticleFeComponent = function ArticleFeComponent() {
      _classCallCheck(this, ArticleFeComponent);

      this.articles = [{
        "logo": "INF",
        "styleLogo": "inf",
        "urlTitle": "informacion",
        "title": "Información",
        "subtitle": "Reglas Generales, Policiales, medico",
        "urlUserAvatar": "https://cdn.discordapp.com/avatars/466723213724876801/a_073d4d7e0b5e57667fe9882cd7c1fd29.gif",
        "datetime": "03-12-2020",
        "rol": "senior",
        "titlePost": "Reglamento General",
        "nickname": "! Lil Peluchin",
        "cuantityPost": 3
      }, {
        "logo": "NOT",
        "styleLogo": "not",
        "urlTitle": "noticias",
        "title": "Noticias",
        "subtitle": "Informacion sobre los eventos, actualizaciones, postulaciones",
        "urlUserAvatar": "https://cdn.discordapp.com/avatars/77619273077366784/e6b464b9aea3f70949d3d4897b07ebe2.png",
        "datetime": "16/12/2020",
        "rol": "ceo",
        "titlePost": "Ganadores del Evento de Discord",
        "nickname": "Mr.Choco",
        "cuantityPost": 19
      }, {
        "logo": "BUG",
        "styleLogo": "bug",
        "urlTitle": "bugging-report",
        "title": "Bugging Report",
        "subtitle": "bugs",
        "urlUserAvatar": "https://cdn.discordapp.com/avatars/486290136267489300/ab1e6fdf6f6299f470a6c607019386aa.png",
        "datetime": "17/12/2020",
        "rol": "user",
        "titlePost": "Reglamento docs",
        "nickname": "TorttugaCrush",
        "cuantityPost": 1
      }];
    };

    ArticleFeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'article-fe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-fe.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/article-fe/article-fe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-fe.component.scss */
      "./src/app/component/estruct/article-fe/article-fe.component.scss"))["default"]]
    })], ArticleFeComponent);
    /***/
  },

  /***/
  "./src/app/component/estruct/footer-fe/footer-fe.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/component/estruct/footer-fe/footer-fe.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentEstructFooterFeFooterFeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  background-color: #000000;\n  width: 100% !important;\n}\n\nfooter div div h3 {\n  font-size: 1.3em;\n  color: #ffffff;\n}\n\n.footer-text {\n  font-size: 0.9em;\n  color: #dce0ffcc;\n}\n\n@media screen and (max-width: 600px) {\n  footer div div h3 {\n    font-size: 1.3em;\n    color: #ffffff;\n  }\n\n  .footer-text {\n    font-size: 0.8em;\n  }\n}\n\n.hyphenation {\n  word-break: break-all;\n  /* Non standard for webkit */\n  -webkit-hyphens: auto;\n  -ms-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvRkUvbmV3cHJveWVjdC9pbnRvU3RhdGljL3NyYy9hcHAvY29tcG9uZW50L2VzdHJ1Y3QvZm9vdGVyLWZlL2Zvb3Rlci1mZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2VzdHJ1Y3QvZm9vdGVyLWZlL2Zvb3Rlci1mZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREVJO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGNBQUE7RUNDVjs7RURDTTtJQUNJLGdCQUFBO0VDRVY7QUFDRjs7QURXSTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFHSixxQkFBQTtFQUVHLGlCQUFBO0VBQ0ksYUFBQTtBQ1hUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2VzdHJ1Y3QvZm9vdGVyLWZlL2Zvb3Rlci1mZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHdpZHRoOiAgMTAwJSAhaW1wb3J0YW50O1xufVxuZm9vdGVyIGRpdiBkaXYgaDN7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBjb2xvcjojZmZmZmZmO1xufVxuLmZvb3Rlci10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiNkY2UwZmZjYztcbn1cblxuXG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgZm9vdGVyIGRpdiBkaXYgaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXRleHR7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIC5oeXBoZW5hdGlvbiB7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAvKiBOb24gc3RhbmRhcmQgZm9yIHdlYmtpdCAqL1xuICAgLy8gICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBcbiAgIFxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAgICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgIiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuZm9vdGVyIGRpdiBkaXYgaDMge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZvb3Rlci10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNkY2UwZmZjYztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgZm9vdGVyIGRpdiBkaXYgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuZm9vdGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cbi5oeXBoZW5hdGlvbiB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgLyogTm9uIHN0YW5kYXJkIGZvciB3ZWJraXQgKi9cbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/estruct/footer-fe/footer-fe.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/component/estruct/footer-fe/footer-fe.component.ts ***!
    \********************************************************************/

  /*! exports provided: FooterFeComponent */

  /***/
  function srcAppComponentEstructFooterFeFooterFeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterFeComponent", function () {
      return FooterFeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var FooterFeComponent = function FooterFeComponent() {
      _classCallCheck(this, FooterFeComponent);
    };

    FooterFeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'footer-fe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer-fe.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/footer-fe/footer-fe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer-fe.component.scss */
      "./src/app/component/estruct/footer-fe/footer-fe.component.scss"))["default"]]
    })], FooterFeComponent);
    /***/
  },

  /***/
  "./src/app/component/estruct/header-fe/header-fe.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/component/estruct/header-fe/header-fe.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentEstructHeaderFeHeaderFeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center-header {\n  display: flex;\n  justify-content: center;\n  z-index: 1;\n  position: relative;\n}\n\n.h1 {\n  font-size: 2.5em !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\nheader {\n  background-color: #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvRkUvbmV3cHJveWVjdC9pbnRvU3RhdGljL3NyYy9hcHAvY29tcG9uZW50L2VzdHJ1Y3QvaGVhZGVyLWZlL2hlYWRlci1mZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2VzdHJ1Y3QvaGVhZGVyLWZlL2hlYWRlci1mZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFJRSx5QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2VzdHJ1Y3QvaGVhZGVyLWZlL2hlYWRlci1mZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBcbn1cbi5oMXtcbiAgZm9udC1zaXplOiAyLjVlbSAhaW1wb3J0YW50O1xufVxuLnRleHQtY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oZWFkZXJ7XG4gICAvLyAgIGJveC1zaGFkb3c6IDEycHggMjlweCA4MXB4IDBweCByZ2JhKDI2LCAyNSwgMjUsIDAuNzUpO1xuIC8vICBib3gtc2hhZG93OiAxMnB4IDI5cHggODFweCAxMHB4IHJnYmEoMTcsIDE3LCAxNywgMC43NSk7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgXG4gICAgLy93aWR0aDogIDE0MDBweDtcbiAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3Njb250ZW50LmZsaW0xMi0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTMxNDExMjM0XzExMzEwMjE4Mzk4Mjg5N182MjYxMjE2ODY2MzUyNzYzMTNfby5wbmc/X25jX2NhdD0xMDgmY2NiPTImX25jX3NpZD03MzBlMTQmX25jX29oYz04R1JabXhBRVd2QUFYLTFmQzljJl9uY19odD1zY29udGVudC5mbGltMTItMS5mbmEmb2g9YzVlODQ0YjdlMTBhNDc3YmY4ZjdhZjc0ZGQ1Yjg2NDEmb2U9NjAwMDJBRTYpO1xufVxuIiwiLmNlbnRlci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaDEge1xuICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/estruct/header-fe/header-fe.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/component/estruct/header-fe/header-fe.component.ts ***!
    \********************************************************************/

  /*! exports provided: HeaderFeComponent */

  /***/
  function srcAppComponentEstructHeaderFeHeaderFeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderFeComponent", function () {
      return HeaderFeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var HeaderFeComponent = function HeaderFeComponent() {
      _classCallCheck(this, HeaderFeComponent);
    };

    HeaderFeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'header-fe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-fe.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/header-fe/header-fe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-fe.component.scss */
      "./src/app/component/estruct/header-fe/header-fe.component.scss"))["default"]]
    })], HeaderFeComponent);
    /***/
  },

  /***/
  "./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentEstructNavBarFeNavBarFeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n  list-style-type: none;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0);\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n}\n\nnav {\n  background-color: black;\n}\n\n.contenedor6 {\n  text-align: center center;\n  background-color: #e7f6f621;\n  border: 1px solid #99cccc;\n}\n\n.li-a {\n  cursor: pointer;\n  color: #1678c2 !important;\n}\n\n.matMenu-Style-Perfil {\n  background-color: #424242;\n  color: rgba(240, 255, 255, 0.678) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvRkUvbmV3cHJveWVjdC9pbnRvU3RhdGljL3NyYy9hcHAvY29tcG9uZW50L2VzdHJ1Y3QvbmF2LWJhci1mZS9uYXYtYmFyLWZlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvZXN0cnVjdC9uYXYtYmFyLWZlL25hdi1iYXItZmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0dGOztBRERBO0VBQ0UsdUJBQUE7QUNJRjs7QURGQTtFQUNBLHlCQUFBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtBQ0tGOztBREZFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDRSx5QkFBQTtFQUNBLDRDQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZXN0cnVjdC9uYXYtYmFyLWZlL25hdi1iYXItZmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cbmxpe1xuICBmbG9hdDpsZWZ0O1xufVxubGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG5uYXZ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmNvbnRlbmVkb3I2IHtcbnRleHQtYWxpZ246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2Y2ZjYyMTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5Y2NjYztcbiAgfVxuXG4gIC5saS1he1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzE2NzhjMiAhaW1wb3J0YW50O1xuICB9XG4ubWF0TWVudS1TdHlsZS1QZXJmaWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIGNvbG9yOiByZ2JhKDI0MCwgMjU1LCAyNTUsIDAuNjc4KSAgIWltcG9ydGFudDtcbn1cbiIsInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG5saSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5saSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGVuZWRvcjYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmNmY2MjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OWNjY2M7XG59XG5cbi5saS1hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzE2NzhjMiAhaW1wb3J0YW50O1xufVxuXG4ubWF0TWVudS1TdHlsZS1QZXJmaWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBjb2xvcjogcmdiYSgyNDAsIDI1NSwgMjU1LCAwLjY3OCkgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NavBarFeComponent */

  /***/
  function srcAppComponentEstructNavBarFeNavBarFeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarFeComponent", function () {
      return NavBarFeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var NavBarFeComponent = function NavBarFeComponent() {
      _classCallCheck(this, NavBarFeComponent);
    };

    NavBarFeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'nav-bar-fe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar-fe.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar-fe.component.scss */
      "./src/app/component/estruct/nav-bar-fe/nav-bar-fe.component.scss"))["default"]]
    })], NavBarFeComponent);
    /***/
  },

  /***/
  "./src/app/component/foro-container/foro-container.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/component/foro-container/foro-container.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentForoContainerForoContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".awdawd {\n  text-align: center !important;\n}\n\n.paramDiv {\n  /* Control de la altura con base en el texto del div*/\n  height: auto;\n  word-wrap: break-word;\n}\n\nimg {\n  display: block;\n  margin: auto;\n}\n\n.center-x {\n  display: block;\n  margin: auto;\n}\n\n.etiqueta {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #757575;\n  color: azure;\n  border-radius: 10%;\n  border: none;\n  font-size: 0.7em;\n  text-align: center;\n  text-decoration: none;\n}\n\n.h2-title {\n  font-size: 2em;\n}\n\n.h7 {\n  font-family: Arial, Helvetica, sans-serif;\n  color: azure;\n  font-size: 0.75em;\n}\n\n.icon-h7 {\n  color: azure;\n  font-size: 1em;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvRkUvbmV3cHJveWVjdC9pbnRvU3RhdGljL3NyYy9hcHAvY29tcG9uZW50L2Zvcm8tY29udGFpbmVyL2Zvcm8tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvZm9yby1jb250YWluZXIvZm9yby1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKOztBRENBO0VBQ0kscURBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDSixZQUFBO0FDR0E7O0FEREE7RUFDSSxjQUFBO0VBQ0osWUFBQTtBQ0lBOztBREZBO0VBQ0kseUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7QUNNSjs7QURKQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEE7RUFHSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZm9yby1jb250YWluZXIvZm9yby1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXdkYXdke1xuICAgIHRleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnQ7XG59XG4ucGFyYW1EaXYge1xuICAgIC8qIENvbnRyb2wgZGUgbGEgYWx0dXJhIGNvbiBiYXNlIGVuIGVsIHRleHRvIGRlbCBkaXYqL1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbmltZ3tcbiAgICBkaXNwbGF5OmJsb2NrO1xubWFyZ2luOmF1dG87XG59XG4uY2VudGVyLXh7XG4gICAgZGlzcGxheTpibG9jaztcbm1hcmdpbjphdXRvO1xufVxuLmV0aXF1ZXRhe1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XG4gICAgY29sb3I6IGF6dXJlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBib3JkZXI6bm9uZSA7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbi5oMi10aXRsZXtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cbi5oN3tcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYXp1cmU7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG59XG4uaWNvbi1oN3tcblxuXG4gICAgY29sb3I6IGF6dXJlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIiwiLmF3ZGF3ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ucGFyYW1EaXYge1xuICAvKiBDb250cm9sIGRlIGxhIGFsdHVyYSBjb24gYmFzZSBlbiBlbCB0ZXh0byBkZWwgZGl2Ki9cbiAgaGVpZ2h0OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jZW50ZXIteCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ldGlxdWV0YSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xuICBjb2xvcjogYXp1cmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmgyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5oNyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYXp1cmU7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4uaWNvbi1oNyB7XG4gIGNvbG9yOiBhenVyZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/foro-container/foro-container.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/component/foro-container/foro-container.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ForoContainerComponent */

  /***/
  function srcAppComponentForoContainerForoContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForoContainerComponent", function () {
      return ForoContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");

    var ForoContainerComponent = /*#__PURE__*/function () {
      function ForoContainerComponent(rutaActiva) {
        _classCallCheck(this, ForoContainerComponent);

        this.rutaActiva = rutaActiva;
        this.editorData = '';
        this.editorData = '';
      }

      _createClass(ForoContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forumss();
        }
      }, {
        key: "forumss",
        value: function forumss() {
          if (this.rutaActiva.snapshot.params.blog == "informacion") {
            this.post = "Infomracion";
            this.urltitle = "/forums/" + this.rutaActiva.snapshot.params.blog;

            if (this.rutaActiva.snapshot.params.container == "reglamento-general") {
              this.title = "reglamento-general";
              this.forum = null;
              this.editorData = null;
              this.existForun = true;
              this.forum = {
                "urlUserAvatar": "https://cdn.discordapp.com/avatars/466723213724876801/a_073d4d7e0b5e57667fe9882cd7c1fd29.gif",
                "datetime": "30.08.2019",
                "rol": "senior",
                "titlePost": "Reglamento General",
                "nickname": "! Lil Peluchin",
                "bolComents": false,
                "temas": 2,
                "container": "<p style=\"text-align:center !important\"><span style=\"font-size:24px\"><span style=\"font-family:Arial,Helvetica,sans-serif\"><strong>REGLAS</strong></span></span></p>\n\n        <p style=\"text-align:justify\"><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>REGLAS B&Aacute;SICAS EN ROL&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">1. Est&aacute; totalmente prohibido salirse de rol sin presencia de un staff con su respectivo TAG, &eacute;ste a su vez decidir&aacute; si el rol debe continuar o no</span><span style=\"color:#000000\">.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">2. Siempre debes valorar la vida.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3. Queda prohibido hacer Power Gaming. (Acciones que ser&iacute;an imposibles de realizar en la vida real)&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">4. Queda prohibido hacer Meta Gaming.(Usar informaci&oacute;n adquirida fuera del rol, para beneficio dentro de rol).&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">5. Est&aacute; prohibido matar sin rol previo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">6. Est&aacute; prohibido forzar un rol, sin excepciones.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">7. No se puede tener secuestrado a un usuario por m&aacute;s de 20 min con excepciones de ser reh&eacute;n para un robo organizado.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">8. Est&aacute; prohibido iniciar rol agresivo en zonas seguras(Insultar, Acosar, Ofender etc.). 9. Fuera de rol siempre deben tratarse con respeto por ende queda totalmente prohibido cualquier tipo de agresi&oacute;n verbal(origen, raza, sexo, idioma, religi&oacute;n, opini&oacute;n, condici&oacute;n econ&oacute;mica o de cualquier otra &iacute;ndole).&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">10. Est&aacute; prohibido realizar rol agresivo (robar, matar, insultar o secuestrar) a las facciones legales en servicio, a excepci&oacute;n de la Polic&iacute;a.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">11. Est&aacute; prohibido usar cascos como m&aacute;scara, chalecos antibalas como torso y ponerse paraca&iacute;das al registrar su personaje o tambi&eacute;n luego de registrar su PJ.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">12. Est&aacute; prohibido usar m&aacute;scaras(Incluye todas las que puedas encontrar en tienda de m&aacute;scaras) y portar armas visibles en zonas seguras.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">13. Est&aacute; prohibido disparar directamente al individuo dentro del veh&iacute;culo, solo se podr&aacute;n pinchar las ruedas, o bien al chasis del mismo, o viceversa no puedes disparar a nadie a matar estando en un veh&iacute;culo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">14. Est&aacute; prohibido ponerse nombres troll, personas famosas y/o conocidas. Caso contrario ser&aacute; sancionado y obligado a registrar nuevamente su PJ.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">15. Est&aacute; prohibido robar sin previo rol.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">16. No est&aacute; permitido hacer BunnyJump con el fin esquivar balas o tener alguna otra ventaja. 17. In Character (IC) es todo aquello que le sucede a nuestro personaje, nuestro progreso. 18. Est&aacute; prohibido cualquier tipo de rol agresivo sin EMS, m&iacute;nimo se necesita uno(1) en servicio.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">19. No est&aacute; permitido robar a civiles sin la opci&oacute;n de la &quot;G&quot;.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">20. Est&aacute; prohibido realizar cualquier acto ilegal(Venta de armas, drogas y/o estafas) dentro de las zonas seguras.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">21. Prohibido robar/estafar sin polic&iacute;as en servicio.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">22. M&iacute;nimo se necesitan 3 polic&iacute;as en servicio y un(1) same en caso de robo a mano armada a civiles.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">23. El m&aacute;ximo de participantes en un robo particular es de 4.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">24. No est&aacute; permitido cualquier tipo de acto de car&aacute;cter sexual, a menos que haya consentimiento por ambas partes.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">25. Debes tener micr&oacute;fono para poder rolear, de lo contrario ser&aacute;s sancionado de manera permanente con opci&oacute;n a apelar.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">26. No est&aacute; permitido el uso de la ropa del trabajo para cosas externas a ello. 27. No est&aacute; permitido trabajar sin la ropa de la empresa.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">28. Est&aacute; prohibido usar autos de Gama Premium para robos particulares.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">29. Est&aacute; totalmente prohibido matar a cualquiera que valore su vida.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">30. Toda zona segura queda anulada si hubo un rol previo de persecuci&oacute;n, evita usar las zonas seguras de no ser necesarias.</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>REGLAS DE VIDA</strong></span><span style=\"color:#000000\"><strong>&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Al morir o ser reanimado tu personaje no puede recordar el rol que lo llev&oacute; a su muerte y todo lo anterior a 20 min.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">2. No est&aacute; permitido guardar tu veh&iacute;culo en tus garajes en rol de persecuci&oacute;n y/o orden de captura.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3. Al perder toda la barra de la vida se considera estado de inconsciente, de no ser reanimado se considera muerte.(PK)&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">4. No puedes regresar al punto donde has muerto/reanimado para continuar el mismo rol antes de los 20 min.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>REGLAS VEHICULARES&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Est&aacute; totalmente prohibido dejar por cualquier lado los veh&iacute;culos de trabajo y/o personales. 2. Solo los acompa&ntilde;antes del conductor pueden disparar a las llantas o chasis del veh&iacute;culo para buscar inhabilitar, recuerden jam&aacute;s disparar al cuerpo a los tripulantes. </span></span><span style=\"font-size:8.001712799072266pt\"><span style=\"font-family:Arial\">(Ver 13.) </span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3. Est&aacute; prohibido el uso de tu veh&iacute;culo como arma para inhabilitar a otro jugador (VDM). 4. Los veh&iacute;culos de trabajo son de uso exclusivo para trabajar, </span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><s>no puedes usar un auto</s></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\"><s>particular para trabajar.</s></span><span style=\"color:#000000\"><s> </s></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ffffff\"><span style=\"background-color:#cc0000\">Queda deshabilitado temporalmente el no poder usar un auto</span></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ffffff\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ffffff\"><span style=\"background-color:#cc0000\">particular para trabajar. (No aplica para Electricista ni Distribuidor)</span></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>ROBOS&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Para realizar un secuestro a un polic&iacute;a se necesita un m&aacute;ximo de 4 participantes, en caso de formarse un tiroteo pueden intervenir otras personas as&iacute; mismo haciendo un m&aacute;ximo de 8 participantes en el rol.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">2. Para secuestrar a un civil, ser&aacute; con un m&aacute;ximo de 8 participantes.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3. No est&aacute; permitido robar veh&iacute;culos de trabajo, mucho menos veh&iacute;culos policiales/hospital/mec&aacute;nico.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">4. &Uacute;nicamente podr&aacute;s robarle las pertenencias a un polic&iacute;a si lo tienes secuestrado, en la forma expresamente indicada y permitida.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">5. Robos particulares y cualquier tiroteo ser&aacute;n con armas grado 1.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">6. No puedes robarles a personas, ni ba&uacute;les siendo menor a lvl 10.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">7. Prohibido robar agua y comida.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:8.001712799072266pt\"><span style=\"font-family:Arial\"><strong>Ref.(21) Para iniciar un robo se necesita 3 polic&iacute;as y 1 same, ambos en servicio.&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:8.001712799072266pt\"><span style=\"font-family:Arial\"><strong>Ref.(25) No est&aacute; permitido robar con la ropa de trabajo.&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:8.001712799072266pt\"><span style=\"font-family:Arial\"><strong>Ref.(28) Si la v&iacute;ctima valora su vida no puedes matarlo.&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>A. Secuestrar Polic&iacute;as:&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">a. A partir de 8 a m&aacute;s Polic&iacute;as en servicio se puede secuestrar a un solo Polic&iacute;a. b. A partir de 10 a m&aacute;s polic&iacute;as en servicio se puede secuestrar a dos (2) Polic&iacute;as. c. A partir de 12 a m&aacute;s polic&iacute;as en servicio se puede secuestrar a tres (3) Polic&iacute;as. d. A partir de 14 a m&aacute;s polic&iacute;as en servicio se puede secuestrar a cuatro (4) Polic&iacute;as.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>B. Secuestrar Civil:&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">a. A partir de 2 Polic&iacute;as en servicio se puede tomar como reh&eacute;n a un solo civil. b. A partir de 3 Polic&iacute;as en servicio se puede tomar como reh&eacute;n a dos (2) civil. c. A partir de 6 Polic&iacute;as en servicio se puede tomar como reh&eacute;n a cuatro (4) civil.</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:14.006750106811523pt\"><span style=\"font-family:Arial\"><strong>ROBOS ORGANIZADOS&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>REGLAS GENERALES&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Para iniciar cualquier atraco ya sea a tienda, joyer&iacute;a, armer&iacute;a, banco chico, banco central o tienda de tecnolog&iacute;a, se deber&aacute; preguntar previamente si hay polic&iacute;as disponibles para atender el atraco. Esto se deber&aacute; realizar mediante un tweet an&oacute;nimo utilizando el comando /anon.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">2. Una vez contestado el tweet an&oacute;nimo y se cumplan con los requisitos, se podr&aacute; efectuar el atraco.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3. Queda totalmente prohibido el uso de cascos&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">4. En caso de querer negociar por los rehenes. Este rol tendr&aacute; un m&aacute;ximo de 10 minutos, pasado este tiempo se romper&aacute;n las negociaciones.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">5. Al romperse las negociaciones se procede con un conteo de 10 seg. v&iacute;a tweet para iniciar un tiroteo. En caso de que el tirador se encuentre expuesto y realice disparos, se rompe negociaciones y se da un tiempo de 3 seg para posicionarse.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">6. Si la banda criminal posee rehenes, estos tendr&aacute;n opci&oacute;n a negociar la libertad de cada uno de ellos. Se podr&aacute; negociar &uacute;nicamente por alg&uacute;n beneficio de huida limpia o Mississippi (segundos) para su huida, tambi&eacute;n se podr&aacute; negociar por ambas cosas, pero queda totalmente prohibida la negociaci&oacute;n por dinero. En caso de no llegar a ning&uacute;n acuerdo, se romper&aacute;n las negociaciones autom&aacute;ticamente.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">7. No se deber&aacute; da&ntilde;ar f&iacute;sicamente a los rehenes, en caso de que estos cooperen. 8. Para cualquier tipo de robo organizado, se deber&aacute; contar con un m&iacute;nimo de 1 EMS en servicio.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">9. En el momento de negociaci&oacute;n, el polic&iacute;a negociador no deber&aacute; ser abatido por ninguna circunstancia.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">10. La huida de los criminales deber&aacute; realizarse &uacute;nicamente por caminos aptos para la circulaci&oacute;n vehicular. En caso de irse por escaleras, monta&ntilde;as u otros, deber&aacute; contarse con las autopartes adecuadas incluidas en el veh&iacute;culo, en caso contrario ser&aacute; considerado Power Gaming.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">11. Para la detenci&oacute;n de la escapatoria de los criminales, est&aacute; permitido que el cuerpo policial pueda abrir fuego contra los o el veh&iacute;culo de los atracadores.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">12. Queda totalmente prohibida la alianza entre rehenes y criminales.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">13. Si la polic&iacute;a no llega al atraco en un plazo de 10 minutos con la previa afirmaci&oacute;n policial, los delincuentes podr&aacute;n huir mandando un anuncio previo mediante un tweet an&oacute;nimo. 14. Si el tirador por parte de los delincuentes es descubierto, este puede abrir fuego. Al suscitarse esto, se rompen negociaciones y se procede a abrir fuego inmediatamente, sin la necesidad de un conteo previo. (3 seg. Para actuar)&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:10.00589370727539pt\"><span style=\"font-family:Arial\"><strong>**De no seguir las pautas especificadas anteriormente, se proceder&aacute; a sancionar a los usuarios**&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>ROBO A TIENDA&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Para robar una tienda, ser&aacute; necesario como m&iacute;nimo 2 polic&iacute;as en servicio y que estos est&eacute;n disponibles.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">2</span><span style=\"color:#000000\">. </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&iacute;nima y m&aacute;xima de polic&iacute;as permitidos:</strong></span><span style=\"color:#000000\"><strong> </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">2 polic&iacute;as. Uno de estos dos polic&iacute;as, tendr&aacute; la funci&oacute;n de negociador.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">3</span><span style=\"color:#000000\">. </span></span></span><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>Cantidad m&aacute;xima de atracadores permitidos</strong></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">: 2 atracadores (no est&aacute; permitido tiradores)</span><span style=\"color:#000000\"> </span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">4</span><span style=\"color:#000000\">. </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Armas permitidas</strong></span><span style=\"color:#dddddd\"><strong>:</strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">&Uacute;nicamente grado 1&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">5</span><span style=\"color:#000000\">. </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&aacute;xima de rehenes permitidos</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1 reh&eacute;n</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>ROBO A JOYER&Iacute;A&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Para robar una joyer&iacute;a, ser&aacute; necesario como m&iacute;nimo 3 polic&iacute;as en servicio y que estos est&eacute;n disponibles.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">2.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&iacute;nima y m&aacute;xima de polic&iacute;as permitidos durante el robo</strong></span><span style=\"color:#dddddd\"><strong>:</strong></span><span style=\"color:#000000\"><strong> </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3 polic&iacute;as. Las funciones que tendr&aacute;n estos polic&iacute;as ser&aacute;n las siguientes: uno tendr&aacute; la funci&oacute;n de negociador, otro ser&aacute; el encargado de buscar al tirador y el &uacute;ltimo solo tendr&aacute; que esperar las indicaciones del polic&iacute;a negociador.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3. </span></span></span><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>Cantidad m&aacute;xima de atracadores permitidos</strong></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\">:</span><span style=\"color:#000000\"> </span><span style=\"color:#dddddd\">3 atracadores. Opcionalmente se puede elegir solo a uno de ellos para que cumpla la funci&oacute;n de tirador fuera de la joyer&iacute;a 4. </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Armas permitidas</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">&Uacute;nicamente grado 1&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">5.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&aacute;xima de rehenes permitidos</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">2 rehenes&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>ROBO A ARMER&Iacute;A&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Para robar una armer&iacute;a, ser&aacute; necesario como m&iacute;nimo 3 polic&iacute;as en servicio y que estos est&eacute;n disponibles.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">2.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&iacute;nima y m&aacute;xima de polic&iacute;as permitidos durante el robo</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3 polic&iacute;as. Las funciones que tendr&aacute;n estos polic&iacute;as ser&aacute;n las siguientes: uno tendr&aacute; la funci&oacute;n de negociador, y los dos &uacute;ltimos s&oacute;lo tendr&aacute;n que esperar las indicaciones del polic&iacute;a negociador.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">3.</span><span style=\"color:#000000\"> </span></span></span><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>Cantidad m&aacute;xima de atracadores permitidos</strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">: 3 atracadores. No est&aacute; permitido tiradores.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">4.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Armas permitidas</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">&Uacute;nicamente grado 1 y 2.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">5.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&aacute;xima de rehenes permitidos</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">2 rehenes.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>ROBO A BANCO CHICO&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Para robar un banco chico, ser&aacute; necesario como m&iacute;nimo 4 polic&iacute;as en servicio y que estos est&eacute;n disponibles.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">2.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&iacute;nima y m&aacute;xima de polic&iacute;as permitidos durante el robo</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">4 polic&iacute;as. Las funciones que tendr&aacute;n estos polic&iacute;as ser&aacute;n las siguientes: uno tendr&aacute; la funci&oacute;n de negociador, otro ser&aacute; el encargado de buscar al tirador y los dos &uacute;ltimos s&oacute;lo tendr&aacute;n que esperar las indicaciones del polic&iacute;a negociador.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">3.</span><span style=\"color:#000000\"> </span></span></span><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>Cantidad m&aacute;xima de atracadores permitidos</strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">: 3 atracadores. Opcionalmente se puede elegir solo a uno de ellos para que cumpla la funci&oacute;n de tirador fuera del banco chico. 4. </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Armas permitidas</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">Est&aacute; permitido el uso de pistolas, escopetas y SMG&rsquo;s. 5. </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&aacute;xima de rehenes permitidos</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">3 rehenes.</span><span style=\"color:#000000\">&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>ROBO A BANCO CENTRAL&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Para robar un banco central, ser&aacute; necesario como m&iacute;nimo 6 polic&iacute;as en servicio y que estos est&eacute;n disponibles.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">2.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&iacute;nima y m&aacute;xima de polic&iacute;as permitidos durante el robo</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">6 polic&iacute;as. Las funciones que tendr&aacute;n estos polic&iacute;as ser&aacute;n las siguientes: uno tendr&aacute; la funci&oacute;n de negociador, otro ser&aacute; el encargado de buscar al tirador y los cuatro &uacute;ltimos s&oacute;lo tendr&aacute;n que esperar las indicaciones del polic&iacute;a negociador.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">3.</span><span style=\"color:#000000\"> </span></span></span><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>Cantidad m&aacute;xima de atracadores permitidos</strong></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">: 6 atracadores. Opcionalmente se puede elegir solo a uno de ellos para que cumpla la funci&oacute;n de tirador fuera del banco central 4.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Armas permitidas</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">Est&aacute; permitido el uso de<span style=\"color:#000000\"> </span>pistolas, todo tipo de armas de grado 2 y 3. Pero tan solo con la opci&oacute;n de usar un solo francotirador por cada bando.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">5.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&aacute;xima de rehenes permitidos</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3 rehenes.</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>ROBO A TIENDA DE TECNOLOG&Iacute;A&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. Para robar la tienda de tecnolog&iacute;a, ser&aacute; necesario como m&iacute;nimo 5 polic&iacute;as en servicio y que estos est&eacute;n disponibles.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">2.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&iacute;nima y m&aacute;xima de polic&iacute;as permitidos durante el robo</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">5 polic&iacute;as. Las funciones que tendr&aacute;n estas ser&aacute;n las siguientes: uno tendr&aacute; la funci&oacute;n de negociador, y el resto solo tendr&aacute;n que esperar las indicaciones del polic&iacute;a negociador.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">3.</span><span style=\"color:#000000\"> </span></span></span><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>Cantidad m&aacute;xima de atracadores permitidos</strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">: 5 atracadores. Sin opci&oacute;n de tirador 4. </span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>Armas permitidas: </strong></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">Est&aacute; permitido el uso de pistolas, todo tipo de armas de grado 2 y 3. No est&aacute; permitido el uso de francotiradores.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#dddddd\">5.</span><span style=\"color:#000000\"> </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\"><strong>Cantidad m&aacute;xima de rehenes permitidos</strong></span><span style=\"color:#dddddd\"><strong>: </strong></span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3 rehenes.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">6. Est&aacute; prohibido disparar de adentro hacia afuera del establecimiento y viceversa. &Uacute;nicamente se podr&aacute; disparar cuando ambos bandos en su totalidad est&aacute;n afuera o dentro del establecimiento.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:12.01007556915283pt\"><span style=\"font-family:Arial\"><strong>BASE A ENTORNO&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">1. No est&aacute; permitido &quot;campear&quot; zonas de trabajo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">2. No est&aacute; permitido forzar el PK.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">3. El uso del /me, sirve para relatar el pensamiento de un personaje y/o entorno del mismo. 4. El uso del /do, sirve para realizar acciones que no puede hacer el personaje y/o no hay animaci&oacute;n.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">5. En un rol de tiroteo solo pueden participar como m&aacute;ximo 8 jugadores por bando a excepci&oacute;n de la polic&iacute;a.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">6. No est&aacute; permitido meterse a rol ajeno, debes tener un motivo y/o rol previo para acoplarte a un rol sin fastidiar ni interrumpir la experiencia de los otros jugadores.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">7. Si en un tiroteo las balas cesan por 5min, el bando con mayor integrantes vivos que participaron del tiroteo se declaran autom&aacute;ticamente victoriosos y nadie m&aacute;s puede intervenir a excepci&oacute;n de la polic&iacute;a. Cabe recalcar que los 5 min se empiezan desde que un bando pregunta &quot;GG&quot;, en caso el bando contrario no responda en 15 seg. se declara derrota para el bando que no respondi&oacute;.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">8. En caso de que la polic&iacute;a est&eacute; interviniendo a un miembro tuyo, podr&aacute;n asistir para un rescate en caso de no encontrarse en un rol detenido (poniendo multas), en la forma expresamente indicada y permitida. (No aplica para robos organizados). Para reiniciar el contador de los 5 min. es necesario que los disparos sean directo al cuerpo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><strong>ZONAS SEGURAS&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#ecf0f1\">\u2794 </span><span style=\"color:#dddddd\">Garajes&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Tiendas de ropa/comida/armer&iacute;a/tatuajes&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Farmacias&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Peluquer&iacute;as&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Gasolineras&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794 </span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">Oficina de empleo&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Taller de mec&aacute;nicos&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Comisar&iacute;a&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Hospitales&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Concesionarias&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794 </span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">Zonas de trabajo(vestuarios) y farmeo del mismo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Cajeros autom&aacute;ticos&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Gasolineras/Grifos&nbsp;</span></span></span></p>\n        \n        <p><span style=\"color:#ecf0f1\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\">\u2794</span></span></span><span style=\"color:#dddddd\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"> Plaza Cubos, sus 4 avenidas.</span></span></span></p>\n        \n        <p>&nbsp;</p>\n        \n        <p>&nbsp;</p>\n        "
              };
              this.editorData = this.forum.container;
            }

            if (this.rutaActiva.snapshot.params.container == "normas-generales-de-la-policía") {
              this.forum = null;
              this.editorData = null;
              this.existForun = true;
              this.forum = {
                "urlUserAvatar": "https://cdn.discordapp.com/avatars/652196208726638592/07299d18c59eca76344dd970d768bdbd.png",
                "datetime": "30.09.2019",
                "rol": "admin",
                "titlePost": "Normas Generales de la Policía",
                "nickname": "IgnL",
                "bolComents": false,
                "temas": 1,
                "container": "<div class=\"p-1 p-sm-2 p-md-2 p-lg-2\" style=\"background-color:#ffffff\">\n        <p style=\"margin-left:17px; text-align:center\"><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><img class=\"d-lg-block d-md-none d-none\" src=\"https://lh6.googleusercontent.com/Ua63Uu_u-A1p8wTK4pj6zKF4uIgETybjU3oKadPc6dL0ZdQwTUqsWklh6X6Sb2vbm7j8sk-AD9AYkyRyx-evtdH7at3JIHu-fDlq9ojpvM9gCbBozcPetvsyGcZjNxIw1q-gSDbX\" style=\"height:88px; width:534px\" /></span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><img src=\"https://lh6.googleusercontent.com/idzUSWHGXhpYg_WQCe0EqdSQ4v_kg0lg8Ii9WD4yhJG5thjiuUPOrQWo4U7xww67KaCM69H2LK96p8bTMgRbE8u_0-3EY7-bDOFy1pYpwbTaTtA996Vqou7gM5tm6IensqecNUqQ\" style=\"height:89px; width:78px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:35px\"><span style=\"font-size:16.079999923706055pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\"><strong>NORMAS GENERALES DE LA POLICIA &ndash; P.N.P.</strong></span></span></span></span><img src=\"https://lh4.googleusercontent.com/dELyxOq52qCYjaLp_FyIQ9J8aOO-5pOIyaYfuwvBCbjCaW8BirOyz3Ut6u7jKmFuw_ads4UIWogytr3V-YatJSaXlaTeFlexAyi1ePiJtKzu-_rCFgZKVtLeItp3NGj6CUFQfEJN\" style=\"float:right; height:151px; width:139px\" /></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>NORMAS FUNDAMENTALES.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 1.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cada ingresante del cuerpo se har&aacute; cargo del armamento entregado, la p&eacute;rdida del&nbsp; armamento llevar&aacute; una sanci&oacute;n monetaria.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 2.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Respetar siempre el uniforme.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">As&iacute; mismo se proh&iacute;be en su totalidad el uso de m&aacute;scaras, mascarillas, tatuajes faciales, gorras,&nbsp; cadenas, maletas, cabello tintado etc.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 3.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El uso de los veh&iacute;culos otorgados ser&aacute; &uacute;nica y llanamente para uso de patrullaje no para uso&nbsp; personal.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 4.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se proh&iacute;be cualquier acto considerado como corrupci&oacute;n en caso de ser encontrados ser&aacute;n&nbsp; expulsados inmediatamente del cuerpo y se los condenar&aacute; a una cadena perpetua.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 5.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:88px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Todo oficial que se encuentre en servicio deber&aacute; permanecer siempre en la radio policial. </span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:88px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 6.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:151px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Valorar su vida, la de sus compa&ntilde;eros y la de los ciudadanos en todo momento. </span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:151px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 7.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">La Polic&iacute;a solo har&aacute; uso de su arma de Fuego si se sienten amenazados con cualquier objeto&nbsp; que ponga en peligro su vida o la de su compa&ntilde;ero(s).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:172px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Teniendo siempre en cuenta el principio de congruencia y proporcionalidad. </span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:172px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 8.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Es el deber del oficial leer los derechos a una persona detenida antes de ingresarlo a&nbsp; comisar&iacute;a.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">1</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh5.googleusercontent.com/KbWUVs4abhz-lm5pVNi65onKNajK0Aw1ulSaIMAhkQxunMnM1rEEYL476OAyNOB-6D9FLQOEbmNwokdQeLtwExEw6CAjFJsikc3W7RqjN0RjV34gT9q8K1seaR5Orw0leH2G315a\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 9.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En una persecuci&oacute;n, los polic&iacute;as tienen permitido obstruir con la patrulla a fin de detener al&nbsp; veh&iacute;culo sospechoso (c&oacute;digo 100). As&iacute; mismo si omiten los 3 avisos enviados o pongan en&nbsp; peligro la vida de los polic&iacute;as o la de los transe&uacute;ntes; es permitido por la polic&iacute;a el uso de la&nbsp; Clave Rober (Disparar a las llantas).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 10.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:66px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Si una patrulla deja de funcionar deber&aacute;n solicitar un mec&aacute;nico para su reparaci&oacute;n. Cuando un oficial anuncie su salida de servicio debe guardar su patrulla.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Las patrullas que hayan sido encontradas abandonadas conllevar&aacute;n una sanci&oacute;n&nbsp; administrativa y monetaria para el propietario de la misma.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 11.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Ser&aacute; responsabilidad de cada oficial el uso correcto de su armamento, as&iacute; como tambi&eacute;n el&nbsp; registrarlo al momento de su asignaci&oacute;n.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 12.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permitir&aacute; que solo los altos rangos de la polic&iacute;a (capit&aacute;n hacia adelante), lleven consigo su&nbsp; pistola de combate cuando se encuentren fuera de servicio.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 13.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Los oficiales tendr&aacute;n permitido el cachear los veh&iacute;culos y propietarios de los mismos siempre&nbsp; y cuando exista una causa probable o sea sospechoso de haber cometido un delito.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 14.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:117px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Un agente estar&aacute; en su completo derecho de pedir a una persona que se identifique, Si el susodicho levanta sospechas el oficial estar&aacute; en su derecho de registrarlo en busca de objetos ilegales o estupefacientes.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 15.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:87px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Queda terminantemente prohibido el uso de armas letales de fuego en contra de un civil&nbsp; sospechoso que se encuentre desarmado, solo podr&aacute;n hacer uso de sus armas no letales&nbsp; como el taser o cachiporra.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 16.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:147px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Si estas patrullando con un compa&ntilde;ero el encargado de la radio ser&aacute; el copiloto. </span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:147px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 17.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En los secuestros no se podr&aacute; disparar a los secuestradores hasta que el reh&eacute;n este fuera de&nbsp; su vista, queda terminantemente prohibido poner en riesgo la vida de los ciudadanos y&nbsp; compa&ntilde;eros del cuerpo.</span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">2</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh5.googleusercontent.com/KbWUVs4abhz-lm5pVNi65onKNajK0Aw1ulSaIMAhkQxunMnM1rEEYL476OAyNOB-6D9FLQOEbmNwokdQeLtwExEw6CAjFJsikc3W7RqjN0RjV34gT9q8K1seaR5Orw0leH2G315a\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"text-align:center\"><span style=\"font-size:28.07999992370605pt\"><span style=\"font-family:'Times New Roman'\"><span style=\"color:#000000\"><strong>CAPITULO I&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Armamento Reglamentario.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">La P.N.P tendr&aacute; a su disposici&oacute;n varios niveles de armamento para salvaguardar la seguridad&nbsp; de los ciudadanos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 18.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.1 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas reglamentarias nivel 1.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Pistola de combate.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Taser.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cachiporra.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Linterna.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.2 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas reglamentarias nivel 2.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Smg.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Escopeta.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.3 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas reglamentarias nivel 3.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Rifle de Asalto.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Francotirador.&nbsp;</span></span></span></p>\n        \n        <p style=\"text-align:center\"><span style=\"font-size:28.07999992370605pt\"><span style=\"font-family:'Times New Roman'\"><span style=\"color:#000000\"><strong>CAPITULO II&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Situaciones de robo.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 19.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Con el objetivo de reducir a los sospechosos que priven de la libertad a uno o m&aacute;s ciudadanos&nbsp; o que mediante la intimidaci&oacute;n cometan actos delictivos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Ser&aacute;n reducidos inmediatamente por el accionar policial en base a los siguientes art&iacute;culos&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.1 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Antes de iniciar cualquier robo organizado ya sea locales, tiendas o Bancos, tendr&aacute;n que&nbsp; preguntar a la polic&iacute;a mediante</span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>/anon </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">si el robo en &ldquo;espec&iacute;fico&rdquo; se encuentra disponible. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.2 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se deber&aacute; informar a la ciudadan&iacute;a que una situaci&oacute;n de robo se est&aacute; efectuando en:&nbsp; nombre de la zona y tipo de robo.</span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">NTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">3</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh4.googleusercontent.com/1zyzP4S-VkvkctITDRDZjH2aTij3WOsuCiE1CTddewPSTjveQ_pmew6CGtiMsb4jAsrZIAvI6-JuiT6a2y2ZoS_qBtuDMon6pDukU2GtKJTrJhIXgxpoQtA8q-tVSE-C6PYC0k5u\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:-1px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><u>&ldquo;Se recomienda a la ciudadan&iacute;a tomar v&iacute;as alternas toda persona que se encuentre en la zona </u></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">&nbsp;</span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><u>mencionada ser&aacute; considerado sospechoso y ser&aacute; reducido inmediatamente.&rdquo;</u></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.3 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Siempre se necesitar&aacute; un m&iacute;nimo de 2 EMS en servicio para poder realizar cualquier tipo&nbsp; de Robo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.4 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">No se puede negociar el uso de veh&iacute;culos de los polic&iacute;as o EMS para una posible&nbsp; persecuci&oacute;n.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.5 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Un reh&eacute;n no puede estar m&aacute;s de 30 minutos secuestrado.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.6 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Est&aacute; totalmente proh&iacute;bo la negociaci&oacute;n de intercambio de rehenes por dinero, solo se&nbsp; podr&aacute; negociar por tiempo y/o remoci&oacute;n de objetos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.7 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de llegar a un acuerdo, respetar el conteo de la negociaci&oacute;n (No salir antes), por&nbsp; parte del polic&iacute;a negociador.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.8 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de no existir ning&uacute;n acuerdo de negociaci&oacute;n entre ambos bandos o no exista&nbsp; rehenes, se har&aacute; un conteo de 10 segundos para comenzar el tiroteo.&nbsp;&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.9 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Prohibido el usar rehenes c&oacute;mplices o que pertenezcan al mismo bando, por lo cual, si hay un acuerdo de negociaci&oacute;n, estos ser&aacute;n cacheados fuera del lugar del atraco antes del&nbsp; proceder al conteo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.10 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de colocar barreras, conos, pinchos, se debe volver a guardar (eliminarlos)&nbsp; luego de levantar el operativo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.11 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de optar por persecuci&oacute;n, los delincuentes solo pueden hacer uso los&nbsp; Veh&iacute;culos de Concesionaria de Gama 1.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1.12 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En una persecuci&oacute;n luego de un robo organizado, los polic&iacute;as tienen permitido obstruir&nbsp; con la patrulla a fin de detener al veh&iacute;culo sospechoso (c&oacute;digo 100). As&iacute; mismo si los&nbsp; delincuentes ponen en peligro la vida de los polic&iacute;as o la de los transe&uacute;ntes; es permitido&nbsp; por la polic&iacute;a el uso de la Clave Rober (Disparar a las llantas).&nbsp;</span></span></span></p>\n        \n        <p style=\"text-align:center\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Tipos de Robos.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><u>Robo a Tienda.</u></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:107px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad de Polic&iacute;as participantes son 3 (uno de ellos ser&aacute; el negociador). </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad m&aacute;ximo de delincuentes participantes son 2. (No se permite Tirador). </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permite 1 solo Reh&eacute;n.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas permitidas: Solo Pistolas Nivel 1.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de llegar a un acuerdo de salida, el negociador se retirar&aacute; junto al reh&eacute;n. Caso&nbsp; contrario y no exista un acuerdo, el negociador ser&aacute; participe del Tiroteo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><u>Robo a Armer&iacute;a.</u></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:107px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad de Polic&iacute;as participantes son 4 (uno de ellos ser&aacute; el negociador). </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad m&aacute;ximo de delincuentes participantes son 3. (No se permite Tirador). </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permite 2 Rehenes.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas permitidas: Solo Pistolas Nivel 1.</span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">NTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">4</span></span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh4.googleusercontent.com/1zyzP4S-VkvkctITDRDZjH2aTij3WOsuCiE1CTddewPSTjveQ_pmew6CGtiMsb4jAsrZIAvI6-JuiT6a2y2ZoS_qBtuDMon6pDukU2GtKJTrJhIXgxpoQtA8q-tVSE-C6PYC0k5u\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:-1px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de llegar a un acuerdo de salida, el negociador se retirar&aacute; junto a los rehenes. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">&nbsp;Caso contrario y no exista un acuerdo, el negociador ser&aacute; participe del Tiroteo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><u>Robo a Joyer&iacute;a.</u></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad de Polic&iacute;as participantes son 4 (uno de ellos ser&aacute; el negociador). </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad m&aacute;ximo de delincuentes participantes son 3 (Uno de ellos puede hacer rol&nbsp; de tirador fuera de joyer&iacute;a)&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permite 2 Rehenes.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas permitidas: Solo Pistolas Nivel 1.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de llegar a un acuerdo de salida, el negociador se retirar&aacute; junto a los rehenes.&nbsp; Caso contrario y no exista un acuerdo, el negociador ser&aacute; participe del Tiroteo.</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px; text-align:center\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><u>Robo a Banco Chico (Flecca).</u></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad de Polic&iacute;as participantes son 5 (uno de ellos ser&aacute; el negociador). </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad m&aacute;ximo de delincuentes participantes son 4 (Uno de ellos puede hacer rol&nbsp; de tirador fuera del Banco)&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permite 3 Rehenes.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas permitidas: Armas de Nivel 1, Nivel 2 y chalecos antibalas.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de llegar a un acuerdo de salida, el negociador se retirar&aacute; junto a los rehenes.&nbsp; Caso contrario y no exista un acuerdo, el negociador ser&aacute; participe del Tiroteo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><u>Robo a Tienda Tecnol&oacute;gica.</u></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad de Polic&iacute;as participantes son 6.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:111px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad m&aacute;ximo de delincuentes participantes son 5 (No se permite Tirador). </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">No est&aacute; permitido el uso de Fusil o Francotirador&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permite 3 Rehenes.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas permitidas: Armas de Nivel 1, Nivel 2, Nivel 3 y chalecos antibalas. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de llegar a un acuerdo de salida, el negociador se retirar&aacute; junto a los rehenes.&nbsp; Caso contrario y no exista un acuerdo, el negociador ser&aacute; participe del Tiroteo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><u>Robo a Banco Central</u></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad de Polic&iacute;as participantes son 7.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad m&aacute;ximo de delincuentes participantes son 6. (Uno de ellos puede hacer rol&nbsp; de tirador fuera del Banco)&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permite 3 Rehenes.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:145px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas permitidas: Armas de Nivel 1, Nivel 2, Nivel 3 y chalecos antibalas. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permite solo 1 Francotirador por Ambos bandos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:145px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de llegar a un acuerdo de salida, el negociador se retirar&aacute; junto a los rehenes.&nbsp; Caso contrario y no exista un acuerdo, el negociador ser&aacute; participe del Tiroteo.</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px; text-align:center\">&nbsp;</p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">5</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh4.googleusercontent.com/1zyzP4S-VkvkctITDRDZjH2aTij3WOsuCiE1CTddewPSTjveQ_pmew6CGtiMsb4jAsrZIAvI6-JuiT6a2y2ZoS_qBtuDMon6pDukU2GtKJTrJhIXgxpoQtA8q-tVSE-C6PYC0k5u\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 20.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Derechos de las Personas Arrestadas.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">La P.N.P. en base a la constituci&oacute;n deber&aacute; hacer saber los derechos de las personas que ser&aacute;n&nbsp; privadas de su libertad.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.1 Tiene derecho a guardar silencio y a no declarar en su contra.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.2 Tiene derecho a alimentaci&oacute;n y bebida.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.3 Tiene derecho a asistencia m&eacute;dica en caso de que lo requiera.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 21.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Procedimiento Policial.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1. Pedir el documento de identidad a la persona que se realice la intervenci&oacute;n, darle a conocer&nbsp; el motivo de su detenci&oacute;n y revisar si se encuentra en b&uacute;squeda o captura.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">2. Requisarlo en caso de que sea sospechoso&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:74px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">3. En caso de encontrarlo culpable esposarlo y </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>llevarlo a comisar&iacute;a para su procesamiento. </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">4. Leerle los derechos antes de ingresar a comisar&iacute;a&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">5. Al momento de realizar el procesamiento en la comisar&iacute;a colocarle las multas&nbsp; correspondientes.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">6. Realizar el registro de antecedentes en comisar&iacute;a&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">7. Enviarlo a prisi&oacute;n el tiempo que corresponda.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 22.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se podr&aacute; detener de manera inmediata a toda persona que:&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se le encuentre cometiendo un delito Infraganti.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se encuentre en b&uacute;squeda y captura&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se d&eacute; a la fuga.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Sean sospechosos debido a denuncias de ciudadanos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se encuentren en una zona de alerta policial.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.1 Es obligaci&oacute;n del oficial leerle los derechos a una persona arrestada antes de ingresar a&nbsp; comisaria, caso contrario y esta es omitida, el arrestado puede reclamar su libertad, pero eso&nbsp; no lo excluye de confiscarle sus objetos ilegales y/o las multas colocadas.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.2 Un ciudadano podr&aacute; ser detenido (prisi&oacute;n preventiva) siempre y cuando haya una&nbsp; investigaci&oacute;n de por medio o evidencias en su contra. As&iacute; mismo no tendr&aacute;n derecho al&nbsp; Habeas Corpus (Salir de prisi&oacute;n por omisi&oacute;n de la lectura de los derechos).</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.3 Los Detenidos podr&aacute;n ser identificados por los demandantes o testigos en caso de que </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">&nbsp;existan.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\">&nbsp;</p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 23.&nbsp;&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Una persona arrestada que se encuentra dentro de comisaria tendr&iacute;a que respetar el entorno del lugar y el procesamiento de su detenci&oacute;n realizado por el oficial. As&iacute; mismo el oficial tiene&nbsp; libre potestad de realizar las acciones necesarias a fin de que se cumpla.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 24.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Los detenidos en un acto il&iacute;cito ser&aacute;n juzgados al unison&oacute; y no individualmente tomando en&nbsp; cuenta que el delito cometido lo realizaron como una sociedad.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">6</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh4.googleusercontent.com/1zyzP4S-VkvkctITDRDZjH2aTij3WOsuCiE1CTddewPSTjveQ_pmew6CGtiMsb4jAsrZIAvI6-JuiT6a2y2ZoS_qBtuDMon6pDukU2GtKJTrJhIXgxpoQtA8q-tVSE-C6PYC0k5u\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:-1px\">&nbsp;</p>\n        \n        <p style=\"margin-left:21px\">&nbsp;</p>\n        \n        <p style=\"text-align:center\"><span style=\"font-size:28.07999992370605pt\"><span style=\"font-family:'Times New Roman'\"><span style=\"color:#000000\"><strong>CAPITULO III&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Sistema integral de Multas y Sanciones.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El sistema de multas indica el tiempo que deber&aacute; pagar el ciudadano por la acumulaci&oacute;n de&nbsp; las mismas.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 25.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1 mes representa 1 minuto Ingame.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1000 - 10000 $ = 5 &ndash; 10 meses en la comisar&iacute;a.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">10001 - 20000 $ = 11 &ndash; 15 meses en la comisar&iacute;a.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">20001 &ndash; 30000 $ = 16 &ndash; 20 meses en el Penal de m&aacute;xima seguridad.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">30001 &ndash; 40000 $ = 21 &ndash; 25 meses en el Penal de m&aacute;xima seguridad.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">40001 &ndash; 199999 $ = 26 - 30 meses en el Penal de m&aacute;xima seguridad.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>200000 $ en Adelante = Cadena Perpetua (CK) - Traslado a Penal de M&aacute;xima Seguridad.</strong></span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">7</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><img src=\"https://lh6.googleusercontent.com/blcIfEGMRgE5cggGJsPIQlB8aaiEk4D2uDnyz_6GfXoZ2stXOv0GZj2xXMEbS38Us28Dd2zvWauGrigo5qKAsh3zUMNNC1nUCyNb7JWzscVO_gmRC3Pg30Djp-GoF6TazXpLSznv\" style=\"height:74px; width:68px\" /></strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:125px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 26.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:125px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Las personas que tengan un alto perfil delictivo ser&aacute;n consideradas como personas&nbsp; peligrosas en nuestra base de datos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1 - 9 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Antecedentes en la base de datos = </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Persona Pasiva.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>10 - 19 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Antecedentes en la base de datos = </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Persona Neutra.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>20 - 25 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Antecedentes en la base de datos = </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Persona Agresiva.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>26 - 29 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Antecedentes en la base de datos = </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Persona Altamente Peligrosa.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:70px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Las personas que superen los </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>30 antecedentes policiales </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Ser&aacute;n fichados como Terroristas y&nbsp; se proceder&aacute; a realizar una b&uacute;squeda y captura de los mismos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">En caso de ser atrapados se les impondr&aacute; la pena m&aacute;xima de Cadena perpetua (</span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>CK</strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Sistema integral de multas y sanciones (Narc&oacute;ticos)&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 27.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El sistema integral de multas y sanciones (Narc&oacute;ticos) se basar&aacute; en &uacute;nica y exclusivamente los&nbsp; siguientes puntos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Si un civil tiene menos de 10 gramos de droga (Cualquier tipo) se procede a colocarle&nbsp; la multa correspondiente (Portaci&oacute;n de Droga).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Si un civil tiene entre 10-150 gramos de droga (Cualquier tipo) se procede a colocarle&nbsp; la multa (Venta de droga), se confisca la sustancia y se le env&iacute;a a prisi&oacute;n 10 meses. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Si un civil tiene m&aacute;s de 150 gramos de droga </span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">(Cualquier tipo) se procede a colocarle la&nbsp;multa (Fabricaci&oacute;n de droga), se confisca la sustancia y se le env&iacute;a a prisi&oacute;n por 15&nbsp; meses.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px; text-align:center\">&nbsp;</p>\n        \n        <p style=\"margin-left:20px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Traslado al Penal de M&aacute;xima Seguridad.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 28.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.1 El traslado a prisi&oacute;n se llevar&aacute; a cabo siempre y cuando supere los 20000 $ de multas y&nbsp; que por lo menos 8 polic&iacute;as se encuentren en servicio para que se realice el traslado (No&nbsp; prioritario a menos que el arrestado lo solicite).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.3 En caso de que el convoy sea intervenido en pleno traslado se podr&aacute; hacer uso de la fuerza&nbsp; con armamento de Nivel 3.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.4 En caso de que el preso sea liberado motivo de un mot&iacute;n en contra del cuerpo policial el&nbsp; mismo ser&aacute; pr&oacute;fugo de la justicia y se redactara un acta de b&uacute;squeda y captura en su contra.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.5 La polic&iacute;a debe informar a la ciudadan&iacute;a que se est&aacute; realizando un traslado a prisi&oacute;n y que&nbsp; la polic&iacute;a se encuentra ocupada.</span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\">&nbsp;</p>\n        \n        <p style=\"margin-left:21px; margin-right:-1px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.6 En caso de que se haga MetaGaming en este tipo de situaciones se sancionar&aacute; </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">&nbsp;fuertemente.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">1.7. La Polic&iacute;a tiene permitida utilizar todos los niveles de armas en el traslado del&nbsp; delincuente(s), as&iacute; mismo el uso de solo (1) francotirador y chalecos.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"color:#000000; font-family:Arial; font-size:7.92pt\">INTOCABLES RP </span><span style=\"color:#ffffff; font-family:Calibri,sans-serif\"><span style=\"background-color:#c00000; font-size:14.72px\">8</span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh4.googleusercontent.com/1zyzP4S-VkvkctITDRDZjH2aTij3WOsuCiE1CTddewPSTjveQ_pmew6CGtiMsb4jAsrZIAvI6-JuiT6a2y2ZoS_qBtuDMon6pDukU2GtKJTrJhIXgxpoQtA8q-tVSE-C6PYC0k5u\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:-1px\">&nbsp;</p>\n        \n        <p style=\"text-align:center\"><span style=\"font-size:28.07999992370605pt\"><span style=\"font-family:'Times New Roman'\"><span style=\"color:#000000\"><strong>CAPITULO IV&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Niveles de Alerta&nbsp;&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El nivel de Alerta es el encargado de medir el nivel de disponibilidad y defensa del cuerpo&nbsp; policial acatando un estado de emergencia.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Art&iacute;culo 29.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#0070c0\">\u2756 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#0070c0\"><strong>Alerta Azul </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">(Alerta 4).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se activa cuando existan demasiadas Alertas policiales.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Todo miembro del cuerpo policial tendr&aacute; permitido el intervenir a cualquier ciudadano&nbsp; que se encuentre en actividades sospechosas.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se permite el uso de Chaleco Antibalas.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#00b050\">\u2756 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#00b050\"><strong>Alerta Verde </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">(Alerta 3).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se activa cuando existan muchos robos y secuestros a civiles.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Todo miembro del cuerpo policial tendr&aacute; permitido el intervenir a cualquier ciudadano&nbsp; sospechoso con el armamento letal de Nivel 2.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cuerpo policial tendr&aacute; permitido el realizar el control de v&iacute;as y lugares p&uacute;blicos. </span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cuerpo policial tendr&aacute; permitido el uso de veh&iacute;culos especiales (Interceptor y&nbsp; Helic&oacute;ptero).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El uso del Chaleco Antibalas es Obligatorio.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se activa la participaci&oacute;n del Escuadr&oacute;n Verde &ndash; TERNAS. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>(</strong></span></span></span><span style=\"font-size:10.5600004196167pt\"><span style=\"font-family:Arial\"><span style=\"color:#4d5156\"><span style=\"background-color:#ffffff\"><strong>Unidad de Inteligencia </strong></span></span></span></span><span style=\"font-size:10.5600004196167pt\"><span style=\"font-family:Arial\"><span style=\"color:#4d5156\"><strong>&nbsp;</strong></span></span></span><span style=\"font-size:10.5600004196167pt\"><span style=\"font-family:Arial\"><span style=\"color:#4d5156\"><span style=\"background-color:#ffffff\"><strong>T&aacute;ctica Operativa Urbana de la Polic&iacute;a Nacional).</strong></span></span></span></span><span style=\"font-size:10.5600004196167pt\"><span style=\"font-family:Arial\"><span style=\"color:#4d5156\"><strong>&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#ffc000\">\u2756 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffc000\"><strong>Alerta Naranja </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">(Alerta 2).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se activa cuando un miembro del cuerpo policial es secuestrado o resulta abatido en&nbsp; medio de un tiroteo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cuerpo policial tendr&aacute; permitido el uso del armamento letal de Nivel 3. </span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cuerpo policial tendr&aacute; permitido el uso de veh&iacute;culos especiales. (Interceptor,&nbsp; Helic&oacute;ptero, Blindado)&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El uso del Chaleco Antibalas es Obligatorio.</span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">9</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh5.googleusercontent.com/3EM8fT1AxwLpuSqCEXaLXWX7VY36kQOk5LKiGun6SnRby5TMF4uuANCpkB8NndXRqPAM-kW240JfMgbly5c6iB7xYD7Es4DqwP1xU0X8ecYGbGjS6ayoOqkIVjes0nwi3hlxpYHI\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#ff0000\">\u2756 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ff0000\"><strong>Alerta Roja </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">(Alerta 1).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Se activa cuando la polic&iacute;a no da abasto con las Alertas en la ciudad y existen m&uacute;ltiples&nbsp; secuestros, Robos organizados, Asesinatos, Extorsiones.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cuerpo policial tendr&aacute; permitido el uso del armamento letal de Nivel 3.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:102px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cuerpo policial podr&aacute; restringir la vialidad en zonas que considere necesarias. </span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:102px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cuerpo policial podr&aacute; hacer uso de todos los veh&iacute;culos especiales.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:65px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cuerpo policial tendr&aacute; permitido abrir fuego directo en caso de sentirse amenazado. </span></span></span></p>\n        \n        <p style=\"margin-left:46px; margin-right:65px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El uso del Chaleco Antibalas es Obligatorio.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:69px\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Atentamente.&nbsp;&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:90px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>Polic&iacute;a Nacional del Per&uacute; &ndash; Intocables RP.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-right:145px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong><img src=\"https://lh4.googleusercontent.com/gzPJFdrtYfcJNerBd3DYd6sj8coHffdTCDDvHHteWZYsDv4z2e-EXCV4Hkpj8_OOJ3CmYLLwXG0d81e5r93X3__ckfBvxrl5u6x0kB5Ry_3JN5-PY9ET3LDDdBnk1C6M00biXpUU\" style=\"height:199px; width:184px\" /></strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px\"><span style=\"font-size:16.079999923706055pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#111111\"><strong>&iexcl;AVISO!&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:62px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#111111\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#111111\">El STAFF se reserva el derecho de editar estas normas cuando lo vea necesario sin&nbsp; previo aviso.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#111111\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#111111\">El desconocimiento de estas normas no exime de su cumplimiento.</span></span></span></p>\n        \n        <p style=\"margin-right:73px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">10</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh5.googleusercontent.com/jEntsh7l0K_89NOJrRvX93mSWLO-QSgILr8vAlNCdZBCnE0EahF0Lta0vUfcpF0cAdgcJWaHZ9JQvgclKNQWhib6otpE2_UewGkGzLMXy-cICXlSfIqwiZq_PWGNBVj7pK-EO7ad\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"text-align:center\"><span style=\"font-size:28.07999992370605pt\"><span style=\"font-family:'Times New Roman'\"><span style=\"color:#c00000\"><strong>Propuestas a Futuro.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:22px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Las siguientes categor&iacute;as son algunas propuestas que pueden desarrollarse m&aacute;s adelante que&nbsp; podr&iacute;an implementarse a fin de dar variedad a el rol de polic&iacute;a actualmente presente.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>1. Nuevos Robos.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><u>Robo al Yate.</u></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong> </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">(Ubicaci&oacute;n: Zona sur central cerca al restaurante Pier&rsquo;s)&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad de Polic&iacute;as participantes son m&aacute;ximo 6.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad m&aacute;ximo de delincuentes participantes son 6 (todos adentro del yate). </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">No se permiten rehenes, por tanto, no hay negociaci&oacute;n y es resuelto por tiroteo&nbsp; directo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas permitidas: Armas de Nivel 1 y chalecos antibalas.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><u>Robo a Adunas. </u></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">(Ubicaci&oacute;n: Zona sureste de la ciudad).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad de Polic&iacute;as participantes son 8.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Cantidad m&aacute;ximo de delincuentes participantes son 8.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">No se permiten rehenes, por tanto, no hay negociaci&oacute;n y es resuelto por tiroteo&nbsp; directo.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Armas permitidas: Armas de Nivel 1, Nivel 2, Nivel 3 y chalecos antibalas.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2219 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">No se permite el uso de Francotirador o fusil.</span></span></span></p>\n        \n        <p style=\"margin-right:73px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">11</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><img src=\"https://lh4.googleusercontent.com/k3gAjyrS_GlSPU1OXosxoOs9sNs7CbDmgxBIczoE3RoPhM43MpV6Hdr9T4j_8LTET356wj1UHSLpVygt6Ww01uv0dXCf5cXo2sn79zUrcLqBpDlMa3YtbVM_HDzgKfeBrV-PCOQq\" style=\"height:74px; width:68px\" /></strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>2. Nivel de Alertas Visibles. </strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El poder Implementar que Nivel de alerta impuesto </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>pueda ser visualizado por toda la&nbsp; ciudad </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">ya sea mediante el logo de la PNP por ejemplo junto a la alerta respectiva, el cual&nbsp; podr&iacute;a estar ubicada en la parte inferior o superior de la pantalla. As&iacute; mismo estas pueden&nbsp; ser activadas o cambiadas con la ayuda de comando exclusivos por cada alerta.&nbsp;&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:46px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Ejemplos:&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:20px; margin-right:133px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>&nbsp; </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>&nbsp; </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>3. Sistema de Registro de Informaci&oacute;n IC.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:68px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Poder contar con un sistema de Informaci&oacute;n de Cada ciudadano donde con la ayuda&nbsp; de un comando cada polic&iacute;a pueda observar e ingresar los datos de cada ciudadano y&nbsp; donde se pueda encontrar la lista de antecedentes, licencias, propiedades, casas. Etc.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:69px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El sistema podr&iacute;a ser similar al siguiente.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:69px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Ejemplo: Link Sistema de Criminalidad IC.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:158px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#0563c1\"><u>https://forum.cfx.re/t/lrp-criminalrecord/1017021</u></span></span></span></p>\n        \n        <p style=\"margin-left:122px\">&nbsp;</p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">12</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh4.googleusercontent.com/1zyzP4S-VkvkctITDRDZjH2aTij3WOsuCiE1CTddewPSTjveQ_pmew6CGtiMsb4jAsrZIAvI6-JuiT6a2y2ZoS_qBtuDMon6pDukU2GtKJTrJhIXgxpoQtA8q-tVSE-C6PYC0k5u\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\">&nbsp;</p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>4. Implementaciones que mejorar&iacute;an el Rol Policial.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:58px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>4.1 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Incorporaci&oacute;n del radar en las patrullas para obtener las patentes de los veh&iacute;culos en persecuci&oacute;n, y as&iacute; por implementar m&aacute;s rol para los que se dan a la fuga. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>4.2 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Implementar el radar de activaci&oacute;n para la localizaci&oacute;n de los polic&iacute;as en el&nbsp; momento de un tiroteo con el &uacute;nico fin de tener una mejor coordinaci&oacute;n y&nbsp; ubicaci&oacute;n. El cual podr&aacute; activarse o desactivarse solo por los polic&iacute;as ejecutando&nbsp; alg&uacute;n comando IC. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Ejm: </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">/onradar, /offradar.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:58px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>4.3 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Incorporar un &iacute;tem IC que pueda identificar si una persona cuenta con Licencia de&nbsp; Armas o no, el mismo formato podr&iacute;a ser usado tambi&eacute;n para seguros m&eacute;dico,&nbsp; seguros de autos, etc. No valido si en caso ya cont&aacute;ramos con un sistema de&nbsp; Informaci&oacute;n (Punto </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>3</strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">), ya que dicha informaci&oacute;n seria encontrada ah&iacute;.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:58px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>4.4 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Establecer que el contador de polic&iacute;as se muestre </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>+5 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">cuando se encuentren m&aacute;s de&nbsp; 6 polic&iacute;as en servicio, a fin de evitar el MG. Tambi&eacute;n aplicable para Essalud,&nbsp; Mec&aacute;nicos, etc.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:58px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>4.5 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Poder contar con un Meg&aacute;fono Ingame, que ser&iacute;a usando dentro de las patrullas,&nbsp; cuyo objetivo es mandar un aviso a una persona sospechosa y esta pueda&nbsp; detenerse. </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Ejm: </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">&ldquo;Le habla la Polic&iacute;a, por favor detenga su veh&iacute;culo al lado derecho&nbsp; de la autopista&rdquo;.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:58px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>4.6 </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Implementar los </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>servicios comunitarios </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">los cuales ser&iacute;an efectuados a cambio de&nbsp; enviar a prisi&oacute;n y/o multas impuestas.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>5. Procedimiento de Solicitud de Licencia de Armas.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>5.1 Licencia de Armas - Primera Vez.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:68px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><em><u>Requisitos:</u></em></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><em>&nbsp;</em></strong></span></span></span></p>\n        \n        <p style=\"margin-left:94px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Documento de Identidad.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:94px; margin-right:69px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Documento de Solicitud de Licencia de Armas (Se adjunta Formato Est&aacute;ndar). </span></span></span></p>\n        \n        <p style=\"margin-left:94px; margin-right:69px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">No contar con antecedentes cometidos por Delitos Graves.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:94px; margin-right:76px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Test Psicol&oacute;gico vigente, el cual es tramitado en las Instalaciones de Essalud. </span></span></span></p>\n        \n        <p style=\"margin-left:94px; margin-right:76px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Pago de $10K por derecho de tr&aacute;mite.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:68px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><em><u>Procedimiento de Aprobaci&oacute;n o Negaci&oacute;n.</u></em></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><em>&nbsp;</em></strong></span></span></span></p>\n        \n        <p style=\"margin-left:78px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Presentaci&oacute;n de documento de Solicitud de Licencia. El solicitante tendr&aacute; que&nbsp; adjuntar dicho documento previamente rellenado en el canal </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>#solicitudes_pnp. </strong></span></span></span></p>\n        \n        <p style=\"margin-left:78px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">La solicitud ser&aacute; evaluada por un cargo superior de la Polic&iacute;a, el cual&nbsp; posteriormente le informara por DM si es Aprobado o Negado. Si su solicitud es&nbsp; Aprobada, se le informara tambi&eacute;n el d&iacute;a y la hora para su entrevista.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:78px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El solicitante tendr&aacute; que apersonarse a su entrevista el d&iacute;a y la hora indicada&nbsp; llevando parte de los requisitos anteriormente mencionados. As&iacute; mismo se le&nbsp; cuestionara sobre el uso de Licencia.</span></span></span></p>\n        \n        <p style=\"margin-left:120px; margin-right:61px; text-align:justify\">&nbsp;</p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">13</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh4.googleusercontent.com/1zyzP4S-VkvkctITDRDZjH2aTij3WOsuCiE1CTddewPSTjveQ_pmew6CGtiMsb4jAsrZIAvI6-JuiT6a2y2ZoS_qBtuDMon6pDukU2GtKJTrJhIXgxpoQtA8q-tVSE-C6PYC0k5u\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        \n        <p style=\"margin-left:78px; margin-right:-1px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">La licencia de armas ser&aacute; otorgada siempre y cuando sean validados los </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"> requisitos previos. Adem&aacute;s, se informa que dicha licencia tiene vigencia de 1&nbsp; mes, teniendo la posibilidad renovarlo si lo requiere.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Nota. </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Si el solicitante no se apersona en la hora y fecha Indicada, tendr&aacute; derecho a justificar&nbsp; solo una vez el motivo de su ausencia. Posteriormente si se agenda una segunda entrevista y&nbsp; este no se apersona, el solicitante pasara a la &uacute;ltima fila de espera de Solicitudes de Licencias.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:45px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>5.2 Renovaci&oacute;n de Vigencia de Licencia de Armas.&nbsp;</strong></span></span></span></p>\n        \n        <p style=\"margin-left:68px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><em><u>Requisitos:</u></em></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><em>&nbsp;</em></strong></span></span></span></p>\n        \n        <p style=\"margin-left:94px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Documento de Identidad.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:94px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">No contar con antecedentes cometidos por Delitos Graves.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:94px; margin-right:61px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Test Psicol&oacute;gico vigente (renovado), el cual es tramitado en las Instalaciones&nbsp; de Essalud.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:94px\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Pago de $10K por derecho de tr&aacute;mite.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:68px\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><em><u>Procedimiento de Renovaci&oacute;n.</u></em></strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong><em>&nbsp;</em></strong></span></span></span></p>\n        \n        <p style=\"margin-left:93px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\"><span style=\"color:#000000\">\u2714 </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El interesado tendr&aacute; que apersonarse a la comisaria y consultar si se encuentra&nbsp; un personal de alto grado que pueda realizarle el tr&aacute;mite de renovaci&oacute;n de su&nbsp; licencia (Prohibido hacer esta consulta v&iacute;a </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>/twt </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">o </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>/anon</strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:20px; text-align:center\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">___________________________________________________________________________&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px\"><span style=\"font-size:16.079999923706055pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Nota</strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">. Para poder desarrollar de forma &oacute;ptima el desarrollo de la solicitud de licencia de&nbsp; armas (Punto 5). Se requiere el apoyo del gobierno, realizado:&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El cambio de nombre al canal actual </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>#postulacion_pnp </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">por el nombre </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>#solicitudes_pnp, </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">el&nbsp; cual ser&aacute; utilizado tanto para solicitud de licencia de armas y solicitudes de Postulaci&oacute;n a la&nbsp; polic&iacute;a, cuyos procedimientos ser&aacute;n posteados en el canal </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>#diario el trome</strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:21px; margin-right:61px; text-align:justify\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">El canal </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>#solicitudes_pnp </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">deber&aacute; mantenerse con la opci&oacute;n de no ver el contenido del mismo&nbsp; o no mostrar historial para los ciudadanos, pero si podr&aacute;n ingresar mensajes, con el &uacute;nico&nbsp; objetivo de mantener la informaci&oacute;n ingresada como confidencial y cuyo acceso o permisos&nbsp; solo podr&aacute; ser visto por Personal de la polic&iacute;a que son altos cargos. Para lo cual ser&iacute;a necesario&nbsp; crear un rol especifico donde este personal tenga permiso a ver el contenido; y a&ntilde;adir&nbsp; reacciones (</span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\"><strong>Ejm: </strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#000000\">Evaluador).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:176px\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>Polic&iacute;a Nacional del Per&uacute; &ndash; Intocables RP.</strong></span></span></span></p>\n        \n        <p style=\"margin-right:77px; text-align:right\"><span style=\"font-size:7.920000076293945pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">INTOCABLES RP </span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><span style=\"background-color:#c00000\">14</span></span></span></span><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\">&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-right:-1px; text-align:right\"><span style=\"font-size:11.039999961853027pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"color:#ffffff\"><img src=\"https://lh4.googleusercontent.com/1zyzP4S-VkvkctITDRDZjH2aTij3WOsuCiE1CTddewPSTjveQ_pmew6CGtiMsb4jAsrZIAvI6-JuiT6a2y2ZoS_qBtuDMon6pDukU2GtKJTrJhIXgxpoQtA8q-tVSE-C6PYC0k5u\" style=\"height:74px; width:68px\" /></span></span></span></p>\n        </div>\n        "
              };
              this.editorData = this.forum.container;
            }

            if (this.rutaActiva.snapshot.params.container == "reglamento-mecanico") {
              this.forum = null;
              this.editorData = null;
              this.existForun = true;
              this.forum = {
                "urlUserAvatar": "https://cdn.discordapp.com/avatars/466723213724876801/a_073d4d7e0b5e57667fe9882cd7c1fd29.gif",
                "datetime": "30.08.2019",
                "rol": "senior",
                "titlePost": "Reglamento Mecanico",
                "nickname": "! Lil Peluchin",
                "bolComents": false,
                "temas": 2,
                "container": "<p style=\"margin-left:48px; margin-right:79px; text-align:center\"><span style=\"color:#ecf0f1\"><span style=\"font-size:15.960000038146973pt\"><span style=\"font-family:Calibri,sans-serif\"><strong>-Reglamento Mec&aacute;nico- </strong></span></span></span></p>\n\n        <p style=\"margin-left:48px; margin-right:79px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Se encuentra totalmente prohibido realizar actos il&iacute;citos estando en servicio. </span><br />\n        <span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">En caso de cometer actos il&iacute;citos fuera de servicio y ser reconocido por las&nbsp; autoridades, las mismas tienen el derecho de presentar una denuncia formal ante&nbsp; el jefe de mec&aacute;nicos. La sanci&oacute;n queda a disposici&oacute;n de la administraci&oacute;n del taller&nbsp; dependiendo la gravedad de la denuncia.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Est&aacute; prohibido robar o asesinar a un mec&aacute;nico en servicio, en caso esto ocurra, se&nbsp; deber&aacute; continuar con el rol y reportar v&iacute;a /help o ticket el hecho.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:82px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Al acudir a una alerta siempre se deber&aacute; portar un bid&oacute;n de gasolina y linterna. </span><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">En todo momento se deber&aacute; mostrar respeto ante y con la clientela, caso contrario se le podr&iacute;a colocar una sanci&oacute;n y/o anotaci&oacute;n en incidencias.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:78px; text-align:justify\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Al entrar en servicio, el mec&aacute;nico debe anunciar v&iacute;a /twt que se encuentra en&nbsp; servicio, indicando su nombre completo, rango y el tipo de trabajos que puede&nbsp; realizar.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:40px; margin-right:78px; text-align:right\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Siempre que se est&eacute; en servicio se deber&aacute; vestir la ropa de trabajo y estar&nbsp; conectado a la radio (Discord), donde se deber&aacute; registrar en el apartado respectivo, la hora de entrada y salida, en caso contrario esto podr&iacute;a anotarse en incidencias.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:78px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Esta totalmente prohibido portar cualquier tipo de armas (excepto linterna) o&nbsp; m&aacute;scaras estando en servicio.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:78px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Esta totalmente prohibido el faltar el respeto a un cliente o compa&ntilde;ero, sin&nbsp; importar el rango, de ser as&iacute; esto conllevar&iacute;a a una sanci&oacute;n.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Todo mec&aacute;nico debe identificarse con nombre y rango cuando alguien lo requiera. </span><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Los seguros vehiculares solo podr&aacute;n ser otorgados por el rango de experimentado&nbsp; en adelante, en caso de que un rango inferior lo remita, este deber&aacute; correr con los&nbsp; gastos de la emisi&oacute;n de un nuevo seguro, redactado por la persona pertinente. </span><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Los seguros vehiculares tienen una validez m&aacute;xima de 1 mes real. </span><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Si un mec&aacute;nico instala una o varias mejoras de forma indebida estas ser&aacute;n pagadas por dicha persona.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Esta prohibido vender kits a civiles. (Sanci&oacute;n strike/ban)&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Cuando no se encuentre el jefe de mec&aacute;nicos los que quedan a cargo del taller son&nbsp; los gerentes.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:78px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Nadie podr&aacute; tomar decisiones que involucren los intereses del taller mientras este&nbsp; no haya sido consultado y aprobado con el o los jefes de mec&aacute;nicos previamente. </span><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Al recibir una alerta es obligatorio responder al cliente que se esta en camino y de&nbsp; presentar retrasos tambi&eacute;n informar de ello.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px; text-align:justify\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Ante una falta de respeto por parte del cliente el mec&aacute;nico tiene la potestad de&nbsp; negarse a brindar el servicio ya sea tuning o reparaci&oacute;n. (Esto podr&iacute;a llevar a una&nbsp; inclusi&oacute;n en la lista negra, neg&aacute;ndole cualquier tipo de servicios prestados por el&nbsp; taller).&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px; text-align:justify\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">El taller y sus alrededores son considerados zona segura por ende est&aacute; totalmente&nbsp; prohibido iniciar roles agresivos dentro del taller (esto incluye toda la periferia de&nbsp; &eacute;ste hasta sus l&iacute;mites exteriores).</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Esta totalmente prohibido que los mec&aacute;nicos oculten en el taller a personas&nbsp; buscadas por la justicia.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:78px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Notificar al cliente que si no paga su deuda durante las pr&oacute;ximas 6hs (OOC), se le&nbsp; a&ntilde;adir&aacute; a la lista negra, indic&aacute;ndole que no podr&aacute; utilizar ning&uacute;n servicio de taller. </span><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Est&aacute; prohibido ponerse en servicio para reparar o aplicar tuning solo un veh&iacute;culo y&nbsp; volver a salir despu&eacute;s de arreglarlo o mejorarlo. En caso de ser encontrado&nbsp; realizando esto, ser&aacute; motivo de una sanci&oacute;n y anotaci&oacute;n en incidencias. </span><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Esta totalmente prohibido que un mec&aacute;nico aplique mejoras o repare su veh&iacute;culo&nbsp; personal.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:78px; text-align:justify\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Esta totalmente prohibido quedarse AFK estando en servicio, en caso de ser&nbsp; necesario estar AFK por un tiempo prolongado debe realizar un aviso previo por&nbsp; radio y salir de servicio.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px; text-align:justify\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">En caso de ser el &uacute;nico mec&aacute;nico en servicio y desea marcar su salida, debe avisar&nbsp; por radio de manera escrita que est&aacute; dejando la ciudad sin mec&aacute;nicos, a fin de que&nbsp; si cabe la posibilidad alguno de sus compa&ntilde;eros se ponga en servicio, previniendo&nbsp; que la ciudad se quede sin mec&aacute;nicos.&nbsp;&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Evitar dejar veh&iacute;culos de trabajo tirados o estacionados en los alrededores del&nbsp; taller.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:78px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Si es un nuevo integrante del cuerpo de mec&aacute;nicos, se le dar&aacute; el rango ayudante y&nbsp; tendr&aacute; un plazo de 5 d&iacute;as reales de prueba, plazo en el cual podr&aacute; ser despedido por falencias en su labor, considerando temas de rol, el trato con la clientela o sus&nbsp; compa&ntilde;eros, incumplimiento de las reglas, entre otros.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:72px; margin-right:79px; text-align:justify\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\">Pasado los 5 d&iacute;as de prueba, pasa a ser parte de manera oficial del cuerpo de&nbsp; mec&aacute;nicos y no podr&aacute; abandonar el trabajo hasta dentro de los 25 d&iacute;as&nbsp; subsiguientes. En caso de abandonar el taller antes del tiempo establecido, se&nbsp; aplicar&aacute; un ban de X d&iacute;as por incumplimiento de contrato.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:48px; margin-right:79px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Ser responsable con el uso de los veh&iacute;culos de la empresa, especialmente con la mesa plana y gr&uacute;a, las cuales se deben manejar con responsabilidad y no confiscar&nbsp; de forma arbitraria.&nbsp;</span></span></span></p>\n        \n        <p style=\"margin-left:40px\"><span style=\"color:#dddddd\"><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-size:12pt\"><span style=\"font-family:'Noto Sans Symbols',sans-serif\">\u2713 </span><span style=\"font-family:Calibri,sans-serif\">Esta totalmente prohibido usar veh&iacute;culos personales estando en servicio.</span></span></span></span></span></p>\n        "
              };
              this.editorData = this.forum.container;
            }

            if (this.rutaActiva.snapshot.params.container == "normas-essalud") {
              this.forum = null;
              this.editorData = null;
              this.existForun = true;
              this.forum = {
                "urlUserAvatar": "https://cdn.discordapp.com/avatars/515037229765361664/a_6826f518a974aaae2aec3691672f16ea.gif",
                "datetime": "30.05.2020",
                "rol": "support",
                "titlePost": "Normas Essalud",
                "nickname": "Maurice",
                "bolComents": false,
                "temas": 1,
                "container": "<div class=\"p-2 p-sm-2 p-md-2 p-lg-4\" style=\"background-color:#ffffff\">\n        <p style=\"text-align:center\"><span style=\"font-size:20px\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>NORMAS ESSALUD&nbsp;</strong></span></span></span></p>\n\n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">1. Cuando entre en servicio se notificar&aacute; diciendo &ldquo;El (Rango + Nombre) se encuentra de servicio.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Ejemplo: /twt Enfermero Maurice Torres en servicio.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">2. Los de ESSALUD son un cuerpo neutral, por lo tanto, jam&aacute;s podr&aacute; mentir sobre lo que pas&oacute;. Siempre se tiene que decir toda la verdad. No beneficia ni se inclina a favor de ninguna de las partes opuestas o enfrentadas en un conflicto armado.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">3. Prohibido hacer actos delictivos dentro y fuera de servicio (En caso de ser capturado por la polic&iacute;a de la ciudad, se proseguir&aacute; con la expulsi&oacute;n del cuerpo m&eacute;dico, luego de hablar con el jefe m&eacute;dico).&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">4. Llevar el uniforme completo y el veh&iacute;culo respectivo al rango. Hay dos tipos de ambulancias: el veh&iacute;culo todo terreno ser&aacute; utilizado &uacute;nicamente para ir a las alertas que se encuentran lejos de la ciudad; mientras que las grandes, para las cercanas. Esto puede variar dependiendo de la cantidad de EMS en servicio y cantidad de alertas.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">5. Llevar solamente la indumentaria de EMS, est&aacute; prohibido llevar armas, drogas, alcohol, entre otros, estando en servicio. El incumplimiento de esta regla ser&aacute; motivo de una sanci&oacute;n.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">6. Se deben respetar las leyes de tr&aacute;nsito, exceptuando cuando se tenga una alerta, pero siempre y cuando sin poner en riesgo la vida de los dem&aacute;s.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">7. Respetar a los civiles, compa&ntilde;eros y superiores.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">8. Est&aacute; totalmente prohibido quedarse AFK. En caso de necesitar estar AFK por alg&uacute;n motivo, deber&aacute; quitarse el uniforme y salir de servicio, y comunicarlo a sus compa&ntilde;eros en la radio.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">9. Al momento de estar en servicio, ser&aacute; obligatorio estar conectado a la radio, para una mejor organizaci&oacute;n de las alertas.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">10. Al momento de salirse de servicio, se deber&aacute; avisar por radio, tratando de no dejar la ciudad sin ESSALUD en momentos de alto movimiento.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">11. Las personas que tienen como causa &ldquo;Probablemente muri&oacute; por una explosi&oacute;n&rdquo; no deben ser atendidas.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">12. Est&aacute; totalmente prohibido difundir cualquier tipo de informaci&oacute;n y/o documentaci&oacute;n de civiles que se encuentre otorgada en el sistema del cuerpo m&eacute;dico (radio/discord). El incumplimiento de esta regla ser&aacute; motivo de sanci&oacute;n.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">13. El jefe, supervisores y m&eacute;dicos (con el permiso de los rangos antes mencionados) pueden activar la &ldquo;Alerta Roja&rdquo;, esta consiste que en el momento que tengamos una alta cantidad de alertas solo colocaremos dos vendas a los civiles.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>FUERA DE SERVICIO&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">1. Un personal de salud fuera de servicio NO podr&aacute; utilizar ambulancias.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">2. No se podr&aacute; poner en servicio para reanimar a X persona y volver a salir despu&eacute;s de reanimarlo. En caso de ser encontrado realizando esto, ser&aacute; motivo de Advertencia. 3. Cuando te salgas del servicio tendr&aacute;s que avisar a los compa&ntilde;eros mediante la radio y notificar por el chat mediante /twt junto a su rango y nombre.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Ejemplo: /twt Enfermero Ignacio Cicero fuera de servicio. &iexcl;Valoren sus vidas! </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>LLAMADOS&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">1. Las llamadas policiales tienen prioridad ante cualquier otra llamada.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">2. Cualquier llamada faltando respeto al cuerpo m&eacute;dico no ser&aacute; atendida. 3. Las llamadas que se encuentren en el agua NO ser&aacute;n atendidas.</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">4. Las llamadas fuera de la ciudad pueden ser atendidas por cualquier ESSALUD sin importar el rango, siempre yendo sin acompa&ntilde;antes ya que al ser una larga distancia se estar&iacute;a ocupando m&aacute;s personal del necesario por un largo tiempo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>RADIO&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">1. La radio es un elemento de trabajo que debe utilizarse para no atender dos param&eacute;dicos la misma llamada. (Radio EMS)&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">2. Mantener el orden y respeto en todo momento. Se recomienda evitar hablar temas externos en momentos de alta actividad de alertas, debido a que pueden incomodar y/o interrumpir a los dem&aacute;s durante la asistencia m&eacute;dica.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">3. Cuando un compa&ntilde;ero est&aacute; hablando de algo importante no hay que interrumpirlo. 4. En caso de tener alguna duda se podr&aacute; preguntar a un rango superior o al jefe sin problemas.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">5. Se recomienda no utilizar la radio para conversar entre 2 personas que se encuentran al lado, ya que tranquilamente pueden hablar in-game.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>ROBOS O TIROTEOS&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">1. Al momento de acudir a un robo o tiroteo, recordar de posicionarse a una distancia prudencial, es decir 100 metros o m&aacute;s.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">2. Para proceder se deber&aacute; preguntar por /twt EMS Esperando indicaciones en tiroteo (Calle y/o ubicaci&oacute;n)&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Ejem: /twt EMS esperando indicaciones en tiroteo de West Mirror cerca de la tienda. 3. Al momento de recibir una respuesta para poder proceder, se deber&aacute; dar prioridad a reanimar al grupo vencedor y seguir instrucciones dadas por este.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">4. Siempre se le cobra al grupo perdedor. (Procedimientos policiales nunca se cobra). </span></span></span><span style=\"font-size:9.007556915283203pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Nota: Recuerden que el mal realizar de estos procedimientos es motivo de Advertencia.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>PROCEDIMIENTO PARA CIVILES HERIDOS&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">1. En primer lugar, y muy importante, cerciorarse de que nos encontramos en una posici&oacute;n segura.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">2. Existen m&uacute;ltiples causas de muerte, y para cada una, se debe proceder de diferente forma. 3. Debemos ver el entorno, si es que es un posible tiroteo que est&aacute; empezando y/o hay personas alrededor sospechosas.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">4. Si es m&aacute;s de un civil, procurar primordialmente reanimar a todos los civiles antes de colocar vendajes.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">5. Busca las heridas, los orificios de entrada y salida si hubiera heridas de bala, analiza el cuerpo de la v&iacute;ctima en busca de hemorragias.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">6. Contener hemorragias y cubrir heridas dependiendo la parte del cuerpo en la que se encuentren.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">7. Aplicar RCP al reanimar al civil o retirar las balas y suturar las heridas, en caso de que sea necesario y dependiendo de la causa.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">8. Aplicar vendas en caso de ser necesario.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">9. Al momento de realizar este proceso, no olvidar el uso del /do para dar m&aacute;s juego al rol. </span></span></span><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>TIPOS DE TRATAMIENTOS&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">\u2794 Vendajes: Casi para todo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">\u2794 Pomada: Para desinflamar heridas/hemorragias.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">\u2794 Alcohol: Para desinfectar heridas.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">\u2794 Curitas: Para heridas leves.</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>TIPOS DE MEDICAMENTOS&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">\u2794 Aspirina: Casi para todo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">\u2794 Simvastatina: Para controlar el colesterol.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">\u2794 Omeprazol: Para la acidez de est&oacute;mago.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">\u2794 Ramipril: Para la hipertensi&oacute;n.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>TIERRA DE NADIE&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><em>&quot;LOS BARRACONES&quot;&nbsp;</em></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>REGLAS:&nbsp;</strong></span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">1. Se puede disparar sin rol previo.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">2. Valorar la vida queda inhabilitado.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">3. No se permite el uso de veh&iacute;culos dentro de la zona.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">4. Al morir dentro de la zona es PK autom&aacute;tico y tienes que forzar la reaparici&oacute;n. 5. Puedes robar las casas dentro de la zona.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">6. Puedes robar a las personas dentro de la zona.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">7. Las facciones legales tienen prohibido ir a este punto.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">8. Est&aacute; prohibido mandar alerta al ESSALUD. (Sancionable)&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">9. M&aacute;ximo de participantes por grupo: 8 personas.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">10. Los chalecos est&aacute;n permitidos.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">11. Solo est&aacute; permitido matar con pistolas.&nbsp;</span></span></span></p>\n        \n        <p><span style=\"font-size:11.004231452941895pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">12. No es necesario esperar los 20 min para regresar al punto.</span></span></span></p>\n        \n        <p>&nbsp;</p>\n        </div>"
              };
              this.editorData = this.forum.container;
            }
          }
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          this.editorData = event.editor.getData();
          console.log(event.editor.getData());
        }
      }]);

      return ForoContainerComponent;
    }();

    ForoContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ForoContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-foro-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./foro-container.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/component/foro-container/foro-container.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./foro-container.component.scss */
      "./src/app/component/foro-container/foro-container.component.scss"))["default"]]
    })], ForoContainerComponent);
    /***/
  },

  /***/
  "./src/app/component/foro/foro.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/component/foro/foro.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentForoForoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button {\n  background-color: #575757 !important;\n  /* Green */\n  border: none;\n  border-radius: 5%;\n  color: white;\n  text-decoration: none;\n  font-size: 16px;\n}\n\n.disabled {\n  cursor: not-allowed;\n}\n\n.font-color-bot {\n  color: #b3b3b3;\n}\n\n.border-background {\n  border: 5px solid #303030;\n}\n\n.border-radius {\n  border-radius: 40px !important;\n}\n\n.padding-inf {\n  padding: 0.9em 0.78em;\n}\n\n.padding-not {\n  padding: 0.9em 0.6em;\n}\n\n.padding-bug {\n  padding: 0.9em 0.5em;\n}\n\n.article {\n  box-shadow: 2px 2px 2px 1px rgba(17, 17, 17, 0.247);\n  background-color: #424242;\n}\n\n.border-bot {\n  border-bottom: 1px solid #303030;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9Eb2N1bWVudHMvRkUvbmV3cHJveWVjdC9pbnRvU3RhdGljL3NyYy9hcHAvY29tcG9uZW50L2Zvcm8vZm9yby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2Zvcm8vZm9yby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9DQUFBO0VBQXNDLFVBQUE7RUFDdEMsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBRUksbUJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFFSSw4QkFBQTtBQ0dKOztBREFBO0VBQ0kscUJBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0FDSUo7O0FERkE7RUFDSSxvQkFBQTtBQ0tKOztBREhBO0VBQ0ksbURBQUE7RUFDQSx5QkFBQTtBQ01KOztBREpBO0VBQ0ksZ0NBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb3JvL2Zvcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTcgIWltcG9ydGFudDsgLyogR3JlZW4gKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmRpc2FibGVkIHtcbiAgIC8vIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG4uZm9udC1jb2xvci1ib3R7XG4gICAgY29sb3I6ICNiM2IzYjM7XG59IFxuLmJvcmRlci1iYWNrZ3JvdW5ke1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICAjMzAzMDMwO1xufSBcbi5ib3JkZXItcmFkaXVze1xuICAgXG4gICAgYm9yZGVyLXJhZGl1czo0MHB4ICAgIWltcG9ydGFudDtcblxuICB9XG4ucGFkZGluZy1pbmZ7XG4gICAgcGFkZGluZzogMC45ZW0gMC43OGVtO1xufVxuLnBhZGRpbmctbm90e1xuICAgIHBhZGRpbmc6IDAuOWVtIDAuNmVtO1xufVxuLnBhZGRpbmctYnVne1xuICAgIHBhZGRpbmc6IDAuOWVtIDAuNWVtO1xufVxuLmFydGljbGV7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMTcsIDE3LCAxNywgMC4yNDcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG59XG4uYm9yZGVyLWJvdHtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMzAzMDMwO1xufSIsIi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU3ICFpbXBvcnRhbnQ7XG4gIC8qIEdyZWVuICovXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5mb250LWNvbG9yLWJvdCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuXG4uYm9yZGVyLWJhY2tncm91bmQge1xuICBib3JkZXI6IDVweCBzb2xpZCAjMzAzMDMwO1xufVxuXG4uYm9yZGVyLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmctaW5mIHtcbiAgcGFkZGluZzogMC45ZW0gMC43OGVtO1xufVxuXG4ucGFkZGluZy1ub3Qge1xuICBwYWRkaW5nOiAwLjllbSAwLjZlbTtcbn1cblxuLnBhZGRpbmctYnVnIHtcbiAgcGFkZGluZzogMC45ZW0gMC41ZW07XG59XG5cbi5hcnRpY2xlIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMTcsIDE3LCAxNywgMC4yNDcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuXG4uYm9yZGVyLWJvdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzAzMDMwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/foro/foro.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/foro/foro.component.ts ***!
    \**************************************************/

  /*! exports provided: ForoComponent */

  /***/
  function srcAppComponentForoForoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForoComponent", function () {
      return ForoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");

    var ForoComponent = /*#__PURE__*/function () {
      function ForoComponent(rutaActiva) {
        _classCallCheck(this, ForoComponent);

        this.rutaActiva = rutaActiva;
        this.existForun = false;
      }

      _createClass(ForoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forumss();
          this.coche = {
            marca: this.rutaActiva.snapshot.params.blog,
            modelo: "aasfwasf"
          }; //   console.log(this.rutaActiva.snapshot.params.blog);
        }
      }, {
        key: "forumss",
        value: function forumss() {
          if (this.rutaActiva.snapshot.params.blog == "informacion") {
            this.forum = null;
            this.existForun = true;
            this.foroAutor = [{
              "urlUserAvatar": "https://cdn.discordapp.com/avatars/466723213724876801/a_073d4d7e0b5e57667fe9882cd7c1fd29.gif",
              "datetime": "03-12-2020",
              "rol": "senior",
              "titlePost": "Reglamento General",
              "urlTitle": "reglamento-general",
              "nickname": "! Lil Peluchin",
              "bolComents": false
            }, {
              "urlUserAvatar": "https://cdn.discordapp.com/avatars/652196208726638592/07299d18c59eca76344dd970d768bdbd.png",
              "datetime": "03-12-2020",
              "rol": "admin",
              "titlePost": "Normas Generales de la Policía",
              "urlTitle": "normas-generales-de-la-policía",
              "nickname": "IgnL",
              "bolComents": false
            }, {
              "urlUserAvatar": "https://cdn.discordapp.com/avatars/515037229765361664/a_6826f518a974aaae2aec3691672f16ea.gif",
              "datetime": "03-13-2020",
              "rol": "support",
              "titlePost": "Normas Essalud",
              "urlTitle": "normas-essalud",
              "nickname": "Maurice",
              "bolComents": false
            }, {
              "urlUserAvatar": "https://cdn.discordapp.com/avatars/466723213724876801/a_073d4d7e0b5e57667fe9882cd7c1fd29.gif",
              "datetime": "03-12-2020",
              "rol": "senior",
              "titlePost": "Reglamento Mecanico",
              "urlTitle": "reglamento-mecanico",
              "nickname": "! Lil Peluchin",
              "bolComents": false
            }];
            this.forum = {
              "logo": "INF",
              "styleLogo": "inf",
              "title": "Información",
              "subtitle": "Reglas Generales, Policiales, medico",
              "autorInfo": this.foroAutor
            };
          }
        }
      }]);

      return ForoComponent;
    }();

    ForoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ForoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-foro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./foro.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./src/app/component/foro/foro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./foro.component.scss */
      "./src/app/component/foro/foro.component.scss"))["default"]]
    })], ForoComponent);
    /***/
  },

  /***/
  "./src/app/pipe/safe-html.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipe/safe-html.pipe.ts ***!
    \****************************************/

  /*! exports provided: SafeHtmlPipe */

  /***/
  function srcAppPipeSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
      return SafeHtmlPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dompurify */
    "../node_modules/dompurify/dist/purify.js");
    /* harmony import */


    var dompurify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_3__);

    var SafeHtmlPipe = /*#__PURE__*/function () {
      function SafeHtmlPipe(sanitizer) {
        _classCallCheck(this, SafeHtmlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(value, type) {
          var sanitizedContent = dompurify__WEBPACK_IMPORTED_MODULE_3___default.a.sanitize(value);
          return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'safeHtml'
    })], SafeHtmlPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "../node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/marcos/Documents/FE/newproyect/intoStatic/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map