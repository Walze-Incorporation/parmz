var rows = document.getElementsByClassName('classRow')
var actionButton = document.getElementById('row-action-button')
var noOfRowsToShow = 1

function increaseRowToShow() {
    noOfRowsToShow = noOfRowsToShow + 1
}


function decreaseRowToOne() {
    noOfRowsToShow = 1
}

function editRow(row, {opacity, height}) {
    row.style.opacity = opacity
    row.style.height = height
}

function showRow(row) {
    editRow(row, {
        opacity: 1,
        height: 'auto'
    })
}

function hideRow(row) {
    editRow(row, {
        opacity: 0,
        height: 0
    })
}

function hideAllRows() {
    for(var i = 0; i < rows.length ; i++) {
        hideRow(rows[i])
    }
}

function onSeeMoreClick() {
    increaseRowToShow()
    window.scrollBy(0, 500)
    for(var i = 0; i < noOfRowsToShow ; i++) {
            console.log('i and no of rows', i , noOfRowsToShow)
            showRow(rows[i])
    }
    if(!canShowMore()){
        changeButtonText('SEE LESS CLASSES')
    }
}

function onSeeLessClick() {
    decreaseRowToOne()
    hideAllRows()
    showRow(rows[0]) 
    window.scrollBy(0, -400 * rows.length)
    if(canShowMore()){
        changeButtonText('SEE MORE CLASSES')
    }
}

function canShowMore() {
    if(noOfRowsToShow >= rows.length) {
      return false  
    }
    return true
}

function changeButtonText(text) {
    actionButton.innerHTML = text
}

function handleActionButtonClick() {
    console.log('handle action button click')
    if(canShowMore()) {
        onSeeMoreClick()
    }else {
        onSeeLessClick()
    }
}

hideAllRows()
showRow(rows[0])
actionButton.onclick = handleActionButtonClick