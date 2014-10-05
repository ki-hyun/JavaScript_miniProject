"use strict"

 

var currSeat = null;

 

 

document.getElementById('check').onclick = function(e){ 

	numState.state = 'on';

  console.log(numState.state);

  document.getElementsByTagName("a")[numState.seateNum -1].setAttribute("class", "on");

  /* console.log("이 a태그의 속성은" + document.getElementsByTagName("a")[currSeat.seateNum].getAttribute("class")); */

}

document.getElementById('cancel').onclick = function(e){ 

	numState.state = 'off';

	  console.log(numState.state);

	  document.getElementsByTagName("a")[numState.seateNum -1].setAttribute("class", "off");

	  /* console.log("이 a태그의 속성은" + document.getElementsByTagName("a")[currSeat.seateNum].getAttribute("class")); */

	}


 

 

 

ChangeDisPlay('..');

MakeSeatNum();

 

 

/* function ChangeImage(currSeat.seateNum , currSeat.state){

   

}

 */

function MakeSeatNum() {

 

var numState= new Array;

 



  for (var i = 0; i < 10; i++) {

 

    numState[i] = {

 

      seateNum : i + 1,

 

      state : 'off'

    }

  }

  

  

 

  for (var i = 0; i < numState.length; i++) {

 

    /* console.log(numState[i].seateNum); */

 

  }

 

  for (var i = 0; i < numState.length; i++) {

    var seatBox = [];

    seatBox += ('seatBox' + String(i));

    var seatStateUl = document.getElementById('seatStateUl');

    var ins = document.createElement('ins');

    var a = document.createElement('a');

    ins.id = seatBox[i];

    a.setAttribute('seateNum', i);

    a.setAttribute('id', seatBox);

    a.setAttribute('class', numState[i].state);

    a.href = '#';

    a.innerHTML = numState[i].seateNum;

    a.onclick = ClickTest;
    currSeatcurrSeat
    ins.appendChild(a);

    seatStateUl.appendChild(ins);

  }
  
  

//좌석 클릭!  예매하기

function ClickTest() {

  event.preventDefault();

  

  currSeat = numState[this.getAttribute('seateNum')];

  

   

  if(numState.state == 'on'){

     alert('이미 예약된 좌석입니다');

  }

  

  

  document.getElementById('indextest').value = currSeat.seateNum;

  document.getElementById('statetest').value = currSeat.state;

  ChangeDisPlay('seatOption');

  

}

}
 

 

function ChangeDisPlay(state) {

  var stateMap = {

    seatOption : 'none'

  };

 

  stateMap[state] = '';

 

  var seatOptionClass = document.querySelectorAll('.seatOption');

 

  for (var i = 0; i < seatOptionClass.length; i++) {

    seatOptionClass[i].style.display = stateMap.seatOption;

  }

}