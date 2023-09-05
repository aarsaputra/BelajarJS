package main

import "fmt"

func main () {
    userAge := 22

    if userAge >= 18 {
        fmt.Println("Eligible")
    } else {
        fmt.Println("Not Eligible")
    }
}