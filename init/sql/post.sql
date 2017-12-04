
CREATE TABLE  IF NOT EXISTS  `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) NOT NULL,
  `uuid` varchar(32) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `user_avatar` varchar(255) DEFAULT NULL,
  `comments_count` int(11) DEFAULT NULL,
  `created_at` varchar(20) DEFAULT NULL,
  `updated_at` varchar(20) DEFAULT NULL,  
  `labels` longtext DEFAULT NULL,
  `extention` longtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`id`),
  UNIQUE KEY (`post_id`),
  UNIQUE KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8