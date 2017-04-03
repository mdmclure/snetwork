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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__22740__auto__ = [];
var len__22733__auto___38115 = arguments.length;
var i__22734__auto___38116 = (0);
while(true){
if((i__22734__auto___38116 < len__22733__auto___38115)){
args__22740__auto__.push((arguments[i__22734__auto___38116]));

var G__38117 = (i__22734__auto___38116 + (1));
i__22734__auto___38116 = G__38117;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq38114){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38114));
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
var args__22740__auto__ = [];
var len__22733__auto___38119 = arguments.length;
var i__22734__auto___38120 = (0);
while(true){
if((i__22734__auto___38120 < len__22733__auto___38119)){
args__22740__auto__.push((arguments[i__22734__auto___38120]));

var G__38121 = (i__22734__auto___38120 + (1));
i__22734__auto___38120 = G__38121;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq38118){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38118));
});

var g_QMARK__38122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_38123 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__38122){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__38122))
,null));
var mkg_38124 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__38122,g_38123){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__38122,g_38123))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__38122,g_38123,mkg_38124){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38122).call(null,x);
});})(g_QMARK__38122,g_38123,mkg_38124))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__38122,g_38123,mkg_38124){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_38124).call(null,gfn);
});})(g_QMARK__38122,g_38123,mkg_38124))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__38122,g_38123,mkg_38124){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_38123).call(null,generator);
});})(g_QMARK__38122,g_38123,mkg_38124))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__38086__auto___38143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__38086__auto___38143){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38144 = arguments.length;
var i__22734__auto___38145 = (0);
while(true){
if((i__22734__auto___38145 < len__22733__auto___38144)){
args__22740__auto__.push((arguments[i__22734__auto___38145]));

var G__38146 = (i__22734__auto___38145 + (1));
i__22734__auto___38145 = G__38146;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38143))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38143){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38143),args);
});})(g__38086__auto___38143))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__38086__auto___38143){
return (function (seq38125){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38125));
});})(g__38086__auto___38143))
;


var g__38086__auto___38147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__38086__auto___38147){
return (function cljs$spec$impl$gen$list(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38148 = arguments.length;
var i__22734__auto___38149 = (0);
while(true){
if((i__22734__auto___38149 < len__22733__auto___38148)){
args__22740__auto__.push((arguments[i__22734__auto___38149]));

var G__38150 = (i__22734__auto___38149 + (1));
i__22734__auto___38149 = G__38150;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38147))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38147){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38147),args);
});})(g__38086__auto___38147))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__38086__auto___38147){
return (function (seq38126){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38126));
});})(g__38086__auto___38147))
;


var g__38086__auto___38151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__38086__auto___38151){
return (function cljs$spec$impl$gen$map(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38152 = arguments.length;
var i__22734__auto___38153 = (0);
while(true){
if((i__22734__auto___38153 < len__22733__auto___38152)){
args__22740__auto__.push((arguments[i__22734__auto___38153]));

var G__38154 = (i__22734__auto___38153 + (1));
i__22734__auto___38153 = G__38154;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38151))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38151){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38151),args);
});})(g__38086__auto___38151))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__38086__auto___38151){
return (function (seq38127){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38127));
});})(g__38086__auto___38151))
;


var g__38086__auto___38155 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__38086__auto___38155){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38156 = arguments.length;
var i__22734__auto___38157 = (0);
while(true){
if((i__22734__auto___38157 < len__22733__auto___38156)){
args__22740__auto__.push((arguments[i__22734__auto___38157]));

var G__38158 = (i__22734__auto___38157 + (1));
i__22734__auto___38157 = G__38158;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38155))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38155){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38155),args);
});})(g__38086__auto___38155))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__38086__auto___38155){
return (function (seq38128){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38128));
});})(g__38086__auto___38155))
;


var g__38086__auto___38159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__38086__auto___38159){
return (function cljs$spec$impl$gen$set(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38160 = arguments.length;
var i__22734__auto___38161 = (0);
while(true){
if((i__22734__auto___38161 < len__22733__auto___38160)){
args__22740__auto__.push((arguments[i__22734__auto___38161]));

var G__38162 = (i__22734__auto___38161 + (1));
i__22734__auto___38161 = G__38162;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38159))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38159){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38159),args);
});})(g__38086__auto___38159))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__38086__auto___38159){
return (function (seq38129){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38129));
});})(g__38086__auto___38159))
;


var g__38086__auto___38163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__38086__auto___38163){
return (function cljs$spec$impl$gen$vector(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38164 = arguments.length;
var i__22734__auto___38165 = (0);
while(true){
if((i__22734__auto___38165 < len__22733__auto___38164)){
args__22740__auto__.push((arguments[i__22734__auto___38165]));

var G__38166 = (i__22734__auto___38165 + (1));
i__22734__auto___38165 = G__38166;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38163))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38163){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38163),args);
});})(g__38086__auto___38163))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__38086__auto___38163){
return (function (seq38130){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38130));
});})(g__38086__auto___38163))
;


var g__38086__auto___38167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__38086__auto___38167){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38168 = arguments.length;
var i__22734__auto___38169 = (0);
while(true){
if((i__22734__auto___38169 < len__22733__auto___38168)){
args__22740__auto__.push((arguments[i__22734__auto___38169]));

var G__38170 = (i__22734__auto___38169 + (1));
i__22734__auto___38169 = G__38170;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38167))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38167){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38167),args);
});})(g__38086__auto___38167))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__38086__auto___38167){
return (function (seq38131){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38131));
});})(g__38086__auto___38167))
;


var g__38086__auto___38171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__38086__auto___38171){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38172 = arguments.length;
var i__22734__auto___38173 = (0);
while(true){
if((i__22734__auto___38173 < len__22733__auto___38172)){
args__22740__auto__.push((arguments[i__22734__auto___38173]));

var G__38174 = (i__22734__auto___38173 + (1));
i__22734__auto___38173 = G__38174;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38171))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38171),args);
});})(g__38086__auto___38171))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__38086__auto___38171){
return (function (seq38132){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38132));
});})(g__38086__auto___38171))
;


var g__38086__auto___38175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__38086__auto___38175){
return (function cljs$spec$impl$gen$elements(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38176 = arguments.length;
var i__22734__auto___38177 = (0);
while(true){
if((i__22734__auto___38177 < len__22733__auto___38176)){
args__22740__auto__.push((arguments[i__22734__auto___38177]));

var G__38178 = (i__22734__auto___38177 + (1));
i__22734__auto___38177 = G__38178;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38175))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38175),args);
});})(g__38086__auto___38175))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__38086__auto___38175){
return (function (seq38133){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38133));
});})(g__38086__auto___38175))
;


var g__38086__auto___38179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__38086__auto___38179){
return (function cljs$spec$impl$gen$bind(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38180 = arguments.length;
var i__22734__auto___38181 = (0);
while(true){
if((i__22734__auto___38181 < len__22733__auto___38180)){
args__22740__auto__.push((arguments[i__22734__auto___38181]));

var G__38182 = (i__22734__auto___38181 + (1));
i__22734__auto___38181 = G__38182;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38179))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38179),args);
});})(g__38086__auto___38179))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__38086__auto___38179){
return (function (seq38134){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38134));
});})(g__38086__auto___38179))
;


var g__38086__auto___38183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__38086__auto___38183){
return (function cljs$spec$impl$gen$choose(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38184 = arguments.length;
var i__22734__auto___38185 = (0);
while(true){
if((i__22734__auto___38185 < len__22733__auto___38184)){
args__22740__auto__.push((arguments[i__22734__auto___38185]));

var G__38186 = (i__22734__auto___38185 + (1));
i__22734__auto___38185 = G__38186;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38183))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38183),args);
});})(g__38086__auto___38183))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__38086__auto___38183){
return (function (seq38135){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38135));
});})(g__38086__auto___38183))
;


var g__38086__auto___38187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__38086__auto___38187){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38188 = arguments.length;
var i__22734__auto___38189 = (0);
while(true){
if((i__22734__auto___38189 < len__22733__auto___38188)){
args__22740__auto__.push((arguments[i__22734__auto___38189]));

var G__38190 = (i__22734__auto___38189 + (1));
i__22734__auto___38189 = G__38190;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38187))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38187),args);
});})(g__38086__auto___38187))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__38086__auto___38187){
return (function (seq38136){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38136));
});})(g__38086__auto___38187))
;


var g__38086__auto___38191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__38086__auto___38191){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38192 = arguments.length;
var i__22734__auto___38193 = (0);
while(true){
if((i__22734__auto___38193 < len__22733__auto___38192)){
args__22740__auto__.push((arguments[i__22734__auto___38193]));

var G__38194 = (i__22734__auto___38193 + (1));
i__22734__auto___38193 = G__38194;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38191))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38191),args);
});})(g__38086__auto___38191))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__38086__auto___38191){
return (function (seq38137){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38137));
});})(g__38086__auto___38191))
;


var g__38086__auto___38195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__38086__auto___38195){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38196 = arguments.length;
var i__22734__auto___38197 = (0);
while(true){
if((i__22734__auto___38197 < len__22733__auto___38196)){
args__22740__auto__.push((arguments[i__22734__auto___38197]));

var G__38198 = (i__22734__auto___38197 + (1));
i__22734__auto___38197 = G__38198;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38195))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38195),args);
});})(g__38086__auto___38195))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__38086__auto___38195){
return (function (seq38138){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38138));
});})(g__38086__auto___38195))
;


var g__38086__auto___38199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__38086__auto___38199){
return (function cljs$spec$impl$gen$sample(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38200 = arguments.length;
var i__22734__auto___38201 = (0);
while(true){
if((i__22734__auto___38201 < len__22733__auto___38200)){
args__22740__auto__.push((arguments[i__22734__auto___38201]));

var G__38202 = (i__22734__auto___38201 + (1));
i__22734__auto___38201 = G__38202;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38199))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38199),args);
});})(g__38086__auto___38199))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__38086__auto___38199){
return (function (seq38139){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38139));
});})(g__38086__auto___38199))
;


var g__38086__auto___38203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__38086__auto___38203){
return (function cljs$spec$impl$gen$return(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38204 = arguments.length;
var i__22734__auto___38205 = (0);
while(true){
if((i__22734__auto___38205 < len__22733__auto___38204)){
args__22740__auto__.push((arguments[i__22734__auto___38205]));

var G__38206 = (i__22734__auto___38205 + (1));
i__22734__auto___38205 = G__38206;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38203))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38203),args);
});})(g__38086__auto___38203))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__38086__auto___38203){
return (function (seq38140){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38140));
});})(g__38086__auto___38203))
;


var g__38086__auto___38207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__38086__auto___38207){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38208 = arguments.length;
var i__22734__auto___38209 = (0);
while(true){
if((i__22734__auto___38209 < len__22733__auto___38208)){
args__22740__auto__.push((arguments[i__22734__auto___38209]));

var G__38210 = (i__22734__auto___38209 + (1));
i__22734__auto___38209 = G__38210;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38207))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38207),args);
});})(g__38086__auto___38207))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__38086__auto___38207){
return (function (seq38141){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38141));
});})(g__38086__auto___38207))
;


var g__38086__auto___38211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__38086__auto___38211){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38212 = arguments.length;
var i__22734__auto___38213 = (0);
while(true){
if((i__22734__auto___38213 < len__22733__auto___38212)){
args__22740__auto__.push((arguments[i__22734__auto___38213]));

var G__38214 = (i__22734__auto___38213 + (1));
i__22734__auto___38213 = G__38214;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38086__auto___38211))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38086__auto___38211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38086__auto___38211),args);
});})(g__38086__auto___38211))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__38086__auto___38211){
return (function (seq38142){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38142));
});})(g__38086__auto___38211))
;

var g__38099__auto___38236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__38099__auto___38236){
return (function cljs$spec$impl$gen$any(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38237 = arguments.length;
var i__22734__auto___38238 = (0);
while(true){
if((i__22734__auto___38238 < len__22733__auto___38237)){
args__22740__auto__.push((arguments[i__22734__auto___38238]));

var G__38239 = (i__22734__auto___38238 + (1));
i__22734__auto___38238 = G__38239;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38236))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38236){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38236);
});})(g__38099__auto___38236))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__38099__auto___38236){
return (function (seq38215){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38215));
});})(g__38099__auto___38236))
;


var g__38099__auto___38240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__38099__auto___38240){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38241 = arguments.length;
var i__22734__auto___38242 = (0);
while(true){
if((i__22734__auto___38242 < len__22733__auto___38241)){
args__22740__auto__.push((arguments[i__22734__auto___38242]));

var G__38243 = (i__22734__auto___38242 + (1));
i__22734__auto___38242 = G__38243;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38240))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38240){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38240);
});})(g__38099__auto___38240))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__38099__auto___38240){
return (function (seq38216){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38216));
});})(g__38099__auto___38240))
;


var g__38099__auto___38244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__38099__auto___38244){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38245 = arguments.length;
var i__22734__auto___38246 = (0);
while(true){
if((i__22734__auto___38246 < len__22733__auto___38245)){
args__22740__auto__.push((arguments[i__22734__auto___38246]));

var G__38247 = (i__22734__auto___38246 + (1));
i__22734__auto___38246 = G__38247;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38244))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38244){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38244);
});})(g__38099__auto___38244))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__38099__auto___38244){
return (function (seq38217){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38217));
});})(g__38099__auto___38244))
;


var g__38099__auto___38248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__38099__auto___38248){
return (function cljs$spec$impl$gen$char(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38249 = arguments.length;
var i__22734__auto___38250 = (0);
while(true){
if((i__22734__auto___38250 < len__22733__auto___38249)){
args__22740__auto__.push((arguments[i__22734__auto___38250]));

var G__38251 = (i__22734__auto___38250 + (1));
i__22734__auto___38250 = G__38251;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38248))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38248){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38248);
});})(g__38099__auto___38248))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__38099__auto___38248){
return (function (seq38218){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38218));
});})(g__38099__auto___38248))
;


var g__38099__auto___38252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__38099__auto___38252){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38253 = arguments.length;
var i__22734__auto___38254 = (0);
while(true){
if((i__22734__auto___38254 < len__22733__auto___38253)){
args__22740__auto__.push((arguments[i__22734__auto___38254]));

var G__38255 = (i__22734__auto___38254 + (1));
i__22734__auto___38254 = G__38255;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38252))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38252){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38252);
});})(g__38099__auto___38252))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__38099__auto___38252){
return (function (seq38219){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38219));
});})(g__38099__auto___38252))
;


var g__38099__auto___38256 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__38099__auto___38256){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38257 = arguments.length;
var i__22734__auto___38258 = (0);
while(true){
if((i__22734__auto___38258 < len__22733__auto___38257)){
args__22740__auto__.push((arguments[i__22734__auto___38258]));

var G__38259 = (i__22734__auto___38258 + (1));
i__22734__auto___38258 = G__38259;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38256))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38256){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38256);
});})(g__38099__auto___38256))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__38099__auto___38256){
return (function (seq38220){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38220));
});})(g__38099__auto___38256))
;


var g__38099__auto___38260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__38099__auto___38260){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38261 = arguments.length;
var i__22734__auto___38262 = (0);
while(true){
if((i__22734__auto___38262 < len__22733__auto___38261)){
args__22740__auto__.push((arguments[i__22734__auto___38262]));

var G__38263 = (i__22734__auto___38262 + (1));
i__22734__auto___38262 = G__38263;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38260))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38260){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38260);
});})(g__38099__auto___38260))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__38099__auto___38260){
return (function (seq38221){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38221));
});})(g__38099__auto___38260))
;


var g__38099__auto___38264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__38099__auto___38264){
return (function cljs$spec$impl$gen$double(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38265 = arguments.length;
var i__22734__auto___38266 = (0);
while(true){
if((i__22734__auto___38266 < len__22733__auto___38265)){
args__22740__auto__.push((arguments[i__22734__auto___38266]));

var G__38267 = (i__22734__auto___38266 + (1));
i__22734__auto___38266 = G__38267;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38264))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38264){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38264);
});})(g__38099__auto___38264))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__38099__auto___38264){
return (function (seq38222){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38222));
});})(g__38099__auto___38264))
;


var g__38099__auto___38268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__38099__auto___38268){
return (function cljs$spec$impl$gen$int(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38269 = arguments.length;
var i__22734__auto___38270 = (0);
while(true){
if((i__22734__auto___38270 < len__22733__auto___38269)){
args__22740__auto__.push((arguments[i__22734__auto___38270]));

var G__38271 = (i__22734__auto___38270 + (1));
i__22734__auto___38270 = G__38271;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38268))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38268){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38268);
});})(g__38099__auto___38268))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__38099__auto___38268){
return (function (seq38223){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38223));
});})(g__38099__auto___38268))
;


var g__38099__auto___38272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__38099__auto___38272){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38273 = arguments.length;
var i__22734__auto___38274 = (0);
while(true){
if((i__22734__auto___38274 < len__22733__auto___38273)){
args__22740__auto__.push((arguments[i__22734__auto___38274]));

var G__38275 = (i__22734__auto___38274 + (1));
i__22734__auto___38274 = G__38275;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38272))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38272){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38272);
});})(g__38099__auto___38272))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__38099__auto___38272){
return (function (seq38224){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38224));
});})(g__38099__auto___38272))
;


var g__38099__auto___38276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__38099__auto___38276){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38277 = arguments.length;
var i__22734__auto___38278 = (0);
while(true){
if((i__22734__auto___38278 < len__22733__auto___38277)){
args__22740__auto__.push((arguments[i__22734__auto___38278]));

var G__38279 = (i__22734__auto___38278 + (1));
i__22734__auto___38278 = G__38279;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38276))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38276){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38276);
});})(g__38099__auto___38276))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__38099__auto___38276){
return (function (seq38225){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38225));
});})(g__38099__auto___38276))
;


var g__38099__auto___38280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__38099__auto___38280){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38281 = arguments.length;
var i__22734__auto___38282 = (0);
while(true){
if((i__22734__auto___38282 < len__22733__auto___38281)){
args__22740__auto__.push((arguments[i__22734__auto___38282]));

var G__38283 = (i__22734__auto___38282 + (1));
i__22734__auto___38282 = G__38283;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38280))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38280){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38280);
});})(g__38099__auto___38280))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__38099__auto___38280){
return (function (seq38226){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38226));
});})(g__38099__auto___38280))
;


var g__38099__auto___38284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__38099__auto___38284){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38285 = arguments.length;
var i__22734__auto___38286 = (0);
while(true){
if((i__22734__auto___38286 < len__22733__auto___38285)){
args__22740__auto__.push((arguments[i__22734__auto___38286]));

var G__38287 = (i__22734__auto___38286 + (1));
i__22734__auto___38286 = G__38287;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38284))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38284){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38284);
});})(g__38099__auto___38284))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__38099__auto___38284){
return (function (seq38227){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38227));
});})(g__38099__auto___38284))
;


var g__38099__auto___38288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__38099__auto___38288){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38289 = arguments.length;
var i__22734__auto___38290 = (0);
while(true){
if((i__22734__auto___38290 < len__22733__auto___38289)){
args__22740__auto__.push((arguments[i__22734__auto___38290]));

var G__38291 = (i__22734__auto___38290 + (1));
i__22734__auto___38290 = G__38291;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38288))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38288){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38288);
});})(g__38099__auto___38288))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__38099__auto___38288){
return (function (seq38228){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38228));
});})(g__38099__auto___38288))
;


var g__38099__auto___38292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__38099__auto___38292){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38293 = arguments.length;
var i__22734__auto___38294 = (0);
while(true){
if((i__22734__auto___38294 < len__22733__auto___38293)){
args__22740__auto__.push((arguments[i__22734__auto___38294]));

var G__38295 = (i__22734__auto___38294 + (1));
i__22734__auto___38294 = G__38295;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38292))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38292){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38292);
});})(g__38099__auto___38292))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__38099__auto___38292){
return (function (seq38229){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38229));
});})(g__38099__auto___38292))
;


var g__38099__auto___38296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__38099__auto___38296){
return (function cljs$spec$impl$gen$string(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38297 = arguments.length;
var i__22734__auto___38298 = (0);
while(true){
if((i__22734__auto___38298 < len__22733__auto___38297)){
args__22740__auto__.push((arguments[i__22734__auto___38298]));

var G__38299 = (i__22734__auto___38298 + (1));
i__22734__auto___38298 = G__38299;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38296))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38296){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38296);
});})(g__38099__auto___38296))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__38099__auto___38296){
return (function (seq38230){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38230));
});})(g__38099__auto___38296))
;


var g__38099__auto___38300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__38099__auto___38300){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38301 = arguments.length;
var i__22734__auto___38302 = (0);
while(true){
if((i__22734__auto___38302 < len__22733__auto___38301)){
args__22740__auto__.push((arguments[i__22734__auto___38302]));

var G__38303 = (i__22734__auto___38302 + (1));
i__22734__auto___38302 = G__38303;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38300))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38300){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38300);
});})(g__38099__auto___38300))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__38099__auto___38300){
return (function (seq38231){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38231));
});})(g__38099__auto___38300))
;


var g__38099__auto___38304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__38099__auto___38304){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38305 = arguments.length;
var i__22734__auto___38306 = (0);
while(true){
if((i__22734__auto___38306 < len__22733__auto___38305)){
args__22740__auto__.push((arguments[i__22734__auto___38306]));

var G__38307 = (i__22734__auto___38306 + (1));
i__22734__auto___38306 = G__38307;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38304))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38304){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38304);
});})(g__38099__auto___38304))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__38099__auto___38304){
return (function (seq38232){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38232));
});})(g__38099__auto___38304))
;


var g__38099__auto___38308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__38099__auto___38308){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38309 = arguments.length;
var i__22734__auto___38310 = (0);
while(true){
if((i__22734__auto___38310 < len__22733__auto___38309)){
args__22740__auto__.push((arguments[i__22734__auto___38310]));

var G__38311 = (i__22734__auto___38310 + (1));
i__22734__auto___38310 = G__38311;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38308))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38308){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38308);
});})(g__38099__auto___38308))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__38099__auto___38308){
return (function (seq38233){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38233));
});})(g__38099__auto___38308))
;


var g__38099__auto___38312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__38099__auto___38312){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38313 = arguments.length;
var i__22734__auto___38314 = (0);
while(true){
if((i__22734__auto___38314 < len__22733__auto___38313)){
args__22740__auto__.push((arguments[i__22734__auto___38314]));

var G__38315 = (i__22734__auto___38314 + (1));
i__22734__auto___38314 = G__38315;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38312))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38312){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38312);
});})(g__38099__auto___38312))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__38099__auto___38312){
return (function (seq38234){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38234));
});})(g__38099__auto___38312))
;


var g__38099__auto___38316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__38099__auto___38316){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38317 = arguments.length;
var i__22734__auto___38318 = (0);
while(true){
if((i__22734__auto___38318 < len__22733__auto___38317)){
args__22740__auto__.push((arguments[i__22734__auto___38318]));

var G__38319 = (i__22734__auto___38318 + (1));
i__22734__auto___38318 = G__38319;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});})(g__38099__auto___38316))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38099__auto___38316){
return (function (args){
return cljs.core.deref.call(null,g__38099__auto___38316);
});})(g__38099__auto___38316))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__38099__auto___38316){
return (function (seq38235){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38235));
});})(g__38099__auto___38316))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__22740__auto__ = [];
var len__22733__auto___38322 = arguments.length;
var i__22734__auto___38323 = (0);
while(true){
if((i__22734__auto___38323 < len__22733__auto___38322)){
args__22740__auto__.push((arguments[i__22734__auto___38323]));

var G__38324 = (i__22734__auto___38323 + (1));
i__22734__auto___38323 = G__38324;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__38320_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38320_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq38321){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38321));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__38325_SHARP_){
return (new Date(p1__38325_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1490992950289