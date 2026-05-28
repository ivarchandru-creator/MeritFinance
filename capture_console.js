const wsUrl = process.env.AGY_BROWSER_WS_URL;
if (!wsUrl) {
  console.error("AGY_BROWSER_WS_URL is not set!");
  process.exit(1);
}

const ws = new WebSocket(wsUrl);

ws.onopen = () => {
  console.log("Connected to browser. Creating new page...");
  // Create a new target (page)
  ws.send(JSON.stringify({
    id: 1,
    method: "Target.createTarget",
    params: { url: "about:blank" }
  }));
};

let targetId = null;
let sessionId = null;

ws.onmessage = async (event) => {
  const data = JSON.parse(event.data);
  
  console.log("Received response:", JSON.stringify(data));
  if (data.id === 1) {
    if (data.error) {
      console.error("Create target failed:", data.error);
      ws.close();
      return;
    }
    targetId = data.result.targetId;
    console.log("Target created:", targetId);
    
    // Attach to the target
    ws.send(JSON.stringify({
      id: 2,
      method: "Target.attachToTarget",
      params: { targetId: targetId, flatten: true }
    }));
  }
  else if (data.id === 2) {
    sessionId = data.result.sessionId;
    console.log("Attached to target with session:", sessionId);
    
    // Enable Runtime (console logs)
    ws.send(JSON.stringify({
      id: 3,
      method: "Runtime.enable",
      sessionId: sessionId
    }));
    
    // Enable Page
    ws.send(JSON.stringify({
      id: 4,
      method: "Page.enable",
      sessionId: sessionId
    }));
  }
  else if (data.id === 4) {
    // Navigate to the local file
    const fileUrl = "file:///c:/Users/ivarc/Desktop/finance%202/index.html";
    console.log("Navigating to:", fileUrl);
    ws.send(JSON.stringify({
      id: 5,
      method: "Page.navigate",
      params: { url: fileUrl },
      sessionId: sessionId
    }));
    
    // Set a timeout to close and exit after 4 seconds
    setTimeout(() => {
      console.log("Timeout reached. Closing target and connection...");
      ws.send(JSON.stringify({
        id: 6,
        method: "Target.closeTarget",
        params: { targetId: targetId }
      }));
      setTimeout(() => ws.close(), 500);
    }, 4000);
  }
  else if (data.method === "Runtime.consoleAPICalled" || data.method === "Runtime.exceptionThrown") {
    console.log("\n--- BROWSER MESSAGE ---");
    console.log(JSON.stringify(data.params, null, 2));
    console.log("-----------------------\n");
  }
  else {
    // Other event messages or responses
    if (data.method) {
      // Print other methods if we want, or just ignore
    }
  }
};

ws.onerror = (err) => {
  console.error("WS Error:", err);
};

ws.onclose = () => {
  console.log("WS Closed");
};
