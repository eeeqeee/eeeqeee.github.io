"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[348],{30066:function(e,n,t){t.d(n,{W:function(){return LocationAutocomplete}});var o,r=t(1413),i=t(30168),a=t(93433),s=t(63204),l=t(47047),c=t(72791),u=t(22020),d=t(947),p=t(66101),f=t(12761),h=t(42320),x=t(24351),g=t(84082),Z=t(2380),v=t(80184);function LocationAutocomplete(e){var n=e.location,t=e.setLocation,m=e.filter,y=void 0===m?function(){return!0}:m,j=e.autoCompleteProps,b=void 0===j?{}:j,w=(0,u.$)(["ui","artifact","charNames_gen"]).t,C=(0,c.useContext)(p.t).database,k=(0,f.Z)().gender,I=(0,h.Z)((function(){return d.Z.getAll}),[]),W=(0,c.useCallback)((function(e){return w("charNames_gen:".concat((0,x.LP)(C.chars.LocationToCharacterKey(e),k)))}),[C,k,w]),S=(0,c.useCallback)((function(e){var n;return""===e?(0,v.jsx)(s.Z,{}):I?(0,v.jsx)(Z.Z,{src:null===(n=I(C.chars.LocationToCharacterKey(e),k))||void 0===n?void 0:n.thumbImgSide,sx:{pr:1}}):(0,v.jsx)(v.Fragment,{})}),[C,k,I]),P=(0,c.useCallback)((function(e){return"Traveler"===e?x._0.some((function(e){return C.charMeta.get(e).favorite})):!!e&&C.charMeta.get(e).favorite}),[C]),T=(0,c.useMemo)((function(){return[{key:"",label:w(o||(o=(0,i.Z)(["artifact:filterLocation.inventory"])))}].concat((0,a.Z)(Array.from(new Set(C.chars.keys.filter((function(e){return null===I||void 0===I||!I(e,k)||y(I(e,k))})).map((function(e){return(0,x.V7)(e)})))).map((function(e){return{key:e,label:W(e),favorite:P(e)}})).sort((function(e,n){return e.favorite&&!n.favorite?-1:!e.favorite&&n.favorite?1:e.label.localeCompare(n.label)}))))}),[w,W,P,C,I,y,k]);return(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)(l.Z,{variant:"text",width:100}),children:(0,v.jsx)(g.Z,(0,r.Z)({size:"small",options:T,valueKey:n,onChange:t,toImg:S,clearKey:""},b))})}},40020:function(e,n,t){t.d(n,{Z:function(){return LocationName}});var o=t(63204),r=t(20890),i=t(72791),a=t(22020),s=t(947),l=t(66101),c=t(12761),u=t(42320),d=t(80184);function LocationName(e){var n=e.location,t=(0,a.$)("ui").t,p=(0,i.useContext)(l.t).database,f=(0,c.Z)().gender,h=(0,u.Z)((function(){return s.Z.get(n&&p?p.chars.LocationToCharacterKey(n):"",f)}),[n,f,p]);return(0,d.jsx)(r.Z,{component:"span",children:null!==h&&void 0!==h&&h.name?h.nameWIthIcon:(0,d.jsxs)("span",{children:[(0,d.jsx)(o.Z,{sx:{verticalAlign:"text-bottom"}})," ",t("inventory")]})})}},2380:function(e,n,t){var o=(0,t(66934).ZP)("img")((function(e){var n=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:n.spacing(-3),marginLeft:n.spacing(-1.25),marginRight:n.spacing(-1),marginBottom:n.spacing(-1)}}));n.Z=o},20005:function(e,n,t){function ConditionalWrapper(e){var n=e.condition,t=e.wrapper,o=e.falseWrapper,r=e.children;return n?t(r):o?o(r):r}t.d(n,{Z:function(){return ConditionalWrapper}})},84082:function(e,n,t){t.d(n,{Z:function(){return GeneralAutocomplete}});var o=t(1413),r=t(45987),i=t(14361),a=t(94198),s=t(23786),l=t(57064),c=t(49900),u=t(47047),d=t(72791),p=t(68244),f=t(80184),h=["options","valueKey","label","onChange","disable","clearKey","toImg"];function GeneralAutocomplete(e){var n,t=e.options,x=e.valueKey,g=e.label,Z=e.onChange,v=(e.disable,e.clearKey),m=e.toImg,y=(0,r.Z)(e,h),j=null!==(n=t.find((function(e){return e.key===x})))&&void 0!==n?n:{key:"",label:"ERROR"};return(0,f.jsx)(a.Z,(0,o.Z)({autoHighlight:!0,options:t,value:j,clearIcon:x!==v?void 0:null,onChange:function onChange(e,n,t){return"clear"===t&&void 0!==v?Z(v):null!==n&&Z(n.key)},isOptionEqualToValue:function isOptionEqualToValue(e,n){return e.key===n.key},renderInput:function renderInput(e){return(0,f.jsx)(p.Z,(0,o.Z)((0,o.Z)({},e),{},{label:g,startAdornment:void 0!==j?m(j.key):void 0,hasValue:!(null===j||void 0===j||!j.key)}))},renderOption:function renderOption(e,n){return(0,f.jsxs)(s.Z,(0,o.Z)((0,o.Z)({value:n.key},e),{},{children:[(0,f.jsx)(l.Z,{children:m(n.key)}),(0,f.jsx)(c.Z,{children:(0,f.jsx)(d.Suspense,{fallback:(0,f.jsx)(u.Z,{variant:"text",width:100}),children:n.key===(null===j||void 0===j?void 0:j.key)?(0,f.jsx)("strong",{children:n.label}):n.label})}),!!n.favorite&&(0,f.jsx)(i.Z,{})]}))}},y))}},68244:function(e,n,t){t.d(n,{Z:function(){return SolidColoredTextField}});var o=t(1413),r=t(45987),i=t(13967),a=t(58165),s=t(80184),l=["hasValue","startAdornment","InputProps","sx"];function SolidColoredTextField(e){var n=e.hasValue,t=e.startAdornment,c=e.InputProps,u=e.sx,d=(0,r.Z)(e,l),p=(0,i.Z)();return(0,s.jsx)(a.Z,(0,o.Z)((0,o.Z)({},d),{},{variant:"filled",color:n?"success":"primary",hiddenLabel:!d.label,type:"search",InputProps:(0,o.Z)((0,o.Z)({},c),{},{startAdornment:t}),InputLabelProps:{style:{color:p.palette.text.primary}},sx:(0,o.Z)((0,o.Z)({},u),{},{"& .MuiFilledInput-root":{backgroundColor:n?p.palette.success.main:p.palette.primary.main,paddingTop:d.label?void 0:0,paddingBottom:0,flexWrap:"nowrap"},"& .MuiFilledInput-root.Mui-focused":{backgroundColor:n?p.palette.success.light:p.palette.primary.light},"& .MuiFilledInput-root:hover":{backgroundColor:n?p.palette.success.dark:p.palette.primary.dark},"& .MuiFilledInput-root:before":{border:"none"},"& .MuiFilledInput-root.Mui-disabled:before":{border:"none"},"& .MuiFilledInput-root:after":{border:"none"},"& .MuiFilledInput-root:hover:not(.Mui-disabled):before":{border:"none"},"& input[type=search]::-ms-clear":{display:"none",width:0,height:0},"& input[type=search]::-ms-reveal":{display:"none",width:0,height:0},"& input[type=search]::-webkit-search-decoration":{display:"none"},"& input[type=search]::-webkit-search-cancel-button":{display:"none"},"& input[type=search]::-webkit-search-results-button":{display:"none"},"& input[type=search]::-webkit-search-results-decoration":{display:"none"}})}))}},59215:function(e,n,t){t.d(n,{Z:function(){return SortByButton}});var o=t(1413),r=t(45987),i=t(53174),a=t(54483),s=t(64554),l=t(2199),c=t(23786),u=t(24518),d=t(22020),p=t(76899),f=t(33890),h=t(80184),x=["sortKeys","value","onChange","ascending","onChangeAsc"];function SortByButton(e){var n=e.sortKeys,t=e.value,g=e.onChange,Z=e.ascending,v=e.onChangeAsc,m=(0,r.Z)(e,x),y=(0,d.$)("ui").t;return(0,h.jsxs)(s.Z,{display:"flex",alignItems:"center",gap:1,children:[(0,h.jsx)(p.c,{t:y,i18nKey:y("sortBy"),children:"Sort by: "}),(0,h.jsxs)(l.Z,(0,o.Z)((0,o.Z)({},m),{},{children:[(0,h.jsx)(f.Z,{title:(0,h.jsx)(p.c,{t:y,i18nKey:y("sortMap.".concat(t)),children:{value:y("sortMap.".concat(t))}}),children:n.map((function(e){return(0,h.jsx)(c.Z,{selected:t===e,disabled:t===e,onClick:function onClick(){return g(e)},children:y("sortMap.".concat(e))},e)}))}),(0,h.jsx)(u.Z,{onClick:function onClick(){return v(!Z)},startIcon:(0,h.jsx)(a.G,{icon:Z?i.Pa6:i.xrW,className:"fa-fw"}),children:Z?(0,h.jsx)(p.c,{t:y,i18nKey:"ascending",children:"Ascending"}):(0,h.jsx)(p.c,{t:y,i18nKey:"descending",children:"Descending"})})]}))]})}},10157:function(e,n,t){t.d(n,{q:function(){return c}});var o=t(93433),r=t(53174),i=t(54483),a=t(91702),s=t(80184),l=function StarIcon(){return(0,s.jsx)(i.G,{icon:r.Tab})},c=function StarsDisplay(e){var n=e.stars,t=e.colored,r=void 0!==t&&t;return(0,s.jsx)(a.Z,{color:r?"warning":void 0,children:n?(0,o.Z)(Array(n).keys()).map((function(e,n){return(0,s.jsx)(l,{},n)})):null})}},73578:function(e,n,t){t.d(n,{Z:function(){return WeaponToggle}});var o=t(1413),r=t(45987),i=t(93433),a=t(90388),s=t(10658),l=t(24351),c=t(75308),u=t(55942),d=t(91839),p=t(80184),f=["value","onChange"],h=(0,c.X)((0,i.Z)(l.yd));function WeaponToggle(e){var n=e.value,t=e.onChange,i=(0,r.Z)(e,f);return(0,p.jsx)(d.Z,(0,o.Z)((0,o.Z)({exclusive:!0,value:n},i),{},{children:l.yd.map((function(e){var o;return(0,p.jsx)(a.Z,{value:e,onClick:function onClick(){return t(h(n,e))},children:(0,p.jsx)(u.Z,{src:null===(o=s.Z.weaponTypes)||void 0===o?void 0:o[e],size:2})},e)}))}))}},90543:function(e,n,t){t.d(n,{Z:function(){return WeaponCard}});var o,r=t(30168),i=t(53174),a=t(54483),s=t(40117),l=t(62002),c=t(66647),u=t(64554),d=t(47047),p=t(13400),f=t(20890),h=t(39504),x=t(2199),g=t(40165),Z=t(24518),v=t(72791),m=t(22020),y=t(10658),j=t(71310),b=t(30066),w=t(40020),C=t(20005),k=t(55942),I=t(10157),W=t(2139),S=t(66218),P=t(66101),T=t(27235),M=t(73036),A=t(18327),K=t(42320),L=t(74480),N=t(80184);function WeaponCard(e){var n,t=e.weaponId,F=e.onClick,_=e.onEdit,z=e.onDelete,E=e.canEquip,G=void 0!==E&&E,D=e.extraButtons,O=(0,m.$)(["page_weapon","ui"]).t,B=(0,v.useContext)(P.t).database,V=(0,L.Z)(t),q=(0,K.Z)((function(){return null!==V&&void 0!==V&&V.key?S.Z.get(V.key):void 0}),[null===V||void 0===V?void 0:V.key]),R=(0,v.useCallback)((function(e){return e.weaponTypeKey===(null===q||void 0===q?void 0:q.weaponType)}),[q]),H=(0,v.useCallback)((function(e){return(0,N.jsx)(c.Z,{onClick:function onClick(){return null===F||void 0===F?void 0:F(t)},children:e})}),[F,t]),$=(0,v.useCallback)((function(e){return(0,N.jsx)(u.Z,{children:e})}),[]),X=(0,v.useCallback)((function(e){return t&&B.weapons.set(t,{location:e})}),[B,t]),J=(0,v.useMemo)((function(){return q&&V&&(0,M.mP)([q.data,(0,M.v0)(V)])}),[q,V]);if(!V||!q||!J)return null;var Q=V.level,U=V.ascension,Y=V.refinement,ee=V.id,ne=V.location,te=void 0===ne?"":ne,oe=V.lock,re=J.get(T.ri.weapon.type).value,ie=[T.ri.weapon.main,T.ri.weapon.sub,T.ri.weapon.sub2].map((function(e){return J.get(e)})),ae=q.getImg(U);return(0,N.jsx)(v.Suspense,{fallback:(0,N.jsx)(d.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:(0,N.jsxs)(j.Z,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,N.jsxs)(C.Z,{condition:!!F,wrapper:H,falseWrapper:$,children:[(0,N.jsxs)(u.Z,{className:"grad-".concat(q.rarity,"star"),sx:{position:"relative",pt:2,px:2},children:[!F&&(0,N.jsx)(p.Z,{color:"primary",onClick:function onClick(){return B.weapons.set(ee,{lock:!oe})},sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:oe?(0,N.jsx)(s.Z,{}):(0,N.jsx)(l.Z,{})}),(0,N.jsxs)(u.Z,{sx:{position:"relative",zIndex:1},children:[(0,N.jsxs)(u.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,N.jsx)(k.Z,{sx:{fontSize:"1.5em"},src:null===(n=y.Z.weaponTypes)||void 0===n?void 0:n[re]}),(0,N.jsx)(f.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,N.jsx)("strong",{children:q.name})})]}),(0,N.jsxs)(f.Z,{component:"span",variant:"h5",children:["Lv. ",Q]}),(0,N.jsxs)(f.Z,{component:"span",variant:"h5",color:"text.secondary",children:["/",W.SJ[U]]}),(0,N.jsxs)(f.Z,{variant:"h6",children:["Refinement ",(0,N.jsx)("strong",{children:Y})]}),(0,N.jsx)(f.Z,{children:(0,N.jsx)(I.q,{stars:q.rarity,colored:!0})})]}),(0,N.jsx)(u.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,N.jsx)(u.Z,{component:"img",src:null!==ae&&void 0!==ae?ae:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,N.jsx)(h.Z,{children:ie.map((function(e){return e.info.name?(0,N.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,N.jsxs)(f.Z,{flexGrow:1,children:[e.info.icon," ",e.info.name]}),(0,N.jsx)(f.Z,{children:(0,A.p)(e)})]},JSON.stringify(e.info)):null}))})]}),(0,N.jsxs)(u.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[(0,N.jsx)(u.Z,{sx:{flexGrow:1},children:G?(0,N.jsx)(b.W,{location:te,setLocation:X,filter:R,autoCompleteProps:{getOptionDisabled:function getOptionDisabled(e){return!e.key},disableClearable:!0}}):(0,N.jsx)(w.Z,{location:te})}),(0,N.jsxs)(x.Z,{sx:{height:"100%"},children:[!!_&&(0,N.jsx)(g.Z,{title:(0,N.jsx)(f.Z,{children:O(o||(o=(0,r.Z)(["page_weapon:edit"])))}),placement:"top",arrow:!0,children:(0,N.jsx)(Z.Z,{color:"info",onClick:function onClick(){return _(ee)},children:(0,N.jsx)(a.G,{icon:i.Xcf,className:"fa-fw"})})}),!!z&&(0,N.jsx)(Z.Z,{color:"error",onClick:function onClick(){return z(ee)},disabled:!!te||oe,children:(0,N.jsx)(a.G,{icon:i.I7k,className:"fa-fw"})}),D]})]})]})})}},70348:function(e,n,t){t.r(n),t.d(n,{default:function(){return PageWeapon}});var o=t(74165),r=t(15861),i=t(29439),a=t(93433),s=t(68087),l=t(64554),c=t(39504),u=t(61889),d=t(90388),p=t(58165),f=t(57246),h=t(47047),x=t(24518),g=t(20890),Z=t(72791),v=t(10757),m=t(22020),y=t(76899),j=t(3992),b=t(91839),w=t(59215),C=t(10157),k=t(73578),I=t(66218),W=t(66101),S=t(68544),P=t(70645),T=t(42320),M=t(24351),A=t(75308),K=t(46956),L=t(60393),N=t(66045),F=t(11400),_=t(90543),z=t(80184),E=Z.lazy((function(){return t.e(361).then(t.bind(t,44361))})),G=(0,Z.lazy)((function(){return t.e(476).then(t.bind(t,74476))})),D={xs:1,sm:2,md:3,lg:3,xl:4},O={xs:10,sm:12,md:24,lg:24,xl:24},B=Object.keys(N.gd),V=(0,A.X)((0,a.Z)(M.wC));function PageWeapon(){var e=(0,m.$)(["page_weapon","ui","weaponNames_gen"]).t,n=(0,Z.useContext)(W.t).database,t=(0,Z.useState)(n.displayWeapon.get()),a=(0,i.Z)(t,2),g=a[0],y=a[1];(0,Z.useEffect)((function(){return n.displayWeapon.follow((function(e,n){return y(n)}))}),[n]);var A=(0,Z.useState)(!1),q=(0,i.Z)(A,2),R=q[0],H=q[1],$=(0,S.Z)(),X=(0,i.Z)($,2),J=X[0],Q=X[1],U=(0,Z.useRef)(null),Y=(0,Z.useState)(0),ee=(0,i.Z)(Y,2),ne=ee[0],te=ee[1];(0,Z.useEffect)((function(){return v.ZP.send({hitType:"pageview",page:"/weapon"}),n.weapons.followAny((function(e,n){return("new"===n||"remove"===n)&&Q()}))}),[Q,n]);var oe=(0,P.Z)(),re=O[oe],ie=(0,T.Z)((function(){return I.Z.getAll}),[]),ae=(0,Z.useCallback)(function(){var t=(0,r.Z)((0,o.Z)().mark((function _callee(t){var r,i;return(0,o.Z)().wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(r=n.weapons.get(t)){o.next=3;break}return o.abrupt("return");case 3:if(i=e("weaponNames_gen:".concat(r.key)),window.confirm(e("removeWeapon",{value:i}))){o.next=6;break}return o.abrupt("return");case 6:n.weapons.remove(t),g.editWeaponId===t&&n.displayWeapon.set({editWeaponId:""});case 8:case"end":return o.stop()}}),_callee)})));return function(e){return t.apply(this,arguments)}}(),[g.editWeaponId,n,e]),se=(0,Z.useCallback)((function(e){n.displayWeapon.set({editWeaponId:e})}),[n]),le=(0,Z.useCallback)((function(e){se(n.weapons.new((0,F.xg)(e)))}),[n,se]),ce=(0,Z.useState)(""),ue=(0,i.Z)(ce,2),de=ue[0],pe=ue[1],fe=(0,Z.useDeferredValue)(de),he=g.sortType,xe=g.ascending,ge=g.weaponType,Ze=g.rarity,ve=(0,Z.useMemo)((function(){var e,t=n.weapons.values,o=t.length;if(!ie)return{weaponIdList:[],totalWeaponNum:o};var r=t.filter((0,K.C)({weaponType:ge,rarity:Ze,name:fe},(0,N.Xg)(ie))).sort((0,K.e)(null!==(e=N.gd[he])&&void 0!==e?e:[],xe,(0,N.Sn)(ie))).map((function(e){return e.id}));return J&&{weaponIdList:r,totalWeaponNum:o}}),[J,n,ie,he,xe,Ze,ge,fe]),me=ve.weaponIdList,ye=ve.totalWeaponNum,je=(0,Z.useMemo)((function(){var e=Math.ceil(me.length/re),n=(0,L.uZ)(ne,0,e-1);return{weaponIdsToShow:me.slice(n*re,(n+1)*re),numPages:e,currentPageIndex:n}}),[me,ne,re]),be=je.weaponIdsToShow,we=je.numPages,Ce=je.currentPageIndex,ke=me.length!==ye?"".concat(me.length,"/").concat(ye):"".concat(ye),Ie=(0,Z.useCallback)((function(e,n){var t;null===(t=U.current)||void 0===t||t.scrollIntoView({behavior:"smooth"}),te(n-1)}),[te,U]),We=(0,Z.useCallback)((function(){return n.displayWeapon.set({editWeaponId:""})}),[n]),Se=g.editWeaponId;return(0,Z.useEffect)((function(){Se&&(n.weapons.get(Se)||We())}),[n,Se,We]),(0,z.jsxs)(l.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,z.jsx)(Z.Suspense,{fallback:!1,children:(0,z.jsx)(E,{show:R,onHide:function onHide(){return H(!1)},onSelect:le})}),(0,z.jsx)(Z.Suspense,{fallback:!1,children:(0,z.jsx)(G,{weaponId:Se,footer:!0,onClose:We})}),(0,z.jsx)(j.Z,{ref:U,children:(0,z.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,z.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,z.jsx)(u.ZP,{item:!0,children:(0,z.jsx)(k.Z,{sx:{height:"100%"},onChange:function onChange(e){return n.displayWeapon.set({weaponType:e})},value:ge,size:"small"})}),(0,z.jsx)(u.ZP,{item:!0,children:(0,z.jsx)(b.Z,{sx:{height:"100%"},value:Ze,size:"small",children:M.wC.map((function(e){return(0,z.jsx)(d.Z,{value:e,onClick:function onClick(){return n.displayWeapon.set({rarity:V(Ze,e)})},children:(0,z.jsxs)(l.Z,{display:"flex",gap:1,children:[(0,z.jsx)("strong",{children:e}),(0,z.jsx)(C.q,{stars:1})]})},e)}))})}),(0,z.jsx)(u.ZP,{item:!0,flexGrow:1,children:(0,z.jsx)(p.Z,{autoFocus:!0,size:"small",value:de,onChange:function onChange(e){return pe(e.target.value)},label:e("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),(0,z.jsx)(u.ZP,{item:!0,children:(0,z.jsx)(w.Z,{sx:{height:"100%"},sortKeys:B,value:he,onChange:function onChange(e){return n.displayWeapon.set({sortType:e})},ascending:xe,onChangeAsc:function onChangeAsc(e){return n.displayWeapon.set({ascending:e})}})})]}),(0,z.jsxs)(u.ZP,{container:!0,alignItems:"flex-end",children:[(0,z.jsx)(u.ZP,{item:!0,flexGrow:1,children:(0,z.jsx)(f.Z,{count:we,page:Ce+1,onChange:Ie})}),(0,z.jsx)(u.ZP,{item:!0,children:(0,z.jsx)(ShowingWeapon,{numShowing:be.length,total:ke,t:e})})]})]})}),(0,z.jsxs)(Z.Suspense,{fallback:(0,z.jsx)(h.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[(0,z.jsx)(x.Z,{fullWidth:!0,onClick:function onClick(){return H(!0)},color:"info",startIcon:(0,z.jsx)(s.Z,{}),children:e("page_weapon:addWeapon")}),(0,z.jsx)(u.ZP,{container:!0,spacing:1,columns:D,children:be.map((function(e){return(0,z.jsx)(u.ZP,{item:!0,xs:1,children:(0,z.jsx)(_.Z,{weaponId:e,onDelete:ae,onEdit:se,canEquip:!0})},e)}))})]}),we>1&&(0,z.jsx)(j.Z,{children:(0,z.jsx)(c.Z,{children:(0,z.jsxs)(u.ZP,{container:!0,alignItems:"flex-end",children:[(0,z.jsx)(u.ZP,{item:!0,flexGrow:1,children:(0,z.jsx)(f.Z,{count:we,page:Ce+1,onChange:Ie})}),(0,z.jsx)(u.ZP,{item:!0,children:(0,z.jsx)(ShowingWeapon,{numShowing:be.length,total:ke,t:e})})]})})})]})}function ShowingWeapon(e){var n=e.numShowing,t=e.total,o=e.t;return(0,z.jsx)(g.Z,{color:"text.secondary",children:(0,z.jsxs)(y.c,{t:o,i18nKey:"showingNum",count:n,value:t,children:["Showing ",(0,z.jsx)("b",{children:{count:n}})," out of ",{value:t}," Weapons"]})})}},70645:function(e,n,t){t.d(n,{Z:function(){return useMediaQueryUp}});var o=t(13967),r=t(95193);function useMediaQueryUp(){var e=(0,o.Z)(),n=(0,r.Z)(e.breakpoints.up("sm")),t=(0,r.Z)(e.breakpoints.up("md")),i=(0,r.Z)(e.breakpoints.up("lg"));return(0,r.Z)(e.breakpoints.up("xl"))?"xl":i?"lg":t?"md":n?"sm":"xs"}},74480:function(e,n,t){t.d(n,{Z:function(){return useWeapon}});var o=t(29439),r=t(72791),i=t(66101);function useWeapon(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,r.useContext)(i.t),t=n.database,a=(0,r.useState)(t.weapons.get(e)),s=(0,o.Z)(a,2),l=s[0],c=s[1];return(0,r.useEffect)((function(){return c(t.weapons.get(e))}),[t,e]),(0,r.useEffect)((function(){return e?t.weapons.follow(e,(function(e,n,t){return"update"===n&&c(t)})):void 0}),[e,c,t]),l}},75308:function(e,n,t){t.d(n,{X:function(){return handleMultiSelect}});var o=t(93433),r=t(60393);function handleMultiSelect(e){return function(n,t){var i=n.length;return i===e.length?[t]:1===i&&n[0]===t?(0,o.Z)(e):(0,o.Z)(new Set((0,r.nh)(n,t)))}}},46956:function(e,n,t){t.d(n,{C:function(){return filterFunction},e:function(){return sortFunction}});var o=t(29439),r=t(37762);function sortFunction(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return function(i,a){var s,l=(0,r.Z)(e);try{for(l.s();!(s=l.n()).done;){var c=s.value,u=0,d=t[c],p=d(i),f=d(a);if(0!==(u="string"===typeof p&&"string"===typeof f?p.localeCompare(f):f-p))return o.includes(c)?u:(n?-1:1)*u}}catch(h){l.e(h)}finally{l.f()}return 0}}function filterFunction(e,n){return function(t){return Object.entries(e).every((function(e){var r=(0,o.Z)(e,2),i=r[0],a=r[1];return n[i]&&n[i](t,a)}))}}}}]);
//# sourceMappingURL=348.f4707147.chunk.js.map