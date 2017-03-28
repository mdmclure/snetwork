// Compiled by ClojureScript 1.9.293 {}
goog.provide('gravity.tools');
goog.require('cljs.core');
goog.require('clairvoyant.core');
/**
 * Return the first arg or all the list as a js-obj
 */
gravity.tools.get_args = (function gravity$tools$get_args(coll){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1))){
return cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,coll));
} else {
return cljs.core.clj__GT_js.call(null,coll);
}
});
/**
 * Log in the console
 */
gravity.tools.log = (function gravity$tools$log(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34570 = arguments.length;
var i__22734__auto___34571 = (0);
while(true){
if((i__22734__auto___34571 < len__22733__auto___34570)){
args__22740__auto__.push((arguments[i__22734__auto___34571]));

var G__34572 = (i__22734__auto___34571 + (1));
i__22734__auto___34571 = G__34572;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return gravity.tools.log.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

gravity.tools.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(gravity.tools.get_args.call(null,args));
});

gravity.tools.log.cljs$lang$maxFixedArity = (0);

gravity.tools.log.cljs$lang$applyTo = (function (seq34569){
return gravity.tools.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34569));
});

/**
 * Warn in the console
 */
gravity.tools.warn = (function gravity$tools$warn(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34574 = arguments.length;
var i__22734__auto___34575 = (0);
while(true){
if((i__22734__auto___34575 < len__22733__auto___34574)){
args__22740__auto__.push((arguments[i__22734__auto___34575]));

var G__34576 = (i__22734__auto___34575 + (1));
i__22734__auto___34575 = G__34576;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return gravity.tools.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

gravity.tools.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.warn(gravity.tools.get_args.call(null,args));
});

gravity.tools.warn.cljs$lang$maxFixedArity = (0);

gravity.tools.warn.cljs$lang$applyTo = (function (seq34573){
return gravity.tools.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34573));
});

/**
 * Error in the console
 */
gravity.tools.err = (function gravity$tools$err(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34578 = arguments.length;
var i__22734__auto___34579 = (0);
while(true){
if((i__22734__auto___34579 < len__22733__auto___34578)){
args__22740__auto__.push((arguments[i__22734__auto___34579]));

var G__34580 = (i__22734__auto___34579 + (1));
i__22734__auto___34579 = G__34580;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return gravity.tools.err.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

gravity.tools.err.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.error(gravity.tools.get_args.call(null,args));
});

gravity.tools.err.cljs$lang$maxFixedArity = (0);

gravity.tools.err.cljs$lang$applyTo = (function (seq34577){
return gravity.tools.err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34577));
});

gravity.tools.map_map = (function gravity$tools$map_map(f,m){

return cljs.core.reduce.call(null,(function (altered_map,p__34585){
var vec__34586 = p__34585;
var k = cljs.core.nth.call(null,vec__34586,(0),null);
var v = cljs.core.nth.call(null,vec__34586,(1),null);
return cljs.core.assoc.call(null,altered_map,k,f.call(null,k,v));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * takes two javascript vectors and an identity function and gives back a map containing :only1, a javascript vector of the elements in the first vector that aren't in the second (according to the identity function), and :only2, the converse.
 */
gravity.tools.vector_diff_js = (function gravity$tools$vector_diff_js(v1,v2,idfn){
var v1__$1 = (function (){var or__21625__auto__ = v1;
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return [];
}
})();
var v2__$1 = (function (){var or__21625__auto__ = v2;
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return [];
}
})();
var keys1 = cljs.core.set.call(null,cljs.core.map.call(null,((function (v1__$1,v2__$1){
return (function (p1__34589_SHARP_){
return (p1__34589_SHARP_[idfn]);
});})(v1__$1,v2__$1))
,v1__$1));
var keys2 = cljs.core.set.call(null,cljs.core.map.call(null,((function (v1__$1,v2__$1,keys1){
return (function (p1__34590_SHARP_){
return (p1__34590_SHARP_[idfn]);
});})(v1__$1,v2__$1,keys1))
,v2__$1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"only1","only1",937999227),cljs.core.clj__GT_js.call(null,cljs.core.filterv.call(null,((function (v1__$1,v2__$1,keys1,keys2){
return (function (p1__34591_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,keys2,(p1__34591_SHARP_[idfn])));
});})(v1__$1,v2__$1,keys1,keys2))
,v1__$1)),new cljs.core.Keyword(null,"only2","only2",-604982312),cljs.core.clj__GT_js.call(null,cljs.core.filterv.call(null,((function (v1__$1,v2__$1,keys1,keys2){
return (function (p1__34592_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,keys1,(p1__34592_SHARP_[idfn])));
});})(v1__$1,v2__$1,keys1,keys2))
,v2__$1))], null);
});
gravity.tools.trace_var = (function gravity$tools$trace_var(a_34593){
var trace_data__31376__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"gravity.tools","gravity.tools",-273205350,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"trace-var","trace-var",246788870,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Keyword(null,"anonymous?","anonymous?",374098995),false,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"trace-var","trace-var",246788870,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.Symbol(null,"v","v",1661996586,null))], null);
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceEnter$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,clairvoyant.core.default_tracer))){
clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__31376__auto__);
} else {
}

var f__31377__auto__ = ((function (trace_data__31376__auto__){
return (function (){
var return__31378__auto__ = ((function (trace_data__31376__auto__){
return (function (a_34593__$1){
var v = (function (){var trace_data__31376__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),a_34593__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceEnter$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceEnter,clairvoyant.core.default_tracer))){
clairvoyant.core.trace_enter.call(null,clairvoyant.core.default_tracer,trace_data__31376__auto____$1);
} else {
}

var f__31377__auto__ = ((function (trace_data__31376__auto____$1,trace_data__31376__auto__){
return (function (){
var return__31378__auto__ = a_34593__$1;
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceExit$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,clairvoyant.core.default_tracer))){
clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__31376__auto____$1,new cljs.core.Keyword(null,"exit","exit",351849638),return__31378__auto__));
} else {
}

return return__31378__auto__;
});})(trace_data__31376__auto____$1,trace_data__31376__auto__))
;
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceError$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,clairvoyant.core.default_tracer))){
try{return f__31377__auto__.call(null);
}catch (e34606){if((e34606 instanceof Object)){
var e__31379__auto__ = e34606;
clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__31376__auto____$1,new cljs.core.Keyword(null,"error","error",-978969032),e__31379__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__31379__auto__)));

throw e__31379__auto__;
} else {
throw e34606;

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
.call(null,a_34593);
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceExit$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceExit,clairvoyant.core.default_tracer))){
clairvoyant.core.trace_exit.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__31376__auto__,new cljs.core.Keyword(null,"exit","exit",351849638),return__31378__auto__));
} else {
}

return return__31378__auto__;
});})(trace_data__31376__auto__))
;
if(((!((clairvoyant.core.default_tracer == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === clairvoyant.core.default_tracer.clairvoyant$core$ITraceError$)))?true:(((!clairvoyant.core.default_tracer.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,clairvoyant.core.default_tracer):false)):cljs.core.native_satisfies_QMARK_.call(null,clairvoyant.core.ITraceError,clairvoyant.core.default_tracer))){
try{return f__31377__auto__.call(null);
}catch (e34609){if((e34609 instanceof Object)){
var e__31379__auto__ = e34609;
clairvoyant.core.trace_error.call(null,clairvoyant.core.default_tracer,cljs.core.assoc.call(null,trace_data__31376__auto__,new cljs.core.Keyword(null,"error","error",-978969032),e__31379__auto__,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,e__31379__auto__)));

throw e__31379__auto__;
} else {
throw e34609;

}
}} else {
return f__31377__auto__.call(null);
}
});

//# sourceMappingURL=tools.js.map?rel=1490676076926