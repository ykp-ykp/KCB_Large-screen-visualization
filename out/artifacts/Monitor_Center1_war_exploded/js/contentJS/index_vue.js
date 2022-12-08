
var tittleList = allChartsNameMap.map((item)=>{return item.name})

//创建组件构造器
const selector = Vue.extend({
    //子组件
    props:{
        currenttitle:String,
        chartnum:Number
    },
    template:`<h2>
                <p @contextmenu.prevent="changeisShow()" @dblclick.prevent="changeisShow()" @click="closeMenu()">{{currenttitle}}</p>
                <span class="caret" @click="changeisShow()"></span>
                <select :id="currenttitle" v-show="isShow" multiple="multiple">
                    <option v-for="(item,i) in tittleList" @click="changeTitle(item)">{{item}}</option>
                </select>
            </h2>`,
    data(){
        return {
            isShow:false,
            tittleList:tittleList,
            warmprompt:"页面已经存在该图表，不可重复"
        }
    },

    methods:{
        closeMenu(){
            this.isShow = false
        },
        changeisShow(){
            //鼠标右击触发事件
            this.isShow = !this.isShow
        },
        changeTitle(item) {
            if(item == this.currenttitle){
                //弹出提示框
                layer.tips(this.warmprompt, '#'+this.currenttitle,{tips: [2, '#78BA32']});
                //alert("页面已经存在该图表，不可重复")
                this.isShow = ! this.isShow
                return
            }else if(sevenCharts.indexOf(item)!=-1){
                //获取被交换图表的num号：0~6
                var chartnum2 = sevenCharts.indexOf(item);
            }
            //传进来的item是图表的中文标题名
            let previousTitle = this.currenttitle
            this.currenttitle = item
            this.isShow = ! this.isShow
            //子组件更换标题之后，通知父组件，父组件在调用相应的函数，根据className来更新图表
            this.$emit("exchangechart",previousTitle,item,this.chartnum,chartnum2)
        }
    }
})
//注册全局组件
//Vue.component('selector',selector)


//到时候从数据库中获取
//各个图表的标题名、类名，用于初始化class，然后调用函数画图
var sevenCharts,sevenChartsClassName
(function(){
    sevenCharts = localStorage.getItem('sevenCharts')
    if(sevenCharts == null)
        sevenCharts = ["行业人数","人员变化","年龄分布","地图","技能掌握","播放量","地区分布"]
    else{
        sevenCharts = sevenCharts.split(",")
    }
    sevenChartsClassName = getSevenChartsClassName()
})();


var mainBox = new Vue({
    //父组件
    el: ".mainbox",
    data:{
        sevenCharts:sevenCharts,
        //前端使用v-bind绑定class，页面加载时初始化他们的class，因为v-bind不具有双向绑定数据的作用
        //所以后面更改标题是要利用attr函数来更改class。所以下面的sevenChartsClassName仅仅在初始化的时候使用了一次
        sevenChartsClassName:sevenChartsClassName,
        previousTitleName:''
    },
    //注册局部组件
    components:{
        'selector':selector
    },
    methods:{
        //从后台获取数据（初始的七张图表），并把数据赋给sevenCharts，前端页面根据sevenCharts的值来展示指定的图表
        //用户保存数据的时候也是根据从上到下，从左到右来保存到sevenCharts中的
        exchangeChart(previousTitleName,tittleName,chartnum1,chartnum2) {
            //previousTitleName:更改前图表的标题。titleName：更改后图表的标题。chartnum：第几个图标(从0开始，一个页面7个图表)
            console.log("子组件原来的标题是："+previousTitleName+"num号："+chartnum1+"---需要被交换的标题是："+tittleName+"num号："+chartnum2)
            var previousclassName,className;
            this.previousTitleName = previousTitleName

            allChartsNameMap.forEach(item=>{
                //获取原来图表标签的class
                if(item.name == previousTitleName)
                {previousclassName = item.className;return}
            })
            allChartsNameMap.forEach(item=>{
                //获取需要重新渲染图表的class
                if(item.name == tittleName)
                {className = item.className;return}
            })
            if(chartnum2 == null){
                console.log("更换前---要更换的图标不在当前页面")
                //如果图表二不存在当前页面
                //修改父组件中sevenCharts和sevenChartsClassName的数据，以便保存到数据库中
                this.sevenCharts[chartnum1] = tittleName;sevenCharts[chartnum1] = tittleName;
                this.sevenChartsClassName[chartnum1] = className   //这行可以不要
                //下面根据className、chartnum1来更改dom节点的class，并调用相应函数，渲染图表
                this.changeClassDrawNewChart(previousclassName,className,chartnum1)
            }else{
                console.log("更换前---要更换的图标就在当前页面")
                this.sevenCharts[chartnum1] = tittleName;sevenCharts[chartnum1] = tittleName;
                this.sevenCharts[chartnum2] = previousTitleName;sevenCharts[chartnum2] = previousTitleName;

                this.sevenChartsClassName[chartnum1] = className   //这行可以不要
                this.sevenChartsClassName[chartnum2] = previousclassName   //这行可以不要
                //下面根据className、chartnum1来更改dom节点的class，并调用相应函数，渲染图表
                this.exchangeAlreadyExist(previousclassName,className,chartnum1,chartnum2)
            }
            saveLocalStorage(this.sevenCharts)
        },
        changeClassDrawNewChart(previousclassName,className,chartnum){
            //更改图表所在标签的class
            var domJ = $("div[num="+chartnum+"]")
            domJ.attr({"class":className+" chart"})
            //清除本来的echarts实例
            clearEI(previousclassName)
            //调用相应的函数绘制className的图表
            drawChartByclassName(className)
            console.log("当前页面显示的图表为："+this.sevenCharts)
            console.log("当前页面显示的图表对应的class Name为："+this.sevenChartsClassName)
        },
        exchangeAlreadyExist(className1,className2,chartnum1,chartnum2){
            var dom1 = $("div[num="+chartnum1+"]")
            dom1.attr({"class":className2+" chart"})
            var dom2 = $("div[num="+chartnum2+"]")
            dom2.attr({"class":className1+" chart"})
            clearEI(className1)
            clearEI(className2)
            drawChartByclassName(className1)
            drawChartByclassName(className2)
            //父组件的sevenCharts变化之后，其子组件不会跟着改变，所以需要用forceUpdate来更新一下
            this.$forceUpdate()
            console.log("当前页面显示的图表为："+this.sevenCharts)
            console.log("当前页面显示的图表对应的class Name为："+this.sevenChartsClassName)
        }
    },
    mounted:function(){
        //模板编译/挂载之后执行
        startDrawChart(this.sevenChartsClassName)
        console.log("初始化图表完成")
    }

})

// mainBox.$mount(".mainbox")   和上面那个el: ".mainbox"是一样的作用

function getSevenChartsClassName() {
    //初始化时根据七个图表的标题来获取它们分别对应的类名
    let sevenChartsClassName = []
    sevenCharts.forEach(item=>{
        allChartsNameMap.forEach(temp=>{
            if(temp.name == item)
                sevenChartsClassName.push(temp.className)
        })
    })
    return sevenChartsClassName
}


function saveLocalStorage(sevenCharts){
    //通过该方法获取缓存中的初始化图表（可永久保存）
    localStorage.setItem("sevenCharts",sevenCharts)
}