V2-----------------------
在webpack.base.conf.js里的第39行增加'css': resolve('src/assets/css'),可以简化路径
在js文件家中这种简化路径需要在前面加上波浪线，而在css文件中则不需要
在var.styl文件中定义两个变量  类似java中的常量值，只需要在var.styl文件中改变数值，则被引用的所有地方都会更改
