import { sassPlugin } from 'esbuild-sass-plugin';
import esbuild from 'esbuild';

const base = {
    entryPoints: ['src/styles/style.scss', 'src/index.ts'],
    bundle: true,
    minify: true,
    format: 'cjs',
    sourcemap: true,
    outdir: './dist',
    external: ['react', 'react-dom'],
    plugins: [sassPlugin()],
};

const modes = {
    production: {},
    dev: { watch: true },
};

const args = process.argv.slice(2);
const mode = args[0];

if (!(mode in modes)) {
    throw new Error('mode not set');
}

esbuild.build({ ...base, ...modes[mode] }).catch(() => process.exit(1));
