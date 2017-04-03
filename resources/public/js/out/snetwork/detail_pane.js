// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.detail_pane');
goog.require('cljs.core');
goog.require('snetwork.example_detail');
goog.require('snetwork.link_detail');
goog.require('om.dom');
goog.require('cljsjs.material_ui');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
/**
 * @constructor
 */
snetwork.detail_pane.DetailPane = (function snetwork$detail_pane$DetailPane(){
var this__25212__auto__ = this;
React.Component.apply(this__25212__auto__,arguments);

if(!((this__25212__auto__.initLocalState == null))){
this__25212__auto__.state = this__25212__auto__.initLocalState();
} else {
this__25212__auto__.state = {};
}

return this__25212__auto__;
});

snetwork.detail_pane.DetailPane.prototype = goog.object.clone(React.Component.prototype);

var x27035_27045 = snetwork.detail_pane.DetailPane.prototype;
x27035_27045.componentWillUpdate = ((function (x27035_27045){
return (function (next_props__25148__auto__,next_state__25149__auto__){
var this__25147__auto__ = this;
if(((!((this__25147__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__25147__auto__.om$next$Ident$)))?true:false):false)){
var ident__25151__auto___27046 = om.next.ident.call(null,this__25147__auto__,om.next.props.call(null,this__25147__auto__));
var next_ident__25152__auto___27047 = om.next.ident.call(null,this__25147__auto__,om.next._next_props.call(null,next_props__25148__auto__,this__25147__auto__));
if(cljs.core.not_EQ_.call(null,ident__25151__auto___27046,next_ident__25152__auto___27047)){
var idxr__25153__auto___27048 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25147__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25153__auto___27048 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25153__auto___27048),((function (idxr__25153__auto___27048,ident__25151__auto___27046,next_ident__25152__auto___27047,this__25147__auto__,x27035_27045){
return (function (indexes__25154__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25154__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25151__auto___27046], null),cljs.core.disj,this__25147__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25152__auto___27047], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25147__auto__);
});})(idxr__25153__auto___27048,ident__25151__auto___27046,next_ident__25152__auto___27047,this__25147__auto__,x27035_27045))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25147__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25147__auto__);
});})(x27035_27045))
;

x27035_27045.shouldComponentUpdate = ((function (x27035_27045){
return (function (next_props__25148__auto__,next_state__25149__auto__){
var this__25147__auto__ = this;
var next_children__25150__auto__ = next_props__25148__auto__.children;
var next_props__25148__auto____$1 = goog.object.get(next_props__25148__auto__,"omcljs$value");
var next_props__25148__auto____$2 = (function (){var G__27037 = next_props__25148__auto____$1;
if((next_props__25148__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__27037);
} else {
return G__27037;
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
});})(x27035_27045))
;

x27035_27045.componentWillUnmount = ((function (x27035_27045){
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
});})(x27035_27045))
;

x27035_27045.componentDidUpdate = ((function (x27035_27045){
return (function (prev_props__25155__auto__,prev_state__25156__auto__){
var this__25147__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25147__auto__);
});})(x27035_27045))
;

x27035_27045.isMounted = ((function (x27035_27045){
return (function (){
var this__25147__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25147__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27035_27045))
;

x27035_27045.componentWillMount = ((function (x27035_27045){
return (function (){
var this__25147__auto__ = this;
var indexer__25157__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25147__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25157__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25157__auto__,this__25147__auto__);
}
});})(x27035_27045))
;

x27035_27045.render = ((function (x27035_27045){
return (function (){
var this__25146__auto__ = this;
var this$ = this__25146__auto__;
var _STAR_reconciler_STAR_27038 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27039 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27040 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27041 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27042 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25146__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25146__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25146__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25146__auto__);

om.next._STAR_parent_STAR_ = this__25146__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var example_focus = new cljs.core.Keyword("example","focus","example/focus",2052454689).cljs$core$IFn$_invoke$arity$1(props);
var link_focus = new cljs.core.Keyword("link","focus","link/focus",222271121).cljs$core$IFn$_invoke$arity$1(props);
return React.DOM.div(({"className": "detail-pane"}),om.util.force_children.call(null,(cljs.core.truth_(example_focus)?snetwork.example_detail.example_detail.call(null,example_focus):(cljs.core.truth_(link_focus)?snetwork.link_detail.link_detail.call(null,link_focus):null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27042;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27041;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27040;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27039;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27038;
}});})(x27035_27045))
;


snetwork.detail_pane.DetailPane.prototype.constructor = snetwork.detail_pane.DetailPane;

snetwork.detail_pane.DetailPane.prototype.constructor.displayName = "snetwork.detail-pane/DetailPane";

snetwork.detail_pane.DetailPane.prototype.om$isComponent = true;

var x27043_27049 = snetwork.detail_pane.DetailPane;
x27043_27049.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x27043_27049.om$next$IQueryParams$params$arity$1 = ((function (x27043_27049){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_detail.ExampleDetail),new cljs.core.Keyword(null,"link","link",-1769163468),om.next.get_query.call(null,snetwork.link_detail.LinkDetail)], null);
});})(x27043_27049))
;

x27043_27049.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x27043_27049.om$next$IQuery$query$arity$1 = ((function (x27043_27049){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","focus","example/focus",2052454689),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","focus","link/focus",222271121),new cljs.core.Symbol(null,"?link","?link",-1108278055,null)], null)], null);
});})(x27043_27049))
;


var x27044_27050 = snetwork.detail_pane.DetailPane.prototype;
x27044_27050.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x27044_27050.om$next$IQueryParams$params$arity$1 = ((function (x27044_27050){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_detail.ExampleDetail),new cljs.core.Keyword(null,"link","link",-1769163468),om.next.get_query.call(null,snetwork.link_detail.LinkDetail)], null);
});})(x27044_27050))
;

x27044_27050.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x27044_27050.om$next$IQuery$query$arity$1 = ((function (x27044_27050){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","focus","example/focus",2052454689),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","focus","link/focus",222271121),new cljs.core.Symbol(null,"?link","?link",-1108278055,null)], null)], null);
});})(x27044_27050))
;


snetwork.detail_pane.DetailPane.cljs$lang$type = true;

snetwork.detail_pane.DetailPane.cljs$lang$ctorStr = "snetwork.detail-pane/DetailPane";

snetwork.detail_pane.DetailPane.cljs$lang$ctorPrWriter = (function (this__25214__auto__,writer__25215__auto__,opt__25216__auto__){
return cljs.core._write.call(null,writer__25215__auto__,"snetwork.detail-pane/DetailPane");
});
snetwork.detail_pane.detail_pane = om.next.factory.call(null,snetwork.detail_pane.DetailPane,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=detail_pane.js.map?rel=1490992942464