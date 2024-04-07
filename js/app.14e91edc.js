(function(){"use strict";var e={5496:function(e,r,t){var a=t(5130),n=t(6768),o=t(144),l=t(4232),u=t(9169),c=t(8392),i=t(6678),_=t(5384);const f=(0,n.Lk)("sup",null,"2",-1),d={key:0},s={key:0,style:{"text-align":"center"}},m={key:1,style:{"text-align":"center"}},v={key:1};var g=(0,n.pM)({__name:"BrainHemorrhage",setup(e){const r=(0,n.h)(i.A,{style:{fontSize:"50px"},spin:!0}),{t:t}=(0,_.s9)(),{locale:a}=(0,_.s9)(),g=(0,o.KR)(u.A.locale);(0,n.wB)(g,(e=>{a.value=e}));const p=(0,o.KR)(!1),b=(0,o.KR)(!1),h=(0,o.KR)(!1),k=(0,o.KR)(0),F=(0,o.KR)(),y={span:5},w={span:13},$=(0,o.Kh)({gender:"",age:void 0,BMI:void 0,power:void 0,nation:"",marriage:"",education:"",carrer:""}),j={gender:[{required:!0,message:"require",trigger:"change"}],nation:[{required:!0,message:"require",trigger:"change"}],age:[{required:!0,message:"require",trigger:"change"}],BMI:[{required:!0,message:"require",trigger:"change"},{type:"number",min:15,max:30,message:t("placeholder_range",{min:15,max:30}),trigger:"blur"}],carrer:[{required:!0,message:"require",trigger:"change"}],education:[{required:!0,message:"require",trigger:"change"}],marriage:[{required:!0,message:"require",trigger:"change"}],power:[{required:!0,message:"Please select at least one activity type",trigger:"change"}]},x=()=>{p.value=!0,b.value=!1,h.value=!1,F.value.validate().then((async()=>{let e=(0,o.ux)($);console.log(e);const r="https://studiotang.fun/api1/compute",t=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const a=await t.json();console.log(a),b.value=!0,k.value=100*a,p.value=!1})).catch((e=>{p.value=!1,h.value=!0,console.log("error",e)}))},W=()=>{F.value.resetFields(),b.value=!1},M=()=>{let e="",r="";return k.value>0&&k.value<=40?(e="#2f8c00",r="#2f8c00"):k.value>40&&k.value<=70?(e="#de9400",r="#de9400"):k.value>70&&(e="#a70008",r="#a70008"),{"0%":e,"100%":r}};return(0,n.sV)((()=>{console.log(t("project_header"))})),(e,t)=>{const a=(0,n.g2)("a-radio-button"),i=(0,n.g2)("a-radio-group"),_=(0,n.g2)("a-card-grid"),O=(0,n.g2)("a-radio"),q=(0,n.g2)("a-form-item"),R=(0,n.g2)("a-input-number"),B=(0,n.g2)("a-select-option"),S=(0,n.g2)("a-select"),C=(0,n.g2)("a-button"),I=(0,n.g2)("a-form"),A=(0,n.g2)("a-spin"),P=(0,n.g2)("a-divider"),U=(0,n.g2)("a-progress"),E=(0,n.g2)("a-alert"),T=(0,n.g2)("a-card"),K=(0,n.g2)("a-config-provider");return(0,n.uX)(),(0,n.Wv)(K,{locale:"en"===g.value?(0,o.R1)(u.A):(0,o.R1)(c.A)},{default:(0,n.k6)((()=>[(0,n.bF)(T,{title:e.$t("project_header")},{extra:(0,n.k6)((()=>[(0,n.bF)(i,{value:g.value,"onUpdate:value":t[0]||(t[0]=e=>g.value=e)},{default:(0,n.k6)((()=>[(0,n.bF)(a,{key:"en",value:(0,o.R1)(u.A).locale},{default:(0,n.k6)((()=>[(0,n.eW)("English")])),_:1},8,["value"]),(0,n.bF)(a,{key:"cn",value:(0,o.R1)(c.A).locale},{default:(0,n.k6)((()=>[(0,n.eW)("中文")])),_:1},8,["value"])])),_:1},8,["value"])])),default:(0,n.k6)((()=>[(0,n.bF)(_,{style:{width:"20%","text-align":"center"}},{default:(0,n.k6)((()=>[(0,n.Lk)("div",null,(0,l.v_)(e.$t("project_desc")),1)])),_:1}),(0,n.bF)(_,{style:{width:"50%"},hoverable:!1},{default:(0,n.k6)((()=>[(0,n.bF)(I,{ref_key:"formRef",ref:F,model:$,rules:j,"label-col":y,"wrapper-col":w},{default:(0,n.k6)((()=>[(0,n.bF)(q,{ref:"gender",label:e.$t("form_sex"),name:"gender"},{default:(0,n.k6)((()=>[(0,n.bF)(i,{value:$.gender,"onUpdate:value":t[1]||(t[1]=e=>$.gender=e)},{default:(0,n.k6)((()=>[(0,n.bF)(O,{value:"0"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_female")),1)])),_:1}),(0,n.bF)(O,{value:"1"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_male")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),(0,n.bF)(q,{ref:"age",label:e.$t("form_age"),name:"age"},{default:(0,n.k6)((()=>[(0,n.bF)(R,{value:$.age,"onUpdate:value":t[2]||(t[2]=e=>$.age=e),min:0,max:100,placeholder:e.$t("placeholder_range",{min:0,max:100}),style:{width:"100%"}},null,8,["value","placeholder"])])),_:1},8,["label"]),(0,n.bF)(q,{ref:"BMI",label:e.$t("form_BMI"),name:"BMI"},{default:(0,n.k6)((()=>[(0,n.bF)(R,{value:$.BMI,"onUpdate:value":t[3]||(t[3]=e=>$.BMI=e),min:15,max:30,placeholder:e.$t("placeholder_range",{min:15,max:30}),style:{width:"100%"}},{addonAfter:(0,n.k6)((()=>[(0,n.eW)(" kg/m"),f])),_:1},8,["value","placeholder"])])),_:1},8,["label"]),(0,n.bF)(q,{ref:"nation",label:e.$t("form_nation"),name:"nation"},{default:(0,n.k6)((()=>[(0,n.bF)(i,{value:$.nation,"onUpdate:value":t[4]||(t[4]=e=>$.nation=e)},{default:(0,n.k6)((()=>[(0,n.bF)(O,{value:"0"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_han_nation")),1)])),_:1}),(0,n.bF)(O,{value:"1"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_not_han_nation")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),(0,n.bF)(q,{ref:"marrage",label:e.$t("form_marraged"),name:"marriage"},{default:(0,n.k6)((()=>[(0,n.bF)(i,{value:$.marriage,"onUpdate:value":t[5]||(t[5]=e=>$.marriage=e)},{default:(0,n.k6)((()=>[(0,n.bF)(O,{value:"0"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_marraged")),1)])),_:1}),(0,n.bF)(O,{value:"1"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_not_marraged")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),(0,n.bF)(q,{ref:"education",label:e.$t("form_education"),name:"education"},{default:(0,n.k6)((()=>[(0,n.bF)(i,{value:$.education,"onUpdate:value":t[6]||(t[6]=e=>$.education=e)},{default:(0,n.k6)((()=>[(0,n.bF)(O,{value:"0"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_education_0")),1)])),_:1}),(0,n.bF)(O,{value:"1"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_education_1")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),(0,n.bF)(q,{ref:"carrer",label:e.$t("form_careers"),name:"carrer"},{default:(0,n.k6)((()=>[(0,n.bF)(i,{value:$.carrer,"onUpdate:value":t[7]||(t[7]=e=>$.carrer=e)},{default:(0,n.k6)((()=>[(0,n.bF)(O,{value:"0"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_carrer_0")),1)])),_:1}),(0,n.bF)(O,{value:"1"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_carrer_1")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),(0,n.bF)(q,{label:e.$t("form_active_power"),name:"power"},{default:(0,n.k6)((()=>[(0,n.bF)(S,{value:$.power,"onUpdate:value":t[8]||(t[8]=e=>$.power=e),placeholder:""},{default:(0,n.k6)((()=>[(0,n.bF)(B,{value:"0"},{default:(0,n.k6)((()=>[(0,n.eW)("轻度")])),_:1}),(0,n.bF)(B,{value:"1"},{default:(0,n.k6)((()=>[(0,n.eW)("中度")])),_:1}),(0,n.bF)(B,{value:"2"},{default:(0,n.k6)((()=>[(0,n.eW)("重度")])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),(0,n.bF)(q,{"wrapper-col":{span:14,offset:4}},{default:(0,n.k6)((()=>[(0,n.bF)(C,{type:"primary",onClick:x,loading:p.value},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_submit")),1)])),_:1},8,["loading"]),(0,n.bF)(C,{style:{"margin-left":"10px"},onClick:W,loading:p.value},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("form_content_reset")),1)])),_:1},8,["loading"])])),_:1})])),_:1},8,["model"])])),_:1}),(0,n.bF)(_,{style:{width:"30%"}},{default:(0,n.k6)((()=>[h.value?((0,n.uX)(),(0,n.CE)("div",v,[(0,n.bF)(E,{description:e.$t("error_result"),type:"error"},null,8,["description"])])):((0,n.uX)(),(0,n.CE)("div",d,[b.value?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",s,[(0,n.bF)(A,{indicator:(0,o.R1)(r),spinning:p.value},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.$t("project_result_desc")),1)])),_:1},8,["indicator","spinning"])])),b.value?((0,n.uX)(),(0,n.CE)("div",m,[(0,n.Lk)("div",null,(0,l.v_)(e.$t("project_result")),1),(0,n.bF)(P),(0,n.bF)(U,{type:"circle","stroke-linecap":"square",percent:k.value,"stroke-color":M()},null,8,["percent","stroke-color"])])):(0,n.Q3)("",!0)]))])),_:1})])),_:1},8,["title"])])),_:1},8,["locale"])}}});const p=g;var b=p,h=JSON.parse('{"token":{"colorPrimary":"#1d1d1d","borderRadius":0}}');const k={class:"body"};var F=(0,n.pM)({__name:"App",setup(e){return(e,r)=>{const t=(0,n.g2)("a-config-provider");return(0,n.uX)(),(0,n.CE)("div",k,[(0,n.bF)(t,{theme:(0,o.R1)(h)},{default:(0,n.k6)((()=>[(0,n.bF)(b)])),_:1},8,["theme"])])}}});const y=F;var w=y,$=t(8713);t(4529);const j=t(4174),x=t(9527),W=(0,_.hU)({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:j,"zh-cn":x}}),M=(0,a.Ef)(w);M.use(W),M.use($.Ay),M.mount("#app")},4174:function(e){e.exports=JSON.parse('{"project_header":"Project BarinHemorrhage","project_desc":"This is a project description","project_result_desc":"预测结果将在此处展示","project_result":"result, probability of cerebral hemorrhage","form_sex":"Gender","form_age":"Age","form_BMI":"BMI","form_nation":"Nation","form_marraged":"Marraged","form_education":"文化程度","form_careers":"Careers","form_sleep_duration":"Sleep Duration","form_active_power":"体力活动水平","form_content_female":"Female","form_content_male":"Male","form_content_han_nation":"汉族","form_content_not_han_nation":"其他民族","form_content_marraged":"已婚","form_content_not_marraged":"未婚","form_content_education_0":"初中及以下","form_content_education_1":"高中及以上","form_content_carrer_0":"农民","form_content_carrer_1":"非农民","form_content_submit":"Submit","form_content_reset":"Reset","placeholder_range":"Range {min} to {max}","error_result":"server error, please try again later","test":"测试"}')},9527:function(e){e.exports=JSON.parse('{"project_header":"Project 脑出血预测","project_desc":"项目描述123","project_result_desc":"预测结果将在此处展示","project_result":"预测结果，脑出血概率","form_sex":"性别","form_age":"年龄","form_BMI":"BMI","form_nation":"民族","form_marraged":"婚姻","form_education":"文化程度","form_careers":"职业","form_sleep_duration":"一般睡眠时长","form_active_power":"体力活动水平","form_content_female":"女","form_content_male":"男","form_content_han_nation":"汉族","form_content_not_han_nation":"其他民族","form_content_marraged":"已婚","form_content_not_marraged":"未婚","form_content_education_0":"初中及以下","form_content_education_1":"高中及以上","form_content_carrer_0":"农民","form_content_carrer_1":"非农民","form_content_submit":"预测","form_content_reset":"重置","error_result":"服务器错误，请稍后再试","placeholder_range":"范围 {min} 到 {max}","test":"测试"}')}},r={};function t(a){var n=r[a];if(void 0!==n)return n.exports;var o=r[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(r,a,n,o){if(!a){var l=1/0;for(_=0;_<e.length;_++){a=e[_][0],n=e[_][1],o=e[_][2];for(var u=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(u=!1,o<l&&(l=o));if(u){e.splice(_--,1);var i=n();void 0!==i&&(r=i)}}return r}o=o||0;for(var _=e.length;_>0&&e[_-1][2]>o;_--)e[_]=e[_-1];e[_]=[a,n,o]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(r){return 0===e[r]};var r=function(r,a){var n,o,l=a[0],u=a[1],c=a[2],i=0;if(l.some((function(r){return 0!==e[r]}))){for(n in u)t.o(u,n)&&(t.m[n]=u[n]);if(c)var _=c(t)}for(r&&r(a);i<l.length;i++)o=l[i],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(_)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(5496)}));a=t.O(a)})();
//# sourceMappingURL=app.14e91edc.js.map