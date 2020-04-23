module.exports = {
	"env": {
		"browser": true,
		"es6": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
    		"plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "../tsconfig.json"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"@typescript-eslint/semi": ["error"],
    		"@typescript-eslint/explicit-function-return-type": 0,
    		"@typescript-eslint/no-unused-vars": [
       	           "error", { "argsIgnorePattern": "^_" }
    		],
     		"@typescript-eslint/no-explicit-any": 1,
    		"no-case-declarations": 0
	}
};
