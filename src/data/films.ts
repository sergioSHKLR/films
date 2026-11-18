/* Catalog for Watchlist.
   Posters and cast photos are hotlinked from TMDB (https://www.themoviedb.org).
   This product is not endorsed or certified by TMDB.
   Discussion questions follow Dirty Civilian, "Films that Build the Prepared Civilian Mindset Vol. 1"
   (https://www.youtube.com/watch?v=acveRw9DxTs), except The Eternaut, whose questions are companion prompts.
   Synopses are original. */
export type FilmKind = "film" | "series";
export type Theme = "war" | "collapse" | "family" | "tyranny" | "conscience" | "resistance";

export type CastMember = {
  name: string;
  character: string;
  photo: string | null;
};

export type Film = {
  n: number;
  slug: string;
  title: string;
  year: number;
  kind: FilmKind;
  imdb: string;
  tmdbPath: string;
  poster: string;
  themes: Theme[];
  synopsis: string;
  questionsFrom: "list" | "companion";
  questions: string[];
  cast: CastMember[];
};

export const SOURCE_VIDEO = "https://www.youtube.com/watch?v=acveRw9DxTs";

export const films: Film[] = [
  {
    "n": 1,
    "slug": "the-patriot",
    "title": "The Patriot",
    "year": 2000,
    "kind": "film",
    "imdb": "tt0187393",
    "tmdbPath": "/movie/2024",
    "poster": "https://media.themoviedb.org/t/p/w500/fWZd815QxUCUcrWQZwUkAp9ljG.jpg",
    "themes": [
      "resistance",
      "family"
    ],
    "synopsis": "A South Carolina planter who meant to sit out the Revolutionary War is pulled in when British regulars reach his family and his land.",
    "questionsFrom": "list",
    "questions": [
      "When is it right to pick up a rifle for a cause? And when is it just ego or revenge dressed up as patriotism?",
      "Which characters actually fight for principles, and who is just following orders or their own emotions?",
      "If something similar happened today, what would guerrilla resistance look like in your town?"
    ],
    "cast": [
      {
        "name": "Mel Gibson",
        "character": "Benjamin Martin",
        "photo": "https://media.themoviedb.org/t/p/w185/jnqHMaOslt8cef2atSmOpGRvNla.jpg"
      },
      {
        "name": "Heath Ledger",
        "character": "Gabriel Martin",
        "photo": "https://media.themoviedb.org/t/p/w185/p2z2bURSg7nuMsN9P2s61e2RvNz.jpg"
      },
      {
        "name": "Joely Richardson",
        "character": "Charlotte Selton",
        "photo": "https://media.themoviedb.org/t/p/w185/yv6aLd1TY06HUJqZshEfs8j5twD.jpg"
      },
      {
        "name": "Jason Isaacs",
        "character": "Col. William Tavington",
        "photo": "https://media.themoviedb.org/t/p/w185/s6XRFjqUsrDJfDQuXPOoExAYPmb.jpg"
      },
      {
        "name": "Chris Cooper",
        "character": "Col. Harry Burwell",
        "photo": "https://media.themoviedb.org/t/p/w185/sJKghcu9wRDIvKM0cI7kqNXYRfS.jpg"
      },
      {
        "name": "Tchéky Karyo",
        "character": "Jean Villeneuve",
        "photo": "https://media.themoviedb.org/t/p/w185/EcpFzLMmfz6fm4FrpamfFQ51pz.jpg"
      }
    ]
  },
  {
    "n": 2,
    "slug": "snowpiercer",
    "title": "Snowpiercer",
    "year": 2013,
    "kind": "film",
    "imdb": "tt1706620",
    "tmdbPath": "/movie/110415",
    "poster": "https://media.themoviedb.org/t/p/w500/kw6YQudA0TMcNmGUGy5XIw7zbnV.jpg",
    "themes": [
      "tyranny",
      "collapse"
    ],
    "synopsis": "After a climate experiment freezes the earth, what is left of humanity lives on a train whose cars are a class system with no honest exit.",
    "questionsFrom": "list",
    "questions": [
      "What are the cars on our train (school, media, jobs, politics), and where would you be placed?",
      "Do you think our society allows for real change, or just controlled revolutions that keep the system intact?",
      "What does getting off the train look like in real life for you — financial, geographic, lifestyle?"
    ],
    "cast": [
      {
        "name": "Chris Evans",
        "character": "Curtis",
        "photo": "https://media.themoviedb.org/t/p/w185/3bOGNsHlrswhyW79uvIHH1V43JI.jpg"
      },
      {
        "name": "Song Kang-ho",
        "character": "Namgoong Minsu",
        "photo": "https://media.themoviedb.org/t/p/w185/kBM9UTPYXUA2RNk210DXhztLFns.jpg"
      },
      {
        "name": "Ed Harris",
        "character": "Wilford",
        "photo": "https://media.themoviedb.org/t/p/w185/kUbUA70WPiosPT4kBJMWtGk0ASd.jpg"
      },
      {
        "name": "John Hurt",
        "character": "Gilliam",
        "photo": "https://media.themoviedb.org/t/p/w185/bjNSzt1d7uK3q5PbtFXUJrRt4qg.jpg"
      },
      {
        "name": "Tilda Swinton",
        "character": "Mason",
        "photo": "https://media.themoviedb.org/t/p/w185/dzjT4LKgs7eOma84GsPy78DsGNH.jpg"
      },
      {
        "name": "Jamie Bell",
        "character": "Edgar",
        "photo": "https://media.themoviedb.org/t/p/w185/xAfNYOJYOy5ee9PHbBF8Y6xzZ9I.jpg"
      }
    ]
  },
  {
    "n": 3,
    "slug": "district-9",
    "title": "District 9",
    "year": 2009,
    "kind": "film",
    "imdb": "tt1136608",
    "tmdbPath": "/movie/17654",
    "poster": "https://media.themoviedb.org/t/p/w500/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
    "themes": [
      "tyranny",
      "conscience"
    ],
    "synopsis": "A Johannesburg bureaucrat sent to evict stranded aliens is contaminated and starts becoming the people the state taught him to move.",
    "questionsFrom": "list",
    "questions": [
      "If you woke up as a prawn tomorrow, what would change about the way you see police, corporations, and your neighbors?",
      "How do governments make it socially acceptable to mistreat certain groups?",
      "Have you ever believed a story about a group of people and later realized it was propaganda, or at least incomplete?"
    ],
    "cast": [
      {
        "name": "Sharlto Copley",
        "character": "Wikus van de Merwe",
        "photo": "https://media.themoviedb.org/t/p/w185/em89OJJvBRX7kNJJPASmNKQujsC.jpg"
      },
      {
        "name": "Jason Cope",
        "character": "Christopher Johnson / Grey Bradnam / Trent",
        "photo": "https://media.themoviedb.org/t/p/w185/xEqMZClrQQvaygQakUwtS5l7TYH.jpg"
      },
      {
        "name": "Nathalie Boltt",
        "character": "Sarah Livingstone - Sociologist",
        "photo": "https://media.themoviedb.org/t/p/w185/mYvZlMSwvv6WDfJHfV6bYm4ddES.jpg"
      },
      {
        "name": "Sylvaine Strike",
        "character": "Dr Katrina McKenzie",
        "photo": "https://media.themoviedb.org/t/p/w185/A1O7oEwqy3vebOdnXhyRtKCBeg4.jpg"
      },
      {
        "name": "Elizabeth Mkandawie",
        "character": "Interviewee",
        "photo": "https://media.themoviedb.org/t/p/w185/qqiB2LLwNjaEnivKXaRm5opKU4b.jpg"
      },
      {
        "name": "John Sumner",
        "character": "Les Feldman - MIL Engineer",
        "photo": "https://media.themoviedb.org/t/p/w185/rsyOO8YniQa0vQKklUYWYVOUyoO.jpg"
      }
    ]
  },
  {
    "n": 4,
    "slug": "the-eternaut",
    "title": "The Eternaut",
    "year": 2025,
    "kind": "series",
    "imdb": "tt27740241",
    "tmdbPath": "/tv/226362",
    "poster": "https://media.themoviedb.org/t/p/w500/ucI5KroZLP0KyJqQnAdOpzhVvBs.jpg",
    "themes": [
      "collapse",
      "family"
    ],
    "synopsis": "A deadly snowfall drives Buenos Aires indoors. A small circle has to learn what fell, who is lying about it, and how to keep their people alive.",
    "questionsFrom": "companion",
    "questions": [
      "What is the first ordinary assumption you would have to drop if the sky itself became the threat?",
      "Who in your household would look for the pattern, and who would keep everyone calm and fed?",
      "At what point do you stop waiting for an official explanation and start acting on what you can see?"
    ],
    "cast": [
      {
        "name": "Ricardo Darín",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/2laJXyYQkL9YdLL1PRdD3hLZ6Uy.jpg"
      },
      {
        "name": "Carla Peterson",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/wzu3UNvxIlk1i9uWjcFi8ANrAyl.jpg"
      },
      {
        "name": "César Troncoso",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/eUbQSEPu2qrIAQ2UMzTXN1Ofq8r.jpg"
      },
      {
        "name": "Andrea Pietra",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/otpcmgf87yWytteQUu6IpfwA0Ow.jpg"
      },
      {
        "name": "Ariel Staltari",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/aXAgNDrPbg5s5AIjkuLWHskiVOm.jpg"
      },
      {
        "name": "Marcelo Subiotto",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/zOkp6fSyduND420qmlYnhSJw3n4.jpg"
      }
    ]
  },
  {
    "n": 5,
    "slug": "andor",
    "title": "Andor",
    "year": 2022,
    "kind": "series",
    "imdb": "tt9253284",
    "tmdbPath": "/tv/83867",
    "poster": "https://media.themoviedb.org/t/p/w500/khZqmwHQicTYoS7Flreb9EddFZC.jpg",
    "themes": [
      "resistance",
      "tyranny"
    ],
    "synopsis": "A thief who only wanted to stay alive is hired, compromised, and finally committed to a rebellion that already has accountants and martyrs.",
    "questionsFrom": "list",
    "questions": [
      "What finally pushes Cassian from just trying to survive to “I have to be a part of this fight”?",
      "Which type of character keeps the Empire running more: the true believers, the careerists, or the scared?",
      "If you lived in that universe, what kind of resistance work would fit your personality and current skill set?"
    ],
    "cast": [
      {
        "name": "Diego Luna",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/qwbjcyDN37OHiln4a6P4LP31o7F.jpg"
      },
      {
        "name": "Anton Lesser",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/x0lmqgkmphvOCSTHk2oxsaxA9Ra.jpg"
      },
      {
        "name": "Muhannad Bhaier",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/5hn7WeXi6wguwxTPTSmcmzHAs9.jpg"
      },
      {
        "name": "Stellan Skarsgård",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/mW7xmtGV4y79kQGn0zkKVGDMAmw.jpg"
      },
      {
        "name": "Denise Gough",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/wWcby4ARYqr8d92ZdjyQcfaiJBW.jpg"
      },
      {
        "name": "Kyle Soller",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/rLzduQpYJnZJKkXv3jRc7MDHwoI.jpg"
      }
    ]
  },
  {
    "n": 6,
    "slug": "chernobyl",
    "title": "Chernobyl",
    "year": 2019,
    "kind": "series",
    "imdb": "tt7366338",
    "tmdbPath": "/tv/87108",
    "poster": "https://media.themoviedb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    "themes": [
      "tyranny",
      "conscience"
    ],
    "synopsis": "The 1986 reactor explosion, and the officials who treated the truth as a bigger threat than the radiation.",
    "questionsFrom": "list",
    "questions": [
      "Why do so many people go along with obvious lies about the danger?",
      "Do you think our institutions would behave differently in a similar disaster?",
      "What information would you want before an event like this to protect your family?"
    ],
    "cast": [
      {
        "name": "Jared Harris",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/r9nIq0jPz1oBm4WwtlZhqlsX8p0.jpg"
      },
      {
        "name": "Stellan Skarsgård",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/mW7xmtGV4y79kQGn0zkKVGDMAmw.jpg"
      },
      {
        "name": "Emily Watson",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/bd0qiJXHoLNpkCqABsh67AKRtjC.jpg"
      },
      {
        "name": "Paul Ritter",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/hYRSjC5vxrIFZ5sx1rM6V4ZEI8G.jpg"
      },
      {
        "name": "Jessie Buckley",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/qbz9175DERSqsCQeYWGJWwqb38z.jpg"
      },
      {
        "name": "Adam Nagaitis",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/e05YxtScfLCI723ZFU6WOzLiJ6u.jpg"
      }
    ]
  },
  {
    "n": 7,
    "slug": "death-of-stalin",
    "title": "The Death of Stalin",
    "year": 2017,
    "kind": "film",
    "imdb": "tt4686844",
    "tmdbPath": "/movie/402897",
    "poster": "https://media.themoviedb.org/t/p/w500/AqH7q89NxGRDAyRWKqsL3OBtYfV.jpg",
    "themes": [
      "tyranny",
      "conscience"
    ],
    "synopsis": "In the hours after Stalin dies, the men who feared him start lying, bargaining, and arranging each other's funerals.",
    "questionsFrom": "list",
    "questions": [
      "Why does everyone in that system lie even when the truth is obvious?",
      "What parts of modern politics feel like this, where everyone is afraid to say the obvious thing?",
      "Would you rather be safe and silent in that world, or honest and at risk of your livelihood — or your life?"
    ],
    "cast": [
      {
        "name": "Steve Buscemi",
        "character": "Nikita Khrushchev",
        "photo": "https://media.themoviedb.org/t/p/w185/n0pZumkrcZrAPMoPq684RhYnjPV.jpg"
      },
      {
        "name": "Simon Russell Beale",
        "character": "Lavrenti Beria",
        "photo": "https://media.themoviedb.org/t/p/w185/uw0ngaqgT8qXwJqVr353cx1mEdB.jpg"
      },
      {
        "name": "Jeffrey Tambor",
        "character": "Georgy Malenkov",
        "photo": "https://media.themoviedb.org/t/p/w185/e4IkxsEo5O4oUWrIpXlEhWa6lqB.jpg"
      },
      {
        "name": "Jason Isaacs",
        "character": "Field Marshal Zhukov",
        "photo": "https://media.themoviedb.org/t/p/w185/s6XRFjqUsrDJfDQuXPOoExAYPmb.jpg"
      },
      {
        "name": "Michael Palin",
        "character": "Vyacheslav Molotov",
        "photo": "https://media.themoviedb.org/t/p/w185/gWz8S2FEUEm1f3LQrN8cSUjnfhu.jpg"
      },
      {
        "name": "Rupert Friend",
        "character": "Vasily Stalin",
        "photo": "https://media.themoviedb.org/t/p/w185/aMOUdXtTlqtscPumbuvfcH1JB42.jpg"
      }
    ]
  },
  {
    "n": 8,
    "slug": "johnny-tremain",
    "title": "Johnny Tremain",
    "year": 1957,
    "kind": "film",
    "imdb": "tt0050567",
    "tmdbPath": "/movie/43229",
    "poster": "https://media.themoviedb.org/t/p/w500/cQKl3B4lfqKB9hoO8EGYRQiWZfm.jpg",
    "themes": [
      "resistance"
    ],
    "synopsis": "A proud Boston apprentice loses the use of his hand and, with his trade, the excuse to stay out of the fight.",
    "questionsFrom": "list",
    "questions": [
      "What changes Johnny from caring only about himself to caring about a larger cause?",
      "How do small personal injustices wake people up politically?",
      "What skill would you want to bring to a movement like the Sons of Liberty?"
    ],
    "cast": [
      {
        "name": "Hal Stalmaster",
        "character": "Johnny Tremain",
        "photo": "https://media.themoviedb.org/t/p/w185/g8q6oLY6Z1Rxx7tRgMD9QOm41T3.jpg"
      },
      {
        "name": "Richard Beymer",
        "character": "Rab Silsbee",
        "photo": "https://media.themoviedb.org/t/p/w185/q0RQwBRnBFonTgXXDyE7I8MgucV.jpg"
      },
      {
        "name": "Luana Patten",
        "character": "Cilla Lapham",
        "photo": "https://media.themoviedb.org/t/p/w185/sRfi7wKZtpAWLszA10VrxE5hakW.jpg"
      },
      {
        "name": "Jeff York",
        "character": "James Otis",
        "photo": "https://media.themoviedb.org/t/p/w185/oAhxdTKc3QbKLNvwAxztcOe00Bd.jpg"
      },
      {
        "name": "Sebastian Cabot",
        "character": "Jonathan Lyte",
        "photo": "https://media.themoviedb.org/t/p/w185/uAgoTmwvabGX00LnYyDfyL7TPUP.jpg"
      },
      {
        "name": "Rusty Lane",
        "character": "Samuel Adams",
        "photo": "https://media.themoviedb.org/t/p/w185/bVPtVjQiT8BB8b3RVgeCIU86t3e.jpg"
      }
    ]
  },
  {
    "n": 9,
    "slug": "captain-fantastic",
    "title": "Captain Fantastic",
    "year": 2016,
    "kind": "film",
    "imdb": "tt3553976",
    "tmdbPath": "/movie/334533",
    "poster": "https://media.themoviedb.org/t/p/w500/2sFME73GaD8UsUxPUKe60cPdLif.jpg",
    "themes": [
      "family"
    ],
    "synopsis": "A father who raised his children in the woods is forced to bring them into the society he spent years refusing.",
    "questionsFrom": "list",
    "questions": [
      "Which parts of their lifestyle make the kids strong freethinkers, and which parts feel like the dad exerting control?",
      "How do you balance protecting your kids from a broken culture versus preparing them to live in it?",
      "What real-world skills from that family do you most want in your own home?"
    ],
    "cast": [
      {
        "name": "Viggo Mortensen",
        "character": "Ben Cash",
        "photo": "https://media.themoviedb.org/t/p/w185/vH5gVSpHAMhDaFWfh0Q7BG61O1y.jpg"
      },
      {
        "name": "George MacKay",
        "character": "Bodevan Cash",
        "photo": "https://media.themoviedb.org/t/p/w185/wnDAg1CyCbBCklQAZ9I1dj5X6QY.jpg"
      },
      {
        "name": "Samantha Isler",
        "character": "Kielyr Cash",
        "photo": "https://media.themoviedb.org/t/p/w185/8OaSdXsVLp6zOTPYXtYJVEUopvN.jpg"
      },
      {
        "name": "Annalise Basso",
        "character": "Vespyr Cash",
        "photo": "https://media.themoviedb.org/t/p/w185/83ZIWVz4TxrCNgnUVayrMnv9UXA.jpg"
      },
      {
        "name": "Nicholas Hamilton",
        "character": "Rellian Cash",
        "photo": "https://media.themoviedb.org/t/p/w185/6XB730yU5XKJfEhV5W2zV8B9Fmh.jpg"
      },
      {
        "name": "Shree Crooks",
        "character": "Zaja Cash",
        "photo": "https://media.themoviedb.org/t/p/w185/ipntpl03KxmLI4GWYV9HqXcVU9d.jpg"
      }
    ]
  },
  {
    "n": 10,
    "slug": "braveheart",
    "title": "Braveheart",
    "year": 1995,
    "kind": "film",
    "imdb": "tt0112573",
    "tmdbPath": "/movie/197",
    "poster": "https://media.themoviedb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg",
    "themes": [
      "resistance"
    ],
    "synopsis": "William Wallace turns a private killing into a war for Scottish independence, and the film does not pretend the cost stays private.",
    "questionsFrom": "list",
    "questions": [
      "What is one truth that you would be willing to stake your entire life on?",
      "If it cost you everything, is freedom actually worth it?",
      "Where would you draw the line if the government tried to take something from you by force?"
    ],
    "cast": [
      {
        "name": "Mel Gibson",
        "character": "William Wallace",
        "photo": "https://media.themoviedb.org/t/p/w185/jnqHMaOslt8cef2atSmOpGRvNla.jpg"
      },
      {
        "name": "Catherine McCormack",
        "character": "Murron MacClannough",
        "photo": "https://media.themoviedb.org/t/p/w185/vYyMCGKeIUTZMdEgVwQCgX7q1T3.jpg"
      },
      {
        "name": "Sophie Marceau",
        "character": "Princess Isabelle",
        "photo": "https://media.themoviedb.org/t/p/w185/b56TRCVVMZ2LMZqzXg0FxeGMd0u.jpg"
      },
      {
        "name": "Patrick McGoohan",
        "character": "King Edward",
        "photo": "https://media.themoviedb.org/t/p/w185/xtUMgFYGF7KmJg1KqiYQuwYTTe3.jpg"
      },
      {
        "name": "Angus Macfadyen",
        "character": "Robert the Bruce",
        "photo": "https://media.themoviedb.org/t/p/w185/yUuA7U3lw6yM0Eb6mD83qYeevH2.jpg"
      },
      {
        "name": "Brendan Gleeson",
        "character": "Hamish Campbell",
        "photo": "https://media.themoviedb.org/t/p/w185/ctPPJu5ZYDZr1IPmzoNpezczrm0.jpg"
      }
    ]
  },
  {
    "n": 11,
    "slug": "the-matrix",
    "title": "The Matrix",
    "year": 1999,
    "kind": "film",
    "imdb": "tt0133093",
    "tmdbPath": "/movie/603",
    "poster": "https://media.themoviedb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    "themes": [
      "tyranny",
      "conscience"
    ],
    "synopsis": "A programmer learns that his ordinary life is a constructed prison. Getting out is not the same as being ready for what is outside.",
    "questionsFrom": "list",
    "questions": [
      "If the red pill is just uncomfortable truth, what is a red pill you have taken in your own life?",
      "What modern systems feel the most like the Matrix — news, social media, politics, or something else?",
      "If you woke up outside the Matrix tomorrow, what skill set would you wish you had prepared?"
    ],
    "cast": [
      {
        "name": "Keanu Reeves",
        "character": "Neo",
        "photo": "https://media.themoviedb.org/t/p/w185/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg"
      },
      {
        "name": "Laurence Fishburne",
        "character": "Morpheus",
        "photo": "https://media.themoviedb.org/t/p/w185/2GbXERENPpl5MmlqOLlPVaVtifD.jpg"
      },
      {
        "name": "Carrie-Anne Moss",
        "character": "Trinity",
        "photo": "https://media.themoviedb.org/t/p/w185/9zya72vRZYBQILfetACsnmCBgdj.jpg"
      },
      {
        "name": "Hugo Weaving",
        "character": "Agent Smith",
        "photo": "https://media.themoviedb.org/t/p/w185/lSC8Et0PYi5zeQb3IpPkFje7hgR.jpg"
      },
      {
        "name": "Gloria Foster",
        "character": "Oracle",
        "photo": "https://media.themoviedb.org/t/p/w185/AriGXtC9fjBOia9Zr8CZjn4o3rx.jpg"
      },
      {
        "name": "Joe Pantoliano",
        "character": "Cypher",
        "photo": "https://media.themoviedb.org/t/p/w185/3OHUI3nX4SYGGItDk3xqeIvWtIf.jpg"
      }
    ]
  },
  {
    "n": 12,
    "slug": "swiss-family-robinson",
    "title": "Swiss Family Robinson",
    "year": 1960,
    "kind": "film",
    "imdb": "tt0054357",
    "tmdbPath": "/movie/18444",
    "poster": "https://media.themoviedb.org/t/p/w500/3ZItm1RcdwNuPnCaaqEFGrbVlcO.jpg",
    "themes": [
      "family",
      "collapse"
    ],
    "synopsis": "A shipwrecked family turns a deserted island into a house, a division of labor, and a defense.",
    "questionsFrom": "list",
    "questions": [
      "Who in your family would fill which role on that island — builder, scout, medic, planner?",
      "What do they do right in turning disaster into a home, and what would you do differently?",
      "What is one small island skill, or disaster skill, you could realistically practice this year?"
    ],
    "cast": [
      {
        "name": "John Mills",
        "character": "Father",
        "photo": "https://media.themoviedb.org/t/p/w185/jMqhI1NeTwgdKsrj9vMshk1r5hP.jpg"
      },
      {
        "name": "Dorothy McGuire",
        "character": "Mother",
        "photo": "https://media.themoviedb.org/t/p/w185/v6dOzPAxifN2gpP8hyPrSxzc2LT.jpg"
      },
      {
        "name": "James MacArthur",
        "character": "Fritz",
        "photo": "https://media.themoviedb.org/t/p/w185/yv6fJk944okWVyCRS5jUaZI6HgF.jpg"
      },
      {
        "name": "Janet Munro",
        "character": "Roberta 'Bertie'",
        "photo": "https://media.themoviedb.org/t/p/w185/lxnDhJ8z99t8Uy9xKssTS0nGPgy.jpg"
      },
      {
        "name": "Sessue Hayakawa",
        "character": "Kuala, Pirate Chief",
        "photo": "https://media.themoviedb.org/t/p/w185/juDoFtoIEMaKZMRL9Ipexkgqw81.jpg"
      },
      {
        "name": "Tommy Kirk",
        "character": "Ernst",
        "photo": "https://media.themoviedb.org/t/p/w185/4r5CxA7pK39Hc6fPt4L66kUiqND.jpg"
      }
    ]
  },
  {
    "n": 13,
    "slug": "letters-from-iwo-jima",
    "title": "Letters from Iwo Jima",
    "year": 2006,
    "kind": "film",
    "imdb": "tt0498380",
    "tmdbPath": "/movie/1251",
    "poster": "https://media.themoviedb.org/t/p/w500/kZokxQtzMPURvijWYFuvh1fAvnv.jpg",
    "themes": [
      "war",
      "conscience"
    ],
    "synopsis": "The battle of Iwo Jima from the Japanese defenders: letters home, a commander who knows the math, and orders that will not be survived.",
    "questionsFrom": "list",
    "questions": [
      "Did this movie change how you see the enemy in a war film, and how?",
      "How does propaganda shape the soldiers' expectations versus what actually happens in their position?",
      "Would you obey every order, or would you look for ways to bend or break them?"
    ],
    "cast": [
      {
        "name": "Ken Watanabe",
        "character": "General Tadamichi Kuribayashi",
        "photo": "https://media.themoviedb.org/t/p/w185/AqK1DSCibb8VuMO6t5qH1LVMIYG.jpg"
      },
      {
        "name": "Kazunari Ninomiya",
        "character": "Private Saigo",
        "photo": "https://media.themoviedb.org/t/p/w185/4mxogZeEPZiVrnJ4L8ICvOJONfs.jpg"
      },
      {
        "name": "Tsuyoshi Ihara",
        "character": "Colonel Baron Nishi",
        "photo": "https://media.themoviedb.org/t/p/w185/xJdhEiJWcHcxpE5hOLp20EANVj9.jpg"
      },
      {
        "name": "Ryo Kase",
        "character": "Private Shimizu",
        "photo": "https://media.themoviedb.org/t/p/w185/9Iq3R0mnMUDMyG6LyfTZfKr3nS5.jpg"
      },
      {
        "name": "Shidou Nakamura",
        "character": "Lieutenant Ito",
        "photo": "https://media.themoviedb.org/t/p/w185/dMyf8ZoHD5xkld66h8bEw9QgQZI.jpg"
      },
      {
        "name": "Hiroshi Watanabe",
        "character": "Lieutenant Fujita",
        "photo": "https://media.themoviedb.org/t/p/w185/zWXjIp4Kfiiy2qGHhFTLTlpzJZl.jpg"
      }
    ]
  },
  {
    "n": 14,
    "slug": "saints-and-soldiers",
    "title": "Saints and Soldiers",
    "year": 2003,
    "kind": "film",
    "imdb": "tt0373283",
    "tmdbPath": "/movie/10105",
    "poster": "https://media.themoviedb.org/t/p/w500/A4LgmMTiRpkEzC6pxRcxE28IDov.jpg",
    "themes": [
      "war",
      "conscience"
    ],
    "synopsis": "After the Malmédy massacre, a few American soldiers try to stay a unit, stay moving, and stay human in the snow.",
    "questionsFrom": "list",
    "questions": [
      "What keeps these men' morale up in the middle of the chaos?",
      "How do faith and doubt show up differently under fire?",
      "What do you think you would cling to, mentally or spiritually, in a situation like that?"
    ],
    "cast": [
      {
        "name": "Corbin Allred",
        "character": "Corporal Nathan 'Deacon' Greer",
        "photo": "https://media.themoviedb.org/t/p/w185/q7tJ6DAKlT4U4qHHROfvbPdYfaF.jpg"
      },
      {
        "name": "Alexander Polinsky",
        "character": "Medic Steven Gould",
        "photo": "https://media.themoviedb.org/t/p/w185/lNm5DDCXaP0cOkRYRjfvRI4p6N2.jpg"
      },
      {
        "name": "Kirby Heyborne",
        "character": "Flight Sergeant Oberon Winley",
        "photo": "https://media.themoviedb.org/t/p/w185/wXVH8j1bwrnGP4W8OLEgu1iQTRO.jpg"
      },
      {
        "name": "Larry Bagby",
        "character": "Private Shirley 'Shirl' Kendrick",
        "photo": "https://media.themoviedb.org/t/p/w185/43N0fBlRV7NFnggRsIQ1s7McFMO.jpg"
      },
      {
        "name": "Peter Holden",
        "character": "Staff Sergeant Gordon Gunderson",
        "photo": "https://media.themoviedb.org/t/p/w185/9pAORmxw7zi5lEerUmyInQM3PlF.jpg"
      },
      {
        "name": "Ethan Vincent",
        "character": "Rudolph 'Rudi' Gertz",
        "photo": "https://media.themoviedb.org/t/p/w185/r4ZsB0jqoWwhxkaeGf7sETBWFm8.jpg"
      }
    ]
  },
  {
    "n": 15,
    "slug": "we-were-soldiers",
    "title": "We Were Soldiers",
    "year": 2002,
    "kind": "film",
    "imdb": "tt0277434",
    "tmdbPath": "/movie/10590",
    "poster": "https://media.themoviedb.org/t/p/w500/nzeSYldx7wIrwycLKHKHTTUJNWh.jpg",
    "themes": [
      "war",
      "family"
    ],
    "synopsis": "Ia Drang, told as a commander who stays on the ground with his men and as the families at home waiting on the casualty list.",
    "questionsFrom": "list",
    "questions": [
      "What does good leadership look like in this film, and who fails to show up as a leader?",
      "How honestly do you think this shows the cost of war on families back home?",
      "If you were in that unit, what role would you hope to fill?"
    ],
    "cast": [
      {
        "name": "Mel Gibson",
        "character": "Lt. Col. Hal Moore",
        "photo": "https://media.themoviedb.org/t/p/w185/jnqHMaOslt8cef2atSmOpGRvNla.jpg"
      },
      {
        "name": "Madeleine Stowe",
        "character": "Julie Moore",
        "photo": "https://media.themoviedb.org/t/p/w185/k7iQLoCP11e7iVMp1LQimUQLZe8.jpg"
      },
      {
        "name": "Greg Kinnear",
        "character": "Maj. Bruce 'Snake' Crandall",
        "photo": "https://media.themoviedb.org/t/p/w185/iJezGc9XjY0DFPs00SypkuKImFK.jpg"
      },
      {
        "name": "Sam Elliott",
        "character": "Sgt. Maj. Basil Plumley",
        "photo": "https://media.themoviedb.org/t/p/w185/zE1fpXlIUo7fcujlVlGvHdDiCv6.jpg"
      },
      {
        "name": "Chris Klein",
        "character": "2nd Lt. Jack Geoghegan",
        "photo": "https://media.themoviedb.org/t/p/w185/56kCtPVfvjm5IRPa2GyaQHTPIOy.jpg"
      },
      {
        "name": "Keri Russell",
        "character": "Barbara Geoghegan",
        "photo": "https://media.themoviedb.org/t/p/w185/4bLtisDjmCOemk3uC65NAlmdIjz.jpg"
      }
    ]
  },
  {
    "n": 16,
    "slug": "black-hawk-down",
    "title": "Black Hawk Down",
    "year": 2001,
    "kind": "film",
    "imdb": "tt0265086",
    "tmdbPath": "/movie/855",
    "poster": "https://media.themoviedb.org/t/p/w500/7fU5dSqKRL4XHeEUz62rCKBfYok.jpg",
    "themes": [
      "war"
    ],
    "synopsis": "Mogadishu, 1993. A raid breaks into a night of small decisions, casualties, and people who will not leave their own behind.",
    "questionsFrom": "list",
    "questions": [
      "Where do people go to pull strength from, and why do they continue to endure?",
      "What do you think the soldiers understood about why they were there? Was there a moment the mission should never have happened?",
      "What skills, besides shooting, mattered most in that chaos?"
    ],
    "cast": [
      {
        "name": "Josh Hartnett",
        "character": "Eversmann",
        "photo": "https://media.themoviedb.org/t/p/w185/5eMo8D7h1XrSu6ZN4UXhPcS6YNG.jpg"
      },
      {
        "name": "Ewan McGregor",
        "character": "Grimes",
        "photo": "https://media.themoviedb.org/t/p/w185/q2UDxfwWnmXTB7khOUF3J9puBVP.jpg"
      },
      {
        "name": "Tom Sizemore",
        "character": "McKnight",
        "photo": "https://media.themoviedb.org/t/p/w185/soINOuacuiThRb2LyPD4tTWve7C.jpg"
      },
      {
        "name": "Eric Bana",
        "character": "Hoot",
        "photo": "https://media.themoviedb.org/t/p/w185/l9yoDgw3YFC2gMD1HTo5djGOwSY.jpg"
      },
      {
        "name": "William Fichtner",
        "character": "Sanderson",
        "photo": "https://media.themoviedb.org/t/p/w185/wWtJOoaNAwPparpzMNuRBjvxwEf.jpg"
      },
      {
        "name": "Ewen Bremner",
        "character": "Nelson",
        "photo": "https://media.themoviedb.org/t/p/w185/7ZayRqxxy5JsQpiUPA0iVeRHny6.jpg"
      }
    ]
  },
  {
    "n": 17,
    "slug": "gattaca",
    "title": "Gattaca",
    "year": 1997,
    "kind": "film",
    "imdb": "tt0119177",
    "tmdbPath": "/movie/782",
    "poster": "https://media.themoviedb.org/t/p/w500/eSKr5Fl1MEC7zpAXaLWBWSBjgJq.jpg",
    "themes": [
      "tyranny"
    ],
    "synopsis": "In a society that reads DNA as destiny, a man born with the “wrong” genome borrows another man's identity to reach the stars.",
    "questionsFrom": "list",
    "questions": [
      "If your future were predicted by your DNA at birth, how would your life look different?",
      "Where do we already sort people by metrics, scores, tests, and credit?",
      "What are ways to resist being defined by a label someone else put on you?"
    ],
    "cast": [
      {
        "name": "Ethan Hawke",
        "character": "Vincent Freeman",
        "photo": "https://media.themoviedb.org/t/p/w185/2LoTr6x0TEM7L5em4kSx1VmGDgG.jpg"
      },
      {
        "name": "Uma Thurman",
        "character": "Irene Cassini",
        "photo": "https://media.themoviedb.org/t/p/w185/sBgAZWi3o4FsnaTvnTNtK6jpQcF.jpg"
      },
      {
        "name": "Jude Law",
        "character": "Jerome Eugene Morrow",
        "photo": "https://media.themoviedb.org/t/p/w185/6UadpSbfC39WMChAcdnNunzwDxv.jpg"
      },
      {
        "name": "Alan Arkin",
        "character": "Detective Hugo",
        "photo": "https://media.themoviedb.org/t/p/w185/AoMhBzvWMy8bAz14KdbQ30SF0RZ.jpg"
      },
      {
        "name": "Loren Dean",
        "character": "Adult Anton Freeman",
        "photo": "https://media.themoviedb.org/t/p/w185/kkWuneJSgPLvNYknj30yqxdfIBr.jpg"
      },
      {
        "name": "Gore Vidal",
        "character": "Director Josef",
        "photo": "https://media.themoviedb.org/t/p/w185/vHIIjpltpM9StRYmjjM7liAObuZ.jpg"
      }
    ]
  },
  {
    "n": 18,
    "slug": "minority-report",
    "title": "Minority Report",
    "year": 2002,
    "kind": "film",
    "imdb": "tt0181689",
    "tmdbPath": "/movie/180",
    "poster": "https://media.themoviedb.org/t/p/w500/qtgFcnwh9dAFLocsDk2ySDVS8UF.jpg",
    "themes": [
      "tyranny"
    ],
    "synopsis": "Police arrest people for murders that have not happened yet — until the machine names one of the men who runs it.",
    "questionsFrom": "list",
    "questions": [
      "Is it ever acceptable to punish people for something they have not done yet?",
      "How much freedom would you personally trade to guarantee lower crime?",
      "Do you see any pre-crime logic in today's policing, school discipline, or online moderation?"
    ],
    "cast": [
      {
        "name": "Tom Cruise",
        "character": "Chief John Anderton",
        "photo": "https://media.themoviedb.org/t/p/w185/maf8PhSvDCdEwjEMbYfGpojR5RP.jpg"
      },
      {
        "name": "Colin Farrell",
        "character": "Danny Witwer",
        "photo": "https://media.themoviedb.org/t/p/w185/5FdalJbrbZ5UCsED5rFrXpvbqJa.jpg"
      },
      {
        "name": "Samantha Morton",
        "character": "Agatha",
        "photo": "https://media.themoviedb.org/t/p/w185/kHSfnDFbfeKah823y0Gr14lbt31.jpg"
      },
      {
        "name": "Max von Sydow",
        "character": "Director Lamar Burgess",
        "photo": "https://media.themoviedb.org/t/p/w185/u16BsGyT6v9yuO7wWAF62NayDth.jpg"
      },
      {
        "name": "Lois Smith",
        "character": "Dr. Iris Hineman",
        "photo": "https://media.themoviedb.org/t/p/w185/unvPSZshdNoj7c5wl6D30gPwKtS.jpg"
      },
      {
        "name": "Peter Stormare",
        "character": "Dr. Solomon Eddie",
        "photo": "https://media.themoviedb.org/t/p/w185/1rtpuUqBV29jDc1huUhtjGDbEwn.jpg"
      }
    ]
  },
  {
    "n": 19,
    "slug": "silo",
    "title": "Silo",
    "year": 2023,
    "kind": "series",
    "imdb": "tt14688458",
    "tmdbPath": "/tv/125988",
    "poster": "https://media.themoviedb.org/t/p/w500/r2QXomqKjkKHVtYGGtkf2l2Y7go.jpg",
    "themes": [
      "tyranny",
      "collapse"
    ],
    "synopsis": "An underground city of 144 levels is told the surface will kill them. A few residents start checking the story.",
    "questionsFrom": "list",
    "questions": [
      "If you grew up in the silo, what details would start making you suspicious of the top level?",
      "Why do so many people accept the rules without ever questioning the outside?",
      "Do you see a form of silo now, where people are told to believe the narrative and stop looking?"
    ],
    "cast": [
      {
        "name": "Rebecca Ferguson",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/lJloTOheuQSirSLXNA3JHsrMNfH.jpg"
      },
      {
        "name": "Common",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/eggJAnJxpn8wYraX7ea5svETB54.jpg"
      },
      {
        "name": "Chinaza Uche",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/5fbbLI9BPiByyIIRYu9pbRQwyUN.jpg"
      },
      {
        "name": "Tim Robbins",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/3FfJMIVwXgsIXbAT8ECBSZJAncR.jpg"
      },
      {
        "name": "Billy Postlethwaite",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/62omaRURpSOCZZr0yP0KowgrjkE.jpg"
      },
      {
        "name": "Remmie Milner",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/4LDy6vhBZ11kOevBdAGBRM34d3L.jpg"
      }
    ]
  },
  {
    "n": 20,
    "slug": "v-for-vendetta",
    "title": "V for Vendetta",
    "year": 2006,
    "kind": "film",
    "imdb": "tt0434409",
    "tmdbPath": "/movie/752",
    "poster": "https://media.themoviedb.org/t/p/w500/1avD1JeaRiJX5M4ahPdZPypGoGN.jpg",
    "themes": [
      "resistance",
      "tyranny"
    ],
    "synopsis": "In a frightened Britain, a masked man and a woman who has already lost too much decide that compliance has gone far enough.",
    "questionsFrom": "list",
    "questions": [
      "What freedoms did people in that world give up first, and why?",
      "At what point would you decide you have to resist, even if it is dangerous?",
      "Do symbols like the mask help a movement, or do they become a costume that hides the lack of one?"
    ],
    "cast": [
      {
        "name": "Natalie Portman",
        "character": "Evey",
        "photo": "https://media.themoviedb.org/t/p/w185/edPU5HxncLWa1YkgRPNkSd68ONG.jpg"
      },
      {
        "name": "Hugo Weaving",
        "character": "V / William Rookwood",
        "photo": "https://media.themoviedb.org/t/p/w185/lSC8Et0PYi5zeQb3IpPkFje7hgR.jpg"
      },
      {
        "name": "Stephen Rea",
        "character": "Finch",
        "photo": "https://media.themoviedb.org/t/p/w185/n52WDwObYghPTfV1TZ1EOVIWUGS.jpg"
      },
      {
        "name": "Stephen Fry",
        "character": "Deitrich",
        "photo": "https://media.themoviedb.org/t/p/w185/dH7GuUZ8QPM9RN99ak9KKOkSkdS.jpg"
      },
      {
        "name": "John Hurt",
        "character": "Adam Sutler",
        "photo": "https://media.themoviedb.org/t/p/w185/bjNSzt1d7uK3q5PbtFXUJrRt4qg.jpg"
      },
      {
        "name": "Tim Pigott-Smith",
        "character": "Creedy",
        "photo": "https://media.themoviedb.org/t/p/w185/37OZUY7cq8eoWxhKR2VD1ppusJM.jpg"
      }
    ]
  },
  {
    "n": 21,
    "slug": "soylent-green",
    "title": "Soylent Green",
    "year": 1973,
    "kind": "film",
    "imdb": "tt0070723",
    "tmdbPath": "/movie/12101",
    "poster": "https://media.themoviedb.org/t/p/w500/5nbkShkOEXUoKVhaX0XG41wyBkq.jpg",
    "themes": [
      "collapse",
      "tyranny"
    ],
    "synopsis": "New York is overcrowded, food is a ration, and the ration has a source the public is not supposed to name.",
    "questionsFrom": "list",
    "questions": [
      "Does this story make you rethink how nutrition is packaged and pushed on the public?",
      "How dependent are we, right now, on food systems we never inspect?",
      "Are the people in political office pulling the strings, or do they answer to someone else?"
    ],
    "cast": [
      {
        "name": "Charlton Heston",
        "character": "Detective Robert Thorn",
        "photo": "https://media.themoviedb.org/t/p/w185/mJabHWZrjlFiF8U8Bbr8lSFtLX6.jpg"
      },
      {
        "name": "Leigh Taylor-Young",
        "character": "Shirl",
        "photo": "https://media.themoviedb.org/t/p/w185/9l8TSUQQsTGx8aQMGurIf9gdTPY.jpg"
      },
      {
        "name": "Chuck Connors",
        "character": "Tab Fielding",
        "photo": "https://media.themoviedb.org/t/p/w185/6RfyJxavZhtMR3zLiUwg9M30GmG.jpg"
      },
      {
        "name": "Joseph Cotten",
        "character": "William R. Simonson",
        "photo": "https://media.themoviedb.org/t/p/w185/djfCB0jPOgmq3w7RD3BMLzWsAu8.jpg"
      },
      {
        "name": "Brock Peters",
        "character": "Chief Hatcher",
        "photo": "https://media.themoviedb.org/t/p/w185/yrnjKF4BDdp7usDJeHGpMmYUNgJ.jpg"
      },
      {
        "name": "Paula Kelly",
        "character": "Martha Phillips",
        "photo": "https://media.themoviedb.org/t/p/w185/zxhEhwF9NV8pg5wbzs9rTUgCcA5.jpg"
      }
    ]
  },
  {
    "n": 22,
    "slug": "the-road",
    "title": "The Road",
    "year": 2009,
    "kind": "film",
    "imdb": "tt0898367",
    "tmdbPath": "/movie/20766",
    "poster": "https://media.themoviedb.org/t/p/w500/qLaXnLzqleBWQtjvZ6JGVSaKoC3.jpg",
    "themes": [
      "collapse",
      "family"
    ],
    "synopsis": "A father and son walk a burned country with a cart, a pistol, and a rule they keep repeating: we are the good guys.",
    "questionsFrom": "list",
    "questions": [
      "In that world, what does it mean to be one of the good guys?",
      "Would you rather keep moving, like the father and son, or try to fortify a place and build a small community?",
      "What is one item or skill in the film that would matter most in a situation like that?"
    ],
    "cast": [
      {
        "name": "Viggo Mortensen",
        "character": "Father",
        "photo": "https://media.themoviedb.org/t/p/w185/vH5gVSpHAMhDaFWfh0Q7BG61O1y.jpg"
      },
      {
        "name": "Kodi Smit-McPhee",
        "character": "Boy",
        "photo": "https://media.themoviedb.org/t/p/w185/sesCWba9NwPDYDZzbVLs7OgLOti.jpg"
      },
      {
        "name": "Charlize Theron",
        "character": "Mother",
        "photo": "https://media.themoviedb.org/t/p/w185/gd7ShD0yt4bsR2STeQ19KQ6hvXL.jpg"
      },
      {
        "name": "Robert Duvall",
        "character": "Old Man - Eli",
        "photo": "https://media.themoviedb.org/t/p/w185/3tcKxC5Sc3DJ6XPDKKC2EAomEWn.jpg"
      },
      {
        "name": "Guy Pearce",
        "character": "Veteran",
        "photo": "https://media.themoviedb.org/t/p/w185/vTqk6Nh3WgqPubkS23eOlMAwmwa.jpg"
      },
      {
        "name": "Molly Parker",
        "character": "Friendly Woman",
        "photo": "https://media.themoviedb.org/t/p/w185/yxDfAinBmVkx8HHzRlJz4KvSnf8.jpg"
      }
    ]
  },
  {
    "n": 23,
    "slug": "the-searchers",
    "title": "The Searchers",
    "year": 1956,
    "kind": "film",
    "imdb": "tt0049730",
    "tmdbPath": "/movie/3114",
    "poster": "https://media.themoviedb.org/t/p/w500/jLBmgW0epNzJ1N9uzaVCjbyT94v.jpg",
    "themes": [
      "war",
      "family"
    ],
    "synopsis": "A Confederate veteran spends years hunting the people who took his niece. The longer he hunts, the clearer it is what the hunt has made him.",
    "questionsFrom": "list",
    "questions": [
      "Is the man John Wayne plays actually a good person — and what do you mean by good?",
      "When he finds Debbie, is his choice the right one, or should he have done something else?",
      "Why does he treat the people around him so roughly?"
    ],
    "cast": [
      {
        "name": "John Wayne",
        "character": "Ethan Edwards",
        "photo": "https://media.themoviedb.org/t/p/w185/4VmiGmCwSnratHtYmT2AyXrdQ64.jpg"
      },
      {
        "name": "Jeffrey Hunter",
        "character": "Martin Pawley",
        "photo": "https://media.themoviedb.org/t/p/w185/fWHskNEOlfgktpjhcacC2ri0RwO.jpg"
      },
      {
        "name": "Vera Miles",
        "character": "Laurie Jorgensen",
        "photo": "https://media.themoviedb.org/t/p/w185/9PDTsJnBfrAlvVPOBBFS3ehN8lD.jpg"
      },
      {
        "name": "Ward Bond",
        "character": "Rev. Capt. Samuel Johnston Clayton",
        "photo": "https://media.themoviedb.org/t/p/w185/6F8pPEwBHWDpX04R8LkARFejwtC.jpg"
      },
      {
        "name": "Natalie Wood",
        "character": "Debbie Edwards",
        "photo": "https://media.themoviedb.org/t/p/w185/6me9oS7GV1VjejWV61XD6y7fVA1.jpg"
      },
      {
        "name": "John Qualen",
        "character": "Lars Jorgensen",
        "photo": "https://media.themoviedb.org/t/p/w185/aMuzXYaBmblQm95JxHZrmseeIYh.jpg"
      }
    ]
  },
  {
    "n": 24,
    "slug": "life-of-david-gale",
    "title": "The Life of David Gale",
    "year": 2003,
    "kind": "film",
    "imdb": "tt0289992",
    "tmdbPath": "/movie/11615",
    "poster": "https://media.themoviedb.org/t/p/w500/7tcAvE82JyxIi79cwQV5br90KVz.jpg",
    "themes": [
      "conscience"
    ],
    "synopsis": "A death-penalty opponent sits on death row while a reporter tries to tell whether the case is justice or a staged argument.",
    "questionsFrom": "list",
    "questions": [
      "Which crimes, if any, should actually be punishable by death?",
      "What flaws in a justice system would have to be corrected before you would trust it with an irreversible sentence?",
      "Which is worse: a hundred guilty people set free, or one innocent person put to death?"
    ],
    "cast": [
      {
        "name": "Kevin Spacey",
        "character": "David Gale",
        "photo": "https://media.themoviedb.org/t/p/w185/nPrUZDEbGQe6jwpVbHKJCXsMd7r.jpg"
      },
      {
        "name": "Kate Winslet",
        "character": "Bitsey Bloom",
        "photo": "https://media.themoviedb.org/t/p/w185/surklDlLW6g2D7EqycEQwHXsoD1.jpg"
      },
      {
        "name": "Laura Linney",
        "character": "Constance Hallaway",
        "photo": "https://media.themoviedb.org/t/p/w185/6I31xZxo9Hq6T0OhSwCUjHd8jkB.jpg"
      },
      {
        "name": "Rhona Mitra",
        "character": "Berlin",
        "photo": "https://media.themoviedb.org/t/p/w185/1YThpok3Wk3BBy0pcUTcpuZyOBB.jpg"
      },
      {
        "name": "Gabriel Mann",
        "character": "Zack Stemmons",
        "photo": "https://media.themoviedb.org/t/p/w185/mrqiMfwoQnLBGGP3zvfHrwPKHJW.jpg"
      },
      {
        "name": "Matt Craven",
        "character": "Dusty Wright",
        "photo": "https://media.themoviedb.org/t/p/w185/tWF8B3Dj7zvKRmkTplp7ice6Wo9.jpg"
      }
    ]
  },
  {
    "n": 25,
    "slug": "apocalypse-now",
    "title": "Apocalypse Now",
    "year": 1979,
    "kind": "film",
    "imdb": "tt0078788",
    "tmdbPath": "/movie/28",
    "poster": "https://media.themoviedb.org/t/p/w500/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
    "themes": [
      "war",
      "conscience"
    ],
    "synopsis": "A captain is sent upriver to kill a colonel who stopped taking orders. The official mission and the war he finds are not the same thing.",
    "questionsFrom": "list",
    "questions": [
      "What do you do when your own side are the ones committing the evil? How do you stay grounded?",
      "At what point does the main character start to lose his own moral compass?",
      "How does the film show the difference between the official mission and what the war actually becomes?"
    ],
    "cast": [
      {
        "name": "Martin Sheen",
        "character": "Captain Benjamin Willard",
        "photo": "https://media.themoviedb.org/t/p/w185/m2Y3Q0uyuW6htrn2W9UWCWMkpZu.jpg"
      },
      {
        "name": "Marlon Brando",
        "character": "Colonel Walter Kurtz",
        "photo": "https://media.themoviedb.org/t/p/w185/yIvLpf9U9NfAvC7fuAgOQ8tu51T.jpg"
      },
      {
        "name": "Frederic Forrest",
        "character": "Jay 'Chef' Hicks",
        "photo": "https://media.themoviedb.org/t/p/w185/daSNber2lZjvxrlOR3WcEX0CFZM.jpg"
      },
      {
        "name": "Albert Hall",
        "character": "Chief Phillips",
        "photo": "https://media.themoviedb.org/t/p/w185/jvcOpEO0vSNy3KaDkhIldI1CoaU.jpg"
      },
      {
        "name": "Laurence Fishburne",
        "character": "Tyrone 'Clean' Miller",
        "photo": "https://media.themoviedb.org/t/p/w185/2GbXERENPpl5MmlqOLlPVaVtifD.jpg"
      },
      {
        "name": "Sam Bottoms",
        "character": "Lance B. Johnson",
        "photo": "https://media.themoviedb.org/t/p/w185/82ACmkTCHtKAuw42Jwx4JbjuVw0.jpg"
      }
    ]
  },
  {
    "n": 26,
    "slug": "the-big-country",
    "title": "The Big Country",
    "year": 1958,
    "kind": "film",
    "imdb": "tt0051411",
    "tmdbPath": "/movie/12501",
    "poster": "https://media.themoviedb.org/t/p/w500/aTjIUBmo7qbiu5FuvSoBA0UONWk.jpg",
    "themes": [
      "conscience",
      "family"
    ],
    "synopsis": "A newcomer who will not duel on command walks into a land feud where both families treat refusal as cowardice.",
    "questionsFrom": "list",
    "questions": [
      "How does peer pressure work on the main character through the film?",
      "What does real courage look like here — fighting, refusing to fight, or something else?",
      "Where do you figure out which family is the bad one?"
    ],
    "cast": [
      {
        "name": "Gregory Peck",
        "character": "James McKay",
        "photo": "https://media.themoviedb.org/t/p/w185/8EkjKu6OJPpEwpARpxVh6yd1f9k.jpg"
      },
      {
        "name": "Jean Simmons",
        "character": "Julie Maragon",
        "photo": "https://media.themoviedb.org/t/p/w185/scbR91Bl4SbfQqhXaH6OfhjxfYt.jpg"
      },
      {
        "name": "Carroll Baker",
        "character": "Patricia Terrill",
        "photo": "https://media.themoviedb.org/t/p/w185/ui9gwewS5Ofb2sop0ZWN9G8Yako.jpg"
      },
      {
        "name": "Charlton Heston",
        "character": "Steve Leech",
        "photo": "https://media.themoviedb.org/t/p/w185/mJabHWZrjlFiF8U8Bbr8lSFtLX6.jpg"
      },
      {
        "name": "Burl Ives",
        "character": "Rufus Hannassey",
        "photo": "https://media.themoviedb.org/t/p/w185/qRefQVFPdXwkHLLgDLFPeRgcLu4.jpg"
      },
      {
        "name": "Charles Bickford",
        "character": "Major Henry Terrill",
        "photo": "https://media.themoviedb.org/t/p/w185/eIHzgOkNyenH8HXezzsH056RTXd.jpg"
      }
    ]
  },
  {
    "n": 27,
    "slug": "children-of-men",
    "title": "Children of Men",
    "year": 2006,
    "kind": "film",
    "imdb": "tt0206634",
    "tmdbPath": "/movie/9693",
    "poster": "https://media.themoviedb.org/t/p/w500/k9IAS4TehZFcKi4HVByxZNPfqex.jpg",
    "themes": [
      "collapse",
      "family"
    ],
    "synopsis": "In a Britain that can no longer have children, one pregnant woman becomes the only concrete argument that there is a future.",
    "questionsFrom": "list",
    "questions": [
      "How do people act differently in a world with no next generation?",
      "What parts of that society feel uncomfortably close to the one we live in?",
      "Would you risk your life for that child if you had your own family to protect?"
    ],
    "cast": [
      {
        "name": "Clive Owen",
        "character": "Theo Faron",
        "photo": "https://media.themoviedb.org/t/p/w185/xlWpuLgwxMnZEVgV9OID1TkUNtP.jpg"
      },
      {
        "name": "Clare-Hope Ashitey",
        "character": "Kee",
        "photo": "https://media.themoviedb.org/t/p/w185/tuAfNiVgPnMzrw66pfZLKrb7oIn.jpg"
      },
      {
        "name": "Chiwetel Ejiofor",
        "character": "Luke",
        "photo": "https://media.themoviedb.org/t/p/w185/kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg"
      },
      {
        "name": "Julianne Moore",
        "character": "Julian",
        "photo": "https://media.themoviedb.org/t/p/w185/3YF19rWusxWfEI59ZM33dFhasRq.jpg"
      },
      {
        "name": "Michael Caine",
        "character": "Jasper",
        "photo": "https://media.themoviedb.org/t/p/w185/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg"
      },
      {
        "name": "Pam Ferris",
        "character": "Miriam",
        "photo": "https://media.themoviedb.org/t/p/w185/aVvdYkgolh22FYqqCJhVO8jd7To.jpg"
      }
    ]
  },
  {
    "n": 28,
    "slug": "rescue-dawn",
    "title": "Rescue Dawn",
    "year": 2007,
    "kind": "film",
    "imdb": "tt0462504",
    "tmdbPath": "/movie/9952",
    "poster": "https://media.themoviedb.org/t/p/w500/ymPlV2ymUBSctfRzpehFOxFmJiS.jpg",
    "themes": [
      "war"
    ],
    "synopsis": "A shot-down pilot plans an escape from a jungle prison while the men in the cell come apart in different ways.",
    "questionsFrom": "list",
    "questions": [
      "How do you hold on to hope when every rational sign says you are not getting out?",
      "What different ways do the prisoners cope, and which character do you relate to most?",
      "If you were planning an escape, which friend or family member would you want in the cell with you?"
    ],
    "cast": [
      {
        "name": "Christian Bale",
        "character": "Dieter Dengler",
        "photo": "https://media.themoviedb.org/t/p/w185/7Pxez9J8fuPd2Mn9kex13YALrCQ.jpg"
      },
      {
        "name": "Steve Zahn",
        "character": "Duane",
        "photo": "https://media.themoviedb.org/t/p/w185/rwrPdKGwXnByxUVMxMf8Y7oswi3.jpg"
      },
      {
        "name": "Toby Huss",
        "character": "Spook",
        "photo": "https://media.themoviedb.org/t/p/w185/dUqygHlDDnOBZLnE51MPJHkHWvQ.jpg"
      },
      {
        "name": "François Chau",
        "character": "Province Governor",
        "photo": "https://media.themoviedb.org/t/p/w185/fRKnZpGoUBJAEx9gEOkN1bG21D8.jpg"
      },
      {
        "name": "Marshall Bell",
        "character": "Admiral",
        "photo": "https://media.themoviedb.org/t/p/w185/3AdZRUFlmV9KvArzqSVEVZVl0Sa.jpg"
      },
      {
        "name": "Jeremy Davies",
        "character": "Gene",
        "photo": "https://media.themoviedb.org/t/p/w185/tNtcpQnMxzl0OqVDsyA63oAgPbI.jpg"
      }
    ]
  },
  {
    "n": 29,
    "slug": "the-impossible",
    "title": "The Impossible",
    "year": 2012,
    "kind": "film",
    "imdb": "tt1649419",
    "tmdbPath": "/movie/80278",
    "poster": "https://media.themoviedb.org/t/p/w500/k0DLCiDbnYywOHiISALbl2EH2NE.jpg",
    "themes": [
      "family",
      "collapse"
    ],
    "synopsis": "A vacationing family is torn apart by the 2004 tsunami and put back together mostly by strangers, not by institutions.",
    "questionsFrom": "list",
    "questions": [
      "What choices did the family make before the wave that either helped or hurt them during it?",
      "How did ordinary people, not institutions, become the main source of rescue and care?",
      "Does this make you want to do anything different about how you travel?"
    ],
    "cast": [
      {
        "name": "Naomi Watts",
        "character": "Maria Bennett",
        "photo": "https://media.themoviedb.org/t/p/w185/7ysvff7ZhW388SIh2YjQ0XIryOn.jpg"
      },
      {
        "name": "Ewan McGregor",
        "character": "Henry Bennett",
        "photo": "https://media.themoviedb.org/t/p/w185/q2UDxfwWnmXTB7khOUF3J9puBVP.jpg"
      },
      {
        "name": "Tom Holland",
        "character": "Lucas Bennett",
        "photo": "https://media.themoviedb.org/t/p/w185/xKBAaPIa1c7tzZD3Y0MhBLv4hPE.jpg"
      },
      {
        "name": "Samuel Joslin",
        "character": "Thomas Bennett",
        "photo": "https://media.themoviedb.org/t/p/w185/gXthNRK0BN9IqXnhKIc4glxOB7P.jpg"
      },
      {
        "name": "Oaklee Pendergast",
        "character": "Simon Bennett",
        "photo": "https://media.themoviedb.org/t/p/w185/tbC2Q3FCgW87o4ztxd8zfRveoIj.jpg"
      },
      {
        "name": "Marta Etura",
        "character": "Simone",
        "photo": "https://media.themoviedb.org/t/p/w185/a6aAilLDKbIXGwBfNgGc44RufVB.jpg"
      }
    ]
  },
  {
    "n": 30,
    "slug": "a-quiet-place",
    "title": "A Quiet Place",
    "year": 2018,
    "kind": "film",
    "imdb": "tt6644200",
    "tmdbPath": "/movie/447332",
    "poster": "https://media.themoviedb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "themes": [
      "family",
      "collapse"
    ],
    "synopsis": "Creatures hunt by sound, so a family's habits, chores, and children are now a single tactical problem.",
    "questionsFrom": "list",
    "questions": [
      "How would your habits have to change tomorrow if sound meant death?",
      "What did they do best as a family in planning and communication?",
      "What responsibility does each person in that family carry so the whole household survives?"
    ],
    "cast": [
      {
        "name": "Emily Blunt",
        "character": "Evelyn Abbott",
        "photo": "https://media.themoviedb.org/t/p/w185/5nCSG5TL1bP1geD8aaBfaLnLLCD.jpg"
      },
      {
        "name": "John Krasinski",
        "character": "Lee Abbott",
        "photo": "https://media.themoviedb.org/t/p/w185/pmVGDb6Yl6OyFcHVGbu1EYNfyFK.jpg"
      },
      {
        "name": "Millicent Simmonds",
        "character": "Regan Abbott",
        "photo": "https://media.themoviedb.org/t/p/w185/clNmG7JlsI5qZTVjYoXiGZ3Pvbq.jpg"
      },
      {
        "name": "Noah Jupe",
        "character": "Marcus Abbott",
        "photo": "https://media.themoviedb.org/t/p/w185/xbswZN0SHgeCbyo5GQ0xfZKH3vs.jpg"
      },
      {
        "name": "Cade Woodward",
        "character": "Beau Abbott",
        "photo": "https://media.themoviedb.org/t/p/w185/6tXfrNe9ilHeAby6Eg5tNvq5MGY.jpg"
      },
      {
        "name": "Leon Russom",
        "character": "Man in the Woods",
        "photo": "https://media.themoviedb.org/t/p/w185/lLBJc5ThJEMafNUlsQyYQ7x1efg.jpg"
      }
    ]
  },
  {
    "n": 31,
    "slug": "jericho",
    "title": "Jericho",
    "year": 2006,
    "kind": "series",
    "imdb": "tt0805663",
    "tmdbPath": "/tv/365",
    "poster": "https://media.themoviedb.org/t/p/w500/a57H9UsS388Av2LSLKO9inNmY7j.jpg",
    "themes": [
      "collapse",
      "family"
    ],
    "synopsis": "After nuclear strikes on American cities, a Kansas town has to decide who is in charge, what the radios are hiding, and how long “temporary” lasts.",
    "questionsFrom": "list",
    "questions": [
      "In the first episodes, what small details tell you this is not a temporary crisis?",
      "Who becomes more valuable in town after the crisis, who loses influence, and why?",
      "What role does the main character actually play — and how many hats is that?"
    ],
    "cast": [
      {
        "name": "Skeet Ulrich",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/moyTBJUTl82PaAhm8aHGwlvKr7r.jpg"
      },
      {
        "name": "Lennie James",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/lUcouck90jXNzyJr5uBJJiYMHAN.jpg"
      },
      {
        "name": "Ashley Scott",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/7k7Sa5U8F5XL9Gjnn6OP5YsyBXF.jpg"
      },
      {
        "name": "Michael Gaston",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/lXhqiW4J1n9bnbfwz0Kdf2sjGLU.jpg"
      },
      {
        "name": "Kenneth Mitchell",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/8LSKQ4pWxSs0aZUVfMFsL8lsJFZ.jpg"
      },
      {
        "name": "Brad Beyer",
        "character": "",
        "photo": "https://media.themoviedb.org/t/p/w185/7h0k75Qcd7n0O4fT1KbOdvMAvNu.jpg"
      }
    ]
  }
];

export function getFilm(slug: string): Film | undefined {
  return films.find((film) => film.slug === slug);
}

export const themeLabel: Record<Theme, string> = {
  war: "War",
  collapse: "Collapse",
  family: "Family",
  tyranny: "Tyranny",
  conscience: "Conscience",
  resistance: "Resistance",
};
