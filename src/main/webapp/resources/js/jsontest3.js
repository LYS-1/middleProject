let count = 1;
let depth = 1;
$('#optionValueAdd1').click(function(e){
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
                + '<button class="btn btn-danger removeValue">X</button>'
                + '<label>Name1-Value'+ count +'-depth-'+ depth +'</label>'
                + '<input type="text" id="optionValue' + count + '" data-value-depth="'+ depth +'" data-value-count="' + count + '">'
                + '<button class="btn nameAdd btn-primary" id="optionNameAdd'+ count +'"data-value-count="' + count + '" data-value-depth="'+ depth +'">optionNameAdd'+ depth +'</button></div>';
    temp.innerHTML = text;
    $('#full').append(temp);
})

$(document).on('click', function(e){
    if($(e.target).text() === 'optionNameAdd1'){
        let count = 1;
        let dataCount = $(e.target).attr('data-value-count');
        console.log($(e.target).attr('data-value-depth'));
        let depth = $(e.target).attr('data-value-depth');
        depth ++;
        console.log($(e.target).parent().parent());
        let text = '<div class="offset-md-1 my-2">'
        + '<div>'
        + '<button class="btn btn-danger remove">X</button>'
        + '<label>Name'+ depth +'</label>'
        + '<input type="text" id="optionName" data-option-value="' + dataCount + '" data-option-depth="'+ depth +'">'
        + '<button class="btn btn-danger" id="optionValueAdd1" data-value-count="' + count + '" data-value-depth="'+ depth +'">optionValueAdd'+ depth +'</button>'
        + '<label class="offset-md-1">Name'+ depth +'-Value1-depth-'+ depth +'</label>'
        + '<input type="text" id="optionValue' + count + '" data-value-depth="'+ depth +'" data-value-count="' + count + '">'
        + '<button class="btn nameAdd btn-primary" id="optionNameAdd'+ count +'"data-value-count="' + count + '" data-value-depth="'+ depth +'">optionNameAdd'+ depth +'</button></div></div>';

        $(e.target).parent().parent().append(text);
    }
    if($(e.target).text() === 'optionNameAdd2'){
        let count = 1;
        let dataCount = $(e.target).attr('data-value-count');
        console.log($(e.target).attr('data-value-depth'));
        let depth = $(e.target).attr('data-value-depth');
        depth ++;
        console.log($(e.target).parent().parent());
        let text = '<div class="offset-md-2 my-2">'
        + '<button class="btn btn-danger remove">X</button>'
        + '<label>Name'+ depth +'</label>'
        + '<input type="text" id="optionName" data-option-value="' + dataCount + '" data-option-depth="'+ depth +'">'
        + '<button class="btn btn-danger" id="optionValueAdd1" data-value-count="' + count + '" data-value-depth="'+ depth +'">optionValueAdd'+ depth +'</button>'
        + '<label class="offset-md-1">Name'+ depth +'-Value1-depth-'+ depth +'</label>'
        + '<input type="text" id="optionValue' + count + '" data-value-depth="'+ depth +'" data-value-count="' + count + '"></div>';
        

        $(e.target).parent().after(text);
    }
    if($(e.target).text() === 'optionValueAdd2'){
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
        let text = '<div class="offset-md-6 my-2">'
                    + '<button class="btn btn-danger removeValue">X</button>'
                    + '<label>Name'+ depth +'-Value'+ count +'-depth-'+ depth +'</label>'
                    + '<input type="text" id="optionValue' + count + '" data-value-depth="'+ depth +'" data-value-count="' + count + '">'
                    + '<button class="btn nameAdd btn-primary" id="optionNameAdd'+ count +'"data-value-count="' + count + '" data-value-depth="'+ depth +'">optionNameAdd'+ depth +'</button></div>';
        temp.innerHTML = text;
        $(e.target).parent().parent().append(temp);
    }
    if($(e.target).text() === 'optionValueAdd3'){
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
        let text = '<div class="offset-md-8 my-2">'
                    + '<button class="btn btn-danger removeValue">X</button>'
                    + '<label>Name'+ depth +'-Value'+ count +'-depth-'+ depth +'</label>'
                    + '<input type="text" id="optionValue' + count + '" data-value-depth="'+ depth +'" data-value-count="' + count + '">'
                    + '</div>';
        temp.innerHTML = text;
        $(e.target).parent().append(temp);
    }
    
    if($(e.target).hasClass('remove') === true){
        $(e.target).parent().remove();
    }
    
    if($(e.target).hasClass('removeValue') === true){
        console.log($(e.target).parent().parent());
        $(e.target).parent().parent().remove();
        count--;
    }
})