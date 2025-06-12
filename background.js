// Define a constant for the name of the policy.
// This name must exactly match the policy key configured by your IT administrator.
const POLICY_NAME = 'Init';

// Listen for messages coming from other parts of the extension (e.g., popup.js).
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Check if the message type is a request for the admin password.
    if (request.type === "GET_INIT_VALUE") {
        console.log("Background script received request for initValue.");
        chrome.storage.managed.get(POLICY_NAME, (items) => {
            const initValue = items[POLICY_NAME];
            if (initValue) {
                console.log("initValue found via policy:", initValue);
                sendResponse({ initValue: initValue });
            } else {
                console.log("No initValue found.");
                // sendResponse({ adminPassword: null }); // Explicitly send null if not found
                
                // Simulating an admin-defined password.
                const initValue = "0"; // This is your mock default password

                // Send the (simulated) default password back to the popup.
                sendResponse({ initValue: initValue });
            }
        });
        
        return true;
    }
});