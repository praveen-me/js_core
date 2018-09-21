var authors = {
  allAuthors: {
    fiction: [
      'Agatha Christie', 
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov', 
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett'
    ],
    iction: [
      'Agatha Christie', 
      'J. K. Rowling',
      'Dr. Seuss'
    ]
  }
}


authors[Symbol.iterator] = () => {
  const generes = Object.values(authors.allAuthors);
  var genereIndex = 0;
  var authorIndex = 0;
  return {
    next() {
      let author = generes[genereIndex];
      if(authorIndex === author.length) {
        genereIndex++;
        authorIndex = 0;
      }
      if(genereIndex === generes.length) {
        return {
          done : true,
          value : undefined
        }
      }
      return {
        value : generes[genereIndex][authorIndex++],
        done : false
      }
    }
  }
};

for(let author of authors) {
  console.log(author);
}