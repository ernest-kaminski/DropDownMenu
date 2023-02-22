// Znajdź przycisk i menu dropdown
window.onload = function(){
    var dropdownButton = document.querySelector('.dropdown-toggle');
    var dropdownSelect = document.querySelector('.select-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var caret = document.querySelector('.caret');
    var text = document.getElementById('select-text')

    // pobieranie data z endpointa

    fetch('options.json').then((response) => {
                            return response.json();
                       }).then((data) => {
                          fillData(data)
                       }).catch((err) => {
                          console.log("Błąd: " + err);
                       })

    dropdownSelect.addEventListener('click', function() {

    });

    caret.addEventListener('click', function() {

    });

    dropdownButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
        caret.classList.toggle('caret-rotate')   
    });

    dropdownMenu.addEventListener('click', function(e) {
      text.innerHTML = e.target.innerHTML
      //console.log(text.innerHTML)
    })
      
      // Kliknij gdziekolwiek, aby zamknąć menu
      window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle') && !event.target.matches('.select-toggle')) {
          dropdownMenu.classList.remove('show');
          caret.classList.remove('caret-rotate')
        }
    });

    fillData = (data) => {
      var menuList = document.getElementById('menu')
      for(var i=0; i < data.length; i++){
        var li = document.createElement("li")
        li.innerHTML = data[i].name
        menuList.appendChild(li)
      }
    }

}


// Kliknij przycisk, aby otworzyć / zamknąć menu
