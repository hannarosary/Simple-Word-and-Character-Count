// when you pressed an enter button or a space bar
document.getElementById("inputArea").addEventListener("keyup", function (e){
    if(e.keyCode == "13" || e.keyCode == "32"){
        e.preventDefault();
    }
    actions();
});

// its function
function actions(){
    document.getElementById("wordCountResult").innerText = countWord();
    document.getElementById("charCountResult").innerText = countCharacter();
    document.getElementById("parCountResult").innerText = countParagraph();
    document.getElementById("charSpaceCountResult").innerText = countCharacterWithSpace();
}

//your input text/phrase/word
function inputParagraph(){
    let content = document.getElementById("inputArea").value;
    let trimtext = content.trim();

    return trimtext;
}

//counts the word(s)
function countWord(){
    let inputPar = inputParagraph();
    let sumOmit = 0;
    
    if(inputPar == "" || inputPar == null){
        sumOmit = 0;
    }else{
        let nextLineOmit = inputPar.split(/\r?\n/);
        let spaceOmit = inputPar.split(" ");
        let ctr = 0, extraSpace = 0;
        
        for(ctr; ctr < nextLineOmit.length; ctr++){
            if(nextLineOmit[ctr] == "" || nextLineOmit[ctr] == null){
                extraSpace++;
            }
        }

        sumOmit = ((nextLineOmit.length + spaceOmit.length) - 1) - extraSpace; 
    }
    return sumOmit;
}

//counts the character(s)
function countCharacter(){
    let inputPar = inputParagraph();

    let charReplaceRN = inputPar.replace(/[\r\n]|[\r]|[\n]/g, "");
    let charSplit = inputPar.split(" ");
    let sumChar = 1;

    sumChar += (charReplaceRN.length - charSplit.length);

    return sumChar;
}

function countCharacterWithSpace(){
    let inputPar = inputParagraph();
    let charReplaceRN = inputPar.replace(/[\r\n]|[\r]|[\n]/g, "");
    let ctr = 0, sumCharSpace = 0;

    for(ctr; ctr < charReplaceRN.length; ctr++){
        if(charReplaceRN[ctr] != "" || charReplaceRN[ctr] != null){
            sumCharSpace++;
        }
    }

    return sumCharSpace;
}

function countParagraph(){
    let inputPar = inputParagraph();
    let charReplaceRN = inputPar.split(/\r\n|\r|\n/);
    let counter = 0, inc = 0;

    for(counter; counter<charReplaceRN.length; counter++){
        if(charReplaceRN[counter] == "" || charReplaceRN[counter] == null){
            continue;
        }
        inc++;
    }
    return inc;
}

//A function to display the current full year
function newYear(){
    let varDate = new Date();
    let latestYear = varDate.getFullYear();
    
    if(latestYear != 2021){
        document.getElementById("newYear").innerText = "2021 - " + latestYear;
    }else{
        document.getElementById("newYear").innerText = latestYear;
    }
}

//Executes the function to display the full year
newYear();

//clears the input area
document.getElementById("clearBtn").addEventListener("click", function(){
    document.getElementById("inputArea").value = " ";
    actions();
});