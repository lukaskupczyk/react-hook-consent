import { sassPlugin } from 'esbuild-sass-plugin';
import esbuild from 'esbuild';

esbuild
    .build({
        entryPoints: ['src/styles/style.scss', 'src/index.ts'],
        bundle: true,
        minify: true,
        format: 'cjs',
        sourcemap: true,
        outdir: './dist',
        external: ['react', 'react-dom'],
        plugins: [sassPlugin()],
    })
    .catch(() => process.exit(1));
