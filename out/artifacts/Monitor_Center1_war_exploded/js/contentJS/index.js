
//index_vue中的Vue对象初始化完成并且dom节的的属性全部挂在之后，调用该函数，进行图表的渲染工作
function startDrawChart(sevenChartsClassName){
    let length = sevenChartsClassName.length;
    while(length--){
        console.log(sevenChartsClassName[length])
        if(sevenChartsClassName[length] == "industryPopulation")
            industryPopulation()
        if(sevenChartsClassName[length] == "skillMastery")
            skillMastery()
        if(sevenChartsClassName[length] == "personChange")
            personChange()
        if(sevenChartsClassName[length] == "playbackVolume")
            playbackVolume()
        if(sevenChartsClassName[length] == "ageDistribution")
            ageDistribution()
        if(sevenChartsClassName[length] == "regionalDistribution")
            regionalDistribution()
        if(sevenChartsClassName[length] == "mapchart")
            mapchart()
        if(sevenChartsClassName[length] == "yearSalesChange")
            yearSalesChange()
        if(sevenChartsClassName[length] == "performanceRank")
            performanceRank()
    }
}


//所有的图表实例
var industryPopulationEI,skillMasteryEI,personChangeEI,playbackVolumeEI,ageDistributionEI,
    regionalDistributionEI,mapchartEI,yearSalesChangeEI,performanceRankEI

//清楚原本标签上的echarts实例
function clearEI(className) {
    console.log("即将要清除的echarts实例为："+className)
    switch(className) {
        case 'industryPopulation':
            industryPopulationEI.clear()
            break;
        case 'skillMastery':
            skillMasteryEI.clear()
            break;
        case 'personChange':
            personChangeEI.clear()
            break;
        case 'playbackVolume':
            playbackVolumeEI.clear()
            break;
        case 'ageDistribution':
            ageDistributionEI.clear()
            break;
        case 'regionalDistribution':
            regionalDistributionEI.clear()
            break;
        case 'mapchart':
            mapchartEI.clear()
            break;
        case 'yearSalesChange':
            yearSalesChangeEI.clear()
            break;
        case 'performanceRank':
            performanceRankEI.clear()
            break;
        default:
            console.log("绘制图表出现错误")
    }
}

function drawChartByclassName(className) {
    console.log("重新绘制的echarts为："+className)
//该函数根据className来调用相应的函数在标签的class为className上绘制图表，在index_vue.js中调用此函数
    switch(className) {
        case 'industryPopulation':
            industryPopulation()
            break;
        case 'skillMastery':
            skillMastery()
            break;
        case 'personChange':
            personChange()
            break;
        case 'playbackVolume':
            playbackVolume()
            break;
        case 'ageDistribution':
            ageDistribution()
            break;
        case 'regionalDistribution':
            regionalDistribution()
            break;
        case 'mapchart':
            mapchart()
            break;
        case 'yearSalesChange':
            yearSalesChange()
            break;
        case 'performanceRank':
            performanceRank()
            break;
        default:
            console.log("绘制图表出现错误")
    }
}


//左侧第一个柱状图：就业行业
function industryPopulation() {
    var data = {
        category:["旅游行业","教育培训","游戏行业","医疗行业","电商行业","社交行业"],
        value:[200, 300, 300, 900, 1500, 1200]
    }
    let industryPopulation = (document.querySelector(".industryPopulation"))
    if(industryPopulation == null)return
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox:{
            feature: {
                magicType: {
                    type: ['line', 'bar']
                },
            },
            iconStyle: {
                color: "rgba(2,166,181, .8)"
            },
            top:"0%",
            right:"0%"
        },
        grid: {
            left: '10%',
            right: '4%',
            bottom: '10%',
            top: "15%",
            //containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: data.category,
                //刻度线
                axisTick: {
                    show: true,
                    alignWithLabel: true  //刻度线和标签对其
                },
                // 刻度标签
                axisLabel: {
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "8"
                },
                //轴线
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "9"
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],

        series: [
            {
                name: '直接访问',
                type: 'bar',
                data: data.value,
                barWidth: "35%",
                itemStyle: {
                    barBorderRadius: 5
                },
                markLine:{
                    data:[
                        {
                            name: '平均线',
                            // 支持 'average', 'min', 'max'
                            type: 'average'
                        }
                    ],
                    label:{
                        show:true,
                        position:"middle"
                    }
                }
            }
        ]
    };

    //循环为所有的class为IndustryPopulation的类进行渲染图表
    industryPopulationEI = echarts.init(industryPopulation)
    industryPopulationEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        industryPopulationEI.resize()
    })

}


//右侧第一个柱状图：技能掌握
function skillMastery(){
    let skillMastery = (document.querySelector(".skillMastery"))
    if(skillMastery == null)return
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]
    var option = {

        grid: {
            left: '20%',
            right: '10%',
            bottom: '3%',
            top: "0%"
            //containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                inverse: true,

                axisLabel: {
                    fontSize: "9",
                    color: "#fff"
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },

            {
                data: [702, 350, 610, 793, 664],
                inverse: true,
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    fontSize: "9",
                    color: "#fff"
                }
            }
        ],

        series: [
            {
                name: '柱',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex % myColor.length]
                    }
                },
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: "inside",
                    // {c} 会自动的解析为 数据  data里面的数据
                    formatter: "{c}%"
                }

            },
            {
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderWidth: 2,
                    barBorderRadius: 15,
                    borderColor: "#1089E7"
                }
            }
        ]
    };


    //循环为所有的class为IndustryPopulation的类进行渲染图表
    skillMasteryEI = echarts.init(skillMastery)
    skillMasteryEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        skillMasteryEI.resize()
    })

}


//左侧第二图：折线图-人员变化
function personChange(){
    let personChange = document.querySelector(".personChange")
    if(personChange == null)return
    var index = 0;
    var yearData = [
        {
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];


    var option = {
        //这里面的color是对应每一个series的
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: "#fff",
                fontSize: "10",

            },
            right: "10%"
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '10%',
            top: "15%",
            //containLabel: true
        },

        xAxis: {
            type: 'category',
            // 坐标轴两边留白策略
            boundaryGap: false,
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: "8"
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: "9"
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        },
        series: [
            {
                name: '新增游客',
                type: 'line',
                //折线图圆滑显示
                smooth: true,
                data: yearData[0].data[0]
            },
            {
                name: '新增粉丝',
                type: 'line',
                smooth: true,
                data: yearData[0].data[1]
            }
        ]
    };


    //循环为所有的class为IndustryPopulation的类进行渲染图表
    personChangeEI = echarts.init(personChange)
    personChangeEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        personChangeEI.resize()
    })

}


//右侧第二图：折线图-播放量
function playbackVolume() {

    let playbackVolume = document.querySelector(".playbackVolume")
    if(playbackVolume == null)return
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告'],
            textStyle: {
                color: "#fff",
                fontSize: "10",
            }
        },
        grid: {
            left: '10%',
            right: '4%',
            bottom: '8%',
            top: '15%'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"
                ],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "9"
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    },
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: "9",
                    color: "#fff"
                }
            }
        ],
        series: [
            {
                name: "邮件营销",
                type: "line",
                smooth: true,
                // 单独修改当前线条的样式
                lineStyle: {
                    color: "#0184d5",
                    width: "2"
                },
                // 填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    //拐点处的阴影宽度
                    borderWidth: 12
                },
                data: [
                    30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,20,60,50,40
                ]
            },
            {
                name: "联盟广告",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0,0,0,1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [
                    130,10,20,40,30,40,80,60,20,40,90,40,20,140,30,40,130,20,20,40,80,70,30,40,30,120,20,99,50,20
                ]
            }
        ]
    };


    //循环为所有的class为IndustryPopulation的类进行渲染图表
    playbackVolumeEI = echarts.init(playbackVolume)
    playbackVolumeEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        playbackVolumeEI.resize()
    })

}

//左侧第三个图：饼状图-年龄分布
function ageDistribution() {
    let ageDistribution = document.querySelector(".ageDistribution")
    if(ageDistribution == null)return
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            bottom: "0%",
            //小图标的高度和宽度
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "10"
            },
        },
        grid: {
            left: '10%',
            right: '4%',
            bottom: '3%',
            top: '15%'
        },
        series: [
            {
                name: "年龄分布",
                type: 'pie',
                //分别是内圆和外圆的半径
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: 'none',
                },
                //图表的每一项的名字
                label: {
                    show: true,
                    //position: 'center'
                },

                //连接文字和图
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };


    //循环为所有的class为IndustryPopulation的类进行渲染图表
    ageDistributionEI = echarts.init(ageDistribution)
    ageDistributionEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        ageDistributionEI.resize()
    })

}

//右侧第三个图：饼状图-地区分布
function regionalDistribution() {
    let regionalDistribution = document.querySelector(".regionalDistribution")
    if(regionalDistribution == null)return
    var option = {
        legend: {
            bottom: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "#fff",
                fontSize: "10",
            }
        },
        grid: {
            left: '10%',
            right: '4%',
            bottom: '3%',
            top: '15%'
        },
        tooltip: {
            trigger: "item",
            formatter: "{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ["20%", "70%"],
                //center调整饼形图的大小
                center: ['50%', '45%'],
                roseType: 'radius',
                label: {
                    show: true,
                    fontSize: 10
                },
                labelLine: {
                    show: true,
                    length: 4,
                    length2: 8
                },
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "四川" },
                    { value: 42, name: "湖北" }
                ]
            }
        ]
    };

    //循环为所有的class为IndustryPopulation的类进行渲染图表
    regionalDistributionEI  = echarts.init(regionalDistribution)
    regionalDistributionEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        regionalDistributionEI.resize()
    })

}


function yearSalesChange() {

    let yearSalesChange = document.querySelector(".yearSalesChange")
    if(yearSalesChange == null)return
    // var myChart = echarts.init(document.querySelector(".line1 .chart"))
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告'],
            textStyle: {
                color: "#fff",
                fontSize: "10",
            }
        },
        grid: {
            left: '10%',
            right: '4%',
            bottom: '3%',
            top: '15%'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"
                ],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "9"
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    },
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: "9",
                    color: "#fff"
                }
            }
        ],
        series: [
            {
                name: "邮件营销",
                type: "line",
                smooth: true,
                // 单独修改当前线条的样式
                lineStyle: {
                    color: "#0184d5",
                    width: "2"
                },
                // 填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    //拐点处的阴影宽度
                    borderWidth: 12
                },
                data: [
                    30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,20,60,50,40
                ]
            },
            {
                name: "联盟广告",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0,0,0,1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [
                    130,10,20,40,30,40,80,60,20,40,90,40,20,140,30,40,130,20,20,40,80,70,30,40,30,120,20,99,50,20
                ]
            }
        ]
    };



    yearSalesChangeEI = echarts.init(yearSalesChange)
    yearSalesChangeEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        yearSalesChangeEI.resize()
    })

}


function performanceRank() {
    var data = {
        category:["旅游行业","教育培训","游戏行业","医疗行业","电商行业","社交行业"],
        value:[420, 350, 300, 720, 280, 380]
    }
    let performanceRank = (document.querySelector(".performanceRank"))
    if(performanceRank == null)return
    var option = {
        color: "rgb(255,198,79)",
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        toolbox:{
            feature: {
                magicType: {
                    type: ['line', 'bar']
                },
            },
            iconStyle: {
                color: "rgba(2,166,181, .8)"
            },
            top:"0%",
            right:"0%"
        },
        grid: {
            left: '0%',
            right: '2%',
            bottom: '2%',
            top: '15%',
            containLabel: true  //grid 区域是否包含坐标轴的刻度标签
        },
        xAxis: [
            {
                type: "category",
                data: data.category,
                //刻度线
                axisTick: {
                    show: true,
                    alignWithLabel: true  //刻度线和标签对其
                },
                // 刻度标签
                axisLabel: {
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "8"
                },
                //轴线
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "9"
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],

        series: [
            {
                name: '直接访问',
                type: 'bar',
                data: data.value,
                barWidth: "35%",
                itemStyle: {
                    barBorderRadius: 5
                },
                markLine:{
                    data:[
                        {
                            name: '平均线',
                            // 支持 'average', 'min', 'max'
                            type: 'average'
                        }
                    ],
                    label:{
                        show:true,
                        position:"middle"
                    }
                }
            }
        ]
    };

    performanceRankEI = echarts.init(performanceRank)
    performanceRankEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        performanceRankEI.resize()
    })
}

//地图
function mapchart() {
    let mapchart = document.querySelector(".mapchart")
    if(mapchart == null)return
    var datalist = [
        { name: "海南诸岛", value: 0 },
        {name: '北京',value: 54},
        {name: '天津',value: 13},
        {name: '上海',value: 40},
        {name: '重庆',value: 75},
        {name: '河北',value: 13},
        {name: '河南',value: 83},
        {name: '云南',value: 11},
        {name: '辽宁',value: 19},
        {name: '黑龙江',value: 15},
        {name: '湖南',value: 69},
        {name: '安徽',value: 60},
        {name: '山东',value: 39},
        {name: '新疆',value: 4},
        {name: '江苏',value: 31},
        {name: '浙江',value: 104},
        {name: '江西',value: 36},
        {name: '湖北',value: 1052},
        {name: '广西',value: 33},
        {name: '甘肃',value: 7},
        {name: '山西',value: 9},
        {name: '内蒙古',value: 7},
        {name: '陕西',value: 22},
        {name: '吉林',value: 4},
        {name: '福建',value: 18},
        {name: '贵州',value: 5},
        {name: '广东',value: 98},
        {name: '青海',value: 1},
        {name: '西藏',value: 0},
        {name: '四川',value: 44},
        {name: '宁夏',value: 4},
        {name: '海南',value: 22},
        {name: '台湾',value: 3},
        {name: '香港',value: 5},
        {name: '澳门',value: 5}
    ]
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br> {b}:{c}"
        },
        visualMap: {
            min: 0,
            max: 500,
            left: 26,
            bottom: 40,
            showLabel: !0,
            textStyle:{
                color:"#fff"
            },
            text: ["高", "低"],
            outOfRange: {
                color: [
                    "rgba(2,201,251,1)",
                ]
            },
            pieces: [{
                gt: 100,
                label: "> 100 人",
                color: "#7f1100"
            }, {
                gte: 10,
                lte: 100,
                label: "10 - 100 人",
                color: "#ff5428"
            }, {
                gte: 1,
                lt: 10,
                label: "1 - 9 人",
                color: "#ff8c71"
            }, {
                gt: 0,
                lt: 1,
                label: "疑似",
                color: "#ffd768"
            }, {
                value: 0,
                color: "#ffffff"
            }],
        },
        geo: {
            map: "china",
            roam: true,
            scaleLimit: {
                min: 1,
                max: 2
            },
            zoom: 1.23,
            top: 120,
            label: {
                //地图上面的各个省份的名字
                show:true,
                fontSize: "12",
                color: "rgba(0,0,0,0.5)"
            },
            itemStyle: {
                normal:{
                    //静态的时候显示的默认样式
                    borderColor: "rgba(0, 0, 0, 0.2)"
                },
                emphasis: {
                    //鼠标移入动态的时候显示的默认样式
                    areaColor:"rgba(255,200,39 , 1)",
                    //borderWidth:2,
                    shadowOffsetX:4,
                    shadowOffsetY:3
                }
            },

        },
        series: [{
            name: "确诊病例",
            type: "map",
            geoIndex: 0,
            data: datalist,
            label:{
                show:true,
                formatter:'{b}:{c}'
            }
        }]
    };

    mapchartEI = echarts.init(mapchart)
    mapchartEI.setOption(option)
    //让图表跟着屏幕自适应变化大小
    window.addEventListener("resize", function () {
        mapchartEI.resize()
    })
}


//时间不断更新
(function(){
    var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
        clearTimeout(t); //清除定时器
        dt = new Date();
        var y = dt.getFullYear();
        var mt = dt.getMonth() + 1;
        var day = dt.getDate();
        var h = dt.getHours(); //获取时
        var m = dt.getMinutes(); //获取分
        var s = dt.getSeconds(); //获取秒
        $(".showTime")[0].innerHTML =
            "当前时间：" +y +"年" +mt +"月" +day +"-" +h +"时" +m +"分" +s +"秒";
        t = setTimeout(time, 1000); //设定定时器，循环运行
    }
})();