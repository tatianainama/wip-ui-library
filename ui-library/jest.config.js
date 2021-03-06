module.exports = {
  roots: ["./src"],
  moduleFileExtensions: ["jsx", "js"],
  testPathIgnorePatterns: ["node_modules/"],
  testMatch: ["**/*.test.(js|jsx)"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
