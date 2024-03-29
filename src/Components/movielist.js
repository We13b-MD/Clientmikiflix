const movielist = [
  {
    id: 1,
    title: "The Oppenheimer",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707857808/uuqwkrjkgl3yv6aho6hl.jpg",
    slug: "the-oppenheimer",
    description:
      "Oppenheimer is a 2023 epic[5] biographical thriller film[6] written and directed by Christopher Nolan.[7] It stars Cillian Murphy as J. Robert Oppenheimer, the American theoretical physicist credited with being the father of the atomic bomb for his role in the Manhattan Project—the World War II undertaking that developed the first nuclear weapons. Based on the 2005 biography American Prometheus by Kai Bird and Martin J. Sherwin, the film chronicles the career of Oppenheimer, with the story predominantly focusing on his studies, his direction of the Manhattan Project during World War II, and his eventual fall from grace due to his 1954 security hearing. ",
    stars: "5",
    category: ["science", "adventure"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 2,
    title: "The Five nights at freddies",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858043/gman8vspjtkaaxebzra5.jpg",
    slug: "the-five-nights-at-freddies",
    description:
      "This book is a critical introduction to J.R.R. Tolkien’s The Hobbit, but it also advances an argument about the novel in the context of Tolkien’s larger literary and philosophical project. ",
    stars: "3",
    category: ["adventure"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 3,
    title: "The creator",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858139/rpg5ffcmmksmcpc14h48.jpg",
    slug: "the-creator",
    description:
      "The Creator is a 2023 American science fiction action film produced and directed by Gareth Edwards, who co-wrote the screenplay with Chris Weitz. It stars John David Washington, Gemma Chan, Ken Watanabe, Sturgill Simpson and Allison Janney. Set in 2070, 15 years after a nuclear detonation in Los Angeles and a war against artificial intelligence, an ex-special forces agent is recruited to hunt down and kill the  who has developed a mysterious weapon with the power to end the war..",
    stars: "3",
    category: ["science", "fiction"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 4,
    title: "The Expendables",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858269/gx9lo7hebbrbegaqwju1.jpg",
    slug: "the-expendables",
    description:
      "The Expendables is a 2010 American action film directed by Sylvester Stallone, who co-wrote it with David Callaham and also starred in the lead role. The film co-stars an ensemble cast of mostly action film actors consisting of Jason Statham, Jet Li, Dolph Lundgren, Randy Couture, Terry Crews, Steve Austin, Mickey Rourke, and Bruce Willis. The film was released in the United States on August 13, 2010. It is the first installment in The Expendables film series. This was Dolph Lundgren's first theatrically released film since 1995's cyberpunk film Johnny Mnemonic.The film is about a team of elite mercenaries tasked with a mission to overthrow a Latin American dictator whom they soon discover to be a mere puppet controlled by a corrupt ex-CIA agent. It pays tribute to the blockbuster action films of the late 1980s and early 1990s. It was distributed by Lionsgate.",
    stars: "3",
    category: ["thriller", "adventure"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 5,
    title: "The Mission Impossible",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858346/ghfnd1a3apwwhqji8ebe.jpg",
    slug: "the-mission-impossible",
    description:
      "Mission: Impossible Dead Reckoning Part One is a 2023 American spy action film directed by Christopher McQuarrie, from a screenplay he co-wrote with Erik Jendresen.[5] It is the sequel to Mission: Impossible – Fallout (2018) and the seventh installment in the Mission: Impossible film series. It stars Tom Cruise as Ethan Hunt, alongside an ensemble cast including Hayley Atwell, Ving Rhames, Simon Pegg, Rebecca Ferguson, Vanessa Kirby, Esai Morales, Pom Klementieff, Mariela Garriga, and Henry Czerny. In the film, Hunt and his IMF team face off against , a powerful rogue AI.",
    stars: "4",
    category: ["science", "crime"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 6,
    title: "The Equalizer",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858492/s0s83gl59axlstcpiloe.jpg",
    slug: "the-equalizer",
    description:
      "The Equalizer 3 is a 2023 American vigilante action-thriller film directed by Antoine Fuqua. It is a sequel to The Equalizer 2 and the third and final installment of The Equalizer trilogy, which is loosely based on the television series of the same name. The film stars Denzel Washington, reprising his role as retired U.S. Marine and DIA officer Robert McCall, with Dakota Fanning, Eugenio Mastrandrea, David Denman, Gaia Scodellaro, and Remo Girone in supporting roles. In the film, McCall discovers that his new friends of a small town in South Italy are intimidated by members of the Camorra, where he sets out to free them from their control.",
    stars: "4",
    category: ["thriller"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 7,
    title: "The Hunger games",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858567/btda8nyy0klsjoouvofi.jpg",
    slug: "the-hunger",
    description:
      "The Hunger Games: The Ballad of Songbirds & Snakes is a 2023 American dystopian action film directed by Francis Lawrence from a screenplay by Michael Lesslie and Michael Arndt. It is based on the 2020 novel The Ballad of Songbirds and Snakes by Suzanne Collins, serves as a prequel to The Hunger Games (2012), and is the fifth installment in The Hunger Games film series. The film stars Tom Blyth, Rachel Zegler, Peter Dinklage, Jason Schwartzman, Hunter Schafer, Josh Andrés Rivera, and Viola Davis. Set 64 years before the events of the first film, its plot follows the events that eventually lead a young Coriolanus Snow on the path to becoming the tyrannical leader of Panem, including his relationship with the Hunger Games tribute Lucy Gray Baird during the year of the 10th Hunger Games.",
    stars: "4",
    category: ["Thriller"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 8,
    title: "The Fast X",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858761/o2e45ltzcu4ped8rxzxs.jpg",
    slug: "the-fast-X",
    description:
      "Fast X (also known as Fast & Furious 10) is a 2023 American action film directed by Louis Leterrier from a screenplay written by Dan Mazeau and Justin Lin, both of whom also co-wrote the story with Zach Dean. It is the sequel to F9 (2021), the tenth main installment, and the eleventh installment overall in the Fast & Furious franchise. It stars Vin Diesel as Dominic Toretto alongside an ensemble cast including Michelle Rodriguez, Tyrese Gibson, Chris  Bridges, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Scott Eastwood, Daniela Melchior, Alan Ritchson, Helen Mirren, Brie Larson, Rita Moreno, Jason Statham, Jason Momoa, and Charlize Theron. In the film, Toretto must protect his family from Dante Reyes (Momoa), who seeks revenge for his father's death and the loss of his family's fortune.",
    stars: "4",
    category: ["Crime", "Adventure", "thriller"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 9,
    title: "The Blue Beetle",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858846/rns85xc6fg8ka3lrxvqo.jpg",
    slug: "the-blue-beetle",
    description:
      "Blue Beetle is a 2023 American superhero film based on the DC character Jaime Reyes / Blue Beetle. Produced by DC Studios and The Safran Company, and distributed by Warner Bros. Pictures, it is the 14th installment of the DC Extended Universe (DCEU). The film was directed by Ángel Manuel Soto and written by Gareth Dunnet-Alcocer, and stars Xolo Maridueña as Jaime Reyes / Blue Beetle alongside Adriana Barraza, Damián Alcázar, Raoul Max Trujillo, Susan Sarandon, and George Lopez.",
    stars: "3",
    category: ["science", "fiction", "thriller"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 10,
    title: "The Marvels",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707858846/rns85xc6fg8ka3lrxvqo.jpg",
    slug: "the-marvels",
    description:
      "The Marvels is a 2023 American superhero film based on Marvel Comics. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to the film Captain Marvel (2019), a continuation of the television miniseries Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). The film was directed by Nia DaCosta, who co-wrote the screenplay with Megan McDonnell and Elissa Karasik. Featuring the characters Carol Danvers / Captain Marvel, Monica Rambeau, and Kamala Khan / Ms. Marvel, it stars Brie Larson as Danvers, Teyonah Parris as Rambeau, and Iman Vellani as Khan, alongside Zawe Ashton, Gary Lewis, Park Seo-joon, Zenobia Shroff, Mohan Kapur, Saagar Shaikh, and Samuel L. Jackson. In the film, Danvers, Rambeau, and Khan team up after they begin swapping places with each other every time they use their powers. ",
    stars: "3",
    category: ["adventure", "fiction"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 11,
    title: "The Saw X",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707859154/kidnnhwovtmayib6hcip.jpg",
    slug: "the-saw-X",
    description:
      "Saw X is a 2023 American horror film directed and edited by Kevin Greutert and written by Peter Goldfinger and Josh Stolberg. The film is the tenth & final installment in the Saw film series, serving as both a direct sequel to Saw (2004) and a prequel to Saw II (2005), starring Tobin Bell and Shawnee Smith who reprise their roles from the previous films, acting alongside Synnøve Macody Lund, Steven Brand, Renata Vaca, and Michael Beach, who play new characters. The film sees John Kramer (Bell) travelling to Mexico in hopes that an experimental procedure may cure him. John later discovers that the operation is a scam, prompting him to kidnap those responsible and subject them to his trademark death traps as retribution.",
    stars: "4",
    category: ["adventure"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 12,
    title: "The Sound of Freedom",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707859247/l7eua9yz0hhrfhsvsimj.jpg",
    slug: "the-sound-of-freedom",
    description:
      "Sound of Freedom is a 2023 American crime thriller film directed and co-written by Alejandro Monteverde, and starring Jim Caviezel, Mira Sorvino and Bill Camp. Caviezel plays Tim Ballard, a former U.S. government agent who embarks on a mission to rescue children from sex traffickers in Colombia.[5] It is produced by Eduardo Verástegui, who also plays a role in the film. The plot centers around Ballard's Operation Underground Railroad, an anti-sex trafficking organization.",
    stars: "4",
    category: ["crime", "thriller"],
    userId: "659b1cb5f76943aa56002185",
  },

  {
    id: 13,
    title: "Retribution",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707859307/yvhnsyhyuv8fwxxvq6zg.jpg",
    slug: "Retribution",
    description:
      "Retribution is a 2023 action thriller film directed by Nimród Antal and written by Chris Salmanpour. The film stars Liam Neeson, Noma Dumezweni, Lilly Aspell, Jack Champion, Embeth Davidtz and Matthew Modine.[6] It is the third remake of the 2015 Spanish film El desconocido, which follows a brooding man (Neeson) who gets trapped in his car after receiving a threat that it will explode should he get out.",
    stars: "3",
    category: ["thriller"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 14,
    title: "The Mighty movie",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707859386/ryzymba2mb2suolx0u51.jpg",
    slug: "the-mighty-movie",
    description:
      "The Mighty Movie is a 2023 Canadian animated superhero comedy film based on the television series PAW Patrol created by Keith Chapman. The sequel to PAW Patrol: The Movie (2021), it was directed by Cal Brunker, who co-wrote the screenplay with Bob Barlen from a story by Brunker, Barlen, and Shane Morris. Several cast members from the TV series lent their voices to the film, including Christian Corrao (voicing Marshall), Luxton Handspiker (voicing Rubble), Callum Shoniker (voicing Rocky), and Ron Pardo (voicing both Cap'n Turbot and Mayor Humdinger). They are joined by an ensemble voice cast including Mckenna Grace (voicing Skye), Taraji P. Henson, Marsai Martin, Christian Convery (voicing Chase), Kim Kardashian, Chris Rock, Lil Rel Howery, Serena Williams, North West, Saint West, James Marsden, Kristen Bell, and introducing Finn Lee-Epp in his film debut as Ryder. In the film, the PAW Patrol pups gain superpowers from the pups' crystals and must stop Mayor Humdinger and his new accomplice Victoria Vance from wreaking havoc in Adventure City.",
    stars: "3",
    category: ["adventure"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 15,
    title: "Gran Turismo",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707859502/exkyfeh5qocbt0j2cbrs.jpg",
    slug: "gran-turismo",
    description:
      "Gran Turismo[a] is a 2023 American biographical sports drama film directed by Neill Blomkamp from a screenplay by Jason Hall and Zach Baylin. Produced by Columbia Pictures, PlayStation Productions, and 2.0 Entertainment, it is based on the racing simulation video game series of the same name developed by Polyphony Digital. It tells the true story of Jann Mardenborough, a teenage Gran Turismo player who became a professional racing car driver. The film stars Archie Madekwe as Mardenborough alongside David Harbour, Orlando Bloom, Darren Barnet, Geri Halliwell Horner, and Djimon Hounsou.",
    stars: "4",
    category: ["other"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 16,
    title: "Pet Sematary",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707860695/is98imrthnqwvjdxcabv.jpg",
    slug: "pet-sematary",
    stars: "1",
    description:
      "Pet Sematary: Bloodlines is a 2023 American supernatural horror film directed by Lindsey Anderson Beer (in her directorial debut), and co-written by Beer and Jeff Buhler. Serving as a prequel to Pet Sematary (2019), which in turn was based on the 1983 novel of the same name by Stephen King and a remake of the 1989 film, the film stars Jackson White, Forrest Goodluck, Jack Mulhern, Henry Thomas, Natalie Alyn Lind, Isabella Star LaBlanc, Samantha Mathis, Pam Grier and David Duchovny.Set in 1969, 50 years before the events of the previous film, the plot follows a young Jud Crandall as he discovers a local Native American cemetery where the dead can live again, without realizing the horror that will affect his life.",
    category: ["Adventure"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 17,
    title: "The Meg 2",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707860753/vjpfnlokyffeoxynq2l0.jpg",
    slug: "the-meg-2",
    description:
      "Meg 2: The Trench (titled Shark 2 in some territories[2]) is a 2023 science fiction action film directed by Ben Wheatley from a screenplay by Jon Hoeber, Erich Hoeber, and Dean Georgaris, based on the 1999 novel The Trench by Steve Alten. It serves as the sequel to The Meg (2018). The film stars Jason Statham, Wu Jing, Sophia Cai, Page Kennedy, Sergio Peris-Mencheta, Skyler Samuels and Cliff Curtis. Like the previous film, it follows a group of scientists who must outrun and outswim the titular megalodons when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    stars: "3",
    category: ["science", "fiction"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 18,
    title: " The Nun",
    thumbnail: "the-nun.jpg",
    slug: "the-nun",
    stars: "3",
    description:
      "The Nun II (also known as The Nun: Chapter Two) is a 2023 American gothic supernatural horror film directed by Michael Chaves, with a screenplay written by Ian Goldberg, Richard Naing, and Akela Cooper from a story by Cooper.[6] Serving as a sequel to The Nun (2018) and the eighth installment in The Conjuring Universe franchise, the film stars Taissa Farmiga, Jonas Bloquet, and Bonnie Aarons, returning from the first film, with Storm Reid and Anna Popplewell joining the cast. Peter Safran and James Wan return as producers.",
    category: ["other"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 19,
    title: "Elemental",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707861051/dvy7w2njvu0iq1rubx65.jpg",
    slug: "elemental",
    description:
      "Elemental (subtitled Forces of Nature in some countries) is a 2023 American animated romantic comedy-drama film produced by Walt Disney Pictures and Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. Directed by Peter Sohn and produced by Denise Ream, it was written by Sohn, John Hoberg, Kat Likkel, and Brenda Hsueh.[a] The film stars the voices of Leah Lewis, Mamoudou Athie, Ronnie del Carmen, Shila Ommi, Wendi McLendon-Covey, and Catherine O'Hara. Set in a world inhabited by anthropomorphic elements of nature, the story follows fire element Ember Lumen (Lewis) and water element Wade Ripple (Athie), who spend time together in the city while trying to save a convenience store owned by Ember's father, Bernie (Del Carmen).",
    stars: "4",
    category: ["romance"],
    userId: "659b1cb5f76943aa56002185",
  },
  {
    id: 20,
    title: " Megalomaniac ",
    thumbnail: "https://res.cloudinary.com/dvfgzdhvu/image/upload/v1707861139/bygptqlpfhxiwumthnib.jpg",
    slug: "megalomaniac",
    description:
      "Megalomaniac is a Belgian horror film inspired by the true crimes committed by The Butcher of Mons, a serial killer who murdered 5 women in Belgium between 1996 and 1997. While the real Butcher of Mons has yet to be identified, in Megalomaniac he bore two children, Martha and Félix, who seem doomed to carry on his legacy of violence. Megalomaniac follows closely in the footsteps of French Extremist films like 2008s Martyrs. ",
    stars: "3",
    category: ["other"],
    userId: "659b1cb5f76943aa56002185",
  },
];

export default movielist;
