
CREATE TABLE  IF NOT EXISTS  `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `created_at` varchar(20) DEFAULT NULL,
  `updated_at` varchar(20) DEFAULT NULL,
  `comments_count` int(11) DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `user_avatar` varchar(255) DEFAULT NULL,
  `labels` json DEFAULT NULL,
  `extention` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8