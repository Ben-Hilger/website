package main

import (
	"fmt"
	"github.com/Ben-Hilger/website/env"
	"github.com/Ben-Hilger/website/server"
)

func main() {
	echoServer := server.NewEchoServer()

	echoServer.RegisterRoutes()
	echoServer.RegisterTemplatePaths("public/*.gohtml", "public/components/*.gohtml")

	echoServer.StartServer(getServerAddress())
}

func getServerAddress() string {
	host := env.GetEnvOrDefault("HOST", "127.0.0.1")
	port := env.GetEnvOrDefault("PORT", "8080")
	return fmt.Sprintf("%s:%s", host, port)
}
