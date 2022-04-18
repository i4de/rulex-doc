(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{431:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"ui概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ui概述"}},[t._v("#")]),t._v(" UI概述")]),t._v(" "),n("p",[t._v("我们每个资源都有一些配置，比如MQTT，会有用户名密码，主机IP和端口等，而我们创建这些资源需要在前端界面填一些字段表单，最简单的做法就是每个资源做一个界面。但是随之而来的问题是资源很多，但是貌似只有配置不一样，我们何不用一个渲染规则来生成界面，而不是每个资源都让前端来实现？于是就有了这个设计。\n"),n("img",{staticStyle:{width:"100%",height:"50%","box-shadow":"20px 20px 50px grey","border-radius":"10px"},attrs:{src:"/assets/rulexui.png"}})]),t._v(" "),n("p",[t._v("实际上技术很简单，就是个很普通的表单生成器，但是解决了前端重复造轮子的问题，还是挺好玩的。")]),t._v(" "),n("h2",{attrs:{id:"编程接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编程接口"}},[t._v("#")]),t._v(" 编程接口")]),t._v(" "),n("p",[t._v("如果你认真看了之前的文档就会发现在第一节关于资源的那里，有个 XSource 接口，接口里面好像有这么个函数：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("XConfig\n")])])]),n("p",[t._v("这个函数就是用来描述资源 UI 界面的回调函数。我们来看看 XConfig 是什么结构的：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" typex\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Rule type is for property store,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// XSource implements struct type is actually worker")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ModelType "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'T' means Type")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tT_INT32  ModelType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// int32")]),t._v("\n\tT_FLOAT                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// float")]),t._v("\n\tT_DOUBLE                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// double")]),t._v("\n\tT_TEXT                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pure text")]),t._v("\n\tT_BOOL                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// boolean")]),t._v("\n\tT_JSON                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// json")]),t._v("\n\tT_BIN                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// byte")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n* 数据模型, 例如某个Modbus电表可以支持读取电流/C 和电压/V参数:\n*[\n*    {\n*        "name":"volgate",\n*        "tag":"volgate",\n*        "valueType":"float",\n*        "value":220\n*    }\n*]\n*\n */')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" XDataModel "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tName      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"name"`')]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字段名")]),t._v("\n\tTag       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"tag"`')]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签")]),t._v("\n\tValueType ModelType   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"valueType"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 值类型")]),t._v("\n\tValue     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"value"`')]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体的值")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建资源的时候需要一个通用配置类")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// XConfig 可认为是接收参数的Form")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前端可以拿来渲染界面(from v0.0.2)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" XConfig "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tType    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"type"`')]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型")]),t._v("\n\tHelpTip "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"helpTip"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关于这个配置的简介和帮助信息")]),t._v("\n\tViews   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"view"`')]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 枚举，一般用来实现Select")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("XConfig 实际上就是我们的UI描述。上面这一堆代码看起来很费劲，我们直接来继续上个Demo。")]),t._v(" "),n("h2",{attrs:{id:"案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),n("p",[t._v("这个案例展示如何渲染一个前端界面，我们用一个 HTTP Server 来演示：\n首先我们自定义我们的配置，在我们演示的 HTTP Server 里面，仅仅有 Port 一个参数：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" httpConfig "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tPort       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint16")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"port" validate:"required" title:"端口" info:"端口"`')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("也许你发现结构体 Tag 列表有一大堆东西，没错，它们就是关键，最后其实是用反射原理，把 Tag 里面的东西拿出来渲染成 UI 界面的描述 JSON。\n其中这些 Tag 被解析出来后的结构体如下：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" view "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tOrder       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"order"`')]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 界面顺序")]),t._v("\n\tType        viewType    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"type"`')]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件类型")]),t._v("\n\tName        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"name"`')]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表单字段名")]),t._v("\n\tInfo        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"info"`')]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表单提示")]),t._v("\n\tLabel       "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"label"`')]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 界面显示标签")]),t._v("\n\tValue       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"value"`')]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字段的值")]),t._v("\n\tRequired    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"required"`')]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否必填")]),t._v("\n\tHidden      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"hidden"`')]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否隐藏")]),t._v("\n\tPlaceholder "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"placeholder"`')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 占位文本")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("再次列一下这些 Tag 的字段含义")]),t._v(" "),n("ul",[n("li",[t._v("Order：         界面顺序")]),t._v(" "),n("li",[t._v("Type：          组件类型")]),t._v(" "),n("li",[t._v("Name：          表单字段名")]),t._v(" "),n("li",[t._v("Info：          表单提示")]),t._v(" "),n("li",[t._v("Label：         界面显示标签")]),t._v(" "),n("li",[t._v("Value：         字段的值")]),t._v(" "),n("li",[t._v("Required：      是否必填")]),t._v(" "),n("li",[t._v("Hidden：        是否隐藏")]),t._v(" "),n("li",[t._v("Placeholder：   占位文本")])])])}),[],!1,null,null,null);s.default=e.exports}}]);