(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{401:function(t,e,a){"use strict";a.r(e);var o=a(46),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lookup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lookup"}},[t._v("#")]),t._v(" Lookup")]),t._v(" "),a("p",[t._v("Lookup allows to perform a lookup of a code table in a dataframe. The block receives two inputs - one is the main dataframe and the other is the lookup table. The result is the main dataframe with the additional lookup columns added in")]),t._v(" "),a("h2",{attrs:{id:"columns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#columns"}},[t._v("#")]),t._v(" columns")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Type: "),a("code",[t._v("array")])])]),t._v(" "),a("li",[a("p",[t._v("Description: List of columns to take from the lookup table. These will be added to the resulting dataframe")])]),t._v(" "),a("li",[a("p",[t._v("Examples:")])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" COUNTRY_NAME\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ctry_nm\n\n")])])]),a("h2",{attrs:{id:"condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#condition"}},[t._v("#")]),t._v(" condition")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("li",[a("p",[t._v("Description: An SQL expression to use for the join with the lookup table. Use the alias "),a("code",[t._v("main")]),t._v(" for the main dataframe and the alias "),a("code",[t._v("lookup")]),t._v(" for the lookup dataframe")])]),t._v(" "),a("li",[a("p",[t._v("Examples:\n"),a("code",[t._v("(lookup.country_code = main.country_code) AND (lookup.continent = 'europe')")])])])]),t._v(" "),a("h2",{attrs:{id:"how"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how"}},[t._v("#")]),t._v(" how")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v('"inner" | "cross" | "outer" | "full" | "fullouter" | "full_outer" | "left" | "leftouter" | "left_outer" | "right" | "rightouter" | "right_outer" | "semi" | "leftsemi" | "left_semi" | "anti" | "leftanti" | "left_anti"')])]),t._v(" "),a("li",[t._v("Description: type of join to perform. determines how columns that don't have lookup values will be treated. default is left_outer, which means that lookup records will be preserved. change to "),a("code",[t._v("inner")]),t._v(" to return only rows with lookup values that exist")])]),t._v(" "),a("p",[t._v("undefined")])])}),[],!1,null,null,null);e.default=s.exports}}]);