// function for getting url
let url = 'https://api.github.com/users/praveen-me';

function get(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response); 
      } else {
        reject(Error(xhr.statusText));
      }
    };
  
    xhr.onerror = () => {
      reject(Error("Error fetching data."));
    };
    
    xhr.send();
  })
}

get(url).then(res => {
  console.log(JSON.parse(res));
});