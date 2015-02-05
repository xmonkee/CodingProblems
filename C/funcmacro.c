#include <stdio.h>

void myfunc(void)    {  
            printf("%s\n",__func__);  
                     printf("size of __func__ = %d\n", sizeof(__func__));  
}  

int main() {  
        myfunc();  
} 

