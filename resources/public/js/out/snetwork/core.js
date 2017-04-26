// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('snetwork.link_detail');
goog.require('snetwork.parser');
goog.require('om.dom');
goog.require('cljsjs.material_ui');
goog.require('snetwork.util');
goog.require('snetwork.example_tile');
goog.require('snetwork.space_view');
goog.require('snetwork.example_grid');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @constructor
 */
snetwork.core.AppRoot = (function snetwork$core$AppRoot(){
var this__24455__auto__ = this;
React.Component.apply(this__24455__auto__,arguments);

if(!((this__24455__auto__.initLocalState == null))){
this__24455__auto__.state = this__24455__auto__.initLocalState();
} else {
this__24455__auto__.state = {};
}

return this__24455__auto__;
});

snetwork.core.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x36512_36522 = snetwork.core.AppRoot.prototype;
x36512_36522.componentWillUpdate = ((function (x36512_36522){
return (function (next_props__24391__auto__,next_state__24392__auto__){
var this__24390__auto__ = this;
if(((!((this__24390__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24390__auto__.om$next$Ident$)))?true:false):false)){
var ident__24394__auto___36523 = om.next.ident.call(null,this__24390__auto__,om.next.props.call(null,this__24390__auto__));
var next_ident__24395__auto___36524 = om.next.ident.call(null,this__24390__auto__,om.next._next_props.call(null,next_props__24391__auto__,this__24390__auto__));
if(cljs.core.not_EQ_.call(null,ident__24394__auto___36523,next_ident__24395__auto___36524)){
var idxr__24396__auto___36525 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24390__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__24396__auto___36525 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__24396__auto___36525),((function (idxr__24396__auto___36525,ident__24394__auto___36523,next_ident__24395__auto___36524,this__24390__auto__,x36512_36522){
return (function (indexes__24397__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__24397__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__24394__auto___36523], null),cljs.core.disj,this__24390__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__24395__auto___36524], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24390__auto__);
});})(idxr__24396__auto___36525,ident__24394__auto___36523,next_ident__24395__auto___36524,this__24390__auto__,x36512_36522))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__24390__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24390__auto__);
});})(x36512_36522))
;

x36512_36522.shouldComponentUpdate = ((function (x36512_36522){
return (function (next_props__24391__auto__,next_state__24392__auto__){
var this__24390__auto__ = this;
var next_children__24393__auto__ = next_props__24391__auto__.children;
var next_props__24391__auto____$1 = goog.object.get(next_props__24391__auto__,"omcljs$value");
var next_props__24391__auto____$2 = (function (){var G__36514 = next_props__24391__auto____$1;
if((next_props__24391__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36514);
} else {
return G__36514;
}
})();
var or__21625__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24390__auto__),next_props__24391__auto____$2);
if(or__21625__auto__){
return or__21625__auto__;
} else {
var or__21625__auto____$1 = (function (){var and__21613__auto__ = this__24390__auto__.state;
if(cljs.core.truth_(and__21613__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24390__auto__.state,"omcljs$state"),goog.object.get(next_state__24392__auto__,"omcljs$state"));
} else {
return and__21613__auto__;
}
})();
if(cljs.core.truth_(or__21625__auto____$1)){
return or__21625__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__24390__auto__.props.children,next_children__24393__auto__);
}
}
});})(x36512_36522))
;

x36512_36522.componentWillUnmount = ((function (x36512_36522){
return (function (){
var this__24390__auto__ = this;
var r__24401__auto__ = om.next.get_reconciler.call(null,this__24390__auto__);
var cfg__24402__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24401__auto__);
var st__24403__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24402__auto__);
var indexer__24400__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24402__auto__);
if(cljs.core.truth_((function (){var and__21613__auto__ = !((st__24403__auto__ == null));
if(and__21613__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__24403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__24390__auto__], null));
} else {
return and__21613__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__24403__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24390__auto__);
} else {
}

if((indexer__24400__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24400__auto__,this__24390__auto__);
}
});})(x36512_36522))
;

x36512_36522.componentDidUpdate = ((function (x36512_36522){
return (function (prev_props__24398__auto__,prev_state__24399__auto__){
var this__24390__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24390__auto__);
});})(x36512_36522))
;

x36512_36522.isMounted = ((function (x36512_36522){
return (function (){
var this__24390__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24390__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36512_36522))
;

x36512_36522.componentWillMount = ((function (x36512_36522){
return (function (){
var this__24390__auto__ = this;
var indexer__24400__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24390__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24400__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24400__auto__,this__24390__auto__);
}
});})(x36512_36522))
;

x36512_36522.render = ((function (x36512_36522){
return (function (){
var this__24389__auto__ = this;
var this$ = this__24389__auto__;
var _STAR_reconciler_STAR_36515 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36516 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36517 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36518 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36519 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__24389__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__24389__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__24389__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__24389__auto__);

om.next._STAR_parent_STAR_ = this__24389__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var examples = new cljs.core.Keyword(null,"examples","examples",-473712556).cljs$core$IFn$_invoke$arity$1(props);
var links = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(props);
var space = new cljs.core.Keyword(null,"space","space",348133475).cljs$core$IFn$_invoke$arity$1(props);
return cljs_react_material_ui.core.mui_theme_provider.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary1-color","primary1-color",-450634374),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"deep-orange-a100","deep-orange-a100",-560524699))], null),new cljs.core.Keyword(null,"raised-button","raised-button",1120646461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary-text-color","primary-text-color",-1255467826),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"light-black","light-black",1983033322)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(200)], null)], null))], null),React.DOM.div(({"className": "table-container"}),om.util.force_children.call(null,snetwork.example_grid.example_grid.call(null,examples)),om.util.force_children.call(null,snetwork.space_view.space_view.call(null,space))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36519;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36518;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36517;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36516;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36515;
}});})(x36512_36522))
;


snetwork.core.AppRoot.prototype.constructor = snetwork.core.AppRoot;

snetwork.core.AppRoot.prototype.constructor.displayName = "snetwork.core/AppRoot";

snetwork.core.AppRoot.prototype.om$isComponent = true;

var x36520_36526 = snetwork.core.AppRoot;
x36520_36526.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x36520_36526.om$next$IQuery$query$arity$1 = ((function (x36520_36526){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"examples","examples",-473712556)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.example_grid.ExampleGrid);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})(),(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"links","links",-654507394)),(function (){var x__22462__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("links","list","links/list",523796140)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.link_detail.LinkDetail);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})(),(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"space","space",348133475)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.space_view.SpaceView);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
});})(x36520_36526))
;


var x36521_36527 = snetwork.core.AppRoot.prototype;
x36521_36527.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x36521_36527.om$next$IQuery$query$arity$1 = ((function (x36521_36527){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"examples","examples",-473712556)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.example_grid.ExampleGrid);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})(),(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"links","links",-654507394)),(function (){var x__22462__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("links","list","links/list",523796140)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.link_detail.LinkDetail);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})(),(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"space","space",348133475)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.space_view.SpaceView);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
});})(x36521_36527))
;


snetwork.core.AppRoot.cljs$lang$type = true;

snetwork.core.AppRoot.cljs$lang$ctorStr = "snetwork.core/AppRoot";

snetwork.core.AppRoot.cljs$lang$ctorPrWriter = (function (this__24457__auto__,writer__24458__auto__,opt__24459__auto__){
return cljs.core._write.call(null,writer__24458__auto__,"snetwork.core/AppRoot");
});
console.log(simSpaceJson);
if(typeof snetwork.core.init_state !== 'undefined'){
} else {
snetwork.core.init_state = cljs.core.js__GT_clj.call(null,simSpaceJson,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
snetwork.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),snetwork.core.init_state,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),snetwork.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),snetwork.parser.mutate], null))], null));
om.next.add_root_BANG_.call(null,snetwork.core.reconciler,snetwork.core.AppRoot,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map?rel=1493176248363