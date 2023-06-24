async function getCatImage() {
    try {
      const catContainer = document.getElementById('cat-container');
      catContainer.classList.add('loading');
  
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      const imageUrl = data[0].url;
  
      catContainer.classList.remove('loading');
      return imageUrl;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  
  function displayCatImage(imageUrl) {
    const catImage = document.getElementById('cat-image');
    catImage.src = imageUrl;
  }
  
  function setupCatButton() {
    const getCatBtn = document.getElementById('get-cat-btn');
    getCatBtn.addEventListener('click', async () => {
      try {
        const imageUrl = await getCatImage();
        displayCatImage(imageUrl);
      } catch (error) {
        console.error('Error:', error);
      }
    });
  }
  
  setupCatButton();
  