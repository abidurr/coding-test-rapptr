Hello!

Your task is to use the provided assets to create the web app displayed in the Web_Programmer_Test.pdf spec.

A few general notes on the exam...

- Use of state management (Redux, Context, etc) is not required.
- When a user signs up or logs in, present some sort of success/failure feedback to the user. You are free to use whatever UI you feel here. 
- Please break down how much time you spend on what.
- Please include the full react project as a zip in a buildable state and if possible a compiled version we can run locally.
- If you have any questions, feel free to reach out.

Subscribe to Newsletter Endpoint

[POST] REQUEST URL: http://dev.rapptrlabs.com/Tests/scripts/add-email.php


Field 	Value           	Description
email 	test@rapptrlabs.com 	Email

RESPONSE:
{
    status :  success,
    message :  Generic Success
} 


If possible have the login / signup function using these endpoints.

SIGNUP

[POST] REQUEST URL: http://dev.rapptrlabs.com/Tests/scripts/user-signup.php

Field 		Value 		            Description
username 	testuser 		        Unique Username
password 	Test123 		        Password
email 		test@rapptrlabs.com 		Unique Email


RESPONSE:

{
    "user_id": 16,
    "user_email": "test@rapptrlabs.com",
    "user_username": "testuser",
    "user_is_active": 1,
    "user_profile_image": "http://dev.rapptrlabs.com/Tests/images/taylor_avatar.png",
    "user_last_active_epoch": 1544680026,
    "user_creation_epoch": 1544713200,
    "user_is_new": 1,
    "user_token": "6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e"
}

LOGIN
[POST] REQUEST URL: http://dev.rapptrlabs.com/Tests/scripts/user-login.php


Field 		Value 			        Description
email 		test@rapptrlabs.com	 	Email
password 	Test123 		        Password


RESPONSE:

{
    "user_id": 16,
    "user_email": "test@rapptrlabs.com",
    "user_username": "testuser",
    "user_is_active": 1,
    "user_profile_image": "http://dev.rapptrlabs.com/Tests/images/taylor_avatar.png",
    "user_last_active_epoch": 1544680026,
    "user_creation_epoch": 1544713200,
    "user_is_new": 1,
    "user_token": "6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e"
}