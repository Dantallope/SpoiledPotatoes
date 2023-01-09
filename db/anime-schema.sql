--
-- Database: `anime_db`
--
DROP DATABASE IF EXISTS anime_db;

CREATE DATABASE anime_db;

USE anime_db;


-- --------------------------------------------------------

--
-- Table structure for table `shows`
--

CREATE TABLE `shows` (
  `id` int NOT NULL,
  `ageResrticted` int NOT NULL,
  `type` varchar(45) NOT NULL,
  `episodeCount` int NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `title` varchar(100) NOT NULL,
  `language` varchar(100) NOT NULL,
  `description` varchar(10000) NOT NULL,
  `rating` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `shows` (`id`, `ageResrticted`, `type`, `episodeCount`, `startDate`, `endDate`, `title`, `language`, `description`, `rating`) VALUES
(1, 0, 'Anime', 13, '2019-01-03', '2019-09-28', 'Demon Slayer', 'x-jat', 'Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamados shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sisters humanity.', '9'),
(2, 0, 'Anime', 146, '2011-10-02', '2014-09-24', 'Hunter x hunter', 'x-jat', 'Hunters devote themselves to accomplishing hazardous tasks, all from traversing the worlds uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased. Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.', '9'),
(3, 0, 'Anime', 26, '2022-04-09', '2022-06-25', 'Spy x Family', 'x-jat', 'Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise \"Twilight\" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.In the bustling Ostanian city of Berlint, Twilight dons the alias of \"Loid Forger,\" an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion.Unfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as \"Thorn Princess\"—and Anya—an esper who can read peoples minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.', '9'),
(4, 0, 'Anime', 25, '2012-04-09', '2012-06-25', 'Kuroko no Basket', 'x-jat', 'For the last three years, Teikou Middle School has dominated the national basketball scene with its legendary lineup: the \"Generation of Miracles.\" It consisted of five prodigies who excelled at the sport, but a \"Phantom Sixth Man\" lurked in the shadows and helped earn the team their revered status. Eventually, their monstrous growth jaded them from the sport they loved and made them go their separate ways in high school.In search of new members, the Seirin High School basketball team recruits Taiga Kagami and Tetsuya Kuroko, two freshmen who seem to have significant differences in abilities. Having returned recently from America, Kagami has both a natural aptitude and relentless love for the sport. Meanwhile, Kuroko lacks presence and exhibits no outstanding athletic talent. However, it is later revealed that he is Teikous Phantom Sixth Man—the player once part of the Generation of Miracles.Kuroko wants to prove to the Seirin team that he is strong in his own way. Seeing his conviction, Kagami forms a dynamic partnership with Kuroko, the latter promising to support Kagamis \"light\" as his \"shadow.\" Alongside their new Seirin teammates, they aim to conquer the upcoming Interhigh championship, but the reappearance of Kurokos former teammates complicates their plan.', '8'),
(5, 1, 'TV Show', 25, '2005-03-16', '2013-03-14', 'The Office', 'x-jat', 'This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). Theres Jim, the likable employee whos a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). Theres also Dwight, the successful co-worker who lacks social skills and common sense. And theres Ryan, who has held many jobs at the company.', '10'),
(6, 0, 'TV Show', 8, '2022-11-23', '2022-11-23', 'Wednesday', 'x-jat', 'While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago.', '8'),
(7, 0, 'TV Show', 95, '2000-09-09', '2005-07-08', 'Jackie Chan Adventures', 'x-jat', 'Archaeologist and martial artist Jackie Chan opposes evil forces hunting powerful magical artifacts with help from his wise uncle and his plucky niece, Jade.', '7');
COMMIT;