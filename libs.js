let libraries = [
    {
        libraryName: "Central Library",
        libraryID: "LIB001",
        address: {
            street: "123 Main St",
            city: "Metropolis",
            state: "NY",
            zip: "10001"
        },
        sections: [
            {
                sectionName: "Fiction",
                sectionID: "SEC001",
                books: [
                    {
                        bookTitle: "To Kill a Mockingbird",
                        bookID: "BK001",
                        author: "Harper Lee",
                        publicationYear: 1960,
                        genres: ["Fiction", "Classics"],
                        reviews: [
                            {
                                reviewer: "Alice",
                                rating: 5,
                                comment: "A timeless classic."
                            },
                            {
                                reviewer: "Bob",
                                rating: 4,
                                comment: "Very moving and thought-provoking."
                            }
                        ]
                    },
                    {
                        bookTitle: "1984",
                        bookID: "BK002",
                        author: "George Orwell",
                        publicationYear: 1949,
                        genres: ["Fiction", "Dystopian"],
                        reviews: [
                            {
                                reviewer: "Charlie",
                                rating: 5,
                                comment: "A chilling depiction of the future."
                            },
                            {
                                reviewer: "Dave",
                                rating: 5,
                                comment: "A must-read for everyone."
                            }
                        ]
                    }
                ]
            },
            {
                sectionName: "Non-Fiction",
                sectionID: "SEC002",
                books: [
                    {
                        bookTitle: "Sapiens: A Brief History of Humankind",
                        bookID: "BK003",
                        author: "Yuval Noah Harari",
                        publicationYear: 2011,
                        genres: ["Non-Fiction", "History"],
                        reviews: [
                            {
                                reviewer: "Eve",
                                rating: 5,
                                comment: "A fascinating exploration of human history."
                            },
                            {
                                reviewer: "Frank",
                                rating: 4,
                                comment: "Very informative and well-written."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        libraryName: "Eastside Library",
        libraryID: "LIB002",
        address: {
            street: "456 Elm St",
            city: "Gotham",
            state: "NJ",
            zip: "07001"
        },
        sections: [
            {
                sectionName: "Science Fiction",
                sectionID: "SEC003",
                books: [
                    {
                        bookTitle: "Dune",
                        bookID: "BK004",
                        author: "Frank Herbert",
                        publicationYear: 1965,
                        genres: ["Science Fiction", "Adventure"],
                        reviews: [
                            {
                                reviewer: "Grace",
                                rating: 5,
                                comment: "An epic story with rich world-building."
                            },
                            {
                                reviewer: "Hank",
                                rating: 4,
                                comment: "A bit complex, but worth the read."
                            }
                        ]
                    }
                ]
            },
            {
                sectionName: "Biography",
                sectionID: "SEC004",
                books: [
                    {
                        bookTitle: "The Diary of a Young Girl",
                        bookID: "BK005",
                        author: "Anne Frank",
                        publicationYear: 1947,
                        genres: ["Biography", "History"],
                        reviews: [
                            {
                                reviewer: "Ivy",
                                rating: 5,
                                comment: "Heartbreaking and inspiring."
                            },
                            {
                                reviewer: "Jack",
                                rating: 5,
                                comment: "A must-read to understand the horrors of war."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        libraryName: "Westside Library",
        libraryID: "LIB003",
        address: {
            street: "789 Oak St",
            city: "Star City",
            state: "CA",
            zip: "90001"
        },
        sections: [
            {
                sectionName: "Mystery",
                sectionID: "SEC005",
                books: [
                    {
                        bookTitle: "The Girl with the Dragon Tattoo",
                        bookID: "BK006",
                        author: "Stieg Larsson",
                        publicationYear: 2005,
                        genres: ["Mystery", "Thriller"],
                        reviews: [
                            {
                                reviewer: "Kim",
                                rating: 4,
                                comment: "A gripping and intense read."
                            },
                            {
                                reviewer: "Lee",
                                rating: 5,
                                comment: "Couldn't put it down."
                            }
                        ]
                    }
                ]
            },
            {
                sectionName: "Fantasy",
                sectionID: "SEC006",
                books: [
                    {
                        bookTitle: "Harry Potter and the Sorcerer's Stone",
                        bookID: "BK007",
                        author: "J.K. Rowling",
                        publicationYear: 1997,
                        genres: ["Fantasy", "Adventure"],
                        reviews: [
                            {
                                reviewer: "Mia",
                                rating: 5,
                                comment: "A magical journey from start to finish."
                            },
                            {
                                reviewer: "Noah",
                                rating: 5,
                                comment: "An all-time favorite."
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

//Write a function to print all libraries and their address.

for (let libs of libraries) {
    console.log(libs.libraryName);
    console.log(libs.address);

}

 // Write a function to print all books and their reviews for a given section ID.

for (let libs of libraries) {
    for (let id of libs.sections) {
        if (id.sectionID == "SEC006") {
            for (let bok of libs.sections) {
                console.log(bok.books);

                for (let rev of bok.books) {
                    console.log(rev.reviews)
                }
            }
        }
    }

}
