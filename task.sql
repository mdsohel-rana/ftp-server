-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2019 at 07:35 PM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task`
--

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `subcategory` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `dwnldlink` varchar(255) NOT NULL,
  `releasedate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `category`, `subcategory`, `name`, `dwnldlink`, `releasedate`) VALUES
(8, 'Movie', 'Action', 'Kabir Sing', 'https://bit.ly/32xL1CQ', '2019-07-16'),
(9, 'Movie', 'Adventure', 'Action Jaction', 'https://bit.ly/32xL1CQ', '2019-07-15'),
(10, 'Movie', 'Action', 'Bachelor ', 'https://bit.ly/32xL1CQ', '2019-07-11'),
(11, 'Movie', 'Adventure', 'Catch Me', 'https://bit.ly/32xL1CQ', '2019-07-17'),
(12, 'Webseries', 'English', 'Walking Dead', 'https://bit.ly/32xL1CQ', '2019-07-17'),
(13, 'Webseries', 'Bangla', 'Nonir Putul', 'https://bit.ly/32xL1CQ', '2019-07-11'),
(14, 'Webseries', 'English', 'Game Of Thrones', 'https://bit.ly/32xL1CQ', '2017-05-10'),
(15, 'Webseries', 'English', 'Sky Scraper', 'https://bit.ly/32xL1CQ', '2018-05-08'),
(16, 'Movie', 'Action', 'Arjun reddy', 'https://bit.ly/32xL1CQ', '2019-07-17');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `password`, `status`) VALUES
(1, 'abc@gmail.com', '1234', 1),
(2, 'abc1@gmail.com', '12345', 2),
(10, 'abc1234@gmail.com', '1234567Hj#', 1),
(11, 'abc1234@gmail.com', '1234567Hj#', 1),
(12, 'abc1234@gmail.com', '1234567Hj#', 1),
(13, 'abc1234@gmail.com', '1234567Hj#', 1),
(14, 'abc1234@gmail.com', '1234567Hj#', 1),
(15, 'abc222@gmail.com', '1234567Hj#', 1);

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `email`, `name`, `password`) VALUES
(1, 'abc@gmail.com', 'Faruk', '1234'),
(2, 'abc1@gmail.com', 'Maruf', '123245'),
(3, 'abc2@gmail.com', 'user', '123456'),
(4, 'abc3@gmail.com', 'Moderator3', '12345'),
(5, 'abc5@gmail.com', 'sdmin', '12345'),
(6, 'Hilton627681@gmail.com', 'rangevolk', '1234567Hj#'),
(10, 'abc1234@gmail.com', 'rangevolk', '1234567Hj#'),
(11, 'abc1234@gmail.com', 'rangevolk', '1234567Hj#'),
(12, 'abc1234@gmail.com', 'rangevolk', '1234567Hj#'),
(13, 'abc1234@gmail.com', 'rangevolk', '1234567Hj#'),
(14, 'abc1234@gmail.com', 'rangevolk', '1234567Hj#'),
(15, 'abc222@gmail.com', 'rangevolk', '1234567Hj#'),
(16, 'abc222@gmail.com', 'rangevolk', '1234567');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `subcategory` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id`, `category`, `subcategory`, `name`) VALUES
(4, 'Movie', 'Action', 'Kabir Sing'),
(5, 'Movie', 'Adventure', 'lolo tino');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
