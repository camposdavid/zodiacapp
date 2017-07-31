// array of objects to store zodiac data
var zodiac = [
	{
		sign: "aquarius",
		fortune: "Your expenditure will be quite high and you could have to borrow money. If signing any documentation or making a commitment please consult a legal expert and keep in mind that this is not the time to be hasty or rush in anything. You got to be extra careful if involved in any kind of a financial transaction. After the 12th of May the situation will be better and improved.",
		image: "img/aquarius.jpg",
	},
	{
		sign: "aries",
		fortune: "A number of your old problems will now be resolved and if you are going for an interview, presentation or court case then you will be quite successful. You will be able to create something dignified and finish your incomplete and pending tasks. Health wise please look after all issues related to your lower abdomen, energy level, chest and heart.",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "Your professional efforts will be handsomely rewarded. Health wise please look after all issues related to your neck, throat and digestive system. You will come across a unique professional opportunity and your skill, knowledge and ability will be recognised and appreciated.",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		fortune: "You will be mingling with a number of professional powerful people and also old friends and colleagues. With the help of a friend you will be able to resolve a long standing problem. You could come across a new project or venture. Please watch your conduct, attitude, behaviour.",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: "There could be a few issues regarding your financial backing and flow of income that you got to deal with properly and carefully. You will come across some mega opportunities this week. There will be sudden opportunities, sudden travel to achieve income but whatever you do please don’t rush into anything or be aggressive.",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "There is somewhat of a balance of positivity and negativity along with sudden gain, sudden hiccups, sudden rise in prestige and status etc. However if your attitude is not right you might end up creating a huge problem for yourself.",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune: "With the help of a professional friend you will be able to resolve a number of your problems and complications. There will be some differences of opinion with your loved ones but you will have their support.",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune: "Your ability will be recognised and appreciated and a number of your problems will be resolved. You will develop and establish professional contacts and will be mingling with a number of professional powerful people who will also appreciate and recognise your skill set and capability.",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune: "There will be a rise in your name, fame, status and the more creative, active and dynamic you will be the more will your success level be. There will be financial and professional opportunities and prosperity along with a lot of mingling in the professional world. Your expenditure and running around will be both quite high.",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune: "There will be fruitless running around, hassles, out of control behaviour, anger and mentally you could feel stressed and disappointed. After the 14th or 15th you will come across a few complications that you will be able to resolve if you are fully focused.",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune: "	Your expenditure will be quite high and you will come across challenges, complications and accomplishments at the same time. The more you challenge yourself the better will be the rewards. Your struggle will be rewarded handsomely as long as you are focused, driven, determined and display no out of control behaviour or throw tantrums.",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune: "Despite setbacks, tensions and financial losses go with the flow. This is not the time to pick a fight with anyone or involve in unnecessary conflicts. Watch your temper and be careful of your spending, conduct and dealing.",
		image: "img/virgo.jpg"
	}
]

// function to determine user horoscope, function fires on user clicking button line 24 index.html
function horoscope() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata")
	// confirm the element exists and what value the user submits
	console.log(userdata)
	console.log("users value is: " + userdata.value)
	
	// loop through zodiac array one item at a time 
	for(i = 0; i < zodiac.length; i = i + 1) {
		// check what the users value is before using it in a condition
		console.log("users value lowercase is: " + userdata.value.toLowerCase())
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign)

		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran")
			// check some values in the console before updating HTML
			console.log("users typed in: " + userdata.value)
			console.log("current image value is: " + zodiac[i].image)
			console.log("current fortune value is: " + zodiac[i].fortune)

			// get element with id="userSign" and change the text to the user input
			document.getElementById("yourSign").textContent = userdata.value
			// get element with id="icon" and change source attribute to current zodiac image path
			document.getElementById("icon").src = zodiac[i].image
			// // get element with id="yourHoroscope" and change the content to this concatenated string
			document.getElementById("yourHoroscope").textContent = "The stars see the following: " + zodiac[i].fortune

			// stop the function because we found a match and added the data to the screen!!!
			return
		}
		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct zodiac sign")
		// if no match is found, do opposite of above, mostly clearing content and images
		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!"
		document.getElementById("yourHoroscope").textContent = ""
		document.getElementById("icon").src = ""
	}
}


new WOW().init();

