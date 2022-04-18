(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{446:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("使用下面的 Dockerfile 进行构建：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\nFROM golang:alpine3.9\nENV "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://goproxy.cn,direct"')]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g'")]),s._v(" /etc/apk/repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" apk "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" build-base\nRUN apk --no-cache "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ca-certificates\nADD "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /rulex/\nWORKDIR /rulex/\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\nFROM golang:alpine3.9\nLABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RULEX"')]),s._v("\nLABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("author")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wwhai"')]),s._v("\nLABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("email")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cnwwhai@gmail.com"')]),s._v("\nLABEL "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("homepage")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/wwhai/rulex"')]),s._v("\nCOPY --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" /rulex/ /rulex/\nWORKDIR /rulex/\n\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2580")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2581")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2582")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2583")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2584")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2585")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2586")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2587")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2588")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2589")]),s._v("\n\nENTRYPOINT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./rulex"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-config=conf/rulex.ini"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);