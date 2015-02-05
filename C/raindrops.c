#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv){
  char *num;
  scanf("%s", num);
  while(atof(num)!=0){
          printf("%s\n", num);
          scanf("%s", num);
  }

}
