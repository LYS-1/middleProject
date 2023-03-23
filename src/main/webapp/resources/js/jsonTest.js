let buttonText = '<button id="optionNameAdd">optionNameAdd</button>'

const fulldiv = document.getElementById("full");
const optionValueDiv = document.getElementById("optionValue");

const optionNameAdd = document.getElementById("optionNameAdd");

const optionValueAdd1 = document.getElementById("optionValueAdd1");

let count = 0;
let depth = 1;
optionValueAdd1.addEventListener("click", function(){
    count ++;
    let temp = document.createElement("div");
    let ic = document.createAttribute("class");
    ic.value = '';
    let ii = document.createAttribute("id");
    ii.value = 'value' + count;
    let data = document.createAttribute("data-value-count")
    data.value = count;
    temp.setAttributeNode(ic);
    temp.setAttributeNode(ii);
    temp.setAttributeNode(data);

    let text = '<label>Value'+ count +'-depth-'+ depth +'</label>' + '<input type="text" id="optionValue' + count + '" data-value-count="' + count + '">' + '<button class="btn nameAdd btn-primary" id="optionNameAdd'+ count +'"data-value-count="' + count + '">optionNameAdd</button>';
    temp.innerHTML = text;
    document.querySelector("#optionValue").append(temp)
})

fulldiv.addEventListener("click", function(e){
    
    if(e.target.getAttribute("id") !== 'optionValueAdd1' && e.target.classList.contains('nameAdd')){
        console.log(e.target.getAttribute("data-value-count"));
        console.log(e.target.parentNode);
        let count2 = e.target.getAttribute("data-value-count");
        let temp = document.createElement("div");
        let ic = document.createAttribute("class");
        ic.value = 'row';
        count2++;
        depth = count2;
        let text =  '<div class="col-md-6" id="optionName'+ count2 +'">'
                    +'<label>Name'+ count2 +'-depth-'+ depth +'</label>'
                    +'<input type="text" id="optionName" data-option-depth="'+ count2 +'">'
                    +'<button class="btn btn-danger" data-value-count="'+ count2 +'" id="optionValueAdd'+ count2 +'">optionValueAdd</button></div>'
                    +'<div class="col-md-6" id="optionValue'+ count2 +'">'
                    +'</div>';

        
        temp.setAttributeNode(ic);
        temp.innerHTML = text;
        console.log(e.target.parentNode.parentNode.parentNode.parentNode);
        e.target.parentNode.parentNode.parentNode.append(temp);
        //e.target.parentNode.append(temp);
    }
    let valueInit = e.target.getAttribute("data-value-count");
    console.log(valueInit);
    if(e.target.getAttribute("id") == "optionValueAdd" + valueInit){
        console.log(e.target);
        let count = e.target.getAttribute("data-value-count");
        let temp = document.createElement("div");
        let ic = document.createAttribute("class");
        ic.value = '';
        let ii = document.createAttribute("id");
        ii.value = 'value' + count;
        let data = document.createAttribute("data-value-count")
        data.value = count;
        depth = count;
        temp.setAttributeNode(ic);
        temp.setAttributeNode(ii);
        temp.setAttributeNode(data);

        let text = '<label>Value'+ count +'-depth-'+ depth +'</label>' + '<input type="text" id="optionValue' + count + '" data-value-count="' + count + '">' + '<button class="btn nameAdd btn-primary" id="optionNameAdd'+ count +'" data-value-count="' + count + '">optionNameAdd</button>';
        temp.innerHTML = text;
        e.target.parentNode.parentNode.childNodes[1].append(temp);
    }
})


{/* <div class="col-md-6">
			<input type="text" id="optionName" data-option-depth="1">
			<button class="btn btn-danger" id="optionValueAdd1">optionValueAdd</button>
			<div class="col-md-6" id="optionValue">
				
			</div>
		</div> */}