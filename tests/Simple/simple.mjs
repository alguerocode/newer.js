// Import simple function
import { simple } from "../../lib/main.js";

// Start the timer
console.time("web");

/**
 * Create and start a server 
 * @type {AsyncGenerator<import("http").ServerResponse, void, unknown>}
 */
const server = simple();

// End the timer and log the time that `simple` needs to start the server 
console.timeEnd("web");

// Handle requests from server
for await (const response of server) 
    response.end(response.req.url);

// 0.5ms is the average speed
// 0.237ms is the fastest speed 
// 1.016ms is the slowest speed