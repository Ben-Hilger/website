package server

import (
	"errors"
	"fmt"
	"github.com/Ben-Hilger/website/book"
	"github.com/Ben-Hilger/website/portfolio"
	"github.com/Ben-Hilger/website/types"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"io"
	"net/http"
	"text/template"
)

type EchoServer struct {
	server *echo.Echo
}

func NewEchoServer() Server {
	echoServer := echo.New()

	echoServer.Pre(middleware.RemoveTrailingSlash())
	echoServer.Use(middleware.Recover())

	return EchoServer{server: echoServer}
}

func (e EchoServer) RegisterRoutes() {
	e.server.GET("/hello-world", handleHelloWorldRoute)
	e.server.GET("/portfolio", handlePortfolioRoute)
	e.server.GET("/books", handleBooksRoute)
	e.server.GET("/blog", handleBlogRoute)
	e.server.GET("/", handleIndexRoute)

	e.server.Static("/assets", "assets")
	e.server.File("/favicon.ico", "assets/favicon.ico")
}

func (e EchoServer) StartServer(address string) {
	e.server.Logger.Fatal(e.server.Start(address))
}

func (e EchoServer) RegisterTemplatePaths(paths ...string) {
	newTemplateRenderer(e.server, paths...)
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

type Template struct {
	Templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, _ echo.Context) error {
	return t.Templates.ExecuteTemplate(w, name, data)
}

func newTemplateRenderer(e *echo.Echo, paths ...string) {
	tmpl := &template.Template{}

	funcMap := template.FuncMap{
		"booksReading": book.GetBooksReading,
		"booksRead":    book.GetBooksRead,
		"booksNotRead": book.GetBooksNotRead,
		"dict": func(values ...interface{}) (map[string]interface{}, error) {
			if len(values)%2 != 0 {
				return nil, errors.New("invalid dict call")
			}
			dict := make(map[string]interface{}, len(values)/2)
			for i := 0; i < len(values); i += 2 {
				key, ok := values[i].(string)
				if !ok {
					return nil, errors.New("dict keys must be strings")
				}
				dict[key] = values[i+1]
			}
			return dict, nil
		},
	}

	for i := range paths {
		template.Must(tmpl.Funcs(funcMap).ParseGlob(paths[i]))
	}
	t := newTemplate(tmpl)
	e.Renderer = t
}

func newTemplate(templates *template.Template) echo.Renderer {
	return &Template{
		Templates: templates,
	}
}
