package main

import (
	"github.com/Ben-Hilger/website/template"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

func main() {
	echoServer := echo.New()

	echoServer.Pre(middleware.RemoveTrailingSlash())
	echoServer.Use(middleware.Recover())

	template.NewTemplateRenderer(echoServer, "public/index.html")

	echoServer.GET("/hello", handleHelloRoute)

	echoServer.Logger.Fatal(echoServer.Start(":8080"))
}

func handleHelloRoute(context echo.Context) error {
	return context.Render(http.StatusOK, "index", nil)
}
