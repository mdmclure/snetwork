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
var args28090 = [];
var len__22733__auto___28096 = arguments.length;
var i__22734__auto___28097 = (0);
while(true){
if((i__22734__auto___28097 < len__22733__auto___28096)){
args28090.push((arguments[i__22734__auto___28097]));

var G__28098 = (i__22734__auto___28097 + (1));
i__22734__auto___28097 = G__28098;
continue;
} else {
}
break;
}

var G__28092 = args28090.length;
switch (G__28092) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28090.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28093 = (function (f,blockable,meta28094){
this.f = f;
this.blockable = blockable;
this.meta28094 = meta28094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28095,meta28094__$1){
var self__ = this;
var _28095__$1 = this;
return (new cljs.core.async.t_cljs$core$async28093(self__.f,self__.blockable,meta28094__$1));
});

cljs.core.async.t_cljs$core$async28093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28095){
var self__ = this;
var _28095__$1 = this;
return self__.meta28094;
});

cljs.core.async.t_cljs$core$async28093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28094","meta28094",-91388508,null)], null);
});

cljs.core.async.t_cljs$core$async28093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28093";

cljs.core.async.t_cljs$core$async28093.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async28093");
});

cljs.core.async.__GT_t_cljs$core$async28093 = (function cljs$core$async$__GT_t_cljs$core$async28093(f__$1,blockable__$1,meta28094){
return (new cljs.core.async.t_cljs$core$async28093(f__$1,blockable__$1,meta28094));
});

}

return (new cljs.core.async.t_cljs$core$async28093(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28102 = [];
var len__22733__auto___28105 = arguments.length;
var i__22734__auto___28106 = (0);
while(true){
if((i__22734__auto___28106 < len__22733__auto___28105)){
args28102.push((arguments[i__22734__auto___28106]));

var G__28107 = (i__22734__auto___28106 + (1));
i__22734__auto___28106 = G__28107;
continue;
} else {
}
break;
}

var G__28104 = args28102.length;
switch (G__28104) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28102.length)].join('')));

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
var args28109 = [];
var len__22733__auto___28112 = arguments.length;
var i__22734__auto___28113 = (0);
while(true){
if((i__22734__auto___28113 < len__22733__auto___28112)){
args28109.push((arguments[i__22734__auto___28113]));

var G__28114 = (i__22734__auto___28113 + (1));
i__22734__auto___28113 = G__28114;
continue;
} else {
}
break;
}

var G__28111 = args28109.length;
switch (G__28111) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28109.length)].join('')));

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
var args28116 = [];
var len__22733__auto___28119 = arguments.length;
var i__22734__auto___28120 = (0);
while(true){
if((i__22734__auto___28120 < len__22733__auto___28119)){
args28116.push((arguments[i__22734__auto___28120]));

var G__28121 = (i__22734__auto___28120 + (1));
i__22734__auto___28120 = G__28121;
continue;
} else {
}
break;
}

var G__28118 = args28116.length;
switch (G__28118) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28116.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28123 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28123);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28123,ret){
return (function (){
return fn1.call(null,val_28123);
});})(val_28123,ret))
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
var args28124 = [];
var len__22733__auto___28127 = arguments.length;
var i__22734__auto___28128 = (0);
while(true){
if((i__22734__auto___28128 < len__22733__auto___28127)){
args28124.push((arguments[i__22734__auto___28128]));

var G__28129 = (i__22734__auto___28128 + (1));
i__22734__auto___28128 = G__28129;
continue;
} else {
}
break;
}

var G__28126 = args28124.length;
switch (G__28126) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28124.length)].join('')));

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
var n__22543__auto___28131 = n;
var x_28132 = (0);
while(true){
if((x_28132 < n__22543__auto___28131)){
(a[x_28132] = (0));

var G__28133 = (x_28132 + (1));
x_28132 = G__28133;
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

var G__28134 = (i + (1));
i = G__28134;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28138 = (function (flag,meta28139){
this.flag = flag;
this.meta28139 = meta28139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28140,meta28139__$1){
var self__ = this;
var _28140__$1 = this;
return (new cljs.core.async.t_cljs$core$async28138(self__.flag,meta28139__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28140){
var self__ = this;
var _28140__$1 = this;
return self__.meta28139;
});})(flag))
;

cljs.core.async.t_cljs$core$async28138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28138.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28139","meta28139",-1139488066,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28138";

cljs.core.async.t_cljs$core$async28138.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async28138");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28138 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28138(flag__$1,meta28139){
return (new cljs.core.async.t_cljs$core$async28138(flag__$1,meta28139));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28138(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28144 = (function (flag,cb,meta28145){
this.flag = flag;
this.cb = cb;
this.meta28145 = meta28145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28146,meta28145__$1){
var self__ = this;
var _28146__$1 = this;
return (new cljs.core.async.t_cljs$core$async28144(self__.flag,self__.cb,meta28145__$1));
});

cljs.core.async.t_cljs$core$async28144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28146){
var self__ = this;
var _28146__$1 = this;
return self__.meta28145;
});

cljs.core.async.t_cljs$core$async28144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28145","meta28145",1588559728,null)], null);
});

cljs.core.async.t_cljs$core$async28144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28144";

cljs.core.async.t_cljs$core$async28144.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async28144");
});

cljs.core.async.__GT_t_cljs$core$async28144 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28144(flag__$1,cb__$1,meta28145){
return (new cljs.core.async.t_cljs$core$async28144(flag__$1,cb__$1,meta28145));
});

}

return (new cljs.core.async.t_cljs$core$async28144(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28147_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28148_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28148_SHARP_,port], null));
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
var G__28149 = (i + (1));
i = G__28149;
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
var len__22733__auto___28155 = arguments.length;
var i__22734__auto___28156 = (0);
while(true){
if((i__22734__auto___28156 < len__22733__auto___28155)){
args__22740__auto__.push((arguments[i__22734__auto___28156]));

var G__28157 = (i__22734__auto___28156 + (1));
i__22734__auto___28156 = G__28157;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((1) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22741__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28152){
var map__28153 = p__28152;
var map__28153__$1 = ((((!((map__28153 == null)))?((((map__28153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28153):map__28153);
var opts = map__28153__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28150){
var G__28151 = cljs.core.first.call(null,seq28150);
var seq28150__$1 = cljs.core.next.call(null,seq28150);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28151,seq28150__$1);
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
var args28158 = [];
var len__22733__auto___28208 = arguments.length;
var i__22734__auto___28209 = (0);
while(true){
if((i__22734__auto___28209 < len__22733__auto___28208)){
args28158.push((arguments[i__22734__auto___28209]));

var G__28210 = (i__22734__auto___28209 + (1));
i__22734__auto___28209 = G__28210;
continue;
} else {
}
break;
}

var G__28160 = args28158.length;
switch (G__28160) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28158.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28045__auto___28212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___28212){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___28212){
return (function (state_28184){
var state_val_28185 = (state_28184[(1)]);
if((state_val_28185 === (7))){
var inst_28180 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28186_28213 = state_28184__$1;
(statearr_28186_28213[(2)] = inst_28180);

(statearr_28186_28213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (1))){
var state_28184__$1 = state_28184;
var statearr_28187_28214 = state_28184__$1;
(statearr_28187_28214[(2)] = null);

(statearr_28187_28214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (4))){
var inst_28163 = (state_28184[(7)]);
var inst_28163__$1 = (state_28184[(2)]);
var inst_28164 = (inst_28163__$1 == null);
var state_28184__$1 = (function (){var statearr_28188 = state_28184;
(statearr_28188[(7)] = inst_28163__$1);

return statearr_28188;
})();
if(cljs.core.truth_(inst_28164)){
var statearr_28189_28215 = state_28184__$1;
(statearr_28189_28215[(1)] = (5));

} else {
var statearr_28190_28216 = state_28184__$1;
(statearr_28190_28216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (13))){
var state_28184__$1 = state_28184;
var statearr_28191_28217 = state_28184__$1;
(statearr_28191_28217[(2)] = null);

(statearr_28191_28217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (6))){
var inst_28163 = (state_28184[(7)]);
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28184__$1,(11),to,inst_28163);
} else {
if((state_val_28185 === (3))){
var inst_28182 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28184__$1,inst_28182);
} else {
if((state_val_28185 === (12))){
var state_28184__$1 = state_28184;
var statearr_28192_28218 = state_28184__$1;
(statearr_28192_28218[(2)] = null);

(statearr_28192_28218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (2))){
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28184__$1,(4),from);
} else {
if((state_val_28185 === (11))){
var inst_28173 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
if(cljs.core.truth_(inst_28173)){
var statearr_28193_28219 = state_28184__$1;
(statearr_28193_28219[(1)] = (12));

} else {
var statearr_28194_28220 = state_28184__$1;
(statearr_28194_28220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (9))){
var state_28184__$1 = state_28184;
var statearr_28195_28221 = state_28184__$1;
(statearr_28195_28221[(2)] = null);

(statearr_28195_28221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (5))){
var state_28184__$1 = state_28184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28196_28222 = state_28184__$1;
(statearr_28196_28222[(1)] = (8));

} else {
var statearr_28197_28223 = state_28184__$1;
(statearr_28197_28223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (14))){
var inst_28178 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28198_28224 = state_28184__$1;
(statearr_28198_28224[(2)] = inst_28178);

(statearr_28198_28224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (10))){
var inst_28170 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28199_28225 = state_28184__$1;
(statearr_28199_28225[(2)] = inst_28170);

(statearr_28199_28225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (8))){
var inst_28167 = cljs.core.async.close_BANG_.call(null,to);
var state_28184__$1 = state_28184;
var statearr_28200_28226 = state_28184__$1;
(statearr_28200_28226[(2)] = inst_28167);

(statearr_28200_28226[(1)] = (10));


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
});})(c__28045__auto___28212))
;
return ((function (switch__27933__auto__,c__28045__auto___28212){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_28204 = [null,null,null,null,null,null,null,null];
(statearr_28204[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_28204[(1)] = (1));

return statearr_28204;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_28184){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28205){if((e28205 instanceof Object)){
var ex__27937__auto__ = e28205;
var statearr_28206_28227 = state_28184;
(statearr_28206_28227[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28228 = state_28184;
state_28184 = G__28228;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_28184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_28184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___28212))
})();
var state__28047__auto__ = (function (){var statearr_28207 = f__28046__auto__.call(null);
(statearr_28207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___28212);

return statearr_28207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___28212))
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
return (function (p__28416){
var vec__28417 = p__28416;
var v = cljs.core.nth.call(null,vec__28417,(0),null);
var p = cljs.core.nth.call(null,vec__28417,(1),null);
var job = vec__28417;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28045__auto___28603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___28603,res,vec__28417,v,p,job,jobs,results){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___28603,res,vec__28417,v,p,job,jobs,results){
return (function (state_28424){
var state_val_28425 = (state_28424[(1)]);
if((state_val_28425 === (1))){
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28424__$1,(2),res,v);
} else {
if((state_val_28425 === (2))){
var inst_28421 = (state_28424[(2)]);
var inst_28422 = cljs.core.async.close_BANG_.call(null,res);
var state_28424__$1 = (function (){var statearr_28426 = state_28424;
(statearr_28426[(7)] = inst_28421);

return statearr_28426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28424__$1,inst_28422);
} else {
return null;
}
}
});})(c__28045__auto___28603,res,vec__28417,v,p,job,jobs,results))
;
return ((function (switch__27933__auto__,c__28045__auto___28603,res,vec__28417,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0 = (function (){
var statearr_28430 = [null,null,null,null,null,null,null,null];
(statearr_28430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__);

(statearr_28430[(1)] = (1));

return statearr_28430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1 = (function (state_28424){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28431){if((e28431 instanceof Object)){
var ex__27937__auto__ = e28431;
var statearr_28432_28604 = state_28424;
(statearr_28432_28604[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28605 = state_28424;
state_28424 = G__28605;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = function(state_28424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1.call(this,state_28424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___28603,res,vec__28417,v,p,job,jobs,results))
})();
var state__28047__auto__ = (function (){var statearr_28433 = f__28046__auto__.call(null);
(statearr_28433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___28603);

return statearr_28433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___28603,res,vec__28417,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28434){
var vec__28435 = p__28434;
var v = cljs.core.nth.call(null,vec__28435,(0),null);
var p = cljs.core.nth.call(null,vec__28435,(1),null);
var job = vec__28435;
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
var n__22543__auto___28606 = n;
var __28607 = (0);
while(true){
if((__28607 < n__22543__auto___28606)){
var G__28438_28608 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28438_28608) {
case "compute":
var c__28045__auto___28610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28607,c__28045__auto___28610,G__28438_28608,n__22543__auto___28606,jobs,results,process,async){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (__28607,c__28045__auto___28610,G__28438_28608,n__22543__auto___28606,jobs,results,process,async){
return (function (state_28451){
var state_val_28452 = (state_28451[(1)]);
if((state_val_28452 === (1))){
var state_28451__$1 = state_28451;
var statearr_28453_28611 = state_28451__$1;
(statearr_28453_28611[(2)] = null);

(statearr_28453_28611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (2))){
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28451__$1,(4),jobs);
} else {
if((state_val_28452 === (3))){
var inst_28449 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28451__$1,inst_28449);
} else {
if((state_val_28452 === (4))){
var inst_28441 = (state_28451[(2)]);
var inst_28442 = process.call(null,inst_28441);
var state_28451__$1 = state_28451;
if(cljs.core.truth_(inst_28442)){
var statearr_28454_28612 = state_28451__$1;
(statearr_28454_28612[(1)] = (5));

} else {
var statearr_28455_28613 = state_28451__$1;
(statearr_28455_28613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (5))){
var state_28451__$1 = state_28451;
var statearr_28456_28614 = state_28451__$1;
(statearr_28456_28614[(2)] = null);

(statearr_28456_28614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (6))){
var state_28451__$1 = state_28451;
var statearr_28457_28615 = state_28451__$1;
(statearr_28457_28615[(2)] = null);

(statearr_28457_28615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28452 === (7))){
var inst_28447 = (state_28451[(2)]);
var state_28451__$1 = state_28451;
var statearr_28458_28616 = state_28451__$1;
(statearr_28458_28616[(2)] = inst_28447);

(statearr_28458_28616[(1)] = (3));


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
});})(__28607,c__28045__auto___28610,G__28438_28608,n__22543__auto___28606,jobs,results,process,async))
;
return ((function (__28607,switch__27933__auto__,c__28045__auto___28610,G__28438_28608,n__22543__auto___28606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0 = (function (){
var statearr_28462 = [null,null,null,null,null,null,null];
(statearr_28462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__);

(statearr_28462[(1)] = (1));

return statearr_28462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1 = (function (state_28451){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28463){if((e28463 instanceof Object)){
var ex__27937__auto__ = e28463;
var statearr_28464_28617 = state_28451;
(statearr_28464_28617[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28618 = state_28451;
state_28451 = G__28618;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = function(state_28451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1.call(this,state_28451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__;
})()
;})(__28607,switch__27933__auto__,c__28045__auto___28610,G__28438_28608,n__22543__auto___28606,jobs,results,process,async))
})();
var state__28047__auto__ = (function (){var statearr_28465 = f__28046__auto__.call(null);
(statearr_28465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___28610);

return statearr_28465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(__28607,c__28045__auto___28610,G__28438_28608,n__22543__auto___28606,jobs,results,process,async))
);


break;
case "async":
var c__28045__auto___28619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28607,c__28045__auto___28619,G__28438_28608,n__22543__auto___28606,jobs,results,process,async){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (__28607,c__28045__auto___28619,G__28438_28608,n__22543__auto___28606,jobs,results,process,async){
return (function (state_28478){
var state_val_28479 = (state_28478[(1)]);
if((state_val_28479 === (1))){
var state_28478__$1 = state_28478;
var statearr_28480_28620 = state_28478__$1;
(statearr_28480_28620[(2)] = null);

(statearr_28480_28620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (2))){
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28478__$1,(4),jobs);
} else {
if((state_val_28479 === (3))){
var inst_28476 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28478__$1,inst_28476);
} else {
if((state_val_28479 === (4))){
var inst_28468 = (state_28478[(2)]);
var inst_28469 = async.call(null,inst_28468);
var state_28478__$1 = state_28478;
if(cljs.core.truth_(inst_28469)){
var statearr_28481_28621 = state_28478__$1;
(statearr_28481_28621[(1)] = (5));

} else {
var statearr_28482_28622 = state_28478__$1;
(statearr_28482_28622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (5))){
var state_28478__$1 = state_28478;
var statearr_28483_28623 = state_28478__$1;
(statearr_28483_28623[(2)] = null);

(statearr_28483_28623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (6))){
var state_28478__$1 = state_28478;
var statearr_28484_28624 = state_28478__$1;
(statearr_28484_28624[(2)] = null);

(statearr_28484_28624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (7))){
var inst_28474 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28485_28625 = state_28478__$1;
(statearr_28485_28625[(2)] = inst_28474);

(statearr_28485_28625[(1)] = (3));


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
});})(__28607,c__28045__auto___28619,G__28438_28608,n__22543__auto___28606,jobs,results,process,async))
;
return ((function (__28607,switch__27933__auto__,c__28045__auto___28619,G__28438_28608,n__22543__auto___28606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0 = (function (){
var statearr_28489 = [null,null,null,null,null,null,null];
(statearr_28489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__);

(statearr_28489[(1)] = (1));

return statearr_28489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1 = (function (state_28478){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28490){if((e28490 instanceof Object)){
var ex__27937__auto__ = e28490;
var statearr_28491_28626 = state_28478;
(statearr_28491_28626[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28627 = state_28478;
state_28478 = G__28627;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = function(state_28478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1.call(this,state_28478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__;
})()
;})(__28607,switch__27933__auto__,c__28045__auto___28619,G__28438_28608,n__22543__auto___28606,jobs,results,process,async))
})();
var state__28047__auto__ = (function (){var statearr_28492 = f__28046__auto__.call(null);
(statearr_28492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___28619);

return statearr_28492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(__28607,c__28045__auto___28619,G__28438_28608,n__22543__auto___28606,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28628 = (__28607 + (1));
__28607 = G__28628;
continue;
} else {
}
break;
}

var c__28045__auto___28629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___28629,jobs,results,process,async){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___28629,jobs,results,process,async){
return (function (state_28514){
var state_val_28515 = (state_28514[(1)]);
if((state_val_28515 === (1))){
var state_28514__$1 = state_28514;
var statearr_28516_28630 = state_28514__$1;
(statearr_28516_28630[(2)] = null);

(statearr_28516_28630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (2))){
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28514__$1,(4),from);
} else {
if((state_val_28515 === (3))){
var inst_28512 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28514__$1,inst_28512);
} else {
if((state_val_28515 === (4))){
var inst_28495 = (state_28514[(7)]);
var inst_28495__$1 = (state_28514[(2)]);
var inst_28496 = (inst_28495__$1 == null);
var state_28514__$1 = (function (){var statearr_28517 = state_28514;
(statearr_28517[(7)] = inst_28495__$1);

return statearr_28517;
})();
if(cljs.core.truth_(inst_28496)){
var statearr_28518_28631 = state_28514__$1;
(statearr_28518_28631[(1)] = (5));

} else {
var statearr_28519_28632 = state_28514__$1;
(statearr_28519_28632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (5))){
var inst_28498 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28514__$1 = state_28514;
var statearr_28520_28633 = state_28514__$1;
(statearr_28520_28633[(2)] = inst_28498);

(statearr_28520_28633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (6))){
var inst_28500 = (state_28514[(8)]);
var inst_28495 = (state_28514[(7)]);
var inst_28500__$1 = cljs.core.async.chan.call(null,(1));
var inst_28501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28502 = [inst_28495,inst_28500__$1];
var inst_28503 = (new cljs.core.PersistentVector(null,2,(5),inst_28501,inst_28502,null));
var state_28514__$1 = (function (){var statearr_28521 = state_28514;
(statearr_28521[(8)] = inst_28500__$1);

return statearr_28521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28514__$1,(8),jobs,inst_28503);
} else {
if((state_val_28515 === (7))){
var inst_28510 = (state_28514[(2)]);
var state_28514__$1 = state_28514;
var statearr_28522_28634 = state_28514__$1;
(statearr_28522_28634[(2)] = inst_28510);

(statearr_28522_28634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28515 === (8))){
var inst_28500 = (state_28514[(8)]);
var inst_28505 = (state_28514[(2)]);
var state_28514__$1 = (function (){var statearr_28523 = state_28514;
(statearr_28523[(9)] = inst_28505);

return statearr_28523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28514__$1,(9),results,inst_28500);
} else {
if((state_val_28515 === (9))){
var inst_28507 = (state_28514[(2)]);
var state_28514__$1 = (function (){var statearr_28524 = state_28514;
(statearr_28524[(10)] = inst_28507);

return statearr_28524;
})();
var statearr_28525_28635 = state_28514__$1;
(statearr_28525_28635[(2)] = null);

(statearr_28525_28635[(1)] = (2));


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
});})(c__28045__auto___28629,jobs,results,process,async))
;
return ((function (switch__27933__auto__,c__28045__auto___28629,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0 = (function (){
var statearr_28529 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__);

(statearr_28529[(1)] = (1));

return statearr_28529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1 = (function (state_28514){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28530){if((e28530 instanceof Object)){
var ex__27937__auto__ = e28530;
var statearr_28531_28636 = state_28514;
(statearr_28531_28636[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28637 = state_28514;
state_28514 = G__28637;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = function(state_28514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1.call(this,state_28514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___28629,jobs,results,process,async))
})();
var state__28047__auto__ = (function (){var statearr_28532 = f__28046__auto__.call(null);
(statearr_28532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___28629);

return statearr_28532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___28629,jobs,results,process,async))
);


var c__28045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto__,jobs,results,process,async){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto__,jobs,results,process,async){
return (function (state_28570){
var state_val_28571 = (state_28570[(1)]);
if((state_val_28571 === (7))){
var inst_28566 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28572_28638 = state_28570__$1;
(statearr_28572_28638[(2)] = inst_28566);

(statearr_28572_28638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (20))){
var state_28570__$1 = state_28570;
var statearr_28573_28639 = state_28570__$1;
(statearr_28573_28639[(2)] = null);

(statearr_28573_28639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (1))){
var state_28570__$1 = state_28570;
var statearr_28574_28640 = state_28570__$1;
(statearr_28574_28640[(2)] = null);

(statearr_28574_28640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (4))){
var inst_28535 = (state_28570[(7)]);
var inst_28535__$1 = (state_28570[(2)]);
var inst_28536 = (inst_28535__$1 == null);
var state_28570__$1 = (function (){var statearr_28575 = state_28570;
(statearr_28575[(7)] = inst_28535__$1);

return statearr_28575;
})();
if(cljs.core.truth_(inst_28536)){
var statearr_28576_28641 = state_28570__$1;
(statearr_28576_28641[(1)] = (5));

} else {
var statearr_28577_28642 = state_28570__$1;
(statearr_28577_28642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (15))){
var inst_28548 = (state_28570[(8)]);
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28570__$1,(18),to,inst_28548);
} else {
if((state_val_28571 === (21))){
var inst_28561 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28578_28643 = state_28570__$1;
(statearr_28578_28643[(2)] = inst_28561);

(statearr_28578_28643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (13))){
var inst_28563 = (state_28570[(2)]);
var state_28570__$1 = (function (){var statearr_28579 = state_28570;
(statearr_28579[(9)] = inst_28563);

return statearr_28579;
})();
var statearr_28580_28644 = state_28570__$1;
(statearr_28580_28644[(2)] = null);

(statearr_28580_28644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (6))){
var inst_28535 = (state_28570[(7)]);
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28570__$1,(11),inst_28535);
} else {
if((state_val_28571 === (17))){
var inst_28556 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
if(cljs.core.truth_(inst_28556)){
var statearr_28581_28645 = state_28570__$1;
(statearr_28581_28645[(1)] = (19));

} else {
var statearr_28582_28646 = state_28570__$1;
(statearr_28582_28646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (3))){
var inst_28568 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28570__$1,inst_28568);
} else {
if((state_val_28571 === (12))){
var inst_28545 = (state_28570[(10)]);
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28570__$1,(14),inst_28545);
} else {
if((state_val_28571 === (2))){
var state_28570__$1 = state_28570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28570__$1,(4),results);
} else {
if((state_val_28571 === (19))){
var state_28570__$1 = state_28570;
var statearr_28583_28647 = state_28570__$1;
(statearr_28583_28647[(2)] = null);

(statearr_28583_28647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (11))){
var inst_28545 = (state_28570[(2)]);
var state_28570__$1 = (function (){var statearr_28584 = state_28570;
(statearr_28584[(10)] = inst_28545);

return statearr_28584;
})();
var statearr_28585_28648 = state_28570__$1;
(statearr_28585_28648[(2)] = null);

(statearr_28585_28648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (9))){
var state_28570__$1 = state_28570;
var statearr_28586_28649 = state_28570__$1;
(statearr_28586_28649[(2)] = null);

(statearr_28586_28649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (5))){
var state_28570__$1 = state_28570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28587_28650 = state_28570__$1;
(statearr_28587_28650[(1)] = (8));

} else {
var statearr_28588_28651 = state_28570__$1;
(statearr_28588_28651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (14))){
var inst_28548 = (state_28570[(8)]);
var inst_28550 = (state_28570[(11)]);
var inst_28548__$1 = (state_28570[(2)]);
var inst_28549 = (inst_28548__$1 == null);
var inst_28550__$1 = cljs.core.not.call(null,inst_28549);
var state_28570__$1 = (function (){var statearr_28589 = state_28570;
(statearr_28589[(8)] = inst_28548__$1);

(statearr_28589[(11)] = inst_28550__$1);

return statearr_28589;
})();
if(inst_28550__$1){
var statearr_28590_28652 = state_28570__$1;
(statearr_28590_28652[(1)] = (15));

} else {
var statearr_28591_28653 = state_28570__$1;
(statearr_28591_28653[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (16))){
var inst_28550 = (state_28570[(11)]);
var state_28570__$1 = state_28570;
var statearr_28592_28654 = state_28570__$1;
(statearr_28592_28654[(2)] = inst_28550);

(statearr_28592_28654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (10))){
var inst_28542 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28593_28655 = state_28570__$1;
(statearr_28593_28655[(2)] = inst_28542);

(statearr_28593_28655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (18))){
var inst_28553 = (state_28570[(2)]);
var state_28570__$1 = state_28570;
var statearr_28594_28656 = state_28570__$1;
(statearr_28594_28656[(2)] = inst_28553);

(statearr_28594_28656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28571 === (8))){
var inst_28539 = cljs.core.async.close_BANG_.call(null,to);
var state_28570__$1 = state_28570;
var statearr_28595_28657 = state_28570__$1;
(statearr_28595_28657[(2)] = inst_28539);

(statearr_28595_28657[(1)] = (10));


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
});})(c__28045__auto__,jobs,results,process,async))
;
return ((function (switch__27933__auto__,c__28045__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0 = (function (){
var statearr_28599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__);

(statearr_28599[(1)] = (1));

return statearr_28599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1 = (function (state_28570){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28600){if((e28600 instanceof Object)){
var ex__27937__auto__ = e28600;
var statearr_28601_28658 = state_28570;
(statearr_28601_28658[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28659 = state_28570;
state_28570 = G__28659;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__ = function(state_28570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1.call(this,state_28570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto__,jobs,results,process,async))
})();
var state__28047__auto__ = (function (){var statearr_28602 = f__28046__auto__.call(null);
(statearr_28602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto__);

return statearr_28602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto__,jobs,results,process,async))
);

return c__28045__auto__;
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
var args28660 = [];
var len__22733__auto___28663 = arguments.length;
var i__22734__auto___28664 = (0);
while(true){
if((i__22734__auto___28664 < len__22733__auto___28663)){
args28660.push((arguments[i__22734__auto___28664]));

var G__28665 = (i__22734__auto___28664 + (1));
i__22734__auto___28664 = G__28665;
continue;
} else {
}
break;
}

var G__28662 = args28660.length;
switch (G__28662) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28660.length)].join('')));

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
var args28667 = [];
var len__22733__auto___28670 = arguments.length;
var i__22734__auto___28671 = (0);
while(true){
if((i__22734__auto___28671 < len__22733__auto___28670)){
args28667.push((arguments[i__22734__auto___28671]));

var G__28672 = (i__22734__auto___28671 + (1));
i__22734__auto___28671 = G__28672;
continue;
} else {
}
break;
}

var G__28669 = args28667.length;
switch (G__28669) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28667.length)].join('')));

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
var args28674 = [];
var len__22733__auto___28727 = arguments.length;
var i__22734__auto___28728 = (0);
while(true){
if((i__22734__auto___28728 < len__22733__auto___28727)){
args28674.push((arguments[i__22734__auto___28728]));

var G__28729 = (i__22734__auto___28728 + (1));
i__22734__auto___28728 = G__28729;
continue;
} else {
}
break;
}

var G__28676 = args28674.length;
switch (G__28676) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28674.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28045__auto___28731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___28731,tc,fc){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___28731,tc,fc){
return (function (state_28702){
var state_val_28703 = (state_28702[(1)]);
if((state_val_28703 === (7))){
var inst_28698 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28704_28732 = state_28702__$1;
(statearr_28704_28732[(2)] = inst_28698);

(statearr_28704_28732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (1))){
var state_28702__$1 = state_28702;
var statearr_28705_28733 = state_28702__$1;
(statearr_28705_28733[(2)] = null);

(statearr_28705_28733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (4))){
var inst_28679 = (state_28702[(7)]);
var inst_28679__$1 = (state_28702[(2)]);
var inst_28680 = (inst_28679__$1 == null);
var state_28702__$1 = (function (){var statearr_28706 = state_28702;
(statearr_28706[(7)] = inst_28679__$1);

return statearr_28706;
})();
if(cljs.core.truth_(inst_28680)){
var statearr_28707_28734 = state_28702__$1;
(statearr_28707_28734[(1)] = (5));

} else {
var statearr_28708_28735 = state_28702__$1;
(statearr_28708_28735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (13))){
var state_28702__$1 = state_28702;
var statearr_28709_28736 = state_28702__$1;
(statearr_28709_28736[(2)] = null);

(statearr_28709_28736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (6))){
var inst_28679 = (state_28702[(7)]);
var inst_28685 = p.call(null,inst_28679);
var state_28702__$1 = state_28702;
if(cljs.core.truth_(inst_28685)){
var statearr_28710_28737 = state_28702__$1;
(statearr_28710_28737[(1)] = (9));

} else {
var statearr_28711_28738 = state_28702__$1;
(statearr_28711_28738[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (3))){
var inst_28700 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28702__$1,inst_28700);
} else {
if((state_val_28703 === (12))){
var state_28702__$1 = state_28702;
var statearr_28712_28739 = state_28702__$1;
(statearr_28712_28739[(2)] = null);

(statearr_28712_28739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (2))){
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28702__$1,(4),ch);
} else {
if((state_val_28703 === (11))){
var inst_28679 = (state_28702[(7)]);
var inst_28689 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28702__$1,(8),inst_28689,inst_28679);
} else {
if((state_val_28703 === (9))){
var state_28702__$1 = state_28702;
var statearr_28713_28740 = state_28702__$1;
(statearr_28713_28740[(2)] = tc);

(statearr_28713_28740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (5))){
var inst_28682 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28683 = cljs.core.async.close_BANG_.call(null,fc);
var state_28702__$1 = (function (){var statearr_28714 = state_28702;
(statearr_28714[(8)] = inst_28682);

return statearr_28714;
})();
var statearr_28715_28741 = state_28702__$1;
(statearr_28715_28741[(2)] = inst_28683);

(statearr_28715_28741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (14))){
var inst_28696 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28716_28742 = state_28702__$1;
(statearr_28716_28742[(2)] = inst_28696);

(statearr_28716_28742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (10))){
var state_28702__$1 = state_28702;
var statearr_28717_28743 = state_28702__$1;
(statearr_28717_28743[(2)] = fc);

(statearr_28717_28743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (8))){
var inst_28691 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
if(cljs.core.truth_(inst_28691)){
var statearr_28718_28744 = state_28702__$1;
(statearr_28718_28744[(1)] = (12));

} else {
var statearr_28719_28745 = state_28702__$1;
(statearr_28719_28745[(1)] = (13));

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
});})(c__28045__auto___28731,tc,fc))
;
return ((function (switch__27933__auto__,c__28045__auto___28731,tc,fc){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_28723 = [null,null,null,null,null,null,null,null,null];
(statearr_28723[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_28723[(1)] = (1));

return statearr_28723;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_28702){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28724){if((e28724 instanceof Object)){
var ex__27937__auto__ = e28724;
var statearr_28725_28746 = state_28702;
(statearr_28725_28746[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28747 = state_28702;
state_28702 = G__28747;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_28702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_28702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___28731,tc,fc))
})();
var state__28047__auto__ = (function (){var statearr_28726 = f__28046__auto__.call(null);
(statearr_28726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___28731);

return statearr_28726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___28731,tc,fc))
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
var c__28045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto__){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto__){
return (function (state_28811){
var state_val_28812 = (state_28811[(1)]);
if((state_val_28812 === (7))){
var inst_28807 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28813_28834 = state_28811__$1;
(statearr_28813_28834[(2)] = inst_28807);

(statearr_28813_28834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (1))){
var inst_28791 = init;
var state_28811__$1 = (function (){var statearr_28814 = state_28811;
(statearr_28814[(7)] = inst_28791);

return statearr_28814;
})();
var statearr_28815_28835 = state_28811__$1;
(statearr_28815_28835[(2)] = null);

(statearr_28815_28835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (4))){
var inst_28794 = (state_28811[(8)]);
var inst_28794__$1 = (state_28811[(2)]);
var inst_28795 = (inst_28794__$1 == null);
var state_28811__$1 = (function (){var statearr_28816 = state_28811;
(statearr_28816[(8)] = inst_28794__$1);

return statearr_28816;
})();
if(cljs.core.truth_(inst_28795)){
var statearr_28817_28836 = state_28811__$1;
(statearr_28817_28836[(1)] = (5));

} else {
var statearr_28818_28837 = state_28811__$1;
(statearr_28818_28837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (6))){
var inst_28791 = (state_28811[(7)]);
var inst_28798 = (state_28811[(9)]);
var inst_28794 = (state_28811[(8)]);
var inst_28798__$1 = f.call(null,inst_28791,inst_28794);
var inst_28799 = cljs.core.reduced_QMARK_.call(null,inst_28798__$1);
var state_28811__$1 = (function (){var statearr_28819 = state_28811;
(statearr_28819[(9)] = inst_28798__$1);

return statearr_28819;
})();
if(inst_28799){
var statearr_28820_28838 = state_28811__$1;
(statearr_28820_28838[(1)] = (8));

} else {
var statearr_28821_28839 = state_28811__$1;
(statearr_28821_28839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (3))){
var inst_28809 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28811__$1,inst_28809);
} else {
if((state_val_28812 === (2))){
var state_28811__$1 = state_28811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28811__$1,(4),ch);
} else {
if((state_val_28812 === (9))){
var inst_28798 = (state_28811[(9)]);
var inst_28791 = inst_28798;
var state_28811__$1 = (function (){var statearr_28822 = state_28811;
(statearr_28822[(7)] = inst_28791);

return statearr_28822;
})();
var statearr_28823_28840 = state_28811__$1;
(statearr_28823_28840[(2)] = null);

(statearr_28823_28840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (5))){
var inst_28791 = (state_28811[(7)]);
var state_28811__$1 = state_28811;
var statearr_28824_28841 = state_28811__$1;
(statearr_28824_28841[(2)] = inst_28791);

(statearr_28824_28841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (10))){
var inst_28805 = (state_28811[(2)]);
var state_28811__$1 = state_28811;
var statearr_28825_28842 = state_28811__$1;
(statearr_28825_28842[(2)] = inst_28805);

(statearr_28825_28842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28812 === (8))){
var inst_28798 = (state_28811[(9)]);
var inst_28801 = cljs.core.deref.call(null,inst_28798);
var state_28811__$1 = state_28811;
var statearr_28826_28843 = state_28811__$1;
(statearr_28826_28843[(2)] = inst_28801);

(statearr_28826_28843[(1)] = (10));


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
});})(c__28045__auto__))
;
return ((function (switch__27933__auto__,c__28045__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27934__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27934__auto____0 = (function (){
var statearr_28830 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28830[(0)] = cljs$core$async$reduce_$_state_machine__27934__auto__);

(statearr_28830[(1)] = (1));

return statearr_28830;
});
var cljs$core$async$reduce_$_state_machine__27934__auto____1 = (function (state_28811){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28831){if((e28831 instanceof Object)){
var ex__27937__auto__ = e28831;
var statearr_28832_28844 = state_28811;
(statearr_28832_28844[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28845 = state_28811;
state_28811 = G__28845;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27934__auto__ = function(state_28811){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27934__auto____1.call(this,state_28811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27934__auto____0;
cljs$core$async$reduce_$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27934__auto____1;
return cljs$core$async$reduce_$_state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto__))
})();
var state__28047__auto__ = (function (){var statearr_28833 = f__28046__auto__.call(null);
(statearr_28833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto__);

return statearr_28833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto__))
);

return c__28045__auto__;
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
var args28846 = [];
var len__22733__auto___28898 = arguments.length;
var i__22734__auto___28899 = (0);
while(true){
if((i__22734__auto___28899 < len__22733__auto___28898)){
args28846.push((arguments[i__22734__auto___28899]));

var G__28900 = (i__22734__auto___28899 + (1));
i__22734__auto___28899 = G__28900;
continue;
} else {
}
break;
}

var G__28848 = args28846.length;
switch (G__28848) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28846.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto__){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto__){
return (function (state_28873){
var state_val_28874 = (state_28873[(1)]);
if((state_val_28874 === (7))){
var inst_28855 = (state_28873[(2)]);
var state_28873__$1 = state_28873;
var statearr_28875_28902 = state_28873__$1;
(statearr_28875_28902[(2)] = inst_28855);

(statearr_28875_28902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (1))){
var inst_28849 = cljs.core.seq.call(null,coll);
var inst_28850 = inst_28849;
var state_28873__$1 = (function (){var statearr_28876 = state_28873;
(statearr_28876[(7)] = inst_28850);

return statearr_28876;
})();
var statearr_28877_28903 = state_28873__$1;
(statearr_28877_28903[(2)] = null);

(statearr_28877_28903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (4))){
var inst_28850 = (state_28873[(7)]);
var inst_28853 = cljs.core.first.call(null,inst_28850);
var state_28873__$1 = state_28873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28873__$1,(7),ch,inst_28853);
} else {
if((state_val_28874 === (13))){
var inst_28867 = (state_28873[(2)]);
var state_28873__$1 = state_28873;
var statearr_28878_28904 = state_28873__$1;
(statearr_28878_28904[(2)] = inst_28867);

(statearr_28878_28904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (6))){
var inst_28858 = (state_28873[(2)]);
var state_28873__$1 = state_28873;
if(cljs.core.truth_(inst_28858)){
var statearr_28879_28905 = state_28873__$1;
(statearr_28879_28905[(1)] = (8));

} else {
var statearr_28880_28906 = state_28873__$1;
(statearr_28880_28906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (3))){
var inst_28871 = (state_28873[(2)]);
var state_28873__$1 = state_28873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28873__$1,inst_28871);
} else {
if((state_val_28874 === (12))){
var state_28873__$1 = state_28873;
var statearr_28881_28907 = state_28873__$1;
(statearr_28881_28907[(2)] = null);

(statearr_28881_28907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (2))){
var inst_28850 = (state_28873[(7)]);
var state_28873__$1 = state_28873;
if(cljs.core.truth_(inst_28850)){
var statearr_28882_28908 = state_28873__$1;
(statearr_28882_28908[(1)] = (4));

} else {
var statearr_28883_28909 = state_28873__$1;
(statearr_28883_28909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (11))){
var inst_28864 = cljs.core.async.close_BANG_.call(null,ch);
var state_28873__$1 = state_28873;
var statearr_28884_28910 = state_28873__$1;
(statearr_28884_28910[(2)] = inst_28864);

(statearr_28884_28910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (9))){
var state_28873__$1 = state_28873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28885_28911 = state_28873__$1;
(statearr_28885_28911[(1)] = (11));

} else {
var statearr_28886_28912 = state_28873__$1;
(statearr_28886_28912[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (5))){
var inst_28850 = (state_28873[(7)]);
var state_28873__$1 = state_28873;
var statearr_28887_28913 = state_28873__$1;
(statearr_28887_28913[(2)] = inst_28850);

(statearr_28887_28913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (10))){
var inst_28869 = (state_28873[(2)]);
var state_28873__$1 = state_28873;
var statearr_28888_28914 = state_28873__$1;
(statearr_28888_28914[(2)] = inst_28869);

(statearr_28888_28914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (8))){
var inst_28850 = (state_28873[(7)]);
var inst_28860 = cljs.core.next.call(null,inst_28850);
var inst_28850__$1 = inst_28860;
var state_28873__$1 = (function (){var statearr_28889 = state_28873;
(statearr_28889[(7)] = inst_28850__$1);

return statearr_28889;
})();
var statearr_28890_28915 = state_28873__$1;
(statearr_28890_28915[(2)] = null);

(statearr_28890_28915[(1)] = (2));


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
});})(c__28045__auto__))
;
return ((function (switch__27933__auto__,c__28045__auto__){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_28894 = [null,null,null,null,null,null,null,null];
(statearr_28894[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_28894[(1)] = (1));

return statearr_28894;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_28873){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_28873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e28895){if((e28895 instanceof Object)){
var ex__27937__auto__ = e28895;
var statearr_28896_28916 = state_28873;
(statearr_28896_28916[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28917 = state_28873;
state_28873 = G__28917;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_28873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_28873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto__))
})();
var state__28047__auto__ = (function (){var statearr_28897 = f__28046__auto__.call(null);
(statearr_28897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto__);

return statearr_28897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto__))
);

return c__28045__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async29143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29143 = (function (ch,cs,meta29144){
this.ch = ch;
this.cs = cs;
this.meta29144 = meta29144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29145,meta29144__$1){
var self__ = this;
var _29145__$1 = this;
return (new cljs.core.async.t_cljs$core$async29143(self__.ch,self__.cs,meta29144__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29145){
var self__ = this;
var _29145__$1 = this;
return self__.meta29144;
});})(cs))
;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29143.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29144","meta29144",1079442081,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29143";

cljs.core.async.t_cljs$core$async29143.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async29143");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29143 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29143(ch__$1,cs__$1,meta29144){
return (new cljs.core.async.t_cljs$core$async29143(ch__$1,cs__$1,meta29144));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29143(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28045__auto___29368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___29368,cs,m,dchan,dctr,done){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___29368,cs,m,dchan,dctr,done){
return (function (state_29280){
var state_val_29281 = (state_29280[(1)]);
if((state_val_29281 === (7))){
var inst_29276 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29282_29369 = state_29280__$1;
(statearr_29282_29369[(2)] = inst_29276);

(statearr_29282_29369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (20))){
var inst_29179 = (state_29280[(7)]);
var inst_29191 = cljs.core.first.call(null,inst_29179);
var inst_29192 = cljs.core.nth.call(null,inst_29191,(0),null);
var inst_29193 = cljs.core.nth.call(null,inst_29191,(1),null);
var state_29280__$1 = (function (){var statearr_29283 = state_29280;
(statearr_29283[(8)] = inst_29192);

return statearr_29283;
})();
if(cljs.core.truth_(inst_29193)){
var statearr_29284_29370 = state_29280__$1;
(statearr_29284_29370[(1)] = (22));

} else {
var statearr_29285_29371 = state_29280__$1;
(statearr_29285_29371[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (27))){
var inst_29223 = (state_29280[(9)]);
var inst_29148 = (state_29280[(10)]);
var inst_29221 = (state_29280[(11)]);
var inst_29228 = (state_29280[(12)]);
var inst_29228__$1 = cljs.core._nth.call(null,inst_29221,inst_29223);
var inst_29229 = cljs.core.async.put_BANG_.call(null,inst_29228__$1,inst_29148,done);
var state_29280__$1 = (function (){var statearr_29286 = state_29280;
(statearr_29286[(12)] = inst_29228__$1);

return statearr_29286;
})();
if(cljs.core.truth_(inst_29229)){
var statearr_29287_29372 = state_29280__$1;
(statearr_29287_29372[(1)] = (30));

} else {
var statearr_29288_29373 = state_29280__$1;
(statearr_29288_29373[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (1))){
var state_29280__$1 = state_29280;
var statearr_29289_29374 = state_29280__$1;
(statearr_29289_29374[(2)] = null);

(statearr_29289_29374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (24))){
var inst_29179 = (state_29280[(7)]);
var inst_29198 = (state_29280[(2)]);
var inst_29199 = cljs.core.next.call(null,inst_29179);
var inst_29157 = inst_29199;
var inst_29158 = null;
var inst_29159 = (0);
var inst_29160 = (0);
var state_29280__$1 = (function (){var statearr_29290 = state_29280;
(statearr_29290[(13)] = inst_29158);

(statearr_29290[(14)] = inst_29159);

(statearr_29290[(15)] = inst_29157);

(statearr_29290[(16)] = inst_29160);

(statearr_29290[(17)] = inst_29198);

return statearr_29290;
})();
var statearr_29291_29375 = state_29280__$1;
(statearr_29291_29375[(2)] = null);

(statearr_29291_29375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (39))){
var state_29280__$1 = state_29280;
var statearr_29295_29376 = state_29280__$1;
(statearr_29295_29376[(2)] = null);

(statearr_29295_29376[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (4))){
var inst_29148 = (state_29280[(10)]);
var inst_29148__$1 = (state_29280[(2)]);
var inst_29149 = (inst_29148__$1 == null);
var state_29280__$1 = (function (){var statearr_29296 = state_29280;
(statearr_29296[(10)] = inst_29148__$1);

return statearr_29296;
})();
if(cljs.core.truth_(inst_29149)){
var statearr_29297_29377 = state_29280__$1;
(statearr_29297_29377[(1)] = (5));

} else {
var statearr_29298_29378 = state_29280__$1;
(statearr_29298_29378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (15))){
var inst_29158 = (state_29280[(13)]);
var inst_29159 = (state_29280[(14)]);
var inst_29157 = (state_29280[(15)]);
var inst_29160 = (state_29280[(16)]);
var inst_29175 = (state_29280[(2)]);
var inst_29176 = (inst_29160 + (1));
var tmp29292 = inst_29158;
var tmp29293 = inst_29159;
var tmp29294 = inst_29157;
var inst_29157__$1 = tmp29294;
var inst_29158__$1 = tmp29292;
var inst_29159__$1 = tmp29293;
var inst_29160__$1 = inst_29176;
var state_29280__$1 = (function (){var statearr_29299 = state_29280;
(statearr_29299[(13)] = inst_29158__$1);

(statearr_29299[(14)] = inst_29159__$1);

(statearr_29299[(15)] = inst_29157__$1);

(statearr_29299[(16)] = inst_29160__$1);

(statearr_29299[(18)] = inst_29175);

return statearr_29299;
})();
var statearr_29300_29379 = state_29280__$1;
(statearr_29300_29379[(2)] = null);

(statearr_29300_29379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (21))){
var inst_29202 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29304_29380 = state_29280__$1;
(statearr_29304_29380[(2)] = inst_29202);

(statearr_29304_29380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (31))){
var inst_29228 = (state_29280[(12)]);
var inst_29232 = done.call(null,null);
var inst_29233 = cljs.core.async.untap_STAR_.call(null,m,inst_29228);
var state_29280__$1 = (function (){var statearr_29305 = state_29280;
(statearr_29305[(19)] = inst_29232);

return statearr_29305;
})();
var statearr_29306_29381 = state_29280__$1;
(statearr_29306_29381[(2)] = inst_29233);

(statearr_29306_29381[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (32))){
var inst_29223 = (state_29280[(9)]);
var inst_29220 = (state_29280[(20)]);
var inst_29222 = (state_29280[(21)]);
var inst_29221 = (state_29280[(11)]);
var inst_29235 = (state_29280[(2)]);
var inst_29236 = (inst_29223 + (1));
var tmp29301 = inst_29220;
var tmp29302 = inst_29222;
var tmp29303 = inst_29221;
var inst_29220__$1 = tmp29301;
var inst_29221__$1 = tmp29303;
var inst_29222__$1 = tmp29302;
var inst_29223__$1 = inst_29236;
var state_29280__$1 = (function (){var statearr_29307 = state_29280;
(statearr_29307[(9)] = inst_29223__$1);

(statearr_29307[(20)] = inst_29220__$1);

(statearr_29307[(21)] = inst_29222__$1);

(statearr_29307[(11)] = inst_29221__$1);

(statearr_29307[(22)] = inst_29235);

return statearr_29307;
})();
var statearr_29308_29382 = state_29280__$1;
(statearr_29308_29382[(2)] = null);

(statearr_29308_29382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (40))){
var inst_29248 = (state_29280[(23)]);
var inst_29252 = done.call(null,null);
var inst_29253 = cljs.core.async.untap_STAR_.call(null,m,inst_29248);
var state_29280__$1 = (function (){var statearr_29309 = state_29280;
(statearr_29309[(24)] = inst_29252);

return statearr_29309;
})();
var statearr_29310_29383 = state_29280__$1;
(statearr_29310_29383[(2)] = inst_29253);

(statearr_29310_29383[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (33))){
var inst_29239 = (state_29280[(25)]);
var inst_29241 = cljs.core.chunked_seq_QMARK_.call(null,inst_29239);
var state_29280__$1 = state_29280;
if(inst_29241){
var statearr_29311_29384 = state_29280__$1;
(statearr_29311_29384[(1)] = (36));

} else {
var statearr_29312_29385 = state_29280__$1;
(statearr_29312_29385[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (13))){
var inst_29169 = (state_29280[(26)]);
var inst_29172 = cljs.core.async.close_BANG_.call(null,inst_29169);
var state_29280__$1 = state_29280;
var statearr_29313_29386 = state_29280__$1;
(statearr_29313_29386[(2)] = inst_29172);

(statearr_29313_29386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (22))){
var inst_29192 = (state_29280[(8)]);
var inst_29195 = cljs.core.async.close_BANG_.call(null,inst_29192);
var state_29280__$1 = state_29280;
var statearr_29314_29387 = state_29280__$1;
(statearr_29314_29387[(2)] = inst_29195);

(statearr_29314_29387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (36))){
var inst_29239 = (state_29280[(25)]);
var inst_29243 = cljs.core.chunk_first.call(null,inst_29239);
var inst_29244 = cljs.core.chunk_rest.call(null,inst_29239);
var inst_29245 = cljs.core.count.call(null,inst_29243);
var inst_29220 = inst_29244;
var inst_29221 = inst_29243;
var inst_29222 = inst_29245;
var inst_29223 = (0);
var state_29280__$1 = (function (){var statearr_29315 = state_29280;
(statearr_29315[(9)] = inst_29223);

(statearr_29315[(20)] = inst_29220);

(statearr_29315[(21)] = inst_29222);

(statearr_29315[(11)] = inst_29221);

return statearr_29315;
})();
var statearr_29316_29388 = state_29280__$1;
(statearr_29316_29388[(2)] = null);

(statearr_29316_29388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (41))){
var inst_29239 = (state_29280[(25)]);
var inst_29255 = (state_29280[(2)]);
var inst_29256 = cljs.core.next.call(null,inst_29239);
var inst_29220 = inst_29256;
var inst_29221 = null;
var inst_29222 = (0);
var inst_29223 = (0);
var state_29280__$1 = (function (){var statearr_29317 = state_29280;
(statearr_29317[(9)] = inst_29223);

(statearr_29317[(20)] = inst_29220);

(statearr_29317[(21)] = inst_29222);

(statearr_29317[(27)] = inst_29255);

(statearr_29317[(11)] = inst_29221);

return statearr_29317;
})();
var statearr_29318_29389 = state_29280__$1;
(statearr_29318_29389[(2)] = null);

(statearr_29318_29389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (43))){
var state_29280__$1 = state_29280;
var statearr_29319_29390 = state_29280__$1;
(statearr_29319_29390[(2)] = null);

(statearr_29319_29390[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (29))){
var inst_29264 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29320_29391 = state_29280__$1;
(statearr_29320_29391[(2)] = inst_29264);

(statearr_29320_29391[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (44))){
var inst_29273 = (state_29280[(2)]);
var state_29280__$1 = (function (){var statearr_29321 = state_29280;
(statearr_29321[(28)] = inst_29273);

return statearr_29321;
})();
var statearr_29322_29392 = state_29280__$1;
(statearr_29322_29392[(2)] = null);

(statearr_29322_29392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (6))){
var inst_29212 = (state_29280[(29)]);
var inst_29211 = cljs.core.deref.call(null,cs);
var inst_29212__$1 = cljs.core.keys.call(null,inst_29211);
var inst_29213 = cljs.core.count.call(null,inst_29212__$1);
var inst_29214 = cljs.core.reset_BANG_.call(null,dctr,inst_29213);
var inst_29219 = cljs.core.seq.call(null,inst_29212__$1);
var inst_29220 = inst_29219;
var inst_29221 = null;
var inst_29222 = (0);
var inst_29223 = (0);
var state_29280__$1 = (function (){var statearr_29323 = state_29280;
(statearr_29323[(9)] = inst_29223);

(statearr_29323[(20)] = inst_29220);

(statearr_29323[(30)] = inst_29214);

(statearr_29323[(21)] = inst_29222);

(statearr_29323[(29)] = inst_29212__$1);

(statearr_29323[(11)] = inst_29221);

return statearr_29323;
})();
var statearr_29324_29393 = state_29280__$1;
(statearr_29324_29393[(2)] = null);

(statearr_29324_29393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (28))){
var inst_29239 = (state_29280[(25)]);
var inst_29220 = (state_29280[(20)]);
var inst_29239__$1 = cljs.core.seq.call(null,inst_29220);
var state_29280__$1 = (function (){var statearr_29325 = state_29280;
(statearr_29325[(25)] = inst_29239__$1);

return statearr_29325;
})();
if(inst_29239__$1){
var statearr_29326_29394 = state_29280__$1;
(statearr_29326_29394[(1)] = (33));

} else {
var statearr_29327_29395 = state_29280__$1;
(statearr_29327_29395[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (25))){
var inst_29223 = (state_29280[(9)]);
var inst_29222 = (state_29280[(21)]);
var inst_29225 = (inst_29223 < inst_29222);
var inst_29226 = inst_29225;
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29226)){
var statearr_29328_29396 = state_29280__$1;
(statearr_29328_29396[(1)] = (27));

} else {
var statearr_29329_29397 = state_29280__$1;
(statearr_29329_29397[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (34))){
var state_29280__$1 = state_29280;
var statearr_29330_29398 = state_29280__$1;
(statearr_29330_29398[(2)] = null);

(statearr_29330_29398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (17))){
var state_29280__$1 = state_29280;
var statearr_29331_29399 = state_29280__$1;
(statearr_29331_29399[(2)] = null);

(statearr_29331_29399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (3))){
var inst_29278 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29280__$1,inst_29278);
} else {
if((state_val_29281 === (12))){
var inst_29207 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29332_29400 = state_29280__$1;
(statearr_29332_29400[(2)] = inst_29207);

(statearr_29332_29400[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (2))){
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(4),ch);
} else {
if((state_val_29281 === (23))){
var state_29280__$1 = state_29280;
var statearr_29333_29401 = state_29280__$1;
(statearr_29333_29401[(2)] = null);

(statearr_29333_29401[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (35))){
var inst_29262 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29334_29402 = state_29280__$1;
(statearr_29334_29402[(2)] = inst_29262);

(statearr_29334_29402[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (19))){
var inst_29179 = (state_29280[(7)]);
var inst_29183 = cljs.core.chunk_first.call(null,inst_29179);
var inst_29184 = cljs.core.chunk_rest.call(null,inst_29179);
var inst_29185 = cljs.core.count.call(null,inst_29183);
var inst_29157 = inst_29184;
var inst_29158 = inst_29183;
var inst_29159 = inst_29185;
var inst_29160 = (0);
var state_29280__$1 = (function (){var statearr_29335 = state_29280;
(statearr_29335[(13)] = inst_29158);

(statearr_29335[(14)] = inst_29159);

(statearr_29335[(15)] = inst_29157);

(statearr_29335[(16)] = inst_29160);

return statearr_29335;
})();
var statearr_29336_29403 = state_29280__$1;
(statearr_29336_29403[(2)] = null);

(statearr_29336_29403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (11))){
var inst_29157 = (state_29280[(15)]);
var inst_29179 = (state_29280[(7)]);
var inst_29179__$1 = cljs.core.seq.call(null,inst_29157);
var state_29280__$1 = (function (){var statearr_29337 = state_29280;
(statearr_29337[(7)] = inst_29179__$1);

return statearr_29337;
})();
if(inst_29179__$1){
var statearr_29338_29404 = state_29280__$1;
(statearr_29338_29404[(1)] = (16));

} else {
var statearr_29339_29405 = state_29280__$1;
(statearr_29339_29405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (9))){
var inst_29209 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29340_29406 = state_29280__$1;
(statearr_29340_29406[(2)] = inst_29209);

(statearr_29340_29406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (5))){
var inst_29155 = cljs.core.deref.call(null,cs);
var inst_29156 = cljs.core.seq.call(null,inst_29155);
var inst_29157 = inst_29156;
var inst_29158 = null;
var inst_29159 = (0);
var inst_29160 = (0);
var state_29280__$1 = (function (){var statearr_29341 = state_29280;
(statearr_29341[(13)] = inst_29158);

(statearr_29341[(14)] = inst_29159);

(statearr_29341[(15)] = inst_29157);

(statearr_29341[(16)] = inst_29160);

return statearr_29341;
})();
var statearr_29342_29407 = state_29280__$1;
(statearr_29342_29407[(2)] = null);

(statearr_29342_29407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (14))){
var state_29280__$1 = state_29280;
var statearr_29343_29408 = state_29280__$1;
(statearr_29343_29408[(2)] = null);

(statearr_29343_29408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (45))){
var inst_29270 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29344_29409 = state_29280__$1;
(statearr_29344_29409[(2)] = inst_29270);

(statearr_29344_29409[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (26))){
var inst_29212 = (state_29280[(29)]);
var inst_29266 = (state_29280[(2)]);
var inst_29267 = cljs.core.seq.call(null,inst_29212);
var state_29280__$1 = (function (){var statearr_29345 = state_29280;
(statearr_29345[(31)] = inst_29266);

return statearr_29345;
})();
if(inst_29267){
var statearr_29346_29410 = state_29280__$1;
(statearr_29346_29410[(1)] = (42));

} else {
var statearr_29347_29411 = state_29280__$1;
(statearr_29347_29411[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (16))){
var inst_29179 = (state_29280[(7)]);
var inst_29181 = cljs.core.chunked_seq_QMARK_.call(null,inst_29179);
var state_29280__$1 = state_29280;
if(inst_29181){
var statearr_29348_29412 = state_29280__$1;
(statearr_29348_29412[(1)] = (19));

} else {
var statearr_29349_29413 = state_29280__$1;
(statearr_29349_29413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (38))){
var inst_29259 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29350_29414 = state_29280__$1;
(statearr_29350_29414[(2)] = inst_29259);

(statearr_29350_29414[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (30))){
var state_29280__$1 = state_29280;
var statearr_29351_29415 = state_29280__$1;
(statearr_29351_29415[(2)] = null);

(statearr_29351_29415[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (10))){
var inst_29158 = (state_29280[(13)]);
var inst_29160 = (state_29280[(16)]);
var inst_29168 = cljs.core._nth.call(null,inst_29158,inst_29160);
var inst_29169 = cljs.core.nth.call(null,inst_29168,(0),null);
var inst_29170 = cljs.core.nth.call(null,inst_29168,(1),null);
var state_29280__$1 = (function (){var statearr_29352 = state_29280;
(statearr_29352[(26)] = inst_29169);

return statearr_29352;
})();
if(cljs.core.truth_(inst_29170)){
var statearr_29353_29416 = state_29280__$1;
(statearr_29353_29416[(1)] = (13));

} else {
var statearr_29354_29417 = state_29280__$1;
(statearr_29354_29417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (18))){
var inst_29205 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29355_29418 = state_29280__$1;
(statearr_29355_29418[(2)] = inst_29205);

(statearr_29355_29418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (42))){
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(45),dchan);
} else {
if((state_val_29281 === (37))){
var inst_29239 = (state_29280[(25)]);
var inst_29248 = (state_29280[(23)]);
var inst_29148 = (state_29280[(10)]);
var inst_29248__$1 = cljs.core.first.call(null,inst_29239);
var inst_29249 = cljs.core.async.put_BANG_.call(null,inst_29248__$1,inst_29148,done);
var state_29280__$1 = (function (){var statearr_29356 = state_29280;
(statearr_29356[(23)] = inst_29248__$1);

return statearr_29356;
})();
if(cljs.core.truth_(inst_29249)){
var statearr_29357_29419 = state_29280__$1;
(statearr_29357_29419[(1)] = (39));

} else {
var statearr_29358_29420 = state_29280__$1;
(statearr_29358_29420[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (8))){
var inst_29159 = (state_29280[(14)]);
var inst_29160 = (state_29280[(16)]);
var inst_29162 = (inst_29160 < inst_29159);
var inst_29163 = inst_29162;
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29163)){
var statearr_29359_29421 = state_29280__$1;
(statearr_29359_29421[(1)] = (10));

} else {
var statearr_29360_29422 = state_29280__$1;
(statearr_29360_29422[(1)] = (11));

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
});})(c__28045__auto___29368,cs,m,dchan,dctr,done))
;
return ((function (switch__27933__auto__,c__28045__auto___29368,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27934__auto__ = null;
var cljs$core$async$mult_$_state_machine__27934__auto____0 = (function (){
var statearr_29364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29364[(0)] = cljs$core$async$mult_$_state_machine__27934__auto__);

(statearr_29364[(1)] = (1));

return statearr_29364;
});
var cljs$core$async$mult_$_state_machine__27934__auto____1 = (function (state_29280){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_29280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e29365){if((e29365 instanceof Object)){
var ex__27937__auto__ = e29365;
var statearr_29366_29423 = state_29280;
(statearr_29366_29423[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29424 = state_29280;
state_29280 = G__29424;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27934__auto__ = function(state_29280){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27934__auto____1.call(this,state_29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27934__auto____0;
cljs$core$async$mult_$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27934__auto____1;
return cljs$core$async$mult_$_state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___29368,cs,m,dchan,dctr,done))
})();
var state__28047__auto__ = (function (){var statearr_29367 = f__28046__auto__.call(null);
(statearr_29367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___29368);

return statearr_29367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___29368,cs,m,dchan,dctr,done))
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
var args29425 = [];
var len__22733__auto___29428 = arguments.length;
var i__22734__auto___29429 = (0);
while(true){
if((i__22734__auto___29429 < len__22733__auto___29428)){
args29425.push((arguments[i__22734__auto___29429]));

var G__29430 = (i__22734__auto___29429 + (1));
i__22734__auto___29429 = G__29430;
continue;
} else {
}
break;
}

var G__29427 = args29425.length;
switch (G__29427) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29425.length)].join('')));

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
var len__22733__auto___29442 = arguments.length;
var i__22734__auto___29443 = (0);
while(true){
if((i__22734__auto___29443 < len__22733__auto___29442)){
args__22740__auto__.push((arguments[i__22734__auto___29443]));

var G__29444 = (i__22734__auto___29443 + (1));
i__22734__auto___29443 = G__29444;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((3) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22741__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29436){
var map__29437 = p__29436;
var map__29437__$1 = ((((!((map__29437 == null)))?((((map__29437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29437):map__29437);
var opts = map__29437__$1;
var statearr_29439_29445 = state;
(statearr_29439_29445[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29437,map__29437__$1,opts){
return (function (val){
var statearr_29440_29446 = state;
(statearr_29440_29446[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29437,map__29437__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29441_29447 = state;
(statearr_29441_29447[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29432){
var G__29433 = cljs.core.first.call(null,seq29432);
var seq29432__$1 = cljs.core.next.call(null,seq29432);
var G__29434 = cljs.core.first.call(null,seq29432__$1);
var seq29432__$2 = cljs.core.next.call(null,seq29432__$1);
var G__29435 = cljs.core.first.call(null,seq29432__$2);
var seq29432__$3 = cljs.core.next.call(null,seq29432__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29433,G__29434,G__29435,seq29432__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29615 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29616){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29616 = meta29616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29617,meta29616__$1){
var self__ = this;
var _29617__$1 = this;
return (new cljs.core.async.t_cljs$core$async29615(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29616__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29617){
var self__ = this;
var _29617__$1 = this;
return self__.meta29616;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29615.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29616","meta29616",752542480,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29615";

cljs.core.async.t_cljs$core$async29615.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async29615");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29615 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29615(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29616){
return (new cljs.core.async.t_cljs$core$async29615(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29616));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29615(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28045__auto___29782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___29782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___29782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29719){
var state_val_29720 = (state_29719[(1)]);
if((state_val_29720 === (7))){
var inst_29634 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29721_29783 = state_29719__$1;
(statearr_29721_29783[(2)] = inst_29634);

(statearr_29721_29783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (20))){
var inst_29646 = (state_29719[(7)]);
var state_29719__$1 = state_29719;
var statearr_29722_29784 = state_29719__$1;
(statearr_29722_29784[(2)] = inst_29646);

(statearr_29722_29784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (27))){
var state_29719__$1 = state_29719;
var statearr_29723_29785 = state_29719__$1;
(statearr_29723_29785[(2)] = null);

(statearr_29723_29785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (1))){
var inst_29621 = (state_29719[(8)]);
var inst_29621__$1 = calc_state.call(null);
var inst_29623 = (inst_29621__$1 == null);
var inst_29624 = cljs.core.not.call(null,inst_29623);
var state_29719__$1 = (function (){var statearr_29724 = state_29719;
(statearr_29724[(8)] = inst_29621__$1);

return statearr_29724;
})();
if(inst_29624){
var statearr_29725_29786 = state_29719__$1;
(statearr_29725_29786[(1)] = (2));

} else {
var statearr_29726_29787 = state_29719__$1;
(statearr_29726_29787[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (24))){
var inst_29679 = (state_29719[(9)]);
var inst_29693 = (state_29719[(10)]);
var inst_29670 = (state_29719[(11)]);
var inst_29693__$1 = inst_29670.call(null,inst_29679);
var state_29719__$1 = (function (){var statearr_29727 = state_29719;
(statearr_29727[(10)] = inst_29693__$1);

return statearr_29727;
})();
if(cljs.core.truth_(inst_29693__$1)){
var statearr_29728_29788 = state_29719__$1;
(statearr_29728_29788[(1)] = (29));

} else {
var statearr_29729_29789 = state_29719__$1;
(statearr_29729_29789[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (4))){
var inst_29637 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29637)){
var statearr_29730_29790 = state_29719__$1;
(statearr_29730_29790[(1)] = (8));

} else {
var statearr_29731_29791 = state_29719__$1;
(statearr_29731_29791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (15))){
var inst_29664 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29664)){
var statearr_29732_29792 = state_29719__$1;
(statearr_29732_29792[(1)] = (19));

} else {
var statearr_29733_29793 = state_29719__$1;
(statearr_29733_29793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (21))){
var inst_29669 = (state_29719[(12)]);
var inst_29669__$1 = (state_29719[(2)]);
var inst_29670 = cljs.core.get.call(null,inst_29669__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29671 = cljs.core.get.call(null,inst_29669__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29672 = cljs.core.get.call(null,inst_29669__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29719__$1 = (function (){var statearr_29734 = state_29719;
(statearr_29734[(12)] = inst_29669__$1);

(statearr_29734[(13)] = inst_29671);

(statearr_29734[(11)] = inst_29670);

return statearr_29734;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29719__$1,(22),inst_29672);
} else {
if((state_val_29720 === (31))){
var inst_29701 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29701)){
var statearr_29735_29794 = state_29719__$1;
(statearr_29735_29794[(1)] = (32));

} else {
var statearr_29736_29795 = state_29719__$1;
(statearr_29736_29795[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (32))){
var inst_29678 = (state_29719[(14)]);
var state_29719__$1 = state_29719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29719__$1,(35),out,inst_29678);
} else {
if((state_val_29720 === (33))){
var inst_29669 = (state_29719[(12)]);
var inst_29646 = inst_29669;
var state_29719__$1 = (function (){var statearr_29737 = state_29719;
(statearr_29737[(7)] = inst_29646);

return statearr_29737;
})();
var statearr_29738_29796 = state_29719__$1;
(statearr_29738_29796[(2)] = null);

(statearr_29738_29796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (13))){
var inst_29646 = (state_29719[(7)]);
var inst_29653 = inst_29646.cljs$lang$protocol_mask$partition0$;
var inst_29654 = (inst_29653 & (64));
var inst_29655 = inst_29646.cljs$core$ISeq$;
var inst_29656 = (cljs.core.PROTOCOL_SENTINEL === inst_29655);
var inst_29657 = (inst_29654) || (inst_29656);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29657)){
var statearr_29739_29797 = state_29719__$1;
(statearr_29739_29797[(1)] = (16));

} else {
var statearr_29740_29798 = state_29719__$1;
(statearr_29740_29798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (22))){
var inst_29679 = (state_29719[(9)]);
var inst_29678 = (state_29719[(14)]);
var inst_29677 = (state_29719[(2)]);
var inst_29678__$1 = cljs.core.nth.call(null,inst_29677,(0),null);
var inst_29679__$1 = cljs.core.nth.call(null,inst_29677,(1),null);
var inst_29680 = (inst_29678__$1 == null);
var inst_29681 = cljs.core._EQ_.call(null,inst_29679__$1,change);
var inst_29682 = (inst_29680) || (inst_29681);
var state_29719__$1 = (function (){var statearr_29741 = state_29719;
(statearr_29741[(9)] = inst_29679__$1);

(statearr_29741[(14)] = inst_29678__$1);

return statearr_29741;
})();
if(cljs.core.truth_(inst_29682)){
var statearr_29742_29799 = state_29719__$1;
(statearr_29742_29799[(1)] = (23));

} else {
var statearr_29743_29800 = state_29719__$1;
(statearr_29743_29800[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (36))){
var inst_29669 = (state_29719[(12)]);
var inst_29646 = inst_29669;
var state_29719__$1 = (function (){var statearr_29744 = state_29719;
(statearr_29744[(7)] = inst_29646);

return statearr_29744;
})();
var statearr_29745_29801 = state_29719__$1;
(statearr_29745_29801[(2)] = null);

(statearr_29745_29801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (29))){
var inst_29693 = (state_29719[(10)]);
var state_29719__$1 = state_29719;
var statearr_29746_29802 = state_29719__$1;
(statearr_29746_29802[(2)] = inst_29693);

(statearr_29746_29802[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (6))){
var state_29719__$1 = state_29719;
var statearr_29747_29803 = state_29719__$1;
(statearr_29747_29803[(2)] = false);

(statearr_29747_29803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (28))){
var inst_29689 = (state_29719[(2)]);
var inst_29690 = calc_state.call(null);
var inst_29646 = inst_29690;
var state_29719__$1 = (function (){var statearr_29748 = state_29719;
(statearr_29748[(7)] = inst_29646);

(statearr_29748[(15)] = inst_29689);

return statearr_29748;
})();
var statearr_29749_29804 = state_29719__$1;
(statearr_29749_29804[(2)] = null);

(statearr_29749_29804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (25))){
var inst_29715 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29750_29805 = state_29719__$1;
(statearr_29750_29805[(2)] = inst_29715);

(statearr_29750_29805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (34))){
var inst_29713 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29751_29806 = state_29719__$1;
(statearr_29751_29806[(2)] = inst_29713);

(statearr_29751_29806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (17))){
var state_29719__$1 = state_29719;
var statearr_29752_29807 = state_29719__$1;
(statearr_29752_29807[(2)] = false);

(statearr_29752_29807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (3))){
var state_29719__$1 = state_29719;
var statearr_29753_29808 = state_29719__$1;
(statearr_29753_29808[(2)] = false);

(statearr_29753_29808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (12))){
var inst_29717 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29719__$1,inst_29717);
} else {
if((state_val_29720 === (2))){
var inst_29621 = (state_29719[(8)]);
var inst_29626 = inst_29621.cljs$lang$protocol_mask$partition0$;
var inst_29627 = (inst_29626 & (64));
var inst_29628 = inst_29621.cljs$core$ISeq$;
var inst_29629 = (cljs.core.PROTOCOL_SENTINEL === inst_29628);
var inst_29630 = (inst_29627) || (inst_29629);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29630)){
var statearr_29754_29809 = state_29719__$1;
(statearr_29754_29809[(1)] = (5));

} else {
var statearr_29755_29810 = state_29719__$1;
(statearr_29755_29810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (23))){
var inst_29678 = (state_29719[(14)]);
var inst_29684 = (inst_29678 == null);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29684)){
var statearr_29756_29811 = state_29719__$1;
(statearr_29756_29811[(1)] = (26));

} else {
var statearr_29757_29812 = state_29719__$1;
(statearr_29757_29812[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (35))){
var inst_29704 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
if(cljs.core.truth_(inst_29704)){
var statearr_29758_29813 = state_29719__$1;
(statearr_29758_29813[(1)] = (36));

} else {
var statearr_29759_29814 = state_29719__$1;
(statearr_29759_29814[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (19))){
var inst_29646 = (state_29719[(7)]);
var inst_29666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29646);
var state_29719__$1 = state_29719;
var statearr_29760_29815 = state_29719__$1;
(statearr_29760_29815[(2)] = inst_29666);

(statearr_29760_29815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (11))){
var inst_29646 = (state_29719[(7)]);
var inst_29650 = (inst_29646 == null);
var inst_29651 = cljs.core.not.call(null,inst_29650);
var state_29719__$1 = state_29719;
if(inst_29651){
var statearr_29761_29816 = state_29719__$1;
(statearr_29761_29816[(1)] = (13));

} else {
var statearr_29762_29817 = state_29719__$1;
(statearr_29762_29817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (9))){
var inst_29621 = (state_29719[(8)]);
var state_29719__$1 = state_29719;
var statearr_29763_29818 = state_29719__$1;
(statearr_29763_29818[(2)] = inst_29621);

(statearr_29763_29818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (5))){
var state_29719__$1 = state_29719;
var statearr_29764_29819 = state_29719__$1;
(statearr_29764_29819[(2)] = true);

(statearr_29764_29819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (14))){
var state_29719__$1 = state_29719;
var statearr_29765_29820 = state_29719__$1;
(statearr_29765_29820[(2)] = false);

(statearr_29765_29820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (26))){
var inst_29679 = (state_29719[(9)]);
var inst_29686 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29679);
var state_29719__$1 = state_29719;
var statearr_29766_29821 = state_29719__$1;
(statearr_29766_29821[(2)] = inst_29686);

(statearr_29766_29821[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (16))){
var state_29719__$1 = state_29719;
var statearr_29767_29822 = state_29719__$1;
(statearr_29767_29822[(2)] = true);

(statearr_29767_29822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (38))){
var inst_29709 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29768_29823 = state_29719__$1;
(statearr_29768_29823[(2)] = inst_29709);

(statearr_29768_29823[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (30))){
var inst_29679 = (state_29719[(9)]);
var inst_29671 = (state_29719[(13)]);
var inst_29670 = (state_29719[(11)]);
var inst_29696 = cljs.core.empty_QMARK_.call(null,inst_29670);
var inst_29697 = inst_29671.call(null,inst_29679);
var inst_29698 = cljs.core.not.call(null,inst_29697);
var inst_29699 = (inst_29696) && (inst_29698);
var state_29719__$1 = state_29719;
var statearr_29769_29824 = state_29719__$1;
(statearr_29769_29824[(2)] = inst_29699);

(statearr_29769_29824[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (10))){
var inst_29621 = (state_29719[(8)]);
var inst_29642 = (state_29719[(2)]);
var inst_29643 = cljs.core.get.call(null,inst_29642,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29644 = cljs.core.get.call(null,inst_29642,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29645 = cljs.core.get.call(null,inst_29642,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29646 = inst_29621;
var state_29719__$1 = (function (){var statearr_29770 = state_29719;
(statearr_29770[(7)] = inst_29646);

(statearr_29770[(16)] = inst_29644);

(statearr_29770[(17)] = inst_29643);

(statearr_29770[(18)] = inst_29645);

return statearr_29770;
})();
var statearr_29771_29825 = state_29719__$1;
(statearr_29771_29825[(2)] = null);

(statearr_29771_29825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (18))){
var inst_29661 = (state_29719[(2)]);
var state_29719__$1 = state_29719;
var statearr_29772_29826 = state_29719__$1;
(statearr_29772_29826[(2)] = inst_29661);

(statearr_29772_29826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (37))){
var state_29719__$1 = state_29719;
var statearr_29773_29827 = state_29719__$1;
(statearr_29773_29827[(2)] = null);

(statearr_29773_29827[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29720 === (8))){
var inst_29621 = (state_29719[(8)]);
var inst_29639 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29621);
var state_29719__$1 = state_29719;
var statearr_29774_29828 = state_29719__$1;
(statearr_29774_29828[(2)] = inst_29639);

(statearr_29774_29828[(1)] = (10));


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
});})(c__28045__auto___29782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27933__auto__,c__28045__auto___29782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27934__auto__ = null;
var cljs$core$async$mix_$_state_machine__27934__auto____0 = (function (){
var statearr_29778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29778[(0)] = cljs$core$async$mix_$_state_machine__27934__auto__);

(statearr_29778[(1)] = (1));

return statearr_29778;
});
var cljs$core$async$mix_$_state_machine__27934__auto____1 = (function (state_29719){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_29719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e29779){if((e29779 instanceof Object)){
var ex__27937__auto__ = e29779;
var statearr_29780_29829 = state_29719;
(statearr_29780_29829[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29830 = state_29719;
state_29719 = G__29830;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27934__auto__ = function(state_29719){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27934__auto____1.call(this,state_29719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27934__auto____0;
cljs$core$async$mix_$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27934__auto____1;
return cljs$core$async$mix_$_state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___29782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28047__auto__ = (function (){var statearr_29781 = f__28046__auto__.call(null);
(statearr_29781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___29782);

return statearr_29781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___29782,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args29831 = [];
var len__22733__auto___29834 = arguments.length;
var i__22734__auto___29835 = (0);
while(true){
if((i__22734__auto___29835 < len__22733__auto___29834)){
args29831.push((arguments[i__22734__auto___29835]));

var G__29836 = (i__22734__auto___29835 + (1));
i__22734__auto___29835 = G__29836;
continue;
} else {
}
break;
}

var G__29833 = args29831.length;
switch (G__29833) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29831.length)].join('')));

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
var args29839 = [];
var len__22733__auto___29964 = arguments.length;
var i__22734__auto___29965 = (0);
while(true){
if((i__22734__auto___29965 < len__22733__auto___29964)){
args29839.push((arguments[i__22734__auto___29965]));

var G__29966 = (i__22734__auto___29965 + (1));
i__22734__auto___29965 = G__29966;
continue;
} else {
}
break;
}

var G__29841 = args29839.length;
switch (G__29841) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29839.length)].join('')));

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
return (function (p1__29838_SHARP_){
if(cljs.core.truth_(p1__29838_SHARP_.call(null,topic))){
return p1__29838_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29838_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21625__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29842 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29843){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29843 = meta29843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29844,meta29843__$1){
var self__ = this;
var _29844__$1 = this;
return (new cljs.core.async.t_cljs$core$async29842(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29843__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29844){
var self__ = this;
var _29844__$1 = this;
return self__.meta29843;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29842.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29842.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29843","meta29843",-221288165,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29842";

cljs.core.async.t_cljs$core$async29842.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async29842");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29842 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29842(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29843){
return (new cljs.core.async.t_cljs$core$async29842(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29843));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29842(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28045__auto___29968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___29968,mults,ensure_mult,p){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___29968,mults,ensure_mult,p){
return (function (state_29916){
var state_val_29917 = (state_29916[(1)]);
if((state_val_29917 === (7))){
var inst_29912 = (state_29916[(2)]);
var state_29916__$1 = state_29916;
var statearr_29918_29969 = state_29916__$1;
(statearr_29918_29969[(2)] = inst_29912);

(statearr_29918_29969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (20))){
var state_29916__$1 = state_29916;
var statearr_29919_29970 = state_29916__$1;
(statearr_29919_29970[(2)] = null);

(statearr_29919_29970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (1))){
var state_29916__$1 = state_29916;
var statearr_29920_29971 = state_29916__$1;
(statearr_29920_29971[(2)] = null);

(statearr_29920_29971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (24))){
var inst_29895 = (state_29916[(7)]);
var inst_29904 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29895);
var state_29916__$1 = state_29916;
var statearr_29921_29972 = state_29916__$1;
(statearr_29921_29972[(2)] = inst_29904);

(statearr_29921_29972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (4))){
var inst_29847 = (state_29916[(8)]);
var inst_29847__$1 = (state_29916[(2)]);
var inst_29848 = (inst_29847__$1 == null);
var state_29916__$1 = (function (){var statearr_29922 = state_29916;
(statearr_29922[(8)] = inst_29847__$1);

return statearr_29922;
})();
if(cljs.core.truth_(inst_29848)){
var statearr_29923_29973 = state_29916__$1;
(statearr_29923_29973[(1)] = (5));

} else {
var statearr_29924_29974 = state_29916__$1;
(statearr_29924_29974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (15))){
var inst_29889 = (state_29916[(2)]);
var state_29916__$1 = state_29916;
var statearr_29925_29975 = state_29916__$1;
(statearr_29925_29975[(2)] = inst_29889);

(statearr_29925_29975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (21))){
var inst_29909 = (state_29916[(2)]);
var state_29916__$1 = (function (){var statearr_29926 = state_29916;
(statearr_29926[(9)] = inst_29909);

return statearr_29926;
})();
var statearr_29927_29976 = state_29916__$1;
(statearr_29927_29976[(2)] = null);

(statearr_29927_29976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (13))){
var inst_29871 = (state_29916[(10)]);
var inst_29873 = cljs.core.chunked_seq_QMARK_.call(null,inst_29871);
var state_29916__$1 = state_29916;
if(inst_29873){
var statearr_29928_29977 = state_29916__$1;
(statearr_29928_29977[(1)] = (16));

} else {
var statearr_29929_29978 = state_29916__$1;
(statearr_29929_29978[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (22))){
var inst_29901 = (state_29916[(2)]);
var state_29916__$1 = state_29916;
if(cljs.core.truth_(inst_29901)){
var statearr_29930_29979 = state_29916__$1;
(statearr_29930_29979[(1)] = (23));

} else {
var statearr_29931_29980 = state_29916__$1;
(statearr_29931_29980[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (6))){
var inst_29897 = (state_29916[(11)]);
var inst_29847 = (state_29916[(8)]);
var inst_29895 = (state_29916[(7)]);
var inst_29895__$1 = topic_fn.call(null,inst_29847);
var inst_29896 = cljs.core.deref.call(null,mults);
var inst_29897__$1 = cljs.core.get.call(null,inst_29896,inst_29895__$1);
var state_29916__$1 = (function (){var statearr_29932 = state_29916;
(statearr_29932[(11)] = inst_29897__$1);

(statearr_29932[(7)] = inst_29895__$1);

return statearr_29932;
})();
if(cljs.core.truth_(inst_29897__$1)){
var statearr_29933_29981 = state_29916__$1;
(statearr_29933_29981[(1)] = (19));

} else {
var statearr_29934_29982 = state_29916__$1;
(statearr_29934_29982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (25))){
var inst_29906 = (state_29916[(2)]);
var state_29916__$1 = state_29916;
var statearr_29935_29983 = state_29916__$1;
(statearr_29935_29983[(2)] = inst_29906);

(statearr_29935_29983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (17))){
var inst_29871 = (state_29916[(10)]);
var inst_29880 = cljs.core.first.call(null,inst_29871);
var inst_29881 = cljs.core.async.muxch_STAR_.call(null,inst_29880);
var inst_29882 = cljs.core.async.close_BANG_.call(null,inst_29881);
var inst_29883 = cljs.core.next.call(null,inst_29871);
var inst_29857 = inst_29883;
var inst_29858 = null;
var inst_29859 = (0);
var inst_29860 = (0);
var state_29916__$1 = (function (){var statearr_29936 = state_29916;
(statearr_29936[(12)] = inst_29859);

(statearr_29936[(13)] = inst_29858);

(statearr_29936[(14)] = inst_29860);

(statearr_29936[(15)] = inst_29882);

(statearr_29936[(16)] = inst_29857);

return statearr_29936;
})();
var statearr_29937_29984 = state_29916__$1;
(statearr_29937_29984[(2)] = null);

(statearr_29937_29984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (3))){
var inst_29914 = (state_29916[(2)]);
var state_29916__$1 = state_29916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29916__$1,inst_29914);
} else {
if((state_val_29917 === (12))){
var inst_29891 = (state_29916[(2)]);
var state_29916__$1 = state_29916;
var statearr_29938_29985 = state_29916__$1;
(statearr_29938_29985[(2)] = inst_29891);

(statearr_29938_29985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (2))){
var state_29916__$1 = state_29916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29916__$1,(4),ch);
} else {
if((state_val_29917 === (23))){
var state_29916__$1 = state_29916;
var statearr_29939_29986 = state_29916__$1;
(statearr_29939_29986[(2)] = null);

(statearr_29939_29986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (19))){
var inst_29897 = (state_29916[(11)]);
var inst_29847 = (state_29916[(8)]);
var inst_29899 = cljs.core.async.muxch_STAR_.call(null,inst_29897);
var state_29916__$1 = state_29916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29916__$1,(22),inst_29899,inst_29847);
} else {
if((state_val_29917 === (11))){
var inst_29871 = (state_29916[(10)]);
var inst_29857 = (state_29916[(16)]);
var inst_29871__$1 = cljs.core.seq.call(null,inst_29857);
var state_29916__$1 = (function (){var statearr_29940 = state_29916;
(statearr_29940[(10)] = inst_29871__$1);

return statearr_29940;
})();
if(inst_29871__$1){
var statearr_29941_29987 = state_29916__$1;
(statearr_29941_29987[(1)] = (13));

} else {
var statearr_29942_29988 = state_29916__$1;
(statearr_29942_29988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (9))){
var inst_29893 = (state_29916[(2)]);
var state_29916__$1 = state_29916;
var statearr_29943_29989 = state_29916__$1;
(statearr_29943_29989[(2)] = inst_29893);

(statearr_29943_29989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (5))){
var inst_29854 = cljs.core.deref.call(null,mults);
var inst_29855 = cljs.core.vals.call(null,inst_29854);
var inst_29856 = cljs.core.seq.call(null,inst_29855);
var inst_29857 = inst_29856;
var inst_29858 = null;
var inst_29859 = (0);
var inst_29860 = (0);
var state_29916__$1 = (function (){var statearr_29944 = state_29916;
(statearr_29944[(12)] = inst_29859);

(statearr_29944[(13)] = inst_29858);

(statearr_29944[(14)] = inst_29860);

(statearr_29944[(16)] = inst_29857);

return statearr_29944;
})();
var statearr_29945_29990 = state_29916__$1;
(statearr_29945_29990[(2)] = null);

(statearr_29945_29990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (14))){
var state_29916__$1 = state_29916;
var statearr_29949_29991 = state_29916__$1;
(statearr_29949_29991[(2)] = null);

(statearr_29949_29991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (16))){
var inst_29871 = (state_29916[(10)]);
var inst_29875 = cljs.core.chunk_first.call(null,inst_29871);
var inst_29876 = cljs.core.chunk_rest.call(null,inst_29871);
var inst_29877 = cljs.core.count.call(null,inst_29875);
var inst_29857 = inst_29876;
var inst_29858 = inst_29875;
var inst_29859 = inst_29877;
var inst_29860 = (0);
var state_29916__$1 = (function (){var statearr_29950 = state_29916;
(statearr_29950[(12)] = inst_29859);

(statearr_29950[(13)] = inst_29858);

(statearr_29950[(14)] = inst_29860);

(statearr_29950[(16)] = inst_29857);

return statearr_29950;
})();
var statearr_29951_29992 = state_29916__$1;
(statearr_29951_29992[(2)] = null);

(statearr_29951_29992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (10))){
var inst_29859 = (state_29916[(12)]);
var inst_29858 = (state_29916[(13)]);
var inst_29860 = (state_29916[(14)]);
var inst_29857 = (state_29916[(16)]);
var inst_29865 = cljs.core._nth.call(null,inst_29858,inst_29860);
var inst_29866 = cljs.core.async.muxch_STAR_.call(null,inst_29865);
var inst_29867 = cljs.core.async.close_BANG_.call(null,inst_29866);
var inst_29868 = (inst_29860 + (1));
var tmp29946 = inst_29859;
var tmp29947 = inst_29858;
var tmp29948 = inst_29857;
var inst_29857__$1 = tmp29948;
var inst_29858__$1 = tmp29947;
var inst_29859__$1 = tmp29946;
var inst_29860__$1 = inst_29868;
var state_29916__$1 = (function (){var statearr_29952 = state_29916;
(statearr_29952[(12)] = inst_29859__$1);

(statearr_29952[(13)] = inst_29858__$1);

(statearr_29952[(17)] = inst_29867);

(statearr_29952[(14)] = inst_29860__$1);

(statearr_29952[(16)] = inst_29857__$1);

return statearr_29952;
})();
var statearr_29953_29993 = state_29916__$1;
(statearr_29953_29993[(2)] = null);

(statearr_29953_29993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (18))){
var inst_29886 = (state_29916[(2)]);
var state_29916__$1 = state_29916;
var statearr_29954_29994 = state_29916__$1;
(statearr_29954_29994[(2)] = inst_29886);

(statearr_29954_29994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29917 === (8))){
var inst_29859 = (state_29916[(12)]);
var inst_29860 = (state_29916[(14)]);
var inst_29862 = (inst_29860 < inst_29859);
var inst_29863 = inst_29862;
var state_29916__$1 = state_29916;
if(cljs.core.truth_(inst_29863)){
var statearr_29955_29995 = state_29916__$1;
(statearr_29955_29995[(1)] = (10));

} else {
var statearr_29956_29996 = state_29916__$1;
(statearr_29956_29996[(1)] = (11));

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
});})(c__28045__auto___29968,mults,ensure_mult,p))
;
return ((function (switch__27933__auto__,c__28045__auto___29968,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_29960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29960[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_29960[(1)] = (1));

return statearr_29960;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_29916){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_29916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e29961){if((e29961 instanceof Object)){
var ex__27937__auto__ = e29961;
var statearr_29962_29997 = state_29916;
(statearr_29962_29997[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29998 = state_29916;
state_29916 = G__29998;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_29916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_29916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___29968,mults,ensure_mult,p))
})();
var state__28047__auto__ = (function (){var statearr_29963 = f__28046__auto__.call(null);
(statearr_29963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___29968);

return statearr_29963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___29968,mults,ensure_mult,p))
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
var args29999 = [];
var len__22733__auto___30002 = arguments.length;
var i__22734__auto___30003 = (0);
while(true){
if((i__22734__auto___30003 < len__22733__auto___30002)){
args29999.push((arguments[i__22734__auto___30003]));

var G__30004 = (i__22734__auto___30003 + (1));
i__22734__auto___30003 = G__30004;
continue;
} else {
}
break;
}

var G__30001 = args29999.length;
switch (G__30001) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29999.length)].join('')));

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
var args30006 = [];
var len__22733__auto___30009 = arguments.length;
var i__22734__auto___30010 = (0);
while(true){
if((i__22734__auto___30010 < len__22733__auto___30009)){
args30006.push((arguments[i__22734__auto___30010]));

var G__30011 = (i__22734__auto___30010 + (1));
i__22734__auto___30010 = G__30011;
continue;
} else {
}
break;
}

var G__30008 = args30006.length;
switch (G__30008) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30006.length)].join('')));

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
var args30013 = [];
var len__22733__auto___30084 = arguments.length;
var i__22734__auto___30085 = (0);
while(true){
if((i__22734__auto___30085 < len__22733__auto___30084)){
args30013.push((arguments[i__22734__auto___30085]));

var G__30086 = (i__22734__auto___30085 + (1));
i__22734__auto___30085 = G__30086;
continue;
} else {
}
break;
}

var G__30015 = args30013.length;
switch (G__30015) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30013.length)].join('')));

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
var c__28045__auto___30088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___30088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___30088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30054){
var state_val_30055 = (state_30054[(1)]);
if((state_val_30055 === (7))){
var state_30054__$1 = state_30054;
var statearr_30056_30089 = state_30054__$1;
(statearr_30056_30089[(2)] = null);

(statearr_30056_30089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (1))){
var state_30054__$1 = state_30054;
var statearr_30057_30090 = state_30054__$1;
(statearr_30057_30090[(2)] = null);

(statearr_30057_30090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (4))){
var inst_30018 = (state_30054[(7)]);
var inst_30020 = (inst_30018 < cnt);
var state_30054__$1 = state_30054;
if(cljs.core.truth_(inst_30020)){
var statearr_30058_30091 = state_30054__$1;
(statearr_30058_30091[(1)] = (6));

} else {
var statearr_30059_30092 = state_30054__$1;
(statearr_30059_30092[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (15))){
var inst_30050 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
var statearr_30060_30093 = state_30054__$1;
(statearr_30060_30093[(2)] = inst_30050);

(statearr_30060_30093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (13))){
var inst_30043 = cljs.core.async.close_BANG_.call(null,out);
var state_30054__$1 = state_30054;
var statearr_30061_30094 = state_30054__$1;
(statearr_30061_30094[(2)] = inst_30043);

(statearr_30061_30094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (6))){
var state_30054__$1 = state_30054;
var statearr_30062_30095 = state_30054__$1;
(statearr_30062_30095[(2)] = null);

(statearr_30062_30095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (3))){
var inst_30052 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30054__$1,inst_30052);
} else {
if((state_val_30055 === (12))){
var inst_30040 = (state_30054[(8)]);
var inst_30040__$1 = (state_30054[(2)]);
var inst_30041 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30040__$1);
var state_30054__$1 = (function (){var statearr_30063 = state_30054;
(statearr_30063[(8)] = inst_30040__$1);

return statearr_30063;
})();
if(cljs.core.truth_(inst_30041)){
var statearr_30064_30096 = state_30054__$1;
(statearr_30064_30096[(1)] = (13));

} else {
var statearr_30065_30097 = state_30054__$1;
(statearr_30065_30097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (2))){
var inst_30017 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30018 = (0);
var state_30054__$1 = (function (){var statearr_30066 = state_30054;
(statearr_30066[(7)] = inst_30018);

(statearr_30066[(9)] = inst_30017);

return statearr_30066;
})();
var statearr_30067_30098 = state_30054__$1;
(statearr_30067_30098[(2)] = null);

(statearr_30067_30098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (11))){
var inst_30018 = (state_30054[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30054,(10),Object,null,(9));
var inst_30027 = chs__$1.call(null,inst_30018);
var inst_30028 = done.call(null,inst_30018);
var inst_30029 = cljs.core.async.take_BANG_.call(null,inst_30027,inst_30028);
var state_30054__$1 = state_30054;
var statearr_30068_30099 = state_30054__$1;
(statearr_30068_30099[(2)] = inst_30029);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (9))){
var inst_30018 = (state_30054[(7)]);
var inst_30031 = (state_30054[(2)]);
var inst_30032 = (inst_30018 + (1));
var inst_30018__$1 = inst_30032;
var state_30054__$1 = (function (){var statearr_30069 = state_30054;
(statearr_30069[(7)] = inst_30018__$1);

(statearr_30069[(10)] = inst_30031);

return statearr_30069;
})();
var statearr_30070_30100 = state_30054__$1;
(statearr_30070_30100[(2)] = null);

(statearr_30070_30100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (5))){
var inst_30038 = (state_30054[(2)]);
var state_30054__$1 = (function (){var statearr_30071 = state_30054;
(statearr_30071[(11)] = inst_30038);

return statearr_30071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30054__$1,(12),dchan);
} else {
if((state_val_30055 === (14))){
var inst_30040 = (state_30054[(8)]);
var inst_30045 = cljs.core.apply.call(null,f,inst_30040);
var state_30054__$1 = state_30054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30054__$1,(16),out,inst_30045);
} else {
if((state_val_30055 === (16))){
var inst_30047 = (state_30054[(2)]);
var state_30054__$1 = (function (){var statearr_30072 = state_30054;
(statearr_30072[(12)] = inst_30047);

return statearr_30072;
})();
var statearr_30073_30101 = state_30054__$1;
(statearr_30073_30101[(2)] = null);

(statearr_30073_30101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (10))){
var inst_30022 = (state_30054[(2)]);
var inst_30023 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30054__$1 = (function (){var statearr_30074 = state_30054;
(statearr_30074[(13)] = inst_30022);

return statearr_30074;
})();
var statearr_30075_30102 = state_30054__$1;
(statearr_30075_30102[(2)] = inst_30023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30055 === (8))){
var inst_30036 = (state_30054[(2)]);
var state_30054__$1 = state_30054;
var statearr_30076_30103 = state_30054__$1;
(statearr_30076_30103[(2)] = inst_30036);

(statearr_30076_30103[(1)] = (5));


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
});})(c__28045__auto___30088,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27933__auto__,c__28045__auto___30088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_30080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30080[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_30080[(1)] = (1));

return statearr_30080;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_30054){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_30054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e30081){if((e30081 instanceof Object)){
var ex__27937__auto__ = e30081;
var statearr_30082_30104 = state_30054;
(statearr_30082_30104[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30105 = state_30054;
state_30054 = G__30105;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_30054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_30054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___30088,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28047__auto__ = (function (){var statearr_30083 = f__28046__auto__.call(null);
(statearr_30083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___30088);

return statearr_30083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___30088,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30107 = [];
var len__22733__auto___30165 = arguments.length;
var i__22734__auto___30166 = (0);
while(true){
if((i__22734__auto___30166 < len__22733__auto___30165)){
args30107.push((arguments[i__22734__auto___30166]));

var G__30167 = (i__22734__auto___30166 + (1));
i__22734__auto___30166 = G__30167;
continue;
} else {
}
break;
}

var G__30109 = args30107.length;
switch (G__30109) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30107.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28045__auto___30169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___30169,out){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___30169,out){
return (function (state_30141){
var state_val_30142 = (state_30141[(1)]);
if((state_val_30142 === (7))){
var inst_30121 = (state_30141[(7)]);
var inst_30120 = (state_30141[(8)]);
var inst_30120__$1 = (state_30141[(2)]);
var inst_30121__$1 = cljs.core.nth.call(null,inst_30120__$1,(0),null);
var inst_30122 = cljs.core.nth.call(null,inst_30120__$1,(1),null);
var inst_30123 = (inst_30121__$1 == null);
var state_30141__$1 = (function (){var statearr_30143 = state_30141;
(statearr_30143[(7)] = inst_30121__$1);

(statearr_30143[(9)] = inst_30122);

(statearr_30143[(8)] = inst_30120__$1);

return statearr_30143;
})();
if(cljs.core.truth_(inst_30123)){
var statearr_30144_30170 = state_30141__$1;
(statearr_30144_30170[(1)] = (8));

} else {
var statearr_30145_30171 = state_30141__$1;
(statearr_30145_30171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30142 === (1))){
var inst_30110 = cljs.core.vec.call(null,chs);
var inst_30111 = inst_30110;
var state_30141__$1 = (function (){var statearr_30146 = state_30141;
(statearr_30146[(10)] = inst_30111);

return statearr_30146;
})();
var statearr_30147_30172 = state_30141__$1;
(statearr_30147_30172[(2)] = null);

(statearr_30147_30172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30142 === (4))){
var inst_30111 = (state_30141[(10)]);
var state_30141__$1 = state_30141;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30141__$1,(7),inst_30111);
} else {
if((state_val_30142 === (6))){
var inst_30137 = (state_30141[(2)]);
var state_30141__$1 = state_30141;
var statearr_30148_30173 = state_30141__$1;
(statearr_30148_30173[(2)] = inst_30137);

(statearr_30148_30173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30142 === (3))){
var inst_30139 = (state_30141[(2)]);
var state_30141__$1 = state_30141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30141__$1,inst_30139);
} else {
if((state_val_30142 === (2))){
var inst_30111 = (state_30141[(10)]);
var inst_30113 = cljs.core.count.call(null,inst_30111);
var inst_30114 = (inst_30113 > (0));
var state_30141__$1 = state_30141;
if(cljs.core.truth_(inst_30114)){
var statearr_30150_30174 = state_30141__$1;
(statearr_30150_30174[(1)] = (4));

} else {
var statearr_30151_30175 = state_30141__$1;
(statearr_30151_30175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30142 === (11))){
var inst_30111 = (state_30141[(10)]);
var inst_30130 = (state_30141[(2)]);
var tmp30149 = inst_30111;
var inst_30111__$1 = tmp30149;
var state_30141__$1 = (function (){var statearr_30152 = state_30141;
(statearr_30152[(11)] = inst_30130);

(statearr_30152[(10)] = inst_30111__$1);

return statearr_30152;
})();
var statearr_30153_30176 = state_30141__$1;
(statearr_30153_30176[(2)] = null);

(statearr_30153_30176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30142 === (9))){
var inst_30121 = (state_30141[(7)]);
var state_30141__$1 = state_30141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30141__$1,(11),out,inst_30121);
} else {
if((state_val_30142 === (5))){
var inst_30135 = cljs.core.async.close_BANG_.call(null,out);
var state_30141__$1 = state_30141;
var statearr_30154_30177 = state_30141__$1;
(statearr_30154_30177[(2)] = inst_30135);

(statearr_30154_30177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30142 === (10))){
var inst_30133 = (state_30141[(2)]);
var state_30141__$1 = state_30141;
var statearr_30155_30178 = state_30141__$1;
(statearr_30155_30178[(2)] = inst_30133);

(statearr_30155_30178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30142 === (8))){
var inst_30121 = (state_30141[(7)]);
var inst_30122 = (state_30141[(9)]);
var inst_30111 = (state_30141[(10)]);
var inst_30120 = (state_30141[(8)]);
var inst_30125 = (function (){var cs = inst_30111;
var vec__30116 = inst_30120;
var v = inst_30121;
var c = inst_30122;
return ((function (cs,vec__30116,v,c,inst_30121,inst_30122,inst_30111,inst_30120,state_val_30142,c__28045__auto___30169,out){
return (function (p1__30106_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30106_SHARP_);
});
;})(cs,vec__30116,v,c,inst_30121,inst_30122,inst_30111,inst_30120,state_val_30142,c__28045__auto___30169,out))
})();
var inst_30126 = cljs.core.filterv.call(null,inst_30125,inst_30111);
var inst_30111__$1 = inst_30126;
var state_30141__$1 = (function (){var statearr_30156 = state_30141;
(statearr_30156[(10)] = inst_30111__$1);

return statearr_30156;
})();
var statearr_30157_30179 = state_30141__$1;
(statearr_30157_30179[(2)] = null);

(statearr_30157_30179[(1)] = (2));


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
});})(c__28045__auto___30169,out))
;
return ((function (switch__27933__auto__,c__28045__auto___30169,out){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_30161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30161[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_30161[(1)] = (1));

return statearr_30161;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_30141){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_30141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e30162){if((e30162 instanceof Object)){
var ex__27937__auto__ = e30162;
var statearr_30163_30180 = state_30141;
(statearr_30163_30180[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30181 = state_30141;
state_30141 = G__30181;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_30141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_30141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___30169,out))
})();
var state__28047__auto__ = (function (){var statearr_30164 = f__28046__auto__.call(null);
(statearr_30164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___30169);

return statearr_30164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___30169,out))
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
var args30182 = [];
var len__22733__auto___30231 = arguments.length;
var i__22734__auto___30232 = (0);
while(true){
if((i__22734__auto___30232 < len__22733__auto___30231)){
args30182.push((arguments[i__22734__auto___30232]));

var G__30233 = (i__22734__auto___30232 + (1));
i__22734__auto___30232 = G__30233;
continue;
} else {
}
break;
}

var G__30184 = args30182.length;
switch (G__30184) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30182.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28045__auto___30235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___30235,out){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___30235,out){
return (function (state_30208){
var state_val_30209 = (state_30208[(1)]);
if((state_val_30209 === (7))){
var inst_30190 = (state_30208[(7)]);
var inst_30190__$1 = (state_30208[(2)]);
var inst_30191 = (inst_30190__$1 == null);
var inst_30192 = cljs.core.not.call(null,inst_30191);
var state_30208__$1 = (function (){var statearr_30210 = state_30208;
(statearr_30210[(7)] = inst_30190__$1);

return statearr_30210;
})();
if(inst_30192){
var statearr_30211_30236 = state_30208__$1;
(statearr_30211_30236[(1)] = (8));

} else {
var statearr_30212_30237 = state_30208__$1;
(statearr_30212_30237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (1))){
var inst_30185 = (0);
var state_30208__$1 = (function (){var statearr_30213 = state_30208;
(statearr_30213[(8)] = inst_30185);

return statearr_30213;
})();
var statearr_30214_30238 = state_30208__$1;
(statearr_30214_30238[(2)] = null);

(statearr_30214_30238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (4))){
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30208__$1,(7),ch);
} else {
if((state_val_30209 === (6))){
var inst_30203 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30215_30239 = state_30208__$1;
(statearr_30215_30239[(2)] = inst_30203);

(statearr_30215_30239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (3))){
var inst_30205 = (state_30208[(2)]);
var inst_30206 = cljs.core.async.close_BANG_.call(null,out);
var state_30208__$1 = (function (){var statearr_30216 = state_30208;
(statearr_30216[(9)] = inst_30205);

return statearr_30216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30208__$1,inst_30206);
} else {
if((state_val_30209 === (2))){
var inst_30185 = (state_30208[(8)]);
var inst_30187 = (inst_30185 < n);
var state_30208__$1 = state_30208;
if(cljs.core.truth_(inst_30187)){
var statearr_30217_30240 = state_30208__$1;
(statearr_30217_30240[(1)] = (4));

} else {
var statearr_30218_30241 = state_30208__$1;
(statearr_30218_30241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (11))){
var inst_30185 = (state_30208[(8)]);
var inst_30195 = (state_30208[(2)]);
var inst_30196 = (inst_30185 + (1));
var inst_30185__$1 = inst_30196;
var state_30208__$1 = (function (){var statearr_30219 = state_30208;
(statearr_30219[(10)] = inst_30195);

(statearr_30219[(8)] = inst_30185__$1);

return statearr_30219;
})();
var statearr_30220_30242 = state_30208__$1;
(statearr_30220_30242[(2)] = null);

(statearr_30220_30242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (9))){
var state_30208__$1 = state_30208;
var statearr_30221_30243 = state_30208__$1;
(statearr_30221_30243[(2)] = null);

(statearr_30221_30243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (5))){
var state_30208__$1 = state_30208;
var statearr_30222_30244 = state_30208__$1;
(statearr_30222_30244[(2)] = null);

(statearr_30222_30244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (10))){
var inst_30200 = (state_30208[(2)]);
var state_30208__$1 = state_30208;
var statearr_30223_30245 = state_30208__$1;
(statearr_30223_30245[(2)] = inst_30200);

(statearr_30223_30245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30209 === (8))){
var inst_30190 = (state_30208[(7)]);
var state_30208__$1 = state_30208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30208__$1,(11),out,inst_30190);
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
});})(c__28045__auto___30235,out))
;
return ((function (switch__27933__auto__,c__28045__auto___30235,out){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_30227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30227[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_30227[(1)] = (1));

return statearr_30227;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_30208){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_30208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e30228){if((e30228 instanceof Object)){
var ex__27937__auto__ = e30228;
var statearr_30229_30246 = state_30208;
(statearr_30229_30246[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30247 = state_30208;
state_30208 = G__30247;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_30208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_30208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___30235,out))
})();
var state__28047__auto__ = (function (){var statearr_30230 = f__28046__auto__.call(null);
(statearr_30230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___30235);

return statearr_30230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___30235,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30255 = (function (f,ch,meta30256){
this.f = f;
this.ch = ch;
this.meta30256 = meta30256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30257,meta30256__$1){
var self__ = this;
var _30257__$1 = this;
return (new cljs.core.async.t_cljs$core$async30255(self__.f,self__.ch,meta30256__$1));
});

cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30257){
var self__ = this;
var _30257__$1 = this;
return self__.meta30256;
});

cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30258 = (function (f,ch,meta30256,_,fn1,meta30259){
this.f = f;
this.ch = ch;
this.meta30256 = meta30256;
this._ = _;
this.fn1 = fn1;
this.meta30259 = meta30259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30260,meta30259__$1){
var self__ = this;
var _30260__$1 = this;
return (new cljs.core.async.t_cljs$core$async30258(self__.f,self__.ch,self__.meta30256,self__._,self__.fn1,meta30259__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30260){
var self__ = this;
var _30260__$1 = this;
return self__.meta30259;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30248_SHARP_){
return f1.call(null,(((p1__30248_SHARP_ == null))?null:self__.f.call(null,p1__30248_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30258.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30256","meta30256",1503560919,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30255","cljs.core.async/t_cljs$core$async30255",-558264765,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30259","meta30259",1010176188,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30258";

cljs.core.async.t_cljs$core$async30258.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async30258");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30258 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30258(f__$1,ch__$1,meta30256__$1,___$2,fn1__$1,meta30259){
return (new cljs.core.async.t_cljs$core$async30258(f__$1,ch__$1,meta30256__$1,___$2,fn1__$1,meta30259));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30258(self__.f,self__.ch,self__.meta30256,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30256","meta30256",1503560919,null)], null);
});

cljs.core.async.t_cljs$core$async30255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30255";

cljs.core.async.t_cljs$core$async30255.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async30255");
});

cljs.core.async.__GT_t_cljs$core$async30255 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30255(f__$1,ch__$1,meta30256){
return (new cljs.core.async.t_cljs$core$async30255(f__$1,ch__$1,meta30256));
});

}

return (new cljs.core.async.t_cljs$core$async30255(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30264 = (function (f,ch,meta30265){
this.f = f;
this.ch = ch;
this.meta30265 = meta30265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30266,meta30265__$1){
var self__ = this;
var _30266__$1 = this;
return (new cljs.core.async.t_cljs$core$async30264(self__.f,self__.ch,meta30265__$1));
});

cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30266){
var self__ = this;
var _30266__$1 = this;
return self__.meta30265;
});

cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30265","meta30265",854146810,null)], null);
});

cljs.core.async.t_cljs$core$async30264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30264";

cljs.core.async.t_cljs$core$async30264.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async30264");
});

cljs.core.async.__GT_t_cljs$core$async30264 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30264(f__$1,ch__$1,meta30265){
return (new cljs.core.async.t_cljs$core$async30264(f__$1,ch__$1,meta30265));
});

}

return (new cljs.core.async.t_cljs$core$async30264(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30270 = (function (p,ch,meta30271){
this.p = p;
this.ch = ch;
this.meta30271 = meta30271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30272,meta30271__$1){
var self__ = this;
var _30272__$1 = this;
return (new cljs.core.async.t_cljs$core$async30270(self__.p,self__.ch,meta30271__$1));
});

cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30272){
var self__ = this;
var _30272__$1 = this;
return self__.meta30271;
});

cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30271","meta30271",423657236,null)], null);
});

cljs.core.async.t_cljs$core$async30270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30270";

cljs.core.async.t_cljs$core$async30270.cljs$lang$ctorPrWriter = (function (this__22231__auto__,writer__22232__auto__,opt__22233__auto__){
return cljs.core._write.call(null,writer__22232__auto__,"cljs.core.async/t_cljs$core$async30270");
});

cljs.core.async.__GT_t_cljs$core$async30270 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30270(p__$1,ch__$1,meta30271){
return (new cljs.core.async.t_cljs$core$async30270(p__$1,ch__$1,meta30271));
});

}

return (new cljs.core.async.t_cljs$core$async30270(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30273 = [];
var len__22733__auto___30317 = arguments.length;
var i__22734__auto___30318 = (0);
while(true){
if((i__22734__auto___30318 < len__22733__auto___30317)){
args30273.push((arguments[i__22734__auto___30318]));

var G__30319 = (i__22734__auto___30318 + (1));
i__22734__auto___30318 = G__30319;
continue;
} else {
}
break;
}

var G__30275 = args30273.length;
switch (G__30275) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30273.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28045__auto___30321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___30321,out){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___30321,out){
return (function (state_30296){
var state_val_30297 = (state_30296[(1)]);
if((state_val_30297 === (7))){
var inst_30292 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30298_30322 = state_30296__$1;
(statearr_30298_30322[(2)] = inst_30292);

(statearr_30298_30322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (1))){
var state_30296__$1 = state_30296;
var statearr_30299_30323 = state_30296__$1;
(statearr_30299_30323[(2)] = null);

(statearr_30299_30323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (4))){
var inst_30278 = (state_30296[(7)]);
var inst_30278__$1 = (state_30296[(2)]);
var inst_30279 = (inst_30278__$1 == null);
var state_30296__$1 = (function (){var statearr_30300 = state_30296;
(statearr_30300[(7)] = inst_30278__$1);

return statearr_30300;
})();
if(cljs.core.truth_(inst_30279)){
var statearr_30301_30324 = state_30296__$1;
(statearr_30301_30324[(1)] = (5));

} else {
var statearr_30302_30325 = state_30296__$1;
(statearr_30302_30325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (6))){
var inst_30278 = (state_30296[(7)]);
var inst_30283 = p.call(null,inst_30278);
var state_30296__$1 = state_30296;
if(cljs.core.truth_(inst_30283)){
var statearr_30303_30326 = state_30296__$1;
(statearr_30303_30326[(1)] = (8));

} else {
var statearr_30304_30327 = state_30296__$1;
(statearr_30304_30327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (3))){
var inst_30294 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30296__$1,inst_30294);
} else {
if((state_val_30297 === (2))){
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30296__$1,(4),ch);
} else {
if((state_val_30297 === (11))){
var inst_30286 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30305_30328 = state_30296__$1;
(statearr_30305_30328[(2)] = inst_30286);

(statearr_30305_30328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (9))){
var state_30296__$1 = state_30296;
var statearr_30306_30329 = state_30296__$1;
(statearr_30306_30329[(2)] = null);

(statearr_30306_30329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (5))){
var inst_30281 = cljs.core.async.close_BANG_.call(null,out);
var state_30296__$1 = state_30296;
var statearr_30307_30330 = state_30296__$1;
(statearr_30307_30330[(2)] = inst_30281);

(statearr_30307_30330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (10))){
var inst_30289 = (state_30296[(2)]);
var state_30296__$1 = (function (){var statearr_30308 = state_30296;
(statearr_30308[(8)] = inst_30289);

return statearr_30308;
})();
var statearr_30309_30331 = state_30296__$1;
(statearr_30309_30331[(2)] = null);

(statearr_30309_30331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (8))){
var inst_30278 = (state_30296[(7)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30296__$1,(11),out,inst_30278);
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
});})(c__28045__auto___30321,out))
;
return ((function (switch__27933__auto__,c__28045__auto___30321,out){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_30313 = [null,null,null,null,null,null,null,null,null];
(statearr_30313[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_30313[(1)] = (1));

return statearr_30313;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_30296){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_30296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e30314){if((e30314 instanceof Object)){
var ex__27937__auto__ = e30314;
var statearr_30315_30332 = state_30296;
(statearr_30315_30332[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30333 = state_30296;
state_30296 = G__30333;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_30296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_30296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___30321,out))
})();
var state__28047__auto__ = (function (){var statearr_30316 = f__28046__auto__.call(null);
(statearr_30316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___30321);

return statearr_30316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___30321,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30334 = [];
var len__22733__auto___30337 = arguments.length;
var i__22734__auto___30338 = (0);
while(true){
if((i__22734__auto___30338 < len__22733__auto___30337)){
args30334.push((arguments[i__22734__auto___30338]));

var G__30339 = (i__22734__auto___30338 + (1));
i__22734__auto___30338 = G__30339;
continue;
} else {
}
break;
}

var G__30336 = args30334.length;
switch (G__30336) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30334.length)].join('')));

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
var c__28045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto__){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto__){
return (function (state_30506){
var state_val_30507 = (state_30506[(1)]);
if((state_val_30507 === (7))){
var inst_30502 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
var statearr_30508_30549 = state_30506__$1;
(statearr_30508_30549[(2)] = inst_30502);

(statearr_30508_30549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (20))){
var inst_30472 = (state_30506[(7)]);
var inst_30483 = (state_30506[(2)]);
var inst_30484 = cljs.core.next.call(null,inst_30472);
var inst_30458 = inst_30484;
var inst_30459 = null;
var inst_30460 = (0);
var inst_30461 = (0);
var state_30506__$1 = (function (){var statearr_30509 = state_30506;
(statearr_30509[(8)] = inst_30460);

(statearr_30509[(9)] = inst_30458);

(statearr_30509[(10)] = inst_30461);

(statearr_30509[(11)] = inst_30483);

(statearr_30509[(12)] = inst_30459);

return statearr_30509;
})();
var statearr_30510_30550 = state_30506__$1;
(statearr_30510_30550[(2)] = null);

(statearr_30510_30550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (1))){
var state_30506__$1 = state_30506;
var statearr_30511_30551 = state_30506__$1;
(statearr_30511_30551[(2)] = null);

(statearr_30511_30551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (4))){
var inst_30447 = (state_30506[(13)]);
var inst_30447__$1 = (state_30506[(2)]);
var inst_30448 = (inst_30447__$1 == null);
var state_30506__$1 = (function (){var statearr_30512 = state_30506;
(statearr_30512[(13)] = inst_30447__$1);

return statearr_30512;
})();
if(cljs.core.truth_(inst_30448)){
var statearr_30513_30552 = state_30506__$1;
(statearr_30513_30552[(1)] = (5));

} else {
var statearr_30514_30553 = state_30506__$1;
(statearr_30514_30553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (15))){
var state_30506__$1 = state_30506;
var statearr_30518_30554 = state_30506__$1;
(statearr_30518_30554[(2)] = null);

(statearr_30518_30554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (21))){
var state_30506__$1 = state_30506;
var statearr_30519_30555 = state_30506__$1;
(statearr_30519_30555[(2)] = null);

(statearr_30519_30555[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (13))){
var inst_30460 = (state_30506[(8)]);
var inst_30458 = (state_30506[(9)]);
var inst_30461 = (state_30506[(10)]);
var inst_30459 = (state_30506[(12)]);
var inst_30468 = (state_30506[(2)]);
var inst_30469 = (inst_30461 + (1));
var tmp30515 = inst_30460;
var tmp30516 = inst_30458;
var tmp30517 = inst_30459;
var inst_30458__$1 = tmp30516;
var inst_30459__$1 = tmp30517;
var inst_30460__$1 = tmp30515;
var inst_30461__$1 = inst_30469;
var state_30506__$1 = (function (){var statearr_30520 = state_30506;
(statearr_30520[(8)] = inst_30460__$1);

(statearr_30520[(9)] = inst_30458__$1);

(statearr_30520[(10)] = inst_30461__$1);

(statearr_30520[(12)] = inst_30459__$1);

(statearr_30520[(14)] = inst_30468);

return statearr_30520;
})();
var statearr_30521_30556 = state_30506__$1;
(statearr_30521_30556[(2)] = null);

(statearr_30521_30556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (22))){
var state_30506__$1 = state_30506;
var statearr_30522_30557 = state_30506__$1;
(statearr_30522_30557[(2)] = null);

(statearr_30522_30557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (6))){
var inst_30447 = (state_30506[(13)]);
var inst_30456 = f.call(null,inst_30447);
var inst_30457 = cljs.core.seq.call(null,inst_30456);
var inst_30458 = inst_30457;
var inst_30459 = null;
var inst_30460 = (0);
var inst_30461 = (0);
var state_30506__$1 = (function (){var statearr_30523 = state_30506;
(statearr_30523[(8)] = inst_30460);

(statearr_30523[(9)] = inst_30458);

(statearr_30523[(10)] = inst_30461);

(statearr_30523[(12)] = inst_30459);

return statearr_30523;
})();
var statearr_30524_30558 = state_30506__$1;
(statearr_30524_30558[(2)] = null);

(statearr_30524_30558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (17))){
var inst_30472 = (state_30506[(7)]);
var inst_30476 = cljs.core.chunk_first.call(null,inst_30472);
var inst_30477 = cljs.core.chunk_rest.call(null,inst_30472);
var inst_30478 = cljs.core.count.call(null,inst_30476);
var inst_30458 = inst_30477;
var inst_30459 = inst_30476;
var inst_30460 = inst_30478;
var inst_30461 = (0);
var state_30506__$1 = (function (){var statearr_30525 = state_30506;
(statearr_30525[(8)] = inst_30460);

(statearr_30525[(9)] = inst_30458);

(statearr_30525[(10)] = inst_30461);

(statearr_30525[(12)] = inst_30459);

return statearr_30525;
})();
var statearr_30526_30559 = state_30506__$1;
(statearr_30526_30559[(2)] = null);

(statearr_30526_30559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (3))){
var inst_30504 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30506__$1,inst_30504);
} else {
if((state_val_30507 === (12))){
var inst_30492 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
var statearr_30527_30560 = state_30506__$1;
(statearr_30527_30560[(2)] = inst_30492);

(statearr_30527_30560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (2))){
var state_30506__$1 = state_30506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30506__$1,(4),in$);
} else {
if((state_val_30507 === (23))){
var inst_30500 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
var statearr_30528_30561 = state_30506__$1;
(statearr_30528_30561[(2)] = inst_30500);

(statearr_30528_30561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (19))){
var inst_30487 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
var statearr_30529_30562 = state_30506__$1;
(statearr_30529_30562[(2)] = inst_30487);

(statearr_30529_30562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (11))){
var inst_30458 = (state_30506[(9)]);
var inst_30472 = (state_30506[(7)]);
var inst_30472__$1 = cljs.core.seq.call(null,inst_30458);
var state_30506__$1 = (function (){var statearr_30530 = state_30506;
(statearr_30530[(7)] = inst_30472__$1);

return statearr_30530;
})();
if(inst_30472__$1){
var statearr_30531_30563 = state_30506__$1;
(statearr_30531_30563[(1)] = (14));

} else {
var statearr_30532_30564 = state_30506__$1;
(statearr_30532_30564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (9))){
var inst_30494 = (state_30506[(2)]);
var inst_30495 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30506__$1 = (function (){var statearr_30533 = state_30506;
(statearr_30533[(15)] = inst_30494);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30495)){
var statearr_30534_30565 = state_30506__$1;
(statearr_30534_30565[(1)] = (21));

} else {
var statearr_30535_30566 = state_30506__$1;
(statearr_30535_30566[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (5))){
var inst_30450 = cljs.core.async.close_BANG_.call(null,out);
var state_30506__$1 = state_30506;
var statearr_30536_30567 = state_30506__$1;
(statearr_30536_30567[(2)] = inst_30450);

(statearr_30536_30567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (14))){
var inst_30472 = (state_30506[(7)]);
var inst_30474 = cljs.core.chunked_seq_QMARK_.call(null,inst_30472);
var state_30506__$1 = state_30506;
if(inst_30474){
var statearr_30537_30568 = state_30506__$1;
(statearr_30537_30568[(1)] = (17));

} else {
var statearr_30538_30569 = state_30506__$1;
(statearr_30538_30569[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (16))){
var inst_30490 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
var statearr_30539_30570 = state_30506__$1;
(statearr_30539_30570[(2)] = inst_30490);

(statearr_30539_30570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (10))){
var inst_30461 = (state_30506[(10)]);
var inst_30459 = (state_30506[(12)]);
var inst_30466 = cljs.core._nth.call(null,inst_30459,inst_30461);
var state_30506__$1 = state_30506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30506__$1,(13),out,inst_30466);
} else {
if((state_val_30507 === (18))){
var inst_30472 = (state_30506[(7)]);
var inst_30481 = cljs.core.first.call(null,inst_30472);
var state_30506__$1 = state_30506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30506__$1,(20),out,inst_30481);
} else {
if((state_val_30507 === (8))){
var inst_30460 = (state_30506[(8)]);
var inst_30461 = (state_30506[(10)]);
var inst_30463 = (inst_30461 < inst_30460);
var inst_30464 = inst_30463;
var state_30506__$1 = state_30506;
if(cljs.core.truth_(inst_30464)){
var statearr_30540_30571 = state_30506__$1;
(statearr_30540_30571[(1)] = (10));

} else {
var statearr_30541_30572 = state_30506__$1;
(statearr_30541_30572[(1)] = (11));

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
});})(c__28045__auto__))
;
return ((function (switch__27933__auto__,c__28045__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27934__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27934__auto____0 = (function (){
var statearr_30545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30545[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27934__auto__);

(statearr_30545[(1)] = (1));

return statearr_30545;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27934__auto____1 = (function (state_30506){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_30506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e30546){if((e30546 instanceof Object)){
var ex__27937__auto__ = e30546;
var statearr_30547_30573 = state_30506;
(statearr_30547_30573[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30574 = state_30506;
state_30506 = G__30574;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27934__auto__ = function(state_30506){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27934__auto____1.call(this,state_30506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27934__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27934__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto__))
})();
var state__28047__auto__ = (function (){var statearr_30548 = f__28046__auto__.call(null);
(statearr_30548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto__);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto__))
);

return c__28045__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30575 = [];
var len__22733__auto___30578 = arguments.length;
var i__22734__auto___30579 = (0);
while(true){
if((i__22734__auto___30579 < len__22733__auto___30578)){
args30575.push((arguments[i__22734__auto___30579]));

var G__30580 = (i__22734__auto___30579 + (1));
i__22734__auto___30579 = G__30580;
continue;
} else {
}
break;
}

var G__30577 = args30575.length;
switch (G__30577) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30575.length)].join('')));

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
var args30582 = [];
var len__22733__auto___30585 = arguments.length;
var i__22734__auto___30586 = (0);
while(true){
if((i__22734__auto___30586 < len__22733__auto___30585)){
args30582.push((arguments[i__22734__auto___30586]));

var G__30587 = (i__22734__auto___30586 + (1));
i__22734__auto___30586 = G__30587;
continue;
} else {
}
break;
}

var G__30584 = args30582.length;
switch (G__30584) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30582.length)].join('')));

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
var args30589 = [];
var len__22733__auto___30640 = arguments.length;
var i__22734__auto___30641 = (0);
while(true){
if((i__22734__auto___30641 < len__22733__auto___30640)){
args30589.push((arguments[i__22734__auto___30641]));

var G__30642 = (i__22734__auto___30641 + (1));
i__22734__auto___30641 = G__30642;
continue;
} else {
}
break;
}

var G__30591 = args30589.length;
switch (G__30591) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30589.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28045__auto___30644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___30644,out){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___30644,out){
return (function (state_30615){
var state_val_30616 = (state_30615[(1)]);
if((state_val_30616 === (7))){
var inst_30610 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30617_30645 = state_30615__$1;
(statearr_30617_30645[(2)] = inst_30610);

(statearr_30617_30645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (1))){
var inst_30592 = null;
var state_30615__$1 = (function (){var statearr_30618 = state_30615;
(statearr_30618[(7)] = inst_30592);

return statearr_30618;
})();
var statearr_30619_30646 = state_30615__$1;
(statearr_30619_30646[(2)] = null);

(statearr_30619_30646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (4))){
var inst_30595 = (state_30615[(8)]);
var inst_30595__$1 = (state_30615[(2)]);
var inst_30596 = (inst_30595__$1 == null);
var inst_30597 = cljs.core.not.call(null,inst_30596);
var state_30615__$1 = (function (){var statearr_30620 = state_30615;
(statearr_30620[(8)] = inst_30595__$1);

return statearr_30620;
})();
if(inst_30597){
var statearr_30621_30647 = state_30615__$1;
(statearr_30621_30647[(1)] = (5));

} else {
var statearr_30622_30648 = state_30615__$1;
(statearr_30622_30648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (6))){
var state_30615__$1 = state_30615;
var statearr_30623_30649 = state_30615__$1;
(statearr_30623_30649[(2)] = null);

(statearr_30623_30649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (3))){
var inst_30612 = (state_30615[(2)]);
var inst_30613 = cljs.core.async.close_BANG_.call(null,out);
var state_30615__$1 = (function (){var statearr_30624 = state_30615;
(statearr_30624[(9)] = inst_30612);

return statearr_30624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30615__$1,inst_30613);
} else {
if((state_val_30616 === (2))){
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30615__$1,(4),ch);
} else {
if((state_val_30616 === (11))){
var inst_30595 = (state_30615[(8)]);
var inst_30604 = (state_30615[(2)]);
var inst_30592 = inst_30595;
var state_30615__$1 = (function (){var statearr_30625 = state_30615;
(statearr_30625[(7)] = inst_30592);

(statearr_30625[(10)] = inst_30604);

return statearr_30625;
})();
var statearr_30626_30650 = state_30615__$1;
(statearr_30626_30650[(2)] = null);

(statearr_30626_30650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (9))){
var inst_30595 = (state_30615[(8)]);
var state_30615__$1 = state_30615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30615__$1,(11),out,inst_30595);
} else {
if((state_val_30616 === (5))){
var inst_30592 = (state_30615[(7)]);
var inst_30595 = (state_30615[(8)]);
var inst_30599 = cljs.core._EQ_.call(null,inst_30595,inst_30592);
var state_30615__$1 = state_30615;
if(inst_30599){
var statearr_30628_30651 = state_30615__$1;
(statearr_30628_30651[(1)] = (8));

} else {
var statearr_30629_30652 = state_30615__$1;
(statearr_30629_30652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (10))){
var inst_30607 = (state_30615[(2)]);
var state_30615__$1 = state_30615;
var statearr_30630_30653 = state_30615__$1;
(statearr_30630_30653[(2)] = inst_30607);

(statearr_30630_30653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30616 === (8))){
var inst_30592 = (state_30615[(7)]);
var tmp30627 = inst_30592;
var inst_30592__$1 = tmp30627;
var state_30615__$1 = (function (){var statearr_30631 = state_30615;
(statearr_30631[(7)] = inst_30592__$1);

return statearr_30631;
})();
var statearr_30632_30654 = state_30615__$1;
(statearr_30632_30654[(2)] = null);

(statearr_30632_30654[(1)] = (2));


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
});})(c__28045__auto___30644,out))
;
return ((function (switch__27933__auto__,c__28045__auto___30644,out){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_30636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30636[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_30636[(1)] = (1));

return statearr_30636;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_30615){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_30615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e30637){if((e30637 instanceof Object)){
var ex__27937__auto__ = e30637;
var statearr_30638_30655 = state_30615;
(statearr_30638_30655[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30656 = state_30615;
state_30615 = G__30656;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_30615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_30615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___30644,out))
})();
var state__28047__auto__ = (function (){var statearr_30639 = f__28046__auto__.call(null);
(statearr_30639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___30644);

return statearr_30639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___30644,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30657 = [];
var len__22733__auto___30727 = arguments.length;
var i__22734__auto___30728 = (0);
while(true){
if((i__22734__auto___30728 < len__22733__auto___30727)){
args30657.push((arguments[i__22734__auto___30728]));

var G__30729 = (i__22734__auto___30728 + (1));
i__22734__auto___30728 = G__30729;
continue;
} else {
}
break;
}

var G__30659 = args30657.length;
switch (G__30659) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30657.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28045__auto___30731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___30731,out){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___30731,out){
return (function (state_30697){
var state_val_30698 = (state_30697[(1)]);
if((state_val_30698 === (7))){
var inst_30693 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30699_30732 = state_30697__$1;
(statearr_30699_30732[(2)] = inst_30693);

(statearr_30699_30732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (1))){
var inst_30660 = (new Array(n));
var inst_30661 = inst_30660;
var inst_30662 = (0);
var state_30697__$1 = (function (){var statearr_30700 = state_30697;
(statearr_30700[(7)] = inst_30661);

(statearr_30700[(8)] = inst_30662);

return statearr_30700;
})();
var statearr_30701_30733 = state_30697__$1;
(statearr_30701_30733[(2)] = null);

(statearr_30701_30733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (4))){
var inst_30665 = (state_30697[(9)]);
var inst_30665__$1 = (state_30697[(2)]);
var inst_30666 = (inst_30665__$1 == null);
var inst_30667 = cljs.core.not.call(null,inst_30666);
var state_30697__$1 = (function (){var statearr_30702 = state_30697;
(statearr_30702[(9)] = inst_30665__$1);

return statearr_30702;
})();
if(inst_30667){
var statearr_30703_30734 = state_30697__$1;
(statearr_30703_30734[(1)] = (5));

} else {
var statearr_30704_30735 = state_30697__$1;
(statearr_30704_30735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (15))){
var inst_30687 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30705_30736 = state_30697__$1;
(statearr_30705_30736[(2)] = inst_30687);

(statearr_30705_30736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (13))){
var state_30697__$1 = state_30697;
var statearr_30706_30737 = state_30697__$1;
(statearr_30706_30737[(2)] = null);

(statearr_30706_30737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (6))){
var inst_30662 = (state_30697[(8)]);
var inst_30683 = (inst_30662 > (0));
var state_30697__$1 = state_30697;
if(cljs.core.truth_(inst_30683)){
var statearr_30707_30738 = state_30697__$1;
(statearr_30707_30738[(1)] = (12));

} else {
var statearr_30708_30739 = state_30697__$1;
(statearr_30708_30739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (3))){
var inst_30695 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30697__$1,inst_30695);
} else {
if((state_val_30698 === (12))){
var inst_30661 = (state_30697[(7)]);
var inst_30685 = cljs.core.vec.call(null,inst_30661);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30697__$1,(15),out,inst_30685);
} else {
if((state_val_30698 === (2))){
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30697__$1,(4),ch);
} else {
if((state_val_30698 === (11))){
var inst_30677 = (state_30697[(2)]);
var inst_30678 = (new Array(n));
var inst_30661 = inst_30678;
var inst_30662 = (0);
var state_30697__$1 = (function (){var statearr_30709 = state_30697;
(statearr_30709[(10)] = inst_30677);

(statearr_30709[(7)] = inst_30661);

(statearr_30709[(8)] = inst_30662);

return statearr_30709;
})();
var statearr_30710_30740 = state_30697__$1;
(statearr_30710_30740[(2)] = null);

(statearr_30710_30740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (9))){
var inst_30661 = (state_30697[(7)]);
var inst_30675 = cljs.core.vec.call(null,inst_30661);
var state_30697__$1 = state_30697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30697__$1,(11),out,inst_30675);
} else {
if((state_val_30698 === (5))){
var inst_30661 = (state_30697[(7)]);
var inst_30662 = (state_30697[(8)]);
var inst_30670 = (state_30697[(11)]);
var inst_30665 = (state_30697[(9)]);
var inst_30669 = (inst_30661[inst_30662] = inst_30665);
var inst_30670__$1 = (inst_30662 + (1));
var inst_30671 = (inst_30670__$1 < n);
var state_30697__$1 = (function (){var statearr_30711 = state_30697;
(statearr_30711[(12)] = inst_30669);

(statearr_30711[(11)] = inst_30670__$1);

return statearr_30711;
})();
if(cljs.core.truth_(inst_30671)){
var statearr_30712_30741 = state_30697__$1;
(statearr_30712_30741[(1)] = (8));

} else {
var statearr_30713_30742 = state_30697__$1;
(statearr_30713_30742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (14))){
var inst_30690 = (state_30697[(2)]);
var inst_30691 = cljs.core.async.close_BANG_.call(null,out);
var state_30697__$1 = (function (){var statearr_30715 = state_30697;
(statearr_30715[(13)] = inst_30690);

return statearr_30715;
})();
var statearr_30716_30743 = state_30697__$1;
(statearr_30716_30743[(2)] = inst_30691);

(statearr_30716_30743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (10))){
var inst_30681 = (state_30697[(2)]);
var state_30697__$1 = state_30697;
var statearr_30717_30744 = state_30697__$1;
(statearr_30717_30744[(2)] = inst_30681);

(statearr_30717_30744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30698 === (8))){
var inst_30661 = (state_30697[(7)]);
var inst_30670 = (state_30697[(11)]);
var tmp30714 = inst_30661;
var inst_30661__$1 = tmp30714;
var inst_30662 = inst_30670;
var state_30697__$1 = (function (){var statearr_30718 = state_30697;
(statearr_30718[(7)] = inst_30661__$1);

(statearr_30718[(8)] = inst_30662);

return statearr_30718;
})();
var statearr_30719_30745 = state_30697__$1;
(statearr_30719_30745[(2)] = null);

(statearr_30719_30745[(1)] = (2));


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
});})(c__28045__auto___30731,out))
;
return ((function (switch__27933__auto__,c__28045__auto___30731,out){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_30723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30723[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_30723[(1)] = (1));

return statearr_30723;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_30697){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_30697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e30724){if((e30724 instanceof Object)){
var ex__27937__auto__ = e30724;
var statearr_30725_30746 = state_30697;
(statearr_30725_30746[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30747 = state_30697;
state_30697 = G__30747;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_30697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_30697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___30731,out))
})();
var state__28047__auto__ = (function (){var statearr_30726 = f__28046__auto__.call(null);
(statearr_30726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___30731);

return statearr_30726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___30731,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30748 = [];
var len__22733__auto___30822 = arguments.length;
var i__22734__auto___30823 = (0);
while(true){
if((i__22734__auto___30823 < len__22733__auto___30822)){
args30748.push((arguments[i__22734__auto___30823]));

var G__30824 = (i__22734__auto___30823 + (1));
i__22734__auto___30823 = G__30824;
continue;
} else {
}
break;
}

var G__30750 = args30748.length;
switch (G__30750) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30748.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28045__auto___30826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28045__auto___30826,out){
return (function (){
var f__28046__auto__ = (function (){var switch__27933__auto__ = ((function (c__28045__auto___30826,out){
return (function (state_30792){
var state_val_30793 = (state_30792[(1)]);
if((state_val_30793 === (7))){
var inst_30788 = (state_30792[(2)]);
var state_30792__$1 = state_30792;
var statearr_30794_30827 = state_30792__$1;
(statearr_30794_30827[(2)] = inst_30788);

(statearr_30794_30827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (1))){
var inst_30751 = [];
var inst_30752 = inst_30751;
var inst_30753 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30792__$1 = (function (){var statearr_30795 = state_30792;
(statearr_30795[(7)] = inst_30753);

(statearr_30795[(8)] = inst_30752);

return statearr_30795;
})();
var statearr_30796_30828 = state_30792__$1;
(statearr_30796_30828[(2)] = null);

(statearr_30796_30828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (4))){
var inst_30756 = (state_30792[(9)]);
var inst_30756__$1 = (state_30792[(2)]);
var inst_30757 = (inst_30756__$1 == null);
var inst_30758 = cljs.core.not.call(null,inst_30757);
var state_30792__$1 = (function (){var statearr_30797 = state_30792;
(statearr_30797[(9)] = inst_30756__$1);

return statearr_30797;
})();
if(inst_30758){
var statearr_30798_30829 = state_30792__$1;
(statearr_30798_30829[(1)] = (5));

} else {
var statearr_30799_30830 = state_30792__$1;
(statearr_30799_30830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (15))){
var inst_30782 = (state_30792[(2)]);
var state_30792__$1 = state_30792;
var statearr_30800_30831 = state_30792__$1;
(statearr_30800_30831[(2)] = inst_30782);

(statearr_30800_30831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (13))){
var state_30792__$1 = state_30792;
var statearr_30801_30832 = state_30792__$1;
(statearr_30801_30832[(2)] = null);

(statearr_30801_30832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (6))){
var inst_30752 = (state_30792[(8)]);
var inst_30777 = inst_30752.length;
var inst_30778 = (inst_30777 > (0));
var state_30792__$1 = state_30792;
if(cljs.core.truth_(inst_30778)){
var statearr_30802_30833 = state_30792__$1;
(statearr_30802_30833[(1)] = (12));

} else {
var statearr_30803_30834 = state_30792__$1;
(statearr_30803_30834[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (3))){
var inst_30790 = (state_30792[(2)]);
var state_30792__$1 = state_30792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30792__$1,inst_30790);
} else {
if((state_val_30793 === (12))){
var inst_30752 = (state_30792[(8)]);
var inst_30780 = cljs.core.vec.call(null,inst_30752);
var state_30792__$1 = state_30792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30792__$1,(15),out,inst_30780);
} else {
if((state_val_30793 === (2))){
var state_30792__$1 = state_30792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30792__$1,(4),ch);
} else {
if((state_val_30793 === (11))){
var inst_30760 = (state_30792[(10)]);
var inst_30756 = (state_30792[(9)]);
var inst_30770 = (state_30792[(2)]);
var inst_30771 = [];
var inst_30772 = inst_30771.push(inst_30756);
var inst_30752 = inst_30771;
var inst_30753 = inst_30760;
var state_30792__$1 = (function (){var statearr_30804 = state_30792;
(statearr_30804[(11)] = inst_30772);

(statearr_30804[(7)] = inst_30753);

(statearr_30804[(8)] = inst_30752);

(statearr_30804[(12)] = inst_30770);

return statearr_30804;
})();
var statearr_30805_30835 = state_30792__$1;
(statearr_30805_30835[(2)] = null);

(statearr_30805_30835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (9))){
var inst_30752 = (state_30792[(8)]);
var inst_30768 = cljs.core.vec.call(null,inst_30752);
var state_30792__$1 = state_30792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30792__$1,(11),out,inst_30768);
} else {
if((state_val_30793 === (5))){
var inst_30753 = (state_30792[(7)]);
var inst_30760 = (state_30792[(10)]);
var inst_30756 = (state_30792[(9)]);
var inst_30760__$1 = f.call(null,inst_30756);
var inst_30761 = cljs.core._EQ_.call(null,inst_30760__$1,inst_30753);
var inst_30762 = cljs.core.keyword_identical_QMARK_.call(null,inst_30753,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30763 = (inst_30761) || (inst_30762);
var state_30792__$1 = (function (){var statearr_30806 = state_30792;
(statearr_30806[(10)] = inst_30760__$1);

return statearr_30806;
})();
if(cljs.core.truth_(inst_30763)){
var statearr_30807_30836 = state_30792__$1;
(statearr_30807_30836[(1)] = (8));

} else {
var statearr_30808_30837 = state_30792__$1;
(statearr_30808_30837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (14))){
var inst_30785 = (state_30792[(2)]);
var inst_30786 = cljs.core.async.close_BANG_.call(null,out);
var state_30792__$1 = (function (){var statearr_30810 = state_30792;
(statearr_30810[(13)] = inst_30785);

return statearr_30810;
})();
var statearr_30811_30838 = state_30792__$1;
(statearr_30811_30838[(2)] = inst_30786);

(statearr_30811_30838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (10))){
var inst_30775 = (state_30792[(2)]);
var state_30792__$1 = state_30792;
var statearr_30812_30839 = state_30792__$1;
(statearr_30812_30839[(2)] = inst_30775);

(statearr_30812_30839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30793 === (8))){
var inst_30752 = (state_30792[(8)]);
var inst_30760 = (state_30792[(10)]);
var inst_30756 = (state_30792[(9)]);
var inst_30765 = inst_30752.push(inst_30756);
var tmp30809 = inst_30752;
var inst_30752__$1 = tmp30809;
var inst_30753 = inst_30760;
var state_30792__$1 = (function (){var statearr_30813 = state_30792;
(statearr_30813[(7)] = inst_30753);

(statearr_30813[(8)] = inst_30752__$1);

(statearr_30813[(14)] = inst_30765);

return statearr_30813;
})();
var statearr_30814_30840 = state_30792__$1;
(statearr_30814_30840[(2)] = null);

(statearr_30814_30840[(1)] = (2));


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
});})(c__28045__auto___30826,out))
;
return ((function (switch__27933__auto__,c__28045__auto___30826,out){
return (function() {
var cljs$core$async$state_machine__27934__auto__ = null;
var cljs$core$async$state_machine__27934__auto____0 = (function (){
var statearr_30818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30818[(0)] = cljs$core$async$state_machine__27934__auto__);

(statearr_30818[(1)] = (1));

return statearr_30818;
});
var cljs$core$async$state_machine__27934__auto____1 = (function (state_30792){
while(true){
var ret_value__27935__auto__ = (function (){try{while(true){
var result__27936__auto__ = switch__27933__auto__.call(null,state_30792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27936__auto__;
}
break;
}
}catch (e30819){if((e30819 instanceof Object)){
var ex__27937__auto__ = e30819;
var statearr_30820_30841 = state_30792;
(statearr_30820_30841[(5)] = ex__27937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30842 = state_30792;
state_30792 = G__30842;
continue;
} else {
return ret_value__27935__auto__;
}
break;
}
});
cljs$core$async$state_machine__27934__auto__ = function(state_30792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27934__auto____1.call(this,state_30792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27934__auto____0;
cljs$core$async$state_machine__27934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27934__auto____1;
return cljs$core$async$state_machine__27934__auto__;
})()
;})(switch__27933__auto__,c__28045__auto___30826,out))
})();
var state__28047__auto__ = (function (){var statearr_30821 = f__28046__auto__.call(null);
(statearr_30821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28045__auto___30826);

return statearr_30821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28047__auto__);
});})(c__28045__auto___30826,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1490992944030