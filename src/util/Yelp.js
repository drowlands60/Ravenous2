const apiKey = 'bZVxC9T3LjSM_wbbb2e1yTco8Fd-VSUmmwgEecphiE7E4HggQoc72v3q4GXJHbsfafRZ5srvKO9LkjfLm19cvOjjrQ7lczWniMPO9BNYLeSBKWPFNHeDxNQAw0J8X3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url,
                        map: `https://maps.google.com/?ll=${business.coordinates.latitude},${business.coordinates.longitude}`
                    }));
                }
        }); 
    }

};

export default Yelp;
