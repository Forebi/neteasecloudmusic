class FindContentBar{
    constructor(obj){
        this.obj = obj;
        this.index = 0;
        this.barInterval(this.index);
        this.tabMove();
    };
    barInterval(){
        let i = this.index;
        let classc = new classChange();
        let that = this;
        this.bartime = setInterval(function(){
            ++i;
            i = that.move(i);
        },5000)
    };
    stopBar(){
        clearInterval(this.bartime);
    };
    moveOver(dom){
        let that = this;
        dom.addEventListener("mouseover", function(){
            that.stopBar();
        });
        dom.addEventListener("mouseout", function(){
            that.barInterval(that.index);
        });
    };
    move(index){
        let classc = new classChange();
        let i =index;
        let allImg = this.obj;
        this.removeTabClass();
        if (i < 0) i = allImg.length-2;
        else if (i > allImg.length - 2) i = 0;
        let pos = [
            [allImg.length-2, 0, 1],
            [allImg.length-3, allImg.length-2, 0]
        ]
        if (i - 1 < 0){
            let [vall, valc, valr] = pos[0];
            classc.addClass(allImg[vall], "left");
            classc.addClass(allImg[valc], "headshow");
            classc.addClass(allImg[valr], "right");
        }else if(i + 1 > allImg.length-2){
            let [vall, valc, valr] = pos[1];
            classc.addClass(allImg[vall], "left");
            classc.addClass(allImg[valc], "headshow");
            classc.addClass(allImg[valr], "right");
        }else{
            classc.addClass(allImg[i-1], "left");
            classc.addClass(allImg[i], "headshow");
            classc.addClass(allImg[i+1], "right");
        }
        this.index = i;
        this.barTab(i);
        return i;
    };
    toRIght(){
        this.move(--this.index);
    };
    toLeft(){
        this.move(++this.index);
    };
    toTheInex(index){
        this.index = index;
        this.move(this.index);
    };
    barTab(index){
        let classc = new classChange();
        let tab = this.obj[this.obj.length-1].children;
        let current_tab = tab[index];
        for (let i = 0; i < tab.length; i++){
            classc.remove(tab[i], "current_index");
        }
        classc.addClass(current_tab, "current_index");
    }
    tabMove(){
        let tab = this.obj[this.obj.length-1].children;
        let that = this;
        for (let i = 0; i < tab.length; i++){
            (function(j){
                tab[j].addEventListener("mouseover", function(){
                    that.toTheInex(j);
                })
            })(i)
        }
    }
    removeTabClass(){
        let classc = new classChange();
        for (let obj of this.obj){
            classc.remove(obj, "headshow", "left", "right");
        }
    }
}
class RecentSong{
    constructor(){
        this.clickLi();
    };
    clickLi(){
        let classc = new classChange();
        let allDiv = document.querySelector(".recent_music+dd").children;
        let allLi1 = allDiv[0].children[0].children;
        let allLi2 = allDiv[1].children[0].children;
        for (let obj of allLi1){
            (function(objj){
                objj.addEventListener("click",function(){ 
                    for (let cur of allLi1){
                        classc.remove(cur, "current");
                    }
                    for (let cur of allLi2){
                        classc.remove(cur, "current");
                    }
                    classc.addClass(objj,"current");
                })
            })(obj)       
        }
        for (let obj of allLi2){
            (function(objj){
                objj.addEventListener("click",function(){ 
                    for (let cur of allLi1){
                        classc.remove(cur, "current");
                    }
                    for (let cur of allLi2){
                        classc.remove(cur, "current");
                    }
                    classc.addClass(objj,"current");
                })
            })(obj)       
        }
    }
}
class classChange{
    constructor(){
    };
    addClass(node, str){
        node.classList.add(str);
    };
    remove(node, ...str){
        node.classList.remove(...str);
    }
}
let stopDiv = document.querySelector(".content_bar")
let allImg = stopDiv.children;
let bar = new FindContentBar(allImg);
let reccentSong = new RecentSong();
bar.moveOver(stopDiv)

