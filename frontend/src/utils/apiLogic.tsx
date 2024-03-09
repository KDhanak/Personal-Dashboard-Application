// Get the production value from the environment variables
const production_value = process.env.REACT_PRODUCTION_VALUE;

// Initialize an empty API URL variable
var apiURL = "";

// Function to determine the API URL based on the production environment
const apiUrlFunction = () => {
    // Check if the production value is 'true'
    if (production_value === 'true') {
        // Set the API URL to an empty string for production
        apiURL = "";
    } else {
        // Set the API URL to the local development server address
        apiURL = "http://localhost:8000";
    }

    // Return the determined API URL
    return apiURL;
};

// Export the apiUrlFunction for use in other modules
export default apiUrlFunction;
