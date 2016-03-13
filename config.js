System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "classnames": "npm:classnames@2.2.1",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.11.0",
    "immutable": "npm:immutable@3.7.6",
    "inuit-box": "npm:inuit-box@0.4.4",
    "inuit-box-sizing": "npm:inuit-box-sizing@0.2.0",
    "inuit-buttons": "npm:inuit-buttons@0.4.2",
    "inuit-clearfix": "npm:inuit-clearfix@0.2.2",
    "inuit-defaults": "npm:inuit-defaults@0.2.3",
    "inuit-functions": "npm:inuit-functions@0.2.0",
    "inuit-headings": "npm:inuit-headings@0.3.1",
    "inuit-headings-trumps": "npm:inuit-headings-trumps@0.1.3",
    "inuit-layout": "npm:inuit-layout@0.2.2",
    "inuit-mixins": "npm:inuit-mixins@0.2.3",
    "inuit-normalize": "npm:inuit-normalize@3.0.3",
    "inuit-page": "npm:inuit-page@0.2.1",
    "inuit-responsive-settings": "npm:inuit-responsive-settings@0.1.5",
    "inuit-responsive-spacing": "npm:inuit-responsive-spacing@0.0.7",
    "inuit-responsive-tools": "npm:inuit-responsive-tools@0.1.3",
    "inuit-responsive-widths": "npm:inuit-responsive-widths@0.2.2",
    "inuit-spacing": "npm:inuit-spacing@0.7.0",
    "inuit-starter-kit": "npm:inuit-starter-kit@0.2.9",
    "inuit-tools-widths": "npm:inuit-tools-widths@0.1.4",
    "inuit-widths": "npm:inuit-widths@0.4.2",
    "moment": "npm:moment@2.12.0",
    "react": "npm:react@0.14.7",
    "react-dom": "npm:react-dom@0.14.3",
    "react-redux": "npm:react-redux@4.4.0",
    "react-router": "npm:react-router@2.0.1",
    "react-waypoint": "npm:react-waypoint@1.1.3",
    "redux": "npm:redux@3.3.1",
    "redux-thunk": "npm:redux-thunk@2.0.1",
    "whatwg-fetch": "npm:whatwg-fetch@0.11.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:classnames@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:history@2.0.1": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inuit-box@0.4.4": {
      "inuit-clearfix": "npm:inuit-clearfix@0.2.2",
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-functions": "npm:inuit-functions@0.2.0"
    },
    "npm:inuit-buttons@0.4.2": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-functions": "npm:inuit-functions@0.2.0"
    },
    "npm:inuit-headings-trumps@0.1.3": {
      "inuit-headings": "npm:inuit-headings@0.3.1"
    },
    "npm:inuit-headings@0.3.1": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-mixins": "npm:inuit-mixins@0.2.3"
    },
    "npm:inuit-layout@0.2.2": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-functions": "npm:inuit-functions@0.2.0"
    },
    "npm:inuit-mixins@0.2.3": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3"
    },
    "npm:inuit-page@0.2.1": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-mixins": "npm:inuit-mixins@0.2.3"
    },
    "npm:inuit-responsive-spacing@0.0.7": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-responsive-settings": "npm:inuit-responsive-settings@0.1.5",
      "inuit-responsive-tools": "npm:inuit-responsive-tools@0.1.3",
      "inuit-spacing": "npm:inuit-spacing@0.6.4"
    },
    "npm:inuit-responsive-tools@0.1.3": {
      "inuit-responsive-settings": "npm:inuit-responsive-settings@0.1.5"
    },
    "npm:inuit-responsive-widths@0.2.2": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-responsive-settings": "npm:inuit-responsive-settings@0.1.5",
      "inuit-responsive-tools": "npm:inuit-responsive-tools@0.1.3",
      "inuit-tools-widths": "npm:inuit-tools-widths@0.1.4",
      "inuit-widths": "npm:inuit-widths@0.4.2"
    },
    "npm:inuit-spacing@0.6.4": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-functions": "npm:inuit-functions@0.2.0"
    },
    "npm:inuit-spacing@0.7.0": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-functions": "npm:inuit-functions@0.2.0"
    },
    "npm:inuit-starter-kit@0.2.9": {
      "inuit-box-sizing": "npm:inuit-box-sizing@0.2.0",
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-functions": "npm:inuit-functions@0.2.0",
      "inuit-mixins": "npm:inuit-mixins@0.2.3",
      "inuit-normalize": "npm:inuit-normalize@3.0.2",
      "inuit-page": "npm:inuit-page@0.2.1"
    },
    "npm:inuit-tools-widths@0.1.4": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3"
    },
    "npm:inuit-widths@0.4.2": {
      "inuit-defaults": "npm:inuit-defaults@0.2.3",
      "inuit-tools-widths": "npm:inuit-tools-widths@0.1.4"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.12.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:query-string@3.0.1": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:react-dom@0.14.3": {
      "react": "npm:react@0.14.7"
    },
    "npm:react-redux@4.4.0": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.5",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.6.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.7",
      "redux": "npm:redux@3.3.1"
    },
    "npm:react-router@2.0.1": {
      "history": "npm:history@2.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-waypoint@1.1.3": {
      "react": "npm:react@0.14.7",
      "react-dom": "npm:react-dom@0.14.3"
    },
    "npm:react@0.14.7": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:redux@3.3.1": {
      "lodash": "npm:lodash@4.6.1",
      "lodash-es": "npm:lodash-es@4.6.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
