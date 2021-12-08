type mode = 'development' | 'production'

export interface WebpackCommonConfigOptions {
  /**
   * 开发环境还是生产模式
   *
   * @default 'development'
   */
  mode: mode
}
