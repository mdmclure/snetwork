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
var this__23329__auto__ = this;
React.Component.apply(this__23329__auto__,arguments);

if(!((this__23329__auto__.initLocalState == null))){
this__23329__auto__.state = this__23329__auto__.initLocalState();
} else {
this__23329__auto__.state = {};
}

return this__23329__auto__;
});

snetwork.detail_pane.DetailPane.prototype = goog.object.clone(React.Component.prototype);

var x26961_26971 = snetwork.detail_pane.DetailPane.prototype;
x26961_26971.componentWillUpdate = ((function (x26961_26971){
return (function (next_props__23265__auto__,next_state__23266__auto__){
var this__23264__auto__ = this;
if(((!((this__23264__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__23264__auto__.om$next$Ident$)))?true:false):false)){
var ident__23268__auto___26972 = om.next.ident.call(null,this__23264__auto__,om.next.props.call(null,this__23264__auto__));
var next_ident__23269__auto___26973 = om.next.ident.call(null,this__23264__auto__,om.next._next_props.call(null,next_props__23265__auto__,this__23264__auto__));
if(cljs.core.not_EQ_.call(null,ident__23268__auto___26972,next_ident__23269__auto___26973)){
var idxr__var idxr__23242__auto___100896 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)]if((idxr__2if((idxr__23242__auto___100896 == null)){cljs.core.swcljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23242__auto___100896),((function (idxr__23242__auto___100896,ident__23240__auto___100894,next_ident__23241__auto___100895,this__23236__auto__,x100883_100893){
return (function (indexes_return cljs.core.ureturn cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23243__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23240__auto___100894], null),cljs.core.disj,this__23236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23241__auto___100895], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23236__auto__);
});})(idxr__23242__auto___100896,ident__23240__auto___100894,next_ident__23241__auto___100895,this__23236__auto__,x100883_100893))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23236__auto__);
});})(x100883_100893))
;

x100883_100893.shouldComponentUpdate = ((function (x100883_100893){
return (function (next_props__23237__auto__,next_state__23238__auto__){
var this__23236__auto__ = this;
var next_children__23239__auto__ = next_props__23237__auto__.children;
var next_props__23237__auto____$1 = goog.object.get(next_props__23237__auto__,"omcljs$value");
var next_props__23237__auto____$2 = (function (){var G__100885 = next_props__23237__auto____$1;
if((next_props__23237__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__100885);
} else {
return G__100885;
}
})();
var or__21625__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23236__auto__),next_props__23237__auto____$2);
if(or__21625__auto__){
return or__21625__auto__;
} else {
var or__21625__auto____$1 = (function (){var and__21613__auto__ = this__23236__auto__.state;
if(cljs.core.truth_(and__21613__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23236__auto__.state,"omcljs$state"),goog.object.get(next_state__23238__auto__,"omcljs$state"));
} else {
return and__21613__auto__;
}
})();
if(cljs.core.truth_(or__21625__auto____$1)){
return or__21625__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__23236__auto__.props.children,next_children__23239__auto__);
}
}
});})(x100883_100893))
;

x100883_100893.componentWillUnmount = ((function (x100883_100893){
return (function (){
var this__23236__auto__ = this;
var r__23247__auto__ = om.next.get_reconciler.call(null,this__23236__auto__);
var cfg__23248__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23247__auto__);
var st__23249__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23248__auto__);
var indexer__23246__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23248__auto__);
if(cljs.core.truth_((function (){var and__21613__auto__ = !((st__23249__auto__ == null));
if(and__21613__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__23249__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__23236__auto__], null));
} else {
return and__21613__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__23249__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23236__auto__);
} else {
}

if((indexer__23246__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23246__auto__,this__23236__auto__);
}
});})(x100883_100893))
;

x100883_100893.componentDidUpdate = ((function (x100883_100893){
return (function (prev_props__23244__auto__,prev_state__23245__auto__){
var this__23236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23236__auto__);
});})(x100883_100893))
;

x100883_100893.isMounted = ((function (x100883_100893){
return (function (){
var this__23236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x100883_100893))
;

x100883_100893.componentWillMount = ((function (x100883_100893){
return (function (){
var this__23236__auto__ = this;
var indexer__23246__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23246__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23246__auto__,this__23236__auto__);
}
});})(x100883_100893))
;

x100883_100893.render = ((function (x100883_100893){
return (function (){
var this__23235__auto__ = this;
var this$ = this__23235__auto__;
var _STAR_reconciler_STAR_100886 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_100887 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_100888 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_100889 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_100890 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23235__auto__);

om.next._STAR_parent_STAR_ = this__23235__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var example_focus = new cljs.core.Keyword("example","focus","example/focus",2052454689).cljs$core$IFn$_invoke$arity$1(props);
var link_focus = new cljs.core.Keyword("link","focus","link/focus",222271121).cljs$core$IFn$_invoke$arity$1(props);
return React.DOM.div(({"className": "detail-pane"}),om.util.force_children.call(null,(cljs.core.truth_(example_focus)?snetwork.example_detail.example_detail.call(null,example_focus):(cljs.core.truth_(link_focus)?snetwork.link_detail.link_detail.call(null,link_focus):null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_100890;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_100889;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_100888;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_100887;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_100886;
}});})(x100883_100893))
;


snetwork.detail_pane.DetailPane.prototype.constructor = snetwork.detail_pane.DetailPane;

snetwork.detail_pane.DetailPane.prototype.constructor.displayName = "snetwork.detail-pane/DetailPane";

snetwork.detail_pane.DetailPane.prototype.om$isComponent = true;

var x100891_100897 = snetwork.detail_pane.DetailPane;
x100891_100897.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x100891_100897.om$next$IQueryParams$params$arity$1 = ((function (x100891_100897){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_detail.ExampleDetail),new cljs.core.Keyword(null,"link","link",-1769163468),om.next.get_query.call(null,snetwork.link_detail.LinkDetail)], null);
});})(x100891_100897))
;

x100891_100897.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x100891_100897.om$next$IQuery$query$arity$1 = ((function (x100891_100897){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","focus","example/focus",2052454689),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","focus","link/focus",222271121),new cljs.core.Symbol(null,"?link","?link",-1108278055,null)], null)], null);
});})(x100891_100897))
;


var x100892_100898 = snetwork.detail_pane.DetailPane.prototype;
x100892_100898.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x100892_100898.om$next$IQueryParams$params$arity$1 = ((function (x100892_100898){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_detail.ExampleDetail),new cljs.core.Keyword(null,"link","link",-1769163468),om.next.get_query.call(null,snetwork.link_detail.LinkDetail)], null);
});})(x100892_100898))
;

x100892_100898.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x100892_100898.om$next$IQuery$query$arity$1 = ((function (x100892_100898){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("example","focus","example/focus",2052454689),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","focus","link/focus",222271121),new cljs.core.Symbol(null,"?link","?link",-1108278055,null)], null)], null);
});})(x100892_100898))
;


snetwork.detail_pane.DetailPane.cljs$lang$type = true;

snetwork.detail_pane.DetailPane.cljs$lang$ctorStr = "snetwork.detail-pane/DetailPane";

snetwork.detail_pane.DetailPane.cljs$lang$ctorPrWriter = (function (this__23303__auto__,writer__23304__auto__,opt__23305__auto__){
return cljs.core._write.call(null,writer__23304__auto__,"snetwork.detail-pane/DetailPane");
});
snetwork.detail_pan
//# sourceMappingURL=detail_pane.js.map?rel=1490307544374pane.DetailPane,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=detail_pane.js.map?rel=1490307544378