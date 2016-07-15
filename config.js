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
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "classnames": "npm:classnames@2.2.5",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.11.0",
    "immutable": "npm:immutable@3.8.1",
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
    "masonry-layout": "npm:masonry-layout@4.1.0",
    "moment": "npm:moment@2.14.1",
    "react": "npm:react@15.2.0",
    "react-dom": "npm:react-dom@15.2.0",
    "react-redux": "npm:react-redux@4.4.5",
    "react-router": "npm:react-router@2.5.2",
    "react-waypoint": "npm:react-waypoint@3.0.0",
    "redux": "npm:redux@3.5.2",
    "redux-thunk": "npm:redux-thunk@2.1.0",
    "whatwg-fetch": "npm:whatwg-fetch@0.11.1",
    "youtube-iframe": "npm:youtube-iframe@1.0.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:fbjs@0.8.3": {
      "core-js": "npm:core-js@1.2.6",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:fizzy-ui-utils@2.0.2": {
      "desandro-matches-selector": "npm:desandro-matches-selector@2.0.1"
    },
    "npm:history@2.1.2": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
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
      "inuit-defaults": "npm:inuit-defaults@0.2.1",
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
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.5.3",
      "whatwg-fetch": "npm:whatwg-fetch@0.11.1"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:masonry-layout@4.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-size": "npm:get-size@2.0.2",
      "outlayer": "npm:outlayer@2.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:outlayer@2.1.0": {
      "ev-emitter": "npm:ev-emitter@1.0.3",
      "fizzy-ui-utils": "npm:fizzy-ui-utils@2.0.2",
      "get-size": "npm:get-size@2.0.2"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:react-dom@15.2.0": {
      "react": "npm:react@15.2.0"
    },
    "npm:react-redux@4.4.5": {
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.13.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.2.0",
      "redux": "npm:redux@3.5.2"
    },
    "npm:react-router@2.5.2": {
      "history": "npm:history@2.1.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.2.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-waypoint@3.0.0": {
      "react": "npm:react@15.2.0",
      "react-dom": "npm:react-dom@15.2.0"
    },
    "npm:react@15.2.0": {
      "fbjs": "npm:fbjs@0.8.3",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:redux@3.5.2": {
      "lodash": "npm:lodash@4.13.1",
      "lodash-es": "npm:lodash-es@4.13.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@0.2.4"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
