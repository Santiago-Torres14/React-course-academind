import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {viteCommonjs} from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        manifest: true
    },
    plugins: [react(
        {
            babel: {
                "plugins": [
                    ["babel-plugin-styled-components",
                        {
                            "displayName": true,
                            "fileName": false
                        }
                    ]
                ]
            }
        }
    ), viteCommonjs()]
})
