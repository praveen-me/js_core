const url = 'https://api.github.com/users/';
const username = 'praveen-me';

// Utilty for generator function
// Takes a function a make a genetor out of it with calling
// And returns a function that can be called with the arguments that are passed in for taking benifit of them;
const genUtilityFunc = (gn) => {
	const it = gn();
	return function() {
		return it.next(...arguments);
	}
};

// Fetch data with the particular url
const fetchData = (url) => {
	fetch(url)
		.then(res => res.json())
		.then(data => run(data))
}

// Takes the whole function that contains all the business logic that is going to get data asynchronously and returns an object back
const run = genUtilityFunc(function *() {
	const userData = yield fetchData(`${url}${username}`);
	const userFollowerData = yield fetchData(`${url}${username}/followers`);
	const userFollowingData = yield fetchData(`${url}${username}/following`);

	const data = {
		user: userData,
		userFollowers: userFollowerData,
		userFollowing: userFollowingData 
	}
	console.log(data);
	return data;
});

run();