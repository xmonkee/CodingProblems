#include <stdarg.h>
#include <stdlib.h>
#include<stdio.h>

void vararg(int k, ...){
   va_list argp;
   va_start(argp, k);
   int i;
   for(i=0; i<k; i++){
      printf("%d\n", va_arg(argp, int));
   }
   va_end(argp);
}

int main(){
   vararg(3,1,2);
}
