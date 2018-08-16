System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.4.0",
    "aurelia-framework": "npm:aurelia-framework@1.3.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.2.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.4",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal": "npm:aurelia-pal@1.8.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.3.0",
    "aurelia-router": "npm:aurelia-router@1.6.2",
    "aurelia-templating": "npm:aurelia-templating@1.8.2",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.3",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.7.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.3.2",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "npm:bootstrap@4.1.3",
    "css": "github:systemjs/plugin-css@0.1.37",
    "fetch": "github:github/fetch@1.1.1",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "oribella-aurelia-gestures": "npm:oribella-aurelia-gestures@0.7.2",
    "text": "github:systemjs/plugin-text@0.0.11",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.4": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-templating": "npm:aurelia-templating@1.8.2"
    },
    "npm:aurelia-binding@2.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.3.0",
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.4",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.3.0",
      "aurelia-router": "npm:aurelia-router@1.6.2",
      "aurelia-templating": "npm:aurelia-templating@1.8.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.3",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.7.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.3.2"
    },
    "npm:aurelia-dependency-injection@1.4.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0"
    },
    "npm:aurelia-fetch-client@1.4.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-framework@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@2.1.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.8.2"
    },
    "npm:aurelia-history-browser@1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-loader-default@1.0.4": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0"
    },
    "npm:aurelia-metadata@1.0.4": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-pal-browser@1.8.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-polyfills@1.3.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-route-recognizer@1.2.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.6.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.2.0"
    },
    "npm:aurelia-task-queue@1.3.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-templating-binding@1.4.3": {
      "aurelia-binding": "npm:aurelia-binding@2.1.4",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-templating": "npm:aurelia-templating@1.8.2"
    },
    "npm:aurelia-templating-resources@1.7.1": {
      "aurelia-binding": "npm:aurelia-binding@2.1.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.8.2"
    },
    "npm:aurelia-templating-router@1.3.2": {
      "aurelia-binding": "npm:aurelia-binding@2.1.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.6.2",
      "aurelia-templating": "npm:aurelia-templating@1.8.2"
    },
    "npm:aurelia-templating@1.8.2": {
      "aurelia-binding": "npm:aurelia-binding@2.1.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bootstrap@4.1.3": {
      "jquery": "npm:jquery@2.2.4",
      "tether": "github:HubSpot/tether@1.4.4"
    },
    "npm:buffer@5.2.0": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.37"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oribella-aurelia-gestures@0.7.2": {
      "oribella": "npm:oribella@0.8.2",
      "oribella-framework": "npm:oribella-framework@0.10.3",
      "tslib": "npm:tslib@1.9.3"
    },
    "npm:oribella-framework@0.10.3": {
      "tslib": "npm:tslib@1.9.3"
    },
    "npm:oribella@0.8.2": {
      "oribella-framework": "npm:oribella-framework@0.10.3",
      "tslib": "npm:tslib@1.9.3"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  depCache: {
    "github:systemjs/plugin-text@0.0.11.js": [
      "github:systemjs/plugin-text@0.0.11/text"
    ],
    "npm:oribella-aurelia-gestures@0.7.2.js": [
      "npm:oribella-aurelia-gestures@0.7.2/oribella-aurelia-gestures"
    ],
    "npm:oribella-aurelia-gestures@0.7.2/oribella-aurelia-gestures.js": [
      "aurelia-pal",
      "./gestures"
    ],
    "npm:aurelia-pal@1.8.0.js": [
      "npm:aurelia-pal@1.8.0/aurelia-pal"
    ],
    "npm:oribella-aurelia-gestures@0.7.2/gestures.js": [
      "tslib",
      "aurelia-pal",
      "aurelia-templating",
      "aurelia-dependency-injection",
      "oribella"
    ],
    "npm:tslib@1.9.3.js": [
      "npm:tslib@1.9.3/tslib.js"
    ],
    "npm:aurelia-templating@1.8.2.js": [
      "npm:aurelia-templating@1.8.2/aurelia-templating"
    ],
    "npm:aurelia-dependency-injection@1.4.1.js": [
      "npm:aurelia-dependency-injection@1.4.1/aurelia-dependency-injection"
    ],
    "npm:oribella@0.8.2.js": [
      "npm:oribella@0.8.2/oribella"
    ],
    "npm:aurelia-dependency-injection@1.4.1/aurelia-dependency-injection.js": [
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-templating@1.8.2/aurelia-templating.js": [
      "aurelia-logging",
      "aurelia-metadata",
      "aurelia-pal",
      "aurelia-loader",
      "aurelia-path",
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-task-queue"
    ],
    "npm:oribella@0.8.2/oribella.js": [
      "oribella-framework",
      "./tap",
      "./doubletap",
      "./longtap",
      "./swipe",
      "./longtap-swipe",
      "./rotate",
      "./pinch"
    ],
    "npm:aurelia-logging@1.5.0.js": [
      "npm:aurelia-logging@1.5.0/aurelia-logging"
    ],
    "npm:aurelia-path@1.1.1.js": [
      "npm:aurelia-path@1.1.1/aurelia-path"
    ],
    "npm:aurelia-metadata@1.0.4.js": [
      "npm:aurelia-metadata@1.0.4/aurelia-metadata"
    ],
    "npm:aurelia-loader@1.0.0.js": [
      "npm:aurelia-loader@1.0.0/aurelia-loader"
    ],
    "npm:aurelia-binding@2.1.4.js": [
      "npm:aurelia-binding@2.1.4/aurelia-binding"
    ],
    "npm:oribella-framework@0.10.3.js": [
      "npm:oribella-framework@0.10.3/oribella-framework"
    ],
    "npm:aurelia-task-queue@1.3.1.js": [
      "npm:aurelia-task-queue@1.3.1/aurelia-task-queue"
    ],
    "npm:oribella@0.8.2/doubletap.js": [
      "tslib",
      "oribella-framework",
      "./tap"
    ],
    "npm:oribella@0.8.2/tap.js": [
      "tslib",
      "oribella-framework"
    ],
    "npm:oribella@0.8.2/longtap.js": [
      "tslib",
      "oribella-framework"
    ],
    "npm:oribella@0.8.2/swipe.js": [
      "tslib",
      "oribella-framework"
    ],
    "npm:oribella@0.8.2/longtap-swipe.js": [
      "tslib",
      "oribella-framework",
      "./longtap",
      "./swipe"
    ],
    "npm:oribella@0.8.2/rotate.js": [
      "tslib",
      "oribella-framework"
    ],
    "npm:oribella@0.8.2/pinch.js": [
      "tslib",
      "oribella-framework"
    ],
    "npm:oribella-framework@0.10.3/oribella-framework.js": [
      "./point",
      "./utils",
      "./listener",
      "./gesture",
      "./oribella-api"
    ],
    "npm:aurelia-metadata@1.0.4/aurelia-metadata.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-task-queue@1.3.1/aurelia-task-queue.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-loader@1.0.0/aurelia-loader.js": [
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-binding@2.1.4/aurelia-binding.js": [
      "aurelia-logging",
      "aurelia-pal",
      "aurelia-task-queue",
      "aurelia-metadata"
    ],
    "npm:oribella-framework@0.10.3/utils.js": [
      "tslib"
    ],
    "npm:oribella-framework@0.10.3/gesture.js": [
      "tslib",
      "./utils"
    ],
    "npm:oribella-framework@0.10.3/listener.js": [
      "tslib",
      "./utils"
    ],
    "npm:oribella-framework@0.10.3/oribella-api.js": [
      "./engine",
      "./flows/ms-pointer",
      "./flows/pointer",
      "./flows/touch",
      "./flows/mouse",
      "./listener",
      "./utils"
    ],
    "npm:oribella-framework@0.10.3/engine.js": [
      "./registry",
      "./listener",
      "./utils",
      "./listener-handle"
    ],
    "npm:oribella-framework@0.10.3/flows/ms-pointer.js": [
      "tslib",
      "../flow",
      "./pointer"
    ],
    "npm:oribella-framework@0.10.3/flows/pointer.js": [
      "tslib",
      "../flow",
      "../point"
    ],
    "npm:oribella-framework@0.10.3/flows/touch.js": [
      "tslib",
      "../flow",
      "../point"
    ],
    "npm:oribella-framework@0.10.3/flows/mouse.js": [
      "tslib",
      "../flow",
      "../point"
    ],
    "npm:oribella-framework@0.10.3/registry.js": [
      "./listener",
      "./utils"
    ],
    "npm:oribella-framework@0.10.3/flow.js": [
      "tslib"
    ],
    "npm:jquery@2.2.4.js": [
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "github:github/fetch@1.1.1.js": [
      "github:github/fetch@1.1.1/fetch.js"
    ],
    "github:systemjs/plugin-css@0.1.37.js": [
      "github:systemjs/plugin-css@0.1.37/css"
    ],
    "npm:bootstrap@4.1.3.js": [
      "npm:bootstrap@4.1.3/dist/js/bootstrap"
    ],
    "npm:bootstrap@4.1.3/dist/js/bootstrap.js": [
      "jquery",
      "tether"
    ],
    "github:HubSpot/tether@1.4.4.js": [
      "github:HubSpot/tether@1.4.4/js/tether"
    ],
    "app.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-event-aggregator",
      "./services/data-service.js"
    ],
    "main.js": [
      "bootstrap",
      "bootstrap/dist/css/bootstrap.min.css!css"
    ],
    "pages/fav.js": [
      "aurelia-framework",
      "aurelia-router",
      "jquery",
      "../helpers/date.js",
      "../services/data-service.js"
    ],
    "pages/guest.js": [
      "aurelia-framework",
      "aurelia-router",
      "jquery",
      "../helpers/inputs.js",
      "../services/data-service.js"
    ],
    "pages/print.js": [
      "aurelia-framework",
      "aurelia-router",
      "jquery",
      "./db-service.js"
    ],
    "pages/register.js": [
      "aurelia-framework",
      "aurelia-router",
      "../services/data-service.js",
      "../helpers/date.js"
    ],
    "pages/search.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-event-aggregator",
      "../services/data-service.js",
      "jquery"
    ],
    "pages/visit.js": [
      "aurelia-framework",
      "aurelia-router",
      "jquery",
      "../services/data-service.js"
    ],
    "services/data-service.js": [
      "aurelia-framework",
      "./database-service.js"
    ],
    "services/database-service.js": [
      "aurelia-framework",
      "./fetch-service.js"
    ],
    "services/fetch-service.js": [
      "aurelia-framework",
      "aurelia-fetch-client"
    ],
    "npm:aurelia-logging-console@1.0.0.js": [
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console"
    ],
    "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js": [
      "aurelia-logging"
    ],
    "npm:aurelia-history-browser@1.2.0.js": [
      "npm:aurelia-history-browser@1.2.0/aurelia-history-browser"
    ],
    "npm:aurelia-history-browser@1.2.0/aurelia-history-browser.js": [
      "aurelia-pal",
      "aurelia-history"
    ],
    "npm:aurelia-history@1.1.0.js": [
      "npm:aurelia-history@1.1.0/aurelia-history"
    ],
    "npm:aurelia-loader-default@1.0.4.js": [
      "npm:aurelia-loader-default@1.0.4/aurelia-loader-default"
    ],
    "npm:aurelia-loader-default@1.0.4/aurelia-loader-default.js": [
      "aurelia-loader",
      "aurelia-pal",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating-router@1.3.2.js": [
      "npm:aurelia-templating-router@1.3.2/aurelia-templating-router"
    ],
    "npm:aurelia-templating-router@1.3.2/aurelia-templating-router.js": [
      "aurelia-router",
      "./route-loader",
      "./router-view",
      "./route-href"
    ],
    "npm:aurelia-router@1.6.2.js": [
      "npm:aurelia-router@1.6.2/aurelia-router"
    ],
    "npm:aurelia-router@1.6.2/aurelia-router.js": [
      "aurelia-logging",
      "aurelia-route-recognizer",
      "aurelia-dependency-injection",
      "aurelia-history",
      "aurelia-event-aggregator"
    ],
    "npm:aurelia-route-recognizer@1.2.0.js": [
      "npm:aurelia-route-recognizer@1.2.0/aurelia-route-recognizer"
    ],
    "npm:aurelia-event-aggregator@1.0.1.js": [
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator"
    ],
    "npm:aurelia-route-recognizer@1.2.0/aurelia-route-recognizer.js": [
      "aurelia-path"
    ],
    "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js": [
      "aurelia-logging"
    ],
    "npm:aurelia-templating-router@1.3.2/route-loader.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-router",
      "aurelia-path",
      "aurelia-metadata",
      "./router-view"
    ],
    "npm:aurelia-templating-router@1.3.2/router-view.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-templating",
      "aurelia-router",
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-router@1.3.2/route-href.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-router",
      "aurelia-pal",
      "aurelia-logging"
    ],
    "npm:aurelia-templating-resources@1.7.1.js": [
      "npm:aurelia-templating-resources@1.7.1/aurelia-templating-resources"
    ],
    "npm:aurelia-templating-resources@1.7.1/aurelia-templating-resources.js": [
      "./compose",
      "./if",
      "./else",
      "./with",
      "./repeat",
      "./show",
      "./hide",
      "./sanitize-html",
      "./replaceable",
      "./focus",
      "aurelia-templating",
      "./css-resource",
      "./html-sanitizer",
      "./attr-binding-behavior",
      "./binding-mode-behaviors",
      "./throttle-binding-behavior",
      "./debounce-binding-behavior",
      "./self-binding-behavior",
      "./signal-binding-behavior",
      "./binding-signaler",
      "./update-trigger-binding-behavior",
      "./abstract-repeater",
      "./repeat-strategy-locator",
      "./html-resource-plugin",
      "./null-repeat-strategy",
      "./array-repeat-strategy",
      "./map-repeat-strategy",
      "./set-repeat-strategy",
      "./number-repeat-strategy",
      "./repeat-utilities",
      "./analyze-view-factory",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.7.1/repeat-strategy-locator.js": [
      "./null-repeat-strategy",
      "./array-repeat-strategy",
      "./map-repeat-strategy",
      "./set-repeat-strategy",
      "./number-repeat-strategy"
    ],
    "npm:aurelia-templating-resources@1.7.1/map-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.7.1/set-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.7.1/number-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.7.1/aurelia-hide-style.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.7.1/compose.js": [
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.7.1/if.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "./if-core"
    ],
    "npm:aurelia-templating-resources@1.7.1/else.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "./if-core"
    ],
    "npm:aurelia-templating-resources@1.7.1/with.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/repeat.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-templating",
      "./repeat-strategy-locator",
      "./repeat-utilities",
      "./analyze-view-factory",
      "./abstract-repeater"
    ],
    "npm:aurelia-templating-resources@1.7.1/show.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-pal",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.7.1/hide.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-pal",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.7.1/sanitize-html.js": [
      "aurelia-binding",
      "aurelia-dependency-injection",
      "./html-sanitizer"
    ],
    "npm:aurelia-templating-resources@1.7.1/replaceable.js": [
      "aurelia-dependency-injection",
      "aurelia-templating"
    ],
    "npm:aurelia-templating-resources@1.7.1/focus.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-task-queue",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.7.1/css-resource.js": [
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-dependency-injection",
      "aurelia-path",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.7.1/attr-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/binding-mode-behaviors.js": [
      "aurelia-binding",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating-resources@1.7.1/throttle-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/debounce-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/signal-binding-behavior.js": [
      "aurelia-binding",
      "./binding-signaler"
    ],
    "npm:aurelia-templating-resources@1.7.1/binding-signaler.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/self-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/update-trigger-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/array-repeat-strategy.js": [
      "./repeat-utilities",
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/html-resource-plugin.js": [
      "aurelia-templating",
      "./dynamic-element"
    ],
    "npm:aurelia-templating-resources@1.7.1/repeat-utilities.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.7.1/dynamic-element.js": [
      "aurelia-templating"
    ],
    "npm:aurelia-polyfills@1.3.0.js": [
      "npm:aurelia-polyfills@1.3.0/aurelia-polyfills"
    ],
    "npm:aurelia-polyfills@1.3.0/aurelia-polyfills.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-binding@1.4.3.js": [
      "npm:aurelia-templating-binding@1.4.3/aurelia-templating-binding"
    ],
    "npm:aurelia-templating-binding@1.4.3/aurelia-templating-binding.js": [
      "aurelia-logging",
      "aurelia-binding",
      "aurelia-templating"
    ],
    "npm:aurelia-animator-css@1.0.4.js": [
      "npm:aurelia-animator-css@1.0.4/aurelia-animator-css"
    ],
    "npm:aurelia-animator-css@1.0.4/aurelia-animator-css.js": [
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-framework@1.3.0.js": [
      "npm:aurelia-framework@1.3.0/aurelia-framework"
    ],
    "npm:aurelia-framework@1.3.0/aurelia-framework.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-metadata",
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-task-queue",
      "aurelia-path",
      "aurelia-pal",
      "aurelia-logging"
    ],
    "npm:aurelia-fetch-client@1.4.0.js": [
      "npm:aurelia-fetch-client@1.4.0/aurelia-fetch-client"
    ],
    "npm:aurelia-fetch-client@1.4.0/aurelia-fetch-client.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-bootstrapper@1.0.1.js": [
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper"
    ],
    "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js": [
      "aurelia-pal",
      "aurelia-pal-browser",
      "aurelia-polyfills"
    ],
    "npm:aurelia-pal-browser@1.8.0.js": [
      "npm:aurelia-pal-browser@1.8.0/aurelia-pal-browser"
    ],
    "npm:aurelia-pal-browser@1.8.0/aurelia-pal-browser.js": [
      "aurelia-pal"
    ]
  },
  bundles: {
    "thirdparty-afce9e63e2.js": [
      "github:HubSpot/tether@1.4.4.js",
      "github:HubSpot/tether@1.4.4/js/tether.js",
      "github:github/fetch@1.1.1.js",
      "github:github/fetch@1.1.1/fetch.js",
      "github:systemjs/plugin-css@0.1.37.js",
      "github:systemjs/plugin-css@0.1.37/css.js",
      "github:systemjs/plugin-text@0.0.11.js",
      "github:systemjs/plugin-text@0.0.11/text.js",
      "npm:aurelia-binding@2.1.4.js",
      "npm:aurelia-binding@2.1.4/aurelia-binding.js",
      "npm:aurelia-dependency-injection@1.4.1.js",
      "npm:aurelia-dependency-injection@1.4.1/aurelia-dependency-injection.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging@1.5.0.js",
      "npm:aurelia-logging@1.5.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.4.js",
      "npm:aurelia-metadata@1.0.4/aurelia-metadata.js",
      "npm:aurelia-pal@1.8.0.js",
      "npm:aurelia-pal@1.8.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-task-queue@1.3.1.js",
      "npm:aurelia-task-queue@1.3.1/aurelia-task-queue.js",
      "npm:aurelia-templating@1.8.2.js",
      "npm:aurelia-templating@1.8.2/aurelia-templating.js",
      "npm:bootstrap@4.1.3.js",
      "npm:bootstrap@4.1.3/dist/js/bootstrap.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:oribella-aurelia-gestures@0.7.2.js",
      "npm:oribella-aurelia-gestures@0.7.2/gestures.js",
      "npm:oribella-aurelia-gestures@0.7.2/oribella-aurelia-gestures.js",
      "npm:oribella-framework@0.10.3.js",
      "npm:oribella-framework@0.10.3/engine.js",
      "npm:oribella-framework@0.10.3/flow.js",
      "npm:oribella-framework@0.10.3/flows/mouse.js",
      "npm:oribella-framework@0.10.3/flows/ms-pointer.js",
      "npm:oribella-framework@0.10.3/flows/pointer.js",
      "npm:oribella-framework@0.10.3/flows/touch.js",
      "npm:oribella-framework@0.10.3/gesture.js",
      "npm:oribella-framework@0.10.3/listener-handle.js",
      "npm:oribella-framework@0.10.3/listener.js",
      "npm:oribella-framework@0.10.3/oribella-api.js",
      "npm:oribella-framework@0.10.3/oribella-framework.js",
      "npm:oribella-framework@0.10.3/point.js",
      "npm:oribella-framework@0.10.3/registry.js",
      "npm:oribella-framework@0.10.3/utils.js",
      "npm:oribella@0.8.2.js",
      "npm:oribella@0.8.2/doubletap.js",
      "npm:oribella@0.8.2/longtap-swipe.js",
      "npm:oribella@0.8.2/longtap.js",
      "npm:oribella@0.8.2/oribella.js",
      "npm:oribella@0.8.2/pinch.js",
      "npm:oribella@0.8.2/rotate.js",
      "npm:oribella@0.8.2/swipe.js",
      "npm:oribella@0.8.2/tap.js",
      "npm:tslib@1.9.3.js",
      "npm:tslib@1.9.3/tslib.js"
    ],
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.11.js",
      "app.js",
      "helpers/date.js",
      "helpers/inputs.js",
      "main.js",
      "modals/loading.html!github:systemjs/plugin-text@0.0.11.js",
      "modals/remove-all-fav-confirm.html!github:systemjs/plugin-text@0.0.11.js",
      "modals/remove-single-fav-confirm.html!github:systemjs/plugin-text@0.0.11.js",
      "modals/result-delete-confirm.html!github:systemjs/plugin-text@0.0.11.js",
      "pages/fav.html!github:systemjs/plugin-text@0.0.11.js",
      "pages/fav.js",
      "pages/guest.html!github:systemjs/plugin-text@0.0.11.js",
      "pages/guest.js",
      "pages/print.html!github:systemjs/plugin-text@0.0.11.js",
      "pages/print.js",
      "pages/register.html!github:systemjs/plugin-text@0.0.11.js",
      "pages/register.js",
      "pages/search.html!github:systemjs/plugin-text@0.0.11.js",
      "pages/search.js",
      "pages/visit.html!github:systemjs/plugin-text@0.0.11.js",
      "pages/visit.js",
      "services/data-service.js",
      "services/database-service.js",
      "services/fetch-service.js"
    ],
    "aurelia-446bbfb037.js": [
      "npm:aurelia-animator-css@1.0.4.js",
      "npm:aurelia-animator-css@1.0.4/aurelia-animator-css.js",
      "npm:aurelia-binding@2.1.4.js",
      "npm:aurelia-binding@2.1.4/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.4.1.js",
      "npm:aurelia-dependency-injection@1.4.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.4.0.js",
      "npm:aurelia-fetch-client@1.4.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.3.0.js",
      "npm:aurelia-framework@1.3.0/aurelia-framework.js",
      "npm:aurelia-history-browser@1.2.0.js",
      "npm:aurelia-history-browser@1.2.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.1.0.js",
      "npm:aurelia-history@1.1.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.4.js",
      "npm:aurelia-loader-default@1.0.4/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.5.0.js",
      "npm:aurelia-logging@1.5.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.4.js",
      "npm:aurelia-metadata@1.0.4/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.8.0.js",
      "npm:aurelia-pal-browser@1.8.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.8.0.js",
      "npm:aurelia-pal@1.8.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.3.0.js",
      "npm:aurelia-polyfills@1.3.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.2.0.js",
      "npm:aurelia-route-recognizer@1.2.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.6.2.js",
      "npm:aurelia-router@1.6.2/aurelia-router.js",
      "npm:aurelia-task-queue@1.3.1.js",
      "npm:aurelia-task-queue@1.3.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.4.3.js",
      "npm:aurelia-templating-binding@1.4.3/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.7.1.js",
      "npm:aurelia-templating-resources@1.7.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.7.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.7.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.7.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.7.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.7.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.7.1/compose.js",
      "npm:aurelia-templating-resources@1.7.1/css-resource.js",
      "npm:aurelia-templating-resources@1.7.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.7.1/else.js",
      "npm:aurelia-templating-resources@1.7.1/focus.js",
      "npm:aurelia-templating-resources@1.7.1/hide.js",
      "npm:aurelia-templating-resources@1.7.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.7.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.7.1/if-core.js",
      "npm:aurelia-templating-resources@1.7.1/if.js",
      "npm:aurelia-templating-resources@1.7.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.7.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.7.1/repeat.js",
      "npm:aurelia-templating-resources@1.7.1/replaceable.js",
      "npm:aurelia-templating-resources@1.7.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.7.1/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.7.1/show.js",
      "npm:aurelia-templating-resources@1.7.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.7.1/with.js",
      "npm:aurelia-templating-router@1.3.2.js",
      "npm:aurelia-templating-router@1.3.2/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.3.2/route-href.js",
      "npm:aurelia-templating-router@1.3.2/route-loader.js",
      "npm:aurelia-templating-router@1.3.2/router-view.js",
      "npm:aurelia-templating@1.8.2.js",
      "npm:aurelia-templating@1.8.2/aurelia-templating.js"
    ]
  }
});