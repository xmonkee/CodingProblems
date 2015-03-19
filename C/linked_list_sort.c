#include <stdio.h>
#include <stdlib.h>

typedef struct LL {
   int val;
   struct LL *next;
}		List;

List *cons(int car, List * cdr) {
   List *new = malloc(sizeof(List));
   new->val = car;
   new->next = cdr;
   return new;
}

void list_print(List * list) {
   while ( list != NULL ) {
      printf("%d ", list->val); 
      list = list->next;
   }
   printf("\n");
}

void list_sel_sort(List * list) {
   List *C, *S;
   int temp;

   for (C = list; C != NULL; C = C->next) {
      for(S = C->next; S != NULL; S = S->next) {
         if ( S->val <= C->val ) 
            temp = C->val;
            C->val = S->val;
            S->val = temp;
      }
   }
   return;
}


int main(int argc, char **argv) {
   int i;
   List *list = NULL;
   for (i = 0; i < 100; ++i) {
      list = cons((int)rand(), list);
   }
   list_print(list);
   list_sel_sort(list);
   list_print(list);
   return 0;
}
