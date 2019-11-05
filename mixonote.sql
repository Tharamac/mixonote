-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2016 at 08:27 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 7.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mixonote`
--

-- --------------------------------------------------------

--
-- Table structure for table `filelist`
--

CREATE TABLE `filelist` (
  `file_id` int(11) NOT NULL,
  `filename` mediumtext NOT NULL,
  `user` mediumtext NOT NULL,
  `loopdeck_id` int(11) NOT NULL,
  `padplayer_id` int(11) NOT NULL,
  `padplayer_path` mediumtext NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `filelist`
--

INSERT INTO `filelist` (`file_id`, `filename`, `user`, `loopdeck_id`, `padplayer_id`, `padplayer_path`, `date`) VALUES
(25, 'Demo', 'macxiiz', 6, 25, 'user/macxiiz/Demo/', '2016-02-11 15:58:10'),
(26, 'qwe', 'Fartin', 54, 38, 'user/Fartin/qwe/', '2016-02-14 04:26:22'),
(44, 'gtbt', 'nhh', 72, 56, 'user/nhh/gtbt/', '2016-02-14 18:23:49');

-- --------------------------------------------------------

--
-- Table structure for table `loopdeck`
--

CREATE TABLE `loopdeck` (
  `loopdeck_id` int(11) NOT NULL,
  `tempo` int(11) NOT NULL,
  `channel1_name` mediumtext NOT NULL,
  `channel1_pattern` varchar(16) NOT NULL,
  `channel2_name` mediumtext NOT NULL,
  `channel2_pattern` varchar(16) NOT NULL,
  `channel3_name` mediumtext NOT NULL,
  `channel3_pattern` varchar(16) NOT NULL,
  `channel4_name` text NOT NULL,
  `channel4_pattern` varchar(16) NOT NULL,
  `channel5_name` mediumtext NOT NULL,
  `channel5_pattern` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `loopdeck`
--

INSERT INTO `loopdeck` (`loopdeck_id`, `tempo`, `channel1_name`, `channel1_pattern`, `channel2_name`, `channel2_pattern`, `channel3_name`, `channel3_pattern`, `channel4_name`, `channel4_pattern`, `channel5_name`, `channel5_pattern`) VALUES
(5, 492, 'unselected', '0000000001000000', 'unselected', '0011011000000000', 'unselected', '0000000000000100', 'unselected', '0000010000000010', 'unselected', '0000000000100000'),
(6, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(7, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(8, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(9, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(10, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(11, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(13, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(14, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(15, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(16, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(17, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(18, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(19, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(20, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(21, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(22, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(23, 460, 'can', '1000001101100000', 'glass', '0110010010010000', 'plastic', '0001000000001000', 'kick', '0000010010000110', 'snare', '0000000000010001'),
(24, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(25, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(26, 512, 'glass', '1100000000000000', 'can', '0100000000000000', 'can', '0010100000100000', 'kick', '0000010011000000', 'snare', '0000000100000000'),
(27, 340, 'kick', '1000110010001100', 'snare', '0010001000100010', 'plastic', '0000000000000000', 'can', '1010101010101010', 'snare', '0100010001010100'),
(28, 480, 'kick', '1010001000100100', 'snare', '0000100000001000', 'can', '1000100010000110', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(29, 340, 'kick', '1000110010001100', 'snare', '0010001000100010', 'plastic', '0000000000000000', 'can', '1010101010101010', 'snare', '0100010001010100'),
(31, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(32, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(33, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(34, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(35, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(36, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(37, 660, 'glass', '1001001001001000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(38, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(39, 512, 'can', '1010110000000000', 'glass', '0000000000100000', 'plastic', '0101000010000000', 'snare', '0000000000000000', 'kick', '0000000000000000'),
(40, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(41, 480, 'can', '0000000000000000', 'plastic', '0000000000000000', 'kick', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(42, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(43, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(44, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(45, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(46, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(47, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(48, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(49, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(50, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(51, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(52, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(53, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(54, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(55, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(56, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(57, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(58, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(59, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(60, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(61, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(62, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(63, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(64, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(65, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(66, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(67, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(68, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(69, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(70, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(71, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(72, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000'),
(73, 512, 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000', 'unselected', '0000000000000000');

-- --------------------------------------------------------

--
-- Table structure for table `padplayer`
--

CREATE TABLE `padplayer` (
  `padplayer_id` int(11) NOT NULL,
  `A` mediumtext NOT NULL,
  `B` mediumtext NOT NULL,
  `C` mediumtext NOT NULL,
  `D` mediumtext NOT NULL,
  `E` mediumtext NOT NULL,
  `F` mediumtext NOT NULL,
  `G` mediumtext NOT NULL,
  `H` mediumtext NOT NULL,
  `I` mediumtext NOT NULL,
  `J` mediumtext NOT NULL,
  `K` mediumtext NOT NULL,
  `L` mediumtext NOT NULL,
  `M` mediumtext NOT NULL,
  `N` mediumtext NOT NULL,
  `O` mediumtext NOT NULL,
  `P` mediumtext NOT NULL,
  `Q` mediumtext NOT NULL,
  `R` mediumtext NOT NULL,
  `S` mediumtext NOT NULL,
  `T` mediumtext NOT NULL,
  `U` mediumtext NOT NULL,
  `V` mediumtext NOT NULL,
  `W` mediumtext NOT NULL,
  `X` mediumtext NOT NULL,
  `Y` mediumtext NOT NULL,
  `Z` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `padplayer`
--

INSERT INTO `padplayer` (`padplayer_id`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`) VALUES
(1, 'Levels(11).mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', '2 - LERTER.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(2, 'Levels(11).mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', '2 - LERTER.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(3, 'Levels(11).mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', '2 - LERTER.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(4, 'Levels(11).mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', '2 - LERTER.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(5, 'Levels(11).mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', '2 - LERTER.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(6, 'Levels(11).mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(7, 'Levels(11).mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(8, 'Click here to choose a file', 'Click here to choose a file', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(9, '﻿5 กลองใหญ่ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(10, 'ï»¿5 à¸à¸¥à¸­à¸‡à¹ƒà¸«à¸à¹ˆ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(11, 'ï»¿5 à¸à¸¥à¸­à¸‡à¹ƒà¸«à¸à¹ˆ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(12, '﻿5 กลองใหญ่ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(13, '﻿5 กลองใหญ่ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(14, '﻿5 กลองใหญ่ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(15, '﻿5 กลองใหญ่ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(16, '﻿5 กลองใหญ่ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(17, '﻿5 กลองใหญ่ (Bass Drum).mp3', '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3'),
(18, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(19, '2 Snare Drum.mp3', 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3', ''),
(20, 'VMH1 Claps & Snares 083.mp3', 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3', '', ''),
(21, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', ''),
(22, 'Levels(13).mp3', 'Levels(3).mp3', 'Levels(Oh1).mp3', 'VFH1 128BPM Air Raid Mix.mp3', 'VFH1 128BPM Basique Ale Mix.mp3', 'Levels(8).mp3', 'VFH1 128BPM Big Tee Mix.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Levels(9).mp3', 'Levels(10).mp3', 'Levels(1).mp3', 'Levels(4).mp3', 'Levels(12).mp3', 'Levels(5).mp3', 'Levels(7).mp3', 'VMH1 Claps & Snares 084.mp3', 'Levels(2).mp3', 'VMH1 Claps & Snares 082.mp3', 'Levels(6).mp3', 'VMH1 Claps & Snares 081.mp3', '', '', ''),
(23, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '', ''),
(24, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '﻿4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'VFH1 128BPM Contradiction Mix.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3\r\n', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '﻿10 ฉาบ1.mp3', '﻿11 ฉาบสั้น.mp3', '2 Snare Drum.mp3', '﻿5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '﻿6 กิ๊ง.mp3', '﻿8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '﻿ไสว่าสิบ่อถิ่มกัน.mp3', 'VFH1 128BPM Diesel Mix.mp3', '﻿7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3'),
(25, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'VFH1 128BPM Contradiction Mix.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '10 ฉาบ1.mp3', '11 ฉาบสั้น.mp3', '2 Snare Drum.mp3', '5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '6 กิ๊ง.mp3', '8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '3 Hi Hat ปิด.mp3', 'VFH1 128BPM Diesel Mix.mp3', '7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3'),
(26, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '﻿4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'VFH1 128BPM Contradiction Mix.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3\r\n', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '﻿10 ฉาบ1.mp3', '﻿11 ฉาบสั้น.mp3', '2 Snare Drum.mp3', '﻿5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '﻿6 กิ๊ง.mp3', '﻿8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '﻿ไสว่าสิบ่อถิ่มกัน.mp3', 'VFH1 128BPM Diesel Mix.mp3', '﻿7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3'),
(27, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '﻿4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'VFH1 128BPM Contradiction Mix.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3\r\n', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '﻿10 ฉาบ1.mp3', '﻿11 ฉาบสั้น.mp3', '2 Snare Drum.mp3', '﻿5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '﻿6 กิ๊ง.mp3', '﻿8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '﻿ไสว่าสิบ่อถิ่มกัน.mp3', 'VFH1 128BPM Diesel Mix.mp3', '﻿7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3'),
(28, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '﻿4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'VFH1 128BPM Contradiction Mix.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3\r\n', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '﻿10 ฉาบ1.mp3', '﻿11 ฉาบสั้น.mp3', '2 Snare Drum.mp3', '﻿5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '﻿6 กิ๊ง.mp3', '﻿8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '﻿ไสว่าสิบ่อถิ่มกัน.mp3', 'VFH1 128BPM Diesel Mix.mp3', '﻿7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3'),
(29, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '﻿4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'VFH1 128BPM Contradiction Mix.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3\r\n', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '﻿10 ฉาบ1.mp3', '﻿11 ฉาบสั้น.mp3', '2 Snare Drum.mp3', '﻿5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '﻿6 กิ๊ง.mp3', '﻿8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '3 Hi Hat ปิด.mp3', 'VFH1 128BPM Diesel Mix.mp3', '﻿7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3'),
(30, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '﻿4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'VFH1 128BPM Contradiction Mix.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3\r\n', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '﻿10 ฉาบ1.mp3', '﻿11 ฉาบสั้น.mp3', '2 Snare Drum.mp3', '﻿5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '﻿6 กิ๊ง.mp3', '﻿8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '3 Hi Hat ปิด.mp3', 'VFH1 128BPM Diesel Mix.mp3', '﻿7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3'),
(31, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'พื้นที่ทับซ้อน.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '10 ฉาบ1.mp3', '11 ฉาบสั้น.mp3', 'พื้นที่ทับซ้อน.mp3', '5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '6 กิ๊ง.mp3', '8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '3 Hi Hat ปิด.mp3', 'VFH1 128BPM Diesel Mix.mp3', '7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3'),
(32, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '7 ทอม1.mp3', 'Click here to choose a file'),
(33, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(34, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(35, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(36, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(37, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '2 Snare Drum.mp3', 'Click here to choose a file', '', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '5 กลองใหญ่ (Bass Drum).mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(38, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'พื้นที่ทับซ้อน.mp3', 'ไสว่าสิบ่อถิ่มกัน.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(39, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(40, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(41, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(42, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '12 ฉาบ2.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(43, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '12 ฉาบ2.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(44, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '12 ฉาบ2.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(45, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '12 ฉาบ2.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(46, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '12 ฉาบ2.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(47, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '12 ฉาบ2.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(48, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '10 ฉาบ1.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', '12 ฉาบ2.mp3', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(49, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(50, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(51, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(52, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(53, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(54, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(55, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(56, 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file', 'Click here to choose a file'),
(57, 'VFH1 128BPM Air Raid Mix.mp3', 'VMH1 Claps & Snares 083.mp3', 'VMH1 Claps & Snares 081.mp3', 'VFH1 128BPM Big Tee Mix.mp3', '4 Hi Hat เปิด.mp3', 'VFH1 128BPM Bones Mix.mp3', 'VFH1 128BPM Crowded Mix.mp3', 'VFH1 128BPM Contradiction Mix.mp3', '9 Floor Tom.mp3', 'VFH1 128BPM Heavy Duty Mix.mp3', 'VFH1 128BPM Southern Mix.mp3', 'VFH1 128BPM Fury Mix.mp3', 'VMH1 Claps & Snares 085.mp3', 'VMH1 Claps & Snares 084.mp3', '10 ฉาบ1.mp3', '11 ฉาบสั้น.mp3', 'Click here to choose a file', '5 กลองใหญ่ (Bass Drum).mp3', 'VFH1 128BPM Basique Ale Mix.mp3', '6 กิ๊ง.mp3', '8 ทอม2.mp3', 'VMH1 Claps & Snares 082.mp3', '3 Hi Hat ปิด.mp3', 'VFH1 128BPM Diesel Mix.mp3', '7 ทอม1.mp3', 'VFH1 128BPM Roboto Mix.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_ID` int(11) NOT NULL,
  `Username` varchar(25) DEFAULT NULL,
  `Password` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_ID`, `Username`, `Password`) VALUES
(5, 'macxiiz', 'TikTi'),
(6, 'Admin', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `filelist`
--
ALTER TABLE `filelist`
  ADD PRIMARY KEY (`file_id`);

--
-- Indexes for table `loopdeck`
--
ALTER TABLE `loopdeck`
  ADD PRIMARY KEY (`loopdeck_id`);

--
-- Indexes for table `padplayer`
--
ALTER TABLE `padplayer`
  ADD PRIMARY KEY (`padplayer_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `filelist`
--
ALTER TABLE `filelist`
  MODIFY `file_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `loopdeck`
--
ALTER TABLE `loopdeck`
  MODIFY `loopdeck_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
--
-- AUTO_INCREMENT for table `padplayer`
--
ALTER TABLE `padplayer`
  MODIFY `padplayer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
