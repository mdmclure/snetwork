// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.example_grid');
goog.require('cljs.core');
goog.require('snetwork.link_detail');
goog.require('om.dom');
goog.require('cljsjs.material_ui');
goog.require('snetwork.example_tile');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
/**
 * @constructor
 */
snetwork.example_grid.ExampleGrid = (function snetwork$example_grid$ExampleGrid(){
var this__22464__auto__ = this;
React.Component.apply(this__22464__auto__,arguments);

if(!((this__22464__auto__.initLocalState == null))){
this__22464__auto__.state = this__22464__auto__.initLocalState();
} else {
this__22464__auto__.state = {};
}

return this__22464__auto__;
});

snetwork.example_grid.ExampleGrid.prototype = goog.object.clone(React.Component.prototype);

var x39810_39820 = snetwork.example_grid.ExampleGrid.prototype;
x39810_39820.componentWillUpdate = ((function (x39810_39820){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
if(((!((this__22399__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__22399__auto__.om$next$Ident$)))?true:false):false)){
var ident__22403__auto___39821 = om.next.ident.call(null,this__22399__auto__,om.next.props.call(null,this__22399__auto__));
var next_ident__22404__auto___39822 = om.next.ident.call(null,this__22399__auto__,om.next._next_props.call(null,next_props__22400__auto__,this__22399__auto__));
if(cljs.core.not_EQ_.call(null,ident__22403__auto___39821,next_ident__22404__auto___39822)){
var idxr__22405__auto___39823 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__22405__auto___39823 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__22405__auto___39823),((function (idxr__22405__auto___39823,ident__22403__auto___39821,next_ident__22404__auto___39822,this__22399__auto__,x39810_39820){
return (function (indexes__22406__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__22406__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__22403__auto___39821], null),cljs.core.disj,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__22404__auto___39822], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__22399__auto__);
});})(idxr__22405__auto___39823,ident__22403__auto___39821,next_ident__22404__auto___39822,this__22399__auto__,x39810_39820))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__22399__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22399__auto__);
});})(x39810_39820))
;

x39810_39820.shouldComponentUpdate = ((function (x39810_39820){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
var next_children__22402__auto__ = next_props__22400__auto__.children;
var next_props__22400__auto____$1 = goog.object.get(next_props__22400__auto__,"omcljs$value");
var next_props__22400__auto____$2 = (function (){var G__39812 = next_props__22400__auto____$1;
if((next_props__22400__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__39812);
} else {
return G__39812;
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
});})(x39810_39820))
;

x39810_39820.componentWillUnmount = ((function (x39810_39820){
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
});})(x39810_39820))
;

x39810_39820.componentDidUpdate = ((function (x39810_39820){
return (function (prev_props__22407__auto__,prev_state__22408__auto__){
var this__22399__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22399__auto__);
});})(x39810_39820))
;

x39810_39820.isMounted = ((function (x39810_39820){
return (function (){
var this__22399__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22399__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x39810_39820))
;

x39810_39820.componentWillMount = ((function (x39810_39820){
return (function (){
var this__22399__auto__ = this;
var indexer__22409__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22409__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22409__auto__,this__22399__auto__);
}
});})(x39810_39820))
;

x39810_39820.render = ((function (x39810_39820){
return (function (){
var this__22398__auto__ = this;
var this$ = this__22398__auto__;
var _STAR_reconciler_STAR_39813 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39814 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_39815 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_39816 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_39817 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22398__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22398__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22398__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22398__auto__);

om.next._STAR_parent_STAR_ = this__22398__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var example_list = new cljs.core.Keyword("example","list","example/list",2084257477).cljs$core$IFn$_invoke$arity$1(props);
return React.DOM.div(({"className": "example-pane"}),om.util.force_children.call(null,cljs_react_material_ui.core.grid_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-height","cell-height",776757236),(100),new cljs.core.Keyword(null,"cols","cols",-1914801295),(4)], null),cljs.core.map.call(null,snetwork.example_tile.example_tile,example_list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_39817;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_39816;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_39815;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_39814;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39813;
}});})(x39810_39820))
;


snetwork.example_grid.ExampleGrid.prototype.constructor = snetwork.example_grid.ExampleGrid;

snetwork.example_grid.ExampleGrid.prototype.constructor.displayName = "snetwork.example-grid/ExampleGrid";

snetwork.example_grid.ExampleGrid.prototype.om$isComponent = true;

var x39818_39824 = snetwork.example_grid.ExampleGrid;
x39818_39824.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x39818_39824.om$next$IQueryParams$params$arity$1 = ((function (x39818_39824){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_tile.ExampleTile),new cljs.core.Keyword(null,"link","link",-1769163468),om.next.get_query.call(null,snetwork.link_detail.LinkDetail),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("label","name","label/name",1610858269)], null)], null);
});})(x39818_39824))
;

x39818_39824.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x39818_39824.om$next$IQuery$query$arity$1 = ((function (x39818_39824){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","list","example/list",2084257477),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","list","link/list",761863797),new cljs.core.Symbol(null,"?link","?link",-1108278055,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("label","list","label/list",524087663),new cljs.core.Symbol(null,"?label","?label",-288705390,null)], null)], null);
});})(x39818_39824))
;


var x39819_39825 = snetwork.example_grid.ExampleGrid.prototype;
x39819_39825.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x39819_39825.om$next$IQueryParams$params$arity$1 = ((function (x39819_39825){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_tile.ExampleTile),new cljs.core.Keyword(null,"link","link",-1769163468),om.next.get_query.call(null,snetwork.link_detail.LinkDetail),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("label","name","label/name",1610858269)], null)], null);
});})(x39819_39825))
;

x39819_39825.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x39819_39825.om$next$IQuery$query$arity$1 = ((function (x39819_39825){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","list","example/list",2084257477),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","list","link/list",761863797),new cljs.core.Symbol(null,"?link","?link",-1108278055,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("label","list","label/list",524087663),new cljs.core.Symbol(null,"?label","?label",-288705390,null)], null)], null);
});})(x39819_39825))
;


snetwork.example_grid.ExampleGrid.cljs$lang$type = true;

snetwork.example_grid.ExampleGrid.cljs$lang$ctorStr = "snetwork.example-grid/ExampleGrid";

snetwork.example_grid.ExampleGrid.cljs$lang$ctorPrWriter = (function (this__22466__auto__,writer__22467__auto__,opt__22468__auto__){
return cljs.core._write.call(null,writer__22467__auto__,"snetwork.example-grid/ExampleGrid");
});
snetwork.example_grid.example_grid = om.next.factory.call(null,snetwork.example_grid.ExampleGrid,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=example_grid.js.map