#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include <time.h>

#define MAX_NODE 100
#define MAX_NODE_DIGS 3
#define MAX_LINE 80
#define HORIZ_DIST 2

typedef struct Tree{
  struct Tree *left;
  struct Tree *right;
  int val;
  int ldepth;
} Tree; 

void reverse(char s[]) {
   int i, j;
   char c;
   for (i = 0, j = strlen(s)-1; i<j; i++, j--) {
      c = s[i];
      s[i] = s[j];
      s[j] = c;
   }
}

int max(int i, int j){
   return i > j ? i : j;
}

void itoa(int n, char s[]) {
   int i, sign;
   if ((sign = n) < 0)  /* record sign */
      n = -n;          /* make n positive */
   i = 0;
   do {       /* generate digits in reverse order */
      s[i++] = n % 10 + '0';   /* get next digit */
   } while ((n /= 10) > 0);     /* delete it */
   if (sign < 0)
      s[i++] = '-';
   s[i] = '\0';
   reverse(s);
}


int my_rand(int range) {
   return (int)(range*(float)rand()/RAND_MAX);
}

Tree *tree_make(int nodes) {
   Tree *new_node;
   int to_the_left;
   int to_the_right;
   assert (nodes >= 0);

   if (nodes == 0)
      return NULL;

   new_node = malloc(sizeof(Tree));
   new_node->val = my_rand(MAX_NODE);
   new_node->ldepth = -1;
   to_the_left = my_rand(nodes-1);
   to_the_right = nodes - 1 - to_the_left;
   new_node->left = tree_make(to_the_left);
   new_node->right = tree_make(to_the_right);
     
   return new_node;
}

int tree_depth(Tree *node){
   int ld, rd;
   if (node == NULL) return 0;
   ld = tree_depth(node->left);
   rd = tree_depth(node->right);
   if (ld > rd) return ld + 1;
   return rd + 1;
}


int tree_ldepth(Tree *node) {  //vertical depth (memoized)
   int ld;
   int rd;
   if (node == NULL) return 0;
   if (node->ldepth >= 0) return node->ldepth;
   rd = max(1, tree_ldepth(node->right));
   ld = tree_ldepth(node->left);
   if (ld == 0) node->ldepth = rd;
   else node->ldepth = ld + rd + 1;
   return node->ldepth;
}
   

void tree_fill_repr(char **tree_repr, Tree *node, int x, int y){
   int i=0;
   int j=0;
   int rd; //right vertical depth
   char node_repr[MAX_NODE_DIGS];

   if (node == NULL) return;

   itoa(node->val, node_repr);
   for(i=0; i < MAX_NODE_DIGS - strlen(node_repr) && y+i < MAX_LINE-1; ++i)
      *(tree_repr[x] + y + i) = '0';

   for(j=0 ; j < strlen(node_repr) && y+i+j < MAX_LINE-1; ++j)
      *(tree_repr[x] + y + i + j) = node_repr[j];

   if (node->right != NULL) {
      for(i = 0; i < HORIZ_DIST && y+i+MAX_NODE_DIGS < MAX_LINE-1; ++i) 
         tree_repr[x][y+MAX_NODE_DIGS+i] = '-';
      tree_fill_repr(tree_repr, node->right, x , y + MAX_NODE_DIGS+HORIZ_DIST);
   }

   rd = tree_ldepth(node->right);
   if (node->left != NULL) {
      for(i = x+1; i < x+rd+1; ++i) 
         tree_repr[i][y] = '|';
      tree_fill_repr(tree_repr, node->left , x+rd+1, y);
   }
   return;
}

char** tree_repr_alloc(int dimx, int dimy){
   int i,j;
   char **tree_repr = malloc(sizeof(char*)*dimx);
   for (i = 0; i < dimx; ++i) 
      tree_repr[i] = malloc(sizeof(char)*dimy);
   for(i = 0; i < dimx; ++i) {
      for(j = 0; j < dimy; ++j) 
         tree_repr[i][j] = ' ';
      tree_repr[i][j-1] = '\0';
   }
   return tree_repr;
}

void tree_repr_free(char **tree_repr, int dimx, int dimy){
   int i;
   for(i = 0; i < dimx; ++i)
      free (tree_repr[i]);
   free (tree_repr);
}

void tree_print(Tree *node) {
   int i;
   int dimx = tree_ldepth(node);
   int dimy = MAX_LINE;
   char **tree_repr = tree_repr_alloc(dimx, dimy);
   tree_fill_repr(tree_repr, node, 0, 1);
   printf("\n");
   for(i = 0; i < dimx; ++i){
      printf("%s\n", tree_repr[i]);
   }
   tree_repr_free(tree_repr, dimx, dimy);
}


int main(int argc, char **argv){
   srand(time(NULL));
   Tree *t = tree_make(30);
   tree_print(t);
   return 0;   
} 

