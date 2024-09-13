(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{538:function(_,v,p){"use strict";p.r(v);var n=p(9),s=Object(n.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"mysql面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql面试题"}},[_._v("#")]),_._v(" MySql面试题")]),_._v(" "),v("p",[v("strong",[_._v("1、Mysql 的存储引擎,myisam和innodb的区别。")])]),_._v(" "),v("p",[_._v("答：")]),_._v(" "),v("p",[_._v("1.MyISAM 是非事务的存储引擎，适合用于频繁查询的应用。表锁，不会出现死锁，适合小数据，小并发。")]),_._v(" "),v("p",[_._v("2.innodb是支持事务的存储引擎，合于插入和更新操作比较多的应用，设计合理的话是行锁（最大区别就在锁的级别上），适合大数据，大并发。")]),_._v(" "),v("p",[v("strong",[_._v("2、MySQL数据库作发布系统的存储，一天五万条以上的增量，预计运维三年,怎么优化？")])]),_._v(" "),v("p",[_._v("答：a. 设计良好的数据库结构，允许部分数据冗余，尽量避免join查询，提高效率。\nb. 选择合适的表字段数据类型和存储引擎，适当的添加索引。\nc. mysql库主从读写分离。\nd. 找规律分表，减少单表中的数据量提高查询速度。\ne。添加缓存机制，比如memcached，apc等。\nf. 不经常改动的页面，生成静态页面。\ng. 书写高效率的SQL。比如 SELECT * FROM TABEL 改为 SELECT field_1, field_2, field_3 FROM TABLE.")]),_._v(" "),v("p",[v("strong",[_._v("3、对于大流量的网站,您采用什么样的方法来解决各页面访问量统计问题？")])]),_._v(" "),v("p",[_._v("答：a. 确认服务器是否能支撑当前访问量。\nb. 优化数据库访问。\nc. 禁止外部访问链接（盗链）, 比如图片盗链。\nd. 控制文件下载。\ne. 使用不同主机分流。\nf. 使用浏览统计软件，了解访问量，有针对性的进行优化。")]),_._v(" "),v("p",[v("strong",[_._v("4、锁的优化策略")])]),_._v(" "),v("p",[_._v("答：① 读写分离")]),_._v(" "),v("p",[_._v("② 分段加锁")]),_._v(" "),v("p",[_._v("③ 减少锁持有的时间")]),_._v(" "),v("p",[_._v("④ 多个线程尽量以相同的顺序去获取资源")]),_._v(" "),v("p",[v("strong",[_._v("5、索引的底层实现原理和优化")])]),_._v(" "),v("p",[_._v("答：B+树，经过优化的B+树")]),_._v(" "),v("p",[_._v("主要是在所有的叶子结点中增加了指向下一个叶子节点的指针，因此InnoDB建议为大部分表使用默认自增的主键作为主索引。")]),_._v(" "),v("p",[v("strong",[_._v("6、 什么情况下设置了索引但无法使用")])]),_._v(" "),v("p",[_._v("答：① 以“%”开头的LIKE语句，模糊匹配")]),_._v(" "),v("p",[_._v("② OR语句前后没有同时使用索引")]),_._v(" "),v("p",[_._v("③ 数据类型出现隐式转化（如varchar不加单引号的话可能会自动转换为int型）")]),_._v(" "),v("p",[v("strong",[_._v("7、实践中如何优化MySQL")])]),_._v(" "),v("p",[_._v("答：① SQL语句及索引的优化")]),_._v(" "),v("p",[_._v("② 数据库表结构的优化")]),_._v(" "),v("p",[_._v("③ 系统配置的优化")]),_._v(" "),v("p",[_._v("④ 硬件的优化")]),_._v(" "),v("p",[v("strong",[_._v("8、SQL注入漏洞产生的原因？如何防止？")])]),_._v(" "),v("p",[_._v("答：SQL注入产生的原因：程序开发过程中不注意规范书写sql语句和对特殊字符进行过滤，导致客户端可以通过全局变量POST和GET提交一些sql语句正常执行。")]),_._v(" "),v("p",[_._v("防止SQL注入的方式：\n开启配置文件中的magic_quotes_gpc 和 magic_quotes_runtime设置")]),_._v(" "),v("p",[_._v("执行sql语句时使用addslashes进行sql语句转换")]),_._v(" "),v("p",[_._v("Sql语句书写尽量不要省略双引号和单引号。")]),_._v(" "),v("p",[_._v("过滤掉sql语句中的一些关键词：update、insert、delete、select、 * 。")]),_._v(" "),v("p",[_._v("提高数据库表和字段的命名技巧，对一些重要的字段根据程序的特点命名，取不易被猜到的。")]),_._v(" "),v("p",[_._v("Php配置文件中设置register_globals为off,关闭全局变量注册")]),_._v(" "),v("p",[_._v("控制错误信息，不要在浏览器上输出错误信息，将错误信息写到日志文件中。")]),_._v(" "),v("p",[v("strong",[_._v("9、索引的目的是什么？")])]),_._v(" "),v("p",[_._v("答：快速访问数据表中的特定信息，提高检索速度")]),_._v(" "),v("p",[_._v("创建唯一性索引，保证数据库表中每一行数据的唯一性。")]),_._v(" "),v("p",[_._v("加速表和表之间的连接")]),_._v(" "),v("p",[_._v("使用分组和排序子句进行数据检索时，可以显著减少查询中分组和排序的时间")]),_._v(" "),v("p",[v("strong",[_._v("10、索引对数据库系统的负面影响是什么？")])]),_._v(" "),v("p",[_._v("答：负面影响：\n创建索引和维护索引需要耗费时间，这个时间随着数据量的增加而增加；索引需要占用物理空间，不光是表需要占用数据空间，每个索引也需要占用物理空间；当对表进行增、删、改、的时候索引也要动态维护，这样就降低了数据的维护速度。")]),_._v(" "),v("p",[v("strong",[_._v("11、为数据表建立索引的原则有哪些？")])]),_._v(" "),v("p",[_._v("答：在最频繁使用的、用以缩小查询范围的字段上建立索引。")]),_._v(" "),v("p",[_._v("在频繁使用的、需要排序的字段上建立索引")]),_._v(" "),v("p",[v("strong",[_._v("12、什么情况下不宜建立索引？")])]),_._v(" "),v("p",[_._v("答：对于查询中很少涉及的列或者重复值比较多的列，不宜建立索引。")]),_._v(" "),v("p",[_._v("对于一些特殊的数据类型，不宜建立索引，比如文本字段（text）等")]),_._v(" "),v("p",[v("strong",[_._v("13、主键、外键和索引的区别？")])]),_._v(" "),v("p",[_._v("答：主键、外键和索引的区别")]),_._v(" "),v("p",[_._v("定义：")]),_._v(" "),v("p",[_._v("主键–唯一标识一条记录，不能有重复的，不允许为空")]),_._v(" "),v("p",[_._v("外键–表的外键是另一表的主键, 外键可以有重复的, 可以是空值")]),_._v(" "),v("p",[_._v("索引–该字段没有重复值，但可以有一个空值")]),_._v(" "),v("p",[_._v("作用：")]),_._v(" "),v("p",[_._v("主键–用来保证数据完整性")]),_._v(" "),v("p",[_._v("外键–用来和其他表建立联系用的")]),_._v(" "),v("p",[_._v("索引–是提高查询排序的速度")]),_._v(" "),v("p",[_._v("个数：")]),_._v(" "),v("p",[_._v("主键–主键只能有一个")]),_._v(" "),v("p",[_._v("外键–一个表可以有多个外键")]),_._v(" "),v("p",[_._v("索引–一个表可以有多个唯一索引")])])}),[],!1,null,null,null);v.default=s.exports}}]);