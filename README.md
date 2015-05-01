Callphone
=========

这是一个可以拨打电话的phonegap android app 的plugin。

使用方法：
========
+ 项目中引入CallphonePlugin.java,CallphonePlugin.js
+ Phongegap配置文件(res->xml->config.xml)添加
+ <plugin name="Callphone" value="org.surpass.cordova.CallphonePlugin" />


API:
=========
* window.plugin.callphonePlugin.callPhone(telnumber) 

示例：
=========
* 以windows 7 和 cordova 4.2.0为例，cordova安装请参见官网
* 添加插件到工程
	D:\project>cordova plugins add ../devplugins/org.surpass.cordova.CallphonePlugin
	devplugins为插件的本地路径。如果安装网上或github中的插件的方法参照官网。
	
* 从工程中移除插件
	D:\project>cordova  plugin remove org.surpass.cordova.CallphonePlugin

编译运行
cordova run android
联系方式：
=========
* 邮件surpass_li@tom.com
* QQ  46488820

