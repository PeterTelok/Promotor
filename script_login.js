function changeBoxShadow(containerId) {
    var container = document.getElementById(containerId);
    var color = getRandomColor();
    container.style.boxShadow = "0px 0px 40px 0px " + color;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setInterval(function() {
    changeBoxShadow('container1');
    setTimeout(function() {
      changeBoxShadow('container2');
    }, 600);
  }, 1200);