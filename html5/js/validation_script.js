/* 
	author: istockphp.com
*/
jQuery(function($) {
	var validation_holder;
	
	$("form#register_form input[name='submit']").click(function() {
	
	var validation_holder = 0;
	
		var fname 			= $("form#register_form input[name='fname']").val();
		var lname 			= $("form#register_form input[name='lname']").val();

	
		
		var address 		= $("form#register_form input[name='address']").val();
		var city 			= $("form#register_form input[name='city']").val();
		var state			= $("form#register_form input[name='state']").val();
		var zipcode 		= $("form#register_form input[name='zipcode']").val();
		var zipcode_regex 	= /^[0-9]{5}(?:-[0-9]{4})?$/ ; // reg ex zipcode check
		
		
		var email 			= $("form#register_form input[name='email']").val();
		var email_regex 	= /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/; // reg ex email check	
		
		var phone 			= $("form#register_form input[name='phone']").val();
		var phone_regex		= /^[0-9]{4,20}$/; // reg ex phone check	
		var month 			= $("form#register_form select[name='month']").val(); // month
		var day 			= $("form#register_form select[name='day']").val(); // day
		var year 			= $("form#register_form select[name='year']").val(); // year
		
		var m_status 			= $("form#register_form input[name='m_status']").val();
		
		var employer 			= $("form#register_form input[name='employer']").val();
	
		var mother_doc 			= $("form#register_form input[name='mother_doc']").val();
		

	
		
		
		
		var baby_bday_month 			= $("form#register_form select[name='baby_bday_month']").val(); // month
		var baby_bday_day 			= $("form#register_form select[name='baby_bday_day']").val(); // day
		var baby_bday_year 			= $("form#register_form select[name='baby_bday_year']").val(); // year
		
		
		
		var father_fname 			= $("form#register_form input[name='father_fname']").val();
		var father_lname 			= $("form#register_form input[name='father_lname']").val();
		
		
		var emg_name1			= $("form#register_form input[name='emg_name1']").val();
		var emg_name2 			= $("form#register_form input[name='emg_name2']").val();
		
		
		var emg_phone1 			= $("form#register_form input[name='emg_phone1']").val();
		var emg_phone1_regex		= /^[0-9]{4,20}$/; // reg ex phone check	
		
		var emg_phone2 			= $("form#register_form input[name='emg_phone2']").val();
		var emg_phone2_regex		= /^[0-9]{4,20}$/; // reg ex phone check	
		
		
		
		
		var ins1			= $("form#register_form input[name='ins1']").val();
		
		var ins1_p 			= $("form#register_form input[name='ins1_p']").val();
		
		
		
		var ins1_hname			= $("form#register_form input[name='ins1_hname']").val();
		
		var ins1_month 			= $("form#register_form select[name='ins1_month']").val(); // month
		var ins1_day 			= $("form#register_form select[name='ins1_day']").val(); // day
		var ins1_year 			= $("form#register_form select[name='ins1_year']").val(); // year
			
		
		
		
		
		
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		/* validation start */	
		if(fname == "") {
			$("span.val_fname").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_fname").html("");
			}


		if(lname == "") {
			$("span.val_lname").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_lname").html("");
			}










		if(address == "") {
			$("span.val_address").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_address").html("");
			}



		if(city == "") {
			$("span.val_city").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_city").html("");
			}



		if(state == "") {
			$("span.val_state").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_state").html("");
			}



		if(zipcode == "") {
			$("span.val_zipcode").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!zipcode_regex.test(zipcode)){ // if invalid zipcode
				$("span.val_zipcode").html("Invalid zipcode!").addClass('validate');
				validation_holder = 1;
			} else {
				$("span.val_zipcode").html("");
			}
		}





		if(email == "") {
			$("span.val_email").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!email_regex.test(email)){ // if invalid email
				$("span.val_email").html("Invalid Email!").addClass('validate');
				validation_holder = 1;
			} else {
				$("span.val_email").html("");
			}
		}
		
		if(phone == "") {
			$("span.val_phone").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!phone_regex.test(phone)){ // if invalid phone
				$("span.val_phone").html("Invalid Phone Number!").addClass('validate');
				validation_holder = 1;
			
			} else {
				$("span.val_phone").html("");
			}
		}
		
		if((month == "") || (day == "") || (year == "")) {
			$("span.val_bday").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
				$("span.val_bday").html("");
			}
		
		
		
		
		
		
		if(m_status == "") {
			$("span.val_m_status").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_m_status").html("");
			}
		
	
		
		
		if(employer == "") {
			$("span.val_employer").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_employer").html("");
			}
		
	
		
		
		if(mother_doc == "") {
			$("span.val_mother_doc").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_mother_doc").html("");
			}
		
		
	
		
		
	
		
		
	
		
		
		if((baby_bday_month == "") || (baby_bday_day == "") || (baby_bday_year == "")) {
			$("span.val_baby_bday").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
				$("span.val_baby_bday").html("");
			}		
		
		
		
		
		if(father_fname == "") {
			$("span.val_father_fname").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_father_fname").html("");
			}


		if(father_lname == "") {
			$("span.val_father_lname").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_father_lname").html("");
			}
		
		
		
		
		
		if(emg_name1 == "") {
			$("span.val_emg_name1").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_emg_name1").html("");
			}
		
		if(emg_name2 == "") {
			$("span.val_emg_name2").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_emg_name2").html("");
			}
			
		
		
		
		
		if(emg_phone1 == "") {
			$("span.val_emg_phone1").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!emg_phone1_regex.test(emg_phone1)){ // if invalid phone
				$("span.val_emg_phone1").html("Invalid Phone Number!").addClass('validate');
				validation_holder = 1;
			
			} else {
				$("span.val_emg_phone1").html("");
			}
		}
		
		
		
		if(emg_phone2 == "") {
			$("span.val_emg_phone2").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!emg_phone2_regex.test(emg_phone2)){ // if invalid phone
				$("span.val_emg_phone2").html("Invalid Phone Number!").addClass('validate');
				validation_holder = 1;
			
			} else {
				$("span.val_emg_phone2").html("");
			}
		}
				
		
		
		
		
		

		if(ins1 == "") {
			$("span.val_ins1").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_ins1").html("");
			}

		if(ins1_p == "") {
			$("span.val_ins1_p").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_ins1_p").html("");
			}

		

		if(ins1_hname == "") {
			$("span.val_ins1_hname").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			$("span.val_ins1_hname").html("");
			}



if((ins1_month == "") || (ins1_day == "") || (ins1_year == "")) {
			$("span.val_ins1_bday").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
				$("span.val_ins1_bday").html("");
			}
		
		
	
		
		

		
		
		
		
		
		
		
		
		
		
		
		
		
//		
//		
//		
//		
//		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		if(validation_holder == 1) { // if have a field is blank, return false
			$("p.validate_msg").slideDown("fast");
			document.getElementById('empty_box').style.height ="0px";  
			document.getElementById('empty_box').style.backgroundColor="red";  
			
			return false;
		}  validation_holder = 0; // else return true
		/* validation end */	
	}); // click end 

}); // jQuery End