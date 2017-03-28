// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.link_detail');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('snetwork.example_detail');
/**
 * @constructor
 */
snetwork.link_detail.LinkDetail = (function snetwork$link_detail$LinkDetail(){
var this__22464__auto__ = this;
React.Component.apply(this__22464__auto__,arguments);

if(!((this__22464__auto__.initLocalState == null))){
this__22464__auto__.state = this__22464__auto__.initLocalState();
} else {
this__22464__auto__.state = {};
}

return this__22464__auto__;
});

snetwork.link_detail.LinkDetail.prototype = goog.object.clone(React.Component.prototype);

var x32999_33017 = snetwork.link_detail.LinkDetail.prototype;
x32999_33017.componentWillUpdate = ((function (x32999_33017){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
if(((!((this__22399__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__22399__auto__.om$next$Ident$)))?true:false):false)){
var ident__22403__auto___33018 = om.next.ident.call(null,this__22399__auto__,om.next.props.call(null,this__22399__auto__));
var next_ident__22404__auto___33019 = om.next.ident.call(null,this__22399__auto__,om.next._next_props.call(null,next_props__22400__auto__,this__22399__auto__));
if(cljs.core.not_EQ_.call(null,ident__22403__auto___33018,next_ident__22404__auto___33019)){
var idxr__22405__auto___33020 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__22405__auto___33020 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__22405__auto___33020),((function (idxr__22405__auto___33020,ident__22403__auto___33018,next_ident__22404__auto___33019,this__22399__auto__,x32999_33017){
return (function (indexes__22406__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__22406__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__22403__auto___33018], null),cljs.core.disj,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__22404__auto___33019], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__22399__auto__);
});})(idxr__22405__auto___33020,ident__22403__auto___33018,next_ident__22404__auto___33019,this__22399__auto__,x32999_33017))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__22399__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22399__auto__);
});})(x32999_33017))
;

x32999_33017.shouldComponentUpdate = ((function (x32999_33017){
return (function (next_props__22400__auto__,next_state__22401__auto__){
var this__22399__auto__ = this;
var next_children__22402__auto__ = next_props__22400__auto__.children;
var next_props__22400__auto____$1 = goog.object.get(next_props__22400__auto__,"omcljs$value");
var next_props__22400__auto____$2 = (function (){var G__33001 = next_props__22400__auto____$1;
if((next_props__22400__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__33001);
} else {
return G__33001;
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
});})(x32999_33017))
;

x32999_33017.componentWillUnmount = ((function (x32999_33017){
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
});})(x32999_33017))
;

x32999_33017.componentDidUpdate = ((function (x32999_33017){
return (function (prev_props__22407__auto__,prev_state__22408__auto__){
var this__22399__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22399__auto__);
});})(x32999_33017))
;

x32999_33017.isMounted = ((function (x32999_33017){
return (function (){
var this__22399__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22399__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32999_33017))
;

x32999_33017.componentWillMount = ((function (x32999_33017){
return (function (){
var this__22399__auto__ = this;
var indexer__22409__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22399__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22409__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22409__auto__,this__22399__auto__);
}
});})(x32999_33017))
;

x32999_33017.render = ((function (x32999_33017){
return (function (){
var this__22398__auto__ = this;
var this$ = this__22398__auto__;
var _STAR_reconciler_STAR_33002 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33003 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33004 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33005 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33006 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22398__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22398__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22398__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22398__auto__);

om.next._STAR_parent_STAR_ = this__22398__auto__;

try{var map__33007 = om.next.props.call(null,this$);
var map__33007__$1 = ((((!((map__33007 == null)))?((((map__33007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);
var id = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var similarity = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword("link","similarity","link/similarity",1873109477));
var source = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword("link","source","link/source",-437163273));
return React.DOM.p([cljs.core.str("source "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(source)),cljs.core.str("target "),cljs.core.str("similarity"),cljs.core.str(similarity)].join(''));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33006;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33005;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33004;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33003;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33002;
}});})(x32999_33017))
;


snetwork.link_detail.LinkDetail.prototype.constructor = snetwork.link_detail.LinkDetail;

snetwork.link_detail.LinkDetail.prototype.constructor.displayName = "snetwork.link-detail/LinkDetail";

snetwork.link_detail.LinkDetail.prototype.om$isComponent = true;

var x33009_33021 = snetwork.link_detail.LinkDetail;
x33009_33021.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x33009_33021.om$next$Ident$ident$arity$2 = ((function (x33009_33021){
return (function (this$,p__33010){
var map__33011 = p__33010;
var map__33011__$1 = ((((!((map__33011 == null)))?((((map__33011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33011):map__33011);
var id = cljs.core.get.call(null,map__33011__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("link","by-id","link/by-id",-2140791191),id], null);
});})(x33009_33021))
;

x33009_33021.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x33009_33021.om$next$IQueryParams$params$arity$1 = ((function (x33009_33021){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_detail.ExampleDetail)], null);
});})(x33009_33021))
;

x33009_33021.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x33009_33021.om$next$IQuery$query$arity$1 = ((function (x33009_33021){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("link","similarity","link/similarity",1873109477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","source","link/source",-437163273),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null)], null);
});})(x33009_33021))
;


var x33013_33022 = snetwork.link_detail.LinkDetail.prototype;
x33013_33022.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x33013_33022.om$next$Ident$ident$arity$2 = ((function (x33013_33022){
return (function (this$,p__33014){
var map__33015 = p__33014;
var map__33015__$1 = ((((!((map__33015 == null)))?((((map__33015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33015):map__33015);
var id = cljs.core.get.call(null,map__33015__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("link","by-id","link/by-id",-2140791191),id], null);
});})(x33013_33022))
;

x33013_33022.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

x33013_33022.om$next$IQueryParams$params$arity$1 = ((function (x33013_33022){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example","example",-1755779144),om.next.get_query.call(null,snetwork.example_detail.ExampleDetail)], null);
});})(x33013_33022))
;

x33013_33022.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x33013_33022.om$next$IQuery$query$arity$1 = ((function (x33013_33022){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("link","similarity","link/similarity",1873109477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("link","source","link/source",-437163273),new cljs.core.Symbol(null,"?example","?example",1836576225,null)], null)], null);
});})(x33013_33022))
;


snetwork.link_detail.LinkDetail.cljs$lang$type = true;

snetwork.link_detail.LinkDetail.cljs$lang$ctorStr = "snetwork.link-detail/LinkDetail";

snetwork.link_detail.LinkDetail.cljs$lang$ctorPrWriter = (function (this__22466__auto__,writer__22467__auto__,opt__22468__auto__){
return cljs.core._write.call(null,writer__22467__auto__,"snetwork.link-detail/LinkDetail");
});
snetwork.link_detail.link_detail = om.next.factory.call(null,snetwork.link_detail.LinkDetail,cljs.core.PersistentArrayMap.EMPTY);
goog.exportSymbol('snetwork.link_detail.link_detail', snetwork.link_detail.link_detail);

//# sourceMappingURL=link_detail.js.map