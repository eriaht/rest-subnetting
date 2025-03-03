# Subnet Calculator API

This repository contains a Node.js API that calculates subnet information by executing a Python script.

![Subnet Calculator UI](https://github.com/eriaht/rest-subnetting/blob/main/public/screenshot.png)


## Features
- Accepts network class, IP, and CIDR as query parameters
- Executes a Python script to compute subnet information
- Returns results in JSON format

## Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version recommended)
- Python (with necessary dependencies for subnet calculations)

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## File Structure
```
.
├── controllers.js    # Handles subnet calculations in the getSubnet function
├── subnetting/
│   ├── subnet.py     # Python script for subnet calculations
├── server.js         # Entry point of the API
└── package.json      # Project dependencies
```

## Usage
Start the server:
```sh
npm start
```

### API Endpoint
**GET** `/api/v1/subnetting`

#### Query Parameters:
| Parameter     | Type   | Description |
|--------------|--------|-------------|
| networkClass | string | Network class (e.g., A, B, C) |
| ip           | string | IP address |
| cidr         | number | CIDR notation |

#### Example Request
```
GET /api/v1/subnetting?networkClass=C&ip=192.168.1.1&cidr=24
```

#### Response Format
```json
{
  "status": "success",
  "data": {
    "subnetData": {
      "class_addr": "C",
      "ip": "192.168.1.1",
      "mask": "255.255.255.0",
      "cidr": "/24",
      "net_addr": "192.168.1.0",
      "broadcast": "192.168.1.255",
      "first_host": "192.168.1.1",
      "last_host": "192.168.1.254",
      "hosts": 256,
      "usable_hosts": 254,
      "possible_networks": 1
    }
  }
}
```

