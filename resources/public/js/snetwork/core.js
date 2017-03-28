// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('snetwork.parser');
goog.require('om.dom');
goog.require('cljsjs.material_ui');
goog.require('snetwork.util');
goog.require('snetwork.space_view');
goog.require('snetwork.example_grid');
goog.require('snetwork.state');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @constructor
 */
snetwork.core.AppRoot = (function snetwork$core$AppRoot(){
var this__22464__auto__ = this;
React.Component.apply(this__22464__auto__,arguments);

if(!((this__22464__auto__.initLocalState == null))){
this__22464__auto__.state = this__22464__auto__.initLocalState();
} else {
this__22464__auto__.state = {};
}

return this__22464__auto__;
});

snetwork.core.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x41514_41524 = snetwork.core.AppRoot.prototype;
x41514_41524.componentWillUpdate = ((function (x41514_41524){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
if(((!((this__22399__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__22399__auto__.om$next$Ident$)))?true:false):false)){
var ident__22403__auto___41525 = om.next.ident.call(null,this__22399__auto__,om.next.props.call(null,this__22399__auto__));
var next_ident__22404__auto___41526 = om.next.ident.call(null,this__22399__auto__,om.next._next_props.call(null,next_props__22400__auto__,this__22399__auto__));
if(cljs.core.not_EQ_.call(null,ident__22403__auto___41525,next_ident__22404__auto___41526)){
var idxr__22405__auto___41527 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__22405__auto___41527 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__22405__auto___41527),((function (idxr__22405__auto___41527,ident__22403__auto___41525,next_ident__22404__auto___41526,this__22399__auto__,x41514_41524){
return (function (indexes__22406__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__22406__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__22403__auto___41525], null),cljs.core.disj,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__22404__auto___41526], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__22399__auto__);
});})(idxr__22405__auto___41527,ident__22403__auto___41525,next_ident__22404__auto___41526,this__22399__auto__,x41514_41524))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__22399__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22399__auto__);
});})(x41514_41524))
;

x41514_41524.shouldComponentUpdate = ((function (x41514_41524){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
var next_children__22402__auto__ = next_props__22400__auto__.children;
var next_props__22400__auto____$1 = goog.object.get(next_props__22400__auto__,"omcljs$value");
var next_props__22400__auto____$2 = (function (){var G__41516 = next_props__22400__auto____$1;
if((next_props__22400__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41516);
} else {
return G__41516;
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
});})(x41514_41524))
;

x41514_41524.componentWillUnmount = ((function (x41514_41524){
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
});})(x41514_41524))
;

x41514_41524.componentDidUpdate = ((function (x41514_41524){
return (function (prev_props__22407__auto__,prev_state__22408__auto__){
var this__22399__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22399__auto__);
});})(x41514_41524))
;

x41514_41524.isMounted = ((function (x41514_41524){
return (function (){
var this__22399__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22399__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41514_41524))
;

x41514_41524.componentWillMount = ((function (x41514_41524){
return (function (){
var this__22399__auto__ = this;
var indexer__22409__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22409__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22409__auto__,this__22399__auto__);
}
});})(x41514_41524))
;

x41514_41524.render = ((function (x41514_41524){
return (function (){
var this__22398__auto__ = this;
var this$ = this__22398__auto__;
var _STAR_reconciler_STAR_41517 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41518 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41519 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41520 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41521 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22398__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22398__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22398__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22398__auto__);

om.next._STAR_parent_STAR_ = this__22398__auto__;

try{snetwork.example_grid.example_grid.call(null);

return snetwork.space_view.space_view.call(null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41521;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41520;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41519;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41518;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41517;
}});})(x41514_41524))
;


snetwork.core.AppRoot.prototype.constructor = snetwork.core.AppRoot;

snetwork.core.AppRoot.prototype.constructor.displayName = "snetwork.core/AppRoot";

snetwork.core.AppRoot.prototype.om$isComponent = true;

var x41522_41528 = snetwork.core.AppRoot;


var x41523_41529 = snetwork.core.AppRoot.prototype;


snetwork.core.AppRoot.cljs$lang$type = true;

snetwork.core.AppRoot.cljs$lang$ctorStr = "snetwork.core/AppRoot";

snetwork.core.AppRoot.cljs$lang$ctorPrWriter = (function (this__22466__auto__,writer__22467__auto__,opt__22468__auto__){
return cljs.core._write.call(null,writer__22467__auto__,"snetwork.core/AppRoot");
});
snetwork.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,snetwork.state.init_state),new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),snetwork.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),snetwork.parser.mutate], null))], null));
om.next.add_root_BANG_.call(null,snetwork.core.reconciler,snetwork.core.AppRoot,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map