// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.space_view');
goog.require('cljs.core');
goog.require('snetwork.link_detail');
goog.require('om.dom');
goog.require('cljsjs.material_ui');
goog.require('snetwork.util');
goog.require('snetwork.example_tile');
goog.require('clairvoyant.core');
goog.require('om.next');
goog.require('cljs_react_material_ui.core');
/**
 * @constructor
 */
snetwork.space_view.SpaceView = (function snetwork$space_view$SpaceView(){
var this__24455__auto__ = this;
React.Component.apply(this__24455__auto__,arguments);

if(!((this__24455__auto__.initLocalState == null))){
this__24455__auto__.state = this__24455__auto__.initLocalState();
} else {
this__24455__auto__.state = {};
}

return this__24455__auto__;
});

snetwork.space_view.SpaceView.prototype = goog.object.clone(React.Component.prototype);

var x36412_36424 = snetwork.space_view.SpaceView.prototype;
x36412_36424.componentWillUpdate = ((function (x36412_36424){
return (function (next_props__24391__auto__,next_state__24392__auto__){
var this__24390__auto__ = this;
if(((!((this__24390__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__24390__auto__.om$next$Ident$)))?true:false):false)){
var ident__24394__auto___36425 = om.next.ident.call(null,this__24390__auto__,om.next.props.call(null,this__24390__auto__));
var next_ident__24395__auto___36426 = om.next.ident.call(null,this__24390__auto__,om.next._next_props.call(null,next_props__24391__auto__,this__24390__auto__));
if(cljs.core.not_EQ_.call(null,ident__24394__auto___36425,next_ident__24395__auto___36426)){
var idxr__24396__auto___36427 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24390__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__24396__auto___36427 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__24396__auto___36427),((function (idxr__24396__auto___36427,ident__24394__auto___36425,next_ident__24395__auto___36426,this__24390__auto__,x36412_36424){
return (function (indexes__24397__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__24397__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__24394__auto___36425], null),cljs.core.disj,this__24390__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__24395__auto___36426], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24390__auto__);
});})(idxr__24396__auto___36427,ident__24394__auto___36425,next_ident__24395__auto___36426,this__24390__auto__,x36412_36424))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__24390__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24390__auto__);
});})(x36412_36424))
;

x36412_36424.shouldComponentUpdate = ((function (x36412_36424){
return (function (next_props__24391__auto__,next_state__24392__auto__){
var this__24390__auto__ = this;
var next_children__24393__auto__ = next_props__24391__auto__.children;
var next_props__24391__auto____$1 = goog.object.get(next_props__24391__auto__,"omcljs$value");
var next_props__24391__auto____$2 = (function (){var G__36414 = next_props__24391__auto____$1;
if((next_props__24391__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36414);
} else {
return G__36414;
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
});})(x36412_36424))
;

x36412_36424.componentWillUnmount = ((function (x36412_36424){
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
});})(x36412_36424))
;

x36412_36424.componentDidUpdate = ((function (x36412_36424){
return (function (prev_props__24398__auto__,prev_state__24399__auto__){
var this__24390__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24390__auto__);
});})(x36412_36424))
;

x36412_36424.isMounted = ((function (x36412_36424){
return (function (){
var this__24390__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24390__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36412_36424))
;

x36412_36424.componentWillMount = ((function (x36412_36424){
return (function (){
var this__24390__auto__ = this;
var indexer__24400__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24390__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24400__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24400__auto__,this__24390__auto__);
}
});})(x36412_36424))
;

x36412_36424.initLocalState = ((function (x36412_36424){
return (function (){
var this$ = this;
var ret__24368__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gravity-instance","gravity-instance",944436526),null,new cljs.core.Keyword(null,"settled","settled",-548515599),false,new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"force-worker-path","force-worker-path",-1310718500),"js/gravity/force-worker.js",new cljs.core.Keyword(null,"field-worker-path","field-worker-path",1623963983),"js/gravity/field-worker.js",new cljs.core.Keyword(null,"webgl","webgl",1974307887),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"background","background",-863952629),true,new cljs.core.Keyword(null,"lights","lights",-451047627),true,new cljs.core.Keyword(null,"shadows","shadows",-1489088471),false], null),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"linkStrength","linkStrength",381000521),(1),new cljs.core.Keyword(null,"friction","friction",-1603603910),0.001,new cljs.core.Keyword(null,"linkDistance","linkDistance",-1662859649),(1),new cljs.core.Keyword(null,"charge","charge",426796560),(-1),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),(0),new cljs.core.Keyword(null,"theta","theta",-427510258),0.8,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),0.01], null),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scale","scale",-230427353),(0),new cljs.core.Keyword(null,"base-density","base-density",1547833480),(5),new cljs.core.Keyword(null,"radius-ratio","radius-ratio",-1857705241),(2),new cljs.core.Keyword(null,"kernel","kernel",-650895913),"linear"], null)], null)], null);
var obj36416 = {"omcljs$state":ret__24368__auto__};
return obj36416;
});})(x36412_36424))
;

x36412_36424.componentDidMount = ((function (x36412_36424){
return (function (){
var this$ = this;
var canvas = document.getElementById("space-canvas");
canvas.width = (600);

canvas.height = (600);

om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),canvas);

var gravity_instance = gravity.graph.create(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))));
gravity_instance.on("ready",((function (gravity_instance,canvas,this$,x36412_36424){
return (function (){
console.log("READY");

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"gravity-instance","gravity-instance",944436526),gravity_instance);
});})(gravity_instance,canvas,this$,x36412_36424))
);

return gravity_instance.on("stable",((function (gravity_instance,canvas,this$,x36412_36424){
return (function (nodes){
return console.log("STABLE");
});})(gravity_instance,canvas,this$,x36412_36424))
);
});})(x36412_36424))
;

x36412_36424.render = ((function (x36412_36424){
return (function (){
var this__24389__auto__ = this;
var this$ = this__24389__auto__;
var _STAR_reconciler_STAR_36417 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36418 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36419 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36420 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36421 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__24389__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__24389__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__24389__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__24389__auto__);

om.next._STAR_parent_STAR_ = this__24389__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var space_examples = new cljs.core.Keyword("space","examples","space/examples",-398686406).cljs$core$IFn$_invoke$arity$1(props);
var space_links = new cljs.core.Keyword("space","links","space/links",-629787720).cljs$core$IFn$_invoke$arity$1(props);
var gravity_instance = new cljs.core.Keyword(null,"gravity-instance","gravity-instance",944436526).cljs$core$IFn$_invoke$arity$1(state);
var field_scale = (cljs.core.truth_(gravity_instance)?gravity_instance.field.scale():cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"scale","scale",-230427353)], null)));
if(cljs.core.truth_(gravity_instance)){
console.log("Render");

var new_nodes_36428 = gravity_instance.nodes(cljs.core.clj__GT_js.call(null,space_examples));
var new_links_36429 = gravity_instance.links(cljs.core.clj__GT_js.call(null,space_links));
gravity_instance.force.linkDistance(((function (new_nodes_36428,new_links_36429,props,state,space_examples,space_links,gravity_instance,field_scale,_STAR_reconciler_STAR_36417,_STAR_depth_STAR_36418,_STAR_shared_STAR_36419,_STAR_instrument_STAR_36420,_STAR_parent_STAR_36421,this$,this__24389__auto__,x36412_36424){
return (function (link){
var sim = (link["similarity"]);
return ((10) * (1.0 - sim));
});})(new_nodes_36428,new_links_36429,props,state,space_examples,space_links,gravity_instance,field_scale,_STAR_reconciler_STAR_36417,_STAR_depth_STAR_36418,_STAR_shared_STAR_36419,_STAR_instrument_STAR_36420,_STAR_parent_STAR_36421,this$,this__24389__auto__,x36412_36424))
);

gravity_instance.updateForce();
} else {
}

return React.DOM.div(({"className": "space-pane"}),om.util.force_children.call(null,React.DOM.div(({"className": "table-container"}),om.util.force_children.call(null,React.DOM.div(({"className": "row-container"}),om.util.force_children.call(null,cljs_react_material_ui.core.slider.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"default-value","default-value",232220170),(0),new cljs.core.Keyword(null,"value","value",305978217),field_scale,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),1.0,new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"height","height",1025178622),(550)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (props,state,space_examples,space_links,gravity_instance,field_scale,_STAR_reconciler_STAR_36417,_STAR_depth_STAR_36418,_STAR_shared_STAR_36419,_STAR_instrument_STAR_36420,_STAR_parent_STAR_36421,this$,this__24389__auto__,x36412_36424){
return (function (e,v){
return gravity_instance.field.scale(v);
});})(props,state,space_examples,space_links,gravity_instance,field_scale,_STAR_reconciler_STAR_36417,_STAR_depth_STAR_36418,_STAR_shared_STAR_36419,_STAR_instrument_STAR_36420,_STAR_parent_STAR_36421,this$,this__24389__auto__,x36412_36424))
], null))),om.util.force_children.call(null,React.DOM.canvas(({"id": "space-canvas"}))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36421;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36420;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36419;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36418;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36417;
}});})(x36412_36424))
;


snetwork.space_view.SpaceView.prototype.constructor = snetwork.space_view.SpaceView;

snetwork.space_view.SpaceView.prototype.constructor.displayName = "snetwork.space-view/SpaceView";

snetwork.space_view.SpaceView.prototype.om$isComponent = true;

var x36422_36430 = snetwork.space_view.SpaceView;
x36422_36430.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x36422_36430.om$next$IQuery$query$arity$1 = ((function (x36422_36430){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("space","examples","space/examples",-398686406)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.example_tile.ExampleTile);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})(),(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("space","links","space/links",-629787720)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.link_detail.LinkDetail);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
});})(x36422_36430))
;


var x36423_36431 = snetwork.space_view.SpaceView.prototype;
x36423_36431.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x36423_36431.om$next$IQuery$query$arity$1 = ((function (x36423_36431){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("space","examples","space/examples",-398686406)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.example_tile.ExampleTile);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})(),(function (){var x__22462__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("space","links","space/links",-629787720)),(function (){var x__22462__auto__ = om.next.get_query.call(null,snetwork.link_detail.LinkDetail);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})()))));
});})(x36423_36431))
;


snetwork.space_view.SpaceView.cljs$lang$type = true;

snetwork.space_view.SpaceView.cljs$lang$ctorStr = "snetwork.space-view/SpaceView";

snetwork.space_view.SpaceView.cljs$lang$ctorPrWriter = (function (this__24457__auto__,writer__24458__auto__,opt__24459__auto__){
return cljs.core._write.call(null,writer__24458__auto__,"snetwork.space-view/SpaceView");
});
snetwork.space_view.space_view = om.next.factory.call(null,snetwork.space_view.SpaceView,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=space_view.js.map?rel=1493146376225