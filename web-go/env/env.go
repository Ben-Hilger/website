package env

import "os"

func GetEnvOrDefault(env string, fallback string) string {
	value := os.Getenv(env)
	if value == "" {
		value = fallback
	}
	return value
}
