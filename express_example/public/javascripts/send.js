function send(){
    console.log('button clicked');
    var x = document.getElementById("myTextarea").value;
    $.ajax({url: 'test1?msg='+encodeURIComponent(x), success:function(res){
        console.log('server response is', res);
    }});
}