-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 24 mai 2024 à 15:02
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Travel`
--

-- --------------------------------------------------------

--
-- Structure de la table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `duration` time NOT NULL,
  `rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `activities`
--

INSERT INTO `activities` (`id`, `name`, `location`, `description`, `price`, `image`, `start_date`, `end_date`, `duration`, `rate`) VALUES
(1, 'Bike', 'Paris', 'Enjoy an exhilarating outdoor adventure with our biking activity. Explore picturesque landscapes and winding trails while pedaling through beautiful locations. Whether you\'re a beginner cyclist or an experienced enthusiast, our biking tour has something for everyone.', 25, 'https://images.pexels.com/photos/19873635/pexels-photo-19873635/free-photo-of-eau-herbe-prairie-velo.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-05-02 14:00:00', '2024-05-02 16:00:00', '02:00:00', 2),
(2, 'Sky Diving', 'Saint-malo', 'Soar into the ultimate adventure with our skydiving experience in Saint-Malo. Located on the beautiful Breton coast, Saint-Malo provides a spectacular backdrop for an unforgettable airborne adventure.', 150, 'https://images.pexels.com/photos/739671/pexels-photo-739671.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-06-13 17:00:00', '2024-06-13 21:00:00', '04:00:00', 4),
(3, 'Kayak', 'Ile Maurice', 'Explore the natural wonders of an exotic destination with our sea kayak rental. Nestled between white sandy beaches and crystal-clear waters, this tropical destination provides an ideal setting for a memorable aquatic adventure. With our high-quality kayak equipment and expert guidance, you\'ll have the opportunity to uncover the hidden secrets of the coast and experience an unforgettable kayaking adventure.', 45, 'https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-08-15 06:00:00', '2024-08-15 09:30:00', '03:30:00', 5),
(4, 'Skate Freestyle', 'New-York', 'Experience the thrill of urban skateboarding with our dynamic skateboard park experience. Nestled in the heart of the city, our skate park provides an ideal playground for skateboard enthusiasts of all levels. With its ramps, rails, and bowls, this skate park is a true paradise for thrill-seeking skaters.', 60, 'https://images.pexels.com/photos/1769553/pexels-photo-1769553.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-06-18 11:00:00', '2024-06-18 15:30:00', '04:30:00', 3),
(5, 'Snowboard', 'Le Mont-Tremblant', 'Immerse yourself in the breathtaking world of snowboarding with our snowboard experience in the majestic Canadian mountains. Nestled among snow-capped peaks and enchanting landscapes, this resort offers an unparalleled playground for snowboarding enthusiasts of all levels. With its varied slopes, thrilling descents, and breathtaking panoramic views, this destination promises an unforgettable winter adventure.', 90, 'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-12-10 15:00:00', '2024-12-10 19:00:00', '04:00:00', 2),
(7, 'Ping Pong', 'Paris', 'Unforgettable activity, try it!', 30, 'https://images.pexels.com/photos/17538207/pexels-photo-17538207/free-photo-of-mentir-tennis-de-table-ping-pong-nature-morte.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-05-25 00:00:00', '2024-05-29 00:00:00', '13:16:00', 4);

-- --------------------------------------------------------

--
-- Structure de la table `flights`
--

CREATE TABLE `flights` (
  `id` int(11) NOT NULL,
  `flight_number` varchar(50) NOT NULL,
  `airline` varchar(100) NOT NULL,
  `departure_airport` varchar(100) NOT NULL,
  `arrival_airport` varchar(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `remaining_seats` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `departure_date` datetime NOT NULL,
  `arrival_date` datetime NOT NULL,
  `duration` time NOT NULL,
  `logo` text NOT NULL,
  `rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `flights`
--

INSERT INTO `flights` (`id`, `flight_number`, `airline`, `departure_airport`, `arrival_airport`, `price`, `remaining_seats`, `image`, `departure_date`, `arrival_date`, `duration`, `logo`, `rate`) VALUES
(1, 'FR123', 'AirFrance', 'Paris, France', 'New York, États-Unis', 500, 50, 'https://images.pexels.com/photos/12964568/pexels-photo-12964568.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-05-15 08:00:00', '2024-05-15 14:00:00', '06:00:00', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmC2ksZKfq154u6FCbhsY1QEFjCAPm4aETg&usqp=CAU', 4),
(2, 'LH456', 'Lufthansa', 'Berlin, Allemagne', 'Tokyo, Japon', 800, 30, 'https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-06-10 10:00:00', '2024-06-11 04:00:00', '14:00:00', 'data:image/png;base64,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', 3),
(3, 'BA789', 'British Airways', 'Londres, Royaume-Uni', 'Sydney, Australie', 1200, 20, 'https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-07-20 12:00:00', '2024-07-21 10:00:00', '22:00:00', 'data:image/jpeg;base64,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', 2),
(4, 'AA234', 'American Airlines', 'Paris, France', ' Los Angeles, États-Unis', 700, 40, 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-08-05 14:00:00', '2024-08-06 08:00:00', '18:00:00', 'https://c8.alamy.com/compfr/fafb8h/logotype-logo-american-airlines-fafb8h.jpg', 5),
(5, 'SQ789', 'Singapore Airlines', 'Singapour', 'Dubai, Émirats arabes unis', 600, 60, 'https://images.pexels.com/photos/16653703/pexels-photo-16653703/free-photo-of-voler-avion-voyager-transport.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-09-15 09:00:00', '2024-09-15 12:00:00', '03:00:00', 'data:image/png;base64,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', 1),
(8, 'FR321', 'Youhou', 'Berlinouuuooo', 'Montreal', 4000, 10, 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=300', '2024-05-31 12:24:00', '2024-06-01 12:24:00', '17:24:00', 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=300', 4);

-- --------------------------------------------------------

--
-- Structure de la table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `available_rooms` int(11) NOT NULL,
  `price_per_night` decimal(10,0) NOT NULL,
  `image` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `duration` time NOT NULL,
  `description` text NOT NULL,
  `rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `location`, `available_rooms`, `price_per_night`, `image`, `start_date`, `end_date`, `duration`, `description`, `rate`) VALUES
(1, 'Grand Hotel', 'Paris, France', 100, 200, 'https://images.pexels.com/photos/10902408/pexels-photo-10902408.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-05-10 00:00:00', '2024-05-17 00:00:00', '00:00:07', 'Immerse yourself in timeless luxury at the Grand Hotel, where classic charm meets contemporary comfort. Nestled in the heart of a bustling metropolis, this iconic hotel offers an unparalleled experience with its elegantly appointed rooms, gourmet restaurants, and top-notch leisure facilities. Whether you\'re here for business or pleasure, the Grand Hotel welcomes you with impeccable service and warm hospitality, making your stay a memorable getaway.', 2),
(2, 'Beach Resort', 'Miami, États-Unis', 50, 300, 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-06-20 00:00:00', '2024-06-25 00:00:00', '00:00:05', 'Dip your toes in golden sands and let your worries melt away at the Beach Resort, a seaside sanctuary of relaxation. Nestled along a paradisiacal coast, this beachfront property invites you to unwind in picturesque surroundings where the azure blue ocean meets the endless sky. With its luxurious rooms offering breathtaking ocean views, sparkling pools, and exciting water activities, the Beach Resort promises unforgettable holidays where every moment is an invitation to tranquility and adventure.', 4),
(3, 'Mountain Lodge', 'Aspen, Colorado, États-Unis', 30, 400, 'https://images.pexels.com/photos/3229916/pexels-photo-3229916.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-05-02 00:00:00', '2024-05-05 00:00:00', '00:00:03', 'Escape the hustle and bustle of daily life and find yourself at the Mountain Lodge, an alpine retreat nestled in the heart of majestic peaks. Immerse yourself in the surrounding natural beauty as you explore scenic trails, breathe in the fresh mountain air, and marvel at the breathtaking panoramic views. With its rustic and inviting ambiance, comfortable rooms, and easy access to year-round outdoor activities, the Mountain Lodge offers a revitalizing getaway for nature lovers and adventurers seeking tranquility.', 1),
(4, 'Seaside Inn', 'Honolulu, Hawaï, États-Unis', 20, 250, 'https://images.pexels.com/photos/15986264/pexels-photo-15986264/free-photo-of-rue-hotel-urbain-facade.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-08-10 00:00:00', '2024-08-14 00:00:00', '00:00:04', 'Experience the lively atmosphere and vibrant energy of the city at the Session Inn, a modern establishment in the heart of the action. Ideally located near major attractions, trendy shops, and renowned restaurants, this urban hotel puts you at the center of everything the city has to offer. With its stylish rooms, upscale amenities, and cosmopolitan ambiance, the Session Inn is the perfect place for travelers looking to explore the culture, nightlife, and urban dynamism.', 5),
(5, 'Rustic Cabin', 'Lake Tahoe, Californie, États-Unis', 10, 150, 'https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=600', '2024-09-05 00:00:00', '2024-09-07 00:00:00', '00:00:02', 'Rediscover the essence of outdoor living at the Rustic Cabin, a rustic retreat nestled in the heart of the wilderness. Surrounded by picturesque landscapes and absolute tranquility, this establishment offers an authentic cabin-in-the-woods experience, where simple comfort meets rustic charm. With its cozy cabins featuring stone fireplaces, private porches, and breathtaking forest views, the Rustic Cabin is the perfect place for a peaceful getaway away from the hustle and bustle of everyday life.', 3);

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `flight_id` int(11) DEFAULT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `hotel_id` int(11) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (`id`, `total_price`, `user_id`, `flight_id`, `activity_id`, `hotel_id`, `date`) VALUES
(1, 500, 2, 2, NULL, NULL, '2024-05-10 12:13:38'),
(2, 25, 1, NULL, 1, NULL, '2024-05-03 13:39:42'),
(3, 60, 3, 3, 4, NULL, '2024-05-10 12:13:50'),
(5, 150, 2, NULL, NULL, 1, '2024-05-03 13:39:42'),
(6, 700, 3, NULL, NULL, 1, '2024-05-10 11:28:43'),
(17, 200, 2, NULL, 2, 2, '2024-05-10 11:55:45'),
(19, 1600, 3, NULL, 5, 1, '2024-05-10 12:14:51'),
(20, 500, 3, 2, 4, 2, '2024-05-10 12:50:32');

-- --------------------------------------------------------

--
-- Structure de la table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `published_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(11) NOT NULL,
  `hotel_id` int(11) DEFAULT NULL,
  `flight_id` int(11) DEFAULT NULL,
  `activity_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reviews`
--

INSERT INTO `reviews` (`id`, `content`, `published_date`, `user_id`, `hotel_id`, `flight_id`, `activity_id`) VALUES
(1, 'Great hotel, excellent service! +1', '2024-05-24 10:40:16', 1, 1, NULL, NULL),
(2, 'Le personnel était très sympathique et serviable.', '2024-05-02 13:40:00', 3, NULL, 3, NULL),
(3, 'Expérience incroyable, fortement recommandée !', '2024-05-02 13:40:00', 5, NULL, NULL, 4),
(4, 'Dans l\'ensemble, un séjour merveilleux', '2024-05-02 13:40:00', 3, 5, NULL, NULL),
(5, 'Je n\'aurais pas pu demander une meilleure expérience !', '2024-05-02 13:40:00', 1, 3, NULL, NULL),
(6, 'Des équipements fantastiques et de belles vues.', '2024-05-02 13:40:00', 3, NULL, NULL, 2),
(7, 'L\'emplacement était parfait, proche de tout.', '2024-05-02 13:40:00', 2, 4, NULL, NULL),
(9, 'Le buffet du petit-déjeuner était délicieux.', '2024-05-02 13:40:00', 1, 5, NULL, NULL),
(10, 'Une honte, 4h de retard...', '2024-05-02 13:40:00', 1, NULL, 1, NULL),
(14, 'Super compagnie!', '2024-05-17 12:24:19', 10, NULL, 1, NULL),
(16, 'trop cool!', '2024-05-17 12:24:19', 2, 2, NULL, NULL),
(17, 'Quel vol incroyable', '2024-05-17 12:24:19', 1, NULL, 2, NULL),
(18, 'Quel vol incroyable', '2024-05-17 12:24:19', 3, NULL, 4, NULL),
(20, 'Il faudrait penser a gonfler les pneus...', '2024-05-17 12:34:46', 2, NULL, NULL, 1),
(21, 'Ennuyant...', '2024-05-17 12:33:58', 2, NULL, NULL, 3),
(22, 'Quel plaisir!', '2024-05-17 12:34:46', 2, NULL, NULL, 5);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(180) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `lastname`, `firstname`, `username`, `email`, `password`, `role`) VALUES
(1, 'Johnn', 'Doer', 'JoDoe', 'john.doee@example.com', '$2y$12$0XOvHkMaA3egX1oimUfTu.EuXN.lEy1', 'Manager'),
(2, 'Smith', 'Jane', 'JaneS', 'jane.smith@example.com', '$2y$12$U8xG5LUycvFrQy0', 'Guest'),
(3, 'Johnson', 'Alice', 'JohnIce', 'alice.johnson@example.com', '$2y$12$lDqUKadXc0xe', 'Guest'),
(5, 'Joe', 'Franck', 'Francky', 'admin@example.com', '$2y$12$aI/xMv1zjsDSdLd0fS6BFp44RnHRe', 'Admin'),
(10, 'Mich', 'chelmi', 'Michou', 'mich.kou@gmail.com', '$2b$10$QVTz/j2MAscOFlSz/SXnzuSf5P2urXptw2d4f6EvFVGHBIBCRj2zG', 'user'),
(40, 'Mich', 'Michel', 'Micheldu77', 'S@gmail.com', '$2b$10$SozwJ49hQ85GbekYRxi6JeE1rbpM.QmjkXpHL549g9TkqtjjR1k6K', 'Admin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `flight_id` (`flight_id`),
  ADD KEY `activity_id` (`activity_id`);

--
-- Index pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `activity_id` (`activity_id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `flight_id` (`flight_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `flights`
--
ALTER TABLE `flights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT pour la table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`),
  ADD CONSTRAINT `reservations_ibfk_3` FOREIGN KEY (`flight_id`) REFERENCES `flights` (`id`),
  ADD CONSTRAINT `reservations_ibfk_4` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`);

--
-- Contraintes pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`),
  ADD CONSTRAINT `reviews_ibfk_3` FOREIGN KEY (`flight_id`) REFERENCES `flights` (`id`),
  ADD CONSTRAINT `reviews_ibfk_4` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
