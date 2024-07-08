import { src, dest } from 'gulp';
import concatcss from 'gulp-concat-css';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import inlinesvg from 'postcss-inline-svg';
import svgo from 'postcss-svgo';
import autoprefixer from 'autoprefixer';
import size from 'gulp-size';
import config from '../../config.json';

export const concatLibsCSS = () =>
    src(config.cssSetting.libs)
    .pipe(concatcss('libs.css'))
    .pipe(sass(config.cssSetting.sassOpts))
    .pipe(dest(config.cssSetting.dist))

export const isDev = () => {
    let i = process.argv.indexOf("deploy");
    return i === -1;
}

export const compileSCSS = () => 
    src([config.cssSetting.src], { sourcemaps: isDev })
    .pipe(sass(config.cssSetting.sassOpts))
    .pipe(postcss([
      inlinesvg(),
      svgo(),
      autoprefixer({
        remove: false, 
        cascade: false,
      }),
    ]))
    .pipe(size({
      showFiles: true
    }))
    .pipe(dest(config.cssSetting.dist, { sourcemaps: isDev }))
