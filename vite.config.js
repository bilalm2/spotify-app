import {defineConfig} from "vite";

const {resolve} = require('path')


export default defineConfig({
    build: {
        target: 'esnext', //browsers can handle the latest ES features
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                tracks: resolve(__dirname, 'src/Tracks/index.html'),
                artists: resolve(__dirname, 'src/Artists/index.html'),
                profile: resolve(__dirname, 'src/Profile/index.html')
            },
        },
    },
})

