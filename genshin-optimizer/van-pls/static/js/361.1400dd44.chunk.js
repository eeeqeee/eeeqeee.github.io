"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[361],{44361:function(e,n,r){r.r(n),r.d(n,{default:function(){return T}});var s=r(29439),t=r(93433),i=r(39504),a=r(61889),l=r(90388),o=r(64554),c=r(58165),u=r(94721),x=r(66647),d=r(20890),h=r(72791),p=r(22020),f=r(10658),Z=r(66218),j=r(66101),g=r(42320),m=r(24351),w=r(75308),y=r(3992),v=r(71310),C=r(68198),k=r(55942),P=r(9321),b=r(91839),z=r(10157),_=r(73578),N=r(80184),S=(0,w.X)((0,t.Z)(m.wC));function T(e){var n=e.show,r=e.ascension,w=void 0===r?0:r,T=e.onHide,G=e.onSelect,W=e.filter,q=void 0===W?function(){return!0}:W,E=e.weaponTypeFilter,F=(0,p.$)(["page_weapon","weaponNames_gen"]).t,I=(0,g.Z)((function(){return Z.Z.getAll}),[]),L=(0,h.useState)(E?[E]:(0,t.Z)(m.yd)),A=(0,s.Z)(L,2),D=A[0],H=A[1],V=(0,h.useContext)(j.t).database,X=(0,h.useState)(V.displayWeapon.get()),$=(0,s.Z)(X,2),B=$[0],J=$[1];(0,h.useEffect)((function(){return V.displayWeapon.follow((function(e,n){return J(n)}))}),[V]),(0,h.useEffect)((function(){return E&&H([E])}),[E]);var K=(0,h.useState)(""),M=(0,s.Z)(K,2),O=M[0],Q=M[1],R=(0,h.useDeferredValue)(O),U=B.rarity,Y=I?m.fG.filter((function(e){return q(I(e))})).filter((function(e){return D.includes(I(e).weaponType)})).filter((function(e){return!R||F("weaponNames_gen:".concat(e)).toLowerCase().includes(R.toLowerCase())})).filter((function(e){return U.includes(I(e).rarity)})).sort((function(e,n){return I(n).rarity-I(e).rarity})):[];return I?(0,N.jsx)(P.Z,{open:n,onClose:T,children:(0,N.jsxs)(y.Z,{children:[(0,N.jsx)(i.Z,{sx:{py:1},children:(0,N.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,N.jsx)(a.ZP,{item:!0,children:(0,N.jsx)(_.Z,{value:D,onChange:H,disabled:!!E,size:"small"})}),(0,N.jsx)(a.ZP,{item:!0,children:(0,N.jsx)(b.Z,{sx:{height:"100%"},value:U,size:"small",children:m.wC.map((function(e){return(0,N.jsx)(l.Z,{value:e,onClick:function(){return V.displayWeapon.set({rarity:S(U,e)})},children:(0,N.jsxs)(o.Z,{display:"flex",gap:1,children:[(0,N.jsx)("strong",{children:e}),(0,N.jsx)(z.q,{stars:1})]})},e)}))})}),(0,N.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,N.jsx)(c.Z,{autoFocus:!0,size:"small",value:O,onChange:function(e){return Q(e.target.value)},label:F("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),(0,N.jsx)(a.ZP,{item:!0,children:(0,N.jsx)(C.Z,{onClick:T})})]})}),(0,N.jsx)(u.Z,{}),(0,N.jsx)(i.Z,{children:(0,N.jsx)(a.ZP,{container:!0,spacing:1,children:Y.map((function(e){var n,r=I(e);return(0,N.jsx)(a.ZP,{item:!0,lg:3,md:4,children:(0,N.jsx)(v.Z,{sx:{height:"100%"},children:(0,N.jsxs)(x.Z,{onClick:function(){T(),G(e)},sx:{display:"flex"},children:[(0,N.jsx)(o.Z,{component:"img",src:r.getImg(w),sx:{width:100,height:"auto"},className:" grad-".concat(r.rarity,"star")}),(0,N.jsxs)(o.Z,{sx:{flexGrow:1,px:1},children:[(0,N.jsx)(d.Z,{variant:"subtitle1",children:r.name}),(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(k.Z,{src:null===(n=f.Z.weaponTypes)||void 0===n?void 0:n[r.weaponType]})," ",(0,N.jsx)(z.q,{stars:r.rarity,colored:!0})]})]})]})})},e)}))})}),(0,N.jsx)(u.Z,{}),(0,N.jsx)(i.Z,{sx:{py:1},children:(0,N.jsx)(C.Z,{large:!0,onClick:T})})]})}):null}}}]);
//# sourceMappingURL=361.1400dd44.chunk.js.map