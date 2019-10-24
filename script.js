function dropinfo1() {
    var x = document.getElementById("info1-mob");
    if (x.className.indexOf("w3-drop-1") == -1) {
      x.className += "w3-drop-1";
      var y = document.getElementById("info2-mob");
      var z = document.getElementById("info3-mob");
      y.className = y.className.replace("w3-drop-2","");
      z.className = z.className.replace("w3-drop-3","");
    } else { 
      x.className = x.className.replace("w3-drop-1", "");
    }
  }
  function dropinfo2() {
    var x = document.getElementById("info2-mob");
    if (x.className.indexOf("w3-drop-2") == -1) {
      x.className += "w3-drop-2";
      var y = document.getElementById("info1-mob");
      var z = document.getElementById("info3-mob");
      y.className = y.className.replace("w3-drop-1","");
      z.className = z.className.replace("w3-drop-3","");
    } else { 
      x.className = x.className.replace("w3-drop-2", "");
    }
  }
  function dropinfo3() {
    var x = document.getElementById("info3-mob");
    if (x.className.indexOf("w3-drop-3") == -1) {
      x.className += "w3-drop-3";
      var y = document.getElementById("info2-mob");
      var z = document.getElementById("info1-mob");
      y.className = y.className.replace("w3-drop-2","");
      z.className = z.className.replace("w3-drop-1","");
    } else { 
      x.className = x.className.replace("w3-drop-3", "");
    }
  }