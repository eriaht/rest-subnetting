# Subnet Calculator API

This repository contains a Node.js API that calculates subnet information by executing a Python script.

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

## Usage
Start the server:
```sh
npm start
```

### API Endpoint
**GET** `/getSubnet`

#### Query Parameters:
| Parameter     | Type   | Description |
|--------------|--------|-------------|
| networkClass | string | Network class (e.g., A, B, C) |
| ip           | string | IP address |
| cidr         | number | CIDR notation |

#### Example Request
```
GET /getSubnet?networkClass=C&ip=192.168.1.1&cidr=24
```

#### Response Format
```json
{
  "status": "success",
  "data": {
    "subnetData": { ... }
  }
}
```

## File Structure
```
.
├── controllers/
│   ├── getSubnet.js  # Handles subnet calculations
├── subnetting/
│   ├── subnet.py     # Python script for subnet calculations
├── server.js         # Entry point of the API
└── package.json      # Project dependencies
```

