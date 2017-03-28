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
var len__22733__auto___31531 = arguments.length;
var i__22734__auto___31532 = (0);
while(true){
if((i__22734__auto___31532 < len__22733__auto___31531)){
args__22740__auto__.push((arguments[i__22734__auto___31532]));

var G__31533 = (i__22734__auto___31532 + (1));
i__22734__auto___31532 = G__31533;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq31526){
var G__31527 = cljs.core.first.call(null,seq31526);
var seq31526__$1 = cljs.core.next.call(null,seq31526);
var G__31528 = cljs.core.first.call(null,seq31526__$1);
var seq31526__$2 = cljs.core.next.call(null,seq31526__$1);
var G__31529 = cljs.core.first.call(null,seq31526__$2);
var seq31526__$3 = cljs.core.next.call(null,seq31526__$2);
var G__31530 = cljs.core.first.call(null,seq31526__$3);
var seq31526__$4 = cljs.core.next.call(null,seq31526__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__31527,G__31528,G__31529,G__31530,seq31526__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31542 = arguments.length;
var i__22734__auto___31543 = (0);
while(true){
if((i__22734__auto___31543 < len__22733__auto___31542)){
args__22740__auto__.push((arguments[i__22734__auto___31543]));

var G__31544 = (i__22734__auto___31543 + (1));
i__22734__auto___31543 = G__31544;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__31493__auto__,rest__31494__auto__){
var convert_case__31495__auto__ = (function (p1__31492__31496__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__31492__31496__auto__,rest__31494__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31493__auto__,convert_case__31495__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq31534){
var G__31535 = cljs.core.first.call(null,seq31534);
var seq31534__$1 = cljs.core.next.call(null,seq31534);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__31535,seq31534__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31545 = arguments.length;
var i__22734__auto___31546 = (0);
while(true){
if((i__22734__auto___31546 < len__22733__auto___31545)){
args__22740__auto__.push((arguments[i__22734__auto___31546]));

var G__31547 = (i__22734__auto___31546 + (1));
i__22734__auto___31546 = G__31547;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq31536){
var G__31537 = cljs.core.first.call(null,seq31536);
var seq31536__$1 = cljs.core.next.call(null,seq31536);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__31537,seq31536__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31548 = arguments.length;
var i__22734__auto___31549 = (0);
while(true){
if((i__22734__auto___31549 < len__22733__auto___31548)){
args__22740__auto__.push((arguments[i__22734__auto___31549]));

var G__31550 = (i__22734__auto___31549 + (1));
i__22734__auto___31549 = G__31550;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq31538){
var G__31539 = cljs.core.first.call(null,seq31538);
var seq31538__$1 = cljs.core.next.call(null,seq31538);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__31539,seq31538__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31551 = arguments.length;
var i__22734__auto___31552 = (0);
while(true){
if((i__22734__auto___31552 < len__22733__auto___31551)){
args__22740__auto__.push((arguments[i__22734__auto___31552]));

var G__31553 = (i__22734__auto___31552 + (1));
i__22734__auto___31552 = G__31553;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq31540){
var G__31541 = cljs.core.first.call(null,seq31540);
var seq31540__$1 = cljs.core.next.call(null,seq31540);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__31541,seq31540__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31562 = arguments.length;
var i__22734__auto___31563 = (0);
while(true){
if((i__22734__auto___31563 < len__22733__auto___31562)){
args__22740__auto__.push((arguments[i__22734__auto___31563]));

var G__31564 = (i__22734__auto___31563 + (1));
i__22734__auto___31563 = G__31564;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31493__auto__,rest__31494__auto__){
var convert_case__31495__auto__ = (function (p1__31492__31496__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__31492__31496__auto__,rest__31494__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31493__auto__,convert_case__31495__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq31554){
var G__31555 = cljs.core.first.call(null,seq31554);
var seq31554__$1 = cljs.core.next.call(null,seq31554);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__31555,seq31554__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31565 = arguments.length;
var i__22734__auto___31566 = (0);
while(true){
if((i__22734__auto___31566 < len__22733__auto___31565)){
args__22740__auto__.push((arguments[i__22734__auto___31566]));

var G__31567 = (i__22734__auto___31566 + (1));
i__22734__auto___31566 = G__31567;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq31556){
var G__31557 = cljs.core.first.call(null,seq31556);
var seq31556__$1 = cljs.core.next.call(null,seq31556);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__31557,seq31556__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31568 = arguments.length;
var i__22734__auto___31569 = (0);
while(true){
if((i__22734__auto___31569 < len__22733__auto___31568)){
args__22740__auto__.push((arguments[i__22734__auto___31569]));

var G__31570 = (i__22734__auto___31569 + (1));
i__22734__auto___31569 = G__31570;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq31558){
var G__31559 = cljs.core.first.call(null,seq31558);
var seq31558__$1 = cljs.core.next.call(null,seq31558);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__31559,seq31558__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31571 = arguments.length;
var i__22734__auto___31572 = (0);
while(true){
if((i__22734__auto___31572 < len__22733__auto___31571)){
args__22740__auto__.push((arguments[i__22734__auto___31572]));

var G__31573 = (i__22734__auto___31572 + (1));
i__22734__auto___31572 = G__31573;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq31560){
var G__31561 = cljs.core.first.call(null,seq31560);
var seq31560__$1 = cljs.core.next.call(null,seq31560);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__31561,seq31560__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31582 = arguments.length;
var i__22734__auto___31583 = (0);
while(true){
if((i__22734__auto___31583 < len__22733__auto___31582)){
args__22740__auto__.push((arguments[i__22734__auto___31583]));

var G__31584 = (i__22734__auto___31583 + (1));
i__22734__auto___31583 = G__31584;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__31493__auto__,rest__31494__auto__){
var convert_case__31495__auto__ = (function (p1__31492__31496__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__31492__31496__auto__,rest__31494__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31493__auto__,convert_case__31495__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq31574){
var G__31575 = cljs.core.first.call(null,seq31574);
var seq31574__$1 = cljs.core.next.call(null,seq31574);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__31575,seq31574__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31585 = arguments.length;
var i__22734__auto___31586 = (0);
while(true){
if((i__22734__auto___31586 < len__22733__auto___31585)){
args__22740__auto__.push((arguments[i__22734__auto___31586]));

var G__31587 = (i__22734__auto___31586 + (1));
i__22734__auto___31586 = G__31587;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq31576){
var G__31577 = cljs.core.first.call(null,seq31576);
var seq31576__$1 = cljs.core.next.call(null,seq31576);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__31577,seq31576__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31588 = arguments.length;
var i__22734__auto___31589 = (0);
while(true){
if((i__22734__auto___31589 < len__22733__auto___31588)){
args__22740__auto__.push((arguments[i__22734__auto___31589]));

var G__31590 = (i__22734__auto___31589 + (1));
i__22734__auto___31589 = G__31590;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq31578){
var G__31579 = cljs.core.first.call(null,seq31578);
var seq31578__$1 = cljs.core.next.call(null,seq31578);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__31579,seq31578__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31591 = arguments.length;
var i__22734__auto___31592 = (0);
while(true){
if((i__22734__auto___31592 < len__22733__auto___31591)){
args__22740__auto__.push((arguments[i__22734__auto___31592]));

var G__31593 = (i__22734__auto___31592 + (1));
i__22734__auto___31592 = G__31593;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq31580){
var G__31581 = cljs.core.first.call(null,seq31580);
var seq31580__$1 = cljs.core.next.call(null,seq31580);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__31581,seq31580__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31602 = arguments.length;
var i__22734__auto___31603 = (0);
while(true){
if((i__22734__auto___31603 < len__22733__auto___31602)){
args__22740__auto__.push((arguments[i__22734__auto___31603]));

var G__31604 = (i__22734__auto___31603 + (1));
i__22734__auto___31603 = G__31604;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__31493__auto__,rest__31494__auto__){
var convert_case__31495__auto__ = (function (p1__31492__31496__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__31492__31496__auto__,rest__31494__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31493__auto__,convert_case__31495__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq31594){
var G__31595 = cljs.core.first.call(null,seq31594);
var seq31594__$1 = cljs.core.next.call(null,seq31594);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__31595,seq31594__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31605 = arguments.length;
var i__22734__auto___31606 = (0);
while(true){
if((i__22734__auto___31606 < len__22733__auto___31605)){
args__22740__auto__.push((arguments[i__22734__auto___31606]));

var G__31607 = (i__22734__auto___31606 + (1));
i__22734__auto___31606 = G__31607;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq31596){
var G__31597 = cljs.core.first.call(null,seq31596);
var seq31596__$1 = cljs.core.next.call(null,seq31596);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__31597,seq31596__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31608 = arguments.length;
var i__22734__auto___31609 = (0);
while(true){
if((i__22734__auto___31609 < len__22733__auto___31608)){
args__22740__auto__.push((arguments[i__22734__auto___31609]));

var G__31610 = (i__22734__auto___31609 + (1));
i__22734__auto___31609 = G__31610;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq31598){
var G__31599 = cljs.core.first.call(null,seq31598);
var seq31598__$1 = cljs.core.next.call(null,seq31598);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__31599,seq31598__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31611 = arguments.length;
var i__22734__auto___31612 = (0);
while(true){
if((i__22734__auto___31612 < len__22733__auto___31611)){
args__22740__auto__.push((arguments[i__22734__auto___31612]));

var G__31613 = (i__22734__auto___31612 + (1));
i__22734__auto___31612 = G__31613;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq31600){
var G__31601 = cljs.core.first.call(null,seq31600);
var seq31600__$1 = cljs.core.next.call(null,seq31600);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__31601,seq31600__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31622 = arguments.length;
var i__22734__auto___31623 = (0);
while(true){
if((i__22734__auto___31623 < len__22733__auto___31622)){
args__22740__auto__.push((arguments[i__22734__auto___31623]));

var G__31624 = (i__22734__auto___31623 + (1));
i__22734__auto___31623 = G__31624;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31493__auto__,rest__31494__auto__){
var convert_case__31495__auto__ = (function (p1__31492__31496__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__31492__31496__auto__,rest__31494__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31493__auto__,convert_case__31495__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq31614){
var G__31615 = cljs.core.first.call(null,seq31614);
var seq31614__$1 = cljs.core.next.call(null,seq31614);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__31615,seq31614__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31625 = arguments.length;
var i__22734__auto___31626 = (0);
while(true){
if((i__22734__auto___31626 < len__22733__auto___31625)){
args__22740__auto__.push((arguments[i__22734__auto___31626]));

var G__31627 = (i__22734__auto___31626 + (1));
i__22734__auto___31626 = G__31627;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq31616){
var G__31617 = cljs.core.first.call(null,seq31616);
var seq31616__$1 = cljs.core.next.call(null,seq31616);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__31617,seq31616__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31628 = arguments.length;
var i__22734__auto___31629 = (0);
while(true){
if((i__22734__auto___31629 < len__22733__auto___31628)){
args__22740__auto__.push((arguments[i__22734__auto___31629]));

var G__31630 = (i__22734__auto___31629 + (1));
i__22734__auto___31629 = G__31630;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq31618){
var G__31619 = cljs.core.first.call(null,seq31618);
var seq31618__$1 = cljs.core.next.call(null,seq31618);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__31619,seq31618__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31631 = arguments.length;
var i__22734__auto___31632 = (0);
while(true){
if((i__22734__auto___31632 < len__22733__auto___31631)){
args__22740__auto__.push((arguments[i__22734__auto___31632]));

var G__31633 = (i__22734__auto___31632 + (1));
i__22734__auto___31632 = G__31633;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq31620){
var G__31621 = cljs.core.first.call(null,seq31620);
var seq31620__$1 = cljs.core.next.call(null,seq31620);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__31621,seq31620__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31642 = arguments.length;
var i__22734__auto___31643 = (0);
while(true){
if((i__22734__auto___31643 < len__22733__auto___31642)){
args__22740__auto__.push((arguments[i__22734__auto___31643]));

var G__31644 = (i__22734__auto___31643 + (1));
i__22734__auto___31643 = G__31644;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31493__auto__,rest__31494__auto__){
var convert_case__31495__auto__ = (function (p1__31492__31496__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__31492__31496__auto__,rest__31494__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31493__auto__,convert_case__31495__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq31634){
var G__31635 = cljs.core.first.call(null,seq31634);
var seq31634__$1 = cljs.core.next.call(null,seq31634);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__31635,seq31634__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31645 = arguments.length;
var i__22734__auto___31646 = (0);
while(true){
if((i__22734__auto___31646 < len__22733__auto___31645)){
args__22740__auto__.push((arguments[i__22734__auto___31646]));

var G__31647 = (i__22734__auto___31646 + (1));
i__22734__auto___31646 = G__31647;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq31636){
var G__31637 = cljs.core.first.call(null,seq31636);
var seq31636__$1 = cljs.core.next.call(null,seq31636);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__31637,seq31636__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31648 = arguments.length;
var i__22734__auto___31649 = (0);
while(true){
if((i__22734__auto___31649 < len__22733__auto___31648)){
args__22740__auto__.push((arguments[i__22734__auto___31649]));

var G__31650 = (i__22734__auto___31649 + (1));
i__22734__auto___31649 = G__31650;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq31638){
var G__31639 = cljs.core.first.call(null,seq31638);
var seq31638__$1 = cljs.core.next.call(null,seq31638);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__31639,seq31638__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31651 = arguments.length;
var i__22734__auto___31652 = (0);
while(true){
if((i__22734__auto___31652 < len__22733__auto___31651)){
args__22740__auto__.push((arguments[i__22734__auto___31652]));

var G__31653 = (i__22734__auto___31652 + (1));
i__22734__auto___31652 = G__31653;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq31640){
var G__31641 = cljs.core.first.call(null,seq31640);
var seq31640__$1 = cljs.core.next.call(null,seq31640);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__31641,seq31640__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31662 = arguments.length;
var i__22734__auto___31663 = (0);
while(true){
if((i__22734__auto___31663 < len__22733__auto___31662)){
args__22740__auto__.push((arguments[i__22734__auto___31663]));

var G__31664 = (i__22734__auto___31663 + (1));
i__22734__auto___31663 = G__31664;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31493__auto__,rest__31494__auto__){
var convert_case__31495__auto__ = (function (p1__31492__31496__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__31492__31496__auto__,rest__31494__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__31493__auto__,convert_case__31495__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq31654){
var G__31655 = cljs.core.first.call(null,seq31654);
var seq31654__$1 = cljs.core.next.call(null,seq31654);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__31655,seq31654__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31665 = arguments.length;
var i__22734__auto___31666 = (0);
while(true){
if((i__22734__auto___31666 < len__22733__auto___31665)){
args__22740__auto__.push((arguments[i__22734__auto___31666]));

var G__31667 = (i__22734__auto___31666 + (1));
i__22734__auto___31666 = G__31667;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq31656){
var G__31657 = cljs.core.first.call(null,seq31656);
var seq31656__$1 = cljs.core.next.call(null,seq31656);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__31657,seq31656__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31668 = arguments.length;
var i__22734__auto___31669 = (0);
while(true){
if((i__22734__auto___31669 < len__22733__auto___31668)){
args__22740__auto__.push((arguments[i__22734__auto___31669]));

var G__31670 = (i__22734__auto___31669 + (1));
i__22734__auto___31669 = G__31670;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq31658){
var G__31659 = cljs.core.first.call(null,seq31658);
var seq31658__$1 = cljs.core.next.call(null,seq31658);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__31659,seq31658__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__22740__auto__ = [];
var len__22733__auto___31671 = arguments.length;
var i__22734__auto___31672 = (0);
while(true){
if((i__22734__auto___31672 < len__22733__auto___31671)){
args__22740__auto__.push((arguments[i__22734__auto___31672]));

var G__31673 = (i__22734__auto___31672 + (1));
i__22734__auto___31672 = G__31673;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31498__auto__,rest__31499__auto__){
if(!((s__31498__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__31498__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__31498__auto__),rest__31499__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq31660){
var G__31661 = cljs.core.first.call(null,seq31660);
var seq31660__$1 = cljs.core.next.call(null,seq31660);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__31661,seq31660__$1);
});


//# sourceMappingURL=core.js.map?rel=1490042959864