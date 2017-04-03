// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26508 = arguments.length;
var i__22734__auto___26509 = (0);
while(true){
if((i__22734__auto___26509 < len__22733__auto___26508)){
args__22740__auto__.push((arguments[i__22734__auto___26509]));

var G__26510 = (i__22734__auto___26509 + (1));
i__22734__auto___26509 = G__26510;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((4) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__22741__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq26503){
var G__26504 = cljs.core.first.call(null,seq26503);
var seq26503__$1 = cljs.core.next.call(null,seq26503);
var G__26505 = cljs.core.first.call(null,seq26503__$1);
var seq26503__$2 = cljs.core.next.call(null,seq26503__$1);
var G__26506 = cljs.core.first.call(null,seq26503__$2);
var seq26503__$3 = cljs.core.next.call(null,seq26503__$2);
var G__26507 = cljs.core.first.call(null,seq26503__$3);
var seq26503__$4 = cljs.core.next.call(null,seq26503__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__26504,G__26505,G__26506,G__26507,seq26503__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26519 = arguments.length;
var i__22734__auto___26520 = (0);
while(true){
if((i__22734__auto___26520 < len__22733__auto___26519)){
args__22740__auto__.push((arguments[i__22734__auto___26520]));

var G__26521 = (i__22734__auto___26520 + (1));
i__22734__auto___26520 = G__26521;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26470__auto__,rest__26471__auto__){
var convert_case__26472__auto__ = (function (p1__26469__26473__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__26469__26473__auto__,rest__26471__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26470__auto__,convert_case__26472__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq26511){
var G__26512 = cljs.core.first.call(null,seq26511);
var seq26511__$1 = cljs.core.next.call(null,seq26511);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__26512,seq26511__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26522 = arguments.length;
var i__22734__auto___26523 = (0);
while(true){
if((i__22734__auto___26523 < len__22733__auto___26522)){
args__22740__auto__.push((arguments[i__22734__auto___26523]));

var G__26524 = (i__22734__auto___26523 + (1));
i__22734__auto___26523 = G__26524;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq26513){
var G__26514 = cljs.core.first.call(null,seq26513);
var seq26513__$1 = cljs.core.next.call(null,seq26513);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__26514,seq26513__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26525 = arguments.length;
var i__22734__auto___26526 = (0);
while(true){
if((i__22734__auto___26526 < len__22733__auto___26525)){
args__22740__auto__.push((arguments[i__22734__auto___26526]));

var G__26527 = (i__22734__auto___26526 + (1));
i__22734__auto___26526 = G__26527;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq26515){
var G__26516 = cljs.core.first.call(null,seq26515);
var seq26515__$1 = cljs.core.next.call(null,seq26515);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__26516,seq26515__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26528 = arguments.length;
var i__22734__auto___26529 = (0);
while(true){
if((i__22734__auto___26529 < len__22733__auto___26528)){
args__22740__auto__.push((arguments[i__22734__auto___26529]));

var G__26530 = (i__22734__auto___26529 + (1));
i__22734__auto___26529 = G__26530;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq26517){
var G__26518 = cljs.core.first.call(null,seq26517);
var seq26517__$1 = cljs.core.next.call(null,seq26517);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__26518,seq26517__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26539 = arguments.length;
var i__22734__auto___26540 = (0);
while(true){
if((i__22734__auto___26540 < len__22733__auto___26539)){
args__22740__auto__.push((arguments[i__22734__auto___26540]));

var G__26541 = (i__22734__auto___26540 + (1));
i__22734__auto___26540 = G__26541;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26470__auto__,rest__26471__auto__){
var convert_case__26472__auto__ = (function (p1__26469__26473__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__26469__26473__auto__,rest__26471__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26470__auto__,convert_case__26472__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq26531){
var G__26532 = cljs.core.first.call(null,seq26531);
var seq26531__$1 = cljs.core.next.call(null,seq26531);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__26532,seq26531__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26542 = arguments.length;
var i__22734__auto___26543 = (0);
while(true){
if((i__22734__auto___26543 < len__22733__auto___26542)){
args__22740__auto__.push((arguments[i__22734__auto___26543]));

var G__26544 = (i__22734__auto___26543 + (1));
i__22734__auto___26543 = G__26544;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq26533){
var G__26534 = cljs.core.first.call(null,seq26533);
var seq26533__$1 = cljs.core.next.call(null,seq26533);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__26534,seq26533__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26545 = arguments.length;
var i__22734__auto___26546 = (0);
while(true){
if((i__22734__auto___26546 < len__22733__auto___26545)){
args__22740__auto__.push((arguments[i__22734__auto___26546]));

var G__26547 = (i__22734__auto___26546 + (1));
i__22734__auto___26546 = G__26547;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq26535){
var G__26536 = cljs.core.first.call(null,seq26535);
var seq26535__$1 = cljs.core.next.call(null,seq26535);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__26536,seq26535__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26548 = arguments.length;
var i__22734__auto___26549 = (0);
while(true){
if((i__22734__auto___26549 < len__22733__auto___26548)){
args__22740__auto__.push((arguments[i__22734__auto___26549]));

var G__26550 = (i__22734__auto___26549 + (1));
i__22734__auto___26549 = G__26550;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq26537){
var G__26538 = cljs.core.first.call(null,seq26537);
var seq26537__$1 = cljs.core.next.call(null,seq26537);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__26538,seq26537__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26559 = arguments.length;
var i__22734__auto___26560 = (0);
while(true){
if((i__22734__auto___26560 < len__22733__auto___26559)){
args__22740__auto__.push((arguments[i__22734__auto___26560]));

var G__26561 = (i__22734__auto___26560 + (1));
i__22734__auto___26560 = G__26561;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26470__auto__,rest__26471__auto__){
var convert_case__26472__auto__ = (function (p1__26469__26473__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__26469__26473__auto__,rest__26471__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26470__auto__,convert_case__26472__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq26551){
var G__26552 = cljs.core.first.call(null,seq26551);
var seq26551__$1 = cljs.core.next.call(null,seq26551);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__26552,seq26551__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26562 = arguments.length;
var i__22734__auto___26563 = (0);
while(true){
if((i__22734__auto___26563 < len__22733__auto___26562)){
args__22740__auto__.push((arguments[i__22734__auto___26563]));

var G__26564 = (i__22734__auto___26563 + (1));
i__22734__auto___26563 = G__26564;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq26553){
var G__26554 = cljs.core.first.call(null,seq26553);
var seq26553__$1 = cljs.core.next.call(null,seq26553);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__26554,seq26553__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26565 = arguments.length;
var i__22734__auto___26566 = (0);
while(true){
if((i__22734__auto___26566 < len__22733__auto___26565)){
args__22740__auto__.push((arguments[i__22734__auto___26566]));

var G__26567 = (i__22734__auto___26566 + (1));
i__22734__auto___26566 = G__26567;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq26555){
var G__26556 = cljs.core.first.call(null,seq26555);
var seq26555__$1 = cljs.core.next.call(null,seq26555);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__26556,seq26555__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26568 = arguments.length;
var i__22734__auto___26569 = (0);
while(true){
if((i__22734__auto___26569 < len__22733__auto___26568)){
args__22740__auto__.push((arguments[i__22734__auto___26569]));

var G__26570 = (i__22734__auto___26569 + (1));
i__22734__auto___26569 = G__26570;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq26557){
var G__26558 = cljs.core.first.call(null,seq26557);
var seq26557__$1 = cljs.core.next.call(null,seq26557);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__26558,seq26557__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26579 = arguments.length;
var i__22734__auto___26580 = (0);
while(true){
if((i__22734__auto___26580 < len__22733__auto___26579)){
args__22740__auto__.push((arguments[i__22734__auto___26580]));

var G__26581 = (i__22734__auto___26580 + (1));
i__22734__auto___26580 = G__26581;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__26470__auto__,rest__26471__auto__){
var convert_case__26472__auto__ = (function (p1__26469__26473__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__26469__26473__auto__,rest__26471__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26470__auto__,convert_case__26472__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq26571){
var G__26572 = cljs.core.first.call(null,seq26571);
var seq26571__$1 = cljs.core.next.call(null,seq26571);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__26572,seq26571__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26582 = arguments.length;
var i__22734__auto___26583 = (0);
while(true){
if((i__22734__auto___26583 < len__22733__auto___26582)){
args__22740__auto__.push((arguments[i__22734__auto___26583]));

var G__26584 = (i__22734__auto___26583 + (1));
i__22734__auto___26583 = G__26584;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq26573){
var G__26574 = cljs.core.first.call(null,seq26573);
var seq26573__$1 = cljs.core.next.call(null,seq26573);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__26574,seq26573__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26585 = arguments.length;
var i__22734__auto___26586 = (0);
while(true){
if((i__22734__auto___26586 < len__22733__auto___26585)){
args__22740__auto__.push((arguments[i__22734__auto___26586]));

var G__26587 = (i__22734__auto___26586 + (1));
i__22734__auto___26586 = G__26587;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq26575){
var G__26576 = cljs.core.first.call(null,seq26575);
var seq26575__$1 = cljs.core.next.call(null,seq26575);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__26576,seq26575__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26588 = arguments.length;
var i__22734__auto___26589 = (0);
while(true){
if((i__22734__auto___26589 < len__22733__auto___26588)){
args__22740__auto__.push((arguments[i__22734__auto___26589]));

var G__26590 = (i__22734__auto___26589 + (1));
i__22734__auto___26589 = G__26590;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq26577){
var G__26578 = cljs.core.first.call(null,seq26577);
var seq26577__$1 = cljs.core.next.call(null,seq26577);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__26578,seq26577__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26599 = arguments.length;
var i__22734__auto___26600 = (0);
while(true){
if((i__22734__auto___26600 < len__22733__auto___26599)){
args__22740__auto__.push((arguments[i__22734__auto___26600]));

var G__26601 = (i__22734__auto___26600 + (1));
i__22734__auto___26600 = G__26601;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26470__auto__,rest__26471__auto__){
var convert_case__26472__auto__ = (function (p1__26469__26473__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__26469__26473__auto__,rest__26471__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26470__auto__,convert_case__26472__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq26591){
var G__26592 = cljs.core.first.call(null,seq26591);
var seq26591__$1 = cljs.core.next.call(null,seq26591);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__26592,seq26591__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26602 = arguments.length;
var i__22734__auto___26603 = (0);
while(true){
if((i__22734__auto___26603 < len__22733__auto___26602)){
args__22740__auto__.push((arguments[i__22734__auto___26603]));

var G__26604 = (i__22734__auto___26603 + (1));
i__22734__auto___26603 = G__26604;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq26593){
var G__26594 = cljs.core.first.call(null,seq26593);
var seq26593__$1 = cljs.core.next.call(null,seq26593);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__26594,seq26593__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26605 = arguments.length;
var i__22734__auto___26606 = (0);
while(true){
if((i__22734__auto___26606 < len__22733__auto___26605)){
args__22740__auto__.push((arguments[i__22734__auto___26606]));

var G__26607 = (i__22734__auto___26606 + (1));
i__22734__auto___26606 = G__26607;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq26595){
var G__26596 = cljs.core.first.call(null,seq26595);
var seq26595__$1 = cljs.core.next.call(null,seq26595);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__26596,seq26595__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26608 = arguments.length;
var i__22734__auto___26609 = (0);
while(true){
if((i__22734__auto___26609 < len__22733__auto___26608)){
args__22740__auto__.push((arguments[i__22734__auto___26609]));

var G__26610 = (i__22734__auto___26609 + (1));
i__22734__auto___26609 = G__26610;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq26597){
var G__26598 = cljs.core.first.call(null,seq26597);
var seq26597__$1 = cljs.core.next.call(null,seq26597);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__26598,seq26597__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26619 = arguments.length;
var i__22734__auto___26620 = (0);
while(true){
if((i__22734__auto___26620 < len__22733__auto___26619)){
args__22740__auto__.push((arguments[i__22734__auto___26620]));

var G__26621 = (i__22734__auto___26620 + (1));
i__22734__auto___26620 = G__26621;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26470__auto__,rest__26471__auto__){
var convert_case__26472__auto__ = (function (p1__26469__26473__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__26469__26473__auto__,rest__26471__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26470__auto__,convert_case__26472__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq26611){
var G__26612 = cljs.core.first.call(null,seq26611);
var seq26611__$1 = cljs.core.next.call(null,seq26611);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__26612,seq26611__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26622 = arguments.length;
var i__22734__auto___26623 = (0);
while(true){
if((i__22734__auto___26623 < len__22733__auto___26622)){
args__22740__auto__.push((arguments[i__22734__auto___26623]));

var G__26624 = (i__22734__auto___26623 + (1));
i__22734__auto___26623 = G__26624;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq26613){
var G__26614 = cljs.core.first.call(null,seq26613);
var seq26613__$1 = cljs.core.next.call(null,seq26613);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__26614,seq26613__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26625 = arguments.length;
var i__22734__auto___26626 = (0);
while(true){
if((i__22734__auto___26626 < len__22733__auto___26625)){
args__22740__auto__.push((arguments[i__22734__auto___26626]));

var G__26627 = (i__22734__auto___26626 + (1));
i__22734__auto___26626 = G__26627;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq26615){
var G__26616 = cljs.core.first.call(null,seq26615);
var seq26615__$1 = cljs.core.next.call(null,seq26615);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__26616,seq26615__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26628 = arguments.length;
var i__22734__auto___26629 = (0);
while(true){
if((i__22734__auto___26629 < len__22733__auto___26628)){
args__22740__auto__.push((arguments[i__22734__auto___26629]));

var G__26630 = (i__22734__auto___26629 + (1));
i__22734__auto___26629 = G__26630;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq26617){
var G__26618 = cljs.core.first.call(null,seq26617);
var seq26617__$1 = cljs.core.next.call(null,seq26617);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__26618,seq26617__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26639 = arguments.length;
var i__22734__auto___26640 = (0);
while(true){
if((i__22734__auto___26640 < len__22733__auto___26639)){
args__22740__auto__.push((arguments[i__22734__auto___26640]));

var G__26641 = (i__22734__auto___26640 + (1));
i__22734__auto___26640 = G__26641;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26470__auto__,rest__26471__auto__){
var convert_case__26472__auto__ = (function (p1__26469__26473__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__26469__26473__auto__,rest__26471__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__26470__auto__,convert_case__26472__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq26631){
var G__26632 = cljs.core.first.call(null,seq26631);
var seq26631__$1 = cljs.core.next.call(null,seq26631);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__26632,seq26631__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26642 = arguments.length;
var i__22734__auto___26643 = (0);
while(true){
if((i__22734__auto___26643 < len__22733__auto___26642)){
args__22740__auto__.push((arguments[i__22734__auto___26643]));

var G__26644 = (i__22734__auto___26643 + (1));
i__22734__auto___26643 = G__26644;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq26633){
var G__26634 = cljs.core.first.call(null,seq26633);
var seq26633__$1 = cljs.core.next.call(null,seq26633);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__26634,seq26633__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26645 = arguments.length;
var i__22734__auto___26646 = (0);
while(true){
if((i__22734__auto___26646 < len__22733__auto___26645)){
args__22740__auto__.push((arguments[i__22734__auto___26646]));

var G__26647 = (i__22734__auto___26646 + (1));
i__22734__auto___26646 = G__26647;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq26635){
var G__26636 = cljs.core.first.call(null,seq26635);
var seq26635__$1 = cljs.core.next.call(null,seq26635);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__26636,seq26635__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___26648 = arguments.length;
var i__22734__auto___26649 = (0);
while(true){
if((i__22734__auto___26649 < len__22733__auto___26648)){
args__22740__auto__.push((arguments[i__22734__auto___26649]));

var G__26650 = (i__22734__auto___26649 + (1));
i__22734__auto___26649 = G__26650;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26475__auto__,rest__26476__auto__){
if(!((s__26475__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26475__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__26475__auto__),rest__26476__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq26637){
var G__26638 = cljs.core.first.call(null,seq26637);
var seq26637__$1 = cljs.core.next.call(null,seq26637);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__26638,seq26637__$1);
});


//# sourceMappingURL=core.js.map?rel=1490992942082