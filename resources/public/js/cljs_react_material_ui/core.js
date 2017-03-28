// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_camelCase));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var args39488 = [];
var len__19984__auto___39491 = arguments.length;
var i__19985__auto___39492 = (0);
while(true){
if((i__19985__auto___39492 < len__19984__auto___39491)){
args39488.push((arguments[i__19985__auto___39492]));

var G__39493 = (i__19985__auto___39492 + (1));
i__19985__auto___39492 = G__39493;
continue;
} else {
}
break;
}

var G__39490 = args39488.length;
switch (G__39490) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39488.length)].join('')));

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
var args39495 = [];
var len__19984__auto___39498 = arguments.length;
var i__19985__auto___39499 = (0);
while(true){
if((i__19985__auto___39499 < len__19984__auto___39498)){
args39495.push((arguments[i__19985__auto___39499]));

var G__39500 = (i__19985__auto___39499 + (1));
i__19985__auto___39499 = G__39500;
continue;
} else {
}
break;
}

var G__39497 = args39495.length;
switch (G__39497) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39495.length)].join('')));

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
var args__19991__auto__ = [];
var len__19984__auto___39503 = arguments.length;
var i__19985__auto___39504 = (0);
while(true){
if((i__19985__auto___39504 < len__19984__auto___39503)){
args__19991__auto__.push((arguments[i__19985__auto___39504]));

var G__39505 = (i__19985__auto___39504 + (1));
i__19985__auto___39504 = G__39505;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"CSSTransitionGroup",args);
});

cljs_react_material_ui.core.css_transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.css_transition_group.cljs$lang$applyTo = (function (seq39502){
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39502));
});

cljs_react_material_ui.core.transition_group = (function cljs_react_material_ui$core$transition_group(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39507 = arguments.length;
var i__19985__auto___39508 = (0);
while(true){
if((i__19985__auto___39508 < len__19984__auto___39507)){
args__19991__auto__.push((arguments[i__19985__auto___39508]));

var G__39509 = (i__19985__auto___39508 + (1));
i__19985__auto___39508 = G__39509;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"TransitionGroup",args);
});

cljs_react_material_ui.core.transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.transition_group.cljs$lang$applyTo = (function (seq39506){
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39506));
});

cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39511 = arguments.length;
var i__19985__auto___39512 = (0);
while(true){
if((i__19985__auto___39512 < len__19984__auto___39511)){
args__19991__auto__.push((arguments[i__19985__auto___39512]));

var G__39513 = (i__19985__auto___39512 + (1));
i__19985__auto___39512 = G__39513;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq39510){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39510));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39515 = arguments.length;
var i__19985__auto___39516 = (0);
while(true){
if((i__19985__auto___39516 < len__19984__auto___39515)){
args__19991__auto__.push((arguments[i__19985__auto___39516]));

var G__39517 = (i__19985__auto___39516 + (1));
i__19985__auto___39516 = G__39517;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq39514){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39514));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39519 = arguments.length;
var i__19985__auto___39520 = (0);
while(true){
if((i__19985__auto___39520 < len__19984__auto___39519)){
args__19991__auto__.push((arguments[i__19985__auto___39520]));

var G__39521 = (i__19985__auto___39520 + (1));
i__19985__auto___39520 = G__39521;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq39518){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39518));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39523 = arguments.length;
var i__19985__auto___39524 = (0);
while(true){
if((i__19985__auto___39524 < len__19984__auto___39523)){
args__19991__auto__.push((arguments[i__19985__auto___39524]));

var G__39525 = (i__19985__auto___39524 + (1));
i__19985__auto___39524 = G__39525;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq39522){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39522));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39527 = arguments.length;
var i__19985__auto___39528 = (0);
while(true){
if((i__19985__auto___39528 < len__19984__auto___39527)){
args__19991__auto__.push((arguments[i__19985__auto___39528]));

var G__39529 = (i__19985__auto___39528 + (1));
i__19985__auto___39528 = G__39529;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq39526){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39526));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39531 = arguments.length;
var i__19985__auto___39532 = (0);
while(true){
if((i__19985__auto___39532 < len__19984__auto___39531)){
args__19991__auto__.push((arguments[i__19985__auto___39532]));

var G__39533 = (i__19985__auto___39532 + (1));
i__19985__auto___39532 = G__39533;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq39530){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39530));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39535 = arguments.length;
var i__19985__auto___39536 = (0);
while(true){
if((i__19985__auto___39536 < len__19984__auto___39535)){
args__19991__auto__.push((arguments[i__19985__auto___39536]));

var G__39537 = (i__19985__auto___39536 + (1));
i__19985__auto___39536 = G__39537;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq39534){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39534));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39539 = arguments.length;
var i__19985__auto___39540 = (0);
while(true){
if((i__19985__auto___39540 < len__19984__auto___39539)){
args__19991__auto__.push((arguments[i__19985__auto___39540]));

var G__39541 = (i__19985__auto___39540 + (1));
i__19985__auto___39540 = G__39541;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq39538){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39538));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39543 = arguments.length;
var i__19985__auto___39544 = (0);
while(true){
if((i__19985__auto___39544 < len__19984__auto___39543)){
args__19991__auto__.push((arguments[i__19985__auto___39544]));

var G__39545 = (i__19985__auto___39544 + (1));
i__19985__auto___39544 = G__39545;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq39542){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39542));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39547 = arguments.length;
var i__19985__auto___39548 = (0);
while(true){
if((i__19985__auto___39548 < len__19984__auto___39547)){
args__19991__auto__.push((arguments[i__19985__auto___39548]));

var G__39549 = (i__19985__auto___39548 + (1));
i__19985__auto___39548 = G__39549;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq39546){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39546));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39551 = arguments.length;
var i__19985__auto___39552 = (0);
while(true){
if((i__19985__auto___39552 < len__19984__auto___39551)){
args__19991__auto__.push((arguments[i__19985__auto___39552]));

var G__39553 = (i__19985__auto___39552 + (1));
i__19985__auto___39552 = G__39553;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq39550){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39550));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39555 = arguments.length;
var i__19985__auto___39556 = (0);
while(true){
if((i__19985__auto___39556 < len__19984__auto___39555)){
args__19991__auto__.push((arguments[i__19985__auto___39556]));

var G__39557 = (i__19985__auto___39556 + (1));
i__19985__auto___39556 = G__39557;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq39554){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39554));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39559 = arguments.length;
var i__19985__auto___39560 = (0);
while(true){
if((i__19985__auto___39560 < len__19984__auto___39559)){
args__19991__auto__.push((arguments[i__19985__auto___39560]));

var G__39561 = (i__19985__auto___39560 + (1));
i__19985__auto___39560 = G__39561;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq39558){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39558));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39563 = arguments.length;
var i__19985__auto___39564 = (0);
while(true){
if((i__19985__auto___39564 < len__19984__auto___39563)){
args__19991__auto__.push((arguments[i__19985__auto___39564]));

var G__39565 = (i__19985__auto___39564 + (1));
i__19985__auto___39564 = G__39565;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq39562){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39562));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39567 = arguments.length;
var i__19985__auto___39568 = (0);
while(true){
if((i__19985__auto___39568 < len__19984__auto___39567)){
args__19991__auto__.push((arguments[i__19985__auto___39568]));

var G__39569 = (i__19985__auto___39568 + (1));
i__19985__auto___39568 = G__39569;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq39566){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39566));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39571 = arguments.length;
var i__19985__auto___39572 = (0);
while(true){
if((i__19985__auto___39572 < len__19984__auto___39571)){
args__19991__auto__.push((arguments[i__19985__auto___39572]));

var G__39573 = (i__19985__auto___39572 + (1));
i__19985__auto___39572 = G__39573;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq39570){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39570));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39575 = arguments.length;
var i__19985__auto___39576 = (0);
while(true){
if((i__19985__auto___39576 < len__19984__auto___39575)){
args__19991__auto__.push((arguments[i__19985__auto___39576]));

var G__39577 = (i__19985__auto___39576 + (1));
i__19985__auto___39576 = G__39577;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq39574){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39574));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39579 = arguments.length;
var i__19985__auto___39580 = (0);
while(true){
if((i__19985__auto___39580 < len__19984__auto___39579)){
args__19991__auto__.push((arguments[i__19985__auto___39580]));

var G__39581 = (i__19985__auto___39580 + (1));
i__19985__auto___39580 = G__39581;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq39578){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39578));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39583 = arguments.length;
var i__19985__auto___39584 = (0);
while(true){
if((i__19985__auto___39584 < len__19984__auto___39583)){
args__19991__auto__.push((arguments[i__19985__auto___39584]));

var G__39585 = (i__19985__auto___39584 + (1));
i__19985__auto___39584 = G__39585;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq39582){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39582));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39587 = arguments.length;
var i__19985__auto___39588 = (0);
while(true){
if((i__19985__auto___39588 < len__19984__auto___39587)){
args__19991__auto__.push((arguments[i__19985__auto___39588]));

var G__39589 = (i__19985__auto___39588 + (1));
i__19985__auto___39588 = G__39589;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq39586){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39586));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39591 = arguments.length;
var i__19985__auto___39592 = (0);
while(true){
if((i__19985__auto___39592 < len__19984__auto___39591)){
args__19991__auto__.push((arguments[i__19985__auto___39592]));

var G__39593 = (i__19985__auto___39592 + (1));
i__19985__auto___39592 = G__39593;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq39590){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39590));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39595 = arguments.length;
var i__19985__auto___39596 = (0);
while(true){
if((i__19985__auto___39596 < len__19984__auto___39595)){
args__19991__auto__.push((arguments[i__19985__auto___39596]));

var G__39597 = (i__19985__auto___39596 + (1));
i__19985__auto___39596 = G__39597;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq39594){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39594));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39599 = arguments.length;
var i__19985__auto___39600 = (0);
while(true){
if((i__19985__auto___39600 < len__19984__auto___39599)){
args__19991__auto__.push((arguments[i__19985__auto___39600]));

var G__39601 = (i__19985__auto___39600 + (1));
i__19985__auto___39600 = G__39601;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq39598){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39598));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39603 = arguments.length;
var i__19985__auto___39604 = (0);
while(true){
if((i__19985__auto___39604 < len__19984__auto___39603)){
args__19991__auto__.push((arguments[i__19985__auto___39604]));

var G__39605 = (i__19985__auto___39604 + (1));
i__19985__auto___39604 = G__39605;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq39602){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39602));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39607 = arguments.length;
var i__19985__auto___39608 = (0);
while(true){
if((i__19985__auto___39608 < len__19984__auto___39607)){
args__19991__auto__.push((arguments[i__19985__auto___39608]));

var G__39609 = (i__19985__auto___39608 + (1));
i__19985__auto___39608 = G__39609;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq39606){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39606));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39611 = arguments.length;
var i__19985__auto___39612 = (0);
while(true){
if((i__19985__auto___39612 < len__19984__auto___39611)){
args__19991__auto__.push((arguments[i__19985__auto___39612]));

var G__39613 = (i__19985__auto___39612 + (1));
i__19985__auto___39612 = G__39613;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq39610){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39610));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39615 = arguments.length;
var i__19985__auto___39616 = (0);
while(true){
if((i__19985__auto___39616 < len__19984__auto___39615)){
args__19991__auto__.push((arguments[i__19985__auto___39616]));

var G__39617 = (i__19985__auto___39616 + (1));
i__19985__auto___39616 = G__39617;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq39614){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39614));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39619 = arguments.length;
var i__19985__auto___39620 = (0);
while(true){
if((i__19985__auto___39620 < len__19984__auto___39619)){
args__19991__auto__.push((arguments[i__19985__auto___39620]));

var G__39621 = (i__19985__auto___39620 + (1));
i__19985__auto___39620 = G__39621;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq39618){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39618));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39623 = arguments.length;
var i__19985__auto___39624 = (0);
while(true){
if((i__19985__auto___39624 < len__19984__auto___39623)){
args__19991__auto__.push((arguments[i__19985__auto___39624]));

var G__39625 = (i__19985__auto___39624 + (1));
i__19985__auto___39624 = G__39625;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq39622){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39622));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39627 = arguments.length;
var i__19985__auto___39628 = (0);
while(true){
if((i__19985__auto___39628 < len__19984__auto___39627)){
args__19991__auto__.push((arguments[i__19985__auto___39628]));

var G__39629 = (i__19985__auto___39628 + (1));
i__19985__auto___39628 = G__39629;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq39626){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39626));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39631 = arguments.length;
var i__19985__auto___39632 = (0);
while(true){
if((i__19985__auto___39632 < len__19984__auto___39631)){
args__19991__auto__.push((arguments[i__19985__auto___39632]));

var G__39633 = (i__19985__auto___39632 + (1));
i__19985__auto___39632 = G__39633;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq39630){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39630));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39635 = arguments.length;
var i__19985__auto___39636 = (0);
while(true){
if((i__19985__auto___39636 < len__19984__auto___39635)){
args__19991__auto__.push((arguments[i__19985__auto___39636]));

var G__39637 = (i__19985__auto___39636 + (1));
i__19985__auto___39636 = G__39637;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq39634){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39634));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39639 = arguments.length;
var i__19985__auto___39640 = (0);
while(true){
if((i__19985__auto___39640 < len__19984__auto___39639)){
args__19991__auto__.push((arguments[i__19985__auto___39640]));

var G__39641 = (i__19985__auto___39640 + (1));
i__19985__auto___39640 = G__39641;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq39638){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39638));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39643 = arguments.length;
var i__19985__auto___39644 = (0);
while(true){
if((i__19985__auto___39644 < len__19984__auto___39643)){
args__19991__auto__.push((arguments[i__19985__auto___39644]));

var G__39645 = (i__19985__auto___39644 + (1));
i__19985__auto___39644 = G__39645;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq39642){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39642));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39647 = arguments.length;
var i__19985__auto___39648 = (0);
while(true){
if((i__19985__auto___39648 < len__19984__auto___39647)){
args__19991__auto__.push((arguments[i__19985__auto___39648]));

var G__39649 = (i__19985__auto___39648 + (1));
i__19985__auto___39648 = G__39649;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq39646){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39646));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39651 = arguments.length;
var i__19985__auto___39652 = (0);
while(true){
if((i__19985__auto___39652 < len__19984__auto___39651)){
args__19991__auto__.push((arguments[i__19985__auto___39652]));

var G__39653 = (i__19985__auto___39652 + (1));
i__19985__auto___39652 = G__39653;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq39650){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39650));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39655 = arguments.length;
var i__19985__auto___39656 = (0);
while(true){
if((i__19985__auto___39656 < len__19984__auto___39655)){
args__19991__auto__.push((arguments[i__19985__auto___39656]));

var G__39657 = (i__19985__auto___39656 + (1));
i__19985__auto___39656 = G__39657;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq39654){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39654));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39659 = arguments.length;
var i__19985__auto___39660 = (0);
while(true){
if((i__19985__auto___39660 < len__19984__auto___39659)){
args__19991__auto__.push((arguments[i__19985__auto___39660]));

var G__39661 = (i__19985__auto___39660 + (1));
i__19985__auto___39660 = G__39661;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq39658){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39658));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39663 = arguments.length;
var i__19985__auto___39664 = (0);
while(true){
if((i__19985__auto___39664 < len__19984__auto___39663)){
args__19991__auto__.push((arguments[i__19985__auto___39664]));

var G__39665 = (i__19985__auto___39664 + (1));
i__19985__auto___39664 = G__39665;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq39662){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39662));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39667 = arguments.length;
var i__19985__auto___39668 = (0);
while(true){
if((i__19985__auto___39668 < len__19984__auto___39667)){
args__19991__auto__.push((arguments[i__19985__auto___39668]));

var G__39669 = (i__19985__auto___39668 + (1));
i__19985__auto___39668 = G__39669;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq39666){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39666));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39671 = arguments.length;
var i__19985__auto___39672 = (0);
while(true){
if((i__19985__auto___39672 < len__19984__auto___39671)){
args__19991__auto__.push((arguments[i__19985__auto___39672]));

var G__39673 = (i__19985__auto___39672 + (1));
i__19985__auto___39672 = G__39673;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq39670){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39670));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39675 = arguments.length;
var i__19985__auto___39676 = (0);
while(true){
if((i__19985__auto___39676 < len__19984__auto___39675)){
args__19991__auto__.push((arguments[i__19985__auto___39676]));

var G__39677 = (i__19985__auto___39676 + (1));
i__19985__auto___39676 = G__39677;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq39674){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39674));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39679 = arguments.length;
var i__19985__auto___39680 = (0);
while(true){
if((i__19985__auto___39680 < len__19984__auto___39679)){
args__19991__auto__.push((arguments[i__19985__auto___39680]));

var G__39681 = (i__19985__auto___39680 + (1));
i__19985__auto___39680 = G__39681;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq39678){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39678));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39683 = arguments.length;
var i__19985__auto___39684 = (0);
while(true){
if((i__19985__auto___39684 < len__19984__auto___39683)){
args__19991__auto__.push((arguments[i__19985__auto___39684]));

var G__39685 = (i__19985__auto___39684 + (1));
i__19985__auto___39684 = G__39685;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq39682){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39682));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39687 = arguments.length;
var i__19985__auto___39688 = (0);
while(true){
if((i__19985__auto___39688 < len__19984__auto___39687)){
args__19991__auto__.push((arguments[i__19985__auto___39688]));

var G__39689 = (i__19985__auto___39688 + (1));
i__19985__auto___39688 = G__39689;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq39686){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39686));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39691 = arguments.length;
var i__19985__auto___39692 = (0);
while(true){
if((i__19985__auto___39692 < len__19984__auto___39691)){
args__19991__auto__.push((arguments[i__19985__auto___39692]));

var G__39693 = (i__19985__auto___39692 + (1));
i__19985__auto___39692 = G__39693;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq39690){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39690));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39695 = arguments.length;
var i__19985__auto___39696 = (0);
while(true){
if((i__19985__auto___39696 < len__19984__auto___39695)){
args__19991__auto__.push((arguments[i__19985__auto___39696]));

var G__39697 = (i__19985__auto___39696 + (1));
i__19985__auto___39696 = G__39697;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq39694){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39694));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39699 = arguments.length;
var i__19985__auto___39700 = (0);
while(true){
if((i__19985__auto___39700 < len__19984__auto___39699)){
args__19991__auto__.push((arguments[i__19985__auto___39700]));

var G__39701 = (i__19985__auto___39700 + (1));
i__19985__auto___39700 = G__39701;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq39698){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39698));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39703 = arguments.length;
var i__19985__auto___39704 = (0);
while(true){
if((i__19985__auto___39704 < len__19984__auto___39703)){
args__19991__auto__.push((arguments[i__19985__auto___39704]));

var G__39705 = (i__19985__auto___39704 + (1));
i__19985__auto___39704 = G__39705;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq39702){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39702));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39707 = arguments.length;
var i__19985__auto___39708 = (0);
while(true){
if((i__19985__auto___39708 < len__19984__auto___39707)){
args__19991__auto__.push((arguments[i__19985__auto___39708]));

var G__39709 = (i__19985__auto___39708 + (1));
i__19985__auto___39708 = G__39709;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq39706){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39706));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39711 = arguments.length;
var i__19985__auto___39712 = (0);
while(true){
if((i__19985__auto___39712 < len__19984__auto___39711)){
args__19991__auto__.push((arguments[i__19985__auto___39712]));

var G__39713 = (i__19985__auto___39712 + (1));
i__19985__auto___39712 = G__39713;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq39710){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39710));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39715 = arguments.length;
var i__19985__auto___39716 = (0);
while(true){
if((i__19985__auto___39716 < len__19984__auto___39715)){
args__19991__auto__.push((arguments[i__19985__auto___39716]));

var G__39717 = (i__19985__auto___39716 + (1));
i__19985__auto___39716 = G__39717;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq39714){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39714));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39719 = arguments.length;
var i__19985__auto___39720 = (0);
while(true){
if((i__19985__auto___39720 < len__19984__auto___39719)){
args__19991__auto__.push((arguments[i__19985__auto___39720]));

var G__39721 = (i__19985__auto___39720 + (1));
i__19985__auto___39720 = G__39721;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq39718){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39718));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39723 = arguments.length;
var i__19985__auto___39724 = (0);
while(true){
if((i__19985__auto___39724 < len__19984__auto___39723)){
args__19991__auto__.push((arguments[i__19985__auto___39724]));

var G__39725 = (i__19985__auto___39724 + (1));
i__19985__auto___39724 = G__39725;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq39722){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39722));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39727 = arguments.length;
var i__19985__auto___39728 = (0);
while(true){
if((i__19985__auto___39728 < len__19984__auto___39727)){
args__19991__auto__.push((arguments[i__19985__auto___39728]));

var G__39729 = (i__19985__auto___39728 + (1));
i__19985__auto___39728 = G__39729;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq39726){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39726));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39731 = arguments.length;
var i__19985__auto___39732 = (0);
while(true){
if((i__19985__auto___39732 < len__19984__auto___39731)){
args__19991__auto__.push((arguments[i__19985__auto___39732]));

var G__39733 = (i__19985__auto___39732 + (1));
i__19985__auto___39732 = G__39733;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq39730){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39730));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39735 = arguments.length;
var i__19985__auto___39736 = (0);
while(true){
if((i__19985__auto___39736 < len__19984__auto___39735)){
args__19991__auto__.push((arguments[i__19985__auto___39736]));

var G__39737 = (i__19985__auto___39736 + (1));
i__19985__auto___39736 = G__39737;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq39734){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39734));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39739 = arguments.length;
var i__19985__auto___39740 = (0);
while(true){
if((i__19985__auto___39740 < len__19984__auto___39739)){
args__19991__auto__.push((arguments[i__19985__auto___39740]));

var G__39741 = (i__19985__auto___39740 + (1));
i__19985__auto___39740 = G__39741;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq39738){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39738));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39743 = arguments.length;
var i__19985__auto___39744 = (0);
while(true){
if((i__19985__auto___39744 < len__19984__auto___39743)){
args__19991__auto__.push((arguments[i__19985__auto___39744]));

var G__39745 = (i__19985__auto___39744 + (1));
i__19985__auto___39744 = G__39745;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq39742){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39742));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39747 = arguments.length;
var i__19985__auto___39748 = (0);
while(true){
if((i__19985__auto___39748 < len__19984__auto___39747)){
args__19991__auto__.push((arguments[i__19985__auto___39748]));

var G__39749 = (i__19985__auto___39748 + (1));
i__19985__auto___39748 = G__39749;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq39746){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39746));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39751 = arguments.length;
var i__19985__auto___39752 = (0);
while(true){
if((i__19985__auto___39752 < len__19984__auto___39751)){
args__19991__auto__.push((arguments[i__19985__auto___39752]));

var G__39753 = (i__19985__auto___39752 + (1));
i__19985__auto___39752 = G__39753;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq39750){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39750));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39755 = arguments.length;
var i__19985__auto___39756 = (0);
while(true){
if((i__19985__auto___39756 < len__19984__auto___39755)){
args__19991__auto__.push((arguments[i__19985__auto___39756]));

var G__39757 = (i__19985__auto___39756 + (1));
i__19985__auto___39756 = G__39757;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq39754){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39754));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39759 = arguments.length;
var i__19985__auto___39760 = (0);
while(true){
if((i__19985__auto___39760 < len__19984__auto___39759)){
args__19991__auto__.push((arguments[i__19985__auto___39760]));

var G__39761 = (i__19985__auto___39760 + (1));
i__19985__auto___39760 = G__39761;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq39758){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39758));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39763 = arguments.length;
var i__19985__auto___39764 = (0);
while(true){
if((i__19985__auto___39764 < len__19984__auto___39763)){
args__19991__auto__.push((arguments[i__19985__auto___39764]));

var G__39765 = (i__19985__auto___39764 + (1));
i__19985__auto___39764 = G__39765;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq39762){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39762));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39767 = arguments.length;
var i__19985__auto___39768 = (0);
while(true){
if((i__19985__auto___39768 < len__19984__auto___39767)){
args__19991__auto__.push((arguments[i__19985__auto___39768]));

var G__39769 = (i__19985__auto___39768 + (1));
i__19985__auto___39768 = G__39769;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq39766){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39766));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__19991__auto__ = [];
var len__19984__auto___39771 = arguments.length;
var i__19985__auto___39772 = (0);
while(true){
if((i__19985__auto___39772 < len__19984__auto___39771)){
args__19991__auto__.push((arguments[i__19985__auto___39772]));

var G__39773 = (i__19985__auto___39772 + (1));
i__19985__auto___39772 = G__39773;
continue;
} else {
}
break;
}

var argseq__19992__auto__ = ((((0) < args__19991__auto__.length))?(new cljs.core.IndexedSeq(args__19991__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__19992__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq39770){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39770));
});


//# sourceMappingURL=core.js.map