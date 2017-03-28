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
var args33138 = [];
var len__19984__auto___33144 = arguments.length;
var i__19985__auto___33145 = (0);
while(true){
if((i__19985__auto___33145 < len__19984__auto___33144)){
args33138.push((arguments[i__19985__auto___33145]));

var G__33146 = (i__19985__auto___33145 + (1));
i__19985__auto___33145 = G__33146;
continue;
} else {
}
break;
}

var G__33140 = args33138.length;
switch (G__33140) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33138.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33141 = (function (f,blockable,meta33142){
this.f = f;
this.blockable = blockable;
this.meta33142 = meta33142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33143,meta33142__$1){
var self__ = this;
var _33143__$1 = this;
return (new cljs.core.async.t_cljs$core$async33141(self__.f,self__.blockable,meta33142__$1));
});

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33143){
var self__ = this;
var _33143__$1 = this;
return self__.meta33142;
});

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33142","meta33142",-683344679,null)], null);
});

cljs.core.async.t_cljs$core$async33141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33141";

cljs.core.async.t_cljs$core$async33141.cljs$lang$ctorPrWriter = (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async33141");
});

cljs.core.async.__GT_t_cljs$core$async33141 = (function cljs$core$async$__GT_t_cljs$core$async33141(f__$1,blockable__$1,meta33142){
return (new cljs.core.async.t_cljs$core$async33141(f__$1,blockable__$1,meta33142));
});

}

return (new cljs.core.async.t_cljs$core$async33141(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args33150 = [];
var len__19984__auto___33153 = arguments.length;
var i__19985__auto___33154 = (0);
while(true){
if((i__19985__auto___33154 < len__19984__auto___33153)){
args33150.push((arguments[i__19985__auto___33154]));

var G__33155 = (i__19985__auto___33154 + (1));
i__19985__auto___33154 = G__33155;
continue;
} else {
}
break;
}

var G__33152 = args33150.length;
switch (G__33152) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33150.length)].join('')));

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
var args33157 = [];
var len__19984__auto___33160 = arguments.length;
var i__19985__auto___33161 = (0);
while(true){
if((i__19985__auto___33161 < len__19984__auto___33160)){
args33157.push((arguments[i__19985__auto___33161]));

var G__33162 = (i__19985__auto___33161 + (1));
i__19985__auto___33161 = G__33162;
continue;
} else {
}
break;
}

var G__33159 = args33157.length;
switch (G__33159) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33157.length)].join('')));

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
var args33164 = [];
var len__19984__auto___33167 = arguments.length;
var i__19985__auto___33168 = (0);
while(true){
if((i__19985__auto___33168 < len__19984__auto___33167)){
args33164.push((arguments[i__19985__auto___33168]));

var G__33169 = (i__19985__auto___33168 + (1));
i__19985__auto___33168 = G__33169;
continue;
} else {
}
break;
}

var G__33166 = args33164.length;
switch (G__33166) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33164.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33171 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33171);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33171,ret){
return (function (){
return fn1.call(null,val_33171);
});})(val_33171,ret))
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
var args33172 = [];
var len__19984__auto___33175 = arguments.length;
var i__19985__auto___33176 = (0);
while(true){
if((i__19985__auto___33176 < len__19984__auto___33175)){
args33172.push((arguments[i__19985__auto___33176]));

var G__33177 = (i__19985__auto___33176 + (1));
i__19985__auto___33176 = G__33177;
continue;
} else {
}
break;
}

var G__33174 = args33172.length;
switch (G__33174) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33172.length)].join('')));

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
var n__19794__auto___33179 = n;
var x_33180 = (0);
while(true){
if((x_33180 < n__19794__auto___33179)){
(a[x_33180] = (0));

var G__33181 = (x_33180 + (1));
x_33180 = G__33181;
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

var G__33182 = (i + (1));
i = G__33182;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33186 = (function (flag,meta33187){
this.flag = flag;
this.meta33187 = meta33187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33188,meta33187__$1){
var self__ = this;
var _33188__$1 = this;
return (new cljs.core.async.t_cljs$core$async33186(self__.flag,meta33187__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33188){
var self__ = this;
var _33188__$1 = this;
return self__.meta33187;
});})(flag))
;

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33186.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33187","meta33187",1631319030,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33186";

cljs.core.async.t_cljs$core$async33186.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async33186");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33186 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33186(flag__$1,meta33187){
return (new cljs.core.async.t_cljs$core$async33186(flag__$1,meta33187));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33186(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33192 = (function (flag,cb,meta33193){
this.flag = flag;
this.cb = cb;
this.meta33193 = meta33193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33194,meta33193__$1){
var self__ = this;
var _33194__$1 = this;
return (new cljs.core.async.t_cljs$core$async33192(self__.flag,self__.cb,meta33193__$1));
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33194){
var self__ = this;
var _33194__$1 = this;
return self__.meta33193;
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33193","meta33193",-1625521107,null)], null);
});

cljs.core.async.t_cljs$core$async33192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33192";

cljs.core.async.t_cljs$core$async33192.cljs$lang$ctorPrWriter = (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async33192");
});

cljs.core.async.__GT_t_cljs$core$async33192 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33192(flag__$1,cb__$1,meta33193){
return (new cljs.core.async.t_cljs$core$async33192(flag__$1,cb__$1,meta33193));
});

}

return (new cljs.core.async.t_cljs$core$async33192(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33195_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33195_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33196_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33196_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18876__auto__ = wport;
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33197 = (i + (1));
i = G__33197;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18876__auto__ = ret;
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18864__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18864__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18864__auto__;
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
var args__19991__auto__ = [];
var len__19984__auto___33203 = arguments.length;
var i__19985__auto___33204 = (0);
while(true){
if((i__19985__auto___33204 < len__19984__auto___33203)){
args__19991__auto__.push((arguments[i__19985__auto___33204]));

var G__33205 = (i__19985__auto___33204 + (1));
i__19985__auto___33204 = G__33205;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((1) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19992__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33200){
var map__33201 = p__33200;
var map__33201__$1 = ((((!((map__33201 == null)))?((((map__33201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33201):map__33201);
var opts = map__33201__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33198){
var G__33199 = cljs.core.first.call(null,seq33198);
var seq33198__$1 = cljs.core.next.call(null,seq33198);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33199,seq33198__$1);
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
var args33206 = [];
var len__19984__auto___33256 = arguments.length;
var i__19985__auto___33257 = (0);
while(true){
if((i__19985__auto___33257 < len__19984__auto___33256)){
args33206.push((arguments[i__19985__auto___33257]));

var G__33258 = (i__19985__auto___33257 + (1));
i__19985__auto___33257 = G__33258;
continue;
} else {
}
break;
}

var G__33208 = args33206.length;
switch (G__33208) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33206.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25482__auto___33260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___33260){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___33260){
return (function (state_33232){
var state_val_33233 = (state_33232[(1)]);
if((state_val_33233 === (7))){
var inst_33228 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33234_33261 = state_33232__$1;
(statearr_33234_33261[(2)] = inst_33228);

(statearr_33234_33261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (1))){
var state_33232__$1 = state_33232;
var statearr_33235_33262 = state_33232__$1;
(statearr_33235_33262[(2)] = null);

(statearr_33235_33262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (4))){
var inst_33211 = (state_33232[(7)]);
var inst_33211__$1 = (state_33232[(2)]);
var inst_33212 = (inst_33211__$1 == null);
var state_33232__$1 = (function (){var statearr_33236 = state_33232;
(statearr_33236[(7)] = inst_33211__$1);

return statearr_33236;
})();
if(cljs.core.truth_(inst_33212)){
var statearr_33237_33263 = state_33232__$1;
(statearr_33237_33263[(1)] = (5));

} else {
var statearr_33238_33264 = state_33232__$1;
(statearr_33238_33264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (13))){
var state_33232__$1 = state_33232;
var statearr_33239_33265 = state_33232__$1;
(statearr_33239_33265[(2)] = null);

(statearr_33239_33265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (6))){
var inst_33211 = (state_33232[(7)]);
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33232__$1,(11),to,inst_33211);
} else {
if((state_val_33233 === (3))){
var inst_33230 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33232__$1,inst_33230);
} else {
if((state_val_33233 === (12))){
var state_33232__$1 = state_33232;
var statearr_33240_33266 = state_33232__$1;
(statearr_33240_33266[(2)] = null);

(statearr_33240_33266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (2))){
var state_33232__$1 = state_33232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33232__$1,(4),from);
} else {
if((state_val_33233 === (11))){
var inst_33221 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
if(cljs.core.truth_(inst_33221)){
var statearr_33241_33267 = state_33232__$1;
(statearr_33241_33267[(1)] = (12));

} else {
var statearr_33242_33268 = state_33232__$1;
(statearr_33242_33268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (9))){
var state_33232__$1 = state_33232;
var statearr_33243_33269 = state_33232__$1;
(statearr_33243_33269[(2)] = null);

(statearr_33243_33269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (5))){
var state_33232__$1 = state_33232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33244_33270 = state_33232__$1;
(statearr_33244_33270[(1)] = (8));

} else {
var statearr_33245_33271 = state_33232__$1;
(statearr_33245_33271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (14))){
var inst_33226 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33246_33272 = state_33232__$1;
(statearr_33246_33272[(2)] = inst_33226);

(statearr_33246_33272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (10))){
var inst_33218 = (state_33232[(2)]);
var state_33232__$1 = state_33232;
var statearr_33247_33273 = state_33232__$1;
(statearr_33247_33273[(2)] = inst_33218);

(statearr_33247_33273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33233 === (8))){
var inst_33215 = cljs.core.async.close_BANG_.call(null,to);
var state_33232__$1 = state_33232;
var statearr_33248_33274 = state_33232__$1;
(statearr_33248_33274[(2)] = inst_33215);

(statearr_33248_33274[(1)] = (10));


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
});})(c__25482__auto___33260))
;
return ((function (switch__25417__auto__,c__25482__auto___33260){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_33252 = [null,null,null,null,null,null,null,null];
(statearr_33252[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_33252[(1)] = (1));

return statearr_33252;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_33232){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33253){if((e33253 instanceof Object)){
var ex__25421__auto__ = e33253;
var statearr_33254_33275 = state_33232;
(statearr_33254_33275[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33276 = state_33232;
state_33232 = G__33276;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_33232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_33232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___33260))
})();
var state__25484__auto__ = (function (){var statearr_33255 = f__25483__auto__.call(null);
(statearr_33255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___33260);

return statearr_33255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___33260))
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
return (function (p__33464){
var vec__33465 = p__33464;
var v = cljs.core.nth.call(null,vec__33465,(0),null);
var p = cljs.core.nth.call(null,vec__33465,(1),null);
var job = vec__33465;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25482__auto___33651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___33651,res,vec__33465,v,p,job,jobs,results){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___33651,res,vec__33465,v,p,job,jobs,results){
return (function (state_33472){
var state_val_33473 = (state_33472[(1)]);
if((state_val_33473 === (1))){
var state_33472__$1 = state_33472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33472__$1,(2),res,v);
} else {
if((state_val_33473 === (2))){
var inst_33469 = (state_33472[(2)]);
var inst_33470 = cljs.core.async.close_BANG_.call(null,res);
var state_33472__$1 = (function (){var statearr_33474 = state_33472;
(statearr_33474[(7)] = inst_33469);

return statearr_33474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33472__$1,inst_33470);
} else {
return null;
}
}
});})(c__25482__auto___33651,res,vec__33465,v,p,job,jobs,results))
;
return ((function (switch__25417__auto__,c__25482__auto___33651,res,vec__33465,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0 = (function (){
var statearr_33478 = [null,null,null,null,null,null,null,null];
(statearr_33478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__);

(statearr_33478[(1)] = (1));

return statearr_33478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1 = (function (state_33472){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33479){if((e33479 instanceof Object)){
var ex__25421__auto__ = e33479;
var statearr_33480_33652 = state_33472;
(statearr_33480_33652[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33653 = state_33472;
state_33472 = G__33653;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = function(state_33472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1.call(this,state_33472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___33651,res,vec__33465,v,p,job,jobs,results))
})();
var state__25484__auto__ = (function (){var statearr_33481 = f__25483__auto__.call(null);
(statearr_33481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___33651);

return statearr_33481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___33651,res,vec__33465,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33482){
var vec__33483 = p__33482;
var v = cljs.core.nth.call(null,vec__33483,(0),null);
var p = cljs.core.nth.call(null,vec__33483,(1),null);
var job = vec__33483;
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
var n__19794__auto___33654 = n;
var __33655 = (0);
while(true){
if((__33655 < n__19794__auto___33654)){
var G__33486_33656 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33486_33656) {
case "compute":
var c__25482__auto___33658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33655,c__25482__auto___33658,G__33486_33656,n__19794__auto___33654,jobs,results,process,async){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (__33655,c__25482__auto___33658,G__33486_33656,n__19794__auto___33654,jobs,results,process,async){
return (function (state_33499){
var state_val_33500 = (state_33499[(1)]);
if((state_val_33500 === (1))){
var state_33499__$1 = state_33499;
var statearr_33501_33659 = state_33499__$1;
(statearr_33501_33659[(2)] = null);

(statearr_33501_33659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (2))){
var state_33499__$1 = state_33499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33499__$1,(4),jobs);
} else {
if((state_val_33500 === (3))){
var inst_33497 = (state_33499[(2)]);
var state_33499__$1 = state_33499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33499__$1,inst_33497);
} else {
if((state_val_33500 === (4))){
var inst_33489 = (state_33499[(2)]);
var inst_33490 = process.call(null,inst_33489);
var state_33499__$1 = state_33499;
if(cljs.core.truth_(inst_33490)){
var statearr_33502_33660 = state_33499__$1;
(statearr_33502_33660[(1)] = (5));

} else {
var statearr_33503_33661 = state_33499__$1;
(statearr_33503_33661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (5))){
var state_33499__$1 = state_33499;
var statearr_33504_33662 = state_33499__$1;
(statearr_33504_33662[(2)] = null);

(statearr_33504_33662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (6))){
var state_33499__$1 = state_33499;
var statearr_33505_33663 = state_33499__$1;
(statearr_33505_33663[(2)] = null);

(statearr_33505_33663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (7))){
var inst_33495 = (state_33499[(2)]);
var state_33499__$1 = state_33499;
var statearr_33506_33664 = state_33499__$1;
(statearr_33506_33664[(2)] = inst_33495);

(statearr_33506_33664[(1)] = (3));


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
});})(__33655,c__25482__auto___33658,G__33486_33656,n__19794__auto___33654,jobs,results,process,async))
;
return ((function (__33655,switch__25417__auto__,c__25482__auto___33658,G__33486_33656,n__19794__auto___33654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0 = (function (){
var statearr_33510 = [null,null,null,null,null,null,null];
(statearr_33510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__);

(statearr_33510[(1)] = (1));

return statearr_33510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1 = (function (state_33499){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33511){if((e33511 instanceof Object)){
var ex__25421__auto__ = e33511;
var statearr_33512_33665 = state_33499;
(statearr_33512_33665[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33666 = state_33499;
state_33499 = G__33666;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = function(state_33499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1.call(this,state_33499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__;
})()
;})(__33655,switch__25417__auto__,c__25482__auto___33658,G__33486_33656,n__19794__auto___33654,jobs,results,process,async))
})();
var state__25484__auto__ = (function (){var statearr_33513 = f__25483__auto__.call(null);
(statearr_33513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___33658);

return statearr_33513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(__33655,c__25482__auto___33658,G__33486_33656,n__19794__auto___33654,jobs,results,process,async))
);


break;
case "async":
var c__25482__auto___33667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33655,c__25482__auto___33667,G__33486_33656,n__19794__auto___33654,jobs,results,process,async){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (__33655,c__25482__auto___33667,G__33486_33656,n__19794__auto___33654,jobs,results,process,async){
return (function (state_33526){
var state_val_33527 = (state_33526[(1)]);
if((state_val_33527 === (1))){
var state_33526__$1 = state_33526;
var statearr_33528_33668 = state_33526__$1;
(statearr_33528_33668[(2)] = null);

(statearr_33528_33668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (2))){
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33526__$1,(4),jobs);
} else {
if((state_val_33527 === (3))){
var inst_33524 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33526__$1,inst_33524);
} else {
if((state_val_33527 === (4))){
var inst_33516 = (state_33526[(2)]);
var inst_33517 = async.call(null,inst_33516);
var state_33526__$1 = state_33526;
if(cljs.core.truth_(inst_33517)){
var statearr_33529_33669 = state_33526__$1;
(statearr_33529_33669[(1)] = (5));

} else {
var statearr_33530_33670 = state_33526__$1;
(statearr_33530_33670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (5))){
var state_33526__$1 = state_33526;
var statearr_33531_33671 = state_33526__$1;
(statearr_33531_33671[(2)] = null);

(statearr_33531_33671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (6))){
var state_33526__$1 = state_33526;
var statearr_33532_33672 = state_33526__$1;
(statearr_33532_33672[(2)] = null);

(statearr_33532_33672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (7))){
var inst_33522 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
var statearr_33533_33673 = state_33526__$1;
(statearr_33533_33673[(2)] = inst_33522);

(statearr_33533_33673[(1)] = (3));


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
});})(__33655,c__25482__auto___33667,G__33486_33656,n__19794__auto___33654,jobs,results,process,async))
;
return ((function (__33655,switch__25417__auto__,c__25482__auto___33667,G__33486_33656,n__19794__auto___33654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0 = (function (){
var statearr_33537 = [null,null,null,null,null,null,null];
(statearr_33537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__);

(statearr_33537[(1)] = (1));

return statearr_33537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1 = (function (state_33526){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33538){if((e33538 instanceof Object)){
var ex__25421__auto__ = e33538;
var statearr_33539_33674 = state_33526;
(statearr_33539_33674[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33675 = state_33526;
state_33526 = G__33675;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = function(state_33526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1.call(this,state_33526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__;
})()
;})(__33655,switch__25417__auto__,c__25482__auto___33667,G__33486_33656,n__19794__auto___33654,jobs,results,process,async))
})();
var state__25484__auto__ = (function (){var statearr_33540 = f__25483__auto__.call(null);
(statearr_33540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___33667);

return statearr_33540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(__33655,c__25482__auto___33667,G__33486_33656,n__19794__auto___33654,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33676 = (__33655 + (1));
__33655 = G__33676;
continue;
} else {
}
break;
}

var c__25482__auto___33677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___33677,jobs,results,process,async){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___33677,jobs,results,process,async){
return (function (state_33562){
var state_val_33563 = (state_33562[(1)]);
if((state_val_33563 === (1))){
var state_33562__$1 = state_33562;
var statearr_33564_33678 = state_33562__$1;
(statearr_33564_33678[(2)] = null);

(statearr_33564_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (2))){
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33562__$1,(4),from);
} else {
if((state_val_33563 === (3))){
var inst_33560 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33562__$1,inst_33560);
} else {
if((state_val_33563 === (4))){
var inst_33543 = (state_33562[(7)]);
var inst_33543__$1 = (state_33562[(2)]);
var inst_33544 = (inst_33543__$1 == null);
var state_33562__$1 = (function (){var statearr_33565 = state_33562;
(statearr_33565[(7)] = inst_33543__$1);

return statearr_33565;
})();
if(cljs.core.truth_(inst_33544)){
var statearr_33566_33679 = state_33562__$1;
(statearr_33566_33679[(1)] = (5));

} else {
var statearr_33567_33680 = state_33562__$1;
(statearr_33567_33680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (5))){
var inst_33546 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33562__$1 = state_33562;
var statearr_33568_33681 = state_33562__$1;
(statearr_33568_33681[(2)] = inst_33546);

(statearr_33568_33681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (6))){
var inst_33548 = (state_33562[(8)]);
var inst_33543 = (state_33562[(7)]);
var inst_33548__$1 = cljs.core.async.chan.call(null,(1));
var inst_33549 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33550 = [inst_33543,inst_33548__$1];
var inst_33551 = (new cljs.core.PersistentVector(null,2,(5),inst_33549,inst_33550,null));
var state_33562__$1 = (function (){var statearr_33569 = state_33562;
(statearr_33569[(8)] = inst_33548__$1);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33562__$1,(8),jobs,inst_33551);
} else {
if((state_val_33563 === (7))){
var inst_33558 = (state_33562[(2)]);
var state_33562__$1 = state_33562;
var statearr_33570_33682 = state_33562__$1;
(statearr_33570_33682[(2)] = inst_33558);

(statearr_33570_33682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33563 === (8))){
var inst_33548 = (state_33562[(8)]);
var inst_33553 = (state_33562[(2)]);
var state_33562__$1 = (function (){var statearr_33571 = state_33562;
(statearr_33571[(9)] = inst_33553);

return statearr_33571;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33562__$1,(9),results,inst_33548);
} else {
if((state_val_33563 === (9))){
var inst_33555 = (state_33562[(2)]);
var state_33562__$1 = (function (){var statearr_33572 = state_33562;
(statearr_33572[(10)] = inst_33555);

return statearr_33572;
})();
var statearr_33573_33683 = state_33562__$1;
(statearr_33573_33683[(2)] = null);

(statearr_33573_33683[(1)] = (2));


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
});})(c__25482__auto___33677,jobs,results,process,async))
;
return ((function (switch__25417__auto__,c__25482__auto___33677,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0 = (function (){
var statearr_33577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__);

(statearr_33577[(1)] = (1));

return statearr_33577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1 = (function (state_33562){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33578){if((e33578 instanceof Object)){
var ex__25421__auto__ = e33578;
var statearr_33579_33684 = state_33562;
(statearr_33579_33684[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33685 = state_33562;
state_33562 = G__33685;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = function(state_33562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1.call(this,state_33562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___33677,jobs,results,process,async))
})();
var state__25484__auto__ = (function (){var statearr_33580 = f__25483__auto__.call(null);
(statearr_33580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___33677);

return statearr_33580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___33677,jobs,results,process,async))
);


var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__,jobs,results,process,async){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__,jobs,results,process,async){
return (function (state_33618){
var state_val_33619 = (state_33618[(1)]);
if((state_val_33619 === (7))){
var inst_33614 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33620_33686 = state_33618__$1;
(statearr_33620_33686[(2)] = inst_33614);

(statearr_33620_33686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (20))){
var state_33618__$1 = state_33618;
var statearr_33621_33687 = state_33618__$1;
(statearr_33621_33687[(2)] = null);

(statearr_33621_33687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (1))){
var state_33618__$1 = state_33618;
var statearr_33622_33688 = state_33618__$1;
(statearr_33622_33688[(2)] = null);

(statearr_33622_33688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (4))){
var inst_33583 = (state_33618[(7)]);
var inst_33583__$1 = (state_33618[(2)]);
var inst_33584 = (inst_33583__$1 == null);
var state_33618__$1 = (function (){var statearr_33623 = state_33618;
(statearr_33623[(7)] = inst_33583__$1);

return statearr_33623;
})();
if(cljs.core.truth_(inst_33584)){
var statearr_33624_33689 = state_33618__$1;
(statearr_33624_33689[(1)] = (5));

} else {
var statearr_33625_33690 = state_33618__$1;
(statearr_33625_33690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (15))){
var inst_33596 = (state_33618[(8)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33618__$1,(18),to,inst_33596);
} else {
if((state_val_33619 === (21))){
var inst_33609 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33626_33691 = state_33618__$1;
(statearr_33626_33691[(2)] = inst_33609);

(statearr_33626_33691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (13))){
var inst_33611 = (state_33618[(2)]);
var state_33618__$1 = (function (){var statearr_33627 = state_33618;
(statearr_33627[(9)] = inst_33611);

return statearr_33627;
})();
var statearr_33628_33692 = state_33618__$1;
(statearr_33628_33692[(2)] = null);

(statearr_33628_33692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (6))){
var inst_33583 = (state_33618[(7)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33618__$1,(11),inst_33583);
} else {
if((state_val_33619 === (17))){
var inst_33604 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
if(cljs.core.truth_(inst_33604)){
var statearr_33629_33693 = state_33618__$1;
(statearr_33629_33693[(1)] = (19));

} else {
var statearr_33630_33694 = state_33618__$1;
(statearr_33630_33694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (3))){
var inst_33616 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33618__$1,inst_33616);
} else {
if((state_val_33619 === (12))){
var inst_33593 = (state_33618[(10)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33618__$1,(14),inst_33593);
} else {
if((state_val_33619 === (2))){
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33618__$1,(4),results);
} else {
if((state_val_33619 === (19))){
var state_33618__$1 = state_33618;
var statearr_33631_33695 = state_33618__$1;
(statearr_33631_33695[(2)] = null);

(statearr_33631_33695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (11))){
var inst_33593 = (state_33618[(2)]);
var state_33618__$1 = (function (){var statearr_33632 = state_33618;
(statearr_33632[(10)] = inst_33593);

return statearr_33632;
})();
var statearr_33633_33696 = state_33618__$1;
(statearr_33633_33696[(2)] = null);

(statearr_33633_33696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (9))){
var state_33618__$1 = state_33618;
var statearr_33634_33697 = state_33618__$1;
(statearr_33634_33697[(2)] = null);

(statearr_33634_33697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (5))){
var state_33618__$1 = state_33618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33635_33698 = state_33618__$1;
(statearr_33635_33698[(1)] = (8));

} else {
var statearr_33636_33699 = state_33618__$1;
(statearr_33636_33699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (14))){
var inst_33596 = (state_33618[(8)]);
var inst_33598 = (state_33618[(11)]);
var inst_33596__$1 = (state_33618[(2)]);
var inst_33597 = (inst_33596__$1 == null);
var inst_33598__$1 = cljs.core.not.call(null,inst_33597);
var state_33618__$1 = (function (){var statearr_33637 = state_33618;
(statearr_33637[(8)] = inst_33596__$1);

(statearr_33637[(11)] = inst_33598__$1);

return statearr_33637;
})();
if(inst_33598__$1){
var statearr_33638_33700 = state_33618__$1;
(statearr_33638_33700[(1)] = (15));

} else {
var statearr_33639_33701 = state_33618__$1;
(statearr_33639_33701[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (16))){
var inst_33598 = (state_33618[(11)]);
var state_33618__$1 = state_33618;
var statearr_33640_33702 = state_33618__$1;
(statearr_33640_33702[(2)] = inst_33598);

(statearr_33640_33702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (10))){
var inst_33590 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33641_33703 = state_33618__$1;
(statearr_33641_33703[(2)] = inst_33590);

(statearr_33641_33703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (18))){
var inst_33601 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33642_33704 = state_33618__$1;
(statearr_33642_33704[(2)] = inst_33601);

(statearr_33642_33704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (8))){
var inst_33587 = cljs.core.async.close_BANG_.call(null,to);
var state_33618__$1 = state_33618;
var statearr_33643_33705 = state_33618__$1;
(statearr_33643_33705[(2)] = inst_33587);

(statearr_33643_33705[(1)] = (10));


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
});})(c__25482__auto__,jobs,results,process,async))
;
return ((function (switch__25417__auto__,c__25482__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0 = (function (){
var statearr_33647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__);

(statearr_33647[(1)] = (1));

return statearr_33647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1 = (function (state_33618){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33648){if((e33648 instanceof Object)){
var ex__25421__auto__ = e33648;
var statearr_33649_33706 = state_33618;
(statearr_33649_33706[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33707 = state_33618;
state_33618 = G__33707;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__ = function(state_33618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1.call(this,state_33618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25418__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__,jobs,results,process,async))
})();
var state__25484__auto__ = (function (){var statearr_33650 = f__25483__auto__.call(null);
(statearr_33650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_33650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__,jobs,results,process,async))
);

return c__25482__auto__;
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
var args33708 = [];
var len__19984__auto___33711 = arguments.length;
var i__19985__auto___33712 = (0);
while(true){
if((i__19985__auto___33712 < len__19984__auto___33711)){
args33708.push((arguments[i__19985__auto___33712]));

var G__33713 = (i__19985__auto___33712 + (1));
i__19985__auto___33712 = G__33713;
continue;
} else {
}
break;
}

var G__33710 = args33708.length;
switch (G__33710) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33708.length)].join('')));

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
var args33715 = [];
var len__19984__auto___33718 = arguments.length;
var i__19985__auto___33719 = (0);
while(true){
if((i__19985__auto___33719 < len__19984__auto___33718)){
args33715.push((arguments[i__19985__auto___33719]));

var G__33720 = (i__19985__auto___33719 + (1));
i__19985__auto___33719 = G__33720;
continue;
} else {
}
break;
}

var G__33717 = args33715.length;
switch (G__33717) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33715.length)].join('')));

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
var args33722 = [];
var len__19984__auto___33775 = arguments.length;
var i__19985__auto___33776 = (0);
while(true){
if((i__19985__auto___33776 < len__19984__auto___33775)){
args33722.push((arguments[i__19985__auto___33776]));

var G__33777 = (i__19985__auto___33776 + (1));
i__19985__auto___33776 = G__33777;
continue;
} else {
}
break;
}

var G__33724 = args33722.length;
switch (G__33724) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33722.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25482__auto___33779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___33779,tc,fc){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___33779,tc,fc){
return (function (state_33750){
var state_val_33751 = (state_33750[(1)]);
if((state_val_33751 === (7))){
var inst_33746 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33752_33780 = state_33750__$1;
(statearr_33752_33780[(2)] = inst_33746);

(statearr_33752_33780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (1))){
var state_33750__$1 = state_33750;
var statearr_33753_33781 = state_33750__$1;
(statearr_33753_33781[(2)] = null);

(statearr_33753_33781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (4))){
var inst_33727 = (state_33750[(7)]);
var inst_33727__$1 = (state_33750[(2)]);
var inst_33728 = (inst_33727__$1 == null);
var state_33750__$1 = (function (){var statearr_33754 = state_33750;
(statearr_33754[(7)] = inst_33727__$1);

return statearr_33754;
})();
if(cljs.core.truth_(inst_33728)){
var statearr_33755_33782 = state_33750__$1;
(statearr_33755_33782[(1)] = (5));

} else {
var statearr_33756_33783 = state_33750__$1;
(statearr_33756_33783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (13))){
var state_33750__$1 = state_33750;
var statearr_33757_33784 = state_33750__$1;
(statearr_33757_33784[(2)] = null);

(statearr_33757_33784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (6))){
var inst_33727 = (state_33750[(7)]);
var inst_33733 = p.call(null,inst_33727);
var state_33750__$1 = state_33750;
if(cljs.core.truth_(inst_33733)){
var statearr_33758_33785 = state_33750__$1;
(statearr_33758_33785[(1)] = (9));

} else {
var statearr_33759_33786 = state_33750__$1;
(statearr_33759_33786[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (3))){
var inst_33748 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33750__$1,inst_33748);
} else {
if((state_val_33751 === (12))){
var state_33750__$1 = state_33750;
var statearr_33760_33787 = state_33750__$1;
(statearr_33760_33787[(2)] = null);

(statearr_33760_33787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (2))){
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33750__$1,(4),ch);
} else {
if((state_val_33751 === (11))){
var inst_33727 = (state_33750[(7)]);
var inst_33737 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33750__$1,(8),inst_33737,inst_33727);
} else {
if((state_val_33751 === (9))){
var state_33750__$1 = state_33750;
var statearr_33761_33788 = state_33750__$1;
(statearr_33761_33788[(2)] = tc);

(statearr_33761_33788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (5))){
var inst_33730 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33731 = cljs.core.async.close_BANG_.call(null,fc);
var state_33750__$1 = (function (){var statearr_33762 = state_33750;
(statearr_33762[(8)] = inst_33730);

return statearr_33762;
})();
var statearr_33763_33789 = state_33750__$1;
(statearr_33763_33789[(2)] = inst_33731);

(statearr_33763_33789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (14))){
var inst_33744 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33764_33790 = state_33750__$1;
(statearr_33764_33790[(2)] = inst_33744);

(statearr_33764_33790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (10))){
var state_33750__$1 = state_33750;
var statearr_33765_33791 = state_33750__$1;
(statearr_33765_33791[(2)] = fc);

(statearr_33765_33791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (8))){
var inst_33739 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
if(cljs.core.truth_(inst_33739)){
var statearr_33766_33792 = state_33750__$1;
(statearr_33766_33792[(1)] = (12));

} else {
var statearr_33767_33793 = state_33750__$1;
(statearr_33767_33793[(1)] = (13));

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
});})(c__25482__auto___33779,tc,fc))
;
return ((function (switch__25417__auto__,c__25482__auto___33779,tc,fc){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_33771 = [null,null,null,null,null,null,null,null,null];
(statearr_33771[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_33771[(1)] = (1));

return statearr_33771;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_33750){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33772){if((e33772 instanceof Object)){
var ex__25421__auto__ = e33772;
var statearr_33773_33794 = state_33750;
(statearr_33773_33794[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33795 = state_33750;
state_33750 = G__33795;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_33750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_33750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___33779,tc,fc))
})();
var state__25484__auto__ = (function (){var statearr_33774 = f__25483__auto__.call(null);
(statearr_33774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___33779);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___33779,tc,fc))
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
var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__){
return (function (state_33859){
var state_val_33860 = (state_33859[(1)]);
if((state_val_33860 === (7))){
var inst_33855 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33861_33882 = state_33859__$1;
(statearr_33861_33882[(2)] = inst_33855);

(statearr_33861_33882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (1))){
var inst_33839 = init;
var state_33859__$1 = (function (){var statearr_33862 = state_33859;
(statearr_33862[(7)] = inst_33839);

return statearr_33862;
})();
var statearr_33863_33883 = state_33859__$1;
(statearr_33863_33883[(2)] = null);

(statearr_33863_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (4))){
var inst_33842 = (state_33859[(8)]);
var inst_33842__$1 = (state_33859[(2)]);
var inst_33843 = (inst_33842__$1 == null);
var state_33859__$1 = (function (){var statearr_33864 = state_33859;
(statearr_33864[(8)] = inst_33842__$1);

return statearr_33864;
})();
if(cljs.core.truth_(inst_33843)){
var statearr_33865_33884 = state_33859__$1;
(statearr_33865_33884[(1)] = (5));

} else {
var statearr_33866_33885 = state_33859__$1;
(statearr_33866_33885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (6))){
var inst_33839 = (state_33859[(7)]);
var inst_33846 = (state_33859[(9)]);
var inst_33842 = (state_33859[(8)]);
var inst_33846__$1 = f.call(null,inst_33839,inst_33842);
var inst_33847 = cljs.core.reduced_QMARK_.call(null,inst_33846__$1);
var state_33859__$1 = (function (){var statearr_33867 = state_33859;
(statearr_33867[(9)] = inst_33846__$1);

return statearr_33867;
})();
if(inst_33847){
var statearr_33868_33886 = state_33859__$1;
(statearr_33868_33886[(1)] = (8));

} else {
var statearr_33869_33887 = state_33859__$1;
(statearr_33869_33887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (3))){
var inst_33857 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33859__$1,inst_33857);
} else {
if((state_val_33860 === (2))){
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33859__$1,(4),ch);
} else {
if((state_val_33860 === (9))){
var inst_33846 = (state_33859[(9)]);
var inst_33839 = inst_33846;
var state_33859__$1 = (function (){var statearr_33870 = state_33859;
(statearr_33870[(7)] = inst_33839);

return statearr_33870;
})();
var statearr_33871_33888 = state_33859__$1;
(statearr_33871_33888[(2)] = null);

(statearr_33871_33888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (5))){
var inst_33839 = (state_33859[(7)]);
var state_33859__$1 = state_33859;
var statearr_33872_33889 = state_33859__$1;
(statearr_33872_33889[(2)] = inst_33839);

(statearr_33872_33889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (10))){
var inst_33853 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33873_33890 = state_33859__$1;
(statearr_33873_33890[(2)] = inst_33853);

(statearr_33873_33890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (8))){
var inst_33846 = (state_33859[(9)]);
var inst_33849 = cljs.core.deref.call(null,inst_33846);
var state_33859__$1 = state_33859;
var statearr_33874_33891 = state_33859__$1;
(statearr_33874_33891[(2)] = inst_33849);

(statearr_33874_33891[(1)] = (10));


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
});})(c__25482__auto__))
;
return ((function (switch__25417__auto__,c__25482__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25418__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25418__auto____0 = (function (){
var statearr_33878 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33878[(0)] = cljs$core$async$reduce_$_state_machine__25418__auto__);

(statearr_33878[(1)] = (1));

return statearr_33878;
});
var cljs$core$async$reduce_$_state_machine__25418__auto____1 = (function (state_33859){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33879){if((e33879 instanceof Object)){
var ex__25421__auto__ = e33879;
var statearr_33880_33892 = state_33859;
(statearr_33880_33892[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33893 = state_33859;
state_33859 = G__33893;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25418__auto__ = function(state_33859){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25418__auto____1.call(this,state_33859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25418__auto____0;
cljs$core$async$reduce_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25418__auto____1;
return cljs$core$async$reduce_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__))
})();
var state__25484__auto__ = (function (){var statearr_33881 = f__25483__auto__.call(null);
(statearr_33881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_33881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__))
);

return c__25482__auto__;
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
var args33894 = [];
var len__19984__auto___33946 = arguments.length;
var i__19985__auto___33947 = (0);
while(true){
if((i__19985__auto___33947 < len__19984__auto___33946)){
args33894.push((arguments[i__19985__auto___33947]));

var G__33948 = (i__19985__auto___33947 + (1));
i__19985__auto___33947 = G__33948;
continue;
} else {
}
break;
}

var G__33896 = args33894.length;
switch (G__33896) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33894.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__){
return (function (state_33921){
var state_val_33922 = (state_33921[(1)]);
if((state_val_33922 === (7))){
var inst_33903 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33923_33950 = state_33921__$1;
(statearr_33923_33950[(2)] = inst_33903);

(statearr_33923_33950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (1))){
var inst_33897 = cljs.core.seq.call(null,coll);
var inst_33898 = inst_33897;
var state_33921__$1 = (function (){var statearr_33924 = state_33921;
(statearr_33924[(7)] = inst_33898);

return statearr_33924;
})();
var statearr_33925_33951 = state_33921__$1;
(statearr_33925_33951[(2)] = null);

(statearr_33925_33951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (4))){
var inst_33898 = (state_33921[(7)]);
var inst_33901 = cljs.core.first.call(null,inst_33898);
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33921__$1,(7),ch,inst_33901);
} else {
if((state_val_33922 === (13))){
var inst_33915 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33926_33952 = state_33921__$1;
(statearr_33926_33952[(2)] = inst_33915);

(statearr_33926_33952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (6))){
var inst_33906 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33906)){
var statearr_33927_33953 = state_33921__$1;
(statearr_33927_33953[(1)] = (8));

} else {
var statearr_33928_33954 = state_33921__$1;
(statearr_33928_33954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (3))){
var inst_33919 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33921__$1,inst_33919);
} else {
if((state_val_33922 === (12))){
var state_33921__$1 = state_33921;
var statearr_33929_33955 = state_33921__$1;
(statearr_33929_33955[(2)] = null);

(statearr_33929_33955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (2))){
var inst_33898 = (state_33921[(7)]);
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33898)){
var statearr_33930_33956 = state_33921__$1;
(statearr_33930_33956[(1)] = (4));

} else {
var statearr_33931_33957 = state_33921__$1;
(statearr_33931_33957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (11))){
var inst_33912 = cljs.core.async.close_BANG_.call(null,ch);
var state_33921__$1 = state_33921;
var statearr_33932_33958 = state_33921__$1;
(statearr_33932_33958[(2)] = inst_33912);

(statearr_33932_33958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (9))){
var state_33921__$1 = state_33921;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33933_33959 = state_33921__$1;
(statearr_33933_33959[(1)] = (11));

} else {
var statearr_33934_33960 = state_33921__$1;
(statearr_33934_33960[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (5))){
var inst_33898 = (state_33921[(7)]);
var state_33921__$1 = state_33921;
var statearr_33935_33961 = state_33921__$1;
(statearr_33935_33961[(2)] = inst_33898);

(statearr_33935_33961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (10))){
var inst_33917 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33936_33962 = state_33921__$1;
(statearr_33936_33962[(2)] = inst_33917);

(statearr_33936_33962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (8))){
var inst_33898 = (state_33921[(7)]);
var inst_33908 = cljs.core.next.call(null,inst_33898);
var inst_33898__$1 = inst_33908;
var state_33921__$1 = (function (){var statearr_33937 = state_33921;
(statearr_33937[(7)] = inst_33898__$1);

return statearr_33937;
})();
var statearr_33938_33963 = state_33921__$1;
(statearr_33938_33963[(2)] = null);

(statearr_33938_33963[(1)] = (2));


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
});})(c__25482__auto__))
;
return ((function (switch__25417__auto__,c__25482__auto__){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_33942 = [null,null,null,null,null,null,null,null];
(statearr_33942[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_33942[(1)] = (1));

return statearr_33942;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_33921){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_33921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e33943){if((e33943 instanceof Object)){
var ex__25421__auto__ = e33943;
var statearr_33944_33964 = state_33921;
(statearr_33944_33964[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33965 = state_33921;
state_33921 = G__33965;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_33921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_33921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__))
})();
var state__25484__auto__ = (function (){var statearr_33945 = f__25483__auto__.call(null);
(statearr_33945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_33945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__))
);

return c__25482__auto__;
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
var x__19539__auto__ = (((_ == null))?null:_);
var m__19540__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,_);
} else {
var m__19540__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,_);
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
var x__19539__auto__ = (((m == null))?null:m);
var m__19540__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19540__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19539__auto__ = (((m == null))?null:m);
var m__19540__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,m,ch);
} else {
var m__19540__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,m,ch);
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
var x__19539__auto__ = (((m == null))?null:m);
var m__19540__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,m);
} else {
var m__19540__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async34191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34191 = (function (ch,cs,meta34192){
this.ch = ch;
this.cs = cs;
this.meta34192 = meta34192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34193,meta34192__$1){
var self__ = this;
var _34193__$1 = this;
return (new cljs.core.async.t_cljs$core$async34191(self__.ch,self__.cs,meta34192__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34193){
var self__ = this;
var _34193__$1 = this;
return self__.meta34192;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34191";

cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async34191");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34191 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34191(ch__$1,cs__$1,meta34192){
return (new cljs.core.async.t_cljs$core$async34191(ch__$1,cs__$1,meta34192));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34191(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25482__auto___34416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___34416,cs,m,dchan,dctr,done){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___34416,cs,m,dchan,dctr,done){
return (function (state_34328){
var state_val_34329 = (state_34328[(1)]);
if((state_val_34329 === (7))){
var inst_34324 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34330_34417 = state_34328__$1;
(statearr_34330_34417[(2)] = inst_34324);

(statearr_34330_34417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (20))){
var inst_34227 = (state_34328[(7)]);
var inst_34239 = cljs.core.first.call(null,inst_34227);
var inst_34240 = cljs.core.nth.call(null,inst_34239,(0),null);
var inst_34241 = cljs.core.nth.call(null,inst_34239,(1),null);
var state_34328__$1 = (function (){var statearr_34331 = state_34328;
(statearr_34331[(8)] = inst_34240);

return statearr_34331;
})();
if(cljs.core.truth_(inst_34241)){
var statearr_34332_34418 = state_34328__$1;
(statearr_34332_34418[(1)] = (22));

} else {
var statearr_34333_34419 = state_34328__$1;
(statearr_34333_34419[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (27))){
var inst_34196 = (state_34328[(9)]);
var inst_34269 = (state_34328[(10)]);
var inst_34271 = (state_34328[(11)]);
var inst_34276 = (state_34328[(12)]);
var inst_34276__$1 = cljs.core._nth.call(null,inst_34269,inst_34271);
var inst_34277 = cljs.core.async.put_BANG_.call(null,inst_34276__$1,inst_34196,done);
var state_34328__$1 = (function (){var statearr_34334 = state_34328;
(statearr_34334[(12)] = inst_34276__$1);

return statearr_34334;
})();
if(cljs.core.truth_(inst_34277)){
var statearr_34335_34420 = state_34328__$1;
(statearr_34335_34420[(1)] = (30));

} else {
var statearr_34336_34421 = state_34328__$1;
(statearr_34336_34421[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (1))){
var state_34328__$1 = state_34328;
var statearr_34337_34422 = state_34328__$1;
(statearr_34337_34422[(2)] = null);

(statearr_34337_34422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (24))){
var inst_34227 = (state_34328[(7)]);
var inst_34246 = (state_34328[(2)]);
var inst_34247 = cljs.core.next.call(null,inst_34227);
var inst_34205 = inst_34247;
var inst_34206 = null;
var inst_34207 = (0);
var inst_34208 = (0);
var state_34328__$1 = (function (){var statearr_34338 = state_34328;
(statearr_34338[(13)] = inst_34205);

(statearr_34338[(14)] = inst_34207);

(statearr_34338[(15)] = inst_34206);

(statearr_34338[(16)] = inst_34208);

(statearr_34338[(17)] = inst_34246);

return statearr_34338;
})();
var statearr_34339_34423 = state_34328__$1;
(statearr_34339_34423[(2)] = null);

(statearr_34339_34423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (39))){
var state_34328__$1 = state_34328;
var statearr_34343_34424 = state_34328__$1;
(statearr_34343_34424[(2)] = null);

(statearr_34343_34424[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (4))){
var inst_34196 = (state_34328[(9)]);
var inst_34196__$1 = (state_34328[(2)]);
var inst_34197 = (inst_34196__$1 == null);
var state_34328__$1 = (function (){var statearr_34344 = state_34328;
(statearr_34344[(9)] = inst_34196__$1);

return statearr_34344;
})();
if(cljs.core.truth_(inst_34197)){
var statearr_34345_34425 = state_34328__$1;
(statearr_34345_34425[(1)] = (5));

} else {
var statearr_34346_34426 = state_34328__$1;
(statearr_34346_34426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (15))){
var inst_34205 = (state_34328[(13)]);
var inst_34207 = (state_34328[(14)]);
var inst_34206 = (state_34328[(15)]);
var inst_34208 = (state_34328[(16)]);
var inst_34223 = (state_34328[(2)]);
var inst_34224 = (inst_34208 + (1));
var tmp34340 = inst_34205;
var tmp34341 = inst_34207;
var tmp34342 = inst_34206;
var inst_34205__$1 = tmp34340;
var inst_34206__$1 = tmp34342;
var inst_34207__$1 = tmp34341;
var inst_34208__$1 = inst_34224;
var state_34328__$1 = (function (){var statearr_34347 = state_34328;
(statearr_34347[(18)] = inst_34223);

(statearr_34347[(13)] = inst_34205__$1);

(statearr_34347[(14)] = inst_34207__$1);

(statearr_34347[(15)] = inst_34206__$1);

(statearr_34347[(16)] = inst_34208__$1);

return statearr_34347;
})();
var statearr_34348_34427 = state_34328__$1;
(statearr_34348_34427[(2)] = null);

(statearr_34348_34427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (21))){
var inst_34250 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34352_34428 = state_34328__$1;
(statearr_34352_34428[(2)] = inst_34250);

(statearr_34352_34428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (31))){
var inst_34276 = (state_34328[(12)]);
var inst_34280 = done.call(null,null);
var inst_34281 = cljs.core.async.untap_STAR_.call(null,m,inst_34276);
var state_34328__$1 = (function (){var statearr_34353 = state_34328;
(statearr_34353[(19)] = inst_34280);

return statearr_34353;
})();
var statearr_34354_34429 = state_34328__$1;
(statearr_34354_34429[(2)] = inst_34281);

(statearr_34354_34429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (32))){
var inst_34269 = (state_34328[(10)]);
var inst_34271 = (state_34328[(11)]);
var inst_34268 = (state_34328[(20)]);
var inst_34270 = (state_34328[(21)]);
var inst_34283 = (state_34328[(2)]);
var inst_34284 = (inst_34271 + (1));
var tmp34349 = inst_34269;
var tmp34350 = inst_34268;
var tmp34351 = inst_34270;
var inst_34268__$1 = tmp34350;
var inst_34269__$1 = tmp34349;
var inst_34270__$1 = tmp34351;
var inst_34271__$1 = inst_34284;
var state_34328__$1 = (function (){var statearr_34355 = state_34328;
(statearr_34355[(10)] = inst_34269__$1);

(statearr_34355[(11)] = inst_34271__$1);

(statearr_34355[(20)] = inst_34268__$1);

(statearr_34355[(21)] = inst_34270__$1);

(statearr_34355[(22)] = inst_34283);

return statearr_34355;
})();
var statearr_34356_34430 = state_34328__$1;
(statearr_34356_34430[(2)] = null);

(statearr_34356_34430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (40))){
var inst_34296 = (state_34328[(23)]);
var inst_34300 = done.call(null,null);
var inst_34301 = cljs.core.async.untap_STAR_.call(null,m,inst_34296);
var state_34328__$1 = (function (){var statearr_34357 = state_34328;
(statearr_34357[(24)] = inst_34300);

return statearr_34357;
})();
var statearr_34358_34431 = state_34328__$1;
(statearr_34358_34431[(2)] = inst_34301);

(statearr_34358_34431[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (33))){
var inst_34287 = (state_34328[(25)]);
var inst_34289 = cljs.core.chunked_seq_QMARK_.call(null,inst_34287);
var state_34328__$1 = state_34328;
if(inst_34289){
var statearr_34359_34432 = state_34328__$1;
(statearr_34359_34432[(1)] = (36));

} else {
var statearr_34360_34433 = state_34328__$1;
(statearr_34360_34433[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (13))){
var inst_34217 = (state_34328[(26)]);
var inst_34220 = cljs.core.async.close_BANG_.call(null,inst_34217);
var state_34328__$1 = state_34328;
var statearr_34361_34434 = state_34328__$1;
(statearr_34361_34434[(2)] = inst_34220);

(statearr_34361_34434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (22))){
var inst_34240 = (state_34328[(8)]);
var inst_34243 = cljs.core.async.close_BANG_.call(null,inst_34240);
var state_34328__$1 = state_34328;
var statearr_34362_34435 = state_34328__$1;
(statearr_34362_34435[(2)] = inst_34243);

(statearr_34362_34435[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (36))){
var inst_34287 = (state_34328[(25)]);
var inst_34291 = cljs.core.chunk_first.call(null,inst_34287);
var inst_34292 = cljs.core.chunk_rest.call(null,inst_34287);
var inst_34293 = cljs.core.count.call(null,inst_34291);
var inst_34268 = inst_34292;
var inst_34269 = inst_34291;
var inst_34270 = inst_34293;
var inst_34271 = (0);
var state_34328__$1 = (function (){var statearr_34363 = state_34328;
(statearr_34363[(10)] = inst_34269);

(statearr_34363[(11)] = inst_34271);

(statearr_34363[(20)] = inst_34268);

(statearr_34363[(21)] = inst_34270);

return statearr_34363;
})();
var statearr_34364_34436 = state_34328__$1;
(statearr_34364_34436[(2)] = null);

(statearr_34364_34436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (41))){
var inst_34287 = (state_34328[(25)]);
var inst_34303 = (state_34328[(2)]);
var inst_34304 = cljs.core.next.call(null,inst_34287);
var inst_34268 = inst_34304;
var inst_34269 = null;
var inst_34270 = (0);
var inst_34271 = (0);
var state_34328__$1 = (function (){var statearr_34365 = state_34328;
(statearr_34365[(10)] = inst_34269);

(statearr_34365[(11)] = inst_34271);

(statearr_34365[(20)] = inst_34268);

(statearr_34365[(21)] = inst_34270);

(statearr_34365[(27)] = inst_34303);

return statearr_34365;
})();
var statearr_34366_34437 = state_34328__$1;
(statearr_34366_34437[(2)] = null);

(statearr_34366_34437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (43))){
var state_34328__$1 = state_34328;
var statearr_34367_34438 = state_34328__$1;
(statearr_34367_34438[(2)] = null);

(statearr_34367_34438[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (29))){
var inst_34312 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34368_34439 = state_34328__$1;
(statearr_34368_34439[(2)] = inst_34312);

(statearr_34368_34439[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (44))){
var inst_34321 = (state_34328[(2)]);
var state_34328__$1 = (function (){var statearr_34369 = state_34328;
(statearr_34369[(28)] = inst_34321);

return statearr_34369;
})();
var statearr_34370_34440 = state_34328__$1;
(statearr_34370_34440[(2)] = null);

(statearr_34370_34440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (6))){
var inst_34260 = (state_34328[(29)]);
var inst_34259 = cljs.core.deref.call(null,cs);
var inst_34260__$1 = cljs.core.keys.call(null,inst_34259);
var inst_34261 = cljs.core.count.call(null,inst_34260__$1);
var inst_34262 = cljs.core.reset_BANG_.call(null,dctr,inst_34261);
var inst_34267 = cljs.core.seq.call(null,inst_34260__$1);
var inst_34268 = inst_34267;
var inst_34269 = null;
var inst_34270 = (0);
var inst_34271 = (0);
var state_34328__$1 = (function (){var statearr_34371 = state_34328;
(statearr_34371[(10)] = inst_34269);

(statearr_34371[(11)] = inst_34271);

(statearr_34371[(20)] = inst_34268);

(statearr_34371[(21)] = inst_34270);

(statearr_34371[(30)] = inst_34262);

(statearr_34371[(29)] = inst_34260__$1);

return statearr_34371;
})();
var statearr_34372_34441 = state_34328__$1;
(statearr_34372_34441[(2)] = null);

(statearr_34372_34441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (28))){
var inst_34268 = (state_34328[(20)]);
var inst_34287 = (state_34328[(25)]);
var inst_34287__$1 = cljs.core.seq.call(null,inst_34268);
var state_34328__$1 = (function (){var statearr_34373 = state_34328;
(statearr_34373[(25)] = inst_34287__$1);

return statearr_34373;
})();
if(inst_34287__$1){
var statearr_34374_34442 = state_34328__$1;
(statearr_34374_34442[(1)] = (33));

} else {
var statearr_34375_34443 = state_34328__$1;
(statearr_34375_34443[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (25))){
var inst_34271 = (state_34328[(11)]);
var inst_34270 = (state_34328[(21)]);
var inst_34273 = (inst_34271 < inst_34270);
var inst_34274 = inst_34273;
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34274)){
var statearr_34376_34444 = state_34328__$1;
(statearr_34376_34444[(1)] = (27));

} else {
var statearr_34377_34445 = state_34328__$1;
(statearr_34377_34445[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (34))){
var state_34328__$1 = state_34328;
var statearr_34378_34446 = state_34328__$1;
(statearr_34378_34446[(2)] = null);

(statearr_34378_34446[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (17))){
var state_34328__$1 = state_34328;
var statearr_34379_34447 = state_34328__$1;
(statearr_34379_34447[(2)] = null);

(statearr_34379_34447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (3))){
var inst_34326 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34328__$1,inst_34326);
} else {
if((state_val_34329 === (12))){
var inst_34255 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34380_34448 = state_34328__$1;
(statearr_34380_34448[(2)] = inst_34255);

(statearr_34380_34448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (2))){
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34328__$1,(4),ch);
} else {
if((state_val_34329 === (23))){
var state_34328__$1 = state_34328;
var statearr_34381_34449 = state_34328__$1;
(statearr_34381_34449[(2)] = null);

(statearr_34381_34449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (35))){
var inst_34310 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34382_34450 = state_34328__$1;
(statearr_34382_34450[(2)] = inst_34310);

(statearr_34382_34450[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (19))){
var inst_34227 = (state_34328[(7)]);
var inst_34231 = cljs.core.chunk_first.call(null,inst_34227);
var inst_34232 = cljs.core.chunk_rest.call(null,inst_34227);
var inst_34233 = cljs.core.count.call(null,inst_34231);
var inst_34205 = inst_34232;
var inst_34206 = inst_34231;
var inst_34207 = inst_34233;
var inst_34208 = (0);
var state_34328__$1 = (function (){var statearr_34383 = state_34328;
(statearr_34383[(13)] = inst_34205);

(statearr_34383[(14)] = inst_34207);

(statearr_34383[(15)] = inst_34206);

(statearr_34383[(16)] = inst_34208);

return statearr_34383;
})();
var statearr_34384_34451 = state_34328__$1;
(statearr_34384_34451[(2)] = null);

(statearr_34384_34451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (11))){
var inst_34227 = (state_34328[(7)]);
var inst_34205 = (state_34328[(13)]);
var inst_34227__$1 = cljs.core.seq.call(null,inst_34205);
var state_34328__$1 = (function (){var statearr_34385 = state_34328;
(statearr_34385[(7)] = inst_34227__$1);

return statearr_34385;
})();
if(inst_34227__$1){
var statearr_34386_34452 = state_34328__$1;
(statearr_34386_34452[(1)] = (16));

} else {
var statearr_34387_34453 = state_34328__$1;
(statearr_34387_34453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (9))){
var inst_34257 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34388_34454 = state_34328__$1;
(statearr_34388_34454[(2)] = inst_34257);

(statearr_34388_34454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (5))){
var inst_34203 = cljs.core.deref.call(null,cs);
var inst_34204 = cljs.core.seq.call(null,inst_34203);
var inst_34205 = inst_34204;
var inst_34206 = null;
var inst_34207 = (0);
var inst_34208 = (0);
var state_34328__$1 = (function (){var statearr_34389 = state_34328;
(statearr_34389[(13)] = inst_34205);

(statearr_34389[(14)] = inst_34207);

(statearr_34389[(15)] = inst_34206);

(statearr_34389[(16)] = inst_34208);

return statearr_34389;
})();
var statearr_34390_34455 = state_34328__$1;
(statearr_34390_34455[(2)] = null);

(statearr_34390_34455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (14))){
var state_34328__$1 = state_34328;
var statearr_34391_34456 = state_34328__$1;
(statearr_34391_34456[(2)] = null);

(statearr_34391_34456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (45))){
var inst_34318 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34392_34457 = state_34328__$1;
(statearr_34392_34457[(2)] = inst_34318);

(statearr_34392_34457[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (26))){
var inst_34260 = (state_34328[(29)]);
var inst_34314 = (state_34328[(2)]);
var inst_34315 = cljs.core.seq.call(null,inst_34260);
var state_34328__$1 = (function (){var statearr_34393 = state_34328;
(statearr_34393[(31)] = inst_34314);

return statearr_34393;
})();
if(inst_34315){
var statearr_34394_34458 = state_34328__$1;
(statearr_34394_34458[(1)] = (42));

} else {
var statearr_34395_34459 = state_34328__$1;
(statearr_34395_34459[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (16))){
var inst_34227 = (state_34328[(7)]);
var inst_34229 = cljs.core.chunked_seq_QMARK_.call(null,inst_34227);
var state_34328__$1 = state_34328;
if(inst_34229){
var statearr_34396_34460 = state_34328__$1;
(statearr_34396_34460[(1)] = (19));

} else {
var statearr_34397_34461 = state_34328__$1;
(statearr_34397_34461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (38))){
var inst_34307 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34398_34462 = state_34328__$1;
(statearr_34398_34462[(2)] = inst_34307);

(statearr_34398_34462[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (30))){
var state_34328__$1 = state_34328;
var statearr_34399_34463 = state_34328__$1;
(statearr_34399_34463[(2)] = null);

(statearr_34399_34463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (10))){
var inst_34206 = (state_34328[(15)]);
var inst_34208 = (state_34328[(16)]);
var inst_34216 = cljs.core._nth.call(null,inst_34206,inst_34208);
var inst_34217 = cljs.core.nth.call(null,inst_34216,(0),null);
var inst_34218 = cljs.core.nth.call(null,inst_34216,(1),null);
var state_34328__$1 = (function (){var statearr_34400 = state_34328;
(statearr_34400[(26)] = inst_34217);

return statearr_34400;
})();
if(cljs.core.truth_(inst_34218)){
var statearr_34401_34464 = state_34328__$1;
(statearr_34401_34464[(1)] = (13));

} else {
var statearr_34402_34465 = state_34328__$1;
(statearr_34402_34465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (18))){
var inst_34253 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34403_34466 = state_34328__$1;
(statearr_34403_34466[(2)] = inst_34253);

(statearr_34403_34466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (42))){
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34328__$1,(45),dchan);
} else {
if((state_val_34329 === (37))){
var inst_34196 = (state_34328[(9)]);
var inst_34287 = (state_34328[(25)]);
var inst_34296 = (state_34328[(23)]);
var inst_34296__$1 = cljs.core.first.call(null,inst_34287);
var inst_34297 = cljs.core.async.put_BANG_.call(null,inst_34296__$1,inst_34196,done);
var state_34328__$1 = (function (){var statearr_34404 = state_34328;
(statearr_34404[(23)] = inst_34296__$1);

return statearr_34404;
})();
if(cljs.core.truth_(inst_34297)){
var statearr_34405_34467 = state_34328__$1;
(statearr_34405_34467[(1)] = (39));

} else {
var statearr_34406_34468 = state_34328__$1;
(statearr_34406_34468[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (8))){
var inst_34207 = (state_34328[(14)]);
var inst_34208 = (state_34328[(16)]);
var inst_34210 = (inst_34208 < inst_34207);
var inst_34211 = inst_34210;
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34211)){
var statearr_34407_34469 = state_34328__$1;
(statearr_34407_34469[(1)] = (10));

} else {
var statearr_34408_34470 = state_34328__$1;
(statearr_34408_34470[(1)] = (11));

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
});})(c__25482__auto___34416,cs,m,dchan,dctr,done))
;
return ((function (switch__25417__auto__,c__25482__auto___34416,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25418__auto__ = null;
var cljs$core$async$mult_$_state_machine__25418__auto____0 = (function (){
var statearr_34412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34412[(0)] = cljs$core$async$mult_$_state_machine__25418__auto__);

(statearr_34412[(1)] = (1));

return statearr_34412;
});
var cljs$core$async$mult_$_state_machine__25418__auto____1 = (function (state_34328){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_34328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e34413){if((e34413 instanceof Object)){
var ex__25421__auto__ = e34413;
var statearr_34414_34471 = state_34328;
(statearr_34414_34471[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34472 = state_34328;
state_34328 = G__34472;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25418__auto__ = function(state_34328){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25418__auto____1.call(this,state_34328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25418__auto____0;
cljs$core$async$mult_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25418__auto____1;
return cljs$core$async$mult_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___34416,cs,m,dchan,dctr,done))
})();
var state__25484__auto__ = (function (){var statearr_34415 = f__25483__auto__.call(null);
(statearr_34415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___34416);

return statearr_34415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___34416,cs,m,dchan,dctr,done))
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
var args34473 = [];
var len__19984__auto___34476 = arguments.length;
var i__19985__auto___34477 = (0);
while(true){
if((i__19985__auto___34477 < len__19984__auto___34476)){
args34473.push((arguments[i__19985__auto___34477]));

var G__34478 = (i__19985__auto___34477 + (1));
i__19985__auto___34477 = G__34478;
continue;
} else {
}
break;
}

var G__34475 = args34473.length;
switch (G__34475) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34473.length)].join('')));

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
var x__19539__auto__ = (((m == null))?null:m);
var m__19540__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,m,ch);
} else {
var m__19540__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,m,ch);
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
var x__19539__auto__ = (((m == null))?null:m);
var m__19540__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,m,ch);
} else {
var m__19540__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,m,ch);
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
var x__19539__auto__ = (((m == null))?null:m);
var m__19540__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,m);
} else {
var m__19540__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,m);
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
var x__19539__auto__ = (((m == null))?null:m);
var m__19540__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,m,state_map);
} else {
var m__19540__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,m,state_map);
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
var x__19539__auto__ = (((m == null))?null:m);
var m__19540__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,m,mode);
} else {
var m__19540__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19991__auto__ = [];
var len__19984__auto___34490 = arguments.length;
var i__19985__auto___34491 = (0);
while(true){
if((i__19985__auto___34491 < len__19984__auto___34490)){
args__19991__auto__.push((arguments[i__19985__auto___34491]));

var G__34492 = (i__19985__auto___34491 + (1));
i__19985__auto___34491 = G__34492;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((3) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19992__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34484){
var map__34485 = p__34484;
var map__34485__$1 = ((((!((map__34485 == null)))?((((map__34485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34485):map__34485);
var opts = map__34485__$1;
var statearr_34487_34493 = state;
(statearr_34487_34493[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34485,map__34485__$1,opts){
return (function (val){
var statearr_34488_34494 = state;
(statearr_34488_34494[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34485,map__34485__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34489_34495 = state;
(statearr_34489_34495[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34480){
var G__34481 = cljs.core.first.call(null,seq34480);
var seq34480__$1 = cljs.core.next.call(null,seq34480);
var G__34482 = cljs.core.first.call(null,seq34480__$1);
var seq34480__$2 = cljs.core.next.call(null,seq34480__$1);
var G__34483 = cljs.core.first.call(null,seq34480__$2);
var seq34480__$3 = cljs.core.next.call(null,seq34480__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34481,G__34482,G__34483,seq34480__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34663 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34664){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34664 = meta34664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34665,meta34664__$1){
var self__ = this;
var _34665__$1 = this;
return (new cljs.core.async.t_cljs$core$async34663(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34664__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34665){
var self__ = this;
var _34665__$1 = this;
return self__.meta34664;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34663.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34664","meta34664",2005834754,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34663";

cljs.core.async.t_cljs$core$async34663.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async34663");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34663 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34663(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34664){
return (new cljs.core.async.t_cljs$core$async34663(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34664));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34663(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25482__auto___34830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___34830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___34830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34767){
var state_val_34768 = (state_34767[(1)]);
if((state_val_34768 === (7))){
var inst_34682 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34769_34831 = state_34767__$1;
(statearr_34769_34831[(2)] = inst_34682);

(statearr_34769_34831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (20))){
var inst_34694 = (state_34767[(7)]);
var state_34767__$1 = state_34767;
var statearr_34770_34832 = state_34767__$1;
(statearr_34770_34832[(2)] = inst_34694);

(statearr_34770_34832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (27))){
var state_34767__$1 = state_34767;
var statearr_34771_34833 = state_34767__$1;
(statearr_34771_34833[(2)] = null);

(statearr_34771_34833[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (1))){
var inst_34669 = (state_34767[(8)]);
var inst_34669__$1 = calc_state.call(null);
var inst_34671 = (inst_34669__$1 == null);
var inst_34672 = cljs.core.not.call(null,inst_34671);
var state_34767__$1 = (function (){var statearr_34772 = state_34767;
(statearr_34772[(8)] = inst_34669__$1);

return statearr_34772;
})();
if(inst_34672){
var statearr_34773_34834 = state_34767__$1;
(statearr_34773_34834[(1)] = (2));

} else {
var statearr_34774_34835 = state_34767__$1;
(statearr_34774_34835[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (24))){
var inst_34727 = (state_34767[(9)]);
var inst_34718 = (state_34767[(10)]);
var inst_34741 = (state_34767[(11)]);
var inst_34741__$1 = inst_34718.call(null,inst_34727);
var state_34767__$1 = (function (){var statearr_34775 = state_34767;
(statearr_34775[(11)] = inst_34741__$1);

return statearr_34775;
})();
if(cljs.core.truth_(inst_34741__$1)){
var statearr_34776_34836 = state_34767__$1;
(statearr_34776_34836[(1)] = (29));

} else {
var statearr_34777_34837 = state_34767__$1;
(statearr_34777_34837[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (4))){
var inst_34685 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34685)){
var statearr_34778_34838 = state_34767__$1;
(statearr_34778_34838[(1)] = (8));

} else {
var statearr_34779_34839 = state_34767__$1;
(statearr_34779_34839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (15))){
var inst_34712 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34712)){
var statearr_34780_34840 = state_34767__$1;
(statearr_34780_34840[(1)] = (19));

} else {
var statearr_34781_34841 = state_34767__$1;
(statearr_34781_34841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (21))){
var inst_34717 = (state_34767[(12)]);
var inst_34717__$1 = (state_34767[(2)]);
var inst_34718 = cljs.core.get.call(null,inst_34717__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34719 = cljs.core.get.call(null,inst_34717__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34720 = cljs.core.get.call(null,inst_34717__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34767__$1 = (function (){var statearr_34782 = state_34767;
(statearr_34782[(10)] = inst_34718);

(statearr_34782[(12)] = inst_34717__$1);

(statearr_34782[(13)] = inst_34719);

return statearr_34782;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34767__$1,(22),inst_34720);
} else {
if((state_val_34768 === (31))){
var inst_34749 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34749)){
var statearr_34783_34842 = state_34767__$1;
(statearr_34783_34842[(1)] = (32));

} else {
var statearr_34784_34843 = state_34767__$1;
(statearr_34784_34843[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (32))){
var inst_34726 = (state_34767[(14)]);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34767__$1,(35),out,inst_34726);
} else {
if((state_val_34768 === (33))){
var inst_34717 = (state_34767[(12)]);
var inst_34694 = inst_34717;
var state_34767__$1 = (function (){var statearr_34785 = state_34767;
(statearr_34785[(7)] = inst_34694);

return statearr_34785;
})();
var statearr_34786_34844 = state_34767__$1;
(statearr_34786_34844[(2)] = null);

(statearr_34786_34844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (13))){
var inst_34694 = (state_34767[(7)]);
var inst_34701 = inst_34694.cljs$lang$protocol_mask$partition0$;
var inst_34702 = (inst_34701 & (64));
var inst_34703 = inst_34694.cljs$core$ISeq$;
var inst_34704 = (cljs.core.PROTOCOL_SENTINEL === inst_34703);
var inst_34705 = (inst_34702) || (inst_34704);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34705)){
var statearr_34787_34845 = state_34767__$1;
(statearr_34787_34845[(1)] = (16));

} else {
var statearr_34788_34846 = state_34767__$1;
(statearr_34788_34846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (22))){
var inst_34727 = (state_34767[(9)]);
var inst_34726 = (state_34767[(14)]);
var inst_34725 = (state_34767[(2)]);
var inst_34726__$1 = cljs.core.nth.call(null,inst_34725,(0),null);
var inst_34727__$1 = cljs.core.nth.call(null,inst_34725,(1),null);
var inst_34728 = (inst_34726__$1 == null);
var inst_34729 = cljs.core._EQ_.call(null,inst_34727__$1,change);
var inst_34730 = (inst_34728) || (inst_34729);
var state_34767__$1 = (function (){var statearr_34789 = state_34767;
(statearr_34789[(9)] = inst_34727__$1);

(statearr_34789[(14)] = inst_34726__$1);

return statearr_34789;
})();
if(cljs.core.truth_(inst_34730)){
var statearr_34790_34847 = state_34767__$1;
(statearr_34790_34847[(1)] = (23));

} else {
var statearr_34791_34848 = state_34767__$1;
(statearr_34791_34848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (36))){
var inst_34717 = (state_34767[(12)]);
var inst_34694 = inst_34717;
var state_34767__$1 = (function (){var statearr_34792 = state_34767;
(statearr_34792[(7)] = inst_34694);

return statearr_34792;
})();
var statearr_34793_34849 = state_34767__$1;
(statearr_34793_34849[(2)] = null);

(statearr_34793_34849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (29))){
var inst_34741 = (state_34767[(11)]);
var state_34767__$1 = state_34767;
var statearr_34794_34850 = state_34767__$1;
(statearr_34794_34850[(2)] = inst_34741);

(statearr_34794_34850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (6))){
var state_34767__$1 = state_34767;
var statearr_34795_34851 = state_34767__$1;
(statearr_34795_34851[(2)] = false);

(statearr_34795_34851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (28))){
var inst_34737 = (state_34767[(2)]);
var inst_34738 = calc_state.call(null);
var inst_34694 = inst_34738;
var state_34767__$1 = (function (){var statearr_34796 = state_34767;
(statearr_34796[(15)] = inst_34737);

(statearr_34796[(7)] = inst_34694);

return statearr_34796;
})();
var statearr_34797_34852 = state_34767__$1;
(statearr_34797_34852[(2)] = null);

(statearr_34797_34852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (25))){
var inst_34763 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34798_34853 = state_34767__$1;
(statearr_34798_34853[(2)] = inst_34763);

(statearr_34798_34853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (34))){
var inst_34761 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34799_34854 = state_34767__$1;
(statearr_34799_34854[(2)] = inst_34761);

(statearr_34799_34854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (17))){
var state_34767__$1 = state_34767;
var statearr_34800_34855 = state_34767__$1;
(statearr_34800_34855[(2)] = false);

(statearr_34800_34855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (3))){
var state_34767__$1 = state_34767;
var statearr_34801_34856 = state_34767__$1;
(statearr_34801_34856[(2)] = false);

(statearr_34801_34856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (12))){
var inst_34765 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34767__$1,inst_34765);
} else {
if((state_val_34768 === (2))){
var inst_34669 = (state_34767[(8)]);
var inst_34674 = inst_34669.cljs$lang$protocol_mask$partition0$;
var inst_34675 = (inst_34674 & (64));
var inst_34676 = inst_34669.cljs$core$ISeq$;
var inst_34677 = (cljs.core.PROTOCOL_SENTINEL === inst_34676);
var inst_34678 = (inst_34675) || (inst_34677);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34678)){
var statearr_34802_34857 = state_34767__$1;
(statearr_34802_34857[(1)] = (5));

} else {
var statearr_34803_34858 = state_34767__$1;
(statearr_34803_34858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (23))){
var inst_34726 = (state_34767[(14)]);
var inst_34732 = (inst_34726 == null);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34732)){
var statearr_34804_34859 = state_34767__$1;
(statearr_34804_34859[(1)] = (26));

} else {
var statearr_34805_34860 = state_34767__$1;
(statearr_34805_34860[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (35))){
var inst_34752 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34752)){
var statearr_34806_34861 = state_34767__$1;
(statearr_34806_34861[(1)] = (36));

} else {
var statearr_34807_34862 = state_34767__$1;
(statearr_34807_34862[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (19))){
var inst_34694 = (state_34767[(7)]);
var inst_34714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34694);
var state_34767__$1 = state_34767;
var statearr_34808_34863 = state_34767__$1;
(statearr_34808_34863[(2)] = inst_34714);

(statearr_34808_34863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (11))){
var inst_34694 = (state_34767[(7)]);
var inst_34698 = (inst_34694 == null);
var inst_34699 = cljs.core.not.call(null,inst_34698);
var state_34767__$1 = state_34767;
if(inst_34699){
var statearr_34809_34864 = state_34767__$1;
(statearr_34809_34864[(1)] = (13));

} else {
var statearr_34810_34865 = state_34767__$1;
(statearr_34810_34865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (9))){
var inst_34669 = (state_34767[(8)]);
var state_34767__$1 = state_34767;
var statearr_34811_34866 = state_34767__$1;
(statearr_34811_34866[(2)] = inst_34669);

(statearr_34811_34866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (5))){
var state_34767__$1 = state_34767;
var statearr_34812_34867 = state_34767__$1;
(statearr_34812_34867[(2)] = true);

(statearr_34812_34867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (14))){
var state_34767__$1 = state_34767;
var statearr_34813_34868 = state_34767__$1;
(statearr_34813_34868[(2)] = false);

(statearr_34813_34868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (26))){
var inst_34727 = (state_34767[(9)]);
var inst_34734 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34727);
var state_34767__$1 = state_34767;
var statearr_34814_34869 = state_34767__$1;
(statearr_34814_34869[(2)] = inst_34734);

(statearr_34814_34869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (16))){
var state_34767__$1 = state_34767;
var statearr_34815_34870 = state_34767__$1;
(statearr_34815_34870[(2)] = true);

(statearr_34815_34870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (38))){
var inst_34757 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34816_34871 = state_34767__$1;
(statearr_34816_34871[(2)] = inst_34757);

(statearr_34816_34871[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (30))){
var inst_34727 = (state_34767[(9)]);
var inst_34718 = (state_34767[(10)]);
var inst_34719 = (state_34767[(13)]);
var inst_34744 = cljs.core.empty_QMARK_.call(null,inst_34718);
var inst_34745 = inst_34719.call(null,inst_34727);
var inst_34746 = cljs.core.not.call(null,inst_34745);
var inst_34747 = (inst_34744) && (inst_34746);
var state_34767__$1 = state_34767;
var statearr_34817_34872 = state_34767__$1;
(statearr_34817_34872[(2)] = inst_34747);

(statearr_34817_34872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (10))){
var inst_34669 = (state_34767[(8)]);
var inst_34690 = (state_34767[(2)]);
var inst_34691 = cljs.core.get.call(null,inst_34690,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34692 = cljs.core.get.call(null,inst_34690,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34693 = cljs.core.get.call(null,inst_34690,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34694 = inst_34669;
var state_34767__$1 = (function (){var statearr_34818 = state_34767;
(statearr_34818[(16)] = inst_34693);

(statearr_34818[(7)] = inst_34694);

(statearr_34818[(17)] = inst_34692);

(statearr_34818[(18)] = inst_34691);

return statearr_34818;
})();
var statearr_34819_34873 = state_34767__$1;
(statearr_34819_34873[(2)] = null);

(statearr_34819_34873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (18))){
var inst_34709 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34820_34874 = state_34767__$1;
(statearr_34820_34874[(2)] = inst_34709);

(statearr_34820_34874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (37))){
var state_34767__$1 = state_34767;
var statearr_34821_34875 = state_34767__$1;
(statearr_34821_34875[(2)] = null);

(statearr_34821_34875[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (8))){
var inst_34669 = (state_34767[(8)]);
var inst_34687 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34669);
var state_34767__$1 = state_34767;
var statearr_34822_34876 = state_34767__$1;
(statearr_34822_34876[(2)] = inst_34687);

(statearr_34822_34876[(1)] = (10));


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
});})(c__25482__auto___34830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25417__auto__,c__25482__auto___34830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25418__auto__ = null;
var cljs$core$async$mix_$_state_machine__25418__auto____0 = (function (){
var statearr_34826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34826[(0)] = cljs$core$async$mix_$_state_machine__25418__auto__);

(statearr_34826[(1)] = (1));

return statearr_34826;
});
var cljs$core$async$mix_$_state_machine__25418__auto____1 = (function (state_34767){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_34767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e34827){if((e34827 instanceof Object)){
var ex__25421__auto__ = e34827;
var statearr_34828_34877 = state_34767;
(statearr_34828_34877[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34878 = state_34767;
state_34767 = G__34878;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25418__auto__ = function(state_34767){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25418__auto____1.call(this,state_34767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25418__auto____0;
cljs$core$async$mix_$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25418__auto____1;
return cljs$core$async$mix_$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___34830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25484__auto__ = (function (){var statearr_34829 = f__25483__auto__.call(null);
(statearr_34829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___34830);

return statearr_34829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___34830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19539__auto__ = (((p == null))?null:p);
var m__19540__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19540__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19539__auto__ = (((p == null))?null:p);
var m__19540__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,p,v,ch);
} else {
var m__19540__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34879 = [];
var len__19984__auto___34882 = arguments.length;
var i__19985__auto___34883 = (0);
while(true){
if((i__19985__auto___34883 < len__19984__auto___34882)){
args34879.push((arguments[i__19985__auto___34883]));

var G__34884 = (i__19985__auto___34883 + (1));
i__19985__auto___34883 = G__34884;
continue;
} else {
}
break;
}

var G__34881 = args34879.length;
switch (G__34881) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34879.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19539__auto__ = (((p == null))?null:p);
var m__19540__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,p);
} else {
var m__19540__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,p);
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
var x__19539__auto__ = (((p == null))?null:p);
var m__19540__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19539__auto__)]);
if(!((m__19540__auto__ == null))){
return m__19540__auto__.call(null,p,v);
} else {
var m__19540__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19540__auto____$1 == null))){
return m__19540__auto____$1.call(null,p,v);
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
var args34887 = [];
var len__19984__auto___35012 = arguments.length;
var i__19985__auto___35013 = (0);
while(true){
if((i__19985__auto___35013 < len__19984__auto___35012)){
args34887.push((arguments[i__19985__auto___35013]));

var G__35014 = (i__19985__auto___35013 + (1));
i__19985__auto___35013 = G__35014;
continue;
} else {
}
break;
}

var G__34889 = args34887.length;
switch (G__34889) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34887.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18876__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18876__auto__)){
return or__18876__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18876__auto__,mults){
return (function (p1__34886_SHARP_){
if(cljs.core.truth_(p1__34886_SHARP_.call(null,topic))){
return p1__34886_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34886_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18876__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34890 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34891){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34891 = meta34891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34892,meta34891__$1){
var self__ = this;
var _34892__$1 = this;
return (new cljs.core.async.t_cljs$core$async34890(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34891__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34892){
var self__ = this;
var _34892__$1 = this;
return self__.meta34891;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34890.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34891","meta34891",457539600,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34890";

cljs.core.async.t_cljs$core$async34890.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async34890");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34890 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34891){
return (new cljs.core.async.t_cljs$core$async34890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34891));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34890(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25482__auto___35016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___35016,mults,ensure_mult,p){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___35016,mults,ensure_mult,p){
return (function (state_34964){
var state_val_34965 = (state_34964[(1)]);
if((state_val_34965 === (7))){
var inst_34960 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
var statearr_34966_35017 = state_34964__$1;
(statearr_34966_35017[(2)] = inst_34960);

(statearr_34966_35017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (20))){
var state_34964__$1 = state_34964;
var statearr_34967_35018 = state_34964__$1;
(statearr_34967_35018[(2)] = null);

(statearr_34967_35018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (1))){
var state_34964__$1 = state_34964;
var statearr_34968_35019 = state_34964__$1;
(statearr_34968_35019[(2)] = null);

(statearr_34968_35019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (24))){
var inst_34943 = (state_34964[(7)]);
var inst_34952 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34943);
var state_34964__$1 = state_34964;
var statearr_34969_35020 = state_34964__$1;
(statearr_34969_35020[(2)] = inst_34952);

(statearr_34969_35020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (4))){
var inst_34895 = (state_34964[(8)]);
var inst_34895__$1 = (state_34964[(2)]);
var inst_34896 = (inst_34895__$1 == null);
var state_34964__$1 = (function (){var statearr_34970 = state_34964;
(statearr_34970[(8)] = inst_34895__$1);

return statearr_34970;
})();
if(cljs.core.truth_(inst_34896)){
var statearr_34971_35021 = state_34964__$1;
(statearr_34971_35021[(1)] = (5));

} else {
var statearr_34972_35022 = state_34964__$1;
(statearr_34972_35022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (15))){
var inst_34937 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
var statearr_34973_35023 = state_34964__$1;
(statearr_34973_35023[(2)] = inst_34937);

(statearr_34973_35023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (21))){
var inst_34957 = (state_34964[(2)]);
var state_34964__$1 = (function (){var statearr_34974 = state_34964;
(statearr_34974[(9)] = inst_34957);

return statearr_34974;
})();
var statearr_34975_35024 = state_34964__$1;
(statearr_34975_35024[(2)] = null);

(statearr_34975_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (13))){
var inst_34919 = (state_34964[(10)]);
var inst_34921 = cljs.core.chunked_seq_QMARK_.call(null,inst_34919);
var state_34964__$1 = state_34964;
if(inst_34921){
var statearr_34976_35025 = state_34964__$1;
(statearr_34976_35025[(1)] = (16));

} else {
var statearr_34977_35026 = state_34964__$1;
(statearr_34977_35026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (22))){
var inst_34949 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
if(cljs.core.truth_(inst_34949)){
var statearr_34978_35027 = state_34964__$1;
(statearr_34978_35027[(1)] = (23));

} else {
var statearr_34979_35028 = state_34964__$1;
(statearr_34979_35028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (6))){
var inst_34895 = (state_34964[(8)]);
var inst_34945 = (state_34964[(11)]);
var inst_34943 = (state_34964[(7)]);
var inst_34943__$1 = topic_fn.call(null,inst_34895);
var inst_34944 = cljs.core.deref.call(null,mults);
var inst_34945__$1 = cljs.core.get.call(null,inst_34944,inst_34943__$1);
var state_34964__$1 = (function (){var statearr_34980 = state_34964;
(statearr_34980[(11)] = inst_34945__$1);

(statearr_34980[(7)] = inst_34943__$1);

return statearr_34980;
})();
if(cljs.core.truth_(inst_34945__$1)){
var statearr_34981_35029 = state_34964__$1;
(statearr_34981_35029[(1)] = (19));

} else {
var statearr_34982_35030 = state_34964__$1;
(statearr_34982_35030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (25))){
var inst_34954 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
var statearr_34983_35031 = state_34964__$1;
(statearr_34983_35031[(2)] = inst_34954);

(statearr_34983_35031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (17))){
var inst_34919 = (state_34964[(10)]);
var inst_34928 = cljs.core.first.call(null,inst_34919);
var inst_34929 = cljs.core.async.muxch_STAR_.call(null,inst_34928);
var inst_34930 = cljs.core.async.close_BANG_.call(null,inst_34929);
var inst_34931 = cljs.core.next.call(null,inst_34919);
var inst_34905 = inst_34931;
var inst_34906 = null;
var inst_34907 = (0);
var inst_34908 = (0);
var state_34964__$1 = (function (){var statearr_34984 = state_34964;
(statearr_34984[(12)] = inst_34905);

(statearr_34984[(13)] = inst_34906);

(statearr_34984[(14)] = inst_34930);

(statearr_34984[(15)] = inst_34907);

(statearr_34984[(16)] = inst_34908);

return statearr_34984;
})();
var statearr_34985_35032 = state_34964__$1;
(statearr_34985_35032[(2)] = null);

(statearr_34985_35032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (3))){
var inst_34962 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34964__$1,inst_34962);
} else {
if((state_val_34965 === (12))){
var inst_34939 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
var statearr_34986_35033 = state_34964__$1;
(statearr_34986_35033[(2)] = inst_34939);

(statearr_34986_35033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (2))){
var state_34964__$1 = state_34964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34964__$1,(4),ch);
} else {
if((state_val_34965 === (23))){
var state_34964__$1 = state_34964;
var statearr_34987_35034 = state_34964__$1;
(statearr_34987_35034[(2)] = null);

(statearr_34987_35034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (19))){
var inst_34895 = (state_34964[(8)]);
var inst_34945 = (state_34964[(11)]);
var inst_34947 = cljs.core.async.muxch_STAR_.call(null,inst_34945);
var state_34964__$1 = state_34964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34964__$1,(22),inst_34947,inst_34895);
} else {
if((state_val_34965 === (11))){
var inst_34905 = (state_34964[(12)]);
var inst_34919 = (state_34964[(10)]);
var inst_34919__$1 = cljs.core.seq.call(null,inst_34905);
var state_34964__$1 = (function (){var statearr_34988 = state_34964;
(statearr_34988[(10)] = inst_34919__$1);

return statearr_34988;
})();
if(inst_34919__$1){
var statearr_34989_35035 = state_34964__$1;
(statearr_34989_35035[(1)] = (13));

} else {
var statearr_34990_35036 = state_34964__$1;
(statearr_34990_35036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (9))){
var inst_34941 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
var statearr_34991_35037 = state_34964__$1;
(statearr_34991_35037[(2)] = inst_34941);

(statearr_34991_35037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (5))){
var inst_34902 = cljs.core.deref.call(null,mults);
var inst_34903 = cljs.core.vals.call(null,inst_34902);
var inst_34904 = cljs.core.seq.call(null,inst_34903);
var inst_34905 = inst_34904;
var inst_34906 = null;
var inst_34907 = (0);
var inst_34908 = (0);
var state_34964__$1 = (function (){var statearr_34992 = state_34964;
(statearr_34992[(12)] = inst_34905);

(statearr_34992[(13)] = inst_34906);

(statearr_34992[(15)] = inst_34907);

(statearr_34992[(16)] = inst_34908);

return statearr_34992;
})();
var statearr_34993_35038 = state_34964__$1;
(statearr_34993_35038[(2)] = null);

(statearr_34993_35038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (14))){
var state_34964__$1 = state_34964;
var statearr_34997_35039 = state_34964__$1;
(statearr_34997_35039[(2)] = null);

(statearr_34997_35039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (16))){
var inst_34919 = (state_34964[(10)]);
var inst_34923 = cljs.core.chunk_first.call(null,inst_34919);
var inst_34924 = cljs.core.chunk_rest.call(null,inst_34919);
var inst_34925 = cljs.core.count.call(null,inst_34923);
var inst_34905 = inst_34924;
var inst_34906 = inst_34923;
var inst_34907 = inst_34925;
var inst_34908 = (0);
var state_34964__$1 = (function (){var statearr_34998 = state_34964;
(statearr_34998[(12)] = inst_34905);

(statearr_34998[(13)] = inst_34906);

(statearr_34998[(15)] = inst_34907);

(statearr_34998[(16)] = inst_34908);

return statearr_34998;
})();
var statearr_34999_35040 = state_34964__$1;
(statearr_34999_35040[(2)] = null);

(statearr_34999_35040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (10))){
var inst_34905 = (state_34964[(12)]);
var inst_34906 = (state_34964[(13)]);
var inst_34907 = (state_34964[(15)]);
var inst_34908 = (state_34964[(16)]);
var inst_34913 = cljs.core._nth.call(null,inst_34906,inst_34908);
var inst_34914 = cljs.core.async.muxch_STAR_.call(null,inst_34913);
var inst_34915 = cljs.core.async.close_BANG_.call(null,inst_34914);
var inst_34916 = (inst_34908 + (1));
var tmp34994 = inst_34905;
var tmp34995 = inst_34906;
var tmp34996 = inst_34907;
var inst_34905__$1 = tmp34994;
var inst_34906__$1 = tmp34995;
var inst_34907__$1 = tmp34996;
var inst_34908__$1 = inst_34916;
var state_34964__$1 = (function (){var statearr_35000 = state_34964;
(statearr_35000[(12)] = inst_34905__$1);

(statearr_35000[(13)] = inst_34906__$1);

(statearr_35000[(15)] = inst_34907__$1);

(statearr_35000[(17)] = inst_34915);

(statearr_35000[(16)] = inst_34908__$1);

return statearr_35000;
})();
var statearr_35001_35041 = state_34964__$1;
(statearr_35001_35041[(2)] = null);

(statearr_35001_35041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (18))){
var inst_34934 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
var statearr_35002_35042 = state_34964__$1;
(statearr_35002_35042[(2)] = inst_34934);

(statearr_35002_35042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (8))){
var inst_34907 = (state_34964[(15)]);
var inst_34908 = (state_34964[(16)]);
var inst_34910 = (inst_34908 < inst_34907);
var inst_34911 = inst_34910;
var state_34964__$1 = state_34964;
if(cljs.core.truth_(inst_34911)){
var statearr_35003_35043 = state_34964__$1;
(statearr_35003_35043[(1)] = (10));

} else {
var statearr_35004_35044 = state_34964__$1;
(statearr_35004_35044[(1)] = (11));

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
});})(c__25482__auto___35016,mults,ensure_mult,p))
;
return ((function (switch__25417__auto__,c__25482__auto___35016,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_35008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35008[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_35008[(1)] = (1));

return statearr_35008;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_34964){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_34964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35009){if((e35009 instanceof Object)){
var ex__25421__auto__ = e35009;
var statearr_35010_35045 = state_34964;
(statearr_35010_35045[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35046 = state_34964;
state_34964 = G__35046;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_34964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_34964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___35016,mults,ensure_mult,p))
})();
var state__25484__auto__ = (function (){var statearr_35011 = f__25483__auto__.call(null);
(statearr_35011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___35016);

return statearr_35011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___35016,mults,ensure_mult,p))
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
var args35047 = [];
var len__19984__auto___35050 = arguments.length;
var i__19985__auto___35051 = (0);
while(true){
if((i__19985__auto___35051 < len__19984__auto___35050)){
args35047.push((arguments[i__19985__auto___35051]));

var G__35052 = (i__19985__auto___35051 + (1));
i__19985__auto___35051 = G__35052;
continue;
} else {
}
break;
}

var G__35049 = args35047.length;
switch (G__35049) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35047.length)].join('')));

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
var args35054 = [];
var len__19984__auto___35057 = arguments.length;
var i__19985__auto___35058 = (0);
while(true){
if((i__19985__auto___35058 < len__19984__auto___35057)){
args35054.push((arguments[i__19985__auto___35058]));

var G__35059 = (i__19985__auto___35058 + (1));
i__19985__auto___35058 = G__35059;
continue;
} else {
}
break;
}

var G__35056 = args35054.length;
switch (G__35056) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35054.length)].join('')));

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
var args35061 = [];
var len__19984__auto___35132 = arguments.length;
var i__19985__auto___35133 = (0);
while(true){
if((i__19985__auto___35133 < len__19984__auto___35132)){
args35061.push((arguments[i__19985__auto___35133]));

var G__35134 = (i__19985__auto___35133 + (1));
i__19985__auto___35133 = G__35134;
continue;
} else {
}
break;
}

var G__35063 = args35061.length;
switch (G__35063) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35061.length)].join('')));

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
var c__25482__auto___35136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___35136,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___35136,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35102){
var state_val_35103 = (state_35102[(1)]);
if((state_val_35103 === (7))){
var state_35102__$1 = state_35102;
var statearr_35104_35137 = state_35102__$1;
(statearr_35104_35137[(2)] = null);

(statearr_35104_35137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (1))){
var state_35102__$1 = state_35102;
var statearr_35105_35138 = state_35102__$1;
(statearr_35105_35138[(2)] = null);

(statearr_35105_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (4))){
var inst_35066 = (state_35102[(7)]);
var inst_35068 = (inst_35066 < cnt);
var state_35102__$1 = state_35102;
if(cljs.core.truth_(inst_35068)){
var statearr_35106_35139 = state_35102__$1;
(statearr_35106_35139[(1)] = (6));

} else {
var statearr_35107_35140 = state_35102__$1;
(statearr_35107_35140[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (15))){
var inst_35098 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
var statearr_35108_35141 = state_35102__$1;
(statearr_35108_35141[(2)] = inst_35098);

(statearr_35108_35141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (13))){
var inst_35091 = cljs.core.async.close_BANG_.call(null,out);
var state_35102__$1 = state_35102;
var statearr_35109_35142 = state_35102__$1;
(statearr_35109_35142[(2)] = inst_35091);

(statearr_35109_35142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (6))){
var state_35102__$1 = state_35102;
var statearr_35110_35143 = state_35102__$1;
(statearr_35110_35143[(2)] = null);

(statearr_35110_35143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (3))){
var inst_35100 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35102__$1,inst_35100);
} else {
if((state_val_35103 === (12))){
var inst_35088 = (state_35102[(8)]);
var inst_35088__$1 = (state_35102[(2)]);
var inst_35089 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35088__$1);
var state_35102__$1 = (function (){var statearr_35111 = state_35102;
(statearr_35111[(8)] = inst_35088__$1);

return statearr_35111;
})();
if(cljs.core.truth_(inst_35089)){
var statearr_35112_35144 = state_35102__$1;
(statearr_35112_35144[(1)] = (13));

} else {
var statearr_35113_35145 = state_35102__$1;
(statearr_35113_35145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (2))){
var inst_35065 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35066 = (0);
var state_35102__$1 = (function (){var statearr_35114 = state_35102;
(statearr_35114[(9)] = inst_35065);

(statearr_35114[(7)] = inst_35066);

return statearr_35114;
})();
var statearr_35115_35146 = state_35102__$1;
(statearr_35115_35146[(2)] = null);

(statearr_35115_35146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (11))){
var inst_35066 = (state_35102[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35102,(10),Object,null,(9));
var inst_35075 = chs__$1.call(null,inst_35066);
var inst_35076 = done.call(null,inst_35066);
var inst_35077 = cljs.core.async.take_BANG_.call(null,inst_35075,inst_35076);
var state_35102__$1 = state_35102;
var statearr_35116_35147 = state_35102__$1;
(statearr_35116_35147[(2)] = inst_35077);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (9))){
var inst_35066 = (state_35102[(7)]);
var inst_35079 = (state_35102[(2)]);
var inst_35080 = (inst_35066 + (1));
var inst_35066__$1 = inst_35080;
var state_35102__$1 = (function (){var statearr_35117 = state_35102;
(statearr_35117[(10)] = inst_35079);

(statearr_35117[(7)] = inst_35066__$1);

return statearr_35117;
})();
var statearr_35118_35148 = state_35102__$1;
(statearr_35118_35148[(2)] = null);

(statearr_35118_35148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (5))){
var inst_35086 = (state_35102[(2)]);
var state_35102__$1 = (function (){var statearr_35119 = state_35102;
(statearr_35119[(11)] = inst_35086);

return statearr_35119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35102__$1,(12),dchan);
} else {
if((state_val_35103 === (14))){
var inst_35088 = (state_35102[(8)]);
var inst_35093 = cljs.core.apply.call(null,f,inst_35088);
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35102__$1,(16),out,inst_35093);
} else {
if((state_val_35103 === (16))){
var inst_35095 = (state_35102[(2)]);
var state_35102__$1 = (function (){var statearr_35120 = state_35102;
(statearr_35120[(12)] = inst_35095);

return statearr_35120;
})();
var statearr_35121_35149 = state_35102__$1;
(statearr_35121_35149[(2)] = null);

(statearr_35121_35149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (10))){
var inst_35070 = (state_35102[(2)]);
var inst_35071 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35102__$1 = (function (){var statearr_35122 = state_35102;
(statearr_35122[(13)] = inst_35070);

return statearr_35122;
})();
var statearr_35123_35150 = state_35102__$1;
(statearr_35123_35150[(2)] = inst_35071);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (8))){
var inst_35084 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
var statearr_35124_35151 = state_35102__$1;
(statearr_35124_35151[(2)] = inst_35084);

(statearr_35124_35151[(1)] = (5));


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
});})(c__25482__auto___35136,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25417__auto__,c__25482__auto___35136,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_35128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35128[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_35128[(1)] = (1));

return statearr_35128;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_35102){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_35102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35129){if((e35129 instanceof Object)){
var ex__25421__auto__ = e35129;
var statearr_35130_35152 = state_35102;
(statearr_35130_35152[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35153 = state_35102;
state_35102 = G__35153;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_35102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_35102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___35136,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25484__auto__ = (function (){var statearr_35131 = f__25483__auto__.call(null);
(statearr_35131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___35136);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___35136,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args35155 = [];
var len__19984__auto___35213 = arguments.length;
var i__19985__auto___35214 = (0);
while(true){
if((i__19985__auto___35214 < len__19984__auto___35213)){
args35155.push((arguments[i__19985__auto___35214]));

var G__35215 = (i__19985__auto___35214 + (1));
i__19985__auto___35214 = G__35215;
continue;
} else {
}
break;
}

var G__35157 = args35155.length;
switch (G__35157) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35155.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25482__auto___35217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___35217,out){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___35217,out){
return (function (state_35189){
var state_val_35190 = (state_35189[(1)]);
if((state_val_35190 === (7))){
var inst_35168 = (state_35189[(7)]);
var inst_35169 = (state_35189[(8)]);
var inst_35168__$1 = (state_35189[(2)]);
var inst_35169__$1 = cljs.core.nth.call(null,inst_35168__$1,(0),null);
var inst_35170 = cljs.core.nth.call(null,inst_35168__$1,(1),null);
var inst_35171 = (inst_35169__$1 == null);
var state_35189__$1 = (function (){var statearr_35191 = state_35189;
(statearr_35191[(9)] = inst_35170);

(statearr_35191[(7)] = inst_35168__$1);

(statearr_35191[(8)] = inst_35169__$1);

return statearr_35191;
})();
if(cljs.core.truth_(inst_35171)){
var statearr_35192_35218 = state_35189__$1;
(statearr_35192_35218[(1)] = (8));

} else {
var statearr_35193_35219 = state_35189__$1;
(statearr_35193_35219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (1))){
var inst_35158 = cljs.core.vec.call(null,chs);
var inst_35159 = inst_35158;
var state_35189__$1 = (function (){var statearr_35194 = state_35189;
(statearr_35194[(10)] = inst_35159);

return statearr_35194;
})();
var statearr_35195_35220 = state_35189__$1;
(statearr_35195_35220[(2)] = null);

(statearr_35195_35220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (4))){
var inst_35159 = (state_35189[(10)]);
var state_35189__$1 = state_35189;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35189__$1,(7),inst_35159);
} else {
if((state_val_35190 === (6))){
var inst_35185 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35196_35221 = state_35189__$1;
(statearr_35196_35221[(2)] = inst_35185);

(statearr_35196_35221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (3))){
var inst_35187 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35189__$1,inst_35187);
} else {
if((state_val_35190 === (2))){
var inst_35159 = (state_35189[(10)]);
var inst_35161 = cljs.core.count.call(null,inst_35159);
var inst_35162 = (inst_35161 > (0));
var state_35189__$1 = state_35189;
if(cljs.core.truth_(inst_35162)){
var statearr_35198_35222 = state_35189__$1;
(statearr_35198_35222[(1)] = (4));

} else {
var statearr_35199_35223 = state_35189__$1;
(statearr_35199_35223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (11))){
var inst_35159 = (state_35189[(10)]);
var inst_35178 = (state_35189[(2)]);
var tmp35197 = inst_35159;
var inst_35159__$1 = tmp35197;
var state_35189__$1 = (function (){var statearr_35200 = state_35189;
(statearr_35200[(10)] = inst_35159__$1);

(statearr_35200[(11)] = inst_35178);

return statearr_35200;
})();
var statearr_35201_35224 = state_35189__$1;
(statearr_35201_35224[(2)] = null);

(statearr_35201_35224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (9))){
var inst_35169 = (state_35189[(8)]);
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35189__$1,(11),out,inst_35169);
} else {
if((state_val_35190 === (5))){
var inst_35183 = cljs.core.async.close_BANG_.call(null,out);
var state_35189__$1 = state_35189;
var statearr_35202_35225 = state_35189__$1;
(statearr_35202_35225[(2)] = inst_35183);

(statearr_35202_35225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (10))){
var inst_35181 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35203_35226 = state_35189__$1;
(statearr_35203_35226[(2)] = inst_35181);

(statearr_35203_35226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (8))){
var inst_35159 = (state_35189[(10)]);
var inst_35170 = (state_35189[(9)]);
var inst_35168 = (state_35189[(7)]);
var inst_35169 = (state_35189[(8)]);
var inst_35173 = (function (){var cs = inst_35159;
var vec__35164 = inst_35168;
var v = inst_35169;
var c = inst_35170;
return ((function (cs,vec__35164,v,c,inst_35159,inst_35170,inst_35168,inst_35169,state_val_35190,c__25482__auto___35217,out){
return (function (p1__35154_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35154_SHARP_);
});
;})(cs,vec__35164,v,c,inst_35159,inst_35170,inst_35168,inst_35169,state_val_35190,c__25482__auto___35217,out))
})();
var inst_35174 = cljs.core.filterv.call(null,inst_35173,inst_35159);
var inst_35159__$1 = inst_35174;
var state_35189__$1 = (function (){var statearr_35204 = state_35189;
(statearr_35204[(10)] = inst_35159__$1);

return statearr_35204;
})();
var statearr_35205_35227 = state_35189__$1;
(statearr_35205_35227[(2)] = null);

(statearr_35205_35227[(1)] = (2));


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
});})(c__25482__auto___35217,out))
;
return ((function (switch__25417__auto__,c__25482__auto___35217,out){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_35209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35209[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_35209[(1)] = (1));

return statearr_35209;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_35189){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_35189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35210){if((e35210 instanceof Object)){
var ex__25421__auto__ = e35210;
var statearr_35211_35228 = state_35189;
(statearr_35211_35228[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35229 = state_35189;
state_35189 = G__35229;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_35189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_35189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___35217,out))
})();
var state__25484__auto__ = (function (){var statearr_35212 = f__25483__auto__.call(null);
(statearr_35212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___35217);

return statearr_35212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___35217,out))
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
var args35230 = [];
var len__19984__auto___35279 = arguments.length;
var i__19985__auto___35280 = (0);
while(true){
if((i__19985__auto___35280 < len__19984__auto___35279)){
args35230.push((arguments[i__19985__auto___35280]));

var G__35281 = (i__19985__auto___35280 + (1));
i__19985__auto___35280 = G__35281;
continue;
} else {
}
break;
}

var G__35232 = args35230.length;
switch (G__35232) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35230.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25482__auto___35283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___35283,out){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___35283,out){
return (function (state_35256){
var state_val_35257 = (state_35256[(1)]);
if((state_val_35257 === (7))){
var inst_35238 = (state_35256[(7)]);
var inst_35238__$1 = (state_35256[(2)]);
var inst_35239 = (inst_35238__$1 == null);
var inst_35240 = cljs.core.not.call(null,inst_35239);
var state_35256__$1 = (function (){var statearr_35258 = state_35256;
(statearr_35258[(7)] = inst_35238__$1);

return statearr_35258;
})();
if(inst_35240){
var statearr_35259_35284 = state_35256__$1;
(statearr_35259_35284[(1)] = (8));

} else {
var statearr_35260_35285 = state_35256__$1;
(statearr_35260_35285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (1))){
var inst_35233 = (0);
var state_35256__$1 = (function (){var statearr_35261 = state_35256;
(statearr_35261[(8)] = inst_35233);

return statearr_35261;
})();
var statearr_35262_35286 = state_35256__$1;
(statearr_35262_35286[(2)] = null);

(statearr_35262_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (4))){
var state_35256__$1 = state_35256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35256__$1,(7),ch);
} else {
if((state_val_35257 === (6))){
var inst_35251 = (state_35256[(2)]);
var state_35256__$1 = state_35256;
var statearr_35263_35287 = state_35256__$1;
(statearr_35263_35287[(2)] = inst_35251);

(statearr_35263_35287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (3))){
var inst_35253 = (state_35256[(2)]);
var inst_35254 = cljs.core.async.close_BANG_.call(null,out);
var state_35256__$1 = (function (){var statearr_35264 = state_35256;
(statearr_35264[(9)] = inst_35253);

return statearr_35264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35256__$1,inst_35254);
} else {
if((state_val_35257 === (2))){
var inst_35233 = (state_35256[(8)]);
var inst_35235 = (inst_35233 < n);
var state_35256__$1 = state_35256;
if(cljs.core.truth_(inst_35235)){
var statearr_35265_35288 = state_35256__$1;
(statearr_35265_35288[(1)] = (4));

} else {
var statearr_35266_35289 = state_35256__$1;
(statearr_35266_35289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (11))){
var inst_35233 = (state_35256[(8)]);
var inst_35243 = (state_35256[(2)]);
var inst_35244 = (inst_35233 + (1));
var inst_35233__$1 = inst_35244;
var state_35256__$1 = (function (){var statearr_35267 = state_35256;
(statearr_35267[(10)] = inst_35243);

(statearr_35267[(8)] = inst_35233__$1);

return statearr_35267;
})();
var statearr_35268_35290 = state_35256__$1;
(statearr_35268_35290[(2)] = null);

(statearr_35268_35290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (9))){
var state_35256__$1 = state_35256;
var statearr_35269_35291 = state_35256__$1;
(statearr_35269_35291[(2)] = null);

(statearr_35269_35291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (5))){
var state_35256__$1 = state_35256;
var statearr_35270_35292 = state_35256__$1;
(statearr_35270_35292[(2)] = null);

(statearr_35270_35292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (10))){
var inst_35248 = (state_35256[(2)]);
var state_35256__$1 = state_35256;
var statearr_35271_35293 = state_35256__$1;
(statearr_35271_35293[(2)] = inst_35248);

(statearr_35271_35293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (8))){
var inst_35238 = (state_35256[(7)]);
var state_35256__$1 = state_35256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35256__$1,(11),out,inst_35238);
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
});})(c__25482__auto___35283,out))
;
return ((function (switch__25417__auto__,c__25482__auto___35283,out){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_35275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35275[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_35275[(1)] = (1));

return statearr_35275;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_35256){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_35256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35276){if((e35276 instanceof Object)){
var ex__25421__auto__ = e35276;
var statearr_35277_35294 = state_35256;
(statearr_35277_35294[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35295 = state_35256;
state_35256 = G__35295;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_35256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_35256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___35283,out))
})();
var state__25484__auto__ = (function (){var statearr_35278 = f__25483__auto__.call(null);
(statearr_35278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___35283);

return statearr_35278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___35283,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35303 = (function (f,ch,meta35304){
this.f = f;
this.ch = ch;
this.meta35304 = meta35304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35305,meta35304__$1){
var self__ = this;
var _35305__$1 = this;
return (new cljs.core.async.t_cljs$core$async35303(self__.f,self__.ch,meta35304__$1));
});

cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35305){
var self__ = this;
var _35305__$1 = this;
return self__.meta35304;
});

cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35306 = (function (f,ch,meta35304,_,fn1,meta35307){
this.f = f;
this.ch = ch;
this.meta35304 = meta35304;
this._ = _;
this.fn1 = fn1;
this.meta35307 = meta35307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35308,meta35307__$1){
var self__ = this;
var _35308__$1 = this;
return (new cljs.core.async.t_cljs$core$async35306(self__.f,self__.ch,self__.meta35304,self__._,self__.fn1,meta35307__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35308){
var self__ = this;
var _35308__$1 = this;
return self__.meta35307;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35296_SHARP_){
return f1.call(null,(((p1__35296_SHARP_ == null))?null:self__.f.call(null,p1__35296_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35306.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35304","meta35304",-2072950430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35303","cljs.core.async/t_cljs$core$async35303",1844458673,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35307","meta35307",-1432114123,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35306";

cljs.core.async.t_cljs$core$async35306.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async35306");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35306 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35306(f__$1,ch__$1,meta35304__$1,___$2,fn1__$1,meta35307){
return (new cljs.core.async.t_cljs$core$async35306(f__$1,ch__$1,meta35304__$1,___$2,fn1__$1,meta35307));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35306(self__.f,self__.ch,self__.meta35304,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18864__auto__ = ret;
if(cljs.core.truth_(and__18864__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18864__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35304","meta35304",-2072950430,null)], null);
});

cljs.core.async.t_cljs$core$async35303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35303";

cljs.core.async.t_cljs$core$async35303.cljs$lang$ctorPrWriter = (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async35303");
});

cljs.core.async.__GT_t_cljs$core$async35303 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35303(f__$1,ch__$1,meta35304){
return (new cljs.core.async.t_cljs$core$async35303(f__$1,ch__$1,meta35304));
});

}

return (new cljs.core.async.t_cljs$core$async35303(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35312 = (function (f,ch,meta35313){
this.f = f;
this.ch = ch;
this.meta35313 = meta35313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35314,meta35313__$1){
var self__ = this;
var _35314__$1 = this;
return (new cljs.core.async.t_cljs$core$async35312(self__.f,self__.ch,meta35313__$1));
});

cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35314){
var self__ = this;
var _35314__$1 = this;
return self__.meta35313;
});

cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35313","meta35313",-207337602,null)], null);
});

cljs.core.async.t_cljs$core$async35312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35312";

cljs.core.async.t_cljs$core$async35312.cljs$lang$ctorPrWriter = (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async35312");
});

cljs.core.async.__GT_t_cljs$core$async35312 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35312(f__$1,ch__$1,meta35313){
return (new cljs.core.async.t_cljs$core$async35312(f__$1,ch__$1,meta35313));
});

}

return (new cljs.core.async.t_cljs$core$async35312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35318 = (function (p,ch,meta35319){
this.p = p;
this.ch = ch;
this.meta35319 = meta35319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35320,meta35319__$1){
var self__ = this;
var _35320__$1 = this;
return (new cljs.core.async.t_cljs$core$async35318(self__.p,self__.ch,meta35319__$1));
});

cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35320){
var self__ = this;
var _35320__$1 = this;
return self__.meta35319;
});

cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35319","meta35319",-1068105565,null)], null);
});

cljs.core.async.t_cljs$core$async35318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35318";

cljs.core.async.t_cljs$core$async35318.cljs$lang$ctorPrWriter = (function (this__19482__auto__,writer__19483__auto__,opt__19484__auto__){
return cljs.core._write.call(null,writer__19483__auto__,"cljs.core.async/t_cljs$core$async35318");
});

cljs.core.async.__GT_t_cljs$core$async35318 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35318(p__$1,ch__$1,meta35319){
return (new cljs.core.async.t_cljs$core$async35318(p__$1,ch__$1,meta35319));
});

}

return (new cljs.core.async.t_cljs$core$async35318(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args35321 = [];
var len__19984__auto___35365 = arguments.length;
var i__19985__auto___35366 = (0);
while(true){
if((i__19985__auto___35366 < len__19984__auto___35365)){
args35321.push((arguments[i__19985__auto___35366]));

var G__35367 = (i__19985__auto___35366 + (1));
i__19985__auto___35366 = G__35367;
continue;
} else {
}
break;
}

var G__35323 = args35321.length;
switch (G__35323) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35321.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25482__auto___35369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___35369,out){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___35369,out){
return (function (state_35344){
var state_val_35345 = (state_35344[(1)]);
if((state_val_35345 === (7))){
var inst_35340 = (state_35344[(2)]);
var state_35344__$1 = state_35344;
var statearr_35346_35370 = state_35344__$1;
(statearr_35346_35370[(2)] = inst_35340);

(statearr_35346_35370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (1))){
var state_35344__$1 = state_35344;
var statearr_35347_35371 = state_35344__$1;
(statearr_35347_35371[(2)] = null);

(statearr_35347_35371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (4))){
var inst_35326 = (state_35344[(7)]);
var inst_35326__$1 = (state_35344[(2)]);
var inst_35327 = (inst_35326__$1 == null);
var state_35344__$1 = (function (){var statearr_35348 = state_35344;
(statearr_35348[(7)] = inst_35326__$1);

return statearr_35348;
})();
if(cljs.core.truth_(inst_35327)){
var statearr_35349_35372 = state_35344__$1;
(statearr_35349_35372[(1)] = (5));

} else {
var statearr_35350_35373 = state_35344__$1;
(statearr_35350_35373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (6))){
var inst_35326 = (state_35344[(7)]);
var inst_35331 = p.call(null,inst_35326);
var state_35344__$1 = state_35344;
if(cljs.core.truth_(inst_35331)){
var statearr_35351_35374 = state_35344__$1;
(statearr_35351_35374[(1)] = (8));

} else {
var statearr_35352_35375 = state_35344__$1;
(statearr_35352_35375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (3))){
var inst_35342 = (state_35344[(2)]);
var state_35344__$1 = state_35344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35344__$1,inst_35342);
} else {
if((state_val_35345 === (2))){
var state_35344__$1 = state_35344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35344__$1,(4),ch);
} else {
if((state_val_35345 === (11))){
var inst_35334 = (state_35344[(2)]);
var state_35344__$1 = state_35344;
var statearr_35353_35376 = state_35344__$1;
(statearr_35353_35376[(2)] = inst_35334);

(statearr_35353_35376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (9))){
var state_35344__$1 = state_35344;
var statearr_35354_35377 = state_35344__$1;
(statearr_35354_35377[(2)] = null);

(statearr_35354_35377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (5))){
var inst_35329 = cljs.core.async.close_BANG_.call(null,out);
var state_35344__$1 = state_35344;
var statearr_35355_35378 = state_35344__$1;
(statearr_35355_35378[(2)] = inst_35329);

(statearr_35355_35378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (10))){
var inst_35337 = (state_35344[(2)]);
var state_35344__$1 = (function (){var statearr_35356 = state_35344;
(statearr_35356[(8)] = inst_35337);

return statearr_35356;
})();
var statearr_35357_35379 = state_35344__$1;
(statearr_35357_35379[(2)] = null);

(statearr_35357_35379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (8))){
var inst_35326 = (state_35344[(7)]);
var state_35344__$1 = state_35344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35344__$1,(11),out,inst_35326);
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
});})(c__25482__auto___35369,out))
;
return ((function (switch__25417__auto__,c__25482__auto___35369,out){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_35361 = [null,null,null,null,null,null,null,null,null];
(statearr_35361[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_35361[(1)] = (1));

return statearr_35361;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_35344){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_35344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35362){if((e35362 instanceof Object)){
var ex__25421__auto__ = e35362;
var statearr_35363_35380 = state_35344;
(statearr_35363_35380[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35381 = state_35344;
state_35344 = G__35381;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_35344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_35344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___35369,out))
})();
var state__25484__auto__ = (function (){var statearr_35364 = f__25483__auto__.call(null);
(statearr_35364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___35369);

return statearr_35364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___35369,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35382 = [];
var len__19984__auto___35385 = arguments.length;
var i__19985__auto___35386 = (0);
while(true){
if((i__19985__auto___35386 < len__19984__auto___35385)){
args35382.push((arguments[i__19985__auto___35386]));

var G__35387 = (i__19985__auto___35386 + (1));
i__19985__auto___35386 = G__35387;
continue;
} else {
}
break;
}

var G__35384 = args35382.length;
switch (G__35384) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35382.length)].join('')));

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
var c__25482__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto__){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto__){
return (function (state_35554){
var state_val_35555 = (state_35554[(1)]);
if((state_val_35555 === (7))){
var inst_35550 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35556_35597 = state_35554__$1;
(statearr_35556_35597[(2)] = inst_35550);

(statearr_35556_35597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (20))){
var inst_35520 = (state_35554[(7)]);
var inst_35531 = (state_35554[(2)]);
var inst_35532 = cljs.core.next.call(null,inst_35520);
var inst_35506 = inst_35532;
var inst_35507 = null;
var inst_35508 = (0);
var inst_35509 = (0);
var state_35554__$1 = (function (){var statearr_35557 = state_35554;
(statearr_35557[(8)] = inst_35508);

(statearr_35557[(9)] = inst_35507);

(statearr_35557[(10)] = inst_35506);

(statearr_35557[(11)] = inst_35531);

(statearr_35557[(12)] = inst_35509);

return statearr_35557;
})();
var statearr_35558_35598 = state_35554__$1;
(statearr_35558_35598[(2)] = null);

(statearr_35558_35598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (1))){
var state_35554__$1 = state_35554;
var statearr_35559_35599 = state_35554__$1;
(statearr_35559_35599[(2)] = null);

(statearr_35559_35599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (4))){
var inst_35495 = (state_35554[(13)]);
var inst_35495__$1 = (state_35554[(2)]);
var inst_35496 = (inst_35495__$1 == null);
var state_35554__$1 = (function (){var statearr_35560 = state_35554;
(statearr_35560[(13)] = inst_35495__$1);

return statearr_35560;
})();
if(cljs.core.truth_(inst_35496)){
var statearr_35561_35600 = state_35554__$1;
(statearr_35561_35600[(1)] = (5));

} else {
var statearr_35562_35601 = state_35554__$1;
(statearr_35562_35601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (15))){
var state_35554__$1 = state_35554;
var statearr_35566_35602 = state_35554__$1;
(statearr_35566_35602[(2)] = null);

(statearr_35566_35602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (21))){
var state_35554__$1 = state_35554;
var statearr_35567_35603 = state_35554__$1;
(statearr_35567_35603[(2)] = null);

(statearr_35567_35603[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (13))){
var inst_35508 = (state_35554[(8)]);
var inst_35507 = (state_35554[(9)]);
var inst_35506 = (state_35554[(10)]);
var inst_35509 = (state_35554[(12)]);
var inst_35516 = (state_35554[(2)]);
var inst_35517 = (inst_35509 + (1));
var tmp35563 = inst_35508;
var tmp35564 = inst_35507;
var tmp35565 = inst_35506;
var inst_35506__$1 = tmp35565;
var inst_35507__$1 = tmp35564;
var inst_35508__$1 = tmp35563;
var inst_35509__$1 = inst_35517;
var state_35554__$1 = (function (){var statearr_35568 = state_35554;
(statearr_35568[(8)] = inst_35508__$1);

(statearr_35568[(9)] = inst_35507__$1);

(statearr_35568[(10)] = inst_35506__$1);

(statearr_35568[(12)] = inst_35509__$1);

(statearr_35568[(14)] = inst_35516);

return statearr_35568;
})();
var statearr_35569_35604 = state_35554__$1;
(statearr_35569_35604[(2)] = null);

(statearr_35569_35604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (22))){
var state_35554__$1 = state_35554;
var statearr_35570_35605 = state_35554__$1;
(statearr_35570_35605[(2)] = null);

(statearr_35570_35605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (6))){
var inst_35495 = (state_35554[(13)]);
var inst_35504 = f.call(null,inst_35495);
var inst_35505 = cljs.core.seq.call(null,inst_35504);
var inst_35506 = inst_35505;
var inst_35507 = null;
var inst_35508 = (0);
var inst_35509 = (0);
var state_35554__$1 = (function (){var statearr_35571 = state_35554;
(statearr_35571[(8)] = inst_35508);

(statearr_35571[(9)] = inst_35507);

(statearr_35571[(10)] = inst_35506);

(statearr_35571[(12)] = inst_35509);

return statearr_35571;
})();
var statearr_35572_35606 = state_35554__$1;
(statearr_35572_35606[(2)] = null);

(statearr_35572_35606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (17))){
var inst_35520 = (state_35554[(7)]);
var inst_35524 = cljs.core.chunk_first.call(null,inst_35520);
var inst_35525 = cljs.core.chunk_rest.call(null,inst_35520);
var inst_35526 = cljs.core.count.call(null,inst_35524);
var inst_35506 = inst_35525;
var inst_35507 = inst_35524;
var inst_35508 = inst_35526;
var inst_35509 = (0);
var state_35554__$1 = (function (){var statearr_35573 = state_35554;
(statearr_35573[(8)] = inst_35508);

(statearr_35573[(9)] = inst_35507);

(statearr_35573[(10)] = inst_35506);

(statearr_35573[(12)] = inst_35509);

return statearr_35573;
})();
var statearr_35574_35607 = state_35554__$1;
(statearr_35574_35607[(2)] = null);

(statearr_35574_35607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (3))){
var inst_35552 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35554__$1,inst_35552);
} else {
if((state_val_35555 === (12))){
var inst_35540 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35575_35608 = state_35554__$1;
(statearr_35575_35608[(2)] = inst_35540);

(statearr_35575_35608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (2))){
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35554__$1,(4),in$);
} else {
if((state_val_35555 === (23))){
var inst_35548 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35576_35609 = state_35554__$1;
(statearr_35576_35609[(2)] = inst_35548);

(statearr_35576_35609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (19))){
var inst_35535 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35577_35610 = state_35554__$1;
(statearr_35577_35610[(2)] = inst_35535);

(statearr_35577_35610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (11))){
var inst_35506 = (state_35554[(10)]);
var inst_35520 = (state_35554[(7)]);
var inst_35520__$1 = cljs.core.seq.call(null,inst_35506);
var state_35554__$1 = (function (){var statearr_35578 = state_35554;
(statearr_35578[(7)] = inst_35520__$1);

return statearr_35578;
})();
if(inst_35520__$1){
var statearr_35579_35611 = state_35554__$1;
(statearr_35579_35611[(1)] = (14));

} else {
var statearr_35580_35612 = state_35554__$1;
(statearr_35580_35612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (9))){
var inst_35542 = (state_35554[(2)]);
var inst_35543 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35554__$1 = (function (){var statearr_35581 = state_35554;
(statearr_35581[(15)] = inst_35542);

return statearr_35581;
})();
if(cljs.core.truth_(inst_35543)){
var statearr_35582_35613 = state_35554__$1;
(statearr_35582_35613[(1)] = (21));

} else {
var statearr_35583_35614 = state_35554__$1;
(statearr_35583_35614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (5))){
var inst_35498 = cljs.core.async.close_BANG_.call(null,out);
var state_35554__$1 = state_35554;
var statearr_35584_35615 = state_35554__$1;
(statearr_35584_35615[(2)] = inst_35498);

(statearr_35584_35615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (14))){
var inst_35520 = (state_35554[(7)]);
var inst_35522 = cljs.core.chunked_seq_QMARK_.call(null,inst_35520);
var state_35554__$1 = state_35554;
if(inst_35522){
var statearr_35585_35616 = state_35554__$1;
(statearr_35585_35616[(1)] = (17));

} else {
var statearr_35586_35617 = state_35554__$1;
(statearr_35586_35617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (16))){
var inst_35538 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35587_35618 = state_35554__$1;
(statearr_35587_35618[(2)] = inst_35538);

(statearr_35587_35618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35555 === (10))){
var inst_35507 = (state_35554[(9)]);
var inst_35509 = (state_35554[(12)]);
var inst_35514 = cljs.core._nth.call(null,inst_35507,inst_35509);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35554__$1,(13),out,inst_35514);
} else {
if((state_val_35555 === (18))){
var inst_35520 = (state_35554[(7)]);
var inst_35529 = cljs.core.first.call(null,inst_35520);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35554__$1,(20),out,inst_35529);
} else {
if((state_val_35555 === (8))){
var inst_35508 = (state_35554[(8)]);
var inst_35509 = (state_35554[(12)]);
var inst_35511 = (inst_35509 < inst_35508);
var inst_35512 = inst_35511;
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35512)){
var statearr_35588_35619 = state_35554__$1;
(statearr_35588_35619[(1)] = (10));

} else {
var statearr_35589_35620 = state_35554__$1;
(statearr_35589_35620[(1)] = (11));

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
});})(c__25482__auto__))
;
return ((function (switch__25417__auto__,c__25482__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25418__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25418__auto____0 = (function (){
var statearr_35593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35593[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25418__auto__);

(statearr_35593[(1)] = (1));

return statearr_35593;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25418__auto____1 = (function (state_35554){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_35554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35594){if((e35594 instanceof Object)){
var ex__25421__auto__ = e35594;
var statearr_35595_35621 = state_35554;
(statearr_35595_35621[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35622 = state_35554;
state_35554 = G__35622;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25418__auto__ = function(state_35554){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25418__auto____1.call(this,state_35554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25418__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25418__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto__))
})();
var state__25484__auto__ = (function (){var statearr_35596 = f__25483__auto__.call(null);
(statearr_35596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto__);

return statearr_35596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto__))
);

return c__25482__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35623 = [];
var len__19984__auto___35626 = arguments.length;
var i__19985__auto___35627 = (0);
while(true){
if((i__19985__auto___35627 < len__19984__auto___35626)){
args35623.push((arguments[i__19985__auto___35627]));

var G__35628 = (i__19985__auto___35627 + (1));
i__19985__auto___35627 = G__35628;
continue;
} else {
}
break;
}

var G__35625 = args35623.length;
switch (G__35625) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35623.length)].join('')));

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
var args35630 = [];
var len__19984__auto___35633 = arguments.length;
var i__19985__auto___35634 = (0);
while(true){
if((i__19985__auto___35634 < len__19984__auto___35633)){
args35630.push((arguments[i__19985__auto___35634]));

var G__35635 = (i__19985__auto___35634 + (1));
i__19985__auto___35634 = G__35635;
continue;
} else {
}
break;
}

var G__35632 = args35630.length;
switch (G__35632) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35630.length)].join('')));

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
var args35637 = [];
var len__19984__auto___35688 = arguments.length;
var i__19985__auto___35689 = (0);
while(true){
if((i__19985__auto___35689 < len__19984__auto___35688)){
args35637.push((arguments[i__19985__auto___35689]));

var G__35690 = (i__19985__auto___35689 + (1));
i__19985__auto___35689 = G__35690;
continue;
} else {
}
break;
}

var G__35639 = args35637.length;
switch (G__35639) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35637.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25482__auto___35692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___35692,out){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___35692,out){
return (function (state_35663){
var state_val_35664 = (state_35663[(1)]);
if((state_val_35664 === (7))){
var inst_35658 = (state_35663[(2)]);
var state_35663__$1 = state_35663;
var statearr_35665_35693 = state_35663__$1;
(statearr_35665_35693[(2)] = inst_35658);

(statearr_35665_35693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35664 === (1))){
var inst_35640 = null;
var state_35663__$1 = (function (){var statearr_35666 = state_35663;
(statearr_35666[(7)] = inst_35640);

return statearr_35666;
})();
var statearr_35667_35694 = state_35663__$1;
(statearr_35667_35694[(2)] = null);

(statearr_35667_35694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35664 === (4))){
var inst_35643 = (state_35663[(8)]);
var inst_35643__$1 = (state_35663[(2)]);
var inst_35644 = (inst_35643__$1 == null);
var inst_35645 = cljs.core.not.call(null,inst_35644);
var state_35663__$1 = (function (){var statearr_35668 = state_35663;
(statearr_35668[(8)] = inst_35643__$1);

return statearr_35668;
})();
if(inst_35645){
var statearr_35669_35695 = state_35663__$1;
(statearr_35669_35695[(1)] = (5));

} else {
var statearr_35670_35696 = state_35663__$1;
(statearr_35670_35696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35664 === (6))){
var state_35663__$1 = state_35663;
var statearr_35671_35697 = state_35663__$1;
(statearr_35671_35697[(2)] = null);

(statearr_35671_35697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35664 === (3))){
var inst_35660 = (state_35663[(2)]);
var inst_35661 = cljs.core.async.close_BANG_.call(null,out);
var state_35663__$1 = (function (){var statearr_35672 = state_35663;
(statearr_35672[(9)] = inst_35660);

return statearr_35672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35663__$1,inst_35661);
} else {
if((state_val_35664 === (2))){
var state_35663__$1 = state_35663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35663__$1,(4),ch);
} else {
if((state_val_35664 === (11))){
var inst_35643 = (state_35663[(8)]);
var inst_35652 = (state_35663[(2)]);
var inst_35640 = inst_35643;
var state_35663__$1 = (function (){var statearr_35673 = state_35663;
(statearr_35673[(10)] = inst_35652);

(statearr_35673[(7)] = inst_35640);

return statearr_35673;
})();
var statearr_35674_35698 = state_35663__$1;
(statearr_35674_35698[(2)] = null);

(statearr_35674_35698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35664 === (9))){
var inst_35643 = (state_35663[(8)]);
var state_35663__$1 = state_35663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35663__$1,(11),out,inst_35643);
} else {
if((state_val_35664 === (5))){
var inst_35640 = (state_35663[(7)]);
var inst_35643 = (state_35663[(8)]);
var inst_35647 = cljs.core._EQ_.call(null,inst_35643,inst_35640);
var state_35663__$1 = state_35663;
if(inst_35647){
var statearr_35676_35699 = state_35663__$1;
(statearr_35676_35699[(1)] = (8));

} else {
var statearr_35677_35700 = state_35663__$1;
(statearr_35677_35700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35664 === (10))){
var inst_35655 = (state_35663[(2)]);
var state_35663__$1 = state_35663;
var statearr_35678_35701 = state_35663__$1;
(statearr_35678_35701[(2)] = inst_35655);

(statearr_35678_35701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35664 === (8))){
var inst_35640 = (state_35663[(7)]);
var tmp35675 = inst_35640;
var inst_35640__$1 = tmp35675;
var state_35663__$1 = (function (){var statearr_35679 = state_35663;
(statearr_35679[(7)] = inst_35640__$1);

return statearr_35679;
})();
var statearr_35680_35702 = state_35663__$1;
(statearr_35680_35702[(2)] = null);

(statearr_35680_35702[(1)] = (2));


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
});})(c__25482__auto___35692,out))
;
return ((function (switch__25417__auto__,c__25482__auto___35692,out){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_35684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35684[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_35684[(1)] = (1));

return statearr_35684;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_35663){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_35663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35685){if((e35685 instanceof Object)){
var ex__25421__auto__ = e35685;
var statearr_35686_35703 = state_35663;
(statearr_35686_35703[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35704 = state_35663;
state_35663 = G__35704;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_35663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_35663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___35692,out))
})();
var state__25484__auto__ = (function (){var statearr_35687 = f__25483__auto__.call(null);
(statearr_35687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___35692);

return statearr_35687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___35692,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35705 = [];
var len__19984__auto___35775 = arguments.length;
var i__19985__auto___35776 = (0);
while(true){
if((i__19985__auto___35776 < len__19984__auto___35775)){
args35705.push((arguments[i__19985__auto___35776]));

var G__35777 = (i__19985__auto___35776 + (1));
i__19985__auto___35776 = G__35777;
continue;
} else {
}
break;
}

var G__35707 = args35705.length;
switch (G__35707) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35705.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25482__auto___35779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___35779,out){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___35779,out){
return (function (state_35745){
var state_val_35746 = (state_35745[(1)]);
if((state_val_35746 === (7))){
var inst_35741 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35747_35780 = state_35745__$1;
(statearr_35747_35780[(2)] = inst_35741);

(statearr_35747_35780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (1))){
var inst_35708 = (new Array(n));
var inst_35709 = inst_35708;
var inst_35710 = (0);
var state_35745__$1 = (function (){var statearr_35748 = state_35745;
(statearr_35748[(7)] = inst_35710);

(statearr_35748[(8)] = inst_35709);

return statearr_35748;
})();
var statearr_35749_35781 = state_35745__$1;
(statearr_35749_35781[(2)] = null);

(statearr_35749_35781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (4))){
var inst_35713 = (state_35745[(9)]);
var inst_35713__$1 = (state_35745[(2)]);
var inst_35714 = (inst_35713__$1 == null);
var inst_35715 = cljs.core.not.call(null,inst_35714);
var state_35745__$1 = (function (){var statearr_35750 = state_35745;
(statearr_35750[(9)] = inst_35713__$1);

return statearr_35750;
})();
if(inst_35715){
var statearr_35751_35782 = state_35745__$1;
(statearr_35751_35782[(1)] = (5));

} else {
var statearr_35752_35783 = state_35745__$1;
(statearr_35752_35783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (15))){
var inst_35735 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35753_35784 = state_35745__$1;
(statearr_35753_35784[(2)] = inst_35735);

(statearr_35753_35784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (13))){
var state_35745__$1 = state_35745;
var statearr_35754_35785 = state_35745__$1;
(statearr_35754_35785[(2)] = null);

(statearr_35754_35785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (6))){
var inst_35710 = (state_35745[(7)]);
var inst_35731 = (inst_35710 > (0));
var state_35745__$1 = state_35745;
if(cljs.core.truth_(inst_35731)){
var statearr_35755_35786 = state_35745__$1;
(statearr_35755_35786[(1)] = (12));

} else {
var statearr_35756_35787 = state_35745__$1;
(statearr_35756_35787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (3))){
var inst_35743 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35745__$1,inst_35743);
} else {
if((state_val_35746 === (12))){
var inst_35709 = (state_35745[(8)]);
var inst_35733 = cljs.core.vec.call(null,inst_35709);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35745__$1,(15),out,inst_35733);
} else {
if((state_val_35746 === (2))){
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35745__$1,(4),ch);
} else {
if((state_val_35746 === (11))){
var inst_35725 = (state_35745[(2)]);
var inst_35726 = (new Array(n));
var inst_35709 = inst_35726;
var inst_35710 = (0);
var state_35745__$1 = (function (){var statearr_35757 = state_35745;
(statearr_35757[(7)] = inst_35710);

(statearr_35757[(10)] = inst_35725);

(statearr_35757[(8)] = inst_35709);

return statearr_35757;
})();
var statearr_35758_35788 = state_35745__$1;
(statearr_35758_35788[(2)] = null);

(statearr_35758_35788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (9))){
var inst_35709 = (state_35745[(8)]);
var inst_35723 = cljs.core.vec.call(null,inst_35709);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35745__$1,(11),out,inst_35723);
} else {
if((state_val_35746 === (5))){
var inst_35713 = (state_35745[(9)]);
var inst_35718 = (state_35745[(11)]);
var inst_35710 = (state_35745[(7)]);
var inst_35709 = (state_35745[(8)]);
var inst_35717 = (inst_35709[inst_35710] = inst_35713);
var inst_35718__$1 = (inst_35710 + (1));
var inst_35719 = (inst_35718__$1 < n);
var state_35745__$1 = (function (){var statearr_35759 = state_35745;
(statearr_35759[(12)] = inst_35717);

(statearr_35759[(11)] = inst_35718__$1);

return statearr_35759;
})();
if(cljs.core.truth_(inst_35719)){
var statearr_35760_35789 = state_35745__$1;
(statearr_35760_35789[(1)] = (8));

} else {
var statearr_35761_35790 = state_35745__$1;
(statearr_35761_35790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (14))){
var inst_35738 = (state_35745[(2)]);
var inst_35739 = cljs.core.async.close_BANG_.call(null,out);
var state_35745__$1 = (function (){var statearr_35763 = state_35745;
(statearr_35763[(13)] = inst_35738);

return statearr_35763;
})();
var statearr_35764_35791 = state_35745__$1;
(statearr_35764_35791[(2)] = inst_35739);

(statearr_35764_35791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (10))){
var inst_35729 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35765_35792 = state_35745__$1;
(statearr_35765_35792[(2)] = inst_35729);

(statearr_35765_35792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (8))){
var inst_35718 = (state_35745[(11)]);
var inst_35709 = (state_35745[(8)]);
var tmp35762 = inst_35709;
var inst_35709__$1 = tmp35762;
var inst_35710 = inst_35718;
var state_35745__$1 = (function (){var statearr_35766 = state_35745;
(statearr_35766[(7)] = inst_35710);

(statearr_35766[(8)] = inst_35709__$1);

return statearr_35766;
})();
var statearr_35767_35793 = state_35745__$1;
(statearr_35767_35793[(2)] = null);

(statearr_35767_35793[(1)] = (2));


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
});})(c__25482__auto___35779,out))
;
return ((function (switch__25417__auto__,c__25482__auto___35779,out){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_35771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35771[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_35771[(1)] = (1));

return statearr_35771;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_35745){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_35745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35772){if((e35772 instanceof Object)){
var ex__25421__auto__ = e35772;
var statearr_35773_35794 = state_35745;
(statearr_35773_35794[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35795 = state_35745;
state_35745 = G__35795;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_35745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_35745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___35779,out))
})();
var state__25484__auto__ = (function (){var statearr_35774 = f__25483__auto__.call(null);
(statearr_35774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___35779);

return statearr_35774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___35779,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35796 = [];
var len__19984__auto___35870 = arguments.length;
var i__19985__auto___35871 = (0);
while(true){
if((i__19985__auto___35871 < len__19984__auto___35870)){
args35796.push((arguments[i__19985__auto___35871]));

var G__35872 = (i__19985__auto___35871 + (1));
i__19985__auto___35871 = G__35872;
continue;
} else {
}
break;
}

var G__35798 = args35796.length;
switch (G__35798) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35796.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25482__auto___35874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25482__auto___35874,out){
return (function (){
var f__25483__auto__ = (function (){var switch__25417__auto__ = ((function (c__25482__auto___35874,out){
return (function (state_35840){
var state_val_35841 = (state_35840[(1)]);
if((state_val_35841 === (7))){
var inst_35836 = (state_35840[(2)]);
var state_35840__$1 = state_35840;
var statearr_35842_35875 = state_35840__$1;
(statearr_35842_35875[(2)] = inst_35836);

(statearr_35842_35875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (1))){
var inst_35799 = [];
var inst_35800 = inst_35799;
var inst_35801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35840__$1 = (function (){var statearr_35843 = state_35840;
(statearr_35843[(7)] = inst_35801);

(statearr_35843[(8)] = inst_35800);

return statearr_35843;
})();
var statearr_35844_35876 = state_35840__$1;
(statearr_35844_35876[(2)] = null);

(statearr_35844_35876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (4))){
var inst_35804 = (state_35840[(9)]);
var inst_35804__$1 = (state_35840[(2)]);
var inst_35805 = (inst_35804__$1 == null);
var inst_35806 = cljs.core.not.call(null,inst_35805);
var state_35840__$1 = (function (){var statearr_35845 = state_35840;
(statearr_35845[(9)] = inst_35804__$1);

return statearr_35845;
})();
if(inst_35806){
var statearr_35846_35877 = state_35840__$1;
(statearr_35846_35877[(1)] = (5));

} else {
var statearr_35847_35878 = state_35840__$1;
(statearr_35847_35878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (15))){
var inst_35830 = (state_35840[(2)]);
var state_35840__$1 = state_35840;
var statearr_35848_35879 = state_35840__$1;
(statearr_35848_35879[(2)] = inst_35830);

(statearr_35848_35879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (13))){
var state_35840__$1 = state_35840;
var statearr_35849_35880 = state_35840__$1;
(statearr_35849_35880[(2)] = null);

(statearr_35849_35880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (6))){
var inst_35800 = (state_35840[(8)]);
var inst_35825 = inst_35800.length;
var inst_35826 = (inst_35825 > (0));
var state_35840__$1 = state_35840;
if(cljs.core.truth_(inst_35826)){
var statearr_35850_35881 = state_35840__$1;
(statearr_35850_35881[(1)] = (12));

} else {
var statearr_35851_35882 = state_35840__$1;
(statearr_35851_35882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (3))){
var inst_35838 = (state_35840[(2)]);
var state_35840__$1 = state_35840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35840__$1,inst_35838);
} else {
if((state_val_35841 === (12))){
var inst_35800 = (state_35840[(8)]);
var inst_35828 = cljs.core.vec.call(null,inst_35800);
var state_35840__$1 = state_35840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35840__$1,(15),out,inst_35828);
} else {
if((state_val_35841 === (2))){
var state_35840__$1 = state_35840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35840__$1,(4),ch);
} else {
if((state_val_35841 === (11))){
var inst_35808 = (state_35840[(10)]);
var inst_35804 = (state_35840[(9)]);
var inst_35818 = (state_35840[(2)]);
var inst_35819 = [];
var inst_35820 = inst_35819.push(inst_35804);
var inst_35800 = inst_35819;
var inst_35801 = inst_35808;
var state_35840__$1 = (function (){var statearr_35852 = state_35840;
(statearr_35852[(11)] = inst_35818);

(statearr_35852[(7)] = inst_35801);

(statearr_35852[(8)] = inst_35800);

(statearr_35852[(12)] = inst_35820);

return statearr_35852;
})();
var statearr_35853_35883 = state_35840__$1;
(statearr_35853_35883[(2)] = null);

(statearr_35853_35883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (9))){
var inst_35800 = (state_35840[(8)]);
var inst_35816 = cljs.core.vec.call(null,inst_35800);
var state_35840__$1 = state_35840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35840__$1,(11),out,inst_35816);
} else {
if((state_val_35841 === (5))){
var inst_35808 = (state_35840[(10)]);
var inst_35801 = (state_35840[(7)]);
var inst_35804 = (state_35840[(9)]);
var inst_35808__$1 = f.call(null,inst_35804);
var inst_35809 = cljs.core._EQ_.call(null,inst_35808__$1,inst_35801);
var inst_35810 = cljs.core.keyword_identical_QMARK_.call(null,inst_35801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35811 = (inst_35809) || (inst_35810);
var state_35840__$1 = (function (){var statearr_35854 = state_35840;
(statearr_35854[(10)] = inst_35808__$1);

return statearr_35854;
})();
if(cljs.core.truth_(inst_35811)){
var statearr_35855_35884 = state_35840__$1;
(statearr_35855_35884[(1)] = (8));

} else {
var statearr_35856_35885 = state_35840__$1;
(statearr_35856_35885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (14))){
var inst_35833 = (state_35840[(2)]);
var inst_35834 = cljs.core.async.close_BANG_.call(null,out);
var state_35840__$1 = (function (){var statearr_35858 = state_35840;
(statearr_35858[(13)] = inst_35833);

return statearr_35858;
})();
var statearr_35859_35886 = state_35840__$1;
(statearr_35859_35886[(2)] = inst_35834);

(statearr_35859_35886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (10))){
var inst_35823 = (state_35840[(2)]);
var state_35840__$1 = state_35840;
var statearr_35860_35887 = state_35840__$1;
(statearr_35860_35887[(2)] = inst_35823);

(statearr_35860_35887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35841 === (8))){
var inst_35808 = (state_35840[(10)]);
var inst_35804 = (state_35840[(9)]);
var inst_35800 = (state_35840[(8)]);
var inst_35813 = inst_35800.push(inst_35804);
var tmp35857 = inst_35800;
var inst_35800__$1 = tmp35857;
var inst_35801 = inst_35808;
var state_35840__$1 = (function (){var statearr_35861 = state_35840;
(statearr_35861[(14)] = inst_35813);

(statearr_35861[(7)] = inst_35801);

(statearr_35861[(8)] = inst_35800__$1);

return statearr_35861;
})();
var statearr_35862_35888 = state_35840__$1;
(statearr_35862_35888[(2)] = null);

(statearr_35862_35888[(1)] = (2));


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
});})(c__25482__auto___35874,out))
;
return ((function (switch__25417__auto__,c__25482__auto___35874,out){
return (function() {
var cljs$core$async$state_machine__25418__auto__ = null;
var cljs$core$async$state_machine__25418__auto____0 = (function (){
var statearr_35866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35866[(0)] = cljs$core$async$state_machine__25418__auto__);

(statearr_35866[(1)] = (1));

return statearr_35866;
});
var cljs$core$async$state_machine__25418__auto____1 = (function (state_35840){
while(true){
var ret_value__25419__auto__ = (function (){try{while(true){
var result__25420__auto__ = switch__25417__auto__.call(null,state_35840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25420__auto__;
}
break;
}
}catch (e35867){if((e35867 instanceof Object)){
var ex__25421__auto__ = e35867;
var statearr_35868_35889 = state_35840;
(statearr_35868_35889[(5)] = ex__25421__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35890 = state_35840;
state_35840 = G__35890;
continue;
} else {
return ret_value__25419__auto__;
}
break;
}
});
cljs$core$async$state_machine__25418__auto__ = function(state_35840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25418__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25418__auto____1.call(this,state_35840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25418__auto____0;
cljs$core$async$state_machine__25418__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25418__auto____1;
return cljs$core$async$state_machine__25418__auto__;
})()
;})(switch__25417__auto__,c__25482__auto___35874,out))
})();
var state__25484__auto__ = (function (){var statearr_35869 = f__25483__auto__.call(null);
(statearr_35869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25482__auto___35874);

return statearr_35869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25484__auto__);
});})(c__25482__auto___35874,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map