function press(){
    var locate = window.location.href
    // console.log(locate)
    // window.location.href = "https://www.google.com/"
    // window.location.replace('https://www.google.com/')
    // window.location.reload()    //cache reloading
    // window.location.reload(true)    //server reloading

    // var content = "<h1>Successfully change page</h1>"
    // window.open('https://www.google.com/','win1','width=200,height=100,left=100,top=100')

    var win = window.open('https://www.google.com/','win1','width=200,height=100,left=100,top=100')
    if (win == null){
        alert("Band karo")
        // win.open()
        win.close()
    }

}