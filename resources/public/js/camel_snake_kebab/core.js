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
var args__19991__auto__ = [];
var len__19984__auto___37142 = arguments.length;
var i__19985__auto___37143 = (0);
while(true){
if((i__19985__auto___37143 < len__19984__auto___37142)){
args__19991__auto__.push((arguments[i__19985__auto___37143]));

var G__37144 = (i__19985__auto___37143 + (1));
i__19985__auto___37143 = G__37144;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((4) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19992__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq37137){
var G__37138 = cljs.core.first.call(null,seq37137);
var seq37137__$1 = cljs.core.next.call(null,seq37137);
var G__37139 = cljs.core.first.call(null,seq37137__$1);
var seq37137__$2 = cljs.core.next.call(null,seq37137__$1);
var G__37140 = cljs.core.first.call(null,seq37137__$2);
var seq37137__$3 = cljs.core.next.call(null,seq37137__$2);
var G__37141 = cljs.core.first.call(null,seq37137__$3);
var seq37137__$4 = cljs.core.next.call(null,seq37137__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__37138,G__37139,G__37140,G__37141,seq37137__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37153 = arguments.length;
var i__19985__auto___37154 = (0);
while(true){
if((i__19985__auto___37154 < len__19984__auto___37153)){
args__19991__auto__.push((arguments[i__19985__auto___37154]));

var G__37155 = (i__19985__auto___37154 + (1));
i__19985__auto___37154 = G__37155;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__20235__auto__,rest__20236__auto__){
var convert_case__20237__auto__ = (function (p1__20234__20238__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__20234__20238__auto__,rest__20236__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20235__auto__,convert_case__20237__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq37145){
var G__37146 = cljs.core.first.call(null,seq37145);
var seq37145__$1 = cljs.core.next.call(null,seq37145);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__37146,seq37145__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37156 = arguments.length;
var i__19985__auto___37157 = (0);
while(true){
if((i__19985__auto___37157 < len__19984__auto___37156)){
args__19991__auto__.push((arguments[i__19985__auto___37157]));

var G__37158 = (i__19985__auto___37157 + (1));
i__19985__auto___37157 = G__37158;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq37147){
var G__37148 = cljs.core.first.call(null,seq37147);
var seq37147__$1 = cljs.core.next.call(null,seq37147);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__37148,seq37147__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37159 = arguments.length;
var i__19985__auto___37160 = (0);
while(true){
if((i__19985__auto___37160 < len__19984__auto___37159)){
args__19991__auto__.push((arguments[i__19985__auto___37160]));

var G__37161 = (i__19985__auto___37160 + (1));
i__19985__auto___37160 = G__37161;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq37149){
var G__37150 = cljs.core.first.call(null,seq37149);
var seq37149__$1 = cljs.core.next.call(null,seq37149);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__37150,seq37149__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37162 = arguments.length;
var i__19985__auto___37163 = (0);
while(true){
if((i__19985__auto___37163 < len__19984__auto___37162)){
args__19991__auto__.push((arguments[i__19985__auto___37163]));

var G__37164 = (i__19985__auto___37163 + (1));
i__19985__auto___37163 = G__37164;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq37151){
var G__37152 = cljs.core.first.call(null,seq37151);
var seq37151__$1 = cljs.core.next.call(null,seq37151);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__37152,seq37151__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37173 = arguments.length;
var i__19985__auto___37174 = (0);
while(true){
if((i__19985__auto___37174 < len__19984__auto___37173)){
args__19991__auto__.push((arguments[i__19985__auto___37174]));

var G__37175 = (i__19985__auto___37174 + (1));
i__19985__auto___37174 = G__37175;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__20235__auto__,rest__20236__auto__){
var convert_case__20237__auto__ = (function (p1__20234__20238__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__20234__20238__auto__,rest__20236__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20235__auto__,convert_case__20237__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq37165){
var G__37166 = cljs.core.first.call(null,seq37165);
var seq37165__$1 = cljs.core.next.call(null,seq37165);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__37166,seq37165__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37176 = arguments.length;
var i__19985__auto___37177 = (0);
while(true){
if((i__19985__auto___37177 < len__19984__auto___37176)){
args__19991__auto__.push((arguments[i__19985__auto___37177]));

var G__37178 = (i__19985__auto___37177 + (1));
i__19985__auto___37177 = G__37178;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq37167){
var G__37168 = cljs.core.first.call(null,seq37167);
var seq37167__$1 = cljs.core.next.call(null,seq37167);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__37168,seq37167__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37179 = arguments.length;
var i__19985__auto___37180 = (0);
while(true){
if((i__19985__auto___37180 < len__19984__auto___37179)){
args__19991__auto__.push((arguments[i__19985__auto___37180]));

var G__37181 = (i__19985__auto___37180 + (1));
i__19985__auto___37180 = G__37181;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq37169){
var G__37170 = cljs.core.first.call(null,seq37169);
var seq37169__$1 = cljs.core.next.call(null,seq37169);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__37170,seq37169__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37182 = arguments.length;
var i__19985__auto___37183 = (0);
while(true){
if((i__19985__auto___37183 < len__19984__auto___37182)){
args__19991__auto__.push((arguments[i__19985__auto___37183]));

var G__37184 = (i__19985__auto___37183 + (1));
i__19985__auto___37183 = G__37184;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq37171){
var G__37172 = cljs.core.first.call(null,seq37171);
var seq37171__$1 = cljs.core.next.call(null,seq37171);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__37172,seq37171__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37193 = arguments.length;
var i__19985__auto___37194 = (0);
while(true){
if((i__19985__auto___37194 < len__19984__auto___37193)){
args__19991__auto__.push((arguments[i__19985__auto___37194]));

var G__37195 = (i__19985__auto___37194 + (1));
i__19985__auto___37194 = G__37195;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__20235__auto__,rest__20236__auto__){
var convert_case__20237__auto__ = (function (p1__20234__20238__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__20234__20238__auto__,rest__20236__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20235__auto__,convert_case__20237__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq37185){
var G__37186 = cljs.core.first.call(null,seq37185);
var seq37185__$1 = cljs.core.next.call(null,seq37185);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__37186,seq37185__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37196 = arguments.length;
var i__19985__auto___37197 = (0);
while(true){
if((i__19985__auto___37197 < len__19984__auto___37196)){
args__19991__auto__.push((arguments[i__19985__auto___37197]));

var G__37198 = (i__19985__auto___37197 + (1));
i__19985__auto___37197 = G__37198;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq37187){
var G__37188 = cljs.core.first.call(null,seq37187);
var seq37187__$1 = cljs.core.next.call(null,seq37187);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__37188,seq37187__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37199 = arguments.length;
var i__19985__auto___37200 = (0);
while(true){
if((i__19985__auto___37200 < len__19984__auto___37199)){
args__19991__auto__.push((arguments[i__19985__auto___37200]));

var G__37201 = (i__19985__auto___37200 + (1));
i__19985__auto___37200 = G__37201;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq37189){
var G__37190 = cljs.core.first.call(null,seq37189);
var seq37189__$1 = cljs.core.next.call(null,seq37189);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__37190,seq37189__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37202 = arguments.length;
var i__19985__auto___37203 = (0);
while(true){
if((i__19985__auto___37203 < len__19984__auto___37202)){
args__19991__auto__.push((arguments[i__19985__auto___37203]));

var G__37204 = (i__19985__auto___37203 + (1));
i__19985__auto___37203 = G__37204;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq37191){
var G__37192 = cljs.core.first.call(null,seq37191);
var seq37191__$1 = cljs.core.next.call(null,seq37191);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__37192,seq37191__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37213 = arguments.length;
var i__19985__auto___37214 = (0);
while(true){
if((i__19985__auto___37214 < len__19984__auto___37213)){
args__19991__auto__.push((arguments[i__19985__auto___37214]));

var G__37215 = (i__19985__auto___37214 + (1));
i__19985__auto___37214 = G__37215;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__20235__auto__,rest__20236__auto__){
var convert_case__20237__auto__ = (function (p1__20234__20238__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__20234__20238__auto__,rest__20236__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20235__auto__,convert_case__20237__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq37205){
var G__37206 = cljs.core.first.call(null,seq37205);
var seq37205__$1 = cljs.core.next.call(null,seq37205);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__37206,seq37205__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37216 = arguments.length;
var i__19985__auto___37217 = (0);
while(true){
if((i__19985__auto___37217 < len__19984__auto___37216)){
args__19991__auto__.push((arguments[i__19985__auto___37217]));

var G__37218 = (i__19985__auto___37217 + (1));
i__19985__auto___37217 = G__37218;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq37207){
var G__37208 = cljs.core.first.call(null,seq37207);
var seq37207__$1 = cljs.core.next.call(null,seq37207);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__37208,seq37207__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37219 = arguments.length;
var i__19985__auto___37220 = (0);
while(true){
if((i__19985__auto___37220 < len__19984__auto___37219)){
args__19991__auto__.push((arguments[i__19985__auto___37220]));

var G__37221 = (i__19985__auto___37220 + (1));
i__19985__auto___37220 = G__37221;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq37209){
var G__37210 = cljs.core.first.call(null,seq37209);
var seq37209__$1 = cljs.core.next.call(null,seq37209);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__37210,seq37209__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37222 = arguments.length;
var i__19985__auto___37223 = (0);
while(true){
if((i__19985__auto___37223 < len__19984__auto___37222)){
args__19991__auto__.push((arguments[i__19985__auto___37223]));

var G__37224 = (i__19985__auto___37223 + (1));
i__19985__auto___37223 = G__37224;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq37211){
var G__37212 = cljs.core.first.call(null,seq37211);
var seq37211__$1 = cljs.core.next.call(null,seq37211);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__37212,seq37211__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37233 = arguments.length;
var i__19985__auto___37234 = (0);
while(true){
if((i__19985__auto___37234 < len__19984__auto___37233)){
args__19991__auto__.push((arguments[i__19985__auto___37234]));

var G__37235 = (i__19985__auto___37234 + (1));
i__19985__auto___37234 = G__37235;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__20235__auto__,rest__20236__auto__){
var convert_case__20237__auto__ = (function (p1__20234__20238__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__20234__20238__auto__,rest__20236__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20235__auto__,convert_case__20237__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq37225){
var G__37226 = cljs.core.first.call(null,seq37225);
var seq37225__$1 = cljs.core.next.call(null,seq37225);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__37226,seq37225__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37236 = arguments.length;
var i__19985__auto___37237 = (0);
while(true){
if((i__19985__auto___37237 < len__19984__auto___37236)){
args__19991__auto__.push((arguments[i__19985__auto___37237]));

var G__37238 = (i__19985__auto___37237 + (1));
i__19985__auto___37237 = G__37238;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq37227){
var G__37228 = cljs.core.first.call(null,seq37227);
var seq37227__$1 = cljs.core.next.call(null,seq37227);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__37228,seq37227__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37239 = arguments.length;
var i__19985__auto___37240 = (0);
while(true){
if((i__19985__auto___37240 < len__19984__auto___37239)){
args__19991__auto__.push((arguments[i__19985__auto___37240]));

var G__37241 = (i__19985__auto___37240 + (1));
i__19985__auto___37240 = G__37241;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq37229){
var G__37230 = cljs.core.first.call(null,seq37229);
var seq37229__$1 = cljs.core.next.call(null,seq37229);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__37230,seq37229__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37242 = arguments.length;
var i__19985__auto___37243 = (0);
while(true){
if((i__19985__auto___37243 < len__19984__auto___37242)){
args__19991__auto__.push((arguments[i__19985__auto___37243]));

var G__37244 = (i__19985__auto___37243 + (1));
i__19985__auto___37243 = G__37244;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq37231){
var G__37232 = cljs.core.first.call(null,seq37231);
var seq37231__$1 = cljs.core.next.call(null,seq37231);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__37232,seq37231__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37253 = arguments.length;
var i__19985__auto___37254 = (0);
while(true){
if((i__19985__auto___37254 < len__19984__auto___37253)){
args__19991__auto__.push((arguments[i__19985__auto___37254]));

var G__37255 = (i__19985__auto___37254 + (1));
i__19985__auto___37254 = G__37255;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__20235__auto__,rest__20236__auto__){
var convert_case__20237__auto__ = (function (p1__20234__20238__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__20234__20238__auto__,rest__20236__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20235__auto__,convert_case__20237__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq37245){
var G__37246 = cljs.core.first.call(null,seq37245);
var seq37245__$1 = cljs.core.next.call(null,seq37245);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__37246,seq37245__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37256 = arguments.length;
var i__19985__auto___37257 = (0);
while(true){
if((i__19985__auto___37257 < len__19984__auto___37256)){
args__19991__auto__.push((arguments[i__19985__auto___37257]));

var G__37258 = (i__19985__auto___37257 + (1));
i__19985__auto___37257 = G__37258;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq37247){
var G__37248 = cljs.core.first.call(null,seq37247);
var seq37247__$1 = cljs.core.next.call(null,seq37247);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__37248,seq37247__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37259 = arguments.length;
var i__19985__auto___37260 = (0);
while(true){
if((i__19985__auto___37260 < len__19984__auto___37259)){
args__19991__auto__.push((arguments[i__19985__auto___37260]));

var G__37261 = (i__19985__auto___37260 + (1));
i__19985__auto___37260 = G__37261;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq37249){
var G__37250 = cljs.core.first.call(null,seq37249);
var seq37249__$1 = cljs.core.next.call(null,seq37249);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__37250,seq37249__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37262 = arguments.length;
var i__19985__auto___37263 = (0);
while(true){
if((i__19985__auto___37263 < len__19984__auto___37262)){
args__19991__auto__.push((arguments[i__19985__auto___37263]));

var G__37264 = (i__19985__auto___37263 + (1));
i__19985__auto___37263 = G__37264;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq37251){
var G__37252 = cljs.core.first.call(null,seq37251);
var seq37251__$1 = cljs.core.next.call(null,seq37251);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__37252,seq37251__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37273 = arguments.length;
var i__19985__auto___37274 = (0);
while(true){
if((i__19985__auto___37274 < len__19984__auto___37273)){
args__19991__auto__.push((arguments[i__19985__auto___37274]));

var G__37275 = (i__19985__auto___37274 + (1));
i__19985__auto___37274 = G__37275;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__20235__auto__,rest__20236__auto__){
var convert_case__20237__auto__ = (function (p1__20234__20238__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__20234__20238__auto__,rest__20236__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__20235__auto__,convert_case__20237__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq37265){
var G__37266 = cljs.core.first.call(null,seq37265);
var seq37265__$1 = cljs.core.next.call(null,seq37265);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__37266,seq37265__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37276 = arguments.length;
var i__19985__auto___37277 = (0);
while(true){
if((i__19985__auto___37277 < len__19984__auto___37276)){
args__19991__auto__.push((arguments[i__19985__auto___37277]));

var G__37278 = (i__19985__auto___37277 + (1));
i__19985__auto___37277 = G__37278;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq37267){
var G__37268 = cljs.core.first.call(null,seq37267);
var seq37267__$1 = cljs.core.next.call(null,seq37267);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__37268,seq37267__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37279 = arguments.length;
var i__19985__auto___37280 = (0);
while(true){
if((i__19985__auto___37280 < len__19984__auto___37279)){
args__19991__auto__.push((arguments[i__19985__auto___37280]));

var G__37281 = (i__19985__auto___37280 + (1));
i__19985__auto___37280 = G__37281;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq37269){
var G__37270 = cljs.core.first.call(null,seq37269);
var seq37269__$1 = cljs.core.next.call(null,seq37269);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__37270,seq37269__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__19991__auto__ = [];
var len__19984__auto___37282 = arguments.length;
var i__19985__auto___37283 = (0);
while(true){
if((i__19985__auto___37283 < len__19984__auto___37282)){
args__19991__auto__.push((arguments[i__19985__auto___37283]));

var G__37284 = (i__19985__auto___37283 + (1));
i__19985__auto___37283 = G__37284;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__20240__auto__,rest__20241__auto__){
if(!((s__20240__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__20240__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__20240__auto__),rest__20241__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq37271){
var G__37272 = cljs.core.first.call(null,seq37271);
var seq37271__$1 = cljs.core.next.call(null,seq37271);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__37272,seq37271__$1);
});


//# sourceMappingURL=core.js.map