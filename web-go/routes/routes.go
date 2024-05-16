package routes

import (
	"fmt"
	"github.com/Ben-Hilger/website/book"
	"github.com/Ben-Hilger/website/portfolio"
	"github.com/Ben-Hilger/website/types"
	"github.com/labstack/echo/v4"
	"net/http"
)

func RegisterRoutes(echoServer *echo.Echo) {
	echoServer.GET("/hello-world", handleHelloWorldRoute)
	echoServer.GET("/portfolio", handlePortfolioRoute)
	echoServer.GET("/books", handleBooksRoute)
	echoServer.GET("/blog", handleBlogRoute)
	echoServer.GET("/", handleIndexRoute)

	echoServer.Static("/assets", "assets")
	echoServer.File("/favicon.ico", "assets/favicon.ico")
}

func handleIndexRoute(context echo.Context) error {
	return context.Redirect(http.StatusMovedPermanently, "/portfolio")
}

func handleBlogRoute(context echo.Context) error {
	type BlogPage struct {
		Route string
	}
	return renderIndex(context, BlogPage{Route: "/blog"})
}

func handleHelloWorldRoute(context echo.Context) error {
	return context.Render(http.StatusOK, "hello-world", nil)
}

func handlePortfolioRoute(context echo.Context) error {
	type PortfolioPage struct {
		PortfolioItems []types.Card
		Route          string
	}

	return renderIndex(context, PortfolioPage{
		Route:          "/portfolio",
		PortfolioItems: portfolio.Items,
	})
}

func handleBooksRoute(context echo.Context) error {
	type BooksPage struct {
		Books []types.BookImage
		Route string
	}

	return renderIndex(context, BooksPage{
		Books: book.Books,
		Route: "/books",
	})
}

func renderIndex(context echo.Context, data interface{}) error {
	err := context.Render(http.StatusOK, "index", data)
	if err != nil {
		fmt.Println(err)
	}
	return err
}
