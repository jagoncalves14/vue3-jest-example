module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
		"^.+\\.ts$": "ts-jest",
  	"^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/internals/'
  ],
  moduleNameMapper: {
		'^@/(.*)$': "<rootDir>/src/$1",
	},
	moduleFileExtensions: ["vue", "ts", "tsx", "js", "jsx", "json"],
	testMatch: ["<rootDir>/src/**/*.spec.(js|ts)"],
	testEnvironment: "jsdom",
	snapshotSerializers: ["jest-serializer-vue"],
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.{vue,ts,js}",
		"!src/**/*.spec.{ts,js}",
    "!src/**/*.d.ts",
		"!**/node_modules/**"
	],
	coverageDirectory: "<rootDir>/coverage"
}
