
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

int fibonacci(int curr, int final, int last1, int last2){
   if (curr==final) return last1 + last2;
   return (fibonacci(curr+1, final, last1+last2, last1));
}

int main(int argc, char **argv){
   assert (argc == 2);
   assert (atoi(argv[1]) > 0);
   printf ("%d \n", fibonacci(1, atoi(argv[1]), 1, 0));
   return 0;
} 
