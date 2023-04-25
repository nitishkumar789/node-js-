-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 24, 2023 at 03:45 PM
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
-- Table structure for table `activity_master`
--

CREATE TABLE IF NOT EXISTS `activity_master` (
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `block_master`
--

CREATE TABLE IF NOT EXISTS `block_master` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `ut_jk` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 => No Ut & JK , 1 => Yes UT & JK',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `campaign_master`
--

CREATE TABLE IF NOT EXISTS `campaign_master` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `location` int(10) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cfl_master`
--

CREATE TABLE IF NOT EXISTS `cfl_master` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `village` varchar(200) DEFAULT NULL,
  `block_name` varchar(200) DEFAULT NULL,
  `district` varchar(200) DEFAULT NULL,
  `ut_jk` tinyint(1) DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ldm_master`
--

CREATE TABLE IF NOT EXISTS `ldm_master` (
  `id` int(11) NOT NULL,
  `block_id` int(10) DEFAULT NULL,
  `ldm_name` varchar(200) DEFAULT NULL,
  `ldm_sponsor_bank` varchar(200) DEFAULT NULL,
  `contact_no` varchar(15) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `subsection` longtext,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `area_manager_email` varchar(200) DEFAULT NULL,
  `area_manager_address` varchar(500) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_master`
--
ALTER TABLE `activity_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `block_master`
--
ALTER TABLE `block_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `campaign_master`
--
ALTER TABLE `campaign_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cfl_master`
--
ALTER TABLE `cfl_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ldm_master`
--
ALTER TABLE `ldm_master`
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
-- AUTO_INCREMENT for table `activity_master`
--
ALTER TABLE `activity_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `block_master`
--
ALTER TABLE `block_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `campaign_master`
--
ALTER TABLE `campaign_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cfl_master`
--
ALTER TABLE `cfl_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ldm_master`
--
ALTER TABLE `ldm_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `participants_information`
--
ALTER TABLE `participants_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `personel_master`
--
ALTER TABLE `personel_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `personel_master_area_manager`
--
ALTER TABLE `personel_master_area_manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
