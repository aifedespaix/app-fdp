"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Angular
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// UnOfficial Angular
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
require("hammerjs");
var router_1 = require("@angular/router");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
// Apollo GraphQL
var apollo_client_1 = require("apollo-client");
var apollo_angular_1 = require("apollo-angular");
// MaterialConfig
var fdp_material_module_1 = require("../fdp-material/fdp-material.module");
// App
var app_component_1 = require("./app.component");
var forecast_component_1 = require("./forecast/forecast.component");
var index_component_1 = require("./index/index.component");
var header_component_1 = require("./layout/header/header.component");
var login_component_1 = require("./layout/header/login/login.component");
var sideNav_component_1 = require("./layout/sideNav/sideNav.component");
var samples_component_1 = require("./sampler/sample/samples.component");
var sample_detail_component_1 = require("./sampler/sample/sample-detail/sample-detail.component");
var sample_service_1 = require("./sampler/sample/sample.service");
var sample_list_component_1 = require("./sampler/sample/sample-list/sample-list/sample-list.component");
var fdp_user_login_component_1 = require("./fdpUser/fdp-user-login/fdp-user-login.component");
var appRoutes = [
    { path: '', component: index_component_1.IndexComponent, data: { title: 'Accueil' } },
    {
        path: 'samples',
        // component: SamplesComponent,
        children: [
            { path: '', component: samples_component_1.SamplesComponent, data: { title: 'Sampler' } },
            { path: ':id', component: sample_detail_component_1.SampleDetailComponent, data: { title: 'Sample' } }
        ]
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent, data: { title: 'Page introuvable' } },
];
// Apollo client
var networkInterface = apollo_client_1.createNetworkInterface({
    uri: 'http://127.0.0.1:4242/fdp-ws',
    opts: {
        credentials: 'same-origin'
    }
});
// http://dev.apollodata.com/angular2/auth.html
networkInterface.use([{
        applyMiddleware: function (req, next) {
            if (!req.options.headers) {
                req.options.headers = {}; // Create the header object if needed.
            }
            // get the authentication token from local storage if it exists
            req.options.headers.authorization = localStorage.getItem('token') || null;
            next();
        }
    }]);
var client = new apollo_client_1.ApolloClient({
    networkInterface: networkInterface
});
function provideClient() {
    return client;
}
exports.provideClient = provideClient;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            // Appli
            app_component_1.AppComponent,
            // Index
            index_component_1.IndexComponent,
            // Header
            header_component_1.HeaderComponent,
            login_component_1.LoginComponent,
            // SideNav
            sideNav_component_1.SideNavComponent,
            // Useless
            forecast_component_1.ForecastComponent,
            // FDPComponents
            samples_component_1.SamplesComponent,
            sample_detail_component_1.SampleDetailComponent,
            // Spéciaux
            page_not_found_component_1.PageNotFoundComponent,
            sample_list_component_1.SampleListComponent,
            fdp_user_login_component_1.FdpUserLoginComponent,
        ],
        imports: [
            // Angular
            platform_browser_1.BrowserModule,
            fdp_material_module_1.FdpMaterialModule,
            forms_1.FormsModule,
            // Apollo GraphQL
            apollo_angular_1.ApolloModule.forRoot(provideClient),
            // UnOfficial Angular
            ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
            // Routing
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        providers: [
            // Angular
            platform_browser_1.Title,
            // FDPComponents
            sample_service_1.SampleService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
