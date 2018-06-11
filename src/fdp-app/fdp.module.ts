// Angular
import { NgModule } from "@angular/core";
import { BrowserModule, Meta, Title } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";

import "hammerjs";

import { PageNotFoundComponent } from "../fdp-pageNotFound/fdp-pageNotFound.component";

// Apollo GraphQL
import { Apollo, ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import {
  HttpLink,
  HttpLinkModule,
  HttpLinkHandler
} from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

// MaterialConfig
import { FdpMaterialModule } from "../fdp-material/fdp-material.module";

// App
import { FdpAppComponent } from "./fdp.component";

// Fdp Modules
import { FdpRoutingModule } from "./fdp.routing";
import { FdpLayoutModule } from "../fdp-layout/fdp-layout.module";
import { FdpBlogModule } from "../fdp-blog/fdp-blog.module";
import { FdpIndexModule } from "../fdp-index/fdp-index.module";
import { FdpMusicModule } from "../fdp-music/fdp-music.module";
import { FdpUserModule } from "../fdp-user/fdp-user.module";
import { FdpVideoModule } from "../fdp-video/fdp-video.module";
import { FdpBoxModule } from "../fdp-box/fdp-box.module";
import { FdpNigmeModule } from "../fdp-nigme/fdp-nigme.module";
import { FdpGalerieModule } from "../fdp-galerie/fdp-galerie.module";
import { environment } from "../environments/environment";
import { FdpSoundModule } from "../fdp-sound/fdp-sound.module";
import { FdpLouModule } from "../fdp-lou/fdp-lou.module";
import { FdpPortfolioModule } from "../fdp-portfolio/fdp-portfolio.module";
import { ApolloLink, concat } from "apollo-link";

@NgModule({
  declarations: [
    // Routing
    // routingComponents,
    // Appli
    FdpAppComponent,
    // Spéciaux
    PageNotFoundComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    FormsModule,

    // Material
    FdpMaterialModule,

    // Apollo
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,

    // Structure HTML
    FdpLayoutModule,

    // Modules services
    FdpSoundModule,

    // Pages
    FdpIndexModule,
    FdpBlogModule,
    FdpBoxModule,
    FdpLouModule,
    FdpMusicModule,
    FdpNigmeModule,
    FdpGalerieModule,
    FdpVideoModule,
    FdpUserModule,
    FdpPortfolioModule,

    // Routing
    FdpRoutingModule
  ],
  providers: [
    // Angular
    Title,
    Meta
    // {
    //   provide: APOLLO_OPTIONS,
    //   useFactory: createApollo,
    //   deps: [HttpLink]
    // }
  ],
  bootstrap: [FdpAppComponent]
})
export class FdpModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({
      uri: environment.production
        ? "https://api.aifedespaix.com/graphql"
        : "http://localhost:3000/graphql"
    });

    const authMiddleware = new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      operation.setContext({
        headers: new HttpHeaders().set(
          "Authorization",
          localStorage.getItem("token") || null
        )
      });

      return forward(operation);
    });

    apollo.create({
      link: concat(authMiddleware, http),
      cache: new InMemoryCache()
    });
  }
}
