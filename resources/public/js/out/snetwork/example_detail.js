// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.example_detail');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
snetwork.example_detail.ExampleDetail = (function snetwork$example_detail$ExampleDetail(){
var this__30556__auto__ = this;
React.Component.apply(this__30556__auto__,arguments);

if(!((this__30556__auto__.initLocalState == null))){
this__30556__auto__.state = this__30556__auto__.initLocalState();
} else {
this__30556__auto__.state = {};
}

return this__30556__auto__;
});

snetwork.example_detail.ExampleDetail.prototype = goog.object.clone(React.Component.prototype);

var x36556_36574 = snetwork.example_detail.ExampleDetail.prototype;
x36556_36574.componentWillUpdate = ((function (x36556_36574){
return (function (next_props__30492__auto__,next_state__30493__auto__){
var this__30491__auto__ = this;
if(((!((this__30491__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__30491__auto__.om$next$Ident$)))?true:false):false)){
var ident__30495__auto___36575 = om.next.ident.call(null,this__30491__auto__,om.next.props.call(null,this__30491__auto__));
var next_ident__30496__auto___36576 = om.next.ident.call(null,this__30491__auto__,om.next._next_props.call(null,next_props__30492__auto__,this__30491__auto__));
if(cljs.core.not_EQ_.call(null,ident__30495__auto___36575,next_ident__30496__auto___36576)){
var idxr__30497__auto___36577 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30497__auto___36577 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30497__auto___36577),((function (idxr__30497__auto___36577,ident__30495__auto___36575,next_ident__30496__auto___36576,this__30491__auto__,x36556_36574){
return (function (indexes__30498__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30498__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30495__auto___36575], null),cljs.core.disj,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30496__auto___36576], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30491__auto__);
});})(idxr__30497__auto___36577,ident__30495__auto___36575,next_ident__30496__auto___36576,this__30491__auto__,x36556_36574))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30491__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30491__auto__);
});})(x36556_36574))
;

x36556_36574.shouldComponentUpdate = ((function (x36556_36574){
return (function (next_props__30492__auto__,next_state__30493__auto__){
var this__30491__auto__ = this;
var next_children__30494__auto__ = next_props__30492__auto__.children;
var next_props__30492__auto____$1 = goog.object.get(next_props__30492__auto__,"omcljs$value");
var next_props__30492__auto____$2 = (function (){var G__36558 = next_props__30492__auto____$1;
if((next_props__30492__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36558);
} else {
return G__36558;
}
})();
var or__21625__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__30491__auto__),next_props__30492__auto____$2);
if(or__21625__auto__){
return or__21625__auto__;
} else {
var or__21625__auto____$1 = (function (){var and__21613__auto__ = this__30491__auto__.state;
if(cljs.core.truth_(and__21613__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__30491__auto__.state,"omcljs$state"),goog.object.get(next_state__30493__auto__,"omcljs$state"));
} else {
return and__21613__auto__;
}
})();
if(cljs.core.truth_(or__21625__auto____$1)){
return or__21625__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__30491__auto__.props.children,next_children__30494__auto__);
}
}
});})(x36556_36574))
;

x36556_36574.componentWillUnmount = ((function (x36556_36574){
return (function (){
var this__30491__auto__ = this;
var r__30502__auto__ = om.next.get_reconciler.call(null,this__30491__auto__);
var cfg__30503__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__30502__auto__);
var st__30504__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__30503__auto__);
var indexer__30501__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__30503__auto__);
if(cljs.core.truth_((function (){var and__21613__auto__ = !((st__30504__auto__ == null));
if(and__21613__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__30504__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__30491__auto__], null));
} else {
return and__21613__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__30504__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__30491__auto__);
} else {
}

if((indexer__30501__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__30501__auto__,this__30491__auto__);
}
});})(x36556_36574))
;

x36556_36574.componentDidUpdate = ((function (x36556_36574){
return (function (prev_props__30499__auto__,prev_state__30500__auto__){
var this__30491__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30491__auto__);
});})(x36556_36574))
;

x36556_36574.isMounted = ((function (x36556_36574){
return (function (){
var this__30491__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30491__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36556_36574))
;

x36556_36574.componentWillMount = ((function (x36556_36574){
return (function (){
var this__30491__auto__ = this;
var indexer__30501__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30501__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30501__auto__,this__30491__auto__);
}
});})(x36556_36574))
;

x36556_36574.render = ((function (x36556_36574){
return (function (){
var this__30490__auto__ = this;
var this$ = this__30490__auto__;
var _STAR_reconciler_STAR_36559 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36560 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36561 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36562 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36563 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30490__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30490__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30490__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30490__auto__);

om.next._STAR_parent_STAR_ = this__30490__auto__;

try{var map__36564 = om.next.props.call(null,this$);
var map__36564__$1 = ((((!((map__36564 == null)))?((((map__36564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36564):map__36564);
var name = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword("example","name","example/name",1023496615));
var thumb_src = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673));
var in_space = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword("example","in-space","example/in-space",716984420));
var in_training = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword("example","in-training","example/in-training",-1322672517));
var in_testing = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183));
var label = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword("example","label","example/label",927453594));
return React.DOM.div(React.DOM.p(name),om.util.force_children.call(null,React.DOM.img(({"src": thumb_src, "height": (56), "width": (56), "className": "example-thumb"}))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36563;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36562;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36561;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36560;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36559;
}});})(x36556_36574))
;


snetwork.example_detail.ExampleDetail.prototype.constructor = snetwork.example_detail.ExampleDetail;

snetwork.example_detail.ExampleDetail.prototype.constructor.displayName = "snetwork.example-detail/ExampleDetail";

snetwork.example_detail.ExampleDetail.prototype.om$isComponent = true;

var x36566_36586 = snetwork.example_detail.ExampleDetail;
x36566_36586.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x36566_36586.om$next$Ident$ident$arity$2 = ((function (x36566_36586){
return (function (this$,p__36567){
var map__36568 = p__36567;
var map__36568__$1 = ((((!((map__36568 == null)))?((((map__36568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36568):map__36568);
var id = cljs.core.get.call(null,map__36568__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null);
});})(x36566_36586))
;

x36566_36586.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x36566_36586.om$next$IQuery$query$arity$1 = ((function (x36566_36586){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","name","example/name",1023496615),new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673),new cljs.core.Keyword("example","in-space","example/in-space",716984420),new cljs.core.Keyword("example","in-training","example/in-training",-1322672517),new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","label","example/label",927453594),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","name","label/name",1610858269)], null)], null)], null);
});})(x36566_36586))
;


var x36570_36588 = snetwork.example_detail.ExampleDetail.prototype;
x36570_36588.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x36570_36588.om$next$Ident$ident$arity$2 = ((function (x36570_36588){
return (function (this$,p__36571){
var map__36572 = p__36571;
var map__36572__$1 = ((((!((map__36572 == null)))?((((map__36572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36572):map__36572);
var id = cljs.core.get.call(null,map__36572__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null);
});})(x36570_36588))
;

x36570_36588.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x36570_36588.om$next$IQuery$query$arity$1 = ((function (x36570_36588){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","name","example/name",1023496615),new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673),new cljs.core.Keyword("example","in-space","example/in-space",716984420),new cljs.core.Keyword("example","in-training","example/in-training",-1322672517),new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","label","example/label",927453594),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","name","label/name",1610858269)], null)], null)], null);
});})(x36570_36588))
;


snetwork.example_detail.ExampleDetail.cljs$lang$type = true;

snetwork.example_detail.ExampleDetail.cljs$lang$ctorStr = "snetwork.example-detail/ExampleDetail";

snetwork.example_detail.ExampleDetail.cljs$lang$ctorPrWriter = (function (this__30558__auto__,writer__30559__auto__,opt__30560__auto__){
return cljs.core._write.call(null,writer__30559__auto__,"snetwork.example-detail/ExampleDetail");
});
snetwork.example_detail.example_detail = om.next.factory.call(null,snetwork.example_detail.ExampleDetail,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=example_detail.js.map?rel=1490083948225