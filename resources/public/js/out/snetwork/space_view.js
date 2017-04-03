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
 * Put a positive label (1) at the current index and back-fill
 *   negative labels (-1) from the last filled index up to the
 *   current index
 */
snetwork.space_view.backfill = (function snetwork$space_view$backfill(v,index,elem){
var num_to_backfill = ((index + (1)) - cljs.core.count.call(null,v));
var backfill = cljs.core.take.call(null,num_to_backfill,cljs.core.repeat.call(null,elem));
return cljs.core.into.call(null,v,backfill);
});
snetwork.space_view.update_svms = (function snetwork$space_view$update_svms(nodes,ginstance){
console.log("Settled! ",nodes);

var labels = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ct = cljs.core.atom.call(null,(0));
var data = cljs.core.doall.call(null,cljs.core.map.call(null,((function (labels,ct){
return (function (node){
var label = node.group;
var position = node.position;
cljs.core.swap_BANG_.call(null,labels,cljs.core.update,label,((function (label,position,labels,ct){
return (function (ldata){
return cljs.core.conj.call(null,snetwork.space_view.backfill.call(null,(function (){var or__21625__auto__ = ldata;
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(cljs.core.deref.call(null,ct) - (1)),(-1)),(1));
});})(label,position,labels,ct))
);

cljs.core.swap_BANG_.call(null,ct,cljs.core.inc);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [position.x,position.y,position.z], null);
});})(labels,ct))
,nodes));
cljs.core.swap_BANG_.call(null,labels,((function (labels,ct,data){
return (function (old_labels){
return snetwork.util.map_map.call(null,((function (labels,ct,data){
return (function (k,v){
return snetwork.space_view.backfill.call(null,v,(cljs.core.deref.call(null,ct) - (1)),(-1));
});})(labels,ct,data))
,old_labels);
});})(labels,ct,data))
);

if((cljs.core.count.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,labels))) > (1))){
var svms = cljs.core.map.call(null,((function (labels,ct,data){
return (function (p__38089){
var vec__38090 = p__38089;
var l = cljs.core.nth.call(null,vec__38090,(0),null);
var ldata = cljs.core.nth.call(null,vec__38090,(1),null);
var svm = (new svmjs.SVM());
svm.train(cljs.core.clj__GT_js.call(null,data),cljs.core.clj__GT_js.call(null,ldata),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kernel","kernel",-650895913),"linear"], null)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,svm], null);
});})(labels,ct,data))
,cljs.core.deref.call(null,labels));
console.log("Done training SVMs ",cljs.core.clj__GT_js.call(null,svms));

if(cljs.core.truth_(svms)){
ginstance.svms(cljs.core.clj__GT_js.call(null,svms));
} else {
}

return svms;
} else {
return null;
}
});
/**
 * @constructor
 */
snetwork.space_view.SpaceView = (function snetwork$space_view$SpaceView(){
var this__30556__auto__ = this;
React.Component.apply(this__30556__auto__,arguments);

if(!((this__30556__auto__.initLocalState == null))){
this__30556__auto__.state = this__30556__auto__.initLocalState();
} else {
this__30556__auto__.state = {};
}

return this__30556__auto__;
});

snetwork.space_view.SpaceView.prototype = goog.object.clone(React.Component.prototype);

var x38097_38109 = snetwork.space_view.SpaceView.prototype;
x38097_38109.componentWillUpdate = ((function (x38097_38109){
return (function (next_props__30492__auto__,next_state__30493__auto__){
var this__30491__auto__ = this;
if(((!((this__30491__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__30491__auto__.om$next$Ident$)))?true:false):false)){
var ident__30495__auto___38110 = om.next.ident.call(null,this__30491__auto__,om.next.props.call(null,this__30491__auto__));
var next_ident__30496__auto___38111 = om.next.ident.call(null,this__30491__auto__,om.next._next_props.call(null,next_props__30492__auto__,this__30491__auto__));
if(cljs.core.not_EQ_.call(null,ident__30495__auto___38110,next_ident__30496__auto___38111)){
var idxr__30497__auto___38112 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30497__auto___38112 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30497__auto___38112),((function (idxr__30497__auto___38112,ident__30495__auto___38110,next_ident__30496__auto___38111,this__30491__auto__,x38097_38109){
return (function (indexes__30498__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30498__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30495__auto___38110], null),cljs.core.disj,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30496__auto___38111], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30491__auto__);
});})(idxr__30497__auto___38112,ident__30495__auto___38110,next_ident__30496__auto___38111,this__30491__auto__,x38097_38109))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30491__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30491__auto__);
});})(x38097_38109))
;

x38097_38109.shouldComponentUpdate = ((function (x38097_38109){
return (function (next_props__30492__auto__,next_state__30493__auto__){
var this__30491__auto__ = this;
var next_children__30494__auto__ = next_props__30492__auto__.children;
var next_props__30492__auto____$1 = goog.object.get(next_props__30492__auto__,"omcljs$value");
var next_props__30492__auto____$2 = (function (){var G__38099 = next_props__30492__auto____$1;
if((next_props__30492__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__38099);
} else {
return G__38099;
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
});})(x38097_38109))
;

x38097_38109.componentWillUnmount = ((function (x38097_38109){
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
});})(x38097_38109))
;

x38097_38109.componentDidUpdate = ((function (x38097_38109){
return (function (prev_props__30499__auto__,prev_state__30500__auto__){
var this__30491__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30491__auto__);
});})(x38097_38109))
;

x38097_38109.isMounted = ((function (x38097_38109){
return (function (){
var this__30491__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30491__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38097_38109))
;

x38097_38109.componentWillMount = ((function (x38097_38109){
return (function (){
var this__30491__auto__ = this;
var indexer__30501__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30491__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30501__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30501__auto__,this__30491__auto__);
}
});})(x38097_38109))
;

x38097_38109.initLocalState = ((function (x38097_38109){
return (function (){
var this$ = this;
var ret__30469__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gravity-instance","gravity-instance",944436526),null,new cljs.core.Keyword(null,"settled","settled",-548515599),false,new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"worker-path","worker-path",286740168),"js/gravity/gravity-worker.js",new cljs.core.Keyword(null,"field-scale","field-scale",1534875951),(0),new cljs.core.Keyword(null,"webgl","webgl",1974307887),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"background","background",-863952629),true,new cljs.core.Keyword(null,"lights","lights",-451047627),true,new cljs.core.Keyword(null,"shadows","shadows",-1489088471),false], null),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"linkStrength","linkStrength",381000521),(1),new cljs.core.Keyword(null,"friction","friction",-1603603910),0.01,new cljs.core.Keyword(null,"linkDistance","linkDistance",-1662859649),(1),new cljs.core.Keyword(null,"charge","charge",426796560),(-20),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),(0),new cljs.core.Keyword(null,"theta","theta",-427510258),0.8,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),0.01], null)], null)], null);
var obj38101 = {"omcljs$state":ret__30469__auto__};
return obj38101;
});})(x38097_38109))
;

x38097_38109.componentDidMount = ((function (x38097_38109){
return (function (){
var this$ = this;
var canvas = document.getElementById("space-canvas");
canvas.width = (600);

canvas.height = (600);

om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772),new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null),canvas);

var gravity_instance = gravity.graph.create(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))));
gravity_instance.on("ready",((function (gravity_instance,canvas,this$,x38097_38109){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"gravity-instance","gravity-instance",944436526),gravity_instance);
});})(gravity_instance,canvas,this$,x38097_38109))
);

return gravity_instance.on("stable",((function (gravity_instance,canvas,this$,x38097_38109){
return (function (nodes){
if(cljs.core.truth_(new cljs.core.Keyword(null,"settled","settled",-548515599).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
return null;
} else {
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"settled","settled",-548515599),true);

return snetwork.space_view.update_svms.call(null,nodes,gravity_instance);
}
});})(gravity_instance,canvas,this$,x38097_38109))
);
});})(x38097_38109))
;

x38097_38109.render = ((function (x38097_38109){
return (function (){
var this__30490__auto__ = this;
var this$ = this__30490__auto__;
var _STAR_reconciler_STAR_38102 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38103 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38104 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38105 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38106 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30490__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30490__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30490__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30490__auto__);

om.next._STAR_parent_STAR_ = this__30490__auto__;

try{var props = om.next.props.call(null,this$);
var state = om.next.get_state.call(null,this$);
var space_examples = new cljs.core.Keyword("space","examples","space/examples",-398686406).cljs$core$IFn$_invoke$arity$1(props);
var space_links = new cljs.core.Keyword("space","links","space/links",-629787720).cljs$core$IFn$_invoke$arity$1(props);
var gravity_instance = new cljs.core.Keyword(null,"gravity-instance","gravity-instance",944436526).cljs$core$IFn$_invoke$arity$1(state);
var field_scale = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772),new cljs.core.Keyword(null,"field-scale","field-scale",1534875951)], null));
if(cljs.core.truth_(gravity_instance)){
var new_nodes_38113 = gravity_instance.nodes(cljs.core.clj__GT_js.call(null,space_examples));
var new_links_38114 = gravity_instance.links(cljs.core.clj__GT_js.call(null,space_links));
if(!(cljs.core.empty_QMARK_.call(null,new_nodes_38113))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"settled","settled",-548515599),false);
} else {
}

gravity_instance.force.linkDistance(((function (new_nodes_38113,new_links_38114,props,state,space_examples,space_links,gravity_instance,field_scale,_STAR_reconciler_STAR_38102,_STAR_depth_STAR_38103,_STAR_shared_STAR_38104,_STAR_instrument_STAR_38105,_STAR_parent_STAR_38106,this$,this__30490__auto__,x38097_38109){
return (function (link){
var sim = (link["similarity"]);
return ((10) * (1.0 - sim));
});})(new_nodes_38113,new_links_38114,props,state,space_examples,space_links,gravity_instance,field_scale,_STAR_reconciler_STAR_38102,_STAR_depth_STAR_38103,_STAR_shared_STAR_38104,_STAR_instrument_STAR_38105,_STAR_parent_STAR_38106,this$,this__30490__auto__,x38097_38109))
);

gravity_instance.updateForce();

if(typeof field_scale === 'number'){
gravity_instance.fieldScale(field_scale);
} else {
}
} else {
}

return React.DOM.div(({"className": "space-pane"}),om.util.force_children.call(null,React.DOM.div(({"className": "table-container"}),om.util.force_children.call(null,React.DOM.div(({"className": "row-container"}),om.util.force_children.call(null,cljs_react_material_ui.core.slider.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"default-value","default-value",232220170),(0),new cljs.core.Keyword(null,"value","value",305978217),field_scale,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),2.0,new cljs.core.Keyword(null,"axis","axis",-1215390822),"y",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"height","height",1025178622),(550)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (props,state,space_examples,space_links,gravity_instance,field_scale,_STAR_reconciler_STAR_38102,_STAR_depth_STAR_38103,_STAR_shared_STAR_38104,_STAR_instrument_STAR_38105,_STAR_parent_STAR_38106,this$,this__30490__auto__,x38097_38109){
return (function (e,v){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity-parameters","gravity-parameters",-1428615772),new cljs.core.Keyword(null,"field-scale","field-scale",1534875951)], null),v);
});})(props,state,space_examples,space_links,gravity_instance,field_scale,_STAR_reconciler_STAR_38102,_STAR_depth_STAR_38103,_STAR_shared_STAR_38104,_STAR_instrument_STAR_38105,_STAR_parent_STAR_38106,this$,this__30490__auto__,x38097_38109))
], null))),om.util.force_children.call(null,React.DOM.canvas(({"id": "space-canvas"}))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38106;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38105;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38104;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38103;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38102;
}});})(x38097_38109))
;


snetwork.space_view.SpaceView.prototype.constructor = snetwork.space_view.SpaceView;

snetwork.space_view.SpaceView.prototype.constructor.displayName = "snetwork.space-view/SpaceView";

snetwork.space_view.SpaceView.prototype.om$isComponent = true;

var x38107_38115 = snetwork.space_view.SpaceView;
x38107_38115.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x38107_38115.om$next$IQuery$query$arity$1 = ((function (x38107_38115){
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
});})(x38107_38115))
;


var x38108_38116 = snetwork.space_view.SpaceView.prototype;
x38108_38116.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x38108_38116.om$next$IQuery$query$arity$1 = ((function (x38108_38116){
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
});})(x38108_38116))
;


snetwork.space_view.SpaceView.cljs$lang$type = true;

snetwork.space_view.SpaceView.cljs$lang$ctorStr = "snetwork.space-view/SpaceView";

snetwork.space_view.SpaceView.cljs$lang$ctorPrWriter = (function (this__30558__auto__,writer__30559__auto__,opt__30560__auto__){
return cljs.core._write.call(null,writer__30559__auto__,"snetwork.space-view/SpaceView");
});
snetwork.space_view.space_view = om.next.factory.call(null,snetwork.space_view.SpaceView,cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=space_view.js.map?rel=1491248884198