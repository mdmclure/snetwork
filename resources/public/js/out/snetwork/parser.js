// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('clairvoyant.core');
snetwork.parser.not_nil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
snetwork.parser.trace_var = (function snetwork$parser$trace_var(a_36040){
var trace_data__31376__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"snetwork.parser","snetwork.parser",1661705359,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"trace-var","trace-var",246788870,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"trace-var","trace-var",246788870,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.Symbol(null,"v","v",1661996586,null))], null);
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceEnter$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,clairvoyant.core.default_tracer))){
clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__31376__auto__);
} else {
}

var f__31377__auto__ = ((function (trace_data__31376__auto__){
return (function (){
var return__31378__auto__ = ((function (trace_data__31376__auto__){
return (function (a_36040__$1){
var v = (function (){var trace_data__31376__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_36040__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceEnter$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,clairvoyant.core.default_tracer))){
clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__31376__auto____$1);
} else {
}

var f__31377__auto__ = ((function (trace_data__31376__auto____$1,trace_data__31376__auto__){
return (function (){
var return__31378__auto__ = a_36040__$1;
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceExit$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,clairvoyant.core.default_tracer))){
clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__31376__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__31378__auto__));
} else {
}

return return__31378__auto__;
});})(trace_data__31376__auto____$1,trace_data__31376__auto__))
;
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceError$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,clairvoyant.core.default_tracer))){
try{return f__31377__auto__.call(null);
}catch (e36053){if((e36053 instanceof Object)){
var e__31379__auto__ = e36053;
clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__31376__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__31379__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__31379__auto__)));

throw e__31379__auto__;
} else {
throw e36053;

}
}} else {
return f__31377__auto__.call(null);
}
})();
return ((function (v,trace_data__31376__auto__){
return (function (){

return v;
});})(v,trace_data__31376__auto__))
.call(null);
});})(trace_data__31376__auto__))
.call(null,a_36040);
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceExit$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,clairvoyant.core.default_tracer))){
clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__31376__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__31378__auto__));
} else {
}

return return__31378__auto__;
});})(trace_data__31376__auto__))
;
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceError$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,clairvoyant.core.default_tracer))){
try{return f__31377__auto__.call(null);
}catch (e36056){if((e36056 instanceof Object)){
var e__31379__auto__ = e36056;
clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__31376__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__31379__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__31379__auto__)));

throw e__31379__auto__;
} else {
throw e36056;

}
}} else {
return f__31377__auto__.call(null);
}
});
snetwork.parser.example_id__GT_example = (function snetwork$parser$example_id__GT_example(ex_id,state){
return cljs.core.get.call(null,new cljs.core.Keyword("example","by-id","example/by-id",1332198617).cljs$core$IFn$_invoke$arity$1(state),ex_id);
});
snetwork.parser.link_id__GT_link = (function snetwork$parser$link_id__GT_link(link_id,state){
return cljs.core.get.call(null,new cljs.core.Keyword("link","by-id","link/by-id",-2140791191).cljs$core$IFn$_invoke$arity$1(state),link_id);
});
snetwork.parser.example_ptr__GT_example = (function snetwork$parser$example_ptr__GT_example(ex_ptr,state){
var vec__36067 = ex_ptr;
var ident = cljs.core.nth.call(null,vec__36067,(0),null);
var ex_id = cljs.core.nth.call(null,vec__36067,(1),null);
return snetwork.parser.example_id__GT_example.call(null,ex_id,state);
});
snetwork.parser.link_ptr__GT_link = (function snetwork$parser$link_ptr__GT_link(link_ptr,state){
var vec__36074 = link_ptr;
var ident = cljs.core.nth.call(null,vec__36074,(0),null);
var link_id = cljs.core.nth.call(null,vec__36074,(1),null);
return snetwork.parser.link_id__GT_link.call(null,link_id,state);
});
snetwork.parser.link__GT_id = (function snetwork$parser$link__GT_id(link){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(link);
});
snetwork.parser.example__GT_id = (function snetwork$parser$example__GT_id(example){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(example);
});
snetwork.parser.link__GT_ptr = (function snetwork$parser$link__GT_ptr(link){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("link","by-id","link/by-id",-2140791191),snetwork.parser.link__GT_id.call(null,link)], null);
});
snetwork.parser.example__GT_ptr = (function snetwork$parser$example__GT_ptr(example){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),snetwork.parser.example__GT_id.call(null,example)], null);
});
snetwork.parser.example__GT_in_space_QMARK_ = (function snetwork$parser$example__GT_in_space_QMARK_(example){
return new cljs.core.Keyword("example","in-space","example/in-space",716984420).cljs$core$IFn$_invoke$arity$1(example);
});
snetwork.parser.find_link_ptrs_for_example_id = (function snetwork$parser$find_link_ptrs_for_example_id(ex_id,state){
return cljs.core.filterv.call(null,snetwork.parser.not_nil_QMARK_,cljs.core.map.call(null,(function (entry){
var vec__36087 = entry;
var id = cljs.core.nth.call(null,vec__36087,(0),null);
var link = cljs.core.nth.call(null,vec__36087,(1),null);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword("link","source","link/source",-437163273).cljs$core$IFn$_invoke$arity$1(link),ex_id)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword("link","target","link/target",254144519).cljs$core$IFn$_invoke$arity$1(link),ex_id))){
return snetwork.parser.link__GT_ptr.call(null,link);
} else {
return null;
}
}),new cljs.core.Keyword("link","by-id","link/by-id",-2140791191).cljs$core$IFn$_invoke$arity$1(state)));
});
snetwork.parser.find_link_ptrs_for_example = (function snetwork$parser$find_link_ptrs_for_example(example,state){
return snetwork.parser.find_link_ptrs_for_example_id.call(null,snetwork.parser.example__GT_id.call(null,example),state);
});
snetwork.parser.example__GT_link_ptrs = (function snetwork$parser$example__GT_link_ptrs(example,state){
return new cljs.core.Keyword("example","links","example/links",668078860).cljs$core$IFn$_invoke$arity$1(example);
});
snetwork.parser.example_id__GT_link_ptrs = (function snetwork$parser$example_id__GT_link_ptrs(ex_id,state){
return snetwork.parser.example__GT_link_ptrs.call(null,snetwork.parser.example_id__GT_example.call(null,ex_id,state),state);
});
snetwork.parser.example_id__GT_links = (function snetwork$parser$example_id__GT_links(ex_id,state){
return cljs.core.map.call(null,(function (p1__36091_SHARP_){
return snetwork.parser.link_ptr__GT_link.call(null,p1__36091_SHARP_,state);
}),snetwork.parser.example_id__GT_link_ptrs.call(null,ex_id,state));
});
snetwork.parser.example_id__GT_in_space_QMARK_ = (function snetwork$parser$example_id__GT_in_space_QMARK_(ex_id,state){
return snetwork.parser.example__GT_in_space_QMARK_.call(null,snetwork.parser.example_id__GT_example.call(null,ex_id,state));
});
/**
 * Returns links that link to examples in space, but
 *   not necessarily links that are, themselves, in space.
 */
snetwork.parser.example_id__GT_link_ptrs_to_space = (function snetwork$parser$example_id__GT_link_ptrs_to_space(ex_id,state){
return cljs.core.filterv.call(null,(function (link_ptr){
var link = snetwork.parser.link_ptr__GT_link.call(null,link_ptr,state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("link","source","link/source",-437163273).cljs$core$IFn$_invoke$arity$1(link),ex_id)){
return snetwork.parser.example_id__GT_in_space_QMARK_.call(null,new cljs.core.Keyword("link","target","link/target",254144519).cljs$core$IFn$_invoke$arity$1(link),state);
} else {
return snetwork.parser.example_id__GT_in_space_QMARK_.call(null,new cljs.core.Keyword("link","source","link/source",-437163273).cljs$core$IFn$_invoke$arity$1(link),state);
}
}),snetwork.parser.example_id__GT_link_ptrs.call(null,ex_id,state));
});
if(typeof snetwork.parser.read !== 'undefined'){
} else {
snetwork.parser.read = (function (){var method_table__22553__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22554__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22557__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snetwork.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22557__auto__,method_table__22553__auto__,prefer_table__22554__auto__,method_cache__22555__auto__,cached_hierarchy__22556__auto__));
})();
}
cljs.core._add_method.call(null,snetwork.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36096,key,params){
var map__36097 = p__36096;
var map__36097__$1 = ((((!((map__36097 == null)))?((((map__36097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36097):map__36097);
var state = cljs.core.get.call(null,map__36097__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__36097__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var ref = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
if(typeof snetwork.parser.mutate !== 'undefined'){
} else {
snetwork.parser.mutate = (function (){var method_table__22553__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22554__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22557__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snetwork.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22557__auto__,method_table__22553__auto__,prefer_table__22554__auto__,method_cache__22555__auto__,cached_hierarchy__22556__auto__));
})();
}
cljs.core._add_method.call(null,snetwork.parser.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,k,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
}));
cljs.core._add_method.call(null,snetwork.parser.mutate,new cljs.core.Symbol("example","add-to-space","example/add-to-space",987392543,null),(function (p__36099,_,p__36100){
var map__36101 = p__36099;
var map__36101__$1 = ((((!((map__36101 == null)))?((((map__36101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36101):map__36101);
var state = cljs.core.get.call(null,map__36101__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36102 = p__36100;
var map__36102__$1 = ((((!((map__36102 == null)))?((((map__36102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36102):map__36102);
var id = cljs.core.get.call(null,map__36102__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("space","examples","space/examples",-398686406)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36101,map__36101__$1,state,map__36102,map__36102__$1,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__36101,map__36101__$1,state,map__36102,map__36102__$1,id){
return (function (st){
var G__36105 = st;
var G__36105__$1 = ((cljs.core.not.call(null,cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id,new cljs.core.Keyword("example","links","example/links",668078860)], null))))?cljs.core.assoc_in.call(null,G__36105,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id,new cljs.core.Keyword("example","links","example/links",668078860)], null),snetwork.parser.find_link_ptrs_for_example_id.call(null,id,st)):G__36105);
var new_st = G__36105__$1;
var new_st__$1 = cljs.core.assoc_in.call(null,new_st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id,new cljs.core.Keyword("example","in-space","example/in-space",716984420)], null),true);
var new_st__$2 = cljs.core.update_in.call(null,new_st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword("space","examples","space/examples",-398686406)], null),((function (new_st,new_st__$1,G__36105,G__36105__$1,map__36101,map__36101__$1,state,map__36102,map__36102__$1,id){
return (function (space_list,ident){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ident], true),space_list))){
return null;
} else {
return cljs.core.conj.call(null,space_list,ident);
}
});})(new_st,new_st__$1,G__36105,G__36105__$1,map__36101,map__36101__$1,state,map__36102,map__36102__$1,id))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null));
return cljs.core.update_in.call(null,new_st__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword("space","links","space/links",-629787720)], null),((function (new_st,new_st__$1,new_st__$2,G__36105,G__36105__$1,map__36101,map__36101__$1,state,map__36102,map__36102__$1,id){
return (function (space_links){
return cljs.core.into.call(null,space_links,snetwork.parser.example_id__GT_link_ptrs_to_space.call(null,id,new_st__$2));
});})(new_st,new_st__$1,new_st__$2,G__36105,G__36105__$1,map__36101,map__36101__$1,state,map__36102,map__36102__$1,id))
);

});})(map__36101,map__36101__$1,state,map__36102,map__36102__$1,id))
);
});})(map__36101,map__36101__$1,state,map__36102,map__36102__$1,id))
], null);
}));
cljs.core._add_method.call(null,snetwork.parser.mutate,new cljs.core.Symbol("example","remove-from-space","example/remove-from-space",-663817971,null),(function (p__36109,_,p__36110){
var map__36111 = p__36109;
var map__36111__$1 = ((((!((map__36111 == null)))?((((map__36111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36111):map__36111);
var state = cljs.core.get.call(null,map__36111__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__36112 = p__36110;
var map__36112__$1 = ((((!((map__36112 == null)))?((((map__36112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36112):map__36112);
var id = cljs.core.get.call(null,map__36112__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("space","examples","space/examples",-398686406)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__36111,map__36111__$1,state,map__36112,map__36112__$1,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__36111,map__36111__$1,state,map__36112,map__36112__$1,id){
return (function (st){
var G__36115 = st;
var G__36115__$1 = ((cljs.core.not.call(null,cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id,new cljs.core.Keyword("example","links","example/links",668078860)], null))))?cljs.core.assoc_in.call(null,G__36115,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id,new cljs.core.Keyword("example","links","example/links",668078860)], null),snetwork.parser.find_link_ptrs_for_example_id.call(null,id,st)):G__36115);
var new_st = G__36115__$1;
var new_st__$1 = cljs.core.assoc_in.call(null,new_st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id,new cljs.core.Keyword("example","in-space","example/in-space",716984420)], null),false);
var new_st__$2 = cljs.core.update_in.call(null,new_st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword("space","examples","space/examples",-398686406)], null),((function (new_st,new_st__$1,G__36115,G__36115__$1,map__36111,map__36111__$1,state,map__36112,map__36112__$1,id){
return (function (space_examples){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (new_st,new_st__$1,G__36115,G__36115__$1,map__36111,map__36111__$1,state,map__36112,map__36112__$1,id){
return (function (p1__36107_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.second.call(null,p1__36107_SHARP_));
});})(new_st,new_st__$1,G__36115,G__36115__$1,map__36111,map__36111__$1,state,map__36112,map__36112__$1,id))
,space_examples));
});})(new_st,new_st__$1,G__36115,G__36115__$1,map__36111,map__36111__$1,state,map__36112,map__36112__$1,id))
);
return cljs.core.update_in.call(null,new_st__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword("space","links","space/links",-629787720)], null),((function (new_st,new_st__$1,new_st__$2,G__36115,G__36115__$1,map__36111,map__36111__$1,state,map__36112,map__36112__$1,id){
return (function (p1__36108_SHARP_){
return cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,p1__36108_SHARP_),cljs.core.set.call(null,snetwork.parser.example_id__GT_link_ptrs.call(null,id,new_st__$2))));
});})(new_st,new_st__$1,new_st__$2,G__36115,G__36115__$1,map__36111,map__36111__$1,state,map__36112,map__36112__$1,id))
);

});})(map__36111,map__36111__$1,state,map__36112,map__36112__$1,id))
);
});})(map__36111,map__36111__$1,state,map__36112,map__36112__$1,id))
], null);
}));

//# sourceMappingURL=parser.js.map?rel=1490551658798