function status(request, response) {
  response.status(200).json({ status: "Funcionando" });
}

export default status;
