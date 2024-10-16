
//轮播图切换
let img=document.querySelector('.img');
let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let slide=document.querySelector('.slide');
let imgArr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']

let count=0;

//切换图片路径
function cutImg(){
    img.src='../images/'+imgArr[count];
    //通过更改li的class名改变点状态
    for(let i=0;i<=lis.length-1;i++)
       {lis[i].className=''}
    lis[count].className='active';
}

//定时器翻页
let timer=setInterval(function(){
count++;
if(count>imgArr.length-1){count=0;}
cutImg();
},3000);

//点击下一张
next.onclick=function(){
    count++;
    if(count>imgArr.length-1){count=0;}
    cutImg();
}
//点击上一张
prev.onclick=function(){
    count--;
    if(count<0){count=imgArr.length-1;}
    cutImg();
}

//鼠标滑入div，不定时切换
slide.onmouseover=function(){
    clearInterval(timer);
}

//鼠标滑出div，定时切换
slide.onmouseout=function(){
    timer=setInterval(function(){
        count++;
        if(count>imgArr.length-1){count=0;}
        cutImg();
        },3000);
}
//li绑定事件
let lis=document.querySelectorAll('.banner-btn li')
for(let i=0;i<lis.length;i++)
{lis[i].onclick=()=>{
    count=i;
    cutImg();
}
}




//基础计算器
function appendToResult(value) {
    const displayInput = document.getElementById('display');
    displayInput.value += value; // 添加到输入框中
}//小数点
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = '错误';
    }
}
//基础计算器结束




//页面跳转函数
function showDiv(divId) {
    // 隐藏所有内容
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    // 显示选择的内容
    const activeContent = document.getElementById(divId);
    activeContent.classList.add('active');
}
//页面跳转结束




//BMI计算器
function appendToBmiResult(value) {
    const bmidisplayInput = document.getElementById('bmidisplay');
    // 如果输入的是小数点，确保输入中只包含一个小数点
    if (value === '.' && bmidisplayInput.value.includes('.')) {
        return; // 如果已经包含小数点，则不再添加
    }
    bmidisplayInput.value += value; // 添加到输入框中
}
function appendToBmidisplay(value) {
    const bmidisplay = document.getElementById('bmidisplay');
    bmidisplay.value += value;
}
function clearBmidisplay() {
    document.getElementById('bmidisplay').value = '';
}
function deleteBmiLast() {
    const bmidisplay = document.getElementById('bmidisplay');
    bmidisplay.value = bmidisplay.value.slice(0, -1);
}
function calculateBmiResult() {
    const bmidisplay = document.getElementById('bmidisplay');
    try {
        bmidisplay.value = eval(bmidisplay.value);
    } catch (error) {
        bmidisplay.value = '错误';
    }
}

var bmiWeightRecord=0;
function splitInput() {
    const bmidisplay = document.getElementById('bmidisplay');
    bmiWeightRecord=Number(bmidisplay.value);
    document.getElementById('bmidisplay').value = '';
}

function BmiCalculate() {
    var bmidisplay = document.getElementById('bmidisplay');
    var bmiHeightRecord=Number(bmidisplay.value);
    var bmiConsequanceRecord=bmiWeightRecord/bmiHeightRecord/bmiHeightRecord;
    bmidisplay.value =bmiConsequanceRecord.toFixed(2);
    
    }
function showbmiAlert() {
        const bmidisplay = document.getElementById('bmidisplay');
        var bmicompetent=Number(bmidisplay.value);
        setTimeout(function() {
            if (bmicompetent<18.5){alert("您的测试结果为:过轻");} 
            else if(bmicompetent<24){alert("您的测试结果为:正常") ;}
            else if (bmicompetent<28){alert("您的测试结果为:超重") ;}
            else{alert("您的测试结果为:肥胖")} ;
        }, 1000); // 延时 1000 毫秒（1 秒）
    }
function BmiLast(){
     BmiCalculate();
     showbmiAlert();
}
//BMI计算器结束




//卡路里平均消耗计算器
function appendTokaluliconsumeResult(value) {
    const kaluliconsumedisplayInput = document.getElementById('kaluliconsumedisplay');
    // 如果输入的是小数点，确保输入中只包含一个小数点
    if (value === '.' && kaluliconsumedisplayInput.value.includes('.')) {
        return; // 如果已经包含小数点，则不再添加
    }
    kaluliconsumedisplayInput.value += value; // 添加到输入框中
}
function appendTokaluliconsumedisplay(value) {//数字
    const kaluliconsumedisplay = document.getElementById('kaluliconsumedisplay');
    kaluliconsumedisplay.value += value;
}
function clearkaluliconsumedisplay() {//清空
    document.getElementById('kaluliconsumedisplay').value = '';
}
function deletekaluliconsumeLast() {//删除
    const kaluliconsumedisplay = document.getElementById('kaluliconsumedisplay');
    kaluliconsumedisplay.value = kaluliconsumedisplay.value.slice(0, -1);
}




function kaluliconsumeCalculate(){ 
   const kaluliconsumedisplay=document.getElementById('kaluli-dailyconsume')
    
var kaluligender=document.getElementsByName('kaluli-gender')
var kaluliheight=document.getElementsByName('kaluli-height')
var kaluliweight=document.getElementsByName('kaluli-weight')
var kaluliage=document.getElementsByName('kaluli-age')
var kaluliheightnum=Number(kaluliheight[0].value)
var kaluliweightnum=Number(kaluliweight[0].value)
var kaluliagenum=Number(kaluliage[0].value)
var aaachoose1=document.getElementById('kaluli-sportscondition1')
var aaachoose2=document.getElementById('kaluli-sportscondition2')
var aaachoose3=document.getElementById('kaluli-sportscondition3')
var aaachoose4=document.getElementById('kaluli-sportscondition4')



   var kaluliconsumedcoefficient=0;
     if(aaachoose1.checked==1){kaluliconsumedcoefficient=1.1}
     else if(aaachoose2.checked==1){kaluliconsumedcoefficient=1.3}
     else if(aaachoose3.checked==1){kaluliconsumedcoefficient=1.5}
     else{kaluliconsumedcoefficient=1.7}

    if(kaluligender[0].checked==1)
    {kaluliconsumedisplay.value=((10*kaluliweightnum+6.25*kaluliheightnum-5*kaluliagenum+5)*kaluliconsumedcoefficient).toFixed(2)}
    else 
    {kaluliconsumedisplay.value=((10*kaluliweightnum+6.25*kaluliheightnum-5*kaluliagenum-161)*kaluliconsumedcoefficient).toFixed(2)}
    
}
//卡路里平均消耗计算器结束

//遗传计算器
var typelist=document.getElementsByName("di_type");
var father_=document.getElementsByName("father_");
var mother_=document.getElementsByName("mother_");
var gender_=document.getElementsByName("gender");
var yichuan=document.getElementsByName("dis_result");


function di_sendresult(){
var ty,fa,mo,ge;
for(var i=0;i<typelist.length;i++){

    if(typelist[i].checked==true) ty=typelist[i];
}
for(var i=0;i<father_.length;i++){
if(father_[i].checked==true) fa=father_[i];
}
for(var i=0;i<mother_.length;i++){
if(mother_[i].checked==true) mo=mother_[i];
}
for(var i=0;i<gender_.length;i++){
if(gender_[i].checked==true) ge=gender_[i];
}
var list=ty.value+fa.value+mo.value+ge.value;
//x隐性遗传 
if(list=="0110"){yichuan[0].setAttribute("value","100%");}
else if(list=="0111"){yichuan[0].setAttribute("value","100%");}
else if(list=="0100"){yichuan[0].setAttribute("value","25%");}
else if(list=="0101"){yichuan[0].setAttribute("value","25%");}
else if(list=="0010"){yichuan[0].setAttribute("value","0%");}
else if(list=="0011"){yichuan[0].setAttribute("value","100%");}
else if(list=="0000"){yichuan[0].setAttribute("value","0%");}
else if(list=="0001"){yichuan[0].setAttribute("value","25%");}
//x显性遗传
else if(list=="1110"){yichuan[0].setAttribute("value","100%");}
else if(list=="1111"){yichuan[0].setAttribute("value","75%");}
else if(list=="1100"){yichuan[0].setAttribute("value","100%");}
else if(list=="1101"){yichuan[0].setAttribute("value","0%");}
else if(list=="1010"){yichuan[0].setAttribute("value","75%");}
else if(list=="1011"){yichuan[0].setAttribute("value","75%");}
else if(list=="1000"){yichuan[0].setAttribute("value","0%");}
else if(list=="1001"){yichuan[0].setAttribute("value","0%");}
//y遗传
else if(list=="2110"){yichuan[0].setAttribute("value","0%");}
else if(list=="2111"){yichuan[0].setAttribute("value","100%");}
else if(list=="2100"){yichuan[0].setAttribute("value","0%");}
else if(list=="2101"){yichuan[0].setAttribute("value","100%");}
else if(list=="2010"){yichuan[0].setAttribute("value","0%");}
else if(list=="2011"){yichuan[0].setAttribute("value","0%");}
else if(list=="2000"){yichuan[0].setAttribute("value","0%");}
else if(list=="2001"){yichuan[0].setAttribute("value","0%");}
//常染色体隐性
else if(list=="3110"){yichuan[0].setAttribute("value","100%");}
else if(list=="3111"){yichuan[0].setAttribute("value","100%");}
else if(list=="3100"){yichuan[0].setAttribute("value","25%");}
else if(list=="3101"){yichuan[0].setAttribute("value","25%");}
else if(list=="3010"){yichuan[0].setAttribute("value","25%");}
else if(list=="3011"){yichuan[0].setAttribute("value","25%");}
else if(list=="3000"){yichuan[0].setAttribute("value","6.25%");}
else if(list=="3001"){yichuan[0].setAttribute("value","6.25%");}
//常染色体显性
else if(list=="4110"){yichuan[0].setAttribute("value","93.75%");}
else if(list=="4111"){yichuan[0].setAttribute("value","93.75%");}
else if(list=="4100"){yichuan[0].setAttribute("value","25%");}
else if(list=="4101"){yichuan[0].setAttribute("value","25%");}
else if(list=="4010"){yichuan[0].setAttribute("value","25%");}
else if(list=="4011"){yichuan[0].setAttribute("value","25%");}
else if(list=="4000"){yichuan[0].setAttribute("value","0%");}
else if(list=="4001"){yichuan[0].setAttribute("value","0%");}
}
//遗传计算器结束


//运动消耗计算器开始

//运动内页面跳转函数
function showsportsDiv(divId) {
    // 隐藏所有内容
    const sportsintroductions = document.querySelectorAll('.sports-introduction');
    sportsintroductions.forEach(sportsintroduction => {
        sportsintroduction.classList.remove('sportsactive');
    });
    // 显示选择的内容
    const activesportsintroduction = document.getElementById(divId);
    activesportsintroduction.classList.add('sportsactive');
}
//运动内页面跳转结束

function appendTosportsDisplay(value) {
    const display = document.getElementById('sports-display');
    
     // 检查当前值是否已经包含“分钟”
     if (!display.value.endsWith('分钟')) {
        // 如果没有，添加数字和“分钟”
        display.value =display.value+value+'分钟';
    } 
    else if (display.value.endsWith('卡')) {
        display.value ='';
    } 
    else {
        // 如果有，直接添加数字
        display.value =  display.value.slice(0, -2) + value + '分钟';
    }
}

function clearsportsDisplay() {
    document.getElementById('sports-display').value = '';
}
function deletesportsLast() {
    const display = document.getElementById('sports-display');
    display.value = display.value.slice(0, -3);
    display.value+='分钟';
}
function appendTosportsResult(value) {
    const displayInput = document.getElementById('sports-display');
    displayInput.value =displayInput.value.slice(0, -2)+value+'分钟'; }// 添加小数点到输入框中

function calculatesportsResult() {
    const display = document.getElementById('sports-display');
    const numstring=display.value.slice(0, -2);
    var num=Number(numstring);
    display.value = '';
    const getintroduction=document.getElementsByClassName('sports-introduction');
    const sportsid=document.getElementsByClassName('sportsactive');
    for(var i=0;i<getintroduction.length;i++){
        if(getintroduction[i].id==sportsid[0].id){
            var value=getintroduction[i].getAttribute("value");
            num=num*Number(value);
        }   
    display.value=String(num)+'卡';}
} 
//运动消耗计算器结束



//卡路里——能量换算器
function appendToenergyDisplay(value) {
    const display = document.getElementById('kalulienergychangedisplay');   
     // 检查当前值是否已经包含“卡”
     if (!display.value.endsWith('千卡')) {
        // 如果没有，添加数字和“”
        display.value =display.value+value+'千卡';
    } 
    else {
        // 如果有，直接添加数字
        display.value = display.value.slice(0, -2) + value + '千卡';
    }
}

function clearenergyDisplay() {
    document.getElementById('kalulienergychangedisplay').value = '';
}
function deleteenergyLast() {
    const display = document.getElementById('kalulienergychangedisplay');
    display.value = display.value.slice(0, -3);
    display.value+='千卡';
}
function appendToenergyResult(value) {
    const displayInput = document.getElementById('kalulienergychangedisplay');
    displayInput.value =displayInput.value.slice(0, -2)+value+'千卡'; }// 添加小数点到输入框中

function calculateenergyResult() {
    const display=document.getElementById('kalulienergychangedisplay');
    const numstring=display.value.slice(0, -2);
    var num=Number(numstring);
    display.value = '';
    var energy=num/239;
    energy=energy.toFixed(2);
    const energystring=String(energy);
    display.value=energystring+'千焦'
} 

//卡路里重量计算器
function appendToweightDisplay(value) {
    const display = document.getElementById('kaluliweightchangedisplay');   
     // 检查当前值是否已经包含“卡”
     if (!display.value.endsWith('千卡')) {
        // 如果没有，添加数字和“”
        display.value =display.value+value+'千卡';
    } 
    else {
        // 如果有，直接添加数字
        display.value = display.value.slice(0, -2) + value + '千卡';
    }
}

function clearweightDisplay() {
    document.getElementById('kaluliweightchangedisplay').value = '';
}
function deleteweightLast() {
    const display = document.getElementById('kaluliweightchangedisplay');
    display.value = display.value.slice(0, -3);
    display.value+='千卡';
}
function appendToweightResult(value) {
    const displayInput = document.getElementById('kaluliweightchangedisplay');
    displayInput.value =displayInput.value.slice(0, -2)+value+'千卡'; }// 添加小数点到输入框中

function calculateweightResult() {
    const display=document.getElementById('kaluliweightchangedisplay');
    const numstring=display.value.slice(0, -2);
    var num=Number(numstring);
    display.value = '';
    var energy=num*0.00026;
    energy=energy.toFixed(2);
    const energystring=String(energy);
    display.value=energystring+'斤'
} 

//心理测试开始
function shiftquestion(){
    const disappear=document.getElementById('heart-content');
    disappear.style.display='none';
    const appear=document.getElementById('textcontent1');
    appear.style.display='block';
}
function Nextpage(i){
    const disappear=document.getElementsByClassName('text-content');
    disappear[i].style.display='none';
    disappear[i+1].style.display='block';
}
function Lastpage(i){
    const disappear=document.getElementsByClassName('text-content');
    disappear[i].style.display='none';
    disappear[i-1].style.display='block';
}

function calculateSum() {
    let sum = 0; // 初始化总和为0
    // 遍历 q1 到 q40 的输入框
    for (let i = 1; i <= 40; i++) {
        const input = document.querySelector(`input[name="q${i}"]:checked`); // 获取框
        if (input) { // 如果输入框存在且有值
            sum += Number(input.value); 
        }
    }
    var sumstring=String(sum);
    //切换界面
    const disappear=document.getElementById('textcontent4');
    disappear.style.display='none';
    const appear=document.getElementById('heart-result-contant');
    appear.style.display='block';
    // 显示结果
    var grade_display=document.getElementById('heart-gradeinput');
    grade_display.value=sumstring+'分';
    var wordresult_display=document.getElementById('heart-resultinput');
    if(sum<40){wordresult_display.value='较差'
              const advice1=document.getElementById('h-advice1')
            advice1.style.display='block' }
    else if(sum<60){wordresult_display.value='中等'
               const advice2=document.getElementById('h-advice2')
               advice2.style.display='block'}
    else if(sum<80){wordresult_display.value='良好'
             const advice3=document.getElementById('h-advice3')
                advice3.style.display='block'}
    else {wordresult_display.value='优秀'
    const advice4=document.getElementById('h-advice4')
    advice4.style.display='block'}
  
}


//排序器
var foodtype=document.getElementsByClassName("ft");
var foodcontent=document.getElementsByClassName("ww");
var heat=document.getElementsByClassName("foodheat");
var fh=document.getElementsByClassName("foodtype");
var fc=document.getElementsByClassName("food-checkbox");
var sf=document.getElementsByClassName("specific-food");

function showtype5(){
    var index=document.getElementById("foodselector").selectedIndex;
    if(foodtype[index].getAttribute("value")=="all"){
        for(var i=0;i<foodcontent.length;i++){foodcontent[i].style.display="block"}
    }
    else{for(var i=0;i<foodcontent.length;i++){
        if(foodcontent[i].getAttribute("value")==foodtype[index].getAttribute("value")){foodcontent[i].style.display="block";}
        else {foodcontent[i].style.display="none";}
    }}
}

function heatshow(){
    if(document.getElementById("heat-show").checked==true){
        for(var i=0;i<heat.length;i++)
        {heat[i].style.display="inline";}
    }
    else{for(var i=0;i<heat.length;i++)
        {heat[i].style.display="none";}}
}

function high(){
    var fhA=[];
    for(var i=0;i<fh.length;i++){
        var fhB=Array.from(fh[i].children);
          fhB.sort((a,b)=>{
             var x=a.getAttribute("value");
             var y=b.getAttribute("value");
             return y-x;})
        fhA=fhA.concat(fhB);
    }
    var index=0;
    for(var i=0;i<fh.length;i++){
      var length=fh[i].children.length;
      console.log(length);
      fh[i].innerHTML='';
      for(m=0;m<length;m++){
          fh[i].appendChild(fhA[m+index]);
      }
      index+=length;
      
    }
  }

function low(){
    var fhA=[];
    for(var i=0;i<fh.length;i++){
        var fhB=Array.from(fh[i].children);
          fhB.sort((a,b)=>{
             var x=a.getAttribute("value");
             var y=b.getAttribute("value");
             return x-y;})
        fhA=fhA.concat(fhB);}
    var index=0;
    for(var i=0;i<fh.length;i++){
      var length=fh[i].children.length;
      console.log(length);
      fh[i].innerHTML='';
      for(m=0;m<length;m++){
          fh[i].appendChild(fhA[m+index]);
      }
      index+=length;
      
    }
  }

  function shaixuanhigh(){
    var arr=document.getElementById("sort-display");
    arr.value="";
    var arr2=[];
    for(var i=0;i<sf.length;i++){
      if(sf[i].getElementsByTagName("input")[0].checked==true){
        arr2.push(sf[i]);
      }
    }
    arr2.sort((a,b)=>{
      var x=a.getAttribute("value");
      var y=b.getAttribute("value");
      return y-x;})
    for(var i=0;i<arr2.length;i++){
      arr.value+=arr2[i].getElementsByTagName("input")[0].value+" ";
    }
  }

  function shaixuanlow(){
    var arr=document.getElementById("sort-display");
    arr.value="";
    var arr2=[];
    for(var i=0;i<sf.length;i++){
      if(sf[i].getElementsByTagName("input")[0].checked==true){
        arr2.push(sf[i]);
      }
    }
    arr2.sort((a,b)=>{
      var x=a.getAttribute("value");
      var y=b.getAttribute("value");
      return x-y;})
    for(var i=0;i<arr2.length;i++){
      arr.value+=arr2[i].getElementsByTagName("input")[0].value+" ";
    }
  }


  var foodtype2=document.getElementsByClassName("ft2");
var foodcontent2=document.getElementsByClassName("ww2");
var fh2=document.getElementsByClassName("foodtype2");
var sf=document.getElementsByClassName("specific-food");
var yys=document.getElementsByClassName("yingyangsu");


function showtype(){
    var index=document.getElementById("foodselector2").selectedIndex;
    if(foodtype2[index].getAttribute("value")=="all"){
        for(var i=0;i<foodcontent2.length;i++){foodcontent2[i].style.display=""}
    }
    else{for(var i=0;i<foodcontent2.length;i++){
        if(foodcontent2[i].getAttribute("value")==foodtype2[index].getAttribute("value")){foodcontent2[i].style.display="";}
        else {foodcontent2[i].style.display="none";}
    }}
}

function elementlack(){
  document.getElementById("yysresult").value="";
  var selectedfh2='';
  for(var i=0;i<fh2.length;i++){
    var selectingfh2=Array.from(fh2[i].children);
    for(var m=0;m<selectingfh2.length;m++){
      if(selectingfh2[m].getElementsByTagName("input")[0].checked==true){
        selectedfh2=selectedfh2.concat(String(selectingfh2[m].getElementsByTagName("input")[0].value));
      }
    }
  } 
  var kuangwuzhi="钙镁磷钾铁锌碘锰硒铬";
  var count_=0;
  for(var i=0;i<kuangwuzhi.length;i++){
    if(!selectedfh2.includes(kuangwuzhi[i])){
      document.getElementById("yysresult").value=document.getElementById("yysresult").value+("缺"+kuangwuzhi[i]+" ");
      count_++;
    }
  } 
  if(count_==0){
    document.getElementById("yysresult").value="你的食谱包含了所有日常必需的矿物质！"
  }
}

function yysshow(){
   var showbutton=document.getElementById("showyys").getElementsByTagName("input");
   if(showbutton[0].checked){
    for(var i=0;i<yys.length;i++){
      yys[i].style.display="inline";
    }
   }
   else {for(var i=0;i<yys.length;i++){
    yys[i].style.display="none";}}
}

function showchapter(){
  var fp=document.getElementById("food-content-page2");
  var cs=document.getElementById("chapterselector");
  var yc=document.getElementById("yyschapter");
  var index=cs.selectedIndex;
  if(index==0){yc.style.display="none";fp.style.display="";}
  else{fp.style.display="none";yc.style.display="block";}
}

function eleselect(){
  var index=document.getElementById("yysselect").selectedIndex;
  for(var i=0;i<document.getElementById("yysselect").children.length;i++){
    if(i==index){
      document.getElementById("yysselector").getElementsByTagName("input")[0].value=document.getElementById("yysselect").getElementsByTagName("option")[i].value;
    }
  }
}


function showtype1(value){   
    const sportsintroductions = document.querySelectorAll('.hlpicture');
    sportsintroductions.forEach(sportsintroduction => {
        sportsintroduction.classList.remove('hlactive');});
var h0=document.getElementById('hlp-white');h0.classList.add('hlactive');
    var result=document.getElementById('hleresult');
    
    if (value==1){result.value="身体修复、提高免疫力、增强记忆力和学习能力";var h1=document.getElementById('hlp1');h1.classList.add('hlactive');}
    else if (value==0){result.value="";}
    else if (value==2){result.value="促进血液循环、增强心肺功能，减轻压力、改善情绪";var h2=document.getElementById('hlp2');h2.classList.add('hlactive');}
    else if (value==3){result.value="稳定血糖水平、保护肠胃、控制体重、改善睡眠质量";var h3=document.getElementById('hlp3');h3.classList.add('hlactive');}
    else if (value==4){result.value="定期与家人和朋友交流，参与社交活动。良好的社交关系有助于改善情绪，减少焦虑和抑郁的风险。";var h4=document.getElementById('hlp4');h4.classList.add('hlactive');}
    else if (value==5){result.value="限制每天使用电子设备（如手机、电脑）的时间，特别是在睡前。减少屏幕时间有助于提高睡眠质量，减轻眼睛疲劳，并促进面对面的互动。";var h5=document.getElementById('hlp5');h5.classList.add('hlactive');}
    else if (value==6){result.value="工作或学习期间定期休息，做一些放松的活动，如深呼吸、冥想或伸展运动。适当的休息可以提高生产力，减轻压力，改善心理状态。";var h6=document.getElementById('hlp6');h6.classList.add('hlactive');}
    else if (value==7){result.value="每天饮用足够的水（大约8杯），可以帮助身体维持正常的生理功能。水分充足有助于消化、提高能量水平并促进皮肤健康。";var h7=document.getElementById('hlp7');h7.classList.add('hlactive');}
    

}

    
    