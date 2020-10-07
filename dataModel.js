class BarData{
    constructor(){
        this.init();
    };
    init(){
        let jsonGet = new JsonGet();
        this.bar = jsonGet.jsonData("bar").bar;
    }
    setData(){
        let allDiv = document.querySelector(".content_bar").children;
        for (let i = 0; i < allDiv.length-1; i++){
            allDiv[i].style.backgroundImage = `url(${this.bar[i]})`;
        }
    }
}
class SheetData{
    constructor(){
        this.init();
    };
    init(){
        let jsonGet = new JsonGet();
        this.sheet = jsonGet.jsonData("sheet").sheet;
    }
    setData(){
        let allDiv = document.querySelector(".find_reconmt+dd>ul").children;
        for(let i = 1; i < allDiv.length; i++){        
            let div = allDiv[i].children[0];
            let dp1 = div.children[0];
            let dp2 = div.children[1];
            let p = allDiv[i].children[1];
            div.style.backgroundImage = `url(${this.sheet[i].url})`;
            dp1.innerHTML = this.sheet[i].des;
            dp2.innerHTML = this.sheet[i].pyTimes;
            p.innerHTML = this.sheet[i].name;
        }
    }
}
class OnlyData{
    constructor(){
        this.init();
    };
    init(){
        let jsonGet = new JsonGet();
        this.only = jsonGet.jsonData("only").only;
    }
    setData(){
        let allDiv = document.querySelector(".exc_send+dd>ul").children;
        for (let i = 0; i < allDiv.length; i++){
            let div = allDiv[i].children[0];
            let p = allDiv[i].children[1];
            div.style.backgroundImage = `url(${this.only[i].url})`;
            p.innerHTML = this.only[i].name;
        }
    }
}
class SongData{
    constructor(){
        this.init();
    };
    init(){
        let jsonGet = new JsonGet();
        this.song = jsonGet.jsonData("song").song;
    }
    setData(){
        let allDiv = document.querySelector(".recent_music+dd").children;
        let allLi1 = allDiv[0].children[0].children;
        let allLi2 = allDiv[1].children[0].children;
        for (let i = 0; i < 5; i++){
            let pic = allLi1[i].children[1]
            let title = allLi1[i].children[2].children[0];
            let singer = allLi1[i].children[2].children[1];
            pic.style.backgroundImage = `url(${this.song[i].url})`;
            title.innerHTML = this.song[i].name;
            singer.innerHTML = this.song[i].singer;
        }
        for (let i = 0; i < 5; i++){
            let pic = allLi2[i].children[1]
            let title = allLi2[i].children[2].children[0];
            let singer = allLi2[i].children[2].children[1];
            pic.style.backgroundImage = `url(${this.song[i+5].url})`;
            title.innerHTML = this.song[i+5].name;
            singer.innerHTML = this.song[i+5].singer;
        }
    }
}
class MvData{
    constructor(){
        this.init();
    };
    init(){
        let jsonGet = new JsonGet();
        this.mv = jsonGet.jsonData("mv").mv;
    }
    setData(){
        let allDiv = document.querySelector(".reconmt_mv+dd>ul").children;
        for (let i = 0; i < allDiv.length; i++){
            let div = allDiv[i].children[0];
            let des = div.children[0];
            let pyTimes = div.children[1];
            let title = allDiv[i].children[1];
            let singer = allDiv[i].children[2];
            div.style.backgroundImage = `url(${this.mv[i].url})`;
            des.innerHTML = this.mv[i].des;
            pyTimes.innerHTML = this.mv[i].playTimes;
            title.innerHTML = this.mv[i].name;
            singer.innerHTML = this.mv[i].singer;
        }
    }
}
class RadioData{
    constructor(){
        this.init();
    };
    init(){
        let jsonGet = new JsonGet();
        this.receiver = jsonGet.jsonData("receiver").receiver;
    }
    setData(){
        let allDiv = document.querySelector(".anchor_radio+dd>ul").children;
        for (let i = 0; i < allDiv.length; i++){
            let div = allDiv[i].children[0];
            let des = allDiv[i].children[1];
            let title = div.children[0];
            div.style.backgroundImage = `url(${this.receiver[i].url})`;
            des.innerHTML = this.receiver[i].des;
            title.innerHTML = this.receiver[i].title;
        }
    }
}
class JsonGet{
    constructor(){};
    jsonData(str){
        let xhtml =new XMLHttpRequest();
        xhtml.open('GET', `http://127.0.0.1:5500/网易云音乐app/json/${str}.json`, false)
        xhtml.send();
        let data = JSON.parse(xhtml.responseText);
        return data;
    }
}
let songData = new SongData();
let barData = new BarData();
let sheetData = new SheetData();
let onlyData = new OnlyData();
let mvData = new MvData();
let radioData = new RadioData();
sheetData.setData();
barData.setData();
onlyData.setData();
songData.setData();
mvData.setData();
radioData.setData();
