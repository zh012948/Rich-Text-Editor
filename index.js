let button = document.querySelectorAll('button');
let backColor = document.getElementById('backColor');
let optionButton = document.querySelectorAll('.option-button');
let advancedOption = document.querySelectorAll('.adv-option-button');
let fontSize = document.getElementById('fontSize');
let fontName = document.getElementById('fontName');
let linkButton = document.getElementById('createLink');
let InputField = document.getElementById('text-input');
let superscript = document.getElementById('superscript');
let subscript = document.getElementById('subscript');
let orderList = document.getElementById('insertOrderedList');
let unorderList = document.getElementById('insertUnorderedList');
let undo = document.getElementById('undo')
let redo = document.getElementById('redo')
let justifyLeft = document.getElementById('justifyLeft');
let justifyCenter = document.getElementById('justifyCenter');
let justifyRight = document.getElementById('justifyRight');
let justifyFull = document.getElementById('justifyFull');
let indent = document.getElementById('indent');
let outdent = document.getElementById('outdent');
let bold = document.getElementById('bold');
let fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "Cursive"];

function Initialize() {
    fontList.forEach(font => {
        let option = document.createElement('option')
        option.textContent = font;
        fontName.appendChild(option)
    })

    for (let i = 1; i <= 7; i++) {
        let option = document.createElement('option');
        option.textContent = i;
        fontSize.appendChild(option);
    }



    backColor.value = '#ffffff'
    fontSize.value = 3;
    fontName.value = 'Times New Roman'
    attachEventHandlers();
};


function modifyText(command, value = null) {
    document.execCommand(command, false, value)
}

function attachEventHandlers() {
    optionButton.forEach(button => {
        button.addEventListener('click', () => {
            modifyText(button.id)
        })
    })

    advancedOption.forEach(Button => {
        Button.addEventListener('change', () => {
            modifyText(Button.id, Button.value);
        })
    })

    linkButton.addEventListener('click', () => {
        InputField.focus()
        let userInput = prompt('Enter the URL...')
        if (!userInput.startsWith('https://')) {
            userInput = 'https://' + userInput;
        }
        modifyText('createLink', userInput)
    });
}



subscript.addEventListener('click', () => {
    InputField.focus()
    if (superscript.classList = 'active') {
        superscript.classList.remove('active');
    }
    subscript.classList.toggle('active');
})

superscript.addEventListener('click', () => {
    InputField.focus()
    if (subscript.classList = 'active') {
        subscript.classList.remove('active')
    }
    superscript.classList.toggle('active');
})



orderList.addEventListener('click', () => {
    InputField.focus()
    if (unorderList.classList = 'active') {
        unorderList.classList.remove('active');
    }
    orderList.classList.toggle('active');
})

unorderList.addEventListener('click', () => {
    InputField.focus()
    if (orderList.classList = 'active') {
        orderList.classList.remove('active')
    }
    unorderList.classList.toggle('active');
})

undo.addEventListener('click', () => {
    InputField.focus()
    if (redo.classList = 'active') {
        redo.classList.remove('active')
    }
    undo.classList.toggle('active')
})

redo.addEventListener('click', () => {
    InputField.focus()
    if (undo.classList = 'active') {
        undo.classList.remove('active')
    }
    redo.classList.toggle('active')
})


justifyLeft.addEventListener('click', () => {
    InputField.focus();
    if (justifyCenter.classList = 'active') {
        justifyCenter.classList.remove('active')
    }
    if (justifyRight.classList = 'active') {
        justifyRight.classList.remove('active')
    }

    justifyLeft.classList.toggle('active');
})

justifyRight.addEventListener('click', () => {
    InputField.focus();
    if (justifyCenter.classList = 'active') {
        justifyCenter.classList.remove('active')
    }
    if (justifyLeft.classList = 'active') {
        justifyLeft.classList.remove('active')
    }

    justifyRight.classList.toggle('active');
})

justifyCenter.addEventListener('click', () => {
    InputField.focus();
    if (justifyRight.classList = 'active') {
        justifyRight.classList.remove('active')
    }
    if (justifyLeft.classList = 'active') {
        justifyLeft.classList.remove('active')
    }

    justifyCenter.classList.toggle('active');
})

justifyFull.addEventListener('click', () => {
    InputField.focus();
    if (justifyRight.classList = 'active') {
        justifyRight.classList.remove('active')
    }
    if (justifyLeft.classList = 'active') {
        justifyLeft.classList.remove('active')
    }

    if (justifyCenter.classList = 'active') {
        justifyCenter.classList.remove('active');
    }

    if (outdent.classList = 'active') {
        outdent.classList.remove('active')
    }

    if (indent.classList = 'active') {
        indent.classList.remove('active');
    }

    justifyFull.classList.toggle('active');
})

indent.addEventListener('click', () => {
    InputField.focus();
    if (justifyRight.classList = 'active') {
        justifyRight.classList.remove('active')
    }
    if (justifyLeft.classList = 'active') {
        justifyLeft.classList.remove('active')
    }

    if (justifyCenter.classList = 'active') {
        justifyCenter.classList.remove('active');
    }

    if (outdent.classList = 'active') {
        outdent.classList.remove('active')
    }

    if (justifyFull.classList = 'active') {
        justifyFull.classList.remove('active');
    }

    indent.classList.add('active');
})


outdent.addEventListener('click', () => {
    InputField.focus();
    if (justifyRight.classList = 'active') {
        justifyRight.classList.remove('active')
    }
    if (justifyLeft.classList = 'active') {
        justifyLeft.classList.remove('active')
    }

    if (justifyCenter.classList = 'active') {
        justifyCenter.classList.remove('active');
    }

    if (indent.classList = 'active') {
        indent.classList.remove('active')
    }

    if (justifyFull.classList = 'active') {
        justifyFull.classList.remove('active');
    }

    outdent.classList.add('active');
})

bold.addEventListener('click', () => {
    InputField.focus()
    bold.classList.toggle('active');
})


window.onload = Initialize;