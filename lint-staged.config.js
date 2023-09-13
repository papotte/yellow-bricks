module.exports = {
	"*": () => ["bun run check-secret", "bun run format"],
	"*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
	"**/*.ts?(x)": () => "bun run check-types",
};
