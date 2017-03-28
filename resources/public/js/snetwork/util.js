// Compiled by ClojureScript 1.9.293 {}
goog.provide('snetwork.util');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('goog.events.KeyCodes');
snetwork.util.p = (function snetwork$util$p(var_args){
var args__19991__auto__ = [];
var len__19984__auto___41325 = arguments.length;
var i__19985__auto___41326 = (0);
while(true){
if((i__19985__auto___41326 < len__19984__auto___41325)){
args__19991__auto__.push((arguments[i__19985__auto___41326]));

var G__41327 = (i__19985__auto___41326 + (1));
i__19985__auto___41326 = G__41327;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return snetwork.util.p.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

snetwork.util.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var seq__41321_41328 = cljs.core.seq.call(null,args);
var chunk__41322_41329 = null;
var count__41323_41330 = (0);
var i__41324_41331 = (0);
while(true){
if((i__41324_41331 < count__41323_41330)){
var a_41332 = cljs.core._nth.call(null,chunk__41322_41329,i__41324_41331);
var f_41333 = ((cljs.core.map_QMARK_.call(null,a_41332))?cljs.pprint.pprint:cljs.core.print);
f_41333.call(null,a_41332);

var G__41334 = seq__41321_41328;
var G__41335 = chunk__41322_41329;
var G__41336 = count__41323_41330;
var G__41337 = (i__41324_41331 + (1));
seq__41321_41328 = G__41334;
chunk__41322_41329 = G__41335;
count__41323_41330 = G__41336;
i__41324_41331 = G__41337;
continue;
} else {
var temp__4657__auto___41338 = cljs.core.seq.call(null,seq__41321_41328);
if(temp__4657__auto___41338){
var seq__41321_41339__$1 = temp__4657__auto___41338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41321_41339__$1)){
var c__19690__auto___41340 = cljs.core.chunk_first.call(null,seq__41321_41339__$1);
var G__41341 = cljs.core.chunk_rest.call(null,seq__41321_41339__$1);
var G__41342 = c__19690__auto___41340;
var G__41343 = cljs.core.count.call(null,c__19690__auto___41340);
var G__41344 = (0);
seq__41321_41328 = G__41341;
chunk__41322_41329 = G__41342;
count__41323_41330 = G__41343;
i__41324_41331 = G__41344;
continue;
} else {
var a_41345 = cljs.core.first.call(null,seq__41321_41339__$1);
var f_41346 = ((cljs.core.map_QMARK_.call(null,a_41345))?cljs.pprint.pprint:cljs.core.print);
f_41346.call(null,a_41345);

var G__41347 = cljs.core.next.call(null,seq__41321_41339__$1);
var G__41348 = null;
var G__41349 = (0);
var G__41350 = (0);
seq__41321_41328 = G__41347;
chunk__41322_41329 = G__41348;
count__41323_41330 = G__41349;
i__41324_41331 = G__41350;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null);

cljs.core.flush.call(null);

return cljs.core.last.call(null,args);
});

snetwork.util.p.cljs$lang$maxFixedArity = (0);

snetwork.util.p.cljs$lang$applyTo = (function (seq41320){
return snetwork.util.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41320));
});

snetwork.util.pcoll = (function snetwork$util$pcoll(items){
return cljs.core.doall.call(null,cljs.core.map.call(null,snetwork.util.p,items));
});
snetwork.util.prevent_default = (function snetwork$util$prevent_default(e){
var G__41352 = e;
G__41352.preventDefault();

G__41352.stopPropagation();

return G__41352;
});
snetwork.util.target_val = (function snetwork$util$target_val(e){
return e.target.value;
});
snetwork.util.on_key_down = (function snetwork$util$on_key_down(key_fns){
return (function (e){
var f = (function (){var pred__41357 = cljs.core._EQ__EQ_;
var expr__41358 = (e["keyCode"]);
if(cljs.core.truth_(pred__41357.call(null,goog.events.KeyCodes.ESC,expr__41358))){
return new cljs.core.Keyword("key","esc","key/esc",-1672046650).cljs$core$IFn$_invoke$arity$1(key_fns);
} else {
if(cljs.core.truth_(pred__41357.call(null,goog.events.KeyCodes.ENTER,expr__41358))){
return new cljs.core.Keyword("key","enter","key/enter",1792346545).cljs$core$IFn$_invoke$arity$1(key_fns);
} else {
return ((function (pred__41357,expr__41358){
return (function (p1__41353_SHARP_){
return p1__41353_SHARP_;
});
;})(pred__41357,expr__41358))
}
}
})();
return f.call(null,e);
});
});
snetwork.util.event_data = (function snetwork$util$event_data(e){
return (e.event_["data"]);
});
snetwork.util.apply_if = (function snetwork$util$apply_if(var_args){
var args__19991__auto__ = [];
var len__19984__auto___41364 = arguments.length;
var i__19985__auto___41365 = (0);
while(true){
if((i__19985__auto___41365 < len__19984__auto___41364)){
args__19991__auto__.push((arguments[i__19985__auto___41365]));

var G__41366 = (i__19985__auto___41365 + (1));
i__19985__auto___41365 = G__41366;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((3) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((3)),(0),null)):null);
return snetwork.util.apply_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19992__auto__);
});

snetwork.util.apply_if.cljs$core$IFn$_invoke$arity$variadic = (function (pred,f,x,args){
if(cljs.core.not.call(null,pred.call(null,x))){
return cljs.core.apply.call(null,f,x,args);
} else {
return x;
}
});

snetwork.util.apply_if.cljs$lang$maxFixedArity = (3);

snetwork.util.apply_if.cljs$lang$applyTo = (function (seq41360){
var G__41361 = cljs.core.first.call(null,seq41360);
var seq41360__$1 = cljs.core.next.call(null,seq41360);
var G__41362 = cljs.core.first.call(null,seq41360__$1);
var seq41360__$2 = cljs.core.next.call(null,seq41360__$1);
var G__41363 = cljs.core.first.call(null,seq41360__$2);
var seq41360__$3 = cljs.core.next.call(null,seq41360__$2);
return snetwork.util.apply_if.cljs$core$IFn$_invoke$arity$variadic(G__41361,G__41362,G__41363,seq41360__$3);
});

snetwork.util.find_by_key = (function snetwork$util$find_by_key(k,v,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__41367_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get.call(null,p1__41367_SHARP_,k));
}),coll));
});

//# sourceMappingURL=util.js.map