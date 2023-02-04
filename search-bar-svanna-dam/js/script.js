var books = [
    {
        "team": "Mercedes",
        "base":"Brackley, United Kingdom",
        "chief":"Toto Wolf",
        "drivers":"Lewis Hamilton & George Russell",
      },
    {
        "team": "Alpine",
        "base":"Enstone, United Kingdom",
        "chief":"Otmar Szafnauer",
        "drivers":"Pierre Gasly & Esteban Ocon",
      },
    {
        "team": "Haas",
        "base":"Kannapolis, United States",
        "chief":"Guenther Steiner",
        "drivers":"Kevin Magnussen & Nico Hulkenberg",
      },
    {
        "team": "McLaren",
        "base":"Woking, United Kingdom",
        "chief":"Andrea Stella",
        "drivers":"Lando Norris & Oscar Piastri",
      },
    {
        "team": "Red Bull",
        "base":"Milton Keynes, United Kingdom",
        "chief":"Christian Horner",
        "drivers":"Max Verstappen & Sergio Perez",
      },
    {
        "team": "Aston Martin",
        "base":"Silverstone, United Kingdom",
        "chief":"Mike Krack",
        "drivers":"Fernando Alonso & Lance Stroll",
      },
    {
        "team": "AlphaTauri",
        "base":"Faenza, Italy",
        "chief":"Franz Tost",
        "drivers":"Yuki Tsunoda & Nyck De Vries",
      },
    {
        "team": "Ferrari",
        "base":"Maranello, Italy",
        "chief":"Frédéric Vasseur",
        "drivers":"Charles Leclerc & Carlos Sainz",
      },
    {
        "team": "Alfa Romeo",
        "base":"Hinwil, Switzerland",
        "chief":"Alessandro Alunni Bravi",
        "drivers":"Valtteri Bottas & Zhou Guanyu",
      },
    {
        "team": "Williams",
        "base":"Grove, United Kingdom",
        "chief":"James Vowles",
        "drivers":"Alexander Albon & Logan Sargeant",
      },
  ]
  
  var render = function(data) {
    var app = document.getElementById('app');
    var booksHTMLString = '<ul>'+
      data.map(function(book){
        return '<li>'+
                '<strong>TEAM: </strong>' + book.team + '<br/>' +
                '<strong>BASE: </strong>' + book.base + '<br/>' +
                '<strong>CHIEF: </strong>' + book.chief + '<br/>' +
                '<strong>DRIVERS: </strong>' + book.drivers + '<br/>' +
              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = booksHTMLString;
  }
  render(books);

  var handleSearch = function(event) {
    event.preventDefault();
    var searchTerm = event.target.elements['search'].value;
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = books.filter(function(book){
      var bookString = '';
      for(var key in book) {
        if(book.hasOwnProperty(key) && book[key] !== '') {
          bookString += book[key].toString().toLowerCase().trim() + ' ';
        }
      }
      return bookString.match(searchTermRegex);
    });
    render(filteredList);
   }
  };

  document.addEventListener('submit', handleSearch);
  document.addEventListener('reset', function(event){
    event.preventDefault();
    render(books);
  })