// Compiled by ClojureScript 1.9.293 {}
goog.provide('gravity.force.proxy');
goog.require('cljs.core');
goog.require('gravity.tools');
/**
 * Send a message to a given worker.
 *   arg worker : worker to target
 *   arg flag : a string (or keyword) that the worker can map to an action
 *   arg data : an object to send (optionnal)
 */
gravity.force.proxy.send = (function gravity$force$proxy$send(var_args){
var args35267 = [];
var len__22733__auto___35270 = arguments.length;
var i__22734__auto___35271 = (0);
while(true){
if((i__22734__auto___35271 < len__22733__auto___35270)){
args35267.push((arguments[i__22734__auto___35271]));

var G__35272 = (i__22734__auto___35271 + (1));
i__22734__auto___35271 = G__35272;
continue;
} else {
}
break;
}

var G__35269 = args35267.length;
switch (G__35269) {
case 2:
return gravity.force.proxy.send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gravity.force.proxy.send.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35267.length)].join('')));

}
});

gravity.force.proxy.send.cljs$core$IFn$_invoke$arity$2 = (function (worker,flag){
return worker.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),flag], null)));
});

gravity.force.proxy.send.cljs$core$IFn$_invoke$arity$3 = (function (worker,flag,data){
return worker.postMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),flag,new cljs.core.Keyword(null,"data","data",-232669377),data], null)));
});

gravity.force.proxy.send.cljs$lang$maxFixedArity = 3;

gravity.force.proxy.make_worker_BANG_ = (function gravity$force$proxy$make_worker_BANG_(path){
gravity.tools.log.call(null,[cljs.core.str("A worker will be created to the given path '"),cljs.core.str(path),cljs.core.str("'. If the canvas stay empty, be sure to check the path.")].join(''));

return (new Worker(path));
});
/**
 * Create a webworker with the given script path
 */
gravity.force.proxy.create = (function gravity$force$proxy$create(path,params){
if(cljs.core.truth_(path)){
} else {
gravity.tools.warn.call(null,[cljs.core.str("Invalid worker path ! Unable to create a graph without a correct worker file specified. (null)")].join(''));
}

var worker = gravity.force.proxy.make_worker_BANG_.call(null,path);
if(cljs.core.truth_(worker)){
gravity.force.proxy.send.call(null,worker,new cljs.core.Keyword(null,"init","init",-1875481434),params);
} else {
gravity.tools.err.call(null,[cljs.core.str("Invalid worker for path '"),cljs.core.str(path),cljs.core.str("'. Graph creation will fail.")].join(''));
}

return worker;
});
/**
 * Listen to a given worker by setting the given function as a callback of onMessage
 */
gravity.force.proxy.listen = (function gravity$force$proxy$listen(worker,callback){
return worker.addEventListener("message",callback);
});
/**
 * Serialize a value (number, function, etc…) to be evaluated by another thread
 */
gravity.force.proxy.serialize = (function gravity$force$proxy$serialize(value){
return [cljs.core.str("("),cljs.core.str(value.toString()),cljs.core.str(")")].join('');
});

//# sourceMappingURL=proxy.js.map?rel=1490419733669