CREATE TABLE   IF NOT EXISTS  `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT, 
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `detail_info` json DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `update_time` varchar(20) DEFAULT NULL,
  `gender` int(11) DEFAULT 0, -- user gender, 0:default, 1:male, 2:female, 3:delete
  `level` int(11) DEFAULT 1, -- user level, 0:super admin, 1:common admin, 2:common user
  `status` int(11) DEFAULT 1, -- user status, 0:super admin, 1:common, 2:forbidden, 3:delete
  PRIMARY KEY (`id`),
  UNIQUE KEY (`email`),
  UNIQUE KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO 
`user_info`
 (`id`,`name`,`email`,`password`,`detail_info`,`create_time`,`update_time`,`level`,`status`) 
 VALUES (DEFAULT,'admin01','01@admin.com','098765','{}',0,0,0,0);

 INSERT INTO 
`user_info`
 (`id`,`name`,`email`,`password`,`detail_info`,`create_time`,`update_time`,`level`,`status`) 
 VALUES (DEFAULT,'admin02','02@admin.com','098765','{}',1,1,1,1);

 INSERT INTO 
`user_info`
 (`id`,`name`,`email`,`password`,`detail_info`,`create_time`,`update_time`,`level`,`status`) 
 VALUES (DEFAULT,'admin03','03@admin.com','098765','{}',1,1,1,1);

 INSERT INTO 
`user_info`
 (`id`,`name`,`email`,`password`,`detail_info`,`create_time`,`update_time`,`level`,`status`) 
 VALUES (DEFAULT,'user01','01@user.com','098765','{}',1,1,2,1);

  INSERT INTO 
`user_info`
 (`id`,`name`,`email`,`password`,`detail_info`,`create_time`,`update_time`,`level`,`status`) 
 VALUES (DEFAULT,'user02','02@user.com','098765','{}',1,1,2,1);

