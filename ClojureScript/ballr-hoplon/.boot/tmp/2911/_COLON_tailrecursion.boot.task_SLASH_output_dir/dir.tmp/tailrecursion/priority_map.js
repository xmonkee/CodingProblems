// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
})
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__6414__auto__,writer__6415__auto__,opt__6416__auto__){return cljs.core._write.call(null,writer__6415__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__6258__auto__ = self__.__hash;if(!((h__6258__auto__ == null)))
{return h__6258__auto__;
} else
{var h__6258__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);self__.__hash = h__6258__auto____$1;
return h__6258__auto____$1;
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){var self__ = this;
var coll__$1 = this;return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){var self__ = this;
var this$__$1 = this;var temp__4090__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);if(cljs.core.truth_(temp__4090__auto__))
{var current_priority = temp__4090__auto__;if(cljs.core._EQ_.call(null,current_priority,priority))
{return this$__$1;
} else
{var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__7937 = null;
var G__7937__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__7937__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__7937 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__7937__2.call(this,self__,item);
case 3:
return G__7937__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7937;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args7912){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7912)));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.seq.call(null,(function (){var iter__6564__auto__ = (function iter__7913(s__7914){return (new cljs.core.LazySeq(null,(function (){var s__7914__$1 = s__7914;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7914__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__7920 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__7920,0,null);var item_set = cljs.core.nth.call(null,vec__7920,1,null);var iterys__6560__auto__ = ((function (s__7914__$1,vec__7920,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__7915(s__7916){return (new cljs.core.LazySeq(null,((function (s__7914__$1,vec__7920,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__7916__$1 = s__7916;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7916__$1);if(temp__4092__auto____$1)
{var s__7916__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7916__$2))
{var c__6562__auto__ = cljs.core.chunk_first.call(null,s__7916__$2);var size__6563__auto__ = cljs.core.count.call(null,c__6562__auto__);var b__7918 = cljs.core.chunk_buffer.call(null,size__6563__auto__);if((function (){var i__7917 = 0;while(true){
if((i__7917 < size__6563__auto__))
{var item = cljs.core._nth.call(null,c__6562__auto__,i__7917);cljs.core.chunk_append.call(null,b__7918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__7938 = (i__7917 + 1);
i__7917 = G__7938;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7918),iter__7915.call(null,cljs.core.chunk_rest.call(null,s__7916__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7918),null);
}
} else
{var item = cljs.core.first.call(null,s__7916__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__7915.call(null,cljs.core.rest.call(null,s__7916__$2)));
}
} else
{return null;
}
break;
}
});})(s__7914__$1,vec__7920,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__7914__$1,vec__7920,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__6561__auto__ = cljs.core.seq.call(null,iterys__6560__auto__.call(null,item_set));if(fs__6561__auto__)
{return cljs.core.concat.call(null,fs__6561__auto__,iter__7913.call(null,cljs.core.rest.call(null,s__7914__$1)));
} else
{{
var G__7939 = cljs.core.rest.call(null,s__7914__$1);
s__7914__$1 = G__7939;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6564__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));return cljs.core.seq.call(null,(function (){var iter__6564__auto__ = (function iter__7921(s__7922){return (new cljs.core.LazySeq(null,(function (){var s__7922__$1 = s__7922;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7922__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__7928 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__7928,0,null);var item_set = cljs.core.nth.call(null,vec__7928,1,null);var iterys__6560__auto__ = ((function (s__7922__$1,vec__7928,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__7923(s__7924){return (new cljs.core.LazySeq(null,((function (s__7922__$1,vec__7928,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__7924__$1 = s__7924;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7924__$1);if(temp__4092__auto____$1)
{var s__7924__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7924__$2))
{var c__6562__auto__ = cljs.core.chunk_first.call(null,s__7924__$2);var size__6563__auto__ = cljs.core.count.call(null,c__6562__auto__);var b__7926 = cljs.core.chunk_buffer.call(null,size__6563__auto__);if((function (){var i__7925 = 0;while(true){
if((i__7925 < size__6563__auto__))
{var item = cljs.core._nth.call(null,c__6562__auto__,i__7925);cljs.core.chunk_append.call(null,b__7926,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__7940 = (i__7925 + 1);
i__7925 = G__7940;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7926),iter__7923.call(null,cljs.core.chunk_rest.call(null,s__7924__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7926),null);
}
} else
{var item = cljs.core.first.call(null,s__7924__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__7923.call(null,cljs.core.rest.call(null,s__7924__$2)));
}
} else
{return null;
}
break;
}
});})(s__7922__$1,vec__7928,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__7922__$1,vec__7928,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__6561__auto__ = cljs.core.seq.call(null,iterys__6560__auto__.call(null,item_set));if(fs__6561__auto__)
{return cljs.core.concat.call(null,fs__6561__auto__,iter__7921.call(null,cljs.core.rest.call(null,s__7922__$1)));
} else
{{
var G__7941 = cljs.core.rest.call(null,s__7922__$1);
s__7922__$1 = G__7941;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6564__auto__.call(null,sets);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return cljs.core.val.call(null,entry);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.compare;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.seq.call(null,(function (){var iter__6564__auto__ = (function iter__7929(s__7930){return (new cljs.core.LazySeq(null,(function (){var s__7930__$1 = s__7930;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7930__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__7936 = cljs.core.first.call(null,xs__4579__auto__);var priority = cljs.core.nth.call(null,vec__7936,0,null);var item_set = cljs.core.nth.call(null,vec__7936,1,null);var iterys__6560__auto__ = ((function (s__7930__$1,vec__7936,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function iter__7931(s__7932){return (new cljs.core.LazySeq(null,((function (s__7930__$1,vec__7936,priority,item_set,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__7932__$1 = s__7932;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7932__$1);if(temp__4092__auto____$1)
{var s__7932__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7932__$2))
{var c__6562__auto__ = cljs.core.chunk_first.call(null,s__7932__$2);var size__6563__auto__ = cljs.core.count.call(null,c__6562__auto__);var b__7934 = cljs.core.chunk_buffer.call(null,size__6563__auto__);if((function (){var i__7933 = 0;while(true){
if((i__7933 < size__6563__auto__))
{var item = cljs.core._nth.call(null,c__6562__auto__,i__7933);cljs.core.chunk_append.call(null,b__7934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__7942 = (i__7933 + 1);
i__7933 = G__7942;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7934),iter__7931.call(null,cljs.core.chunk_rest.call(null,s__7932__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7934),null);
}
} else
{var item = cljs.core.first.call(null,s__7932__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__7931.call(null,cljs.core.rest.call(null,s__7932__$2)));
}
} else
{return null;
}
break;
}
});})(s__7930__$1,vec__7936,priority,item_set,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__7930__$1,vec__7936,priority,item_set,xs__4579__auto__,temp__4092__auto__))
;var fs__6561__auto__ = cljs.core.seq.call(null,iterys__6560__auto__.call(null,item_set));if(fs__6561__auto__)
{return cljs.core.concat.call(null,fs__6561__auto__,iter__7929.call(null,cljs.core.rest.call(null,s__7930__$1)));
} else
{{
var G__7943 = cljs.core.rest.call(null,s__7930__$1);
s__7930__$1 = G__7943;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6564__auto__.call(null,self__.priority__GT_set_of_items);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.item__GT_priority);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{return null;
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], null);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.item__GT_priority) === 0))
{throw (new Error("Can't pop empty priority map"));
} else
{var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);var item_set = cljs.core.val.call(null,f);var item = cljs.core.first.call(null,item_set);var priority = cljs.core.key.call(null,f);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){var self__ = this;
var this$__$1 = this;return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644));if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644)))
{return this$__$1;
} else
{var item_set = self__.priority__GT_set_of_items.call(null,priority);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function __GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function pm_empty_by(comparator){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function read_priority_map(elems){if(cljs.core.map_QMARK_.call(null,elems))
{return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
* keyval => key val
* Returns a new priority map with supplied mappings.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map = (function() { 
var priority_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;while(true){
if(in$)
{{
var G__7944 = cljs.core.nnext.call(null,in$);
var G__7945 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__7944;
out = G__7945;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return priority_map__delegate.call(this,keyvals);};
priority_map.cljs$lang$maxFixedArity = 0;
priority_map.cljs$lang$applyTo = (function (arglist__7946){
var keyvals = cljs.core.seq(arglist__7946);
return priority_map__delegate(keyvals);
});
priority_map.cljs$core$IFn$_invoke$arity$variadic = priority_map__delegate;
return priority_map;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_by = (function() { 
var priority_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);while(true){
if(in$)
{{
var G__7947 = cljs.core.nnext.call(null,in$);
var G__7948 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__7947;
out = G__7948;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return priority_map_by__delegate.call(this,comparator,keyvals);};
priority_map_by.cljs$lang$maxFixedArity = 1;
priority_map_by.cljs$lang$applyTo = (function (arglist__7949){
var comparator = cljs.core.first(arglist__7949);
var keyvals = cljs.core.rest(arglist__7949);
return priority_map_by__delegate(comparator,keyvals);
});
priority_map_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_by__delegate;
return priority_map_by;
})()
;
