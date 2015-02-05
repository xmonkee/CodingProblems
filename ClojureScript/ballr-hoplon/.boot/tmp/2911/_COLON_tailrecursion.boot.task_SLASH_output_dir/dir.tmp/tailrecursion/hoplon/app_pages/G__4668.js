// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.hoplon.app_pages.G__4668');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('state');
goog.require('state');
tailrecursion.hoplon.app_pages.G__4668.hoploninit = (function hoploninit(){return tailrecursion.hoplon.init.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__7718 = tailrecursion.hoplon.h1.call(null,"Hello, World!");return G__7718;
})(),(function (){var G__7719 = tailrecursion.hoplon.button.call(null,new cljs.core.Keyword(null,"on-click","on-click",1416542092),state.clicked_BANG_,(function (){var t__1677__auto__ = document.createTextNode("");tailrecursion.javelin.lift.call(null,((function (t__1677__auto__){
return (function (G__7720,G__7721){return G__7720.nodeValue = [cljs.core.str("Clicks: "),cljs.core.str(G__7721)].join('');
});})(t__1677__auto__))
).call(null,t__1677__auto__,state.click_count);
return t__1677__auto__;
})());return G__7719;
})()], null));
});
goog.exportSymbol('tailrecursion.hoplon.app_pages.G__4668.hoploninit', tailrecursion.hoplon.app_pages.G__4668.hoploninit);
