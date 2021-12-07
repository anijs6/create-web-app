/**
 *
 */
export function webpackCommonConfig() {
  return {
    context: process.cwd(),
    mode: options.mode,
    target: mode === 'development' ? 'web' : 'browserslist',
    entry,

    // FIXME: 关闭webpack5向后兼容，可以提高一定的性能
    experiments: {
      backCompat: false
    }
  }
}
