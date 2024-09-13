(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{519:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"gitlab-项目管理和代码托管平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-项目管理和代码托管平台"}},[t._v("#")]),t._v(" GitLab 项目管理和代码托管平台")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("开源网址")]),t._v(" "),a("p",[t._v("官网：https://about.gitlab.com/")])]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/docker/docker/gitlab.jpeg",alt:"img"}})]),t._v(" "),a("blockquote",[a("p",[t._v("GitLab 是一个开源的代码托管和协作平台，旨在帮助开发团队更高效地管理代码、进行协作和持续集成/持续交付。它提供了一系列强大的功能，包括代码仓库管理、问题跟踪、持续集成、持续交付、代码审查、Wiki 文档、项目管理等，使开发团队能够在一个集成的平台上管理整个软件开发生命周期。")])]),t._v(" "),a("h2",{attrs:{id:"主要特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要特性"}},[t._v("#")]),t._v(" 主要特性")]),t._v(" "),a("p",[t._v("GitLab 提供了许多功能，以支持团队在一个平台上协作开发和管理项目：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("代码托管")]),t._v(" ：支持 Git 版本控制系统，团队可以在 GitLab 上创建和管理代码仓库，跟踪代码的历史变更，并支持分支和合并请求。")]),t._v(" "),a("li",[a("strong",[t._v("问题跟踪")]),t._v(" ：可以在 GitLab 上创建和管理项目中的问题、任务和需求。团队成员可以讨论、分配、标记和跟踪问题的状态。")]),t._v(" "),a("li",[a("strong",[t._v("持续集成/持续交付")]),t._v(" ：GitLab 提供了强大的 CI/CD（持续集成/持续交付）功能，可以自动化构建、测试和部署代码。用户可以配置流水线来实现自动化的软件交付流程。")]),t._v(" "),a("li",[a("strong",[t._v("代码审查")]),t._v(" ：支持合并请求（Merge Requests），团队成员可以创建合并请求并邀请其他成员审查代码变更。这有助于确保代码质量并促进团队合作。")]),t._v(" "),a("li",[a("strong",[t._v("Wiki 文档")]),t._v(" ：每个项目都有一个集成的 Wiki，可以用来记录项目文档、知识库和指南。")]),t._v(" "),a("li",[a("strong",[t._v("项目管理")]),t._v(" ：GitLab 提供项目看板和里程碑等功能，帮助团队进行项目计划、任务跟踪和进度管理。")]),t._v(" "),a("li",[a("strong",[t._v("安全性")]),t._v(" ：GitLab 提供代码静态分析、容器扫描等安全功能，帮助识别和解决潜在的安全风险。")])]),t._v(" "),a("h2",{attrs:{id:"部署方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署方式"}},[t._v("#")]),t._v(" 部署方式")]),t._v(" "),a("p",[t._v("GitLab 提供了不同的部署方式，以适应不同的需求：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("GitLab.com")]),t._v(" ：GitLab 官方托管的 SaaS 版本，无需自行部署，适用于小型团队和个人开发者。")]),t._v(" "),a("li",[a("strong",[t._v("自托管")]),t._v(" ：用户可以自行在私有服务器上部署 GitLab，以获得更高的定制性和控制权，适用于企业和大型组织。")]),t._v(" "),a("li")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("GitLab 是一个功能丰富的开源代码托管和协作平台，帮助团队高效地进行代码管理、协作和持续集成/持续交付。无论是个人项目还是大型团队，GitLab 都提供了一系列工具来支持软件开发的各个方面。无论您是开发者、项目经理还是企业领导，GitLab 都是一个值得考虑的强大工具。")]),t._v(" "),a("h2",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.7'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitlab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gitlab\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab/gitlab-ce:15.2.2-ce.0'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10.142.51.100'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITLAB_OMNIBUS_CONFIG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        external_url 'http://10.142.51.100:1230'\n        gitlab_rails['gitlab_shell_ssh_port'] = 1232\n        gitlab_rails['time_zone'] = 'Asia/Shanghai'\n        gitlab_rails['gitlab_email_enabled'] = true\n        gitlab_rails['smtp_enable'] = true\n        gitlab_rails['smtp_address'] = \"smtp.163.com\"\n        gitlab_rails['smtp_port'] = 465\n        gitlab_rails['smtp_user_name'] = \"\"\n        gitlab_rails['smtp_password'] = \"\"\n        gitlab_rails['smtp_domain'] = \"163.com\"\n        gitlab_rails['smtp_authentication'] = \"login\"\n        gitlab_rails['smtp_enable_starttls_auto'] = true\n        gitlab_rails['smtp_tls'] = true\n        gitlab_rails['gitlab_email_from'] = 'ego_it@163.com'\n        gitlab_rails['initial_root_password'] = 'Gitlab123$'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1230:1230'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1231:443'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1232:22'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_data:/etc/gitlab'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_log_data:/var/log/gitlab'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_opt_data:/var/opt/gitlab'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitlab_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitlab_log_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitlab_opt_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h2",{attrs:{id:"deploy-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-sh"}},[t._v("#")]),t._v(" deploy.sh")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!\\bin\\bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])])]),a("h2",{attrs:{id:"gitlabrunner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlabrunner"}},[t._v("#")]),t._v(" GitlabRunner")]),t._v(" "),a("h3",{attrs:{id:"docker-compose-yml-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-2"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.7'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitlab-runner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gitlab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab/gitlab-runner:v15.2.1'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("privileged")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data:/etc/gitlab-runner'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/var/run/docker.sock:/var/run/docker.sock'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" swarm_net\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("swarm_net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" \n")])])]),a("h3",{attrs:{id:"deploy-sh-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-sh-2"}},[t._v("#")]),t._v(" deploy.sh")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!\\bin\\bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])])]),a("h3",{attrs:{id:"注册流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册流程"}},[t._v("#")]),t._v(" 注册流程")]),t._v(" "),a("ul",[a("li",[t._v("docker in docker 方案")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("// 执行注册流程\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" gitlab-runner "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\ngitlab-runner register\n// 在交互式终端中填入 Git Lab 提供的 URL 和 token\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost-0002 GitLabRunner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker exec -it 8afd63e9abbb bash")]),t._v("\nroot@8afd63e9abbb:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitlab-runner register")]),t._v("\nRuntime platform                                    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("arch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("os")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("revision")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("58272c27 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.7")]),t._v(".0\nRunning "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" system-mode.                            \n                                                   \nPlease enter the gitlab-ci coordinator URL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e.g. https://gitlab.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\nhttp://192.168.0.123:1230/\nPlease enter the gitlab-ci token "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this runner:\ni6aQMeza7Hxa1t_bAjzT\nPlease enter the gitlab-ci description "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this runner:\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("8afd63e9abbb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": \nPlease enter the gitlab-ci tags "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this runner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("comma separated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n\nRegistering runner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". succeeded                     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("runner")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i6aQMeza\nPlease enter the executor: custom, docker, docker-ssh, shell, docker+machine, docker-ssh+machine, kubernetes, parallels, ssh, virtualbox:\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\nRunner registered successfully. Feel "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" to start it, but "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" it's running already the config should be automatically reloaded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" \ndocker:19.03.8\n// 这里跳过了 description 与 tags ，tags表示什么时候触发，为空表示任何时候都触发，deploy表示部署时触发，下面是执行器，这里填入 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n// 回到 GitLab ，可以看到已经注册成功\n/usr/local/bin/docker-compose "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /data/composefile/GitLabRunner/docker-compose.yml down\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" system prune "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volumes")]),t._v("\n/usr/local/bin/docker-compose "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /data/composefile/GitLabRunner/docker-compose.yml up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" gitlab-runner "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\ngitlab-runner "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("\ngitlab-runner restart\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/gitlab-runner/config.toml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/gitlab-runner/config.toml\nprivileged "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nvolumes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/run/docker.sock:/var/run/docker.sock"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/cache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" config.toml\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);