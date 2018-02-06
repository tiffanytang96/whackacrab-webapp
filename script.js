var btn = document.getElementById("btn1");
            var score = document.getElementById("score");
            var name1 = document.getElementById("playerName");
            var num = 0;
            var audio = new Audio('bomb.mp3');
            audio.playbackRate= 2.0;
            var text="";
            var Pname = prompt("Welcome to whack-a-crab! Simply catch as many crabs as you can!"+"              "+"Let's start with your name!","Captain Crunch");
            var stopbtn = document.getElementById("stopBtn");
            var message = document.getElementById("message");
            var highScore = document.getElementById("highScore");    
            var yellowfish = document.getElementById("yellow");
            var bluefish = document.getElementById("blue");
            var greenfish = document.getElementById("green");


        function moveBtn(){
            btn.style.position = "absolute";
            btn.style.top = Math.floor(Math.random() * window.innerHeight) +"px";
            btn.style.left = Math.floor(Math.random() * window.innerWidth) +"px";
           
           
        };
            setInterval(moveBtn,1000);  
        

        function getName(){
           
            if(Pname == null || Pname == ""){
                text = "Captain no name";
            }else{
                text = Pname;
            }
             name1.innerHTML = text;

        };

        function changePic(){
            num++;
            score.innerHTML=num;
            btn.style.backgroundImage = "url('boom2.png')";
            audio.play();
            setTimeout("changeBack()",300);
            stopbtn.style.display="block";
            message.style.display="block";
            
        };
            
        function changeBack(){
                btn.style.backgroundImage = "url('004-crab.png')";
                
            };    
        
        stopbtn.addEventListener("click", function(){
                alert("Your name is " + Pname +" and your final score is " + num);
                
                var fd = new FormData();
                fd.append("name", Pname);
                fd.append("score", num);

                fetch("http://localhost:8888/insert.php", {
                method:"POST",
                body:fd
              })
               
            console.log(Pname, num);
            
            num = 0;
            score.innerHTML=num;
            console.log(num);
        })
        
        function highScoreOutput(){
            fetch("http://localhost:8888/select.php",{
                method:"GET"
            }).then((resp)=>{
                return resp.json();
            }).then((json)=>{
                var highestScore = json[0].highestscore;
                highScore.innerHTML=highestScore;
            });
        }



        function start(){
            moveBtn();
            getName();
            highScoreOutput();
        }    
            window.onload=start;