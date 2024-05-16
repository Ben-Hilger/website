package server

type Server interface {
	StartServer(address string)
	RegisterRoutes()
	RegisterTemplatePaths(paths ...string)
}
