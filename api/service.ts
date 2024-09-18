export const getLatestNews = async () => {
    const response = await fetch("http://localhost:3000/latestNews", {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    const data = await response.json();
    
    console.log(data); // This should show the updated data now
    return data;
  };
  