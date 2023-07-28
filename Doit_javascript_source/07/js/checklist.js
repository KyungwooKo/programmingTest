var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.onclick = addList;

function addList() {
  var item = document.querySelector("#item").value;
  if (item != null) {
    itemList.push(item);
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
  }
  showList();
}

function showList() {
  var list = "<ul>";
  for (var i = 0; i < itemList.length; i++) {
    list += "<l>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
  }
  list += "</ul>";

  document.querySelector("#itemList").innerHTML = list;
}
