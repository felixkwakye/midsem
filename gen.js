		function validate(){
				//check if the data is correct
				var obj=document.getElementById("id");
				if(validateVaccine(obj.value)==true){
					
				}else{
					obj.style.backgroundColor="red";
					return false;
				}
			}
			
			
			function validateVaccine(str){
				var reName=new RegExp("[0-9]");
				if(reName.test(str)){
					return true;
				}else{
					return false;
				}
			
			}