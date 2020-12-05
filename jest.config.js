module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/app'],
    moduleNameMapper: {
        "\\.css$": "<rootDir>/__mocks__/style.mock.js"

    },
    "transform": {
        ".+\\.(ts|tsx)$": "ts-jest",
        "\\.handlebars": "jest-handlebars",
    }
};
