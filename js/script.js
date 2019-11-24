/*alert(213) ;*/
/*$(document).ready(function(){
	alert("Welcome to the automatic password generator from Perez") ;
	pass_type = $("#type-select").val() ;
}) ;
*/

//select password type
/*$("#type-select").change(function(){
	var pass_type = $(this).val() ;
}) ;*/

//type list
/*
1 - numbers only
2 - characters only
3 - upper and lower case letters
4 - upper case only
5 - lower case only
6 - alphabets and numbers
7 - random
*/

//password generate function starts  08166298255
$("#generate-pass").click(function(){
	lower_case_str = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z" ;
	lower_case_array = lower_case_str.split(",") ;

	upper_case_str = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" ;
	upper_case_array = upper_case_str.split(",") ;

	random_str = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9,!,@,#,$,%,^,_,~"
	 random_array = random_str.split(",") ;
	//70  in all ;
	pass_type = $("#type-select").val() ;
	pass_len = $("#pass-length").val() ;


	if(pass_type == 0)
	{
		alert("Please select a valid type") ;
	}

	//for numbers only
	if(pass_type == 1)
	{
		/*if(pass_len == 4)
		{
			from = 9999 ; //parseInt(9999) ;
			to = 1001 ;//parseInt(1001) ;
		}*/

		var from = "9" , to = "1" ;
		for(i=1; i<pass_len; i++)
		{
			from = from+"9" ;
		}
		for(i=1; i<pass_len-1; i++)
		{
			to = to+"0" ;
		}
		to = to+"1" ;

		pass = Math.ceil((Math.random()*from)+to) ;
		$("#pass").val(pass) ;
	}

	//for characters only
	if(pass_type == 2)
	{
		alert("This parameter is not set yet") ;
	}

	//for upper and lower case 
	if(pass_type == 3)
	{
		alert("This parameter is not set yet") ;
	}

	//for upper case only
	if(pass_type == 4)
	{
		pass = "" ;
		for(i=0; i<pass_len; i++)
		{
			char_pos = Math.floor((Math.random()*25)+0) ;
			passs = upper_case_array[char_pos] ;		
			pass = pass+passs ;
			$("#pass").val(pass) ;
		}
	}

	//for lower case only
	if(pass_type == 5)
	{
		pass = "" ;
		for(i=0; i<pass_len; i++)
		{
			char_pos = Math.floor((Math.random()*25)+0) ;
			passs = lower_case_array[char_pos] ;		
			pass = pass+passs ;
			$("#pass").val(pass) ;
		}
	}

	//for random char
	if(pass_type == 7)
	{
		pass = "" ;
		for(i=0; i<pass_len; i++)
		{
			char_pos = Math.floor((Math.random()*69)+0) ;
			passs = random_array[char_pos] ;		
			pass = pass+passs ;
			$("#pass").val(pass) ;
		}
	}

}) ;