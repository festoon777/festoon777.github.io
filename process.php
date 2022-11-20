<?php

session_start(); 


$fname 		= trim($_POST['fname']); // trim remove white space
$lname 		= trim($_POST['lname']);
$mname 		= trim($_POST['mname']);

$address	= $_POST['address'];
$city		= $_POST['city'];
$state		= $_POST['state'];
$zipcode	= trim($_POST['zipcode']);
$email 		= trim($_POST['email']);
$phone 		= trim($_POST['phone']);
$cell_phone = trim($_POST['cell_phone']);
$birth 		= $_POST['month'].'-'.$_POST['day'].'-'.$_POST['year'];
$m_status		= $_POST['m_status'];
$r_pref		= $_POST['r_pref'];
$employer		= $_POST['employer'];
$emp_phone		= $_POST['emp_phone'];
$mother_doc		= $_POST['mother_doc'];
$mother_clinic		= $_POST['mother_clinic'];

$p_lang		= $_POST['p_lang'];
$need_intp 	= trim($_POST['need_intp']);





$baby_bday 		= $_POST['baby_bday_month'].'-'.$_POST['baby_bday_day'].'-'.$_POST['baby_bday_year'];


$father_fname 		= trim($_POST['father_fname']);
$father_lname 		= trim($_POST['father_lname']);


$emg_name1		= $_POST['emg_name1'];
$emg_phone1		= $_POST['emg_phone1'];
$emg_cellphone1		= $_POST['emg_cellphone1'];
$emg_workphone1		= $_POST['emg_workphone1'];
$emg_rel1		= $_POST['emg_rel1'];




$emg_name2		= $_POST['emg_name2'];
$emg_phone2		= $_POST['emg_phone2'];
$emg_cellphone2		= $_POST['emg_cellphone2'];
$emg_workphone2	= $_POST['emg_workphone2'];
$emg_rel2		= $_POST['emg_rel2'];



$ins1		= $_POST['ins1'];
$ins1_p		= $_POST['ins1_p'];
$ins1_g	= $_POST['ins1_g'];
$ins1_hname	= $_POST['ins1_hname'];

$ins1_bday 		= $_POST['ins1_month'].'-'.$_POST['ins1_day'].'-'.$_POST['ins1_year'];


$ins1_address		= $_POST['ins1_address'];
$ins1_city		= $_POST['ins1_city'];
$ins1_state	= $_POST['ins1_state'];
$ins1_zipcode	= $_POST['ins1_zipcode'];
$ins1_phone	= $_POST['ins1_phone'];
$ins1_ph_emp	= $_POST['ins1_ph_emp'];
$ins1_ph_emp_add	= $_POST['ins1_ph_emp_add'];
$ins1_ph_emp_phone	= $_POST['ins1_ph_emp_phone'];






$ins2		= $_POST['ins2'];
$ins2_p		= $_POST['ins2_p'];
$ins2_g	= $_POST['ins2_g'];
$ins2_hname	= $_POST['ins2_hname'];

$ins2_bday 		= $_POST['ins2_month'].'-'.$_POST['ins2_day'].'-'.$_POST['ins2_year'];

$ins2_address		= $_POST['ins2_address'];
$ins2_city		= $_POST['ins2_city'];
$ins2_state	= $_POST['ins2_state'];
$ins2_zipcode	= $_POST['ins2_zipcode'];
$ins2_phone	= $_POST['ins2_phone'];
$ins2_ph_emp	= $_POST['ins2_ph_emp'];
$ins2_ph_emp_add	= $_POST['ins2_ph_emp_add'];
$ins2_ph_emp_phone	= $_POST['ins2_ph_emp_phone'];



$ppq1		= $_POST['ppq1'];
$ppq2		= $_POST['ppq2'];
$ppq3		= $_POST['ppq3'];
$ppq4		= $_POST['ppq4'];
$ppq5		= $_POST['ppq5'];
$ppq6		= $_POST['ppq6'];
$ppq7		= $_POST['ppq7'];
















































// do something. mysql_query

$email_to = "register@menifeehospital.com";
$email_subject = "Mail from Menifee Valley Medical Center registration form";


 $email_message = "Form details below.\n\n";
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
  $email_message .= "First Name: ".clean_string($fname)."\n";
  $email_message .= "Middle Name: ".clean_string($mname)."\n";
  $email_message .= "Last Name: ".clean_string($lname)."\n";

  $email_message .= "Address: ".clean_string($address)."\n";
  $email_message .= "City: ".clean_string($city)."\n";
  $email_message .= "State: ".clean_string($state)."\n";
  $email_message .= "Zip Code: ".clean_string($zipcode)."\n";
  $email_message .= "Home Phone : ".clean_string($phone)."\n";
  $email_message .= "Cell Phone: ".clean_string($cell_phone)."\n";
  $email_message .= "Email : ".clean_string($email )."\n";
  $email_message .= "Birthdate: ".clean_string($birth)."\n";
  $email_message .= "Marital Status: ".clean_string($m_status)."\n";
  $email_message .= "Religious Preference: ".clean_string($r_pref)."\n";
  $email_message .= "Employer: ".clean_string($employer)."\n";
  $email_message .= "Employer Phone Number: ".clean_string($emp_phone)."\n";
  $email_message .= "Mother's Doctor: ".clean_string($mother_doc)."\n";
  $email_message .= "Mother's Clinic: ".clean_string($mother_clinic)."\n";

  $email_message .= "Primary Language Spoken : ".clean_string($p_lang)."\n";
  $email_message .= "Do you need an interpreter?: ".clean_string($need_intp)."\n\n";

  
  
  $email_message .= " Baby Information: \n";
  $email_message .= "Due Date (Approximate)  : ".clean_string($baby_bday)."\n\n";
  
  
   $email_message .= " Father's Information: \n";
  $email_message .= "First Name: ".clean_string($father_fname)."\n";
  $email_message .= "Last Name : ".clean_string($father_lname)."\n\n";
  
  
   
  $email_message .= " Notify in case of emergency: \n";
  $email_message .= " First contact person: \n";
  
  $email_message .= "Name : ".clean_string($emg_name1)."\n";
  $email_message .= "Home Phone : ".clean_string($emg_phone1)."\n";
  $email_message .= "Cell Phone : ".clean_string($emg_cellphone1)."\n";
  $email_message .= "Work Phone : ".clean_string($emg_workphone1)."\n";
  $email_message .= "Relationship to Patient : ".clean_string($emg_rel1)."\n\n";

  
  

  $email_message .= " Second contact person: \n";
  
  $email_message .= "Name : ".clean_string($emg_name2)."\n";
  $email_message .= "Home Phone : ".clean_string($emg_phone2)."\n";
  $email_message .= "Cell Phone : ".clean_string($emg_cellphone2)."\n";
  $email_message .= "Work Phone : ".clean_string($emg_workphone2)."\n";
  $email_message .= "Relationship to Patient : ".clean_string($emg_rel2)."\n\n";










 $email_message .= " List all Insurance Policies That Cover the Patient. Patient's Insurance Policy is Always Primary. \n";
 
  $email_message .= " Insurance Policy 1 : \n";
  
  $email_message .= "Insurance 1 : ".clean_string($ins1)."\n";
  $email_message .= "Insurance 1 Policy # : ".clean_string($ins1_p)."\n";
  $email_message .= "Insurance 1 Group : ".clean_string($ins1_g)."\n";
  $email_message .= "Insurance 1 Policy Holder's Name : ".clean_string($ins1_hname)."\n";
  $email_message .= "Insurance 1 Policy Holder Birth Date : ".clean_string($ins1_bday)."\n";  
  $email_message .= "Insurance 1 Address : ".clean_string($ins1_address)."\n";
  $email_message .= "Insurance 1 City : ".clean_string($ins1_city)."\n";
  $email_message .= "Insurance 1 State : ".clean_string($ins1_state)."\n";
  $email_message .= "Insurance 1 Zip Code : ".clean_string($ins1_zipcode)."\n";
  $email_message .= "Insurance 1 Phone  : ".clean_string($ins1_phone)."\n";
  $email_message .= "Insurance 1 Policy Holder Employer : ".clean_string($ins1_ph_emp)."\n";
  $email_message .= "Insurance 1 Policy Holder Employer Address : ".clean_string($ins1_ph_emp_add)."\n";
  $email_message .= "Insurance 1 Policy Holder Employer Phone  : ".clean_string($ins1_ph_emp_phone)."\n\n";




  $email_message .= " Insurance Policy 2 : \n";
  
  $email_message .= "Insurance 2 : ".clean_string($ins2)."\n";
  $email_message .= "Insurance 2 Policy # : ".clean_string($ins2_p)."\n";
  $email_message .= "Insurance 2 Group : ".clean_string($ins2_g)."\n";
  $email_message .= "Insurance 2 Policy Holder's Name : ".clean_string($ins2_hname)."\n";
  $email_message .= "Insurance 2 Policy Holder Birth Date : ".clean_string($ins2_bday)."\n";  
  $email_message .= "Insurance 2 Address : ".clean_string($ins2_address)."\n";
  $email_message .= "Insurance 2 City : ".clean_string($ins2_city)."\n";
  $email_message .= "Insurance 2 State : ".clean_string($ins2_state)."\n";
  $email_message .= "Insurance 2 Zip Code : ".clean_string($ins2_zipcode)."\n";
  $email_message .= "Insurance 2 Phone  : ".clean_string($ins2_phone)."\n";
  $email_message .= "Insurance 2 Policy Holder Employer : ".clean_string($ins2_ph_emp)."\n";
  $email_message .= "Insurance 2 Policy Holder Employer Address : ".clean_string($ins2_ph_emp_add)."\n";
  $email_message .= "Insurance 2 Policy Holder Employer Phone  : ".clean_string($ins2_ph_emp_phone)."\n\n";



$email_message .= " Patient Profile Questions \n";


  $email_message .= "Q1. Have you been to Maple Grove Hospital before?   \n Ans : ".clean_string($ppq1)."\n\n";
  $email_message .= "Q2. Would you like a pre-visit tour?  \n Ans : ".clean_string($ppq2)."\n\n";
  $email_message .= "Q3. Who will be with you during your stay?  \n Ans : ".clean_string($ppq3)."\n\n";
  $email_message .= "Q4. What can we do to make you comfortable while you are with us?  \n Ans :  ".clean_string($ppq4)."\n\n";
  $email_message .= "Q5. What fears or concerns do you have about your upcoming visit to Maple Grove Hospital?  \n Ans :  ".clean_string($ppq5)."\n\n";
  $email_message .= "Q6. Is there anything you would like us to know about you prior to your arrival?  \n Ans :  ".clean_string($ppq6)."\n\n";
  $email_message .= "Other ?  \n Ans :  ".clean_string($ppq7)."\n\n";
 

















   //create email headers
  $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
  mail($email_to, $email_subject, $email_message, $headers);
  







$_SESSION['reg']=1;

header("Location: index.php#!/page_Registration");
//exit();
?>