(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{389:function(a,e,t){"use strict";t.r(e);var n=t(46),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"dy-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dy-cli"}},[a._v("#")]),a._v(" dy-cli")]),a._v(" "),t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[a._v("#")]),a._v(" Install")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i dy-cli -g\n")])])]),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ dy-cli --help\n")])])]),t("p",[a._v("Help output:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  ____        _      __   __                   ____ _     ___\n |  _ \\  __ _| |_ __ \\ \\ / /__   __ _  __ _   / ___| |   |_ _|\n | | | |/ _` | __/ _` \\ V / _ \\ / _` |/ _` | | |   | |    | |\n | |_| | (_| | || (_| || | (_) | (_| | (_| | | |___| |___ | |\n |____/ \\__,_|\\__\\__,_||_|\\___/ \\__, |\\__,_|  \\____|_____|___|\n                                |___/\n\nCommands:\n  dy-cli init <project>  Scaffold a new folder with all the subdirectories\n  dy-cli exec <job>      Deploy and execute a job from dist folder against a\n                         running datayoga_spark_runner container\n                         (dy-runner-spark)\n  dy-cli run <job>       Build and execute the job against a running\n                         datayoga_spark_runner container (dy-runner-spark)\n  dy-cli validate        Run against a local livy and validate the code is\n                         correct\n  dy-cli build [job]     Builds a yaml and all its dependencies into a dist\n                         folder or tar file\n\nOptions:\n  --help     Show help                                                 [boolean]\n  --version  Show version number                                       [boolean]\n")])])]),t("h2",{attrs:{id:"available-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-commands"}},[a._v("#")]),a._v(" Available commands")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#init"}},[a._v("init")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#exec"}},[a._v("exec")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#run"}},[a._v("run")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#validate"}},[a._v("validate")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#build"}},[a._v("build")])])]),a._v(" "),t("h3",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[a._v("#")]),a._v(" init")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ dy-cli init --help\n")])])]),t("p",[a._v("Help output:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dy-cli init <project>\n\nScaffold a new folder with all the subdirectories\n\nOptions:\n  --help     Show help                                                 [boolean]\n  --version  Show version number                                       [boolean]\n")])])]),t("h3",{attrs:{id:"exec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[a._v("#")]),a._v(" exec")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ dy-cli "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" --help\n")])])]),t("p",[a._v("Help output:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('dy-cli exec <job>\n\nDeploy and execute a job from dist folder against a running\ndatayoga_spark_runner container (dy-runner-spark)\n\nPositionals:\n  job  Job id to run                                         [string] [required]\n\nOptions:\n  --help      Show help                                                [boolean]\n  --version   Show version number                                      [boolean]\n  --host      Host                               [string] [default: "localhost"]\n  --port      Port                                      [number] [default: 8998]\n  --loglevel  Logging level\n      [string] [choices: "INFO", "ERROR", "DEBUG", "TRACE", "WARNING"] [default:\n                                                                         "INFO"]\n')])])]),t("h3",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" run")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ dy-cli run --help\n")])])]),t("p",[a._v("Help output:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('dy-cli run <job>\n\nBuild and execute the job against a running datayoga_spark_runner container\n(dy-runner-spark)\n\nPositionals:\n  job  Job id to run                                         [string] [required]\n\nOptions:\n  --help      Show help                                                [boolean]\n  --version   Show version number                                      [boolean]\n  --host      Host                               [string] [default: "localhost"]\n  --port      Port                                      [number] [default: 8998]\n  --loglevel  Logging level\n      [string] [choices: "INFO", "ERROR", "DEBUG", "TRACE", "WARNING"] [default:\n                                                                         "INFO"]\n')])])]),t("h3",{attrs:{id:"validate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[a._v("#")]),a._v(" validate")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ dy-cli validate --help\n")])])]),t("p",[a._v("Help output:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('dy-cli validate\n\nRun against a local livy and validate the code is correct\n\nOptions:\n  --help     Show help                                                 [boolean]\n  --version  Show version number                                       [boolean]\n  --host     Host                                [string] [default: "localhost"]\n  --port     Port                                       [number] [default: 8998]\n')])])]),t("h3",{attrs:{id:"build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[a._v("#")]),a._v(" build")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ dy-cli build --help\n")])])]),t("p",[a._v("Help output:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('dy-cli build [job]\n\nBuilds a yaml and all its dependencies into a dist folder or tar file\n\nOptions:\n  --help     Show help                                                 [boolean]\n  --version  Show version number                                       [boolean]\n  --clean    clear the dist folder                    [boolean] [default: false]\n  --runner   runner to use as a runtime target. e.g. pyspark\n                                                   [string] [default: "pyspark"]\n  --console  print generated code to console          [boolean] [default: false]\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);