// Compiled by ClojureScript 1.9.293 {}
goog.provide('gravity.macros$macros');
goog.require('cljs.core');
/**
 * Log in the console
 */
gravity.macros$macros.log = (function gravity$macros$macros$log(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34888 = arguments.length;
var i__22734__auto___34889 = (0);
while(true){
if((i__22734__auto___34889 < len__22733__auto___34888)){
args__22740__auto__.push((arguments[i__22734__auto___34889]));

var G__34890 = (i__22734__auto___34889 + (1));
i__22734__auto___34889 = G__34890;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((2) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((2)),(0),null)):null);
return gravity.macros$macros.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22741__auto__);
});

gravity.macros$macros.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var js_args = cljs.core.map.call(null,(function (arg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)),(function (){var x__22462__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
}),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".log",".log",565247729,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",-1426368245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"[UI]:"),js_args)));
});

gravity.macros$macros.log.cljs$lang$maxFixedArity = (2);

gravity.macros$macros.log.cljs$lang$applyTo = (function (seq34885){
var G__34886 = cljs.core.first.call(null,seq34885);
var seq34885__$1 = cljs.core.next.call(null,seq34885);
var G__34887 = cljs.core.first.call(null,seq34885__$1);
var seq34885__$2 = cljs.core.next.call(null,seq34885__$1);
return gravity.macros$macros.log.cljs$core$IFn$_invoke$arity$variadic(G__34886,G__34887,seq34885__$2);
});


gravity.macros$macros.log.cljs$lang$macro = true;
/**
 * Log in the console
 */
gravity.macros$macros.warn = (function gravity$macros$macros$warn(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34894 = arguments.length;
var i__22734__auto___34895 = (0);
while(true){
if((i__22734__auto___34895 < len__22733__auto___34894)){
args__22740__auto__.push((arguments[i__22734__auto___34895]));

var G__34896 = (i__22734__auto___34895 + (1));
i__22734__auto___34895 = G__34896;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((2) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((2)),(0),null)):null);
return gravity.macros$macros.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22741__auto__);
});

gravity.macros$macros.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var js_args = cljs.core.map.call(null,(function (arg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)),(function (){var x__22462__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
}),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".warn",".warn",-2099751158,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",-1426368245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"[UI]:"),js_args)));
});

gravity.macros$macros.warn.cljs$lang$maxFixedArity = (2);

gravity.macros$macros.warn.cljs$lang$applyTo = (function (seq34891){
var G__34892 = cljs.core.first.call(null,seq34891);
var seq34891__$1 = cljs.core.next.call(null,seq34891);
var G__34893 = cljs.core.first.call(null,seq34891__$1);
var seq34891__$2 = cljs.core.next.call(null,seq34891__$1);
return gravity.macros$macros.warn.cljs$core$IFn$_invoke$arity$variadic(G__34892,G__34893,seq34891__$2);
});


gravity.macros$macros.warn.cljs$lang$macro = true;
/**
 * Log in the console
 */
gravity.macros$macros.err = (function gravity$macros$macros$err(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34900 = arguments.length;
var i__22734__auto___34901 = (0);
while(true){
if((i__22734__auto___34901 < len__22733__auto___34900)){
args__22740__auto__.push((arguments[i__22734__auto___34901]));

var G__34902 = (i__22734__auto___34901 + (1));
i__22734__auto___34901 = G__34902;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((2) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((2)),(0),null)):null);
return gravity.macros$macros.err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22741__auto__);
});

gravity.macros$macros.err.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var js_args = cljs.core.map.call(null,(function (arg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)),(function (){var x__22462__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
}),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".error",".error",1756007195,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",-1426368245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"[UI]:"),js_args)));
});

gravity.macros$macros.err.cljs$lang$maxFixedArity = (2);

gravity.macros$macros.err.cljs$lang$applyTo = (function (seq34897){
var G__34898 = cljs.core.first.call(null,seq34897);
var seq34897__$1 = cljs.core.next.call(null,seq34897);
var G__34899 = cljs.core.first.call(null,seq34897__$1);
var seq34897__$2 = cljs.core.next.call(null,seq34897__$1);
return gravity.macros$macros.err.cljs$core$IFn$_invoke$arity$variadic(G__34898,G__34899,seq34897__$2);
});


gravity.macros$macros.err.cljs$lang$macro = true;
/**
 * Log in the console
 */
gravity.macros$macros.log_force = (function gravity$macros$macros$log_force(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34906 = arguments.length;
var i__22734__auto___34907 = (0);
while(true){
if((i__22734__auto___34907 < len__22733__auto___34906)){
args__22740__auto__.push((arguments[i__22734__auto___34907]));

var G__34908 = (i__22734__auto___34907 + (1));
i__22734__auto___34907 = G__34908;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((2) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((2)),(0),null)):null);
return gravity.macros$macros.log_force.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22741__auto__);
});

gravity.macros$macros.log_force.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var js_args = cljs.core.map.call(null,(function (arg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)),(function (){var x__22462__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
}),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".log",".log",565247729,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",-1426368245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"[force-worker]:"),js_args)));
});

gravity.macros$macros.log_force.cljs$lang$maxFixedArity = (2);

gravity.macros$macros.log_force.cljs$lang$applyTo = (function (seq34903){
var G__34904 = cljs.core.first.call(null,seq34903);
var seq34903__$1 = cljs.core.next.call(null,seq34903);
var G__34905 = cljs.core.first.call(null,seq34903__$1);
var seq34903__$2 = cljs.core.next.call(null,seq34903__$1);
return gravity.macros$macros.log_force.cljs$core$IFn$_invoke$arity$variadic(G__34904,G__34905,seq34903__$2);
});


gravity.macros$macros.log_force.cljs$lang$macro = true;
/**
 * Log in the console
 */
gravity.macros$macros.warn_force = (function gravity$macros$macros$warn_force(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34912 = arguments.length;
var i__22734__auto___34913 = (0);
while(true){
if((i__22734__auto___34913 < len__22733__auto___34912)){
args__22740__auto__.push((arguments[i__22734__auto___34913]));

var G__34914 = (i__22734__auto___34913 + (1));
i__22734__auto___34913 = G__34914;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((2) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((2)),(0),null)):null);
return gravity.macros$macros.warn_force.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22741__auto__);
});

gravity.macros$macros.warn_force.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var js_args = cljs.core.map.call(null,(function (arg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)),(function (){var x__22462__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
}),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".warn",".warn",-2099751158,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",-1426368245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"[force-worker]:"),js_args)));
});

gravity.macros$macros.warn_force.cljs$lang$maxFixedArity = (2);

gravity.macros$macros.warn_force.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first.call(null,seq34909);
var seq34909__$1 = cljs.core.next.call(null,seq34909);
var G__34911 = cljs.core.first.call(null,seq34909__$1);
var seq34909__$2 = cljs.core.next.call(null,seq34909__$1);
return gravity.macros$macros.warn_force.cljs$core$IFn$_invoke$arity$variadic(G__34910,G__34911,seq34909__$2);
});


gravity.macros$macros.warn_force.cljs$lang$macro = true;
/**
 * Log in the console
 */
gravity.macros$macros.log_field = (function gravity$macros$macros$log_field(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34918 = arguments.length;
var i__22734__auto___34919 = (0);
while(true){
if((i__22734__auto___34919 < len__22733__auto___34918)){
args__22740__auto__.push((arguments[i__22734__auto___34919]));

var G__34920 = (i__22734__auto___34919 + (1));
i__22734__auto___34919 = G__34920;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((2) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((2)),(0),null)):null);
return gravity.macros$macros.log_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22741__auto__);
});

gravity.macros$macros.log_field.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var js_args = cljs.core.map.call(null,(function (arg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)),(function (){var x__22462__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
}),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".log",".log",565247729,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",-1426368245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"[field-worker]:"),js_args)));
});

gravity.macros$macros.log_field.cljs$lang$maxFixedArity = (2);

gravity.macros$macros.log_field.cljs$lang$applyTo = (function (seq34915){
var G__34916 = cljs.core.first.call(null,seq34915);
var seq34915__$1 = cljs.core.next.call(null,seq34915);
var G__34917 = cljs.core.first.call(null,seq34915__$1);
var seq34915__$2 = cljs.core.next.call(null,seq34915__$1);
return gravity.macros$macros.log_field.cljs$core$IFn$_invoke$arity$variadic(G__34916,G__34917,seq34915__$2);
});


gravity.macros$macros.log_field.cljs$lang$macro = true;
/**
 * Log in the console
 */
gravity.macros$macros.warn_field = (function gravity$macros$macros$warn_field(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34924 = arguments.length;
var i__22734__auto___34925 = (0);
while(true){
if((i__22734__auto___34925 < len__22733__auto___34924)){
args__22740__auto__.push((arguments[i__22734__auto___34925]));

var G__34926 = (i__22734__auto___34925 + (1));
i__22734__auto___34925 = G__34926;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((2) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((2)),(0),null)):null);
return gravity.macros$macros.warn_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22741__auto__);
});

gravity.macros$macros.warn_field.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var js_args = cljs.core.map.call(null,(function (arg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null)),(function (){var x__22462__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__22462__auto__);
})())));
}),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".warn",".warn",-2099751158,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",-1426368245,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"[field-worker]:"),js_args)));
});

gravity.macros$macros.warn_field.cljs$lang$maxFixedArity = (2);

gravity.macros$macros.warn_field.cljs$lang$applyTo = (function (seq34921){
var G__34922 = cljs.core.first.call(null,seq34921);
var seq34921__$1 = cljs.core.next.call(null,seq34921);
var G__34923 = cljs.core.first.call(null,seq34921__$1);
var seq34921__$2 = cljs.core.next.call(null,seq34921__$1);
return gravity.macros$macros.warn_field.cljs$core$IFn$_invoke$arity$variadic(G__34922,G__34923,seq34921__$2);
});


gravity.macros$macros.warn_field.cljs$lang$macro = true;

//# sourceMappingURL=macros$macros.js.map?rel=1491858715446