fis.hook('commonjs',{
	extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

fis.match('/node_modules/**.js', {
    isMod: true,
    useSameNameRequire: true
});

fis.unhook('components');
fis.hook('node_modules',{});

fis.match('**/modules/**.js',{
	isMod:true,
	useSameNameRequire: true,
});







fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});


fis.match('**.vue', {
  isMod: true,
  rExt: 'js',
  useSameNameRequire: true,
  //optimizer: fis.plugin('uglify-js'),
  parser: [
    fis.plugin('vue-component', {
      // vue@2.x runtimeOnly
      runtimeOnly: true,          // vue@2.x 有runtimeOnly模式，为true时，template会在构建时转为render方法

      // styleNameJoin
      styleNameJoin: '',          // 样式文件命名连接符 `component-xx-a.css`

      extractCSS: false,           // 是否将css生成新的文件, 如果为false, 则会内联到js中

      // css scoped
      cssScopedIdPrefix: '_v-',   // hash前缀：_v-23j232jj
      cssScopedHashType: 'sum',   // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5`
      cssScopedHashLength: 8,     // hash 长度，cssScopedHashType为md5时有效

      cssScopedFlag: '__vuec__',  // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空
    })
  ],
});



// 清除其他配置，只保留如下配置
fis.match('**.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  //optimizer: fis.plugin('uglify-js'),
   release:'.$0',
   url:'www$0',
});

fis.match('**.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  //optimizer: fis.plugin('clean-css'),
  release:'.$0',
  url:'www$0',
});

fis.match('**.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  //optimizer: fis.plugin('png-compressor'),
  release:'.$0',
  url:'www$0',
});

fis.match('**.ttf', {
  release:'.$0',
  url:'www$0',
});


fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: 'C:/Users/Administrator/AppData/Local/.fis3-tmp/www/www'
  })
})





