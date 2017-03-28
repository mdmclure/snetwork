// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.example_tile');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('snetwork.example_detail');
/**
 * @constructor
 */
snetwork.example_tile.ExampleTile = (function snetwork$example_tile$ExampleTile(){
var this__22464__auto__ = this;
React.Component.apply(this__22464__auto__,arguments);

if(!((this__22464__auto__.initLocalState == null))){
this__22464__auto__.state = this__22464__auto__.initLocalState();
} else {
this__22464__auto__.state = {};
}

return this__22464__auto__;
});

snetwork.example_tile.ExampleTile.prototype = goog.object.clone(React.Component.prototype);

var x39780_39798 = snetwork.example_tile.ExampleTile.prototype;
x39780_39798.componentWillUpdate = ((function (x39780_39798){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
if(((!((this__22399__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__22399__auto__.om$next$Ident$)))?true:false):false)){
var ident__22403__auto___39799 = om.next.ident.call(null,this__22399__auto__,om.next.props.call(null,this__22399__auto__));
var next_ident__22404__auto___39800 = om.next.ident.call(null,this__22399__auto__,om.next._next_props.call(null,next_props__22400__auto__,this__22399__auto__));
if(cljs.core.not_EQ_.call(null,ident__22403__auto___39799,next_ident__22404__auto___39800)){
var idxr__22405__auto___39801 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__22405__auto___39801 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__22405__auto___39801),((function (idxr__22405__auto___39801,ident__22403__auto___39799,next_ident__22404__auto___39800,this__22399__auto__,x39780_39798){
return (function (indexes__22406__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__22406__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__22403__auto___39799], null),cljs.core.disj,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__22404__auto___39800], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__22399__auto__);
});})(idxr__22405__auto___39801,ident__22403__auto___39799,next_ident__22404__auto___39800,this__22399__auto__,x39780_39798))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__22399__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22399__auto__);
});})(x39780_39798))
;

x39780_39798.shouldComponentUpdate = ((function (x39780_39798){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
var next_children__22402__auto__ = next_props__22400__auto__.children;
var next_props__22400__auto____$1 = goog.object.get(next_props__22400__auto__,"omcljs$value");
var next_props__22400__auto____$2 = (function (){var G__39782 = next_props__22400__auto____$1;
if((next_props__22400__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__39782);
} else {
return G__39782;
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
});})(x39780_39798))
;

x39780_39798.componentWillUnmount = ((function (x39780_39798){
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
});})(x39780_39798))
;

x39780_39798.componentDidUpdate = ((function (x39780_39798){
return (function (prev_props__22407__auto__,prev_state__22408__auto__){
var this__22399__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22399__auto__);
});})(x39780_39798))
;

x39780_39798.isMounted = ((function (x39780_39798){
return (function (){
var this__22399__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22399__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x39780_39798))
;

x39780_39798.componentWillMount = ((function (x39780_39798){
return (function (){
var this__22399__auto__ = this;
var indexer__22409__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22409__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22409__auto__,this__22399__auto__);
}
});})(x39780_39798))
;

x39780_39798.render = ((function (x39780_39798){
return (function (){
var this__22398__auto__ = this;
var this$ = this__22398__auto__;
var _STAR_reconciler_STAR_39783 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39784 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_39785 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_39786 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_39787 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22398__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22398__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22398__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22398__auto__);

om.next._STAR_parent_STAR_ = this__22398__auto__;

try{var map__39788 = om.next.props.call(null,this$);
var map__39788__$1 = ((((!((map__39788 == null)))?((((map__39788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39788):map__39788);
var name = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword("example","name","example/name",1023496615));
var thumb_src = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673));
var in_space = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword("example","in-space","example/in-space",716984420));
var in_training = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword("example","in-training","example/in-training",-1322672517));
var in_testing = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183));
var label = cljs.core.get.call(null,map__39788__$1,new cljs.core.Keyword("example","label","example/label",927453594));
return cljs_react_material_ui.core.grid_tile.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (map__39788,map__39788__$1,name,thumb_src,in_space,in_training,in_testing,label,_STAR_reconciler_STAR_39783,_STAR_depth_STAR_39784,_STAR_shared_STAR_39785,_STAR_instrument_STAR_39786,_STAR_parent_STAR_39787,this$,this__22398__auto__,x39780_39798){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19713__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("snetwork.example-detail","toggle-in-space","snetwork.example-detail/toggle-in-space",1064865058,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19713__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("example","in-space","example/in-space",716984420)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("space-examples","list","space-examples/list",-93791485)))))));
});})(map__39788,map__39788__$1,name,thumb_src,in_space,in_training,in_testing,label,_STAR_reconciler_STAR_39783,_STAR_depth_STAR_39784,_STAR_shared_STAR_39785,_STAR_instrument_STAR_39786,_STAR_parent_STAR_39787,this$,this__22398__auto__,x39780_39798))
], null),React.DOM.img(({"src": thumb_src, "className": "example-thumb"})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_39787;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_39786;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_39785;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_39784;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39783;
}});})(x39780_39798))
;


snetwork.example_tile.ExampleTile.prototype.constructor = snetwork.example_tile.ExampleTile;

snetwork.example_tile.ExampleTile.prototype.constructor.displayName = "snetwork.example-tile/ExampleTile";

snetwork.example_tile.ExampleTile.prototype.om$isComponent = true;

var x39790_39802 = snetwork.example_tile.ExampleTile;
x39790_39802.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x39790_39802.om$next$Ident$ident$arity$2 = ((function (x39790_39802){
return (function (this$,p__39791){
var map__39792 = p__39791;
var map__39792__$1 = ((((!((map__39792 == null)))?((((map__39792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39792):map__39792);
var id = cljs.core.get.call(null,map__39792__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null);
});})(x39790_39802))
;

x39790_39802.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x39790_39802.om$next$IQuery$query$arity$1 = ((function (x39790_39802){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","name","example/name",1023496615),new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673),new cljs.core.Keyword("example","in-space","example/in-space",716984420),new cljs.core.Keyword("example","in-training","example/in-training",-1322672517),new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","label","example/label",927453594),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","name","label/name",1610858269)], null)], null)], null);
});})(x39790_39802))
;


var x39794_39803 = snetwork.example_tile.ExampleTile.prototype;
x39794_39803.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x39794_39803.om$next$Ident$ident$arity$2 = ((function (x39794_39803){
return (function (this$,p__39795){
var map__39796 = p__39795;
var map__39796__$1 = ((((!((map__39796 == null)))?((((map__39796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39796):map__39796);
var id = cljs.core.get.call(null,map__39796__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null);
});})(x39794_39803))
;

x39794_39803.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x39794_39803.om$next$IQuery$query$arity$1 = ((function (x39794_39803){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","name","example/name",1023496615),new cljs.core.Keyword("example","thumb-src","example/thumb-src",-1451537673),new cljs.core.Keyword("example","in-space","example/in-space",716984420),new cljs.core.Keyword("example","in-training","example/in-training",-1322672517),new cljs.core.Keyword("example","in-testing","example/in-testing",-153227183),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","label","example/label",927453594),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","name","label/name",1610858269)], null)], null)], null);
});})(x39794_39803))
;


snetwork.example_tile.ExampleTile.cljs$lang$type = true;

snetwork.example_tile.ExampleTile.cljs$lang$ctorStr = "snetwork.example-tile/ExampleTile";

snetwork.example_tile.ExampleTile.cljs$lang$ctorPrWriter = (function (this__22466__auto__,writer__22467__auto__,opt__22468__auto__){
return cljs.core._write.call(null,writer__22467__auto__,"snetwork.example-tile/ExampleTile");
});
snetwork.example_tile.example_tile = om.next.factory.call(null,snetwork.example_tile.ExampleTile,cljs.core.PersistentArrayMap.EMPTY);
goog.exportSymbol('snetwork.example_tile.example_tile', snetwork.example_tile.example_tile);

//# sourceMappingURL=example_tile.js.map