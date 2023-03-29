{/* <script type="text/javascript" lang="javascript">
    <c:forEach items="${dto.optionDTOs}" var="ProductOptionDTO">
        <c:if test="${ProductOptionDTO.depth == 0}">  			
            console.log(${ProductOptionDTO.optionNum})
        </c:if>
    </c:forEach>
</script> */}

$("#selectForm1").on("change", function(){
    let opNum = $(this).val();
    let proNum = $("#option").attr("data-productnum");
    let a = $(this);
    console.log(opNum);
    console.log(proNum);
    $.ajax({
        url : "./optionList",
        type : "POST",
        data:{
            productNum : proNum,
            ref : opNum,
            depth : 1
        },
        success : function(data) {
            console.log("성공");
            a.next().remove();
            a.parent().append(data);
        }
    })
    
});

$("#depth0").on("change", "#depth1",function(){
    let opNum = $(this).val();
    let proNum = $("#option").attr("data-productnum");
    let a = $(this);
    console.log(opNum);
    console.log(proNum);
    $.ajax({
        url : "./optionList",
        type : "POST",
        data:{
            productNum : proNum,
            ref : opNum,
            depth : 2
        },
        success : function(data) {
            console.log("성공");
            a.next().remove();
            a.parent().append(data);
        }
    })
    
});