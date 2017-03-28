// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.link_detail');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
snetwork.link_detail.LinkDetail = (function snetwork$link_detail$LinkDetail(){
var this__23301__auto__ = this;
React.Component.apply(this__23301__auto__,arguments);

if(!((this__23301__auto__.initLocalState == null))){
this__23301__auto__.state = this__23301__auto__.initLocalState();
} else {
this__23301__auto__.state = {};
}

return this__23301__auto__;
});

snetwork.link_detail.LinkDetail.prototype = goog.object.clone(React.Component.prototype);

var x100905_100923 = snetwork.link_detail.LinkDetail.prototype;
x100905_100923.componentWillUpdate = ((function (x100905_100923){
return (function (next_props__23237__auto__,next_state__23238__auto__){
var this__23236__auto__ = this;
if(((!((this__23236__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__23236__auto__.om$next$Ident$)))?true:false):false)){
var ident__23240__auto___100924 = om.next.ident.call(null,this__23236__auto__,om.next.props.call(null,this__23236__auto__));
var next_ident__23241__auto___100925 = om.next.ident.call(null,this__23236__auto__,om.next._next_props.call(null,next_props__23237__auto__,this__23236__auto__));
if(cljs.core.not_EQ_.call(null,ident__23240__auto___100924,next_ident__23241__auto___100925)){
var idxr__23242__auto___100926 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23242__auto___100926 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23242__auto___100926),((function (idxr__23242__auto___100926,ident__23240__auto___100924,next_ident__23241__auto___100925,this__23236__auto__,x100905_100923){
return (function (indexes__23243__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23243__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23240__auto___100924], null),cljs.core.disj,this__23236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23241__auto___100925], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23236__auto__);
});})(idxr__23242__auto___100926,ident__23240__auto___100924,next_ident__23241__auto___100925,this__23236__auto__,x100905_100923))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23236__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23236__auto__);
});})(x100905_100923))
;

x100905_100923.shouldComponentUpdate = ((function (x100905_100923){
return (function (next_props__23237__auto__,next_state__23238__auto__){
var this__23236__auto__ = this;
var next_children__23239__auto__ = next_props__23237__auto__.children;
var next_props__23237__auto____$1 = goog.object.get(next_props__23237__auto__,"omcljs$value");
var next_props__23237__auto____$2 = (function (){var G__100907 = next_props__23237__auto____$1;
if((next_props__23237__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__100907);
} else {
return G__100907;
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
});})(x100905_100923))
;

x100905_100923.componentWillUnmount = ((function (x100905_100923){
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
});})(x100905_100923))
;

x100905_100923.componentDidUpdate = ((function (x100905_100923){
return (function (prev_props__23244__auto__,prev_state__23245__auto__){
var this__23236__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23236__auto__);
});})(x100905_100923))
;

x100905_100923.isMounted = ((function (x100905_100923){
return (function (){
var this__23236__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23236__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x100905_100923))
;

x100905_100923.componentWillMount = ((function (x100905_100923){
return (function (){
var this__23236__auto__ = this;
var indexer__23246__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23236__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23246__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23246__auto__,this__23236__auto__);
}
});})(x100905_100923))
;

x100905_100923.render = ((function (x100905_100923){
return (function (){
var this__23235__auto__ = this;
var this$ = this__23235__auto__;
var _STAR_reconciler_STAR_100908 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_100909 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_100910 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_100911 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_100912 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23235__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23235__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23235__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23235__auto__);

om.next._STAR_parent_STAR_ = this__23235__auto__;

try{var map__100913 = om.next.props.call(null,this$);
var map__100913__$1 = ((((!((map__100913 == null)))?((((map__100913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100913):map__100913);
var id = cljs.core.get.call(null,map__100913__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var similarity = cljs.core.get.call(null,map__100913__$1,new cljs.core.Keyword("link","similarity","link/similarity",1873109477));
var source = cljs.core.get.call(null,map__100913__$1,new cljs.core.Keyword("link","source","link/source",-437163273));
var target = cljs.core.get.call(null,map__100913__$1,new cljs.core.Keyword("link","target","link/target",254144519));
return React.DOM.p([cljs.core.str("source "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(source)),cljs.core.str("target "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target)),cljs.core.str("similarity "),cljs.core.str(similarity)].join(''));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_100912;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_100911;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_100910;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_100909;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_100908;
}});})(x100905_100923))
;


snetwork.link_detail.LinkDetail.prototype.constructor = snetwork.link_detail.LinkDetail;

snetwork.link_detail.LinkDetail.prototype.constructor.displayName = "snetwork.link-detail/LinkDetail";

snetwork.link_detail.LinkDetail.prototype.om$isComponent = true;

var x100915_100929 = snetwork.link_detail.LinkDetail;
x100915_100929.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x100915_100929.om$next$Ident$ident$arity$2 = ((function (x100915_100929){
return (function (this$,p__100916){
var map__100917 = p__100916;
var map__100917__$1 = ((((!((map__100917 == null)))?((((map__100917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100917):map__100917);
var id = cljs.core.get.call(null,map__100917__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("link","by-id","link/by-id",-2140791191),id], null);
});})(x100915_100929))
;

x100915_100929.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x100915_100929.om$next$IQuery$query$arity$1 = ((function (x100915_100929){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","similarity","link/similarity",1873109477)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","source","link/source",-437163273)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","target","link/target",254144519))))));
});})(x100915_100929))
;


var x100919_100937 = snetwork.link_detail.LinkDetail.prototype;
x100919_100937.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x100919_100937.om$next$Ident$ident$arity$2 = ((function (x100919_100937){
return (function (this$,p__100920){
var map__100921 = p__100920;
var map__100921__$1 = ((((!((map__100921 == null)))?((((map__100921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100921):map__100921);
var id = cljs.core.get.call(null,map__100921__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("link","by-id","link/by-id",-2140791191),id], null);
});})(x100919_100937))
;

x100919_100937.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x100919_100937.om$next$IQuery$query$arity$1 = ((function (x100919_100937){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db","id","db/id",-1388397098)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","similarity","link/similarity",1873109477)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","source","link/source",-437163273)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("link","target","link/target",254144519))))));
});})(x100919_100937))
;


snetwork.link_detail.LinkDetail.cljs$lang$type = true;

snetwork.link_detail.LinkDetail.cljs$lang$ctorStr = "snetwork.link-detail/LinkDetail";

snetwork.link_detail.LinkDetail.cljs$lang$ctorPrWriter = (function (this__23303__auto__,writer__23304__auto__,opt__23305__auto__){
return cljs.core._write.call(null,writer__23304__auto__,"snetwork.link-detail/LinkDetail");
});
snetwork.link_detail.link_detail = om.next.factory.call(null,snetwork.link_detail.LinkDetail,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=link_detail.js.map?rel=1490307544457