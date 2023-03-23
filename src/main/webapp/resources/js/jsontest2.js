let count = 1;
let depth = 1;

$(optionValueAdd1).click(function(e){
    count ++;
    let temp = document.createElement("div");
    let ic = document.createAttribute("class");
    ic.value = 'row my-2';
    let ii = document.createAttribute("id");
    ii.value = 'value' + count;
    let data = document.createAttribute("data-value-count")
    data.value = count;
    temp.setAttributeNode(ic);
    temp.setAttributeNode(ii);
    temp.setAttributeNode(data);

    let text = '<div class="col-md-6"></div><div class="col-md-6">'
                + '<label>Name1-Value'+ count +'-depth-'+ depth +'</label>'
                + '<input type="text" id="optionValue' + count + '" data-value-depth="'+ depth +'" data-value-count="' + count + '">'
                + '<button class="btn nameAdd btn-primary" id="optionNameAdd'+ count +'"data-value-count="' + count + '" data-value-depth="'+ depth +'">optionNameAdd</button></div>';
    temp.innerHTML = text;
    $('#full').append(temp);
});


$('#full').on('click', function(e){
    if($(e.target).text() == 'optionNameAdd'){
        console.log($(e.target).attr('data-value-count'));
        let count = 1;
        let dataCount = $(e.target).attr('data-value-count');
        console.log($(e.target).attr('data-value-depth'));
        let depth = $(e.target).attr('data-value-depth');
        depth ++;
        console.log($(e.target).parent().parent());
        let text = '<div class="col-md-6 my-2">'
        + '<label>Name'+ depth +'</label>'
        + '<input type="text" id="optionName" data-option-value"' + dataCount + '" data-option-depth="'+ depth +'">'
        + '<button class="btn btn-danger" id="optionValueAdd1" data-value-count="' + count + '" data-value-depth="'+ depth +'">optionValueAdd</button>'
        + '</div>'
        + '<div class="col-md-6 my-2">'
        + '<label>Name'+ depth +'-Value1-depth-'+ depth +'</label>'
        + '<input type="text" id="optionValue' + count + '" data-value-depth="'+ depth +'" data-value-count="' + count + '">'
        + '<button class="btn nameAdd btn-primary" id="optionNameAdd'+ count +'"data-value-count="' + count + '" data-value-depth="'+ depth +'">optionNameAdd</button></div>';

        $(e.target).parent().parent().append(text);
    }
    if($(e.target).text() == 'optionValueAdd'){
        let count = $(e.target).attr('data-value-count');
        let depth = $(e.target).attr('data-value-depth');
        count ++;
        let temp = document.createElement("div");
        let ic = document.createAttribute("class");
        ic.value = 'row my-2';
        let ii = document.createAttribute("id");
        ii.value = 'value' + count;
        let data = document.createAttribute("data-value-count")
        data.value = count;
        temp.setAttributeNode(ic);
        temp.setAttributeNode(ii);
        temp.setAttributeNode(data);
        console.log($(e.target).parent().parent().children())
        let text = '<div class="col-md-6"></div><div class="col-md-6">'
                    + '<label>Name'+ depth +'-Value'+ count +'-depth-'+ depth +'</label>'
                    + '<input type="text" id="optionValue' + count + '" data-value-depth="'+ depth +'" data-value-count="' + count + '">'
                    + '<button class="btn nameAdd btn-primary" id="optionNameAdd'+ count +'"data-value-count="' + count + '" data-value-depth="'+ depth +'">optionNameAdd</button></div>';
        temp.innerHTML = text;
        $(e.target).parent().parent().append(temp);
    }
})

$('#jsonButton').click(function(e){

    

})