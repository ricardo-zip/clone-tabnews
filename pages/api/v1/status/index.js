function status(request, response) {
  response.status(200).json({ status: "api online" });
}

export default status;
