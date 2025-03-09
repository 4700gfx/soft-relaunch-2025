const axios = require('axios');

const getMerch = async (req, res) => {
    try {
        const response = await axios.get('https://api.printful.com/store/products', {
            headers: {
                'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`
            }
        });

        const products = response.data.result.map(product => ({
            id: product.id,
            title: product.name,
            price: `$${product.sync_variants[0].retail_price}`, // Get price of first variant
            category: 'merch', // You can customize categories based on product type
            img: product.thumbnail_url
        }));

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching merch items", error: error.message });
    }
};

module.exports = { getMerch };
