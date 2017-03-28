// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37310 = arguments.length;
var i__19985__auto___37311 = (0);
while(true){
if((i__19985__auto___37311 < len__19984__auto___37310)){
args__19991__auto__.push((arguments[i__19985__auto___37311]));

var G__37312 = (i__19985__auto___37311 + (1));
i__19985__auto___37311 = G__37312;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq37309){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37309));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37314 = arguments.length;
var i__19985__auto___37315 = (0);
while(true){
if((i__19985__auto___37315 < len__19984__auto___37314)){
args__19991__auto__.push((arguments[i__19985__auto___37315]));

var G__37316 = (i__19985__auto___37315 + (1));
i__19985__auto___37315 = G__37316;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq37313){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37313));
});

var g_QMARK__37317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_37318 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37317){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__37317))
,null));
var mkg_37319 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37317,g_37318){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__37317,g_37318))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__37317,g_37318,mkg_37319){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37317).call(null,x);
});})(g_QMARK__37317,g_37318,mkg_37319))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__37317,g_37318,mkg_37319){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_37319).call(null,gfn);
});})(g_QMARK__37317,g_37318,mkg_37319))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__37317,g_37318,mkg_37319){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_37318).call(null,generator);
});})(g_QMARK__37317,g_37318,mkg_37319))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28740__auto___37338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28740__auto___37338){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37339 = arguments.length;
var i__19985__auto___37340 = (0);
while(true){
if((i__19985__auto___37340 < len__19984__auto___37339)){
args__19991__auto__.push((arguments[i__19985__auto___37340]));

var G__37341 = (i__19985__auto___37340 + (1));
i__19985__auto___37340 = G__37341;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37338))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37338){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37338),args);
});})(g__28740__auto___37338))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28740__auto___37338){
return (function (seq37320){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37320));
});})(g__28740__auto___37338))
;


var g__28740__auto___37342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28740__auto___37342){
return (function cljs$spec$impl$gen$list(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37343 = arguments.length;
var i__19985__auto___37344 = (0);
while(true){
if((i__19985__auto___37344 < len__19984__auto___37343)){
args__19991__auto__.push((arguments[i__19985__auto___37344]));

var G__37345 = (i__19985__auto___37344 + (1));
i__19985__auto___37344 = G__37345;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37342))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37342){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37342),args);
});})(g__28740__auto___37342))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28740__auto___37342){
return (function (seq37321){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37321));
});})(g__28740__auto___37342))
;


var g__28740__auto___37346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28740__auto___37346){
return (function cljs$spec$impl$gen$map(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37347 = arguments.length;
var i__19985__auto___37348 = (0);
while(true){
if((i__19985__auto___37348 < len__19984__auto___37347)){
args__19991__auto__.push((arguments[i__19985__auto___37348]));

var G__37349 = (i__19985__auto___37348 + (1));
i__19985__auto___37348 = G__37349;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37346))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37346){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37346),args);
});})(g__28740__auto___37346))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28740__auto___37346){
return (function (seq37322){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37322));
});})(g__28740__auto___37346))
;


var g__28740__auto___37350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28740__auto___37350){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37351 = arguments.length;
var i__19985__auto___37352 = (0);
while(true){
if((i__19985__auto___37352 < len__19984__auto___37351)){
args__19991__auto__.push((arguments[i__19985__auto___37352]));

var G__37353 = (i__19985__auto___37352 + (1));
i__19985__auto___37352 = G__37353;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37350))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37350){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37350),args);
});})(g__28740__auto___37350))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28740__auto___37350){
return (function (seq37323){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37323));
});})(g__28740__auto___37350))
;


var g__28740__auto___37354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28740__auto___37354){
return (function cljs$spec$impl$gen$set(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37355 = arguments.length;
var i__19985__auto___37356 = (0);
while(true){
if((i__19985__auto___37356 < len__19984__auto___37355)){
args__19991__auto__.push((arguments[i__19985__auto___37356]));

var G__37357 = (i__19985__auto___37356 + (1));
i__19985__auto___37356 = G__37357;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37354))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37354){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37354),args);
});})(g__28740__auto___37354))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28740__auto___37354){
return (function (seq37324){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37324));
});})(g__28740__auto___37354))
;


var g__28740__auto___37358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28740__auto___37358){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37359 = arguments.length;
var i__19985__auto___37360 = (0);
while(true){
if((i__19985__auto___37360 < len__19984__auto___37359)){
args__19991__auto__.push((arguments[i__19985__auto___37360]));

var G__37361 = (i__19985__auto___37360 + (1));
i__19985__auto___37360 = G__37361;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37358))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37358){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37358),args);
});})(g__28740__auto___37358))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28740__auto___37358){
return (function (seq37325){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37325));
});})(g__28740__auto___37358))
;


var g__28740__auto___37362 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28740__auto___37362){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37363 = arguments.length;
var i__19985__auto___37364 = (0);
while(true){
if((i__19985__auto___37364 < len__19984__auto___37363)){
args__19991__auto__.push((arguments[i__19985__auto___37364]));

var G__37365 = (i__19985__auto___37364 + (1));
i__19985__auto___37364 = G__37365;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37362))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37362){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37362),args);
});})(g__28740__auto___37362))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28740__auto___37362){
return (function (seq37326){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37326));
});})(g__28740__auto___37362))
;


var g__28740__auto___37366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28740__auto___37366){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37367 = arguments.length;
var i__19985__auto___37368 = (0);
while(true){
if((i__19985__auto___37368 < len__19984__auto___37367)){
args__19991__auto__.push((arguments[i__19985__auto___37368]));

var G__37369 = (i__19985__auto___37368 + (1));
i__19985__auto___37368 = G__37369;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37366))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37366){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37366),args);
});})(g__28740__auto___37366))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28740__auto___37366){
return (function (seq37327){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37327));
});})(g__28740__auto___37366))
;


var g__28740__auto___37370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28740__auto___37370){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37371 = arguments.length;
var i__19985__auto___37372 = (0);
while(true){
if((i__19985__auto___37372 < len__19984__auto___37371)){
args__19991__auto__.push((arguments[i__19985__auto___37372]));

var G__37373 = (i__19985__auto___37372 + (1));
i__19985__auto___37372 = G__37373;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37370))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37370){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37370),args);
});})(g__28740__auto___37370))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28740__auto___37370){
return (function (seq37328){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37328));
});})(g__28740__auto___37370))
;


var g__28740__auto___37374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28740__auto___37374){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37375 = arguments.length;
var i__19985__auto___37376 = (0);
while(true){
if((i__19985__auto___37376 < len__19984__auto___37375)){
args__19991__auto__.push((arguments[i__19985__auto___37376]));

var G__37377 = (i__19985__auto___37376 + (1));
i__19985__auto___37376 = G__37377;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37374))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37374){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37374),args);
});})(g__28740__auto___37374))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28740__auto___37374){
return (function (seq37329){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37329));
});})(g__28740__auto___37374))
;


var g__28740__auto___37378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28740__auto___37378){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37379 = arguments.length;
var i__19985__auto___37380 = (0);
while(true){
if((i__19985__auto___37380 < len__19984__auto___37379)){
args__19991__auto__.push((arguments[i__19985__auto___37380]));

var G__37381 = (i__19985__auto___37380 + (1));
i__19985__auto___37380 = G__37381;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37378))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37378){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37378),args);
});})(g__28740__auto___37378))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28740__auto___37378){
return (function (seq37330){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37330));
});})(g__28740__auto___37378))
;


var g__28740__auto___37382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28740__auto___37382){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37383 = arguments.length;
var i__19985__auto___37384 = (0);
while(true){
if((i__19985__auto___37384 < len__19984__auto___37383)){
args__19991__auto__.push((arguments[i__19985__auto___37384]));

var G__37385 = (i__19985__auto___37384 + (1));
i__19985__auto___37384 = G__37385;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37382))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37382){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37382),args);
});})(g__28740__auto___37382))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28740__auto___37382){
return (function (seq37331){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37331));
});})(g__28740__auto___37382))
;


var g__28740__auto___37386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28740__auto___37386){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37387 = arguments.length;
var i__19985__auto___37388 = (0);
while(true){
if((i__19985__auto___37388 < len__19984__auto___37387)){
args__19991__auto__.push((arguments[i__19985__auto___37388]));

var G__37389 = (i__19985__auto___37388 + (1));
i__19985__auto___37388 = G__37389;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37386))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37386){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37386),args);
});})(g__28740__auto___37386))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28740__auto___37386){
return (function (seq37332){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37332));
});})(g__28740__auto___37386))
;


var g__28740__auto___37390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28740__auto___37390){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37391 = arguments.length;
var i__19985__auto___37392 = (0);
while(true){
if((i__19985__auto___37392 < len__19984__auto___37391)){
args__19991__auto__.push((arguments[i__19985__auto___37392]));

var G__37393 = (i__19985__auto___37392 + (1));
i__19985__auto___37392 = G__37393;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37390))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37390){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37390),args);
});})(g__28740__auto___37390))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28740__auto___37390){
return (function (seq37333){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37333));
});})(g__28740__auto___37390))
;


var g__28740__auto___37394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28740__auto___37394){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37395 = arguments.length;
var i__19985__auto___37396 = (0);
while(true){
if((i__19985__auto___37396 < len__19984__auto___37395)){
args__19991__auto__.push((arguments[i__19985__auto___37396]));

var G__37397 = (i__19985__auto___37396 + (1));
i__19985__auto___37396 = G__37397;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37394))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37394){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37394),args);
});})(g__28740__auto___37394))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28740__auto___37394){
return (function (seq37334){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37334));
});})(g__28740__auto___37394))
;


var g__28740__auto___37398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28740__auto___37398){
return (function cljs$spec$impl$gen$return(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37399 = arguments.length;
var i__19985__auto___37400 = (0);
while(true){
if((i__19985__auto___37400 < len__19984__auto___37399)){
args__19991__auto__.push((arguments[i__19985__auto___37400]));

var G__37401 = (i__19985__auto___37400 + (1));
i__19985__auto___37400 = G__37401;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37398))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37398){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37398),args);
});})(g__28740__auto___37398))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28740__auto___37398){
return (function (seq37335){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37335));
});})(g__28740__auto___37398))
;


var g__28740__auto___37402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28740__auto___37402){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37403 = arguments.length;
var i__19985__auto___37404 = (0);
while(true){
if((i__19985__auto___37404 < len__19984__auto___37403)){
args__19991__auto__.push((arguments[i__19985__auto___37404]));

var G__37405 = (i__19985__auto___37404 + (1));
i__19985__auto___37404 = G__37405;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37402))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37402){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37402),args);
});})(g__28740__auto___37402))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28740__auto___37402){
return (function (seq37336){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37336));
});})(g__28740__auto___37402))
;


var g__28740__auto___37406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__28740__auto___37406){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37407 = arguments.length;
var i__19985__auto___37408 = (0);
while(true){
if((i__19985__auto___37408 < len__19984__auto___37407)){
args__19991__auto__.push((arguments[i__19985__auto___37408]));

var G__37409 = (i__19985__auto___37408 + (1));
i__19985__auto___37408 = G__37409;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28740__auto___37406))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28740__auto___37406){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28740__auto___37406),args);
});})(g__28740__auto___37406))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__28740__auto___37406){
return (function (seq37337){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37337));
});})(g__28740__auto___37406))
;

var g__28753__auto___37431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28753__auto___37431){
return (function cljs$spec$impl$gen$any(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37432 = arguments.length;
var i__19985__auto___37433 = (0);
while(true){
if((i__19985__auto___37433 < len__19984__auto___37432)){
args__19991__auto__.push((arguments[i__19985__auto___37433]));

var G__37434 = (i__19985__auto___37433 + (1));
i__19985__auto___37433 = G__37434;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37431))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37431){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37431);
});})(g__28753__auto___37431))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28753__auto___37431){
return (function (seq37410){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37410));
});})(g__28753__auto___37431))
;


var g__28753__auto___37435 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28753__auto___37435){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37436 = arguments.length;
var i__19985__auto___37437 = (0);
while(true){
if((i__19985__auto___37437 < len__19984__auto___37436)){
args__19991__auto__.push((arguments[i__19985__auto___37437]));

var G__37438 = (i__19985__auto___37437 + (1));
i__19985__auto___37437 = G__37438;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37435))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37435){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37435);
});})(g__28753__auto___37435))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28753__auto___37435){
return (function (seq37411){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37411));
});})(g__28753__auto___37435))
;


var g__28753__auto___37439 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28753__auto___37439){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37440 = arguments.length;
var i__19985__auto___37441 = (0);
while(true){
if((i__19985__auto___37441 < len__19984__auto___37440)){
args__19991__auto__.push((arguments[i__19985__auto___37441]));

var G__37442 = (i__19985__auto___37441 + (1));
i__19985__auto___37441 = G__37442;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37439))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37439){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37439);
});})(g__28753__auto___37439))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28753__auto___37439){
return (function (seq37412){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37412));
});})(g__28753__auto___37439))
;


var g__28753__auto___37443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28753__auto___37443){
return (function cljs$spec$impl$gen$char(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37444 = arguments.length;
var i__19985__auto___37445 = (0);
while(true){
if((i__19985__auto___37445 < len__19984__auto___37444)){
args__19991__auto__.push((arguments[i__19985__auto___37445]));

var G__37446 = (i__19985__auto___37445 + (1));
i__19985__auto___37445 = G__37446;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37443))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37443){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37443);
});})(g__28753__auto___37443))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28753__auto___37443){
return (function (seq37413){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37413));
});})(g__28753__auto___37443))
;


var g__28753__auto___37447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28753__auto___37447){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37448 = arguments.length;
var i__19985__auto___37449 = (0);
while(true){
if((i__19985__auto___37449 < len__19984__auto___37448)){
args__19991__auto__.push((arguments[i__19985__auto___37449]));

var G__37450 = (i__19985__auto___37449 + (1));
i__19985__auto___37449 = G__37450;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37447))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37447){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37447);
});})(g__28753__auto___37447))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28753__auto___37447){
return (function (seq37414){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37414));
});})(g__28753__auto___37447))
;


var g__28753__auto___37451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28753__auto___37451){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37452 = arguments.length;
var i__19985__auto___37453 = (0);
while(true){
if((i__19985__auto___37453 < len__19984__auto___37452)){
args__19991__auto__.push((arguments[i__19985__auto___37453]));

var G__37454 = (i__19985__auto___37453 + (1));
i__19985__auto___37453 = G__37454;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37451))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37451){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37451);
});})(g__28753__auto___37451))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28753__auto___37451){
return (function (seq37415){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37415));
});})(g__28753__auto___37451))
;


var g__28753__auto___37455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28753__auto___37455){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37456 = arguments.length;
var i__19985__auto___37457 = (0);
while(true){
if((i__19985__auto___37457 < len__19984__auto___37456)){
args__19991__auto__.push((arguments[i__19985__auto___37457]));

var G__37458 = (i__19985__auto___37457 + (1));
i__19985__auto___37457 = G__37458;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37455))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37455){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37455);
});})(g__28753__auto___37455))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28753__auto___37455){
return (function (seq37416){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37416));
});})(g__28753__auto___37455))
;


var g__28753__auto___37459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28753__auto___37459){
return (function cljs$spec$impl$gen$double(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37460 = arguments.length;
var i__19985__auto___37461 = (0);
while(true){
if((i__19985__auto___37461 < len__19984__auto___37460)){
args__19991__auto__.push((arguments[i__19985__auto___37461]));

var G__37462 = (i__19985__auto___37461 + (1));
i__19985__auto___37461 = G__37462;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37459))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37459){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37459);
});})(g__28753__auto___37459))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28753__auto___37459){
return (function (seq37417){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37417));
});})(g__28753__auto___37459))
;


var g__28753__auto___37463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28753__auto___37463){
return (function cljs$spec$impl$gen$int(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37464 = arguments.length;
var i__19985__auto___37465 = (0);
while(true){
if((i__19985__auto___37465 < len__19984__auto___37464)){
args__19991__auto__.push((arguments[i__19985__auto___37465]));

var G__37466 = (i__19985__auto___37465 + (1));
i__19985__auto___37465 = G__37466;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37463))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37463){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37463);
});})(g__28753__auto___37463))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28753__auto___37463){
return (function (seq37418){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37418));
});})(g__28753__auto___37463))
;


var g__28753__auto___37467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28753__auto___37467){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37468 = arguments.length;
var i__19985__auto___37469 = (0);
while(true){
if((i__19985__auto___37469 < len__19984__auto___37468)){
args__19991__auto__.push((arguments[i__19985__auto___37469]));

var G__37470 = (i__19985__auto___37469 + (1));
i__19985__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37467))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37467){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37467);
});})(g__28753__auto___37467))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28753__auto___37467){
return (function (seq37419){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37419));
});})(g__28753__auto___37467))
;


var g__28753__auto___37471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28753__auto___37471){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37472 = arguments.length;
var i__19985__auto___37473 = (0);
while(true){
if((i__19985__auto___37473 < len__19984__auto___37472)){
args__19991__auto__.push((arguments[i__19985__auto___37473]));

var G__37474 = (i__19985__auto___37473 + (1));
i__19985__auto___37473 = G__37474;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37471))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37471){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37471);
});})(g__28753__auto___37471))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28753__auto___37471){
return (function (seq37420){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37420));
});})(g__28753__auto___37471))
;


var g__28753__auto___37475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28753__auto___37475){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37476 = arguments.length;
var i__19985__auto___37477 = (0);
while(true){
if((i__19985__auto___37477 < len__19984__auto___37476)){
args__19991__auto__.push((arguments[i__19985__auto___37477]));

var G__37478 = (i__19985__auto___37477 + (1));
i__19985__auto___37477 = G__37478;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37475))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37475){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37475);
});})(g__28753__auto___37475))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28753__auto___37475){
return (function (seq37421){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37421));
});})(g__28753__auto___37475))
;


var g__28753__auto___37479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28753__auto___37479){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37480 = arguments.length;
var i__19985__auto___37481 = (0);
while(true){
if((i__19985__auto___37481 < len__19984__auto___37480)){
args__19991__auto__.push((arguments[i__19985__auto___37481]));

var G__37482 = (i__19985__auto___37481 + (1));
i__19985__auto___37481 = G__37482;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37479))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37479){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37479);
});})(g__28753__auto___37479))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28753__auto___37479){
return (function (seq37422){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37422));
});})(g__28753__auto___37479))
;


var g__28753__auto___37483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28753__auto___37483){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37484 = arguments.length;
var i__19985__auto___37485 = (0);
while(true){
if((i__19985__auto___37485 < len__19984__auto___37484)){
args__19991__auto__.push((arguments[i__19985__auto___37485]));

var G__37486 = (i__19985__auto___37485 + (1));
i__19985__auto___37485 = G__37486;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37483))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37483){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37483);
});})(g__28753__auto___37483))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28753__auto___37483){
return (function (seq37423){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37423));
});})(g__28753__auto___37483))
;


var g__28753__auto___37487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28753__auto___37487){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37488 = arguments.length;
var i__19985__auto___37489 = (0);
while(true){
if((i__19985__auto___37489 < len__19984__auto___37488)){
args__19991__auto__.push((arguments[i__19985__auto___37489]));

var G__37490 = (i__19985__auto___37489 + (1));
i__19985__auto___37489 = G__37490;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37487))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37487){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37487);
});})(g__28753__auto___37487))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28753__auto___37487){
return (function (seq37424){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37424));
});})(g__28753__auto___37487))
;


var g__28753__auto___37491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28753__auto___37491){
return (function cljs$spec$impl$gen$string(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37492 = arguments.length;
var i__19985__auto___37493 = (0);
while(true){
if((i__19985__auto___37493 < len__19984__auto___37492)){
args__19991__auto__.push((arguments[i__19985__auto___37493]));

var G__37494 = (i__19985__auto___37493 + (1));
i__19985__auto___37493 = G__37494;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37491))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37491){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37491);
});})(g__28753__auto___37491))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28753__auto___37491){
return (function (seq37425){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37425));
});})(g__28753__auto___37491))
;


var g__28753__auto___37495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28753__auto___37495){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37496 = arguments.length;
var i__19985__auto___37497 = (0);
while(true){
if((i__19985__auto___37497 < len__19984__auto___37496)){
args__19991__auto__.push((arguments[i__19985__auto___37497]));

var G__37498 = (i__19985__auto___37497 + (1));
i__19985__auto___37497 = G__37498;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37495))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37495){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37495);
});})(g__28753__auto___37495))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28753__auto___37495){
return (function (seq37426){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37426));
});})(g__28753__auto___37495))
;


var g__28753__auto___37499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28753__auto___37499){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37500 = arguments.length;
var i__19985__auto___37501 = (0);
while(true){
if((i__19985__auto___37501 < len__19984__auto___37500)){
args__19991__auto__.push((arguments[i__19985__auto___37501]));

var G__37502 = (i__19985__auto___37501 + (1));
i__19985__auto___37501 = G__37502;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37499))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37499){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37499);
});})(g__28753__auto___37499))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28753__auto___37499){
return (function (seq37427){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37427));
});})(g__28753__auto___37499))
;


var g__28753__auto___37503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28753__auto___37503){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37504 = arguments.length;
var i__19985__auto___37505 = (0);
while(true){
if((i__19985__auto___37505 < len__19984__auto___37504)){
args__19991__auto__.push((arguments[i__19985__auto___37505]));

var G__37506 = (i__19985__auto___37505 + (1));
i__19985__auto___37505 = G__37506;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37503))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37503){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37503);
});})(g__28753__auto___37503))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28753__auto___37503){
return (function (seq37428){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37428));
});})(g__28753__auto___37503))
;


var g__28753__auto___37507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28753__auto___37507){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37508 = arguments.length;
var i__19985__auto___37509 = (0);
while(true){
if((i__19985__auto___37509 < len__19984__auto___37508)){
args__19991__auto__.push((arguments[i__19985__auto___37509]));

var G__37510 = (i__19985__auto___37509 + (1));
i__19985__auto___37509 = G__37510;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37507))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37507){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37507);
});})(g__28753__auto___37507))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28753__auto___37507){
return (function (seq37429){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37429));
});})(g__28753__auto___37507))
;


var g__28753__auto___37511 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28753__auto___37511){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37512 = arguments.length;
var i__19985__auto___37513 = (0);
while(true){
if((i__19985__auto___37513 < len__19984__auto___37512)){
args__19991__auto__.push((arguments[i__19985__auto___37513]));

var G__37514 = (i__19985__auto___37513 + (1));
i__19985__auto___37513 = G__37514;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});})(g__28753__auto___37511))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28753__auto___37511){
return (function (args){
return cljs.core.deref.call(null,g__28753__auto___37511);
});})(g__28753__auto___37511))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28753__auto___37511){
return (function (seq37430){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37430));
});})(g__28753__auto___37511))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37517 = arguments.length;
var i__19985__auto___37518 = (0);
while(true){
if((i__19985__auto___37518 < len__19984__auto___37517)){
args__19991__auto__.push((arguments[i__19985__auto___37518]));

var G__37519 = (i__19985__auto___37518 + (1));
i__19985__auto___37518 = G__37519;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__37515_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37515_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq37516){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37516));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__37520_SHARP_){
return (new Date(p1__37520_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map