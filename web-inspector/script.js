var culture = document.getElementById('culture');
var sports = document.getElementById('sports');
var number = [1,1,1,1,1,1,1];

function startui(){
    for(days=1;days<8;days++){
    const root = document.getElementById('day');
    const clone = root.cloneNode(true);
    clone.id = 'day-'+days;
    clone.querySelector("#hope-1").id = days+'-hope-1';
    clone.querySelector("select").id = days+'-select-1';
    clone.querySelector("button").id = days;
    clone.style.display = 'block';
    root.before(clone);
    }
}
startui()

function Changed_type(type){
    if(type=="culture"){
        document.getElementById('Culture_circle').disabled=false;
        document.getElementById('Sports_circle').disabled=true;
        document.getElementById('Sports_circle').value=0;
        sports.checked = false;
    }else if(type=="sports"){
        document.getElementById('Culture_circle').disabled=true;
        document.getElementById('Culture_circle').value=0;
        document.getElementById('Sports_circle').disabled=false;
        culture.checked = false;
    }
}

function progress(next){
    var Culture_circle = document.getElementById('Culture_circle');
    var Sports_circle = document.getElementById('Sports_circle');
    if(next=='form'){
        if(!culture.checked&&!sports.checked||Culture_circle.value==0&&Sports_circle.value==0){
            alert('サークルを選択してください');
        }else{
        document.getElementById('circle').style.display='none';
        document.getElementById('form').style.display='block';
        }
    }else if(next=='circle'){
        document.getElementById('circle').style.display='block'
        document.getElementById('form').style.display='none';
    }
}

function addWords(id){
    console.log(id);
    var n = Number(id);
    number[n-1] = number[n-1]+1;
    var hopes = number[n-1];
    var before_hope = hopes-1;

    const root = document.getElementById('hope-hidden');
    const parent = document.getElementById(id+'-hope-'+before_hope);
    console.log(hopes);
    const clone = root.cloneNode(true);
    clone.id = id+'-hope-'+hopes;
    clone.querySelector("label").innerHTML = '第'+hopes+'希望';
    clone.querySelector("select").id = id+'-select-'+hopes;
    clone.querySelector("button").id = id+'-delbutton-'+hopes;
    if(before_hope>1){
    parent.querySelector("button").style.display='none';
    }
    clone.style.display = 'block';
    parent.after(clone);
}

function deleteWord(id){
    var array = id.split('-');
    var days = Number(array[0]);
    var hopes = Number(array[2]);
    var before_hope = hopes-1;
    number[days-1] = number[days-1]-1;
    document.getElementById(days+'-hope-'+hopes).remove();
    if(hopes>2){
    document.getElementById(days+'-delbutton-'+before_hope).style.display ='block';
    }
}