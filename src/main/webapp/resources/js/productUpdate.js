let idx=0
let param = 'pics'
let count=0
let max=5

$("#addBtn2").click(() => {
    if(count >=max) {
        alert("파일은 최대" + max + "개 까지만 가능합니다")
        return
    }

    count++;

    let child = '<div class="input-group" id="f1'+idx+'">'
    child = child + '<input type="file" class="form-control" id="file" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="'+param+'">'
    child = child + '<button class="btn btn-outline-secondary del" type="button" data-del2-id="f'+idx+'">X</button>'

    idx++

    $('#fileUpdate').append(child)
})

$('#fileUpdate').on('click', '.del', function(e) {
    $(this).parent().remove()
    count--
})

$('#submit2').click(() => {
    if(confirm("상품을 등록하시겠습니까?") == true) {
      
    }else {
        return false
    }
})
