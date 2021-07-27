INSERT INTO `tyrell_corp_db`.`departments` (`name`) VALUES ('accounting');
INSERT INTO `tyrell_corp_db`.`departments` (`name`) VALUES ('engineering');
INSERT INTO `tyrell_corp_db`.`departments` (`name`) VALUES ('marketing');

INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('manager', '75000', '4');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('assistant', '40000', '4');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('associate', '50000', '4');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('manager', '100000', '5');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('accountant', '75000', '5');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('manager', '150000', '6');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('senior dev', '150000', '6');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('junior dev', '90000', '6');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('manager', '80000', '7');
INSERT INTO `tyrell_corp_db`.`roles` (`title`, `salary`, `department_id`) VALUES ('designer', '70000', '7');

INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`) VALUES ('Tim', 'Tom', '1');
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Pam', 'Pam', '2', '1');
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Jim', 'Jam', '3', '1');
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`) VALUES ('Angela', 'Johnson', '4');
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Sir', 'Talksalot', '5', '4');
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`) VALUES ('Jennifer', 'Doofenschmirtz', '6');
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Christine', 'Jeans', '7', '6');
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Tommy', 'Buns', '8', '6');
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Jack', 'Manna', '9', NULL);
INSERT INTO `tyrell_corp_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Zip', 'File', '10', '9');

UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '3' WHERE (`id` = '1');
UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '3' WHERE (`id` = '2');
UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '3' WHERE (`id` = '3');
UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '1' WHERE (`id` = '4');
UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '1' WHERE (`id` = '5');
DELETE FROM `tyrell_corp_db`.`roles` WHERE (`id` = '9');
UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '2' WHERE (`id` = '6');
UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '2' WHERE (`id` = '7');
UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '2' WHERE (`id` = '8');
UPDATE `tyrell_corp_db`.`roles` SET `department_id` = '3' WHERE (`id` = '10');

UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Marketing Manager' WHERE (`id` = '1');
UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Marketing Assitant' WHERE (`id` = '2');
UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Marketing Associate' WHERE (`id` = '3');
UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Accounting Manager' WHERE (`id` = '4');
UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Accountant' WHERE (`id` = '5');
UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Development Manager' WHERE (`id` = '6');
UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Senior Dev' WHERE (`id` = '7');
UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Junior Dev' WHERE (`id` = '8');
UPDATE `tyrell_corp_db`.`roles` SET `title` = 'Marketing Designer' WHERE (`id` = '10');