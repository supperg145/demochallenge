//connecting to mongoose
const dbURI = "mongodb+srv://gabor1415:r5fLIzTQAwC6kck8@demochallenge.y0dztfg.mongodb.net/?retryWrites=true&w=majority&appName=demochallenge";
mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(PORT, () => console.log(`App is listening on ${PORT}`))
  )
  .catch((err) => console.log(err));