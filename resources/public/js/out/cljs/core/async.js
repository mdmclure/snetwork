// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27324 = [];
var len__22733__auto___27330 = arguments.length;
var i__22734__auto___27331 = (0);
while(true){
if((i__22734__auto___27331 < len__22733__auto___27330)){
args27324.push((arguments[i__22734__auto___27331]));

var G__27332 = (i__22734__auto___27331 + (1));
i__22734__auto___27331 = G__27332;
continue;
} else {
}
break;
}

var G__27326 = args27324.length;
switch (G__27326) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27324.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27327 = (function (f,blockable,meta27328){
this.f = f;
this.blockable = blockable;
this.meta27328 = meta27328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27329,meta27328__$1){
var self__ = this;
var _27329__$1 = this;
return (new cljs.core.async.t_cljs$core$async27327(self__.f,self__.blockable,meta27328__$1));
});

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27329){
var self__ = this;
var _27329__$1 = this;
return self__.meta27328;
});

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27328","meta27328",1329277306,null)], null);
});

cljs.core.async.t_cljs$core$async27327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27327";

cljs.core.async.t_cljs$core$async27327.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async27327");
});

cljs.core.async.__GT_t_cljs$core$async27327 = (function cljs$core$async$__GT_t_cljs$core$async27327(f__$1,blockable__$1,meta27328){
return (new cljs.core.async.t_cljs$core$async27327(f__$1,blockable__$1,meta27328));
});

}

return (new cljs.core.async.t_cljs$core$async27327(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27336 = [];
var len__22733__auto___27339 = arguments.length;
var i__22734__auto___27340 = (0);
while(true){
if((i__22734__auto___27340 < len__22733__auto___27339)){
args27336.push((arguments[i__22734__auto___27340]));

var G__27341 = (i__22734__auto___27340 + (1));
i__22734__auto___27340 = G__27341;
continue;
} else {
}
break;
}

var G__27338 = args27336.length;
switch (G__27338) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27336.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27343 = [];
var len__22733__auto___27346 = arguments.length;
var i__22734__auto___27347 = (0);
while(true){
if((i__22734__auto___27347 < len__22733__auto___27346)){
args27343.push((arguments[i__22734__auto___27347]));

var G__27348 = (i__22734__auto___27347 + (1));
i__22734__auto___27347 = G__27348;
continue;
} else {
}
break;
}

var G__27345 = args27343.length;
switch (G__27345) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27343.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27350 = [];
var len__22733__auto___27353 = arguments.length;
var i__22734__auto___27354 = (0);
while(true){
if((i__22734__auto___27354 < len__22733__auto___27353)){
args27350.push((arguments[i__22734__auto___27354]));

var G__27355 = (i__22734__auto___27354 + (1));
i__22734__auto___27354 = G__27355;
continue;
} else {
}
break;
}

var G__27352 = args27350.length;
switch (G__27352) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27350.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27357 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27357);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27357,ret){
return (function (){
return fn1.call(null,val_27357);
});})(val_27357,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27358 = [];
var len__22733__auto___27361 = arguments.length;
var i__22734__auto___27362 = (0);
while(true){
if((i__22734__auto___27362 < len__22733__auto___27361)){
args27358.push((arguments[i__22734__auto___27362]));

var G__27363 = (i__22734__auto___27362 + (1));
i__22734__auto___27362 = G__27363;
continue;
} else {
}
break;
}

var G__27360 = args27358.length;
switch (G__27360) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27358.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22543__auto___27365 = n;
var x_27366 = (0);
while(true){
if((x_27366 < n__22543__auto___27365)){
(a[x_27366] = (0));

var G__27367 = (x_27366 + (1));
x_27366 = G__27367;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27368 = (i + (1));
i = G__27368;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27372 = (function (flag,meta27373){
this.flag = flag;
this.meta27373 = meta27373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27374,meta27373__$1){
var self__ = this;
var _27374__$1 = this;
return (new cljs.core.async.t_cljs$core$async27372(self__.flag,meta27373__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27374){
var self__ = this;
var _27374__$1 = this;
return self__.meta27373;
});})(flag))
;

cljs.core.async.t_cljs$core$async27372.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27372.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27373","meta27373",1313055015,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27372";

cljs.core.async.t_cljs$core$async27372.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async27372");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27372 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27372(flag__$1,meta27373){
return (new cljs.core.async.t_cljs$core$async27372(flag__$1,meta27373));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27372(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27378 = (function (flag,cb,meta27379){
this.flag = flag;
this.cb = cb;
this.meta27379 = meta27379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27380,meta27379__$1){
var self__ = this;
var _27380__$1 = this;
return (new cljs.core.async.t_cljs$core$async27378(self__.flag,self__.cb,meta27379__$1));
});

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27380){
var self__ = this;
var _27380__$1 = this;
return self__.meta27379;
});

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27379","meta27379",619746192,null)], null);
});

cljs.core.async.t_cljs$core$async27378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27378";

cljs.core.async.t_cljs$core$async27378.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async27378");
});

cljs.core.async.__GT_t_cljs$core$async27378 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27378(flag__$1,cb__$1,meta27379){
return (new cljs.core.async.t_cljs$core$async27378(flag__$1,cb__$1,meta27379));
});

}

return (new cljs.core.async.t_cljs$core$async27378(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27381_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27381_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27382_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27382_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21625__auto__ = wport;
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27383 = (i + (1));
i = G__27383;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21625__auto__ = ret;
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21613__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21613__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21613__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22740__auto__ = [];
var len__22733__auto___27389 = arguments.length;
var i__22734__auto___27390 = (0);
while(true){
if((i__22734__auto___27390 < len__22733__auto___27389)){
args__22740__auto__.push((arguments[i__22734__auto___27390]));

var G__27391 = (i__22734__auto___27390 + (1));
i__22734__auto___27390 = G__27391;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27386){
var map__27387 = p__27386;
var map__27387__$1 = ((((!((map__27387 == null)))?((((map__27387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27387):map__27387);
var opts = map__27387__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27384){
var G__27385 = cljs.core.first.call(null,seq27384);
var seq27384__$1 = cljs.core.next.call(null,seq27384);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27385,seq27384__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27392 = [];
var len__22733__auto___27442 = arguments.length;
var i__22734__auto___27443 = (0);
while(true){
if((i__22734__auto___27443 < len__22733__auto___27442)){
args27392.push((arguments[i__22734__auto___27443]));

var G__27444 = (i__22734__auto___27443 + (1));
i__22734__auto___27443 = G__27444;
continue;
} else {
}
break;
}

var G__27394 = args27392.length;
switch (G__27394) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27392.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27279__auto___27446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___27446){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___27446){
return (function (state_27418){
var state_val_27419 = (state_27418[(1)]);
if((state_val_27419 === (7))){
var inst_27414 = (state_27418[(2)]);
var state_27418__$1 = state_27418;
var statearr_27420_27447 = state_27418__$1;
(statearr_27420_27447[(2)] = inst_27414);

(statearr_27420_27447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (1))){
var state_27418__$1 = state_27418;
var statearr_27421_27448 = state_27418__$1;
(statearr_27421_27448[(2)] = null);

(statearr_27421_27448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (4))){
var inst_27397 = (state_27418[(7)]);
var inst_27397__$1 = (state_27418[(2)]);
var inst_27398 = (inst_27397__$1 == null);
var state_27418__$1 = (function (){var statearr_27422 = state_27418;
(statearr_27422[(7)] = inst_27397__$1);

return statearr_27422;
})();
if(cljs.core.truth_(inst_27398)){
var statearr_27423_27449 = state_27418__$1;
(statearr_27423_27449[(1)] = (5));

} else {
var statearr_27424_27450 = state_27418__$1;
(statearr_27424_27450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (13))){
var state_27418__$1 = state_27418;
var statearr_27425_27451 = state_27418__$1;
(statearr_27425_27451[(2)] = null);

(statearr_27425_27451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (6))){
var inst_27397 = (state_27418[(7)]);
var state_27418__$1 = state_27418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27418__$1,(11),to,inst_27397);
} else {
if((state_val_27419 === (3))){
var inst_27416 = (state_27418[(2)]);
var state_27418__$1 = state_27418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27418__$1,inst_27416);
} else {
if((state_val_27419 === (12))){
var state_27418__$1 = state_27418;
var statearr_27426_27452 = state_27418__$1;
(statearr_27426_27452[(2)] = null);

(statearr_27426_27452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (2))){
var state_27418__$1 = state_27418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27418__$1,(4),from);
} else {
if((state_val_27419 === (11))){
var inst_27407 = (state_27418[(2)]);
var state_27418__$1 = state_27418;
if(cljs.core.truth_(inst_27407)){
var statearr_27427_27453 = state_27418__$1;
(statearr_27427_27453[(1)] = (12));

} else {
var statearr_27428_27454 = state_27418__$1;
(statearr_27428_27454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (9))){
var state_27418__$1 = state_27418;
var statearr_27429_27455 = state_27418__$1;
(statearr_27429_27455[(2)] = null);

(statearr_27429_27455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (5))){
var state_27418__$1 = state_27418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27430_27456 = state_27418__$1;
(statearr_27430_27456[(1)] = (8));

} else {
var statearr_27431_27457 = state_27418__$1;
(statearr_27431_27457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (14))){
var inst_27412 = (state_27418[(2)]);
var state_27418__$1 = state_27418;
var statearr_27432_27458 = state_27418__$1;
(statearr_27432_27458[(2)] = inst_27412);

(statearr_27432_27458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (10))){
var inst_27404 = (state_27418[(2)]);
var state_27418__$1 = state_27418;
var statearr_27433_27459 = state_27418__$1;
(statearr_27433_27459[(2)] = inst_27404);

(statearr_27433_27459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27419 === (8))){
var inst_27401 = cljs.core.async.close_BANG_.call(null,to);
var state_27418__$1 = state_27418;
var statearr_27434_27460 = state_27418__$1;
(statearr_27434_27460[(2)] = inst_27401);

(statearr_27434_27460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___27446))
;
return ((function (switch__27167__auto__,c__27279__auto___27446){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_27438 = [null,null,null,null,null,null,null,null];
(statearr_27438[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_27438[(1)] = (1));

return statearr_27438;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_27418){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_27418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e27439){if((e27439 instanceof Object)){
var ex__27171__auto__ = e27439;
var statearr_27440_27461 = state_27418;
(statearr_27440_27461[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27462 = state_27418;
state_27418 = G__27462;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_27418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_27418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___27446))
})();
var state__27281__auto__ = (function (){var statearr_27441 = f__27280__auto__.call(null);
(statearr_27441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___27446);

return statearr_27441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___27446))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27650){
var vec__27651 = p__27650;
var v = cljs.core.nth.call(null,vec__27651,(0),null);
var p = cljs.core.nth.call(null,vec__27651,(1),null);
var job = vec__27651;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27279__auto___27837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___27837,res,vec__27651,v,p,job,jobs,results){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___27837,res,vec__27651,v,p,job,jobs,results){
return (function (state_27658){
var state_val_27659 = (state_27658[(1)]);
if((state_val_27659 === (1))){
var state_27658__$1 = state_27658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27658__$1,(2),res,v);
} else {
if((state_val_27659 === (2))){
var inst_27655 = (state_27658[(2)]);
var inst_27656 = cljs.core.async.close_BANG_.call(null,res);
var state_27658__$1 = (function (){var statearr_27660 = state_27658;
(statearr_27660[(7)] = inst_27655);

return statearr_27660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27658__$1,inst_27656);
} else {
return null;
}
}
});})(c__27279__auto___27837,res,vec__27651,v,p,job,jobs,results))
;
return ((function (switch__27167__auto__,c__27279__auto___27837,res,vec__27651,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0 = (function (){
var statearr_27664 = [null,null,null,null,null,null,null,null];
(statearr_27664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__);

(statearr_27664[(1)] = (1));

return statearr_27664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1 = (function (state_27658){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_27658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e27665){if((e27665 instanceof Object)){
var ex__27171__auto__ = e27665;
var statearr_27666_27838 = state_27658;
(statearr_27666_27838[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27839 = state_27658;
state_27658 = G__27839;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = function(state_27658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1.call(this,state_27658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___27837,res,vec__27651,v,p,job,jobs,results))
})();
var state__27281__auto__ = (function (){var statearr_27667 = f__27280__auto__.call(null);
(statearr_27667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___27837);

return statearr_27667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___27837,res,vec__27651,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27668){
var vec__27669 = p__27668;
var v = cljs.core.nth.call(null,vec__27669,(0),null);
var p = cljs.core.nth.call(null,vec__27669,(1),null);
var job = vec__27669;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22543__auto___27840 = n;
var __27841 = (0);
while(true){
if((__27841 < n__22543__auto___27840)){
var G__27672_27842 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27672_27842) {
case "compute":
var c__27279__auto___27844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27841,c__27279__auto___27844,G__27672_27842,n__22543__auto___27840,jobs,results,process,async){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (__27841,c__27279__auto___27844,G__27672_27842,n__22543__auto___27840,jobs,results,process,async){
return (function (state_27685){
var state_val_27686 = (state_27685[(1)]);
if((state_val_27686 === (1))){
var state_27685__$1 = state_27685;
var statearr_27687_27845 = state_27685__$1;
(statearr_27687_27845[(2)] = null);

(statearr_27687_27845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (2))){
var state_27685__$1 = state_27685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27685__$1,(4),jobs);
} else {
if((state_val_27686 === (3))){
var inst_27683 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27685__$1,inst_27683);
} else {
if((state_val_27686 === (4))){
var inst_27675 = (state_27685[(2)]);
var inst_27676 = process.call(null,inst_27675);
var state_27685__$1 = state_27685;
if(cljs.core.truth_(inst_27676)){
var statearr_27688_27846 = state_27685__$1;
(statearr_27688_27846[(1)] = (5));

} else {
var statearr_27689_27847 = state_27685__$1;
(statearr_27689_27847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (5))){
var state_27685__$1 = state_27685;
var statearr_27690_27848 = state_27685__$1;
(statearr_27690_27848[(2)] = null);

(statearr_27690_27848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (6))){
var state_27685__$1 = state_27685;
var statearr_27691_27849 = state_27685__$1;
(statearr_27691_27849[(2)] = null);

(statearr_27691_27849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27686 === (7))){
var inst_27681 = (state_27685[(2)]);
var state_27685__$1 = state_27685;
var statearr_27692_27850 = state_27685__$1;
(statearr_27692_27850[(2)] = inst_27681);

(statearr_27692_27850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27841,c__27279__auto___27844,G__27672_27842,n__22543__auto___27840,jobs,results,process,async))
;
return ((function (__27841,switch__27167__auto__,c__27279__auto___27844,G__27672_27842,n__22543__auto___27840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0 = (function (){
var statearr_27696 = [null,null,null,null,null,null,null];
(statearr_27696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__);

(statearr_27696[(1)] = (1));

return statearr_27696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1 = (function (state_27685){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_27685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e27697){if((e27697 instanceof Object)){
var ex__27171__auto__ = e27697;
var statearr_27698_27851 = state_27685;
(statearr_27698_27851[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27852 = state_27685;
state_27685 = G__27852;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = function(state_27685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1.call(this,state_27685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__;
})()
;})(__27841,switch__27167__auto__,c__27279__auto___27844,G__27672_27842,n__22543__auto___27840,jobs,results,process,async))
})();
var state__27281__auto__ = (function (){var statearr_27699 = f__27280__auto__.call(null);
(statearr_27699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___27844);

return statearr_27699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(__27841,c__27279__auto___27844,G__27672_27842,n__22543__auto___27840,jobs,results,process,async))
);


break;
case "async":
var c__27279__auto___27853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27841,c__27279__auto___27853,G__27672_27842,n__22543__auto___27840,jobs,results,process,async){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (__27841,c__27279__auto___27853,G__27672_27842,n__22543__auto___27840,jobs,results,process,async){
return (function (state_27712){
var state_val_27713 = (state_27712[(1)]);
if((state_val_27713 === (1))){
var state_27712__$1 = state_27712;
var statearr_27714_27854 = state_27712__$1;
(statearr_27714_27854[(2)] = null);

(statearr_27714_27854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27713 === (2))){
var state_27712__$1 = state_27712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27712__$1,(4),jobs);
} else {
if((state_val_27713 === (3))){
var inst_27710 = (state_27712[(2)]);
var state_27712__$1 = state_27712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27712__$1,inst_27710);
} else {
if((state_val_27713 === (4))){
var inst_27702 = (state_27712[(2)]);
var inst_27703 = async.call(null,inst_27702);
var state_27712__$1 = state_27712;
if(cljs.core.truth_(inst_27703)){
var statearr_27715_27855 = state_27712__$1;
(statearr_27715_27855[(1)] = (5));

} else {
var statearr_27716_27856 = state_27712__$1;
(statearr_27716_27856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27713 === (5))){
var state_27712__$1 = state_27712;
var statearr_27717_27857 = state_27712__$1;
(statearr_27717_27857[(2)] = null);

(statearr_27717_27857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27713 === (6))){
var state_27712__$1 = state_27712;
var statearr_27718_27858 = state_27712__$1;
(statearr_27718_27858[(2)] = null);

(statearr_27718_27858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27713 === (7))){
var inst_27708 = (state_27712[(2)]);
var state_27712__$1 = state_27712;
var statearr_27719_27859 = state_27712__$1;
(statearr_27719_27859[(2)] = inst_27708);

(statearr_27719_27859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27841,c__27279__auto___27853,G__27672_27842,n__22543__auto___27840,jobs,results,process,async))
;
return ((function (__27841,switch__27167__auto__,c__27279__auto___27853,G__27672_27842,n__22543__auto___27840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null];
(statearr_27723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1 = (function (state_27712){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_27712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__27171__auto__ = e27724;
var statearr_27725_27860 = state_27712;
(statearr_27725_27860[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27861 = state_27712;
state_27712 = G__27861;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = function(state_27712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1.call(this,state_27712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__;
})()
;})(__27841,switch__27167__auto__,c__27279__auto___27853,G__27672_27842,n__22543__auto___27840,jobs,results,process,async))
})();
var state__27281__auto__ = (function (){var statearr_27726 = f__27280__auto__.call(null);
(statearr_27726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___27853);

return statearr_27726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(__27841,c__27279__auto___27853,G__27672_27842,n__22543__auto___27840,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27862 = (__27841 + (1));
__27841 = G__27862;
continue;
} else {
}
break;
}

var c__27279__auto___27863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___27863,jobs,results,process,async){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___27863,jobs,results,process,async){
return (function (state_27748){
var state_val_27749 = (state_27748[(1)]);
if((state_val_27749 === (1))){
var state_27748__$1 = state_27748;
var statearr_27750_27864 = state_27748__$1;
(statearr_27750_27864[(2)] = null);

(statearr_27750_27864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (2))){
var state_27748__$1 = state_27748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27748__$1,(4),from);
} else {
if((state_val_27749 === (3))){
var inst_27746 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27748__$1,inst_27746);
} else {
if((state_val_27749 === (4))){
var inst_27729 = (state_27748[(7)]);
var inst_27729__$1 = (state_27748[(2)]);
var inst_27730 = (inst_27729__$1 == null);
var state_27748__$1 = (function (){var statearr_27751 = state_27748;
(statearr_27751[(7)] = inst_27729__$1);

return statearr_27751;
})();
if(cljs.core.truth_(inst_27730)){
var statearr_27752_27865 = state_27748__$1;
(statearr_27752_27865[(1)] = (5));

} else {
var statearr_27753_27866 = state_27748__$1;
(statearr_27753_27866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (5))){
var inst_27732 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27748__$1 = state_27748;
var statearr_27754_27867 = state_27748__$1;
(statearr_27754_27867[(2)] = inst_27732);

(statearr_27754_27867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (6))){
var inst_27734 = (state_27748[(8)]);
var inst_27729 = (state_27748[(7)]);
var inst_27734__$1 = cljs.core.async.chan.call(null,(1));
var inst_27735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27736 = [inst_27729,inst_27734__$1];
var inst_27737 = (new cljs.core.PersistentVector(null,2,(5),inst_27735,inst_27736,null));
var state_27748__$1 = (function (){var statearr_27755 = state_27748;
(statearr_27755[(8)] = inst_27734__$1);

return statearr_27755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27748__$1,(8),jobs,inst_27737);
} else {
if((state_val_27749 === (7))){
var inst_27744 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27756_27868 = state_27748__$1;
(statearr_27756_27868[(2)] = inst_27744);

(statearr_27756_27868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (8))){
var inst_27734 = (state_27748[(8)]);
var inst_27739 = (state_27748[(2)]);
var state_27748__$1 = (function (){var statearr_27757 = state_27748;
(statearr_27757[(9)] = inst_27739);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27748__$1,(9),results,inst_27734);
} else {
if((state_val_27749 === (9))){
var inst_27741 = (state_27748[(2)]);
var state_27748__$1 = (function (){var statearr_27758 = state_27748;
(statearr_27758[(10)] = inst_27741);

return statearr_27758;
})();
var statearr_27759_27869 = state_27748__$1;
(statearr_27759_27869[(2)] = null);

(statearr_27759_27869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___27863,jobs,results,process,async))
;
return ((function (switch__27167__auto__,c__27279__auto___27863,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0 = (function (){
var statearr_27763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__);

(statearr_27763[(1)] = (1));

return statearr_27763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1 = (function (state_27748){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_27748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e27764){if((e27764 instanceof Object)){
var ex__27171__auto__ = e27764;
var statearr_27765_27870 = state_27748;
(statearr_27765_27870[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27871 = state_27748;
state_27748 = G__27871;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = function(state_27748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1.call(this,state_27748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___27863,jobs,results,process,async))
})();
var state__27281__auto__ = (function (){var statearr_27766 = f__27280__auto__.call(null);
(statearr_27766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___27863);

return statearr_27766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___27863,jobs,results,process,async))
);


var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__,jobs,results,process,async){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__,jobs,results,process,async){
return (function (state_27804){
var state_val_27805 = (state_27804[(1)]);
if((state_val_27805 === (7))){
var inst_27800 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27806_27872 = state_27804__$1;
(statearr_27806_27872[(2)] = inst_27800);

(statearr_27806_27872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (20))){
var state_27804__$1 = state_27804;
var statearr_27807_27873 = state_27804__$1;
(statearr_27807_27873[(2)] = null);

(statearr_27807_27873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (1))){
var state_27804__$1 = state_27804;
var statearr_27808_27874 = state_27804__$1;
(statearr_27808_27874[(2)] = null);

(statearr_27808_27874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (4))){
var inst_27769 = (state_27804[(7)]);
var inst_27769__$1 = (state_27804[(2)]);
var inst_27770 = (inst_27769__$1 == null);
var state_27804__$1 = (function (){var statearr_27809 = state_27804;
(statearr_27809[(7)] = inst_27769__$1);

return statearr_27809;
})();
if(cljs.core.truth_(inst_27770)){
var statearr_27810_27875 = state_27804__$1;
(statearr_27810_27875[(1)] = (5));

} else {
var statearr_27811_27876 = state_27804__$1;
(statearr_27811_27876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (15))){
var inst_27782 = (state_27804[(8)]);
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27804__$1,(18),to,inst_27782);
} else {
if((state_val_27805 === (21))){
var inst_27795 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27812_27877 = state_27804__$1;
(statearr_27812_27877[(2)] = inst_27795);

(statearr_27812_27877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (13))){
var inst_27797 = (state_27804[(2)]);
var state_27804__$1 = (function (){var statearr_27813 = state_27804;
(statearr_27813[(9)] = inst_27797);

return statearr_27813;
})();
var statearr_27814_27878 = state_27804__$1;
(statearr_27814_27878[(2)] = null);

(statearr_27814_27878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (6))){
var inst_27769 = (state_27804[(7)]);
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27804__$1,(11),inst_27769);
} else {
if((state_val_27805 === (17))){
var inst_27790 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
if(cljs.core.truth_(inst_27790)){
var statearr_27815_27879 = state_27804__$1;
(statearr_27815_27879[(1)] = (19));

} else {
var statearr_27816_27880 = state_27804__$1;
(statearr_27816_27880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (3))){
var inst_27802 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27804__$1,inst_27802);
} else {
if((state_val_27805 === (12))){
var inst_27779 = (state_27804[(10)]);
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27804__$1,(14),inst_27779);
} else {
if((state_val_27805 === (2))){
var state_27804__$1 = state_27804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27804__$1,(4),results);
} else {
if((state_val_27805 === (19))){
var state_27804__$1 = state_27804;
var statearr_27817_27881 = state_27804__$1;
(statearr_27817_27881[(2)] = null);

(statearr_27817_27881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (11))){
var inst_27779 = (state_27804[(2)]);
var state_27804__$1 = (function (){var statearr_27818 = state_27804;
(statearr_27818[(10)] = inst_27779);

return statearr_27818;
})();
var statearr_27819_27882 = state_27804__$1;
(statearr_27819_27882[(2)] = null);

(statearr_27819_27882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (9))){
var state_27804__$1 = state_27804;
var statearr_27820_27883 = state_27804__$1;
(statearr_27820_27883[(2)] = null);

(statearr_27820_27883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (5))){
var state_27804__$1 = state_27804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27821_27884 = state_27804__$1;
(statearr_27821_27884[(1)] = (8));

} else {
var statearr_27822_27885 = state_27804__$1;
(statearr_27822_27885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (14))){
var inst_27784 = (state_27804[(11)]);
var inst_27782 = (state_27804[(8)]);
var inst_27782__$1 = (state_27804[(2)]);
var inst_27783 = (inst_27782__$1 == null);
var inst_27784__$1 = cljs.core.not.call(null,inst_27783);
var state_27804__$1 = (function (){var statearr_27823 = state_27804;
(statearr_27823[(11)] = inst_27784__$1);

(statearr_27823[(8)] = inst_27782__$1);

return statearr_27823;
})();
if(inst_27784__$1){
var statearr_27824_27886 = state_27804__$1;
(statearr_27824_27886[(1)] = (15));

} else {
var statearr_27825_27887 = state_27804__$1;
(statearr_27825_27887[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (16))){
var inst_27784 = (state_27804[(11)]);
var state_27804__$1 = state_27804;
var statearr_27826_27888 = state_27804__$1;
(statearr_27826_27888[(2)] = inst_27784);

(statearr_27826_27888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (10))){
var inst_27776 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27827_27889 = state_27804__$1;
(statearr_27827_27889[(2)] = inst_27776);

(statearr_27827_27889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (18))){
var inst_27787 = (state_27804[(2)]);
var state_27804__$1 = state_27804;
var statearr_27828_27890 = state_27804__$1;
(statearr_27828_27890[(2)] = inst_27787);

(statearr_27828_27890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27805 === (8))){
var inst_27773 = cljs.core.async.close_BANG_.call(null,to);
var state_27804__$1 = state_27804;
var statearr_27829_27891 = state_27804__$1;
(statearr_27829_27891[(2)] = inst_27773);

(statearr_27829_27891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto__,jobs,results,process,async))
;
return ((function (switch__27167__auto__,c__27279__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0 = (function (){
var statearr_27833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__);

(statearr_27833[(1)] = (1));

return statearr_27833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1 = (function (state_27804){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_27804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e27834){if((e27834 instanceof Object)){
var ex__27171__auto__ = e27834;
var statearr_27835_27892 = state_27804;
(statearr_27835_27892[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27893 = state_27804;
state_27804 = G__27893;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__ = function(state_27804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1.call(this,state_27804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__,jobs,results,process,async))
})();
var state__27281__auto__ = (function (){var statearr_27836 = f__27280__auto__.call(null);
(statearr_27836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_27836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__,jobs,results,process,async))
);

return c__27279__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27894 = [];
var len__22733__auto___27897 = arguments.length;
var i__22734__auto___27898 = (0);
while(true){
if((i__22734__auto___27898 < len__22733__auto___27897)){
args27894.push((arguments[i__22734__auto___27898]));

var G__27899 = (i__22734__auto___27898 + (1));
i__22734__auto___27898 = G__27899;
continue;
} else {
}
break;
}

var G__27896 = args27894.length;
switch (G__27896) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27894.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27901 = [];
var len__22733__auto___27904 = arguments.length;
var i__22734__auto___27905 = (0);
while(true){
if((i__22734__auto___27905 < len__22733__auto___27904)){
args27901.push((arguments[i__22734__auto___27905]));

var G__27906 = (i__22734__auto___27905 + (1));
i__22734__auto___27905 = G__27906;
continue;
} else {
}
break;
}

var G__27903 = args27901.length;
switch (G__27903) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27901.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27908 = [];
var len__22733__auto___27961 = arguments.length;
var i__22734__auto___27962 = (0);
while(true){
if((i__22734__auto___27962 < len__22733__auto___27961)){
args27908.push((arguments[i__22734__auto___27962]));

var G__27963 = (i__22734__auto___27962 + (1));
i__22734__auto___27962 = G__27963;
continue;
} else {
}
break;
}

var G__27910 = args27908.length;
switch (G__27910) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27908.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27279__auto___27965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___27965,tc,fc){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___27965,tc,fc){
return (function (state_27936){
var state_val_27937 = (state_27936[(1)]);
if((state_val_27937 === (7))){
var inst_27932 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27938_27966 = state_27936__$1;
(statearr_27938_27966[(2)] = inst_27932);

(statearr_27938_27966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (1))){
var state_27936__$1 = state_27936;
var statearr_27939_27967 = state_27936__$1;
(statearr_27939_27967[(2)] = null);

(statearr_27939_27967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (4))){
var inst_27913 = (state_27936[(7)]);
var inst_27913__$1 = (state_27936[(2)]);
var inst_27914 = (inst_27913__$1 == null);
var state_27936__$1 = (function (){var statearr_27940 = state_27936;
(statearr_27940[(7)] = inst_27913__$1);

return statearr_27940;
})();
if(cljs.core.truth_(inst_27914)){
var statearr_27941_27968 = state_27936__$1;
(statearr_27941_27968[(1)] = (5));

} else {
var statearr_27942_27969 = state_27936__$1;
(statearr_27942_27969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (13))){
var state_27936__$1 = state_27936;
var statearr_27943_27970 = state_27936__$1;
(statearr_27943_27970[(2)] = null);

(statearr_27943_27970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (6))){
var inst_27913 = (state_27936[(7)]);
var inst_27919 = p.call(null,inst_27913);
var state_27936__$1 = state_27936;
if(cljs.core.truth_(inst_27919)){
var statearr_27944_27971 = state_27936__$1;
(statearr_27944_27971[(1)] = (9));

} else {
var statearr_27945_27972 = state_27936__$1;
(statearr_27945_27972[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (3))){
var inst_27934 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27936__$1,inst_27934);
} else {
if((state_val_27937 === (12))){
var state_27936__$1 = state_27936;
var statearr_27946_27973 = state_27936__$1;
(statearr_27946_27973[(2)] = null);

(statearr_27946_27973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (2))){
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27936__$1,(4),ch);
} else {
if((state_val_27937 === (11))){
var inst_27913 = (state_27936[(7)]);
var inst_27923 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27936__$1,(8),inst_27923,inst_27913);
} else {
if((state_val_27937 === (9))){
var state_27936__$1 = state_27936;
var statearr_27947_27974 = state_27936__$1;
(statearr_27947_27974[(2)] = tc);

(statearr_27947_27974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (5))){
var inst_27916 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27917 = cljs.core.async.close_BANG_.call(null,fc);
var state_27936__$1 = (function (){var statearr_27948 = state_27936;
(statearr_27948[(8)] = inst_27916);

return statearr_27948;
})();
var statearr_27949_27975 = state_27936__$1;
(statearr_27949_27975[(2)] = inst_27917);

(statearr_27949_27975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (14))){
var inst_27930 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27950_27976 = state_27936__$1;
(statearr_27950_27976[(2)] = inst_27930);

(statearr_27950_27976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (10))){
var state_27936__$1 = state_27936;
var statearr_27951_27977 = state_27936__$1;
(statearr_27951_27977[(2)] = fc);

(statearr_27951_27977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (8))){
var inst_27925 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
if(cljs.core.truth_(inst_27925)){
var statearr_27952_27978 = state_27936__$1;
(statearr_27952_27978[(1)] = (12));

} else {
var statearr_27953_27979 = state_27936__$1;
(statearr_27953_27979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___27965,tc,fc))
;
return ((function (switch__27167__auto__,c__27279__auto___27965,tc,fc){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_27957 = [null,null,null,null,null,null,null,null,null];
(statearr_27957[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_27957[(1)] = (1));

return statearr_27957;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_27936){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_27936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e27958){if((e27958 instanceof Object)){
var ex__27171__auto__ = e27958;
var statearr_27959_27980 = state_27936;
(statearr_27959_27980[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27981 = state_27936;
state_27936 = G__27981;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_27936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_27936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___27965,tc,fc))
})();
var state__27281__auto__ = (function (){var statearr_27960 = f__27280__auto__.call(null);
(statearr_27960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___27965);

return statearr_27960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___27965,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__){
return (function (state_28045){
var state_val_28046 = (state_28045[(1)]);
if((state_val_28046 === (7))){
var inst_28041 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28047_28068 = state_28045__$1;
(statearr_28047_28068[(2)] = inst_28041);

(statearr_28047_28068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (1))){
var inst_28025 = init;
var state_28045__$1 = (function (){var statearr_28048 = state_28045;
(statearr_28048[(7)] = inst_28025);

return statearr_28048;
})();
var statearr_28049_28069 = state_28045__$1;
(statearr_28049_28069[(2)] = null);

(statearr_28049_28069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (4))){
var inst_28028 = (state_28045[(8)]);
var inst_28028__$1 = (state_28045[(2)]);
var inst_28029 = (inst_28028__$1 == null);
var state_28045__$1 = (function (){var statearr_28050 = state_28045;
(statearr_28050[(8)] = inst_28028__$1);

return statearr_28050;
})();
if(cljs.core.truth_(inst_28029)){
var statearr_28051_28070 = state_28045__$1;
(statearr_28051_28070[(1)] = (5));

} else {
var statearr_28052_28071 = state_28045__$1;
(statearr_28052_28071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (6))){
var inst_28025 = (state_28045[(7)]);
var inst_28028 = (state_28045[(8)]);
var inst_28032 = (state_28045[(9)]);
var inst_28032__$1 = f.call(null,inst_28025,inst_28028);
var inst_28033 = cljs.core.reduced_QMARK_.call(null,inst_28032__$1);
var state_28045__$1 = (function (){var statearr_28053 = state_28045;
(statearr_28053[(9)] = inst_28032__$1);

return statearr_28053;
})();
if(inst_28033){
var statearr_28054_28072 = state_28045__$1;
(statearr_28054_28072[(1)] = (8));

} else {
var statearr_28055_28073 = state_28045__$1;
(statearr_28055_28073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (3))){
var inst_28043 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28045__$1,inst_28043);
} else {
if((state_val_28046 === (2))){
var state_28045__$1 = state_28045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28045__$1,(4),ch);
} else {
if((state_val_28046 === (9))){
var inst_28032 = (state_28045[(9)]);
var inst_28025 = inst_28032;
var state_28045__$1 = (function (){var statearr_28056 = state_28045;
(statearr_28056[(7)] = inst_28025);

return statearr_28056;
})();
var statearr_28057_28074 = state_28045__$1;
(statearr_28057_28074[(2)] = null);

(statearr_28057_28074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (5))){
var inst_28025 = (state_28045[(7)]);
var state_28045__$1 = state_28045;
var statearr_28058_28075 = state_28045__$1;
(statearr_28058_28075[(2)] = inst_28025);

(statearr_28058_28075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (10))){
var inst_28039 = (state_28045[(2)]);
var state_28045__$1 = state_28045;
var statearr_28059_28076 = state_28045__$1;
(statearr_28059_28076[(2)] = inst_28039);

(statearr_28059_28076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28046 === (8))){
var inst_28032 = (state_28045[(9)]);
var inst_28035 = cljs.core.deref.call(null,inst_28032);
var state_28045__$1 = state_28045;
var statearr_28060_28077 = state_28045__$1;
(statearr_28060_28077[(2)] = inst_28035);

(statearr_28060_28077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto__))
;
return ((function (switch__27167__auto__,c__27279__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27168__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27168__auto____0 = (function (){
var statearr_28064 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28064[(0)] = cljs$core$async$reduce_$_state_machine__27168__auto__);

(statearr_28064[(1)] = (1));

return statearr_28064;
});
var cljs$core$async$reduce_$_state_machine__27168__auto____1 = (function (state_28045){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_28045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e28065){if((e28065 instanceof Object)){
var ex__27171__auto__ = e28065;
var statearr_28066_28078 = state_28045;
(statearr_28066_28078[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28079 = state_28045;
state_28045 = G__28079;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27168__auto__ = function(state_28045){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27168__auto____1.call(this,state_28045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27168__auto____0;
cljs$core$async$reduce_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27168__auto____1;
return cljs$core$async$reduce_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__))
})();
var state__27281__auto__ = (function (){var statearr_28067 = f__27280__auto__.call(null);
(statearr_28067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_28067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__))
);

return c__27279__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28080 = [];
var len__22733__auto___28132 = arguments.length;
var i__22734__auto___28133 = (0);
while(true){
if((i__22734__auto___28133 < len__22733__auto___28132)){
args28080.push((arguments[i__22734__auto___28133]));

var G__28134 = (i__22734__auto___28133 + (1));
i__22734__auto___28133 = G__28134;
continue;
} else {
}
break;
}

var G__28082 = args28080.length;
switch (G__28082) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28080.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__){
return (function (state_28107){
var state_val_28108 = (state_28107[(1)]);
if((state_val_28108 === (7))){
var inst_28089 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28109_28136 = state_28107__$1;
(statearr_28109_28136[(2)] = inst_28089);

(statearr_28109_28136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (1))){
var inst_28083 = cljs.core.seq.call(null,coll);
var inst_28084 = inst_28083;
var state_28107__$1 = (function (){var statearr_28110 = state_28107;
(statearr_28110[(7)] = inst_28084);

return statearr_28110;
})();
var statearr_28111_28137 = state_28107__$1;
(statearr_28111_28137[(2)] = null);

(statearr_28111_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (4))){
var inst_28084 = (state_28107[(7)]);
var inst_28087 = cljs.core.first.call(null,inst_28084);
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28107__$1,(7),ch,inst_28087);
} else {
if((state_val_28108 === (13))){
var inst_28101 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28112_28138 = state_28107__$1;
(statearr_28112_28138[(2)] = inst_28101);

(statearr_28112_28138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (6))){
var inst_28092 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
if(cljs.core.truth_(inst_28092)){
var statearr_28113_28139 = state_28107__$1;
(statearr_28113_28139[(1)] = (8));

} else {
var statearr_28114_28140 = state_28107__$1;
(statearr_28114_28140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (3))){
var inst_28105 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28107__$1,inst_28105);
} else {
if((state_val_28108 === (12))){
var state_28107__$1 = state_28107;
var statearr_28115_28141 = state_28107__$1;
(statearr_28115_28141[(2)] = null);

(statearr_28115_28141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (2))){
var inst_28084 = (state_28107[(7)]);
var state_28107__$1 = state_28107;
if(cljs.core.truth_(inst_28084)){
var statearr_28116_28142 = state_28107__$1;
(statearr_28116_28142[(1)] = (4));

} else {
var statearr_28117_28143 = state_28107__$1;
(statearr_28117_28143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (11))){
var inst_28098 = cljs.core.async.close_BANG_.call(null,ch);
var state_28107__$1 = state_28107;
var statearr_28118_28144 = state_28107__$1;
(statearr_28118_28144[(2)] = inst_28098);

(statearr_28118_28144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (9))){
var state_28107__$1 = state_28107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28119_28145 = state_28107__$1;
(statearr_28119_28145[(1)] = (11));

} else {
var statearr_28120_28146 = state_28107__$1;
(statearr_28120_28146[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (5))){
var inst_28084 = (state_28107[(7)]);
var state_28107__$1 = state_28107;
var statearr_28121_28147 = state_28107__$1;
(statearr_28121_28147[(2)] = inst_28084);

(statearr_28121_28147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (10))){
var inst_28103 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28122_28148 = state_28107__$1;
(statearr_28122_28148[(2)] = inst_28103);

(statearr_28122_28148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (8))){
var inst_28084 = (state_28107[(7)]);
var inst_28094 = cljs.core.next.call(null,inst_28084);
var inst_28084__$1 = inst_28094;
var state_28107__$1 = (function (){var statearr_28123 = state_28107;
(statearr_28123[(7)] = inst_28084__$1);

return statearr_28123;
})();
var statearr_28124_28149 = state_28107__$1;
(statearr_28124_28149[(2)] = null);

(statearr_28124_28149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto__))
;
return ((function (switch__27167__auto__,c__27279__auto__){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_28128 = [null,null,null,null,null,null,null,null];
(statearr_28128[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_28128[(1)] = (1));

return statearr_28128;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_28107){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_28107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e28129){if((e28129 instanceof Object)){
var ex__27171__auto__ = e28129;
var statearr_28130_28150 = state_28107;
(statearr_28130_28150[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28151 = state_28107;
state_28107 = G__28151;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_28107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_28107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__))
})();
var state__27281__auto__ = (function (){var statearr_28131 = f__27280__auto__.call(null);
(statearr_28131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_28131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__))
);

return c__27279__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22288__auto__ = (((_ == null))?null:_);
var m__22289__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,_);
} else {
var m__22289__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22288__auto__ = (((m == null))?null:m);
var m__22289__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22289__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22288__auto__ = (((m == null))?null:m);
var m__22289__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,m,ch);
} else {
var m__22289__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22288__auto__ = (((m == null))?null:m);
var m__22289__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,m);
} else {
var m__22289__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28377 = (function (ch,cs,meta28378){
this.ch = ch;
this.cs = cs;
this.meta28378 = meta28378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28379,meta28378__$1){
var self__ = this;
var _28379__$1 = this;
return (new cljs.core.async.t_cljs$core$async28377(self__.ch,self__.cs,meta28378__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28379){
var self__ = this;
var _28379__$1 = this;
return self__.meta28378;
});})(cs))
;

cljs.core.async.t_cljs$core$async28377.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28377.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28377.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28377.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28377.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28377.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28378","meta28378",298923546,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28377";

cljs.core.async.t_cljs$core$async28377.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async28377");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28377 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28377(ch__$1,cs__$1,meta28378){
return (new cljs.core.async.t_cljs$core$async28377(ch__$1,cs__$1,meta28378));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28377(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27279__auto___28602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___28602,cs,m,dchan,dctr,done){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___28602,cs,m,dchan,dctr,done){
return (function (state_28514){
var state_val_28515 = (state_28514[(1)]);
if((state_val_28515 === (7))){
var inst_28510 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28516_28603 = state_28514__$1;
(statearr_28516_28603[(2)] = inst_28510);

(statearr_28516_28603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (20))){
var inst_28413 = (state_28514[(7)]);
var inst_28425 = cljs.core.first.call(null,inst_28413);
var inst_28426 = cljs.core.nth.call(null,inst_28425,(0),null);
var inst_28427 = cljs.core.nth.call(null,inst_28425,(1),null);
var state_28514__$1 = (function (){var statearr_28517 = state_28514;
(statearr_28517[(8)] = inst_28426);

return statearr_28517;
})();
if(cljs.core.truth_(inst_28427)){
var statearr_28518_28604 = state_28514__$1;
(statearr_28518_28604[(1)] = (22));

} else {
var statearr_28519_28605 = state_28514__$1;
(statearr_28519_28605[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (27))){
var inst_28455 = (state_28514[(9)]);
var inst_28382 = (state_28514[(10)]);
var inst_28462 = (state_28514[(11)]);
var inst_28457 = (state_28514[(12)]);
var inst_28462__$1 = cljs.core._nth.call(null,inst_28455,inst_28457);
var inst_28463 = cljs.core.async.put_BANG_.call(null,inst_28462__$1,inst_28382,done);
var state_28514__$1 = (function (){var statearr_28520 = state_28514;
(statearr_28520[(11)] = inst_28462__$1);

return statearr_28520;
})();
if(cljs.core.truth_(inst_28463)){
var statearr_28521_28606 = state_28514__$1;
(statearr_28521_28606[(1)] = (30));

} else {
var statearr_28522_28607 = state_28514__$1;
(statearr_28522_28607[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (1))){
var state_28514__$1 = state_28514;
var statearr_28523_28608 = state_28514__$1;
(statearr_28523_28608[(2)] = null);

(statearr_28523_28608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (24))){
var inst_28413 = (state_28514[(7)]);
var inst_28432 = (state_28514[(2)]);
var inst_28433 = cljs.core.next.call(null,inst_28413);
var inst_28391 = inst_28433;
var inst_28392 = null;
var inst_28393 = (0);
var inst_28394 = (0);
var state_28514__$1 = (function (){var statearr_28524 = state_28514;
(statearr_28524[(13)] = inst_28391);

(statearr_28524[(14)] = inst_28432);

(statearr_28524[(15)] = inst_28394);

(statearr_28524[(16)] = inst_28392);

(statearr_28524[(17)] = inst_28393);

return statearr_28524;
})();
var statearr_28525_28609 = state_28514__$1;
(statearr_28525_28609[(2)] = null);

(statearr_28525_28609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (39))){
var state_28514__$1 = state_28514;
var statearr_28529_28610 = state_28514__$1;
(statearr_28529_28610[(2)] = null);

(statearr_28529_28610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (4))){
var inst_28382 = (state_28514[(10)]);
var inst_28382__$1 = (state_28514[(2)]);
var inst_28383 = (inst_28382__$1 == null);
var state_28514__$1 = (function (){var statearr_28530 = state_28514;
(statearr_28530[(10)] = inst_28382__$1);

return statearr_28530;
})();
if(cljs.core.truth_(inst_28383)){
var statearr_28531_28611 = state_28514__$1;
(statearr_28531_28611[(1)] = (5));

} else {
var statearr_28532_28612 = state_28514__$1;
(statearr_28532_28612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (15))){
var inst_28391 = (state_28514[(13)]);
var inst_28394 = (state_28514[(15)]);
var inst_28392 = (state_28514[(16)]);
var inst_28393 = (state_28514[(17)]);
var inst_28409 = (state_28514[(2)]);
var inst_28410 = (inst_28394 + (1));
var tmp28526 = inst_28391;
var tmp28527 = inst_28392;
var tmp28528 = inst_28393;
var inst_28391__$1 = tmp28526;
var inst_28392__$1 = tmp28527;
var inst_28393__$1 = tmp28528;
var inst_28394__$1 = inst_28410;
var state_28514__$1 = (function (){var statearr_28533 = state_28514;
(statearr_28533[(18)] = inst_28409);

(statearr_28533[(13)] = inst_28391__$1);

(statearr_28533[(15)] = inst_28394__$1);

(statearr_28533[(16)] = inst_28392__$1);

(statearr_28533[(17)] = inst_28393__$1);

return statearr_28533;
})();
var statearr_28534_28613 = state_28514__$1;
(statearr_28534_28613[(2)] = null);

(statearr_28534_28613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (21))){
var inst_28436 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28538_28614 = state_28514__$1;
(statearr_28538_28614[(2)] = inst_28436);

(statearr_28538_28614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (31))){
var inst_28462 = (state_28514[(11)]);
var inst_28466 = done.call(null,null);
var inst_28467 = cljs.core.async.untap_STAR_.call(null,m,inst_28462);
var state_28514__$1 = (function (){var statearr_28539 = state_28514;
(statearr_28539[(19)] = inst_28466);

return statearr_28539;
})();
var statearr_28540_28615 = state_28514__$1;
(statearr_28540_28615[(2)] = inst_28467);

(statearr_28540_28615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (32))){
var inst_28455 = (state_28514[(9)]);
var inst_28457 = (state_28514[(12)]);
var inst_28454 = (state_28514[(20)]);
var inst_28456 = (state_28514[(21)]);
var inst_28469 = (state_28514[(2)]);
var inst_28470 = (inst_28457 + (1));
var tmp28535 = inst_28455;
var tmp28536 = inst_28454;
var tmp28537 = inst_28456;
var inst_28454__$1 = tmp28536;
var inst_28455__$1 = tmp28535;
var inst_28456__$1 = tmp28537;
var inst_28457__$1 = inst_28470;
var state_28514__$1 = (function (){var statearr_28541 = state_28514;
(statearr_28541[(9)] = inst_28455__$1);

(statearr_28541[(12)] = inst_28457__$1);

(statearr_28541[(20)] = inst_28454__$1);

(statearr_28541[(21)] = inst_28456__$1);

(statearr_28541[(22)] = inst_28469);

return statearr_28541;
})();
var statearr_28542_28616 = state_28514__$1;
(statearr_28542_28616[(2)] = null);

(statearr_28542_28616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (40))){
var inst_28482 = (state_28514[(23)]);
var inst_28486 = done.call(null,null);
var inst_28487 = cljs.core.async.untap_STAR_.call(null,m,inst_28482);
var state_28514__$1 = (function (){var statearr_28543 = state_28514;
(statearr_28543[(24)] = inst_28486);

return statearr_28543;
})();
var statearr_28544_28617 = state_28514__$1;
(statearr_28544_28617[(2)] = inst_28487);

(statearr_28544_28617[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (33))){
var inst_28473 = (state_28514[(25)]);
var inst_28475 = cljs.core.chunked_seq_QMARK_.call(null,inst_28473);
var state_28514__$1 = state_28514;
if(inst_28475){
var statearr_28545_28618 = state_28514__$1;
(statearr_28545_28618[(1)] = (36));

} else {
var statearr_28546_28619 = state_28514__$1;
(statearr_28546_28619[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (13))){
var inst_28403 = (state_28514[(26)]);
var inst_28406 = cljs.core.async.close_BANG_.call(null,inst_28403);
var state_28514__$1 = state_28514;
var statearr_28547_28620 = state_28514__$1;
(statearr_28547_28620[(2)] = inst_28406);

(statearr_28547_28620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (22))){
var inst_28426 = (state_28514[(8)]);
var inst_28429 = cljs.core.async.close_BANG_.call(null,inst_28426);
var state_28514__$1 = state_28514;
var statearr_28548_28621 = state_28514__$1;
(statearr_28548_28621[(2)] = inst_28429);

(statearr_28548_28621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (36))){
var inst_28473 = (state_28514[(25)]);
var inst_28477 = cljs.core.chunk_first.call(null,inst_28473);
var inst_28478 = cljs.core.chunk_rest.call(null,inst_28473);
var inst_28479 = cljs.core.count.call(null,inst_28477);
var inst_28454 = inst_28478;
var inst_28455 = inst_28477;
var inst_28456 = inst_28479;
var inst_28457 = (0);
var state_28514__$1 = (function (){var statearr_28549 = state_28514;
(statearr_28549[(9)] = inst_28455);

(statearr_28549[(12)] = inst_28457);

(statearr_28549[(20)] = inst_28454);

(statearr_28549[(21)] = inst_28456);

return statearr_28549;
})();
var statearr_28550_28622 = state_28514__$1;
(statearr_28550_28622[(2)] = null);

(statearr_28550_28622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (41))){
var inst_28473 = (state_28514[(25)]);
var inst_28489 = (state_28514[(2)]);
var inst_28490 = cljs.core.next.call(null,inst_28473);
var inst_28454 = inst_28490;
var inst_28455 = null;
var inst_28456 = (0);
var inst_28457 = (0);
var state_28514__$1 = (function (){var statearr_28551 = state_28514;
(statearr_28551[(9)] = inst_28455);

(statearr_28551[(12)] = inst_28457);

(statearr_28551[(20)] = inst_28454);

(statearr_28551[(21)] = inst_28456);

(statearr_28551[(27)] = inst_28489);

return statearr_28551;
})();
var statearr_28552_28623 = state_28514__$1;
(statearr_28552_28623[(2)] = null);

(statearr_28552_28623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (43))){
var state_28514__$1 = state_28514;
var statearr_28553_28624 = state_28514__$1;
(statearr_28553_28624[(2)] = null);

(statearr_28553_28624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (29))){
var inst_28498 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28554_28625 = state_28514__$1;
(statearr_28554_28625[(2)] = inst_28498);

(statearr_28554_28625[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (44))){
var inst_28507 = (state_28514[(2)]);
var state_28514__$1 = (function (){var statearr_28555 = state_28514;
(statearr_28555[(28)] = inst_28507);

return statearr_28555;
})();
var statearr_28556_28626 = state_28514__$1;
(statearr_28556_28626[(2)] = null);

(statearr_28556_28626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (6))){
var inst_28446 = (state_28514[(29)]);
var inst_28445 = cljs.core.deref.call(null,cs);
var inst_28446__$1 = cljs.core.keys.call(null,inst_28445);
var inst_28447 = cljs.core.count.call(null,inst_28446__$1);
var inst_28448 = cljs.core.reset_BANG_.call(null,dctr,inst_28447);
var inst_28453 = cljs.core.seq.call(null,inst_28446__$1);
var inst_28454 = inst_28453;
var inst_28455 = null;
var inst_28456 = (0);
var inst_28457 = (0);
var state_28514__$1 = (function (){var statearr_28557 = state_28514;
(statearr_28557[(9)] = inst_28455);

(statearr_28557[(12)] = inst_28457);

(statearr_28557[(29)] = inst_28446__$1);

(statearr_28557[(20)] = inst_28454);

(statearr_28557[(21)] = inst_28456);

(statearr_28557[(30)] = inst_28448);

return statearr_28557;
})();
var statearr_28558_28627 = state_28514__$1;
(statearr_28558_28627[(2)] = null);

(statearr_28558_28627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (28))){
var inst_28454 = (state_28514[(20)]);
var inst_28473 = (state_28514[(25)]);
var inst_28473__$1 = cljs.core.seq.call(null,inst_28454);
var state_28514__$1 = (function (){var statearr_28559 = state_28514;
(statearr_28559[(25)] = inst_28473__$1);

return statearr_28559;
})();
if(inst_28473__$1){
var statearr_28560_28628 = state_28514__$1;
(statearr_28560_28628[(1)] = (33));

} else {
var statearr_28561_28629 = state_28514__$1;
(statearr_28561_28629[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (25))){
var inst_28457 = (state_28514[(12)]);
var inst_28456 = (state_28514[(21)]);
var inst_28459 = (inst_28457 < inst_28456);
var inst_28460 = inst_28459;
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28460)){
var statearr_28562_28630 = state_28514__$1;
(statearr_28562_28630[(1)] = (27));

} else {
var statearr_28563_28631 = state_28514__$1;
(statearr_28563_28631[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (34))){
var state_28514__$1 = state_28514;
var statearr_28564_28632 = state_28514__$1;
(statearr_28564_28632[(2)] = null);

(statearr_28564_28632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (17))){
var state_28514__$1 = state_28514;
var statearr_28565_28633 = state_28514__$1;
(statearr_28565_28633[(2)] = null);

(statearr_28565_28633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (3))){
var inst_28512 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28514__$1,inst_28512);
} else {
if((state_val_28515 === (12))){
var inst_28441 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28566_28634 = state_28514__$1;
(statearr_28566_28634[(2)] = inst_28441);

(statearr_28566_28634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (2))){
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(4),ch);
} else {
if((state_val_28515 === (23))){
var state_28514__$1 = state_28514;
var statearr_28567_28635 = state_28514__$1;
(statearr_28567_28635[(2)] = null);

(statearr_28567_28635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (35))){
var inst_28496 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28568_28636 = state_28514__$1;
(statearr_28568_28636[(2)] = inst_28496);

(statearr_28568_28636[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (19))){
var inst_28413 = (state_28514[(7)]);
var inst_28417 = cljs.core.chunk_first.call(null,inst_28413);
var inst_28418 = cljs.core.chunk_rest.call(null,inst_28413);
var inst_28419 = cljs.core.count.call(null,inst_28417);
var inst_28391 = inst_28418;
var inst_28392 = inst_28417;
var inst_28393 = inst_28419;
var inst_28394 = (0);
var state_28514__$1 = (function (){var statearr_28569 = state_28514;
(statearr_28569[(13)] = inst_28391);

(statearr_28569[(15)] = inst_28394);

(statearr_28569[(16)] = inst_28392);

(statearr_28569[(17)] = inst_28393);

return statearr_28569;
})();
var statearr_28570_28637 = state_28514__$1;
(statearr_28570_28637[(2)] = null);

(statearr_28570_28637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (11))){
var inst_28391 = (state_28514[(13)]);
var inst_28413 = (state_28514[(7)]);
var inst_28413__$1 = cljs.core.seq.call(null,inst_28391);
var state_28514__$1 = (function (){var statearr_28571 = state_28514;
(statearr_28571[(7)] = inst_28413__$1);

return statearr_28571;
})();
if(inst_28413__$1){
var statearr_28572_28638 = state_28514__$1;
(statearr_28572_28638[(1)] = (16));

} else {
var statearr_28573_28639 = state_28514__$1;
(statearr_28573_28639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (9))){
var inst_28443 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28574_28640 = state_28514__$1;
(statearr_28574_28640[(2)] = inst_28443);

(statearr_28574_28640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (5))){
var inst_28389 = cljs.core.deref.call(null,cs);
var inst_28390 = cljs.core.seq.call(null,inst_28389);
var inst_28391 = inst_28390;
var inst_28392 = null;
var inst_28393 = (0);
var inst_28394 = (0);
var state_28514__$1 = (function (){var statearr_28575 = state_28514;
(statearr_28575[(13)] = inst_28391);

(statearr_28575[(15)] = inst_28394);

(statearr_28575[(16)] = inst_28392);

(statearr_28575[(17)] = inst_28393);

return statearr_28575;
})();
var statearr_28576_28641 = state_28514__$1;
(statearr_28576_28641[(2)] = null);

(statearr_28576_28641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (14))){
var state_28514__$1 = state_28514;
var statearr_28577_28642 = state_28514__$1;
(statearr_28577_28642[(2)] = null);

(statearr_28577_28642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (45))){
var inst_28504 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28578_28643 = state_28514__$1;
(statearr_28578_28643[(2)] = inst_28504);

(statearr_28578_28643[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (26))){
var inst_28446 = (state_28514[(29)]);
var inst_28500 = (state_28514[(2)]);
var inst_28501 = cljs.core.seq.call(null,inst_28446);
var state_28514__$1 = (function (){var statearr_28579 = state_28514;
(statearr_28579[(31)] = inst_28500);

return statearr_28579;
})();
if(inst_28501){
var statearr_28580_28644 = state_28514__$1;
(statearr_28580_28644[(1)] = (42));

} else {
var statearr_28581_28645 = state_28514__$1;
(statearr_28581_28645[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (16))){
var inst_28413 = (state_28514[(7)]);
var inst_28415 = cljs.core.chunked_seq_QMARK_.call(null,inst_28413);
var state_28514__$1 = state_28514;
if(inst_28415){
var statearr_28582_28646 = state_28514__$1;
(statearr_28582_28646[(1)] = (19));

} else {
var statearr_28583_28647 = state_28514__$1;
(statearr_28583_28647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (38))){
var inst_28493 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28584_28648 = state_28514__$1;
(statearr_28584_28648[(2)] = inst_28493);

(statearr_28584_28648[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (30))){
var state_28514__$1 = state_28514;
var statearr_28585_28649 = state_28514__$1;
(statearr_28585_28649[(2)] = null);

(statearr_28585_28649[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (10))){
var inst_28394 = (state_28514[(15)]);
var inst_28392 = (state_28514[(16)]);
var inst_28402 = cljs.core._nth.call(null,inst_28392,inst_28394);
var inst_28403 = cljs.core.nth.call(null,inst_28402,(0),null);
var inst_28404 = cljs.core.nth.call(null,inst_28402,(1),null);
var state_28514__$1 = (function (){var statearr_28586 = state_28514;
(statearr_28586[(26)] = inst_28403);

return statearr_28586;
})();
if(cljs.core.truth_(inst_28404)){
var statearr_28587_28650 = state_28514__$1;
(statearr_28587_28650[(1)] = (13));

} else {
var statearr_28588_28651 = state_28514__$1;
(statearr_28588_28651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (18))){
var inst_28439 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28589_28652 = state_28514__$1;
(statearr_28589_28652[(2)] = inst_28439);

(statearr_28589_28652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (42))){
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(45),dchan);
} else {
if((state_val_28515 === (37))){
var inst_28382 = (state_28514[(10)]);
var inst_28482 = (state_28514[(23)]);
var inst_28473 = (state_28514[(25)]);
var inst_28482__$1 = cljs.core.first.call(null,inst_28473);
var inst_28483 = cljs.core.async.put_BANG_.call(null,inst_28482__$1,inst_28382,done);
var state_28514__$1 = (function (){var statearr_28590 = state_28514;
(statearr_28590[(23)] = inst_28482__$1);

return statearr_28590;
})();
if(cljs.core.truth_(inst_28483)){
var statearr_28591_28653 = state_28514__$1;
(statearr_28591_28653[(1)] = (39));

} else {
var statearr_28592_28654 = state_28514__$1;
(statearr_28592_28654[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (8))){
var inst_28394 = (state_28514[(15)]);
var inst_28393 = (state_28514[(17)]);
var inst_28396 = (inst_28394 < inst_28393);
var inst_28397 = inst_28396;
var state_28514__$1 = state_28514;
if(cljs.core.truth_(inst_28397)){
var statearr_28593_28655 = state_28514__$1;
(statearr_28593_28655[(1)] = (10));

} else {
var statearr_28594_28656 = state_28514__$1;
(statearr_28594_28656[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___28602,cs,m,dchan,dctr,done))
;
return ((function (switch__27167__auto__,c__27279__auto___28602,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27168__auto__ = null;
var cljs$core$async$mult_$_state_machine__27168__auto____0 = (function (){
var statearr_28598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28598[(0)] = cljs$core$async$mult_$_state_machine__27168__auto__);

(statearr_28598[(1)] = (1));

return statearr_28598;
});
var cljs$core$async$mult_$_state_machine__27168__auto____1 = (function (state_28514){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_28514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e28599){if((e28599 instanceof Object)){
var ex__27171__auto__ = e28599;
var statearr_28600_28657 = state_28514;
(statearr_28600_28657[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28658 = state_28514;
state_28514 = G__28658;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27168__auto__ = function(state_28514){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27168__auto____1.call(this,state_28514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27168__auto____0;
cljs$core$async$mult_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27168__auto____1;
return cljs$core$async$mult_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___28602,cs,m,dchan,dctr,done))
})();
var state__27281__auto__ = (function (){var statearr_28601 = f__27280__auto__.call(null);
(statearr_28601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___28602);

return statearr_28601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___28602,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28659 = [];
var len__22733__auto___28662 = arguments.length;
var i__22734__auto___28663 = (0);
while(true){
if((i__22734__auto___28663 < len__22733__auto___28662)){
args28659.push((arguments[i__22734__auto___28663]));

var G__28664 = (i__22734__auto___28663 + (1));
i__22734__auto___28663 = G__28664;
continue;
} else {
}
break;
}

var G__28661 = args28659.length;
switch (G__28661) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28659.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22288__auto__ = (((m == null))?null:m);
var m__22289__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,m,ch);
} else {
var m__22289__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22288__auto__ = (((m == null))?null:m);
var m__22289__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,m,ch);
} else {
var m__22289__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22288__auto__ = (((m == null))?null:m);
var m__22289__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,m);
} else {
var m__22289__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22288__auto__ = (((m == null))?null:m);
var m__22289__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,m,state_map);
} else {
var m__22289__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22288__auto__ = (((m == null))?null:m);
var m__22289__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,m,mode);
} else {
var m__22289__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22740__auto__ = [];
var len__22733__auto___28676 = arguments.length;
var i__22734__auto___28677 = (0);
while(true){
if((i__22734__auto___28677 < len__22733__auto___28676)){
args__22740__auto__.push((arguments[i__22734__auto___28677]));

var G__28678 = (i__22734__auto___28677 + (1));
i__22734__auto___28677 = G__28678;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((3) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22741__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28670){
var map__28671 = p__28670;
var map__28671__$1 = ((((!((map__28671 == null)))?((((map__28671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28671):map__28671);
var opts = map__28671__$1;
var statearr_28673_28679 = state;
(statearr_28673_28679[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28671,map__28671__$1,opts){
return (function (val){
var statearr_28674_28680 = state;
(statearr_28674_28680[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28671,map__28671__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28675_28681 = state;
(statearr_28675_28681[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28666){
var G__28667 = cljs.core.first.call(null,seq28666);
var seq28666__$1 = cljs.core.next.call(null,seq28666);
var G__28668 = cljs.core.first.call(null,seq28666__$1);
var seq28666__$2 = cljs.core.next.call(null,seq28666__$1);
var G__28669 = cljs.core.first.call(null,seq28666__$2);
var seq28666__$3 = cljs.core.next.call(null,seq28666__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28667,G__28668,G__28669,seq28666__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28849 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28850){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28850 = meta28850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28851,meta28850__$1){
var self__ = this;
var _28851__$1 = this;
return (new cljs.core.async.t_cljs$core$async28849(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28850__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28851){
var self__ = this;
var _28851__$1 = this;
return self__.meta28850;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28850","meta28850",1053644918,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28849";

cljs.core.async.t_cljs$core$async28849.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async28849");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28849 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28849(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28850){
return (new cljs.core.async.t_cljs$core$async28849(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28850));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28849(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27279__auto___29016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___29016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___29016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28953){
var state_val_28954 = (state_28953[(1)]);
if((state_val_28954 === (7))){
var inst_28868 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28955_29017 = state_28953__$1;
(statearr_28955_29017[(2)] = inst_28868);

(statearr_28955_29017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (20))){
var inst_28880 = (state_28953[(7)]);
var state_28953__$1 = state_28953;
var statearr_28956_29018 = state_28953__$1;
(statearr_28956_29018[(2)] = inst_28880);

(statearr_28956_29018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (27))){
var state_28953__$1 = state_28953;
var statearr_28957_29019 = state_28953__$1;
(statearr_28957_29019[(2)] = null);

(statearr_28957_29019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (1))){
var inst_28855 = (state_28953[(8)]);
var inst_28855__$1 = calc_state.call(null);
var inst_28857 = (inst_28855__$1 == null);
var inst_28858 = cljs.core.not.call(null,inst_28857);
var state_28953__$1 = (function (){var statearr_28958 = state_28953;
(statearr_28958[(8)] = inst_28855__$1);

return statearr_28958;
})();
if(inst_28858){
var statearr_28959_29020 = state_28953__$1;
(statearr_28959_29020[(1)] = (2));

} else {
var statearr_28960_29021 = state_28953__$1;
(statearr_28960_29021[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (24))){
var inst_28913 = (state_28953[(9)]);
var inst_28904 = (state_28953[(10)]);
var inst_28927 = (state_28953[(11)]);
var inst_28927__$1 = inst_28904.call(null,inst_28913);
var state_28953__$1 = (function (){var statearr_28961 = state_28953;
(statearr_28961[(11)] = inst_28927__$1);

return statearr_28961;
})();
if(cljs.core.truth_(inst_28927__$1)){
var statearr_28962_29022 = state_28953__$1;
(statearr_28962_29022[(1)] = (29));

} else {
var statearr_28963_29023 = state_28953__$1;
(statearr_28963_29023[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (4))){
var inst_28871 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28871)){
var statearr_28964_29024 = state_28953__$1;
(statearr_28964_29024[(1)] = (8));

} else {
var statearr_28965_29025 = state_28953__$1;
(statearr_28965_29025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (15))){
var inst_28898 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28898)){
var statearr_28966_29026 = state_28953__$1;
(statearr_28966_29026[(1)] = (19));

} else {
var statearr_28967_29027 = state_28953__$1;
(statearr_28967_29027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (21))){
var inst_28903 = (state_28953[(12)]);
var inst_28903__$1 = (state_28953[(2)]);
var inst_28904 = cljs.core.get.call(null,inst_28903__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28905 = cljs.core.get.call(null,inst_28903__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28906 = cljs.core.get.call(null,inst_28903__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28953__$1 = (function (){var statearr_28968 = state_28953;
(statearr_28968[(12)] = inst_28903__$1);

(statearr_28968[(10)] = inst_28904);

(statearr_28968[(13)] = inst_28905);

return statearr_28968;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28953__$1,(22),inst_28906);
} else {
if((state_val_28954 === (31))){
var inst_28935 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28935)){
var statearr_28969_29028 = state_28953__$1;
(statearr_28969_29028[(1)] = (32));

} else {
var statearr_28970_29029 = state_28953__$1;
(statearr_28970_29029[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (32))){
var inst_28912 = (state_28953[(14)]);
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28953__$1,(35),out,inst_28912);
} else {
if((state_val_28954 === (33))){
var inst_28903 = (state_28953[(12)]);
var inst_28880 = inst_28903;
var state_28953__$1 = (function (){var statearr_28971 = state_28953;
(statearr_28971[(7)] = inst_28880);

return statearr_28971;
})();
var statearr_28972_29030 = state_28953__$1;
(statearr_28972_29030[(2)] = null);

(statearr_28972_29030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (13))){
var inst_28880 = (state_28953[(7)]);
var inst_28887 = inst_28880.cljs$lang$protocol_mask$partition0$;
var inst_28888 = (inst_28887 & (64));
var inst_28889 = inst_28880.cljs$core$ISeq$;
var inst_28890 = (cljs.core.PROTOCOL_SENTINEL === inst_28889);
var inst_28891 = (inst_28888) || (inst_28890);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28891)){
var statearr_28973_29031 = state_28953__$1;
(statearr_28973_29031[(1)] = (16));

} else {
var statearr_28974_29032 = state_28953__$1;
(statearr_28974_29032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (22))){
var inst_28913 = (state_28953[(9)]);
var inst_28912 = (state_28953[(14)]);
var inst_28911 = (state_28953[(2)]);
var inst_28912__$1 = cljs.core.nth.call(null,inst_28911,(0),null);
var inst_28913__$1 = cljs.core.nth.call(null,inst_28911,(1),null);
var inst_28914 = (inst_28912__$1 == null);
var inst_28915 = cljs.core._EQ_.call(null,inst_28913__$1,change);
var inst_28916 = (inst_28914) || (inst_28915);
var state_28953__$1 = (function (){var statearr_28975 = state_28953;
(statearr_28975[(9)] = inst_28913__$1);

(statearr_28975[(14)] = inst_28912__$1);

return statearr_28975;
})();
if(cljs.core.truth_(inst_28916)){
var statearr_28976_29033 = state_28953__$1;
(statearr_28976_29033[(1)] = (23));

} else {
var statearr_28977_29034 = state_28953__$1;
(statearr_28977_29034[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (36))){
var inst_28903 = (state_28953[(12)]);
var inst_28880 = inst_28903;
var state_28953__$1 = (function (){var statearr_28978 = state_28953;
(statearr_28978[(7)] = inst_28880);

return statearr_28978;
})();
var statearr_28979_29035 = state_28953__$1;
(statearr_28979_29035[(2)] = null);

(statearr_28979_29035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (29))){
var inst_28927 = (state_28953[(11)]);
var state_28953__$1 = state_28953;
var statearr_28980_29036 = state_28953__$1;
(statearr_28980_29036[(2)] = inst_28927);

(statearr_28980_29036[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (6))){
var state_28953__$1 = state_28953;
var statearr_28981_29037 = state_28953__$1;
(statearr_28981_29037[(2)] = false);

(statearr_28981_29037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (28))){
var inst_28923 = (state_28953[(2)]);
var inst_28924 = calc_state.call(null);
var inst_28880 = inst_28924;
var state_28953__$1 = (function (){var statearr_28982 = state_28953;
(statearr_28982[(15)] = inst_28923);

(statearr_28982[(7)] = inst_28880);

return statearr_28982;
})();
var statearr_28983_29038 = state_28953__$1;
(statearr_28983_29038[(2)] = null);

(statearr_28983_29038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (25))){
var inst_28949 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28984_29039 = state_28953__$1;
(statearr_28984_29039[(2)] = inst_28949);

(statearr_28984_29039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (34))){
var inst_28947 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28985_29040 = state_28953__$1;
(statearr_28985_29040[(2)] = inst_28947);

(statearr_28985_29040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (17))){
var state_28953__$1 = state_28953;
var statearr_28986_29041 = state_28953__$1;
(statearr_28986_29041[(2)] = false);

(statearr_28986_29041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (3))){
var state_28953__$1 = state_28953;
var statearr_28987_29042 = state_28953__$1;
(statearr_28987_29042[(2)] = false);

(statearr_28987_29042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (12))){
var inst_28951 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28953__$1,inst_28951);
} else {
if((state_val_28954 === (2))){
var inst_28855 = (state_28953[(8)]);
var inst_28860 = inst_28855.cljs$lang$protocol_mask$partition0$;
var inst_28861 = (inst_28860 & (64));
var inst_28862 = inst_28855.cljs$core$ISeq$;
var inst_28863 = (cljs.core.PROTOCOL_SENTINEL === inst_28862);
var inst_28864 = (inst_28861) || (inst_28863);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28864)){
var statearr_28988_29043 = state_28953__$1;
(statearr_28988_29043[(1)] = (5));

} else {
var statearr_28989_29044 = state_28953__$1;
(statearr_28989_29044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (23))){
var inst_28912 = (state_28953[(14)]);
var inst_28918 = (inst_28912 == null);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28918)){
var statearr_28990_29045 = state_28953__$1;
(statearr_28990_29045[(1)] = (26));

} else {
var statearr_28991_29046 = state_28953__$1;
(statearr_28991_29046[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (35))){
var inst_28938 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28938)){
var statearr_28992_29047 = state_28953__$1;
(statearr_28992_29047[(1)] = (36));

} else {
var statearr_28993_29048 = state_28953__$1;
(statearr_28993_29048[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (19))){
var inst_28880 = (state_28953[(7)]);
var inst_28900 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28880);
var state_28953__$1 = state_28953;
var statearr_28994_29049 = state_28953__$1;
(statearr_28994_29049[(2)] = inst_28900);

(statearr_28994_29049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (11))){
var inst_28880 = (state_28953[(7)]);
var inst_28884 = (inst_28880 == null);
var inst_28885 = cljs.core.not.call(null,inst_28884);
var state_28953__$1 = state_28953;
if(inst_28885){
var statearr_28995_29050 = state_28953__$1;
(statearr_28995_29050[(1)] = (13));

} else {
var statearr_28996_29051 = state_28953__$1;
(statearr_28996_29051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (9))){
var inst_28855 = (state_28953[(8)]);
var state_28953__$1 = state_28953;
var statearr_28997_29052 = state_28953__$1;
(statearr_28997_29052[(2)] = inst_28855);

(statearr_28997_29052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (5))){
var state_28953__$1 = state_28953;
var statearr_28998_29053 = state_28953__$1;
(statearr_28998_29053[(2)] = true);

(statearr_28998_29053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (14))){
var state_28953__$1 = state_28953;
var statearr_28999_29054 = state_28953__$1;
(statearr_28999_29054[(2)] = false);

(statearr_28999_29054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (26))){
var inst_28913 = (state_28953[(9)]);
var inst_28920 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28913);
var state_28953__$1 = state_28953;
var statearr_29000_29055 = state_28953__$1;
(statearr_29000_29055[(2)] = inst_28920);

(statearr_29000_29055[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (16))){
var state_28953__$1 = state_28953;
var statearr_29001_29056 = state_28953__$1;
(statearr_29001_29056[(2)] = true);

(statearr_29001_29056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (38))){
var inst_28943 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_29002_29057 = state_28953__$1;
(statearr_29002_29057[(2)] = inst_28943);

(statearr_29002_29057[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (30))){
var inst_28913 = (state_28953[(9)]);
var inst_28904 = (state_28953[(10)]);
var inst_28905 = (state_28953[(13)]);
var inst_28930 = cljs.core.empty_QMARK_.call(null,inst_28904);
var inst_28931 = inst_28905.call(null,inst_28913);
var inst_28932 = cljs.core.not.call(null,inst_28931);
var inst_28933 = (inst_28930) && (inst_28932);
var state_28953__$1 = state_28953;
var statearr_29003_29058 = state_28953__$1;
(statearr_29003_29058[(2)] = inst_28933);

(statearr_29003_29058[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (10))){
var inst_28855 = (state_28953[(8)]);
var inst_28876 = (state_28953[(2)]);
var inst_28877 = cljs.core.get.call(null,inst_28876,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28878 = cljs.core.get.call(null,inst_28876,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28879 = cljs.core.get.call(null,inst_28876,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28880 = inst_28855;
var state_28953__$1 = (function (){var statearr_29004 = state_28953;
(statearr_29004[(16)] = inst_28879);

(statearr_29004[(17)] = inst_28877);

(statearr_29004[(7)] = inst_28880);

(statearr_29004[(18)] = inst_28878);

return statearr_29004;
})();
var statearr_29005_29059 = state_28953__$1;
(statearr_29005_29059[(2)] = null);

(statearr_29005_29059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (18))){
var inst_28895 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_29006_29060 = state_28953__$1;
(statearr_29006_29060[(2)] = inst_28895);

(statearr_29006_29060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (37))){
var state_28953__$1 = state_28953;
var statearr_29007_29061 = state_28953__$1;
(statearr_29007_29061[(2)] = null);

(statearr_29007_29061[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (8))){
var inst_28855 = (state_28953[(8)]);
var inst_28873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28855);
var state_28953__$1 = state_28953;
var statearr_29008_29062 = state_28953__$1;
(statearr_29008_29062[(2)] = inst_28873);

(statearr_29008_29062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___29016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27167__auto__,c__27279__auto___29016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27168__auto__ = null;
var cljs$core$async$mix_$_state_machine__27168__auto____0 = (function (){
var statearr_29012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29012[(0)] = cljs$core$async$mix_$_state_machine__27168__auto__);

(statearr_29012[(1)] = (1));

return statearr_29012;
});
var cljs$core$async$mix_$_state_machine__27168__auto____1 = (function (state_28953){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_28953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29013){if((e29013 instanceof Object)){
var ex__27171__auto__ = e29013;
var statearr_29014_29063 = state_28953;
(statearr_29014_29063[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29064 = state_28953;
state_28953 = G__29064;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27168__auto__ = function(state_28953){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27168__auto____1.call(this,state_28953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27168__auto____0;
cljs$core$async$mix_$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27168__auto____1;
return cljs$core$async$mix_$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___29016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27281__auto__ = (function (){var statearr_29015 = f__27280__auto__.call(null);
(statearr_29015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___29016);

return statearr_29015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___29016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22288__auto__ = (((p == null))?null:p);
var m__22289__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22289__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22288__auto__ = (((p == null))?null:p);
var m__22289__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,p,v,ch);
} else {
var m__22289__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29065 = [];
var len__22733__auto___29068 = arguments.length;
var i__22734__auto___29069 = (0);
while(true){
if((i__22734__auto___29069 < len__22733__auto___29068)){
args29065.push((arguments[i__22734__auto___29069]));

var G__29070 = (i__22734__auto___29069 + (1));
i__22734__auto___29069 = G__29070;
continue;
} else {
}
break;
}

var G__29067 = args29065.length;
switch (G__29067) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29065.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22288__auto__ = (((p == null))?null:p);
var m__22289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,p);
} else {
var m__22289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22288__auto__ = (((p == null))?null:p);
var m__22289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22288__auto__)]);
if(!((m__22289__auto__ == null))){
return m__22289__auto__.call(null,p,v);
} else {
var m__22289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22289__auto____$1 == null))){
return m__22289__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29073 = [];
var len__22733__auto___29198 = arguments.length;
var i__22734__auto___29199 = (0);
while(true){
if((i__22734__auto___29199 < len__22733__auto___29198)){
args29073.push((arguments[i__22734__auto___29199]));

var G__29200 = (i__22734__auto___29199 + (1));
i__22734__auto___29199 = G__29200;
continue;
} else {
}
break;
}

var G__29075 = args29073.length;
switch (G__29075) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29073.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21625__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21625__auto__)){
return or__21625__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21625__auto__,mults){
return (function (p1__29072_SHARP_){
if(cljs.core.truth_(p1__29072_SHARP_.call(null,topic))){
return p1__29072_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29072_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21625__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29076 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29077){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29077 = meta29077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29078,meta29077__$1){
var self__ = this;
var _29078__$1 = this;
return (new cljs.core.async.t_cljs$core$async29076(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29077__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29078){
var self__ = this;
var _29078__$1 = this;
return self__.meta29077;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29076.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29076.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29077","meta29077",-1499021459,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29076";

cljs.core.async.t_cljs$core$async29076.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async29076");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29076 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29076(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29077){
return (new cljs.core.async.t_cljs$core$async29076(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29077));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29076(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27279__auto___29202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___29202,mults,ensure_mult,p){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___29202,mults,ensure_mult,p){
return (function (state_29150){
var state_val_29151 = (state_29150[(1)]);
if((state_val_29151 === (7))){
var inst_29146 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29152_29203 = state_29150__$1;
(statearr_29152_29203[(2)] = inst_29146);

(statearr_29152_29203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (20))){
var state_29150__$1 = state_29150;
var statearr_29153_29204 = state_29150__$1;
(statearr_29153_29204[(2)] = null);

(statearr_29153_29204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (1))){
var state_29150__$1 = state_29150;
var statearr_29154_29205 = state_29150__$1;
(statearr_29154_29205[(2)] = null);

(statearr_29154_29205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (24))){
var inst_29129 = (state_29150[(7)]);
var inst_29138 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29129);
var state_29150__$1 = state_29150;
var statearr_29155_29206 = state_29150__$1;
(statearr_29155_29206[(2)] = inst_29138);

(statearr_29155_29206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (4))){
var inst_29081 = (state_29150[(8)]);
var inst_29081__$1 = (state_29150[(2)]);
var inst_29082 = (inst_29081__$1 == null);
var state_29150__$1 = (function (){var statearr_29156 = state_29150;
(statearr_29156[(8)] = inst_29081__$1);

return statearr_29156;
})();
if(cljs.core.truth_(inst_29082)){
var statearr_29157_29207 = state_29150__$1;
(statearr_29157_29207[(1)] = (5));

} else {
var statearr_29158_29208 = state_29150__$1;
(statearr_29158_29208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (15))){
var inst_29123 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29159_29209 = state_29150__$1;
(statearr_29159_29209[(2)] = inst_29123);

(statearr_29159_29209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (21))){
var inst_29143 = (state_29150[(2)]);
var state_29150__$1 = (function (){var statearr_29160 = state_29150;
(statearr_29160[(9)] = inst_29143);

return statearr_29160;
})();
var statearr_29161_29210 = state_29150__$1;
(statearr_29161_29210[(2)] = null);

(statearr_29161_29210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (13))){
var inst_29105 = (state_29150[(10)]);
var inst_29107 = cljs.core.chunked_seq_QMARK_.call(null,inst_29105);
var state_29150__$1 = state_29150;
if(inst_29107){
var statearr_29162_29211 = state_29150__$1;
(statearr_29162_29211[(1)] = (16));

} else {
var statearr_29163_29212 = state_29150__$1;
(statearr_29163_29212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (22))){
var inst_29135 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
if(cljs.core.truth_(inst_29135)){
var statearr_29164_29213 = state_29150__$1;
(statearr_29164_29213[(1)] = (23));

} else {
var statearr_29165_29214 = state_29150__$1;
(statearr_29165_29214[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (6))){
var inst_29131 = (state_29150[(11)]);
var inst_29081 = (state_29150[(8)]);
var inst_29129 = (state_29150[(7)]);
var inst_29129__$1 = topic_fn.call(null,inst_29081);
var inst_29130 = cljs.core.deref.call(null,mults);
var inst_29131__$1 = cljs.core.get.call(null,inst_29130,inst_29129__$1);
var state_29150__$1 = (function (){var statearr_29166 = state_29150;
(statearr_29166[(11)] = inst_29131__$1);

(statearr_29166[(7)] = inst_29129__$1);

return statearr_29166;
})();
if(cljs.core.truth_(inst_29131__$1)){
var statearr_29167_29215 = state_29150__$1;
(statearr_29167_29215[(1)] = (19));

} else {
var statearr_29168_29216 = state_29150__$1;
(statearr_29168_29216[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (25))){
var inst_29140 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29169_29217 = state_29150__$1;
(statearr_29169_29217[(2)] = inst_29140);

(statearr_29169_29217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (17))){
var inst_29105 = (state_29150[(10)]);
var inst_29114 = cljs.core.first.call(null,inst_29105);
var inst_29115 = cljs.core.async.muxch_STAR_.call(null,inst_29114);
var inst_29116 = cljs.core.async.close_BANG_.call(null,inst_29115);
var inst_29117 = cljs.core.next.call(null,inst_29105);
var inst_29091 = inst_29117;
var inst_29092 = null;
var inst_29093 = (0);
var inst_29094 = (0);
var state_29150__$1 = (function (){var statearr_29170 = state_29150;
(statearr_29170[(12)] = inst_29116);

(statearr_29170[(13)] = inst_29094);

(statearr_29170[(14)] = inst_29091);

(statearr_29170[(15)] = inst_29093);

(statearr_29170[(16)] = inst_29092);

return statearr_29170;
})();
var statearr_29171_29218 = state_29150__$1;
(statearr_29171_29218[(2)] = null);

(statearr_29171_29218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (3))){
var inst_29148 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29150__$1,inst_29148);
} else {
if((state_val_29151 === (12))){
var inst_29125 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29172_29219 = state_29150__$1;
(statearr_29172_29219[(2)] = inst_29125);

(statearr_29172_29219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (2))){
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29150__$1,(4),ch);
} else {
if((state_val_29151 === (23))){
var state_29150__$1 = state_29150;
var statearr_29173_29220 = state_29150__$1;
(statearr_29173_29220[(2)] = null);

(statearr_29173_29220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (19))){
var inst_29131 = (state_29150[(11)]);
var inst_29081 = (state_29150[(8)]);
var inst_29133 = cljs.core.async.muxch_STAR_.call(null,inst_29131);
var state_29150__$1 = state_29150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29150__$1,(22),inst_29133,inst_29081);
} else {
if((state_val_29151 === (11))){
var inst_29105 = (state_29150[(10)]);
var inst_29091 = (state_29150[(14)]);
var inst_29105__$1 = cljs.core.seq.call(null,inst_29091);
var state_29150__$1 = (function (){var statearr_29174 = state_29150;
(statearr_29174[(10)] = inst_29105__$1);

return statearr_29174;
})();
if(inst_29105__$1){
var statearr_29175_29221 = state_29150__$1;
(statearr_29175_29221[(1)] = (13));

} else {
var statearr_29176_29222 = state_29150__$1;
(statearr_29176_29222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (9))){
var inst_29127 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29177_29223 = state_29150__$1;
(statearr_29177_29223[(2)] = inst_29127);

(statearr_29177_29223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (5))){
var inst_29088 = cljs.core.deref.call(null,mults);
var inst_29089 = cljs.core.vals.call(null,inst_29088);
var inst_29090 = cljs.core.seq.call(null,inst_29089);
var inst_29091 = inst_29090;
var inst_29092 = null;
var inst_29093 = (0);
var inst_29094 = (0);
var state_29150__$1 = (function (){var statearr_29178 = state_29150;
(statearr_29178[(13)] = inst_29094);

(statearr_29178[(14)] = inst_29091);

(statearr_29178[(15)] = inst_29093);

(statearr_29178[(16)] = inst_29092);

return statearr_29178;
})();
var statearr_29179_29224 = state_29150__$1;
(statearr_29179_29224[(2)] = null);

(statearr_29179_29224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (14))){
var state_29150__$1 = state_29150;
var statearr_29183_29225 = state_29150__$1;
(statearr_29183_29225[(2)] = null);

(statearr_29183_29225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (16))){
var inst_29105 = (state_29150[(10)]);
var inst_29109 = cljs.core.chunk_first.call(null,inst_29105);
var inst_29110 = cljs.core.chunk_rest.call(null,inst_29105);
var inst_29111 = cljs.core.count.call(null,inst_29109);
var inst_29091 = inst_29110;
var inst_29092 = inst_29109;
var inst_29093 = inst_29111;
var inst_29094 = (0);
var state_29150__$1 = (function (){var statearr_29184 = state_29150;
(statearr_29184[(13)] = inst_29094);

(statearr_29184[(14)] = inst_29091);

(statearr_29184[(15)] = inst_29093);

(statearr_29184[(16)] = inst_29092);

return statearr_29184;
})();
var statearr_29185_29226 = state_29150__$1;
(statearr_29185_29226[(2)] = null);

(statearr_29185_29226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (10))){
var inst_29094 = (state_29150[(13)]);
var inst_29091 = (state_29150[(14)]);
var inst_29093 = (state_29150[(15)]);
var inst_29092 = (state_29150[(16)]);
var inst_29099 = cljs.core._nth.call(null,inst_29092,inst_29094);
var inst_29100 = cljs.core.async.muxch_STAR_.call(null,inst_29099);
var inst_29101 = cljs.core.async.close_BANG_.call(null,inst_29100);
var inst_29102 = (inst_29094 + (1));
var tmp29180 = inst_29091;
var tmp29181 = inst_29093;
var tmp29182 = inst_29092;
var inst_29091__$1 = tmp29180;
var inst_29092__$1 = tmp29182;
var inst_29093__$1 = tmp29181;
var inst_29094__$1 = inst_29102;
var state_29150__$1 = (function (){var statearr_29186 = state_29150;
(statearr_29186[(13)] = inst_29094__$1);

(statearr_29186[(14)] = inst_29091__$1);

(statearr_29186[(15)] = inst_29093__$1);

(statearr_29186[(17)] = inst_29101);

(statearr_29186[(16)] = inst_29092__$1);

return statearr_29186;
})();
var statearr_29187_29227 = state_29150__$1;
(statearr_29187_29227[(2)] = null);

(statearr_29187_29227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (18))){
var inst_29120 = (state_29150[(2)]);
var state_29150__$1 = state_29150;
var statearr_29188_29228 = state_29150__$1;
(statearr_29188_29228[(2)] = inst_29120);

(statearr_29188_29228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29151 === (8))){
var inst_29094 = (state_29150[(13)]);
var inst_29093 = (state_29150[(15)]);
var inst_29096 = (inst_29094 < inst_29093);
var inst_29097 = inst_29096;
var state_29150__$1 = state_29150;
if(cljs.core.truth_(inst_29097)){
var statearr_29189_29229 = state_29150__$1;
(statearr_29189_29229[(1)] = (10));

} else {
var statearr_29190_29230 = state_29150__$1;
(statearr_29190_29230[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___29202,mults,ensure_mult,p))
;
return ((function (switch__27167__auto__,c__27279__auto___29202,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_29194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29194[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_29194[(1)] = (1));

return statearr_29194;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_29150){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_29150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29195){if((e29195 instanceof Object)){
var ex__27171__auto__ = e29195;
var statearr_29196_29231 = state_29150;
(statearr_29196_29231[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29232 = state_29150;
state_29150 = G__29232;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_29150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_29150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___29202,mults,ensure_mult,p))
})();
var state__27281__auto__ = (function (){var statearr_29197 = f__27280__auto__.call(null);
(statearr_29197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___29202);

return statearr_29197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___29202,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29233 = [];
var len__22733__auto___29236 = arguments.length;
var i__22734__auto___29237 = (0);
while(true){
if((i__22734__auto___29237 < len__22733__auto___29236)){
args29233.push((arguments[i__22734__auto___29237]));

var G__29238 = (i__22734__auto___29237 + (1));
i__22734__auto___29237 = G__29238;
continue;
} else {
}
break;
}

var G__29235 = args29233.length;
switch (G__29235) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29233.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29240 = [];
var len__22733__auto___29243 = arguments.length;
var i__22734__auto___29244 = (0);
while(true){
if((i__22734__auto___29244 < len__22733__auto___29243)){
args29240.push((arguments[i__22734__auto___29244]));

var G__29245 = (i__22734__auto___29244 + (1));
i__22734__auto___29244 = G__29245;
continue;
} else {
}
break;
}

var G__29242 = args29240.length;
switch (G__29242) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29240.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29247 = [];
var len__22733__auto___29318 = arguments.length;
var i__22734__auto___29319 = (0);
while(true){
if((i__22734__auto___29319 < len__22733__auto___29318)){
args29247.push((arguments[i__22734__auto___29319]));

var G__29320 = (i__22734__auto___29319 + (1));
i__22734__auto___29319 = G__29320;
continue;
} else {
}
break;
}

var G__29249 = args29247.length;
switch (G__29249) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29247.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27279__auto___29322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___29322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___29322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29288){
var state_val_29289 = (state_29288[(1)]);
if((state_val_29289 === (7))){
var state_29288__$1 = state_29288;
var statearr_29290_29323 = state_29288__$1;
(statearr_29290_29323[(2)] = null);

(statearr_29290_29323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (1))){
var state_29288__$1 = state_29288;
var statearr_29291_29324 = state_29288__$1;
(statearr_29291_29324[(2)] = null);

(statearr_29291_29324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (4))){
var inst_29252 = (state_29288[(7)]);
var inst_29254 = (inst_29252 < cnt);
var state_29288__$1 = state_29288;
if(cljs.core.truth_(inst_29254)){
var statearr_29292_29325 = state_29288__$1;
(statearr_29292_29325[(1)] = (6));

} else {
var statearr_29293_29326 = state_29288__$1;
(statearr_29293_29326[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (15))){
var inst_29284 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
var statearr_29294_29327 = state_29288__$1;
(statearr_29294_29327[(2)] = inst_29284);

(statearr_29294_29327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (13))){
var inst_29277 = cljs.core.async.close_BANG_.call(null,out);
var state_29288__$1 = state_29288;
var statearr_29295_29328 = state_29288__$1;
(statearr_29295_29328[(2)] = inst_29277);

(statearr_29295_29328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (6))){
var state_29288__$1 = state_29288;
var statearr_29296_29329 = state_29288__$1;
(statearr_29296_29329[(2)] = null);

(statearr_29296_29329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (3))){
var inst_29286 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29288__$1,inst_29286);
} else {
if((state_val_29289 === (12))){
var inst_29274 = (state_29288[(8)]);
var inst_29274__$1 = (state_29288[(2)]);
var inst_29275 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29274__$1);
var state_29288__$1 = (function (){var statearr_29297 = state_29288;
(statearr_29297[(8)] = inst_29274__$1);

return statearr_29297;
})();
if(cljs.core.truth_(inst_29275)){
var statearr_29298_29330 = state_29288__$1;
(statearr_29298_29330[(1)] = (13));

} else {
var statearr_29299_29331 = state_29288__$1;
(statearr_29299_29331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (2))){
var inst_29251 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29252 = (0);
var state_29288__$1 = (function (){var statearr_29300 = state_29288;
(statearr_29300[(9)] = inst_29251);

(statearr_29300[(7)] = inst_29252);

return statearr_29300;
})();
var statearr_29301_29332 = state_29288__$1;
(statearr_29301_29332[(2)] = null);

(statearr_29301_29332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (11))){
var inst_29252 = (state_29288[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29288,(10),Object,null,(9));
var inst_29261 = chs__$1.call(null,inst_29252);
var inst_29262 = done.call(null,inst_29252);
var inst_29263 = cljs.core.async.take_BANG_.call(null,inst_29261,inst_29262);
var state_29288__$1 = state_29288;
var statearr_29302_29333 = state_29288__$1;
(statearr_29302_29333[(2)] = inst_29263);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (9))){
var inst_29252 = (state_29288[(7)]);
var inst_29265 = (state_29288[(2)]);
var inst_29266 = (inst_29252 + (1));
var inst_29252__$1 = inst_29266;
var state_29288__$1 = (function (){var statearr_29303 = state_29288;
(statearr_29303[(10)] = inst_29265);

(statearr_29303[(7)] = inst_29252__$1);

return statearr_29303;
})();
var statearr_29304_29334 = state_29288__$1;
(statearr_29304_29334[(2)] = null);

(statearr_29304_29334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (5))){
var inst_29272 = (state_29288[(2)]);
var state_29288__$1 = (function (){var statearr_29305 = state_29288;
(statearr_29305[(11)] = inst_29272);

return statearr_29305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29288__$1,(12),dchan);
} else {
if((state_val_29289 === (14))){
var inst_29274 = (state_29288[(8)]);
var inst_29279 = cljs.core.apply.call(null,f,inst_29274);
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29288__$1,(16),out,inst_29279);
} else {
if((state_val_29289 === (16))){
var inst_29281 = (state_29288[(2)]);
var state_29288__$1 = (function (){var statearr_29306 = state_29288;
(statearr_29306[(12)] = inst_29281);

return statearr_29306;
})();
var statearr_29307_29335 = state_29288__$1;
(statearr_29307_29335[(2)] = null);

(statearr_29307_29335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (10))){
var inst_29256 = (state_29288[(2)]);
var inst_29257 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29288__$1 = (function (){var statearr_29308 = state_29288;
(statearr_29308[(13)] = inst_29256);

return statearr_29308;
})();
var statearr_29309_29336 = state_29288__$1;
(statearr_29309_29336[(2)] = inst_29257);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (8))){
var inst_29270 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
var statearr_29310_29337 = state_29288__$1;
(statearr_29310_29337[(2)] = inst_29270);

(statearr_29310_29337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___29322,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27167__auto__,c__27279__auto___29322,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_29314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29314[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_29314[(1)] = (1));

return statearr_29314;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_29288){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_29288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29315){if((e29315 instanceof Object)){
var ex__27171__auto__ = e29315;
var statearr_29316_29338 = state_29288;
(statearr_29316_29338[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29339 = state_29288;
state_29288 = G__29339;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_29288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_29288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___29322,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27281__auto__ = (function (){var statearr_29317 = f__27280__auto__.call(null);
(statearr_29317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___29322);

return statearr_29317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___29322,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29341 = [];
var len__22733__auto___29399 = arguments.length;
var i__22734__auto___29400 = (0);
while(true){
if((i__22734__auto___29400 < len__22733__auto___29399)){
args29341.push((arguments[i__22734__auto___29400]));

var G__29401 = (i__22734__auto___29400 + (1));
i__22734__auto___29400 = G__29401;
continue;
} else {
}
break;
}

var G__29343 = args29341.length;
switch (G__29343) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29341.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27279__auto___29403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___29403,out){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___29403,out){
return (function (state_29375){
var state_val_29376 = (state_29375[(1)]);
if((state_val_29376 === (7))){
var inst_29354 = (state_29375[(7)]);
var inst_29355 = (state_29375[(8)]);
var inst_29354__$1 = (state_29375[(2)]);
var inst_29355__$1 = cljs.core.nth.call(null,inst_29354__$1,(0),null);
var inst_29356 = cljs.core.nth.call(null,inst_29354__$1,(1),null);
var inst_29357 = (inst_29355__$1 == null);
var state_29375__$1 = (function (){var statearr_29377 = state_29375;
(statearr_29377[(7)] = inst_29354__$1);

(statearr_29377[(9)] = inst_29356);

(statearr_29377[(8)] = inst_29355__$1);

return statearr_29377;
})();
if(cljs.core.truth_(inst_29357)){
var statearr_29378_29404 = state_29375__$1;
(statearr_29378_29404[(1)] = (8));

} else {
var statearr_29379_29405 = state_29375__$1;
(statearr_29379_29405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (1))){
var inst_29344 = cljs.core.vec.call(null,chs);
var inst_29345 = inst_29344;
var state_29375__$1 = (function (){var statearr_29380 = state_29375;
(statearr_29380[(10)] = inst_29345);

return statearr_29380;
})();
var statearr_29381_29406 = state_29375__$1;
(statearr_29381_29406[(2)] = null);

(statearr_29381_29406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (4))){
var inst_29345 = (state_29375[(10)]);
var state_29375__$1 = state_29375;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29375__$1,(7),inst_29345);
} else {
if((state_val_29376 === (6))){
var inst_29371 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29382_29407 = state_29375__$1;
(statearr_29382_29407[(2)] = inst_29371);

(statearr_29382_29407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (3))){
var inst_29373 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29375__$1,inst_29373);
} else {
if((state_val_29376 === (2))){
var inst_29345 = (state_29375[(10)]);
var inst_29347 = cljs.core.count.call(null,inst_29345);
var inst_29348 = (inst_29347 > (0));
var state_29375__$1 = state_29375;
if(cljs.core.truth_(inst_29348)){
var statearr_29384_29408 = state_29375__$1;
(statearr_29384_29408[(1)] = (4));

} else {
var statearr_29385_29409 = state_29375__$1;
(statearr_29385_29409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (11))){
var inst_29345 = (state_29375[(10)]);
var inst_29364 = (state_29375[(2)]);
var tmp29383 = inst_29345;
var inst_29345__$1 = tmp29383;
var state_29375__$1 = (function (){var statearr_29386 = state_29375;
(statearr_29386[(11)] = inst_29364);

(statearr_29386[(10)] = inst_29345__$1);

return statearr_29386;
})();
var statearr_29387_29410 = state_29375__$1;
(statearr_29387_29410[(2)] = null);

(statearr_29387_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (9))){
var inst_29355 = (state_29375[(8)]);
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29375__$1,(11),out,inst_29355);
} else {
if((state_val_29376 === (5))){
var inst_29369 = cljs.core.async.close_BANG_.call(null,out);
var state_29375__$1 = state_29375;
var statearr_29388_29411 = state_29375__$1;
(statearr_29388_29411[(2)] = inst_29369);

(statearr_29388_29411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (10))){
var inst_29367 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29389_29412 = state_29375__$1;
(statearr_29389_29412[(2)] = inst_29367);

(statearr_29389_29412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (8))){
var inst_29354 = (state_29375[(7)]);
var inst_29356 = (state_29375[(9)]);
var inst_29355 = (state_29375[(8)]);
var inst_29345 = (state_29375[(10)]);
var inst_29359 = (function (){var cs = inst_29345;
var vec__29350 = inst_29354;
var v = inst_29355;
var c = inst_29356;
return ((function (cs,vec__29350,v,c,inst_29354,inst_29356,inst_29355,inst_29345,state_val_29376,c__27279__auto___29403,out){
return (function (p1__29340_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29340_SHARP_);
});
;})(cs,vec__29350,v,c,inst_29354,inst_29356,inst_29355,inst_29345,state_val_29376,c__27279__auto___29403,out))
})();
var inst_29360 = cljs.core.filterv.call(null,inst_29359,inst_29345);
var inst_29345__$1 = inst_29360;
var state_29375__$1 = (function (){var statearr_29390 = state_29375;
(statearr_29390[(10)] = inst_29345__$1);

return statearr_29390;
})();
var statearr_29391_29413 = state_29375__$1;
(statearr_29391_29413[(2)] = null);

(statearr_29391_29413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___29403,out))
;
return ((function (switch__27167__auto__,c__27279__auto___29403,out){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_29395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29395[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_29395[(1)] = (1));

return statearr_29395;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_29375){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_29375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29396){if((e29396 instanceof Object)){
var ex__27171__auto__ = e29396;
var statearr_29397_29414 = state_29375;
(statearr_29397_29414[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29415 = state_29375;
state_29375 = G__29415;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_29375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_29375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___29403,out))
})();
var state__27281__auto__ = (function (){var statearr_29398 = f__27280__auto__.call(null);
(statearr_29398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___29403);

return statearr_29398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___29403,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29416 = [];
var len__22733__auto___29465 = arguments.length;
var i__22734__auto___29466 = (0);
while(true){
if((i__22734__auto___29466 < len__22733__auto___29465)){
args29416.push((arguments[i__22734__auto___29466]));

var G__29467 = (i__22734__auto___29466 + (1));
i__22734__auto___29466 = G__29467;
continue;
} else {
}
break;
}

var G__29418 = args29416.length;
switch (G__29418) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29416.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27279__auto___29469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___29469,out){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___29469,out){
return (function (state_29442){
var state_val_29443 = (state_29442[(1)]);
if((state_val_29443 === (7))){
var inst_29424 = (state_29442[(7)]);
var inst_29424__$1 = (state_29442[(2)]);
var inst_29425 = (inst_29424__$1 == null);
var inst_29426 = cljs.core.not.call(null,inst_29425);
var state_29442__$1 = (function (){var statearr_29444 = state_29442;
(statearr_29444[(7)] = inst_29424__$1);

return statearr_29444;
})();
if(inst_29426){
var statearr_29445_29470 = state_29442__$1;
(statearr_29445_29470[(1)] = (8));

} else {
var statearr_29446_29471 = state_29442__$1;
(statearr_29446_29471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29443 === (1))){
var inst_29419 = (0);
var state_29442__$1 = (function (){var statearr_29447 = state_29442;
(statearr_29447[(8)] = inst_29419);

return statearr_29447;
})();
var statearr_29448_29472 = state_29442__$1;
(statearr_29448_29472[(2)] = null);

(statearr_29448_29472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29443 === (4))){
var state_29442__$1 = state_29442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29442__$1,(7),ch);
} else {
if((state_val_29443 === (6))){
var inst_29437 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29449_29473 = state_29442__$1;
(statearr_29449_29473[(2)] = inst_29437);

(statearr_29449_29473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29443 === (3))){
var inst_29439 = (state_29442[(2)]);
var inst_29440 = cljs.core.async.close_BANG_.call(null,out);
var state_29442__$1 = (function (){var statearr_29450 = state_29442;
(statearr_29450[(9)] = inst_29439);

return statearr_29450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29442__$1,inst_29440);
} else {
if((state_val_29443 === (2))){
var inst_29419 = (state_29442[(8)]);
var inst_29421 = (inst_29419 < n);
var state_29442__$1 = state_29442;
if(cljs.core.truth_(inst_29421)){
var statearr_29451_29474 = state_29442__$1;
(statearr_29451_29474[(1)] = (4));

} else {
var statearr_29452_29475 = state_29442__$1;
(statearr_29452_29475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29443 === (11))){
var inst_29419 = (state_29442[(8)]);
var inst_29429 = (state_29442[(2)]);
var inst_29430 = (inst_29419 + (1));
var inst_29419__$1 = inst_29430;
var state_29442__$1 = (function (){var statearr_29453 = state_29442;
(statearr_29453[(10)] = inst_29429);

(statearr_29453[(8)] = inst_29419__$1);

return statearr_29453;
})();
var statearr_29454_29476 = state_29442__$1;
(statearr_29454_29476[(2)] = null);

(statearr_29454_29476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29443 === (9))){
var state_29442__$1 = state_29442;
var statearr_29455_29477 = state_29442__$1;
(statearr_29455_29477[(2)] = null);

(statearr_29455_29477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29443 === (5))){
var state_29442__$1 = state_29442;
var statearr_29456_29478 = state_29442__$1;
(statearr_29456_29478[(2)] = null);

(statearr_29456_29478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29443 === (10))){
var inst_29434 = (state_29442[(2)]);
var state_29442__$1 = state_29442;
var statearr_29457_29479 = state_29442__$1;
(statearr_29457_29479[(2)] = inst_29434);

(statearr_29457_29479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29443 === (8))){
var inst_29424 = (state_29442[(7)]);
var state_29442__$1 = state_29442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29442__$1,(11),out,inst_29424);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___29469,out))
;
return ((function (switch__27167__auto__,c__27279__auto___29469,out){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_29461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29461[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_29461[(1)] = (1));

return statearr_29461;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_29442){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_29442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29462){if((e29462 instanceof Object)){
var ex__27171__auto__ = e29462;
var statearr_29463_29480 = state_29442;
(statearr_29463_29480[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29481 = state_29442;
state_29442 = G__29481;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_29442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_29442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___29469,out))
})();
var state__27281__auto__ = (function (){var statearr_29464 = f__27280__auto__.call(null);
(statearr_29464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___29469);

return statearr_29464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___29469,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29489 = (function (f,ch,meta29490){
this.f = f;
this.ch = ch;
this.meta29490 = meta29490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29491,meta29490__$1){
var self__ = this;
var _29491__$1 = this;
return (new cljs.core.async.t_cljs$core$async29489(self__.f,self__.ch,meta29490__$1));
});

cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29491){
var self__ = this;
var _29491__$1 = this;
return self__.meta29490;
});

cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29492 = (function (f,ch,meta29490,_,fn1,meta29493){
this.f = f;
this.ch = ch;
this.meta29490 = meta29490;
this._ = _;
this.fn1 = fn1;
this.meta29493 = meta29493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29494,meta29493__$1){
var self__ = this;
var _29494__$1 = this;
return (new cljs.core.async.t_cljs$core$async29492(self__.f,self__.ch,self__.meta29490,self__._,self__.fn1,meta29493__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29494){
var self__ = this;
var _29494__$1 = this;
return self__.meta29493;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29482_SHARP_){
return f1.call(null,(((p1__29482_SHARP_ == null))?null:self__.f.call(null,p1__29482_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29492.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29490","meta29490",-2078195170,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29489","cljs.core.async/t_cljs$core$async29489",1929436526,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29493","meta29493",-1054299505,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29492";

cljs.core.async.t_cljs$core$async29492.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async29492");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29492 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29492(f__$1,ch__$1,meta29490__$1,___$2,fn1__$1,meta29493){
return (new cljs.core.async.t_cljs$core$async29492(f__$1,ch__$1,meta29490__$1,___$2,fn1__$1,meta29493));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29492(self__.f,self__.ch,self__.meta29490,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21613__auto__ = ret;
if(cljs.core.truth_(and__21613__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21613__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29490","meta29490",-2078195170,null)], null);
});

cljs.core.async.t_cljs$core$async29489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29489";

cljs.core.async.t_cljs$core$async29489.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async29489");
});

cljs.core.async.__GT_t_cljs$core$async29489 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29489(f__$1,ch__$1,meta29490){
return (new cljs.core.async.t_cljs$core$async29489(f__$1,ch__$1,meta29490));
});

}

return (new cljs.core.async.t_cljs$core$async29489(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29498 = (function (f,ch,meta29499){
this.f = f;
this.ch = ch;
this.meta29499 = meta29499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29500,meta29499__$1){
var self__ = this;
var _29500__$1 = this;
return (new cljs.core.async.t_cljs$core$async29498(self__.f,self__.ch,meta29499__$1));
});

cljs.core.async.t_cljs$core$async29498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29500){
var self__ = this;
var _29500__$1 = this;
return self__.meta29499;
});

cljs.core.async.t_cljs$core$async29498.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29498.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29498.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29499","meta29499",431398602,null)], null);
});

cljs.core.async.t_cljs$core$async29498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29498";

cljs.core.async.t_cljs$core$async29498.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async29498");
});

cljs.core.async.__GT_t_cljs$core$async29498 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29498(f__$1,ch__$1,meta29499){
return (new cljs.core.async.t_cljs$core$async29498(f__$1,ch__$1,meta29499));
});

}

return (new cljs.core.async.t_cljs$core$async29498(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29504 = (function (p,ch,meta29505){
this.p = p;
this.ch = ch;
this.meta29505 = meta29505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29506,meta29505__$1){
var self__ = this;
var _29506__$1 = this;
return (new cljs.core.async.t_cljs$core$async29504(self__.p,self__.ch,meta29505__$1));
});

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29506){
var self__ = this;
var _29506__$1 = this;
return self__.meta29505;
});

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29505","meta29505",1930928215,null)], null);
});

cljs.core.async.t_cljs$core$async29504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29504";

cljs.core.async.t_cljs$core$async29504.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async29504");
});

cljs.core.async.__GT_t_cljs$core$async29504 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29504(p__$1,ch__$1,meta29505){
return (new cljs.core.async.t_cljs$core$async29504(p__$1,ch__$1,meta29505));
});

}

return (new cljs.core.async.t_cljs$core$async29504(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29507 = [];
var len__22733__auto___29551 = arguments.length;
var i__22734__auto___29552 = (0);
while(true){
if((i__22734__auto___29552 < len__22733__auto___29551)){
args29507.push((arguments[i__22734__auto___29552]));

var G__29553 = (i__22734__auto___29552 + (1));
i__22734__auto___29552 = G__29553;
continue;
} else {
}
break;
}

var G__29509 = args29507.length;
switch (G__29509) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29507.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27279__auto___29555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___29555,out){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___29555,out){
return (function (state_29530){
var state_val_29531 = (state_29530[(1)]);
if((state_val_29531 === (7))){
var inst_29526 = (state_29530[(2)]);
var state_29530__$1 = state_29530;
var statearr_29532_29556 = state_29530__$1;
(statearr_29532_29556[(2)] = inst_29526);

(statearr_29532_29556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (1))){
var state_29530__$1 = state_29530;
var statearr_29533_29557 = state_29530__$1;
(statearr_29533_29557[(2)] = null);

(statearr_29533_29557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (4))){
var inst_29512 = (state_29530[(7)]);
var inst_29512__$1 = (state_29530[(2)]);
var inst_29513 = (inst_29512__$1 == null);
var state_29530__$1 = (function (){var statearr_29534 = state_29530;
(statearr_29534[(7)] = inst_29512__$1);

return statearr_29534;
})();
if(cljs.core.truth_(inst_29513)){
var statearr_29535_29558 = state_29530__$1;
(statearr_29535_29558[(1)] = (5));

} else {
var statearr_29536_29559 = state_29530__$1;
(statearr_29536_29559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (6))){
var inst_29512 = (state_29530[(7)]);
var inst_29517 = p.call(null,inst_29512);
var state_29530__$1 = state_29530;
if(cljs.core.truth_(inst_29517)){
var statearr_29537_29560 = state_29530__$1;
(statearr_29537_29560[(1)] = (8));

} else {
var statearr_29538_29561 = state_29530__$1;
(statearr_29538_29561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (3))){
var inst_29528 = (state_29530[(2)]);
var state_29530__$1 = state_29530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29530__$1,inst_29528);
} else {
if((state_val_29531 === (2))){
var state_29530__$1 = state_29530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29530__$1,(4),ch);
} else {
if((state_val_29531 === (11))){
var inst_29520 = (state_29530[(2)]);
var state_29530__$1 = state_29530;
var statearr_29539_29562 = state_29530__$1;
(statearr_29539_29562[(2)] = inst_29520);

(statearr_29539_29562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (9))){
var state_29530__$1 = state_29530;
var statearr_29540_29563 = state_29530__$1;
(statearr_29540_29563[(2)] = null);

(statearr_29540_29563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (5))){
var inst_29515 = cljs.core.async.close_BANG_.call(null,out);
var state_29530__$1 = state_29530;
var statearr_29541_29564 = state_29530__$1;
(statearr_29541_29564[(2)] = inst_29515);

(statearr_29541_29564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (10))){
var inst_29523 = (state_29530[(2)]);
var state_29530__$1 = (function (){var statearr_29542 = state_29530;
(statearr_29542[(8)] = inst_29523);

return statearr_29542;
})();
var statearr_29543_29565 = state_29530__$1;
(statearr_29543_29565[(2)] = null);

(statearr_29543_29565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29531 === (8))){
var inst_29512 = (state_29530[(7)]);
var state_29530__$1 = state_29530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29530__$1,(11),out,inst_29512);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___29555,out))
;
return ((function (switch__27167__auto__,c__27279__auto___29555,out){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_29547 = [null,null,null,null,null,null,null,null,null];
(statearr_29547[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_29547[(1)] = (1));

return statearr_29547;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_29530){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_29530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29548){if((e29548 instanceof Object)){
var ex__27171__auto__ = e29548;
var statearr_29549_29566 = state_29530;
(statearr_29549_29566[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29567 = state_29530;
state_29530 = G__29567;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_29530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_29530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___29555,out))
})();
var state__27281__auto__ = (function (){var statearr_29550 = f__27280__auto__.call(null);
(statearr_29550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___29555);

return statearr_29550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___29555,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29568 = [];
var len__22733__auto___29571 = arguments.length;
var i__22734__auto___29572 = (0);
while(true){
if((i__22734__auto___29572 < len__22733__auto___29571)){
args29568.push((arguments[i__22734__auto___29572]));

var G__29573 = (i__22734__auto___29572 + (1));
i__22734__auto___29572 = G__29573;
continue;
} else {
}
break;
}

var G__29570 = args29568.length;
switch (G__29570) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29568.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto__){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto__){
return (function (state_29740){
var state_val_29741 = (state_29740[(1)]);
if((state_val_29741 === (7))){
var inst_29736 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29742_29783 = state_29740__$1;
(statearr_29742_29783[(2)] = inst_29736);

(statearr_29742_29783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (20))){
var inst_29706 = (state_29740[(7)]);
var inst_29717 = (state_29740[(2)]);
var inst_29718 = cljs.core.next.call(null,inst_29706);
var inst_29692 = inst_29718;
var inst_29693 = null;
var inst_29694 = (0);
var inst_29695 = (0);
var state_29740__$1 = (function (){var statearr_29743 = state_29740;
(statearr_29743[(8)] = inst_29717);

(statearr_29743[(9)] = inst_29694);

(statearr_29743[(10)] = inst_29692);

(statearr_29743[(11)] = inst_29693);

(statearr_29743[(12)] = inst_29695);

return statearr_29743;
})();
var statearr_29744_29784 = state_29740__$1;
(statearr_29744_29784[(2)] = null);

(statearr_29744_29784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (1))){
var state_29740__$1 = state_29740;
var statearr_29745_29785 = state_29740__$1;
(statearr_29745_29785[(2)] = null);

(statearr_29745_29785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (4))){
var inst_29681 = (state_29740[(13)]);
var inst_29681__$1 = (state_29740[(2)]);
var inst_29682 = (inst_29681__$1 == null);
var state_29740__$1 = (function (){var statearr_29746 = state_29740;
(statearr_29746[(13)] = inst_29681__$1);

return statearr_29746;
})();
if(cljs.core.truth_(inst_29682)){
var statearr_29747_29786 = state_29740__$1;
(statearr_29747_29786[(1)] = (5));

} else {
var statearr_29748_29787 = state_29740__$1;
(statearr_29748_29787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (15))){
var state_29740__$1 = state_29740;
var statearr_29752_29788 = state_29740__$1;
(statearr_29752_29788[(2)] = null);

(statearr_29752_29788[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (21))){
var state_29740__$1 = state_29740;
var statearr_29753_29789 = state_29740__$1;
(statearr_29753_29789[(2)] = null);

(statearr_29753_29789[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (13))){
var inst_29694 = (state_29740[(9)]);
var inst_29692 = (state_29740[(10)]);
var inst_29693 = (state_29740[(11)]);
var inst_29695 = (state_29740[(12)]);
var inst_29702 = (state_29740[(2)]);
var inst_29703 = (inst_29695 + (1));
var tmp29749 = inst_29694;
var tmp29750 = inst_29692;
var tmp29751 = inst_29693;
var inst_29692__$1 = tmp29750;
var inst_29693__$1 = tmp29751;
var inst_29694__$1 = tmp29749;
var inst_29695__$1 = inst_29703;
var state_29740__$1 = (function (){var statearr_29754 = state_29740;
(statearr_29754[(9)] = inst_29694__$1);

(statearr_29754[(10)] = inst_29692__$1);

(statearr_29754[(14)] = inst_29702);

(statearr_29754[(11)] = inst_29693__$1);

(statearr_29754[(12)] = inst_29695__$1);

return statearr_29754;
})();
var statearr_29755_29790 = state_29740__$1;
(statearr_29755_29790[(2)] = null);

(statearr_29755_29790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (22))){
var state_29740__$1 = state_29740;
var statearr_29756_29791 = state_29740__$1;
(statearr_29756_29791[(2)] = null);

(statearr_29756_29791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (6))){
var inst_29681 = (state_29740[(13)]);
var inst_29690 = f.call(null,inst_29681);
var inst_29691 = cljs.core.seq.call(null,inst_29690);
var inst_29692 = inst_29691;
var inst_29693 = null;
var inst_29694 = (0);
var inst_29695 = (0);
var state_29740__$1 = (function (){var statearr_29757 = state_29740;
(statearr_29757[(9)] = inst_29694);

(statearr_29757[(10)] = inst_29692);

(statearr_29757[(11)] = inst_29693);

(statearr_29757[(12)] = inst_29695);

return statearr_29757;
})();
var statearr_29758_29792 = state_29740__$1;
(statearr_29758_29792[(2)] = null);

(statearr_29758_29792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (17))){
var inst_29706 = (state_29740[(7)]);
var inst_29710 = cljs.core.chunk_first.call(null,inst_29706);
var inst_29711 = cljs.core.chunk_rest.call(null,inst_29706);
var inst_29712 = cljs.core.count.call(null,inst_29710);
var inst_29692 = inst_29711;
var inst_29693 = inst_29710;
var inst_29694 = inst_29712;
var inst_29695 = (0);
var state_29740__$1 = (function (){var statearr_29759 = state_29740;
(statearr_29759[(9)] = inst_29694);

(statearr_29759[(10)] = inst_29692);

(statearr_29759[(11)] = inst_29693);

(statearr_29759[(12)] = inst_29695);

return statearr_29759;
})();
var statearr_29760_29793 = state_29740__$1;
(statearr_29760_29793[(2)] = null);

(statearr_29760_29793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (3))){
var inst_29738 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29740__$1,inst_29738);
} else {
if((state_val_29741 === (12))){
var inst_29726 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29761_29794 = state_29740__$1;
(statearr_29761_29794[(2)] = inst_29726);

(statearr_29761_29794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (2))){
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29740__$1,(4),in$);
} else {
if((state_val_29741 === (23))){
var inst_29734 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29762_29795 = state_29740__$1;
(statearr_29762_29795[(2)] = inst_29734);

(statearr_29762_29795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (19))){
var inst_29721 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29763_29796 = state_29740__$1;
(statearr_29763_29796[(2)] = inst_29721);

(statearr_29763_29796[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (11))){
var inst_29706 = (state_29740[(7)]);
var inst_29692 = (state_29740[(10)]);
var inst_29706__$1 = cljs.core.seq.call(null,inst_29692);
var state_29740__$1 = (function (){var statearr_29764 = state_29740;
(statearr_29764[(7)] = inst_29706__$1);

return statearr_29764;
})();
if(inst_29706__$1){
var statearr_29765_29797 = state_29740__$1;
(statearr_29765_29797[(1)] = (14));

} else {
var statearr_29766_29798 = state_29740__$1;
(statearr_29766_29798[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (9))){
var inst_29728 = (state_29740[(2)]);
var inst_29729 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29740__$1 = (function (){var statearr_29767 = state_29740;
(statearr_29767[(15)] = inst_29728);

return statearr_29767;
})();
if(cljs.core.truth_(inst_29729)){
var statearr_29768_29799 = state_29740__$1;
(statearr_29768_29799[(1)] = (21));

} else {
var statearr_29769_29800 = state_29740__$1;
(statearr_29769_29800[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (5))){
var inst_29684 = cljs.core.async.close_BANG_.call(null,out);
var state_29740__$1 = state_29740;
var statearr_29770_29801 = state_29740__$1;
(statearr_29770_29801[(2)] = inst_29684);

(statearr_29770_29801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (14))){
var inst_29706 = (state_29740[(7)]);
var inst_29708 = cljs.core.chunked_seq_QMARK_.call(null,inst_29706);
var state_29740__$1 = state_29740;
if(inst_29708){
var statearr_29771_29802 = state_29740__$1;
(statearr_29771_29802[(1)] = (17));

} else {
var statearr_29772_29803 = state_29740__$1;
(statearr_29772_29803[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (16))){
var inst_29724 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29773_29804 = state_29740__$1;
(statearr_29773_29804[(2)] = inst_29724);

(statearr_29773_29804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (10))){
var inst_29693 = (state_29740[(11)]);
var inst_29695 = (state_29740[(12)]);
var inst_29700 = cljs.core._nth.call(null,inst_29693,inst_29695);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29740__$1,(13),out,inst_29700);
} else {
if((state_val_29741 === (18))){
var inst_29706 = (state_29740[(7)]);
var inst_29715 = cljs.core.first.call(null,inst_29706);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29740__$1,(20),out,inst_29715);
} else {
if((state_val_29741 === (8))){
var inst_29694 = (state_29740[(9)]);
var inst_29695 = (state_29740[(12)]);
var inst_29697 = (inst_29695 < inst_29694);
var inst_29698 = inst_29697;
var state_29740__$1 = state_29740;
if(cljs.core.truth_(inst_29698)){
var statearr_29774_29805 = state_29740__$1;
(statearr_29774_29805[(1)] = (10));

} else {
var statearr_29775_29806 = state_29740__$1;
(statearr_29775_29806[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto__))
;
return ((function (switch__27167__auto__,c__27279__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27168__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27168__auto____0 = (function (){
var statearr_29779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29779[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27168__auto__);

(statearr_29779[(1)] = (1));

return statearr_29779;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27168__auto____1 = (function (state_29740){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_29740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29780){if((e29780 instanceof Object)){
var ex__27171__auto__ = e29780;
var statearr_29781_29807 = state_29740;
(statearr_29781_29807[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29808 = state_29740;
state_29740 = G__29808;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27168__auto__ = function(state_29740){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27168__auto____1.call(this,state_29740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27168__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27168__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto__))
})();
var state__27281__auto__ = (function (){var statearr_29782 = f__27280__auto__.call(null);
(statearr_29782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto__);

return statearr_29782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto__))
);

return c__27279__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29809 = [];
var len__22733__auto___29812 = arguments.length;
var i__22734__auto___29813 = (0);
while(true){
if((i__22734__auto___29813 < len__22733__auto___29812)){
args29809.push((arguments[i__22734__auto___29813]));

var G__29814 = (i__22734__auto___29813 + (1));
i__22734__auto___29813 = G__29814;
continue;
} else {
}
break;
}

var G__29811 = args29809.length;
switch (G__29811) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29809.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29816 = [];
var len__22733__auto___29819 = arguments.length;
var i__22734__auto___29820 = (0);
while(true){
if((i__22734__auto___29820 < len__22733__auto___29819)){
args29816.push((arguments[i__22734__auto___29820]));

var G__29821 = (i__22734__auto___29820 + (1));
i__22734__auto___29820 = G__29821;
continue;
} else {
}
break;
}

var G__29818 = args29816.length;
switch (G__29818) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29816.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29823 = [];
var len__22733__auto___29874 = arguments.length;
var i__22734__auto___29875 = (0);
while(true){
if((i__22734__auto___29875 < len__22733__auto___29874)){
args29823.push((arguments[i__22734__auto___29875]));

var G__29876 = (i__22734__auto___29875 + (1));
i__22734__auto___29875 = G__29876;
continue;
} else {
}
break;
}

var G__29825 = args29823.length;
switch (G__29825) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29823.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27279__auto___29878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___29878,out){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___29878,out){
return (function (state_29849){
var state_val_29850 = (state_29849[(1)]);
if((state_val_29850 === (7))){
var inst_29844 = (state_29849[(2)]);
var state_29849__$1 = state_29849;
var statearr_29851_29879 = state_29849__$1;
(statearr_29851_29879[(2)] = inst_29844);

(statearr_29851_29879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (1))){
var inst_29826 = null;
var state_29849__$1 = (function (){var statearr_29852 = state_29849;
(statearr_29852[(7)] = inst_29826);

return statearr_29852;
})();
var statearr_29853_29880 = state_29849__$1;
(statearr_29853_29880[(2)] = null);

(statearr_29853_29880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (4))){
var inst_29829 = (state_29849[(8)]);
var inst_29829__$1 = (state_29849[(2)]);
var inst_29830 = (inst_29829__$1 == null);
var inst_29831 = cljs.core.not.call(null,inst_29830);
var state_29849__$1 = (function (){var statearr_29854 = state_29849;
(statearr_29854[(8)] = inst_29829__$1);

return statearr_29854;
})();
if(inst_29831){
var statearr_29855_29881 = state_29849__$1;
(statearr_29855_29881[(1)] = (5));

} else {
var statearr_29856_29882 = state_29849__$1;
(statearr_29856_29882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (6))){
var state_29849__$1 = state_29849;
var statearr_29857_29883 = state_29849__$1;
(statearr_29857_29883[(2)] = null);

(statearr_29857_29883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (3))){
var inst_29846 = (state_29849[(2)]);
var inst_29847 = cljs.core.async.close_BANG_.call(null,out);
var state_29849__$1 = (function (){var statearr_29858 = state_29849;
(statearr_29858[(9)] = inst_29846);

return statearr_29858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29849__$1,inst_29847);
} else {
if((state_val_29850 === (2))){
var state_29849__$1 = state_29849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29849__$1,(4),ch);
} else {
if((state_val_29850 === (11))){
var inst_29829 = (state_29849[(8)]);
var inst_29838 = (state_29849[(2)]);
var inst_29826 = inst_29829;
var state_29849__$1 = (function (){var statearr_29859 = state_29849;
(statearr_29859[(7)] = inst_29826);

(statearr_29859[(10)] = inst_29838);

return statearr_29859;
})();
var statearr_29860_29884 = state_29849__$1;
(statearr_29860_29884[(2)] = null);

(statearr_29860_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (9))){
var inst_29829 = (state_29849[(8)]);
var state_29849__$1 = state_29849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29849__$1,(11),out,inst_29829);
} else {
if((state_val_29850 === (5))){
var inst_29826 = (state_29849[(7)]);
var inst_29829 = (state_29849[(8)]);
var inst_29833 = cljs.core._EQ_.call(null,inst_29829,inst_29826);
var state_29849__$1 = state_29849;
if(inst_29833){
var statearr_29862_29885 = state_29849__$1;
(statearr_29862_29885[(1)] = (8));

} else {
var statearr_29863_29886 = state_29849__$1;
(statearr_29863_29886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (10))){
var inst_29841 = (state_29849[(2)]);
var state_29849__$1 = state_29849;
var statearr_29864_29887 = state_29849__$1;
(statearr_29864_29887[(2)] = inst_29841);

(statearr_29864_29887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (8))){
var inst_29826 = (state_29849[(7)]);
var tmp29861 = inst_29826;
var inst_29826__$1 = tmp29861;
var state_29849__$1 = (function (){var statearr_29865 = state_29849;
(statearr_29865[(7)] = inst_29826__$1);

return statearr_29865;
})();
var statearr_29866_29888 = state_29849__$1;
(statearr_29866_29888[(2)] = null);

(statearr_29866_29888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___29878,out))
;
return ((function (switch__27167__auto__,c__27279__auto___29878,out){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_29870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29870[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_29870[(1)] = (1));

return statearr_29870;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_29849){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_29849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29871){if((e29871 instanceof Object)){
var ex__27171__auto__ = e29871;
var statearr_29872_29889 = state_29849;
(statearr_29872_29889[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29890 = state_29849;
state_29849 = G__29890;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_29849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_29849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___29878,out))
})();
var state__27281__auto__ = (function (){var statearr_29873 = f__27280__auto__.call(null);
(statearr_29873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___29878);

return statearr_29873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___29878,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29891 = [];
var len__22733__auto___29961 = arguments.length;
var i__22734__auto___29962 = (0);
while(true){
if((i__22734__auto___29962 < len__22733__auto___29961)){
args29891.push((arguments[i__22734__auto___29962]));

var G__29963 = (i__22734__auto___29962 + (1));
i__22734__auto___29962 = G__29963;
continue;
} else {
}
break;
}

var G__29893 = args29891.length;
switch (G__29893) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29891.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27279__auto___29965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___29965,out){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___29965,out){
return (function (state_29931){
var state_val_29932 = (state_29931[(1)]);
if((state_val_29932 === (7))){
var inst_29927 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29933_29966 = state_29931__$1;
(statearr_29933_29966[(2)] = inst_29927);

(statearr_29933_29966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (1))){
var inst_29894 = (new Array(n));
var inst_29895 = inst_29894;
var inst_29896 = (0);
var state_29931__$1 = (function (){var statearr_29934 = state_29931;
(statearr_29934[(7)] = inst_29896);

(statearr_29934[(8)] = inst_29895);

return statearr_29934;
})();
var statearr_29935_29967 = state_29931__$1;
(statearr_29935_29967[(2)] = null);

(statearr_29935_29967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (4))){
var inst_29899 = (state_29931[(9)]);
var inst_29899__$1 = (state_29931[(2)]);
var inst_29900 = (inst_29899__$1 == null);
var inst_29901 = cljs.core.not.call(null,inst_29900);
var state_29931__$1 = (function (){var statearr_29936 = state_29931;
(statearr_29936[(9)] = inst_29899__$1);

return statearr_29936;
})();
if(inst_29901){
var statearr_29937_29968 = state_29931__$1;
(statearr_29937_29968[(1)] = (5));

} else {
var statearr_29938_29969 = state_29931__$1;
(statearr_29938_29969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (15))){
var inst_29921 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29939_29970 = state_29931__$1;
(statearr_29939_29970[(2)] = inst_29921);

(statearr_29939_29970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (13))){
var state_29931__$1 = state_29931;
var statearr_29940_29971 = state_29931__$1;
(statearr_29940_29971[(2)] = null);

(statearr_29940_29971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (6))){
var inst_29896 = (state_29931[(7)]);
var inst_29917 = (inst_29896 > (0));
var state_29931__$1 = state_29931;
if(cljs.core.truth_(inst_29917)){
var statearr_29941_29972 = state_29931__$1;
(statearr_29941_29972[(1)] = (12));

} else {
var statearr_29942_29973 = state_29931__$1;
(statearr_29942_29973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (3))){
var inst_29929 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29931__$1,inst_29929);
} else {
if((state_val_29932 === (12))){
var inst_29895 = (state_29931[(8)]);
var inst_29919 = cljs.core.vec.call(null,inst_29895);
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29931__$1,(15),out,inst_29919);
} else {
if((state_val_29932 === (2))){
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29931__$1,(4),ch);
} else {
if((state_val_29932 === (11))){
var inst_29911 = (state_29931[(2)]);
var inst_29912 = (new Array(n));
var inst_29895 = inst_29912;
var inst_29896 = (0);
var state_29931__$1 = (function (){var statearr_29943 = state_29931;
(statearr_29943[(7)] = inst_29896);

(statearr_29943[(10)] = inst_29911);

(statearr_29943[(8)] = inst_29895);

return statearr_29943;
})();
var statearr_29944_29974 = state_29931__$1;
(statearr_29944_29974[(2)] = null);

(statearr_29944_29974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (9))){
var inst_29895 = (state_29931[(8)]);
var inst_29909 = cljs.core.vec.call(null,inst_29895);
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29931__$1,(11),out,inst_29909);
} else {
if((state_val_29932 === (5))){
var inst_29896 = (state_29931[(7)]);
var inst_29904 = (state_29931[(11)]);
var inst_29899 = (state_29931[(9)]);
var inst_29895 = (state_29931[(8)]);
var inst_29903 = (inst_29895[inst_29896] = inst_29899);
var inst_29904__$1 = (inst_29896 + (1));
var inst_29905 = (inst_29904__$1 < n);
var state_29931__$1 = (function (){var statearr_29945 = state_29931;
(statearr_29945[(12)] = inst_29903);

(statearr_29945[(11)] = inst_29904__$1);

return statearr_29945;
})();
if(cljs.core.truth_(inst_29905)){
var statearr_29946_29975 = state_29931__$1;
(statearr_29946_29975[(1)] = (8));

} else {
var statearr_29947_29976 = state_29931__$1;
(statearr_29947_29976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (14))){
var inst_29924 = (state_29931[(2)]);
var inst_29925 = cljs.core.async.close_BANG_.call(null,out);
var state_29931__$1 = (function (){var statearr_29949 = state_29931;
(statearr_29949[(13)] = inst_29924);

return statearr_29949;
})();
var statearr_29950_29977 = state_29931__$1;
(statearr_29950_29977[(2)] = inst_29925);

(statearr_29950_29977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (10))){
var inst_29915 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29951_29978 = state_29931__$1;
(statearr_29951_29978[(2)] = inst_29915);

(statearr_29951_29978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (8))){
var inst_29904 = (state_29931[(11)]);
var inst_29895 = (state_29931[(8)]);
var tmp29948 = inst_29895;
var inst_29895__$1 = tmp29948;
var inst_29896 = inst_29904;
var state_29931__$1 = (function (){var statearr_29952 = state_29931;
(statearr_29952[(7)] = inst_29896);

(statearr_29952[(8)] = inst_29895__$1);

return statearr_29952;
})();
var statearr_29953_29979 = state_29931__$1;
(statearr_29953_29979[(2)] = null);

(statearr_29953_29979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___29965,out))
;
return ((function (switch__27167__auto__,c__27279__auto___29965,out){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_29957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29957[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_29957[(1)] = (1));

return statearr_29957;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_29931){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_29931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e29958){if((e29958 instanceof Object)){
var ex__27171__auto__ = e29958;
var statearr_29959_29980 = state_29931;
(statearr_29959_29980[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29981 = state_29931;
state_29931 = G__29981;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_29931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_29931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___29965,out))
})();
var state__27281__auto__ = (function (){var statearr_29960 = f__27280__auto__.call(null);
(statearr_29960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___29965);

return statearr_29960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___29965,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29982 = [];
var len__22733__auto___30056 = arguments.length;
var i__22734__auto___30057 = (0);
while(true){
if((i__22734__auto___30057 < len__22733__auto___30056)){
args29982.push((arguments[i__22734__auto___30057]));

var G__30058 = (i__22734__auto___30057 + (1));
i__22734__auto___30057 = G__30058;
continue;
} else {
}
break;
}

var G__29984 = args29982.length;
switch (G__29984) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29982.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27279__auto___30060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27279__auto___30060,out){
return (function (){
var f__27280__auto__ = (function (){var switch__27167__auto__ = ((function (c__27279__auto___30060,out){
return (function (state_30026){
var state_val_30027 = (state_30026[(1)]);
if((state_val_30027 === (7))){
var inst_30022 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30028_30061 = state_30026__$1;
(statearr_30028_30061[(2)] = inst_30022);

(statearr_30028_30061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (1))){
var inst_29985 = [];
var inst_29986 = inst_29985;
var inst_29987 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30026__$1 = (function (){var statearr_30029 = state_30026;
(statearr_30029[(7)] = inst_29986);

(statearr_30029[(8)] = inst_29987);

return statearr_30029;
})();
var statearr_30030_30062 = state_30026__$1;
(statearr_30030_30062[(2)] = null);

(statearr_30030_30062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (4))){
var inst_29990 = (state_30026[(9)]);
var inst_29990__$1 = (state_30026[(2)]);
var inst_29991 = (inst_29990__$1 == null);
var inst_29992 = cljs.core.not.call(null,inst_29991);
var state_30026__$1 = (function (){var statearr_30031 = state_30026;
(statearr_30031[(9)] = inst_29990__$1);

return statearr_30031;
})();
if(inst_29992){
var statearr_30032_30063 = state_30026__$1;
(statearr_30032_30063[(1)] = (5));

} else {
var statearr_30033_30064 = state_30026__$1;
(statearr_30033_30064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (15))){
var inst_30016 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30034_30065 = state_30026__$1;
(statearr_30034_30065[(2)] = inst_30016);

(statearr_30034_30065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (13))){
var state_30026__$1 = state_30026;
var statearr_30035_30066 = state_30026__$1;
(statearr_30035_30066[(2)] = null);

(statearr_30035_30066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (6))){
var inst_29986 = (state_30026[(7)]);
var inst_30011 = inst_29986.length;
var inst_30012 = (inst_30011 > (0));
var state_30026__$1 = state_30026;
if(cljs.core.truth_(inst_30012)){
var statearr_30036_30067 = state_30026__$1;
(statearr_30036_30067[(1)] = (12));

} else {
var statearr_30037_30068 = state_30026__$1;
(statearr_30037_30068[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (3))){
var inst_30024 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30026__$1,inst_30024);
} else {
if((state_val_30027 === (12))){
var inst_29986 = (state_30026[(7)]);
var inst_30014 = cljs.core.vec.call(null,inst_29986);
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30026__$1,(15),out,inst_30014);
} else {
if((state_val_30027 === (2))){
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30026__$1,(4),ch);
} else {
if((state_val_30027 === (11))){
var inst_29994 = (state_30026[(10)]);
var inst_29990 = (state_30026[(9)]);
var inst_30004 = (state_30026[(2)]);
var inst_30005 = [];
var inst_30006 = inst_30005.push(inst_29990);
var inst_29986 = inst_30005;
var inst_29987 = inst_29994;
var state_30026__$1 = (function (){var statearr_30038 = state_30026;
(statearr_30038[(11)] = inst_30004);

(statearr_30038[(7)] = inst_29986);

(statearr_30038[(8)] = inst_29987);

(statearr_30038[(12)] = inst_30006);

return statearr_30038;
})();
var statearr_30039_30069 = state_30026__$1;
(statearr_30039_30069[(2)] = null);

(statearr_30039_30069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (9))){
var inst_29986 = (state_30026[(7)]);
var inst_30002 = cljs.core.vec.call(null,inst_29986);
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30026__$1,(11),out,inst_30002);
} else {
if((state_val_30027 === (5))){
var inst_29994 = (state_30026[(10)]);
var inst_29987 = (state_30026[(8)]);
var inst_29990 = (state_30026[(9)]);
var inst_29994__$1 = f.call(null,inst_29990);
var inst_29995 = cljs.core._EQ_.call(null,inst_29994__$1,inst_29987);
var inst_29996 = cljs.core.keyword_identical_QMARK_.call(null,inst_29987,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29997 = (inst_29995) || (inst_29996);
var state_30026__$1 = (function (){var statearr_30040 = state_30026;
(statearr_30040[(10)] = inst_29994__$1);

return statearr_30040;
})();
if(cljs.core.truth_(inst_29997)){
var statearr_30041_30070 = state_30026__$1;
(statearr_30041_30070[(1)] = (8));

} else {
var statearr_30042_30071 = state_30026__$1;
(statearr_30042_30071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (14))){
var inst_30019 = (state_30026[(2)]);
var inst_30020 = cljs.core.async.close_BANG_.call(null,out);
var state_30026__$1 = (function (){var statearr_30044 = state_30026;
(statearr_30044[(13)] = inst_30019);

return statearr_30044;
})();
var statearr_30045_30072 = state_30026__$1;
(statearr_30045_30072[(2)] = inst_30020);

(statearr_30045_30072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (10))){
var inst_30009 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30046_30073 = state_30026__$1;
(statearr_30046_30073[(2)] = inst_30009);

(statearr_30046_30073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (8))){
var inst_29994 = (state_30026[(10)]);
var inst_29986 = (state_30026[(7)]);
var inst_29990 = (state_30026[(9)]);
var inst_29999 = inst_29986.push(inst_29990);
var tmp30043 = inst_29986;
var inst_29986__$1 = tmp30043;
var inst_29987 = inst_29994;
var state_30026__$1 = (function (){var statearr_30047 = state_30026;
(statearr_30047[(7)] = inst_29986__$1);

(statearr_30047[(14)] = inst_29999);

(statearr_30047[(8)] = inst_29987);

return statearr_30047;
})();
var statearr_30048_30074 = state_30026__$1;
(statearr_30048_30074[(2)] = null);

(statearr_30048_30074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27279__auto___30060,out))
;
return ((function (switch__27167__auto__,c__27279__auto___30060,out){
return (function() {
var cljs$core$async$state_machine__27168__auto__ = null;
var cljs$core$async$state_machine__27168__auto____0 = (function (){
var statearr_30052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30052[(0)] = cljs$core$async$state_machine__27168__auto__);

(statearr_30052[(1)] = (1));

return statearr_30052;
});
var cljs$core$async$state_machine__27168__auto____1 = (function (state_30026){
while(true){
var ret_value__27169__auto__ = (function (){try{while(true){
var result__27170__auto__ = switch__27167__auto__.call(null,state_30026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27170__auto__;
}
break;
}
}catch (e30053){if((e30053 instanceof Object)){
var ex__27171__auto__ = e30053;
var statearr_30054_30075 = state_30026;
(statearr_30054_30075[(5)] = ex__27171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30076 = state_30026;
state_30026 = G__30076;
continue;
} else {
return ret_value__27169__auto__;
}
break;
}
});
cljs$core$async$state_machine__27168__auto__ = function(state_30026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27168__auto____1.call(this,state_30026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27168__auto____0;
cljs$core$async$state_machine__27168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27168__auto____1;
return cljs$core$async$state_machine__27168__auto__;
})()
;})(switch__27167__auto__,c__27279__auto___30060,out))
})();
var state__27281__auto__ = (function (){var statearr_30055 = f__27280__auto__.call(null);
(statearr_30055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27279__auto___30060);

return statearr_30055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27281__auto__);
});})(c__27279__auto___30060,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1490042958830