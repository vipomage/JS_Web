exress
mongodb
mongoose
http
body-parser
pug
pug-cli
typings --global {
    typings install mongodb
    typings install express
    typings
}
 -global / -g (global installation)
 --save (save to package.json)
 - E  (exact)

C:\Program Files\MongoDB\Server\3.4\bin\mongod   (mongoDB run)

app.use('/public', express.static(path.join(__dirname, '../public')));  (Static files)
app.use(bodyParser.urlencoded({ extended: true }));                     (form parser)
app.use(fileUploader());                                                (file uploader)


.prettierrc {
              "singleQuote": true,
              "semi": true,
              "tabWidth": 2
            }