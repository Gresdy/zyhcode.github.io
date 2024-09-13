(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{508:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"apache-apisix-云原生-api-网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-apisix-云原生-api-网关"}},[t._v("#")]),t._v(" Apache APISIX 云原生 API 网关")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("开源网址")]),t._v(" "),a("p",[t._v("官网：https://apisix.apache.org/")]),t._v(" "),a("p",[t._v("github：https://github.com/apache/apisix")])]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("blockquote",[a("p",[t._v("Apache APISIX 是 Apache 软件基金会下的云原生 API 网关，它兼具动态、实时、高性能等特点，提供了负载均衡、动态上游、灰度发布（金丝雀发布）、服务熔断、身份认证、可观测性等丰富的流量管理功能。我们可以使用 Apache APISIX 来处理传统的南北向流量，也可以处理服务间的东西向流量。同时，它也支持作为 "),a("a",{attrs:{href:"https://github.com/apache/apisix-ingress-controller",target:"_blank",rel:"noopener noreferrer"}},[t._v("K8s Ingress Controller"),a("OutboundLink")],1),t._v(" 来使用。")])]),t._v(" "),a("h3",{attrs:{id:"主要特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要特性"}},[t._v("#")]),t._v(" 主要特性")]),t._v(" "),a("ul",[a("li",[t._v("多平台支持：APISIX 提供了多平台解决方案，它不但支持裸机运行，也支持在 Kubernetes 中使用，还支持与 AWS Lambda、Azure Function、Lua 函数和 Apache OpenWhisk 等云服务集成。")]),t._v(" "),a("li",[t._v("全动态能力：APISIX 支持热加载，这意味着你不需要重启服务就可以更新 APISIX 的配置。请访问"),a("a",{attrs:{href:"https://apisix.apache.org/zh/blog/2021/08/25/why-apache-apisix-chose-nginx-and-lua/",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么 Apache APISIX 选择 Nginx + Lua 这个技术栈？"),a("OutboundLink")],1),t._v("以了解实现原理。")]),t._v(" "),a("li",[t._v("精细化路由：APISIX 支持使用 "),a("a",{attrs:{href:"http://nginx.org/en/docs/varindex.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NGINX 内置变量"),a("OutboundLink")],1),t._v("做为路由的匹配条件，你可以自定义匹配函数来过滤请求，匹配路由。")]),t._v(" "),a("li",[t._v("运维友好：APISIX 支持与以下工具和平台集成："),a("a",{attrs:{href:"https://apisix.apache.org/zh/docs/apisix/plugins/jwt-auth/#usage-with-hashicorp-vault",target:"_blank",rel:"noopener noreferrer"}},[t._v("HashiCorp Vault"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://apisix.apache.org/zh/docs/apisix/plugins/zipkin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zipkin"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://apisix.apache.org/zh/docs/apisix/plugins/skywalking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache SkyWalking"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://apisix.apache.org/zh/docs/apisix/discovery/consul_kv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Consul"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://apisix.apache.org/zh/docs/apisix/discovery/nacos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://apisix.apache.org/zh/docs/apisix/discovery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eureka"),a("OutboundLink")],1),t._v("。通过 "),a("a",{attrs:{href:"https://apisix.apache.org/zh/docs/dashboard/USER_GUIDE/",target:"_blank",rel:"noopener noreferrer"}},[t._v("APISIX Dashboard"),a("OutboundLink")],1),t._v("，运维人员可以通过友好且直观的 UI 配置 APISIX。")]),t._v(" "),a("li",[t._v("多语言插件支持：APISIX 支持多种开发语言进行插件开发，开发人员可以选择擅长语言的 SDK 开发自定义插件。")])]),t._v(" "),a("h2",{attrs:{id:"主要概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要概念"}},[t._v("#")]),t._v(" 主要概念")]),t._v(" "),a("p",[t._v("下图为 Apache APISIX 的架构：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/docker/apisix.png",alt:"apisix"}})]),t._v(" "),a("p",[t._v("下表是本文涉及到的 APISIX 的主要概念和组件：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("概念/组件")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Route")]),t._v(" "),a("td",[t._v("通过路由定义规则来匹配客户端请求，根据匹配结果加载并执行相应的插件，最后把请求转发给到指定的上游应用。")])]),t._v(" "),a("tr",[a("td",[t._v("Upstream")]),t._v(" "),a("td",[t._v("上游的作用是按照配置规则对服务节点进行负载均衡，它的地址信息可以直接配置到路由或服务上。")])]),t._v(" "),a("tr",[a("td",[t._v("Admin API")]),t._v(" "),a("td",[t._v("用户可以通过 Admin API 控制 APISIX 实例。")])])])]),t._v(" "),a("h2",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.7'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apisix-dashboard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apache/apisix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dashboard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2.13"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apisix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dashboard\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /etc/apisix/dashboard_conf/conf.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/apisix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dashboard/conf/conf.yaml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9000:9000"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apisix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apache/apisix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2.15.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apisix\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" apisix_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/apisix/logs\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /etc/apisix/apisix_conf/config.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/apisix/conf/config.yaml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" etcd\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##network_mode: host")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9080:9080/tcp"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9091:9091/tcp"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9443:9443/tcp"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9092:9092/tcp"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("etcd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bitnami/etcd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.4.14\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" etcd\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" etcd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/bitnami/etcd\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ETCD_ENABLE_V2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ALLOW_NONE_AUTHENTICATION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yes"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ETCD_ADVERTISE_CLIENT_URLS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://0.0.0.0:2379"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ETCD_LISTEN_CLIENT_URLS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://0.0.0.0:2379"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2379:2379/tcp"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apisix_log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("etcd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n")])])]),a("h2",{attrs:{id:"apisix-conf-config-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apisix-conf-config-yaml"}},[t._v("#")]),t._v(" apisix_conf/config.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apisix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9080")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# APISIX listening port")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable_ipv6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow_admin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http://nginx.org/en/docs/http/ngx_http_access_module.html#allow")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 0.0.0.0/0              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We need to restrict ip access rules for security. 0.0.0.0/0 is for test.")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("admin_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" edd1c9f034335f136f87ad84b625c8f1\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# admin: manage all configuration data")]),t._v("\n                                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# viewer: only can view configuration data")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewer"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4054f7cf07e344346cd3f287985e76a2\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" viewer\n  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable_control")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("control")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9092")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("etcd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# it's possible to define multiple etcd hosts addresses of the same etcd cluster.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://etcd:2379"')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# multiple etcd address")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/apisix"')]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apisix configurations prefix")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 30 seconds")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("plugin_attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("export_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9091")]),t._v("\n")])])]),a("h2",{attrs:{id:"dashboard-conf-conf-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard-conf-conf-yaml"}},[t._v("#")]),t._v(" dashboard_conf/conf.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `manager api` listening ip or host name")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `manager api` listening port")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow_list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If we don't set any IP list, then any IP access is allowed by default.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 0.0.0.0/0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("etcd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# supports defining multiple etcd host addresses for an etcd cluster")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://etcd:2379"')]),t._v("\n                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yamllint disable rule:comments-indentation")]),t._v("\n                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# etcd basic auth info")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# username: "root"    # ignore etcd username if not enable etcd auth')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# password: "123456"  # ignore etcd password if not enable etcd auth')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mtls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key_file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Path of your self-signed client side key")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cert_file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Path of your self-signed client side cert")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ca_file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Path of your self-signed ca cert, the CA is used to sign callers' certificates")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prefix: /apisix     # apisix config's prefix in etcd, /apisix by default")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("error_log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" warn       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# supports levels, lower to higher: debug, info, warn, error, panic, fatal")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        logs/error.log  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# supports relative path, absolute path, standard output")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# such as: logs/error.log, /tmp/logs/error.log, /dev/stdout, /dev/stderr")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access_log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        logs/access.log  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# supports relative path, absolute path, standard output")]),t._v("\n                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# such as: logs/access.log, /tmp/logs/access.log, /dev/stdout, /dev/stderr")]),t._v("\n                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# log example: 2020-12-09T16:38:09.039+0800\tINFO\tfilter/logging.go:46\t/apisix/admin/routes/r1\t{"status": 401, "host": "127.0.0.1:9000", "query": "asdfsafd=adf&a=a", "requestId": "3d50ecb8-758c-46d1-af5b-cd9d1c820156", "latency": 0, "remoteIP": "127.0.0.1", "method": "PUT", "errs": []}')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    secret              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# secret for jwt token generation.")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NOTE: Highly recommended to modify this value to protect `manager api`.")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if it's default value, when `manager api` start, it will generate a random string to replace it.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expire_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# jwt token expire time, in second")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("users")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yamllint enable rule:comments-indentation")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# username and password for login `manager api`")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plugin list (sorted in alphabetical order)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("breaker\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" authz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("keycloak\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("auth\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("requests\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("restriction\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" cors\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - dubbo-proxy")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" echo\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - error-log-logger")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - example-plugin")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" fault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("injection\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" grpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("transcode\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" hmac"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("auth\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("logger\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("restriction\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("auth\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" kafka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("logger\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("auth\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("conn\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("count\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("req\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - log-rotate")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - node-status")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" openid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("connect\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" prometheus\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mirror\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rewrite\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" redirect\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" referer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("restriction\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("id\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("validation\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rewrite\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" serverless"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("function\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" serverless"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("function\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# - skywalking")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" sls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("logger\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" syslog\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" tcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("logger\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" udp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("logger\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("blocker\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" wolf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rbac\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" zipkin\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("info\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" traffic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("split\n")])])]),a("h2",{attrs:{id:"deploy-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-sh"}},[t._v("#")]),t._v(" deploy.sh")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!\\bin\\bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /etc/apisix/dashboard_conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /etc/apisix/apisix_conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("cp ./dashboard_conf/conf.yaml /etc/apisix/dashboard_conf/conf.yaml "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("cp ./apisix_conf/config.yaml /etc/apisix//apisix_conf/config.yaml "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);