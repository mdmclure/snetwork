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
var this__22464__auto__ = this;
React.Component.apply(this__22464__auto__,arguments);

if(!((this__22464__auto__.initLocalState == null))){
this__22464__auto__.state = this__22464__auto__.initLocalState();
} else {
this__22464__auto__.state = {};
}

return this__22464__auto__;
});

snetwork.detail_pane.DetailPane.prototype = goog.object.clone(React.Component.prototype);

var x41400_41410 = snetwork.detail_pane.DetailPane.prototype;
x41400_41410.componentWillUpdate = ((function (x41400_41410){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
if(((!((this__22399__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__22399__auto__.om$next$Ident$)))?true:false):false)){
var ident__22403__auto___41411 = om.next.ident.call(null,this__22399__auto__,om.next.props.call(null,this__22399__auto__));
var next_ident__22404__auto___41412 = om.next.ident.call(null,this__22399__auto__,om.next._next_props.call(null,next_props__22400__auto__,this__22399__auto__));
if(cljs.core.not_EQ_.call(null,ident__22403__auto___41411,next_ident__22404__auto___41412)){
var idxr__22405__auto___41413 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__22405__auto___41413 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__22405__auto___41413),((function (idxr__22405__auto___41413,ident__22403__auto___41411,next_ident__22404__auto___41412,this__22399__auto__,x41400_41410){
return (function (indexes__22406__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__22406__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__22403__auto___41411], null),cljs.core.disj,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__22404__auto___41412], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__22399__auto__);
});})(idxr__22405__auto___41413,ident__22403__auto___41411,next_ident__22404__auto___41412,this__22399__auto__,x41400_41410))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__22399__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22399__auto__);
});})(x41400_41410))
;

x41400_41410.shouldComponentUpdate = ((function (x41400_41410){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
var next_children__22402__auto__ = next_props__22400__auto__.children;
var next_props__22400__auto____$1 = goog.object.get(next_props__22400__auto__,"omcljs$value");
var next_props__22400__auto____$2 = (function (){var G__41402 = next_props__22400__auto____$1;
if((next_props__22400__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41402);
} else {
return G__41402;
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
});})(x41400_41410))
;

x41400_41410.componentWillUnmount = ((function (x41400_41410){
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
});})(x41400_41410))
;

x41400_41410.componentDidUpdate = ((function (x41400_41410){
return (function (prev_props__22407__auto__,prev_state__22408__auto__){
var this__22399__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22399__auto__);
});})(x41400_41410))
;

x41400_41410.isMounted = ((function (x41400_41410){
return (function (){
var this__22399__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22399__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41400_41410))
;

x41400_41410.componentWillMount = ((function (x41400_41410){
return (function (){
var this__22399__auto__ = this;
var indexer__22409__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22409__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22409__auto__,this__22399__auto__);
}
});})(x41400_41410))
;

x41400_41410.render = ((function (x41400_41410){
return (function (){
var this__22398__auto__ = this;
var this$ = this__22398__auto__;
var _STAR_reconciler_STAR_41403 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41404 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41405 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41406 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41407 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22398__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22398__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22398__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22398__auto__);

om.next._STAR_parent_STAR_ = this__22398__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var example_focus = new cljs.core.Keyword("example","focus","example/focus",2052454689).cljs$core$IFn$_invoke$arity$1(props);
var link_focus = new cljs.core.Keyword("link","focus","link/focus",222271121).cljs$core$IFn$_invoke$arity$1(props);
return React.DOM.div(({"className": "detail-pane"}),om.util.force_children.call(null,(cljs.core.truth_(example_focus)?snetwork.example_detail.example_detail.call(null,example_focus):(cljs.core.truth_(link_focus)?snetwork.link_detail.link_detail.call(null,link_focus):React.DOM.p("Mouse over something for detail")
))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41407;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41406;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41405;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41404;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41403;
}});})(x41400_41410))
;


snetwork.detail_pane.DetailPane.prototype.constructor = snetwork.detail_pane.DetailPane;

snetwork.detail_pane.DetailPane.prototype.constructor.displayName = "snetwork.detail-pane/DetailPane";

snetwork.detail_pane.DetailPane.prototype.om$isComponent = true;

var x41408_41414 = snetwork.detail_pane.DetailPane;
x41408_41414.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x41408_41414.om$next$IQueryParams$params$arity$1 = ((function (x41408_41414){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_detail.ExampleDetail),new cljs.core.Keyword(null,"link","link",-1769163468),om.next.get_query.call(null,snetwork.link_detail.LinkDetail)], null);
});})(x41408_41414))
;

x41408_41414.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x41408_41414.om$next$IQuery$query$arity$1 = ((function (x41408_41414){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","focus","example/focus",2052454689),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","focus","link/focus",222271121),new cljs.core.Symbol(null,"?link","?link",-1108278055,null)], null)], null);
});})(x41408_41414))
;


var x41409_41415 = snetwork.detail_pane.DetailPane.prototype;
x41409_41415.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x41409_41415.om$next$IQueryParams$params$arity$1 = ((function (x41409_41415){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_detail.ExampleDetail),new cljs.core.Keyword(null,"link","link",-1769163468),om.next.get_query.call(null,snetwork.link_detail.LinkDetail)], null);
});})(x41409_41415))
;

x41409_41415.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x41409_41415.om$next$IQuery$query$arity$1 = ((function (x41409_41415){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","focus","example/focus",2052454689),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","focus","link/focus",222271121),new cljs.core.Symbol(null,"?link","?link",-1108278055,null)], null)], null);
});})(x41409_41415))
;


snetwork.detail_pane.DetailPane.cljs$lang$type = true;

snetwork.detail_pane.DetailPane.cljs$lang$ctorStr = "snetwork.detail-pane/DetailPane";

snetwork.detail_pane.DetailPane.cljs$lang$ctorPrWriter = (function (this__22466__auto__,writer__22467__auto__,opt__22468__auto__){
return cljs.core._write.call(null,writer__22467__auto__,"snetwork.detail-pane/DetailPane");
});
snetwork.detail_pane.detail_pane = om.next.factory.call(null,snetwork.detail_pane.DetailPane,cljs.core.PersistentArrayMap.EMPTY);
goog.exportSymbol('snetwork.detail_pane.detail_pane', snetwork.detail_pane.detail_pane);

//# sourceMappingURL=detail_pane.js.map