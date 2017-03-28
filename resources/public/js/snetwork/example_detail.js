// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.example_detail');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
snetwork.example_detail.ExampleDetail = (function snetwork$example_detail$ExampleDetail(){
var this__22464__auto__ = this;
React.Component.apply(this__22464__auto__,arguments);

if(!((this__22464__auto__.initLocalState == null))){
this__22464__auto__.state = this__22464__auto__.initLocalState();
} else {
this__22464__auto__.state = {};
}

return this__22464__auto__;
});

snetwork.example_detail.ExampleDetail.prototype = goog.object.clone(React.Component.prototype);

var x32969_32987 = snetwork.example_detail.ExampleDetail.prototype;
x32969_32987.componentWillUpdate = ((function (x32969_32987){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
if(((!((this__22399__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__22399__auto__.om$next$Ident$)))?true:false):false)){
var ident__22403__auto___32988 = om.next.ident.call(null,this__22399__auto__,om.next.props.call(null,this__22399__auto__));
var next_ident__22404__auto___32989 = om.next.ident.call(null,this__22399__auto__,om.next._next_props.call(null,next_props__22400__auto__,this__22399__auto__));
if(cljs.core.not_EQ_.call(null,ident__22403__auto___32988,next_ident__22404__auto___32989)){
var idxr__22405__auto___32990 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__22405__auto___32990 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__22405__auto___32990),((function (idxr__22405__auto___32990,ident__22403__auto___32988,next_ident__22404__auto___32989,this__22399__auto__,x32969_32987){
return (function (indexes__22406__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__22406__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__22403__auto___32988], null),cljs.core.disj,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__22404__auto___32989], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__22399__auto__);
});})(idxr__22405__auto___32990,ident__22403__auto___32988,next_ident__22404__auto___32989,this__22399__auto__,x32969_32987))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__22399__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22399__auto__);
});})(x32969_32987))
;

x32969_32987.shouldComponentUpdate = ((function (x32969_32987){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
var next_children__22402__auto__ = next_props__22400__auto__.children;
var next_props__22400__auto____$1 = goog.object.get(next_props__22400__auto__,"omcljs$value");
var next_props__22400__auto____$2 = (function (){var G__32971 = next_props__22400__auto____$1;
if((next_props__22400__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__32971);
} else {
return G__32971;
}
})();
var or__18876__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22399__auto__),next_props__22400__auto____$2);
if(or__18876__auto__){
return or__18876__auto__;
} else {
var or__18876__auto____$1 = (function (){var and__18864__auto__ = this__22399__auto__.state;
if(cljs.core.truth_(and__18864__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22399__auto__.state,"omcljs$state"),goog.object.get(next_state__22401__auto__,"omcljs$state"));
} else {
return and__18864__auto__;
}
})();
if(cljs.core.truth_(or__18876__auto____$1)){
return or__18876__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__22399__auto__.props.children,next_children__22402__auto__);
}
}
});})(x32969_32987))
;

x32969_32987.componentWillUnmount = ((function (x32969_32987){
return (function (){
var this__22399__auto__ = this;
var r__22410__auto__ = om.next.get_reconciler.call(null,this__22399__auto__);
var cfg__22411__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22410__auto__);
var st__22412__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22411__auto__);
var indexer__22409__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22411__auto__);
if(cljs.core.truth_((function (){var and__18864__auto__ = !((st__22412__auto__ == null));
if(and__18864__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__22412__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__22399__auto__], null));
} else {
return and__18864__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__22412__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22399__auto__);
} else {
}

if((indexer__22409__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22409__auto__,this__22399__auto__);
}
});})(x32969_32987))
;

x32969_32987.componentDidUpdate = ((function (x32969_32987){
return (function (prev_props__22407__auto__,prev_state__22408__auto__){
var this__22399__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22399__auto__);
});})(x32969_32987))
;

x32969_32987.isMounted = ((function (x32969_32987){
return (function (){
var this__22399__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22399__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32969_32987))
;

x32969_32987.componentWillMount = ((function (x32969_32987){
return (function (){
var this__22399__auto__ = this;
var indexer__22409__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22409__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22409__auto__,this__22399__auto__);
}
});})(x32969_32987))
;

x32969_32987.render = ((function (x32969_32987){
return (function (){
var this__22398__auto__ = this;
var this$ = this__22398__auto__;
var _STAR_reconciler_STAR_32972 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32973 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32974 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32975 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32976 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22398__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22398__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22398__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22398__auto__);

om.next._STAR_parent_STAR_ = this__22398__auto__;

try{var map__32977 = om.next.props.call(null,this$);
var map__32977__$1 = ((((!((map__32977 == null)))?((((map__32977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32977):map__32977);
var name = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword("example","name","example/name",1023496615));
var thumb_src = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673));
var in_space = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword("example","in-space","example/in-space",716984420));
var in_training = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword("example","in-training","example/in-training",-1322672517));
var in_testing = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183));
var label = cljs.core.get.call(null,map__32977__$1,new cljs.core.Keyword("example","label","example/label",927453594));
React.DOM.p(name);

return React.DOM.img(({"src": thumb_src, "height": (56), "width": (56), "className": "example-thumb"}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32976;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32975;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32974;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32973;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32972;
}});})(x32969_32987))
;


snetwork.example_detail.ExampleDetail.prototype.constructor = snetwork.example_detail.ExampleDetail;

snetwork.example_detail.ExampleDetail.prototype.constructor.displayName = "snetwork.example-detail/ExampleDetail";

snetwork.example_detail.ExampleDetail.prototype.om$isComponent = true;

var x32979_32991 = snetwork.example_detail.ExampleDetail;
x32979_32991.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x32979_32991.om$next$Ident$ident$arity$2 = ((function (x32979_32991){
return (function (this$,p__32980){
var map__32981 = p__32980;
var map__32981__$1 = ((((!((map__32981 == null)))?((((map__32981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32981):map__32981);
var id = cljs.core.get.call(null,map__32981__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null);
});})(x32979_32991))
;

x32979_32991.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x32979_32991.om$next$IQuery$query$arity$1 = ((function (x32979_32991){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","name","example/name",1023496615),new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673),new cljs.core.Keyword("example","in-space","example/in-space",716984420),new cljs.core.Keyword("example","in-training","example/in-training",-1322672517),new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","label","example/label",927453594),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","name","label/name",1610858269)], null)], null)], null);
});})(x32979_32991))
;


var x32983_32992 = snetwork.example_detail.ExampleDetail.prototype;
x32983_32992.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x32983_32992.om$next$Ident$ident$arity$2 = ((function (x32983_32992){
return (function (this$,p__32984){
var map__32985 = p__32984;
var map__32985__$1 = ((((!((map__32985 == null)))?((((map__32985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32985):map__32985);
var id = cljs.core.get.call(null,map__32985__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null);
});})(x32983_32992))
;

x32983_32992.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x32983_32992.om$next$IQuery$query$arity$1 = ((function (x32983_32992){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","name","example/name",1023496615),new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673),new cljs.core.Keyword("example","in-space","example/in-space",716984420),new cljs.core.Keyword("example","in-training","example/in-training",-1322672517),new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","label","example/label",927453594),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","name","label/name",1610858269)], null)], null)], null);
});})(x32983_32992))
;


snetwork.example_detail.ExampleDetail.cljs$lang$type = true;

snetwork.example_detail.ExampleDetail.cljs$lang$ctorStr = "snetwork.example-detail/ExampleDetail";

snetwork.example_detail.ExampleDetail.cljs$lang$ctorPrWriter = (function (this__22466__auto__,writer__22467__auto__,opt__22468__auto__){
return cljs.core._write.call(null,writer__22467__auto__,"snetwork.example-detail/ExampleDetail");
});
snetwork.example_detail.example_detail = om.next.factory.call(null,snetwork.example_detail.ExampleDetail,cljs.core.PersistentArrayMap.EMPTY);
goog.exportSymbol('snetwork.example_detail.example_detail', snetwork.example_detail.example_detail);

//# sourceMappingURL=example_detail.js.map