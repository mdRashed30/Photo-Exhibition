const btnE1 = document.getElementById('btn');
const errorMessageE1 = document.getElementById('errorMessage');
const galleryE1 = document.getElementById('gallery')

async function fetchImage() {
    const inputValue = document.getElementById("input").value;
    if (inputValue > 10 || inputValue < 1) {
        errorMessageE1.style.display = 'block';
        return
    }

    imgs = " ";

    try {
        await fetch(
            `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=ChzrpPyrs1W0UPWJeI78VOnjyEZO5JdJX2tHQJhJNTg`
        )
            .then((res) =>
                res.json().then((data) => {
                    if (data) {
                        data.forEach((pic) => {
                            imgs += `
                            <img src=${pic.urls.small} alr ='image'/>
                            `;
                            galleryE1.style.display = 'block';
                            galleryE1.innerHTML = imgs;
                        })
                    }
                })
            );
        errorMessageE1.style.display = 'none';
    } catch (error) {
        errorMessageE1.style.display = 'block';
        errorMessageE1.innerHTML = "An error happened, try it later"

    }

}

btnE1.addEventListener('click', fetchImage);