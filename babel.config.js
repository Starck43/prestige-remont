module.exports = {
    presets: [["next/babel"]],
    plugins: [
        [
            "babel-plugin-direct-import",
            { modules: ["@mui/material", "@mui/icons-material"] },
        ],
        ["inline-react-svg"],
    ],
}
