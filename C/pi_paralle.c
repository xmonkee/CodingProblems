#include <omp.h>
#include <stdio.h>
#include <math.h>

#define NUMSTEPS 1000000000

int main(){

   double stepsize = 1.0/NUMSTEPS;
   double pi = 0;
   int i;

   double t = omp_get_wtime();

#pragma omp parallel 
   {
      double x;
#pragma omp for reduction(+:pi) schedule(runtime)
      for(i = 0; i<NUMSTEPS; i++){
         x = i*1.0/NUMSTEPS;
         pi += 4/sqrt(1.0- x*x)*stepsize;
      }
   }

   printf("%f\n", pi/2);
   printf("%f\n", omp_get_wtime()-t);
}

