-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 17, 2023 at 01:05 PM
-- Server version: 5.6.26
-- PHP Version: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poc_sample`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE IF NOT EXISTS `activity` (
  `id` int(11) NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `block_id` int(11) DEFAULT NULL,
  `gram_panchayat` varchar(100) DEFAULT NULL,
  `village` varchar(100) DEFAULT NULL,
  `campaign_venue` varchar(100) DEFAULT NULL,
  `area_manager` int(11) NOT NULL COMMENT 'CFL ID',
  `campaign_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ngo_name` varchar(100) NOT NULL DEFAULT 'Responsenet',
  `contact_internal_touchpoint` varchar(200) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `contact_external_touchpoint` varchar(200) DEFAULT NULL,
  `start_time` timestamp NULL DEFAULT NULL,
  `end_time` timestamp NULL DEFAULT NULL,
  `participants` smallint(4) DEFAULT NULL,
  `program_topic` varchar(100) DEFAULT NULL,
  `training_method` varchar(100) DEFAULT NULL,
  `files` varchar(500) DEFAULT NULL,
  `photographs_count` smallint(4) DEFAULT NULL,
  `testimonials_files` varchar(500) DEFAULT NULL,
  `testimonials_count` smallint(4) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`id`, `state`, `district`, `block_id`, `gram_panchayat`, `village`, `campaign_venue`, `area_manager`, `campaign_date`, `ngo_name`, `contact_internal_touchpoint`, `address`, `telephone`, `contact_external_touchpoint`, `start_time`, `end_time`, `participants`, `program_topic`, `training_method`, `files`, `photographs_count`, `testimonials_files`, `testimonials_count`, `deleted`, `created`, `updated`) VALUES
(1, 'Uttar Pradesh', 'East Midnapore', 2, 'asadfdg', 'sadsfd', 'sadsfd', 1, '2023-04-16 18:30:00', 'asdasfd', '2147483647', 'Jaypee Greens, T 62', NULL, '7987987654', '2023-04-10 18:30:00', '2023-04-11 18:30:00', 12, 'sadfg', 'FGVHBJNK', 'DFGHJK', 23, '34rtfds', 23, 0, '2023-04-16 12:03:31', '2023-04-16 12:03:31');

-- --------------------------------------------------------

--
-- Table structure for table `block`
--

CREATE TABLE IF NOT EXISTS `block` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `ut_jk` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 => No Ut & JK , 1 => Yes UT & JK',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `block`
--

INSERT INTO `block` (`id`, `name`, `district`, `ut_jk`, `deleted`, `created`, `updated`) VALUES
(1, 'Alok', 'East Midnapore', 1, 0, '2023-04-16 10:36:14', '2023-04-16 10:36:14'),
(2, 'Product 2', 'East Midnapore', 0, 0, '2023-04-16 10:36:24', '2023-04-16 10:36:24');

-- --------------------------------------------------------

--
-- Table structure for table `participants_information`
--

CREATE TABLE IF NOT EXISTS `participants_information` (
  `id` int(11) NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `block_id` int(11) DEFAULT NULL,
  `village` varchar(100) DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL COMMENT '0 => Male , 1 =>  Female, 2 => Others',
  `guardian_name` varchar(100) DEFAULT NULL,
  `age` varchar(3) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `education` varchar(200) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `monthly_household_expenditure` varchar(10) DEFAULT NULL,
  `participants_requirement` varchar(100) DEFAULT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `participants_information`
--

INSERT INTO `participants_information` (`id`, `date`, `block_id`, `village`, `full_name`, `gender`, `guardian_name`, `age`, `occupation`, `education`, `mobile`, `monthly_household_expenditure`, `participants_requirement`, `activity_id`, `deleted`, `created`, `updated`) VALUES
(1, '2023-04-11 18:30:00', 1, 'AFGHG', 'Google', 0, 'SGJJHJA', '12', 'FAGHHJH', '8th', '2147483647', '345678', 'FAGJAJKAHHA', NULL, 0, '2023-04-16 11:04:03', '2023-04-16 11:04:03'),
(2, '2023-04-10 18:30:00', 2, 'sadsfd', 'Google', 0, 'SGJJHJA', '12', 'FAGHHJH', '8th', '2147483647', '345678', 'FAGJAJKAHHA', NULL, 0, '2023-04-16 11:18:25', '2023-04-16 11:18:25'),
(3, '2023-04-10 18:30:00', 2, 'sadsfd', 'Google', 0, 'SGJJHJA', '12', 'FAGHHJH', '12th', '2147483647', '345678', 'FAGJAJKAHHA', NULL, 0, '2023-04-16 11:22:12', '2023-04-16 11:22:12'),
(4, '2023-04-03 18:30:00', 1, 'sadsfd', 'Google', 0, 'SGJJHJA', '12', 'FAGHHJH', '12th', '2147483647', '345678', 'FAGJAJKAHHA', NULL, 0, '2023-04-16 11:23:39', '2023-04-16 11:23:39');

-- --------------------------------------------------------

--
-- Table structure for table `personel_master`
--

CREATE TABLE IF NOT EXISTS `personel_master` (
  `id` int(11) NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `block_id` int(11) DEFAULT NULL COMMENT 'Refer to Block ID',
  `cfl_id` int(11) DEFAULT NULL COMMENT 'Refer to CFL ID',
  `cfl_name` varchar(100) DEFAULT NULL,
  `cfl_location` varchar(500) DEFAULT NULL,
  `trainer_name` varchar(100) DEFAULT NULL,
  `trainer_contact_no` varchar(15) DEFAULT NULL,
  `trainer_gender` tinyint(1) DEFAULT NULL,
  `area_manager_name` varchar(100) DEFAULT NULL,
  `area_manager_contact_no` varchar(15) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `personel_master`
--

INSERT INTO `personel_master` (`id`, `date`, `block_id`, `cfl_id`, `cfl_name`, `cfl_location`, `trainer_name`, `trainer_contact_no`, `trainer_gender`, `area_manager_name`, `area_manager_contact_no`, `deleted`, `created`, `updated`) VALUES
(1, '2023-04-11 18:30:00', 1, 0, 'GHVSBJKNM', 'GSVHJBKN', 'SGVHJBKL', '2147483647', 1, 'GSVHJBKN', '2147483647', 0, '2023-04-16 11:55:10', '2023-04-16 11:55:10');

-- --------------------------------------------------------

--
-- Table structure for table `personel_master_area_manager`
--

CREATE TABLE IF NOT EXISTS `personel_master_area_manager` (
  `id` int(11) NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `block_id` int(11) DEFAULT NULL COMMENT 'Refer to Block ID',
  `area_manager_name` varchar(100) DEFAULT NULL,
  `area_manager_contact_no` varchar(15) NOT NULL,
  `area_manager_address` varchar(500) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `personel_master_area_manager`
--

INSERT INTO `personel_master_area_manager` (`id`, `date`, `block_id`, `area_manager_name`, `area_manager_contact_no`, `area_manager_address`, `deleted`, `created`, `updated`) VALUES
(1, '2023-04-09 18:30:00', 1, 'ABir ', '2147483647', 'T ahvbjnkjslm, GRee ', 0, '2023-04-16 11:48:54', '2023-04-16 11:48:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `block`
--
ALTER TABLE `block`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `participants_information`
--
ALTER TABLE `participants_information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personel_master`
--
ALTER TABLE `personel_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personel_master_area_manager`
--
ALTER TABLE `personel_master_area_manager`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `block`
--
ALTER TABLE `block`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `participants_information`
--
ALTER TABLE `participants_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `personel_master`
--
ALTER TABLE `personel_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `personel_master_area_manager`
--
ALTER TABLE `personel_master_area_manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
