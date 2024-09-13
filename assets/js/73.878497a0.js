(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{537:function(o,v,_){"use strict";_.r(v);var n=_(9),r=Object(n.a)({},(function(){var o=this,v=o._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("h1",{attrs:{id:"mongodb面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mongodb面试题"}},[o._v("#")]),o._v(" MongoDB面试题")]),o._v(" "),v("p",[v("strong",[o._v("1、MySQL与MongoDB之间最基本的差别是什么?")])]),o._v(" "),v("p",[o._v("答：MySQL和MongoDB两者都是免费开源的数据库。MySQL和MongoDB有许多基本差别包括数据的表示(data representation)，查询，关系，事务，schema的设计和定义，标准化(normalization)，速度和性能。")]),o._v(" "),v("p",[o._v("通过比较MySQL和MongoDB，实际上我们是在比较关系型和非关系型数据库，即数据存储结构不同。详细阅读")]),o._v(" "),v("p",[v("strong",[o._v("2、MongoDB成为最好NoSQL数据库的原因是什么?")])]),o._v(" "),v("p",[o._v("答：以下特点使得MongoDB成为最好的NoSQL数据库：")]),o._v(" "),v("ul",[v("li",[o._v("面向文件的")]),o._v(" "),v("li",[o._v("高性能")]),o._v(" "),v("li",[o._v("高可用性")]),o._v(" "),v("li",[o._v("易扩展性")]),o._v(" "),v("li",[o._v("丰富的查询语言")])]),o._v(" "),v("p",[v("strong",[o._v("3、分析器在MongoDB中的作用是什么?")])]),o._v(" "),v("p",[o._v("答：MongoDB中包括了一个可以显示数据库中每个操作性能特点的数据库分析器。通过这个分析器你可以找到比预期慢的查询(或写操作);利用这一信息，比如，可以确定是否需要添加索引。")]),o._v(" "),v("p",[v("strong",[o._v("4、如果用户移除对象的属性，该属性是否从存储层中删除?")])]),o._v(" "),v("p",[o._v("答：是的，用户移除属性然后对象会重新保存(re-save())。")]),o._v(" "),v("p",[v("strong",[o._v("5、更新操作立刻fsync到磁盘?")])]),o._v(" "),v("p",[o._v("答：不会，磁盘写操作默认是延迟执行的。写操作可能在两三秒(默认在60秒内)后到达磁盘。例如，如果一秒内数据库收到一千个对一个对象递增的操作，仅刷新磁盘一次。")]),o._v(" "),v("p",[v("strong",[o._v("6、什么是master或primary?")])]),o._v(" "),v("p",[o._v("答：它是当前备份集群(replica set)中负责处理所有写入操作的主要节点/成员。在一个备份集群中，当失效备援(failover)事件发生时，一个另外的成员会变成primary。")]),o._v(" "),v("p",[v("strong",[o._v("7、 数据在什么时候才会扩展到多个分片(shard)里?")])]),o._v(" "),v("p",[o._v("答：MongoDB 分片是基于区域(range)的。所以一个集合(collection)中的所有的对象都被存放到一个块(chunk)中。只有当存在多余一个块的时候，才会有多个分片获取数据的选项。现在，每个默认块的大小是 64Mb，所以你需要至少 64 Mb 空间才可以实施一个迁移。")]),o._v(" "),v("p",[v("strong",[o._v("8、分片(sharding)和复制(replication)是怎样工作的?")])]),o._v(" "),v("p",[o._v("答：每一个分片(shard)是一个分区数据的逻辑集合。分片可能由单一服务器或者集群组成，我们推荐为每一个分片(shard)使用集群。")]),o._v(" "),v("p",[v("strong",[o._v("9、如果块移动操作(moveChunk)失败了，我需要手动清除部分转移的文档吗?")])]),o._v(" "),v("p",[o._v("答：不需要，移动操作是一致(consistent)并且是确定性的(deterministic);一次失败后，移动操作会不断重试;当完成后，数据只会出现在新的分片里(shard)。")]),o._v(" "),v("p",[v("strong",[o._v("10、如果一个分片（Shard）停止或很慢的时候，发起一个查询会怎样？")])]),o._v(" "),v("p",[o._v("答：如果一个分片停止了，除非查询设置了“Partial”选项，否则查询会返回一个错误。如果一个分片响应很慢，MongoDB会等待它的响应。")]),o._v(" "),v("p",[v("strong",[o._v("11、如何理解MongoDB中的GridFS机制，MongoDB为何使用GridFS来存储文件？")])]),o._v(" "),v("p",[o._v("答：GridFS是一种将大型文件存储在MongoDB中的文件规范。使用GridFS可以将大文件分隔成多个小文档存放，这样我们能够有效的保存大文档，而且解决了BSON对象有限制的问题。")]),o._v(" "),v("p",[v("strong",[o._v("12、MongoDB支持存储过程吗？如果支持的话，怎么用？")])]),o._v(" "),v("p",[o._v("答：MongoDB支持存储过程，它是javascript写的，保存在db.system.js表中。")]),o._v(" "),v("p",[v("strong",[o._v("13、当更新一个正在被迁移的块（Chunk）上的文档时会发生什么？")])]),o._v(" "),v("p",[o._v("答：更新操作会立即发生在旧的块（Chunk）上，然后更改才会在所有权转移前复制到新的分片上。")])])}),[],!1,null,null,null);v.default=r.exports}}]);