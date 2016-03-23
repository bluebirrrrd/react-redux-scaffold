const express = require('express');
const router = new express.Router();

let authorsList = [
  {
    'id': 1,
    'name': 'Rick Riordan',
    'bio': 'Author of several Percy Jackson books.'
  },
  {
    'id': 2,
    'name': 'Jostein Gaarder',
    'bio': 'Some good writer'
  },
  {
    'id': 3,
    'name': 'Michael McCandless',
    'bio': 'IT writer. Never heard of him.'
  },
  {
    'id': 4,
    'name': 'Erik Hatcher',
    'bio': 'Another IT writer.'
  }
];

let booksList = [
  {
    "id" : "978-0641723445",
    "cat" : ["book","hardcover"],
    "name" : "The Lightning Thief",
    "authors" : [authorsList[0]],
    "series_t" : "Percy Jackson and the Olympians",
<<<<<<< HEAD
    "summary": "After returning home from his boarding school for the summer, Percy and his mother, Sally Jackson, travel to their cabin in Montauk. However, the trip is cut short and after a series of harrowing incidents such as being attacked by a minotaur, Percy finds himself at Camp Half-Blood, a training camp for demigods like him.",
=======
>>>>>>> cb4bda870a0dd10d25a56890a66317efe4e81db1
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 12.50,
    "pages_i" : 384
  }
,
  {
    "id" : "978-1423103349",
    "cat" : ["book","paperback"],
    "name" : "The Sea of Monsters",
    "authors" : [authorsList[0]],
    "series_t" : "Percy Jackson and the Olympians",
<<<<<<< HEAD
    "summary": "Camp Half-Blood is under attack when Thalia's tree, which guards the borders of the camp, is poisoned and slowly begins to die.",
=======
>>>>>>> cb4bda870a0dd10d25a56890a66317efe4e81db1
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 6.49,
    "pages_i" : 304
  }
,
  {
    "id" : "978-1857995879",
    "cat" : ["book","paperback"],
    "name" : "Sophie's World : The Greek Philosophers",
    "authors" : [authorsList[1]],
<<<<<<< HEAD
    "summary": `Sophie Amundsen (Sofie Amundsen in the Norwegian version) is a 14-year-old girl who lives in Norway in the year 1990.
    The book begins with Sophie receiving two messages in her mailbox and a postcard addressed to Hilde Møller Knag. Afterwards, she receives a packet of papers, part of a course in philosophy.`,
=======
>>>>>>> cb4bda870a0dd10d25a56890a66317efe4e81db1
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 3.07,
    "pages_i" : 64
  }
,
  {
    "id" : "978-1933988177",
    "cat" : ["book","paperback"],
    "name" : "Lucene in Action, Second Edition",
    "authors" : [authorsList[2], authorsList[3]],
<<<<<<< HEAD
    "summary": "When Lucene first appeared, this superfast search engine was nothing short of amazing. Today, Lucene still delivers. Its high-performance, easy-to-use API, features like numeric fields, payloads, near-real-time search, and huge increases in indexing and searching speed make it the leading search tool.",
=======
>>>>>>> cb4bda870a0dd10d25a56890a66317efe4e81db1
    "genre_s" : "IT",
    "inStock" : true,
    "price" : 30.50,
    "pages_i" : 475
  }
];



router.get('/', (req, res) => {
  res.json({hi: 'Hello, world!'});
});

router.get('/books', (req, res) => {
  res.json(booksList);
});

router.get('/authors', (req, res) => {
  res.json(authorsList);
});

module.exports = router;
