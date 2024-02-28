// submit button
document.querySelector('#submit').addEventListener('click', function (e) {
    // console.log('submit');
    findUser();
});

//function to find User
const findUser = () => {
    let user = document.querySelector('#userInput').value;
    let gitId = user;
    // console.log(gitId);

    // All the code for api fetch
    let requestUrl = `https://api.github.com/users/${gitId}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);

            //function to update card with data
            updateCard(data);
        }
    };
    xhr.send();
};

const updateCard = (data) => {

    //photo URL
    const picUrl = data.avatar_url;
    document.querySelector('#profile').src = picUrl;

    //followers
    const followers = data.followers;
    document.querySelector('#followers').innerText = followers;

    //name
    const name = data.name;
    document.querySelector('#name').innerText = name;

    //contact
    const contact = data.html_url;
    document.querySelector('#contact').href = contact;

    //bio
    const bio = data.bio;
    document.querySelector('.bio').innerText = bio;

    // Show Card
    let x = document.querySelector('.card');
    x.style.display = "block";
};
