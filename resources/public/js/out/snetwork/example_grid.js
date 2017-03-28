// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.example_grid');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('snetwork.example_tile');
/**
 * @constructor
 */
snetwork.example_grid.ExampleGrid = (function snetwork$example_grid$ExampleGrid(){
var this__30556__auto__ = this;
React.Component.apply(this__30556__auto__,arguments);

if(!((this__30556__auto__.initLocalState == null))){
this__30556__auto__.state = this__30556__auto__.initLocalState();
} else {
this__30556__auto__.state = {};
}

return this__30556__auto__;
});

snetwork.example_grid.ExampleGrid.prototype = goog.object.clone(React.Component.prototype);

var x41345_41355 = snetwork.example_grid.ExampleGrid.prototype;
x41345_41355.componentWillUpdate = ((function (x41345_41355){
return (function (next_props__30492__auto__,next_state__30493__auto__){
var this__30491__auto__ = this;
if(((!((this__30491__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__30491__auto__.om$next$Ident$)))?true:false):false)){
var ident__30495__auto___41356 = om.next.ident.call(null,this__30491__auto__,om.next.props.call(null,this__30491__auto__));
var next_ident__30496__auto___41357 = om.next.ident.call(null,this__30491__auto__,om.next._next_props.call(null,next_props__30492__auto__,this__30491__auto__));
if(cljs.core.not_EQ_.call(null,ident__30495__auto___41356,next_ident__30496__auto___41357)){
var idxr__30497__auto___41358 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30497__auto___41358 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30497__auto___41358),((function (idxr__30497__auto___41358,ident__30495__auto___41356,next_ident__30496__auto___41357,this__30491__auto__,x41345_41355){
return (function (indexes__30498__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30498__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30495__auto___41356], null),cljs.core.disj,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30496__auto___41357], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30491__auto__);
});})(idxr__30497__auto___41358,ident__30495__auto___41356,next_ident__30496__auto___41357,this__30491__auto__,x41345_41355))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30491__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30491__auto__);
});})(x41345_41355))
;

x41345_41355.shouldComponentUpdate = ((function (x41345_41355){
return (function (next_props__30492__auto__,next_state__30493__auto__){
var this__30491__auto__ = this;
var next_children__30494__auto__ = next_props__30492__auto__.children;
var next_props__30492__auto____$1 = goog.object.get(next_props__30492__auto__,"omcljs$value");
var next_props__30492__auto____$2 = (function (){var G__41347 = next_props__30492__auto____$1;
if((next_props__30492__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41347);
} else {
return G__41347;
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
});})(x41345_41355))
;

x41345_41355.componentWillUnmount = ((function (x41345_41355){
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
});})(x41345_41355))
;

x41345_41355.componentDidUpdate = ((function (x41345_41355){
return (function (prev_props__30499__auto__,prev_state__30500__auto__){
var this__30491__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30491__auto__);
});})(x41345_41355))
;

x41345_41355.isMounted = ((function (x41345_41355){
return (function (){
var this__30491__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30491__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41345_41355))
;

x41345_41355.componentWillMount = ((function (x41345_41355){
return (function (){
var this__30491__auto__ = this;
var indexer__30501__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30501__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30501__auto__,this__30491__auto__);
}
});})(x41345_41355))
;

x41345_41355.render = ((function (x41345_41355){
return (function (){
var this__30490__auto__ = this;
var this$ = this__30490__auto__;
var _STAR_reconciler_STAR_41348 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41349 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41350 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41351 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41352 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30490__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30490__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30490__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30490__auto__);

om.next._STAR_parent_STAR_ = this__30490__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var example_list = new cljs.core.Keyword("examples","list","examples/list",-1155313124).cljs$core$IFn$_invoke$arity$1(props);
return React.DOM.div(({"className": "example-pane"}),om.util.force_children.call(null,cljs_react_material_ui.core.grid_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-height","cell-height",776757236),(100),new cljs.core.Keyword(null,"cols","cols",-1914801295),(8)], null),cljs.core.map.call(null,snetwork.example_tile.example_tile,example_list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41352;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41351;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41350;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41349;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41348;
}});})(x41345_41355))
;


snetwork.example_grid.ExampleGrid.prototype.constructor = snetwork.example_grid.ExampleGrid;

snetwork.example_grid.ExampleGrid.prototype.constructor.displayName = "snetwork.example-grid/ExampleGrid";

snetwork.example_grid.ExampleGrid.prototype.om$isComponent = true;

var x41353_41359 = snetwork.example_grid.ExampleGrid;
x41353_41359.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x41353_41359.om$next$IQuery$query$arity$1 = ((function (x41353_41359){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("examples","list","examples/list",-1155313124)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.example_tile.ExampleTile);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
});})(x41353_41359))
;


var x41354_41360 = snetwork.example_grid.ExampleGrid.prototype;
x41354_41360.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x41354_41360.om$next$IQuery$query$arity$1 = ((function (x41354_41360){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("examples","list","examples/list",-1155313124)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.example_tile.ExampleTile);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
});})(x41354_41360))
;


snetwork.example_grid.ExampleGrid.cljs$lang$type = true;

snetwork.example_grid.ExampleGrid.cljs$lang$ctorStr = "snetwork.example-grid/ExampleGrid";

snetwork.example_grid.ExampleGrid.cljs$lang$ctorPrWriter = (function (this__30558__auto__,writer__30559__auto__,opt__30560__auto__){
return cljs.core._write.call(null,writer__30559__auto__,"snetwork.example-grid/ExampleGrid");
});
snetwork.example_grid.example_grid = om.next.factory.call(null,snetwork.example_grid.ExampleGrid,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=example_grid.js.map?rel=1490218930343