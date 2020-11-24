--
-- Database: `REGISTRATION_DB`
--
CREATE DATABASE IF NOT EXISTS `REGISTRATION_DB`;
USE `REGISTRATION_DB`;
FLUSH PRIVILEGES;

--
-- Table structure for table `Student`
--

CREATE TABLE `Student` (
  `student_id` varchar(16) NOT NULL,
  `name` varchar(256) NOT NULL,
  `year` int(11) NOT NULL,
  `email` varchar(256) DEFAULT NULL
);

--
-- Dumping data for table `Student`
--

INSERT INTO `Student` (`student_id`, `name`, `year`, `email`) VALUES
('55489317', 'Zinnia', 3, '55489317@student.chula.ac.th'),
('55748896', 'Tulip', 3, '55748896@student.chula.ac.th'),
('56717931', 'Rose', 2, '56717931@student.chula.ac.th'),
('56756421', 'Orchid', 2, '56756421@student.chula.ac.th'),
('57712358', 'Lotus', 1, '57712358@student.chula.ac.th'),
('57723547', 'Jasmine', 1, '57723547@student.chula.ac.th');

--
-- Indexes for table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`student_id`);
