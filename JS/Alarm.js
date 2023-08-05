let audio = new Audio("031974_30-seconds-alarm-72117.mp3");
// --------- Start Music ---------
let playAudio = () => {
  audio.play();
};

// --------- Stop Music ---------
let pauseAudio = () => {
  audio.pause();
};


let d = new Date();
    // console.log(d);
console.log(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}`);

// -------- Month --------
if(d.getMonth() < 10 && d.getDate() < 10 && d.getHours() < 10 && d.getMinutes() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-0${d.getMonth()+1}-0${d.getDate()}T0${d.getHours()}:0${d.getMinutes()}`;
}
else if(d.getMonth() < 10 && d.getDate() < 10 && d.getHours() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-0${d.getMonth()+1}-0${d.getDate()}T0${d.getHours()}:${d.getMinutes()}`;
}
else if(d.getMonth() < 10 && d.getDate() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-0${d.getMonth()+1}-0${d.getDate()}T${d.getHours()}:${d.getMinutes()}`;
}
else if(d.getMonth() < 10 && d.getHours() < 10 && d.getMinutes() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}T0${d.getHours()}:0${d.getMinutes()}`;
}
else if(d.getMonth() < 10 && d.getHours() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}T0${d.getHours()}:${d.getMinutes()}`;
}
else if(d.getMonth() < 10 && d.getMinutes() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}T${d.getHours()}:0${d.getMinutes()}`;
}
else if(d.getMonth() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}`;
}
// -------- Date --------
else if(d.getDate() < 10 && d.getHours() < 10 && d.getMinutes() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-${d.getMonth()+1}-0${d.getDate()}T0${d.getHours()}:0${d.getMinutes()}`;
}
else if(d.getDate() < 10 && d.getHours() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-${d.getMonth()+1}-0${d.getDate()}T0${d.getHours()}:${d.getMinutes()}`;
}
else if(d.getDate() < 10 && d.getMinutes() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-${d.getMonth()+1}-0${d.getDate()}T${d.getHours()}:0${d.getMinutes()}`;
}
else if(d.getDate() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-${d.getMonth()+1}-0${d.getDate()}T${d.getHours()}:${d.getMinutes()}`;
}
// -------- Hours --------
else if(d.getHours() < 10 && d.getMinutes() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T0${d.getHours()}:0${d.getMinutes()}`;
}
else if(d.getHours() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T0${d.getHours()}:${d.getMinutes()}`;
}
// -------- Minutes --------
else if(d.getMinutes() < 10){
  document.getElementById("time").min = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T${d.getHours()}:0${d.getMinutes()}`;
}
// -------- For all --------
else {
  document.getElementById("time").min = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}`;
}



// Displaying time on clock
setTimeout(()=>{
    if(d.getMonth() < 10 && d.getDate() < 10){
      document.getElementById("time").value = `${d.getFullYear()}-0${d.getMonth()+1}-0${d.getDate()}T06:00`;
    }
    else if(d.getMonth() < 10){
      document.getElementById("time").value = `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}T06:00`;
    }
    else if(d.getDate() < 10){
      document.getElementById("time").value = `${d.getFullYear()}-${d.getMonth()+1}-0${d.getDate()}T06:00`;
    }
    else {
      document.getElementById("time").value = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T06:00`;
    }
},10)

// --------- Snooze button disabled over here through JS ---------
document.querySelector(".btn2").disabled = true;

// --------- Setting an Alarm ---------
let id1 = 0;
let alarmSet = false;
let setAlarm = () => {
  let alarm = document.getElementById("time").value;
  // console.log(alarm);
// --------- Getting Date ----------
  let dateInfo = alarm.slice(0, 10).split("-");
  console.log(dateInfo);
  let [year, month, date] = [
    dateInfo[0],
    dateInfo[1],
    dateInfo[2],
  ];

// --------- Getting Time ----------
  let timeInfo = alarm.slice(-5).split(":");
  // console.log(timeInfo);
  let [hours, minutes] = [timeInfo[0], timeInfo[1]];

  if(year){
    if(hours < 12){
      if(hours == "00"){
        document.querySelector("p").innerHTML = `Alarm has been set for 12:${minutes} AM!!`;
      }
      document.querySelector("p").innerHTML = `Alarm has been set for ${hours}:${minutes} AM!!`;
    }
    else {
      if(hours == "12"){
        document.querySelector("p").innerHTML = `Alarm has been set for 12:${minutes} PM!!`;
      }
      document.querySelector("p").innerHTML = `Alarm has been set for ${hours-12}:${minutes} PM!!`;
    }
    setTimeout(()=>{
      document.querySelector("p").innerHTML = ``;
    },3000);
    console.log(`${year}-${month}-${date}T${hours}:${minutes}`);
      let timerId1 = setInterval(() => {
        let d = new Date();
        if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == minutes) {
          playAudio();
          alarmSet = true;
          document.querySelector(".btn2").disabled = false;
        }
      }, 1000);
      id1 = timerId1;
    }
  };
  

// --------- Snoozing the Alarm for 5 minutes ---------
let id2 = 0;
let snooze = () => {
    if(id1){
      pauseAudio();
      clearInterval(id1);
      id1 = 0;
    }
    let alarm1 = document.getElementById("time").value;
// --------- Getting Date ----------
  let dateInfo = alarm1.slice(0, 10).split("-");
  // console.log(dateInfo);
  let [year, month, date] = [
    dateInfo[0],
    dateInfo[1],
    dateInfo[2],
  ];

// --------- Getting Time ----------
  let timeInfo = alarm1.slice(-5).split(":");
  // console.log(timeInfo);
  let [hours, minutes] = [timeInfo[0], timeInfo[1]];

  if(year){
    document.querySelector("p").innerHTML = `Alarm has been snoozed for 5 minutes!!`;
    setTimeout(()=>{
      document.querySelector("p").innerHTML = ``;
    },3000);
    console.log(`${year}-${month}-${date}T${hours}:${Number(minutes)+5}`);
    if(minutes > 4 && minutes < 55){
      if(hours == 12){
        document.getElementById("time").value = `${year}-${month}-${date}T01:${Number(minutes)+5}`;
      }
      document.getElementById("time").value = `${year}-${month}-${date}T${hours}:${Number(minutes)+5}`;
    }
    else if(minutes == 55){
      if(hours == "23"){
        document.getElementById("time").value = `${year}-${month}-${date}T00:00`;
      }
      if(hours < "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T0${Number(hours)+1}:00`;
      }
      if(hours >= "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:00`;
      }
    }
    else if(minutes == 56){
      if(hours == "23"){
        document.getElementById("time").value = `${year}-${month}-${date}T00:01`;
      }
      if(hours < "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T0${Number(hours)+1}:01`;
      }
      if(hours >= "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:01`;
      }
    }
    else if(minutes == 57){
      if(hours == "23"){
        document.getElementById("time").value = `${year}-${month}-${date}T00:02`;
      }
      if(hours < "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T0${Number(hours)+1}:02`;
      }
      if(hours >= "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:02`;
      }
    }
    else if(minutes == 58){
      if(hours == "23"){
        document.getElementById("time").value = `${year}-${month}-${date}T00:03`;
      }
      if(hours < "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T0${Number(hours)+1}:03`;
      }
      if(hours >= "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:03`;
      }
    }
    else if(minutes == 59){
      if(hours == "23"){
        document.getElementById("time").value = `${year}-${month}-${date}T00:04`;
      }
      if(hours < "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T0${Number(hours)+1}:04`;
      }
      if(hours >= "09"){
        document.getElementById("time").value = `${year}-${month}-${date}T${Number(hours)+1}:04`;
      }
    }
    else if(minutes <= 4){
      document.getElementById("time").value = `${year}-${month}-${date}T${hours}:0${Number(minutes)+5}`;
    }
    let timerId2 = setInterval(() => {
        let d = new Date();
        if(minutes < 55){
          if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == hours && d.getMinutes() == Number(minutes)+5) {
            playAudio();
            document.querySelector(".btn2").disabled = false;
          }
        }
        if(minutes == 55){
          if(hours == "23"){
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == "00" && d.getMinutes() == "00") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
          else {
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == Number(hours)+1 && d.getMinutes() == "00") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
        }
        if(minutes == 56){
          if(hours == "23"){
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == "00" && d.getMinutes() == "01") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
          else {
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == Number(hours)+1 && d.getMinutes() == "01") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
        }
        if(minutes == 57){
          if(hours == "23"){
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == "00" && d.getMinutes() == "02") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
          else {
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == Number(hours)+1 && d.getMinutes() == "02") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
        }
        if(minutes == 58){
          if(hours == "23"){
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == "00" && d.getMinutes() == "03") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
          else {
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == Number(hours)+1 && d.getMinutes() == "03") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
        }
        if(minutes == 59){
          if(hours == "23"){
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == "00" && d.getMinutes() == "04") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
          else {
            if (d.getFullYear() == year && d.getMonth() == month-1 && d.getDate() == date && d.getHours() == Number(hours)+1 && d.getMinutes() == "04") {
              playAudio();
              document.querySelector(".btn2").disabled = false;
            }
          }
        }
      }, 1000);
      id2 = timerId2;
    }
  }

// Allowing snooze function to get execute, if id1 value is there.
document.querySelector(".btn2").addEventListener("click",()=>{
  pauseAudio();
  if(id2){
    clearInterval(id2);
    id2 = 0;
  }
  if(alarmSet && id2 == 0){
    snooze();
    document.querySelector(".btn2").disabled = true;
  }
});


  // --------- Turning Off Alarm ---------
  let turnOff = () => {
    alarmSet = false;
    if(id1){  
      clearInterval(id1);
      id1 = 0;
      pauseAudio();
      document.querySelector(".btn2").disabled = true;
      document.querySelector("p").innerHTML = `Alarm has been turned Off!!`;
       setTimeout(()=>{
         document.querySelector("p").innerHTML = ``;
       },3000);
       console.clear();
    }
    if(id2){
      clearInterval(id2);
      id2 = 0;
      pauseAudio();
      document.querySelector(".btn2").disabled = true;
      document.querySelector("p").innerHTML = `Alarm has been turned Off!!`;
       setTimeout(()=>{
         document.querySelector("p").innerHTML = ``;
       },3000);
       console.clear();
    }
  }



