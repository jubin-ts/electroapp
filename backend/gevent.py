import json
import redis
import asyncio
import websockets
import random
from datetime import datetime, timedelta

# Redis server URL and channel name
redis_url = 'redis://localhost:6379/0'
channel = 'test'

# Create a Redis connection
connection = redis.StrictRedis.from_url(redis_url, decode_responses=True)

# Create a Pub/Sub object
pubsub = connection.pubsub(ignore_subscribe_messages=False)

# Subscribe to the channel
pubsub.subscribe(channel)

async def main(websocket, path):
    # Initialize time counter
    time_count = 0

    for i in range(60):
        # Increment time counter by 1 second
        time_count += 1

        # Convert time counter to "HH:MM:SS" format
        formatted_time = str(timedelta(seconds=time_count))

        # Generate random value
        random_value = random.choice([0, 1, -1])

        # Create dictionary object
        message = {
            "time": formatted_time,
            "value": random_value
        }

        # Send serialized JSON data through WebSocket
        await websocket.send(json.dumps(message))

        # Wait for 1 second before sending next message
        await asyncio.sleep(1)

    # for item in pubsub.listen():
    #     message = item['data']

    #     # Skip the subscription confirmation message
    #     if type(message) != int:
    #         # Deserialize the JSON data from Redis
    #         message = json.loads(message)
    #         print(f"Received message: {message}")
            
    #         # Send the serialized JSON data through the WebSocket
    #         await websocket.send(json.dumps(message))

# Create the WebSocket server
start_server = websockets.serve(main, "localhost", 5000)

print("WebSocket server started")
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
