"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[381,332],{59215:function(e,n,t){t.d(n,{Z:function(){return SortByButton}});var r=t(1413),o=t(45987),a=t(53174),i=t(54483),l=t(64554),c=t(2199),s=t(23786),d=t(24518),u=t(22020),h=t(76899),x=t(33890),p=t(80184),f=["sortKeys","value","onChange","ascending","onChangeAsc"];function SortByButton(e){var n=e.sortKeys,t=e.value,g=e.onChange,Z=e.ascending,v=e.onChangeAsc,y=(0,o.Z)(e,f),C=(0,u.$)("ui").t;return(0,p.jsxs)(l.Z,{display:"flex",alignItems:"center",gap:1,children:[(0,p.jsx)(h.c,{t:C,i18nKey:C("sortBy"),children:"Sort by: "}),(0,p.jsxs)(c.Z,(0,r.Z)((0,r.Z)({},y),{},{children:[(0,p.jsx)(x.Z,{title:(0,p.jsx)(h.c,{t:C,i18nKey:C("sortMap.".concat(t)),children:{value:C("sortMap.".concat(t))}}),children:n.map((function(e){return(0,p.jsx)(s.Z,{selected:t===e,disabled:t===e,onClick:function onClick(){return g(e)},children:C("sortMap.".concat(e))},e)}))}),(0,p.jsx)(d.Z,{onClick:function onClick(){return v(!Z)},startIcon:(0,p.jsx)(i.G,{icon:Z?a.Pa6:a.xrW,className:"fa-fw"}),children:Z?(0,p.jsx)(h.c,{t:C,i18nKey:"ascending",children:"Ascending"}):(0,p.jsx)(h.c,{t:C,i18nKey:"descending",children:"Descending"})})]}))]})}},48510:function(e,n,t){t.d(n,{Z:function(){return ElementToggle}});var r=t(1413),o=t(45987),a=t(93433),i=t(72466),l=t(64554),c=t(24351),s=t(75308),d=t(66934),u=t(90388),h=(0,d.ZP)(u.Z,{shouldForwardProp:function shouldForwardProp(e){return"baseColor"!==e&&"selectedColor"!==e}})((function(e){var n=e.theme,t=e.baseColor,r=void 0===t?"secondary":t,o=e.selectedColor,a=void 0===o?"success":o;return{"&":{backgroundColor:n.palette[r].main,color:n.palette[r].contrastText},"&:hover":{backgroundColor:n.palette[r].dark},"&.Mui-selected":{backgroundColor:n.palette[a].main,color:n.palette[a].contrastText},"&.Mui-selected:hover":{backgroundColor:n.palette[a].dark},"&.Mui-disabled":{backgroundColor:n.palette[r].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:n.palette[a].dark}}})),x=t(75545),p=t(80184),f=["value","onChange"],g=(0,s.X)((0,a.Z)(c.N));function ElementToggle(e){var n=e.value,t=e.onChange,a=(0,o.Z)(e,f);return(0,p.jsx)(i.Z,(0,r.Z)((0,r.Z)({exclusive:!0,value:n},a),{},{children:c.N.map((function(e){return(0,p.jsx)(h,{value:e,selectedColor:e,onClick:function onClick(){return t(g(n,e))},children:(0,p.jsx)(l.Z,{sx:{fontSize:"2em",lineHeight:1},children:x.Z[e]})},e)}))}))}},73578:function(e,n,t){t.d(n,{Z:function(){return WeaponToggle}});var r=t(1413),o=t(45987),a=t(93433),i=t(90388),l=t(10658),c=t(24351),s=t(75308),d=t(55942),u=t(91839),h=t(80184),x=["value","onChange"],p=(0,s.X)((0,a.Z)(c.yd));function WeaponToggle(e){var n=e.value,t=e.onChange,a=(0,o.Z)(e,x);return(0,h.jsx)(u.Z,(0,r.Z)((0,r.Z)({exclusive:!0,value:n},a),{},{children:c.yd.map((function(e){var r;return(0,h.jsx)(i.Z,{value:e,onClick:function onClick(){return t(p(n,e))},children:(0,h.jsx)(d.Z,{src:null===(r=l.Z.weaponTypes)||void 0===r?void 0:r[e],size:2})},e)}))}))}},4332:function(e,n,t){t.r(n),t.d(n,{default:function(){return CharacterSelectionModal}});var r=t(4942),o=t(1413),a=t(45987),i=t(93433),l=t(29439),c=t(39504),s=t(64554),d=t(58165),u=t(94721),h=t(61889),x=t(66934),p=t(40165),f=t(69293),g=t(66647),Z=t(20890),v=t(72791),y=t(22020),C=t(3992),j=t(71310),m=t(30865),k=t(68198),b=t(9321),w=t(59215),S=t(25617),T=t(10157),M=t(48510),z=t(73578),I=t(13746),K=t(947),D=t(2139),N=t(66101),P=t(13434),A=t(12761),W=t(68544),V=t(42320),B=t(24351),E=t(50921),_=t(46956),F=t(80184),G=["className"],H=Object.keys(E.V3);function CharacterSelectionModal(e){var n=e.show,t=e.onHide,r=e.onSelect,o=e.filter,a=void 0===o?function(){return!0}:o,x=e.newFirst,p=void 0!==x&&x,f=(0,y.$)(["page_character","charNames_gen"]).t,g=(0,v.useContext)(N.t).database,Z=(0,v.useState)((function(){return g.displayCharacter.get()})),j=(0,l.Z)(Z,2),m=j[0],S=j[1];(0,v.useEffect)((function(){return g.displayCharacter.follow((function(e,n){return S(n)}))}),[g,S]);var T=(0,V.Z)((function(){return K.Z.getAll}),[]),D=(0,W.Z)(),P=(0,l.Z)(D,2),A=P[0],G=P[1];(0,v.useEffect)((function(){return g.charMeta.followAny((function(e){return G()}))}),[G,g]);var L=(0,v.useState)(""),X=(0,l.Z)(L,2),$=X[0],q=X[1],J=(0,v.useDeferredValue)($),O=(0,v.useDeferredValue)(m),R=(0,v.useDeferredValue)(A),U=(0,v.useMemo)((function(){var e;if(!T)return[];var n=O.element,t=O.weaponType,r=O.sortType,o=O.ascending,l=[].concat((0,i.Z)(p?["new"]:[]),(0,i.Z)(null!==(e=E.V3[r])&&void 0!==e?e:[]));return R&&B.IV.filter((function(e){return a(g.chars.get(e),T[e])})).filter((0,_.C)({element:n,weaponType:t,name:J},(0,E.zU)(g,T))).sort((0,_.e)(l,o,(0,E._L)(g,T),["new","favorite"]))}),[g,p,O,T,R,J,a]);if(!T)return null;var Q=m.weaponType,Y=m.element,ee=m.sortType,ne=m.ascending;return(0,F.jsx)(b.Z,{open:n,onClose:t,sx:{"& .MuiContainer-root":{justifyContent:"normal"}},children:(0,F.jsxs)(C.Z,{children:[(0,F.jsxs)(c.Z,{sx:{py:1,display:"flex",alignItems:"center",gap:1,flexWrap:"wrap"},children:[(0,F.jsx)(z.Z,{sx:{height:"100%"},onChange:function onChange(e){return g.displayCharacter.set({weaponType:e})},value:Q,size:"small"}),(0,F.jsx)(M.Z,{sx:{height:"100%"},onChange:function onChange(e){return g.displayCharacter.set({element:e})},value:Y,size:"small"}),(0,F.jsx)(s.Z,{flexGrow:1,children:(0,F.jsx)(d.Z,{autoFocus:!0,value:$,onChange:function onChange(e){return q(e.target.value)},label:f("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),(0,F.jsx)(w.Z,{sx:{height:"100%"},sortKeys:H,value:ee,onChange:function onChange(e){return g.displayCharacter.set({sortType:e})},ascending:ne,onChangeAsc:function onChangeAsc(e){return g.displayCharacter.set({ascending:e})}}),(0,F.jsx)(k.Z,{onClick:t})]}),(0,F.jsx)(u.Z,{}),(0,F.jsx)(I.R.Provider,{value:{teamData:void 0},children:(0,F.jsx)(c.Z,{children:(0,F.jsx)(h.ZP,{container:!0,spacing:1,columns:{xs:2,sm:3,md:4,lg:5},children:U.map((function(e){return(0,F.jsx)(h.ZP,{item:!0,xs:1,children:(0,F.jsx)(SelectionCard,{characterKey:e,onClick:function onClick(){t(),null===r||void 0===r||r(e)}})},e)}))})})})]})})}var L=(0,x.ZP)((function(e){var n=e.className,t=(0,a.Z)(e,G);return(0,F.jsx)(p.Z,(0,o.Z)((0,o.Z)({},t),{},{classes:{popper:n}}))}))((0,r.Z)({},"& .".concat(f.Z.tooltip),{padding:0}));function SelectionCard(e){var n,t=e.characterKey,r=e.onClick,o=(0,A.Z)().gender,a=(0,V.Z)((function(){return K.Z.get(t,o)}),[t,o]),i=(0,P.Z)(t),l=null!==i&&void 0!==i?i:{},c=l.level,d=void 0===c?1:c,u=l.ascension,h=void 0===u?0:u,x=l.constellation,p=void 0===x?0:x;return(0,F.jsx)(L,{enterDelay:300,enterNextDelay:300,arrow:!0,placement:"bottom",title:(0,F.jsx)(s.Z,{sx:{width:300},children:(0,F.jsx)(m.Z,{hideStats:!0,characterKey:t})}),children:(0,F.jsx)(s.Z,{children:(0,F.jsx)(j.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:(0,F.jsx)(g.Z,{onClick:r,children:(0,F.jsxs)(s.Z,{display:"flex",position:"relative",className:"grad-".concat(null===a||void 0===a?void 0:a.rarity,"star"),sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:"url(".concat(null===a||void 0===a?void 0:a.bannerImg,")"),backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[(0,F.jsx)(s.Z,{flexShrink:1,sx:{maxWidth:{xs:"33%",lg:"30%"}},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1,children:(0,F.jsx)(s.Z,{component:"img",src:null===a||void 0===a?void 0:a.thumbImg,width:"100%",height:"auto",maxWidth:256,sx:{mt:"auto"}})}),(0,F.jsxs)(s.Z,{flexGrow:1,sx:{pr:1},display:"flex",flexDirection:"column",zIndex:1,justifyContent:"space-evenly",children:[(0,F.jsx)(Z.Z,{variant:"body2",children:(0,F.jsx)(S.Z,{color:null===a||void 0===a?void 0:a.elementKey,sx:{opacity:.85,textShadow:"0 0 5px gray"},children:null===a||void 0===a?void 0:a.name})}),i?(0,F.jsxs)(s.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,F.jsxs)(s.Z,{sx:{textShadow:"0 0 5px gray"},children:[(0,F.jsxs)(Z.Z,{variant:"body2",component:"span",whiteSpace:"nowrap",children:["Lv. ",d]}),(0,F.jsxs)(Z.Z,{variant:"body2",component:"span",color:"text.secondary",children:["/",D.SJ[h]]})]}),(0,F.jsxs)(Z.Z,{variant:"body2",children:["C",p]})]}):(0,F.jsx)(Z.Z,{component:"span",variant:"body2",children:(0,F.jsx)(S.Z,{children:"NEW"})}),(0,F.jsx)(Z.Z,{variant:"body2",children:(0,F.jsx)(T.q,{stars:null!==(n=null===a||void 0===a?void 0:a.rarity)&&void 0!==n?n:1,colored:!0})})]})]})})})})})}}}]);
//# sourceMappingURL=381.e448d54e.chunk.js.map