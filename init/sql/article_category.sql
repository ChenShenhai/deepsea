CREATE TABLE  IF NOT EXISTS  `article_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `info` json,
  `create_time` varchar(20) DEFAULT NULL,
  `update_time` varchar(20) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 1, -- category status,  1:common, 2:delete
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8