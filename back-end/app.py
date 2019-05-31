import models


DEBUG = True
PORT = 8000


if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)