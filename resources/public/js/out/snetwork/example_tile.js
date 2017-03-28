// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.example_tile');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.icons');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
snetwork.example_tile.ExampleTile = (function snetwork$example_tile$ExampleTile(){
var this__30556__auto__ = this;
React.Component.apply(this__30556__auto__,arguments);

if(!((this__30556__auto__.initLocalState == null))){
this__30556__auto__.state = this__30556__auto__.initLocalState();
} else {
this__30556__auto__.state = {};
}

return this__30556__auto__;
});

snetwork.example_tile.ExampleTile.prototype = goog.object.clone(React.Component.prototype);

var x65460_65478 = snetwork.example_tile.ExampleTile.prototype;
x65460_65478.componentWillUpdate = ((function (x65460_65478){
return (function (next_props__30492__auto__,next_state__30493__auto__){
var this__30491__auto__ = this;
if(((!((this__30491__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__30491__auto__.om$next$Ident$)))?true:false):false)){
var ident__30495__auto___65479 = om.next.ident.call(null,this__30491__auto__,om.next.props.call(null,this__30491__auto__));
var next_ident__30496__auto___65480 = om.next.ident.call(null,this__30491__auto__,om.next._next_props.call(null,next_props__30492__auto__,this__30491__auto__));
if(cljs.core.not_EQ_.call(null,ident__30495__auto___65479,next_ident__30496__auto___65480)){
var idxr__30497__auto___65481 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30497__auto___65481 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30497__auto___65481),((function (idxr__30497__auto___65481,ident__30495__auto___65479,next_ident__30496__auto___65480,this__30491__auto__,x65460_65478){
return (function (indexes__30498__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30498__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30495__auto___65479], null),cljs.core.disj,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30496__auto___65480], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30491__auto__);
});})(idxr__30497__auto___65481,ident__30495__auto___65479,next_ident__30496__auto___65480,this__30491__auto__,x65460_65478))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30491__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30491__auto__);
});})(x65460_65478))
;

x65460_65478.shouldComponentUpdate = ((function (x65460_65478){
return (function (next_props__30492__auto__,next_state__30493__auto__){
var this__30491__auto__ = this;
var next_children__30494__auto__ = next_props__30492__auto__.children;
var next_props__30492__auto____$1 = goog.object.get(next_props__30492__auto__,"omcljs$value");
var next_props__30492__auto____$2 = (function (){var G__65462 = next_props__30492__auto____$1;
if((next_props__30492__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__65462);
} else {
return G__65462;
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
});})(x65460_65478))
;

x65460_65478.componentWillUnmount = ((function (x65460_65478){
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
});})(x65460_65478))
;

x65460_65478.componentDidUpdate = ((function (x65460_65478){
return (function (prev_props__30499__auto__,prev_state__30500__auto__){
var this__30491__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30491__auto__);
});})(x65460_65478))
;

x65460_65478.isMounted = ((function (x65460_65478){
return (function (){
var this__30491__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30491__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x65460_65478))
;

x65460_65478.componentWillMount = ((function (x65460_65478){
return (function (){
var this__30491__auto__ = this;
var indexer__30501__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30501__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30501__auto__,this__30491__auto__);
}
});})(x65460_65478))
;

x65460_65478.render = ((function (x65460_65478){
return (function (){
var this__30490__auto__ = this;
var this$ = this__30490__auto__;
var _STAR_reconciler_STAR_65463 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_65464 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_65465 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_65466 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_65467 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30490__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30490__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30490__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30490__auto__);

om.next._STAR_parent_STAR_ = this__30490__auto__;

try{var map__65468 = om.next.props.call(null,this$);
var map__65468__$1 = ((((!((map__65468 == null)))?((((map__65468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65468):map__65468);
var id = cljs.core.get.call(null,map__65468__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var name = cljs.core.get.call(null,map__65468__$1,new cljs.core.Keyword("example","name","example/name",1023496615));
var thumb_src = cljs.core.get.call(null,map__65468__$1,new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673));
var in_space = cljs.core.get.call(null,map__65468__$1,new cljs.core.Keyword("example","in-space","example/in-space",716984420));
var group = cljs.core.get.call(null,map__65468__$1,new cljs.core.Keyword(null,"group","group",582596132));
return cljs_react_material_ui.core.grid_tile.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"className","className",-1983287057),"example-tile",new cljs.core.Keyword(null,"actionIcon","actionIcon",576396863),(cljs.core.truth_(in_space)?cljs_react_material_ui.core.icon_button.call(null,cljs_react_material_ui.icons.action_done.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(56),new cljs.core.Keyword(null,"height","height",1025178622),(56)], null)], null))):null),new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),(cljs.core.truth_(in_space)?((function (map__65468,map__65468__$1,id,name,thumb_src,in_space,group,_STAR_reconciler_STAR_65463,_STAR_depth_STAR_65464,_STAR_shared_STAR_65465,_STAR_instrument_STAR_65466,_STAR_parent_STAR_65467,this$,this__30490__auto__,x65460_65478){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("example","remove-from-space","example/remove-from-space",-663817971,null)),(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__22462__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("space","examples","space/examples",-398686406)))))));
});})(map__65468,map__65468__$1,id,name,thumb_src,in_space,group,_STAR_reconciler_STAR_65463,_STAR_depth_STAR_65464,_STAR_shared_STAR_65465,_STAR_instrument_STAR_65466,_STAR_parent_STAR_65467,this$,this__30490__auto__,x65460_65478))
:((function (map__65468,map__65468__$1,id,name,thumb_src,in_space,group,_STAR_reconciler_STAR_65463,_STAR_depth_STAR_65464,_STAR_shared_STAR_65465,_STAR_instrument_STAR_65466,_STAR_parent_STAR_65467,this$,this__30490__auto__,x65460_65478){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("example","add-to-space","example/add-to-space",987392543,null)),(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__22462__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("space","examples","space/examples",-398686406)))))));
});})(map__65468,map__65468__$1,id,name,thumb_src,in_space,group,_STAR_reconciler_STAR_65463,_STAR_depth_STAR_65464,_STAR_shared_STAR_65465,_STAR_instrument_STAR_65466,_STAR_parent_STAR_65467,this$,this__30490__auto__,x65460_65478))
)], null),React.DOM.img(({"src": thumb_src, "height": (20), "width": (20), "className": "example-thumb"})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_65467;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_65466;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_65465;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_65464;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_65463;
}});})(x65460_65478))
;


snetwork.example_tile.ExampleTile.prototype.constructor = snetwork.example_tile.ExampleTile;

snetwork.example_tile.ExampleTile.prototype.constructor.displayName = "snetwork.example-tile/ExampleTile";

snetwork.example_tile.ExampleTile.prototype.om$isComponent = true;

var x65470_65482 = snetwork.example_tile.ExampleTile;
x65470_65482.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65470_65482.om$next$Ident$ident$arity$2 = ((function (x65470_65482){
return (function (this$,p__65471){
var map__65472 = p__65471;
var map__65472__$1 = ((((!((map__65472 == null)))?((((map__65472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65472):map__65472);
var id = cljs.core.get.call(null,map__65472__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null);
});})(x65470_65482))
;

x65470_65482.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65470_65482.om$next$IQuery$query$arity$1 = ((function (x65470_65482){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("example","name","example/name",1023496615),new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673),new cljs.core.Keyword("example","in-space","example/in-space",716984420),new cljs.core.Keyword(null,"group","group",582596132)], null);
});})(x65470_65482))
;


var x65474_65483 = snetwork.example_tile.ExampleTile.prototype;
x65474_65483.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x65474_65483.om$next$Ident$ident$arity$2 = ((function (x65474_65483){
return (function (this$,p__65475){
var map__65476 = p__65475;
var map__65476__$1 = ((((!((map__65476 == null)))?((((map__65476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65476):map__65476);
var id = cljs.core.get.call(null,map__65476__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null);
});})(x65474_65483))
;

x65474_65483.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x65474_65483.om$next$IQuery$query$arity$1 = ((function (x65474_65483){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("example","name","example/name",1023496615),new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673),new cljs.core.Keyword("example","in-space","example/in-space",716984420),new cljs.core.Keyword(null,"group","group",582596132)], null);
});})(x65474_65483))
;


snetwork.example_tile.ExampleTile.cljs$lang$type = true;

snetwork.example_tile.ExampleTile.cljs$lang$ctorStr = "snetwork.example-tile/ExampleTile";

snetwork.example_tile.ExampleTile.cljs$lang$ctorPrWriter = (function (this__30558__auto__,writer__30559__auto__,opt__30560__auto__){
return cljs.core._write.call(null,writer__30559__auto__,"snetwork.example-tile/ExampleTile");
});
snetwork.example_tile.example_tile = om.next.factory.call(null,snetwork.example_tile.ExampleTile,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=example_tile.js.map?rel=1490218930246