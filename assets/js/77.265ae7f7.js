(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{541:function(v,_,s){"use strict";s.r(_);var e=s(9),p=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"redis面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis面试题"}},[v._v("#")]),v._v(" Redis面试题")]),v._v(" "),_("p",[_("strong",[v._v("1、Redis 有哪几种数据淘汰策略？")])]),v._v(" "),_("p",[v._v("答：")]),v._v(" "),_("ul",[_("li",[v._v("noeviction:返回错误当内存限制达到，并且客户端尝试执行会让更多内存被使用的命令。")]),v._v(" "),_("li",[v._v("allkeys-lru: 尝试回收最少使用的键（LRU），使得新添加的数据有空间存放。")]),v._v(" "),_("li",[v._v("volatile-lru: 尝试回收最少使用的键（LRU），但仅限于在过期集合的键,使得新添加的数据有空间存放。")]),v._v(" "),_("li",[v._v("allkeys-random: 回收随机的键使得新添加的数据有空间存放。")]),v._v(" "),_("li",[v._v("volatile-random: 回收随机的键使得新添加的数据有空间存放，但仅限于在过期集合的键。")]),v._v(" "),_("li",[v._v("volatile-ttl: 回收在过期集合的键，并且优先回收存活时间（TTL）较短的键,使得新添加的数据有空间存放。")])]),v._v(" "),_("p",[_("strong",[v._v("2、Redis 一个字符串类型的值能存储最大容量是多少？")])]),v._v(" "),_("p",[v._v("512M")]),v._v(" "),_("p",[_("strong",[v._v("3、为什么 Redis 需要把所有数据放到内存中？")])]),v._v(" "),_("p",[v._v("答：Redis 为了达到最快的读写速度将数据都读到内存中，并通过异步的方式将数据写入磁盘。")]),v._v(" "),_("p",[v._v("所以 redis 具有快速和数据持久化的特征，如果不将数据放在内存中，磁盘 I/O 速度为严重影响 redis 的性能。")]),v._v(" "),_("p",[v._v("在内存越来越便宜的今天，redis 将会越来越受欢迎， 如果设置了最大使用的内存，则数据"),_("strong",[v._v("已有记录数达到内存限值后不能继续插入新值。")])]),v._v(" "),_("p",[_("strong",[v._v("4、Redis 集群方案应该怎么做？都有哪些方案？")])]),v._v(" "),_("ul",[_("li",[v._v("codis")]),v._v(" "),_("li",[v._v("目前用的最多的集群方案，基本和 twemproxy 一致的效果，但它支持在节点数量改变情况下，旧节点数据可恢复到新 hash 节点。")]),v._v(" "),_("li",[v._v("redis cluster3.0 自带的集群，特点在于他的分布式算法不是一致性 hash，而是 hash 槽的概念，以及自身支持节点设置从节点。")]),v._v(" "),_("li",[v._v("在业务代码层实现，起几个毫无关联的 redis 实例，在代码层，对 key 进行 hash 计算，然后去对应的redis 实例操作数据。这种方式对 hash 层代码要求比较高，考虑部分包括，节点失效后的替代算法方案，数据震荡后的自动脚本恢复，实例的监控，等等。")])]),v._v(" "),_("p",[_("strong",[v._v("5、Redis 集群方案什么情况下会导致整个集群不可用？")])]),v._v(" "),_("p",[v._v("答：有 A，B，C 三个节点的集群,在没有复制模型的情况下,如果节点 B 失败了，那么整个集群就会以为缺少5501-11000 这个范围的槽而不可用。")]),v._v(" "),_("p",[_("strong",[v._v("6、MySQL 里有 2000w 数据，redis 中只存 20w 的数据，如何保证 redis 中的数据都是热点数据？")])]),v._v(" "),_("p",[v._v("答：redis 内存数据集大小上升到一定大小的时候，就会施行数据淘汰策略。")]),v._v(" "),_("p",[_("strong",[v._v("7、Redis 有哪些适合的场景？")])]),v._v(" "),_("p",[_("strong",[v._v("会话缓存（Session Cache）")])]),v._v(" "),_("p",[_("strong",[v._v("全页缓存（FPC）")])]),v._v(" "),_("p",[_("strong",[v._v("队列")])]),v._v(" "),_("p",[_("strong",[v._v("排行榜/计数器")])]),v._v(" "),_("p",[_("strong",[v._v("发布/订阅")])]),v._v(" "),_("p",[_("strong",[v._v("8、说说 Redis 哈希槽的概念？")])]),v._v(" "),_("p",[v._v("答：Redis 集群没有使用一致性 hash,而是引入了哈希槽的概念，Redis 集群有 16384 个哈希槽，每个 key 通过 CRC16 校验后对 16384 取模来决定放置哪个槽，集群的每个节点负责一部分 hash 槽。")]),v._v(" "),_("p",[_("strong",[v._v("9、Redis 集群的主从复制模型是怎样的？")])]),v._v(" "),_("p",[v._v("答：为了使在部分节点失败或者大部分节点无法通信的情况下集群仍然可用，所以集群使用了主从复制模型,每个节点都会有 N-1 个复制品.")]),v._v(" "),_("p",[_("strong",[v._v("10、Redis 集群会有写操作丢失吗？为什么？")])]),v._v(" "),_("p",[v._v("答：Redis 并不能保证数据的强一致性，这意味着在实际中集群在特定的条件下可能会丢失写操作。")]),v._v(" "),_("p",[_("strong",[v._v("11、Redis 集群之间是如何复制的？")])]),v._v(" "),_("p",[v._v("答：异步复制")]),v._v(" "),_("p",[_("strong",[v._v("12、Redis 集群最大节点个数是多少？")])]),v._v(" "),_("p",[v._v("答：16384 个")]),v._v(" "),_("p",[_("strong",[v._v("13、Redis 集群如何选择数据库？")])]),v._v(" "),_("p",[v._v("答：Redis 集群目前无法做数据库选择，默认在 0 数据库。")]),v._v(" "),_("p",[_("strong",[v._v("14、Redis 如何做内存优化？")])]),v._v(" "),_("p",[v._v("答：尽可能使用散列表（hashes），散列表（是说散列表里面存储的数少）使用的内存非常小，所以你应该尽可能的将你的数据模型抽象到一个散列表里面。")]),v._v(" "),_("p",[v._v("比如你的 web 系统中有一个用户对象，不要为这个用户的名称，姓氏，邮箱，密码设置单独的 key,而是应该把这个用户的所有信息存储到一张散列表里面。")]),v._v(" "),_("p",[_("strong",[v._v("15、什么是缓存穿透？如何避免？什么是缓存雪崩？何如避免？")])]),v._v(" "),_("p",[_("strong",[v._v("缓存穿透")])]),v._v(" "),_("p",[v._v("一般的缓存系统，都是按照 key 去缓存查询，如果不存在对应的 value，就应该去后端系统查找（比如DB）。一些恶意的请求会故意查询不存在的 key,请求量很大，就会对后端系统造成很大的压力。这就叫做缓存穿透。")]),v._v(" "),_("p",[_("strong",[v._v("如何避免？")])]),v._v(" "),_("blockquote",[_("p",[v._v("1：对查询结果为空的情况也进行缓存，缓存时间设置短一点，或者该 key 对应的数据 insert 了之后清理缓存。")]),v._v(" "),_("p",[v._v("2：对一定不存在的 key 进行过滤。可以把所有的可能存在的 key 放到一个大的 Bitmap 中，查询时通过该 bitmap 过滤。")])]),v._v(" "),_("p",[_("strong",[v._v("缓存雪崩")])]),v._v(" "),_("p",[v._v("当缓存服务器重启或者大量缓存集中在某一个时间段失效，这样在失效的时候，会给后端系统带来很大压力。导致系统崩溃。")]),v._v(" "),_("p",[_("strong",[v._v("如何避免？")])]),v._v(" "),_("blockquote",[_("p",[v._v("1：在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个 key 只允许一个线程查询数据和写缓存，其他线程等待。")]),v._v(" "),_("p",[v._v("2：做二级缓存，A1 为原始缓存，A2 为拷贝缓存，A1 失效时，可以访问 A2，A1 缓存失效时间设置为短期，A2 设置为长期")]),v._v(" "),_("p",[v._v("3：不同的 key，设置不同的过期时间，让缓存失效的时间点尽量均匀")])]),v._v(" "),_("p",[_("strong",[v._v("16、Redis 回收进程如何工作的？")])]),v._v(" "),_("p",[v._v("答：一个客户端运行了新的命令，添加了新的数据。Redi 检查内存使用情况，如果大于 maxmemory 的限制, 则根据设定好的策略进行回收。一个新的命令被执行，等等。")]),v._v(" "),_("p",[v._v("所以我们不断地穿越内存限制的边界，通过不断达到边界然后不断地回收回到边界以下。")]),v._v(" "),_("p",[v._v("如果一个命令的结果导致大量内存被使用（例如很大的集合的交集保存到一个新的键），不用多久内存限制就会被这个内存使用量超越。")]),v._v(" "),_("p",[_("strong",[v._v("17、使用过 Redis 分布式锁么，它是怎么实现的？")])]),v._v(" "),_("p",[v._v("答：先拿 setnx 来争抢锁，抢到之后，再用 expire 给锁加一个过期时间防止锁忘记了释放。")]),v._v(" "),_("p",[v._v("如果在 setnx 之后执行 expire 之前进程意外 crash 或者要重启维护了，那会怎么样？")]),v._v(" "),_("p",[v._v("set 指令有非常复杂的参数，这个应该是可以同时把 setnx 和 expire 合成一条指令来用的！")]),v._v(" "),_("p",[_("strong",[v._v("18、使用过 Redis 做异步队列么，你是怎么用的？有什么缺点？")])]),v._v(" "),_("p",[v._v("答：般使用 list 结构作为队列，rpush 生产消息，lpop 消费消息。当 lpop 没有消息的时候，要适当 sleep一会再重试。")]),v._v(" "),_("p",[_("strong",[v._v("缺点：")])]),v._v(" "),_("ul",[_("li",[v._v("在消费者下线的情况下，生产的消息会丢失，得使用专业的消息队列如 rabbitmq 等。")]),v._v(" "),_("li",[v._v("能不能生产一次消费多次呢？")]),v._v(" "),_("li",[v._v("使用 pub/sub 主题订阅者模式，可以实现 1:N 的消息队列。")])])])}),[],!1,null,null,null);_.default=p.exports}}]);