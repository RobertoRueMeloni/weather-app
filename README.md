Create an app using the tech stack and features described below. The app should be a Windows desktop app built using Angular 2+ and Electron, and should use NgRx for state management. Please include logging, unit test cases and a ReadMe file. Once you are done with the mini project, please upload the code to your BitBucket/GitHub account and share the link, or send a zip file. 

Tech Stack:
	TypeScript
	Angular 2+
	Electron
	@ngrx/store
	Axios
	SQLite
	OAuth2

Specifications:
	Home screen displays a title bar with app name on the left, settings and login buttons on the right and window controls (min, max, close).
	Body of home screen displays welcome message with some guidelines for user to login and select a city to see the weather for.
	Settings screen shows settings (like weather API URL, API key, etc.) and allows user to update them. Settings should be stored in a SQLite database.
	Login screen should allow users to log in using a Google account via the OAuth2 protocol. If you prefer, you could alternatively support log in via a Microsoft account. 
	Upon successful login, check in SQLite database users table. If user is not found, add a record with basic details received from the Google ID token (first name, last name, email). 
	Once logged in, home page displays input options (text boxes or a drop down) for user to provide location information and click a button to get weather info. 
	Fetch the weather with the required details and display them in appropriate format. 
	Provide a way for the user to log out. 

Resources:
	Weather API: Sign up for a free plan at https://weatherstack.com/product (feel free to use any other free api for weather as you see fit)
	Google OAuth2: Sign up for a client ID (free): https://developers.google.com/identity/protocols/oauth2

Please reach out if you have any questions or clarifications.
