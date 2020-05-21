import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'umd',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    plugins: [
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        resolve(),
        commonjs(),
        terser(),
    ],
};