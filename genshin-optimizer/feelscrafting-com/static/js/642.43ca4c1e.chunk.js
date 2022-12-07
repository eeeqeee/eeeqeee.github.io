"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[642],{80616:function(e,n,t){t.d(n,{A:function(){return h},Z:function(){return x}});var i=t(47047),r=t(53767),a=t(64554),o=t(20890),l=t(72791),c=t(22020),s=t(96106),u=t(25617),d=t(66624),f=t(80184);function x(e){var n=e.children,t=e.artifactSheet,i=e.numInSet,r=void 0===i?5:i;return(0,f.jsx)(s.Z,{placement:"top",title:(0,f.jsx)(h,{artifactSheet:t,numInSet:r}),disableInteractive:!0,children:n})}function h(e){var n=e.artifactSheet,t=e.numInSet,r=void 0===t?5:t;return(0,f.jsx)(l.Suspense,{fallback:(0,f.jsx)(i.Z,{variant:"rectangular",width:100,height:100}),children:(0,f.jsx)(Z,{artifactSheet:n,numInSet:r})})}function Z(e){var n=e.artifactSheet,t=e.numInSet,i=void 0===t?5:t,l=(0,c.$)("sheet").t;return(0,f.jsx)(r.Z,{spacing:2,sx:{p:1},children:Object.keys(n.setEffects).map((function(e){return(0,f.jsxs)(a.Z,{sx:{opacity:parseInt(e)<=i?1:.5},children:[(0,f.jsx)(o.Z,{children:(0,f.jsx)(u.Z,{color:"success",children:l("".concat(e,"set"))})}),(0,f.jsx)(o.Z,{children:(0,f.jsx)(d.v,{ns:"artifact_".concat(n.key,"_gen"),key18:"setEffects.".concat(e)})})]},e)}))})}},15678:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(93433),r=t(61889),a=t(90388),o=t(64554),l=t(79406),c=t(50765),s=t(91839),u=t(75545),d=t(80184);function f(e){var n=e.selectedKeys,t=e.onChange,f=c._.slice(0,6),x=c._.slice(6),h=n.filter((function(e){return f.includes(e)})),Z=n.filter((function(e){return x.includes(e)}));return(0,d.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,d.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,d.jsx)(s.Z,{fullWidth:!0,value:h,onChange:function(e,n){return t([].concat((0,i.Z)(Z),(0,i.Z)(n)))},sx:{height:"100%"},children:f.map((function(e){return(0,d.jsx)(a.Z,{size:"small",value:e,children:(0,d.jsxs)(o.Z,{display:"flex",gap:1,alignItems:"center",children:[u.Z[e],l.ZP.getArtStr(e)]})},e)}))})}),(0,d.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,d.jsx)(s.Z,{fullWidth:!0,value:Z,onChange:function(e,n){return t([].concat((0,i.Z)(h),(0,i.Z)(n)))},sx:{height:"100%"},children:x.map((function(e){return(0,d.jsx)(a.Z,{size:"small",value:e,children:(0,d.jsxs)(o.Z,{display:"flex",gap:1,alignItems:"center",children:[u.Z[e],l.ZP.getArtStr(e)]})},e)}))})})]})}},30066:function(e,n,t){t.d(n,{W:function(){return j}});var i,r=t(1413),a=t(30168),o=t(93433),l=t(63204),c=t(47047),s=t(72791),u=t(22020),d=t(947),f=t(66101),x=t(12761),h=t(42320),Z=t(24351),p=t(84082),v=t(2380),m=t(80184);function j(e){var n=e.location,t=e.setLocation,j=e.filter,y=void 0===j?function(){return!0}:j,g=e.autoCompleteProps,b=void 0===g?{}:g,k=(0,u.$)(["ui","artifact","charNames_gen"]).t,w=(0,s.useContext)(f.t).database,C=(0,x.Z)().gender,I=(0,h.Z)((function(){return d.Z.getAll}),[]),S=(0,s.useCallback)((function(e){return k("charNames_gen:".concat((0,Z.LP)(w.chars.LocationToCharacterKey(e),C)))}),[w,C,k]),E=(0,s.useCallback)((function(e){var n;return""===e?(0,m.jsx)(l.Z,{}):I?(0,m.jsx)(v.Z,{src:null===(n=I(w.chars.LocationToCharacterKey(e),C))||void 0===n?void 0:n.thumbImgSide,sx:{pr:1}}):(0,m.jsx)(m.Fragment,{})}),[w,C,I]),P=(0,s.useCallback)((function(e){return"Traveler"===e?Z._0.some((function(e){return w.charMeta.get(e).favorite})):!!e&&w.charMeta.get(e).favorite}),[w]),A=(0,s.useMemo)((function(){return[{key:"",label:k(i||(i=(0,a.Z)(["artifact:filterLocation.inventory"])))}].concat((0,o.Z)(Array.from(new Set(w.chars.keys.filter((function(e){return null===I||void 0===I||!I(e,C)||y(I(e,C))})).map((function(e){return(0,Z.V7)(e)})))).map((function(e){return{key:e,label:S(e),favorite:P(e)}})).sort((function(e,n){return e.favorite&&!n.favorite?-1:!e.favorite&&n.favorite?1:e.label.localeCompare(n.label)}))))}),[k,S,P,w,I,y,C]);return(0,m.jsx)(s.Suspense,{fallback:(0,m.jsx)(c.Z,{variant:"text",width:100}),children:(0,m.jsx)(p.Z,(0,r.Z)({size:"small",options:A,valueKey:n,onChange:t,toImg:E,clearKey:""},b))})}},40020:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(63204),r=t(20890),a=t(72791),o=t(22020),l=t(947),c=t(66101),s=t(12761),u=t(42320),d=t(80184);function f(e){var n=e.location,t=(0,o.$)("ui").t,f=(0,a.useContext)(c.t).database,x=(0,s.Z)().gender,h=(0,u.Z)((function(){return l.Z.get(n&&f?f.chars.LocationToCharacterKey(n):"",x)}),[n,x,f]);return(0,d.jsx)(r.Z,{component:"span",children:null!==h&&void 0!==h&&h.name?h.nameWIthIcon:(0,d.jsxs)("span",{children:[(0,d.jsx)(i.Z,{sx:{verticalAlign:"text-bottom"}})," ",t("inventory")]})})}},2380:function(e,n,t){var i=(0,t(66934).ZP)("img")((function(e){var n=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:n.spacing(-3),marginLeft:n.spacing(-1.25),marginRight:n.spacing(-1),marginBottom:n.spacing(-1)}}));n.Z=i},84082:function(e,n,t){t.d(n,{Z:function(){return Z}});var i=t(1413),r=t(45987),a=t(14361),o=t(94198),l=t(23786),c=t(57064),s=t(49900),u=t(47047),d=t(72791),f=t(68244),x=t(80184),h=["options","valueKey","label","onChange","disable","clearKey","toImg"];function Z(e){var n,t=e.options,Z=e.valueKey,p=e.label,v=e.onChange,m=(e.disable,e.clearKey),j=e.toImg,y=(0,r.Z)(e,h),g=null!==(n=t.find((function(e){return e.key===Z})))&&void 0!==n?n:{key:"",label:"ERROR"};return(0,x.jsx)(o.Z,(0,i.Z)({autoHighlight:!0,options:t,value:g,clearIcon:Z!==m?void 0:null,onChange:function(e,n,t){return"clear"===t&&void 0!==m?v(m):null!==n&&v(n.key)},isOptionEqualToValue:function(e,n){return e.key===n.key},renderInput:function(e){return(0,x.jsx)(f.Z,(0,i.Z)((0,i.Z)({},e),{},{label:p,startAdornment:void 0!==g?j(g.key):void 0,hasValue:!(null===g||void 0===g||!g.key)}))},renderOption:function(e,n){return(0,x.jsxs)(l.Z,(0,i.Z)((0,i.Z)({value:n.key},e),{},{children:[(0,x.jsx)(c.Z,{children:j(n.key)}),(0,x.jsx)(s.Z,{children:(0,x.jsx)(d.Suspense,{fallback:(0,x.jsx)(u.Z,{variant:"text",width:100}),children:n.key===(null===g||void 0===g?void 0:g.key)?(0,x.jsx)("strong",{children:n.label}):n.label})}),!!n.favorite&&(0,x.jsx)(a.Z,{})]}))}},y))}},55221:function(e,n,t){var i=t(1413),r=t(45987),a=t(53174),o=t(54483),l=t(64554),c=t(96106),s=t(80184),u=["className"];n.Z=function(e){var n=e.className,t=(0,r.Z)(e,u);return(0,s.jsx)(c.Z,(0,i.Z)((0,i.Z)({placement:"top"},t),{},{className:n,children:(0,s.jsx)(l.Z,{component:"span",sx:{cursor:"help"},children:(0,s.jsx)(o.G,{icon:a.sqG})})}))}},901:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(29439),r=t(25617),a=t(60393),o=t(80184);function l(e){var n=e.value,t=e.max,l=void 0===t?1:t,c=e.valid,s="number"===typeof n?["roll".concat((0,a.uZ)(Math.floor(n/l*10)-4,1,6)),n.toFixed()+"%"]:["secondary",n],u=(0,i.Z)(s,2),d=u[0],f=u[1];return c||(d="error"),(0,o.jsx)(r.Z,{color:d,children:f})}},68244:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(1413),r=t(45987),a=t(13967),o=t(58165),l=t(80184),c=["hasValue","startAdornment","InputProps","sx"];function s(e){var n=e.hasValue,t=e.startAdornment,s=e.InputProps,u=e.sx,d=(0,r.Z)(e,c),f=(0,a.Z)();return(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},d),{},{variant:"filled",color:n?"success":"primary",hiddenLabel:!d.label,type:"search",InputProps:(0,i.Z)((0,i.Z)({},s),{},{startAdornment:t}),InputLabelProps:{style:{color:f.palette.text.primary}},sx:(0,i.Z)((0,i.Z)({},u),{},{"& .MuiFilledInput-root":{backgroundColor:n?f.palette.success.main:f.palette.primary.main,paddingTop:d.label?void 0:0,paddingBottom:0,flexWrap:"nowrap"},"& .MuiFilledInput-root.Mui-focused":{backgroundColor:n?f.palette.success.light:f.palette.primary.light},"& .MuiFilledInput-root:hover":{backgroundColor:n?f.palette.success.dark:f.palette.primary.dark},"& .MuiFilledInput-root:before":{border:"none"},"& .MuiFilledInput-root.Mui-disabled:before":{border:"none"},"& .MuiFilledInput-root:after":{border:"none"},"& .MuiFilledInput-root:hover:not(.Mui-disabled):before":{border:"none"},"& input[type=search]::-ms-clear":{display:"none",width:0,height:0},"& input[type=search]::-ms-reveal":{display:"none",width:0,height:0},"& input[type=search]::-webkit-search-decoration":{display:"none"},"& input[type=search]::-webkit-search-cancel-button":{display:"none"},"& input[type=search]::-webkit-search-results-button":{display:"none"},"& input[type=search]::-webkit-search-results-decoration":{display:"none"}})}))}},72838:function(e,n,t){t.d(n,{N:function(){return U},Z:function(){return J}});var i,r,a,o,l=t(93433),c=t(30168),s=t(1413),u=t(29439),d=t(53174),f=t(54483),x=t(40117),h=t(62002),Z=t(66647),p=t(64554),v=t(47047),m=t(20890),j=t(13400),y=t(81918),g=t(39504),b=t(2199),k=t(40165),w=t(24518),C=t(72791),I=t(22020),S=t(80616),E=t(95614),P=t(71310),A=t(30066),M=t(40020),_=t(91702),K=t(20005),F=t(55221),G=t(901),z=t(10157),L=t(75545),N=t(98620),W=t(31148),T=t(66101),V=t(79406),D=t(63372),R=t(42320),q=t(50765),O=t(24351),$=t(60393),B=t(80184),H=(0,C.lazy)((function(){return Promise.all([t.e(219),t.e(213)]).then(t.bind(t,66585))})),X=new Set(q._);function J(e){var n,t,l,$=e.artifactId,J=e.artifactObj,U=e.onClick,Y=e.onDelete,ee=e.mainStatAssumptionLevel,ne=void 0===ee?0:ee,te=e.effFilter,ie=void 0===te?X:te,re=e.editorProps,ae=e.canExclude,oe=void 0!==ae&&ae,le=e.canEquip,ce=void 0!==le&&le,se=e.extraButtons,ue=(0,I.$)(["artifact","ui"]).t,de=(0,C.useContext)(T.t).database,fe=(0,D.Z)($),xe=(0,R.Z)((function(){var e;return W.y.get(null===(e=null!==J&&void 0!==J?J:fe)||void 0===e?void 0:e.setKey)}),[J,fe]),he=(0,C.useCallback)((function(e){return $&&de.arts.set($,{location:e})}),[de,$]),Ze=!J,pe=(0,C.useState)(!1),ve=(0,u.Z)(pe,2),me=ve[0],je=ve[1],ye=(0,C.useCallback)((function(){return je(!1)}),[je]),ge=(0,C.useCallback)((function(){return Ze&&je(!0)}),[Ze,je]),be=(0,C.useCallback)((function(e){return(0,B.jsx)(Z.Z,{onClick:function(){return $&&(null===U||void 0===U?void 0:U($))},sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[U,$]),ke=(0,C.useCallback)((function(e){return(0,B.jsx)(p.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[]),we=null!==J&&void 0!==J?J:fe,Ce=(0,C.useMemo)((function(){if(!we)return{currentEfficiency:0,maxEfficiency:0,currentEfficiency_:0,maxEfficiency_:0};var e=N.ZP.getArtifactEfficiency(we,ie),n=e.currentEfficiency,t=e.maxEfficiency,i=N.ZP.getArtifactEfficiency(we,new Set(q._));return{currentEfficiency:n,maxEfficiency:t,currentEfficiency_:i.currentEfficiency,maxEfficiency_:i.maxEfficiency}}),[we,ie]),Ie=Ce.currentEfficiency,Se=Ce.maxEfficiency,Ee=Ce.currentEfficiency_,Pe=Ce.maxEfficiency_;if(!we)return null;var Ae=we.id,Me=we.lock,_e=we.slotKey,Ke=we.rarity,Fe=we.level,Ge=we.mainStatKey,ze=we.substats,Le=we.exclude,Ne=we.location,We=void 0===Ne?"":Ne,Te=Math.max(Math.min(ne,4*Ke),Fe),Ve=V.ZP.unit(Ge),De=0!==Se,Re=null===xe||void 0===xe?void 0:xe.getSlotName(_e),qe=null===xe||void 0===xe?void 0:xe.getSlotDesc(_e),Oe=qe&&(0,B.jsx)(F.Z,{title:(0,B.jsxs)(p.Z,{children:[(0,B.jsx)(C.Suspense,{fallback:(0,B.jsx)(v.Z,{variant:"text",width:100}),children:(0,B.jsx)(m.Z,{variant:"h6",children:Re})}),(0,B.jsx)(m.Z,{children:qe})]})}),$e=O.Kj.find((function(e){return Ge.startsWith(e)})),Be=$e?(0,B.jsx)(_.Z,{color:$e,children:L.Z[Ge]}):L.Z[Ge];return(0,B.jsxs)(C.Suspense,{fallback:(0,B.jsx)(v.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[re&&(0,B.jsx)(C.Suspense,{fallback:!1,children:(0,B.jsx)(H,(0,s.Z)({artifactIdToEdit:me?$:"",cancelEdit:ye},re))}),(0,B.jsxs)(P.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,B.jsxs)(K.Z,{condition:!!U,wrapper:be,falseWrapper:ke,children:[(0,B.jsxs)(p.Z,{className:"grad-".concat(Ke,"star"),sx:{position:"relative",width:"100%"},children:[!U&&(0,B.jsx)(j.Z,{color:"primary",disabled:!Ze,onClick:function(){return de.arts.set(Ae,{lock:!Me})},sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:Me?(0,B.jsx)(x.Z,{}):(0,B.jsx)(h.Z,{})}),(0,B.jsxs)(p.Z,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[(0,B.jsxs)(p.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,B.jsx)(y.Z,{size:"small",label:(0,B.jsx)("strong",{children:" +".concat(Fe)}),color:N.ZP.levelVariant(Fe)}),!Re&&(0,B.jsx)(v.Z,{variant:"text",width:100}),Re&&(0,B.jsx)(m.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,B.jsx)("strong",{children:Re})}),!Oe&&(0,B.jsx)(v.Z,{width:10}),Oe]}),(0,B.jsx)(m.Z,{color:"text.secondary",variant:"body2",children:(0,B.jsx)(E.ZP,{slotKey:_e})}),(0,B.jsxs)(m.Z,{variant:"h6",sx:{display:"flex",alignItems:"center",gap:1},children:[Be,(0,B.jsx)("span",{children:V.ZP.get(Ge)})]}),(0,B.jsx)(m.Z,{variant:"h5",children:(0,B.jsx)("strong",{children:(0,B.jsxs)(_.Z,{color:Te!==Fe?"warning":void 0,children:[(0,V.qs)(null!==(n=N.ZP.mainStatValue(Ge,Ke,Te))&&void 0!==n?n:0,V.ZP.unit(Ge)),Ve]})})}),(0,B.jsx)(z.q,{stars:Ke,colored:!0})]}),(0,B.jsx)(p.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,B.jsx)(p.Z,{component:"img",src:null!==(t=null===xe||void 0===xe?void 0:xe.slotIcons[_e])&&void 0!==t?t:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,B.jsxs)(g.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0,width:"100%"},children:[ze.map((function(e){return!!e.value&&(0,B.jsx)(Q,{stat:e,effFilter:ie,rarity:Ke},e.key)})),(0,B.jsxs)(m.Z,{variant:"caption",sx:{display:"flex",gap:1,my:1},children:[(0,B.jsx)(_.Z,{color:"secondary",sx:{flexGrow:1},children:ue(i||(i=(0,c.Z)(["artifact:editor.curSubEff"])))}),(0,B.jsx)(G.Z,{value:Ie,max:900,valid:De}),Ie!==Ee&&(0,B.jsx)("span",{children:"/"}),Ie!==Ee&&(0,B.jsx)(G.Z,{value:Ee,max:900,valid:De})]}),Ie!==Se&&(0,B.jsxs)(m.Z,{variant:"caption",sx:{display:"flex",gap:1},children:[(0,B.jsx)(_.Z,{color:"secondary",sx:{flexGrow:1},children:ue(r||(r=(0,c.Z)(["artifact:editor.maxSubEff"])))}),(0,B.jsx)(G.Z,{value:Se,max:900,valid:De}),Se!==Pe&&(0,B.jsx)("span",{children:"/"}),Se!==Pe&&(0,B.jsx)(G.Z,{value:Pe,max:900,valid:De})]}),(0,B.jsx)(p.Z,{flexGrow:1}),void 0!==we.probability&&we.probability>=0&&(0,B.jsxs)("strong",{children:["Probability: ",(100*we.probability).toFixed(2),"%"]}),(0,B.jsxs)(m.Z,{color:"success.main",children:[null!==(l=null===xe||void 0===xe?void 0:xe.name)&&void 0!==l?l:"Artifact Set"," ",xe&&(0,B.jsx)(F.Z,{title:(0,B.jsx)(S.A,{artifactSheet:xe})})]})]})]}),(0,B.jsxs)(p.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[(0,B.jsx)(p.Z,{sx:{flexGrow:1},children:Ze&&ce?(0,B.jsx)(A.W,{location:We,setLocation:he}):(0,B.jsx)(M.Z,{location:We})}),Ze&&(0,B.jsxs)(b.Z,{sx:{height:"100%"},children:[re&&(0,B.jsx)(k.Z,{title:(0,B.jsx)(m.Z,{children:ue(a||(a=(0,c.Z)(["artifact:edit"])))}),placement:"top",arrow:!0,children:(0,B.jsx)(w.Z,{color:"info",size:"small",onClick:ge,children:(0,B.jsx)(f.G,{icon:d.Xcf,className:"fa-fw"})})}),oe&&(0,B.jsx)(k.Z,{title:(0,B.jsxs)(p.Z,{children:[(0,B.jsx)(m.Z,{children:ue(o||(o=(0,c.Z)(["artifact:excludeArtifactTip"])))}),(0,B.jsx)(m.Z,{children:(0,B.jsx)(_.Z,{color:Le?"error":"success",children:ue("artifact:".concat(Le?"excluded":"included"))})})]}),placement:"top",arrow:!0,children:(0,B.jsx)(w.Z,{onClick:function(){return de.arts.set(Ae,{exclude:!Le})},color:Le?"error":"success",size:"small",children:(0,B.jsx)(f.G,{icon:Le?d.gPx:d.Stf,className:"fa-fw"})})}),!!Y&&(0,B.jsx)(w.Z,{color:"error",size:"small",onClick:function(){return Y(Ae)},disabled:Me,children:(0,B.jsx)(f.G,{icon:d.I7k,className:"fa-fw"})}),se]})]})]})]})}function Q(e){var n,t,i,r=e.stat,a=e.effFilter,o=e.rarity,c=null!==(n=null===(t=r.rolls)||void 0===t?void 0:t.length)&&void 0!==n?n:0,s=r.key?N.ZP.substatValue(r.key):0,u=(0,C.useMemo)((function(){return r.key?N.ZP.getSubstatRollData(r.key,o):[]}),[r.key,o]),d=7-u.length,f="roll".concat((0,$.uZ)(c,1,6)),x=null!==(i=r.efficiency)&&void 0!==i?i:0,h=r.key&&a.has(r.key),Z=(0,$.V2)(.5+x/500*.5),v=V.ZP.getStr(r.key),j=V.ZP.unit(r.key),y=(0,C.useMemo)((function(){return(0,B.jsx)(p.Z,{display:"flex",gap:.25,height:"1.3em",sx:{opacity:h?1:.3},children:(0,l.Z)(r.rolls).sort().map((function(e,n){return(0,B.jsx)(U,{value:100*e/s,color:"roll".concat((0,$.uZ)(d+u.indexOf(e),1,6),".main")},"".concat(n).concat(e))}))})}),[h,r.rolls,s,u,d]);return(0,B.jsxs)(p.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,B.jsxs)(m.Z,{sx:{flexGrow:1},color:c?"".concat(f,".main"):"error.main",component:"span",children:[L.Z[r.key]," ",v,"+".concat((0,V.qs)(r.value,V.ZP.unit(r.key))).concat(j)]}),y,(0,B.jsxs)(m.Z,{sx:{opacity:Z,minWidth:40,textAlign:"right"},children:[x.toFixed(),"%"]})]})}function U(e){var n=e.color,t=void 0===n?"red":n,i=e.value,r=void 0===i?50:i;return(0,B.jsx)(p.Z,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,B.jsx)(p.Z,{sx:{width:10,height:"".concat(100-(0,$.uZ)(r,0,100),"%"),bgcolor:"gray"}})})}},63372:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(29439),r=t(72791),a=t(66101);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,r.useContext)(a.t),t=n.database,o=(0,r.useState)(t.arts.get(e)),l=(0,i.Z)(o,2),c=l[0],s=l[1];return(0,r.useEffect)((function(){return s(t.arts.get(e))}),[t,e]),(0,r.useEffect)((function(){return e?t.arts.follow(e,(function(e,n,t){return"update"===n&&s(t)})):void 0}),[e,s,t]),c}}}]);
//# sourceMappingURL=642.43ca4c1e.chunk.js.map