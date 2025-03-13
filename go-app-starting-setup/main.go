package main

import (
	"fmt"
)

func main() {
	fmt.Println("Welcome to your go application")
	fname, lname, age := getUserDetails()
	fmt.Printf("The name is the user is  %s %s, and the user is  %d years old \n", fname, lname, age)
}

func getUserDetails() (string, string, int) {
	var fname string
	var lname string
	var ageOfUser int
	fmt.Println("Please enter your first name")
	fmt.Scan(&fname)
	fmt.Println("Please enter last name")
	fmt.Scan(&lname)
	fmt.Println("Please enter age")
	fmt.Scan(&ageOfUser)
	fmt.Println("Please enter number of tickets required")

	return fname, lname, ageOfUser
}
