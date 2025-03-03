const { exec } = require("child_process");

module.exports.getSubnet = (req, res) => {
  const { networkClass, ip, cidr } = req.query;

  // Build command string
  let subnetCommand = `python ${__dirname}/subnetting/subnet.py --net_class ${networkClass} --ip ${ip} --cidr /${cidr} --json=True`;

  // Execute subnetting cli tool
  exec(subnetCommand, (err, stdout) => {
    if (err) {
      console.log("exec error: " + err);
      return res
        .status(400)
        .json({ status: "fail", message: "failed to calc subnet" });
    }

    // Parse subnet output
    subnetData = JSON.parse(stdout);

    // Response
    res.status(200).json({
      status: "success",
      data: {
        subnetData,
      },
    });
  });
};
