function ClickConnect(){
    console.log("Working...");
    //選擇按鈕
    var connectbutton = document.querySelector(
            "colab-toolbar-button" +
            "#connect-icon.big-icon.icon-okay"
    );
    //點兩下
    connectbutton.click();
    connectbutton.click();
};

//設定每10分鐘點一下
const stopit = setInterval(
    ClickConnect,10*60*1000
);
const stopping = stopper => clearInterval(stopper);
