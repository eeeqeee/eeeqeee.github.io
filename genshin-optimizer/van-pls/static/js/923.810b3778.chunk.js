"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[923],{74476:function(e,n,i){i.r(n),i.d(n,{default:function(){return F}});var s=i(29439),t=i(40117),o=i(62002),r=i(39504),a=i(61889),l=i(64554),c=i(20890),d=i(2199),u=i(24518),x=i(9585),p=i(94721),h=i(15021),f=i(72791),Z=i(3992),j=i(71310),m=i(30066),v=i(68198),y=i(37503),g=i(88034),w=i(29371),k=i(9321),b=i(6805),C=i(10157),P=i(13746),W=i(947),T=i(2139),D=i(66218),R=i(66101),I=i(27235),L=i(73036),N=i(24711),S=i(12761),z=i(42320),B=i(74480),K=i(80184),E=f.lazy((function(){return i.e(409).then(i.bind(i,44361))}));function F(e){var n,i=e.weaponId,F=e.footer,G=void 0!==F&&F,J=e.onClose,M=e.extraButtons,O=(0,f.useContext)(P.R).data,_=(0,f.useContext)(R.t).database,q=(0,B.Z)(i),H=null!==q&&void 0!==q?q:{},U=H.key,A=void 0===U?"":U,Q=H.level,V=void 0===Q?0:Q,X=H.refinement,Y=void 0===X?1:X,$=H.ascension,ee=void 0===$?0:$,ne=H.lock,ie=H.location,se=void 0===ie?"":ie,te=H.id,oe=(0,z.Z)((function(){return D.Z.get(A)}),[A]),re=(0,f.useCallback)((function(e){_.weapons.set(i,e)}),[i,_]),ae=(0,S.Z)().gender,le=(0,z.Z)((function(){return se?W.Z.get(_.chars.LocationToCharacterKey(se),ae):void 0}),[_,ae,se]),ce=le&&le.weaponTypeKey,de=(0,f.useCallback)((function(e){return te&&_.weapons.set(te,{location:e})}),[_,te]),ue=(0,f.useCallback)((function(e){return e.weaponTypeKey===(null===oe||void 0===oe?void 0:oe.weaponType)}),[oe]),xe=(0,N.Z)(),pe=(0,s.Z)(xe,3),he=pe[0],fe=pe[1],Ze=pe[2],je=null===oe||void 0===oe?void 0:oe.getImg(ee);(0,f.useEffect)((function(){if(oe&&re&&oe.key===(null===q||void 0===q?void 0:q.key)&&oe.rarity<=2&&(V>70||ee>4)){var e=(0,s.Z)(T.vF[0],2),n=e[0],i=e[1];re({level:n,ascension:i})}}),[oe,q,re,V,ee]);var me=(0,f.useMemo)((function(){return oe&&q&&(0,L.mP)([oe.data,(0,L.v0)(q)])}),[oe,q]);return(0,K.jsx)(k.Z,{open:!!i,onClose:J,containerProps:{maxWidth:"md"},children:(0,K.jsxs)(j.Z,{children:[(0,K.jsx)(E,{ascension:ee,show:he,onHide:Ze,onSelect:function(e){return re({key:e})},weaponTypeFilter:ce}),(0,K.jsx)(r.Z,{children:oe&&me&&(0,K.jsxs)(a.ZP,{container:!0,spacing:1.5,children:[(0,K.jsx)(a.ZP,{item:!0,xs:12,sm:3,children:(0,K.jsxs)(a.ZP,{container:!0,spacing:1.5,children:[(0,K.jsx)(a.ZP,{item:!0,xs:6,sm:12,children:(0,K.jsx)(l.Z,{component:"img",src:je,className:"grad-".concat(oe.rarity,"star"),sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),(0,K.jsx)(a.ZP,{item:!0,xs:6,sm:12,children:(0,K.jsx)(c.Z,{children:(0,K.jsx)("small",{children:oe.description})})})]})}),(0,K.jsxs)(a.ZP,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,K.jsx)(l.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:(0,K.jsxs)(d.Z,{children:[(0,K.jsx)(u.Z,{color:"info",onClick:fe,children:null!==(n=null===oe||void 0===oe?void 0:oe.name)&&void 0!==n?n:"Select a Weapon"}),(null===oe||void 0===oe?void 0:oe.hasRefinement)&&(0,K.jsx)(b.Z,{refinement:Y,setRefinement:function(e){return re({refinement:e})}}),M]})}),(0,K.jsxs)(l.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[oe&&(0,K.jsx)(w.Z,{level:V,ascension:ee,setBoth:re,useLow:!oe.hasRefinement}),(0,K.jsx)(u.Z,{color:"error",onClick:function(){return te&&_.weapons.set(te,{lock:!ne})},startIcon:ne?(0,K.jsx)(t.Z,{}):(0,K.jsx)(o.Z,{}),children:ne?"Locked":"Unlocked"})]}),(0,K.jsx)(c.Z,{children:(0,K.jsx)(C.q,{stars:oe.rarity})}),(0,K.jsx)(c.Z,{variant:"subtitle1",children:(0,K.jsx)("strong",{children:oe.passiveName})}),(0,K.jsx)(c.Z,{gutterBottom:!0,children:oe.passiveName&&oe.passiveDescription(me.get(I.ri.weapon.refineIndex).value)}),(0,K.jsxs)(l.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,K.jsxs)(Z.Z,{children:[(0,K.jsx)(x.Z,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),(0,K.jsx)(p.Z,{}),(0,K.jsx)(g.lD,{children:[I.ri.weapon.main,I.ri.weapon.sub,I.ri.weapon.sub2].map((function(e){var n=me.get(e);return n.isEmpty||!n.value?null:(0,K.jsx)(g.JW,{node:n,component:h.ZP},JSON.stringify(n.info))}))})]}),O&&oe.document&&(0,K.jsx)(y.Z,{sections:oe.document})]})]})]})}),G&&te&&(0,K.jsx)(r.Z,{sx:{py:1},children:(0,K.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,K.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,K.jsx)(m.W,{location:se,setLocation:de,filter:ue,autoCompleteProps:{getOptionDisabled:function(e){return!e.key},disableClearable:!0}})}),(0,K.jsx)(a.ZP,{item:!0,flexGrow:2}),!!J&&(0,K.jsx)(a.ZP,{item:!0,children:(0,K.jsx)(v.Z,{sx:{height:"100%"},large:!0,onClick:J})})]})})]})})}}}]);
//# sourceMappingURL=923.810b3778.chunk.js.map