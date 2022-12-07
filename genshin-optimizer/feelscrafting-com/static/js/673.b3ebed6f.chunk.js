"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[673,182],{70867:function(e,t,n){n.d(t,{mY:function(){return G},N5:function(){return _},Y4:function(){return z},mW:function(){return M}});var r=n(29439),a=n(1413),i=n(45987),o=n(13967),u=n(94198),l=n(58165),s=n(81918),c=n(90493),f=n(64554),d=n(79834),g=n(72791),p=n(22020),y=n(31148),v=n(72828),h=n(79406),x=n(42320),m=n(50765),Z=n(24351),b=n(91702),j=n(23786),k=n(57064),K=n(49900),A=n(80184);function L(e){var t=e.value,n=e.image,r=void 0===n?"":n,i=e.text,o=e.theme,u=e.isSelected,l=e.addlElement,s=e.props;return(0,A.jsxs)(j.Z,(0,a.Z)((0,a.Z)({value:t},s),{},{children:[(0,A.jsx)(k.Z,{children:r}),(0,A.jsx)(K.Z,{primaryTypographyProps:{style:{fontWeight:u?o.typography.fontWeightMedium:o.typography.fontWeightRegular}},children:i}),l&&l]}),t)}var S=n(68244),w=n(10157),C=n(75545),I=["allArtifactKeysWithGrouper","selectedArtifactKeys","setArtifactKeys","getName","getImage","label"],P=["artSetKeys","setArtSetKeys"],H=["mainStatKeys","setMainStatKeys"],N=["substatKeys","setSubstatKeys"],W=["allArtifactKeysWithGrouper","selectedArtifactKey","setArtifactKey","getName","getImage","label","disable","showDefault","defaultText","defaultIcon"],E=["artSetKey","setArtSetKey","label"];function T(e){var t=e.allArtifactKeysWithGrouper,n=e.selectedArtifactKeys,r=e.setArtifactKeys,c=e.getName,f=e.getImage,d=e.label,p=(0,i.Z)(e,I),y=(0,o.Z)(),v=(0,g.useMemo)((function(){return t.map((function(e){var t=e.key,n=e.grouper;return{key:t,label:c(t),grouper:n}}))}),[t,c]);return(0,A.jsx)(u.Z,(0,a.Z)({autoHighlight:!0,multiple:!0,disableCloseOnSelect:!0,options:v,value:n.map((function(e){return{key:e,label:c(e)}})),onChange:function(e,t){r(t.map((function(e){return e.key})))},getOptionLabel:function(e){return e.label},isOptionEqualToValue:function(e,t){return e.key===t.key},renderInput:function(e){return(0,A.jsx)(l.Z,(0,a.Z)((0,a.Z)({},e),{},{label:d,variant:"filled",InputLabelProps:{style:{color:y.palette.text.primary}},color:n.length?"success":"primary",type:"search"}))},renderOption:function(e,t){return(0,A.jsx)(L,{value:t.key,image:(0,A.jsx)(b.Z,{color:h.ZP.getVariant(t.key),children:f(t.key)}),text:(0,A.jsx)(b.Z,{color:h.ZP.getVariant(t.key),children:t.label}),theme:y,isSelected:n.includes(t.key),props:e},t.key)},renderTags:function(e,t){return e.map((function(e,n){var r=Z.Kj.find((function(t){return e.key==="".concat(t,"_dmg_")})),i=r||void 0;return(0,g.createElement)(s.Z,(0,a.Z)((0,a.Z)({},t({index:n})),{},{key:e.key,icon:f(e.key),label:e.label,color:i}))}))}},p))}function _(e){var t=e.artSetKeys,n=e.setArtSetKeys,o=(0,i.Z)(e,P),u=(0,x.Z)((function(){return y.y.getAll}),[]),l=(0,p.$)(["artifact","artifactNames_gen"]).t;if(!u)return null;var s=Object.entries(y.y.setKeysByRarities(u)).flatMap((function(e){var t=(0,r.Z)(e,2),n=t[0];return t[1].map((function(e){return{key:e,grouper:+n}}))})).sort(D);return(0,A.jsx)(T,(0,a.Z)({allArtifactKeysWithGrouper:s,selectedArtifactKeys:t,setArtifactKeys:n,getName:function(e){return l("artifactNames_gen:".concat(e))},getImage:function(e){return u(e).defIcon},label:l("artifact:autocompleteLabels.sets"),groupBy:function(e){var t,n;return null!==(t=null===(n=e.grouper)||void 0===n?void 0:n.toString())&&void 0!==t?t:""},renderGroup:function(e){return e.group&&(0,A.jsxs)(c.Z,{component:f.Z,children:[(0,A.jsxs)(d.Z,{sx:{top:"-1em"},children:[e.group," ",(0,A.jsx)(w.q,{stars:+e.group})]},"".concat(e.group,"Header")),e.children]},e.group)}},o))}function G(e){var t=e.mainStatKeys,n=e.setMainStatKeys,r=(0,i.Z)(e,H),o=(0,p.$)("artifact").t;return(0,A.jsx)(T,(0,a.Z)({allArtifactKeysWithGrouper:m.r.map((function(e){return{key:e}})),selectedArtifactKeys:t,setArtifactKeys:n,getName:function(e){return h.ZP.getArtStr(e)},getImage:function(e){return C.Z[e]},label:o("autocompleteLabels.mainStats")},r))}function M(e){var t=e.substatKeys,n=e.setSubstatKeys,r=(0,i.Z)(e,N),o=(0,p.$)("artifact").t;return(0,A.jsx)(T,(0,a.Z)({allArtifactKeysWithGrouper:m._.map((function(e){return{key:e}})),selectedArtifactKeys:t,setArtifactKeys:n,getName:function(e){return h.ZP.getArtStr(e)},getImage:function(e){return C.Z[e]},label:o("autocompleteLabels.substats")},r))}function O(e){var t=e.allArtifactKeysWithGrouper,n=e.selectedArtifactKey,r=e.setArtifactKey,l=e.getName,s=e.getImage,c=e.label,f=e.disable,d=void 0===f?function(){return!1}:f,p=e.showDefault,y=void 0!==p&&p,v=e.defaultText,h=void 0===v?"":v,x=(e.defaultIcon,(0,i.Z)(e,W)),m=(0,o.Z)(),Z=(0,g.useMemo)((function(){return(y?[{key:"",label:h}]:[]).concat(t.map((function(e){var t=e.key,n=e.grouper;return{key:t,label:l(t),grouper:n}})))}),[t,l,h,y]);return(0,A.jsx)(u.Z,(0,a.Z)({autoHighlight:!0,options:Z,clearIcon:n?void 0:"",value:{key:n,label:l(n)},onChange:function(e,t,n){return("change"!==e.type||"clear"!==n)&&r(t?t.key:"")},getOptionLabel:function(e){return e.label?e.label:h},isOptionEqualToValue:function(e,t){return e.key===t.key},getOptionDisabled:function(e){return d(e.key)},renderInput:function(e){return(0,A.jsx)(S.Z,(0,a.Z)((0,a.Z)({},e),{},{label:c,startAdornment:s(n),hasValue:!!n}))},renderOption:function(e,t){return(0,A.jsx)(L,{value:t.key,image:s(t.key),text:t.label,theme:m,isSelected:n===t.key,props:e},t.key)}},x))}function z(e){var t=e.artSetKey,n=e.setArtSetKey,o=e.label,u=void 0===o?"":o,l=(0,i.Z)(e,E),s=(0,x.Z)((function(){return y.y.getAll}),[]),g=(0,p.$)(["artifact","artifactNames_gen"]).t;if(u=u||g("artifact:autocompleteLabels.set"),!s)return null;var v=Object.entries(y.y.setKeysByRarities(s)).flatMap((function(e){var t=(0,r.Z)(e,2),n=t[0];return t[1].map((function(e){return{key:e,grouper:+n}}))})).sort(D);return(0,A.jsx)(O,(0,a.Z)({allArtifactKeysWithGrouper:v,selectedArtifactKey:t,setArtifactKey:n,getName:function(e){return e&&g("artifactNames_gen:".concat(e))},getImage:function(e){return e?s(e).defIcon:(0,A.jsx)(A.Fragment,{})},label:u,groupBy:function(e){var t,n;return null!==(t=null===(n=e.grouper)||void 0===n?void 0:n.toString())&&void 0!==t?t:""},renderGroup:function(e){return e.group&&(0,A.jsxs)(c.Z,{component:f.Z,children:[(0,A.jsxs)(d.Z,{sx:{top:"-1em"},children:[e.group," ",(0,A.jsx)(w.q,{stars:+e.group})]},"".concat(e.group,"Header")),e.children]},e.group)}},l))}function D(e,t){if(e.grouper>t.grouper)return-1;if(e.grouper<t.grouper)return 1;var n=v.Z.t("artifactNames_gen:".concat(e.key)),r=v.Z.t("artifactNames_gen:".concat(t.key));return n<r?-1:n>r?1:0}},37673:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r,a,i,o,u=n(93433),l=n(53174),s=n(54483),c=n(62002),f=n(40117),d=n(61889),g=n(90388),p=n(64554),y=n(22020),v=n(76899),h=n(24351),x=n(75308),m=n(91839),Z=n(10157),b=n(70867),j=n(21977),k=n(30168),K=n(63204),A=n(73576),L=n(47047),S=n(72791),w=n(947),C=n(66101),I=n(12761),P=n(42320),H=n(2380),N=n(84082),W=n(80184);function E(e){var t=e.location,n=e.setLocation,l=(0,y.$)(["ui","artifact","charNames_gen"]).t,s=(0,S.useContext)(C.t).database,c=(0,I.Z)().gender,f=(0,P.Z)((function(){return w.Z.getAll}),[]),d=(0,S.useCallback)((function(e){return l("charNames_gen:".concat((0,h.LP)(s.chars.LocationToCharacterKey(e),c)))}),[s,c,l]),g=(0,S.useCallback)((function(e){var t;switch(e){case"":return(0,W.jsx)(W.Fragment,{});case"Inventory":return(0,W.jsx)(K.Z,{});case"Equipped":return(0,W.jsx)(A.Z,{});default:return f?(0,W.jsx)(H.Z,{src:null===(t=f(s.chars.LocationToCharacterKey(e),c))||void 0===t?void 0:t.thumbImgSide,sx:{pr:1}}):(0,W.jsx)(W.Fragment,{})}}),[s,c,f]),p=(0,S.useCallback)((function(e){return"Traveler"===e?h._0.some((function(e){return s.charMeta.get(e).favorite})):!!e&&s.charMeta.get(e).favorite}),[s]),v=(0,S.useMemo)((function(){return[{key:"",label:l(r||(r=(0,k.Z)(["artifact:filterLocation.any"])))},{key:"Equipped",label:l(a||(a=(0,k.Z)(["artifact:filterLocation.currentlyEquipped"])))},{key:"Inventory",label:l(i||(i=(0,k.Z)(["artifact:filterLocation.inventory"])))}].concat((0,u.Z)(h.xB.filter((function(e){return s.chars.get(s.chars.LocationToCharacterKey(e))})).map((function(e){return{key:e,label:d(e),favorite:p(e)}})).sort((function(e,t){return e.favorite&&!t.favorite?-1:!e.favorite&&t.favorite?1:e.label.localeCompare(t.label)}))))}),[l,d,p,s]);return(0,W.jsx)(S.Suspense,{fallback:(0,W.jsx)(L.Z,{variant:"text",width:100}),children:(0,W.jsx)(N.Z,{size:"small",options:v,valueKey:t,onChange:n,toImg:g,clearKey:"",label:l(o||(o=(0,k.Z)(["artifact:filterLocation.location"])))})})}var T=n(29439),_=n(57621),G=n(10889),M=n(60393),O=n(10600);function z(e){var t=e.levelLow,n=e.levelHigh,r=e.setLow,a=e.setHigh,i=e.setBoth,o=e.dark,u=void 0!==o&&o,l=e.disabled,s=void 0!==l&&l,c=(0,S.useState)(t),f=(0,T.Z)(c,2),d=f[0],g=f[1],p=(0,S.useState)(n),y=(0,T.Z)(p,2),v=y[0],h=y[1],x=(0,S.useCallback)((function(e,t){if("number"==typeof t)throw new TypeError;var n=(0,T.Z)(t,2),r=n[0],a=n[1];g(r),h(a)}),[g,h]);return(0,S.useEffect)((function(){return g(t)}),[g,t]),(0,S.useEffect)((function(){return h(n)}),[h,n]),(0,W.jsxs)(_.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:u?"contentDark.main":"contentLight.main"},children:[(0,W.jsx)(O.ZP,{value:d,onChange:function(e){return r((0,M.uZ)(e,0,n))},sx:{px:1,pl:2,width:100},inputProps:{sx:{textAlign:"right"}},startAdornment:"RV: ",disabled:s}),(0,W.jsx)(G.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:function(){return"Arifact RV Range"},value:[d,v],onChange:x,onChangeCommitted:function(e,t){return i(t[0],t[1])},valueLabelDisplay:"auto",min:0,max:900,disabled:s}),(0,W.jsx)(O.ZP,{value:v,onChange:function(e){return a((0,M.uZ)(e,t,900))},sx:{px:1,width:50},inputProps:{sx:{textAlign:"center"}},disabled:s})]})}var D=n(95614),B=["excluded","included"],V=["locked","unlocked"],q=(0,x.X)((0,u.Z)(h.En)),R=(0,x.X)((0,u.Z)(h.eV)),X=(0,x.X)([].concat(B)),$=(0,x.X)([].concat(V)),F=(0,x.X)([1,2,3,4]);function Y(e){var t=e.filterOption,n=e.filterOptionDispatch,r=e.disableSlotFilter,a=void 0!==r&&r,i=(0,y.$)(["artifact","ui"]).t,o=t.artSetKeys,u=void 0===o?[]:o,x=t.mainStatKeys,k=void 0===x?[]:x,K=t.rarity,A=void 0===K?[]:K,L=t.slotKeys,S=void 0===L?[]:L,w=t.levelLow,C=void 0===w?0:w,I=t.levelHigh,P=void 0===I?20:I,H=t.substats,N=void 0===H?[]:H,T=t.location,_=void 0===T?"":T,G=t.exclusion,M=void 0===G?[].concat(B):G,O=t.locked,Y=void 0===O?[].concat(V):O,J=t.rvLow,Q=void 0===J?0:J,U=t.rvHigh,ee=void 0===U?900:U,te=t.lines,ne=void 0===te?[]:te;return(0,W.jsxs)(d.ZP,{container:!0,spacing:1,children:[(0,W.jsxs)(d.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,W.jsx)(m.Z,{fullWidth:!0,value:A,size:"small",children:h.En.map((function(e){return(0,W.jsx)(g.Z,{value:e,onClick:function(){return n({rarity:q(A,e)})},children:(0,W.jsx)(Z.q,{stars:e})},e)}))}),(0,W.jsx)(m.Z,{fullWidth:!0,value:S,size:"small",disabled:a,children:h.eV.map((function(e){return(0,W.jsx)(g.Z,{value:e,onClick:function(){return n({slotKeys:R(S,e)})},children:(0,D.Ir)(e)},e)}))}),(0,W.jsxs)(p.Z,{display:"flex",gap:1,children:[(0,W.jsx)(m.Z,{fullWidth:!0,value:M,size:"small",children:B.map((function(e,t){return(0,W.jsxs)(g.Z,{value:e,sx:{display:"flex",gap:1},onClick:function(){return n({exclusion:X(M,e)})},children:[(0,W.jsx)(s.G,{icon:t?l.Stf:l.gPx}),(0,W.jsx)(v.c,{i18nKey:"exclusion.".concat(e),t:i})]},e)}))}),(0,W.jsx)(m.Z,{fullWidth:!0,value:Y,size:"small",children:V.map((function(e,t){return(0,W.jsxs)(g.Z,{value:e,sx:{display:"flex",gap:1},onClick:function(){return n({locked:$(Y,e)})},children:[t?(0,W.jsx)(c.Z,{}):(0,W.jsx)(f.Z,{}),(0,W.jsx)(v.c,{i18nKey:"ui:".concat(e),t:i})]},e)}))})]}),(0,W.jsx)(m.Z,{fullWidth:!0,value:ne,size:"small",children:[1,2,3,4].map((function(e){return(0,W.jsx)(g.Z,{value:e,onClick:function(){return n({lines:F(ne,e)})},children:i("substat",{count:e})},e)}))}),(0,W.jsx)(j.Z,{showLevelText:!0,levelLow:C,levelHigh:P,setLow:function(e){return n({levelLow:e})},setHigh:function(e){return n({levelHigh:e})},setBoth:function(e,t){return n({levelLow:e,levelHigh:t})}}),(0,W.jsx)(z,{showLevelText:!0,levelLow:Q,levelHigh:ee,setLow:function(e){return n({rvLow:e})},setHigh:function(e){return n({rvHigh:e})},setBoth:function(e,t){return n({rvLow:e,rvHigh:t})}})]}),(0,W.jsxs)(d.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,W.jsx)(b.N5,{artSetKeys:u,setArtSetKeys:function(e){return n({artSetKeys:e})}}),(0,W.jsx)(b.mY,{mainStatKeys:k,setMainStatKeys:function(e){return n({mainStatKeys:e})}}),(0,W.jsx)(b.mW,{substatKeys:N,setSubstatKeys:function(e){return n({substats:e})}}),(0,W.jsx)(E,{location:_,setLocation:function(e){return n({location:e})}})]})]})}},21977:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(29439),a=n(57621),i=n(10889),o=n(72791),u=n(60393),l=n(10600),s=n(80184);function c(e){var t=e.levelLow,n=e.levelHigh,c=e.setLow,f=e.setHigh,d=e.setBoth,g=e.dark,p=void 0!==g&&g,y=e.disabled,v=void 0!==y&&y,h=e.showLevelText,x=void 0!==h&&h,m=(0,o.useState)(t),Z=(0,r.Z)(m,2),b=Z[0],j=Z[1],k=(0,o.useState)(n),K=(0,r.Z)(k,2),A=K[0],L=K[1],S=(0,o.useCallback)((function(e,t){if("number"==typeof t)throw new TypeError;var n=(0,r.Z)(t,2),a=n[0],i=n[1];j(a),L(i)}),[j,L]);return(0,o.useEffect)((function(){return j(t)}),[j,t]),(0,o.useEffect)((function(){return L(n)}),[L,n]),(0,s.jsxs)(a.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:p?"contentDark.main":"contentLight.main"},children:[(0,s.jsx)(l.ZP,{value:b,onChange:function(e){return c((0,u.uZ)(e,0,n))},sx:{px:1,pl:x?2:void 0,width:x?100:50},inputProps:{sx:{textAlign:x?"right":"center"}},startAdornment:x?"Level: ":void 0,disabled:v}),(0,s.jsx)(i.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:function(){return"Arifact Level Range"},value:[b,A],onChange:S,onChangeCommitted:function(e,t){return d(t[0],t[1])},valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:v}),(0,s.jsx)(l.ZP,{value:A,onChange:function(e){return f((0,u.uZ)(e,t,20))},sx:{px:1,width:50},inputProps:{sx:{textAlign:"center"}},disabled:v})]})}},75308:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(93433),a=n(60393);function i(e){return function(t,n){var i=t.length;return i===e.length?[n]:1===i&&t[0]===n?(0,r.Z)(e):(0,r.Z)(new Set((0,a.nh)(t,n)))}}},73576:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)([(0,a.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,a.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch")}}]);
//# sourceMappingURL=673.b3ebed6f.chunk.js.map