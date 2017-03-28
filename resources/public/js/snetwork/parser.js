// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.parser');
goog.require('cljs.core');
goog.require('om.next');
if(typeof snetwork.parser.read !== 'undefined'){
} else {
snetwork.parser.read = (function (){var method_table__19804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snetwork.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19808__auto__,method_table__19804__auto__,prefer_table__19805__auto__,method_cache__19806__auto__,cached_hierarchy__19807__auto__));
})();
}
cljs.core._add_method.call(null,snetwork.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37094,key,_){
var map__37095 = p__37094;
var map__37095__$1 = ((((!((map__37095 == null)))?((((map__37095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37095):map__37095);
var state = cljs.core.get.call(null,map__37095__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__37095__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
snetwork.parser.mutate = (function (){var method_table__19804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snetwork.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19808__auto__,method_table__19804__auto__,prefer_table__19805__auto__,method_cache__19806__auto__,cached_hierarchy__19807__auto__));
})();
}
cljs.core._add_method.call(null,snetwork.parser.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,k,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
}));
/**
 * true if coll contains a vector with two elements
 *   ending in id
 */
snetwork.parser.contains_id_QMARK_ = (function snetwork$parser$contains_id_QMARK_(coll,target_id){
return cljs.core.some.call(null,(function (p1__37097_SHARP_){
var vec__37101 = p1__37097_SHARP_;
var ident_key = cljs.core.nth.call(null,vec__37101,(0),null);
var id = cljs.core.nth.call(null,vec__37101,(1),null);
return cljs.core._EQ_.call(null,target_id,id);
}),coll);
});
cljs.core._add_method.call(null,snetwork.parser.mutate,new cljs.core.Symbol("example","toggle-in-space","example/toggle-in-space",190743937,null),(function (p__37105,_,p__37106){
var map__37107 = p__37105;
var map__37107__$1 = ((((!((map__37107 == null)))?((((map__37107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37107):map__37107);
var state = cljs.core.get.call(null,map__37107__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37108 = p__37106;
var map__37108__$1 = ((((!((map__37108 == null)))?((((map__37108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37108):map__37108);
var id = cljs.core.get.call(null,map__37108__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37107,map__37107__$1,state,map__37108,map__37108__$1,id){
return (function (){
if(cljs.core.truth_(snetwork.parser.contains_id_QMARK_.call(null,new cljs.core.Keyword("example","space-list","example/space-list",186964501).cljs$core$IFn$_invoke$arity$1(state),id))){
return cljs.core.swap_BANG_.call(null,state,((function (map__37107,map__37107__$1,state,map__37108,map__37108__$1,id){
return (function (st){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),new cljs.core.Keyword("example","in-space","example/in-space",716984420)], null),false),new cljs.core.Keyword("example","space-list","example/space-list",186964501),((function (map__37107,map__37107__$1,state,map__37108,map__37108__$1,id){
return (function (v){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (map__37107,map__37107__$1,state,map__37108,map__37108__$1,id){
return (function (p1__37104_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.second.call(null,p1__37104_SHARP_));
});})(map__37107,map__37107__$1,state,map__37108,map__37108__$1,id))
,v));
});})(map__37107,map__37107__$1,state,map__37108,map__37108__$1,id))
);
});})(map__37107,map__37107__$1,state,map__37108,map__37108__$1,id))
);
} else {
return cljs.core.swap_BANG_.call(null,state,((function (map__37107,map__37107__$1,state,map__37108,map__37108__$1,id){
return (function (st){
return cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),new cljs.core.Keyword("example","in-space","example/in-space",716984420)], null),true),new cljs.core.Keyword("example","space-list","example/space-list",186964501),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null));
});})(map__37107,map__37107__$1,state,map__37108,map__37108__$1,id))
);
}
});})(map__37107,map__37107__$1,state,map__37108,map__37108__$1,id))
], null);
}));
cljs.core._add_method.call(null,snetwork.parser.mutate,new cljs.core.Symbol("example","focus","example/focus",-601981080,null),(function (p__37111,_,p__37112){
var map__37113 = p__37111;
var map__37113__$1 = ((((!((map__37113 == null)))?((((map__37113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37113):map__37113);
var state = cljs.core.get.call(null,map__37113__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__37114 = p__37112;
var map__37114__$1 = ((((!((map__37114 == null)))?((((map__37114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37114):map__37114);
var id = cljs.core.get.call(null,map__37114__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__37113,map__37113__$1,state,map__37114,map__37114__$1,id){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("example","focus","example/focus",2052454689),(cljs.core.truth_(id)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","by-id","example/by-id",1332198617),id], null)], null):null));

return cljs.core.println.call(null,"State: ",state);
});})(map__37113,map__37113__$1,state,map__37114,map__37114__$1,id))
], null);
}));

//# sourceMappingURL=parser.js.map