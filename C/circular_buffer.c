#include <stdio.h>
#include <stdlib.h>

typedef struct {
   char *base;
   char *readhead;
   char *writehead;
   int pos;
   int size;
} CB;

CB *cb_new(int size){
   cb = malloc(sizeof(CB));
   cb->readhead = cb->writehead = cb->base = malloc(sizeof(char)*size);
   cb->pos = 0;
   cb->size = size;
   return cb;
}

void *cb_fwd(CB *cb, int size){
   char *ret = cb->cur;
   cb->pos = (cb->pos + size) % cb->size;
   cb->cur = &cb->base[pos];


char *cb_read(CB *cb, int size){
   char *ret = cb.cur;
   cb->pos = (cb->pos + size) % cb->size;
   cb->cur = &cb.base[pos];
   return ret;
}

char *cb_insert(char c){



int main(){
   cb = cb_new(10);
   
