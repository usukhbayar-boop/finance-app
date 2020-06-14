// Дэлгэцтэй ажиллах контроллер
/*
inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn"
*/
var uiController = (function () {
  // DOM ийн элементүүдийг тусад нь хувьсагчид хийж хадгална
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// Санхүүтэй ажиллах контроллер
var fnController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expence = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

// Програмын холбогч контроллер
var appController = (function (parameter1, parameter2) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log(uiController.getInput());
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
    // 4. Төсвийг тооцоолно
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  var setUpEventListener = function () {
    var DOM = uiController.getDOMstrings();
    document.querySelector(".add__btn").addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Applicaion has started...");
      setUpEventListener();
    },
  };
})(uiController, fnController);

appController.init();
