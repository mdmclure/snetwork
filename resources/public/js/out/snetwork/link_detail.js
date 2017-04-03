// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.link_detail');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
snetwork.link_detail.LinkDetail = (function snetwork$link_detail$LinkDetail(){
var this__25212__auto__ = this;
React.Component.apply(this__25212__auto__,arguments);

if(!((this__25212__auto__.initLocalState == null))){
this__25212__auto__.state = this__25212__auto__.initLocalState();
} else {
this__25212__auto__.state = {};
}

return this__25212__auto__;
});

snetwork.link_detail.LinkDetail.prototype = goog.object.clone(React.Component.prototype);

var x26239_26257 = snetwork.link_detail.LinkDetail.prototype;
x26239_26257.componentWillUpdate = ((function (x26239_26257){
return (function (next_props__25148__auto__,next_state__25149__auto__){
var this__25147__auto__ = this;
if(((!((this__25147__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__25147__auto__.om$next$Ident$)))?true:false):false)){
var ident__25151__auto___26258 = om.next.ident.call(null,this__25147__auto__,om.next.props.call(null,this__25147__auto__));
var next_ident__25152__auto___26259 = om.next.ident.call(null,this__25147__auto__,om.next._next_props.call(null,next_props__25148__auto__,this__25147__auto__));
if(cljs.core.not_EQ_.call(null,ident__25151__auto___26258,next_ident__25152__auto___26259)){
var idxr__25153__auto___26260 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25147__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25153__auto___26260 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25153__auto___26260),((function (idxr__25153__auto___26260,ident__25151__auto___26258,next_ident__25152__auto___26259,this__25147__auto__,x26239_26257){
return (function (indexes__25154__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25154__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25151__auto___26258], null),cljs.core.disj,this__25147__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25152__auto___26259], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25147__auto__);
});})(idxr__25153__auto___26260,ident__25151__auto___26258,next_ident__25152__auto___26259,this__25147__auto__,x26239_26257))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25147__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25147__auto__);
});})(x26239_26257))
;

x26239_26257.shouldComponentUpdate = ((function (x26239_26257){
return (function (next_props__25148__auto__,next_state__25149__auto__){
var this__25147__auto__ = this;
var next_children__25150__auto__ = next_props__25148__auto__.children;
var next_props__25148__auto____$1 = goog.object.get(next_props__25148__auto__,"omcljs$value");
var next_props__25148__auto____$2 = (function (){var G__26241 = next_props__25148__auto____$1;
if((next_props__25148__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__26241);
} else {
return G__26241;
}
})();
var or__21625__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__25147__auto__),next_props__25148__auto____$2);
if(or__21625__auto__){
return or__21625__auto__;
} else {
var or__21625__auto____$1 = (function (){var and__21613__auto__ = this__25147__auto__.state;
if(cljs.core.truth_(and__21613__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__25147__auto__.state,"omcljs$state"),goog.object.get(next_state__25149__auto__,"omcljs$state"));
} else {
return and__21613__auto__;
}
})();
if(cljs.core.truth_(or__21625__auto____$1)){
return or__21625__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__25147__auto__.props.children,next_children__25150__auto__);
}
}
});})(x26239_26257))
;

x26239_26257.componentWillUnmount = ((function (x26239_26257){
return (function (){
var this__25147__auto__ = this;
var r__25158__auto__ = om.next.get_reconciler.call(null,this__25147__auto__);
var cfg__25159__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__25158__auto__);
var st__25160__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__25159__auto__);
var indexer__25157__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__25159__auto__);
if(cljs.core.truth_((function (){var and__21613__auto__ = !((st__25160__auto__ == null));
if(and__21613__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__25160__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__25147__auto__], null));
} else {
return and__21613__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__25160__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__25147__auto__);
} else {
}

if((indexer__25157__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__25157__auto__,this__25147__auto__);
}
});})(x26239_26257))
;

x26239_26257.componentDidUpdate = ((function (x26239_26257){
return (function (prev_props__25155__auto__,prev_state__25156__auto__){
var this__25147__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25147__auto__);
});})(x26239_26257))
;

x26239_26257.isMounted = ((function (x26239_26257){
return (function (){
var this__25147__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25147__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26239_26257))
;

x26239_26257.componentWillMount = ((function (x26239_26257){
return (function (){
var this__25147__auto__ = this;
var indexer__25157__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25147__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25157__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25157__auto__,this__25147__auto__);
}
});})(x26239_26257))
;

x26239_26257.render = ((function (x26239_26257){
return (function (){
var this__25146__auto__ = this;
var this$ = this__25146__auto__;
var _STAR_reconciler_STAR_26242 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26243 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26244 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26245 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26246 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25146__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25146__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25146__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25146__auto__);

om.next._STAR_parent_STAR_ = this__25146__auto__;

try{var map__26247 = om.next.props.call(null,this$);
var map__26247__$1 = ((((!((map__26247 == null)))?((((map__26247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26247):map__26247);
var id = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var similarity = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword("link","similarity","link/similarity",1873109477));
var source = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword("link","source","link/source",-437163273));
var target = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword("link","target","link/target",254144519));
return React.DOM.p([cljs.core.str("source "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(source)),cljs.core.str("target "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)),cljs.core.str("similarity "),cljs.core.str(similarity)].join(''));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26246;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26245;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26244;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26243;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26242;
}});})(x26239_26257))
;


snetwork.link_detail.LinkDetail.prototype.constructor = snetwork.link_detail.LinkDetail;

snetwork.link_detail.LinkDetail.prototype.constructor.displayName = "snetwork.link-detail/LinkDetail";

snetwork.link_detail.LinkDetail.prototype.om$isComponent = true;

var x26249_26261 = snetwork.link_detail.LinkDetail;
x26249_26261.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x26249_26261.om$next$Ident$ident$arity$2 = ((function (x26249_26261){
return (function (this$,p__26250){
var map__26251 = p__26250;
var map__26251__$1 = ((((!((map__26251 == null)))?((((map__26251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26251):map__26251);
var id = cljs.core.get.call(null,map__26251__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("link","by-id","link/by-id",-2140791191),id], null);
});})(x26249_26261))
;

x26249_26261.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x26249_26261.om$next$IQuery$query$arity$1 = ((function (x26249_26261){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","similarity","link/similarity",1873109477)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","source","link/source",-437163273)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","target","link/target",254144519))))));
});})(x26249_26261))
;


var x26253_26262 = snetwork.link_detail.LinkDetail.prototype;
x26253_26262.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x26253_26262.om$next$Ident$ident$arity$2 = ((function (x26253_26262){
return (function (this$,p__26254){
var map__26255 = p__26254;
var map__26255__$1 = ((((!((map__26255 == null)))?((((map__26255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26255):map__26255);
var id = cljs.core.get.call(null,map__26255__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("link","by-id","link/by-id",-2140791191),id], null);
});})(x26253_26262))
;

x26253_26262.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x26253_26262.om$next$IQuery$query$arity$1 = ((function (x26253_26262){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","similarity","link/similarity",1873109477)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","source","link/source",-437163273)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","target","link/target",254144519))))));
});})(x26253_26262))
;


snetwork.link_detail.LinkDetail.cljs$lang$type = true;

snetwork.link_detail.LinkDetail.cljs$lang$ctorStr = "snetwork.link-detail/LinkDetail";

snetwork.link_detail.LinkDetail.cljs$lang$ctorPrWriter = (function (this__25214__auto__,writer__25215__auto__,opt__25216__auto__){
return cljs.core._write.call(null,writer__25215__auto__,"snetwork.link-detail/LinkDetail");
});
snetwork.link_detail.link_detail = om.next.factory.call(null,snetwork.link_detail.LinkDetail,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=link_detail.js.map?rel=1490992941687