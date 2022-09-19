////////////////////////////
// GRID
////////////////////////////

function addAllSquares() {
  for (i = 0; i < numberSquaresHeight * numberSquaresWidth; i++) {
    const squareContainer = document.createElement("div");
    squareContainer.classList.add("square-container");
    const square = document.createElement("div");
    square.classList.add("square");
    squareContainer.append(square);
    gridEL.appendChild(squareContainer);
  }

  //  Update All Square Hover
  updateSquareHover();

  //   Change square size
  squareContainers = document.querySelectorAll(".square-container");
  squareContainers.forEach((element) => {
    element.style.height = `${100 / numberSquaresHeight}vh`;
    element.style.width = `${100 / numberSquaresHeight}vh`;
  });
  // Change number squares per column and row

  gridEL.style.gridTemplateColumns = `repeat(${numberSquaresWidth}, 1fr)`;
  gridEL.style.gridTemplateRows = `repeat(${numberSquaresHeight}, 1fr)`;
}

function removeAllSquares() {
  while (gridEL.lastElementChild) {
    gridEL.removeChild(gridEL.lastElementChild);
  }
}

////////////////////////////
// SQUARE HOVER
////////////////////////////

function updateSquareHover() {
  squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
      if (e.target.style.backgroundColor === "") {
        e.target.style.backgroundColor = `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`;
        e.target.setAttribute("data-bright-level", "10");
        e.target.style.filter = "brightness(100%)";
      } else if (e.target.getAttribute("data-bright-level") > 0) {
        bright = e.target.getAttribute("data-bright-level");
        bright--;
        e.target.setAttribute("data-bright-level", bright);
        e.target.style.filter = `brightness(${bright * 10}%)`;
      }
    });
  });
}

////////////////////////////
// RESET
////////////////////////////

const resetBTN = document.querySelector(".reset");
resetBTN.addEventListener("click", function (e) {
  updateGrid();
});

////////////////////////////
// WINDOW RESIZE
////////////////////////////

// Default when opening window
numberSquaresHeight = 6;

function updateGrid() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth - 200;
  numberSquaresWidth = Math.floor(
    windowWidth / (windowHeight / numberSquaresHeight)
  );
  removeAllSquares();
  addAllSquares();
}

addEventListener("resize", updateGrid);

////////////////////////////
// Change number of rows
////////////////////////////

maxSquaresHeight = 64

lessRowBTN = document.querySelector(".less-row");
moreRowBTN = document.querySelector(".more-row");
less5RowBTN = document.querySelector(".less5-row");
more5RowBTN = document.querySelector(".more5-row");

function updateNumberRows() {
  const numberRowsEL = document.querySelector(".number-rows");
  numberRowsEL.textContent = numberSquaresHeight;
}

lessRowBTN.addEventListener("click", function (e) {
  if (numberSquaresHeight > 1) {
    numberSquaresHeight--;
    updateGrid();
    updateNumberRows();
  }
});

moreRowBTN.addEventListener("click", function (e) {
  if (numberSquaresHeight < maxSquaresHeight) {
    numberSquaresHeight++;
    updateGrid();
    updateNumberRows();
  }
});

less5RowBTN.addEventListener("click", function (e) {
  if (numberSquaresHeight > 10) {
    numberSquaresHeight -= 10;
    updateGrid();
    updateNumberRows();
  }
});

more5RowBTN.addEventListener("click", function (e) {
  if (numberSquaresHeight <= maxSquaresHeight - 10) {
    numberSquaresHeight += 10;
    updateGrid();
    updateNumberRows();
  }
});

////////////////////////////
// MAIN
////////////////////////////

const containerEL = document.querySelector(".grid-container");

const gridEL = document.createElement("div");
gridEL.classList.add("grid");

containerEL.append(gridEL);

updateGrid();
