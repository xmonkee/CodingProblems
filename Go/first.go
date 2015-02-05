package main

import "fmt"

func isEven(n int, c chan<- int) {
	if n%2 == 0{
		c <- n
	}
}

func main() {

	fib1 := 1
	fib2 := 2
	total := 0
	c := make(chan int)
	for fib1 <= 4000000 {
		fib1, fib2 = fib2, fib1+fib2
		go isEven(fib1,c) 
	}
	for {
		select {
		case e := <-c:
			total += e
		default:
			fmt.Println(total)
			return
		}
	}
	
}
