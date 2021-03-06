package routes

import (
	"backend/cmd/monolithic/entities"
	"backend/cmd/monolithic/repository"
	"fmt"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

var (
	subscriptionEmail string
)

func provideSubscription(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	var err error
	if err = r.ParseForm(); err != nil {
		fmt.Printf("error occurred")
	}

	subscriptionEmail = r.Form.Get("email")

	log.Printf(subscriptionEmail)

	if err != nil {
		fmt.Println("error occurred")
		fmt.Printf("%e", err)
	}

	su := entities.Subscription{ID: primitive.NewObjectID(), Email: subscriptionEmail}

	repository.SaveSubscription(&su)
}
