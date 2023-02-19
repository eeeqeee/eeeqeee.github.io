"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[290],{52991:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(64554),a=t(20890),i=t(10658),o=t(98620),c=t(31148),s=t(42320),l=t(24351),u=t(3992),d=t(25617),h=t(75545),f=t(64929),x=t(80184);function p(e){var n=e.artifactObj,t=e.slotKey,p=(0,s.Z)((function(){return(null===n||void 0===n?void 0:n.setKey)&&c.y.get(n.setKey)}),[null===n||void 0===n?void 0:n.setKey]);if(!n||!p)return(0,x.jsx)(u.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:(0,x.jsx)(r.Z,{sx:{width:"100%",pb:"100%",position:"relative"},children:(0,x.jsx)(r.Z,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:i.Z.slot[t]})})});var Z=n.mainStatKey,v=n.rarity,m=n.level,g=l.Kj.find((function(e){return n.mainStatKey.includes(e)})),y=null!==g&&void 0!==g?g:"secondary";return(0,x.jsx)(f.Z,{art:n,children:(0,x.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[(0,x.jsx)(r.Z,{component:"img",className:"grad-".concat(v,"star"),src:p.slotIcons[t],maxWidth:"100%",maxHeight:"100%"}),(0,x.jsx)(a.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:(0,x.jsx)("strong",{children:(0,x.jsx)(d.Z,{sx:{p:.5},color:o.ZP.levelVariant(m),children:(0,x.jsxs)("strong",{children:["+",m]})})})}),(0,x.jsx)(a.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:(0,x.jsx)(d.Z,{color:y,sx:{p:.5},children:h.Z[Z]})})]})})}},64929:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(64554),a=t(47047),i=t(20890),o=t(72791),c=t(98620),s=t(31148),l=t(79406),u=t(42320),d=t(60393),h=t(96106),f=t(25617),x=t(10157),p=t(75545),Z=t(95614),v=t(80184);function m(e){var n=e.art,t=e.children,i=(0,v.jsx)(r.Z,{children:(0,v.jsx)(a.Z,{variant:"rectangular",width:100,height:100})}),c=(0,v.jsx)(o.Suspense,{fallback:i,children:(0,v.jsx)(g,{art:n})});return(0,v.jsx)(h.Z,{placement:"top",title:c,disableInteractive:!0,children:t})}function g(e){var n,t=e.art,a=(0,u.Z)((function(){return s.y.get(t.setKey)}),[t.setKey]),o=t.slotKey,h=t.level,m=t.rarity,g=t.mainStatKey,y=t.substats,j=null===a||void 0===a?void 0:a.getSlotName(o),b=l.ZP.unit(g),w=p.Z[g],k=l.ZP.getVariant(g);return(0,v.jsxs)(r.Z,{p:1,children:[(0,v.jsxs)(i.Z,{variant:"h6",children:[(0,Z.Ir)(o)," ",j]}),(0,v.jsxs)(i.Z,{variant:"subtitle1",color:"".concat(k,".main"),children:[w," ",l.ZP.get(g)," ",(0,l.qs)(null!==(n=c.ZP.mainStatValue(g,m,h))&&void 0!==n?n:0,l.ZP.unit(g)),b]}),(0,v.jsxs)(i.Z,{variant:"subtitle2",sx:{display:"flex",justifyContent:"space-between"},children:[(0,v.jsx)(x.q,{stars:m}),(0,v.jsxs)(f.Z,{color:c.ZP.levelVariant(h),children:["+",h]})," "]}),(0,v.jsx)(r.Z,{py:1,children:y.map((function(e){return!!e.value&&(0,v.jsxs)(i.Z,{color:"roll".concat((0,d.uZ)(e.rolls.length,1,6),".main"),children:[p.Z[e.key]," ",l.ZP.getStr(e.key)," ",(0,v.jsx)("strong",{children:"+".concat((0,l.qs)(e.value,l.ZP.unit(e.key))).concat(l.ZP.unit(e.key))})]},e.key)}))}),(0,v.jsx)(i.Z,{color:"success.main",children:null===a||void 0===a?void 0:a.name})]})}},30865:function(e,n,t){t.d(n,{Z:function(){return V}});var r=t(29439),a=t(14361),i=t(90690),o=t(66647),c=t(47047),s=t(64554),l=t(13400),u=t(39504),d=t(61889),h=t(81918),f=t(20890),x=t(72791),p=t(97714),Z=t(13746),v=t(947),m=t(2139),g=t(66101),y=t(27235),j=t(13434),b=t(50920),w=t(65106),k=t(12761),K=t(42320),C=t(47639),S=t(24351),D=t(60393),H=t(52991),q=t(71310),P=t(20005),I=t(88034),B=t(25617),W=t(10157),E=t(77208),R=t(66218),T=t(73036),O=t(18327),_=t(74480),z=t(3992),G=t(80184);function M(e){var n=e.weaponId,t=(0,_.Z)(n),r=(0,K.Z)((function(){return(null===t||void 0===t?void 0:t.key)&&R.Z.get(t.key)}),[null===t||void 0===t?void 0:t.key]),a=(0,x.useMemo)((function(){return r&&t&&(0,T.mP)([r.data,(0,T.v0)(t)])}),[r,t]);return t&&r&&a?(0,G.jsx)(z.Z,{children:(0,G.jsxs)(s.Z,{display:"flex",children:[(0,G.jsx)(s.Z,{flexShrink:1,maxWidth:"35%",display:"flex",flexDirection:"column",alignContent:"flex-end",className:"grad-".concat(r.rarity,"star"),children:(0,G.jsx)(s.Z,{component:"img",src:r.getImg(t.ascension),width:"100%",height:"auto",sx:{mt:"auto"}})}),(0,G.jsxs)(s.Z,{flexGrow:1,sx:{p:1},children:[(0,G.jsx)(f.Z,{variant:"body2",gutterBottom:!0,children:(0,G.jsx)("strong",{children:null===r||void 0===r?void 0:r.name})}),(0,G.jsxs)(f.Z,{variant:"subtitle1",sx:{display:"flex",gap:1},gutterBottom:!0,children:[(0,G.jsxs)(B.Z,{color:"primary",children:["Lv. ",R.Z.getLevelString(t)]}),r.hasRefinement&&(0,G.jsxs)(B.Z,{color:"info",children:["R",t.refinement]})]}),(0,G.jsxs)(f.Z,{variant:"subtitle1",sx:{display:"flex",gap:1},children:[(0,G.jsx)(Q,{node:a.get(y.ri.weapon.main)}),(0,G.jsx)(Q,{node:a.get(y.ri.weapon.sub)})]})]})]})}):null}function Q(e){var n=e.node;return(0,G.jsxs)(B.Z,{color:"secondary",children:[n.info.icon," ",(0,O.p)(n)]})}var N=t(84684);function V(e){var n,t,r=e.characterKey,u=e.artifactChildren,d=e.weaponChildren,h=e.characterChildren,f=e.onClick,p=e.onClickHeader,m=e.onClickTeammate,y=e.footer,S=e.hideStats,D=e.isTeammateCard,H=(0,x.useContext)(g.t).database,I=(0,x.useContext)(Z.R).teamData,B=null!==(n=(0,C.Z)(I?"":r))&&void 0!==n?n:I,W=(0,j.Z)(r),E=(0,k.Z)().gender,R=(0,K.Z)((function(){return v.Z.get(r,E)}),[r,E]),T=(0,b.Z)(r),O=null===B||void 0===B||null===(t=B[r])||void 0===t?void 0:t.target,_=(0,x.useCallback)((function(){return r&&(null===f||void 0===f?void 0:f(r))}),[r,f]),z=(0,x.useCallback)((function(e){return(0,G.jsx)(o.Z,{onClick:_,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[_]),M=(0,x.useMemo)((function(){return W&&R&&{character:W,characterSheet:R,characterDispatch:T}}),[W,R,T]),Q=(0,x.useMemo)((function(){return O&&B&&{data:O,teamData:B}}),[O,B]),N=(0,w.Z)(r).favorite;return(0,G.jsx)(x.Suspense,{fallback:(0,G.jsx)(c.Z,{variant:"rectangular",width:300,height:600}),children:(0,G.jsxs)(q.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,G.jsx)(s.Z,{sx:{display:"flex",position:"absolute",zIndex:2,opacity:.7},children:(0,G.jsx)(l.Z,{sx:{p:.5},onClick:function(e){return H.charMeta.set(r,{favorite:!N})},children:N?(0,G.jsx)(a.Z,{}):(0,G.jsx)(i.Z,{})})}),(0,G.jsx)(P.Z,{condition:!!f,wrapper:z,children:W&&Q&&M?(0,G.jsx)(A,{characterContextObj:M,dataContextObj:Q,characterKey:r,onClick:f,onClickHeader:p,isTeammateCard:D,character:W,onClickTeammate:m,hideStats:S,weaponChildren:d,artifactChildren:u,characterChildren:h}):(0,G.jsx)(F,{characterKey:r})}),y]})})}function A(e){var n=e.characterContextObj,t=e.dataContextObj,r=e.characterKey,a=e.onClick,i=e.onClickHeader,o=e.isTeammateCard,c=e.character,s=e.onClickTeammate,l=e.hideStats,h=e.weaponChildren,f=e.artifactChildren,x=e.characterChildren;return(0,G.jsx)(p.K.Provider,{value:n,children:(0,G.jsxs)(Z.R.Provider,{value:t,children:[(0,G.jsx)(J,{characterKey:r,onClick:a?void 0:i,children:(0,G.jsx)(L,{})}),(0,G.jsxs)(u.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1},children:[(0,G.jsx)(U,{}),!o&&(0,G.jsxs)(d.ZP,{container:!0,columns:4,spacing:.75,children:[(0,G.jsx)(d.ZP,{item:!0,xs:1,height:"100%",children:(0,G.jsx)(E.Z,{weaponId:c.equippedWeapon})}),(0,D.w6)(0,2).map((function(e){return(0,G.jsx)(d.ZP,{item:!0,xs:1,height:"100%",children:(0,G.jsx)(N.Z,{characterKey:c.team[e],onClick:a?void 0:s,index:e})},e)}))]}),o&&(0,G.jsx)(M,{weaponId:c.equippedWeapon}),!o&&!l&&(0,G.jsx)(X,{}),h,f,x]})]})})}function F(e){var n=e.characterKey;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(J,{characterKey:n,children:(0,G.jsx)(Y,{characterKey:n})}),(0,G.jsx)(u.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1,height:"100%"}})]})}function J(e){var n=e.children,t=e.characterKey,r=e.onClick,a=(0,k.Z)().gender,i=(0,K.Z)((function(){return v.Z.get(t,a)}),[t,a]),c=(0,x.useCallback)((function(e){return(0,G.jsx)(o.Z,{onClick:function(){return t&&(null===r||void 0===r?void 0:r(t))},sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[r,t]);return i?(0,G.jsx)(P.Z,{condition:!!r,wrapper:c,children:(0,G.jsxs)(s.Z,{display:"flex",position:"relative",className:"grad-".concat(i.rarity,"star"),sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.7,backgroundImage:"url(".concat(i.bannerImg,")"),backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[(0,G.jsx)(s.Z,{flexShrink:1,sx:{maxWidth:{xs:"40%",lg:"40%"}},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1,children:(0,G.jsx)(s.Z,{component:"img",src:i.thumbImg,width:"100%",height:"auto",maxWidth:256,sx:{mt:"auto"}})}),(0,G.jsx)(s.Z,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,children:n})]})}):null}function L(){var e=(0,x.useContext)(p.K).characterSheet,n=(0,x.useContext)(Z.R).data,t=n.get(y.ri.charEle).value,r=n.get(y.ri.lvl).value,a=n.get(y.ri.constellation).value,i=n.get(y.ri.asc).value,o=n.get(y.ri.bonus.auto).value,c=n.get(y.ri.bonus.skill).value,s=n.get(y.ri.bonus.burst).value,l=n.get(y.ri.total.auto).value,u=n.get(y.ri.total.skill).value,v=n.get(y.ri.total.burst).value;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h.Z,{label:(0,G.jsx)(f.Z,{variant:"subtitle1",children:e.name}),size:"small",color:t,sx:{opacity:.85}}),(0,G.jsxs)(d.ZP,{container:!0,spacing:1,flexWrap:"nowrap",children:[(0,G.jsxs)(d.ZP,{item:!0,sx:{textShadow:"0 0 5px gray"},children:[(0,G.jsxs)(f.Z,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",r]}),(0,G.jsxs)(f.Z,{component:"span",variant:"h6",color:"text.secondary",children:["/",m.SJ[i]]})]}),(0,G.jsx)(d.ZP,{item:!0,children:(0,G.jsx)(f.Z,{variant:"h6",children:(0,G.jsxs)(B.Z,{children:["C",a]})})})]}),(0,G.jsxs)(d.ZP,{container:!0,spacing:1,flexWrap:"nowrap",children:[(0,G.jsx)(d.ZP,{item:!0,children:(0,G.jsx)(h.Z,{color:o?"info":"secondary",label:(0,G.jsx)("strong",{children:l})})}),(0,G.jsx)(d.ZP,{item:!0,children:(0,G.jsx)(h.Z,{color:c?"info":"secondary",label:(0,G.jsx)("strong",{children:u})})}),(0,G.jsx)(d.ZP,{item:!0,children:(0,G.jsx)(h.Z,{color:s?"info":"secondary",label:(0,G.jsx)("strong",{children:v})})})]}),(0,G.jsx)(f.Z,{mt:1,children:(0,G.jsx)(W.q,{stars:e.rarity,colored:!0})})]})}function Y(e){var n=e.characterKey,t=(0,x.useContext)(g.t).database,r=(0,k.Z)().gender,a=(0,K.Z)((function(){return v.Z.get(n,r)}),[n,t,r]);return a?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(h.Z,{label:(0,G.jsx)(f.Z,{variant:"subtitle1",children:a.name}),size:"small",color:a.elementKey,sx:{opacity:.85}}),(0,G.jsx)(s.Z,{mt:1,children:(0,G.jsx)(f.Z,{variant:"h4",children:(0,G.jsx)(B.Z,{children:"NEW"})})}),(0,G.jsx)(f.Z,{mt:1.5,children:(0,G.jsx)(W.q,{stars:a.rarity,colored:!0})})]}):null}function U(){var e=(0,x.useContext)(g.t).database,n=(0,x.useContext)(Z.R).data,t=(0,x.useMemo)((function(){return S.eV.map((function(t){var r;return[t,e.arts.get(null!==(r=n.get(y.ri.art[t].id).value)&&void 0!==r?r:"")]}))}),[n,e]);return(0,G.jsx)(d.ZP,{direction:"row",container:!0,spacing:.75,columns:5,children:t.map((function(e){var n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,G.jsx)(d.ZP,{item:!0,xs:1,children:(0,G.jsx)(H.Z,{artifactObj:a,slotKey:t})},t)}))})}function X(){var e=(0,x.useContext)(Z.R).data;return(0,G.jsxs)(s.Z,{sx:{width:"100%"},children:[Object.values(e.getDisplay().basic).map((function(e){return(0,G.jsx)(I.JW,{node:e},JSON.stringify(e.info))})),e.get(y.ri.special).info.name&&(0,G.jsxs)(s.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,G.jsx)(f.Z,{flexGrow:1,children:(0,G.jsx)("strong",{children:"Specialized:"})}),e.get(y.ri.special).info.icon,(0,G.jsx)(f.Z,{children:e.get(y.ri.special).info.name})]})]})}},84684:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(66647),a=t(47047),i=t(20890),o=t(64554),c=t(72791),s=t(10658),l=t(947),u=t(2139),d=t(13434),h=t(12761),f=t(42320),x=t(96106),p=t(3992),Z=t(20005),v=t(25617),m=t(75545),g=t(80184);function y(e){var n=e.characterKey,t=void 0===n?"":n,y=e.index,j=void 0===y?-1:y,b=e.onClick,w=(0,h.Z)().gender,k=(0,f.Z)((function(){return l.Z.get(t,w)}),[t,w]),K=(0,d.Z)(t),C=(0,c.useCallback)((function(){return t&&(null===b||void 0===b?void 0:b(t))}),[t,b]),S=(0,c.useCallback)((function(e){return(0,g.jsx)(r.Z,{onClick:C,children:e})}),[C]);if(k&&K){var D=(0,g.jsx)(c.Suspense,{fallback:(0,g.jsx)(a.Z,{variant:"text",width:100}),children:(0,g.jsxs)(i.Z,{children:[k.elementKey&&m.Z[k.elementKey]," ",k.name]})});return(0,g.jsx)(p.Z,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:(0,g.jsxs)(Z.Z,{condition:!!b,wrapper:S,children:[(0,g.jsx)(x.Z,{placement:"top",title:D,children:(0,g.jsx)(o.Z,{display:"flex",className:"grad-".concat(k.rarity,"star"),children:(0,g.jsx)(o.Z,{component:"img",src:k.thumbImgSide,maxWidth:"100%",maxHeight:"100%",sx:{transform:"scale(1.4)",transformOrigin:"bottom"}})})}),(0,g.jsx)(i.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:(0,g.jsx)("strong",{children:(0,g.jsxs)(v.Z,{color:"primary",children:[K.level,"/",u.SJ[K.ascension]]})})}),(0,g.jsx)(i.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:(0,g.jsx)("strong",{children:(0,g.jsxs)(v.Z,{color:"secondary",children:["C",K.constellation]})})})]})})}return(0,g.jsx)(p.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:(0,g.jsx)(o.Z,{component:"img",src:s.Z.team["team".concat(j+2)],sx:{width:"75%",height:"auto",opacity:.7}})})}},20005:function(e,n,t){function r(e){var n=e.condition,t=e.wrapper,r=e.falseWrapper,a=e.children;return n?t(a):r?r(a):a}t.d(n,{Z:function(){return r}})},10157:function(e,n,t){t.d(n,{q:function(){return l}});var r=t(93433),a=t(53174),i=t(54483),o=t(91702),c=t(80184),s=function(){return(0,c.jsx)(i.G,{icon:a.Tab})},l=function(e){var n=e.stars,t=e.colored,a=void 0!==t&&t;return(0,c.jsx)(o.Z,{color:a?"warning":void 0,children:n?(0,r.Z)(Array(n).keys()).map((function(e,n){return(0,c.jsx)(s,{},n)})):null})}},77208:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(64554),a=t(20890),i=t(72791),o=t(66218),c=t(27235),s=t(73036),l=t(18327),u=t(42320),d=t(74480),h=t(3992),f=t(25617),x=t(41717),p=t(80184);function Z(e){var n=e.weaponId,t=(0,d.Z)(n),l=(0,u.Z)((function(){return(null===t||void 0===t?void 0:t.key)&&o.Z.get(t.key)}),[null===t||void 0===t?void 0:t.key]),Z=(0,i.useMemo)((function(){return l&&t&&(0,s.mP)([l.data,(0,s.v0)(t)])}),[l,t]);if(!t||!l||!Z)return null;var m=(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(v,{node:Z.get(c.ri.weapon.main)}),(0,p.jsx)(v,{node:Z.get(c.ri.weapon.sub)})]});return(0,p.jsxs)(h.Z,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[(0,p.jsx)(r.Z,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:"grad-".concat(l.rarity,"star"),children:(0,p.jsx)(x.Z,{sheet:l,addlText:m,children:(0,p.jsx)(r.Z,{component:"img",src:l.getImg(t.ascension),maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),(0,p.jsx)(a.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:(0,p.jsx)("strong",{children:(0,p.jsx)(f.Z,{color:"primary",children:o.Z.getLevelString(t)})})}),l.hasRefinement&&(0,p.jsx)(a.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:(0,p.jsx)("strong",{children:(0,p.jsxs)(f.Z,{color:"secondary",children:["R",t.refinement]})})})]})}function v(e){var n=e.node;return(0,p.jsxs)(a.Z,{children:[n.info.icon," ",(0,l.p)(n)]})}},41717:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(47047),a=t(20890),i=t(72791),o=t(10658),c=t(96106),s=t(55942),l=t(80184);function u(e){var n=e.sheet,t=e.addlText,u=e.children,d=(0,l.jsxs)(i.Suspense,{fallback:(0,l.jsx)(r.Z,{variant:"text",width:100}),children:[(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(s.Z,{src:o.Z.weaponTypes[n.weaponType]})," ",n.name]}),t]});return(0,l.jsx)(c.Z,{placement:"top",title:d,disableInteractive:!0,children:u})}},11741:function(e,n,t){t.d(n,{J:function(){return A},Y:function(){return F}});var r=t(1413),a=t(93433),i=t(75545),o=t(66624),c=t(27235),s=t(73036),l=t(78661),u=t(79406),d=t(24351),h=t(60393),f=t(53343),x=t(80184),p=function(e){return(0,x.jsx)(o.v,{ns:"elementalResonance_gen",key18:e})},Z=function(e){return(0,x.jsx)(o.v,{ns:"elementalResonance",key18:e})},v=l.Sm.apply(void 0,(0,a.Z)(d.N.map((function(e){return c.uK[e]})))),m=(0,h.Uq)(d.Kj,(function(e){return["".concat(e,"_res_"),(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(c.uK.ele,4,(0,l.aQ)(.15)))]})),g={name:p("ProtectiveCanopy.name"),desc:p("ProtectiveCanopy.desc"),icon:(0,x.jsxs)("span",{children:[i.Z.anemo," ",i.Z.geo," ",i.Z.pyro," ",i.Z.hydro," ",i.Z.cryo," ",i.Z.electro," x4"]}),canShow:function(e){return 4===d.N.filter((function(n){return e.get(c.uK[n]).value>=1})).length},sections:[{teamBuff:!0,fields:Object.values(m).map((function(e){return{node:e}}))}]},y=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.pyro,2,(0,l.aQ)(.25)))),j={name:p("FerventFlames.name"),desc:p("FerventFlames.desc"),icon:(0,x.jsxs)("span",{children:[i.Z.pyro," ",i.Z.pyro]}),canShow:function(e){return e.get(c.uK.pyro).value>=2&&e.get(v).value>=4},sections:[{teamBuff:!0,fields:[{text:(0,f.st)("effectDuration.cryo"),value:-40,unit:"%"},{node:y}]}]},b=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.hydro,2,(0,l.aQ)(.25)))),w={name:p("SoothingWater.name"),desc:p("SoothingWater.desc"),icon:(0,x.jsxs)("span",{children:[i.Z.hydro," ",i.Z.hydro]}),canShow:function(e){return e.get(c.uK.hydro).value>=2&&e.get(v).value>=4},sections:[{teamBuff:!0,fields:[{text:(0,f.st)("effectDuration.pyro"),value:-40,unit:"%"},{node:b}]}]},k=["resonance","ShatteringIce"],K=(0,f.v9)(k),C=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.cryo,2,(0,l.Dg)(K,"on",(0,l.aQ)(.15))))),S={name:p("ShatteringIce.name"),desc:p("ShatteringIce.desc"),icon:(0,x.jsxs)("span",{children:[i.Z.cryo," ",i.Z.cryo]}),canShow:function(e){return e.get(c.uK.cryo).value>=2&&e.get(v).value>=4},sections:[{teamBuff:!0,fields:[{text:(0,f.st)("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:k,value:K,name:Z("ShatteringIce.cond"),header:{title:p("ShatteringIce.name"),icon:i.Z.cryo},states:{on:{fields:[{node:C}]}}}]},D={name:p("HighVoltage.name"),desc:p("HighVoltage.desc"),icon:(0,x.jsxs)("span",{children:[i.Z.electro," ",i.Z.electro]}),canShow:function(e){return e.get(c.uK.electro).value>=2&&e.get(v).value>=4},sections:[{teamBuff:!0,fields:[{text:(0,f.st)("effectDuration.hydro"),value:-40,unit:"%"}]}]},H=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(-.15)))),q=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(.1)))),P=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.anemo,2,(0,l.aQ)(-.05)))),I={name:p("ImpetuousWinds.name"),desc:p("ImpetuousWinds.desc"),icon:(0,x.jsxs)("span",{children:[i.Z.anemo," ",i.Z.anemo]}),canShow:function(e){return e.get(c.uK.anemo).value>=2&&e.get(v).value>=4},sections:[{teamBuff:!0,fields:[{node:H},{node:q},{node:P}]}]},B=["resonance","EnduringRock"],W=(0,f.v9)(B),E=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.geo,2,(0,l.aQ)(.15)))),R=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.geo,2,(0,l.Dg)(W,"on",(0,l.aQ)(.15))))),T=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.geo,2,(0,l.Dg)(W,"on",(0,l.aQ)(-.2))))),O={name:p("EnduringRock.name"),desc:p("EnduringRock.desc"),icon:(0,x.jsxs)("span",{children:[i.Z.geo," ",i.Z.geo]}),canShow:function(e){return e.get(c.uK.geo).value>=2&&e.get(v).value>=4},sections:[{teamBuff:!0,text:p("EnduringRock.desc"),fields:[{node:E}]},{teamBuff:!0,path:B,value:W,header:{title:p("EnduringRock.name"),icon:i.Z.geo},name:(0,f.st)("protectedByShield"),states:{on:{fields:[{node:R},{node:T},{text:(0,f.el)("duration"),value:15,unit:"s"}]}}}]},_=["resonance","SprawlingCanopy2ele"],z=(0,f.v9)(_),G=["resonance","SprawlingCanopy3ele"],M=(0,f.v9)(G),Q=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.dendro,2,50,(0,r.Z)((0,r.Z)({},u.ZP.info("eleMas")),{},{isTeamBuff:!0})))),N=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.dendro,2,(0,l.Dg)(z,"on",30,(0,r.Z)((0,r.Z)({},u.ZP.info("eleMas")),{},{isTeamBuff:!0}))))),V=(0,l.Dg)(c.qH.activeCharKey,c.qH.charKey,(0,l.ew)(v,4,(0,l.ew)(c.uK.dendro,2,(0,l.Dg)(M,"on",20,(0,r.Z)((0,r.Z)({},u.ZP.info("eleMas")),{},{isTeamBuff:!0}))))),A=[g,j,w,S,D,I,O,{name:p("SprawlingGreenery.name"),desc:p("SprawlingGreenery.desc"),icon:(0,x.jsxs)("span",{children:[i.Z.dendro," ",i.Z.dendro]}),canShow:function(e){return e.get(c.uK.dendro).value>=2&&e.get(v).value>=4},sections:[{teamBuff:!0,text:p("SprawlingGreenery.desc"),fields:[{node:Q}]},{teamBuff:!0,path:_,value:z,header:{title:p("SprawlingGreenery.name"),icon:i.Z.dendro},name:Z("SprawlingGreenery.cond2ele"),states:{on:{fields:[{node:N},{text:(0,f.el)("duration"),value:6,unit:"s"}]}}},{teamBuff:!0,path:G,value:M,header:{title:p("SprawlingGreenery.name"),icon:i.Z.dendro},name:Z("SprawlingGreenery.cond3ele"),states:{on:{fields:[{node:V},{text:(0,f.el)("duration"),value:6,unit:"s"}]}}}]}],F=(0,s.d1)({teamBuff:{premod:(0,r.Z)((0,r.Z)({},m),{},{atk_:y,hp_:b,staminaDec_:H,moveSPD_:q,cdRed_:P,shield_:E,all_dmg_:R,geo_enemyRes_:T,eleMas:(0,l.ce)((0,l.Sm)(Q,N,V),{pivot:!0})}),total:{critRate_:C}}})},65106:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),a=t(72791),i=t(66101);function o(e){var n=(0,a.useContext)(i.t).database,t=(0,a.useState)((function(){return n.charMeta.get(e)})),o=(0,r.Z)(t,2),c=o[0],s=o[1];return(0,a.useEffect)((function(){return n.charMeta.follow(e,(function(e,n,t){return s(t)}))}),[e,n]),(0,a.useEffect)((function(){return s(n.charMeta.get(e))}),[n,e]),c}},13434:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),a=t(72791),i=t(66101);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,a.useContext)(i.t),t=n.database,o=(0,a.useState)(t.chars.get(e)),c=(0,r.Z)(o,2),s=c[0],l=c[1];return(0,a.useEffect)((function(){return l(t.chars.get(e))}),[t,e]),(0,a.useEffect)((function(){return e?t.chars.follow(e,(function(e,n,t){return"update"===n&&l(t)})):void 0}),[e,l,t]),s}},50920:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(93433),a=t(4942),i=t(1413),o=t(72791),c=t(66101),s=t(60393);function l(e){var n=(0,o.useContext)(c.t).database;return(0,o.useCallback)((function(t){if(e){var o=n.chars.get(e);if(o)if("type"in t)switch(t.type){case"enemyOverride":var c=o.enemyOverride,l=t.statKey,u=t.value;if(c[l]===u)break;n.chars.set(e,(0,i.Z)((0,i.Z)({},o),{},{enemyOverride:(0,i.Z)((0,i.Z)({},c),{},(0,a.Z)({},l,u))}));break;case"editStats":var d=t.statKey,h=t.value,f=(0,s.I8)(o.bonusStats);if(f[d]===h)break;h?f[d]=h:delete f[d],n.chars.set(e,(0,i.Z)((0,i.Z)({},o),{},{bonusStats:f}));break;case"resetStats":var x=t.statKey,p=o.bonusStats;delete p[x],n.chars.set(e,(0,i.Z)((0,i.Z)({},o),{},{bonusStats:p}));break;case"teamConditional":var Z=t.teamMateKey,v=t.conditional,m=(0,s.I8)(o.teamConditional);m[Z]=v,n.chars.set(e,(0,i.Z)((0,i.Z)({},o),{},{teamConditional:m}));break;case"team":var g=o.team,y=(0,r.Z)(g),j=t.index,b=t.charKey;y[j]=b,n.chars.set(e,(0,i.Z)((0,i.Z)({},o),{},{team:y}))}else n.chars.set(e,(0,i.Z)((0,i.Z)({},o),t))}}),[e,n])}},70645:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(13967),a=t(95193);function i(){var e=(0,r.Z)(),n=(0,a.Z)(e.breakpoints.up("sm")),t=(0,a.Z)(e.breakpoints.up("md")),i=(0,a.Z)(e.breakpoints.up("lg"));return(0,a.Z)(e.breakpoints.up("xl"))?"xl":i?"lg":t?"md":n?"sm":"xs"}},47639:function(e,n,t){t.d(n,{V:function(){return C},Z:function(){return w}});var r=t(93433),a=t(4942),i=t(74165),o=t(1413),c=t(45987),s=t(15861),l=t(29439),u=t(72791),d=t(31148),h=t(947),f=t(11741),x=t(66218),p=t(66101),Z=t(27235),v=t(73036),m=t(60393),g=t(68544),y=t(42320),j=["data"],b=["display"];function w(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=(0,u.useContext)(p.t),i=a.database,o=(0,g.Z)(),c=(0,l.Z)(o,2),s=c[0],d=c[1],h=(0,u.useDeferredValue)(s),f=(0,y.Z)((function(){return k(i,e,n,t,r)}),[h,e,i,n,t,r]);return(0,u.useEffect)((function(){return e?i.chars.follow(e,d):void 0}),[e,d,i]),f}function k(e,n){return K.apply(this,arguments)}function K(){return K=(0,s.Z)((0,i.Z)().mark((function e(n,t){var r,a,s,l,u,d,h,f,x,p,Z=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Z.length>2&&void 0!==Z[2]?Z[2]:0,s=Z.length>3?Z[3]:void 0,l=Z.length>4?Z[4]:void 0,t){e.next=5;break}return e.abrupt("return");case 5:if(a||s||l){e.next=9;break}if(!(u=n._getTeamData(t))){e.next=9;break}return e.abrupt("return",u);case 9:return e.next=11,C(n,t,a,s,l);case 11:if(e.t1=r=e.sent,e.t0=null!==e.t1,!e.t0){e.next=15;break}e.t0=void 0!==r;case 15:if(!e.t0){e.next=19;break}e.t2=r,e.next=20;break;case 19:e.t2={};case 20:if(d=e.t2,h=d.teamData,f=d.teamBundle,h&&f){e.next=25;break}return e.abrupt("return");case 25:return x=(0,v.Qo)(h,t),p=(0,m.xh)(x,(function(e,n){var t=f[n],r=(t.data,(0,c.Z)(t,j));return(0,o.Z)((0,o.Z)({},e),r)})),a||s||l||n.cacheTeamData(t,p),e.abrupt("return",p);case 29:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function C(e,n){return S.apply(this,arguments)}function S(){return S=(0,s.Z)((0,i.Z)().mark((function e(n,t){var r,c,l,u,d,h,f,x=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=x.length>2&&void 0!==x[2]?x[2]:0,c=x.length>3?x[3]:void 0,l=x.length>4?x[4]:void 0,t){e.next=5;break}return e.abrupt("return");case 5:if(u=n.chars.get(t)){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,D(n,!0,r,u,l||n.weapons.get(u.equippedWeapon),null!==c&&void 0!==c?c:Object.values(u.equippedArtifacts).map((function(e){return n.arts.get(e)})).filter((function(e){return e})));case 10:if(d=e.sent){e.next=13;break}return e.abrupt("return");case 13:return h=(0,a.Z)({},t,d),f=(0,a.Z)({},t,d.data),e.next=17,Promise.all(d.character.team.map(function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,a,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(a=n.chars.get(t)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,D(n,!1,0,(0,o.Z)((0,o.Z)({},a),{},{conditional:null!==(r=u.teamConditional[t])&&void 0!==r?r:{}}),n.weapons.get(a.equippedWeapon),Object.values(a.equippedArtifacts).map((function(e){return n.arts.get(e)})).filter((function(e){return e})));case 7:if(c=e.sent){e.next=10;break}return e.abrupt("return");case 10:h[t]=c,f[t]=c.data;case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 17:return e.abrupt("return",{teamData:f,teamBundle:h});case 18:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function D(e){return H.apply(this,arguments)}function H(){return H=(0,s.Z)((0,i.Z)().mark((function e(n){var t,a,o,s,l,u,p,m,g,y,j,w,k,K=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.length>1&&void 0!==K[1]&&K[1],a=K.length>2?K[2]:void 0,o=K.length>3?K[3]:void 0,s=K.length>4?K[4]:void 0,l=K.length>5?K[5]:void 0,e.next=7,h.Z.get(o.key,n.gender);case 7:if(u=e.sent){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,x.Z.get(s.key);case 12:if(p=e.sent){e.next=15;break}return e.abrupt("return");case 15:return e.next=17,x.Z.getAllDataOfType(u.weaponTypeKey);case 17:return m=e.sent,g=t?function(){var e=p.data,n=(e.display,(0,c.Z)(e,b));return(0,v.b3)([n,m])}():p.data,e.next=21,d.y.getAllData;case 21:return y=e.sent,j=(0,v.b3)([u.data,g,y]),w=Array.isArray(l)?l.map((function(e){return(0,v.n3)(e,a)})):[l],k=[].concat((0,r.Z)(w),[(0,v.vn)(o,t?j:void 0),(0,v.v0)(s),j,Z.y0,f.Y]),e.abrupt("return",{character:o,weapon:s,characterSheet:u,weaponSheet:p,data:k});case 26:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}},74480:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),a=t(72791),i=t(66101);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,a.useContext)(i.t),t=n.database,o=(0,a.useState)(t.weapons.get(e)),c=(0,r.Z)(o,2),s=c[0],l=c[1];return(0,a.useEffect)((function(){return l(t.weapons.get(e))}),[t,e]),(0,a.useEffect)((function(){return e?t.weapons.follow(e,(function(e,n,t){return"update"===n&&l(t)})):void 0}),[e,l,t]),s}},75308:function(e,n,t){t.d(n,{X:function(){return i}});var r=t(93433),a=t(60393);function i(e){return function(n,t){var i=n.length;return i===e.length?[t]:1===i&&n[0]===t?(0,r.Z)(e):(0,r.Z)(new Set((0,a.nh)(n,t)))}}},46956:function(e,n,t){t.d(n,{C:function(){return o},e:function(){return i}});var r=t(29439),a=t(37762);function i(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return function(i,o){var c,s=(0,a.Z)(e);try{for(s.s();!(c=s.n()).done;){var l=c.value,u=0,d=t[l],h=d(i),f=d(o);if(0!==(u="string"===typeof h&&"string"===typeof f?h.localeCompare(f):f-h))return r.includes(l)?u:(n?-1:1)*u}}catch(x){s.e(x)}finally{s.f()}return 0}}function o(e,n){return function(t){return Object.entries(e).every((function(e){var a=(0,r.Z)(e,2),i=a[0],o=a[1];return n[i]&&n[i](t,o)}))}}}}]);
//# sourceMappingURL=290.6769f282.chunk.js.map