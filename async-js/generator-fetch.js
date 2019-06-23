// Utilty for generator function
const url = 'https://api.github.com/users/';
const username = 'praveen-me'

const genUtilityFunc = (gn) => {
	const it = gn();
	return function() {
		return it.next(...arguments);
	}
};

const fetchData = (url) => {
	fetch(url)
		.then(res => res.json())
		.then(data => run(data))
}

const run = genUtilityFunc(function *() {
	const userData = yield fetchData(`${url}${username}`);
	const userFollowerData = yield fetchData(`${url}${username}/followers`);
	const userFollowingData = yield fetchData(`${url}${username}/following`);
	const data = {
		user: userData,
		userFollowers: userFollowerData,
		userFollowing: userFollowingData
	}

	console.log(data, "data");
	yield;
});

run();