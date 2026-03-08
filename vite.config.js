import {defineConfig} from 'vite';
import path from 'path';
export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'render-fonts',
            fileName: format => (format === 'umd' ? 'main.js' : `main.${format}.js`),
            formats: ['umd']
        }
    }
});
