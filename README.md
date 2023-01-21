# login-api-2
Navigate to src folder and run "node app" to run the server
run "npm test" on root folder to run tests


Directory Structure 
•src/: The root directory for the application, contains all the subdirectories for routes, controllers, middlewares, models, and tests.
•src/routes/: Contains the login route file, responsible for handling the login request and calling the login controller.
•src/controllers/: Contains the login controller file, responsible for handling the login logic. 
•src/middlewares/: Contains the validation middleware file, responsible for validating the request body before calling the login controller.
•src/tests/: Contains the login test file, responsible for testing the login route, login controller and validation middleware.
•src/app.js: The entry point for the application, responsible for starting the server and setting up the middleware and routes.

Endpoint
•	POST /login: This endpoint is responsible for handling login requests.
•	Request Body 
o	`username`: (required) The username of the user trying to login.
o	 `password`: (required) The password of the user trying to login.

•	Response
•	200 OK:
	 Content-Type: application/json
	 { " message ": "Successfully logged in" }
•	401 Unauthorized:
o	 Content-Type: application/json
o	 { "message": "Invalid username or password" }
•	422 Unprocessable Entity:
o	 Content-Type: application/json
o	 { "errors": [{"msg": "Username is required" }, {"msg": "Password is required"}] }


Errors 
401 Unauthorized: Returned when the provided credentials are incorrect 
422 Unprocessable Entities: Returned when the request body is missing required fields

Testing 
•	API has been tested using Jest and Chai.
•	To run the test cases, use the command “ npm test” or “npm run test “ 
•	Test cases for the login route, login controller and validation middleware can be found in src/tests/login.test.js





Below attached are some screenshots for "login" endpoint.

Invalid Request
![image](https://user-images.githubusercontent.com/47515609/213874557-ff47fda3-cace-4f39-8fe1-8b3d105e9751.png)
Sucessfull Request
![image](https://user-images.githubusercontent.com/47515609/213874614-22ca1010-de1c-4156-93de-157064e62e6b.png)
Validation Check
![image](https://user-images.githubusercontent.com/47515609/213874721-1c3f92e8-3431-45ae-bd4e-d6558d78d2d4.png)
Test Cases
![image](https://user-images.githubusercontent.com/47515609/213874684-5b3cfcd1-f71f-4104-a777-0cc169e94935.png)

