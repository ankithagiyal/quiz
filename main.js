var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');
var count = 150;
var interval = setInterval(function()
{if(count>=0)
	{
  document.getElementById('count').innerHTML= "Time:"+count+" seconds";
  count--;
  if (count === 0){
    quit();
  }
}
  
  
}, 1000);

var tques=questions.length;
var score=0;
var quesindex=0;


function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	opt4.textContent=questions[quesindex][4];
	 return;// body...
};

give_ques(0);
score;
function nextques()
{
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{alert("SELECT AN OPTION");return;}

	if(selected_ans.value==questions[quesindex][5])
		{score=score+1;}
	selected_ans.checked=false;
	     quesindex++;
	     if(quesindex==tques-1)
	     	nextbutton.textContent="Finish";
	     var f=score;
	     if(quesindex==tques)
	     {
			q.style.display='none';
			quiz.style.display='none';
			result.style.display='';
			result.textContent="Your score is: "+f;
			  return;
	     }
		give_ques(quesindex);



	}
		
		
		
		function quit()
		{         
				  quiz.style.display='none';
				  result.style.display='';
				  var f=score;
				  result.textContent="Your score is :"+f;
				  q.style.display="none";
		}
