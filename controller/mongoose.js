//connecting to mongoose
const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(PORT, () => console.log(`App is listening on ${PORT}`))
  )
  .catch((err) => console.log(err));