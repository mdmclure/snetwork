// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_camelCase));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var args34233 = [];
var len__22733__auto___34236 = arguments.length;
var i__22734__auto___34237 = (0);
while(true){
if((i__22734__auto___34237 < len__22733__auto___34236)){
args34233.push((arguments[i__22734__auto___34237]));

var G__34238 = (i__22734__auto___34237 + (1));
i__22734__auto___34237 = G__34238;
continue;
} else {
}
break;
}

var G__34235 = args34233.length;
switch (G__34235) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34233.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args34240 = [];
var len__22733__auto___34243 = arguments.length;
var i__22734__auto___34244 = (0);
while(true){
if((i__22734__auto___34244 < len__22733__auto___34243)){
args34240.push((arguments[i__22734__auto___34244]));

var G__34245 = (i__22734__auto___34244 + (1));
i__22734__auto___34244 = G__34245;
continue;
} else {
}
break;
}

var G__34242 = args34240.length;
switch (G__34242) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34240.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,raw_theme));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][camel_snake_kebab.core.__GT_camelCaseString.call(null,color_key)]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.css_transition_group = (function cljs_react_material_ui$core$css_transition_group(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34248 = arguments.length;
var i__22734__auto___34249 = (0);
while(true){
if((i__22734__auto___34249 < len__22733__auto___34248)){
args__22740__auto__.push((arguments[i__22734__auto___34249]));

var G__34250 = (i__22734__auto___34249 + (1));
i__22734__auto___34249 = G__34250;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"CSSTransitionGroup",args);
});

cljs_react_material_ui.core.css_transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.css_transition_group.cljs$lang$applyTo = (function (seq34247){
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34247));
});

cljs_react_material_ui.core.transition_group = (function cljs_react_material_ui$core$transition_group(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34252 = arguments.length;
var i__22734__auto___34253 = (0);
while(true){
if((i__22734__auto___34253 < len__22733__auto___34252)){
args__22740__auto__.push((arguments[i__22734__auto___34253]));

var G__34254 = (i__22734__auto___34253 + (1));
i__22734__auto___34253 = G__34254;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"TransitionGroup",args);
});

cljs_react_material_ui.core.transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.transition_group.cljs$lang$applyTo = (function (seq34251){
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34251));
});

cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34256 = arguments.length;
var i__22734__auto___34257 = (0);
while(true){
if((i__22734__auto___34257 < len__22733__auto___34256)){
args__22740__auto__.push((arguments[i__22734__auto___34257]));

var G__34258 = (i__22734__auto___34257 + (1));
i__22734__auto___34257 = G__34258;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq34255){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34255));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34260 = arguments.length;
var i__22734__auto___34261 = (0);
while(true){
if((i__22734__auto___34261 < len__22733__auto___34260)){
args__22740__auto__.push((arguments[i__22734__auto___34261]));

var G__34262 = (i__22734__auto___34261 + (1));
i__22734__auto___34261 = G__34262;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq34259){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34259));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34264 = arguments.length;
var i__22734__auto___34265 = (0);
while(true){
if((i__22734__auto___34265 < len__22733__auto___34264)){
args__22740__auto__.push((arguments[i__22734__auto___34265]));

var G__34266 = (i__22734__auto___34265 + (1));
i__22734__auto___34265 = G__34266;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq34263){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34263));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34268 = arguments.length;
var i__22734__auto___34269 = (0);
while(true){
if((i__22734__auto___34269 < len__22733__auto___34268)){
args__22740__auto__.push((arguments[i__22734__auto___34269]));

var G__34270 = (i__22734__auto___34269 + (1));
i__22734__auto___34269 = G__34270;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq34267){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34267));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34272 = arguments.length;
var i__22734__auto___34273 = (0);
while(true){
if((i__22734__auto___34273 < len__22733__auto___34272)){
args__22740__auto__.push((arguments[i__22734__auto___34273]));

var G__34274 = (i__22734__auto___34273 + (1));
i__22734__auto___34273 = G__34274;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq34271){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34271));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34276 = arguments.length;
var i__22734__auto___34277 = (0);
while(true){
if((i__22734__auto___34277 < len__22733__auto___34276)){
args__22740__auto__.push((arguments[i__22734__auto___34277]));

var G__34278 = (i__22734__auto___34277 + (1));
i__22734__auto___34277 = G__34278;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq34275){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34275));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34280 = arguments.length;
var i__22734__auto___34281 = (0);
while(true){
if((i__22734__auto___34281 < len__22733__auto___34280)){
args__22740__auto__.push((arguments[i__22734__auto___34281]));

var G__34282 = (i__22734__auto___34281 + (1));
i__22734__auto___34281 = G__34282;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq34279){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34279));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34284 = arguments.length;
var i__22734__auto___34285 = (0);
while(true){
if((i__22734__auto___34285 < len__22733__auto___34284)){
args__22740__auto__.push((arguments[i__22734__auto___34285]));

var G__34286 = (i__22734__auto___34285 + (1));
i__22734__auto___34285 = G__34286;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq34283){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34283));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34288 = arguments.length;
var i__22734__auto___34289 = (0);
while(true){
if((i__22734__auto___34289 < len__22733__auto___34288)){
args__22740__auto__.push((arguments[i__22734__auto___34289]));

var G__34290 = (i__22734__auto___34289 + (1));
i__22734__auto___34289 = G__34290;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq34287){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34287));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34292 = arguments.length;
var i__22734__auto___34293 = (0);
while(true){
if((i__22734__auto___34293 < len__22733__auto___34292)){
args__22740__auto__.push((arguments[i__22734__auto___34293]));

var G__34294 = (i__22734__auto___34293 + (1));
i__22734__auto___34293 = G__34294;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq34291){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34291));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34296 = arguments.length;
var i__22734__auto___34297 = (0);
while(true){
if((i__22734__auto___34297 < len__22733__auto___34296)){
args__22740__auto__.push((arguments[i__22734__auto___34297]));

var G__34298 = (i__22734__auto___34297 + (1));
i__22734__auto___34297 = G__34298;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq34295){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34295));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34300 = arguments.length;
var i__22734__auto___34301 = (0);
while(true){
if((i__22734__auto___34301 < len__22733__auto___34300)){
args__22740__auto__.push((arguments[i__22734__auto___34301]));

var G__34302 = (i__22734__auto___34301 + (1));
i__22734__auto___34301 = G__34302;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq34299){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34299));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34304 = arguments.length;
var i__22734__auto___34305 = (0);
while(true){
if((i__22734__auto___34305 < len__22733__auto___34304)){
args__22740__auto__.push((arguments[i__22734__auto___34305]));

var G__34306 = (i__22734__auto___34305 + (1));
i__22734__auto___34305 = G__34306;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq34303){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34303));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34308 = arguments.length;
var i__22734__auto___34309 = (0);
while(true){
if((i__22734__auto___34309 < len__22733__auto___34308)){
args__22740__auto__.push((arguments[i__22734__auto___34309]));

var G__34310 = (i__22734__auto___34309 + (1));
i__22734__auto___34309 = G__34310;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq34307){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34307));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34312 = arguments.length;
var i__22734__auto___34313 = (0);
while(true){
if((i__22734__auto___34313 < len__22733__auto___34312)){
args__22740__auto__.push((arguments[i__22734__auto___34313]));

var G__34314 = (i__22734__auto___34313 + (1));
i__22734__auto___34313 = G__34314;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq34311){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34311));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34316 = arguments.length;
var i__22734__auto___34317 = (0);
while(true){
if((i__22734__auto___34317 < len__22733__auto___34316)){
args__22740__auto__.push((arguments[i__22734__auto___34317]));

var G__34318 = (i__22734__auto___34317 + (1));
i__22734__auto___34317 = G__34318;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq34315){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34315));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34320 = arguments.length;
var i__22734__auto___34321 = (0);
while(true){
if((i__22734__auto___34321 < len__22733__auto___34320)){
args__22740__auto__.push((arguments[i__22734__auto___34321]));

var G__34322 = (i__22734__auto___34321 + (1));
i__22734__auto___34321 = G__34322;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq34319){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34319));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34324 = arguments.length;
var i__22734__auto___34325 = (0);
while(true){
if((i__22734__auto___34325 < len__22733__auto___34324)){
args__22740__auto__.push((arguments[i__22734__auto___34325]));

var G__34326 = (i__22734__auto___34325 + (1));
i__22734__auto___34325 = G__34326;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq34323){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34323));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34328 = arguments.length;
var i__22734__auto___34329 = (0);
while(true){
if((i__22734__auto___34329 < len__22733__auto___34328)){
args__22740__auto__.push((arguments[i__22734__auto___34329]));

var G__34330 = (i__22734__auto___34329 + (1));
i__22734__auto___34329 = G__34330;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq34327){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34327));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34332 = arguments.length;
var i__22734__auto___34333 = (0);
while(true){
if((i__22734__auto___34333 < len__22733__auto___34332)){
args__22740__auto__.push((arguments[i__22734__auto___34333]));

var G__34334 = (i__22734__auto___34333 + (1));
i__22734__auto___34333 = G__34334;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq34331){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34331));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34336 = arguments.length;
var i__22734__auto___34337 = (0);
while(true){
if((i__22734__auto___34337 < len__22733__auto___34336)){
args__22740__auto__.push((arguments[i__22734__auto___34337]));

var G__34338 = (i__22734__auto___34337 + (1));
i__22734__auto___34337 = G__34338;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq34335){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34335));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34340 = arguments.length;
var i__22734__auto___34341 = (0);
while(true){
if((i__22734__auto___34341 < len__22733__auto___34340)){
args__22740__auto__.push((arguments[i__22734__auto___34341]));

var G__34342 = (i__22734__auto___34341 + (1));
i__22734__auto___34341 = G__34342;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq34339){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34339));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34344 = arguments.length;
var i__22734__auto___34345 = (0);
while(true){
if((i__22734__auto___34345 < len__22733__auto___34344)){
args__22740__auto__.push((arguments[i__22734__auto___34345]));

var G__34346 = (i__22734__auto___34345 + (1));
i__22734__auto___34345 = G__34346;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq34343){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34343));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34348 = arguments.length;
var i__22734__auto___34349 = (0);
while(true){
if((i__22734__auto___34349 < len__22733__auto___34348)){
args__22740__auto__.push((arguments[i__22734__auto___34349]));

var G__34350 = (i__22734__auto___34349 + (1));
i__22734__auto___34349 = G__34350;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq34347){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34347));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34352 = arguments.length;
var i__22734__auto___34353 = (0);
while(true){
if((i__22734__auto___34353 < len__22733__auto___34352)){
args__22740__auto__.push((arguments[i__22734__auto___34353]));

var G__34354 = (i__22734__auto___34353 + (1));
i__22734__auto___34353 = G__34354;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq34351){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34351));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34356 = arguments.length;
var i__22734__auto___34357 = (0);
while(true){
if((i__22734__auto___34357 < len__22733__auto___34356)){
args__22740__auto__.push((arguments[i__22734__auto___34357]));

var G__34358 = (i__22734__auto___34357 + (1));
i__22734__auto___34357 = G__34358;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq34355){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34355));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34360 = arguments.length;
var i__22734__auto___34361 = (0);
while(true){
if((i__22734__auto___34361 < len__22733__auto___34360)){
args__22740__auto__.push((arguments[i__22734__auto___34361]));

var G__34362 = (i__22734__auto___34361 + (1));
i__22734__auto___34361 = G__34362;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq34359){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34359));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34364 = arguments.length;
var i__22734__auto___34365 = (0);
while(true){
if((i__22734__auto___34365 < len__22733__auto___34364)){
args__22740__auto__.push((arguments[i__22734__auto___34365]));

var G__34366 = (i__22734__auto___34365 + (1));
i__22734__auto___34365 = G__34366;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq34363){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34363));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34368 = arguments.length;
var i__22734__auto___34369 = (0);
while(true){
if((i__22734__auto___34369 < len__22733__auto___34368)){
args__22740__auto__.push((arguments[i__22734__auto___34369]));

var G__34370 = (i__22734__auto___34369 + (1));
i__22734__auto___34369 = G__34370;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq34367){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34367));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34372 = arguments.length;
var i__22734__auto___34373 = (0);
while(true){
if((i__22734__auto___34373 < len__22733__auto___34372)){
args__22740__auto__.push((arguments[i__22734__auto___34373]));

var G__34374 = (i__22734__auto___34373 + (1));
i__22734__auto___34373 = G__34374;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq34371){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34371));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34376 = arguments.length;
var i__22734__auto___34377 = (0);
while(true){
if((i__22734__auto___34377 < len__22733__auto___34376)){
args__22740__auto__.push((arguments[i__22734__auto___34377]));

var G__34378 = (i__22734__auto___34377 + (1));
i__22734__auto___34377 = G__34378;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq34375){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34375));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34380 = arguments.length;
var i__22734__auto___34381 = (0);
while(true){
if((i__22734__auto___34381 < len__22733__auto___34380)){
args__22740__auto__.push((arguments[i__22734__auto___34381]));

var G__34382 = (i__22734__auto___34381 + (1));
i__22734__auto___34381 = G__34382;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq34379){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34379));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34384 = arguments.length;
var i__22734__auto___34385 = (0);
while(true){
if((i__22734__auto___34385 < len__22733__auto___34384)){
args__22740__auto__.push((arguments[i__22734__auto___34385]));

var G__34386 = (i__22734__auto___34385 + (1));
i__22734__auto___34385 = G__34386;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq34383){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34383));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34388 = arguments.length;
var i__22734__auto___34389 = (0);
while(true){
if((i__22734__auto___34389 < len__22733__auto___34388)){
args__22740__auto__.push((arguments[i__22734__auto___34389]));

var G__34390 = (i__22734__auto___34389 + (1));
i__22734__auto___34389 = G__34390;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq34387){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34387));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34392 = arguments.length;
var i__22734__auto___34393 = (0);
while(true){
if((i__22734__auto___34393 < len__22733__auto___34392)){
args__22740__auto__.push((arguments[i__22734__auto___34393]));

var G__34394 = (i__22734__auto___34393 + (1));
i__22734__auto___34393 = G__34394;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq34391){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34391));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34396 = arguments.length;
var i__22734__auto___34397 = (0);
while(true){
if((i__22734__auto___34397 < len__22733__auto___34396)){
args__22740__auto__.push((arguments[i__22734__auto___34397]));

var G__34398 = (i__22734__auto___34397 + (1));
i__22734__auto___34397 = G__34398;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq34395){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34395));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34400 = arguments.length;
var i__22734__auto___34401 = (0);
while(true){
if((i__22734__auto___34401 < len__22733__auto___34400)){
args__22740__auto__.push((arguments[i__22734__auto___34401]));

var G__34402 = (i__22734__auto___34401 + (1));
i__22734__auto___34401 = G__34402;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq34399){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34399));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34404 = arguments.length;
var i__22734__auto___34405 = (0);
while(true){
if((i__22734__auto___34405 < len__22733__auto___34404)){
args__22740__auto__.push((arguments[i__22734__auto___34405]));

var G__34406 = (i__22734__auto___34405 + (1));
i__22734__auto___34405 = G__34406;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq34403){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34403));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34408 = arguments.length;
var i__22734__auto___34409 = (0);
while(true){
if((i__22734__auto___34409 < len__22733__auto___34408)){
args__22740__auto__.push((arguments[i__22734__auto___34409]));

var G__34410 = (i__22734__auto___34409 + (1));
i__22734__auto___34409 = G__34410;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq34407){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34407));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34412 = arguments.length;
var i__22734__auto___34413 = (0);
while(true){
if((i__22734__auto___34413 < len__22733__auto___34412)){
args__22740__auto__.push((arguments[i__22734__auto___34413]));

var G__34414 = (i__22734__auto___34413 + (1));
i__22734__auto___34413 = G__34414;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq34411){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34411));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34416 = arguments.length;
var i__22734__auto___34417 = (0);
while(true){
if((i__22734__auto___34417 < len__22733__auto___34416)){
args__22740__auto__.push((arguments[i__22734__auto___34417]));

var G__34418 = (i__22734__auto___34417 + (1));
i__22734__auto___34417 = G__34418;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq34415){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34415));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34420 = arguments.length;
var i__22734__auto___34421 = (0);
while(true){
if((i__22734__auto___34421 < len__22733__auto___34420)){
args__22740__auto__.push((arguments[i__22734__auto___34421]));

var G__34422 = (i__22734__auto___34421 + (1));
i__22734__auto___34421 = G__34422;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq34419){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34419));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34424 = arguments.length;
var i__22734__auto___34425 = (0);
while(true){
if((i__22734__auto___34425 < len__22733__auto___34424)){
args__22740__auto__.push((arguments[i__22734__auto___34425]));

var G__34426 = (i__22734__auto___34425 + (1));
i__22734__auto___34425 = G__34426;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq34423){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34423));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34428 = arguments.length;
var i__22734__auto___34429 = (0);
while(true){
if((i__22734__auto___34429 < len__22733__auto___34428)){
args__22740__auto__.push((arguments[i__22734__auto___34429]));

var G__34430 = (i__22734__auto___34429 + (1));
i__22734__auto___34429 = G__34430;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq34427){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34427));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34432 = arguments.length;
var i__22734__auto___34433 = (0);
while(true){
if((i__22734__auto___34433 < len__22733__auto___34432)){
args__22740__auto__.push((arguments[i__22734__auto___34433]));

var G__34434 = (i__22734__auto___34433 + (1));
i__22734__auto___34433 = G__34434;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq34431){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34431));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34436 = arguments.length;
var i__22734__auto___34437 = (0);
while(true){
if((i__22734__auto___34437 < len__22733__auto___34436)){
args__22740__auto__.push((arguments[i__22734__auto___34437]));

var G__34438 = (i__22734__auto___34437 + (1));
i__22734__auto___34437 = G__34438;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq34435){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34435));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34440 = arguments.length;
var i__22734__auto___34441 = (0);
while(true){
if((i__22734__auto___34441 < len__22733__auto___34440)){
args__22740__auto__.push((arguments[i__22734__auto___34441]));

var G__34442 = (i__22734__auto___34441 + (1));
i__22734__auto___34441 = G__34442;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq34439){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34439));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34444 = arguments.length;
var i__22734__auto___34445 = (0);
while(true){
if((i__22734__auto___34445 < len__22733__auto___34444)){
args__22740__auto__.push((arguments[i__22734__auto___34445]));

var G__34446 = (i__22734__auto___34445 + (1));
i__22734__auto___34445 = G__34446;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq34443){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34443));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34448 = arguments.length;
var i__22734__auto___34449 = (0);
while(true){
if((i__22734__auto___34449 < len__22733__auto___34448)){
args__22740__auto__.push((arguments[i__22734__auto___34449]));

var G__34450 = (i__22734__auto___34449 + (1));
i__22734__auto___34449 = G__34450;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq34447){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34447));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34452 = arguments.length;
var i__22734__auto___34453 = (0);
while(true){
if((i__22734__auto___34453 < len__22733__auto___34452)){
args__22740__auto__.push((arguments[i__22734__auto___34453]));

var G__34454 = (i__22734__auto___34453 + (1));
i__22734__auto___34453 = G__34454;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq34451){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34451));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34456 = arguments.length;
var i__22734__auto___34457 = (0);
while(true){
if((i__22734__auto___34457 < len__22733__auto___34456)){
args__22740__auto__.push((arguments[i__22734__auto___34457]));

var G__34458 = (i__22734__auto___34457 + (1));
i__22734__auto___34457 = G__34458;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq34455){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34455));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34460 = arguments.length;
var i__22734__auto___34461 = (0);
while(true){
if((i__22734__auto___34461 < len__22733__auto___34460)){
args__22740__auto__.push((arguments[i__22734__auto___34461]));

var G__34462 = (i__22734__auto___34461 + (1));
i__22734__auto___34461 = G__34462;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq34459){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34459));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34464 = arguments.length;
var i__22734__auto___34465 = (0);
while(true){
if((i__22734__auto___34465 < len__22733__auto___34464)){
args__22740__auto__.push((arguments[i__22734__auto___34465]));

var G__34466 = (i__22734__auto___34465 + (1));
i__22734__auto___34465 = G__34466;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq34463){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34463));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34468 = arguments.length;
var i__22734__auto___34469 = (0);
while(true){
if((i__22734__auto___34469 < len__22733__auto___34468)){
args__22740__auto__.push((arguments[i__22734__auto___34469]));

var G__34470 = (i__22734__auto___34469 + (1));
i__22734__auto___34469 = G__34470;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq34467){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34467));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34472 = arguments.length;
var i__22734__auto___34473 = (0);
while(true){
if((i__22734__auto___34473 < len__22733__auto___34472)){
args__22740__auto__.push((arguments[i__22734__auto___34473]));

var G__34474 = (i__22734__auto___34473 + (1));
i__22734__auto___34473 = G__34474;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq34471){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34471));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34476 = arguments.length;
var i__22734__auto___34477 = (0);
while(true){
if((i__22734__auto___34477 < len__22733__auto___34476)){
args__22740__auto__.push((arguments[i__22734__auto___34477]));

var G__34478 = (i__22734__auto___34477 + (1));
i__22734__auto___34477 = G__34478;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq34475){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34475));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34480 = arguments.length;
var i__22734__auto___34481 = (0);
while(true){
if((i__22734__auto___34481 < len__22733__auto___34480)){
args__22740__auto__.push((arguments[i__22734__auto___34481]));

var G__34482 = (i__22734__auto___34481 + (1));
i__22734__auto___34481 = G__34482;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq34479){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34479));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34484 = arguments.length;
var i__22734__auto___34485 = (0);
while(true){
if((i__22734__auto___34485 < len__22733__auto___34484)){
args__22740__auto__.push((arguments[i__22734__auto___34485]));

var G__34486 = (i__22734__auto___34485 + (1));
i__22734__auto___34485 = G__34486;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq34483){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34483));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34488 = arguments.length;
var i__22734__auto___34489 = (0);
while(true){
if((i__22734__auto___34489 < len__22733__auto___34488)){
args__22740__auto__.push((arguments[i__22734__auto___34489]));

var G__34490 = (i__22734__auto___34489 + (1));
i__22734__auto___34489 = G__34490;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq34487){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34487));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34492 = arguments.length;
var i__22734__auto___34493 = (0);
while(true){
if((i__22734__auto___34493 < len__22733__auto___34492)){
args__22740__auto__.push((arguments[i__22734__auto___34493]));

var G__34494 = (i__22734__auto___34493 + (1));
i__22734__auto___34493 = G__34494;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq34491){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34491));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34496 = arguments.length;
var i__22734__auto___34497 = (0);
while(true){
if((i__22734__auto___34497 < len__22733__auto___34496)){
args__22740__auto__.push((arguments[i__22734__auto___34497]));

var G__34498 = (i__22734__auto___34497 + (1));
i__22734__auto___34497 = G__34498;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq34495){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34495));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34500 = arguments.length;
var i__22734__auto___34501 = (0);
while(true){
if((i__22734__auto___34501 < len__22733__auto___34500)){
args__22740__auto__.push((arguments[i__22734__auto___34501]));

var G__34502 = (i__22734__auto___34501 + (1));
i__22734__auto___34501 = G__34502;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq34499){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34499));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34504 = arguments.length;
var i__22734__auto___34505 = (0);
while(true){
if((i__22734__auto___34505 < len__22733__auto___34504)){
args__22740__auto__.push((arguments[i__22734__auto___34505]));

var G__34506 = (i__22734__auto___34505 + (1));
i__22734__auto___34505 = G__34506;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq34503){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34503));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34508 = arguments.length;
var i__22734__auto___34509 = (0);
while(true){
if((i__22734__auto___34509 < len__22733__auto___34508)){
args__22740__auto__.push((arguments[i__22734__auto___34509]));

var G__34510 = (i__22734__auto___34509 + (1));
i__22734__auto___34509 = G__34510;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq34507){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34507));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34512 = arguments.length;
var i__22734__auto___34513 = (0);
while(true){
if((i__22734__auto___34513 < len__22733__auto___34512)){
args__22740__auto__.push((arguments[i__22734__auto___34513]));

var G__34514 = (i__22734__auto___34513 + (1));
i__22734__auto___34513 = G__34514;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq34511){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34511));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__22740__auto__ = [];
var len__22733__auto___34516 = arguments.length;
var i__22734__auto___34517 = (0);
while(true){
if((i__22734__auto___34517 < len__22733__auto___34516)){
args__22740__auto__.push((arguments[i__22734__auto___34517]));

var G__34518 = (i__22734__auto___34517 + (1));
i__22734__auto___34517 = G__34518;
continue;
} else {
}
break;
}

var argseq__22741__auto__ = ((((0) < args__22740__auto__.length))?(new cljs.core.IndexedSeq(args__22740__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__22741__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq34515){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34515));
});


//# sourceMappingURL=core.js.map?rel=1490042961841