module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@con': '@/components/content',
        '@com': '@/components/common',
        '@as': '@/assets',
        '@cn': '@/common',
        '@net': '@/network',
        '@view': '@/views'
      },
    }
  }
}
